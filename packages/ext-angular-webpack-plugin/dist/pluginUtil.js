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

  validateOptions(require(`./${options.framework}Util`).getValidateOptions(), options, ''); //fix sencha cmd no jetty server problem
  // var watchFile = path.resolve(process.cwd(),`node_modules/@sencha/cmd/dist/ant/build/app/watch-impl.xml`)
  // logv(options, `modify ${watchFile}`)
  // var data = fs.readFileSync(watchFile, 'utf-8');
  // var ip = 'webServerRefId="app.web.server"';
  // var newValue = data.replace(new RegExp(ip), '');
  // fs.writeFileSync(watchFile, newValue, 'utf-8');

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

    var extComponents = [];
    var usedExtComponents = [];
    const extAngularModernFolder = 'ext-angular-modern-prod';
    const extAngularModernModule = 'ext-angular-modern.module';

    if (vars.production) {
      logv(options, `ext-compilation: production is ` + vars.production);

      if (options.framework == 'angular') {
        const packagePath = path.resolve(process.cwd(), 'node_modules/@sencha/ext-angular-modern');
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
          var rewrite = false;
          const appModulePath = path.resolve(process.cwd(), 'src/app/app.module.ts');
          var js = fsx.readFileSync(appModulePath).toString();
          var i = js.indexOf('@sencha/ext-angular-modern');
          i = js.substring(0, i).lastIndexOf('import');

          if (js.substr(i - 3, 3) !== '// ') {
            js = js.substring(0, i) + '\n // ' + js.substring(i);
            rewrite = true;
          }

          const pathToExtAngularModern = path.resolve(process.cwd(), `src/app/${extAngularModernFolder}`);

          if (!fs.existsSync(pathToExtAngularModern)) {
            mkdirp.sync(pathToExtAngularModern);

            const t = require('./artifacts').extAngularModerModule('', '', '');

            fsx.writeFileSync(`${pathToExtAngularModern}/${extAngularModernModule}.ts`, t, 'utf-8', () => {
              return;
            });
            rewrite = true;
          }

          var j = js.indexOf(`./${extAngularModernFolder}/${extAngularModernModule}`);

          if (j < 0) {
            js = js.substring(0, i) + `import {ExtAngularModernModule} from './${extAngularModernFolder}/${extAngularModernModule}'\n` + js.substr(i);
            rewrite = true;
          } else if (js.substr(j - 43, 3) == '// ') {
            js = js.substring(0, j - 43) + '\n' + js.substring(j - 40);
            rewrite = true;
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

      compilation.hooks.succeedModule.tap(`ext-succeed-module`, module => {
        if (extComponents.length && module.resource && (module.resource.match(/\.(j|t)sx?$/) || options.framework == 'angular' && module.resource.match(/\.html$/)) && !module.resource.match(/node_modules/) && !module.resource.match(`/ext-{$options.framework}/dist/`)) {
          vars.deps = [...(vars.deps || []), ...require(`./${vars.framework}Util`).extractFromSource(module, options, compilation, extComponents)];
        }
      });

      if (options.framework == 'angular') {
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
          const readFrom = path.resolve(process.cwd(), 'node_modules/@sencha/ext-angular-modern/src/lib');
          const writeToPath = path.resolve(process.cwd(), `src/app/${extAngularModernFolder}`);
          const extAngularModuleBaseFile = path.resolve(process.cwd(), `${writeToPath}/base.ts`);
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
            var t = require('./artifacts').extAngularModerModule(moduleVars.imports, moduleVars.exports, moduleVars.declarations);

            fsx.writeFileSync(`${writeToPath}/${extAngularModernModule}.ts`, t, 'utf-8', () => {
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
          //const jsChunk = compilation.addChunk(`ext-angular-js`)
          //jsChunk.hasRuntime = jsChunk.isInitial = () => true;
          //jsChunk.files.push(path.join('build', 'ext-angular', 'ext.js'));
          //jsChunk.files.push(path.join('build', 'ext-angular',  'ext.css'));
          //jsChunk.id = -2; // this forces html-webpack-plugin to include ext.js first
          // if(options.browser == true && options.watch == 'yes') {
          //   if (vars.browserCount == 0 && compilation.errors.length == 0) {
          //     var url = 'http://localhost:' + options.port
          //     log(app + `Opening browser at ${url}`)
          //     vars.browserCount++
          //     const opn = require('opn')
          //     opn(url)
          //   }
          // }
          // else {
          //   logv(options,'browser NOT opened')
          // }
          callback();
          _context.next = 27;
          break;

        case 26:
          callback();

        case 27:
          _context.next = 31;
          break;

        case 29:
          log(`${vars.app}FUNCTION emit not run`); // if(options.browser == true) {
          //   if (vars.browserCount == 0 && options.watch == 'yes') {
          //     var url = 'http://localhost:' + options.port
          //     log(app + `Opening browser at ${url}`)
          //     vars.browserCount++
          //     const opn = require('opn')
          //     opn(url)
          //   }
          // }
          // else {
          //   logv(options,'browser NOT opened')
          // }

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
        if (fs.existsSync(path.join(process.cwd(), 'ext-angular/packages/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/');
          var toPath = path.join(output);
          fsx.copySync(fromPath, toPath);
          log(app + '1Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }

        if (fs.existsSync(path.join(process.cwd(), 'ext-angular/overrides/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/');
          var toPath = path.join(output);
          fsx.copySync(fromPath, toPath);
          log(app + '2Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }
      }

      if (vars.framework == 'react') {
        if (fs.existsSync(path.join(process.cwd(), 'ext-react/packages/'))) {
          var fromPath = path.join(process.cwd(), 'ext-react/packages/');
          var toPath = path.join(output, 'packages');
          fsx.copySync(fromPath, toPath);
          log(app + '3Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }

        if (fs.existsSync(path.join(process.cwd(), 'ext-react/overrides/'))) {
          var fromPath = path.join(process.cwd(), 'ext-react/overrides/');
          var toPath = path.join(output, 'overrides');
          fsx.copySync(fromPath, toPath);
          log(app + '4Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
        }
      } //do we ever hit these?


      if (fs.existsSync(path.join(process.cwd(), 'resources/'))) {
        var fromResources = path.join(process.cwd(), 'resources/');
        var toResources = path.join(output, '../resources');
        fsx.copySync(fromResources, toResources);
        log(app + '5Copying ' + fromResources.replace(process.cwd(), '') + ' to: ' + toResources.replace(process.cwd(), ''));
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
        log(app + '7Copying ' + fromPackages.replace(process.cwd(), '') + ' to: ' + toPackages.replace(process.cwd(), ''));
      }

      if (fs.existsSync(path.join(process.cwd(), 'overrides/'))) {
        var fromPath = path.join(process.cwd(), 'overrides/');
        var toPath = path.join(output, 'overrides');
        fsx.copySync(fromPath, toPath);
        log(app + '8Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJta2RpcnAiLCJleHRDb21wb25lbnRzIiwidXNlZEV4dENvbXBvbmVudHMiLCJleHRBbmd1bGFyTW9kZXJuRm9sZGVyIiwiZXh0QW5ndWxhck1vZGVybk1vZHVsZSIsInBhY2thZ2VQYXRoIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZvckVhY2giLCJmaWxlTmFtZSIsInN1YnN0ciIsImVuZCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJyZXdyaXRlIiwiYXBwTW9kdWxlUGF0aCIsImpzIiwidG9TdHJpbmciLCJpIiwibGFzdEluZGV4T2YiLCJwYXRoVG9FeHRBbmd1bGFyTW9kZXJuIiwic3luYyIsInQiLCJleHRBbmd1bGFyTW9kZXJNb2R1bGUiLCJ3cml0ZUZpbGVTeW5jIiwiaiIsImUiLCJjb25zb2xlIiwiZXJyb3JzIiwiaG9va3MiLCJzdWNjZWVkTW9kdWxlIiwidGFwIiwibW9kdWxlIiwibGVuZ3RoIiwicmVzb3VyY2UiLCJtYXRjaCIsImRlcHMiLCJleHRyYWN0RnJvbVNvdXJjZSIsImZpbmlzaE1vZHVsZXMiLCJtb2R1bGVzIiwic3RyaW5nIiwiY29kZSIsImluZGV4IiwiU2V0IiwicmVhZEZyb20iLCJ3cml0ZVRvUGF0aCIsImV4dEFuZ3VsYXJNb2R1bGVCYXNlRmlsZSIsImJhc2VDb250ZW50Iiwid3JpdGVUb1BhdGhXcml0dGVuIiwibW9kdWxlVmFycyIsImltcG9ydHMiLCJleHBvcnRzIiwiZGVjbGFyYXRpb25zIiwieHR5cGUiLCJjYXBjbGFzc25hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2UiLCJzbGljZSIsImNsYXNzRmlsZSIsImNvbnRlbnRzIiwiaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbiIsImRhdGEiLCJvdXRwdXRQYXRoIiwiZGV2U2VydmVyIiwiY29udGVudEJhc2UiLCJ0cmltIiwianNQYXRoIiwiZXh0UGF0aCIsImNzc1BhdGgiLCJhc3NldHMiLCJ1bnNoaWZ0IiwiY3NzIiwiZW1pdCIsImNhbGxiYWNrIiwiX2J1aWxkRXh0QnVuZGxlIiwiX3ByZXBhcmVGb3JCdWlsZCIsImNvbW1hbmQiLCJ3YXRjaCIsInJlYnVpbGQiLCJwYXJtcyIsInByb2ZpbGUiLCJ3YXRjaFN0YXJ0ZWQiLCJvdXRwdXQiLCJyaW1yYWYiLCJwYWNrYWdlcyIsInRvb2xraXQiLCJ0aGVtZSIsImZpcnN0VGltZSIsImJ1aWxkWE1MIiwiY3JlYXRlQXBwSnNvbiIsImNyZWF0ZVdvcmtzcGFjZUpzb24iLCJjcmVhdGVKU0RPTUVudmlyb25tZW50IiwiZnJvbVBhdGgiLCJ0b1BhdGgiLCJmcm9tUmVzb3VyY2VzIiwidG9SZXNvdXJjZXMiLCJmcm9tUGFja2FnZXMiLCJ0b1BhY2thZ2VzIiwiaW5jbHVkZXMiLCJtYW5pZmVzdCIsImJ1bmRsZURpciIsInNlbmNoYSIsIlByb21pc2UiLCJyZWplY3QiLCJvbkJ1aWxkRG9uZSIsIm9wdHMiLCJzaWxlbnQiLCJzdGRpbyIsImVuY29kaW5nIiwiZXhlY3V0ZUFzeW5jIiwidGhlbiIsInJlYXNvbiIsIkRFRkFVTFRfU1VCU1RSUyIsInN1YnN0cmluZ3MiLCJjaGFsayIsImNyb3NzU3Bhd24iLCJjaGlsZCIsIm9uIiwic2lnbmFsIiwiRXJyb3IiLCJlcnJvciIsInN0ZG91dCIsInN0ciIsInNvbWUiLCJ2IiwicmVkIiwic3RkZXJyIiwic3RySmF2YU9wdHMiLCJzIiwiY3Vyc29yVG8iLCJjbGVhckxpbmUiLCJ3cml0ZSIsInZlcmJvc2UiLCJwcmVmaXgiLCJwbGF0Zm9ybSIsImdyZWVuIiwiZnJhbWV3b3JrTmFtZSIsInBsdWdpblBhdGgiLCJwbHVnaW5Qa2ciLCJwbHVnaW5WZXJzaW9uIiwidmVyc2lvbiIsIl9yZXNvbHZlZCIsImVkaXRpb24iLCJ3ZWJwYWNrUGF0aCIsIndlYnBhY2tQa2ciLCJ3ZWJwYWNrVmVyc2lvbiIsImV4dFBrZyIsImV4dFZlcnNpb24iLCJjbWRQYXRoIiwiY21kUGtnIiwiY21kVmVyc2lvbiIsInZlcnNpb25fZnVsbCIsImZyYW1ld29ya0luZm8iLCJmcmFtZXdvcmtQYXRoIiwiZnJhbWV3b3JrUGtnIiwiZnJhbWV3b3JrVmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxTQUFTQSxZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUNwQyxRQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLFFBQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDLElBQUQsQ0FBbEI7O0FBRUEsTUFBSUUsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFFQSxNQUFJTixPQUFPLENBQUNPLFNBQVIsSUFBcUJDLFNBQXpCLEVBQW9DO0FBQ2xDSixJQUFBQSxRQUFRLENBQUNLLFlBQVQsR0FBd0IsRUFBeEI7QUFDQUwsSUFBQUEsUUFBUSxDQUFDSyxZQUFULENBQXNCQyxJQUF0QixDQUEyQiwwR0FBM0I7QUFDQUosSUFBQUEsTUFBTSxDQUFDSyxJQUFQLEdBQWNQLFFBQWQ7QUFDQSxXQUFPRSxNQUFQO0FBQ0Q7O0FBRUQsUUFBTU0sZUFBZSxHQUFHVixPQUFPLENBQUMsY0FBRCxDQUEvQjs7QUFDQVUsRUFBQUEsZUFBZSxDQUFDVixPQUFPLENBQUUsS0FBSUYsT0FBTyxDQUFDTyxTQUFVLE1BQXhCLENBQVAsQ0FBc0NNLGtCQUF0QyxFQUFELEVBQTZEYixPQUE3RCxFQUFzRSxFQUF0RSxDQUFmLENBaEJvQyxDQWtCcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFJLEVBQUFBLFFBQVEsR0FBR0YsT0FBTyxDQUFFLEtBQUlGLE9BQU8sQ0FBQ08sU0FBVSxNQUF4QixDQUFQLENBQXNDTyxjQUF0QyxFQUFYO0FBQ0FWLEVBQUFBLFFBQVEsQ0FBQ0csU0FBVCxHQUFxQlAsT0FBTyxDQUFDTyxTQUE3Qjs7QUFDQSxVQUFPSCxRQUFRLENBQUNHLFNBQWhCO0FBQ0UsU0FBSyxPQUFMO0FBQ0VILE1BQUFBLFFBQVEsQ0FBQ1csVUFBVCxHQUFzQixvQkFBdEI7QUFDQTs7QUFDRixTQUFLLE9BQUw7QUFDRVgsTUFBQUEsUUFBUSxDQUFDVyxVQUFULEdBQXNCLDBCQUF0QjtBQUNBOztBQUNGLFNBQUssU0FBTDtBQUNFWCxNQUFBQSxRQUFRLENBQUNXLFVBQVQsR0FBc0IsNEJBQXRCO0FBQ0E7O0FBQ0Y7QUFDRVgsTUFBQUEsUUFBUSxDQUFDVyxVQUFULEdBQXNCLG9CQUF0QjtBQVhKLEdBNUJvQyxDQTBDcEM7OztBQUNBLFFBQU1DLEdBQUcsR0FBR2QsT0FBTyxDQUFDLFVBQUQsQ0FBbkI7O0FBQ0EsTUFBSWUsYUFBYSxHQUFHaEIsSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUE0Qiw0REFBNUIsQ0FBcEI7QUFDQUMsRUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFXLGlCQUFnQmlCLGFBQWMsRUFBekMsQ0FBSjs7QUFDQSxNQUFJLENBQUNkLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBY0wsYUFBZCxDQUFMLEVBQW1DO0FBQ2pDSSxJQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsTUFBWCxDQUFKO0FBQ0EsUUFBSXVCLGVBQWUsR0FBR3RCLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsMEJBQTBCaEIsUUFBUSxDQUFDVyxVQUFuQyxHQUFnRCxnQkFBekUsQ0FBdEI7QUFDQUMsSUFBQUEsR0FBRyxDQUFDUyxRQUFKLENBQWFGLGVBQWIsRUFBOEJOLGFBQTlCO0FBQ0QsR0FKRCxNQUtLO0FBQ0hJLElBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxvQkFBWCxDQUFKO0FBQ0Q7O0FBRURJLEVBQUFBLFFBQVEsQ0FBQ3NCLEdBQVQsR0FBZXhCLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0J5QixPQUF4QixFQUFmO0FBQ0FOLEVBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxnQkFBZUksUUFBUSxDQUFDVyxVQUFXLEVBQTlDLENBQUo7QUFDQU0sRUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFXLGtCQUFpQkksUUFBUSxDQUFDc0IsR0FBSSxFQUF6QyxDQUFKO0FBRUEsUUFBTUUsRUFBRSxHQUFJekIsRUFBRSxDQUFDbUIsVUFBSCxDQUFlLFFBQU9sQixRQUFRLENBQUNHLFNBQVUsSUFBekMsS0FBaURzQixJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLEVBQUUsQ0FBQzRCLFlBQUgsQ0FBaUIsUUFBTzNCLFFBQVEsQ0FBQ0csU0FBVSxJQUEzQyxFQUFnRCxPQUFoRCxDQUFYLENBQWpELElBQXlILEVBQXJJO0FBQ0FGLEVBQUFBLFdBQVcscUJBQVFILE9BQU8sQ0FBRSxLQUFJRSxRQUFRLENBQUNHLFNBQVUsTUFBekIsQ0FBUCxDQUF1Q3lCLGlCQUF2QyxFQUFSLEVBQXVFaEMsT0FBdkUsRUFBbUY0QixFQUFuRixDQUFYO0FBQ0FQLEVBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxpQkFBZ0I2QixJQUFJLENBQUNJLFNBQUwsQ0FBZTVCLFdBQWYsQ0FBNEIsRUFBdkQsQ0FBSjs7QUFDQSxNQUFJQSxXQUFXLENBQUM2QixXQUFaLElBQTJCLFlBQS9CLEVBQ0U7QUFBQzlCLElBQUFBLFFBQVEsQ0FBQytCLFVBQVQsR0FBc0IsSUFBdEI7QUFBMkIsR0FEOUIsTUFHRTtBQUFDL0IsSUFBQUEsUUFBUSxDQUFDK0IsVUFBVCxHQUFzQixLQUF0QjtBQUE0Qjs7QUFDL0JDLEVBQUFBLEdBQUcsQ0FBQ2xDLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JtQyxZQUF4QixDQUFxQ2pDLFFBQVEsQ0FBQ3NCLEdBQTlDLEVBQW1EdEIsUUFBUSxDQUFDVyxVQUE1RCxFQUF3RVgsUUFBUSxDQUFDRyxTQUFqRixDQUFELENBQUg7QUFDQTZCLEVBQUFBLEdBQUcsQ0FBQ2hDLFFBQVEsQ0FBQ3NCLEdBQVQsR0FBZSxlQUFmLEdBQWlDckIsV0FBVyxDQUFDNkIsV0FBOUMsQ0FBSDtBQUVBNUIsRUFBQUEsTUFBTSxDQUFDSyxJQUFQLEdBQWNQLFFBQWQ7QUFDQUUsRUFBQUEsTUFBTSxDQUFDTixPQUFQLEdBQWlCSyxXQUFqQjtBQUNBLFNBQU9DLE1BQVA7QUFDRCxDLENBRUQ7OztBQUNPLFNBQVNnQyxZQUFULENBQXNCQyxRQUF0QixFQUFnQ0MsV0FBaEMsRUFBNkM3QixJQUE3QyxFQUFtRFgsT0FBbkQsRUFBNEQ7QUFDakUsTUFBSTtBQUNGRSxJQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCbUIsSUFBeEIsQ0FBNkJyQixPQUE3QixFQUFzQyx1QkFBdEM7O0FBRUEsVUFBTWdCLEdBQUcsR0FBR2QsT0FBTyxDQUFDLFVBQUQsQ0FBbkI7O0FBQ0EsVUFBTUMsRUFBRSxHQUFHRCxPQUFPLENBQUMsSUFBRCxDQUFsQjs7QUFDQSxVQUFNdUMsTUFBTSxHQUFHdkMsT0FBTyxDQUFDLFFBQUQsQ0FBdEI7O0FBQ0EsVUFBTUQsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQSxRQUFJd0MsYUFBYSxHQUFHLEVBQXBCO0FBQ0EsUUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxVQUFNQyxzQkFBc0IsR0FBRyx5QkFBL0I7QUFDQSxVQUFNQyxzQkFBc0IsR0FBRywyQkFBL0I7O0FBRUEsUUFBSWxDLElBQUksQ0FBQ3dCLFVBQVQsRUFBcUI7QUFDbkJkLE1BQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVyxpQ0FBRCxHQUFvQ1csSUFBSSxDQUFDd0IsVUFBbkQsQ0FBSjs7QUFFQSxVQUFJbkMsT0FBTyxDQUFDTyxTQUFSLElBQXFCLFNBQXpCLEVBQW9DO0FBQ2xDLGNBQU11QyxXQUFXLEdBQUc3QyxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTRCLHlDQUE1QixDQUFwQjtBQUNBLFlBQUkyQixLQUFLLEdBQUcvQixHQUFHLENBQUNnQyxXQUFKLENBQWlCLEdBQUVGLFdBQVksTUFBL0IsQ0FBWjtBQUNBQyxRQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBZUMsUUFBRCxJQUFjO0FBQzFCLGNBQUlBLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEtBQXlCLE1BQXpDLEVBQWlEO0FBQy9DLGdCQUFJQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixDQUFoQixFQUFtQkUsT0FBbkIsQ0FBMkIsWUFBM0IsQ0FBVjs7QUFDQSxnQkFBSUQsR0FBRyxJQUFJLENBQVgsRUFBYztBQUNaVixjQUFBQSxhQUFhLENBQUNoQyxJQUFkLENBQW1Cd0MsUUFBUSxDQUFDSSxTQUFULENBQW1CLENBQW5CLEVBQXNCRixHQUFHLEdBQUcsQ0FBNUIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0YsU0FQRDs7QUFTQSxZQUFJO0FBQ0YsY0FBSUcsT0FBTyxHQUFHLEtBQWQ7QUFDQSxnQkFBTUMsYUFBYSxHQUFHdkQsSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUE0Qix1QkFBNUIsQ0FBdEI7QUFDQSxjQUFJcUMsRUFBRSxHQUFHekMsR0FBRyxDQUFDZSxZQUFKLENBQWlCeUIsYUFBakIsRUFBZ0NFLFFBQWhDLEVBQVQ7QUFDQSxjQUFJQyxDQUFDLEdBQUdGLEVBQUUsQ0FBQ0osT0FBSCxDQUFXLDRCQUFYLENBQVI7QUFDQU0sVUFBQUEsQ0FBQyxHQUFHRixFQUFFLENBQUNILFNBQUgsQ0FBYSxDQUFiLEVBQWdCSyxDQUFoQixFQUFtQkMsV0FBbkIsQ0FBK0IsUUFBL0IsQ0FBSjs7QUFFQSxjQUFJSCxFQUFFLENBQUNOLE1BQUgsQ0FBVVEsQ0FBQyxHQUFHLENBQWQsRUFBaUIsQ0FBakIsTUFBd0IsS0FBNUIsRUFBbUM7QUFDakNGLFlBQUFBLEVBQUUsR0FBR0EsRUFBRSxDQUFDSCxTQUFILENBQWEsQ0FBYixFQUFnQkssQ0FBaEIsSUFBcUIsUUFBckIsR0FBZ0NGLEVBQUUsQ0FBQ0gsU0FBSCxDQUFhSyxDQUFiLENBQXJDO0FBQ0FKLFlBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0Q7O0FBRUQsZ0JBQU1NLHNCQUFzQixHQUFHNUQsSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUE2QixXQUFVd0Isc0JBQXVCLEVBQTlELENBQS9COztBQUNBLGNBQUksQ0FBQ3pDLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBY3VDLHNCQUFkLENBQUwsRUFBNEM7QUFDMUNwQixZQUFBQSxNQUFNLENBQUNxQixJQUFQLENBQVlELHNCQUFaOztBQUNBLGtCQUFNRSxDQUFDLEdBQUc3RCxPQUFPLENBQUMsYUFBRCxDQUFQLENBQXVCOEQscUJBQXZCLENBQTZDLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELENBQVY7O0FBQ0FoRCxZQUFBQSxHQUFHLENBQUNpRCxhQUFKLENBQ0csR0FBRUosc0JBQXVCLElBQUdoQixzQkFBdUIsS0FEdEQsRUFDNERrQixDQUQ1RCxFQUMrRCxPQUQvRCxFQUN3RSxNQUFNO0FBQUM7QUFBTyxhQUR0RjtBQUdBUixZQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNEOztBQUNELGNBQUlXLENBQUMsR0FBR1QsRUFBRSxDQUFDSixPQUFILENBQVksS0FBSVQsc0JBQXVCLElBQUdDLHNCQUF1QixFQUFqRSxDQUFSOztBQUNBLGNBQUlxQixDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1RULFlBQUFBLEVBQUUsR0FBR0EsRUFBRSxDQUFDSCxTQUFILENBQWEsQ0FBYixFQUFnQkssQ0FBaEIsSUFBc0IsMkNBQTBDZixzQkFBdUIsSUFBR0Msc0JBQXVCLEtBQWpILEdBQXdIWSxFQUFFLENBQUNOLE1BQUgsQ0FBVVEsQ0FBVixDQUE3SDtBQUNBSixZQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNELFdBSEQsTUFJSyxJQUFJRSxFQUFFLENBQUNOLE1BQUgsQ0FBVWUsQ0FBQyxHQUFHLEVBQWQsRUFBa0IsQ0FBbEIsS0FBd0IsS0FBNUIsRUFBbUM7QUFDdENULFlBQUFBLEVBQUUsR0FBR0EsRUFBRSxDQUFDSCxTQUFILENBQWEsQ0FBYixFQUFnQlksQ0FBQyxHQUFHLEVBQXBCLElBQTBCLElBQTFCLEdBQWdDVCxFQUFFLENBQUNILFNBQUgsQ0FBYVksQ0FBQyxHQUFHLEVBQWpCLENBQXJDO0FBQ0FYLFlBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0Q7O0FBQ0QsY0FBSUEsT0FBSixFQUNFdkMsR0FBRyxDQUFDaUQsYUFBSixDQUFrQlQsYUFBbEIsRUFBaUNDLEVBQWpDLEVBQXFDLE9BQXJDLEVBQThDLE1BQUk7QUFBQztBQUFPLFdBQTFEO0FBQ0gsU0FoQ0QsQ0FpQ0EsT0FBT1UsQ0FBUCxFQUFVO0FBQ1JDLFVBQUFBLE9BQU8sQ0FBQ2hDLEdBQVIsQ0FBWStCLENBQVo7QUFDQTNCLFVBQUFBLFdBQVcsQ0FBQzZCLE1BQVosQ0FBbUIzRCxJQUFuQixDQUF3Qix1Q0FBdUN5RCxDQUEvRDtBQUNBLGlCQUFPLEVBQVA7QUFDRDtBQUNGOztBQUVEM0IsTUFBQUEsV0FBVyxDQUFDOEIsS0FBWixDQUFrQkMsYUFBbEIsQ0FBZ0NDLEdBQWhDLENBQXFDLG9CQUFyQyxFQUEwREMsTUFBTSxJQUFJO0FBQ2xFLFlBQUkvQixhQUFhLENBQUNnQyxNQUFkLElBQXdCRCxNQUFNLENBQUNFLFFBQS9CLEtBQTRDRixNQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLGFBQXRCLEtBQ2hENUUsT0FBTyxDQUFDTyxTQUFSLElBQXFCLFNBQXJCLElBQWtDa0UsTUFBTSxDQUFDRSxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixTQUF0QixDQUQ5QixLQUVKLENBQUNILE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsS0FBaEIsQ0FBc0IsY0FBdEIsQ0FGRyxJQUVzQyxDQUFDSCxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXVCLGlDQUF2QixDQUYzQyxFQUVxRztBQUNuR2pFLFVBQUFBLElBQUksQ0FBQ2tFLElBQUwsR0FBWSxDQUFDLElBQUlsRSxJQUFJLENBQUNrRSxJQUFMLElBQWEsRUFBakIsQ0FBRCxFQUF1QixHQUFHM0UsT0FBTyxDQUFFLEtBQUlTLElBQUksQ0FBQ0osU0FBVSxNQUFyQixDQUFQLENBQW1DdUUsaUJBQW5DLENBQXFETCxNQUFyRCxFQUE2RHpFLE9BQTdELEVBQXNFd0MsV0FBdEUsRUFBbUZFLGFBQW5GLENBQTFCLENBQVo7QUFDRDtBQUNGLE9BTkQ7O0FBUUEsVUFBSTFDLE9BQU8sQ0FBQ08sU0FBUixJQUFxQixTQUF6QixFQUFvQztBQUNsQ2lDLFFBQUFBLFdBQVcsQ0FBQzhCLEtBQVosQ0FBa0JTLGFBQWxCLENBQWdDUCxHQUFoQyxDQUFxQyxvQkFBckMsRUFBMERRLE9BQU8sSUFBSTtBQUNuRSxnQkFBTUMsTUFBTSxHQUFHLDBCQUFmO0FBQ0F0RSxVQUFBQSxJQUFJLENBQUNrRSxJQUFMLENBQVU1QixPQUFWLENBQWtCaUMsSUFBSSxJQUFJO0FBQ3hCLGdCQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQzdCLE9BQUwsQ0FBYTRCLE1BQWIsQ0FBWjs7QUFFQSxnQkFBSUUsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZEQsY0FBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUM1QixTQUFMLENBQWU2QixLQUFLLEdBQUdGLE1BQU0sQ0FBQ1AsTUFBOUIsQ0FBUDtBQUNBLGtCQUFJdEIsR0FBRyxHQUFHOEIsSUFBSSxDQUFDN0IsT0FBTCxDQUFhLElBQWIsQ0FBVjtBQUNBVixjQUFBQSxpQkFBaUIsQ0FBQ2pDLElBQWxCLENBQXVCd0UsSUFBSSxDQUFDL0IsTUFBTCxDQUFZLENBQVosRUFBZUMsR0FBZixDQUF2QjtBQUNEO0FBQ0YsV0FSRDtBQVNBVCxVQUFBQSxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsSUFBSXlDLEdBQUosQ0FBUXpDLGlCQUFSLENBQUosQ0FBcEI7QUFDQSxnQkFBTTBDLFFBQVEsR0FBR3BGLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBNEIsaURBQTVCLENBQWpCO0FBQ0EsZ0JBQU1rRSxXQUFXLEdBQUdyRixJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTZCLFdBQVV3QixzQkFBdUIsRUFBOUQsQ0FBcEI7QUFDQSxnQkFBTTJDLHdCQUF3QixHQUFHdEYsSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUE2QixHQUFFa0UsV0FBWSxVQUEzQyxDQUFqQztBQUVBLGdCQUFNRSxXQUFXLEdBQUd4RSxHQUFHLENBQUNlLFlBQUosQ0FBa0IsR0FBRXNELFFBQVMsVUFBN0IsRUFBd0MzQixRQUF4QyxFQUFwQjtBQUNBMUMsVUFBQUEsR0FBRyxDQUFDaUQsYUFBSixDQUFtQixHQUFFcUIsV0FBWSxVQUFqQyxFQUE0Q0UsV0FBNUMsRUFBeUQsT0FBekQsRUFBa0UsTUFBSTtBQUFDO0FBQU8sV0FBOUU7QUFFQSxjQUFJQyxrQkFBa0IsR0FBRyxLQUF6QjtBQUNBLGNBQUlDLFVBQVUsR0FBRztBQUNmQyxZQUFBQSxPQUFPLEVBQUUsRUFETTtBQUVmQyxZQUFBQSxPQUFPLEVBQUUsRUFGTTtBQUdmQyxZQUFBQSxZQUFZLEVBQUU7QUFIQyxXQUFqQjtBQUtBbEQsVUFBQUEsaUJBQWlCLENBQUNNLE9BQWxCLENBQTBCNkMsS0FBSyxJQUFJO0FBQ2pDLGdCQUFJQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEtBQWdDSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEdBQXBCLEVBQXlCQyxLQUF6QixDQUErQixDQUEvQixDQUFuRDtBQUNBVCxZQUFBQSxVQUFVLENBQUNDLE9BQVgsR0FBcUJELFVBQVUsQ0FBQ0MsT0FBWCxHQUFzQixlQUFjSSxZQUFhLDJCQUEwQkQsS0FBTSxnQkFBdEc7QUFDQUosWUFBQUEsVUFBVSxDQUFDRSxPQUFYLEdBQXFCRixVQUFVLENBQUNFLE9BQVgsR0FBc0IsVUFBU0csWUFBYSxjQUFqRTtBQUNBTCxZQUFBQSxVQUFVLENBQUNHLFlBQVgsR0FBMEJILFVBQVUsQ0FBQ0csWUFBWCxHQUEyQixVQUFTRSxZQUFhLGNBQTNFO0FBQ0EsZ0JBQUlLLFNBQVMsR0FBSSxRQUFPTixLQUFNLGVBQTlCO0FBQ0Esa0JBQU1PLFFBQVEsR0FBR3JGLEdBQUcsQ0FBQ2UsWUFBSixDQUFrQixHQUFFc0QsUUFBUyxHQUFFZSxTQUFVLEVBQXpDLEVBQTRDMUMsUUFBNUMsRUFBakI7QUFDQTFDLFlBQUFBLEdBQUcsQ0FBQ2lELGFBQUosQ0FBbUIsR0FBRXFCLFdBQVksR0FBRWMsU0FBVSxFQUE3QyxFQUFnREMsUUFBaEQsRUFBMEQsT0FBMUQsRUFBbUUsTUFBSTtBQUFDO0FBQU8sYUFBL0U7QUFDQVosWUFBQUEsa0JBQWtCLEdBQUcsSUFBckI7QUFDRCxXQVREOztBQVdBLGNBQUlBLGtCQUFKLEVBQXdCO0FBQ3RCLGdCQUFJMUIsQ0FBQyxHQUFHN0QsT0FBTyxDQUFDLGFBQUQsQ0FBUCxDQUF1QjhELHFCQUF2QixDQUNOMEIsVUFBVSxDQUFDQyxPQURMLEVBQ2NELFVBQVUsQ0FBQ0UsT0FEekIsRUFDa0NGLFVBQVUsQ0FBQ0csWUFEN0MsQ0FBUjs7QUFJQTdFLFlBQUFBLEdBQUcsQ0FBQ2lELGFBQUosQ0FBbUIsR0FBRXFCLFdBQVksSUFBR3pDLHNCQUF1QixLQUEzRCxFQUFpRWtCLENBQWpFLEVBQW9FLE9BQXBFLEVBQTZFLE1BQUk7QUFBQztBQUFPLGFBQXpGO0FBQ0Q7QUFDRixTQTNDRDtBQTRDRDtBQUNGOztBQUVELFFBQUkvRCxPQUFPLENBQUNPLFNBQVIsSUFBcUIsT0FBekIsRUFBa0M7QUFDaENpQyxNQUFBQSxXQUFXLENBQUM4QixLQUFaLENBQWtCZ0MscUNBQWxCLENBQXdEOUIsR0FBeEQsQ0FBNkQscUJBQTdELEVBQW1GK0IsSUFBRCxJQUFVO0FBQzFGbEYsUUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLDBCQUFULENBQUo7O0FBQ0EsY0FBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxZQUFJc0csVUFBVSxHQUFHLEVBQWpCOztBQUNBLFlBQUlqRSxRQUFRLENBQUN2QyxPQUFULENBQWlCeUcsU0FBckIsRUFBZ0M7QUFDOUIsY0FBSWxFLFFBQVEsQ0FBQ2lFLFVBQVQsS0FBd0IsR0FBNUIsRUFBaUM7QUFDL0JBLFlBQUFBLFVBQVUsR0FBR3ZHLElBQUksQ0FBQ3VCLElBQUwsQ0FBVWUsUUFBUSxDQUFDdkMsT0FBVCxDQUFpQnlHLFNBQWpCLENBQTJCQyxXQUFyQyxFQUFrREYsVUFBbEQsQ0FBYjtBQUNELFdBRkQsTUFHSztBQUNILGdCQUFJakUsUUFBUSxDQUFDdkMsT0FBVCxDQUFpQnlHLFNBQWpCLENBQTJCQyxXQUEzQixJQUEwQ2xHLFNBQTlDLEVBQXlEO0FBQ3ZEZ0csY0FBQUEsVUFBVSxHQUFHLE9BQWI7QUFDRCxhQUZELE1BR0s7QUFDSEEsY0FBQUEsVUFBVSxHQUFHLEVBQWI7QUFDRDtBQUNGO0FBQ0YsU0FaRCxNQWFLO0FBQ0hBLFVBQUFBLFVBQVUsR0FBRyxPQUFiO0FBQ0Q7O0FBQ0RBLFFBQUFBLFVBQVUsR0FBR0EsVUFBVSxDQUFDTixPQUFYLENBQW1CL0UsT0FBTyxDQUFDQyxHQUFSLEVBQW5CLEVBQWtDLEVBQWxDLEVBQXNDdUYsSUFBdEMsRUFBYjtBQUNBLFlBQUlDLE1BQU0sR0FBRzNHLElBQUksQ0FBQ3VCLElBQUwsQ0FBVWdGLFVBQVYsRUFBc0I3RixJQUFJLENBQUNrRyxPQUEzQixFQUFvQyxRQUFwQyxDQUFiO0FBQ0EsWUFBSUMsT0FBTyxHQUFHN0csSUFBSSxDQUFDdUIsSUFBTCxDQUFVZ0YsVUFBVixFQUFzQjdGLElBQUksQ0FBQ2tHLE9BQTNCLEVBQW9DLFNBQXBDLENBQWQ7QUFDQU4sUUFBQUEsSUFBSSxDQUFDUSxNQUFMLENBQVl0RCxFQUFaLENBQWV1RCxPQUFmLENBQXVCSixNQUF2QjtBQUNBTCxRQUFBQSxJQUFJLENBQUNRLE1BQUwsQ0FBWUUsR0FBWixDQUFnQkQsT0FBaEIsQ0FBd0JGLE9BQXhCO0FBQ0ExRSxRQUFBQSxHQUFHLENBQUN6QixJQUFJLENBQUNlLEdBQUwsR0FBWSxVQUFTa0YsTUFBTyxRQUFPRSxPQUFRLGdCQUE1QyxDQUFIO0FBQ0QsT0ExQkQ7QUEyQkQsS0E1QkQsTUE2Qks7QUFDSHpGLE1BQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBUyxrQ0FBVCxDQUFKO0FBQ0Q7QUFHRixHQTlKRCxDQStKQSxPQUFNbUUsQ0FBTixFQUFTO0FBQ1BqRSxJQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCbUIsSUFBeEIsQ0FBNkJyQixPQUE3QixFQUFxQ21FLENBQXJDOztBQUNBM0IsSUFBQUEsV0FBVyxDQUFDNkIsTUFBWixDQUFtQjNELElBQW5CLENBQXdCLG1CQUFtQnlELENBQTNDO0FBQ0Q7QUFDRixDLENBRUQ7OztTQUNzQitDLEk7O0VBMEd0Qjs7Ozs7OzBCQTFHTyxpQkFBb0IzRSxRQUFwQixFQUE4QkMsV0FBOUIsRUFBMkM3QixJQUEzQyxFQUFpRFgsT0FBakQsRUFBMERtSCxRQUExRDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUcvRSxVQUFBQSxHQUZILEdBRVNsQyxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCa0MsR0FGakM7QUFHR2YsVUFBQUEsSUFISCxHQUdVbkIsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3Qm1CLElBSGxDO0FBSUhBLFVBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBUyxlQUFULENBQUo7QUFDSTBCLFVBQUFBLEdBTEQsR0FLT2YsSUFBSSxDQUFDZSxHQUxaO0FBTUNuQixVQUFBQSxTQU5ELEdBTWFJLElBQUksQ0FBQ0osU0FObEI7QUFPR04sVUFBQUEsSUFQSCxHQU9VQyxPQUFPLENBQUMsTUFBRCxDQVBqQjtBQVFHa0gsVUFBQUEsZUFSSCxHQVFxQmxILE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JrSCxlQVI3QztBQVNDWixVQUFBQSxVQVRELEdBU2N2RyxJQUFJLENBQUN1QixJQUFMLENBQVVlLFFBQVEsQ0FBQ2lFLFVBQW5CLEVBQThCN0YsSUFBSSxDQUFDa0csT0FBbkMsQ0FUZDs7QUFVSCxjQUFJdEUsUUFBUSxDQUFDaUUsVUFBVCxLQUF3QixHQUF4QixJQUErQmpFLFFBQVEsQ0FBQ3ZDLE9BQVQsQ0FBaUJ5RyxTQUFwRCxFQUErRDtBQUM3REQsWUFBQUEsVUFBVSxHQUFHdkcsSUFBSSxDQUFDdUIsSUFBTCxDQUFVZSxRQUFRLENBQUN2QyxPQUFULENBQWlCeUcsU0FBakIsQ0FBMkJDLFdBQXJDLEVBQWtERixVQUFsRCxDQUFiO0FBQ0Q7O0FBQ0RuRixVQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVMsaUJBQWlCd0csVUFBMUIsQ0FBSjtBQUNBbkYsVUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLGdCQUFnQk8sU0FBekIsQ0FBSjs7QUFkRyxnQkFlQ1AsT0FBTyxDQUFDa0gsSUFBUixJQUFnQixJQWZqQjtBQUFBO0FBQUE7QUFBQTs7QUFnQkQsY0FBSTNHLFNBQVMsSUFBSSxPQUFqQixFQUEwQjtBQUN4QjhHLFlBQUFBLGdCQUFnQixDQUFDM0YsR0FBRCxFQUFNZixJQUFOLEVBQVlYLE9BQVosRUFBcUJ3RyxVQUFyQixFQUFpQ2hFLFdBQWpDLENBQWhCO0FBQ0QsV0FGRCxNQUdLO0FBQ0h0QyxZQUFBQSxPQUFPLENBQUUsS0FBSUssU0FBVSxNQUFoQixDQUFQLENBQThCOEcsZ0JBQTlCLENBQStDM0YsR0FBL0MsRUFBb0RmLElBQXBELEVBQTBEWCxPQUExRCxFQUFtRXdHLFVBQW5FLEVBQStFaEUsV0FBL0U7QUFDRDs7QUFFRzhFLFVBQUFBLE9BdkJILEdBdUJhLEVBdkJiOztBQXdCRCxjQUFJdEgsT0FBTyxDQUFDdUgsS0FBUixJQUFpQixLQUFqQixJQUEwQjVHLElBQUksQ0FBQ3dCLFVBQUwsSUFBbUIsS0FBakQsRUFBd0Q7QUFDdERtRixZQUFBQSxPQUFPLEdBQUcsT0FBVjtBQUNELFdBRkQsTUFHSztBQUNIQSxZQUFBQSxPQUFPLEdBQUcsT0FBVjtBQUNEOztBQTdCQSxnQkErQkczRyxJQUFJLENBQUM2RyxPQUFMLElBQWdCLElBL0JuQjtBQUFBO0FBQUE7QUFBQTs7QUFnQ0tDLFVBQUFBLEtBaENMLEdBZ0NhLEVBaENiOztBQWlDQyxjQUFJekgsT0FBTyxDQUFDMEgsT0FBUixJQUFtQmxILFNBQW5CLElBQWdDUixPQUFPLENBQUMwSCxPQUFSLElBQW1CLEVBQW5ELElBQXlEMUgsT0FBTyxDQUFDMEgsT0FBUixJQUFtQixJQUFoRixFQUFzRjtBQUNwRixnQkFBSUosT0FBTyxJQUFJLE9BQWYsRUFBd0I7QUFDdEJHLGNBQUFBLEtBQUssR0FBRyxDQUFDLEtBQUQsRUFBUUgsT0FBUixFQUFpQnRILE9BQU8sQ0FBQ2tDLFdBQXpCLENBQVI7QUFDRCxhQUZELE1BR0s7QUFDSHVGLGNBQUFBLEtBQUssR0FBRyxDQUFDLEtBQUQsRUFBUUgsT0FBUixFQUFpQixjQUFqQixFQUFpQyxPQUFqQyxFQUEwQ3RILE9BQU8sQ0FBQ2tDLFdBQWxELENBQVI7QUFDRDtBQUVGLFdBUkQsTUFTSztBQUNILGdCQUFJb0YsT0FBTyxJQUFJLE9BQWYsRUFBd0I7QUFDdEJHLGNBQUFBLEtBQUssR0FBRyxDQUFDLEtBQUQsRUFBUUgsT0FBUixFQUFpQnRILE9BQU8sQ0FBQzBILE9BQXpCLEVBQWtDMUgsT0FBTyxDQUFDa0MsV0FBMUMsQ0FBUjtBQUNELGFBRkQsTUFHSztBQUNIdUYsY0FBQUEsS0FBSyxHQUFHLENBQUMsS0FBRCxFQUFRSCxPQUFSLEVBQWlCLGNBQWpCLEVBQWlDLE9BQWpDLEVBQTBDdEgsT0FBTyxDQUFDMEgsT0FBbEQsRUFBMkQxSCxPQUFPLENBQUNrQyxXQUFuRSxDQUFSO0FBQ0Q7QUFDRjs7QUFqREYsZ0JBbURLdkIsSUFBSSxDQUFDZ0gsWUFBTCxJQUFxQixLQW5EMUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQkFvRFNQLGVBQWUsQ0FBQzFGLEdBQUQsRUFBTWMsV0FBTixFQUFtQmdFLFVBQW5CLEVBQStCaUIsS0FBL0IsRUFBc0N6SCxPQUF0QyxDQXBEeEI7O0FBQUE7QUFxREdXLFVBQUFBLElBQUksQ0FBQ2dILFlBQUwsR0FBb0IsSUFBcEI7O0FBckRIO0FBd0RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQVIsVUFBQUEsUUFBUTtBQTVFVDtBQUFBOztBQUFBO0FBK0VDQSxVQUFBQSxRQUFROztBQS9FVDtBQUFBO0FBQUE7O0FBQUE7QUFtRkQvRSxVQUFBQSxHQUFHLENBQUUsR0FBRXpCLElBQUksQ0FBQ2UsR0FBSSx1QkFBYixDQUFILENBbkZDLENBb0ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQXlGLFVBQUFBLFFBQVE7O0FBaEdQO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBb0dIakgsVUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3Qm1CLElBQXhCLENBQTZCckIsT0FBN0I7O0FBQ0F3QyxVQUFBQSxXQUFXLENBQUM2QixNQUFaLENBQW1CM0QsSUFBbkIsQ0FBd0Isc0JBQXhCO0FBQ0F5RyxVQUFBQSxRQUFROztBQXRHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTJHQSxTQUFTRSxnQkFBVCxDQUEwQjNGLEdBQTFCLEVBQStCZixJQUEvQixFQUFxQ1gsT0FBckMsRUFBOEM0SCxNQUE5QyxFQUFzRHBGLFdBQXRELEVBQW1FO0FBQ3hFLE1BQUk7QUFDRm5CLElBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBUywyQkFBVCxDQUFKOztBQUNBLFVBQU02SCxNQUFNLEdBQUczSCxPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFDQSxVQUFNdUMsTUFBTSxHQUFHdkMsT0FBTyxDQUFDLFFBQUQsQ0FBdEI7O0FBQ0EsVUFBTWMsR0FBRyxHQUFHZCxPQUFPLENBQUMsVUFBRCxDQUFuQjs7QUFDQSxVQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUNBLFVBQU1ELElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBRUEsUUFBSTRILFFBQVEsR0FBRzlILE9BQU8sQ0FBQzhILFFBQXZCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHL0gsT0FBTyxDQUFDK0gsT0FBdEI7QUFDQSxRQUFJQyxLQUFLLEdBQUdoSSxPQUFPLENBQUNnSSxLQUFwQjtBQUVBQSxJQUFBQSxLQUFLLEdBQUdBLEtBQUssS0FBS0QsT0FBTyxLQUFLLFNBQVosR0FBd0IsY0FBeEIsR0FBeUMsZ0JBQTlDLENBQWI7QUFDQTFHLElBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBUyxnQkFBZ0JXLElBQUksQ0FBQ3NILFNBQTlCLENBQUo7O0FBQ0EsUUFBSXRILElBQUksQ0FBQ3NILFNBQVQsRUFBb0I7QUFDbEJKLE1BQUFBLE1BQU0sQ0FBQy9ELElBQVAsQ0FBWThELE1BQVo7QUFDQW5GLE1BQUFBLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWThELE1BQVo7O0FBQ0EsWUFBTU0sUUFBUSxHQUFHaEksT0FBTyxDQUFDLGFBQUQsQ0FBUCxDQUF1QmdJLFFBQXhDOztBQUNBLFlBQU1DLGFBQWEsR0FBR2pJLE9BQU8sQ0FBQyxhQUFELENBQVAsQ0FBdUJpSSxhQUE3Qzs7QUFDQSxZQUFNQyxtQkFBbUIsR0FBR2xJLE9BQU8sQ0FBQyxhQUFELENBQVAsQ0FBdUJrSSxtQkFBbkQ7O0FBQ0EsWUFBTUMsc0JBQXNCLEdBQUduSSxPQUFPLENBQUMsYUFBRCxDQUFQLENBQXVCbUksc0JBQXREOztBQUVBbEksTUFBQUEsRUFBRSxDQUFDOEQsYUFBSCxDQUFpQmhFLElBQUksQ0FBQ3VCLElBQUwsQ0FBVW9HLE1BQVYsRUFBa0IsV0FBbEIsQ0FBakIsRUFBaURNLFFBQVEsQ0FBQ3ZILElBQUksQ0FBQ3dCLFVBQU4sRUFBa0JuQyxPQUFsQixFQUEyQjRILE1BQTNCLENBQXpELEVBQTZGLE1BQTdGO0FBQ0F6SCxNQUFBQSxFQUFFLENBQUM4RCxhQUFILENBQWlCaEUsSUFBSSxDQUFDdUIsSUFBTCxDQUFVb0csTUFBVixFQUFrQixVQUFsQixDQUFqQixFQUFnRE8sYUFBYSxDQUFDSCxLQUFELEVBQVFGLFFBQVIsRUFBa0JDLE9BQWxCLEVBQTJCL0gsT0FBM0IsRUFBb0M0SCxNQUFwQyxDQUE3RCxFQUEwRyxNQUExRztBQUNBekgsTUFBQUEsRUFBRSxDQUFDOEQsYUFBSCxDQUFpQmhFLElBQUksQ0FBQ3VCLElBQUwsQ0FBVW9HLE1BQVYsRUFBa0Isc0JBQWxCLENBQWpCLEVBQTREUyxzQkFBc0IsQ0FBQ3JJLE9BQUQsRUFBVTRILE1BQVYsQ0FBbEYsRUFBcUcsTUFBckc7QUFDQXpILE1BQUFBLEVBQUUsQ0FBQzhELGFBQUgsQ0FBaUJoRSxJQUFJLENBQUN1QixJQUFMLENBQVVvRyxNQUFWLEVBQWtCLGdCQUFsQixDQUFqQixFQUFzRFEsbUJBQW1CLENBQUNwSSxPQUFELEVBQVU0SCxNQUFWLENBQXpFLEVBQTRGLE1BQTVGOztBQUVBLFVBQUlqSCxJQUFJLENBQUNKLFNBQUwsSUFBa0IsU0FBdEIsRUFBaUM7QUFDL0IsWUFBSUosRUFBRSxDQUFDbUIsVUFBSCxDQUFjckIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF3Qix1QkFBeEIsQ0FBZCxDQUFKLEVBQXFFO0FBQ25FLGNBQUlrSCxRQUFRLEdBQUdySSxJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLGNBQXpCLENBQWY7QUFDQSxjQUFJbUgsTUFBTSxHQUFHdEksSUFBSSxDQUFDdUIsSUFBTCxDQUFVb0csTUFBVixDQUFiO0FBQ0E1RyxVQUFBQSxHQUFHLENBQUNTLFFBQUosQ0FBYTZHLFFBQWIsRUFBdUJDLE1BQXZCO0FBQ0FuRyxVQUFBQSxHQUFHLENBQUNWLEdBQUcsR0FBRyxXQUFOLEdBQW9CNEcsUUFBUSxDQUFDcEMsT0FBVCxDQUFpQi9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFqQixFQUFnQyxFQUFoQyxDQUFwQixHQUEwRCxPQUExRCxHQUFvRW1ILE1BQU0sQ0FBQ3JDLE9BQVAsQ0FBZS9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFmLEVBQThCLEVBQTlCLENBQXJFLENBQUg7QUFDRDs7QUFDRCxZQUFJakIsRUFBRSxDQUFDbUIsVUFBSCxDQUFjckIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF3Qix3QkFBeEIsQ0FBZCxDQUFKLEVBQXNFO0FBQ3BFLGNBQUlrSCxRQUFRLEdBQUdySSxJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLGNBQXpCLENBQWY7QUFDQSxjQUFJbUgsTUFBTSxHQUFHdEksSUFBSSxDQUFDdUIsSUFBTCxDQUFVb0csTUFBVixDQUFiO0FBQ0E1RyxVQUFBQSxHQUFHLENBQUNTLFFBQUosQ0FBYTZHLFFBQWIsRUFBdUJDLE1BQXZCO0FBQ0FuRyxVQUFBQSxHQUFHLENBQUNWLEdBQUcsR0FBRyxXQUFOLEdBQW9CNEcsUUFBUSxDQUFDcEMsT0FBVCxDQUFpQi9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFqQixFQUFnQyxFQUFoQyxDQUFwQixHQUEwRCxPQUExRCxHQUFvRW1ILE1BQU0sQ0FBQ3JDLE9BQVAsQ0FBZS9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFmLEVBQThCLEVBQTlCLENBQXJFLENBQUg7QUFDRDtBQUNGOztBQUNELFVBQUlULElBQUksQ0FBQ0osU0FBTCxJQUFrQixPQUF0QixFQUFnQztBQUM5QixZQUFJSixFQUFFLENBQUNtQixVQUFILENBQWNyQixJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXdCLHFCQUF4QixDQUFkLENBQUosRUFBbUU7QUFDakUsY0FBSWtILFFBQVEsR0FBR3JJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIscUJBQXpCLENBQWY7QUFDQSxjQUFJbUgsTUFBTSxHQUFHdEksSUFBSSxDQUFDdUIsSUFBTCxDQUFVb0csTUFBVixFQUFrQixVQUFsQixDQUFiO0FBQ0E1RyxVQUFBQSxHQUFHLENBQUNTLFFBQUosQ0FBYTZHLFFBQWIsRUFBdUJDLE1BQXZCO0FBQ0FuRyxVQUFBQSxHQUFHLENBQUNWLEdBQUcsR0FBRyxXQUFOLEdBQW9CNEcsUUFBUSxDQUFDcEMsT0FBVCxDQUFpQi9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFqQixFQUFnQyxFQUFoQyxDQUFwQixHQUEwRCxPQUExRCxHQUFvRW1ILE1BQU0sQ0FBQ3JDLE9BQVAsQ0FBZS9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFmLEVBQThCLEVBQTlCLENBQXJFLENBQUg7QUFDRDs7QUFDRCxZQUFJakIsRUFBRSxDQUFDbUIsVUFBSCxDQUFjckIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF3QixzQkFBeEIsQ0FBZCxDQUFKLEVBQW9FO0FBQ2xFLGNBQUlrSCxRQUFRLEdBQUdySSxJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLHNCQUF6QixDQUFmO0FBQ0EsY0FBSW1ILE1BQU0sR0FBR3RJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVW9HLE1BQVYsRUFBa0IsV0FBbEIsQ0FBYjtBQUNBNUcsVUFBQUEsR0FBRyxDQUFDUyxRQUFKLENBQWE2RyxRQUFiLEVBQXVCQyxNQUF2QjtBQUNBbkcsVUFBQUEsR0FBRyxDQUFDVixHQUFHLEdBQUcsV0FBTixHQUFvQjRHLFFBQVEsQ0FBQ3BDLE9BQVQsQ0FBaUIvRSxPQUFPLENBQUNDLEdBQVIsRUFBakIsRUFBZ0MsRUFBaEMsQ0FBcEIsR0FBMEQsT0FBMUQsR0FBb0VtSCxNQUFNLENBQUNyQyxPQUFQLENBQWUvRSxPQUFPLENBQUNDLEdBQVIsRUFBZixFQUE4QixFQUE5QixDQUFyRSxDQUFIO0FBQ0Q7QUFDRixPQXhDaUIsQ0EwQ2xCOzs7QUFDQSxVQUFJakIsRUFBRSxDQUFDbUIsVUFBSCxDQUFjckIsSUFBSSxDQUFDdUIsSUFBTCxDQUFVTCxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF3QixZQUF4QixDQUFkLENBQUosRUFBMEQ7QUFDeEQsWUFBSW9ILGFBQWEsR0FBR3ZJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsWUFBekIsQ0FBcEI7QUFDQSxZQUFJcUgsV0FBVyxHQUFHeEksSUFBSSxDQUFDdUIsSUFBTCxDQUFVb0csTUFBVixFQUFrQixjQUFsQixDQUFsQjtBQUNBNUcsUUFBQUEsR0FBRyxDQUFDUyxRQUFKLENBQWErRyxhQUFiLEVBQTRCQyxXQUE1QjtBQUNBckcsUUFBQUEsR0FBRyxDQUFDVixHQUFHLEdBQUcsV0FBTixHQUFvQjhHLGFBQWEsQ0FBQ3RDLE9BQWQsQ0FBc0IvRSxPQUFPLENBQUNDLEdBQVIsRUFBdEIsRUFBcUMsRUFBckMsQ0FBcEIsR0FBK0QsT0FBL0QsR0FBeUVxSCxXQUFXLENBQUN2QyxPQUFaLENBQW9CL0UsT0FBTyxDQUFDQyxHQUFSLEVBQXBCLEVBQW1DLEVBQW5DLENBQTFFLENBQUg7QUFDRCxPQWhEaUIsQ0FrRGxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsVUFBSWpCLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBY3JCLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBd0IsV0FBeEIsQ0FBZCxDQUFKLEVBQXlEO0FBQ3ZELFlBQUlzSCxZQUFZLEdBQUd6SSxJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLFdBQXpCLENBQW5CO0FBQ0EsWUFBSXVILFVBQVUsR0FBRzFJLElBQUksQ0FBQ3VCLElBQUwsQ0FBVW9HLE1BQVYsRUFBa0IsVUFBbEIsQ0FBakI7QUFDQTVHLFFBQUFBLEdBQUcsQ0FBQ1MsUUFBSixDQUFhaUgsWUFBYixFQUEyQkMsVUFBM0I7QUFDQXZHLFFBQUFBLEdBQUcsQ0FBQ1YsR0FBRyxHQUFHLFdBQU4sR0FBb0JnSCxZQUFZLENBQUN4QyxPQUFiLENBQXFCL0UsT0FBTyxDQUFDQyxHQUFSLEVBQXJCLEVBQW9DLEVBQXBDLENBQXBCLEdBQThELE9BQTlELEdBQXdFdUgsVUFBVSxDQUFDekMsT0FBWCxDQUFtQi9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFuQixFQUFrQyxFQUFsQyxDQUF6RSxDQUFIO0FBQ0Q7O0FBRUQsVUFBSWpCLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBY3JCLElBQUksQ0FBQ3VCLElBQUwsQ0FBVUwsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBd0IsWUFBeEIsQ0FBZCxDQUFKLEVBQTBEO0FBQ3hELFlBQUlrSCxRQUFRLEdBQUdySSxJQUFJLENBQUN1QixJQUFMLENBQVVMLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLFlBQXpCLENBQWY7QUFDQSxZQUFJbUgsTUFBTSxHQUFHdEksSUFBSSxDQUFDdUIsSUFBTCxDQUFVb0csTUFBVixFQUFrQixXQUFsQixDQUFiO0FBQ0E1RyxRQUFBQSxHQUFHLENBQUNTLFFBQUosQ0FBYTZHLFFBQWIsRUFBdUJDLE1BQXZCO0FBQ0FuRyxRQUFBQSxHQUFHLENBQUNWLEdBQUcsR0FBRyxXQUFOLEdBQW9CNEcsUUFBUSxDQUFDcEMsT0FBVCxDQUFpQi9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFqQixFQUFnQyxFQUFoQyxDQUFwQixHQUEwRCxPQUExRCxHQUFvRW1ILE1BQU0sQ0FBQ3JDLE9BQVAsQ0FBZS9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFmLEVBQThCLEVBQTlCLENBQXJFLENBQUg7QUFDRDtBQUlGOztBQUNEVCxJQUFBQSxJQUFJLENBQUNzSCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsUUFBSXhFLEVBQUUsR0FBRyxFQUFUOztBQUNBLFFBQUk5QyxJQUFJLENBQUN3QixVQUFULEVBQXFCO0FBQ25CLFVBQUksQ0FBQ3hCLElBQUksQ0FBQ2tFLElBQUwsQ0FBVStELFFBQVYsQ0FBbUIsZ0NBQW5CLENBQUwsRUFDRWpJLElBQUksQ0FBQ2tFLElBQUwsQ0FBVW5FLElBQVYsQ0FBZSxnQ0FBZjtBQUNGK0MsTUFBQUEsRUFBRSxHQUFHOUMsSUFBSSxDQUFDa0UsSUFBTCxDQUFVckQsSUFBVixDQUFlLEtBQWYsQ0FBTDtBQUNELEtBSkQsTUFLSztBQUNIaUMsTUFBQUEsRUFBRSxHQUFHLHNCQUFMO0FBQ0Q7O0FBQ0QsUUFBSTlDLElBQUksQ0FBQ2tJLFFBQUwsS0FBa0IsSUFBbEIsSUFBMEJwRixFQUFFLEtBQUs5QyxJQUFJLENBQUNrSSxRQUExQyxFQUFvRDtBQUNsRGxJLE1BQUFBLElBQUksQ0FBQ2tJLFFBQUwsR0FBZ0JwRixFQUFoQjtBQUNBLFlBQU1vRixRQUFRLEdBQUc1SSxJQUFJLENBQUN1QixJQUFMLENBQVVvRyxNQUFWLEVBQWtCLGFBQWxCLENBQWpCO0FBQ0F6SCxNQUFBQSxFQUFFLENBQUM4RCxhQUFILENBQWlCNEUsUUFBakIsRUFBMkJwRixFQUEzQixFQUErQixNQUEvQjtBQUNBOUMsTUFBQUEsSUFBSSxDQUFDNkcsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFJc0IsU0FBUyxHQUFHbEIsTUFBTSxDQUFDMUIsT0FBUCxDQUFlL0UsT0FBTyxDQUFDQyxHQUFSLEVBQWYsRUFBOEIsRUFBOUIsQ0FBaEI7O0FBQ0EsVUFBSTBILFNBQVMsQ0FBQ25DLElBQVYsTUFBb0IsRUFBeEIsRUFBNEI7QUFBQ21DLFFBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQWlCOztBQUM5QzFHLE1BQUFBLEdBQUcsQ0FBQ1YsR0FBRyxHQUFHLDBCQUFOLEdBQW1Db0gsU0FBcEMsQ0FBSDtBQUNELEtBUkQsTUFTSztBQUNIbkksTUFBQUEsSUFBSSxDQUFDNkcsT0FBTCxHQUFlLEtBQWY7QUFDQXBGLE1BQUFBLEdBQUcsQ0FBQ1YsR0FBRyxHQUFHLHdCQUFQLENBQUg7QUFDRDtBQUNGLEdBL0dELENBZ0hBLE9BQU15QyxDQUFOLEVBQVM7QUFDUGpFLElBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JtQixJQUF4QixDQUE2QnJCLE9BQTdCLEVBQXFDbUUsQ0FBckM7O0FBQ0EzQixJQUFBQSxXQUFXLENBQUM2QixNQUFaLENBQW1CM0QsSUFBbkIsQ0FBd0IsdUJBQXVCeUQsQ0FBL0M7QUFDRDtBQUNGLEMsQ0FFRDs7O0FBQ08sU0FBU2lELGVBQVQsQ0FBeUIxRixHQUF6QixFQUE4QmMsV0FBOUIsRUFBMkNnRSxVQUEzQyxFQUF1RGlCLEtBQXZELEVBQThEekgsT0FBOUQsRUFBdUU7QUFDNUUsTUFBSTtBQUNGLFVBQU1HLEVBQUUsR0FBR0QsT0FBTyxDQUFDLElBQUQsQ0FBbEI7O0FBQ0EsVUFBTW1CLElBQUksR0FBR25CLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JtQixJQUFyQzs7QUFDQUEsSUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLDBCQUFULENBQUo7QUFFQSxRQUFJK0ksTUFBSjs7QUFBWSxRQUFJO0FBQUVBLE1BQUFBLE1BQU0sR0FBRzdJLE9BQU8sQ0FBQyxhQUFELENBQWhCO0FBQWlDLEtBQXZDLENBQXdDLE9BQU9pRSxDQUFQLEVBQVU7QUFBRTRFLE1BQUFBLE1BQU0sR0FBRyxRQUFUO0FBQW1COztBQUNuRixRQUFJNUksRUFBRSxDQUFDbUIsVUFBSCxDQUFjeUgsTUFBZCxDQUFKLEVBQTJCO0FBQ3pCMUgsTUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLHNCQUFULENBQUo7QUFDRCxLQUZELE1BR0s7QUFDSHFCLE1BQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBUyw4QkFBVCxDQUFKO0FBQ0Q7O0FBRUQsV0FBTyxJQUFJZ0osT0FBSixDQUFZLENBQUM5SCxPQUFELEVBQVUrSCxNQUFWLEtBQXFCO0FBQ3RDLFlBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCN0gsUUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFTLGFBQVQsQ0FBSjtBQUNBa0IsUUFBQUEsT0FBTztBQUNSLE9BSEQ7O0FBS0EsVUFBSWlJLElBQUksR0FBRztBQUFFL0gsUUFBQUEsR0FBRyxFQUFFb0YsVUFBUDtBQUFtQjRDLFFBQUFBLE1BQU0sRUFBRSxJQUEzQjtBQUFpQ0MsUUFBQUEsS0FBSyxFQUFFLE1BQXhDO0FBQWdEQyxRQUFBQSxRQUFRLEVBQUU7QUFBMUQsT0FBWDtBQUNBQyxNQUFBQSxZQUFZLENBQUM3SCxHQUFELEVBQU1xSCxNQUFOLEVBQWN0QixLQUFkLEVBQXFCMEIsSUFBckIsRUFBMkIzRyxXQUEzQixFQUF3Q3hDLE9BQXhDLENBQVosQ0FBNkR3SixJQUE3RCxDQUNFLFlBQVc7QUFBRU4sUUFBQUEsV0FBVztBQUFJLE9BRDlCLEVBRUUsVUFBU08sTUFBVCxFQUFpQjtBQUFFUixRQUFBQSxNQUFNLENBQUNRLE1BQUQsQ0FBTjtBQUFnQixPQUZyQztBQUlELEtBWE0sQ0FBUDtBQVlELEdBekJELENBMEJBLE9BQU10RixDQUFOLEVBQVM7QUFDUEMsSUFBQUEsT0FBTyxDQUFDaEMsR0FBUixDQUFZLEdBQVo7O0FBQ0FsQyxJQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCbUIsSUFBeEIsQ0FBNkJyQixPQUE3QixFQUFxQ21FLENBQXJDOztBQUNBM0IsSUFBQUEsV0FBVyxDQUFDNkIsTUFBWixDQUFtQjNELElBQW5CLENBQXdCLHNCQUFzQnlELENBQTlDO0FBQ0FnRCxJQUFBQSxRQUFRO0FBQ1Q7QUFDRixDLENBRUQ7OztTQUNzQm9DLFk7Ozs7Ozs7MEJBQWYsa0JBQTZCN0gsR0FBN0IsRUFBa0M0RixPQUFsQyxFQUEyQ0csS0FBM0MsRUFBa0QwQixJQUFsRCxFQUF3RDNHLFdBQXhELEVBQXFFeEMsT0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUg7QUFDTTBKLFVBQUFBLGVBSEgsR0FHcUIsQ0FBQyxlQUFELEVBQWtCLGVBQWxCLEVBQW1DLGNBQW5DLEVBQW1ELGtCQUFuRCxFQUF1RSx3QkFBdkUsRUFBaUcsOEJBQWpHLEVBQWlJLE9BQWpJLEVBQTBJLE9BQTFJLEVBQW1KLGVBQW5KLEVBQW9LLHFCQUFwSyxFQUEyTCxlQUEzTCxFQUE0TSx1QkFBNU0sQ0FIckI7QUFJQ0MsVUFBQUEsVUFKRCxHQUljRCxlQUpkO0FBS0NFLFVBQUFBLEtBTEQsR0FLUzFKLE9BQU8sQ0FBQyxPQUFELENBTGhCO0FBTUcySixVQUFBQSxVQU5ILEdBTWdCM0osT0FBTyxDQUFDLGFBQUQsQ0FOdkI7QUFPR2tDLFVBQUFBLEdBUEgsR0FPU2xDLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JrQyxHQVBqQztBQVFIZixVQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVUsdUJBQVYsQ0FBSjtBQVJHO0FBQUEsaUJBU0csSUFBSWdKLE9BQUosQ0FBWSxDQUFDOUgsT0FBRCxFQUFVK0gsTUFBVixLQUFxQjtBQUNyQzVILFlBQUFBLElBQUksQ0FBQ3JCLE9BQUQsRUFBVSxhQUFZc0gsT0FBUSxFQUE5QixDQUFKO0FBQ0FqRyxZQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsV0FBVXlILEtBQU0sRUFBM0IsQ0FBSjtBQUNBcEcsWUFBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFXLFVBQVM2QixJQUFJLENBQUNJLFNBQUwsQ0FBZWtILElBQWYsQ0FBcUIsRUFBekMsQ0FBSjtBQUNBLGdCQUFJVyxLQUFLLEdBQUdELFVBQVUsQ0FBQ3ZDLE9BQUQsRUFBVUcsS0FBVixFQUFpQjBCLElBQWpCLENBQXRCO0FBQ0FXLFlBQUFBLEtBQUssQ0FBQ0MsRUFBTixDQUFTLE9BQVQsRUFBa0IsQ0FBQzdFLElBQUQsRUFBTzhFLE1BQVAsS0FBa0I7QUFDbEMzSSxjQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsWUFBRCxHQUFla0YsSUFBekIsQ0FBSjs7QUFDQSxrQkFBR0EsSUFBSSxLQUFLLENBQVosRUFBZTtBQUFFaEUsZ0JBQUFBLE9BQU8sQ0FBQyxDQUFELENBQVA7QUFBWSxlQUE3QixNQUNLO0FBQUVzQixnQkFBQUEsV0FBVyxDQUFDNkIsTUFBWixDQUFtQjNELElBQW5CLENBQXlCLElBQUl1SixLQUFKLENBQVUvRSxJQUFWLENBQXpCO0FBQTRDaEUsZ0JBQUFBLE9BQU8sQ0FBQyxDQUFELENBQVA7QUFBWTtBQUNoRSxhQUpEO0FBS0E0SSxZQUFBQSxLQUFLLENBQUNDLEVBQU4sQ0FBUyxPQUFULEVBQW1CRyxLQUFELElBQVc7QUFDM0I3SSxjQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsVUFBWCxDQUFKO0FBQ0F3QyxjQUFBQSxXQUFXLENBQUM2QixNQUFaLENBQW1CM0QsSUFBbkIsQ0FBd0J3SixLQUF4QjtBQUNBaEosY0FBQUEsT0FBTyxDQUFDLENBQUQsQ0FBUDtBQUNELGFBSkQ7QUFLQTRJLFlBQUFBLEtBQUssQ0FBQ0ssTUFBTixDQUFhSixFQUFiLENBQWdCLE1BQWhCLEVBQXlCeEQsSUFBRCxJQUFVO0FBQ2hDLGtCQUFJNkQsR0FBRyxHQUFHN0QsSUFBSSxDQUFDN0MsUUFBTCxHQUFnQndDLE9BQWhCLENBQXdCLFdBQXhCLEVBQXFDLEdBQXJDLEVBQTBDUyxJQUExQyxFQUFWO0FBQ0F0RixjQUFBQSxJQUFJLENBQUNyQixPQUFELEVBQVcsR0FBRW9LLEdBQUksRUFBakIsQ0FBSjs7QUFDQSxrQkFBSTdELElBQUksSUFBSUEsSUFBSSxDQUFDN0MsUUFBTCxHQUFnQmtCLEtBQWhCLENBQXNCLDJCQUF0QixDQUFaLEVBQWdFO0FBQzlEMUQsZ0JBQUFBLE9BQU8sQ0FBQyxDQUFELENBQVA7QUFDRCxlQUZELE1BR0s7QUFDSCxvQkFBSXlJLFVBQVUsQ0FBQ1UsSUFBWCxDQUFnQixVQUFTQyxDQUFULEVBQVk7QUFBRSx5QkFBTy9ELElBQUksQ0FBQ2xELE9BQUwsQ0FBYWlILENBQWIsS0FBbUIsQ0FBMUI7QUFBOEIsaUJBQTVELENBQUosRUFBbUU7QUFDakVGLGtCQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ2xFLE9BQUosQ0FBWSxPQUFaLEVBQXFCLEVBQXJCLENBQU47QUFDQWtFLGtCQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ2xFLE9BQUosQ0FBWSxPQUFaLEVBQXFCLEVBQXJCLENBQU47QUFDQWtFLGtCQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ2xFLE9BQUosQ0FBWS9FLE9BQU8sQ0FBQ0MsR0FBUixFQUFaLEVBQTJCLEVBQTNCLEVBQStCdUYsSUFBL0IsRUFBTjs7QUFDQSxzQkFBSXlELEdBQUcsQ0FBQ3hCLFFBQUosQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDekJwRyxvQkFBQUEsV0FBVyxDQUFDNkIsTUFBWixDQUFtQjNELElBQW5CLENBQXdCZ0IsR0FBRyxHQUFHMEksR0FBRyxDQUFDbEUsT0FBSixDQUFZLGFBQVosRUFBMkIsRUFBM0IsQ0FBOUI7QUFDQWtFLG9CQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ2xFLE9BQUosQ0FBWSxPQUFaLEVBQXNCLEdBQUUwRCxLQUFLLENBQUNXLEdBQU4sQ0FBVSxPQUFWLENBQW1CLEVBQTNDLENBQU47QUFDRDs7QUFDRG5JLGtCQUFBQSxHQUFHLENBQUUsR0FBRVYsR0FBSSxHQUFFMEksR0FBSSxFQUFkLENBQUg7QUFDRDtBQUNGO0FBQ0YsYUFsQkQ7QUFtQkFOLFlBQUFBLEtBQUssQ0FBQ1UsTUFBTixDQUFhVCxFQUFiLENBQWdCLE1BQWhCLEVBQXlCeEQsSUFBRCxJQUFVO0FBQ2hDbEYsY0FBQUEsSUFBSSxDQUFDckIsT0FBRCxFQUFXLGtCQUFELEdBQXFCdUcsSUFBL0IsQ0FBSjtBQUNBLGtCQUFJNkQsR0FBRyxHQUFHN0QsSUFBSSxDQUFDN0MsUUFBTCxHQUFnQndDLE9BQWhCLENBQXdCLFdBQXhCLEVBQXFDLEdBQXJDLEVBQTBDUyxJQUExQyxFQUFWO0FBQ0Esa0JBQUk4RCxXQUFXLEdBQUcseUJBQWxCO0FBQ0Esa0JBQUk3QixRQUFRLEdBQUd3QixHQUFHLENBQUN4QixRQUFKLENBQWE2QixXQUFiLENBQWY7O0FBQ0Esa0JBQUksQ0FBQzdCLFFBQUwsRUFBZTtBQUNieEUsZ0JBQUFBLE9BQU8sQ0FBQ2hDLEdBQVIsQ0FBYSxHQUFFVixHQUFJLElBQUdrSSxLQUFLLENBQUNXLEdBQU4sQ0FBVSxPQUFWLENBQW1CLElBQUdILEdBQUksRUFBaEQ7QUFDRDtBQUNGLGFBUkQ7QUFTRCxXQTNDSyxDQVRIOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBdURIbEssVUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3Qm1CLElBQXhCLENBQTZCckIsT0FBN0I7O0FBQ0F3QyxVQUFBQSxXQUFXLENBQUM2QixNQUFaLENBQW1CM0QsSUFBbkIsQ0FBd0IsK0JBQXhCO0FBQ0F5RyxVQUFBQSxRQUFROztBQXpETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQThEQSxTQUFTL0UsR0FBVCxDQUFhc0ksQ0FBYixFQUFnQjtBQUNyQnhLLEVBQUFBLE9BQU8sQ0FBQyxVQUFELENBQVAsQ0FBb0J5SyxRQUFwQixDQUE2QnhKLE9BQU8sQ0FBQ2dKLE1BQXJDLEVBQTZDLENBQTdDOztBQUNBLE1BQUk7QUFDRmhKLElBQUFBLE9BQU8sQ0FBQ2dKLE1BQVIsQ0FBZVMsU0FBZjtBQUNELEdBRkQsQ0FHQSxPQUFNekcsQ0FBTixFQUFTLENBQUU7O0FBQ1hoRCxFQUFBQSxPQUFPLENBQUNnSixNQUFSLENBQWVVLEtBQWYsQ0FBcUJILENBQXJCO0FBQ0F2SixFQUFBQSxPQUFPLENBQUNnSixNQUFSLENBQWVVLEtBQWYsQ0FBcUIsSUFBckI7QUFDRDs7QUFFTSxTQUFTeEosSUFBVCxDQUFjckIsT0FBZCxFQUF1QjBLLENBQXZCLEVBQTBCO0FBQy9CLE1BQUkxSyxPQUFPLENBQUM4SyxPQUFSLElBQW1CLEtBQXZCLEVBQThCO0FBQzVCNUssSUFBQUEsT0FBTyxDQUFDLFVBQUQsQ0FBUCxDQUFvQnlLLFFBQXBCLENBQTZCeEosT0FBTyxDQUFDZ0osTUFBckMsRUFBNkMsQ0FBN0M7O0FBQ0EsUUFBSTtBQUNGaEosTUFBQUEsT0FBTyxDQUFDZ0osTUFBUixDQUFlUyxTQUFmO0FBQ0QsS0FGRCxDQUdBLE9BQU16RyxDQUFOLEVBQVMsQ0FBRTs7QUFDWGhELElBQUFBLE9BQU8sQ0FBQ2dKLE1BQVIsQ0FBZVUsS0FBZixDQUFzQixhQUFZSCxDQUFFLEVBQXBDO0FBQ0F2SixJQUFBQSxPQUFPLENBQUNnSixNQUFSLENBQWVVLEtBQWYsQ0FBcUIsSUFBckI7QUFDRDtBQUNGOztBQUVNLFNBQVNsSixPQUFULEdBQW1CO0FBQ3hCLE1BQUlpSSxLQUFLLEdBQUcxSixPQUFPLENBQUMsT0FBRCxDQUFuQjs7QUFDQSxNQUFJNkssTUFBTSxHQUFJLEVBQWQ7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHOUssT0FBTyxDQUFDLElBQUQsQ0FBUCxDQUFjOEssUUFBZCxFQUFqQjs7QUFDQSxNQUFJQSxRQUFRLElBQUksUUFBaEIsRUFBMEI7QUFBRUQsSUFBQUEsTUFBTSxHQUFJLFVBQVY7QUFBcUIsR0FBakQsTUFDSztBQUFFQSxJQUFBQSxNQUFNLEdBQUksVUFBVjtBQUFxQjs7QUFDNUIsU0FBUSxHQUFFbkIsS0FBSyxDQUFDcUIsS0FBTixDQUFZRixNQUFaLENBQW9CLEdBQTlCO0FBQ0Q7O0FBRU0sU0FBUzFJLFlBQVQsQ0FBc0JYLEdBQXRCLEVBQTJCWCxVQUEzQixFQUF1Q21LLGFBQXZDLEVBQXNEO0FBQzNELFFBQU1qTCxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLFFBQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDLElBQUQsQ0FBbEI7O0FBRUEsTUFBSW9LLENBQUMsR0FBRyxFQUFSO0FBQ0EsTUFBSWEsVUFBVSxHQUFHbEwsSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUEyQixzQkFBM0IsRUFBbURMLFVBQW5ELENBQWpCO0FBQ0EsTUFBSXFLLFNBQVMsR0FBSWpMLEVBQUUsQ0FBQ21CLFVBQUgsQ0FBYzZKLFVBQVUsR0FBQyxlQUF6QixLQUE2Q3RKLElBQUksQ0FBQ0MsS0FBTCxDQUFXM0IsRUFBRSxDQUFDNEIsWUFBSCxDQUFnQm9KLFVBQVUsR0FBQyxlQUEzQixFQUE0QyxPQUE1QyxDQUFYLENBQTdDLElBQWlILEVBQWxJO0FBQ0FiLEVBQUFBLENBQUMsQ0FBQ2UsYUFBRixHQUFrQkQsU0FBUyxDQUFDRSxPQUE1QjtBQUNBaEIsRUFBQUEsQ0FBQyxDQUFDaUIsU0FBRixHQUFjSCxTQUFTLENBQUNHLFNBQXhCOztBQUNBLE1BQUlqQixDQUFDLENBQUNpQixTQUFGLElBQWUvSyxTQUFuQixFQUE4QjtBQUM1QjhKLElBQUFBLENBQUMsQ0FBQ2tCLE9BQUYsR0FBYSxZQUFiO0FBQ0QsR0FGRCxNQUdLO0FBQ0gsUUFBSSxDQUFDLENBQUQsSUFBTWxCLENBQUMsQ0FBQ2lCLFNBQUYsQ0FBWWxJLE9BQVosQ0FBb0IsV0FBcEIsQ0FBVixFQUE0QztBQUMxQ2lILE1BQUFBLENBQUMsQ0FBQ2tCLE9BQUYsR0FBYSxZQUFiO0FBQ0QsS0FGRCxNQUdLO0FBQ0hsQixNQUFBQSxDQUFDLENBQUNrQixPQUFGLEdBQWEsV0FBYjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUMsV0FBVyxHQUFHeEwsSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUEyQixzQkFBM0IsQ0FBbEI7QUFDQSxNQUFJc0ssVUFBVSxHQUFJdkwsRUFBRSxDQUFDbUIsVUFBSCxDQUFjbUssV0FBVyxHQUFDLGVBQTFCLEtBQThDNUosSUFBSSxDQUFDQyxLQUFMLENBQVczQixFQUFFLENBQUM0QixZQUFILENBQWdCMEosV0FBVyxHQUFDLGVBQTVCLEVBQTZDLE9BQTdDLENBQVgsQ0FBOUMsSUFBbUgsRUFBckk7QUFDQW5CLEVBQUFBLENBQUMsQ0FBQ3FCLGNBQUYsR0FBbUJELFVBQVUsQ0FBQ0osT0FBOUI7QUFFQSxNQUFJekUsT0FBTyxHQUFHNUcsSUFBSSxDQUFDaUIsT0FBTCxDQUFhQyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUEyQiwwQkFBM0IsQ0FBZDtBQUNBLE1BQUl3SyxNQUFNLEdBQUl6TCxFQUFFLENBQUNtQixVQUFILENBQWN1RixPQUFPLEdBQUMsZUFBdEIsS0FBMENoRixJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLEVBQUUsQ0FBQzRCLFlBQUgsQ0FBZ0I4RSxPQUFPLEdBQUMsZUFBeEIsRUFBeUMsT0FBekMsQ0FBWCxDQUExQyxJQUEyRyxFQUF6SDtBQUNBeUQsRUFBQUEsQ0FBQyxDQUFDdUIsVUFBRixHQUFlRCxNQUFNLENBQUM3QyxNQUFQLENBQWN1QyxPQUE3QjtBQUVBLE1BQUlRLE9BQU8sR0FBRzdMLElBQUksQ0FBQ2lCLE9BQUwsQ0FBYUMsT0FBTyxDQUFDQyxHQUFSLEVBQWIsRUFBNEIsMEJBQTVCLENBQWQ7QUFDQSxNQUFJMkssTUFBTSxHQUFJNUwsRUFBRSxDQUFDbUIsVUFBSCxDQUFjd0ssT0FBTyxHQUFDLGVBQXRCLEtBQTBDakssSUFBSSxDQUFDQyxLQUFMLENBQVczQixFQUFFLENBQUM0QixZQUFILENBQWdCK0osT0FBTyxHQUFDLGVBQXhCLEVBQXlDLE9BQXpDLENBQVgsQ0FBMUMsSUFBMkcsRUFBekg7QUFDQXhCLEVBQUFBLENBQUMsQ0FBQzBCLFVBQUYsR0FBZUQsTUFBTSxDQUFDRSxZQUF0Qjs7QUFFQSxNQUFJM0IsQ0FBQyxDQUFDMEIsVUFBRixJQUFnQnhMLFNBQXBCLEVBQStCO0FBQzdCLFFBQUlzTCxPQUFPLEdBQUc3TCxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTRCLHdCQUF1QkwsVUFBVywyQkFBOUQsQ0FBZDtBQUNBLFFBQUlnTCxNQUFNLEdBQUk1TCxFQUFFLENBQUNtQixVQUFILENBQWN3SyxPQUFPLEdBQUMsZUFBdEIsS0FBMENqSyxJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLEVBQUUsQ0FBQzRCLFlBQUgsQ0FBZ0IrSixPQUFPLEdBQUMsZUFBeEIsRUFBeUMsT0FBekMsQ0FBWCxDQUExQyxJQUEyRyxFQUF6SDtBQUNBeEIsSUFBQUEsQ0FBQyxDQUFDMEIsVUFBRixHQUFlRCxNQUFNLENBQUNFLFlBQXRCO0FBQ0Q7O0FBRUQsTUFBSUMsYUFBYSxHQUFHLEVBQXBCOztBQUNDLE1BQUloQixhQUFhLElBQUkxSyxTQUFqQixJQUE4QjBLLGFBQWEsSUFBSSxPQUFuRCxFQUE0RDtBQUMzRCxRQUFJaUIsYUFBYSxHQUFHLEVBQXBCOztBQUNBLFFBQUlqQixhQUFhLElBQUksT0FBckIsRUFBOEI7QUFDNUJpQixNQUFBQSxhQUFhLEdBQUdsTSxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTJCLG9CQUEzQixDQUFoQjtBQUNEOztBQUNELFFBQUk4SixhQUFhLElBQUksU0FBckIsRUFBZ0M7QUFDOUJpQixNQUFBQSxhQUFhLEdBQUdsTSxJQUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTJCLDRCQUEzQixDQUFoQjtBQUNEOztBQUNELFFBQUlnTCxZQUFZLEdBQUlqTSxFQUFFLENBQUNtQixVQUFILENBQWM2SyxhQUFhLEdBQUMsZUFBNUIsS0FBZ0R0SyxJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLEVBQUUsQ0FBQzRCLFlBQUgsQ0FBZ0JvSyxhQUFhLEdBQUMsZUFBOUIsRUFBK0MsT0FBL0MsQ0FBWCxDQUFoRCxJQUF1SCxFQUEzSTtBQUNBN0IsSUFBQUEsQ0FBQyxDQUFDK0IsZ0JBQUYsR0FBcUJELFlBQVksQ0FBQ2QsT0FBbEM7QUFDQVksSUFBQUEsYUFBYSxHQUFHLE9BQU9oQixhQUFQLEdBQXVCLElBQXZCLEdBQThCWixDQUFDLENBQUMrQixnQkFBaEQ7QUFDRDs7QUFDRCxTQUFPM0ssR0FBRyxHQUFHLHNCQUFOLEdBQStCNEksQ0FBQyxDQUFDZSxhQUFqQyxHQUFpRCxZQUFqRCxHQUFnRWYsQ0FBQyxDQUFDdUIsVUFBbEUsR0FBK0UsR0FBL0UsR0FBcUZ2QixDQUFDLENBQUNrQixPQUF2RixHQUFpRyx3QkFBakcsR0FBNEhsQixDQUFDLENBQUMwQixVQUE5SCxHQUEySSxhQUEzSSxHQUEySjFCLENBQUMsQ0FBQ3FCLGNBQTdKLEdBQThLTyxhQUFyTDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuICB2YXIgdGhpc1ZhcnMgPSB7fVxuICB2YXIgdGhpc09wdGlvbnMgPSB7fVxuICB2YXIgcGx1Z2luID0ge31cblxuICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzID0gW11cbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMucHVzaCgnd2VicGFjayBjb25maWc6IGZyYW1ld29yayBwYXJhbWV0ZXIgb24gZXh0LXdlYnBhY2stcGx1Z2luIGlzIG5vdCBkZWZpbmVkIC0gdmFsdWVzOiByZWFjdCwgYW5ndWxhciwgZXh0anMnKVxuICAgIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgICByZXR1cm4gcGx1Z2luXG4gIH1cblxuICBjb25zdCB2YWxpZGF0ZU9wdGlvbnMgPSByZXF1aXJlKCdzY2hlbWEtdXRpbHMnKVxuICB2YWxpZGF0ZU9wdGlvbnMocmVxdWlyZShgLi8ke29wdGlvbnMuZnJhbWV3b3JrfVV0aWxgKS5nZXRWYWxpZGF0ZU9wdGlvbnMoKSwgb3B0aW9ucywgJycpXG5cbiAgLy9maXggc2VuY2hhIGNtZCBubyBqZXR0eSBzZXJ2ZXIgcHJvYmxlbVxuICAvLyB2YXIgd2F0Y2hGaWxlID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZC9kaXN0L2FudC9idWlsZC9hcHAvd2F0Y2gtaW1wbC54bWxgKVxuICAvLyBsb2d2KG9wdGlvbnMsIGBtb2RpZnkgJHt3YXRjaEZpbGV9YClcbiAgLy8gdmFyIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMod2F0Y2hGaWxlLCAndXRmLTgnKTtcbiAgLy8gdmFyIGlwID0gJ3dlYlNlcnZlclJlZklkPVwiYXBwLndlYi5zZXJ2ZXJcIic7XG4gIC8vIHZhciBuZXdWYWx1ZSA9IGRhdGEucmVwbGFjZShuZXcgUmVnRXhwKGlwKSwgJycpO1xuICAvLyBmcy53cml0ZUZpbGVTeW5jKHdhdGNoRmlsZSwgbmV3VmFsdWUsICd1dGYtOCcpO1xuXG4gIHRoaXNWYXJzID0gcmVxdWlyZShgLi8ke29wdGlvbnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0VmFycygpXG4gIHRoaXNWYXJzLmZyYW1ld29yayA9IG9wdGlvbnMuZnJhbWV3b3JrXG4gIHN3aXRjaCh0aGlzVmFycy5mcmFtZXdvcmspIHtcbiAgICBjYXNlICdleHRqcyc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JlYWN0JzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXJlYWN0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW5ndWxhcic6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1hbmd1bGFyLXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICB9XG5cbiAgLy9maXggZmFzaGlvbiBkaXN0IHByb2JsZW1cbiAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICB2YXIgdG9GYXNoaW9uRGlzdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWQvZGlzdC9qcy9ub2RlX21vZHVsZXMvZmFzaGlvbi9kaXN0YClcbiAgbG9ndihvcHRpb25zLCBgdG9GYXNoaW9uRGlzdCAke3RvRmFzaGlvbkRpc3R9YClcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHRvRmFzaGlvbkRpc3QpKSB7XG4gICAgbG9ndihvcHRpb25zLCBgY29weWApXG4gICAgdmFyIGZyb21GYXNoaW9uRGlzdCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzL0BzZW5jaGEvJyArIHRoaXNWYXJzLnBsdWdpbk5hbWUgKyAnL2Zhc2hpb24vZGlzdC8nKVxuICAgIGZzeC5jb3B5U3luYyhmcm9tRmFzaGlvbkRpc3QsIHRvRmFzaGlvbkRpc3QpXG4gIH1cbiAgZWxzZSB7XG4gICAgbG9ndihvcHRpb25zLCBgbm8gY29weSBvZiBmYXNoaW9uYClcbiAgfVxuXG4gIHRoaXNWYXJzLmFwcCA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRBcHAoKVxuICBsb2d2KG9wdGlvbnMsIGBwbHVnaW5OYW1lIC0gJHt0aGlzVmFycy5wbHVnaW5OYW1lfWApXG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNWYXJzLmFwcCAtICR7dGhpc1ZhcnMuYXBwfWApXG5cbiAgY29uc3QgcmMgPSAoZnMuZXhpc3RzU3luYyhgLmV4dC0ke3RoaXNWYXJzLmZyYW1ld29ya31yY2ApICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCwgJ3V0Zi04JykpIHx8IHt9KVxuICB0aGlzT3B0aW9ucyA9IHsgLi4ucmVxdWlyZShgLi8ke3RoaXNWYXJzLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdE9wdGlvbnMoKSwgLi4ub3B0aW9ucywgLi4ucmMgfVxuICBsb2d2KG9wdGlvbnMsIGB0aGlzT3B0aW9ucyAtICR7SlNPTi5zdHJpbmdpZnkodGhpc09wdGlvbnMpfWApXG4gIGlmICh0aGlzT3B0aW9ucy5lbnZpcm9ubWVudCA9PSAncHJvZHVjdGlvbicpIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gdHJ1ZX1cbiAgZWxzZSBcbiAgICB7dGhpc1ZhcnMucHJvZHVjdGlvbiA9IGZhbHNlfVxuICBsb2cocmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldFZlcnNpb25zKHRoaXNWYXJzLmFwcCwgdGhpc1ZhcnMucGx1Z2luTmFtZSwgdGhpc1ZhcnMuZnJhbWV3b3JrKSlcbiAgbG9nKHRoaXNWYXJzLmFwcCArICdCdWlsZGluZyBmb3IgJyArIHRoaXNPcHRpb25zLmVudmlyb25tZW50KVxuXG4gIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgcGx1Z2luLm9wdGlvbnMgPSB0aGlzT3B0aW9uc1xuICByZXR1cm4gcGx1Z2luXG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxhdGlvbihjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsICdGVU5DVElPTiBfY29tcGlsYXRpb24nKVxuXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgdmFyIGV4dENvbXBvbmVudHMgPSBbXVxuICAgIHZhciB1c2VkRXh0Q29tcG9uZW50cyA9IFtdXG4gICAgY29uc3QgZXh0QW5ndWxhck1vZGVybkZvbGRlciA9ICdleHQtYW5ndWxhci1tb2Rlcm4tcHJvZCdcbiAgICBjb25zdCBleHRBbmd1bGFyTW9kZXJuTW9kdWxlID0gJ2V4dC1hbmd1bGFyLW1vZGVybi5tb2R1bGUnXG5cbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsIGBleHQtY29tcGlsYXRpb246IHByb2R1Y3Rpb24gaXMgYCArIHZhcnMucHJvZHVjdGlvbilcblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuICAgICAgICBjb25zdCBwYWNrYWdlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuJylcbiAgICAgICAgdmFyIGZpbGVzID0gZnN4LnJlYWRkaXJTeW5jKGAke3BhY2thZ2VQYXRofS9saWJgKVxuICAgICAgICBmaWxlcy5mb3JFYWNoKChmaWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGlmIChmaWxlTmFtZSAmJiBmaWxlTmFtZS5zdWJzdHIoMCwgNCkgPT0gJ2V4dC0nKSB7XG4gICAgICAgICAgICB2YXIgZW5kID0gZmlsZU5hbWUuc3Vic3RyKDQpLmluZGV4T2YoJy5jb21wb25lbnQnKVxuICAgICAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICAgIGV4dENvbXBvbmVudHMucHVzaChmaWxlTmFtZS5zdWJzdHJpbmcoNCwgZW5kICsgNCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHJld3JpdGUgPSBmYWxzZVxuICAgICAgICAgIGNvbnN0IGFwcE1vZHVsZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hcHAvYXBwLm1vZHVsZS50cycpXG4gICAgICAgICAgdmFyIGpzID0gZnN4LnJlYWRGaWxlU3luYyhhcHBNb2R1bGVQYXRoKS50b1N0cmluZygpXG4gICAgICAgICAgdmFyIGkgPSBqcy5pbmRleE9mKCdAc2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybicpXG4gICAgICAgICAgaSA9IGpzLnN1YnN0cmluZygwLCBpKS5sYXN0SW5kZXhPZignaW1wb3J0JylcblxuICAgICAgICAgIGlmIChqcy5zdWJzdHIoaSAtIDMsIDMpICE9PSAnLy8gJykge1xuICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaSkgKyAnXFxuIC8vICcgKyBqcy5zdWJzdHJpbmcoaSlcbiAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcGF0aFRvRXh0QW5ndWxhck1vZGVybiA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC8ke2V4dEFuZ3VsYXJNb2Rlcm5Gb2xkZXJ9YClcbiAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGF0aFRvRXh0QW5ndWxhck1vZGVybikpIHtcbiAgICAgICAgICAgIG1rZGlycC5zeW5jKHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm4pXG4gICAgICAgICAgICBjb25zdCB0ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5leHRBbmd1bGFyTW9kZXJNb2R1bGUoJycsICcnLCAnJylcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKFxuICAgICAgICAgICAgICBgJHtwYXRoVG9FeHRBbmd1bGFyTW9kZXJufS8ke2V4dEFuZ3VsYXJNb2Rlcm5Nb2R1bGV9LnRzYCwgdCwgJ3V0Zi04JywgKCkgPT4ge3JldHVybn1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBqID0ganMuaW5kZXhPZihgLi8ke2V4dEFuZ3VsYXJNb2Rlcm5Gb2xkZXJ9LyR7ZXh0QW5ndWxhck1vZGVybk1vZHVsZX1gKVxuICAgICAgICAgIGlmIChqIDwgMCkge1xuICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaSkgKyBgaW1wb3J0IHtFeHRBbmd1bGFyTW9kZXJuTW9kdWxlfSBmcm9tICcuLyR7ZXh0QW5ndWxhck1vZGVybkZvbGRlcn0vJHtleHRBbmd1bGFyTW9kZXJuTW9kdWxlfSdcXG5gICsganMuc3Vic3RyKGkpXG4gICAgICAgICAgICByZXdyaXRlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqcy5zdWJzdHIoaiAtIDQzLCAzKSA9PSAnLy8gJykge1xuICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaiAtIDQzKSArICdcXG4nICtqcy5zdWJzdHJpbmcoaiAtIDQwKVxuICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJld3JpdGUpXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhhcHBNb2R1bGVQYXRoLCBqcywgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnYnVpbGRNb2R1bGUgaG9vayBpbiBfY29tcGlsYXRpb246ICcgKyBlKVxuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCBtb2R1bGUgPT4ge1xuICAgICAgICBpZiAoZXh0Q29tcG9uZW50cy5sZW5ndGggJiYgbW9kdWxlLnJlc291cmNlICYmIChtb2R1bGUucmVzb3VyY2UubWF0Y2goL1xcLihqfHQpc3g/JC8pIHx8XG4gICAgICAgIG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBtb2R1bGUucmVzb3VyY2UubWF0Y2goL1xcLmh0bWwkLykpICYmXG4gICAgICAgICFtb2R1bGUucmVzb3VyY2UubWF0Y2goL25vZGVfbW9kdWxlcy8pICYmICFtb2R1bGUucmVzb3VyY2UubWF0Y2goYC9leHQteyRvcHRpb25zLmZyYW1ld29ya30vZGlzdC9gKSkge1xuICAgICAgICAgIHZhcnMuZGVwcyA9IFsuLi4odmFycy5kZXBzIHx8IFtdKSwgLi4ucmVxdWlyZShgLi8ke3ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5leHRyYWN0RnJvbVNvdXJjZShtb2R1bGUsIG9wdGlvbnMsIGNvbXBpbGF0aW9uLCBleHRDb21wb25lbnRzKV1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuICAgICAgICBjb21waWxhdGlvbi5ob29rcy5maW5pc2hNb2R1bGVzLnRhcChgZXh0LWZpbmlzaC1tb2R1bGVzYCwgbW9kdWxlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gJ0V4dC5jcmVhdGUoe1xcXCJ4dHlwZVxcXCI6XFxcIidcbiAgICAgICAgICB2YXJzLmRlcHMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNvZGUuaW5kZXhPZihzdHJpbmcpXG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnN1YnN0cmluZyhpbmRleCArIHN0cmluZy5sZW5ndGgpXG4gICAgICAgICAgICAgIHZhciBlbmQgPSBjb2RlLmluZGV4T2YoJ1xcXCInKVxuICAgICAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cy5wdXNoKGNvZGUuc3Vic3RyKDAsIGVuZCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KHVzZWRFeHRDb21wb25lbnRzKV1cbiAgICAgICAgICBjb25zdCByZWFkRnJvbSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuL3NyYy9saWInKVxuICAgICAgICAgIGNvbnN0IHdyaXRlVG9QYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGBzcmMvYXBwLyR7ZXh0QW5ndWxhck1vZGVybkZvbGRlcn1gKVxuICAgICAgICAgIGNvbnN0IGV4dEFuZ3VsYXJNb2R1bGVCYXNlRmlsZSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgJHt3cml0ZVRvUGF0aH0vYmFzZS50c2ApXG5cbiAgICAgICAgICBjb25zdCBiYXNlQ29udGVudCA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cmVhZEZyb219L2Jhc2UudHNgKS50b1N0cmluZygpXG4gICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9L2Jhc2UudHNgLCBiYXNlQ29udGVudCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIFxuICAgICAgICAgIHZhciB3cml0ZVRvUGF0aFdyaXR0ZW4gPSBmYWxzZVxuICAgICAgICAgIHZhciBtb2R1bGVWYXJzID0ge1xuICAgICAgICAgICAgaW1wb3J0czogJycsXG4gICAgICAgICAgICBleHBvcnRzOiAnJyxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlZEV4dENvbXBvbmVudHMuZm9yRWFjaCh4dHlwZSA9PiB7XG4gICAgICAgICAgICB2YXIgY2FwY2xhc3NuYW1lID0geHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB4dHlwZS5yZXBsYWNlKC8tL2csIFwiX1wiKS5zbGljZSgxKVxuICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzID0gbW9kdWxlVmFycy5pbXBvcnRzICsgYGltcG9ydCB7IEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCB9IGZyb20gJy4vZXh0LSR7eHR5cGV9LmNvbXBvbmVudCc7XFxuYFxuICAgICAgICAgICAgbW9kdWxlVmFycy5leHBvcnRzID0gbW9kdWxlVmFycy5leHBvcnRzICsgYCAgICBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQsXFxuYFxuICAgICAgICAgICAgbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgPSBtb2R1bGVWYXJzLmRlY2xhcmF0aW9ucyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIHZhciBjbGFzc0ZpbGUgPSBgL2V4dC0ke3h0eXBlfS5jb21wb25lbnQudHNgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cmVhZEZyb219JHtjbGFzc0ZpbGV9YCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9JHtjbGFzc0ZpbGV9YCwgY29udGVudHMsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICAgIHdyaXRlVG9QYXRoV3JpdHRlbiA9IHRydWVcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgaWYgKHdyaXRlVG9QYXRoV3JpdHRlbikge1xuICAgICAgICAgICAgdmFyIHQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmV4dEFuZ3VsYXJNb2Rlck1vZHVsZShcbiAgICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzLCBtb2R1bGVWYXJzLmV4cG9ydHMsIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofS8ke2V4dEFuZ3VsYXJNb2Rlcm5Nb2R1bGV9LnRzYCwgdCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgY29tcGlsYXRpb24uaG9va3MuaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbi50YXAoYGV4dC1odG1sLWdlbmVyYXRpb25gLChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgICAgICB2YXIgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgIGlmIChjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycpIHtcbiAgICAgICAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dFBhdGggPSBvdXRwdXRQYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICB2YXIganNQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5qcycpXG4gICAgICAgIHZhciBjc3NQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5jc3MnKVxuICAgICAgICBkYXRhLmFzc2V0cy5qcy51bnNoaWZ0KGpzUGF0aClcbiAgICAgICAgZGF0YS5hc3NldHMuY3NzLnVuc2hpZnQoY3NzUGF0aClcbiAgICAgICAgbG9nKHZhcnMuYXBwICsgYEFkZGluZyAke2pzUGF0aH0gYW5kICR7Y3NzUGF0aH0gdG8gaW5kZXguaHRtbGApXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2tpcHBlZCBIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgIH1cblxuXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfY29tcGlsYXRpb246ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBlbWl0JylcbiAgICB2YXIgYXBwID0gdmFycy5hcHBcbiAgICB2YXIgZnJhbWV3b3JrID0gdmFycy5mcmFtZXdvcmtcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgY29uc3QgX2J1aWxkRXh0QnVuZGxlID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2J1aWxkRXh0QnVuZGxlXG4gICAgbGV0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3V0cHV0UGF0aCx2YXJzLmV4dFBhdGgpXG4gICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJyAmJiBjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICB9XG4gICAgbG9ndihvcHRpb25zLCdvdXRwdXRQYXRoOiAnICsgb3V0cHV0UGF0aClcbiAgICBsb2d2KG9wdGlvbnMsJ2ZyYW1ld29yazogJyArIGZyYW1ld29yaylcbiAgICBpZiAob3B0aW9ucy5lbWl0ID09IHRydWUpIHtcbiAgICAgIGlmIChmcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgICBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVxdWlyZShgLi8ke2ZyYW1ld29ya31VdGlsYCkuX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuXG4gICAgICB2YXIgY29tbWFuZCA9ICcnXG4gICAgICBpZiAob3B0aW9ucy53YXRjaCA9PSAneWVzJyAmJiB2YXJzLnByb2R1Y3Rpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgY29tbWFuZCA9ICd3YXRjaCdcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21tYW5kID0gJ2J1aWxkJ1xuICAgICAgfVxuXG4gICAgICBpZiAodmFycy5yZWJ1aWxkID09IHRydWUpIHtcbiAgICAgICAgdmFyIHBhcm1zID0gW11cbiAgICAgICAgaWYgKG9wdGlvbnMucHJvZmlsZSA9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5wcm9maWxlID09ICcnIHx8IG9wdGlvbnMucHJvZmlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsICctLXdlYi1zZXJ2ZXInLCAnZmFsc2UnLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChjb21tYW5kID09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCBvcHRpb25zLnByb2ZpbGUsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsICctLXdlYi1zZXJ2ZXInLCAnZmFsc2UnLCBvcHRpb25zLnByb2ZpbGUsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhcnMud2F0Y2hTdGFydGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgYXdhaXQgX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKVxuICAgICAgICAgIHZhcnMud2F0Y2hTdGFydGVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb25zdCBqc0NodW5rID0gY29tcGlsYXRpb24uYWRkQ2h1bmsoYGV4dC1hbmd1bGFyLWpzYClcbiAgICAgICAgLy9qc0NodW5rLmhhc1J1bnRpbWUgPSBqc0NodW5rLmlzSW5pdGlhbCA9ICgpID0+IHRydWU7XG4gICAgICAgIC8vanNDaHVuay5maWxlcy5wdXNoKHBhdGguam9pbignYnVpbGQnLCAnZXh0LWFuZ3VsYXInLCAnZXh0LmpzJykpO1xuICAgICAgICAvL2pzQ2h1bmsuZmlsZXMucHVzaChwYXRoLmpvaW4oJ2J1aWxkJywgJ2V4dC1hbmd1bGFyJywgICdleHQuY3NzJykpO1xuICAgICAgICAvL2pzQ2h1bmsuaWQgPSAtMjsgLy8gdGhpcyBmb3JjZXMgaHRtbC13ZWJwYWNrLXBsdWdpbiB0byBpbmNsdWRlIGV4dC5qcyBmaXJzdFxuXG4gICAgICAgIC8vIGlmKG9wdGlvbnMuYnJvd3NlciA9PSB0cnVlICYmIG9wdGlvbnMud2F0Y2ggPT0gJ3llcycpIHtcbiAgICAgICAgLy8gICBpZiAodmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBjb21waWxhdGlvbi5lcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy8gICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgb3B0aW9ucy5wb3J0XG4gICAgICAgIC8vICAgICBsb2coYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAvLyAgICAgdmFycy5icm93c2VyQ291bnQrK1xuICAgICAgICAvLyAgICAgY29uc3Qgb3BuID0gcmVxdWlyZSgnb3BuJylcbiAgICAgICAgLy8gICAgIG9wbih1cmwpXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgIGxvZ3Yob3B0aW9ucywnYnJvd3NlciBOT1Qgb3BlbmVkJylcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2coYCR7dmFycy5hcHB9RlVOQ1RJT04gZW1pdCBub3QgcnVuYClcbiAgICAgIC8vIGlmKG9wdGlvbnMuYnJvd3NlciA9PSB0cnVlKSB7XG4gICAgICAvLyAgIGlmICh2YXJzLmJyb3dzZXJDb3VudCA9PSAwICYmIG9wdGlvbnMud2F0Y2ggPT0gJ3llcycpIHtcbiAgICAgIC8vICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6JyArIG9wdGlvbnMucG9ydFxuICAgICAgLy8gICAgIGxvZyhhcHAgKyBgT3BlbmluZyBicm93c2VyIGF0ICR7dXJsfWApXG4gICAgICAvLyAgICAgdmFycy5icm93c2VyQ291bnQrK1xuICAgICAgLy8gICAgIGNvbnN0IG9wbiA9IHJlcXVpcmUoJ29wbicpXG4gICAgICAvLyAgICAgb3BuKHVybClcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAvLyAgIGxvZ3Yob3B0aW9ucywnYnJvd3NlciBOT1Qgb3BlbmVkJylcbiAgICAgIC8vIH1cbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdlbWl0OiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dCwgY29tcGlsYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9wcmVwYXJlRm9yQnVpbGQnKVxuICAgIGNvbnN0IHJpbXJhZiA9IHJlcXVpcmUoJ3JpbXJhZicpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgdmFyIHBhY2thZ2VzID0gb3B0aW9ucy5wYWNrYWdlc1xuICAgIHZhciB0b29sa2l0ID0gb3B0aW9ucy50b29sa2l0XG4gICAgdmFyIHRoZW1lID0gb3B0aW9ucy50aGVtZVxuXG4gICAgdGhlbWUgPSB0aGVtZSB8fCAodG9vbGtpdCA9PT0gJ2NsYXNzaWMnID8gJ3RoZW1lLXRyaXRvbicgOiAndGhlbWUtbWF0ZXJpYWwnKVxuICAgIGxvZ3Yob3B0aW9ucywnZmlyc3RUaW1lOiAnICsgdmFycy5maXJzdFRpbWUpXG4gICAgaWYgKHZhcnMuZmlyc3RUaW1lKSB7XG4gICAgICByaW1yYWYuc3luYyhvdXRwdXQpXG4gICAgICBta2RpcnAuc3luYyhvdXRwdXQpXG4gICAgICBjb25zdCBidWlsZFhNTCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuYnVpbGRYTUxcbiAgICAgIGNvbnN0IGNyZWF0ZUFwcEpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUFwcEpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZVdvcmtzcGFjZUpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZVdvcmtzcGFjZUpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUpTRE9NRW52aXJvbm1lbnRcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYnVpbGQueG1sJyksIGJ1aWxkWE1MKHZhcnMucHJvZHVjdGlvbiwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYXBwLmpzb24nKSwgY3JlYXRlQXBwSnNvbih0aGVtZSwgcGFja2FnZXMsIHRvb2xraXQsIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2pzZG9tLWVudmlyb25tZW50LmpzJyksIGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnd29ya3NwYWNlLmpzb24nKSwgY3JlYXRlV29ya3NwYWNlSnNvbihvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG5cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAnYW5ndWxhcicpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJzFDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICcyQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ3JlYWN0JykgIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnM0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9vdmVycmlkZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICc0Q29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vZG8gd2UgZXZlciBoaXQgdGhlc2U/XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICcuLi9yZXNvdXJjZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnNUNvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAvLyAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgIC8vICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJ3Jlc291cmNlcycpXG4gICAgICAvLyAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgIC8vICAgbG9nKGFwcCArICc2Q29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIC8vIH1cbiAgICAgIFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3BhY2thZ2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhY2thZ2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcy8nKVxuICAgICAgICB2YXIgdG9QYWNrYWdlcyA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGFja2FnZXMsIHRvUGFja2FnZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnN0NvcHlpbmcgJyArIGZyb21QYWNrYWdlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ292ZXJyaWRlcy8nKVxuICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICBsb2coYXBwICsgJzhDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cblxuXG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmICghdmFycy5kZXBzLmluY2x1ZGVzKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKSlcbiAgICAgICAgdmFycy5kZXBzLnB1c2goJ0V4dC5yZXF1aXJlKFwiRXh0LmxheW91dC4qXCIpO1xcbicpXG4gICAgICBqcyA9IHZhcnMuZGVwcy5qb2luKCc7XFxuJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAganMgPSAnRXh0LnJlcXVpcmUoXCJFeHQuKlwiKSdcbiAgICB9XG4gICAgaWYgKHZhcnMubWFuaWZlc3QgPT09IG51bGwgfHwganMgIT09IHZhcnMubWFuaWZlc3QpIHtcbiAgICAgIHZhcnMubWFuaWZlc3QgPSBqc1xuICAgICAgY29uc3QgbWFuaWZlc3QgPSBwYXRoLmpvaW4ob3V0cHV0LCAnbWFuaWZlc3QuanMnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhtYW5pZmVzdCwganMsICd1dGY4JylcbiAgICAgIHZhcnMucmVidWlsZCA9IHRydWVcbiAgICAgIHZhciBidW5kbGVEaXIgPSBvdXRwdXQucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJylcbiAgICAgIGlmIChidW5kbGVEaXIudHJpbSgpID09ICcnKSB7YnVuZGxlRGlyID0gJy4vJ31cbiAgICAgIGxvZyhhcHAgKyAnQnVpbGRpbmcgRXh0IGJ1bmRsZSBhdDogJyArIGJ1bmRsZURpcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXJzLnJlYnVpbGQgPSBmYWxzZVxuICAgICAgbG9nKGFwcCArICdFeHQgcmVidWlsZCBOT1QgbmVlZGVkJylcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfcHJlcGFyZUZvckJ1aWxkOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2J1aWxkRXh0QnVuZGxlJylcblxuICAgIGxldCBzZW5jaGE7IHRyeSB7IHNlbmNoYSA9IHJlcXVpcmUoJ0BzZW5jaGEvY21kJykgfSBjYXRjaCAoZSkgeyBzZW5jaGEgPSAnc2VuY2hhJyB9XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoc2VuY2hhKSkge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIGV4aXN0cycpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIERPRVMgTk9UIGV4aXN0JylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb25CdWlsZERvbmUgPSAoKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnb25CdWlsZERvbmUnKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdHMgPSB7IGN3ZDogb3V0cHV0UGF0aCwgc2lsZW50OiB0cnVlLCBzdGRpbzogJ3BpcGUnLCBlbmNvZGluZzogJ3V0Zi04J31cbiAgICAgIGV4ZWN1dGVBc3luYyhhcHAsIHNlbmNoYSwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24oKSB7IG9uQnVpbGREb25lKCkgfSwgXG4gICAgICAgIGZ1bmN0aW9uKHJlYXNvbikgeyByZWplY3QocmVhc29uKSB9XG4gICAgICApXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coJ2UnKVxuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfYnVpbGRFeHRCdW5kbGU6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlQXN5bmMgKGFwcCwgY29tbWFuZCwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgLy9jb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBTZXJ2ZXJcIiwgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgY29uc3QgREVGQVVMVF9TVUJTVFJTID0gW1wiW0lORl0geFNlcnZlclwiLCAnW0lORl0gTG9hZGluZycsICdbSU5GXSBBcHBlbmQnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbSU5GXSBQcm9jZXNzaW5nIEJ1aWxkJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICB2YXIgc3Vic3RyaW5ncyA9IERFRkFVTFRfU1VCU1RSUyBcbiAgICB2YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG4gICAgY29uc3QgY3Jvc3NTcGF3biA9IHJlcXVpcmUoJ2Nyb3NzLXNwYXduJylcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBsb2d2KG9wdGlvbnMsICdGVU5DVElPTiBleGVjdXRlQXN5bmMnKVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxvZ3Yob3B0aW9ucyxgY29tbWFuZCAtICR7Y29tbWFuZH1gKVxuICAgICAgbG9ndihvcHRpb25zLCBgcGFybXMgLSAke3Bhcm1zfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBvcHRzIC0gJHtKU09OLnN0cmluZ2lmeShvcHRzKX1gKVxuICAgICAgbGV0IGNoaWxkID0gY3Jvc3NTcGF3bihjb21tYW5kLCBwYXJtcywgb3B0cylcbiAgICAgIGNoaWxkLm9uKCdjbG9zZScsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gY2xvc2U6IGAgKyBjb2RlKSBcbiAgICAgICAgaWYoY29kZSA9PT0gMCkgeyByZXNvbHZlKDApIH1cbiAgICAgICAgZWxzZSB7IGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCBuZXcgRXJyb3IoY29kZSkgKTsgcmVzb2x2ZSgwKSB9XG4gICAgICB9KVxuICAgICAgY2hpbGQub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7IFxuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBlcnJvcmApIFxuICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChlcnJvcilcbiAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICBsb2d2KG9wdGlvbnMsIGAke3N0cn1gKVxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKCkubWF0Y2goL3dhaXRpbmcgZm9yIGNoYW5nZXNcXC5cXC5cXC4vKSkge1xuICAgICAgICAgIHJlc29sdmUoMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc3Vic3RyaW5ncy5zb21lKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIGRhdGEuaW5kZXhPZih2KSA+PSAwOyB9KSkgeyBcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0lORl1cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0xPR11cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoXCJbRVJSXVwiKSkge1xuICAgICAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChhcHAgKyBzdHIucmVwbGFjZSgvXlxcW0VSUlxcXSAvZ2ksICcnKSk7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0VSUl1cIiwgYCR7Y2hhbGsucmVkKFwiW0VSUl1cIil9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZyhgJHthcHB9JHtzdHJ9YCkgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY2hpbGQuc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgZXJyb3Igb24gY2xvc2U6IGAgKyBkYXRhKSBcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIHZhciBzdHJKYXZhT3B0cyA9IFwiUGlja2VkIHVwIF9KQVZBX09QVElPTlNcIjtcbiAgICAgICAgdmFyIGluY2x1ZGVzID0gc3RyLmluY2x1ZGVzKHN0ckphdmFPcHRzKVxuICAgICAgICBpZiAoIWluY2x1ZGVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7YXBwfSAke2NoYWxrLnJlZChcIltFUlJdXCIpfSAke3N0cn1gKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdleGVjdXRlQXN5bmM6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfSBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKHMpIHtcbiAgcmVxdWlyZSgncmVhZGxpbmUnKS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMClcbiAgdHJ5IHtcbiAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICB9XG4gIGNhdGNoKGUpIHt9XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHMpXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9ndihvcHRpb25zLCBzKSB7XG4gIGlmIChvcHRpb25zLnZlcmJvc2UgPT0gJ3llcycpIHtcbiAgICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICAgIHRyeSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICAgIH1cbiAgICBjYXRjaChlKSB7fVxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGAtdmVyYm9zZTogJHtzfWApXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBcHAoKSB7XG4gIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgdmFyIHByZWZpeCA9IGBgXG4gIGNvbnN0IHBsYXRmb3JtID0gcmVxdWlyZSgnb3MnKS5wbGF0Zm9ybSgpXG4gIGlmIChwbGF0Zm9ybSA9PSAnZGFyd2luJykgeyBwcmVmaXggPSBg4oS5IO+9omV4dO+9ozpgIH1cbiAgZWxzZSB7IHByZWZpeCA9IGBpIFtleHRdOmAgfVxuICByZXR1cm4gYCR7Y2hhbGsuZ3JlZW4ocHJlZml4KX0gYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFZlcnNpb25zKGFwcCwgcGx1Z2luTmFtZSwgZnJhbWV3b3JrTmFtZSkge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB2ID0ge31cbiAgdmFyIHBsdWdpblBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEnLCBwbHVnaW5OYW1lKVxuICB2YXIgcGx1Z2luUGtnID0gKGZzLmV4aXN0c1N5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBsdWdpblBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LnBsdWdpblZlcnNpb24gPSBwbHVnaW5Qa2cudmVyc2lvblxuICB2Ll9yZXNvbHZlZCA9IHBsdWdpblBrZy5fcmVzb2x2ZWRcbiAgaWYgKHYuX3Jlc29sdmVkID09IHVuZGVmaW5lZCkge1xuICAgIHYuZWRpdGlvbiA9IGBDb21tZXJjaWFsYFxuICB9XG4gIGVsc2Uge1xuICAgIGlmICgtMSA9PSB2Ll9yZXNvbHZlZC5pbmRleE9mKCdjb21tdW5pdHknKSkge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW11bml0eWBcbiAgICB9XG4gIH1cblxuICB2YXIgd2VicGFja1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3dlYnBhY2snKVxuICB2YXIgd2VicGFja1BrZyA9IChmcy5leGlzdHNTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LndlYnBhY2tWZXJzaW9uID0gd2VicGFja1BrZy52ZXJzaW9uXG5cbiAgdmFyIGV4dFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEvZXh0JylcbiAgdmFyIGV4dFBrZyA9IChmcy5leGlzdHNTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5leHRWZXJzaW9uID0gZXh0UGtnLnNlbmNoYS52ZXJzaW9uXG5cbiAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuXG4gIGlmICh2LmNtZFZlcnNpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvJHtwbHVnaW5OYW1lfS9ub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICAgIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuICB9XG5cbiAgdmFyIGZyYW1ld29ya0luZm8gPSAnJ1xuICAgaWYgKGZyYW1ld29ya05hbWUgIT0gdW5kZWZpbmVkICYmIGZyYW1ld29ya05hbWUgIT0gJ2V4dGpzJykge1xuICAgIHZhciBmcmFtZXdvcmtQYXRoID0gJydcbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAncmVhY3QnKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9yZWFjdCcpXG4gICAgfVxuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdhbmd1bGFyJykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZScpXG4gICAgfVxuICAgIHZhciBmcmFtZXdvcmtQa2cgPSAoZnMuZXhpc3RzU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5mcmFtZXdvcmtWZXJzaW9uID0gZnJhbWV3b3JrUGtnLnZlcnNpb25cbiAgICBmcmFtZXdvcmtJbmZvID0gJywgJyArIGZyYW1ld29ya05hbWUgKyAnIHYnICsgdi5mcmFtZXdvcmtWZXJzaW9uXG4gIH1cbiAgcmV0dXJuIGFwcCArICdleHQtd2VicGFjay1wbHVnaW4gdicgKyB2LnBsdWdpblZlcnNpb24gKyAnLCBFeHQgSlMgdicgKyB2LmV4dFZlcnNpb24gKyAnICcgKyB2LmVkaXRpb24gKyAnIEVkaXRpb24sIFNlbmNoYSBDbWQgdicgKyB2LmNtZFZlcnNpb24gKyAnLCB3ZWJwYWNrIHYnICsgdi53ZWJwYWNrVmVyc2lvbiArIGZyYW1ld29ya0luZm9cbiB9Il19