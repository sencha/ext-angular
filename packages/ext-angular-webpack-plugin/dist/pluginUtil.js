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
  //const path = require('path')
  const fs = require('fs'); //const fsx = require('fs-extra')


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
  log(thisVars.app + 'Treeshake is ' + thisOptions.treeshake);
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
          });

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
          var fromPath = path.join(process.cwd(), 'ext-angular/ux/');
          var toPath = path.join(output, 'ux');
          fsx.copySync(fromPath, toPath);
          log(app + 'Copying (ux) ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }

        if (fs.existsSync(path.join(process.cwd(), 'ext-angular/packages/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/packages/');
          var toPath = path.join(output, 'packages');
          fsx.copySync(fromPath, toPath);
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }

        if (fs.existsSync(path.join(process.cwd(), 'ext-angular/overrides/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/overrides/');
          var toPath = path.join(output, 'overrides');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJmcyIsInJlcXVpcmUiLCJ0aGlzVmFycyIsInRoaXNPcHRpb25zIiwicGx1Z2luIiwiZnJhbWV3b3JrIiwidW5kZWZpbmVkIiwicGx1Z2luRXJyb3JzIiwicHVzaCIsInZhcnMiLCJ2YWxpZGF0ZU9wdGlvbnMiLCJnZXRWYWxpZGF0ZU9wdGlvbnMiLCJnZXREZWZhdWx0VmFycyIsInBsdWdpbk5hbWUiLCJhcHAiLCJfZ2V0QXBwIiwibG9ndiIsInJjIiwiZXhpc3RzU3luYyIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsImdldERlZmF1bHRPcHRpb25zIiwic3RyaW5naWZ5IiwiZW52aXJvbm1lbnQiLCJwcm9kdWN0aW9uIiwibG9nIiwiX2dldFZlcnNpb25zIiwidHJlZXNoYWtlIiwiX2NvbXBpbGF0aW9uIiwiY29tcGlsZXIiLCJjb21waWxhdGlvbiIsImZzeCIsIm1rZGlycCIsInBhdGgiLCJleHRBbmd1bGFyUGFja2FnZSIsImV4dEFuZ3VsYXJGb2xkZXIiLCJleHRBbmd1bGFyTW9kdWxlIiwicGF0aFRvRXh0QW5ndWxhck1vZGVybiIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwiZXh0Q29tcG9uZW50cyIsInBhY2thZ2VQYXRoIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZvckVhY2giLCJmaWxlTmFtZSIsInN1YnN0ciIsImVuZCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJhcHBNb2R1bGVQYXRoIiwianMiLCJ0b1N0cmluZyIsIm5ld0pzIiwicmVwbGFjZSIsIndyaXRlRmlsZVN5bmMiLCJtYWluUGF0aCIsImpzTWFpbiIsIm5ld0pzTWFpbiIsInN5bmMiLCJ0IiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJob29rcyIsInN1Y2NlZWRNb2R1bGUiLCJ0YXAiLCJtb2R1bGUiLCJyZXNvdXJjZSIsIm1hdGNoIiwiZGVwcyIsImV4dHJhY3RGcm9tU291cmNlIiwiZmluaXNoTW9kdWxlcyIsIm1vZHVsZXMiLCJzdHJpbmciLCJjb2RlIiwiaW5kZXgiLCJsZW5ndGgiLCJ1c2VkRXh0Q29tcG9uZW50cyIsIlNldCIsInJlYWRGcm9tIiwid3JpdGVUb1BhdGgiLCJiYXNlQ29udGVudCIsIndyaXRlVG9QYXRoV3JpdHRlbiIsIm1vZHVsZVZhcnMiLCJpbXBvcnRzIiwiZXhwb3J0cyIsImRlY2xhcmF0aW9ucyIsInh0eXBlIiwiY2FwY2xhc3NuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNsYXNzRmlsZSIsImNvbnRlbnRzIiwiaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbiIsImRhdGEiLCJvdXRwdXRQYXRoIiwiZGV2U2VydmVyIiwiam9pbiIsImNvbnRlbnRCYXNlIiwidHJpbSIsImpzUGF0aCIsImV4dFBhdGgiLCJjc3NQYXRoIiwiYXNzZXRzIiwidW5zaGlmdCIsImNzcyIsIl9hZnRlckNvbXBpbGUiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsIndhdGNoU3RhcnRlZCIsIm91dHB1dCIsInJpbXJhZiIsInBhY2thZ2VzIiwidG9vbGtpdCIsInRoZW1lIiwiZmlyc3RUaW1lIiwiYnVpbGRYTUwiLCJjcmVhdGVBcHBKc29uIiwiY3JlYXRlV29ya3NwYWNlSnNvbiIsImNyZWF0ZUpTRE9NRW52aXJvbm1lbnQiLCJmcm9tUGF0aCIsInRvUGF0aCIsImNvcHlTeW5jIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsImluY2x1ZGVzIiwibWFuaWZlc3QiLCJidW5kbGVEaXIiLCJzZW5jaGEiLCJQcm9taXNlIiwicmVqZWN0Iiwib25CdWlsZERvbmUiLCJvcHRzIiwic2lsZW50Iiwic3RkaW8iLCJlbmNvZGluZyIsImV4ZWN1dGVBc3luYyIsInRoZW4iLCJyZWFzb24iLCJfZG9uZSIsImJyb3dzZXIiLCJicm93c2VyQ291bnQiLCJ1cmwiLCJwb3J0Iiwib3BuIiwiREVGQVVMVF9TVUJTVFJTIiwic3Vic3RyaW5ncyIsImNoYWxrIiwiY3Jvc3NTcGF3biIsImNoaWxkIiwib24iLCJzaWduYWwiLCJFcnJvciIsImVycm9yIiwic3Rkb3V0Iiwic3RyIiwic29tZSIsInYiLCJyZWQiLCJzdGRlcnIiLCJzdHJKYXZhT3B0cyIsInMiLCJjdXJzb3JUbyIsImNsZWFyTGluZSIsIndyaXRlIiwidmVyYm9zZSIsInByZWZpeCIsInBsYXRmb3JtIiwiZ3JlZW4iLCJmcmFtZXdvcmtOYW1lIiwicGx1Z2luUGF0aCIsInBsdWdpblBrZyIsInBsdWdpblZlcnNpb24iLCJ2ZXJzaW9uIiwiX3Jlc29sdmVkIiwiZWRpdGlvbiIsIndlYnBhY2tQYXRoIiwid2VicGFja1BrZyIsIndlYnBhY2tWZXJzaW9uIiwiZXh0UGtnIiwiZXh0VmVyc2lvbiIsImNtZFBhdGgiLCJjbWRQa2ciLCJjbWRWZXJzaW9uIiwidmVyc2lvbl9mdWxsIiwiZnJhbWV3b3JrSW5mbyIsImZyYW1ld29ya1BhdGgiLCJmcmFtZXdvcmtQa2ciLCJmcmFtZXdvcmtWZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDcEM7QUFDQSxRQUFNQyxFQUFFLEdBQUdDLE9BQU8sQ0FBQyxJQUFELENBQWxCLENBRm9DLENBR3BDOzs7QUFFQSxNQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUVBLE1BQUlMLE9BQU8sQ0FBQ00sU0FBUixJQUFxQkMsU0FBekIsRUFBb0M7QUFDbENKLElBQUFBLFFBQVEsQ0FBQ0ssWUFBVCxHQUF3QixFQUF4QjtBQUNBTCxJQUFBQSxRQUFRLENB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QVIsRUFBYixFQUEyQixvQkFBM0IsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJNkksYUFBYSxJQUFJLFNBQXJCLEVBQWdDO0FBQzlCaUIsTUFBQUEsYUFBYSxHQUFHckssSUFBSSxDQUFDSyxPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTJCLDRCQUEzQixDQUFoQjtBQUNEOztBQUNELFFBQUkrSixZQUFZLEdBQUl4TSxFQUFFLENBQUNrQixVQUFILENBQWNxTCxhQUFhLEdBQUMsZUFBNUIsS0FBZ0RwTCxJQUFJLENBQUNDLEtBQUwsQ0FBV3BCLEVBQUUsQ0FBQ3FCLFlBQUgsQ0FBZ0JrTCxhQUFhLEdBQUMsZUFBOUIsRUFBK0MsT0FBL0MsQ0FBWCxDQUFoRCxJQUF1SCxFQUEzSTtBQUNBN0IsSUFBQUEsQ0FBQyxDQUFDK0IsZ0JBQUYsR0FBcUJELFlBQVksQ0FBQ2QsT0FBbEM7QUFDQVksSUFBQUEsYUFBYSxHQUFHLE9BQU9oQixhQUFQLEdBQXVCLElBQXZCLEdBQThCWixDQUFDLENBQUMrQixnQkFBaEQ7QUFDRDs7QUFDRCxTQUFPM0wsR0FBRyxHQUFHLHNCQUFOLEdBQStCNEosQ0FBQyxDQUFDZSxhQUFqQyxHQUFpRCxZQUFqRCxHQUFnRWYsQ0FBQyxDQUFDdUIsVUFBbEUsR0FBK0UsR0FBL0UsR0FBcUZ2QixDQUFDLENBQUNrQixPQUF2RixHQUFpRyx3QkFBakcsR0FBNEhsQixDQUFDLENBQUMwQixVQUE5SCxHQUEySSxhQUEzSSxHQUEySjFCLENBQUMsQ0FBQ3FCLGNBQTdKLEdBQThLTyxhQUFyTDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgLy9jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAvL2NvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcblxuICB2YXIgdGhpc1ZhcnMgPSB7fVxuICB2YXIgdGhpc09wdGlvbnMgPSB7fVxuICB2YXIgcGx1Z2luID0ge31cblxuICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzID0gW11cbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMucHVzaCgnd2VicGFjayBjb25maWc6IGZyYW1ld29yayBwYXJhbWV0ZXIgb24gZXh0LXdlYnBhY2stcGx1Z2luIGlzIG5vdCBkZWZpbmVkIC0gdmFsdWVzOiByZWFjdCwgYW5ndWxhciwgZXh0anMnKVxuICAgIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgICByZXR1cm4gcGx1Z2luXG4gIH1cblxuICBjb25zdCB2YWxpZGF0ZU9wdGlvbnMgPSByZXF1aXJlKCdzY2hlbWEtdXRpbHMnKVxuICB2YWxpZGF0ZU9wdGlvbnMocmVxdWlyZShgLi8ke29wdGlvbnMuZnJhbWV3b3JrfVV0aWxgKS5nZXRWYWxpZGF0ZU9wdGlvbnMoKSwgb3B0aW9ucywgJycpXG4gIHRoaXNWYXJzID0gcmVxdWlyZShgLi8ke29wdGlvbnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0VmFycygpXG4gIHRoaXNWYXJzLmZyYW1ld29yayA9IG9wdGlvbnMuZnJhbWV3b3JrXG4gIHN3aXRjaCh0aGlzVmFycy5mcmFtZXdvcmspIHtcbiAgICBjYXNlICdleHRqcyc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JlYWN0JzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXJlYWN0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW5ndWxhcic6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1hbmd1bGFyLXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICB9XG5cbiAgdGhpc1ZhcnMuYXBwID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldEFwcCgpXG4gIGxvZ3Yob3B0aW9ucywgYHBsdWdpbk5hbWUgLSAke3RoaXNWYXJzLnBsdWdpbk5hbWV9YClcbiAgbG9ndihvcHRpb25zLCBgdGhpc1ZhcnMuYXBwIC0gJHt0aGlzVmFycy5hcHB9YClcblxuICBjb25zdCByYyA9IChmcy5leGlzdHNTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCkgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgLCAndXRmLTgnKSkgfHwge30pXG4gIHRoaXNPcHRpb25zID0geyAuLi5yZXF1aXJlKGAuLyR7dGhpc1ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0T3B0aW9ucygpLCAuLi5vcHRpb25zLCAuLi5yYyB9XG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNPcHRpb25zIC0gJHtKU09OLnN0cmluZ2lmeSh0aGlzT3B0aW9ucyl9YClcblxuICBpZiAodGhpc09wdGlvbnMuZW52aXJvbm1lbnQgPT0gJ3Byb2R1Y3Rpb24nKSBcbiAgICB7dGhpc1ZhcnMucHJvZHVjdGlvbiA9IHRydWV9XG4gIGVsc2UgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSBmYWxzZX1cblxuICBsb2cocmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldFZlcnNpb25zKHRoaXNWYXJzLmFwcCwgdGhpc1ZhcnMucGx1Z2luTmFtZSwgdGhpc1ZhcnMuZnJhbWV3b3JrKSlcbiAgbG9nKHRoaXNWYXJzLmFwcCArICdCdWlsZGluZyBmb3IgJyArIHRoaXNPcHRpb25zLmVudmlyb25tZW50KVxuICBsb2codGhpc1ZhcnMuYXBwICsgJ1RyZWVzaGFrZSBpcyAnICsgdGhpc09wdGlvbnMudHJlZXNoYWtlKVxuXG4gIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgcGx1Z2luLm9wdGlvbnMgPSB0aGlzT3B0aW9uc1xuICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdGVU5DVElPTiBjb25zdHJ1Y3RvciAoZW5kKScpXG4gIHJldHVybiBwbHVnaW5cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIF9jb21waWxhdGlvbicpXG5cbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbiAgICBjb25zdCBleHRBbmd1bGFyUGFja2FnZSA9ICdAc2VuY2hhL2V4dC1hbmd1bGFyJ1xuICAgIGNvbnN0IGV4dEFuZ3VsYXJGb2xkZXIgPSAnZXh0LWFuZ3VsYXItcHJvZCdcbiAgICBjb25zdCBleHRBbmd1bGFyTW9kdWxlID0gJ2V4dC1hbmd1bGFyLm1vZHVsZSdcbiAgICBjb25zdCBwYXRoVG9FeHRBbmd1bGFyTW9kZXJuID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGBzcmMvYXBwLyR7ZXh0QW5ndWxhckZvbGRlcn1gKVxuICAgIHZhciBleHRDb21wb25lbnRzID0gW11cblxuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicgJiYgb3B0aW9ucy50cmVlc2hha2UpIHtcbiAgICAgICAgY29uc3QgcGFja2FnZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy8nICsgZXh0QW5ndWxhclBhY2thZ2UpXG4gICAgICAgIHZhciBmaWxlcyA9IGZzeC5yZWFkZGlyU3luYyhgJHtwYWNrYWdlUGF0aH0vbGliYClcbiAgICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgICBpZiAoZmlsZU5hbWUgJiYgZmlsZU5hbWUuc3Vic3RyKDAsIDQpID09ICdleHQtJykge1xuICAgICAgICAgICAgdmFyIGVuZCA9IGZpbGVOYW1lLnN1YnN0cig0KS5pbmRleE9mKCcuY29tcG9uZW50JylcbiAgICAgICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgICAgICBleHRDb21wb25lbnRzLnB1c2goZmlsZU5hbWUuc3Vic3RyaW5nKDQsIGVuZCArIDQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGFwcE1vZHVsZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hcHAvYXBwLm1vZHVsZS50cycpXG4gICAgICAgICAgdmFyIGpzID0gZnN4LnJlYWRGaWxlU3luYyhhcHBNb2R1bGVQYXRoKS50b1N0cmluZygpXG4gICAgICAgICAgdmFyIG5ld0pzID0ganMucmVwbGFjZShcbiAgICAgICAgICAgIGBpbXBvcnQgeyBFeHRBbmd1bGFyTW9kdWxlIH0gZnJvbSAnQHNlbmNoYS9leHQtYW5ndWxhcidgLFxuICAgICAgICAgICAgYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuL2V4dC1hbmd1bGFyLXByb2QvZXh0LWFuZ3VsYXIubW9kdWxlJ2BcbiAgICAgICAgICApO1xuICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGFwcE1vZHVsZVBhdGgsIG5ld0pzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG5cbiAgICAgICAgICBjb25zdCBtYWluUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL21haW4udHMnKVxuICAgICAgICAgIHZhciBqc01haW4gPSBmc3gucmVhZEZpbGVTeW5jKG1haW5QYXRoKS50b1N0cmluZygpXG4gICAgICAgICAgdmFyIG5ld0pzTWFpbiA9IGpzTWFpbi5yZXBsYWNlKFxuICAgICAgICAgICAgYGJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO2AsXG4gICAgICAgICAgICBgZW5hYmxlUHJvZE1vZGUoKTtib290c3RyYXBNb2R1bGUoIEFwcE1vZHVsZSApO2BcbiAgICAgICAgICApO1xuICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKG1haW5QYXRoLCBuZXdKc01haW4sICd1dGYtOCcsICgpPT57cmV0dXJufSlcblxuICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKSkge1xuICAgICAgICAgICAgbWtkaXJwLnN5bmMocGF0aFRvRXh0QW5ndWxhck1vZGVybilcbiAgICAgICAgICAgIGNvbnN0IHQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmV4dEFuZ3VsYXJNb2R1bGUoJycsICcnLCAnJylcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3BhdGhUb0V4dEFuZ3VsYXJNb2Rlcm59LyR7ZXh0QW5ndWxhck1vZHVsZX0udHNgLCB0LCAndXRmLTgnLCAoKSA9PiB7cmV0dXJufSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2J1aWxkTW9kdWxlIGhvb2sgaW4gX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21waWxhdGlvbi5ob29rcy5zdWNjZWVkTW9kdWxlLnRhcChgZXh0LXN1Y2NlZWQtbW9kdWxlYCwgbW9kdWxlID0+IHtcbiAgICAgICAgLy9yZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdIT09LIHN1Y2NlZWRNb2R1bGUnKVxuICAgICAgICBpZiAobW9kdWxlLnJlc291cmNlICYmICFtb2R1bGUucmVzb3VyY2UubWF0Y2goL25vZGVfbW9kdWxlcy8pKSB7XG4gICAgICAgICAgdmFycy5kZXBzID0gWy4uLih2YXJzLmRlcHMgfHwgW10pLCAuLi5yZXF1aXJlKGAuLyR7dmFycy5mcmFtZXdvcmt9VXRpbGApLmV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpXVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChleHRDb21wb25lbnRzLmxlbmd0aCAmJiBtb2R1bGUucmVzb3VyY2UgJiYgKG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuKGp8dClzeD8kLykgfHxcbiAgICAgICAgLy8gb3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuaHRtbCQvKSkgJiZcbiAgICAgICAgLy8gIW1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvbm9kZV9tb2R1bGVzLykgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaChgL2V4dC17JG9wdGlvbnMuZnJhbWV3b3JrfS9idWlsZC9gKSkge1xuICAgICAgICAvLyAgIHZhcnMuZGVwcyA9IFsuLi4odmFycy5kZXBzIHx8IFtdKSwgLi4ucmVxdWlyZShgLi8ke3ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5leHRyYWN0RnJvbVNvdXJjZShtb2R1bGUsIG9wdGlvbnMsIGNvbXBpbGF0aW9uLCBleHRDb21wb25lbnRzKV1cbiAgICAgICAgLy8gfVxuICAgICAgfSlcblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBvcHRpb25zLnRyZWVzaGFrZSkge1xuXG5cblxuICAgICAgICBjb21waWxhdGlvbi5ob29rcy5maW5pc2hNb2R1bGVzLnRhcChgZXh0LWZpbmlzaC1tb2R1bGVzYCwgbW9kdWxlcyA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLCAnSE9PSyBmaW5pc2hNb2R1bGVzJylcbiAgICAgICAgICBjb25zdCBzdHJpbmcgPSAnRXh0LmNyZWF0ZSh7XFxcInh0eXBlXFxcIjpcXFwiJ1xuICAgICAgICAgIHZhcnMuZGVwcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY29kZS5pbmRleE9mKHN0cmluZylcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnN1YnN0cmluZyhpbmRleCArIHN0cmluZy5sZW5ndGgpXG4gICAgICAgICAgICAgIHZhciBlbmQgPSBjb2RlLmluZGV4T2YoJ1xcXCInKVxuICAgICAgICAgICAgICB2YXJzLnVzZWRFeHRDb21wb25lbnRzLnB1c2goY29kZS5zdWJzdHIoMCwgZW5kKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHZhcnMudXNlZEV4dENvbXBvbmVudHMgPSBbLi4ubmV3IFNldCh2YXJzLnVzZWRFeHRDb21wb25lbnRzKV1cbiAgICAgICAgICBjb25zdCByZWFkRnJvbSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzLycgKyBleHRBbmd1bGFyUGFja2FnZSArICcvc3JjL2xpYicpXG4gICAgICAgICAgY29uc3Qgd3JpdGVUb1BhdGggPSBwYXRoVG9FeHRBbmd1bGFyTW9kZXJuXG5cbiAgICAgICAgICBjb25zdCBiYXNlQ29udGVudCA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cmVhZEZyb219L2Jhc2UudHNgKS50b1N0cmluZygpXG4gICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9L2Jhc2UudHNgLCBiYXNlQ29udGVudCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIFxuICAgICAgICAgIHZhciB3cml0ZVRvUGF0aFdyaXR0ZW4gPSBmYWxzZVxuICAgICAgICAgIHZhciBtb2R1bGVWYXJzID0ge1xuICAgICAgICAgICAgaW1wb3J0czogJycsXG4gICAgICAgICAgICBleHBvcnRzOiAnJyxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFycy51c2VkRXh0Q29tcG9uZW50cy5mb3JFYWNoKHh0eXBlID0+IHtcbiAgICAgICAgICAgIHZhciBjYXBjbGFzc25hbWUgPSB4dHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHh0eXBlLnJlcGxhY2UoLy0vZywgXCJfXCIpLnNsaWNlKDEpXG4gICAgICAgICAgICBtb2R1bGVWYXJzLmltcG9ydHMgPSBtb2R1bGVWYXJzLmltcG9ydHMgKyBgaW1wb3J0IHsgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50IH0gZnJvbSAnLi9leHQtJHt4dHlwZX0uY29tcG9uZW50JztcXG5gXG4gICAgICAgICAgICBtb2R1bGVWYXJzLmV4cG9ydHMgPSBtb2R1bGVWYXJzLmV4cG9ydHMgKyBgICAgIEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCxcXG5gXG4gICAgICAgICAgICBtb2R1bGVWYXJzLmRlY2xhcmF0aW9ucyA9IG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zICsgYCAgICBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQsXFxuYFxuICAgICAgICAgICAgdmFyIGNsYXNzRmlsZSA9IGAvZXh0LSR7eHR5cGV9LmNvbXBvbmVudC50c2BcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gZnN4LnJlYWRGaWxlU3luYyhgJHtyZWFkRnJvbX0ke2NsYXNzRmlsZX1gKS50b1N0cmluZygpXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0ke2NsYXNzRmlsZX1gLCBjb250ZW50cywgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgICAgd3JpdGVUb1BhdGhXcml0dGVuID0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKHdyaXRlVG9QYXRoV3JpdHRlbikge1xuICAgICAgICAgICAgdmFyIHQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmV4dEFuZ3VsYXJNb2R1bGUoXG4gICAgICAgICAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cywgbW9kdWxlVmFycy5leHBvcnRzLCBtb2R1bGVWYXJzLmRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9LyR7ZXh0QW5ndWxhck1vZHVsZX0udHNgLCB0LCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgIT0gJ2V4dGpzJyAmJiAhb3B0aW9ucy50cmVlc2hha2UpIHtcblxuICAgICAgY29tcGlsYXRpb24uaG9va3MuaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbi50YXAoYGV4dC1odG1sLWdlbmVyYXRpb25gLChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgICAgICB2YXIgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgIGlmIChjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycpIHtcbiAgICAgICAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dFBhdGggPSBvdXRwdXRQYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICB2YXIganNQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5qcycpXG4gICAgICAgIHZhciBjc3NQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5jc3MnKVxuICAgICAgICBkYXRhLmFzc2V0cy5qcy51bnNoaWZ0KGpzUGF0aClcbiAgICAgICAgZGF0YS5hc3NldHMuY3NzLnVuc2hpZnQoY3NzUGF0aClcbiAgICAgICAgbG9nKHZhcnMuYXBwICsgYEFkZGluZyAke2pzUGF0aH0gYW5kICR7Y3NzUGF0aH0gdG8gaW5kZXguaHRtbGApXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2tpcHBlZCBIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19jb21waWxhdGlvbjogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2FmdGVyQ29tcGlsZShjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLCAnRlVOQ1RJT04gX2FmdGVyQ29tcGlsZScpXG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBlbWl0JylcbiAgICB2YXIgYXBwID0gdmFycy5hcHBcbiAgICB2YXIgZnJhbWV3b3JrID0gdmFycy5mcmFtZXdvcmtcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgY29uc3QgX2J1aWxkRXh0QnVuZGxlID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2J1aWxkRXh0QnVuZGxlXG4gICAgbGV0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3V0cHV0UGF0aCx2YXJzLmV4dFBhdGgpXG4gICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJyAmJiBjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICB9XG4gICAgbG9ndihvcHRpb25zLCdvdXRwdXRQYXRoOiAnICsgb3V0cHV0UGF0aClcbiAgICBsb2d2KG9wdGlvbnMsJ2ZyYW1ld29yazogJyArIGZyYW1ld29yaylcbiAgICBpZiAob3B0aW9ucy5lbWl0ID09IHRydWUpIHtcbiAgICAgIGlmIChmcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgICBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiAhb3B0aW9ucy50cmVlc2hha2UpIHtcbiAgICAgICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVxdWlyZShgLi8ke2ZyYW1ld29ya31VdGlsYCkuX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21tYW5kID0gJydcbiAgICAgIGlmIChvcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICBjb21tYW5kID0gJ3dhdGNoJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbW1hbmQgPSAnYnVpbGQnXG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJzLnJlYnVpbGQgPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGFybXMgPSBbXVxuICAgICAgICBpZiAob3B0aW9ucy5wcm9maWxlID09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByb2ZpbGUgPT0gJycgfHwgb3B0aW9ucy5wcm9maWxlID09IG51bGwpIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFycy53YXRjaFN0YXJ0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICBhd2FpdCBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpXG4gICAgICAgICAgdmFycy53YXRjaFN0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2coYCR7dmFycy5hcHB9RlVOQ1RJT04gZW1pdCBub3QgcnVuYClcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdlbWl0OiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dCwgY29tcGlsYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9wcmVwYXJlRm9yQnVpbGQnKVxuICAgIGNvbnN0IHJpbXJhZiA9IHJlcXVpcmUoJ3JpbXJhZicpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgdmFyIHBhY2thZ2VzID0gb3B0aW9ucy5wYWNrYWdlc1xuICAgIHZhciB0b29sa2l0ID0gb3B0aW9ucy50b29sa2l0XG4gICAgdmFyIHRoZW1lID0gb3B0aW9ucy50aGVtZVxuXG4gICAgdGhlbWUgPSB0aGVtZSB8fCAodG9vbGtpdCA9PT0gJ2NsYXNzaWMnID8gJ3RoZW1lLXRyaXRvbicgOiAndGhlbWUtbWF0ZXJpYWwnKVxuICAgIGxvZ3Yob3B0aW9ucywnZmlyc3RUaW1lOiAnICsgdmFycy5maXJzdFRpbWUpXG4gICAgaWYgKHZhcnMuZmlyc3RUaW1lKSB7XG4gICAgICByaW1yYWYuc3luYyhvdXRwdXQpXG4gICAgICBta2RpcnAuc3luYyhvdXRwdXQpXG4gICAgICBjb25zdCBidWlsZFhNTCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuYnVpbGRYTUxcbiAgICAgIGNvbnN0IGNyZWF0ZUFwcEpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUFwcEpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZVdvcmtzcGFjZUpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZVdvcmtzcGFjZUpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUpTRE9NRW52aXJvbm1lbnRcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYnVpbGQueG1sJyksIGJ1aWxkWE1MKHZhcnMucHJvZHVjdGlvbiwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYXBwLmpzb24nKSwgY3JlYXRlQXBwSnNvbih0aGVtZSwgcGFja2FnZXMsIHRvb2xraXQsIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2pzZG9tLWVudmlyb25tZW50LmpzJyksIGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnd29ya3NwYWNlLmpzb24nKSwgY3JlYXRlV29ya3NwYWNlSnNvbihvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG5cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAnYW5ndWxhcicpIHtcblxuICAgICAgICAvL2JlY2F1c2Ugb2YgYSBwcm9ibGVtIHdpdGggY29sb3JwaWNrZXJcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3V4LycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvdXgvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ3V4JylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgKHV4KSAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvcGFja2FnZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ3BhY2thZ2VzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvb3ZlcnJpZGVzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdvdmVycmlkZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ3JlYWN0JykgIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L292ZXJyaWRlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICcuLi9yZXNvdXJjZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3BhY2thZ2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhY2thZ2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcy8nKVxuICAgICAgICB2YXIgdG9QYWNrYWdlcyA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGFja2FnZXMsIHRvUGFja2FnZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdvdmVycmlkZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnb3ZlcnJpZGVzLycpXG4gICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmICghdmFycy5kZXBzLmluY2x1ZGVzKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKSkge1xuICAgICAgICB2YXJzLmRlcHMucHVzaCgnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJylcbiAgICAgIH1cbiAgICAgIGpzID0gdmFycy5kZXBzLmpvaW4oJztcXG4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBqcyA9ICdFeHQucmVxdWlyZShcIkV4dC4qXCIpJ1xuICAgIH1cbiAgICBpZiAodmFycy5tYW5pZmVzdCA9PT0gbnVsbCB8fCBqcyAhPT0gdmFycy5tYW5pZmVzdCkge1xuICAgICAgdmFycy5tYW5pZmVzdCA9IGpzXG4gICAgICBjb25zdCBtYW5pZmVzdCA9IHBhdGguam9pbihvdXRwdXQsICdtYW5pZmVzdC5qcycpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0LCBqcywgJ3V0ZjgnKVxuICAgICAgdmFycy5yZWJ1aWxkID0gdHJ1ZVxuICAgICAgdmFyIGJ1bmRsZURpciA9IG91dHB1dC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKVxuICAgICAgaWYgKGJ1bmRsZURpci50cmltKCkgPT0gJycpIHtidW5kbGVEaXIgPSAnLi8nfVxuICAgICAgbG9nKGFwcCArICdCdWlsZGluZyBFeHQgYnVuZGxlIGF0OiAnICsgYnVuZGxlRGlyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhcnMucmVidWlsZCA9IGZhbHNlXG4gICAgICBsb2coYXBwICsgJ0V4dCByZWJ1aWxkIE5PVCBuZWVkZWQnKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19wcmVwYXJlRm9yQnVpbGQ6ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfYnVpbGRFeHRCdW5kbGUnKVxuXG4gICAgbGV0IHNlbmNoYTsgdHJ5IHsgc2VuY2hhID0gcmVxdWlyZSgnQHNlbmNoYS9jbWQnKSB9IGNhdGNoIChlKSB7IHNlbmNoYSA9ICdzZW5jaGEnIH1cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhzZW5jaGEpKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgZXhpc3RzJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgRE9FUyBOT1QgZXhpc3QnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvbkJ1aWxkRG9uZSA9ICgpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdvbkJ1aWxkRG9uZScpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB2YXIgb3B0cyA9IHsgY3dkOiBvdXRwdXRQYXRoLCBzaWxlbnQ6IHRydWUsIHN0ZGlvOiAncGlwZScsIGVuY29kaW5nOiAndXRmLTgnfVxuICAgICAgZXhlY3V0ZUFzeW5jKGFwcCwgc2VuY2hhLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbigpIHsgb25CdWlsZERvbmUoKSB9LCBcbiAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7IHJlamVjdChyZWFzb24pIH1cbiAgICAgIClcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZScpXG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19idWlsZEV4dEJ1bmRsZTogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9kb25lKHZhcnMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2RvbmUnKVxuXG4gICAgaWYgKHZhcnMucHJvZHVjdGlvbiAmJiAhb3B0aW9ucy50cmVlc2hha2UgJiYgb3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fZG9uZSh2YXJzLCBvcHRpb25zKVxuXG4gICAgICAvLyBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgICAvLyBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgICAvLyB2YXIgcmltcmFmID0gcmVxdWlyZShcInJpbXJhZlwiKTtcbiAgICAgIC8vIHJpbXJhZi5zeW5jKHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC9leHQtYW5ndWxhci1wcm9kYCkpO1xuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgY29uc3QgYXBwTW9kdWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2FwcC9hcHAubW9kdWxlLnRzJylcbiAgICAgIC8vICAgdmFyIGpzID0gZnN4LnJlYWRGaWxlU3luYyhhcHBNb2R1bGVQYXRoKS50b1N0cmluZygpXG4gICAgICAvLyAgIHZhciBuZXdKcyA9IGpzLnJlcGxhY2UoXG4gICAgICAvLyAgICAgYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuL2V4dC1hbmd1bGFyLXByb2QvZXh0LWFuZ3VsYXIubW9kdWxlJ2AsXG4gICAgICAvLyAgICAgYGltcG9ydCB7IEV4dEFuZ3VsYXJNb2R1bGUgfSBmcm9tICdAc2VuY2hhL2V4dC1hbmd1bGFyJ2BcbiAgICAgIC8vICAgKTtcbiAgICAgIC8vICAgZnN4LndyaXRlRmlsZVN5bmMoYXBwTW9kdWxlUGF0aCwgbmV3SnMsICd1dGYtOCcsICgpPT57cmV0dXJufSlcblxuICAgICAgLy8gICBjb25zdCBtYWluUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL21haW4udHMnKVxuICAgICAgLy8gICB2YXIganNNYWluID0gZnN4LnJlYWRGaWxlU3luYyhtYWluUGF0aCkudG9TdHJpbmcoKVxuICAgICAgLy8gICB2YXIgbmV3SnNNYWluID0ganNNYWluLnJlcGxhY2UoXG4gICAgICAvLyAgICAgYGVuYWJsZVByb2RNb2RlKCk7Ym9vdHN0cmFwTW9kdWxlKCBBcHBNb2R1bGUgKTtgLFxuICAgICAgLy8gICAgIGBib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtgXG4gICAgICAvLyAgICk7XG4gICAgICAvLyAgIGZzeC53cml0ZUZpbGVTeW5jKG1haW5QYXRoLCBuZXdKc01haW4sICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgIC8vIH1cbiAgICAgIC8vIGNhdGNoIChlKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAvLyAgIC8vY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ3JlcGxhY2UgRXh0QW5ndWxhck1vZHVsZSAtIGV4dC1kb25lOiAnICsgZSlcbiAgICAgIC8vICAgcmV0dXJuIFtdXG4gICAgICAvLyB9XG4gICAgfSBcblxuICAgIHRyeSB7XG4gICAgICBpZihvcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSAmJiBvcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICBpZiAodmFycy5icm93c2VyQ291bnQgPT0gMCkge1xuICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgb3B0aW9ucy5wb3J0XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHZhcnMuYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAgIHZhcnMuYnJvd3NlckNvdW50KytcbiAgICAgICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgICAgIG9wbih1cmwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAvL2NvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdzaG93IGJyb3dzZXIgd2luZG93IC0gZXh0LWRvbmU6ICcgKyBlKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUFzeW5jIChhcHAsIGNvbW1hbmQsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykge1xuICB0cnkge1xuICAgIC8vY29uc3QgREVGQVVMVF9TVUJTVFJTID0gWydbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gU2VydmVyXCIsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIGNvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFtcIltJTkZdIHhTZXJ2ZXJcIiwgJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gQXBwZW5kJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0lORl0gUHJvY2Vzc2luZyBCdWlsZCcsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgdmFyIHN1YnN0cmluZ3MgPSBERUZBVUxUX1NVQlNUUlMgXG4gICAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICAgIGNvbnN0IGNyb3NzU3Bhd24gPSByZXF1aXJlKCdjcm9zcy1zcGF3bicpXG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgbG9ndihvcHRpb25zLCAnRlVOQ1RJT04gZXhlY3V0ZUFzeW5jJylcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsb2d2KG9wdGlvbnMsYGNvbW1hbmQgLSAke2NvbW1hbmR9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYHBhcm1zIC0gJHtwYXJtc31gKVxuICAgICAgbG9ndihvcHRpb25zLCBgb3B0cyAtICR7SlNPTi5zdHJpbmdpZnkob3B0cyl9YClcbiAgICAgIGxldCBjaGlsZCA9IGNyb3NzU3Bhd24oY29tbWFuZCwgcGFybXMsIG9wdHMpXG4gICAgICBjaGlsZC5vbignY2xvc2UnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGNsb3NlOiBgICsgY29kZSkgXG4gICAgICAgIGlmKGNvZGUgPT09IDApIHsgcmVzb2x2ZSgwKSB9XG4gICAgICAgIGVsc2UgeyBjb21waWxhdGlvbi5lcnJvcnMucHVzaCggbmV3IEVycm9yKGNvZGUpICk7IHJlc29sdmUoMCkgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLm9uKCdlcnJvcicsIChlcnJvcikgPT4geyBcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gZXJyb3JgKSBcbiAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICAgIHJlc29sdmUoMClcbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgbG9ndihvcHRpb25zLCBgJHtzdHJ9YClcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZygpLm1hdGNoKC93YWl0aW5nIGZvciBjaGFuZ2VzXFwuXFwuXFwuLykpIHtcbiAgICAgICAgICByZXNvbHZlKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHN1YnN0cmluZ3Muc29tZShmdW5jdGlvbih2KSB7IHJldHVybiBkYXRhLmluZGV4T2YodikgPj0gMDsgfSkpIHsgXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltJTkZdXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltMT0ddXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKFwiW0VSUl1cIikpIHtcbiAgICAgICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goYXBwICsgc3RyLnJlcGxhY2UoL15cXFtFUlJcXF0gL2dpLCAnJykpO1xuICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltFUlJdXCIsIGAke2NoYWxrLnJlZChcIltFUlJdXCIpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2coYCR7YXBwfSR7c3RyfWApIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZGVyci5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYGVycm9yIG9uIGNsb3NlOiBgICsgZGF0YSkgXG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICB2YXIgc3RySmF2YU9wdHMgPSBcIlBpY2tlZCB1cCBfSkFWQV9PUFRJT05TXCI7XG4gICAgICAgIHZhciBpbmNsdWRlcyA9IHN0ci5pbmNsdWRlcyhzdHJKYXZhT3B0cylcbiAgICAgICAgaWYgKCFpbmNsdWRlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2FwcH0gJHtjaGFsay5yZWQoXCJbRVJSXVwiKX0gJHtzdHJ9YClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZXhlY3V0ZUFzeW5jOiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH0gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cocykge1xuICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICB0cnkge1xuICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gIH1cbiAgY2F0Y2goZSkge31cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUocylcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2d2KG9wdGlvbnMsIHMpIHtcbiAgaWYgKG9wdGlvbnMudmVyYm9zZSA9PSAneWVzJykge1xuICAgIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYC12ZXJib3NlOiAke3N9YClcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFwcCgpIHtcbiAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICB2YXIgcHJlZml4ID0gYGBcbiAgY29uc3QgcGxhdGZvcm0gPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKClcbiAgaWYgKHBsYXRmb3JtID09ICdkYXJ3aW4nKSB7IHByZWZpeCA9IGDihLkg772iZXh0772jOmAgfVxuICBlbHNlIHsgcHJlZml4ID0gYGkgW2V4dF06YCB9XG4gIHJldHVybiBgJHtjaGFsay5ncmVlbihwcmVmaXgpfSBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VmVyc2lvbnMoYXBwLCBwbHVnaW5OYW1lLCBmcmFtZXdvcmtOYW1lKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHYgPSB7fVxuICB2YXIgcGx1Z2luUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYScsIHBsdWdpbk5hbWUpXG4gIHZhciBwbHVnaW5Qa2cgPSAoZnMuZXhpc3RzU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYucGx1Z2luVmVyc2lvbiA9IHBsdWdpblBrZy52ZXJzaW9uXG4gIHYuX3Jlc29sdmVkID0gcGx1Z2luUGtnLl9yZXNvbHZlZFxuICBpZiAodi5fcmVzb2x2ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKC0xID09IHYuX3Jlc29sdmVkLmluZGV4T2YoJ2NvbW11bml0eScpKSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbXVuaXR5YFxuICAgIH1cbiAgfVxuXG4gIHZhciB3ZWJwYWNrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvd2VicGFjaycpXG4gIHZhciB3ZWJwYWNrUGtnID0gKGZzLmV4aXN0c1N5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYud2VicGFja1ZlcnNpb24gPSB3ZWJwYWNrUGtnLnZlcnNpb25cblxuICB2YXIgZXh0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQnKVxuICB2YXIgZXh0UGtnID0gKGZzLmV4aXN0c1N5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmV4dFZlcnNpb24gPSBleHRQa2cuc2VuY2hhLnZlcnNpb25cblxuICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG5cbiAgaWYgKHYuY21kVmVyc2lvbiA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS8ke3BsdWdpbk5hbWV9L25vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gICAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG4gIH1cblxuICB2YXIgZnJhbWV3b3JrSW5mbyA9ICcnXG4gICBpZiAoZnJhbWV3b3JrTmFtZSAhPSB1bmRlZmluZWQgJiYgZnJhbWV3b3JrTmFtZSAhPSAnZXh0anMnKSB7XG4gICAgdmFyIGZyYW1ld29ya1BhdGggPSAnJ1xuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdyZWFjdCcpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3JlYWN0JylcbiAgICB9XG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlJylcbiAgICB9XG4gICAgdmFyIGZyYW1ld29ya1BrZyA9IChmcy5leGlzdHNTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmZyYW1ld29ya1ZlcnNpb24gPSBmcmFtZXdvcmtQa2cudmVyc2lvblxuICAgIGZyYW1ld29ya0luZm8gPSAnLCAnICsgZnJhbWV3b3JrTmFtZSArICcgdicgKyB2LmZyYW1ld29ya1ZlcnNpb25cbiAgfVxuICByZXR1cm4gYXBwICsgJ2V4dC13ZWJwYWNrLXBsdWdpbiB2JyArIHYucGx1Z2luVmVyc2lvbiArICcsIEV4dCBKUyB2JyArIHYuZXh0VmVyc2lvbiArICcgJyArIHYuZWRpdGlvbiArICcgRWRpdGlvbiwgU2VuY2hhIENtZCB2JyArIHYuY21kVmVyc2lvbiArICcsIHdlYnBhY2sgdicgKyB2LndlYnBhY2tWZXJzaW9uICsgZnJhbWV3b3JrSW5mb1xuIH0iXX0=