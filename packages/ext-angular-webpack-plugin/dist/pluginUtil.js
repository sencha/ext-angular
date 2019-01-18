"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._constructor = _constructor;
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

  const validateOptions = require('schema-utils');

  validateOptions(require(`./${options.framework}Util`).getValidateOptions(), options, '');
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
  plugin.vars = thisVars;
  plugin.options = thisOptions;
  return plugin;
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
    var extComponents = [];

    if (vars.production) {
      logv(options, `ext-compilation: production is ` + vars.production);

      if (options.framework == 'angular') {
        // Reads all ext components source code to get all ext-components list
        var usedExtComponents = [];
        const packagePath = path.resolve(process.cwd(), 'node_modules/' + extAngularPackage);
        var files = fsx.readdirSync(`${packagePath}/lib`);
        files.forEach(fileName => {
          if (fileName && fileName.substr(0, 4) == 'ext-') {
            var end = fileName.substr(4).indexOf('.component');

            if (end >= 0) {
              extComponents.push(fileName.substring(4, end + 4));
            }
          }
        });

        if (options.genProdData) {
          // Update `app.module.ts` to include prod data folder.
          try {
            var rewrite = false;
            const appModulePath = path.resolve(process.cwd(), 'src/app/app.module.ts');
            var js = fsx.readFileSync(appModulePath).toString();
            var i = js.indexOf(extAngularPackage);
            i = js.substring(0, i).lastIndexOf('import');

            if (js.substr(i - 3, 3) !== '// ') {
              js = js.substring(0, i) + '\n // ' + js.substring(i);
              rewrite = true;
            }

            const pathToExtAngularModern = path.resolve(process.cwd(), `src/app/${extAngularFolder}`); // Create s the prod folder if does not exists.

            if (!fs.existsSync(pathToExtAngularModern)) {
              mkdirp.sync(pathToExtAngularModern);

              const t = require('./artifacts').extAngularModule('', '', '');

              fsx.writeFileSync(`${pathToExtAngularModern}/${extAngularModule}.ts`, t, 'utf-8', () => {
                return;
              });
              rewrite = true;
            }

            var j = js.indexOf(`./${extAngularFolder}/${extAngularModule}`);

            if (j < 0) {
              js = js.substring(0, i) + `import {ExtAngularModule} from './${extAngularFolder}/${extAngularModule}'\n` + js.substr(i);
              rewrite = true;
            } else {
              var i = js.substring(0, j).lastIndexOf('import');

              if (js.substr(i - 3, 3) == '// ') {
                js = js.substring(0, i - 3) + '\n' + js.substring(i);
                rewrite = true;
              } else if (js.substring(i - 2, 2) == '//') {
                js = js.substring(0, i - 2) + '\n' + js.substring(i);
                rewrite = true;
              }
            }

            if (rewrite) fsx.writeFileSync(appModulePath, js, 'utf-8', () => {
              return;
            });
          } catch (e) {
            console.log(e);
            compilation.errors.push('buildModule hook in _compilation: ' + e);
            return [];
          }
        }
      }

      compilation.hooks.succeedModule.tap(`ext-succeed-module`, module => {
        if (extComponents.length && module.resource && (module.resource.match(/\.(j|t)sx?$/) || options.framework == 'angular' && module.resource.match(/\.html$/)) && !module.resource.match(/node_modules/) && !module.resource.match(`/ext-{$options.framework}/dist/`)) {
          vars.deps = [...(vars.deps || []), ...require(`./${vars.framework}Util`).extractFromSource(module, options, compilation, extComponents)];
        }
      });

      if (options.framework == 'angular' && options.genProdData) {
        compilation.hooks.finishModules.tap(`ext-finish-modules`, modules => {
          const string = 'Ext.create({\"xtype\":\"';
          vars.deps.forEach(code => {
            var index = code.indexOf(string);

            if (index >= 0) {
              code = code.substring(index + string.length);
              var end = code.indexOf('\"');
              usedExtComponents.push(code.substr(0, end));
            }
          });
          usedExtComponents = [...new Set(usedExtComponents)];
          const readFrom = path.resolve(process.cwd(), 'node_modules/' + extAngularPackage + '/src/lib');
          const writeToPath = path.resolve(process.cwd(), `src/app/${extAngularFolder}`);
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
          usedExtComponents.forEach(xtype => {
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

    if (options.framework != 'extjs') {
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
            require(`./${framework}Util`)._prepareForBuild(app, vars, options, outputPath, compilation);
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
      if (!vars.deps.includes('Ext.require("Ext.layout.*");\n')) vars.deps.push('Ext.require("Ext.layout.*");\n');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImdlblByb2REYXRhIiwicHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZyIsImxlbmd0aCIsImZvckVhY2giLCJ2YWx1ZSIsInJlcGxhY2UiLCJ3aXRoIiwiZmlsZVBhdGgiLCJkYXRhIiwidG9TdHJpbmciLCJ3cml0ZUZpbGVTeW5jIiwiY29tcGlsYXRpb24iLCJlcnJvcnMiLCJsb2ciLCJfZ2V0VmVyc2lvbnMiLCJfY29tcGlsYXRpb24iLCJjb21waWxlciIsIm1rZGlycCIsImV4dEFuZ3VsYXJQYWNrYWdlIiwiZXh0QW5ndWxhckZvbGRlciIsImV4dEFuZ3VsYXJNb2R1bGUiLCJleHRDb21wb25lbnRzIiwidXNlZEV4dENvbXBvbmVudHMiLCJwYWNrYWdlUGF0aCIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJmaWxlTmFtZSIsInN1YnN0ciIsImVuZCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJyZXdyaXRlIiwiYXBwTW9kdWxlUGF0aCIsImpzIiwiaSIsImxhc3RJbmRleE9mIiwicGF0aFRvRXh0QW5ndWxhck1vZGVybiIsInN5bmMiLCJ0IiwiaiIsImUiLCJjb25zb2xlIiwiaG9va3MiLCJzdWNjZWVkTW9kdWxlIiwidGFwIiwibW9kdWxlIiwicmVzb3VyY2UiLCJtYXRjaCIsImRlcHMiLCJleHRyYWN0RnJvbVNvdXJjZSIsImZpbmlzaE1vZHVsZXMiLCJtb2R1bGVzIiwic3RyaW5nIiwiY29kZSIsImluZGV4IiwiU2V0IiwicmVhZEZyb20iLCJ3cml0ZVRvUGF0aCIsImJhc2VDb250ZW50Iiwid3JpdGVUb1BhdGhXcml0dGVuIiwibW9kdWxlVmFycyIsImltcG9ydHMiLCJleHBvcnRzIiwiZGVjbGFyYXRpb25zIiwieHR5cGUiLCJjYXBjbGFzc25hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2xhc3NGaWxlIiwiY29udGVudHMiLCJodG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uIiwib3V0cHV0UGF0aCIsImRldlNlcnZlciIsImNvbnRlbnRCYXNlIiwidHJpbSIsImpzUGF0aCIsImV4dFBhdGgiLCJjc3NQYXRoIiwiYXNzZXRzIiwidW5zaGlmdCIsImNzcyIsImVtaXQiLCJjYWxsYmFjayIsIl9idWlsZEV4dEJ1bmRsZSIsIl9wcmVwYXJlRm9yQnVpbGQiLCJjb21tYW5kIiwid2F0Y2giLCJyZWJ1aWxkIiwicGFybXMiLCJwcm9maWxlIiwid2F0Y2hTdGFydGVkIiwib3V0cHV0IiwicmltcmFmIiwicGFja2FnZXMiLCJ0b29sa2l0IiwidGhlbWUiLCJmaXJzdFRpbWUiLCJidWlsZFhNTCIsImNyZWF0ZUFwcEpzb24iLCJjcmVhdGVXb3Jrc3BhY2VKc29uIiwiY3JlYXRlSlNET01FbnZpcm9ubWVudCIsImZyb21QYXRoIiwidG9QYXRoIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsImluY2x1ZGVzIiwibWFuaWZlc3QiLCJidW5kbGVEaXIiLCJzZW5jaGEiLCJQcm9taXNlIiwicmVqZWN0Iiwib25CdWlsZERvbmUiLCJvcHRzIiwic2lsZW50Iiwic3RkaW8iLCJlbmNvZGluZyIsImV4ZWN1dGVBc3luYyIsInRoZW4iLCJyZWFzb24iLCJERUZBVUxUX1NVQlNUUlMiLCJzdWJzdHJpbmdzIiwiY2hhbGsiLCJjcm9zc1NwYXduIiwiY2hpbGQiLCJvbiIsInNpZ25hbCIsIkVycm9yIiwiZXJyb3IiLCJzdGRvdXQiLCJzdHIiLCJzb21lIiwidiIsInJlZCIsInN0ZGVyciIsInN0ckphdmFPcHRzIiwicyIsImN1cnNvclRvIiwiY2xlYXJMaW5lIiwid3JpdGUiLCJ2ZXJib3NlIiwicHJlZml4IiwicGxhdGZvcm0iLCJncmVlbiIsImZyYW1ld29ya05hbWUiLCJwbHVnaW5QYXRoIiwicGx1Z2luUGtnIiwicGx1Z2luVmVyc2lvbiIsInZlcnNpb24iLCJfcmVzb2x2ZWQiLCJlZGl0aW9uIiwid2VicGFja1BhdGgiLCJ3ZWJwYWNrUGtnIiwid2VicGFja1ZlcnNpb24iLCJleHRQa2ciLCJleHRWZXJzaW9uIiwiY21kUGF0aCIsImNtZFBrZyIsImNtZFZlcnNpb24iLCJ2ZXJzaW9uX2Z1bGwiLCJmcmFtZXdvcmtJbmZvIiwiZnJhbWV3b3JrUGF0aCIsImZyYW1ld29ya1BrZyIsImZyYW1ld29ya1ZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDcEMsUUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxRQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUVBLE1BQUlFLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBRUEsTUFBSU4sT0FBTyxDQUFDTyxTQUFSLElBQXFCQyxTQUF6QixFQUFvQztBQUNsQ0osSUFBQUEsUUFBUSxDQUFDSyxZQUFULEdBQXdCLEVBQXhCO0FBQ0FMLElBQUFBLFFBQVEsQ0FBQ0ssWUFBVCxDQUFzQkMsSUFBdEIsQ0FBMkIsMEdBQTNCO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0ssSUFBUCxHQUFjUCxRQUFkO0FBQ0EsV0FBT0UsTUFBUDtBQUNEOztBQUVELFFBQU1NLGVBQWUsR0FBR1YsT0FBTyxDQUFDLGNBQUQsQ0FBL0I7O0FBQ0FVLEVBQUFBLGVBQWUsQ0FBQ1YsT0FBTyxDQUFFLEtBQUlGLE9BQU8sQ0FBQ08sU0FBVSxNQUF4QixDQUFQLENBQXNDTSxrQkFBdEMsRUFBRCxFQUE2RGIsT0FBN0QsRUFBc0UsRUFBdEUsQ0FBZjtBQUVBSSxFQUFBQSxRQUFRLEdBQUdGLE9BQU8sQ0FBRSxLQUFJRixPQUFPLENBQUNPLFNBQVUsTUFBeEIsQ0FBUCxDQUFzQ08sY0FBdEMsRUFBWDtBQUNBVixFQUFBQSxRQUFRLENBQUNHLFNBQVQsR0FBcUJQLE9BQU8sQ0FBQ08sU0FBN0I7O0FBQ0EsVUFBT0gsUUFBUSxDQUFDRyxTQUFoQjtBQUNFLFNBQUssT0FBTDtBQUNFSCxNQUFBQSxRQUFRLENBQUNXLFVBQVQsR0FBc0Isb0JBQXRCO0FBQ0E7O0FBQ0YsU0FBSyxPQUFMO0FBQ0VYLE1BQUFBLFFBQVEsQ0FBQ1csVUFBVCxHQUFzQiwwQkFBdEI7QUFDQTs7QUFDRixTQUFLLFNBQUw7QUFDRVgsTUFBQUEsUUFBUSxDQUFDVyxVQUFULEdBQXNCLDRCQUF0QjtBQUNBOztBQUNGO0FBQ0VYLE1BQUFBLFFBQVEsQ0FBQ1csVUFBVCxHQUFzQixvQkFBdEI7QUFYSixHQXBCb0MsQ0FrQ3BDOzs7QUFDQSxRQUFNQyxHQUFHLEdBQUdkLE9BQU8sQ0FBQyxVQUFELENBQW5COztBQUNBLE1BQUllLGFBQWEsR0FBR2hCLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBNEIsNERBQTVCLENBQXBCO0FBQ0FDLEVBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxpQkFBZ0JpQixhQUFjLEVBQXpDLENBQUo7O0FBQ0EsTUFBSSxDQUFDZCxFQUFFLENBQUNtQixVQUFILENBQWNMLGFBQWQsQ0FBTCxFQUFtQztBQUNqQ0ksSUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFXLE1BQVgsQ0FBSjtBQUNBLFFBQUl1QixlQUFlLEdBQUd0QixJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLDBCQUEwQmhCLFFBQVEsQ0FBQ1csVUFBbkMsR0FBZ0QsZ0JBQXpFLENBQXRCO0FBQ0FDLElBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhRixlQUFiLEVBQThCTixhQUE5QjtBQUNELEdBSkQsTUFLSztBQUNISSxJQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsb0JBQVgsQ0FBSjtBQUNEOztBQUVESSxFQUFBQSxRQUFRLENBQUNzQixHQUFULEdBQWV4QixPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCeUIsT0FBeEIsRUFBZjtBQUNBTixFQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsZ0JBQWVJLFFBQVEsQ0FBQ1csVUFBVyxFQUE5QyxDQUFKO0FBQ0FNLEVBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxrQkFBaUJJLFFBQVEsQ0FBQ3NCLEdBQUksRUFBekMsQ0FBSjtBQUVBLFFBQU1FLEVBQUUsR0FBSXpCLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBZSxRQUFPbEIsUUFBUSxDQUFDRyxTQUFVLElBQXpDLEtBQWlEc0IsSUFBSSxDQUFDQyxLQUFMLENBQVczQixFQUFFLENBQUM0QixZQUFILENBQWlCLFFBQU8zQixRQUFRLENBQUNHLFNBQVUsSUFBM0MsRUFBZ0QsT0FBaEQsQ0FBWCxDQUFqRCxJQUF5SCxFQUFySTtBQUNBRixFQUFBQSxXQUFXLHFCQUFRSCxPQUFPLENBQUUsS0FBSUUsUUFBUSxDQUFDRyxTQUFVLE1BQXpCLENBQVAsQ0FBdUN5QixpQkFBdkMsRUFBUixFQUF1RWhDLE9BQXZFLEVBQW1GNEIsRUFBbkYsQ0FBWDtBQUNBUCxFQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsaUJBQWdCNkIsSUFBSSxDQUFDSSxTQUFMLENBQWU1QixXQUFmLENBQTRCLEVBQXZELENBQUo7O0FBQ0EsTUFBSUEsV0FBVyxDQUFDNkIsV0FBWixJQUEyQixZQUEvQixFQUE2QztBQUMzQzlCLElBQUFBLFFBQVEsQ0FBQytCLFVBQVQsR0FBc0IsSUFBdEI7O0FBQ0EsUUFBSSxDQUFDbkMsT0FBTyxDQUFDb0MsV0FBVCxJQUF3QnBDLE9BQU8sQ0FBQ08sU0FBUixJQUFxQixTQUE3QyxJQUEwRFAsT0FBTyxDQUFDcUMseUJBQVIsQ0FBa0NDLE1BQWhHLEVBQXdHO0FBQ3RHdEMsTUFBQUEsT0FBTyxDQUFDcUMseUJBQVIsQ0FBa0NFLE9BQWxDLENBQTJDQyxLQUFELElBQVc7QUFDbkQsWUFBRyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCQSxLQUFLLENBQUNDLE9BQW5DLElBQThDRCxLQUFLLENBQUNFLElBQXZELEVBQTZEO0FBQzNELGNBQUlDLFFBQVEsR0FBRzFDLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBNEJvQixLQUFLLENBQUNFLElBQWxDLENBQWY7O0FBQ0EsY0FBSXZDLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBY3FCLFFBQWQsQ0FBSixFQUE2QjtBQUMzQixrQkFBTUMsSUFBSSxHQUFHNUIsR0FBRyxDQUFDZSxZQUFKLENBQWlCWSxRQUFqQixFQUEyQkUsUUFBM0IsRUFBYjtBQUNBRixZQUFBQSxRQUFRLEdBQUcxQyxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTRCb0IsS0FBSyxDQUFDQyxPQUFsQyxDQUFYO0FBQ0EsZ0JBQUl0QyxFQUFFLENBQUNtQixVQUFILENBQWNxQixRQUFkLENBQUosRUFDRTNCLEdBQUcsQ0FBQzhCLGFBQUosQ0FBa0JILFFBQWxCLEVBQTRCQyxJQUE1QixFQUFrQyxPQUFsQyxFQUEyQyxNQUFJO0FBQUM7QUFBTyxhQUF2RDtBQUNIO0FBQ0YsU0FSRCxNQVFPO0FBQ0xHLFVBQUFBLFdBQVcsQ0FBQ0MsTUFBWixDQUFtQnRDLElBQW5CLENBQXdCLG1DQUF4QjtBQUNEO0FBQ0YsT0FaRDtBQWFEO0FBQ0YsR0FqQkQsTUFtQkU7QUFBQ04sSUFBQUEsUUFBUSxDQUFDK0IsVUFBVCxHQUFzQixLQUF0QjtBQUE0Qjs7QUFDL0JjLEVBQUFBLEdBQUcsQ0FBQy9DLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JnRCxZQUF4QixDQUFxQzlDLFFBQVEsQ0FBQ3NCLEdBQTlDLEVBQW1EdEIsUUFBUSxDQUFDVyxVQUE1RCxFQUF3RVgsUUFBUSxDQUFDRyxTQUFqRixDQUFELENBQUg7QUFDQTBDLEVBQUFBLEdBQUcsQ0FBQzdDLFFBQVEsQ0FBQ3NCLEdBQVQsR0FBZSxlQUFmLEdBQWlDckIsV0FBVyxDQUFDNkIsV0FBOUMsQ0FBSDtBQUVBNUIsRUFBQUEsTUFBTSxDQUFDSyxJQUFQLEdBQWNQLFFBQWQ7QUFDQUUsRUFBQUEsTUFBTSxDQUFDTixPQUFQLEdBQWlCSyxXQUFqQjtBQUNBLFNBQU9DLE1BQVA7QUFDRCxDLENBRUQ7OztBQUNPLFNBQVM2QyxZQUFULENBQXNCQyxRQUF0QixFQUFnQ0wsV0FBaEMsRUFBNkNwQyxJQUE3QyxFQUFtRFgsT0FBbkQsRUFBNEQ7QUFDakUsTUFBSTtBQUNGRSxJQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCbUIsSUFBeEIsQ0FBNkJyQixPQUE3QixFQUFzQyx1QkFBdEM7O0FBRUEsVUFBTWdCLEdBQUcsR0FBR2QsT0FBTyxDQUFDLFVBQUQsQ0FBbkI7O0FBQ0EsVUFBTUMsRUFBRSxHQUFHRCxPQUFPLENBQUMsSUFBRCxDQUFsQjs7QUFDQSxVQUFNbUQsTUFBTSxHQUFHbkQsT0FBTyxDQUFDLFFBQUQsQ0FBdEI7O0FBQ0EsVUFBTUQsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxVQUFNb0QsaUJBQWlCLEdBQUcscUJBQTFCO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsb0JBQXpCO0FBQ0EsUUFBSUMsYUFBYSxHQUFHLEVBQXBCOztBQUVBLFFBQUk5QyxJQUFJLENBQUN3QixVQUFULEVBQXFCO0FBQ25CZCxNQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsaUNBQUQsR0FBb0NXLElBQUksQ0FBQ3dCLFVBQW5ELENBQUo7O0FBRUEsVUFBSW5DLE9BQU8sQ0FBQ08sU0FBUixJQUFxQixTQUF6QixFQUFvQztBQUNsQztBQUNBLFlBQUltRCxpQkFBaUIsR0FBRyxFQUF4QjtBQUVBLGNBQU1DLFdBQVcsR0FBRzFELElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBNEIsa0JBQWtCa0MsaUJBQTlDLENBQXBCO0FBQ0EsWUFBSU0sS0FBSyxHQUFHNUMsR0FBRyxDQUFDNkMsV0FBSixDQUFpQixHQUFFRixXQUFZLE1BQS9CLENBQVo7QUFDQUMsUUFBQUEsS0FBSyxDQUFDckIsT0FBTixDQUFldUIsUUFBRCxJQUFjO0FBQzFCLGNBQUlBLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEtBQXlCLE1BQXpDLEVBQWlEO0FBQy9DLGdCQUFJQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixDQUFoQixFQUFtQkUsT0FBbkIsQ0FBMkIsWUFBM0IsQ0FBVjs7QUFDQSxnQkFBSUQsR0FBRyxJQUFJLENBQVgsRUFBYztBQUNaUCxjQUFBQSxhQUFhLENBQUMvQyxJQUFkLENBQW1Cb0QsUUFBUSxDQUFDSSxTQUFULENBQW1CLENBQW5CLEVBQXNCRixHQUFHLEdBQUcsQ0FBNUIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0YsU0FQRDs7QUFTQSxZQUFJaEUsT0FBTyxDQUFDb0MsV0FBWixFQUF5QjtBQUN2QjtBQUNBLGNBQUk7QUFDRixnQkFBSStCLE9BQU8sR0FBRyxLQUFkO0FBQ0Esa0JBQU1DLGFBQWEsR0FBR25FLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBNEIsdUJBQTVCLENBQXRCO0FBQ0EsZ0JBQUlpRCxFQUFFLEdBQUdyRCxHQUFHLENBQUNlLFlBQUosQ0FBaUJxQyxhQUFqQixFQUFnQ3ZCLFFBQWhDLEVBQVQ7QUFDQSxnQkFBSXlCLENBQUMsR0FBR0QsRUFBRSxDQUFDSixPQUFILENBQVdYLGlCQUFYLENBQVI7QUFDQWdCLFlBQUFBLENBQUMsR0FBR0QsRUFBRSxDQUFDSCxTQUFILENBQWEsQ0FBYixFQUFnQkksQ0FBaEIsRUFBbUJDLFdBQW5CLENBQStCLFFBQS9CLENBQUo7O0FBRUEsZ0JBQUlGLEVBQUUsQ0FBQ04sTUFBSCxDQUFVTyxDQUFDLEdBQUcsQ0FBZCxFQUFpQixDQUFqQixNQUF3QixLQUE1QixFQUFtQztBQUNqQ0QsY0FBQUEsRUFBRSxHQUFHQSxFQUFFLENBQUNILFNBQUgsQ0FBYSxDQUFiLEVBQWdCSSxDQUFoQixJQUFxQixRQUFyQixHQUFnQ0QsRUFBRSxDQUFDSCxTQUFILENBQWFJLENBQWIsQ0FBckM7QUFDQUgsY0FBQUEsT0FBTyxHQUFHLElBQVY7QUFDRDs7QUFFRCxrQkFBTUssc0JBQXNCLEdBQUd2RSxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTZCLFdBQVVtQyxnQkFBaUIsRUFBeEQsQ0FBL0IsQ0FaRSxDQWNGOztBQUNBLGdCQUFJLENBQUNwRCxFQUFFLENBQUNtQixVQUFILENBQWNrRCxzQkFBZCxDQUFMLEVBQTRDO0FBQzFDbkIsY0FBQUEsTUFBTSxDQUFDb0IsSUFBUCxDQUFZRCxzQkFBWjs7QUFDQSxvQkFBTUUsQ0FBQyxHQUFHeEUsT0FBTyxDQUFDLGFBQUQsQ0FBUCxDQUF1QnNELGdCQUF2QixDQUF3QyxFQUF4QyxFQUE0QyxFQUE1QyxFQUFnRCxFQUFoRCxDQUFWOztBQUNBeEMsY0FBQUEsR0FBRyxDQUFDOEIsYUFBSixDQUNHLEdBQUUwQixzQkFBdUIsSUFBR2hCLGdCQUFpQixLQURoRCxFQUNzRGtCLENBRHRELEVBQ3lELE9BRHpELEVBQ2tFLE1BQU07QUFBQztBQUFPLGVBRGhGO0FBR0FQLGNBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0Q7O0FBQ0QsZ0JBQUlRLENBQUMsR0FBR04sRUFBRSxDQUFDSixPQUFILENBQVksS0FBSVYsZ0JBQWlCLElBQUdDLGdCQUFpQixFQUFyRCxDQUFSOztBQUNBLGdCQUFJbUIsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNUTixjQUFBQSxFQUFFLEdBQUdBLEVBQUUsQ0FBQ0gsU0FBSCxDQUFhLENBQWIsRUFBZ0JJLENBQWhCLElBQXNCLHFDQUFvQ2YsZ0JBQWlCLElBQUdDLGdCQUFpQixLQUEvRixHQUFzR2EsRUFBRSxDQUFDTixNQUFILENBQVVPLENBQVYsQ0FBM0c7QUFDQUgsY0FBQUEsT0FBTyxHQUFHLElBQVY7QUFDRCxhQUhELE1BSUs7QUFDSCxrQkFBSUcsQ0FBQyxHQUFHRCxFQUFFLENBQUNILFNBQUgsQ0FBYSxDQUFiLEVBQWdCUyxDQUFoQixFQUFtQkosV0FBbkIsQ0FBK0IsUUFBL0IsQ0FBUjs7QUFDQSxrQkFBSUYsRUFBRSxDQUFDTixNQUFILENBQVVPLENBQUMsR0FBRyxDQUFkLEVBQWlCLENBQWpCLEtBQXVCLEtBQTNCLEVBQWtDO0FBQ2hDRCxnQkFBQUEsRUFBRSxHQUFHQSxFQUFFLENBQUNILFNBQUgsQ0FBYSxDQUFiLEVBQWdCSSxDQUFDLEdBQUcsQ0FBcEIsSUFBeUIsSUFBekIsR0FBZ0NELEVBQUUsQ0FBQ0gsU0FBSCxDQUFhSSxDQUFiLENBQXJDO0FBQ0FILGdCQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNELGVBSEQsTUFHTyxJQUFJRSxFQUFFLENBQUNILFNBQUgsQ0FBYUksQ0FBQyxHQUFDLENBQWYsRUFBa0IsQ0FBbEIsS0FBd0IsSUFBNUIsRUFBa0M7QUFDdkNELGdCQUFBQSxFQUFFLEdBQUdBLEVBQUUsQ0FBQ0gsU0FBSCxDQUFhLENBQWIsRUFBZ0JJLENBQUMsR0FBRyxDQUFwQixJQUF5QixJQUF6QixHQUFnQ0QsRUFBRSxDQUFDSCxTQUFILENBQWFJLENBQWIsQ0FBckM7QUFDQUgsZ0JBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0Q7QUFDRjs7QUFDRCxnQkFBSUEsT0FBSixFQUNFbkQsR0FBRyxDQUFDOEIsYUFBSixDQUFrQnNCLGFBQWxCLEVBQWlDQyxFQUFqQyxFQUFxQyxPQUFyQyxFQUE4QyxNQUFJO0FBQUM7QUFBTyxhQUExRDtBQUNILFdBeENELENBeUNBLE9BQU9PLENBQVAsRUFBVTtBQUNSQyxZQUFBQSxPQUFPLENBQUM1QixHQUFSLENBQVkyQixDQUFaO0FBQ0E3QixZQUFBQSxXQUFXLENBQUNDLE1BQVosQ0FBbUJ0QyxJQUFuQixDQUF3Qix1Q0FBdUNrRSxDQUEvRDtBQUNBLG1CQUFPLEVBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ3QixNQUFBQSxXQUFXLENBQUMrQixLQUFaLENBQWtCQyxhQUFsQixDQUFnQ0MsR0FBaEMsQ0FBcUMsb0JBQXJDLEVBQTBEQyxNQUFNLElBQUk7QUFDbEUsWUFBSXhCLGFBQWEsQ0FBQ25CLE1BQWQsSUFBd0IyQyxNQUFNLENBQUNDLFFBQS9CLEtBQTRDRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLGFBQXRCLEtBQ2hEbkYsT0FBTyxDQUFDTyxTQUFSLElBQXFCLFNBQXJCLElBQWtDMEUsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixTQUF0QixDQUQ5QixLQUVKLENBQUNGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsS0FBaEIsQ0FBc0IsY0FBdEIsQ0FGRyxJQUVzQyxDQUFDRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXVCLGlDQUF2QixDQUYzQyxFQUVxRztBQUNuR3hFLFVBQUFBLElBQUksQ0FBQ3lFLElBQUwsR0FBWSxDQUFDLElBQUl6RSxJQUFJLENBQUN5RSxJQUFMLElBQWEsRUFBakIsQ0FBRCxFQUF1QixHQUFHbEYsT0FBTyxDQUFFLEtBQUlTLElBQUksQ0FBQ0osU0FBVSxNQUFyQixDQUFQLENBQW1DOEUsaUJBQW5DLENBQXFESixNQUFyRCxFQUE2RGpGLE9BQTdELEVBQXNFK0MsV0FBdEUsRUFBbUZVLGFBQW5GLENBQTFCLENBQVo7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsVUFBSXpELE9BQU8sQ0FBQ08sU0FBUixJQUFxQixTQUFyQixJQUFrQ1AsT0FBTyxDQUFDb0MsV0FBOUMsRUFBMkQ7QUFDekRXLFFBQUFBLFdBQVcsQ0FBQytCLEtBQVosQ0FBa0JRLGFBQWxCLENBQWdDTixHQUFoQyxDQUFxQyxvQkFBckMsRUFBMERPLE9BQU8sSUFBSTtBQUNuRSxnQkFBTUMsTUFBTSxHQUFHLDBCQUFmO0FBQ0E3RSxVQUFBQSxJQUFJLENBQUN5RSxJQUFMLENBQVU3QyxPQUFWLENBQWtCa0QsSUFBSSxJQUFJO0FBQ3hCLGdCQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQ3hCLE9BQUwsQ0FBYXVCLE1BQWIsQ0FBWjs7QUFDQSxnQkFBSUUsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZEQsY0FBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUN2QixTQUFMLENBQWV3QixLQUFLLEdBQUdGLE1BQU0sQ0FBQ2xELE1BQTlCLENBQVA7QUFDQSxrQkFBSTBCLEdBQUcsR0FBR3lCLElBQUksQ0FBQ3hCLE9BQUwsQ0FBYSxJQUFiLENBQVY7QUFDQVAsY0FBQUEsaUJBQWlCLENBQUNoRCxJQUFsQixDQUF1QitFLElBQUksQ0FBQzFCLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLEdBQWYsQ0FBdkI7QUFDRDtBQUNGLFdBUEQ7QUFRQU4sVUFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLElBQUlpQyxHQUFKLENBQVFqQyxpQkFBUixDQUFKLENBQXBCO0FBQ0EsZ0JBQU1rQyxRQUFRLEdBQUczRixJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTRCLGtCQUFrQmtDLGlCQUFsQixHQUFzQyxVQUFsRSxDQUFqQjtBQUNBLGdCQUFNdUMsV0FBVyxHQUFHNUYsSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUE2QixXQUFVbUMsZ0JBQWlCLEVBQXhELENBQXBCO0FBRUEsZ0JBQU11QyxXQUFXLEdBQUc5RSxHQUFHLENBQUNlLFlBQUosQ0FBa0IsR0FBRTZELFFBQVMsVUFBN0IsRUFBd0MvQyxRQUF4QyxFQUFwQjtBQUNBN0IsVUFBQUEsR0FBRyxDQUFDOEIsYUFBSixDQUFtQixHQUFFK0MsV0FBWSxVQUFqQyxFQUE0Q0MsV0FBNUMsRUFBeUQsT0FBekQsRUFBa0UsTUFBSTtBQUFDO0FBQU8sV0FBOUU7QUFFQSxjQUFJQyxrQkFBa0IsR0FBRyxLQUF6QjtBQUNBLGNBQUlDLFVBQVUsR0FBRztBQUNmQyxZQUFBQSxPQUFPLEVBQUUsRUFETTtBQUVmQyxZQUFBQSxPQUFPLEVBQUUsRUFGTTtBQUdmQyxZQUFBQSxZQUFZLEVBQUU7QUFIQyxXQUFqQjtBQUtBekMsVUFBQUEsaUJBQWlCLENBQUNuQixPQUFsQixDQUEwQjZELEtBQUssSUFBSTtBQUNqQyxnQkFBSUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixLQUFnQ0gsS0FBSyxDQUFDM0QsT0FBTixDQUFjLElBQWQsRUFBb0IsR0FBcEIsRUFBeUIrRCxLQUF6QixDQUErQixDQUEvQixDQUFuRDtBQUNBUixZQUFBQSxVQUFVLENBQUNDLE9BQVgsR0FBcUJELFVBQVUsQ0FBQ0MsT0FBWCxHQUFzQixlQUFjSSxZQUFhLDJCQUEwQkQsS0FBTSxnQkFBdEc7QUFDQUosWUFBQUEsVUFBVSxDQUFDRSxPQUFYLEdBQXFCRixVQUFVLENBQUNFLE9BQVgsR0FBc0IsVUFBU0csWUFBYSxjQUFqRTtBQUNBTCxZQUFBQSxVQUFVLENBQUNHLFlBQVgsR0FBMEJILFVBQVUsQ0FBQ0csWUFBWCxHQUEyQixVQUFTRSxZQUFhLGNBQTNFO0FBQ0EsZ0JBQUlJLFNBQVMsR0FBSSxRQUFPTCxLQUFNLGVBQTlCO0FBQ0Esa0JBQU1NLFFBQVEsR0FBRzFGLEdBQUcsQ0FBQ2UsWUFBSixDQUFrQixHQUFFNkQsUUFBUyxHQUFFYSxTQUFVLEVBQXpDLEVBQTRDNUQsUUFBNUMsRUFBakI7QUFDQTdCLFlBQUFBLEdBQUcsQ0FBQzhCLGFBQUosQ0FBbUIsR0FBRStDLFdBQVksR0FBRVksU0FBVSxFQUE3QyxFQUFnREMsUUFBaEQsRUFBMEQsT0FBMUQsRUFBbUUsTUFBSTtBQUFDO0FBQU8sYUFBL0U7QUFDQVgsWUFBQUEsa0JBQWtCLEdBQUcsSUFBckI7QUFDRCxXQVREOztBQVVBLGNBQUlBLGtCQUFKLEVBQXdCO0FBQ3RCLGdCQUFJckIsQ0FBQyxHQUFHeEUsT0FBTyxDQUFDLGFBQUQsQ0FBUCxDQUF1QnNELGdCQUF2QixDQUNOd0MsVUFBVSxDQUFDQyxPQURMLEVBQ2NELFVBQVUsQ0FBQ0UsT0FEekIsRUFDa0NGLFVBQVUsQ0FBQ0csWUFEN0MsQ0FBUjs7QUFHQW5GLFlBQUFBLEdBQUcsQ0FBQzhCLGFBQUosQ0FBbUIsR0FBRStDLFdBQVksSUFBR3JDLGdCQUFpQixLQUFyRCxFQUEyRGtCLENBQTNELEVBQThELE9BQTlELEVBQXVFLE1BQUk7QUFBQztBQUFPLGFBQW5GO0FBQ0Q7QUFDRixTQXZDRDtBQXdDRDtBQUNGOztBQUVELFFBQUkxRSxPQUFPLENBQUNPLFNBQVIsSUFBcUIsT0FBekIsRUFBa0M7QUFDaEN3QyxNQUFBQSxXQUFXLENBQUMrQixLQUFaLENBQWtCNkIscUNBQWxCLENBQXdEM0IsR0FBeEQsQ0FBNkQscUJBQTdELEVBQW1GcEMsSUFBRCxJQUFVO0FBQzFGdkIsUUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLDBCQUFULENBQUo7O0FBQ0EsY0FBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxZQUFJMEcsVUFBVSxHQUFHLEVBQWpCOztBQUNBLFlBQUl4RCxRQUFRLENBQUNwRCxPQUFULENBQWlCNkcsU0FBckIsRUFBZ0M7QUFDOUIsY0FBSXpELFFBQVEsQ0FBQ3dELFVBQVQsS0FBd0IsR0FBNUIsRUFBaUM7QUFDL0JBLFlBQUFBLFVBQVUsR0FBRzNHLElBQUksQ0FBQ3VCLElBQUwsQ0FBVTRCLFFBQVEsQ0FBQ3BELE9BQVQsQ0FBaUI2RyxTQUFqQixDQUEyQkMsV0FBckMsRUFBa0RGLFVBQWxELENBQWI7QUFDRCxXQUZELE1BR0s7QUFDSCxnQkFBSXhELFFBQVEsQ0FBQ3BELE9BQVQsQ0FBaUI2RyxTQUFqQixDQUEyQkMsV0FBM0IsSUFBMEN0RyxTQUE5QyxFQUF5RDtBQUN2RG9HLGNBQUFBLFVBQVUsR0FBRyxPQUFiO0FBQ0QsYUFGRCxNQUdLO0FBQ0hBLGNBQUFBLFVBQVUsR0FBRyxFQUFiO0FBQ0Q7QUFDRjtBQUNGLFNBWkQsTUFhSztBQUNIQSxVQUFBQSxVQUFVLEdBQUcsT0FBYjtBQUNEOztBQUNEQSxRQUFBQSxVQUFVLEdBQUdBLFVBQVUsQ0FBQ25FLE9BQVgsQ0FBbUJ0QixPQUFPLENBQUNDLEdBQVIsRUFBbkIsRUFBa0MsRUFBbEMsRUFBc0MyRixJQUF0QyxFQUFiO0FBQ0EsWUFBSUMsTUFBTSxHQUFHL0csSUFBSSxDQUFDdUIsSUFBTCxDQUFVb0YsVUFBVixFQUFzQmpHLElBQUksQ0FBQ3NHLE9BQTNCLEVBQW9DLFFBQXBDLENBQWI7QUFDQSxZQUFJQyxPQUFPLEdBQUdqSCxJQUFJLENBQUN1QixJQUFMLENBQVVvRixVQUFWLEVBQXNCakcsSUFBSSxDQUFDc0csT0FBM0IsRUFBb0MsU0FBcEMsQ0FBZDtBQUNBckUsUUFBQUEsSUFBSSxDQUFDdUUsTUFBTCxDQUFZOUMsRUFBWixDQUFlK0MsT0FBZixDQUF1QkosTUFBdkI7QUFDQXBFLFFBQUFBLElBQUksQ0FBQ3VFLE1BQUwsQ0FBWUUsR0FBWixDQUFnQkQsT0FBaEIsQ0FBd0JGLE9BQXhCO0FBQ0FqRSxRQUFBQSxHQUFHLENBQUN0QyxJQUFJLENBQUNlLEdBQUwsR0FBWSxVQUFTc0YsTUFBTyxRQUFPRSxPQUFRLGdCQUE1QyxDQUFIO0FBQ0QsT0ExQkQ7QUEyQkQsS0E1QkQsTUE2Qks7QUFDSDdGLE1BQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBUyxrQ0FBVCxDQUFKO0FBQ0Q7QUFDRixHQXJLRCxDQXNLQSxPQUFNNEUsQ0FBTixFQUFTO0FBQ1AxRSxJQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCbUIsSUFBeEIsQ0FBNkJyQixPQUE3QixFQUFxQzRFLENBQXJDOztBQUNBN0IsSUFBQUEsV0FBVyxDQUFDQyxNQUFaLENBQW1CdEMsSUFBbkIsQ0FBd0IsbUJBQW1Ca0UsQ0FBM0M7QUFDRDtBQUNGLEMsQ0FFRDs7O1NBQ3NCMEMsSTs7RUF5RXRCOzs7Ozs7MEJBekVPLGlCQUFvQmxFLFFBQXBCLEVBQThCTCxXQUE5QixFQUEyQ3BDLElBQTNDLEVBQWlEWCxPQUFqRCxFQUEwRHVILFFBQTFEO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFR3RFLFVBQUFBLEdBRkgsR0FFUy9DLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0IrQyxHQUZqQztBQUdHNUIsVUFBQUEsSUFISCxHQUdVbkIsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3Qm1CLElBSGxDO0FBSUhBLFVBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBUyxlQUFULENBQUo7QUFDSTBCLFVBQUFBLEdBTEQsR0FLT2YsSUFBSSxDQUFDZSxHQUxaO0FBTUNuQixVQUFBQSxTQU5ELEdBTWFJLElBQUksQ0FBQ0osU0FObEI7QUFPR04sVUFBQUEsSUFQSCxHQU9VQyxPQUFPLENBQUMsTUFBRCxDQVBqQjtBQVFHc0gsVUFBQUEsZUFSSCxHQVFxQnRILE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JzSCxlQVI3QztBQVNDWixVQUFBQSxVQVRELEdBU2MzRyxJQUFJLENBQUN1QixJQUFMLENBQVU0QixRQUFRLENBQUN3RCxVQUFuQixFQUE4QmpHLElBQUksQ0FBQ3NHLE9BQW5DLENBVGQ7O0FBVUgsY0FBSTdELFFBQVEsQ0FBQ3dELFVBQVQsS0FBd0IsR0FBeEIsSUFBK0J4RCxRQUFRLENBQUNwRCxPQUFULENBQWlCNkcsU0FBcEQsRUFBK0Q7QUFDN0RELFlBQUFBLFVBQVUsR0FBRzNHLElBQUksQ0FBQ3VCLElBQUwsQ0FBVTRCLFFBQVEsQ0FBQ3BELE9BQVQsQ0FBaUI2RyxTQUFqQixDQUEyQkMsV0FBckMsRUFBa0RGLFVBQWxELENBQWI7QUFDRDs7QUFDRHZGLFVBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBUyxpQkFBaUI0RyxVQUExQixDQUFKO0FBQ0F2RixVQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVMsZ0JBQWdCTyxTQUF6QixDQUFKOztBQWRHLGdCQWVDUCxPQUFPLENBQUNzSCxJQUFSLElBQWdCLElBZmpCO0FBQUE7QUFBQTtBQUFBOztBQWdCRCxjQUFJL0csU0FBUyxJQUFJLE9BQWpCLEVBQTBCO0FBQ3hCa0gsWUFBQUEsZ0JBQWdCLENBQUMvRixHQUFELEVBQU1mLElBQU4sRUFBWVgsT0FBWixFQUFxQjRHLFVBQXJCLEVBQWlDN0QsV0FBakMsQ0FBaEI7QUFDRCxXQUZELE1BR0s7QUFDSDdDLFlBQUFBLE9BQU8sQ0FBRSxLQUFJSyxTQUFVLE1BQWhCLENBQVAsQ0FBOEJrSCxnQkFBOUIsQ0FBK0MvRixHQUEvQyxFQUFvRGYsSUFBcEQsRUFBMERYLE9BQTFELEVBQW1FNEcsVUFBbkUsRUFBK0U3RCxXQUEvRTtBQUNEOztBQUVHMkUsVUFBQUEsT0F2QkgsR0F1QmEsRUF2QmI7O0FBd0JELGNBQUkxSCxPQUFPLENBQUMySCxLQUFSLElBQWlCLEtBQWpCLElBQTBCaEgsSUFBSSxDQUFDd0IsVUFBTCxJQUFtQixLQUFqRCxFQUF3RDtBQUN0RHVGLFlBQUFBLE9BQU8sR0FBRyxPQUFWO0FBQ0QsV0FGRCxNQUdLO0FBQ0hBLFlBQUFBLE9BQU8sR0FBRyxPQUFWO0FBQ0Q7O0FBN0JBLGdCQStCRy9HLElBQUksQ0FBQ2lILE9BQUwsSUFBZ0IsSUEvQm5CO0FBQUE7QUFBQTtBQUFBOztBQWdDS0MsVUFBQUEsS0FoQ0wsR0FnQ2EsRUFoQ2I7O0FBaUNDLGNBQUk3SCxPQUFPLENBQUM4SCxPQUFSLElBQW1CdEgsU0FBbkIsSUFBZ0NSLE9BQU8sQ0FBQzhILE9BQVIsSUFBbUIsRUFBbkQsSUFBeUQ5SCxPQUFPLENBQUM4SCxPQUFSLElBQW1CLElBQWhGLEVBQXNGO0FBQ3BGLGdCQUFJSixPQUFPLElBQUksT0FBZixFQUF3QjtBQUN0QkcsY0FBQUEsS0FBSyxHQUFHLENBQUMsS0FBRCxFQUFRSCxPQUFSLEVBQWlCMUgsT0FBTyxDQUFDa0MsV0FBekIsQ0FBUjtBQUNELGFBRkQsTUFHSztBQUNIMkYsY0FBQUEsS0FBSyxHQUFHLENBQUMsS0FBRCxFQUFRSCxPQUFSLEVBQWlCLGNBQWpCLEVBQWlDLE9BQWpDLEVBQTBDMUgsT0FBTyxDQUFDa0MsV0FBbEQsQ0FBUjtBQUNEO0FBRUYsV0FSRCxNQVNLO0FBQ0gsZ0JBQUl3RixPQUFPLElBQUksT0FBZixFQUF3QjtBQUN0QkcsY0FBQUEsS0FBSyxHQUFHLENBQUMsS0FBRCxFQUFRSCxPQUFSLEVBQWlCMUgsT0FBTyxDQUFDOEgsT0FBekIsRUFBa0M5SCxPQUFPLENBQUNrQyxXQUExQyxDQUFSO0FBQ0QsYUFGRCxNQUdLO0FBQ0gyRixjQUFBQSxLQUFLLEdBQUcsQ0FBQyxLQUFELEVBQVFILE9BQVIsRUFBaUIsY0FBakIsRUFBaUMsT0FBakMsRUFBMEMxSCxPQUFPLENBQUM4SCxPQUFsRCxFQUEyRDlILE9BQU8sQ0FBQ2tDLFdBQW5FLENBQVI7QUFDRDtBQUNGOztBQWpERixnQkFtREt2QixJQUFJLENBQUNvSCxZQUFMLElBQXFCLEtBbkQxQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQW9EU1AsZUFBZSxDQUFDOUYsR0FBRCxFQUFNcUIsV0FBTixFQUFtQjZELFVBQW5CLEVBQStCaUIsS0FBL0IsRUFBc0M3SCxPQUF0QyxDQXBEeEI7O0FBQUE7QUFxREdXLFVBQUFBLElBQUksQ0FBQ29ILFlBQUwsR0FBb0IsSUFBcEI7O0FBckRIO0FBdURDUixVQUFBQSxRQUFRO0FBdkRUO0FBQUE7O0FBQUE7QUEwRENBLFVBQUFBLFFBQVE7O0FBMURUO0FBQUE7QUFBQTs7QUFBQTtBQThERHRFLFVBQUFBLEdBQUcsQ0FBRSxHQUFFdEMsSUFBSSxDQUFDZSxHQUFJLHVCQUFiLENBQUg7QUFDQTZGLFVBQUFBLFFBQVE7O0FBL0RQO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBbUVIckgsVUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3Qm1CLElBQXhCLENBQTZCckIsT0FBN0I7O0FBQ0ErQyxVQUFBQSxXQUFXLENBQUNDLE1BQVosQ0FBbUJ0QyxJQUFuQixDQUF3QixzQkFBeEI7QUFDQTZHLFVBQUFBLFFBQVE7O0FBckVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBMEVBLFNBQVNFLGdCQUFULENBQTBCL0YsR0FBMUIsRUFBK0JmLElBQS9CLEVBQXFDWCxPQUFyQyxFQUE4Q2dJLE1BQTlDLEVBQXNEakYsV0FBdEQsRUFBbUU7QUFDeEUsTUFBSTtBQUNGMUIsSUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLDJCQUFULENBQUo7O0FBQ0EsVUFBTWlJLE1BQU0sR0FBRy9ILE9BQU8sQ0FBQyxRQUFELENBQXRCOztBQUNBLFVBQU1tRCxNQUFNLEdBQUduRCxPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFDQSxVQUFNYyxHQUFHLEdBQUdkLE9BQU8sQ0FBQyxVQUFELENBQW5COztBQUNBLFVBQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDLElBQUQsQ0FBbEI7O0FBQ0EsVUFBTUQsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQSxRQUFJZ0ksUUFBUSxHQUFHbEksT0FBTyxDQUFDa0ksUUFBdkI7QUFDQSxRQUFJQyxPQUFPLEdBQUduSSxPQUFPLENBQUNtSSxPQUF0QjtBQUNBLFFBQUlDLEtBQUssR0FBR3BJLE9BQU8sQ0FBQ29JLEtBQXBCO0FBRUFBLElBQUFBLEtBQUssR0FBR0EsS0FBSyxLQUFLRCxPQUFPLEtBQUssU0FBWixHQUF3QixjQUF4QixHQUF5QyxnQkFBOUMsQ0FBYjtBQUNBOUcsSUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLGdCQUFnQlcsSUFBSSxDQUFDMEgsU0FBOUIsQ0FBSjs7QUFDQSxRQUFJMUgsSUFBSSxDQUFDMEgsU0FBVCxFQUFvQjtBQUNsQkosTUFBQUEsTUFBTSxDQUFDeEQsSUFBUCxDQUFZdUQsTUFBWjtBQUNBM0UsTUFBQUEsTUFBTSxDQUFDb0IsSUFBUCxDQUFZdUQsTUFBWjs7QUFDQSxZQUFNTSxRQUFRLEdBQUdwSSxPQUFPLENBQUMsYUFBRCxDQUFQLENBQXVCb0ksUUFBeEM7O0FBQ0EsWUFBTUMsYUFBYSxHQUFHckksT0FBTyxDQUFDLGFBQUQsQ0FBUCxDQUF1QnFJLGFBQTdDOztBQUNBLFlBQU1DLG1CQUFtQixHQUFHdEksT0FBTyxDQUFDLGFBQUQsQ0FBUCxDQUF1QnNJLG1CQUFuRDs7QUFDQSxZQUFNQyxzQkFBc0IsR0FBR3ZJLE9BQU8sQ0FBQyxhQUFELENBQVAsQ0FBdUJ1SSxzQkFBdEQ7O0FBRUF0SSxNQUFBQSxFQUFFLENBQUMyQyxhQUFILENBQWlCN0MsSUFBSSxDQUFDdUIsSUFBTCxDQUFVd0csTUFBVixFQUFrQixXQUFsQixDQUFqQixFQUFpRE0sUUFBUSxDQUFDM0gsSUFBSSxDQUFDd0IsVUFBTixFQUFrQm5DLE9BQWxCLEVBQTJCZ0ksTUFBM0IsQ0FBekQsRUFBNkYsTUFBN0Y7QUFDQTdILE1BQUFBLEVBQUUsQ0FBQzJDLGFBQUgsQ0FBaUI3QyxJQUFJLENBQUN1QixJQUFMLENBQVV3RyxNQUFWLEVBQWtCLFVBQWxCLENBQWpCLEVBQWdETyxhQUFhLENBQUNILEtBQUQsRUFBUUYsUUFBUixFQUFrQkMsT0FBbEIsRUFBMkJuSSxPQUEzQixFQUFvQ2dJLE1BQXBDLENBQTdELEVBQTBHLE1BQTFHO0FBQ0E3SCxNQUFBQSxFQUFFLENBQUMyQyxhQUFILENBQWlCN0MsSUFBSSxDQUFDdUIsSUFBTCxDQUFVd0csTUFBVixFQUFrQixzQkFBbEIsQ0FBakIsRUFBNERTLHNCQUFzQixDQUFDekksT0FBRCxFQUFVZ0ksTUFBVixDQUFsRixFQUFxRyxNQUFyRztBQUNBN0gsTUFBQUEsRUFBRSxDQUFDMkMsYUFBSCxDQUFpQjdDLElBQUksQ0FBQ3VCLElBQUwsQ0FBVXdHLE1BQVYsRUFBa0IsZ0JBQWxCLENBQWpCLEVBQXNEUSxtQkFBbUIsQ0FBQ3hJLE9BQUQsRUFBVWdJLE1BQVYsQ0FBekUsRUFBNEYsTUFBNUY7O0FBRUEsVUFBSXJILElBQUksQ0FBQ0osU0FBTCxJQUFrQixTQUF0QixFQUFpQztBQUUvQjtBQUNBLFlBQUlKLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBY3JCLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBd0IsaUJBQXhCLENBQWQsQ0FBSixFQUErRDtBQUM3RCxjQUFJc0gsUUFBUSxHQUFHekksSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixjQUF6QixDQUFmO0FBQ0EsY0FBSXVILE1BQU0sR0FBRzFJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVXdHLE1BQVYsQ0FBYjtBQUNBaEgsVUFBQUEsR0FBRyxDQUFDUyxRQUFKLENBQWFpSCxRQUFiLEVBQXVCQyxNQUF2QjtBQUNBMUYsVUFBQUEsR0FBRyxDQUFDdkIsR0FBRyxHQUFHLGVBQU4sR0FBd0JnSCxRQUFRLENBQUNqRyxPQUFULENBQWlCdEIsT0FBTyxDQUFDQyxHQUFSLEVBQWpCLEVBQWdDLEVBQWhDLENBQXhCLEdBQThELE9BQTlELEdBQXdFdUgsTUFBTSxDQUFDbEcsT0FBUCxDQUFldEIsT0FBTyxDQUFDQyxHQUFSLEVBQWYsRUFBOEIsRUFBOUIsQ0FBekUsQ0FBSDtBQUNEOztBQUVELFlBQUlqQixFQUFFLENBQUNtQixVQUFILENBQWNyQixJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXdCLHVCQUF4QixDQUFkLENBQUosRUFBcUU7QUFDbkUsY0FBSXNILFFBQVEsR0FBR3pJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsY0FBekIsQ0FBZjtBQUNBLGNBQUl1SCxNQUFNLEdBQUcxSSxJQUFJLENBQUN1QixJQUFMLENBQVV3RyxNQUFWLENBQWI7QUFDQWhILFVBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhaUgsUUFBYixFQUF1QkMsTUFBdkI7QUFDQTFGLFVBQUFBLEdBQUcsQ0FBQ3ZCLEdBQUcsR0FBRyxVQUFOLEdBQW1CZ0gsUUFBUSxDQUFDakcsT0FBVCxDQUFpQnRCLE9BQU8sQ0FBQ0MsR0FBUixFQUFqQixFQUFnQyxFQUFoQyxDQUFuQixHQUF5RCxPQUF6RCxHQUFtRXVILE1BQU0sQ0FBQ2xHLE9BQVAsQ0FBZXRCLE9BQU8sQ0FBQ0MsR0FBUixFQUFmLEVBQThCLEVBQTlCLENBQXBFLENBQUg7QUFDRDs7QUFDRCxZQUFJakIsRUFBRSxDQUFDbUIsVUFBSCxDQUFjckIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF3Qix3QkFBeEIsQ0FBZCxDQUFKLEVBQXNFO0FBQ3BFLGNBQUlzSCxRQUFRLEdBQUd6SSxJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLGNBQXpCLENBQWY7QUFDQSxjQUFJdUgsTUFBTSxHQUFHMUksSUFBSSxDQUFDdUIsSUFBTCxDQUFVd0csTUFBVixDQUFiO0FBQ0FoSCxVQUFBQSxHQUFHLENBQUNTLFFBQUosQ0FBYWlILFFBQWIsRUFBdUJDLE1BQXZCO0FBQ0ExRixVQUFBQSxHQUFHLENBQUN2QixHQUFHLEdBQUcsVUFBTixHQUFtQmdILFFBQVEsQ0FBQ2pHLE9BQVQsQ0FBaUJ0QixPQUFPLENBQUNDLEdBQVIsRUFBakIsRUFBZ0MsRUFBaEMsQ0FBbkIsR0FBeUQsT0FBekQsR0FBbUV1SCxNQUFNLENBQUNsRyxPQUFQLENBQWV0QixPQUFPLENBQUNDLEdBQVIsRUFBZixFQUE4QixFQUE5QixDQUFwRSxDQUFIO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJVCxJQUFJLENBQUNKLFNBQUwsSUFBa0IsT0FBdEIsRUFBZ0M7QUFDOUIsWUFBSUosRUFBRSxDQUFDbUIsVUFBSCxDQUFjckIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF3QixxQkFBeEIsQ0FBZCxDQUFKLEVBQW1FO0FBQ2pFLGNBQUlzSCxRQUFRLEdBQUd6SSxJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLHFCQUF6QixDQUFmO0FBQ0EsY0FBSXVILE1BQU0sR0FBRzFJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVXdHLE1BQVYsRUFBa0IsVUFBbEIsQ0FBYjtBQUNBaEgsVUFBQUEsR0FBRyxDQUFDUyxRQUFKLENBQWFpSCxRQUFiLEVBQXVCQyxNQUF2QjtBQUNBMUYsVUFBQUEsR0FBRyxDQUFDdkIsR0FBRyxHQUFHLFVBQU4sR0FBbUJnSCxRQUFRLENBQUNqRyxPQUFULENBQWlCdEIsT0FBTyxDQUFDQyxHQUFSLEVBQWpCLEVBQWdDLEVBQWhDLENBQW5CLEdBQXlELE9BQXpELEdBQW1FdUgsTUFBTSxDQUFDbEcsT0FBUCxDQUFldEIsT0FBTyxDQUFDQyxHQUFSLEVBQWYsRUFBOEIsRUFBOUIsQ0FBcEUsQ0FBSDtBQUNEOztBQUNELFlBQUlqQixFQUFFLENBQUNtQixVQUFILENBQWNyQixJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXdCLHNCQUF4QixDQUFkLENBQUosRUFBb0U7QUFDbEUsY0FBSXNILFFBQVEsR0FBR3pJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsc0JBQXpCLENBQWY7QUFDQSxjQUFJdUgsTUFBTSxHQUFHMUksSUFBSSxDQUFDdUIsSUFBTCxDQUFVd0csTUFBVixFQUFrQixXQUFsQixDQUFiO0FBQ0FoSCxVQUFBQSxHQUFHLENBQUNTLFFBQUosQ0FBYWlILFFBQWIsRUFBdUJDLE1BQXZCO0FBQ0ExRixVQUFBQSxHQUFHLENBQUN2QixHQUFHLEdBQUcsVUFBTixHQUFtQmdILFFBQVEsQ0FBQ2pHLE9BQVQsQ0FBaUJ0QixPQUFPLENBQUNDLEdBQVIsRUFBakIsRUFBZ0MsRUFBaEMsQ0FBbkIsR0FBeUQsT0FBekQsR0FBbUV1SCxNQUFNLENBQUNsRyxPQUFQLENBQWV0QixPQUFPLENBQUNDLEdBQVIsRUFBZixFQUE4QixFQUE5QixDQUFwRSxDQUFIO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJakIsRUFBRSxDQUFDbUIsVUFBSCxDQUFjckIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF3QixZQUF4QixDQUFkLENBQUosRUFBMEQ7QUFDeEQsWUFBSXdILGFBQWEsR0FBRzNJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsWUFBekIsQ0FBcEI7QUFDQSxZQUFJeUgsV0FBVyxHQUFHNUksSUFBSSxDQUFDdUIsSUFBTCxDQUFVd0csTUFBVixFQUFrQixjQUFsQixDQUFsQjtBQUNBaEgsUUFBQUEsR0FBRyxDQUFDUyxRQUFKLENBQWFtSCxhQUFiLEVBQTRCQyxXQUE1QjtBQUNBNUYsUUFBQUEsR0FBRyxDQUFDdkIsR0FBRyxHQUFHLFVBQU4sR0FBbUJrSCxhQUFhLENBQUNuRyxPQUFkLENBQXNCdEIsT0FBTyxDQUFDQyxHQUFSLEVBQXRCLEVBQXFDLEVBQXJDLENBQW5CLEdBQThELE9BQTlELEdBQXdFeUgsV0FBVyxDQUFDcEcsT0FBWixDQUFvQnRCLE9BQU8sQ0FBQ0MsR0FBUixFQUFwQixFQUFtQyxFQUFuQyxDQUF6RSxDQUFIO0FBQ0QsT0F4RGlCLENBMERsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFVBQUlqQixFQUFFLENBQUNtQixVQUFILENBQWNyQixJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXdCLFdBQXhCLENBQWQsQ0FBSixFQUF5RDtBQUN2RCxZQUFJMEgsWUFBWSxHQUFHN0ksSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixXQUF6QixDQUFuQjtBQUNBLFlBQUkySCxVQUFVLEdBQUc5SSxJQUFJLENBQUN1QixJQUFMLENBQVV3RyxNQUFWLEVBQWtCLFVBQWxCLENBQWpCO0FBQ0FoSCxRQUFBQSxHQUFHLENBQUNTLFFBQUosQ0FBYXFILFlBQWIsRUFBMkJDLFVBQTNCO0FBQ0E5RixRQUFBQSxHQUFHLENBQUN2QixHQUFHLEdBQUcsVUFBTixHQUFtQm9ILFlBQVksQ0FBQ3JHLE9BQWIsQ0FBcUJ0QixPQUFPLENBQUNDLEdBQVIsRUFBckIsRUFBb0MsRUFBcEMsQ0FBbkIsR0FBNkQsT0FBN0QsR0FBdUUySCxVQUFVLENBQUN0RyxPQUFYLENBQW1CdEIsT0FBTyxDQUFDQyxHQUFSLEVBQW5CLEVBQWtDLEVBQWxDLENBQXhFLENBQUg7QUFDRDs7QUFFRCxVQUFJakIsRUFBRSxDQUFDbUIsVUFBSCxDQUFjckIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF3QixZQUF4QixDQUFkLENBQUosRUFBMEQ7QUFDeEQsWUFBSXNILFFBQVEsR0FBR3pJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsWUFBekIsQ0FBZjtBQUNBLFlBQUl1SCxNQUFNLEdBQUcxSSxJQUFJLENBQUN1QixJQUFMLENBQVV3RyxNQUFWLEVBQWtCLFdBQWxCLENBQWI7QUFDQWhILFFBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhaUgsUUFBYixFQUF1QkMsTUFBdkI7QUFDQTFGLFFBQUFBLEdBQUcsQ0FBQ3ZCLEdBQUcsR0FBRyxVQUFOLEdBQW1CZ0gsUUFBUSxDQUFDakcsT0FBVCxDQUFpQnRCLE9BQU8sQ0FBQ0MsR0FBUixFQUFqQixFQUFnQyxFQUFoQyxDQUFuQixHQUF5RCxPQUF6RCxHQUFtRXVILE1BQU0sQ0FBQ2xHLE9BQVAsQ0FBZXRCLE9BQU8sQ0FBQ0MsR0FBUixFQUFmLEVBQThCLEVBQTlCLENBQXBFLENBQUg7QUFDRDtBQUVGOztBQUNEVCxJQUFBQSxJQUFJLENBQUMwSCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsUUFBSWhFLEVBQUUsR0FBRyxFQUFUOztBQUNBLFFBQUkxRCxJQUFJLENBQUN3QixVQUFULEVBQXFCO0FBQ25CLFVBQUksQ0FBQ3hCLElBQUksQ0FBQ3lFLElBQUwsQ0FBVTRELFFBQVYsQ0FBbUIsZ0NBQW5CLENBQUwsRUFDRXJJLElBQUksQ0FBQ3lFLElBQUwsQ0FBVTFFLElBQVYsQ0FBZSxnQ0FBZjtBQUNGMkQsTUFBQUEsRUFBRSxHQUFHMUQsSUFBSSxDQUFDeUUsSUFBTCxDQUFVNUQsSUFBVixDQUFlLEtBQWYsQ0FBTDtBQUNELEtBSkQsTUFLSztBQUNINkMsTUFBQUEsRUFBRSxHQUFHLHNCQUFMO0FBQ0Q7O0FBQ0QsUUFBSTFELElBQUksQ0FBQ3NJLFFBQUwsS0FBa0IsSUFBbEIsSUFBMEI1RSxFQUFFLEtBQUsxRCxJQUFJLENBQUNzSSxRQUExQyxFQUFvRDtBQUNsRHRJLE1BQUFBLElBQUksQ0FBQ3NJLFFBQUwsR0FBZ0I1RSxFQUFoQjtBQUNBLFlBQU00RSxRQUFRLEdBQUdoSixJQUFJLENBQUN1QixJQUFMLENBQVV3RyxNQUFWLEVBQWtCLGFBQWxCLENBQWpCO0FBQ0E3SCxNQUFBQSxFQUFFLENBQUMyQyxhQUFILENBQWlCbUcsUUFBakIsRUFBMkI1RSxFQUEzQixFQUErQixNQUEvQjtBQUNBMUQsTUFBQUEsSUFBSSxDQUFDaUgsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFJc0IsU0FBUyxHQUFHbEIsTUFBTSxDQUFDdkYsT0FBUCxDQUFldEIsT0FBTyxDQUFDQyxHQUFSLEVBQWYsRUFBOEIsRUFBOUIsQ0FBaEI7O0FBQ0EsVUFBSThILFNBQVMsQ0FBQ25DLElBQVYsTUFBb0IsRUFBeEIsRUFBNEI7QUFBQ21DLFFBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQWlCOztBQUM5Q2pHLE1BQUFBLEdBQUcsQ0FBQ3ZCLEdBQUcsR0FBRywwQkFBTixHQUFtQ3dILFNBQXBDLENBQUg7QUFDRCxLQVJELE1BU0s7QUFDSHZJLE1BQUFBLElBQUksQ0FBQ2lILE9BQUwsR0FBZSxLQUFmO0FBQ0EzRSxNQUFBQSxHQUFHLENBQUN2QixHQUFHLEdBQUcsd0JBQVAsQ0FBSDtBQUNEO0FBQ0YsR0FySEQsQ0FzSEEsT0FBTWtELENBQU4sRUFBUztBQUNQMUUsSUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3Qm1CLElBQXhCLENBQTZCckIsT0FBN0IsRUFBcUM0RSxDQUFyQzs7QUFDQTdCLElBQUFBLFdBQVcsQ0FBQ0MsTUFBWixDQUFtQnRDLElBQW5CLENBQXdCLHVCQUF1QmtFLENBQS9DO0FBQ0Q7QUFDRixDLENBRUQ7OztBQUNPLFNBQVM0QyxlQUFULENBQXlCOUYsR0FBekIsRUFBOEJxQixXQUE5QixFQUEyQzZELFVBQTNDLEVBQXVEaUIsS0FBdkQsRUFBOEQ3SCxPQUE5RCxFQUF1RTtBQUM1RSxNQUFJO0FBQ0YsVUFBTUcsRUFBRSxHQUFHRCxPQUFPLENBQUMsSUFBRCxDQUFsQjs7QUFDQSxVQUFNbUIsSUFBSSxHQUFHbkIsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3Qm1CLElBQXJDOztBQUNBQSxJQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVMsMEJBQVQsQ0FBSjtBQUVBLFFBQUltSixNQUFKOztBQUFZLFFBQUk7QUFBRUEsTUFBQUEsTUFBTSxHQUFHakosT0FBTyxDQUFDLGFBQUQsQ0FBaEI7QUFBaUMsS0FBdkMsQ0FBd0MsT0FBTzBFLENBQVAsRUFBVTtBQUFFdUUsTUFBQUEsTUFBTSxHQUFHLFFBQVQ7QUFBbUI7O0FBQ25GLFFBQUloSixFQUFFLENBQUNtQixVQUFILENBQWM2SCxNQUFkLENBQUosRUFBMkI7QUFDekI5SCxNQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVMsc0JBQVQsQ0FBSjtBQUNELEtBRkQsTUFHSztBQUNIcUIsTUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLDhCQUFULENBQUo7QUFDRDs7QUFFRCxXQUFPLElBQUlvSixPQUFKLENBQVksQ0FBQ2xJLE9BQUQsRUFBVW1JLE1BQVYsS0FBcUI7QUFDdEMsWUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDeEJqSSxRQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVMsYUFBVCxDQUFKO0FBQ0FrQixRQUFBQSxPQUFPO0FBQ1IsT0FIRDs7QUFLQSxVQUFJcUksSUFBSSxHQUFHO0FBQUVuSSxRQUFBQSxHQUFHLEVBQUV3RixVQUFQO0FBQW1CNEMsUUFBQUEsTUFBTSxFQUFFLElBQTNCO0FBQWlDQyxRQUFBQSxLQUFLLEVBQUUsTUFBeEM7QUFBZ0RDLFFBQUFBLFFBQVEsRUFBRTtBQUExRCxPQUFYO0FBQ0FDLE1BQUFBLFlBQVksQ0FBQ2pJLEdBQUQsRUFBTXlILE1BQU4sRUFBY3RCLEtBQWQsRUFBcUIwQixJQUFyQixFQUEyQnhHLFdBQTNCLEVBQXdDL0MsT0FBeEMsQ0FBWixDQUE2RDRKLElBQTdELENBQ0UsWUFBVztBQUFFTixRQUFBQSxXQUFXO0FBQUksT0FEOUIsRUFFRSxVQUFTTyxNQUFULEVBQWlCO0FBQUVSLFFBQUFBLE1BQU0sQ0FBQ1EsTUFBRCxDQUFOO0FBQWdCLE9BRnJDO0FBSUQsS0FYTSxDQUFQO0FBWUQsR0F6QkQsQ0EwQkEsT0FBTWpGLENBQU4sRUFBUztBQUNQQyxJQUFBQSxPQUFPLENBQUM1QixHQUFSLENBQVksR0FBWjs7QUFDQS9DLElBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JtQixJQUF4QixDQUE2QnJCLE9BQTdCLEVBQXFDNEUsQ0FBckM7O0FBQ0E3QixJQUFBQSxXQUFXLENBQUNDLE1BQVosQ0FBbUJ0QyxJQUFuQixDQUF3QixzQkFBc0JrRSxDQUE5QztBQUNBMkMsSUFBQUEsUUFBUTtBQUNUO0FBQ0YsQyxDQUVEOzs7U0FDc0JvQyxZOzs7Ozs7OzBCQUFmLGtCQUE2QmpJLEdBQTdCLEVBQWtDZ0csT0FBbEMsRUFBMkNHLEtBQTNDLEVBQWtEMEIsSUFBbEQsRUFBd0R4RyxXQUF4RCxFQUFxRS9DLE9BQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVIO0FBQ004SixVQUFBQSxlQUhILEdBR3FCLENBQUMsZUFBRCxFQUFrQixlQUFsQixFQUFtQyxjQUFuQyxFQUFtRCxrQkFBbkQsRUFBdUUsd0JBQXZFLEVBQWlHLDhCQUFqRyxFQUFpSSxPQUFqSSxFQUEwSSxPQUExSSxFQUFtSixlQUFuSixFQUFvSyxxQkFBcEssRUFBMkwsZUFBM0wsRUFBNE0sdUJBQTVNLENBSHJCO0FBSUNDLFVBQUFBLFVBSkQsR0FJY0QsZUFKZDtBQUtDRSxVQUFBQSxLQUxELEdBS1M5SixPQUFPLENBQUMsT0FBRCxDQUxoQjtBQU1HK0osVUFBQUEsVUFOSCxHQU1nQi9KLE9BQU8sQ0FBQyxhQUFELENBTnZCO0FBT0crQyxVQUFBQSxHQVBILEdBT1MvQyxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCK0MsR0FQakM7QUFRSDVCLFVBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVSx1QkFBVixDQUFKO0FBUkc7QUFBQSxpQkFTRyxJQUFJb0osT0FBSixDQUFZLENBQUNsSSxPQUFELEVBQVVtSSxNQUFWLEtBQXFCO0FBQ3JDaEksWUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFVLGFBQVkwSCxPQUFRLEVBQTlCLENBQUo7QUFDQXJHLFlBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxXQUFVNkgsS0FBTSxFQUEzQixDQUFKO0FBQ0F4RyxZQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsVUFBUzZCLElBQUksQ0FBQ0ksU0FBTCxDQUFlc0gsSUFBZixDQUFxQixFQUF6QyxDQUFKO0FBQ0EsZ0JBQUlXLEtBQUssR0FBR0QsVUFBVSxDQUFDdkMsT0FBRCxFQUFVRyxLQUFWLEVBQWlCMEIsSUFBakIsQ0FBdEI7QUFDQVcsWUFBQUEsS0FBSyxDQUFDQyxFQUFOLENBQVMsT0FBVCxFQUFrQixDQUFDMUUsSUFBRCxFQUFPMkUsTUFBUCxLQUFrQjtBQUNsQy9JLGNBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxZQUFELEdBQWV5RixJQUF6QixDQUFKOztBQUNBLGtCQUFHQSxJQUFJLEtBQUssQ0FBWixFQUFlO0FBQUV2RSxnQkFBQUEsT0FBTyxDQUFDLENBQUQsQ0FBUDtBQUFZLGVBQTdCLE1BQ0s7QUFBRTZCLGdCQUFBQSxXQUFXLENBQUNDLE1BQVosQ0FBbUJ0QyxJQUFuQixDQUF5QixJQUFJMkosS0FBSixDQUFVNUUsSUFBVixDQUF6QjtBQUE0Q3ZFLGdCQUFBQSxPQUFPLENBQUMsQ0FBRCxDQUFQO0FBQVk7QUFDaEUsYUFKRDtBQUtBZ0osWUFBQUEsS0FBSyxDQUFDQyxFQUFOLENBQVMsT0FBVCxFQUFtQkcsS0FBRCxJQUFXO0FBQzNCakosY0FBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFXLFVBQVgsQ0FBSjtBQUNBK0MsY0FBQUEsV0FBVyxDQUFDQyxNQUFaLENBQW1CdEMsSUFBbkIsQ0FBd0I0SixLQUF4QjtBQUNBcEosY0FBQUEsT0FBTyxDQUFDLENBQUQsQ0FBUDtBQUNELGFBSkQ7QUFLQWdKLFlBQUFBLEtBQUssQ0FBQ0ssTUFBTixDQUFhSixFQUFiLENBQWdCLE1BQWhCLEVBQXlCdkgsSUFBRCxJQUFVO0FBQ2hDLGtCQUFJNEgsR0FBRyxHQUFHNUgsSUFBSSxDQUFDQyxRQUFMLEdBQWdCSixPQUFoQixDQUF3QixXQUF4QixFQUFxQyxHQUFyQyxFQUEwQ3NFLElBQTFDLEVBQVY7QUFDQTFGLGNBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxHQUFFd0ssR0FBSSxFQUFqQixDQUFKOztBQUNBLGtCQUFJNUgsSUFBSSxJQUFJQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0JzQyxLQUFoQixDQUFzQiwyQkFBdEIsQ0FBWixFQUFnRTtBQUM5RGpFLGdCQUFBQSxPQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0QsZUFGRCxNQUdLO0FBQ0gsb0JBQUk2SSxVQUFVLENBQUNVLElBQVgsQ0FBZ0IsVUFBU0MsQ0FBVCxFQUFZO0FBQUUseUJBQU85SCxJQUFJLENBQUNxQixPQUFMLENBQWF5RyxDQUFiLEtBQW1CLENBQTFCO0FBQThCLGlCQUE1RCxDQUFKLEVBQW1FO0FBQ2pFRixrQkFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUMvSCxPQUFKLENBQVksT0FBWixFQUFxQixFQUFyQixDQUFOO0FBQ0ErSCxrQkFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUMvSCxPQUFKLENBQVksT0FBWixFQUFxQixFQUFyQixDQUFOO0FBQ0ErSCxrQkFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUMvSCxPQUFKLENBQVl0QixPQUFPLENBQUNDLEdBQVIsRUFBWixFQUEyQixFQUEzQixFQUErQjJGLElBQS9CLEVBQU47O0FBQ0Esc0JBQUl5RCxHQUFHLENBQUN4QixRQUFKLENBQWEsT0FBYixDQUFKLEVBQTJCO0FBQ3pCakcsb0JBQUFBLFdBQVcsQ0FBQ0MsTUFBWixDQUFtQnRDLElBQW5CLENBQXdCZ0IsR0FBRyxHQUFHOEksR0FBRyxDQUFDL0gsT0FBSixDQUFZLGFBQVosRUFBMkIsRUFBM0IsQ0FBOUI7QUFDQStILG9CQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQy9ILE9BQUosQ0FBWSxPQUFaLEVBQXNCLEdBQUV1SCxLQUFLLENBQUNXLEdBQU4sQ0FBVSxPQUFWLENBQW1CLEVBQTNDLENBQU47QUFDRDs7QUFDRDFILGtCQUFBQSxHQUFHLENBQUUsR0FBRXZCLEdBQUksR0FBRThJLEdBQUksRUFBZCxDQUFIO0FBQ0Q7QUFDRjtBQUNGLGFBbEJEO0FBbUJBTixZQUFBQSxLQUFLLENBQUNVLE1BQU4sQ0FBYVQsRUFBYixDQUFnQixNQUFoQixFQUF5QnZILElBQUQsSUFBVTtBQUNoQ3ZCLGNBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxrQkFBRCxHQUFxQjRDLElBQS9CLENBQUo7QUFDQSxrQkFBSTRILEdBQUcsR0FBRzVILElBQUksQ0FBQ0MsUUFBTCxHQUFnQkosT0FBaEIsQ0FBd0IsV0FBeEIsRUFBcUMsR0FBckMsRUFBMENzRSxJQUExQyxFQUFWO0FBQ0Esa0JBQUk4RCxXQUFXLEdBQUcseUJBQWxCO0FBQ0Esa0JBQUk3QixRQUFRLEdBQUd3QixHQUFHLENBQUN4QixRQUFKLENBQWE2QixXQUFiLENBQWY7O0FBQ0Esa0JBQUksQ0FBQzdCLFFBQUwsRUFBZTtBQUNibkUsZ0JBQUFBLE9BQU8sQ0FBQzVCLEdBQVIsQ0FBYSxHQUFFdkIsR0FBSSxJQUFHc0ksS0FBSyxDQUFDVyxHQUFOLENBQVUsT0FBVixDQUFtQixJQUFHSCxHQUFJLEVBQWhEO0FBQ0Q7QUFDRixhQVJEO0FBU0QsV0EzQ0ssQ0FUSDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXVESHRLLFVBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JtQixJQUF4QixDQUE2QnJCLE9BQTdCOztBQUNBK0MsVUFBQUEsV0FBVyxDQUFDQyxNQUFaLENBQW1CdEMsSUFBbkIsQ0FBd0IsK0JBQXhCO0FBQ0E2RyxVQUFBQSxRQUFROztBQXpETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTZEQSxTQUFTdEUsR0FBVCxDQUFhNkgsQ0FBYixFQUFnQjtBQUNyQjVLLEVBQUFBLE9BQU8sQ0FBQyxVQUFELENBQVAsQ0FBb0I2SyxRQUFwQixDQUE2QjVKLE9BQU8sQ0FBQ29KLE1BQXJDLEVBQTZDLENBQTdDOztBQUNBLE1BQUk7QUFDRnBKLElBQUFBLE9BQU8sQ0FBQ29KLE1BQVIsQ0FBZVMsU0FBZjtBQUNELEdBRkQsQ0FHQSxPQUFNcEcsQ0FBTixFQUFTLENBQUU7O0FBQ1h6RCxFQUFBQSxPQUFPLENBQUNvSixNQUFSLENBQWVVLEtBQWYsQ0FBcUJILENBQXJCO0FBQ0EzSixFQUFBQSxPQUFPLENBQUNvSixNQUFSLENBQWVVLEtBQWYsQ0FBcUIsSUFBckI7QUFDRDs7QUFFTSxTQUFTNUosSUFBVCxDQUFjckIsT0FBZCxFQUF1QjhLLENBQXZCLEVBQTBCO0FBQy9CLE1BQUk5SyxPQUFPLENBQUNrTCxPQUFSLElBQW1CLEtBQXZCLEVBQThCO0FBQzVCaEwsSUFBQUEsT0FBTyxDQUFDLFVBQUQsQ0FBUCxDQUFvQjZLLFFBQXBCLENBQTZCNUosT0FBTyxDQUFDb0osTUFBckMsRUFBNkMsQ0FBN0M7O0FBQ0EsUUFBSTtBQUNGcEosTUFBQUEsT0FBTyxDQUFDb0osTUFBUixDQUFlUyxTQUFmO0FBQ0QsS0FGRCxDQUdBLE9BQU1wRyxDQUFOLEVBQVMsQ0FBRTs7QUFDWHpELElBQUFBLE9BQU8sQ0FBQ29KLE1BQVIsQ0FBZVUsS0FBZixDQUFzQixhQUFZSCxDQUFFLEVBQXBDO0FBQ0EzSixJQUFBQSxPQUFPLENBQUNvSixNQUFSLENBQWVVLEtBQWYsQ0FBcUIsSUFBckI7QUFDRDtBQUNGOztBQUVNLFNBQVN0SixPQUFULEdBQW1CO0FBQ3hCLE1BQUlxSSxLQUFLLEdBQUc5SixPQUFPLENBQUMsT0FBRCxDQUFuQjs7QUFDQSxNQUFJaUwsTUFBTSxHQUFJLEVBQWQ7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHbEwsT0FBTyxDQUFDLElBQUQsQ0FBUCxDQUFja0wsUUFBZCxFQUFqQjs7QUFDQSxNQUFJQSxRQUFRLElBQUksUUFBaEIsRUFBMEI7QUFBRUQsSUFBQUEsTUFBTSxHQUFJLFVBQVY7QUFBcUIsR0FBakQsTUFDSztBQUFFQSxJQUFBQSxNQUFNLEdBQUksVUFBVjtBQUFxQjs7QUFDNUIsU0FBUSxHQUFFbkIsS0FBSyxDQUFDcUIsS0FBTixDQUFZRixNQUFaLENBQW9CLEdBQTlCO0FBQ0Q7O0FBRU0sU0FBU2pJLFlBQVQsQ0FBc0J4QixHQUF0QixFQUEyQlgsVUFBM0IsRUFBdUN1SyxhQUF2QyxFQUFzRDtBQUMzRCxRQUFNckwsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxRQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUVBLE1BQUl3SyxDQUFDLEdBQUcsRUFBUjtBQUNBLE1BQUlhLFVBQVUsR0FBR3RMLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBMkIsc0JBQTNCLEVBQW1ETCxVQUFuRCxDQUFqQjtBQUNBLE1BQUl5SyxTQUFTLEdBQUlyTCxFQUFFLENBQUNtQixVQUFILENBQWNpSyxVQUFVLEdBQUMsZUFBekIsS0FBNkMxSixJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLEVBQUUsQ0FBQzRCLFlBQUgsQ0FBZ0J3SixVQUFVLEdBQUMsZUFBM0IsRUFBNEMsT0FBNUMsQ0FBWCxDQUE3QyxJQUFpSCxFQUFsSTtBQUNBYixFQUFBQSxDQUFDLENBQUNlLGFBQUYsR0FBa0JELFNBQVMsQ0FBQ0UsT0FBNUI7QUFDQWhCLEVBQUFBLENBQUMsQ0FBQ2lCLFNBQUYsR0FBY0gsU0FBUyxDQUFDRyxTQUF4Qjs7QUFDQSxNQUFJakIsQ0FBQyxDQUFDaUIsU0FBRixJQUFlbkwsU0FBbkIsRUFBOEI7QUFDNUJrSyxJQUFBQSxDQUFDLENBQUNrQixPQUFGLEdBQWEsWUFBYjtBQUNELEdBRkQsTUFHSztBQUNILFFBQUksQ0FBQyxDQUFELElBQU1sQixDQUFDLENBQUNpQixTQUFGLENBQVkxSCxPQUFaLENBQW9CLFdBQXBCLENBQVYsRUFBNEM7QUFDMUN5RyxNQUFBQSxDQUFDLENBQUNrQixPQUFGLEdBQWEsWUFBYjtBQUNELEtBRkQsTUFHSztBQUNIbEIsTUFBQUEsQ0FBQyxDQUFDa0IsT0FBRixHQUFhLFdBQWI7QUFDRDtBQUNGOztBQUVELE1BQUlDLFdBQVcsR0FBRzVMLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBMkIsc0JBQTNCLENBQWxCO0FBQ0EsTUFBSTBLLFVBQVUsR0FBSTNMLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBY3VLLFdBQVcsR0FBQyxlQUExQixLQUE4Q2hLLElBQUksQ0FBQ0MsS0FBTCxDQUFXM0IsRUFBRSxDQUFDNEIsWUFBSCxDQUFnQjhKLFdBQVcsR0FBQyxlQUE1QixFQUE2QyxPQUE3QyxDQUFYLENBQTlDLElBQW1ILEVBQXJJO0FBQ0FuQixFQUFBQSxDQUFDLENBQUNxQixjQUFGLEdBQW1CRCxVQUFVLENBQUNKLE9BQTlCO0FBRUEsTUFBSXpFLE9BQU8sR0FBR2hILElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBMkIsMEJBQTNCLENBQWQ7QUFDQSxNQUFJNEssTUFBTSxHQUFJN0wsRUFBRSxDQUFDbUIsVUFBSCxDQUFjMkYsT0FBTyxHQUFDLGVBQXRCLEtBQTBDcEYsSUFBSSxDQUFDQyxLQUFMLENBQVczQixFQUFFLENBQUM0QixZQUFILENBQWdCa0YsT0FBTyxHQUFDLGVBQXhCLEVBQXlDLE9BQXpDLENBQVgsQ0FBMUMsSUFBMkcsRUFBekg7QUFDQXlELEVBQUFBLENBQUMsQ0FBQ3VCLFVBQUYsR0FBZUQsTUFBTSxDQUFDN0MsTUFBUCxDQUFjdUMsT0FBN0I7QUFFQSxNQUFJUSxPQUFPLEdBQUdqTSxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTRCLDBCQUE1QixDQUFkO0FBQ0EsTUFBSStLLE1BQU0sR0FBSWhNLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBYzRLLE9BQU8sR0FBQyxlQUF0QixLQUEwQ3JLLElBQUksQ0FBQ0MsS0FBTCxDQUFXM0IsRUFBRSxDQUFDNEIsWUFBSCxDQUFnQm1LLE9BQU8sR0FBQyxlQUF4QixFQUF5QyxPQUF6QyxDQUFYLENBQTFDLElBQTJHLEVBQXpIO0FBQ0F4QixFQUFBQSxDQUFDLENBQUMwQixVQUFGLEdBQWVELE1BQU0sQ0FBQ0UsWUFBdEI7O0FBRUEsTUFBSTNCLENBQUMsQ0FBQzBCLFVBQUYsSUFBZ0I1TCxTQUFwQixFQUErQjtBQUM3QixRQUFJMEwsT0FBTyxHQUFHak0sSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUE0Qix3QkFBdUJMLFVBQVcsMkJBQTlELENBQWQ7QUFDQSxRQUFJb0wsTUFBTSxHQUFJaE0sRUFBRSxDQUFDbUIsVUFBSCxDQUFjNEssT0FBTyxHQUFDLGVBQXRCLEtBQTBDckssSUFBSSxDQUFDQyxLQUFMLENBQVczQixFQUFFLENBQUM0QixZQUFILENBQWdCbUssT0FBTyxHQUFDLGVBQXhCLEVBQXlDLE9BQXpDLENBQVgsQ0FBMUMsSUFBMkcsRUFBekg7QUFDQXhCLElBQUFBLENBQUMsQ0FBQzBCLFVBQUYsR0FBZUQsTUFBTSxDQUFDRSxZQUF0QjtBQUNEOztBQUVELE1BQUlDLGFBQWEsR0FBRyxFQUFwQjs7QUFDQyxNQUFJaEIsYUFBYSxJQUFJOUssU0FBakIsSUFBOEI4SyxhQUFhLElBQUksT0FBbkQsRUFBNEQ7QUFDM0QsUUFBSWlCLGFBQWEsR0FBRyxFQUFwQjs7QUFDQSxRQUFJakIsYUFBYSxJQUFJLE9BQXJCLEVBQThCO0FBQzVCaUIsTUFBQUEsYUFBYSxHQUFHdE0sSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUEyQixvQkFBM0IsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJa0ssYUFBYSxJQUFJLFNBQXJCLEVBQWdDO0FBQzlCaUIsTUFBQUEsYUFBYSxHQUFHdE0sSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUEyQiw0QkFBM0IsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJb0wsWUFBWSxHQUFJck0sRUFBRSxDQUFDbUIsVUFBSCxDQUFjaUwsYUFBYSxHQUFDLGVBQTVCLEtBQWdEMUssSUFBSSxDQUFDQyxLQUFMLENBQVczQixFQUFFLENBQUM0QixZQUFILENBQWdCd0ssYUFBYSxHQUFDLGVBQTlCLEVBQStDLE9BQS9DLENBQVgsQ0FBaEQsSUFBdUgsRUFBM0k7QUFDQTdCLElBQUFBLENBQUMsQ0FBQytCLGdCQUFGLEdBQXFCRCxZQUFZLENBQUNkLE9BQWxDO0FBQ0FZLElBQUFBLGFBQWEsR0FBRyxPQUFPaEIsYUFBUCxHQUF1QixJQUF2QixHQUE4QlosQ0FBQyxDQUFDK0IsZ0JBQWhEO0FBQ0Q7O0FBQ0QsU0FBTy9LLEdBQUcsR0FBRyxzQkFBTixHQUErQmdKLENBQUMsQ0FBQ2UsYUFBakMsR0FBaUQsWUFBakQsR0FBZ0VmLENBQUMsQ0FBQ3VCLFVBQWxFLEdBQStFLEdBQS9FLEdBQXFGdkIsQ0FBQyxDQUFDa0IsT0FBdkYsR0FBaUcsd0JBQWpHLEdBQTRIbEIsQ0FBQyxDQUFDMEIsVUFBOUgsR0FBMkksYUFBM0ksR0FBMkoxQixDQUFDLENBQUNxQixjQUE3SixHQUE4S08sYUFBckw7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9jb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHRoaXNWYXJzID0ge31cbiAgdmFyIHRoaXNPcHRpb25zID0ge31cbiAgdmFyIHBsdWdpbiA9IHt9XG5cbiAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycyA9IFtdXG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzLnB1c2goJ3dlYnBhY2sgY29uZmlnOiBmcmFtZXdvcmsgcGFyYW1ldGVyIG9uIGV4dC13ZWJwYWNrLXBsdWdpbiBpcyBub3QgZGVmaW5lZCAtIHZhbHVlczogcmVhY3QsIGFuZ3VsYXIsIGV4dGpzJylcbiAgICBwbHVnaW4udmFycyA9IHRoaXNWYXJzXG4gICAgcmV0dXJuIHBsdWdpblxuICB9XG5cbiAgY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnc2NoZW1hLXV0aWxzJylcbiAgdmFsaWRhdGVPcHRpb25zKHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0VmFsaWRhdGVPcHRpb25zKCksIG9wdGlvbnMsICcnKVxuXG4gIHRoaXNWYXJzID0gcmVxdWlyZShgLi8ke29wdGlvbnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0VmFycygpXG4gIHRoaXNWYXJzLmZyYW1ld29yayA9IG9wdGlvbnMuZnJhbWV3b3JrXG4gIHN3aXRjaCh0aGlzVmFycy5mcmFtZXdvcmspIHtcbiAgICBjYXNlICdleHRqcyc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JlYWN0JzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXJlYWN0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW5ndWxhcic6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1hbmd1bGFyLXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICB9XG5cbiAgLy9maXggZmFzaGlvbiBkaXN0IHByb2JsZW1cbiAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICB2YXIgdG9GYXNoaW9uRGlzdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWQvZGlzdC9qcy9ub2RlX21vZHVsZXMvZmFzaGlvbi9kaXN0YClcbiAgbG9ndihvcHRpb25zLCBgdG9GYXNoaW9uRGlzdCAke3RvRmFzaGlvbkRpc3R9YClcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHRvRmFzaGlvbkRpc3QpKSB7XG4gICAgbG9ndihvcHRpb25zLCBgY29weWApXG4gICAgdmFyIGZyb21GYXNoaW9uRGlzdCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzL0BzZW5jaGEvJyArIHRoaXNWYXJzLnBsdWdpbk5hbWUgKyAnL2Zhc2hpb24vZGlzdC8nKVxuICAgIGZzeC5jb3B5U3luYyhmcm9tRmFzaGlvbkRpc3QsIHRvRmFzaGlvbkRpc3QpXG4gIH1cbiAgZWxzZSB7XG4gICAgbG9ndihvcHRpb25zLCBgbm8gY29weSBvZiBmYXNoaW9uYClcbiAgfVxuXG4gIHRoaXNWYXJzLmFwcCA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRBcHAoKVxuICBsb2d2KG9wdGlvbnMsIGBwbHVnaW5OYW1lIC0gJHt0aGlzVmFycy5wbHVnaW5OYW1lfWApXG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNWYXJzLmFwcCAtICR7dGhpc1ZhcnMuYXBwfWApXG5cbiAgY29uc3QgcmMgPSAoZnMuZXhpc3RzU3luYyhgLmV4dC0ke3RoaXNWYXJzLmZyYW1ld29ya31yY2ApICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCwgJ3V0Zi04JykpIHx8IHt9KVxuICB0aGlzT3B0aW9ucyA9IHsgLi4ucmVxdWlyZShgLi8ke3RoaXNWYXJzLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdE9wdGlvbnMoKSwgLi4ub3B0aW9ucywgLi4ucmMgfVxuICBsb2d2KG9wdGlvbnMsIGB0aGlzT3B0aW9ucyAtICR7SlNPTi5zdHJpbmdpZnkodGhpc09wdGlvbnMpfWApXG4gIGlmICh0aGlzT3B0aW9ucy5lbnZpcm9ubWVudCA9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aGlzVmFycy5wcm9kdWN0aW9uID0gdHJ1ZVxuICAgIGlmICghb3B0aW9ucy5nZW5Qcm9kRGF0YSAmJiBvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgb3B0aW9ucy5wcm9kRmlsZVJlcGxhY2VtZW50Q29uZmlnLmxlbmd0aCkge1xuICAgICAgb3B0aW9ucy5wcm9kRmlsZVJlcGxhY2VtZW50Q29uZmlnLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUucmVwbGFjZSAmJiB2YWx1ZS53aXRoKSB7XG4gICAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIHZhbHVlLndpdGgpXG4gICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZnN4LnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgdmFsdWUucmVwbGFjZSlcbiAgICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSlcbiAgICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGRhdGEsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ0ludmFsaWQgcHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGVsc2UgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSBmYWxzZX1cbiAgbG9nKHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRWZXJzaW9ucyh0aGlzVmFycy5hcHAsIHRoaXNWYXJzLnBsdWdpbk5hbWUsIHRoaXNWYXJzLmZyYW1ld29yaykpXG4gIGxvZyh0aGlzVmFycy5hcHAgKyAnQnVpbGRpbmcgZm9yICcgKyB0aGlzT3B0aW9ucy5lbnZpcm9ubWVudClcblxuICBwbHVnaW4udmFycyA9IHRoaXNWYXJzXG4gIHBsdWdpbi5vcHRpb25zID0gdGhpc09wdGlvbnNcbiAgcmV0dXJuIHBsdWdpblxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29tcGlsYXRpb24oY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLCAnRlVOQ1RJT04gX2NvbXBpbGF0aW9uJylcblxuICAgIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKVxuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICBjb25zdCBleHRBbmd1bGFyUGFja2FnZSA9ICdAc2VuY2hhL2V4dC1hbmd1bGFyJ1xuICAgIGNvbnN0IGV4dEFuZ3VsYXJGb2xkZXIgPSAnZXh0LWFuZ3VsYXItcHJvZCdcbiAgICBjb25zdCBleHRBbmd1bGFyTW9kdWxlID0gJ2V4dC1hbmd1bGFyLm1vZHVsZSdcbiAgICB2YXIgZXh0Q29tcG9uZW50cyA9IFtdXG5cbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsIGBleHQtY29tcGlsYXRpb246IHByb2R1Y3Rpb24gaXMgYCArIHZhcnMucHJvZHVjdGlvbilcblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuICAgICAgICAvLyBSZWFkcyBhbGwgZXh0IGNvbXBvbmVudHMgc291cmNlIGNvZGUgdG8gZ2V0IGFsbCBleHQtY29tcG9uZW50cyBsaXN0XG4gICAgICAgIHZhciB1c2VkRXh0Q29tcG9uZW50cyA9IFtdXG5cbiAgICAgICAgY29uc3QgcGFja2FnZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy8nICsgZXh0QW5ndWxhclBhY2thZ2UpXG4gICAgICAgIHZhciBmaWxlcyA9IGZzeC5yZWFkZGlyU3luYyhgJHtwYWNrYWdlUGF0aH0vbGliYClcbiAgICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgICBpZiAoZmlsZU5hbWUgJiYgZmlsZU5hbWUuc3Vic3RyKDAsIDQpID09ICdleHQtJykge1xuICAgICAgICAgICAgdmFyIGVuZCA9IGZpbGVOYW1lLnN1YnN0cig0KS5pbmRleE9mKCcuY29tcG9uZW50JylcbiAgICAgICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgICAgICBleHRDb21wb25lbnRzLnB1c2goZmlsZU5hbWUuc3Vic3RyaW5nKDQsIGVuZCArIDQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAob3B0aW9ucy5nZW5Qcm9kRGF0YSkge1xuICAgICAgICAgIC8vIFVwZGF0ZSBgYXBwLm1vZHVsZS50c2AgdG8gaW5jbHVkZSBwcm9kIGRhdGEgZm9sZGVyLlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmV3cml0ZSA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCBhcHBNb2R1bGVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXBwL2FwcC5tb2R1bGUudHMnKVxuICAgICAgICAgICAgdmFyIGpzID0gZnN4LnJlYWRGaWxlU3luYyhhcHBNb2R1bGVQYXRoKS50b1N0cmluZygpXG4gICAgICAgICAgICB2YXIgaSA9IGpzLmluZGV4T2YoZXh0QW5ndWxhclBhY2thZ2UpXG4gICAgICAgICAgICBpID0ganMuc3Vic3RyaW5nKDAsIGkpLmxhc3RJbmRleE9mKCdpbXBvcnQnKVxuXG4gICAgICAgICAgICBpZiAoanMuc3Vic3RyKGkgLSAzLCAzKSAhPT0gJy8vICcpIHtcbiAgICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaSkgKyAnXFxuIC8vICcgKyBqcy5zdWJzdHJpbmcoaSlcbiAgICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGF0aFRvRXh0QW5ndWxhck1vZGVybiA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC8ke2V4dEFuZ3VsYXJGb2xkZXJ9YClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ3JlYXRlIHMgdGhlIHByb2QgZm9sZGVyIGlmIGRvZXMgbm90IGV4aXN0cy5cbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKSkge1xuICAgICAgICAgICAgICBta2RpcnAuc3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKVxuICAgICAgICAgICAgICBjb25zdCB0ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5leHRBbmd1bGFyTW9kdWxlKCcnLCAnJywgJycpXG4gICAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKFxuICAgICAgICAgICAgICAgIGAke3BhdGhUb0V4dEFuZ3VsYXJNb2Rlcm59LyR7ZXh0QW5ndWxhck1vZHVsZX0udHNgLCB0LCAndXRmLTgnLCAoKSA9PiB7cmV0dXJufVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaiA9IGpzLmluZGV4T2YoYC4vJHtleHRBbmd1bGFyRm9sZGVyfS8ke2V4dEFuZ3VsYXJNb2R1bGV9YClcbiAgICAgICAgICAgIGlmIChqIDwgMCkge1xuICAgICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBpKSArIGBpbXBvcnQge0V4dEFuZ3VsYXJNb2R1bGV9IGZyb20gJy4vJHtleHRBbmd1bGFyRm9sZGVyfS8ke2V4dEFuZ3VsYXJNb2R1bGV9J1xcbmAgKyBqcy5zdWJzdHIoaSlcbiAgICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgaSA9IGpzLnN1YnN0cmluZygwLCBqKS5sYXN0SW5kZXhPZignaW1wb3J0JylcbiAgICAgICAgICAgICAgaWYgKGpzLnN1YnN0cihpIC0gMywgMykgPT0gJy8vICcpIHtcbiAgICAgICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBpIC0gMykgKyAnXFxuJyArIGpzLnN1YnN0cmluZyhpKVxuICAgICAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoanMuc3Vic3RyaW5nKGktMiwgMikgPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIGpzID0ganMuc3Vic3RyaW5nKDAsIGkgLSAyKSArICdcXG4nICsganMuc3Vic3RyaW5nKGkpXG4gICAgICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJld3JpdGUpXG4gICAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGFwcE1vZHVsZVBhdGgsIGpzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2J1aWxkTW9kdWxlIGhvb2sgaW4gX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21waWxhdGlvbi5ob29rcy5zdWNjZWVkTW9kdWxlLnRhcChgZXh0LXN1Y2NlZWQtbW9kdWxlYCwgbW9kdWxlID0+IHtcbiAgICAgICAgaWYgKGV4dENvbXBvbmVudHMubGVuZ3RoICYmIG1vZHVsZS5yZXNvdXJjZSAmJiAobW9kdWxlLnJlc291cmNlLm1hdGNoKC9cXC4oanx0KXN4PyQvKSB8fFxuICAgICAgICBvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgbW9kdWxlLnJlc291cmNlLm1hdGNoKC9cXC5odG1sJC8pKSAmJlxuICAgICAgICAhbW9kdWxlLnJlc291cmNlLm1hdGNoKC9ub2RlX21vZHVsZXMvKSAmJiAhbW9kdWxlLnJlc291cmNlLm1hdGNoKGAvZXh0LXskb3B0aW9ucy5mcmFtZXdvcmt9L2Rpc3QvYCkpIHtcbiAgICAgICAgICB2YXJzLmRlcHMgPSBbLi4uKHZhcnMuZGVwcyB8fCBbXSksIC4uLnJlcXVpcmUoYC4vJHt2YXJzLmZyYW1ld29ya31VdGlsYCkuZXh0cmFjdEZyb21Tb3VyY2UobW9kdWxlLCBvcHRpb25zLCBjb21waWxhdGlvbiwgZXh0Q29tcG9uZW50cyldXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgb3B0aW9ucy5nZW5Qcm9kRGF0YSkge1xuICAgICAgICBjb21waWxhdGlvbi5ob29rcy5maW5pc2hNb2R1bGVzLnRhcChgZXh0LWZpbmlzaC1tb2R1bGVzYCwgbW9kdWxlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gJ0V4dC5jcmVhdGUoe1xcXCJ4dHlwZVxcXCI6XFxcIidcbiAgICAgICAgICB2YXJzLmRlcHMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNvZGUuaW5kZXhPZihzdHJpbmcpXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICBjb2RlID0gY29kZS5zdWJzdHJpbmcoaW5kZXggKyBzdHJpbmcubGVuZ3RoKVxuICAgICAgICAgICAgICB2YXIgZW5kID0gY29kZS5pbmRleE9mKCdcXFwiJylcbiAgICAgICAgICAgICAgdXNlZEV4dENvbXBvbmVudHMucHVzaChjb2RlLnN1YnN0cigwLCBlbmQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdXNlZEV4dENvbXBvbmVudHMgPSBbLi4ubmV3IFNldCh1c2VkRXh0Q29tcG9uZW50cyldXG4gICAgICAgICAgY29uc3QgcmVhZEZyb20gPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy8nICsgZXh0QW5ndWxhclBhY2thZ2UgKyAnL3NyYy9saWInKVxuICAgICAgICAgIGNvbnN0IHdyaXRlVG9QYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGBzcmMvYXBwLyR7ZXh0QW5ndWxhckZvbGRlcn1gKVxuXG4gICAgICAgICAgY29uc3QgYmFzZUNvbnRlbnQgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfS9iYXNlLnRzYCkudG9TdHJpbmcoKVxuICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofS9iYXNlLnRzYCwgYmFzZUNvbnRlbnQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICBcbiAgICAgICAgICB2YXIgd3JpdGVUb1BhdGhXcml0dGVuID0gZmFsc2VcbiAgICAgICAgICB2YXIgbW9kdWxlVmFycyA9IHtcbiAgICAgICAgICAgIGltcG9ydHM6ICcnLFxuICAgICAgICAgICAgZXhwb3J0czogJycsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHVzZWRFeHRDb21wb25lbnRzLmZvckVhY2goeHR5cGUgPT4ge1xuICAgICAgICAgICAgdmFyIGNhcGNsYXNzbmFtZSA9IHh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeHR5cGUucmVwbGFjZSgvLS9nLCBcIl9cIikuc2xpY2UoMSlcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cyA9IG1vZHVsZVZhcnMuaW1wb3J0cyArIGBpbXBvcnQgeyBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQgfSBmcm9tICcuL2V4dC0ke3h0eXBlfS5jb21wb25lbnQnO1xcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZXhwb3J0cyA9IG1vZHVsZVZhcnMuZXhwb3J0cyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zID0gbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgKyBgICAgIEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCxcXG5gXG4gICAgICAgICAgICB2YXIgY2xhc3NGaWxlID0gYC9leHQtJHt4dHlwZX0uY29tcG9uZW50LnRzYFxuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfSR7Y2xhc3NGaWxlfWApLnRvU3RyaW5nKClcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofSR7Y2xhc3NGaWxlfWAsIGNvbnRlbnRzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgICB3cml0ZVRvUGF0aFdyaXR0ZW4gPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAod3JpdGVUb1BhdGhXcml0dGVuKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZHVsZShcbiAgICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzLCBtb2R1bGVWYXJzLmV4cG9ydHMsIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0vJHtleHRBbmd1bGFyTW9kdWxlfS50c2AsIHQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmh0bWxXZWJwYWNrUGx1Z2luQmVmb3JlSHRtbEdlbmVyYXRpb24udGFwKGBleHQtaHRtbC1nZW5lcmF0aW9uYCwoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ0hPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICAgICAgdmFyIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgICAgICBpZiAoY29tcGlsZXIub3V0cHV0UGF0aCA9PT0gJy8nKSB7XG4gICAgICAgICAgICBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlLCBvdXRwdXRQYXRoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICdidWlsZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBvdXRwdXRQYXRoID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb3V0cHV0UGF0aCA9ICdidWlsZCdcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXRQYXRoID0gb3V0cHV0UGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgdmFyIGpzUGF0aCA9IHBhdGguam9pbihvdXRwdXRQYXRoLCB2YXJzLmV4dFBhdGgsICdleHQuanMnKVxuICAgICAgICB2YXIgY3NzUGF0aCA9IHBhdGguam9pbihvdXRwdXRQYXRoLCB2YXJzLmV4dFBhdGgsICdleHQuY3NzJylcbiAgICAgICAgZGF0YS5hc3NldHMuanMudW5zaGlmdChqc1BhdGgpXG4gICAgICAgIGRhdGEuYXNzZXRzLmNzcy51bnNoaWZ0KGNzc1BhdGgpXG4gICAgICAgIGxvZyh2YXJzLmFwcCArIGBBZGRpbmcgJHtqc1BhdGh9IGFuZCAke2Nzc1BhdGh9IHRvIGluZGV4Lmh0bWxgKVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NraXBwZWQgSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfY29tcGlsYXRpb246ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBlbWl0JylcbiAgICB2YXIgYXBwID0gdmFycy5hcHBcbiAgICB2YXIgZnJhbWV3b3JrID0gdmFycy5mcmFtZXdvcmtcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgY29uc3QgX2J1aWxkRXh0QnVuZGxlID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2J1aWxkRXh0QnVuZGxlXG4gICAgbGV0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3V0cHV0UGF0aCx2YXJzLmV4dFBhdGgpXG4gICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJyAmJiBjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICB9XG4gICAgbG9ndihvcHRpb25zLCdvdXRwdXRQYXRoOiAnICsgb3V0cHV0UGF0aClcbiAgICBsb2d2KG9wdGlvbnMsJ2ZyYW1ld29yazogJyArIGZyYW1ld29yaylcbiAgICBpZiAob3B0aW9ucy5lbWl0ID09IHRydWUpIHtcbiAgICAgIGlmIChmcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgICBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVxdWlyZShgLi8ke2ZyYW1ld29ya31VdGlsYCkuX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuXG4gICAgICB2YXIgY29tbWFuZCA9ICcnXG4gICAgICBpZiAob3B0aW9ucy53YXRjaCA9PSAneWVzJyAmJiB2YXJzLnByb2R1Y3Rpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgY29tbWFuZCA9ICd3YXRjaCdcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21tYW5kID0gJ2J1aWxkJ1xuICAgICAgfVxuXG4gICAgICBpZiAodmFycy5yZWJ1aWxkID09IHRydWUpIHtcbiAgICAgICAgdmFyIHBhcm1zID0gW11cbiAgICAgICAgaWYgKG9wdGlvbnMucHJvZmlsZSA9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5wcm9maWxlID09ICcnIHx8IG9wdGlvbnMucHJvZmlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsICctLXdlYi1zZXJ2ZXInLCAnZmFsc2UnLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChjb21tYW5kID09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCBvcHRpb25zLnByb2ZpbGUsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsICctLXdlYi1zZXJ2ZXInLCAnZmFsc2UnLCBvcHRpb25zLnByb2ZpbGUsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhcnMud2F0Y2hTdGFydGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgYXdhaXQgX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKVxuICAgICAgICAgIHZhcnMud2F0Y2hTdGFydGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9nKGAke3ZhcnMuYXBwfUZVTkNUSU9OIGVtaXQgbm90IHJ1bmApXG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZW1pdDogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXQsIGNvbXBpbGF0aW9uKSB7XG4gIHRyeSB7XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfcHJlcGFyZUZvckJ1aWxkJylcbiAgICBjb25zdCByaW1yYWYgPSByZXF1aXJlKCdyaW1yYWYnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxuICAgIHZhciBwYWNrYWdlcyA9IG9wdGlvbnMucGFja2FnZXNcbiAgICB2YXIgdG9vbGtpdCA9IG9wdGlvbnMudG9vbGtpdFxuICAgIHZhciB0aGVtZSA9IG9wdGlvbnMudGhlbWVcblxuICAgIHRoZW1lID0gdGhlbWUgfHwgKHRvb2xraXQgPT09ICdjbGFzc2ljJyA/ICd0aGVtZS10cml0b24nIDogJ3RoZW1lLW1hdGVyaWFsJylcbiAgICBsb2d2KG9wdGlvbnMsJ2ZpcnN0VGltZTogJyArIHZhcnMuZmlyc3RUaW1lKVxuICAgIGlmICh2YXJzLmZpcnN0VGltZSkge1xuICAgICAgcmltcmFmLnN5bmMob3V0cHV0KVxuICAgICAgbWtkaXJwLnN5bmMob3V0cHV0KVxuICAgICAgY29uc3QgYnVpbGRYTUwgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmJ1aWxkWE1MXG4gICAgICBjb25zdCBjcmVhdGVBcHBKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVBcHBKc29uXG4gICAgICBjb25zdCBjcmVhdGVXb3Jrc3BhY2VKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVXb3Jrc3BhY2VKc29uXG4gICAgICBjb25zdCBjcmVhdGVKU0RPTUVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVKU0RPTUVudmlyb25tZW50XG5cbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2J1aWxkLnhtbCcpLCBidWlsZFhNTCh2YXJzLnByb2R1Y3Rpb24sIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2FwcC5qc29uJyksIGNyZWF0ZUFwcEpzb24odGhlbWUsIHBhY2thZ2VzLCB0b29sa2l0LCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdqc2RvbS1lbnZpcm9ubWVudC5qcycpLCBjcmVhdGVKU0RPTUVudmlyb25tZW50KG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ3dvcmtzcGFjZS5qc29uJyksIGNyZWF0ZVdvcmtzcGFjZUpzb24ob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuXG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG5cbiAgICAgICAgLy9iZWNhdXNlIG9mIGEgcHJvYmxlbSB3aXRoIGNvbG9ycGlja2VyXG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtYW5ndWxhci91eC8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICh1eCkgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtYW5ndWxhci9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAncmVhY3QnKSAge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L3BhY2thZ2VzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9vdmVycmlkZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdvdmVycmlkZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJy4uL3Jlc291cmNlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICAvLyBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgLy8gICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAvLyAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICdyZXNvdXJjZXMnKVxuICAgICAgLy8gICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAvLyAgIGxvZyhhcHAgKyAnNkNvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAvLyB9XG4gICAgICBcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdwYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21QYWNrYWdlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncGFja2FnZXMvJylcbiAgICAgICAgdmFyIHRvUGFja2FnZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhY2thZ2VzLCB0b1BhY2thZ2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYWNrYWdlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ292ZXJyaWRlcy8nKVxuICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuICAgIH1cbiAgICB2YXJzLmZpcnN0VGltZSA9IGZhbHNlXG4gICAgdmFyIGpzID0gJydcbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBpZiAoIXZhcnMuZGVwcy5pbmNsdWRlcygnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJykpXG4gICAgICAgIHZhcnMuZGVwcy5wdXNoKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKVxuICAgICAganMgPSB2YXJzLmRlcHMuam9pbignO1xcbicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGpzID0gJ0V4dC5yZXF1aXJlKFwiRXh0LipcIiknXG4gICAgfVxuICAgIGlmICh2YXJzLm1hbmlmZXN0ID09PSBudWxsIHx8IGpzICE9PSB2YXJzLm1hbmlmZXN0KSB7XG4gICAgICB2YXJzLm1hbmlmZXN0ID0ganNcbiAgICAgIGNvbnN0IG1hbmlmZXN0ID0gcGF0aC5qb2luKG91dHB1dCwgJ21hbmlmZXN0LmpzJylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMobWFuaWZlc3QsIGpzLCAndXRmOCcpXG4gICAgICB2YXJzLnJlYnVpbGQgPSB0cnVlXG4gICAgICB2YXIgYnVuZGxlRGlyID0gb3V0cHV0LnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpXG4gICAgICBpZiAoYnVuZGxlRGlyLnRyaW0oKSA9PSAnJykge2J1bmRsZURpciA9ICcuLyd9XG4gICAgICBsb2coYXBwICsgJ0J1aWxkaW5nIEV4dCBidW5kbGUgYXQ6ICcgKyBidW5kbGVEaXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFycy5yZWJ1aWxkID0gZmFsc2VcbiAgICAgIGxvZyhhcHAgKyAnRXh0IHJlYnVpbGQgTk9UIG5lZWRlZCcpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX3ByZXBhcmVGb3JCdWlsZDogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9idWlsZEV4dEJ1bmRsZScpXG5cbiAgICBsZXQgc2VuY2hhOyB0cnkgeyBzZW5jaGEgPSByZXF1aXJlKCdAc2VuY2hhL2NtZCcpIH0gY2F0Y2ggKGUpIHsgc2VuY2hhID0gJ3NlbmNoYScgfVxuICAgIGlmIChmcy5leGlzdHNTeW5jKHNlbmNoYSkpIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2VuY2hhIGZvbGRlciBleGlzdHMnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2VuY2hhIGZvbGRlciBET0VTIE5PVCBleGlzdCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9uQnVpbGREb25lID0gKCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ29uQnVpbGREb25lJylcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRzID0geyBjd2Q6IG91dHB1dFBhdGgsIHNpbGVudDogdHJ1ZSwgc3RkaW86ICdwaXBlJywgZW5jb2Rpbmc6ICd1dGYtOCd9XG4gICAgICBleGVjdXRlQXN5bmMoYXBwLCBzZW5jaGEsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykudGhlbiAoXG4gICAgICAgIGZ1bmN0aW9uKCkgeyBvbkJ1aWxkRG9uZSgpIH0sIFxuICAgICAgICBmdW5jdGlvbihyZWFzb24pIHsgcmVqZWN0KHJlYXNvbikgfVxuICAgICAgKVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIGNvbnNvbGUubG9nKCdlJylcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2J1aWxkRXh0QnVuZGxlOiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUFzeW5jIChhcHAsIGNvbW1hbmQsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykge1xuICB0cnkge1xuICAgIC8vY29uc3QgREVGQVVMVF9TVUJTVFJTID0gWydbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gU2VydmVyXCIsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIGNvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFtcIltJTkZdIHhTZXJ2ZXJcIiwgJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gQXBwZW5kJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0lORl0gUHJvY2Vzc2luZyBCdWlsZCcsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgdmFyIHN1YnN0cmluZ3MgPSBERUZBVUxUX1NVQlNUUlMgXG4gICAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICAgIGNvbnN0IGNyb3NzU3Bhd24gPSByZXF1aXJlKCdjcm9zcy1zcGF3bicpXG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgbG9ndihvcHRpb25zLCAnRlVOQ1RJT04gZXhlY3V0ZUFzeW5jJylcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsb2d2KG9wdGlvbnMsYGNvbW1hbmQgLSAke2NvbW1hbmR9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYHBhcm1zIC0gJHtwYXJtc31gKVxuICAgICAgbG9ndihvcHRpb25zLCBgb3B0cyAtICR7SlNPTi5zdHJpbmdpZnkob3B0cyl9YClcbiAgICAgIGxldCBjaGlsZCA9IGNyb3NzU3Bhd24oY29tbWFuZCwgcGFybXMsIG9wdHMpXG4gICAgICBjaGlsZC5vbignY2xvc2UnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGNsb3NlOiBgICsgY29kZSkgXG4gICAgICAgIGlmKGNvZGUgPT09IDApIHsgcmVzb2x2ZSgwKSB9XG4gICAgICAgIGVsc2UgeyBjb21waWxhdGlvbi5lcnJvcnMucHVzaCggbmV3IEVycm9yKGNvZGUpICk7IHJlc29sdmUoMCkgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLm9uKCdlcnJvcicsIChlcnJvcikgPT4geyBcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gZXJyb3JgKSBcbiAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICAgIHJlc29sdmUoMClcbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgbG9ndihvcHRpb25zLCBgJHtzdHJ9YClcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZygpLm1hdGNoKC93YWl0aW5nIGZvciBjaGFuZ2VzXFwuXFwuXFwuLykpIHtcbiAgICAgICAgICByZXNvbHZlKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHN1YnN0cmluZ3Muc29tZShmdW5jdGlvbih2KSB7IHJldHVybiBkYXRhLmluZGV4T2YodikgPj0gMDsgfSkpIHsgXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltJTkZdXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltMT0ddXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKFwiW0VSUl1cIikpIHtcbiAgICAgICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goYXBwICsgc3RyLnJlcGxhY2UoL15cXFtFUlJcXF0gL2dpLCAnJykpO1xuICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltFUlJdXCIsIGAke2NoYWxrLnJlZChcIltFUlJdXCIpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2coYCR7YXBwfSR7c3RyfWApIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZGVyci5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYGVycm9yIG9uIGNsb3NlOiBgICsgZGF0YSkgXG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICB2YXIgc3RySmF2YU9wdHMgPSBcIlBpY2tlZCB1cCBfSkFWQV9PUFRJT05TXCI7XG4gICAgICAgIHZhciBpbmNsdWRlcyA9IHN0ci5pbmNsdWRlcyhzdHJKYXZhT3B0cylcbiAgICAgICAgaWYgKCFpbmNsdWRlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2FwcH0gJHtjaGFsay5yZWQoXCJbRVJSXVwiKX0gJHtzdHJ9YClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZXhlY3V0ZUFzeW5jOiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH0gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cocykge1xuICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICB0cnkge1xuICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gIH1cbiAgY2F0Y2goZSkge31cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUocylcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2d2KG9wdGlvbnMsIHMpIHtcbiAgaWYgKG9wdGlvbnMudmVyYm9zZSA9PSAneWVzJykge1xuICAgIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYC12ZXJib3NlOiAke3N9YClcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFwcCgpIHtcbiAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICB2YXIgcHJlZml4ID0gYGBcbiAgY29uc3QgcGxhdGZvcm0gPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKClcbiAgaWYgKHBsYXRmb3JtID09ICdkYXJ3aW4nKSB7IHByZWZpeCA9IGDihLkg772iZXh0772jOmAgfVxuICBlbHNlIHsgcHJlZml4ID0gYGkgW2V4dF06YCB9XG4gIHJldHVybiBgJHtjaGFsay5ncmVlbihwcmVmaXgpfSBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VmVyc2lvbnMoYXBwLCBwbHVnaW5OYW1lLCBmcmFtZXdvcmtOYW1lKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHYgPSB7fVxuICB2YXIgcGx1Z2luUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYScsIHBsdWdpbk5hbWUpXG4gIHZhciBwbHVnaW5Qa2cgPSAoZnMuZXhpc3RzU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYucGx1Z2luVmVyc2lvbiA9IHBsdWdpblBrZy52ZXJzaW9uXG4gIHYuX3Jlc29sdmVkID0gcGx1Z2luUGtnLl9yZXNvbHZlZFxuICBpZiAodi5fcmVzb2x2ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKC0xID09IHYuX3Jlc29sdmVkLmluZGV4T2YoJ2NvbW11bml0eScpKSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbXVuaXR5YFxuICAgIH1cbiAgfVxuXG4gIHZhciB3ZWJwYWNrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvd2VicGFjaycpXG4gIHZhciB3ZWJwYWNrUGtnID0gKGZzLmV4aXN0c1N5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYud2VicGFja1ZlcnNpb24gPSB3ZWJwYWNrUGtnLnZlcnNpb25cblxuICB2YXIgZXh0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQnKVxuICB2YXIgZXh0UGtnID0gKGZzLmV4aXN0c1N5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmV4dFZlcnNpb24gPSBleHRQa2cuc2VuY2hhLnZlcnNpb25cblxuICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG5cbiAgaWYgKHYuY21kVmVyc2lvbiA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS8ke3BsdWdpbk5hbWV9L25vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gICAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG4gIH1cblxuICB2YXIgZnJhbWV3b3JrSW5mbyA9ICcnXG4gICBpZiAoZnJhbWV3b3JrTmFtZSAhPSB1bmRlZmluZWQgJiYgZnJhbWV3b3JrTmFtZSAhPSAnZXh0anMnKSB7XG4gICAgdmFyIGZyYW1ld29ya1BhdGggPSAnJ1xuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdyZWFjdCcpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3JlYWN0JylcbiAgICB9XG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlJylcbiAgICB9XG4gICAgdmFyIGZyYW1ld29ya1BrZyA9IChmcy5leGlzdHNTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmZyYW1ld29ya1ZlcnNpb24gPSBmcmFtZXdvcmtQa2cudmVyc2lvblxuICAgIGZyYW1ld29ya0luZm8gPSAnLCAnICsgZnJhbWV3b3JrTmFtZSArICcgdicgKyB2LmZyYW1ld29ya1ZlcnNpb25cbiAgfVxuICByZXR1cm4gYXBwICsgJ2V4dC13ZWJwYWNrLXBsdWdpbiB2JyArIHYucGx1Z2luVmVyc2lvbiArICcsIEV4dCBKUyB2JyArIHYuZXh0VmVyc2lvbiArICcgJyArIHYuZWRpdGlvbiArICcgRWRpdGlvbiwgU2VuY2hhIENtZCB2JyArIHYuY21kVmVyc2lvbiArICcsIHdlYnBhY2sgdicgKyB2LndlYnBhY2tWZXJzaW9uICsgZnJhbWV3b3JrSW5mb1xuIH0iXX0=