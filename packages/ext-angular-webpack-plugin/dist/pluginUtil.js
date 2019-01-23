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
  log(thisVars.app + 'genProdData: ' + thisOptions.genProdData);
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
        if (options.genProdData) {
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
          }); // Update `app.module.ts` to include prod data folder.

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

      if (options.framework == 'angular' && !options.genProdData) {
        compilation.hooks.succeedModule.tap(`ext-succeed-module`, module => {
          if (extComponents.length && module.resource && (module.resource.match(/\.(j|t)sx?$/) || options.framework == 'angular' && module.resource.match(/\.html$/)) && !module.resource.match(/node_modules/) && !module.resource.match(`/ext-{$options.framework}/dist/`)) {
            vars.deps = [...(vars.deps || []), ...require(`./${vars.framework}Util`).extractFromSource(module, options, compilation, extComponents)];
          }
        });
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImdlblByb2REYXRhIiwicHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZyIsImxlbmd0aCIsImZvckVhY2giLCJ2YWx1ZSIsInJlcGxhY2UiLCJ3aXRoIiwiZmlsZVBhdGgiLCJkYXRhIiwidG9TdHJpbmciLCJ3cml0ZUZpbGVTeW5jIiwiY29tcGlsYXRpb24iLCJlcnJvcnMiLCJsb2ciLCJfZ2V0VmVyc2lvbnMiLCJfY29tcGlsYXRpb24iLCJjb21waWxlciIsIm1rZGlycCIsImV4dEFuZ3VsYXJQYWNrYWdlIiwiZXh0QW5ndWxhckZvbGRlciIsImV4dEFuZ3VsYXJNb2R1bGUiLCJleHRDb21wb25lbnRzIiwidXNlZEV4dENvbXBvbmVudHMiLCJwYWNrYWdlUGF0aCIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJmaWxlTmFtZSIsInN1YnN0ciIsImVuZCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJyZXdyaXRlIiwiYXBwTW9kdWxlUGF0aCIsImpzIiwiaSIsImxhc3RJbmRleE9mIiwicGF0aFRvRXh0QW5ndWxhck1vZGVybiIsInN5bmMiLCJ0IiwiaiIsImUiLCJjb25zb2xlIiwiaG9va3MiLCJzdWNjZWVkTW9kdWxlIiwidGFwIiwibW9kdWxlIiwicmVzb3VyY2UiLCJtYXRjaCIsImRlcHMiLCJleHRyYWN0RnJvbVNvdXJjZSIsImZpbmlzaE1vZHVsZXMiLCJtb2R1bGVzIiwic3RyaW5nIiwiY29kZSIsImluZGV4IiwiU2V0IiwicmVhZEZyb20iLCJ3cml0ZVRvUGF0aCIsImJhc2VDb250ZW50Iiwid3JpdGVUb1BhdGhXcml0dGVuIiwibW9kdWxlVmFycyIsImltcG9ydHMiLCJleHBvcnRzIiwiZGVjbGFyYXRpb25zIiwieHR5cGUiLCJjYXBjbGFzc25hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2xhc3NGaWxlIiwiY29udGVudHMiLCJodG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uIiwib3V0cHV0UGF0aCIsImRldlNlcnZlciIsImNvbnRlbnRCYXNlIiwidHJpbSIsImpzUGF0aCIsImV4dFBhdGgiLCJjc3NQYXRoIiwiYXNzZXRzIiwidW5zaGlmdCIsImNzcyIsImVtaXQiLCJjYWxsYmFjayIsIl9idWlsZEV4dEJ1bmRsZSIsIl9wcmVwYXJlRm9yQnVpbGQiLCJjb21tYW5kIiwid2F0Y2giLCJyZWJ1aWxkIiwicGFybXMiLCJwcm9maWxlIiwid2F0Y2hTdGFydGVkIiwib3V0cHV0IiwicmltcmFmIiwicGFja2FnZXMiLCJ0b29sa2l0IiwidGhlbWUiLCJmaXJzdFRpbWUiLCJidWlsZFhNTCIsImNyZWF0ZUFwcEpzb24iLCJjcmVhdGVXb3Jrc3BhY2VKc29uIiwiY3JlYXRlSlNET01FbnZpcm9ubWVudCIsImZyb21QYXRoIiwidG9QYXRoIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsImluY2x1ZGVzIiwibWFuaWZlc3QiLCJidW5kbGVEaXIiLCJzZW5jaGEiLCJQcm9taXNlIiwicmVqZWN0Iiwib25CdWlsZERvbmUiLCJvcHRzIiwic2lsZW50Iiwic3RkaW8iLCJlbmNvZGluZyIsImV4ZWN1dGVBc3luYyIsInRoZW4iLCJyZWFzb24iLCJERUZBVUxUX1NVQlNUUlMiLCJzdWJzdHJpbmdzIiwiY2hhbGsiLCJjcm9zc1NwYXduIiwiY2hpbGQiLCJvbiIsInNpZ25hbCIsIkVycm9yIiwiZXJyb3IiLCJzdGRvdXQiLCJzdHIiLCJzb21lIiwidiIsInJlZCIsInN0ZGVyciIsInN0ckphdmFPcHRzIiwicyIsImN1cnNvclRvIiwiY2xlYXJMaW5lIiwid3JpdGUiLCJ2ZXJib3NlIiwicHJlZml4IiwicGxhdGZvcm0iLCJncmVlbiIsImZyYW1ld29ya05hbWUiLCJwbHVnaW5QYXRoIiwicGx1Z2luUGtnIiwicGx1Z2luVmVyc2lvbiIsInZlcnNpb24iLCJfcmVzb2x2ZWQiLCJlZGl0aW9uIiwid2VicGFja1BhdGgiLCJ3ZWJwYWNrUGtnIiwid2VicGFja1ZlcnNpb24iLCJleHRQa2ciLCJleHRWZXJzaW9uIiwiY21kUGF0aCIsImNtZFBrZyIsImNtZFZlcnNpb24iLCJ2ZXJzaW9uX2Z1bGwiLCJmcmFtZXdvcmtJbmZvIiwiZnJhbWV3b3JrUGF0aCIsImZyYW1ld29ya1BrZyIsImZyYW1ld29ya1ZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDcEMsUUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxRQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUVBLE1BQUlFLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBRUEsTUFBSU4sT0FBTyxDQUFDTyxTQUFSLElBQXFCQyxTQUF6QixFQUFvQztBQUNsQ0osSUFBQUEsUUFBUSxDQUFD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QUcsR0FBRyxzQkFBTixHQUErQmdKLENBQUMsQ0FBQ2UsYUFBakMsR0FBaUQsWUFBakQsR0FBZ0VmLENBQUMsQ0FBQ3VCLFVBQWxFLEdBQStFLEdBQS9FLEdBQXFGdkIsQ0FBQyxDQUFDa0IsT0FBdkYsR0FBaUcsd0JBQWpHLEdBQTRIbEIsQ0FBQyxDQUFDMEIsVUFBOUgsR0FBMkksYUFBM0ksR0FBMkoxQixDQUFDLENBQUNxQixjQUE3SixHQUE4S08sYUFBckw7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9jb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHRoaXNWYXJzID0ge31cbiAgdmFyIHRoaXNPcHRpb25zID0ge31cbiAgdmFyIHBsdWdpbiA9IHt9XG5cbiAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycyA9IFtdXG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzLnB1c2goJ3dlYnBhY2sgY29uZmlnOiBmcmFtZXdvcmsgcGFyYW1ldGVyIG9uIGV4dC13ZWJwYWNrLXBsdWdpbiBpcyBub3QgZGVmaW5lZCAtIHZhbHVlczogcmVhY3QsIGFuZ3VsYXIsIGV4dGpzJylcbiAgICBwbHVnaW4udmFycyA9IHRoaXNWYXJzXG4gICAgcmV0dXJuIHBsdWdpblxuICB9XG5cbiAgY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnc2NoZW1hLXV0aWxzJylcbiAgdmFsaWRhdGVPcHRpb25zKHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0VmFsaWRhdGVPcHRpb25zKCksIG9wdGlvbnMsICcnKVxuXG4gIHRoaXNWYXJzID0gcmVxdWlyZShgLi8ke29wdGlvbnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0VmFycygpXG4gIHRoaXNWYXJzLmZyYW1ld29yayA9IG9wdGlvbnMuZnJhbWV3b3JrXG4gIHN3aXRjaCh0aGlzVmFycy5mcmFtZXdvcmspIHtcbiAgICBjYXNlICdleHRqcyc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JlYWN0JzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXJlYWN0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW5ndWxhcic6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1hbmd1bGFyLXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICB9XG5cbiAgLy9maXggZmFzaGlvbiBkaXN0IHByb2JsZW1cbiAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICB2YXIgdG9GYXNoaW9uRGlzdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWQvZGlzdC9qcy9ub2RlX21vZHVsZXMvZmFzaGlvbi9kaXN0YClcbiAgbG9ndihvcHRpb25zLCBgdG9GYXNoaW9uRGlzdCAke3RvRmFzaGlvbkRpc3R9YClcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHRvRmFzaGlvbkRpc3QpKSB7XG4gICAgbG9ndihvcHRpb25zLCBgY29weWApXG4gICAgdmFyIGZyb21GYXNoaW9uRGlzdCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzL0BzZW5jaGEvJyArIHRoaXNWYXJzLnBsdWdpbk5hbWUgKyAnL2Zhc2hpb24vZGlzdC8nKVxuICAgIGZzeC5jb3B5U3luYyhmcm9tRmFzaGlvbkRpc3QsIHRvRmFzaGlvbkRpc3QpXG4gIH1cbiAgZWxzZSB7XG4gICAgbG9ndihvcHRpb25zLCBgbm8gY29weSBvZiBmYXNoaW9uYClcbiAgfVxuXG4gIHRoaXNWYXJzLmFwcCA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRBcHAoKVxuICBsb2d2KG9wdGlvbnMsIGBwbHVnaW5OYW1lIC0gJHt0aGlzVmFycy5wbHVnaW5OYW1lfWApXG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNWYXJzLmFwcCAtICR7dGhpc1ZhcnMuYXBwfWApXG5cbiAgY29uc3QgcmMgPSAoZnMuZXhpc3RzU3luYyhgLmV4dC0ke3RoaXNWYXJzLmZyYW1ld29ya31yY2ApICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCwgJ3V0Zi04JykpIHx8IHt9KVxuICB0aGlzT3B0aW9ucyA9IHsgLi4ucmVxdWlyZShgLi8ke3RoaXNWYXJzLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdE9wdGlvbnMoKSwgLi4ub3B0aW9ucywgLi4ucmMgfVxuICBsb2d2KG9wdGlvbnMsIGB0aGlzT3B0aW9ucyAtICR7SlNPTi5zdHJpbmdpZnkodGhpc09wdGlvbnMpfWApXG4gIGlmICh0aGlzT3B0aW9ucy5lbnZpcm9ubWVudCA9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aGlzVmFycy5wcm9kdWN0aW9uID0gdHJ1ZVxuICAgIHRoaXNPcHRpb25zLmdlblByb2REYXRhID0gb3B0aW9ucy5nZW5Qcm9kRGF0YVxuICAgIGlmICghb3B0aW9ucy5nZW5Qcm9kRGF0YSAmJiBvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgb3B0aW9ucy5wcm9kRmlsZVJlcGxhY2VtZW50Q29uZmlnLmxlbmd0aCkge1xuICAgICAgb3B0aW9ucy5wcm9kRmlsZVJlcGxhY2VtZW50Q29uZmlnLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUucmVwbGFjZSAmJiB2YWx1ZS53aXRoKSB7XG4gICAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIHZhbHVlLndpdGgpXG4gICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZnN4LnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgdmFsdWUucmVwbGFjZSlcbiAgICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSlcbiAgICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGRhdGEsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ0ludmFsaWQgcHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGVsc2UgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSBmYWxzZX1cbiAgbG9nKHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRWZXJzaW9ucyh0aGlzVmFycy5hcHAsIHRoaXNWYXJzLnBsdWdpbk5hbWUsIHRoaXNWYXJzLmZyYW1ld29yaykpXG4gIGxvZyh0aGlzVmFycy5hcHAgKyAnQnVpbGRpbmcgZm9yICcgKyB0aGlzT3B0aW9ucy5lbnZpcm9ubWVudClcbiAgbG9nKHRoaXNWYXJzLmFwcCArICdnZW5Qcm9kRGF0YTogJyArIHRoaXNPcHRpb25zLmdlblByb2REYXRhKVxuXG4gIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgcGx1Z2luLm9wdGlvbnMgPSB0aGlzT3B0aW9uc1xuICByZXR1cm4gcGx1Z2luXG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxhdGlvbihjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdGVU5DVElPTiBfY29tcGlsYXRpb24nKVxuXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgIGNvbnN0IGV4dEFuZ3VsYXJQYWNrYWdlID0gJ0BzZW5jaGEvZXh0LWFuZ3VsYXInXG4gICAgY29uc3QgZXh0QW5ndWxhckZvbGRlciA9ICdleHQtYW5ndWxhci1wcm9kJ1xuICAgIGNvbnN0IGV4dEFuZ3VsYXJNb2R1bGUgPSAnZXh0LWFuZ3VsYXIubW9kdWxlJ1xuICAgIHZhciBleHRDb21wb25lbnRzID0gW11cblxuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywgYGV4dC1jb21waWxhdGlvbjogcHJvZHVjdGlvbiBpcyBgICsgdmFycy5wcm9kdWN0aW9uKVxuXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG5cblxuICAgICAgICBpZiAob3B0aW9ucy5nZW5Qcm9kRGF0YSkge1xuXG4gICAgICAgICAgLy8gUmVhZHMgYWxsIGV4dCBjb21wb25lbnRzIHNvdXJjZSBjb2RlIHRvIGdldCBhbGwgZXh0LWNvbXBvbmVudHMgbGlzdFxuICAgICAgICAgIHZhciB1c2VkRXh0Q29tcG9uZW50cyA9IFtdXG5cbiAgICAgICAgICBjb25zdCBwYWNrYWdlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzLycgKyBleHRBbmd1bGFyUGFja2FnZSlcbiAgICAgICAgICB2YXIgZmlsZXMgPSBmc3gucmVhZGRpclN5bmMoYCR7cGFja2FnZVBhdGh9L2xpYmApXG4gICAgICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChmaWxlTmFtZSAmJiBmaWxlTmFtZS5zdWJzdHIoMCwgNCkgPT0gJ2V4dC0nKSB7XG4gICAgICAgICAgICAgIHZhciBlbmQgPSBmaWxlTmFtZS5zdWJzdHIoNCkuaW5kZXhPZignLmNvbXBvbmVudCcpXG4gICAgICAgICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgICAgICAgIGV4dENvbXBvbmVudHMucHVzaChmaWxlTmFtZS5zdWJzdHJpbmcoNCwgZW5kICsgNCkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG5cblxuICAgICAgICAgIC8vIFVwZGF0ZSBgYXBwLm1vZHVsZS50c2AgdG8gaW5jbHVkZSBwcm9kIGRhdGEgZm9sZGVyLlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmV3cml0ZSA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCBhcHBNb2R1bGVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXBwL2FwcC5tb2R1bGUudHMnKVxuICAgICAgICAgICAgdmFyIGpzID0gZnN4LnJlYWRGaWxlU3luYyhhcHBNb2R1bGVQYXRoKS50b1N0cmluZygpXG4gICAgICAgICAgICB2YXIgaSA9IGpzLmluZGV4T2YoZXh0QW5ndWxhclBhY2thZ2UpXG4gICAgICAgICAgICBpID0ganMuc3Vic3RyaW5nKDAsIGkpLmxhc3RJbmRleE9mKCdpbXBvcnQnKVxuXG4gICAgICAgICAgICBpZiAoanMuc3Vic3RyKGkgLSAzLCAzKSAhPT0gJy8vICcpIHtcbiAgICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaSkgKyAnXFxuIC8vICcgKyBqcy5zdWJzdHJpbmcoaSlcbiAgICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGF0aFRvRXh0QW5ndWxhck1vZGVybiA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC8ke2V4dEFuZ3VsYXJGb2xkZXJ9YClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ3JlYXRlIHMgdGhlIHByb2QgZm9sZGVyIGlmIGRvZXMgbm90IGV4aXN0cy5cbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKSkge1xuICAgICAgICAgICAgICBta2RpcnAuc3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKVxuICAgICAgICAgICAgICBjb25zdCB0ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5leHRBbmd1bGFyTW9kdWxlKCcnLCAnJywgJycpXG4gICAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKFxuICAgICAgICAgICAgICAgIGAke3BhdGhUb0V4dEFuZ3VsYXJNb2Rlcm59LyR7ZXh0QW5ndWxhck1vZHVsZX0udHNgLCB0LCAndXRmLTgnLCAoKSA9PiB7cmV0dXJufVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaiA9IGpzLmluZGV4T2YoYC4vJHtleHRBbmd1bGFyRm9sZGVyfS8ke2V4dEFuZ3VsYXJNb2R1bGV9YClcbiAgICAgICAgICAgIGlmIChqIDwgMCkge1xuICAgICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBpKSArIGBpbXBvcnQge0V4dEFuZ3VsYXJNb2R1bGV9IGZyb20gJy4vJHtleHRBbmd1bGFyRm9sZGVyfS8ke2V4dEFuZ3VsYXJNb2R1bGV9J1xcbmAgKyBqcy5zdWJzdHIoaSlcbiAgICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgaSA9IGpzLnN1YnN0cmluZygwLCBqKS5sYXN0SW5kZXhPZignaW1wb3J0JylcbiAgICAgICAgICAgICAgaWYgKGpzLnN1YnN0cihpIC0gMywgMykgPT0gJy8vICcpIHtcbiAgICAgICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBpIC0gMykgKyAnXFxuJyArIGpzLnN1YnN0cmluZyhpKVxuICAgICAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoanMuc3Vic3RyaW5nKGktMiwgMikgPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIGpzID0ganMuc3Vic3RyaW5nKDAsIGkgLSAyKSArICdcXG4nICsganMuc3Vic3RyaW5nKGkpXG4gICAgICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJld3JpdGUpXG4gICAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGFwcE1vZHVsZVBhdGgsIGpzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2J1aWxkTW9kdWxlIGhvb2sgaW4gX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmICFvcHRpb25zLmdlblByb2REYXRhKSB7XG4gICAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCBtb2R1bGUgPT4ge1xuICAgICAgICAgIGlmIChleHRDb21wb25lbnRzLmxlbmd0aCAmJiBtb2R1bGUucmVzb3VyY2UgJiYgKG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuKGp8dClzeD8kLykgfHxcbiAgICAgICAgICBvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgbW9kdWxlLnJlc291cmNlLm1hdGNoKC9cXC5odG1sJC8pKSAmJlxuICAgICAgICAgICFtb2R1bGUucmVzb3VyY2UubWF0Y2goL25vZGVfbW9kdWxlcy8pICYmICFtb2R1bGUucmVzb3VyY2UubWF0Y2goYC9leHQteyRvcHRpb25zLmZyYW1ld29ya30vZGlzdC9gKSkge1xuICAgICAgICAgICAgdmFycy5kZXBzID0gWy4uLih2YXJzLmRlcHMgfHwgW10pLCAuLi5yZXF1aXJlKGAuLyR7dmFycy5mcmFtZXdvcmt9VXRpbGApLmV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBvcHRpb25zLmdlblByb2REYXRhKSB7XG4gICAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmZpbmlzaE1vZHVsZXMudGFwKGBleHQtZmluaXNoLW1vZHVsZXNgLCBtb2R1bGVzID0+IHtcbiAgICAgICAgICBjb25zdCBzdHJpbmcgPSAnRXh0LmNyZWF0ZSh7XFxcInh0eXBlXFxcIjpcXFwiJ1xuICAgICAgICAgIHZhcnMuZGVwcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY29kZS5pbmRleE9mKHN0cmluZylcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnN1YnN0cmluZyhpbmRleCArIHN0cmluZy5sZW5ndGgpXG4gICAgICAgICAgICAgIHZhciBlbmQgPSBjb2RlLmluZGV4T2YoJ1xcXCInKVxuICAgICAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cy5wdXNoKGNvZGUuc3Vic3RyKDAsIGVuZCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KHVzZWRFeHRDb21wb25lbnRzKV1cbiAgICAgICAgICBjb25zdCByZWFkRnJvbSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzLycgKyBleHRBbmd1bGFyUGFja2FnZSArICcvc3JjL2xpYicpXG4gICAgICAgICAgY29uc3Qgd3JpdGVUb1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYHNyYy9hcHAvJHtleHRBbmd1bGFyRm9sZGVyfWApXG5cbiAgICAgICAgICBjb25zdCBiYXNlQ29udGVudCA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cmVhZEZyb219L2Jhc2UudHNgKS50b1N0cmluZygpXG4gICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9L2Jhc2UudHNgLCBiYXNlQ29udGVudCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIFxuICAgICAgICAgIHZhciB3cml0ZVRvUGF0aFdyaXR0ZW4gPSBmYWxzZVxuICAgICAgICAgIHZhciBtb2R1bGVWYXJzID0ge1xuICAgICAgICAgICAgaW1wb3J0czogJycsXG4gICAgICAgICAgICBleHBvcnRzOiAnJyxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlZEV4dENvbXBvbmVudHMuZm9yRWFjaCh4dHlwZSA9PiB7XG4gICAgICAgICAgICB2YXIgY2FwY2xhc3NuYW1lID0geHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB4dHlwZS5yZXBsYWNlKC8tL2csIFwiX1wiKS5zbGljZSgxKVxuICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzID0gbW9kdWxlVmFycy5pbXBvcnRzICsgYGltcG9ydCB7IEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCB9IGZyb20gJy4vZXh0LSR7eHR5cGV9LmNvbXBvbmVudCc7XFxuYFxuICAgICAgICAgICAgbW9kdWxlVmFycy5leHBvcnRzID0gbW9kdWxlVmFycy5leHBvcnRzICsgYCAgICBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQsXFxuYFxuICAgICAgICAgICAgbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgPSBtb2R1bGVWYXJzLmRlY2xhcmF0aW9ucyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIHZhciBjbGFzc0ZpbGUgPSBgL2V4dC0ke3h0eXBlfS5jb21wb25lbnQudHNgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cmVhZEZyb219JHtjbGFzc0ZpbGV9YCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9JHtjbGFzc0ZpbGV9YCwgY29udGVudHMsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICAgIHdyaXRlVG9QYXRoV3JpdHRlbiA9IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmICh3cml0ZVRvUGF0aFdyaXR0ZW4pIHtcbiAgICAgICAgICAgIHZhciB0ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5leHRBbmd1bGFyTW9kdWxlKFxuICAgICAgICAgICAgICBtb2R1bGVWYXJzLmltcG9ydHMsIG1vZHVsZVZhcnMuZXhwb3J0cywgbW9kdWxlVmFycy5kZWNsYXJhdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofS8ke2V4dEFuZ3VsYXJNb2R1bGV9LnRzYCwgdCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgIT0gJ2V4dGpzJyAmJiAhb3B0aW9ucy5nZW5Qcm9kRGF0YSkge1xuXG4gICAgICBjb21waWxhdGlvbi5ob29rcy5odG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uLnRhcChgZXh0LWh0bWwtZ2VuZXJhdGlvbmAsKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgICAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgICAgIHZhciBvdXRwdXRQYXRoID0gJydcbiAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICAgICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJykge1xuICAgICAgICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0UGF0aCA9IG91dHB1dFBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgIHZhciBqc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmpzJylcbiAgICAgICAgdmFyIGNzc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmNzcycpXG4gICAgICAgIGRhdGEuYXNzZXRzLmpzLnVuc2hpZnQoanNQYXRoKVxuICAgICAgICBkYXRhLmFzc2V0cy5jc3MudW5zaGlmdChjc3NQYXRoKVxuICAgICAgICBsb2codmFycy5hcHAgKyBgQWRkaW5nICR7anNQYXRofSBhbmQgJHtjc3NQYXRofSB0byBpbmRleC5odG1sYClcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdza2lwcGVkIEhPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gZW1pdCcpXG4gICAgdmFyIGFwcCA9IHZhcnMuYXBwXG4gICAgdmFyIGZyYW1ld29yayA9IHZhcnMuZnJhbWV3b3JrXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgIGNvbnN0IF9idWlsZEV4dEJ1bmRsZSA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9idWlsZEV4dEJ1bmRsZVxuICAgIGxldCBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm91dHB1dFBhdGgsdmFycy5leHRQYXRoKVxuICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycgJiYgY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgfVxuICAgIGxvZ3Yob3B0aW9ucywnb3V0cHV0UGF0aDogJyArIG91dHB1dFBhdGgpXG4gICAgbG9ndihvcHRpb25zLCdmcmFtZXdvcms6ICcgKyBmcmFtZXdvcmspXG4gICAgaWYgKG9wdGlvbnMuZW1pdCA9PSB0cnVlKSB7XG4gICAgICBpZiAoZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgICAgX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgIW9wdGlvbnMuZ2VuUHJvZERhdGEpIHtcbiAgICAgICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVxdWlyZShgLi8ke2ZyYW1ld29ya31VdGlsYCkuX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21tYW5kID0gJydcbiAgICAgIGlmIChvcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICBjb21tYW5kID0gJ3dhdGNoJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbW1hbmQgPSAnYnVpbGQnXG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJzLnJlYnVpbGQgPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGFybXMgPSBbXVxuICAgICAgICBpZiAob3B0aW9ucy5wcm9maWxlID09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByb2ZpbGUgPT0gJycgfHwgb3B0aW9ucy5wcm9maWxlID09IG51bGwpIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFycy53YXRjaFN0YXJ0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICBhd2FpdCBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpXG4gICAgICAgICAgdmFycy53YXRjaFN0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2coYCR7dmFycy5hcHB9RlVOQ1RJT04gZW1pdCBub3QgcnVuYClcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdlbWl0OiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dCwgY29tcGlsYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9wcmVwYXJlRm9yQnVpbGQnKVxuICAgIGNvbnN0IHJpbXJhZiA9IHJlcXVpcmUoJ3JpbXJhZicpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgdmFyIHBhY2thZ2VzID0gb3B0aW9ucy5wYWNrYWdlc1xuICAgIHZhciB0b29sa2l0ID0gb3B0aW9ucy50b29sa2l0XG4gICAgdmFyIHRoZW1lID0gb3B0aW9ucy50aGVtZVxuXG4gICAgdGhlbWUgPSB0aGVtZSB8fCAodG9vbGtpdCA9PT0gJ2NsYXNzaWMnID8gJ3RoZW1lLXRyaXRvbicgOiAndGhlbWUtbWF0ZXJpYWwnKVxuICAgIGxvZ3Yob3B0aW9ucywnZmlyc3RUaW1lOiAnICsgdmFycy5maXJzdFRpbWUpXG4gICAgaWYgKHZhcnMuZmlyc3RUaW1lKSB7XG4gICAgICByaW1yYWYuc3luYyhvdXRwdXQpXG4gICAgICBta2RpcnAuc3luYyhvdXRwdXQpXG4gICAgICBjb25zdCBidWlsZFhNTCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuYnVpbGRYTUxcbiAgICAgIGNvbnN0IGNyZWF0ZUFwcEpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUFwcEpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZVdvcmtzcGFjZUpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZVdvcmtzcGFjZUpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUpTRE9NRW52aXJvbm1lbnRcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYnVpbGQueG1sJyksIGJ1aWxkWE1MKHZhcnMucHJvZHVjdGlvbiwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYXBwLmpzb24nKSwgY3JlYXRlQXBwSnNvbih0aGVtZSwgcGFja2FnZXMsIHRvb2xraXQsIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2pzZG9tLWVudmlyb25tZW50LmpzJyksIGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnd29ya3NwYWNlLmpzb24nKSwgY3JlYXRlV29ya3NwYWNlSnNvbihvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG5cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAnYW5ndWxhcicpIHtcblxuICAgICAgICAvL2JlY2F1c2Ugb2YgYSBwcm9ibGVtIHdpdGggY29sb3JwaWNrZXJcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3V4LycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgKHV4KSAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHZhcnMuZnJhbWV3b3JrID09ICdyZWFjdCcpICB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3QvcGFja2FnZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtcmVhY3QvcGFja2FnZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ3BhY2thZ2VzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9vdmVycmlkZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3Jlc291cmNlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21SZXNvdXJjZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Jlc291cmNlcy8nKVxuICAgICAgICB2YXIgdG9SZXNvdXJjZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAnLi4vcmVzb3VyY2VzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21SZXNvdXJjZXMsIHRvUmVzb3VyY2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAvLyAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgIC8vICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJ3Jlc291cmNlcycpXG4gICAgICAvLyAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgIC8vICAgbG9nKGFwcCArICc2Q29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIC8vIH1cbiAgICAgIFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3BhY2thZ2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhY2thZ2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcy8nKVxuICAgICAgICB2YXIgdG9QYWNrYWdlcyA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGFja2FnZXMsIHRvUGFja2FnZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdvdmVycmlkZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnb3ZlcnJpZGVzLycpXG4gICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmICghdmFycy5kZXBzLmluY2x1ZGVzKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKSlcbiAgICAgICAgdmFycy5kZXBzLnB1c2goJ0V4dC5yZXF1aXJlKFwiRXh0LmxheW91dC4qXCIpO1xcbicpXG4gICAgICBqcyA9IHZhcnMuZGVwcy5qb2luKCc7XFxuJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAganMgPSAnRXh0LnJlcXVpcmUoXCJFeHQuKlwiKSdcbiAgICB9XG4gICAgaWYgKHZhcnMubWFuaWZlc3QgPT09IG51bGwgfHwganMgIT09IHZhcnMubWFuaWZlc3QpIHtcbiAgICAgIHZhcnMubWFuaWZlc3QgPSBqc1xuICAgICAgY29uc3QgbWFuaWZlc3QgPSBwYXRoLmpvaW4ob3V0cHV0LCAnbWFuaWZlc3QuanMnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhtYW5pZmVzdCwganMsICd1dGY4JylcbiAgICAgIHZhcnMucmVidWlsZCA9IHRydWVcbiAgICAgIHZhciBidW5kbGVEaXIgPSBvdXRwdXQucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJylcbiAgICAgIGlmIChidW5kbGVEaXIudHJpbSgpID09ICcnKSB7YnVuZGxlRGlyID0gJy4vJ31cbiAgICAgIGxvZyhhcHAgKyAnQnVpbGRpbmcgRXh0IGJ1bmRsZSBhdDogJyArIGJ1bmRsZURpcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXJzLnJlYnVpbGQgPSBmYWxzZVxuICAgICAgbG9nKGFwcCArICdFeHQgcmVidWlsZCBOT1QgbmVlZGVkJylcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfcHJlcGFyZUZvckJ1aWxkOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2J1aWxkRXh0QnVuZGxlJylcblxuICAgIGxldCBzZW5jaGE7IHRyeSB7IHNlbmNoYSA9IHJlcXVpcmUoJ0BzZW5jaGEvY21kJykgfSBjYXRjaCAoZSkgeyBzZW5jaGEgPSAnc2VuY2hhJyB9XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoc2VuY2hhKSkge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIGV4aXN0cycpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIERPRVMgTk9UIGV4aXN0JylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb25CdWlsZERvbmUgPSAoKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnb25CdWlsZERvbmUnKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdHMgPSB7IGN3ZDogb3V0cHV0UGF0aCwgc2lsZW50OiB0cnVlLCBzdGRpbzogJ3BpcGUnLCBlbmNvZGluZzogJ3V0Zi04J31cbiAgICAgIGV4ZWN1dGVBc3luYyhhcHAsIHNlbmNoYSwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24oKSB7IG9uQnVpbGREb25lKCkgfSwgXG4gICAgICAgIGZ1bmN0aW9uKHJlYXNvbikgeyByZWplY3QocmVhc29uKSB9XG4gICAgICApXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coJ2UnKVxuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfYnVpbGRFeHRCdW5kbGU6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlQXN5bmMgKGFwcCwgY29tbWFuZCwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgLy9jb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBTZXJ2ZXJcIiwgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgY29uc3QgREVGQVVMVF9TVUJTVFJTID0gW1wiW0lORl0geFNlcnZlclwiLCAnW0lORl0gTG9hZGluZycsICdbSU5GXSBBcHBlbmQnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbSU5GXSBQcm9jZXNzaW5nIEJ1aWxkJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICB2YXIgc3Vic3RyaW5ncyA9IERFRkFVTFRfU1VCU1RSUyBcbiAgICB2YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG4gICAgY29uc3QgY3Jvc3NTcGF3biA9IHJlcXVpcmUoJ2Nyb3NzLXNwYXduJylcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBsb2d2KG9wdGlvbnMsICdGVU5DVElPTiBleGVjdXRlQXN5bmMnKVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxvZ3Yob3B0aW9ucyxgY29tbWFuZCAtICR7Y29tbWFuZH1gKVxuICAgICAgbG9ndihvcHRpb25zLCBgcGFybXMgLSAke3Bhcm1zfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBvcHRzIC0gJHtKU09OLnN0cmluZ2lmeShvcHRzKX1gKVxuICAgICAgbGV0IGNoaWxkID0gY3Jvc3NTcGF3bihjb21tYW5kLCBwYXJtcywgb3B0cylcbiAgICAgIGNoaWxkLm9uKCdjbG9zZScsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gY2xvc2U6IGAgKyBjb2RlKSBcbiAgICAgICAgaWYoY29kZSA9PT0gMCkgeyByZXNvbHZlKDApIH1cbiAgICAgICAgZWxzZSB7IGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCBuZXcgRXJyb3IoY29kZSkgKTsgcmVzb2x2ZSgwKSB9XG4gICAgICB9KVxuICAgICAgY2hpbGQub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7IFxuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBlcnJvcmApIFxuICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChlcnJvcilcbiAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICBsb2d2KG9wdGlvbnMsIGAke3N0cn1gKVxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKCkubWF0Y2goL3dhaXRpbmcgZm9yIGNoYW5nZXNcXC5cXC5cXC4vKSkge1xuICAgICAgICAgIHJlc29sdmUoMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc3Vic3RyaW5ncy5zb21lKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIGRhdGEuaW5kZXhPZih2KSA+PSAwOyB9KSkgeyBcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0lORl1cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0xPR11cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoXCJbRVJSXVwiKSkge1xuICAgICAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChhcHAgKyBzdHIucmVwbGFjZSgvXlxcW0VSUlxcXSAvZ2ksICcnKSk7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0VSUl1cIiwgYCR7Y2hhbGsucmVkKFwiW0VSUl1cIil9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZyhgJHthcHB9JHtzdHJ9YCkgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY2hpbGQuc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgZXJyb3Igb24gY2xvc2U6IGAgKyBkYXRhKSBcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIHZhciBzdHJKYXZhT3B0cyA9IFwiUGlja2VkIHVwIF9KQVZBX09QVElPTlNcIjtcbiAgICAgICAgdmFyIGluY2x1ZGVzID0gc3RyLmluY2x1ZGVzKHN0ckphdmFPcHRzKVxuICAgICAgICBpZiAoIWluY2x1ZGVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7YXBwfSAke2NoYWxrLnJlZChcIltFUlJdXCIpfSAke3N0cn1gKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdleGVjdXRlQXN5bmM6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfSBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhzKSB7XG4gIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gIHRyeSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKClcbiAgfVxuICBjYXRjaChlKSB7fVxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShzKVxuICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ3Yob3B0aW9ucywgcykge1xuICBpZiAob3B0aW9ucy52ZXJib3NlID09ICd5ZXMnKSB7XG4gICAgcmVxdWlyZSgncmVhZGxpbmUnKS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMClcbiAgICB0cnkge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKClcbiAgICB9XG4gICAgY2F0Y2goZSkge31cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShgLXZlcmJvc2U6ICR7c31gKVxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG4nKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QXBwKCkge1xuICB2YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG4gIHZhciBwcmVmaXggPSBgYFxuICBjb25zdCBwbGF0Zm9ybSA9IHJlcXVpcmUoJ29zJykucGxhdGZvcm0oKVxuICBpZiAocGxhdGZvcm0gPT0gJ2RhcndpbicpIHsgcHJlZml4ID0gYOKEuSDvvaJleHTvvaM6YCB9XG4gIGVsc2UgeyBwcmVmaXggPSBgaSBbZXh0XTpgIH1cbiAgcmV0dXJuIGAke2NoYWxrLmdyZWVuKHByZWZpeCl9IGBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRWZXJzaW9ucyhhcHAsIHBsdWdpbk5hbWUsIGZyYW1ld29ya05hbWUpIHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuICB2YXIgdiA9IHt9XG4gIHZhciBwbHVnaW5QYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9Ac2VuY2hhJywgcGx1Z2luTmFtZSlcbiAgdmFyIHBsdWdpblBrZyA9IChmcy5leGlzdHNTeW5jKHBsdWdpblBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5wbHVnaW5WZXJzaW9uID0gcGx1Z2luUGtnLnZlcnNpb25cbiAgdi5fcmVzb2x2ZWQgPSBwbHVnaW5Qa2cuX3Jlc29sdmVkXG4gIGlmICh2Ll9yZXNvbHZlZCA9PSB1bmRlZmluZWQpIHtcbiAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoLTEgPT0gdi5fcmVzb2x2ZWQuaW5kZXhPZignY29tbXVuaXR5JykpIHtcbiAgICAgIHYuZWRpdGlvbiA9IGBDb21tZXJjaWFsYFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYuZWRpdGlvbiA9IGBDb21tdW5pdHlgXG4gICAgfVxuICB9XG5cbiAgdmFyIHdlYnBhY2tQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy93ZWJwYWNrJylcbiAgdmFyIHdlYnBhY2tQa2cgPSAoZnMuZXhpc3RzU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi53ZWJwYWNrVmVyc2lvbiA9IHdlYnBhY2tQa2cudmVyc2lvblxuXG4gIHZhciBleHRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9Ac2VuY2hhL2V4dCcpXG4gIHZhciBleHRQa2cgPSAoZnMuZXhpc3RzU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYuZXh0VmVyc2lvbiA9IGV4dFBrZy5zZW5jaGEudmVyc2lvblxuXG4gIHZhciBjbWRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYuY21kVmVyc2lvbiA9IGNtZFBrZy52ZXJzaW9uX2Z1bGxcblxuICBpZiAodi5jbWRWZXJzaW9uID09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjbWRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhLyR7cGx1Z2luTmFtZX0vbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICAgIHYuY21kVmVyc2lvbiA9IGNtZFBrZy52ZXJzaW9uX2Z1bGxcbiAgfVxuXG4gIHZhciBmcmFtZXdvcmtJbmZvID0gJydcbiAgIGlmIChmcmFtZXdvcmtOYW1lICE9IHVuZGVmaW5lZCAmJiBmcmFtZXdvcmtOYW1lICE9ICdleHRqcycpIHtcbiAgICB2YXIgZnJhbWV3b3JrUGF0aCA9ICcnXG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ3JlYWN0Jykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvcmVhY3QnKVxuICAgIH1cbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAnYW5ndWxhcicpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUnKVxuICAgIH1cbiAgICB2YXIgZnJhbWV3b3JrUGtnID0gKGZzLmV4aXN0c1N5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICAgIHYuZnJhbWV3b3JrVmVyc2lvbiA9IGZyYW1ld29ya1BrZy52ZXJzaW9uXG4gICAgZnJhbWV3b3JrSW5mbyA9ICcsICcgKyBmcmFtZXdvcmtOYW1lICsgJyB2JyArIHYuZnJhbWV3b3JrVmVyc2lvblxuICB9XG4gIHJldHVybiBhcHAgKyAnZXh0LXdlYnBhY2stcGx1Z2luIHYnICsgdi5wbHVnaW5WZXJzaW9uICsgJywgRXh0IEpTIHYnICsgdi5leHRWZXJzaW9uICsgJyAnICsgdi5lZGl0aW9uICsgJyBFZGl0aW9uLCBTZW5jaGEgQ21kIHYnICsgdi5jbWRWZXJzaW9uICsgJywgd2VicGFjayB2JyArIHYud2VicGFja1ZlcnNpb24gKyBmcmFtZXdvcmtJbmZvXG4gfSJdfQ==