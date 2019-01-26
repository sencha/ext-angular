"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._constructor = _constructor;
exports._compilation = _compilation;
exports._afterCompile = _afterCompile;
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

  const fsx = require('fs-extra');

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
  // var toFashionDist = path.resolve(process.cwd(),`node_modules/@sencha/cmd/dist/js/node_modules/fashion/dist`)
  // logv(options, `toFashionDist ${toFashionDist}`)
  // if (!fs.existsSync(toFashionDist)) {
  //   logv(options, `copy`)
  //   var fromFashionDist = path.join(process.cwd(), 'node_modules/@sencha/' + thisVars.pluginName + '/fashion/dist/')
  //   fsx.copySync(fromFashionDist, toFashionDist)
  // }
  // else {
  //   logv(options, `no copy of fashion`)
  // }


  thisVars.app = require('./pluginUtil')._getApp();
  logv(options, `pluginName - ${thisVars.pluginName}`);
  logv(options, `thisVars.app - ${thisVars.app}`);
  const rc = fs.existsSync(`.ext-${thisVars.framework}rc`) && JSON.parse(fs.readFileSync(`.ext-${thisVars.framework}rc`, 'utf-8')) || {};
  thisOptions = _objectSpread({}, require(`./${thisVars.framework}Util`).getDefaultOptions(), options, rc);
  logv(options, `thisOptions - ${JSON.stringify(thisOptions)}`); //mjg

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
      if (options.framework == 'angular' && options.genProdData) {
        //      if (options.framework == 'angular') {
        //        if (options.genProdData) {
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
        });

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
        } //        }

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


function _afterCompile(compiler, compilation, vars, options) {
  require('./pluginUtil').logv(options, 'FUNCTION _afterCompile');
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
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwiZnN4IiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiYXBwIiwiX2dldEFwcCIsImxvZ3YiLCJyYyIsImV4aXN0c1N5bmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImdlblByb2REYXRhIiwicHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZyIsImxlbmd0aCIsImZvckVhY2giLCJ2YWx1ZSIsInJlcGxhY2UiLCJ3aXRoIiwiZmlsZVBhdGgiLCJyZXNvbHZlIiwicHJvY2VzcyIsImN3ZCIsImRhdGEiLCJ0b1N0cmluZyIsIndyaXRlRmlsZVN5bmMiLCJjb21waWxhdGlvbiIsImVycm9ycyIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwibWtkaXJwIiwiZXh0QW5ndWxhclBhY2thZ2UiLCJleHRBbmd1bGFyRm9sZGVyIiwiZXh0QW5ndWxhck1vZHVsZSIsInBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm4iLCJleHRDb21wb25lbnRzIiwicGFja2FnZVBhdGgiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwiZmlsZU5hbWUiLCJzdWJzdHIiLCJlbmQiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwiYXBwTW9kdWxlUGF0aCIsImpzIiwibmV3SnMiLCJzeW5jIiwidCIsImUiLCJjb25zb2xlIiwiaG9va3MiLCJzdWNjZWVkTW9kdWxlIiwidGFwIiwibW9kdWxlIiwicmVzb3VyY2UiLCJtYXRjaCIsImRlcHMiLCJleHRyYWN0RnJvbVNvdXJjZSIsImZpbmlzaE1vZHVsZXMiLCJtb2R1bGVzIiwic3RyaW5nIiwiY29kZSIsImluZGV4IiwidXNlZEV4dENvbXBvbmVudHMiLCJTZXQiLCJyZWFkRnJvbSIsIndyaXRlVG9QYXRoIiwiYmFzZUNvbnRlbnQiLCJ3cml0ZVRvUGF0aFdyaXR0ZW4iLCJtb2R1bGVWYXJzIiwiaW1wb3J0cyIsImV4cG9ydHMiLCJkZWNsYXJhdGlvbnMiLCJ4dHlwZSIsImNhcGNsYXNzbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjbGFzc0ZpbGUiLCJjb250ZW50cyIsImh0bWxXZWJwYWNrUGx1Z2luQmVmb3JlSHRtbEdlbmVyYXRpb24iLCJvdXRwdXRQYXRoIiwiZGV2U2VydmVyIiwiam9pbiIsImNvbnRlbnRCYXNlIiwidHJpbSIsImpzUGF0aCIsImV4dFBhdGgiLCJjc3NQYXRoIiwiYXNzZXRzIiwidW5zaGlmdCIsImNzcyIsIl9hZnRlckNvbXBpbGUiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsIndhdGNoU3RhcnRlZCIsIm91dHB1dCIsInJpbXJhZiIsInBhY2thZ2VzIiwidG9vbGtpdCIsInRoZW1lIiwiZmlyc3RUaW1lIiwiYnVpbGRYTUwiLCJjcmVhdGVBcHBKc29uIiwiY3JlYXRlV29ya3NwYWNlSnNvbiIsImNyZWF0ZUpTRE9NRW52aXJvbm1lbnQiLCJmcm9tUGF0aCIsInRvUGF0aCIsImNvcHlTeW5jIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsImluY2x1ZGVzIiwibWFuaWZlc3QiLCJidW5kbGVEaXIiLCJzZW5jaGEiLCJQcm9taXNlIiwicmVqZWN0Iiwib25CdWlsZERvbmUiLCJvcHRzIiwic2lsZW50Iiwic3RkaW8iLCJlbmNvZGluZyIsImV4ZWN1dGVBc3luYyIsInRoZW4iLCJyZWFzb24iLCJERUZBVUxUX1NVQlNUUlMiLCJzdWJzdHJpbmdzIiwiY2hhbGsiLCJjcm9zc1NwYXduIiwiY2hpbGQiLCJvbiIsInNpZ25hbCIsIkVycm9yIiwiZXJyb3IiLCJzdGRvdXQiLCJzdHIiLCJzb21lIiwidiIsInJlZCIsInN0ZGVyciIsInN0ckphdmFPcHRzIiwicyIsImN1cnNvclRvIiwiY2xlYXJMaW5lIiwid3JpdGUiLCJ2ZXJib3NlIiwicHJlZml4IiwicGxhdGZvcm0iLCJncmVlbiIsImZyYW1ld29ya05hbWUiLCJwbHVnaW5QYXRoIiwicGx1Z2luUGtnIiwicGx1Z2luVmVyc2lvbiIsInZlcnNpb24iLCJfcmVzb2x2ZWQiLCJlZGl0aW9uIiwid2VicGFja1BhdGgiLCJ3ZWJwYWNrUGtnIiwid2VicGFja1ZlcnNpb24iLCJleHRQa2ciLCJleHRWZXJzaW9uIiwiY21kUGF0aCIsImNtZFBrZyIsImNtZFZlcnNpb24iLCJ2ZXJzaW9uX2Z1bGwiLCJmcmFtZXdvcmtJbmZvIiwiZnJhbWV3b3JrUGF0aCIsImZyYW1ld29ya1BrZyIsImZyYW1ld29ya1ZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQ3BDLFFBQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsUUFBTUMsRUFBRSxHQUFHRCxPQUFPLENBQUMsSUFBRCxDQUFsQjs7QUFDQSxRQUFNRSxHQUFHLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQW5COztBQUVBLE1BQUlHLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBRUEsTUFBSVAsT0FBTyxDQUFDUSxTQUFSLElBQXFCQyxTQUF6QixFQUFvQztBQUNsQ0osSUFBQUEsUUFBUSxD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QyxHQUFpRCxZQUFqRCxHQUFnRWYsQ0FBQyxDQUFDdUIsVUFBbEUsR0FBK0UsR0FBL0UsR0FBcUZ2QixDQUFDLENBQUNrQixPQUF2RixHQUFpRyx3QkFBakcsR0FBNEhsQixDQUFDLENBQUMwQixVQUE5SCxHQUEySSxhQUEzSSxHQUEySjFCLENBQUMsQ0FBQ3FCLGNBQTdKLEdBQThLTyxhQUFyTDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuXG4gIHZhciB0aGlzVmFycyA9IHt9XG4gIHZhciB0aGlzT3B0aW9ucyA9IHt9XG4gIHZhciBwbHVnaW4gPSB7fVxuXG4gIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMgPSBbXVxuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycy5wdXNoKCd3ZWJwYWNrIGNvbmZpZzogZnJhbWV3b3JrIHBhcmFtZXRlciBvbiBleHQtd2VicGFjay1wbHVnaW4gaXMgbm90IGRlZmluZWQgLSB2YWx1ZXM6IHJlYWN0LCBhbmd1bGFyLCBleHRqcycpXG4gICAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICAgIHJldHVybiBwbHVnaW5cbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlT3B0aW9ucyA9IHJlcXVpcmUoJ3NjaGVtYS11dGlscycpXG4gIHZhbGlkYXRlT3B0aW9ucyhyZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldFZhbGlkYXRlT3B0aW9ucygpLCBvcHRpb25zLCAnJylcbiAgdGhpc1ZhcnMgPSByZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldERlZmF1bHRWYXJzKClcbiAgdGhpc1ZhcnMuZnJhbWV3b3JrID0gb3B0aW9ucy5mcmFtZXdvcmtcbiAgc3dpdGNoKHRoaXNWYXJzLmZyYW1ld29yaykge1xuICAgIGNhc2UgJ2V4dGpzJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVhY3QnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtcmVhY3Qtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbmd1bGFyJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LWFuZ3VsYXItd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gIH1cblxuICAvL2ZpeCBmYXNoaW9uIGRpc3QgcHJvYmxlbVxuXG4gIC8vIHZhciB0b0Zhc2hpb25EaXN0ID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZC9kaXN0L2pzL25vZGVfbW9kdWxlcy9mYXNoaW9uL2Rpc3RgKVxuICAvLyBsb2d2KG9wdGlvbnMsIGB0b0Zhc2hpb25EaXN0ICR7dG9GYXNoaW9uRGlzdH1gKVxuICAvLyBpZiAoIWZzLmV4aXN0c1N5bmModG9GYXNoaW9uRGlzdCkpIHtcbiAgLy8gICBsb2d2KG9wdGlvbnMsIGBjb3B5YClcbiAgLy8gICB2YXIgZnJvbUZhc2hpb25EaXN0ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS8nICsgdGhpc1ZhcnMucGx1Z2luTmFtZSArICcvZmFzaGlvbi9kaXN0LycpXG4gIC8vICAgZnN4LmNvcHlTeW5jKGZyb21GYXNoaW9uRGlzdCwgdG9GYXNoaW9uRGlzdClcbiAgLy8gfVxuICAvLyBlbHNlIHtcbiAgLy8gICBsb2d2KG9wdGlvbnMsIGBubyBjb3B5IG9mIGZhc2hpb25gKVxuICAvLyB9XG5cbiAgdGhpc1ZhcnMuYXBwID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldEFwcCgpXG4gIGxvZ3Yob3B0aW9ucywgYHBsdWdpbk5hbWUgLSAke3RoaXNWYXJzLnBsdWdpbk5hbWV9YClcbiAgbG9ndihvcHRpb25zLCBgdGhpc1ZhcnMuYXBwIC0gJHt0aGlzVmFycy5hcHB9YClcblxuICBjb25zdCByYyA9IChmcy5leGlzdHNTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCkgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgLCAndXRmLTgnKSkgfHwge30pXG4gIHRoaXNPcHRpb25zID0geyAuLi5yZXF1aXJlKGAuLyR7dGhpc1ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0T3B0aW9ucygpLCAuLi5vcHRpb25zLCAuLi5yYyB9XG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNPcHRpb25zIC0gJHtKU09OLnN0cmluZ2lmeSh0aGlzT3B0aW9ucyl9YClcblxuICAvL21qZ1xuICBpZiAodGhpc09wdGlvbnMuZW52aXJvbm1lbnQgPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdGhpc1ZhcnMucHJvZHVjdGlvbiA9IHRydWVcbiAgICB0aGlzT3B0aW9ucy5nZW5Qcm9kRGF0YSA9IG9wdGlvbnMuZ2VuUHJvZERhdGFcbiAgICBpZiAoIW9wdGlvbnMuZ2VuUHJvZERhdGEgJiYgb3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG9wdGlvbnMucHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZy5sZW5ndGgpIHtcbiAgICAgIG9wdGlvbnMucHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLnJlcGxhY2UgJiYgdmFsdWUud2l0aCkge1xuICAgICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCB2YWx1ZS53aXRoKVxuICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGZzeC5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKClcbiAgICAgICAgICAgIGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIHZhbHVlLnJlcGxhY2UpXG4gICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpXG4gICAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBkYXRhLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdJbnZhbGlkIHByb2RGaWxlUmVwbGFjZW1lbnRDb25maWcnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBlbHNlIFxuICAgIHsgdGhpc1ZhcnMucHJvZHVjdGlvbiA9IGZhbHNlIH1cblxuICBsb2cocmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldFZlcnNpb25zKHRoaXNWYXJzLmFwcCwgdGhpc1ZhcnMucGx1Z2luTmFtZSwgdGhpc1ZhcnMuZnJhbWV3b3JrKSlcbiAgbG9nKHRoaXNWYXJzLmFwcCArICdCdWlsZGluZyBmb3IgJyArIHRoaXNPcHRpb25zLmVudmlyb25tZW50KVxuICBsb2codGhpc1ZhcnMuYXBwICsgJ0dlbmVyYXRpbmcgcHJvZHVjdGlvbiBkYXRhOiAnICsgdGhpc09wdGlvbnMuZ2VuUHJvZERhdGEpXG5cbiAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICBwbHVnaW4ub3B0aW9ucyA9IHRoaXNPcHRpb25zXG4gIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIGNvbnN0cnVjdG9yIChlbmQpJylcbiAgcmV0dXJuIHBsdWdpblxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29tcGlsYXRpb24oY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLCAnRlVOQ1RJT04gX2NvbXBpbGF0aW9uJylcblxuICAgIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKVxuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxuICAgIGNvbnN0IGV4dEFuZ3VsYXJQYWNrYWdlID0gJ0BzZW5jaGEvZXh0LWFuZ3VsYXInXG4gICAgY29uc3QgZXh0QW5ndWxhckZvbGRlciA9ICdleHQtYW5ndWxhci1wcm9kJ1xuICAgIGNvbnN0IGV4dEFuZ3VsYXJNb2R1bGUgPSAnZXh0LWFuZ3VsYXIubW9kdWxlJ1xuICAgIGNvbnN0IHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm4gPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYHNyYy9hcHAvJHtleHRBbmd1bGFyRm9sZGVyfWApXG4gICAgdmFyIGV4dENvbXBvbmVudHMgPSBbXVxuXG4gICAgaWYgKHZhcnMucHJvZHVjdGlvbikge1xuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBvcHRpb25zLmdlblByb2REYXRhKSB7XG4vLyAgICAgIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicpIHtcbi8vICAgICAgICBpZiAob3B0aW9ucy5nZW5Qcm9kRGF0YSkge1xuXG5cblxuICAgICAgICAvLyBSZWFkcyBhbGwgZXh0IGNvbXBvbmVudHMgc291cmNlIGNvZGUgdG8gZ2V0IGFsbCBleHQtY29tcG9uZW50cyBsaXN0XG4gICAgICAgIGNvbnN0IHBhY2thZ2VQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvJyArIGV4dEFuZ3VsYXJQYWNrYWdlKVxuICAgICAgICB2YXIgZmlsZXMgPSBmc3gucmVhZGRpclN5bmMoYCR7cGFja2FnZVBhdGh9L2xpYmApXG4gICAgICAgIGZpbGVzLmZvckVhY2goKGZpbGVOYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbGVOYW1lICYmIGZpbGVOYW1lLnN1YnN0cigwLCA0KSA9PSAnZXh0LScpIHtcbiAgICAgICAgICAgIHZhciBlbmQgPSBmaWxlTmFtZS5zdWJzdHIoNCkuaW5kZXhPZignLmNvbXBvbmVudCcpXG4gICAgICAgICAgICBpZiAoZW5kID49IDApIHtcbiAgICAgICAgICAgICAgZXh0Q29tcG9uZW50cy5wdXNoKGZpbGVOYW1lLnN1YnN0cmluZyg0LCBlbmQgKyA0KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhcHBNb2R1bGVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXBwL2FwcC5tb2R1bGUudHMnKVxuICAgICAgICAgIHZhciBqcyA9IGZzeC5yZWFkRmlsZVN5bmMoYXBwTW9kdWxlUGF0aCkudG9TdHJpbmcoKVxuICAgICAgICAgIHZhciBuZXdKcyA9IGpzLnJlcGxhY2UoXG4gICAgICAgICAgICBgaW1wb3J0IHsgRXh0QW5ndWxhck1vZHVsZSB9IGZyb20gJ0BzZW5jaGEvZXh0LWFuZ3VsYXInYCxcbiAgICAgICAgICAgIGBpbXBvcnQgeyBFeHRBbmd1bGFyTW9kdWxlIH0gZnJvbSAnLi9leHQtYW5ndWxhci1wcm9kL2V4dC1hbmd1bGFyLm1vZHVsZSdgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhhcHBNb2R1bGVQYXRoLCBuZXdKcywgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuXG4gICAgICAgICAgLy8gQ3JlYXRlIHRoZSBwcm9kIGZvbGRlciBpZiBkb2VzIG5vdCBleGlzdHMuXG4gICAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm4pKSB7XG4gICAgICAgICAgICBta2RpcnAuc3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKVxuICAgICAgICAgICAgY29uc3QgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZHVsZSgnJywgJycsICcnKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7cGF0aFRvRXh0QW5ndWxhck1vZGVybn0vJHtleHRBbmd1bGFyTW9kdWxlfS50c2AsIHQsICd1dGYtOCcsICgpID0+IHtyZXR1cm59KVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnYnVpbGRNb2R1bGUgaG9vayBpbiBfY29tcGlsYXRpb246ICcgKyBlKVxuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4vLyAgICAgICAgfVxuXG5cblxuICAgICAgfVxuXG4gICAgICBjb21waWxhdGlvbi5ob29rcy5zdWNjZWVkTW9kdWxlLnRhcChgZXh0LXN1Y2NlZWQtbW9kdWxlYCwgbW9kdWxlID0+IHtcbiAgICAgICAgLy9yZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdIT09LIHN1Y2NlZWRNb2R1bGUnKVxuICAgICAgICBpZiAobW9kdWxlLnJlc291cmNlICYmICFtb2R1bGUucmVzb3VyY2UubWF0Y2goL25vZGVfbW9kdWxlcy8pKSB7XG4gICAgICAgICAgdmFycy5kZXBzID0gWy4uLih2YXJzLmRlcHMgfHwgW10pLCAuLi5yZXF1aXJlKGAuLyR7dmFycy5mcmFtZXdvcmt9VXRpbGApLmV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpXVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChleHRDb21wb25lbnRzLmxlbmd0aCAmJiBtb2R1bGUucmVzb3VyY2UgJiYgKG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuKGp8dClzeD8kLykgfHxcbiAgICAgICAgLy8gb3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuaHRtbCQvKSkgJiZcbiAgICAgICAgLy8gIW1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvbm9kZV9tb2R1bGVzLykgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaChgL2V4dC17JG9wdGlvbnMuZnJhbWV3b3JrfS9idWlsZC9gKSkge1xuICAgICAgICAvLyAgIHZhcnMuZGVwcyA9IFsuLi4odmFycy5kZXBzIHx8IFtdKSwgLi4ucmVxdWlyZShgLi8ke3ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5leHRyYWN0RnJvbVNvdXJjZShtb2R1bGUsIG9wdGlvbnMsIGNvbXBpbGF0aW9uLCBleHRDb21wb25lbnRzKV1cbiAgICAgICAgLy8gfVxuICAgICAgfSlcblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBvcHRpb25zLmdlblByb2REYXRhKSB7XG5cblxuXG4gICAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmZpbmlzaE1vZHVsZXMudGFwKGBleHQtZmluaXNoLW1vZHVsZXNgLCBtb2R1bGVzID0+IHtcbiAgICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdIT09LIGZpbmlzaE1vZHVsZXMnKVxuICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICdFeHQuY3JlYXRlKHtcXFwieHR5cGVcXFwiOlxcXCInXG4gICAgICAgICAgdmFycy5kZXBzLmZvckVhY2goY29kZSA9PiB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjb2RlLmluZGV4T2Yoc3RyaW5nKVxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUuc3Vic3RyaW5nKGluZGV4ICsgc3RyaW5nLmxlbmd0aClcbiAgICAgICAgICAgICAgdmFyIGVuZCA9IGNvZGUuaW5kZXhPZignXFxcIicpXG4gICAgICAgICAgICAgIHZhcnMudXNlZEV4dENvbXBvbmVudHMucHVzaChjb2RlLnN1YnN0cigwLCBlbmQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFycy51c2VkRXh0Q29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KHZhcnMudXNlZEV4dENvbXBvbmVudHMpXVxuICAgICAgICAgIGNvbnN0IHJlYWRGcm9tID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvJyArIGV4dEFuZ3VsYXJQYWNrYWdlICsgJy9zcmMvbGliJylcbiAgICAgICAgICBjb25zdCB3cml0ZVRvUGF0aCA9IHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm5cblxuICAgICAgICAgIGNvbnN0IGJhc2VDb250ZW50ID0gZnN4LnJlYWRGaWxlU3luYyhgJHtyZWFkRnJvbX0vYmFzZS50c2ApLnRvU3RyaW5nKClcbiAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0vYmFzZS50c2AsIGJhc2VDb250ZW50LCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgXG4gICAgICAgICAgdmFyIHdyaXRlVG9QYXRoV3JpdHRlbiA9IGZhbHNlXG4gICAgICAgICAgdmFyIG1vZHVsZVZhcnMgPSB7XG4gICAgICAgICAgICBpbXBvcnRzOiAnJyxcbiAgICAgICAgICAgIGV4cG9ydHM6ICcnLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXJzLnVzZWRFeHRDb21wb25lbnRzLmZvckVhY2goeHR5cGUgPT4ge1xuICAgICAgICAgICAgdmFyIGNhcGNsYXNzbmFtZSA9IHh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeHR5cGUucmVwbGFjZSgvLS9nLCBcIl9cIikuc2xpY2UoMSlcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cyA9IG1vZHVsZVZhcnMuaW1wb3J0cyArIGBpbXBvcnQgeyBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQgfSBmcm9tICcuL2V4dC0ke3h0eXBlfS5jb21wb25lbnQnO1xcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZXhwb3J0cyA9IG1vZHVsZVZhcnMuZXhwb3J0cyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zID0gbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgKyBgICAgIEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCxcXG5gXG4gICAgICAgICAgICB2YXIgY2xhc3NGaWxlID0gYC9leHQtJHt4dHlwZX0uY29tcG9uZW50LnRzYFxuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfSR7Y2xhc3NGaWxlfWApLnRvU3RyaW5nKClcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofSR7Y2xhc3NGaWxlfWAsIGNvbnRlbnRzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgICB3cml0ZVRvUGF0aFdyaXR0ZW4gPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAod3JpdGVUb1BhdGhXcml0dGVuKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZHVsZShcbiAgICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzLCBtb2R1bGVWYXJzLmV4cG9ydHMsIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0vJHtleHRBbmd1bGFyTW9kdWxlfS50c2AsIHQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrICE9ICdleHRqcycgJiYgIW9wdGlvbnMuZ2VuUHJvZERhdGEpIHtcblxuICAgICAgY29tcGlsYXRpb24uaG9va3MuaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbi50YXAoYGV4dC1odG1sLWdlbmVyYXRpb25gLChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgICAgICB2YXIgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgIGlmIChjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycpIHtcbiAgICAgICAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dFBhdGggPSBvdXRwdXRQYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICB2YXIganNQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5qcycpXG4gICAgICAgIHZhciBjc3NQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5jc3MnKVxuICAgICAgICBkYXRhLmFzc2V0cy5qcy51bnNoaWZ0KGpzUGF0aClcbiAgICAgICAgZGF0YS5hc3NldHMuY3NzLnVuc2hpZnQoY3NzUGF0aClcbiAgICAgICAgbG9nKHZhcnMuYXBwICsgYEFkZGluZyAke2pzUGF0aH0gYW5kICR7Y3NzUGF0aH0gdG8gaW5kZXguaHRtbGApXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2tpcHBlZCBIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19jb21waWxhdGlvbjogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2FmdGVyQ29tcGlsZShjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLCAnRlVOQ1RJT04gX2FmdGVyQ29tcGlsZScpXG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBlbWl0JylcbiAgICB2YXIgYXBwID0gdmFycy5hcHBcbiAgICB2YXIgZnJhbWV3b3JrID0gdmFycy5mcmFtZXdvcmtcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgY29uc3QgX2J1aWxkRXh0QnVuZGxlID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2J1aWxkRXh0QnVuZGxlXG4gICAgbGV0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3V0cHV0UGF0aCx2YXJzLmV4dFBhdGgpXG4gICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJyAmJiBjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICB9XG4gICAgbG9ndihvcHRpb25zLCdvdXRwdXRQYXRoOiAnICsgb3V0cHV0UGF0aClcbiAgICBsb2d2KG9wdGlvbnMsJ2ZyYW1ld29yazogJyArIGZyYW1ld29yaylcbiAgICBpZiAob3B0aW9ucy5lbWl0ID09IHRydWUpIHtcbiAgICAgIGlmIChmcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgICBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiAhb3B0aW9ucy5nZW5Qcm9kRGF0YSkge1xuICAgICAgICAgIHJlcXVpcmUoYC4vJHtmcmFtZXdvcmt9VXRpbGApLl9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNvbW1hbmQgPSAnJ1xuICAgICAgaWYgKG9wdGlvbnMud2F0Y2ggPT0gJ3llcycgJiYgdmFycy5wcm9kdWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgIGNvbW1hbmQgPSAnd2F0Y2gnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tbWFuZCA9ICdidWlsZCdcbiAgICAgIH1cblxuICAgICAgaWYgKHZhcnMucmVidWlsZCA9PSB0cnVlKSB7XG4gICAgICAgIHZhciBwYXJtcyA9IFtdXG4gICAgICAgIGlmIChvcHRpb25zLnByb2ZpbGUgPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucHJvZmlsZSA9PSAnJyB8fCBvcHRpb25zLnByb2ZpbGUgPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChjb21tYW5kID09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCAnLS13ZWItc2VydmVyJywgJ2ZhbHNlJywgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCAnLS13ZWItc2VydmVyJywgJ2ZhbHNlJywgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YXJzLndhdGNoU3RhcnRlZCA9PSBmYWxzZSkge1xuICAgICAgICAgIGF3YWl0IF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucylcbiAgICAgICAgICB2YXJzLndhdGNoU3RhcnRlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZyhgJHt2YXJzLmFwcH1GVU5DVElPTiBlbWl0IG5vdCBydW5gKVxuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2VtaXQ6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0LCBjb21waWxhdGlvbikge1xuICB0cnkge1xuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX3ByZXBhcmVGb3JCdWlsZCcpXG4gICAgY29uc3QgcmltcmFmID0gcmVxdWlyZSgncmltcmFmJylcbiAgICBjb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKVxuICAgIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbiAgICB2YXIgcGFja2FnZXMgPSBvcHRpb25zLnBhY2thZ2VzXG4gICAgdmFyIHRvb2xraXQgPSBvcHRpb25zLnRvb2xraXRcbiAgICB2YXIgdGhlbWUgPSBvcHRpb25zLnRoZW1lXG5cbiAgICB0aGVtZSA9IHRoZW1lIHx8ICh0b29sa2l0ID09PSAnY2xhc3NpYycgPyAndGhlbWUtdHJpdG9uJyA6ICd0aGVtZS1tYXRlcmlhbCcpXG4gICAgbG9ndihvcHRpb25zLCdmaXJzdFRpbWU6ICcgKyB2YXJzLmZpcnN0VGltZSlcbiAgICBpZiAodmFycy5maXJzdFRpbWUpIHtcbiAgICAgIHJpbXJhZi5zeW5jKG91dHB1dClcbiAgICAgIG1rZGlycC5zeW5jKG91dHB1dClcbiAgICAgIGNvbnN0IGJ1aWxkWE1MID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5idWlsZFhNTFxuICAgICAgY29uc3QgY3JlYXRlQXBwSnNvbiA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlQXBwSnNvblxuICAgICAgY29uc3QgY3JlYXRlV29ya3NwYWNlSnNvbiA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlV29ya3NwYWNlSnNvblxuICAgICAgY29uc3QgY3JlYXRlSlNET01FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlSlNET01FbnZpcm9ubWVudFxuXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdidWlsZC54bWwnKSwgYnVpbGRYTUwodmFycy5wcm9kdWN0aW9uLCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdhcHAuanNvbicpLCBjcmVhdGVBcHBKc29uKHRoZW1lLCBwYWNrYWdlcywgdG9vbGtpdCwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnanNkb20tZW52aXJvbm1lbnQuanMnKSwgY3JlYXRlSlNET01FbnZpcm9ubWVudChvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICd3b3Jrc3BhY2UuanNvbicpLCBjcmVhdGVXb3Jrc3BhY2VKc29uKG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcblxuICAgICAgaWYgKHZhcnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuXG4gICAgICAgIC8vYmVjYXVzZSBvZiBhIHByb2JsZW0gd2l0aCBjb2xvcnBpY2tlclxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvdXgvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAodXgpICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvcGFja2FnZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtYW5ndWxhci9vdmVycmlkZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ3JlYWN0JykgIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L292ZXJyaWRlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICcuLi9yZXNvdXJjZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3BhY2thZ2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhY2thZ2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcy8nKVxuICAgICAgICB2YXIgdG9QYWNrYWdlcyA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGFja2FnZXMsIHRvUGFja2FnZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdvdmVycmlkZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnb3ZlcnJpZGVzLycpXG4gICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmICghdmFycy5kZXBzLmluY2x1ZGVzKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKSkge1xuICAgICAgICB2YXJzLmRlcHMucHVzaCgnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJylcbiAgICAgIH1cbiAgICAgIGpzID0gdmFycy5kZXBzLmpvaW4oJztcXG4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBqcyA9ICdFeHQucmVxdWlyZShcIkV4dC4qXCIpJ1xuICAgIH1cbiAgICBpZiAodmFycy5tYW5pZmVzdCA9PT0gbnVsbCB8fCBqcyAhPT0gdmFycy5tYW5pZmVzdCkge1xuICAgICAgdmFycy5tYW5pZmVzdCA9IGpzXG4gICAgICBjb25zdCBtYW5pZmVzdCA9IHBhdGguam9pbihvdXRwdXQsICdtYW5pZmVzdC5qcycpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0LCBqcywgJ3V0ZjgnKVxuICAgICAgdmFycy5yZWJ1aWxkID0gdHJ1ZVxuICAgICAgdmFyIGJ1bmRsZURpciA9IG91dHB1dC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKVxuICAgICAgaWYgKGJ1bmRsZURpci50cmltKCkgPT0gJycpIHtidW5kbGVEaXIgPSAnLi8nfVxuICAgICAgbG9nKGFwcCArICdCdWlsZGluZyBFeHQgYnVuZGxlIGF0OiAnICsgYnVuZGxlRGlyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhcnMucmVidWlsZCA9IGZhbHNlXG4gICAgICBsb2coYXBwICsgJ0V4dCByZWJ1aWxkIE5PVCBuZWVkZWQnKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19wcmVwYXJlRm9yQnVpbGQ6ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfYnVpbGRFeHRCdW5kbGUnKVxuXG4gICAgbGV0IHNlbmNoYTsgdHJ5IHsgc2VuY2hhID0gcmVxdWlyZSgnQHNlbmNoYS9jbWQnKSB9IGNhdGNoIChlKSB7IHNlbmNoYSA9ICdzZW5jaGEnIH1cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhzZW5jaGEpKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgZXhpc3RzJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgRE9FUyBOT1QgZXhpc3QnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvbkJ1aWxkRG9uZSA9ICgpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdvbkJ1aWxkRG9uZScpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB2YXIgb3B0cyA9IHsgY3dkOiBvdXRwdXRQYXRoLCBzaWxlbnQ6IHRydWUsIHN0ZGlvOiAncGlwZScsIGVuY29kaW5nOiAndXRmLTgnfVxuICAgICAgZXhlY3V0ZUFzeW5jKGFwcCwgc2VuY2hhLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbigpIHsgb25CdWlsZERvbmUoKSB9LCBcbiAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7IHJlamVjdChyZWFzb24pIH1cbiAgICAgIClcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZScpXG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19idWlsZEV4dEJ1bmRsZTogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVBc3luYyAoYXBwLCBjb21tYW5kLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICAvL2NvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFsnW0lORl0gTG9hZGluZycsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFNlcnZlclwiLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICBjb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbXCJbSU5GXSB4U2VydmVyXCIsICdbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIEFwcGVuZCcsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcgQnVpbGQnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIHZhciBzdWJzdHJpbmdzID0gREVGQVVMVF9TVUJTVFJTIFxuICAgIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgICBjb25zdCBjcm9zc1NwYXduID0gcmVxdWlyZSgnY3Jvc3Mtc3Bhd24nKVxuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIGV4ZWN1dGVBc3luYycpXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbG9ndihvcHRpb25zLGBjb21tYW5kIC0gJHtjb21tYW5kfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBwYXJtcyAtICR7cGFybXN9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYG9wdHMgLSAke0pTT04uc3RyaW5naWZ5KG9wdHMpfWApXG4gICAgICBsZXQgY2hpbGQgPSBjcm9zc1NwYXduKGNvbW1hbmQsIHBhcm1zLCBvcHRzKVxuICAgICAgY2hpbGQub24oJ2Nsb3NlJywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBjbG9zZTogYCArIGNvZGUpIFxuICAgICAgICBpZihjb2RlID09PSAwKSB7IHJlc29sdmUoMCkgfVxuICAgICAgICBlbHNlIHsgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcihjb2RlKSApOyByZXNvbHZlKDApIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5vbignZXJyb3InLCAoZXJyb3IpID0+IHsgXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGVycm9yYCkgXG4gICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgICByZXNvbHZlKDApXG4gICAgICB9KVxuICAgICAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYCR7c3RyfWApXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcoKS5tYXRjaCgvd2FpdGluZyBmb3IgY2hhbmdlc1xcLlxcLlxcLi8pKSB7XG4gICAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdWJzdHJpbmdzLnNvbWUoZnVuY3Rpb24odikgeyByZXR1cm4gZGF0YS5pbmRleE9mKHYpID49IDA7IH0pKSB7IFxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbSU5GXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbTE9HXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhcIltFUlJdXCIpKSB7XG4gICAgICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGFwcCArIHN0ci5yZXBsYWNlKC9eXFxbRVJSXFxdIC9naSwgJycpKTtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbRVJSXVwiLCBgJHtjaGFsay5yZWQoXCJbRVJSXVwiKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nKGAke2FwcH0ke3N0cn1gKSBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBlcnJvciBvbiBjbG9zZTogYCArIGRhdGEpIFxuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgdmFyIHN0ckphdmFPcHRzID0gXCJQaWNrZWQgdXAgX0pBVkFfT1BUSU9OU1wiO1xuICAgICAgICB2YXIgaW5jbHVkZXMgPSBzdHIuaW5jbHVkZXMoc3RySmF2YU9wdHMpXG4gICAgICAgIGlmICghaW5jbHVkZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHthcHB9ICR7Y2hhbGsucmVkKFwiW0VSUl1cIil9ICR7c3RyfWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2V4ZWN1dGVBc3luYzogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9IFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKHMpIHtcbiAgcmVxdWlyZSgncmVhZGxpbmUnKS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMClcbiAgdHJ5IHtcbiAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICB9XG4gIGNhdGNoKGUpIHt9XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHMpXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9ndihvcHRpb25zLCBzKSB7XG4gIGlmIChvcHRpb25zLnZlcmJvc2UgPT0gJ3llcycpIHtcbiAgICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICAgIHRyeSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICAgIH1cbiAgICBjYXRjaChlKSB7fVxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGAtdmVyYm9zZTogJHtzfWApXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBcHAoKSB7XG4gIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgdmFyIHByZWZpeCA9IGBgXG4gIGNvbnN0IHBsYXRmb3JtID0gcmVxdWlyZSgnb3MnKS5wbGF0Zm9ybSgpXG4gIGlmIChwbGF0Zm9ybSA9PSAnZGFyd2luJykgeyBwcmVmaXggPSBg4oS5IO+9omV4dO+9ozpgIH1cbiAgZWxzZSB7IHByZWZpeCA9IGBpIFtleHRdOmAgfVxuICByZXR1cm4gYCR7Y2hhbGsuZ3JlZW4ocHJlZml4KX0gYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFZlcnNpb25zKGFwcCwgcGx1Z2luTmFtZSwgZnJhbWV3b3JrTmFtZSkge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB2ID0ge31cbiAgdmFyIHBsdWdpblBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEnLCBwbHVnaW5OYW1lKVxuICB2YXIgcGx1Z2luUGtnID0gKGZzLmV4aXN0c1N5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBsdWdpblBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LnBsdWdpblZlcnNpb24gPSBwbHVnaW5Qa2cudmVyc2lvblxuICB2Ll9yZXNvbHZlZCA9IHBsdWdpblBrZy5fcmVzb2x2ZWRcbiAgaWYgKHYuX3Jlc29sdmVkID09IHVuZGVmaW5lZCkge1xuICAgIHYuZWRpdGlvbiA9IGBDb21tZXJjaWFsYFxuICB9XG4gIGVsc2Uge1xuICAgIGlmICgtMSA9PSB2Ll9yZXNvbHZlZC5pbmRleE9mKCdjb21tdW5pdHknKSkge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW11bml0eWBcbiAgICB9XG4gIH1cblxuICB2YXIgd2VicGFja1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3dlYnBhY2snKVxuICB2YXIgd2VicGFja1BrZyA9IChmcy5leGlzdHNTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LndlYnBhY2tWZXJzaW9uID0gd2VicGFja1BrZy52ZXJzaW9uXG5cbiAgdmFyIGV4dFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEvZXh0JylcbiAgdmFyIGV4dFBrZyA9IChmcy5leGlzdHNTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5leHRWZXJzaW9uID0gZXh0UGtnLnNlbmNoYS52ZXJzaW9uXG5cbiAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuXG4gIGlmICh2LmNtZFZlcnNpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvJHtwbHVnaW5OYW1lfS9ub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICAgIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuICB9XG5cbiAgdmFyIGZyYW1ld29ya0luZm8gPSAnJ1xuICAgaWYgKGZyYW1ld29ya05hbWUgIT0gdW5kZWZpbmVkICYmIGZyYW1ld29ya05hbWUgIT0gJ2V4dGpzJykge1xuICAgIHZhciBmcmFtZXdvcmtQYXRoID0gJydcbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAncmVhY3QnKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9yZWFjdCcpXG4gICAgfVxuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdhbmd1bGFyJykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZScpXG4gICAgfVxuICAgIHZhciBmcmFtZXdvcmtQa2cgPSAoZnMuZXhpc3RzU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5mcmFtZXdvcmtWZXJzaW9uID0gZnJhbWV3b3JrUGtnLnZlcnNpb25cbiAgICBmcmFtZXdvcmtJbmZvID0gJywgJyArIGZyYW1ld29ya05hbWUgKyAnIHYnICsgdi5mcmFtZXdvcmtWZXJzaW9uXG4gIH1cbiAgcmV0dXJuIGFwcCArICdleHQtd2VicGFjay1wbHVnaW4gdicgKyB2LnBsdWdpblZlcnNpb24gKyAnLCBFeHQgSlMgdicgKyB2LmV4dFZlcnNpb24gKyAnICcgKyB2LmVkaXRpb24gKyAnIEVkaXRpb24sIFNlbmNoYSBDbWQgdicgKyB2LmNtZFZlcnNpb24gKyAnLCB3ZWJwYWNrIHYnICsgdi53ZWJwYWNrVmVyc2lvbiArIGZyYW1ld29ya0luZm9cbiB9Il19