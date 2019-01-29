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
exports._done = _done;
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
  }

  thisVars.app = require('./pluginUtil')._getApp();
  logv(options, `pluginName - ${thisVars.pluginName}`);
  logv(options, `thisVars.app - ${thisVars.app}`);
  const rc = fs.existsSync(`.ext-${thisVars.framework}rc`) && JSON.parse(fs.readFileSync(`.ext-${thisVars.framework}rc`, 'utf-8')) || {};
  thisOptions = _objectSpread({}, require(`./${thisVars.framework}Util`).getDefaultOptions(), options, rc);
  logv(options, `thisOptions - ${JSON.stringify(thisOptions)}`);

  if (thisOptions.environment == 'production') {
    thisVars.production = true;
  } else {
    thisVars.production = false;
  }

  log(require('./pluginUtil')._getVersions(thisVars.app, thisVars.pluginName, thisVars.framework));
  log(thisVars.app + 'Building for ' + thisOptions.environment);
  log(thisVars.app + 'Generating production data: ' + thisOptions.treeshake);
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
      if (options.framework == 'angular' && options.treeshake) {
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
          });
          const mainPath = path.resolve(process.cwd(), 'src/main.ts');
          var jsMain = fsx.readFileSync(mainPath).toString();
          var newJsMain = jsMain.replace(`bootstrapModule(AppModule);`, `enableProdMode();bootstrapModule( AppModule );`);
          fsx.writeFileSync(mainPath, newJsMain, 'utf-8', () => {
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

      if (options.framework == 'angular' && options.treeshake) {
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

    if (options.framework != 'extjs' && !options.treeshake) {
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
            if (options.framework == 'angular' && !options.treeshake) {
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


function _done(vars, options) {
  try {
    const log = require('./pluginUtil').log;

    const logv = require('./pluginUtil').logv;

    logv(options, 'FUNCTION _done');

    if (vars.production && !options.treeshake && options.framework == 'angular') {
      require(`./${framework}Util`)._done(vars, options); // const path = require('path')
      // const fsx = require('fs-extra')
      // var rimraf = require("rimraf");
      // rimraf.sync(path.resolve(process.cwd(), `src/app/ext-angular-prod`));
      // try {
      //   const appModulePath = path.resolve(process.cwd(), 'src/app/app.module.ts')
      //   var js = fsx.readFileSync(appModulePath).toString()
      //   var newJs = js.replace(
      //     `import { ExtAngularModule } from './ext-angular-prod/ext-angular.module'`,
      //     `import { ExtAngularModule } from '@sencha/ext-angular'`
      //   );
      //   fsx.writeFileSync(appModulePath, newJs, 'utf-8', ()=>{return})
      //   const mainPath = path.resolve(process.cwd(), 'src/main.ts')
      //   var jsMain = fsx.readFileSync(mainPath).toString()
      //   var newJsMain = jsMain.replace(
      //     `enableProdMode();bootstrapModule( AppModule );`,
      //     `bootstrapModule(AppModule);`
      //   );
      //   fsx.writeFileSync(mainPath, newJsMain, 'utf-8', ()=>{return})
      // }
      // catch (e) {
      //   console.log(e)
      //   //compilation.errors.push('replace ExtAngularModule - ext-done: ' + e)
      //   return []
      // }

    }

    try {
      if (options.browser == true && options.watch == 'yes' && vars.production == false) {
        if (vars.browserCount == 0) {
          var url = 'http://localhost:' + options.port;

          require('./pluginUtil').log(vars.app + `Opening browser at ${url}`);

          vars.browserCount++;

          const opn = require('opn');

          opn(url);
        }
      }
    } catch (e) {
      console.log(e); //compilation.errors.push('show browser window - ext-done: ' + e)
    }
  } catch (e) {
    require('./pluginUtil').logv(options, e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwiZnN4IiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiYXBwIiwiX2dldEFwcCIsImxvZ3YiLCJyYyIsImV4aXN0c1N5bmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsInRyZWVzaGFrZSIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJta2RpcnAiLCJleHRBbmd1bGFyUGFja2FnZSIsImV4dEFuZ3VsYXJGb2xkZXIiLCJleHRBbmd1bGFyTW9kdWxlIiwicGF0aFRvRXh0QW5ndWxhck1vZGVybiIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwiZXh0Q29tcG9uZW50cyIsInBhY2thZ2VQYXRoIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZvckVhY2giLCJmaWxlTmFtZSIsInN1YnN0ciIsImVuZCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJhcHBNb2R1bGVQYXRoIiwianMiLCJ0b1N0cmluZyIsIm5ld0pzIiwicmVwbGFjZSIsIndyaXRlRmlsZVN5bmMiLCJtYWluUGF0aCIsImpzTWFpbiIsIm5ld0pzTWFpbiIsInN5bmMiLCJ0IiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJob29rcyIsInN1Y2NlZWRNb2R1bGUiLCJ0YXAiLCJtb2R1bGUiLCJyZXNvdXJjZSIsIm1hdGNoIiwiZGVwcyIsImV4dHJhY3RGcm9tU291cmNlIiwiZmluaXNoTW9kdWxlcyIsIm1vZHVsZXMiLCJzdHJpbmciLCJjb2RlIiwiaW5kZXgiLCJsZW5ndGgiLCJ1c2VkRXh0Q29tcG9uZW50cyIsIlNldCIsInJlYWRGcm9tIiwid3JpdGVUb1BhdGgiLCJiYXNlQ29udGVudCIsIndyaXRlVG9QYXRoV3JpdHRlbiIsIm1vZHVsZVZhcnMiLCJpbXBvcnRzIiwiZXhwb3J0cyIsImRlY2xhcmF0aW9ucyIsInh0eXBlIiwiY2FwY2xhc3NuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNsYXNzRmlsZSIsImNvbnRlbnRzIiwiaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbiIsImRhdGEiLCJvdXRwdXRQYXRoIiwiZGV2U2VydmVyIiwiam9pbiIsImNvbnRlbnRCYXNlIiwidHJpbSIsImpzUGF0aCIsImV4dFBhdGgiLCJjc3NQYXRoIiwiYXNzZXRzIiwidW5zaGlmdCIsImNzcyIsIl9hZnRlckNvbXBpbGUiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsIndhdGNoU3RhcnRlZCIsIm91dHB1dCIsInJpbXJhZiIsInBhY2thZ2VzIiwidG9vbGtpdCIsInRoZW1lIiwiZmlyc3RUaW1lIiwiYnVpbGRYTUwiLCJjcmVhdGVBcHBKc29uIiwiY3JlYXRlV29ya3NwYWNlSnNvbiIsImNyZWF0ZUpTRE9NRW52aXJvbm1lbnQiLCJmcm9tUGF0aCIsInRvUGF0aCIsImNvcHlTeW5jIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsImluY2x1ZGVzIiwibWFuaWZlc3QiLCJidW5kbGVEaXIiLCJzZW5jaGEiLCJQcm9taXNlIiwicmVqZWN0Iiwib25CdWlsZERvbmUiLCJvcHRzIiwic2lsZW50Iiwic3RkaW8iLCJlbmNvZGluZyIsImV4ZWN1dGVBc3luYyIsInRoZW4iLCJyZWFzb24iLCJfZG9uZSIsImJyb3dzZXIiLCJicm93c2VyQ291bnQiLCJ1cmwiLCJwb3J0Iiwib3BuIiwiREVGQVVMVF9TVUJTVFJTIiwic3Vic3RyaW5ncyIsImNoYWxrIiwiY3Jvc3NTcGF3biIsImNoaWxkIiwib24iLCJzaWduYWwiLCJFcnJvciIsImVycm9yIiwic3Rkb3V0Iiwic3RyIiwic29tZSIsInYiLCJyZWQiLCJzdGRlcnIiLCJzdHJKYXZhT3B0cyIsInMiLCJjdXJzb3JUbyIsImNsZWFyTGluZSIsIndyaXRlIiwidmVyYm9zZSIsInByZWZpeCIsInBsYXRmb3JtIiwiZ3JlZW4iLCJmcmFtZXdvcmtOYW1lIiwicGx1Z2luUGF0aCIsInBsdWdpblBrZyIsInBsdWdpblZlcnNpb24iLCJ2ZXJzaW9uIiwiX3Jlc29sdmVkIiwiZWRpdGlvbiIsIndlYnBhY2tQYXRoIiwid2VicGFja1BrZyIsIndlYnBhY2tWZXJzaW9uIiwiZXh0UGtnIiwiZXh0VmVyc2lvbiIsImNtZFBhdGgiLCJjbWRQa2ciLCJjbWRWZXJzaW9uIiwidmVyc2lvbl9mdWxsIiwiZnJhbWV3b3JrSW5mbyIsImZyYW1ld29ya1BhdGgiLCJmcmFtZXdvcmtQa2ciLCJmcmFtZXdvcmtWZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDcEMsUUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxRQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUNBLFFBQU1FLEdBQUcsR0FBR0YsT0FBTyxDQUFDLFVBQUQsQ0FBbkI7O0FBRUEsTUFBSUcsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFFQSxNQUFJUCxPQUFPLENBQUNRLFNBQVIsSUFBcUJDLFNB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QixFQUE4QjtBQUM1QmlCLE1BQUFBLGFBQWEsR0FBR3ZNLElBQUksQ0FBQ3VDLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBMkIsb0JBQTNCLENBQWhCO0FBQ0Q7O0FBQ0QsUUFBSTZJLGFBQWEsSUFBSSxTQUFyQixFQUFnQztBQUM5QmlCLE1BQUFBLGFBQWEsR0FBR3ZNLElBQUksQ0FBQ3VDLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBMkIsNEJBQTNCLENBQWhCO0FBQ0Q7O0FBQ0QsUUFBSStKLFlBQVksR0FBSXRNLEVBQUUsQ0FBQ2tCLFVBQUgsQ0FBY21MLGFBQWEsR0FBQyxlQUE1QixLQUFnRGxMLElBQUksQ0FBQ0MsS0FBTCxDQUFXcEIsRUFBRSxDQUFDcUIsWUFBSCxDQUFnQmdMLGFBQWEsR0FBQyxlQUE5QixFQUErQyxPQUEvQyxDQUFYLENBQWhELElBQXVILEVBQTNJO0FBQ0E3QixJQUFBQSxDQUFDLENBQUMrQixnQkFBRixHQUFxQkQsWUFBWSxDQUFDZCxPQUFsQztBQUNBWSxJQUFBQSxhQUFhLEdBQUcsT0FBT2hCLGFBQVAsR0FBdUIsSUFBdkIsR0FBOEJaLENBQUMsQ0FBQytCLGdCQUFoRDtBQUNEOztBQUNELFNBQU96TCxHQUFHLEdBQUcsc0JBQU4sR0FBK0IwSixDQUFDLENBQUNlLGFBQWpDLEdBQWlELFlBQWpELEdBQWdFZixDQUFDLENBQUN1QixVQUFsRSxHQUErRSxHQUEvRSxHQUFxRnZCLENBQUMsQ0FBQ2tCLE9BQXZGLEdBQWlHLHdCQUFqRyxHQUE0SGxCLENBQUMsQ0FBQzBCLFVBQTlILEdBQTJJLGFBQTNJLEdBQTJKMUIsQ0FBQyxDQUFDcUIsY0FBN0osR0FBOEtPLGFBQXJMO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29uc3RydWN0b3Iob3B0aW9ucykge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG5cbiAgdmFyIHRoaXNWYXJzID0ge31cbiAgdmFyIHRoaXNPcHRpb25zID0ge31cbiAgdmFyIHBsdWdpbiA9IHt9XG5cbiAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycyA9IFtdXG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzLnB1c2goJ3dlYnBhY2sgY29uZmlnOiBmcmFtZXdvcmsgcGFyYW1ldGVyIG9uIGV4dC13ZWJwYWNrLXBsdWdpbiBpcyBub3QgZGVmaW5lZCAtIHZhbHVlczogcmVhY3QsIGFuZ3VsYXIsIGV4dGpzJylcbiAgICBwbHVnaW4udmFycyA9IHRoaXNWYXJzXG4gICAgcmV0dXJuIHBsdWdpblxuICB9XG5cbiAgY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnc2NoZW1hLXV0aWxzJylcbiAgdmFsaWRhdGVPcHRpb25zKHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0VmFsaWRhdGVPcHRpb25zKCksIG9wdGlvbnMsICcnKVxuICB0aGlzVmFycyA9IHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdFZhcnMoKVxuICB0aGlzVmFycy5mcmFtZXdvcmsgPSBvcHRpb25zLmZyYW1ld29ya1xuICBzd2l0Y2godGhpc1ZhcnMuZnJhbWV3b3JrKSB7XG4gICAgY2FzZSAnZXh0anMnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWFjdCc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1yZWFjdC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FuZ3VsYXInOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtYW5ndWxhci13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgfVxuXG4gIHRoaXNWYXJzLmFwcCA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRBcHAoKVxuICBsb2d2KG9wdGlvbnMsIGBwbHVnaW5OYW1lIC0gJHt0aGlzVmFycy5wbHVnaW5OYW1lfWApXG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNWYXJzLmFwcCAtICR7dGhpc1ZhcnMuYXBwfWApXG5cbiAgY29uc3QgcmMgPSAoZnMuZXhpc3RzU3luYyhgLmV4dC0ke3RoaXNWYXJzLmZyYW1ld29ya31yY2ApICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCwgJ3V0Zi04JykpIHx8IHt9KVxuICB0aGlzT3B0aW9ucyA9IHsgLi4ucmVxdWlyZShgLi8ke3RoaXNWYXJzLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdE9wdGlvbnMoKSwgLi4ub3B0aW9ucywgLi4ucmMgfVxuICBsb2d2KG9wdGlvbnMsIGB0aGlzT3B0aW9ucyAtICR7SlNPTi5zdHJpbmdpZnkodGhpc09wdGlvbnMpfWApXG5cbiAgaWYgKHRoaXNPcHRpb25zLmVudmlyb25tZW50ID09ICdwcm9kdWN0aW9uJykgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSB0cnVlfVxuICBlbHNlIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gZmFsc2V9XG5cbiAgbG9nKHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRWZXJzaW9ucyh0aGlzVmFycy5hcHAsIHRoaXNWYXJzLnBsdWdpbk5hbWUsIHRoaXNWYXJzLmZyYW1ld29yaykpXG4gIGxvZyh0aGlzVmFycy5hcHAgKyAnQnVpbGRpbmcgZm9yICcgKyB0aGlzT3B0aW9ucy5lbnZpcm9ubWVudClcbiAgbG9nKHRoaXNWYXJzLmFwcCArICdHZW5lcmF0aW5nIHByb2R1Y3Rpb24gZGF0YTogJyArIHRoaXNPcHRpb25zLnRyZWVzaGFrZSlcblxuICBwbHVnaW4udmFycyA9IHRoaXNWYXJzXG4gIHBsdWdpbi5vcHRpb25zID0gdGhpc09wdGlvbnNcbiAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLCAnRlVOQ1RJT04gY29uc3RydWN0b3IgKGVuZCknKVxuICByZXR1cm4gcGx1Z2luXG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxhdGlvbihjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdGVU5DVElPTiBfY29tcGlsYXRpb24nKVxuXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgY29uc3QgZXh0QW5ndWxhclBhY2thZ2UgPSAnQHNlbmNoYS9leHQtYW5ndWxhcidcbiAgICBjb25zdCBleHRBbmd1bGFyRm9sZGVyID0gJ2V4dC1hbmd1bGFyLXByb2QnXG4gICAgY29uc3QgZXh0QW5ndWxhck1vZHVsZSA9ICdleHQtYW5ndWxhci5tb2R1bGUnXG4gICAgY29uc3QgcGF0aFRvRXh0QW5ndWxhck1vZGVybiA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC8ke2V4dEFuZ3VsYXJGb2xkZXJ9YClcbiAgICB2YXIgZXh0Q29tcG9uZW50cyA9IFtdXG5cbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG9wdGlvbnMudHJlZXNoYWtlKSB7XG4gICAgICAgIGNvbnN0IHBhY2thZ2VQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvJyArIGV4dEFuZ3VsYXJQYWNrYWdlKVxuICAgICAgICB2YXIgZmlsZXMgPSBmc3gucmVhZGRpclN5bmMoYCR7cGFja2FnZVBhdGh9L2xpYmApXG4gICAgICAgIGZpbGVzLmZvckVhY2goKGZpbGVOYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbGVOYW1lICYmIGZpbGVOYW1lLnN1YnN0cigwLCA0KSA9PSAnZXh0LScpIHtcbiAgICAgICAgICAgIHZhciBlbmQgPSBmaWxlTmFtZS5zdWJzdHIoNCkuaW5kZXhPZignLmNvbXBvbmVudCcpXG4gICAgICAgICAgICBpZiAoZW5kID49IDApIHtcbiAgICAgICAgICAgICAgZXh0Q29tcG9uZW50cy5wdXNoKGZpbGVOYW1lLnN1YnN0cmluZyg0LCBlbmQgKyA0KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdHJ5IHtcblxuXG4gICAgICAgICAgY29uc3QgYXBwTW9kdWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2FwcC9hcHAubW9kdWxlLnRzJylcbiAgICAgICAgICB2YXIganMgPSBmc3gucmVhZEZpbGVTeW5jKGFwcE1vZHVsZVBhdGgpLnRvU3RyaW5nKClcbiAgICAgICAgICB2YXIgbmV3SnMgPSBqcy5yZXBsYWNlKFxuICAgICAgICAgICAgYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICdAc2VuY2hhL2V4dC1hbmd1bGFyJ2AsXG4gICAgICAgICAgICBgaW1wb3J0IHsgRXh0QW5ndWxhck1vZHVsZSB9IGZyb20gJy4vZXh0LWFuZ3VsYXItcHJvZC9leHQtYW5ndWxhci5tb2R1bGUnYFxuICAgICAgICAgICk7XG4gICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYXBwTW9kdWxlUGF0aCwgbmV3SnMsICd1dGYtOCcsICgpPT57cmV0dXJufSlcblxuICAgICAgICAgIGNvbnN0IG1haW5QYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvbWFpbi50cycpXG4gICAgICAgICAgdmFyIGpzTWFpbiA9IGZzeC5yZWFkRmlsZVN5bmMobWFpblBhdGgpLnRvU3RyaW5nKClcbiAgICAgICAgICB2YXIgbmV3SnNNYWluID0ganNNYWluLnJlcGxhY2UoXG4gICAgICAgICAgICBgYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7YCxcbiAgICAgICAgICAgIGBlbmFibGVQcm9kTW9kZSgpO2Jvb3RzdHJhcE1vZHVsZSggQXBwTW9kdWxlICk7YFxuICAgICAgICAgICk7XG4gICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMobWFpblBhdGgsIG5ld0pzTWFpbiwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuXG4gICAgICAgICAgLy8gQ3JlYXRlIHRoZSBwcm9kIGZvbGRlciBpZiBkb2VzIG5vdCBleGlzdHMuXG4gICAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm4pKSB7XG4gICAgICAgICAgICBta2RpcnAuc3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKVxuICAgICAgICAgICAgY29uc3QgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZHVsZSgnJywgJycsICcnKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7cGF0aFRvRXh0QW5ndWxhck1vZGVybn0vJHtleHRBbmd1bGFyTW9kdWxlfS50c2AsIHQsICd1dGYtOCcsICgpID0+IHtyZXR1cm59KVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnYnVpbGRNb2R1bGUgaG9vayBpbiBfY29tcGlsYXRpb246ICcgKyBlKVxuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCBtb2R1bGUgPT4ge1xuICAgICAgICAvL3JlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0hPT0sgc3VjY2VlZE1vZHVsZScpXG4gICAgICAgIGlmIChtb2R1bGUucmVzb3VyY2UgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvbm9kZV9tb2R1bGVzLykpIHtcbiAgICAgICAgICB2YXJzLmRlcHMgPSBbLi4uKHZhcnMuZGVwcyB8fCBbXSksIC4uLnJlcXVpcmUoYC4vJHt2YXJzLmZyYW1ld29ya31VdGlsYCkuZXh0cmFjdEZyb21Tb3VyY2UobW9kdWxlLCBvcHRpb25zLCBjb21waWxhdGlvbiwgZXh0Q29tcG9uZW50cyldXG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGV4dENvbXBvbmVudHMubGVuZ3RoICYmIG1vZHVsZS5yZXNvdXJjZSAmJiAobW9kdWxlLnJlc291cmNlLm1hdGNoKC9cXC4oanx0KXN4PyQvKSB8fFxuICAgICAgICAvLyBvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgbW9kdWxlLnJlc291cmNlLm1hdGNoKC9cXC5odG1sJC8pKSAmJlxuICAgICAgICAvLyAhbW9kdWxlLnJlc291cmNlLm1hdGNoKC9ub2RlX21vZHVsZXMvKSAmJiAhbW9kdWxlLnJlc291cmNlLm1hdGNoKGAvZXh0LXskb3B0aW9ucy5mcmFtZXdvcmt9L2J1aWxkL2ApKSB7XG4gICAgICAgIC8vICAgdmFycy5kZXBzID0gWy4uLih2YXJzLmRlcHMgfHwgW10pLCAuLi5yZXF1aXJlKGAuLyR7dmFycy5mcmFtZXdvcmt9VXRpbGApLmV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpXVxuICAgICAgICAvLyB9XG4gICAgICB9KVxuXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG9wdGlvbnMudHJlZXNoYWtlKSB7XG5cblxuXG4gICAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmZpbmlzaE1vZHVsZXMudGFwKGBleHQtZmluaXNoLW1vZHVsZXNgLCBtb2R1bGVzID0+IHtcbiAgICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdIT09LIGZpbmlzaE1vZHVsZXMnKVxuICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICdFeHQuY3JlYXRlKHtcXFwieHR5cGVcXFwiOlxcXCInXG4gICAgICAgICAgdmFycy5kZXBzLmZvckVhY2goY29kZSA9PiB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjb2RlLmluZGV4T2Yoc3RyaW5nKVxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUuc3Vic3RyaW5nKGluZGV4ICsgc3RyaW5nLmxlbmd0aClcbiAgICAgICAgICAgICAgdmFyIGVuZCA9IGNvZGUuaW5kZXhPZignXFxcIicpXG4gICAgICAgICAgICAgIHZhcnMudXNlZEV4dENvbXBvbmVudHMucHVzaChjb2RlLnN1YnN0cigwLCBlbmQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFycy51c2VkRXh0Q29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KHZhcnMudXNlZEV4dENvbXBvbmVudHMpXVxuICAgICAgICAgIGNvbnN0IHJlYWRGcm9tID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvJyArIGV4dEFuZ3VsYXJQYWNrYWdlICsgJy9zcmMvbGliJylcbiAgICAgICAgICBjb25zdCB3cml0ZVRvUGF0aCA9IHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm5cblxuICAgICAgICAgIGNvbnN0IGJhc2VDb250ZW50ID0gZnN4LnJlYWRGaWxlU3luYyhgJHtyZWFkRnJvbX0vYmFzZS50c2ApLnRvU3RyaW5nKClcbiAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0vYmFzZS50c2AsIGJhc2VDb250ZW50LCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgXG4gICAgICAgICAgdmFyIHdyaXRlVG9QYXRoV3JpdHRlbiA9IGZhbHNlXG4gICAgICAgICAgdmFyIG1vZHVsZVZhcnMgPSB7XG4gICAgICAgICAgICBpbXBvcnRzOiAnJyxcbiAgICAgICAgICAgIGV4cG9ydHM6ICcnLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXJzLnVzZWRFeHRDb21wb25lbnRzLmZvckVhY2goeHR5cGUgPT4ge1xuICAgICAgICAgICAgdmFyIGNhcGNsYXNzbmFtZSA9IHh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeHR5cGUucmVwbGFjZSgvLS9nLCBcIl9cIikuc2xpY2UoMSlcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cyA9IG1vZHVsZVZhcnMuaW1wb3J0cyArIGBpbXBvcnQgeyBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQgfSBmcm9tICcuL2V4dC0ke3h0eXBlfS5jb21wb25lbnQnO1xcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZXhwb3J0cyA9IG1vZHVsZVZhcnMuZXhwb3J0cyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zID0gbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgKyBgICAgIEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCxcXG5gXG4gICAgICAgICAgICB2YXIgY2xhc3NGaWxlID0gYC9leHQtJHt4dHlwZX0uY29tcG9uZW50LnRzYFxuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfSR7Y2xhc3NGaWxlfWApLnRvU3RyaW5nKClcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofSR7Y2xhc3NGaWxlfWAsIGNvbnRlbnRzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgICB3cml0ZVRvUGF0aFdyaXR0ZW4gPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAod3JpdGVUb1BhdGhXcml0dGVuKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZHVsZShcbiAgICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzLCBtb2R1bGVWYXJzLmV4cG9ydHMsIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0vJHtleHRBbmd1bGFyTW9kdWxlfS50c2AsIHQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmZyYW1ld29yayAhPSAnZXh0anMnICYmICFvcHRpb25zLnRyZWVzaGFrZSkge1xuXG4gICAgICBjb21waWxhdGlvbi5ob29rcy5odG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uLnRhcChgZXh0LWh0bWwtZ2VuZXJhdGlvbmAsKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgICAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgICAgIHZhciBvdXRwdXRQYXRoID0gJydcbiAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICAgICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJykge1xuICAgICAgICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0UGF0aCA9IG91dHB1dFBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgIHZhciBqc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmpzJylcbiAgICAgICAgdmFyIGNzc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmNzcycpXG4gICAgICAgIGRhdGEuYXNzZXRzLmpzLnVuc2hpZnQoanNQYXRoKVxuICAgICAgICBkYXRhLmFzc2V0cy5jc3MudW5zaGlmdChjc3NQYXRoKVxuICAgICAgICBsb2codmFycy5hcHAgKyBgQWRkaW5nICR7anNQYXRofSBhbmQgJHtjc3NQYXRofSB0byBpbmRleC5odG1sYClcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdza2lwcGVkIEhPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfYWZ0ZXJDb21waWxlKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucykge1xuICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdGVU5DVElPTiBfYWZ0ZXJDb21waWxlJylcbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIGVtaXQnKVxuICAgIHZhciBhcHAgPSB2YXJzLmFwcFxuICAgIHZhciBmcmFtZXdvcmsgPSB2YXJzLmZyYW1ld29ya1xuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICBjb25zdCBfYnVpbGRFeHRCdW5kbGUgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fYnVpbGRFeHRCdW5kbGVcbiAgICBsZXQgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vdXRwdXRQYXRoLHZhcnMuZXh0UGF0aClcbiAgICBpZiAoY29tcGlsZXIub3V0cHV0UGF0aCA9PT0gJy8nICYmIGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlLCBvdXRwdXRQYXRoKVxuICAgIH1cbiAgICBsb2d2KG9wdGlvbnMsJ291dHB1dFBhdGg6ICcgKyBvdXRwdXRQYXRoKVxuICAgIGxvZ3Yob3B0aW9ucywnZnJhbWV3b3JrOiAnICsgZnJhbWV3b3JrKVxuICAgIGlmIChvcHRpb25zLmVtaXQgPT0gdHJ1ZSkge1xuICAgICAgaWYgKGZyYW1ld29yayAhPSAnZXh0anMnKSB7XG4gICAgICAgIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmICFvcHRpb25zLnRyZWVzaGFrZSkge1xuICAgICAgICAgIHJlcXVpcmUoYC4vJHtmcmFtZXdvcmt9VXRpbGApLl9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNvbW1hbmQgPSAnJ1xuICAgICAgaWYgKG9wdGlvbnMud2F0Y2ggPT0gJ3llcycgJiYgdmFycy5wcm9kdWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgIGNvbW1hbmQgPSAnd2F0Y2gnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tbWFuZCA9ICdidWlsZCdcbiAgICAgIH1cblxuICAgICAgaWYgKHZhcnMucmVidWlsZCA9PSB0cnVlKSB7XG4gICAgICAgIHZhciBwYXJtcyA9IFtdXG4gICAgICAgIGlmIChvcHRpb25zLnByb2ZpbGUgPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucHJvZmlsZSA9PSAnJyB8fCBvcHRpb25zLnByb2ZpbGUgPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChjb21tYW5kID09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCAnLS13ZWItc2VydmVyJywgJ2ZhbHNlJywgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCAnLS13ZWItc2VydmVyJywgJ2ZhbHNlJywgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YXJzLndhdGNoU3RhcnRlZCA9PSBmYWxzZSkge1xuICAgICAgICAgIGF3YWl0IF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucylcbiAgICAgICAgICB2YXJzLndhdGNoU3RhcnRlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZyhgJHt2YXJzLmFwcH1GVU5DVElPTiBlbWl0IG5vdCBydW5gKVxuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2VtaXQ6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0LCBjb21waWxhdGlvbikge1xuICB0cnkge1xuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX3ByZXBhcmVGb3JCdWlsZCcpXG4gICAgY29uc3QgcmltcmFmID0gcmVxdWlyZSgncmltcmFmJylcbiAgICBjb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKVxuICAgIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbiAgICB2YXIgcGFja2FnZXMgPSBvcHRpb25zLnBhY2thZ2VzXG4gICAgdmFyIHRvb2xraXQgPSBvcHRpb25zLnRvb2xraXRcbiAgICB2YXIgdGhlbWUgPSBvcHRpb25zLnRoZW1lXG5cbiAgICB0aGVtZSA9IHRoZW1lIHx8ICh0b29sa2l0ID09PSAnY2xhc3NpYycgPyAndGhlbWUtdHJpdG9uJyA6ICd0aGVtZS1tYXRlcmlhbCcpXG4gICAgbG9ndihvcHRpb25zLCdmaXJzdFRpbWU6ICcgKyB2YXJzLmZpcnN0VGltZSlcbiAgICBpZiAodmFycy5maXJzdFRpbWUpIHtcbiAgICAgIHJpbXJhZi5zeW5jKG91dHB1dClcbiAgICAgIG1rZGlycC5zeW5jKG91dHB1dClcbiAgICAgIGNvbnN0IGJ1aWxkWE1MID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5idWlsZFhNTFxuICAgICAgY29uc3QgY3JlYXRlQXBwSnNvbiA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlQXBwSnNvblxuICAgICAgY29uc3QgY3JlYXRlV29ya3NwYWNlSnNvbiA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlV29ya3NwYWNlSnNvblxuICAgICAgY29uc3QgY3JlYXRlSlNET01FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlSlNET01FbnZpcm9ubWVudFxuXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdidWlsZC54bWwnKSwgYnVpbGRYTUwodmFycy5wcm9kdWN0aW9uLCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdhcHAuanNvbicpLCBjcmVhdGVBcHBKc29uKHRoZW1lLCBwYWNrYWdlcywgdG9vbGtpdCwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnanNkb20tZW52aXJvbm1lbnQuanMnKSwgY3JlYXRlSlNET01FbnZpcm9ubWVudChvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICd3b3Jrc3BhY2UuanNvbicpLCBjcmVhdGVXb3Jrc3BhY2VKc29uKG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcblxuICAgICAgaWYgKHZhcnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuXG4gICAgICAgIC8vYmVjYXVzZSBvZiBhIHByb2JsZW0gd2l0aCBjb2xvcnBpY2tlclxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvdXgvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAodXgpICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvcGFja2FnZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtYW5ndWxhci9vdmVycmlkZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ3JlYWN0JykgIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L292ZXJyaWRlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICcuLi9yZXNvdXJjZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3BhY2thZ2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhY2thZ2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcy8nKVxuICAgICAgICB2YXIgdG9QYWNrYWdlcyA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGFja2FnZXMsIHRvUGFja2FnZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdvdmVycmlkZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnb3ZlcnJpZGVzLycpXG4gICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmICghdmFycy5kZXBzLmluY2x1ZGVzKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKSkge1xuICAgICAgICB2YXJzLmRlcHMucHVzaCgnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJylcbiAgICAgIH1cbiAgICAgIGpzID0gdmFycy5kZXBzLmpvaW4oJztcXG4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBqcyA9ICdFeHQucmVxdWlyZShcIkV4dC4qXCIpJ1xuICAgIH1cbiAgICBpZiAodmFycy5tYW5pZmVzdCA9PT0gbnVsbCB8fCBqcyAhPT0gdmFycy5tYW5pZmVzdCkge1xuICAgICAgdmFycy5tYW5pZmVzdCA9IGpzXG4gICAgICBjb25zdCBtYW5pZmVzdCA9IHBhdGguam9pbihvdXRwdXQsICdtYW5pZmVzdC5qcycpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0LCBqcywgJ3V0ZjgnKVxuICAgICAgdmFycy5yZWJ1aWxkID0gdHJ1ZVxuICAgICAgdmFyIGJ1bmRsZURpciA9IG91dHB1dC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKVxuICAgICAgaWYgKGJ1bmRsZURpci50cmltKCkgPT0gJycpIHtidW5kbGVEaXIgPSAnLi8nfVxuICAgICAgbG9nKGFwcCArICdCdWlsZGluZyBFeHQgYnVuZGxlIGF0OiAnICsgYnVuZGxlRGlyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhcnMucmVidWlsZCA9IGZhbHNlXG4gICAgICBsb2coYXBwICsgJ0V4dCByZWJ1aWxkIE5PVCBuZWVkZWQnKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19wcmVwYXJlRm9yQnVpbGQ6ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfYnVpbGRFeHRCdW5kbGUnKVxuXG4gICAgbGV0IHNlbmNoYTsgdHJ5IHsgc2VuY2hhID0gcmVxdWlyZSgnQHNlbmNoYS9jbWQnKSB9IGNhdGNoIChlKSB7IHNlbmNoYSA9ICdzZW5jaGEnIH1cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhzZW5jaGEpKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgZXhpc3RzJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgRE9FUyBOT1QgZXhpc3QnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvbkJ1aWxkRG9uZSA9ICgpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdvbkJ1aWxkRG9uZScpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB2YXIgb3B0cyA9IHsgY3dkOiBvdXRwdXRQYXRoLCBzaWxlbnQ6IHRydWUsIHN0ZGlvOiAncGlwZScsIGVuY29kaW5nOiAndXRmLTgnfVxuICAgICAgZXhlY3V0ZUFzeW5jKGFwcCwgc2VuY2hhLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbigpIHsgb25CdWlsZERvbmUoKSB9LCBcbiAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7IHJlamVjdChyZWFzb24pIH1cbiAgICAgIClcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZScpXG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19idWlsZEV4dEJ1bmRsZTogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9kb25lKHZhcnMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2RvbmUnKVxuXG4gICAgaWYgKHZhcnMucHJvZHVjdGlvbiAmJiAhb3B0aW9ucy50cmVlc2hha2UgJiYgb3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fZG9uZSh2YXJzLCBvcHRpb25zKVxuXG4gICAgICAvLyBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgICAvLyBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgICAvLyB2YXIgcmltcmFmID0gcmVxdWlyZShcInJpbXJhZlwiKTtcbiAgICAgIC8vIHJpbXJhZi5zeW5jKHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC9leHQtYW5ndWxhci1wcm9kYCkpO1xuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgY29uc3QgYXBwTW9kdWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2FwcC9hcHAubW9kdWxlLnRzJylcbiAgICAgIC8vICAgdmFyIGpzID0gZnN4LnJlYWRGaWxlU3luYyhhcHBNb2R1bGVQYXRoKS50b1N0cmluZygpXG4gICAgICAvLyAgIHZhciBuZXdKcyA9IGpzLnJlcGxhY2UoXG4gICAgICAvLyAgICAgYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuL2V4dC1hbmd1bGFyLXByb2QvZXh0LWFuZ3VsYXIubW9kdWxlJ2AsXG4gICAgICAvLyAgICAgYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICdAc2VuY2hhL2V4dC1hbmd1bGFyJ2BcbiAgICAgIC8vICAgKTtcbiAgICAgIC8vICAgZnN4LndyaXRlRmlsZVN5bmMoYXBwTW9kdWxlUGF0aCwgbmV3SnMsICd1dGYtOCcsICgpPT57cmV0dXJufSlcblxuICAgICAgLy8gICBjb25zdCBtYWluUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL21haW4udHMnKVxuICAgICAgLy8gICB2YXIganNNYWluID0gZnN4LnJlYWRGaWxlU3luYyhtYWluUGF0aCkudG9TdHJpbmcoKVxuICAgICAgLy8gICB2YXIgbmV3SnNNYWluID0ganNNYWluLnJlcGxhY2UoXG4gICAgICAvLyAgICAgYGVuYWJsZVByb2RNb2RlKCk7Ym9vdHN0cmFwTW9kdWxlKCBBcHBNb2R1bGUgKTtgLFxuICAgICAgLy8gICAgIGBib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtgXG4gICAgICAvLyAgICk7XG4gICAgICAvLyAgIGZzeC53cml0ZUZpbGVTeW5jKG1haW5QYXRoLCBuZXdKc01haW4sICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgIC8vIH1cbiAgICAgIC8vIGNhdGNoIChlKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAvLyAgIC8vY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ3JlcGxhY2UgRXh0QW5ndWxhck1vZHVsZSAtIGV4dC1kb25lOiAnICsgZSlcbiAgICAgIC8vICAgcmV0dXJuIFtdXG4gICAgICAvLyB9XG4gICAgfSBcblxuICAgIHRyeSB7XG4gICAgICBpZihvcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSAmJiBvcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICBpZiAodmFycy5icm93c2VyQ291bnQgPT0gMCkge1xuICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgb3B0aW9ucy5wb3J0XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHZhcnMuYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAgIHZhcnMuYnJvd3NlckNvdW50KytcbiAgICAgICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgICAgIG9wbih1cmwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAvL2NvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdzaG93IGJyb3dzZXIgd2luZG93IC0gZXh0LWRvbmU6ICcgKyBlKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUFzeW5jIChhcHAsIGNvbW1hbmQsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykge1xuICB0cnkge1xuICAgIC8vY29uc3QgREVGQVVMVF9TVUJTVFJTID0gWydbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gU2VydmVyXCIsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIGNvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFtcIltJTkZdIHhTZXJ2ZXJcIiwgJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gQXBwZW5kJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0lORl0gUHJvY2Vzc2luZyBCdWlsZCcsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgdmFyIHN1YnN0cmluZ3MgPSBERUZBVUxUX1NVQlNUUlMgXG4gICAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICAgIGNvbnN0IGNyb3NzU3Bhd24gPSByZXF1aXJlKCdjcm9zcy1zcGF3bicpXG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgbG9ndihvcHRpb25zLCAnRlVOQ1RJT04gZXhlY3V0ZUFzeW5jJylcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsb2d2KG9wdGlvbnMsYGNvbW1hbmQgLSAke2NvbW1hbmR9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYHBhcm1zIC0gJHtwYXJtc31gKVxuICAgICAgbG9ndihvcHRpb25zLCBgb3B0cyAtICR7SlNPTi5zdHJpbmdpZnkob3B0cyl9YClcbiAgICAgIGxldCBjaGlsZCA9IGNyb3NzU3Bhd24oY29tbWFuZCwgcGFybXMsIG9wdHMpXG4gICAgICBjaGlsZC5vbignY2xvc2UnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGNsb3NlOiBgICsgY29kZSkgXG4gICAgICAgIGlmKGNvZGUgPT09IDApIHsgcmVzb2x2ZSgwKSB9XG4gICAgICAgIGVsc2UgeyBjb21waWxhdGlvbi5lcnJvcnMucHVzaCggbmV3IEVycm9yKGNvZGUpICk7IHJlc29sdmUoMCkgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLm9uKCdlcnJvcicsIChlcnJvcikgPT4geyBcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gZXJyb3JgKSBcbiAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICAgIHJlc29sdmUoMClcbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgbG9ndihvcHRpb25zLCBgJHtzdHJ9YClcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZygpLm1hdGNoKC93YWl0aW5nIGZvciBjaGFuZ2VzXFwuXFwuXFwuLykpIHtcbiAgICAgICAgICByZXNvbHZlKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHN1YnN0cmluZ3Muc29tZShmdW5jdGlvbih2KSB7IHJldHVybiBkYXRhLmluZGV4T2YodikgPj0gMDsgfSkpIHsgXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltJTkZdXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltMT0ddXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKFwiW0VSUl1cIikpIHtcbiAgICAgICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goYXBwICsgc3RyLnJlcGxhY2UoL15cXFtFUlJcXF0gL2dpLCAnJykpO1xuICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltFUlJdXCIsIGAke2NoYWxrLnJlZChcIltFUlJdXCIpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2coYCR7YXBwfSR7c3RyfWApIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZGVyci5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYGVycm9yIG9uIGNsb3NlOiBgICsgZGF0YSkgXG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICB2YXIgc3RySmF2YU9wdHMgPSBcIlBpY2tlZCB1cCBfSkFWQV9PUFRJT05TXCI7XG4gICAgICAgIHZhciBpbmNsdWRlcyA9IHN0ci5pbmNsdWRlcyhzdHJKYXZhT3B0cylcbiAgICAgICAgaWYgKCFpbmNsdWRlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2FwcH0gJHtjaGFsay5yZWQoXCJbRVJSXVwiKX0gJHtzdHJ9YClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZXhlY3V0ZUFzeW5jOiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH0gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cocykge1xuICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICB0cnkge1xuICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gIH1cbiAgY2F0Y2goZSkge31cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUocylcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2d2KG9wdGlvbnMsIHMpIHtcbiAgaWYgKG9wdGlvbnMudmVyYm9zZSA9PSAneWVzJykge1xuICAgIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYC12ZXJib3NlOiAke3N9YClcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFwcCgpIHtcbiAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICB2YXIgcHJlZml4ID0gYGBcbiAgY29uc3QgcGxhdGZvcm0gPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKClcbiAgaWYgKHBsYXRmb3JtID09ICdkYXJ3aW4nKSB7IHByZWZpeCA9IGDihLkg772iZXh0772jOmAgfVxuICBlbHNlIHsgcHJlZml4ID0gYGkgW2V4dF06YCB9XG4gIHJldHVybiBgJHtjaGFsay5ncmVlbihwcmVmaXgpfSBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VmVyc2lvbnMoYXBwLCBwbHVnaW5OYW1lLCBmcmFtZXdvcmtOYW1lKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHYgPSB7fVxuICB2YXIgcGx1Z2luUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYScsIHBsdWdpbk5hbWUpXG4gIHZhciBwbHVnaW5Qa2cgPSAoZnMuZXhpc3RzU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYucGx1Z2luVmVyc2lvbiA9IHBsdWdpblBrZy52ZXJzaW9uXG4gIHYuX3Jlc29sdmVkID0gcGx1Z2luUGtnLl9yZXNvbHZlZFxuICBpZiAodi5fcmVzb2x2ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKC0xID09IHYuX3Jlc29sdmVkLmluZGV4T2YoJ2NvbW11bml0eScpKSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbXVuaXR5YFxuICAgIH1cbiAgfVxuXG4gIHZhciB3ZWJwYWNrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvd2VicGFjaycpXG4gIHZhciB3ZWJwYWNrUGtnID0gKGZzLmV4aXN0c1N5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYud2VicGFja1ZlcnNpb24gPSB3ZWJwYWNrUGtnLnZlcnNpb25cblxuICB2YXIgZXh0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQnKVxuICB2YXIgZXh0UGtnID0gKGZzLmV4aXN0c1N5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmV4dFZlcnNpb24gPSBleHRQa2cuc2VuY2hhLnZlcnNpb25cblxuICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG5cbiAgaWYgKHYuY21kVmVyc2lvbiA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS8ke3BsdWdpbk5hbWV9L25vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gICAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG4gIH1cblxuICB2YXIgZnJhbWV3b3JrSW5mbyA9ICcnXG4gICBpZiAoZnJhbWV3b3JrTmFtZSAhPSB1bmRlZmluZWQgJiYgZnJhbWV3b3JrTmFtZSAhPSAnZXh0anMnKSB7XG4gICAgdmFyIGZyYW1ld29ya1BhdGggPSAnJ1xuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdyZWFjdCcpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3JlYWN0JylcbiAgICB9XG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlJylcbiAgICB9XG4gICAgdmFyIGZyYW1ld29ya1BrZyA9IChmcy5leGlzdHNTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmZyYW1ld29ya1ZlcnNpb24gPSBmcmFtZXdvcmtQa2cudmVyc2lvblxuICAgIGZyYW1ld29ya0luZm8gPSAnLCAnICsgZnJhbWV3b3JrTmFtZSArICcgdicgKyB2LmZyYW1ld29ya1ZlcnNpb25cbiAgfVxuICByZXR1cm4gYXBwICsgJ2V4dC13ZWJwYWNrLXBsdWdpbiB2JyArIHYucGx1Z2luVmVyc2lvbiArICcsIEV4dCBKUyB2JyArIHYuZXh0VmVyc2lvbiArICcgJyArIHYuZWRpdGlvbiArICcgRWRpdGlvbiwgU2VuY2hhIENtZCB2JyArIHYuY21kVmVyc2lvbiArICcsIHdlYnBhY2sgdicgKyB2LndlYnBhY2tWZXJzaW9uICsgZnJhbWV3b3JrSW5mb1xuIH0iXX0=