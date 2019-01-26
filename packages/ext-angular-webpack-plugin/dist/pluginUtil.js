"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._constructor = _constructor;
exports._afterCompile = _afterCompile;
exports._compilation = _compilation;
exports.emit = emit;
exports._prepareForBuild = _prepareForBuild;
exports._buildExtBundle = _buildExtBundle;
exports.executeAsync = executeAsync;
exports.log = log;
exports.logv = logv;
exports._getApp = _getApp;
exports._getVersions = _getVersions;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//**********
function _constructor(options) {
  const path = require('path');

  const fs = require('fs');

  var thisVars = {};
  var thisOptions = {};
  var plugin = {};

  if (options.framework == undefined) {
    thisVars.pluginErrors = [];
    thisVars.pluginErrors.push('webpack config: framework parameter on ext-webpack-plugin is not defined - values: react, angular, extjs');
    plugin.vars = thisVars;
    return plugin;
  }

  const validateOptions = require('schema-utils'); // console.log('111')
  // console.log(options)


  validateOptions(require(`./${options.framework}Util`).getValidateOptions(), options, ''); // console.log('222')
  // console.log(options)

  thisVars = require(`./${options.framework}Util`).getDefaultVars();
  thisVars.framework = options.framework;

  switch (thisVars.framework) {
    case 'extjs':
      thisVars.pluginName = 'ext-webpack-plugin';
      break;

    case 'react':
      thisVars.pluginName = 'ext-react-webpack-plugin';
      break;

    case 'angular':
      thisVars.pluginName = 'ext-angular-webpack-plugin';
      break;

    default:
      thisVars.pluginName = 'ext-webpack-plugin';
  } //fix fashion dist problem


  const fsx = require('fs-extra');

  var toFashionDist = path.resolve(process.cwd(), `node_modules/@sencha/cmd/dist/js/node_modules/fashion/dist`);
  logv(options, `toFashionDist ${toFashionDist}`);

  if (!fs.existsSync(toFashionDist)) {
    logv(options, `copy`);
    var fromFashionDist = path.join(process.cwd(), 'node_modules/@sencha/' + thisVars.pluginName + '/fashion/dist/');
    fsx.copySync(fromFashionDist, toFashionDist);
  } else {
    logv(options, `no copy of fashion`);
  }

  thisVars.app = require('./pluginUtil')._getApp();
  logv(options, `pluginName - ${thisVars.pluginName}`);
  logv(options, `thisVars.app - ${thisVars.app}`);
  const rc = fs.existsSync(`.ext-${thisVars.framework}rc`) && JSON.parse(fs.readFileSync(`.ext-${thisVars.framework}rc`, 'utf-8')) || {};
  thisOptions = _objectSpread({}, require(`./${thisVars.framework}Util`).getDefaultOptions(), options, rc);
  logv(options, `thisOptions - ${JSON.stringify(thisOptions)}`);

  if (thisOptions.environment == 'production') {
    thisVars.production = true;
    thisOptions.genProdData = options.genProdData;

    if (!options.genProdData && options.framework == 'angular' && options.prodFileReplacementConfig.length) {
      options.prodFileReplacementConfig.forEach(value => {
        if (typeof value === 'object' && value.replace && value.with) {
          let filePath = path.resolve(process.cwd(), value.with);

          if (fs.existsSync(filePath)) {
            const data = fsx.readFileSync(filePath).toString();
            filePath = path.resolve(process.cwd(), value.replace);
            if (fs.existsSync(filePath)) fsx.writeFileSync(filePath, data, 'utf-8', () => {
              return;
            });
          }
        } else {
          compilation.errors.push('Invalid prodFileReplacementConfig');
        }
      });
    }
  } else {
    thisVars.production = false;
  }

  log(require('./pluginUtil')._getVersions(thisVars.app, thisVars.pluginName, thisVars.framework));
  log(thisVars.app + 'Building for ' + thisOptions.environment);
  log(thisVars.app + 'Generating production data: ' + thisOptions.genProdData);
  plugin.vars = thisVars;
  plugin.options = thisOptions;

  require('./pluginUtil').logv(options, 'FUNCTION constructor (end)');

  return plugin;
} //**********


function _afterCompile(compiler, compilation, vars, options) {
  require('./pluginUtil').logv(options, 'FUNCTION _afterCompile');
} //**********


function _compilation(compiler, compilation, vars, options) {
  try {
    require('./pluginUtil').logv(options, 'FUNCTION _compilation');

    const fsx = require('fs-extra');

    const fs = require('fs');

    const mkdirp = require('mkdirp');

    const path = require('path');

    const extAngularPackage = '@sencha/ext-angular';
    const extAngularFolder = 'ext-angular-prod';
    const extAngularModule = 'ext-angular.module';
    const pathToExtAngularModern = path.resolve(process.cwd(), `src/app/${extAngularFolder}`);
    var extComponents = [];

    if (vars.production) {
      //logv(options, `ext-compilation: production is ` + vars.production)
      if (options.framework == 'angular') {
        if (options.genProdData) {
          // Reads all ext components source code to get all ext-components list
          const packagePath = path.resolve(process.cwd(), 'node_modules/' + extAngularPackage);
          var files = fsx.readdirSync(`${packagePath}/lib`);
          files.forEach(fileName => {
            if (fileName && fileName.substr(0, 4) == 'ext-') {
              var end = fileName.substr(4).indexOf('.component');

              if (end >= 0) {
                extComponents.push(fileName.substring(4, end + 4));
              }
            }
          }); // Update `app.module.ts` to include prod data folder.

          try {
            const appModulePath = path.resolve(process.cwd(), 'src/app/app.module.ts');
            var js = fsx.readFileSync(appModulePath).toString();
            var newJs = js.replace(`import { ExtAngularModule } from '@sencha/ext-angular'`, `import { ExtAngularModule } from './ext-angular-prod/ext-angular.module'`);
            fsx.writeFileSync(appModulePath, newJs, 'utf-8', () => {
              return;
            }); // Create the prod folder if does not exists.

            if (!fs.existsSync(pathToExtAngularModern)) {
              mkdirp.sync(pathToExtAngularModern);

              const t = require('./artifacts').extAngularModule('', '', '');

              fsx.writeFileSync(`${pathToExtAngularModern}/${extAngularModule}.ts`, t, 'utf-8', () => {
                return;
              });
            }
          } catch (e) {
            console.log(e);
            compilation.errors.push('buildModule hook in _compilation: ' + e);
            return [];
          }
        }
      }

      compilation.hooks.succeedModule.tap(`ext-succeed-module`, module => {
        //require('./pluginUtil').logv(options, 'HOOK succeedModule')
        if (module.resource && !module.resource.match(/node_modules/)) {
          vars.deps = [...(vars.deps || []), ...require(`./${vars.framework}Util`).extractFromSource(module, options, compilation, extComponents)];
        } // if (extComponents.length && module.resource && (module.resource.match(/\.(j|t)sx?$/) ||
        // options.framework == 'angular' && module.resource.match(/\.html$/)) &&
        // !module.resource.match(/node_modules/) && !module.resource.match(`/ext-{$options.framework}/build/`)) {
        //   vars.deps = [...(vars.deps || []), ...require(`./${vars.framework}Util`).extractFromSource(module, options, compilation, extComponents)]
        // }

      });

      if (options.framework == 'angular' && options.genProdData) {
        compilation.hooks.finishModules.tap(`ext-finish-modules`, modules => {
          require('./pluginUtil').logv(options, 'HOOK finishModules');

          const string = 'Ext.create({\"xtype\":\"';
          vars.deps.forEach(code => {
            var index = code.indexOf(string);

            if (index >= 0) {
              code = code.substring(index + string.length);
              var end = code.indexOf('\"');
              vars.usedExtComponents.push(code.substr(0, end));
            }
          });
          vars.usedExtComponents = [...new Set(vars.usedExtComponents)];
          const readFrom = path.resolve(process.cwd(), 'node_modules/' + extAngularPackage + '/src/lib');
          const writeToPath = pathToExtAngularModern;
          const baseContent = fsx.readFileSync(`${readFrom}/base.ts`).toString();
          fsx.writeFileSync(`${writeToPath}/base.ts`, baseContent, 'utf-8', () => {
            return;
          });
          var writeToPathWritten = false;
          var moduleVars = {
            imports: '',
            exports: '',
            declarations: ''
          };
          vars.usedExtComponents.forEach(xtype => {
            var capclassname = xtype.charAt(0).toUpperCase() + xtype.replace(/-/g, "_").slice(1);
            moduleVars.imports = moduleVars.imports + `import { Ext${capclassname}Component } from './ext-${xtype}.component';\n`;
            moduleVars.exports = moduleVars.exports + `    Ext${capclassname}Component,\n`;
            moduleVars.declarations = moduleVars.declarations + `    Ext${capclassname}Component,\n`;
            var classFile = `/ext-${xtype}.component.ts`;
            const contents = fsx.readFileSync(`${readFrom}${classFile}`).toString();
            fsx.writeFileSync(`${writeToPath}${classFile}`, contents, 'utf-8', () => {
              return;
            });
            writeToPathWritten = true;
          });

          if (writeToPathWritten) {
            var t = require('./artifacts').extAngularModule(moduleVars.imports, moduleVars.exports, moduleVars.declarations);

            fsx.writeFileSync(`${writeToPath}/${extAngularModule}.ts`, t, 'utf-8', () => {
              return;
            });
          }
        });
      }
    }

    if (options.framework != 'extjs' && !options.genProdData) {
      compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tap(`ext-html-generation`, data => {
        logv(options, 'HOOK ext-html-generation');

        const path = require('path');

        var outputPath = '';

        if (compiler.options.devServer) {
          if (compiler.outputPath === '/') {
            outputPath = path.join(compiler.options.devServer.contentBase, outputPath);
          } else {
            if (compiler.options.devServer.contentBase == undefined) {
              outputPath = 'build';
            } else {
              outputPath = '';
            }
          }
        } else {
          outputPath = 'build';
        }

        outputPath = outputPath.replace(process.cwd(), '').trim();
        var jsPath = path.join(outputPath, vars.extPath, 'ext.js');
        var cssPath = path.join(outputPath, vars.extPath, 'ext.css');
        data.assets.js.unshift(jsPath);
        data.assets.css.unshift(cssPath);
        log(vars.app + `Adding ${jsPath} and ${cssPath} to index.html`);
      });
    } else {
      logv(options, 'skipped HOOK ext-html-generation');
    }
  } catch (e) {
    require('./pluginUtil').logv(options, e);

    compilation.errors.push('_compilation: ' + e);
  }
} //**********


function emit(_x, _x2, _x3, _x4, _x5) {
  return _emit.apply(this, arguments);
} //**********


function _emit() {
  _emit = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(compiler, compilation, vars, options, callback) {
    var log, logv, app, framework, path, _buildExtBundle, outputPath, command, parms;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          log = require('./pluginUtil').log;
          logv = require('./pluginUtil').logv;
          logv(options, 'FUNCTION emit');
          app = vars.app;
          framework = vars.framework;
          path = require('path');
          _buildExtBundle = require('./pluginUtil')._buildExtBundle;
          outputPath = path.join(compiler.outputPath, vars.extPath);

          if (compiler.outputPath === '/' && compiler.options.devServer) {
            outputPath = path.join(compiler.options.devServer.contentBase, outputPath);
          }

          logv(options, 'outputPath: ' + outputPath);
          logv(options, 'framework: ' + framework);

          if (!(options.emit == true)) {
            _context.next = 29;
            break;
          }

          if (framework != 'extjs') {
            _prepareForBuild(app, vars, options, outputPath, compilation);
          } else {
            if (options.framework == 'angular' && !options.genProdData) {
              require(`./${framework}Util`)._prepareForBuild(app, vars, options, outputPath, compilation);
            } else {
              require(`./${framework}Util`)._prepareForBuild(app, vars, options, outputPath, compilation);
            }
          }

          command = '';

          if (options.watch == 'yes' && vars.production == false) {
            command = 'watch';
          } else {
            command = 'build';
          }

          if (!(vars.rebuild == true)) {
            _context.next = 26;
            break;
          }

          parms = [];

          if (options.profile == undefined || options.profile == '' || options.profile == null) {
            if (command == 'build') {
              parms = ['app', command, options.environment];
            } else {
              parms = ['app', command, '--web-server', 'false', options.environment];
            }
          } else {
            if (command == 'build') {
              parms = ['app', command, options.profile, options.environment];
            } else {
              parms = ['app', command, '--web-server', 'false', options.profile, options.environment];
            }
          }

          if (!(vars.watchStarted == false)) {
            _context.next = 23;
            break;
          }

          _context.next = 22;
          return _buildExtBundle(app, compilation, outputPath, parms, options);

        case 22:
          vars.watchStarted = true;

        case 23:
          callback();
          _context.next = 27;
          break;

        case 26:
          callback();

        case 27:
          _context.next = 31;
          break;

        case 29:
          log(`${vars.app}FUNCTION emit not run`);
          callback();

        case 31:
          _context.next = 38;
          break;

        case 33:
          _context.prev = 33;
          _context.t0 = _context["catch"](0);

          require('./pluginUtil').logv(options, _context.t0);

          compilation.errors.push('emit: ' + _context.t0);
          callback();

        case 38:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[0, 33]]);
  }));
  return _emit.apply(this, arguments);
}

function _prepareForBuild(app, vars, options, output, compilation) {
  try {
    logv(options, 'FUNCTION _prepareForBuild');

    const rimraf = require('rimraf');

    const mkdirp = require('mkdirp');

    const fsx = require('fs-extra');

    const fs = require('fs');

    const path = require('path');

    var packages = options.packages;
    var toolkit = options.toolkit;
    var theme = options.theme;
    theme = theme || (toolkit === 'classic' ? 'theme-triton' : 'theme-material');
    logv(options, 'firstTime: ' + vars.firstTime);

    if (vars.firstTime) {
      rimraf.sync(output);
      mkdirp.sync(output);

      const buildXML = require('./artifacts').buildXML;

      const createAppJson = require('./artifacts').createAppJson;

      const createWorkspaceJson = require('./artifacts').createWorkspaceJson;

      const createJSDOMEnvironment = require('./artifacts').createJSDOMEnvironment;

      fs.writeFileSync(path.join(output, 'build.xml'), buildXML(vars.production, options, output), 'utf8');
      fs.writeFileSync(path.join(output, 'app.json'), createAppJson(theme, packages, toolkit, options, output), 'utf8');
      fs.writeFileSync(path.join(output, 'jsdom-environment.js'), createJSDOMEnvironment(options, output), 'utf8');
      fs.writeFileSync(path.join(output, 'workspace.json'), createWorkspaceJson(options, output), 'utf8');

      if (vars.framework == 'angular') {
        //because of a problem with colorpicker
        if (fs.existsSync(path.join(process.cwd(), 'ext-angular/ux/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/');
          var toPath = path.join(output);
          fsx.copySync(fromPath, toPath);
          log(app + 'Copying (ux) ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }

        if (fs.existsSync(path.join(process.cwd(), 'ext-angular/packages/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/');
          var toPath = path.join(output);
          fsx.copySync(fromPath, toPath);
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }

        if (fs.existsSync(path.join(process.cwd(), 'ext-angular/overrides/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/');
          var toPath = path.join(output);
          fsx.copySync(fromPath, toPath);
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }
      }

      if (vars.framework == 'react') {
        if (fs.existsSync(path.join(process.cwd(), 'ext-react/packages/'))) {
          var fromPath = path.join(process.cwd(), 'ext-react/packages/');
          var toPath = path.join(output, 'packages');
          fsx.copySync(fromPath, toPath);
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }

        if (fs.existsSync(path.join(process.cwd(), 'ext-react/overrides/'))) {
          var fromPath = path.join(process.cwd(), 'ext-react/overrides/');
          var toPath = path.join(output, 'overrides');
          fsx.copySync(fromPath, toPath);
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }
      }

      if (fs.existsSync(path.join(process.cwd(), 'resources/'))) {
        var fromResources = path.join(process.cwd(), 'resources/');
        var toResources = path.join(output, '../resources');
        fsx.copySync(fromResources, toResources);
        log(app + 'Copying ' + fromResources.replace(process.cwd(), '') + ' to: ' + toResources.replace(process.cwd(), ''));
      } // if (fs.existsSync(path.join(process.cwd(),'resources/'))) {
      //   var fromResources = path.join(process.cwd(), 'resources/')
      //   var toResources = path.join(output, 'resources')
      //   fsx.copySync(fromResources, toResources)
      //   log(app + '6Copying ' + fromResources.replace(process.cwd(), '') + ' to: ' + toResources.replace(process.cwd(), ''))
      // }


      if (fs.existsSync(path.join(process.cwd(), 'packages/'))) {
        var fromPackages = path.join(process.cwd(), 'packages/');
        var toPackages = path.join(output, 'packages');
        fsx.copySync(fromPackages, toPackages);
        log(app + 'Copying ' + fromPackages.replace(process.cwd(), '') + ' to: ' + toPackages.replace(process.cwd(), ''));
      }

      if (fs.existsSync(path.join(process.cwd(), 'overrides/'))) {
        var fromPath = path.join(process.cwd(), 'overrides/');
        var toPath = path.join(output, 'overrides');
        fsx.copySync(fromPath, toPath);
        log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
      }
    }

    vars.firstTime = false;
    var js = '';

    if (vars.production) {
      if (!vars.deps.includes('Ext.require("Ext.layout.*");\n')) {
        vars.deps.push('Ext.require("Ext.layout.*");\n');
      }

      js = vars.deps.join(';\n');
    } else {
      js = 'Ext.require("Ext.*")';
    }

    if (vars.manifest === null || js !== vars.manifest) {
      vars.manifest = js;
      const manifest = path.join(output, 'manifest.js');
      fs.writeFileSync(manifest, js, 'utf8');
      vars.rebuild = true;
      var bundleDir = output.replace(process.cwd(), '');

      if (bundleDir.trim() == '') {
        bundleDir = './';
      }

      log(app + 'Building Ext bundle at: ' + bundleDir);
    } else {
      vars.rebuild = false;
      log(app + 'Ext rebuild NOT needed');
    }
  } catch (e) {
    require('./pluginUtil').logv(options, e);

    compilation.errors.push('_prepareForBuild: ' + e);
  }
} //**********


function _buildExtBundle(app, compilation, outputPath, parms, options) {
  try {
    const fs = require('fs');

    const logv = require('./pluginUtil').logv;

    logv(options, 'FUNCTION _buildExtBundle');
    let sencha;

    try {
      sencha = require('@sencha/cmd');
    } catch (e) {
      sencha = 'sencha';
    }

    if (fs.existsSync(sencha)) {
      logv(options, 'sencha folder exists');
    } else {
      logv(options, 'sencha folder DOES NOT exist');
    }

    return new Promise((resolve, reject) => {
      const onBuildDone = () => {
        logv(options, 'onBuildDone');
        resolve();
      };

      var opts = {
        cwd: outputPath,
        silent: true,
        stdio: 'pipe',
        encoding: 'utf-8'
      };
      executeAsync(app, sencha, parms, opts, compilation, options).then(function () {
        onBuildDone();
      }, function (reason) {
        reject(reason);
      });
    });
  } catch (e) {
    console.log('e');

    require('./pluginUtil').logv(options, e);

    compilation.errors.push('_buildExtBundle: ' + e);
    callback();
  }
} //**********


function executeAsync(_x6, _x7, _x8, _x9, _x10, _x11) {
  return _executeAsync.apply(this, arguments);
}

function _executeAsync() {
  _executeAsync = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(app, command, parms, opts, compilation, options) {
    var DEFAULT_SUBSTRS, substrings, chalk, crossSpawn, log;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          //const DEFAULT_SUBSTRS = ['[INF] Loading', '[INF] Processing', '[LOG] Fashion build complete', '[ERR]', '[WRN]', "[INF] Server", "[INF] Writing", "[INF] Loading Build", "[INF] Waiting", "[LOG] Fashion waiting"];
          DEFAULT_SUBSTRS = ["[INF] xServer", '[INF] Loading', '[INF] Append', '[INF] Processing', '[INF] Processing Build', '[LOG] Fashion build complete', '[ERR]', '[WRN]', "[INF] Writing", "[INF] Loading Build", "[INF] Waiting", "[LOG] Fashion waiting"];
          substrings = DEFAULT_SUBSTRS;
          chalk = require('chalk');
          crossSpawn = require('cross-spawn');
          log = require('./pluginUtil').log;
          logv(options, 'FUNCTION executeAsync');
          _context2.next = 9;
          return new Promise((resolve, reject) => {
            logv(options, `command - ${command}`);
            logv(options, `parms - ${parms}`);
            logv(options, `opts - ${JSON.stringify(opts)}`);
            let child = crossSpawn(command, parms, opts);
            child.on('close', (code, signal) => {
              logv(options, `on close: ` + code);

              if (code === 0) {
                resolve(0);
              } else {
                compilation.errors.push(new Error(code));
                resolve(0);
              }
            });
            child.on('error', error => {
              logv(options, `on error`);
              compilation.errors.push(error);
              resolve(0);
            });
            child.stdout.on('data', data => {
              var str = data.toString().replace(/\r?\n|\r/g, " ").trim();
              logv(options, `${str}`);

              if (data && data.toString().match(/waiting for changes\.\.\./)) {
                resolve(0);
              } else {
                if (substrings.some(function (v) {
                  return data.indexOf(v) >= 0;
                })) {
                  str = str.replace("[INF]", "");
                  str = str.replace("[LOG]", "");
                  str = str.replace(process.cwd(), '').trim();

                  if (str.includes("[ERR]")) {
                    compilation.errors.push(app + str.replace(/^\[ERR\] /gi, ''));
                    str = str.replace("[ERR]", `${chalk.red("[ERR]")}`);
                  }

                  log(`${app}${str}`);
                }
              }
            });
            child.stderr.on('data', data => {
              logv(options, `error on close: ` + data);
              var str = data.toString().replace(/\r?\n|\r/g, " ").trim();
              var strJavaOpts = "Picked up _JAVA_OPTIONS";
              var includes = str.includes(strJavaOpts);

              if (!includes) {
                console.log(`${app} ${chalk.red("[ERR]")} ${str}`);
              }
            });
          });

        case 9:
          _context2.next = 16;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);

          require('./pluginUtil').logv(options, _context2.t0);

          compilation.errors.push('executeAsync: ' + _context2.t0);
          callback();

        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this, [[0, 11]]);
  }));
  return _executeAsync.apply(this, arguments);
}

function log(s) {
  require('readline').cursorTo(process.stdout, 0);

  try {
    process.stdout.clearLine();
  } catch (e) {}

  process.stdout.write(s);
  process.stdout.write('\n');
}

function logv(options, s) {
  if (options.verbose == 'yes') {
    require('readline').cursorTo(process.stdout, 0);

    try {
      process.stdout.clearLine();
    } catch (e) {}

    process.stdout.write(`-verbose: ${s}`);
    process.stdout.write('\n');
  }
}

function _getApp() {
  var chalk = require('chalk');

  var prefix = ``;

  const platform = require('os').platform();

  if (platform == 'darwin') {
    prefix = `ℹ ｢ext｣:`;
  } else {
    prefix = `i [ext]:`;
  }

  return `${chalk.green(prefix)} `;
}

function _getVersions(app, pluginName, frameworkName) {
  const path = require('path');

  const fs = require('fs');

  var v = {};
  var pluginPath = path.resolve(process.cwd(), 'node_modules/@sencha', pluginName);
  var pluginPkg = fs.existsSync(pluginPath + '/package.json') && JSON.parse(fs.readFileSync(pluginPath + '/package.json', 'utf-8')) || {};
  v.pluginVersion = pluginPkg.version;
  v._resolved = pluginPkg._resolved;

  if (v._resolved == undefined) {
    v.edition = `Commercial`;
  } else {
    if (-1 == v._resolved.indexOf('community')) {
      v.edition = `Commercial`;
    } else {
      v.edition = `Community`;
    }
  }

  var webpackPath = path.resolve(process.cwd(), 'node_modules/webpack');
  var webpackPkg = fs.existsSync(webpackPath + '/package.json') && JSON.parse(fs.readFileSync(webpackPath + '/package.json', 'utf-8')) || {};
  v.webpackVersion = webpackPkg.version;
  var extPath = path.resolve(process.cwd(), 'node_modules/@sencha/ext');
  var extPkg = fs.existsSync(extPath + '/package.json') && JSON.parse(fs.readFileSync(extPath + '/package.json', 'utf-8')) || {};
  v.extVersion = extPkg.sencha.version;
  var cmdPath = path.resolve(process.cwd(), `node_modules/@sencha/cmd`);
  var cmdPkg = fs.existsSync(cmdPath + '/package.json') && JSON.parse(fs.readFileSync(cmdPath + '/package.json', 'utf-8')) || {};
  v.cmdVersion = cmdPkg.version_full;

  if (v.cmdVersion == undefined) {
    var cmdPath = path.resolve(process.cwd(), `node_modules/@sencha/${pluginName}/node_modules/@sencha/cmd`);
    var cmdPkg = fs.existsSync(cmdPath + '/package.json') && JSON.parse(fs.readFileSync(cmdPath + '/package.json', 'utf-8')) || {};
    v.cmdVersion = cmdPkg.version_full;
  }

  var frameworkInfo = '';

  if (frameworkName != undefined && frameworkName != 'extjs') {
    var frameworkPath = '';

    if (frameworkName == 'react') {
      frameworkPath = path.resolve(process.cwd(), 'node_modules/react');
    }

    if (frameworkName == 'angular') {
      frameworkPath = path.resolve(process.cwd(), 'node_modules/@angular/core');
    }

    var frameworkPkg = fs.existsSync(frameworkPath + '/package.json') && JSON.parse(fs.readFileSync(frameworkPath + '/package.json', 'utf-8')) || {};
    v.frameworkVersion = frameworkPkg.version;
    frameworkInfo = ', ' + frameworkName + ' v' + v.frameworkVersion;
  }

  return app + 'ext-webpack-plugin v' + v.pluginVersion + ', Ext JS v' + v.extVersion + ' ' + v.edition + ' Edition, Sencha Cmd v' + v.cmdVersion + ', webpack v' + v.webpackVersion + frameworkInfo;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImdlblByb2REYXRhIiwicHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZyIsImxlbmd0aCIsImZvckVhY2giLCJ2YWx1ZSIsInJlcGxhY2UiLCJ3aXRoIiwiZmlsZVBhdGgiLCJkYXRhIiwidG9TdHJpbmciLCJ3cml0ZUZpbGVTeW5jIiwiY29tcGlsYXRpb24iLCJlcnJvcnMiLCJsb2ciLCJfZ2V0VmVyc2lvbnMiLCJfYWZ0ZXJDb21waWxlIiwiY29tcGlsZXIiLCJfY29tcGlsYXRpb24iLCJta2RpcnAiLCJleHRBbmd1bGFyUGFja2FnZSIsImV4dEFuZ3VsYXJGb2xkZXIiLCJleHRBbmd1bGFyTW9kdWxlIiwicGF0aFRvRXh0QW5ndWxhck1vZGVybiIsImV4dENvbXBvbmVudHMiLCJwYWNrYWdlUGF0aCIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJmaWxlTmFtZSIsInN1YnN0ciIsImVuZCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJhcHBNb2R1bGVQYXRoIiwianMiLCJuZXdKcyIsInN5bmMiLCJ0IiwiZSIsImNvbnNvbGUiLCJob29rcyIsInN1Y2NlZWRNb2R1bGUiLCJ0YXAiLCJtb2R1bGUiLCJyZXNvdXJjZSIsIm1hdGNoIiwiZGVwcyIsImV4dHJhY3RGcm9tU291cmNlIiwiZmluaXNoTW9kdWxlcyIsIm1vZHVsZXMiLCJzdHJpbmciLCJjb2RlIiwiaW5kZXgiLCJ1c2VkRXh0Q29tcG9uZW50cyIsIlNldCIsInJlYWRGcm9tIiwid3JpdGVUb1BhdGgiLCJiYXNlQ29udGVudCIsIndyaXRlVG9QYXRoV3JpdHRlbiIsIm1vZHVsZVZhcnMiLCJpbXBvcnRzIiwiZXhwb3J0cyIsImRlY2xhcmF0aW9ucyIsInh0eXBlIiwiY2FwY2xhc3NuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNsYXNzRmlsZSIsImNvbnRlbnRzIiwiaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbiIsIm91dHB1dFBhdGgiLCJkZXZTZXJ2ZXIiLCJjb250ZW50QmFzZSIsInRyaW0iLCJqc1BhdGgiLCJleHRQYXRoIiwiY3NzUGF0aCIsImFzc2V0cyIsInVuc2hpZnQiLCJjc3MiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsIndhdGNoU3RhcnRlZCIsIm91dHB1dCIsInJpbXJhZiIsInBhY2thZ2VzIiwidG9vbGtpdCIsInRoZW1lIiwiZmlyc3RUaW1lIiwiYnVpbGRYTUwiLCJjcmVhdGVBcHBKc29uIiwiY3JlYXRlV29ya3NwYWNlSnNvbiIsImNyZWF0ZUpTRE9NRW52aXJvbm1lbnQiLCJmcm9tUGF0aCIsInRvUGF0aCIsImZyb21SZXNvdXJjZXMiLCJ0b1Jlc291cmNlcyIsImZyb21QYWNrYWdlcyIsInRvUGFja2FnZXMiLCJpbmNsdWRlcyIsIm1hbmlmZXN0IiwiYnVuZGxlRGlyIiwic2VuY2hhIiwiUHJvbWlzZSIsInJlamVjdCIsIm9uQnVpbGREb25lIiwib3B0cyIsInNpbGVudCIsInN0ZGlvIiwiZW5jb2RpbmciLCJleGVjdXRlQXN5bmMiLCJ0aGVuIiwicmVhc29uIiwiREVGQVVMVF9TVUJTVFJTIiwic3Vic3RyaW5ncyIsImNoYWxrIiwiY3Jvc3NTcGF3biIsImNoaWxkIiwib24iLCJzaWduYWwiLCJFcnJvciIsImVycm9yIiwic3Rkb3V0Iiwic3RyIiwic29tZSIsInYiLCJyZWQiLCJzdGRlcnIiLCJzdHJKYXZhT3B0cyIsInMiLCJjdXJzb3JUbyIsImNsZWFyTGluZSIsIndyaXRlIiwidmVyYm9zZSIsInByZWZpeCIsInBsYXRmb3JtIiwiZ3JlZW4iLCJmcmFtZXdvcmtOYW1lIiwicGx1Z2luUGF0aCIsInBsdWdpblBrZyIsInBsdWdpblZlcnNpb24iLCJ2ZXJzaW9uIiwiX3Jlc29sdmVkIiwiZWRpdGlvbiIsIndlYnBhY2tQYXRoIiwid2VicGFja1BrZyIsIndlYnBhY2tWZXJzaW9uIiwiZXh0UGtnIiwiZXh0VmVyc2lvbiIsImNtZFBhdGgiLCJjbWRQa2ciLCJjbWRWZXJzaW9uIiwidmVyc2lvbl9mdWxsIiwiZnJhbWV3b3JrSW5mbyIsImZyYW1ld29ya1BhdGgiLCJmcmFtZXdvcmtQa2ciLCJmcmFtZXdvcmtWZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxTQUFTQSxZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUNwQyxRQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLFFBQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDLElBQUQsQ0FBbEI7O0FBRUEsTUFBSUUsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFFQSxNQUFJTixPQUFPLENBQUNPLFNBQVIsSUFBcUJDLFNBQXpCLEVBQW9DO0FBQ2xDSixJQUFBQSxRQUFRLENBQUNLLFlBQVQs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LEdBQUdwTSxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTJCLG9CQUEzQixDQUFoQjtBQUNEOztBQUNELFFBQUlnSyxhQUFhLElBQUksU0FBckIsRUFBZ0M7QUFDOUJpQixNQUFBQSxhQUFhLEdBQUdwTSxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTJCLDRCQUEzQixDQUFoQjtBQUNEOztBQUNELFFBQUlrTCxZQUFZLEdBQUluTSxFQUFFLENBQUNtQixVQUFILENBQWMrSyxhQUFhLEdBQUMsZUFBNUIsS0FBZ0R4SyxJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLEVBQUUsQ0FBQzRCLFlBQUgsQ0FBZ0JzSyxhQUFhLEdBQUMsZUFBOUIsRUFBK0MsT0FBL0MsQ0FBWCxDQUFoRCxJQUF1SCxFQUEzSTtBQUNBN0IsSUFBQUEsQ0FBQyxDQUFDK0IsZ0JBQUYsR0FBcUJELFlBQVksQ0FBQ2QsT0FBbEM7QUFDQVksSUFBQUEsYUFBYSxHQUFHLE9BQU9oQixhQUFQLEdBQXVCLElBQXZCLEdBQThCWixDQUFDLENBQUMrQixnQkFBaEQ7QUFDRDs7QUFDRCxTQUFPN0ssR0FBRyxHQUFHLHNCQUFOLEdBQStCOEksQ0FBQyxDQUFDZSxhQUFqQyxHQUFpRCxZQUFqRCxHQUFnRWYsQ0FBQyxDQUFDdUIsVUFBbEUsR0FBK0UsR0FBL0UsR0FBcUZ2QixDQUFDLENBQUNrQixPQUF2RixHQUFpRyx3QkFBakcsR0FBNEhsQixDQUFDLENBQUMwQixVQUE5SCxHQUEySSxhQUEzSSxHQUEySjFCLENBQUMsQ0FBQ3FCLGNBQTdKLEdBQThLTyxhQUFyTDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuICB2YXIgdGhpc1ZhcnMgPSB7fVxuICB2YXIgdGhpc09wdGlvbnMgPSB7fVxuICB2YXIgcGx1Z2luID0ge31cblxuICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzID0gW11cbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMucHVzaCgnd2VicGFjayBjb25maWc6IGZyYW1ld29yayBwYXJhbWV0ZXIgb24gZXh0LXdlYnBhY2stcGx1Z2luIGlzIG5vdCBkZWZpbmVkIC0gdmFsdWVzOiByZWFjdCwgYW5ndWxhciwgZXh0anMnKVxuICAgIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgICByZXR1cm4gcGx1Z2luXG4gIH1cblxuICBjb25zdCB2YWxpZGF0ZU9wdGlvbnMgPSByZXF1aXJlKCdzY2hlbWEtdXRpbHMnKVxuICAvLyBjb25zb2xlLmxvZygnMTExJylcbiAgLy8gY29uc29sZS5sb2cob3B0aW9ucylcbiAgdmFsaWRhdGVPcHRpb25zKHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0VmFsaWRhdGVPcHRpb25zKCksIG9wdGlvbnMsICcnKVxuICAvLyBjb25zb2xlLmxvZygnMjIyJylcbiAgLy8gY29uc29sZS5sb2cob3B0aW9ucylcblxuICB0aGlzVmFycyA9IHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdFZhcnMoKVxuICB0aGlzVmFycy5mcmFtZXdvcmsgPSBvcHRpb25zLmZyYW1ld29ya1xuICBzd2l0Y2godGhpc1ZhcnMuZnJhbWV3b3JrKSB7XG4gICAgY2FzZSAnZXh0anMnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWFjdCc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1yZWFjdC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FuZ3VsYXInOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtYW5ndWxhci13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgfVxuXG4gIC8vZml4IGZhc2hpb24gZGlzdCBwcm9ibGVtXG4gIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgdmFyIHRvRmFzaGlvbkRpc3QgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kL2Rpc3QvanMvbm9kZV9tb2R1bGVzL2Zhc2hpb24vZGlzdGApXG4gIGxvZ3Yob3B0aW9ucywgYHRvRmFzaGlvbkRpc3QgJHt0b0Zhc2hpb25EaXN0fWApXG4gIGlmICghZnMuZXhpc3RzU3luYyh0b0Zhc2hpb25EaXN0KSkge1xuICAgIGxvZ3Yob3B0aW9ucywgYGNvcHlgKVxuICAgIHZhciBmcm9tRmFzaGlvbkRpc3QgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy9Ac2VuY2hhLycgKyB0aGlzVmFycy5wbHVnaW5OYW1lICsgJy9mYXNoaW9uL2Rpc3QvJylcbiAgICBmc3guY29weVN5bmMoZnJvbUZhc2hpb25EaXN0LCB0b0Zhc2hpb25EaXN0KVxuICB9XG4gIGVsc2Uge1xuICAgIGxvZ3Yob3B0aW9ucywgYG5vIGNvcHkgb2YgZmFzaGlvbmApXG4gIH1cblxuICB0aGlzVmFycy5hcHAgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fZ2V0QXBwKClcbiAgbG9ndihvcHRpb25zLCBgcGx1Z2luTmFtZSAtICR7dGhpc1ZhcnMucGx1Z2luTmFtZX1gKVxuICBsb2d2KG9wdGlvbnMsIGB0aGlzVmFycy5hcHAgLSAke3RoaXNWYXJzLmFwcH1gKVxuXG4gIGNvbnN0IHJjID0gKGZzLmV4aXN0c1N5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhgLmV4dC0ke3RoaXNWYXJzLmZyYW1ld29ya31yY2AsICd1dGYtOCcpKSB8fCB7fSlcbiAgdGhpc09wdGlvbnMgPSB7IC4uLnJlcXVpcmUoYC4vJHt0aGlzVmFycy5mcmFtZXdvcmt9VXRpbGApLmdldERlZmF1bHRPcHRpb25zKCksIC4uLm9wdGlvbnMsIC4uLnJjIH1cbiAgbG9ndihvcHRpb25zLCBgdGhpc09wdGlvbnMgLSAke0pTT04uc3RyaW5naWZ5KHRoaXNPcHRpb25zKX1gKVxuXG5cbiAgaWYgKHRoaXNPcHRpb25zLmVudmlyb25tZW50ID09ICdwcm9kdWN0aW9uJykge1xuICAgIHRoaXNWYXJzLnByb2R1Y3Rpb24gPSB0cnVlXG4gICAgdGhpc09wdGlvbnMuZ2VuUHJvZERhdGEgPSBvcHRpb25zLmdlblByb2REYXRhXG4gICAgaWYgKCFvcHRpb25zLmdlblByb2REYXRhICYmIG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBvcHRpb25zLnByb2RGaWxlUmVwbGFjZW1lbnRDb25maWcubGVuZ3RoKSB7XG4gICAgICBvcHRpb25zLnByb2RGaWxlUmVwbGFjZW1lbnRDb25maWcuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5yZXBsYWNlICYmIHZhbHVlLndpdGgpIHtcbiAgICAgICAgICBsZXQgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgdmFsdWUud2l0aClcbiAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBmc3gucmVhZEZpbGVTeW5jKGZpbGVQYXRoKS50b1N0cmluZygpXG4gICAgICAgICAgICBmaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCB2YWx1ZS5yZXBsYWNlKVxuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKVxuICAgICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgZGF0YSwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnSW52YWxpZCBwcm9kRmlsZVJlcGxhY2VtZW50Q29uZmlnJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZWxzZSBcbiAgICB7IHRoaXNWYXJzLnByb2R1Y3Rpb24gPSBmYWxzZSB9XG5cbiAgbG9nKHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRWZXJzaW9ucyh0aGlzVmFycy5hcHAsIHRoaXNWYXJzLnBsdWdpbk5hbWUsIHRoaXNWYXJzLmZyYW1ld29yaykpXG4gIGxvZyh0aGlzVmFycy5hcHAgKyAnQnVpbGRpbmcgZm9yICcgKyB0aGlzT3B0aW9ucy5lbnZpcm9ubWVudClcbiAgbG9nKHRoaXNWYXJzLmFwcCArICdHZW5lcmF0aW5nIHByb2R1Y3Rpb24gZGF0YTogJyArIHRoaXNPcHRpb25zLmdlblByb2REYXRhKVxuXG4gIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgcGx1Z2luLm9wdGlvbnMgPSB0aGlzT3B0aW9uc1xuICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdGVU5DVElPTiBjb25zdHJ1Y3RvciAoZW5kKScpXG4gIHJldHVybiBwbHVnaW5cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2FmdGVyQ29tcGlsZShjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLCAnRlVOQ1RJT04gX2FmdGVyQ29tcGlsZScpXG59XG5cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIF9jb21waWxhdGlvbicpXG5cbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbiAgICBjb25zdCBleHRBbmd1bGFyUGFja2FnZSA9ICdAc2VuY2hhL2V4dC1hbmd1bGFyJ1xuICAgIGNvbnN0IGV4dEFuZ3VsYXJGb2xkZXIgPSAnZXh0LWFuZ3VsYXItcHJvZCdcbiAgICBjb25zdCBleHRBbmd1bGFyTW9kdWxlID0gJ2V4dC1hbmd1bGFyLm1vZHVsZSdcbiAgICBjb25zdCBwYXRoVG9FeHRBbmd1bGFyTW9kZXJuID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGBzcmMvYXBwLyR7ZXh0QW5ndWxhckZvbGRlcn1gKVxuICAgIHZhciBleHRDb21wb25lbnRzID0gW11cblxuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIC8vbG9ndihvcHRpb25zLCBgZXh0LWNvbXBpbGF0aW9uOiBwcm9kdWN0aW9uIGlzIGAgKyB2YXJzLnByb2R1Y3Rpb24pXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmdlblByb2REYXRhKSB7XG4gICAgICAgICAgLy8gUmVhZHMgYWxsIGV4dCBjb21wb25lbnRzIHNvdXJjZSBjb2RlIHRvIGdldCBhbGwgZXh0LWNvbXBvbmVudHMgbGlzdFxuICAgICAgICAgIGNvbnN0IHBhY2thZ2VQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvJyArIGV4dEFuZ3VsYXJQYWNrYWdlKVxuICAgICAgICAgIHZhciBmaWxlcyA9IGZzeC5yZWFkZGlyU3luYyhgJHtwYWNrYWdlUGF0aH0vbGliYClcbiAgICAgICAgICBmaWxlcy5mb3JFYWNoKChmaWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbGVOYW1lICYmIGZpbGVOYW1lLnN1YnN0cigwLCA0KSA9PSAnZXh0LScpIHtcbiAgICAgICAgICAgICAgdmFyIGVuZCA9IGZpbGVOYW1lLnN1YnN0cig0KS5pbmRleE9mKCcuY29tcG9uZW50JylcbiAgICAgICAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZXh0Q29tcG9uZW50cy5wdXNoKGZpbGVOYW1lLnN1YnN0cmluZyg0LCBlbmQgKyA0KSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICAvLyBVcGRhdGUgYGFwcC5tb2R1bGUudHNgIHRvIGluY2x1ZGUgcHJvZCBkYXRhIGZvbGRlci5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXBwTW9kdWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2FwcC9hcHAubW9kdWxlLnRzJylcbiAgICAgICAgICAgIHZhciBqcyA9IGZzeC5yZWFkRmlsZVN5bmMoYXBwTW9kdWxlUGF0aCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgdmFyIG5ld0pzID0ganMucmVwbGFjZShcbiAgICAgICAgICAgICAgYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICdAc2VuY2hhL2V4dC1hbmd1bGFyJ2AsXG4gICAgICAgICAgICAgIGBpbXBvcnQgeyBFeHRBbmd1bGFyTW9kdWxlIH0gZnJvbSAnLi9leHQtYW5ndWxhci1wcm9kL2V4dC1hbmd1bGFyLm1vZHVsZSdgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYXBwTW9kdWxlUGF0aCwgbmV3SnMsICd1dGYtOCcsICgpPT57cmV0dXJufSlcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBwcm9kIGZvbGRlciBpZiBkb2VzIG5vdCBleGlzdHMuXG4gICAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGF0aFRvRXh0QW5ndWxhck1vZGVybikpIHtcbiAgICAgICAgICAgICAgbWtkaXJwLnN5bmMocGF0aFRvRXh0QW5ndWxhck1vZGVybilcbiAgICAgICAgICAgICAgY29uc3QgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZHVsZSgnJywgJycsICcnKVxuICAgICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHtwYXRoVG9FeHRBbmd1bGFyTW9kZXJufS8ke2V4dEFuZ3VsYXJNb2R1bGV9LnRzYCwgdCwgJ3V0Zi04JywgKCkgPT4ge3JldHVybn0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnYnVpbGRNb2R1bGUgaG9vayBpbiBfY29tcGlsYXRpb246ICcgKyBlKVxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCBtb2R1bGUgPT4ge1xuICAgICAgICAvL3JlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0hPT0sgc3VjY2VlZE1vZHVsZScpXG4gICAgICAgIGlmIChtb2R1bGUucmVzb3VyY2UgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvbm9kZV9tb2R1bGVzLykpIHtcbiAgICAgICAgICB2YXJzLmRlcHMgPSBbLi4uKHZhcnMuZGVwcyB8fCBbXSksIC4uLnJlcXVpcmUoYC4vJHt2YXJzLmZyYW1ld29ya31VdGlsYCkuZXh0cmFjdEZyb21Tb3VyY2UobW9kdWxlLCBvcHRpb25zLCBjb21waWxhdGlvbiwgZXh0Q29tcG9uZW50cyldXG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGV4dENvbXBvbmVudHMubGVuZ3RoICYmIG1vZHVsZS5yZXNvdXJjZSAmJiAobW9kdWxlLnJlc291cmNlLm1hdGNoKC9cXC4oanx0KXN4PyQvKSB8fFxuICAgICAgICAvLyBvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgbW9kdWxlLnJlc291cmNlLm1hdGNoKC9cXC5odG1sJC8pKSAmJlxuICAgICAgICAvLyAhbW9kdWxlLnJlc291cmNlLm1hdGNoKC9ub2RlX21vZHVsZXMvKSAmJiAhbW9kdWxlLnJlc291cmNlLm1hdGNoKGAvZXh0LXskb3B0aW9ucy5mcmFtZXdvcmt9L2J1aWxkL2ApKSB7XG4gICAgICAgIC8vICAgdmFycy5kZXBzID0gWy4uLih2YXJzLmRlcHMgfHwgW10pLCAuLi5yZXF1aXJlKGAuLyR7dmFycy5mcmFtZXdvcmt9VXRpbGApLmV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpXVxuICAgICAgICAvLyB9XG4gICAgICB9KVxuXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG9wdGlvbnMuZ2VuUHJvZERhdGEpIHtcbiAgICAgICAgY29tcGlsYXRpb24uaG9va3MuZmluaXNoTW9kdWxlcy50YXAoYGV4dC1maW5pc2gtbW9kdWxlc2AsIG1vZHVsZXMgPT4ge1xuICAgICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0hPT0sgZmluaXNoTW9kdWxlcycpXG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gJ0V4dC5jcmVhdGUoe1xcXCJ4dHlwZVxcXCI6XFxcIidcbiAgICAgICAgICB2YXJzLmRlcHMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNvZGUuaW5kZXhPZihzdHJpbmcpXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICBjb2RlID0gY29kZS5zdWJzdHJpbmcoaW5kZXggKyBzdHJpbmcubGVuZ3RoKVxuICAgICAgICAgICAgICB2YXIgZW5kID0gY29kZS5pbmRleE9mKCdcXFwiJylcbiAgICAgICAgICAgICAgdmFycy51c2VkRXh0Q29tcG9uZW50cy5wdXNoKGNvZGUuc3Vic3RyKDAsIGVuZCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB2YXJzLnVzZWRFeHRDb21wb25lbnRzID0gWy4uLm5ldyBTZXQodmFycy51c2VkRXh0Q29tcG9uZW50cyldXG4gICAgICAgICAgY29uc3QgcmVhZEZyb20gPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy8nICsgZXh0QW5ndWxhclBhY2thZ2UgKyAnL3NyYy9saWInKVxuICAgICAgICAgIGNvbnN0IHdyaXRlVG9QYXRoID0gcGF0aFRvRXh0QW5ndWxhck1vZGVyblxuXG4gICAgICAgICAgY29uc3QgYmFzZUNvbnRlbnQgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfS9iYXNlLnRzYCkudG9TdHJpbmcoKVxuICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofS9iYXNlLnRzYCwgYmFzZUNvbnRlbnQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICBcbiAgICAgICAgICB2YXIgd3JpdGVUb1BhdGhXcml0dGVuID0gZmFsc2VcbiAgICAgICAgICB2YXIgbW9kdWxlVmFycyA9IHtcbiAgICAgICAgICAgIGltcG9ydHM6ICcnLFxuICAgICAgICAgICAgZXhwb3J0czogJycsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhcnMudXNlZEV4dENvbXBvbmVudHMuZm9yRWFjaCh4dHlwZSA9PiB7XG4gICAgICAgICAgICB2YXIgY2FwY2xhc3NuYW1lID0geHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB4dHlwZS5yZXBsYWNlKC8tL2csIFwiX1wiKS5zbGljZSgxKVxuICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzID0gbW9kdWxlVmFycy5pbXBvcnRzICsgYGltcG9ydCB7IEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCB9IGZyb20gJy4vZXh0LSR7eHR5cGV9LmNvbXBvbmVudCc7XFxuYFxuICAgICAgICAgICAgbW9kdWxlVmFycy5leHBvcnRzID0gbW9kdWxlVmFycy5leHBvcnRzICsgYCAgICBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQsXFxuYFxuICAgICAgICAgICAgbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgPSBtb2R1bGVWYXJzLmRlY2xhcmF0aW9ucyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIHZhciBjbGFzc0ZpbGUgPSBgL2V4dC0ke3h0eXBlfS5jb21wb25lbnQudHNgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cmVhZEZyb219JHtjbGFzc0ZpbGV9YCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9JHtjbGFzc0ZpbGV9YCwgY29udGVudHMsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICAgIHdyaXRlVG9QYXRoV3JpdHRlbiA9IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmICh3cml0ZVRvUGF0aFdyaXR0ZW4pIHtcbiAgICAgICAgICAgIHZhciB0ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5leHRBbmd1bGFyTW9kdWxlKFxuICAgICAgICAgICAgICBtb2R1bGVWYXJzLmltcG9ydHMsIG1vZHVsZVZhcnMuZXhwb3J0cywgbW9kdWxlVmFycy5kZWNsYXJhdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofS8ke2V4dEFuZ3VsYXJNb2R1bGV9LnRzYCwgdCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgIT0gJ2V4dGpzJyAmJiAhb3B0aW9ucy5nZW5Qcm9kRGF0YSkge1xuXG4gICAgICBjb21waWxhdGlvbi5ob29rcy5odG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uLnRhcChgZXh0LWh0bWwtZ2VuZXJhdGlvbmAsKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgICAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgICAgIHZhciBvdXRwdXRQYXRoID0gJydcbiAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICAgICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJykge1xuICAgICAgICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0UGF0aCA9IG91dHB1dFBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgIHZhciBqc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmpzJylcbiAgICAgICAgdmFyIGNzc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmNzcycpXG4gICAgICAgIGRhdGEuYXNzZXRzLmpzLnVuc2hpZnQoanNQYXRoKVxuICAgICAgICBkYXRhLmFzc2V0cy5jc3MudW5zaGlmdChjc3NQYXRoKVxuICAgICAgICBsb2codmFycy5hcHAgKyBgQWRkaW5nICR7anNQYXRofSBhbmQgJHtjc3NQYXRofSB0byBpbmRleC5odG1sYClcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdza2lwcGVkIEhPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gZW1pdCcpXG4gICAgdmFyIGFwcCA9IHZhcnMuYXBwXG4gICAgdmFyIGZyYW1ld29yayA9IHZhcnMuZnJhbWV3b3JrXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgIGNvbnN0IF9idWlsZEV4dEJ1bmRsZSA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9idWlsZEV4dEJ1bmRsZVxuICAgIGxldCBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm91dHB1dFBhdGgsdmFycy5leHRQYXRoKVxuICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycgJiYgY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgfVxuICAgIGxvZ3Yob3B0aW9ucywnb3V0cHV0UGF0aDogJyArIG91dHB1dFBhdGgpXG4gICAgbG9ndihvcHRpb25zLCdmcmFtZXdvcms6ICcgKyBmcmFtZXdvcmspXG4gICAgaWYgKG9wdGlvbnMuZW1pdCA9PSB0cnVlKSB7XG4gICAgICBpZiAoZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgICAgX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgIW9wdGlvbnMuZ2VuUHJvZERhdGEpIHtcbiAgICAgICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVxdWlyZShgLi8ke2ZyYW1ld29ya31VdGlsYCkuX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21tYW5kID0gJydcbiAgICAgIGlmIChvcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICBjb21tYW5kID0gJ3dhdGNoJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbW1hbmQgPSAnYnVpbGQnXG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJzLnJlYnVpbGQgPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGFybXMgPSBbXVxuICAgICAgICBpZiAob3B0aW9ucy5wcm9maWxlID09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByb2ZpbGUgPT0gJycgfHwgb3B0aW9ucy5wcm9maWxlID09IG51bGwpIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFycy53YXRjaFN0YXJ0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICBhd2FpdCBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpXG4gICAgICAgICAgdmFycy53YXRjaFN0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2coYCR7dmFycy5hcHB9RlVOQ1RJT04gZW1pdCBub3QgcnVuYClcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdlbWl0OiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dCwgY29tcGlsYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9wcmVwYXJlRm9yQnVpbGQnKVxuICAgIGNvbnN0IHJpbXJhZiA9IHJlcXVpcmUoJ3JpbXJhZicpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgdmFyIHBhY2thZ2VzID0gb3B0aW9ucy5wYWNrYWdlc1xuICAgIHZhciB0b29sa2l0ID0gb3B0aW9ucy50b29sa2l0XG4gICAgdmFyIHRoZW1lID0gb3B0aW9ucy50aGVtZVxuXG4gICAgdGhlbWUgPSB0aGVtZSB8fCAodG9vbGtpdCA9PT0gJ2NsYXNzaWMnID8gJ3RoZW1lLXRyaXRvbicgOiAndGhlbWUtbWF0ZXJpYWwnKVxuICAgIGxvZ3Yob3B0aW9ucywnZmlyc3RUaW1lOiAnICsgdmFycy5maXJzdFRpbWUpXG4gICAgaWYgKHZhcnMuZmlyc3RUaW1lKSB7XG4gICAgICByaW1yYWYuc3luYyhvdXRwdXQpXG4gICAgICBta2RpcnAuc3luYyhvdXRwdXQpXG4gICAgICBjb25zdCBidWlsZFhNTCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuYnVpbGRYTUxcbiAgICAgIGNvbnN0IGNyZWF0ZUFwcEpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUFwcEpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZVdvcmtzcGFjZUpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZVdvcmtzcGFjZUpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUpTRE9NRW52aXJvbm1lbnRcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYnVpbGQueG1sJyksIGJ1aWxkWE1MKHZhcnMucHJvZHVjdGlvbiwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYXBwLmpzb24nKSwgY3JlYXRlQXBwSnNvbih0aGVtZSwgcGFja2FnZXMsIHRvb2xraXQsIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2pzZG9tLWVudmlyb25tZW50LmpzJyksIGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnd29ya3NwYWNlLmpzb24nKSwgY3JlYXRlV29ya3NwYWNlSnNvbihvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG5cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAnYW5ndWxhcicpIHtcblxuICAgICAgICAvL2JlY2F1c2Ugb2YgYSBwcm9ibGVtIHdpdGggY29sb3JwaWNrZXJcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3V4LycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgKHV4KSAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHZhcnMuZnJhbWV3b3JrID09ICdyZWFjdCcpICB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3QvcGFja2FnZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtcmVhY3QvcGFja2FnZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ3BhY2thZ2VzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9vdmVycmlkZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3Jlc291cmNlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21SZXNvdXJjZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Jlc291cmNlcy8nKVxuICAgICAgICB2YXIgdG9SZXNvdXJjZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAnLi4vcmVzb3VyY2VzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21SZXNvdXJjZXMsIHRvUmVzb3VyY2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAvLyAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgIC8vICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJ3Jlc291cmNlcycpXG4gICAgICAvLyAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgIC8vICAgbG9nKGFwcCArICc2Q29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIC8vIH1cbiAgICAgIFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3BhY2thZ2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhY2thZ2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcy8nKVxuICAgICAgICB2YXIgdG9QYWNrYWdlcyA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGFja2FnZXMsIHRvUGFja2FnZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdvdmVycmlkZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnb3ZlcnJpZGVzLycpXG4gICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmICghdmFycy5kZXBzLmluY2x1ZGVzKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKSkge1xuICAgICAgICB2YXJzLmRlcHMucHVzaCgnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJylcbiAgICAgIH1cbiAgICAgIGpzID0gdmFycy5kZXBzLmpvaW4oJztcXG4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBqcyA9ICdFeHQucmVxdWlyZShcIkV4dC4qXCIpJ1xuICAgIH1cbiAgICBpZiAodmFycy5tYW5pZmVzdCA9PT0gbnVsbCB8fCBqcyAhPT0gdmFycy5tYW5pZmVzdCkge1xuICAgICAgdmFycy5tYW5pZmVzdCA9IGpzXG4gICAgICBjb25zdCBtYW5pZmVzdCA9IHBhdGguam9pbihvdXRwdXQsICdtYW5pZmVzdC5qcycpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0LCBqcywgJ3V0ZjgnKVxuICAgICAgdmFycy5yZWJ1aWxkID0gdHJ1ZVxuICAgICAgdmFyIGJ1bmRsZURpciA9IG91dHB1dC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKVxuICAgICAgaWYgKGJ1bmRsZURpci50cmltKCkgPT0gJycpIHtidW5kbGVEaXIgPSAnLi8nfVxuICAgICAgbG9nKGFwcCArICdCdWlsZGluZyBFeHQgYnVuZGxlIGF0OiAnICsgYnVuZGxlRGlyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhcnMucmVidWlsZCA9IGZhbHNlXG4gICAgICBsb2coYXBwICsgJ0V4dCByZWJ1aWxkIE5PVCBuZWVkZWQnKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19wcmVwYXJlRm9yQnVpbGQ6ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfYnVpbGRFeHRCdW5kbGUnKVxuXG4gICAgbGV0IHNlbmNoYTsgdHJ5IHsgc2VuY2hhID0gcmVxdWlyZSgnQHNlbmNoYS9jbWQnKSB9IGNhdGNoIChlKSB7IHNlbmNoYSA9ICdzZW5jaGEnIH1cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhzZW5jaGEpKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgZXhpc3RzJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgRE9FUyBOT1QgZXhpc3QnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvbkJ1aWxkRG9uZSA9ICgpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdvbkJ1aWxkRG9uZScpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB2YXIgb3B0cyA9IHsgY3dkOiBvdXRwdXRQYXRoLCBzaWxlbnQ6IHRydWUsIHN0ZGlvOiAncGlwZScsIGVuY29kaW5nOiAndXRmLTgnfVxuICAgICAgZXhlY3V0ZUFzeW5jKGFwcCwgc2VuY2hhLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbigpIHsgb25CdWlsZERvbmUoKSB9LCBcbiAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7IHJlamVjdChyZWFzb24pIH1cbiAgICAgIClcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZScpXG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19idWlsZEV4dEJ1bmRsZTogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVBc3luYyAoYXBwLCBjb21tYW5kLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICAvL2NvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFsnW0lORl0gTG9hZGluZycsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFNlcnZlclwiLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICBjb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbXCJbSU5GXSB4U2VydmVyXCIsICdbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIEFwcGVuZCcsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcgQnVpbGQnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIHZhciBzdWJzdHJpbmdzID0gREVGQVVMVF9TVUJTVFJTIFxuICAgIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgICBjb25zdCBjcm9zc1NwYXduID0gcmVxdWlyZSgnY3Jvc3Mtc3Bhd24nKVxuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIGV4ZWN1dGVBc3luYycpXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbG9ndihvcHRpb25zLGBjb21tYW5kIC0gJHtjb21tYW5kfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBwYXJtcyAtICR7cGFybXN9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYG9wdHMgLSAke0pTT04uc3RyaW5naWZ5KG9wdHMpfWApXG4gICAgICBsZXQgY2hpbGQgPSBjcm9zc1NwYXduKGNvbW1hbmQsIHBhcm1zLCBvcHRzKVxuICAgICAgY2hpbGQub24oJ2Nsb3NlJywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBjbG9zZTogYCArIGNvZGUpIFxuICAgICAgICBpZihjb2RlID09PSAwKSB7IHJlc29sdmUoMCkgfVxuICAgICAgICBlbHNlIHsgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcihjb2RlKSApOyByZXNvbHZlKDApIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5vbignZXJyb3InLCAoZXJyb3IpID0+IHsgXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGVycm9yYCkgXG4gICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgICByZXNvbHZlKDApXG4gICAgICB9KVxuICAgICAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYCR7c3RyfWApXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcoKS5tYXRjaCgvd2FpdGluZyBmb3IgY2hhbmdlc1xcLlxcLlxcLi8pKSB7XG4gICAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdWJzdHJpbmdzLnNvbWUoZnVuY3Rpb24odikgeyByZXR1cm4gZGF0YS5pbmRleE9mKHYpID49IDA7IH0pKSB7IFxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbSU5GXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbTE9HXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhcIltFUlJdXCIpKSB7XG4gICAgICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGFwcCArIHN0ci5yZXBsYWNlKC9eXFxbRVJSXFxdIC9naSwgJycpKTtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbRVJSXVwiLCBgJHtjaGFsay5yZWQoXCJbRVJSXVwiKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nKGAke2FwcH0ke3N0cn1gKSBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBlcnJvciBvbiBjbG9zZTogYCArIGRhdGEpIFxuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgdmFyIHN0ckphdmFPcHRzID0gXCJQaWNrZWQgdXAgX0pBVkFfT1BUSU9OU1wiO1xuICAgICAgICB2YXIgaW5jbHVkZXMgPSBzdHIuaW5jbHVkZXMoc3RySmF2YU9wdHMpXG4gICAgICAgIGlmICghaW5jbHVkZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHthcHB9ICR7Y2hhbGsucmVkKFwiW0VSUl1cIil9ICR7c3RyfWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2V4ZWN1dGVBc3luYzogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9IFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKHMpIHtcbiAgcmVxdWlyZSgncmVhZGxpbmUnKS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMClcbiAgdHJ5IHtcbiAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICB9XG4gIGNhdGNoKGUpIHt9XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHMpXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9ndihvcHRpb25zLCBzKSB7XG4gIGlmIChvcHRpb25zLnZlcmJvc2UgPT0gJ3llcycpIHtcbiAgICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICAgIHRyeSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICAgIH1cbiAgICBjYXRjaChlKSB7fVxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGAtdmVyYm9zZTogJHtzfWApXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBcHAoKSB7XG4gIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgdmFyIHByZWZpeCA9IGBgXG4gIGNvbnN0IHBsYXRmb3JtID0gcmVxdWlyZSgnb3MnKS5wbGF0Zm9ybSgpXG4gIGlmIChwbGF0Zm9ybSA9PSAnZGFyd2luJykgeyBwcmVmaXggPSBg4oS5IO+9omV4dO+9ozpgIH1cbiAgZWxzZSB7IHByZWZpeCA9IGBpIFtleHRdOmAgfVxuICByZXR1cm4gYCR7Y2hhbGsuZ3JlZW4ocHJlZml4KX0gYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFZlcnNpb25zKGFwcCwgcGx1Z2luTmFtZSwgZnJhbWV3b3JrTmFtZSkge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB2ID0ge31cbiAgdmFyIHBsdWdpblBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEnLCBwbHVnaW5OYW1lKVxuICB2YXIgcGx1Z2luUGtnID0gKGZzLmV4aXN0c1N5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBsdWdpblBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LnBsdWdpblZlcnNpb24gPSBwbHVnaW5Qa2cudmVyc2lvblxuICB2Ll9yZXNvbHZlZCA9IHBsdWdpblBrZy5fcmVzb2x2ZWRcbiAgaWYgKHYuX3Jlc29sdmVkID09IHVuZGVmaW5lZCkge1xuICAgIHYuZWRpdGlvbiA9IGBDb21tZXJjaWFsYFxuICB9XG4gIGVsc2Uge1xuICAgIGlmICgtMSA9PSB2Ll9yZXNvbHZlZC5pbmRleE9mKCdjb21tdW5pdHknKSkge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW11bml0eWBcbiAgICB9XG4gIH1cblxuICB2YXIgd2VicGFja1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3dlYnBhY2snKVxuICB2YXIgd2VicGFja1BrZyA9IChmcy5leGlzdHNTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LndlYnBhY2tWZXJzaW9uID0gd2VicGFja1BrZy52ZXJzaW9uXG5cbiAgdmFyIGV4dFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEvZXh0JylcbiAgdmFyIGV4dFBrZyA9IChmcy5leGlzdHNTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5leHRWZXJzaW9uID0gZXh0UGtnLnNlbmNoYS52ZXJzaW9uXG5cbiAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuXG4gIGlmICh2LmNtZFZlcnNpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvJHtwbHVnaW5OYW1lfS9ub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICAgIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuICB9XG5cbiAgdmFyIGZyYW1ld29ya0luZm8gPSAnJ1xuICAgaWYgKGZyYW1ld29ya05hbWUgIT0gdW5kZWZpbmVkICYmIGZyYW1ld29ya05hbWUgIT0gJ2V4dGpzJykge1xuICAgIHZhciBmcmFtZXdvcmtQYXRoID0gJydcbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAncmVhY3QnKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9yZWFjdCcpXG4gICAgfVxuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdhbmd1bGFyJykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZScpXG4gICAgfVxuICAgIHZhciBmcmFtZXdvcmtQa2cgPSAoZnMuZXhpc3RzU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5mcmFtZXdvcmtWZXJzaW9uID0gZnJhbWV3b3JrUGtnLnZlcnNpb25cbiAgICBmcmFtZXdvcmtJbmZvID0gJywgJyArIGZyYW1ld29ya05hbWUgKyAnIHYnICsgdi5mcmFtZXdvcmtWZXJzaW9uXG4gIH1cbiAgcmV0dXJuIGFwcCArICdleHQtd2VicGFjay1wbHVnaW4gdicgKyB2LnBsdWdpblZlcnNpb24gKyAnLCBFeHQgSlMgdicgKyB2LmV4dFZlcnNpb24gKyAnICcgKyB2LmVkaXRpb24gKyAnIEVkaXRpb24sIFNlbmNoYSBDbWQgdicgKyB2LmNtZFZlcnNpb24gKyAnLCB3ZWJwYWNrIHYnICsgdi53ZWJwYWNrVmVyc2lvbiArIGZyYW1ld29ya0luZm9cbiB9Il19