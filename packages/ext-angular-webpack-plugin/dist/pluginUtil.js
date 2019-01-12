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

    if (vars.production) {
      logv(options, `ext-compilation: production is ` + vars.production);

      if (options.framework == 'angular') {
        var extComponents = [];
        var usedExtComponents = [];
        const extAngulaFolder = 'ext-angular-modern-prod';
        const extAngularModule = 'ext-angular-modern.module';
        const extAngularPackage = '@sencha/ext-angular-modern';
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
          var rewrite = false;
          const appModulePath = path.resolve(process.cwd(), 'src/app/app.module.ts');
          var js = fsx.readFileSync(appModulePath).toString();
          var i = js.indexOf(extAngularPackage);
          i = js.substring(0, i).lastIndexOf('import');

          if (js.substr(i - 3, 3) !== '// ') {
            js = js.substring(0, i) + '\n // ' + js.substring(i);
            rewrite = true;
          }

          const pathToExtAngularModern = path.resolve(process.cwd(), `src/app/${extAngulaFolder}`);

          if (!fs.existsSync(pathToExtAngularModern)) {
            mkdirp.sync(pathToExtAngularModern);

            const t = require('./artifacts').extAngularModerModule('', '', '');

            fsx.writeFileSync(`${pathToExtAngularModern}/${extAngularModule}.ts`, t, 'utf-8', () => {
              return;
            });
            rewrite = true;
          }

          var j = js.indexOf(`./${extAngulaFolder}/${extAngularModule}`);

          if (j < 0) {
            js = js.substring(0, i) + `import {extAngularModule} from './${extAngulaFolder}/${extAngularModule}'\n` + js.substr(i);
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
          const readFrom = path.resolve(process.cwd(), 'node_modules/' + extAngularPackage + '/src/lib');
          const writeToPath = path.resolve(process.cwd(), `src/app/${extAngulaFolder}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJta2RpcnAiLCJleHRDb21wb25lbnRzIiwidXNlZEV4dENvbXBvbmVudHMiLCJleHRBbmd1bGFGb2xkZXIiLCJleHRBbmd1bGFyTW9kdWxlIiwiZXh0QW5ndWxhclBhY2thZ2UiLCJwYWNrYWdlUGF0aCIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJmb3JFYWNoIiwiZmlsZU5hbWUiLCJzdWJzdHIiLCJlbmQiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwicmV3cml0ZSIsImFwcE1vZHVsZVBhdGgiLCJqcyIsInRvU3RyaW5nIiwiaSIsImxhc3RJbmRleE9mIiwicGF0aFRvRXh0QW5ndWxhck1vZGVybiIsInN5bmMiLCJ0IiwiZXh0QW5ndWxhck1vZGVyTW9kdWxlIiwid3JpdGVGaWxlU3luYyIsImoiLCJlIiwiY29uc29sZSIsImVycm9ycyIsImhvb2tzIiwic3VjY2VlZE1vZHVsZSIsInRhcCIsIm1vZHVsZSIsImxlbmd0aCIsInJlc291cmNlIiwibWF0Y2giLCJkZXBzIiwiZXh0cmFjdEZyb21Tb3VyY2UiLCJmaW5pc2hNb2R1bGVzIiwibW9kdWxlcyIsInN0cmluZyIsImNvZGUiLCJpbmRleCIsIlNldCIsInJlYWRGcm9tIiwid3JpdGVUb1BhdGgiLCJleHRBbmd1bGFyTW9kdWxlQmFzZUZpbGUiLCJiYXNlQ29udGVudCIsIndyaXRlVG9QYXRoV3JpdHRlbiIsIm1vZHVsZVZhcnMiLCJpbXBvcnRzIiwiZXhwb3J0cyIsImRlY2xhcmF0aW9ucyIsInh0eXBlIiwiY2FwY2xhc3NuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJyZXBsYWNlIiwic2xpY2UiLCJjbGFzc0ZpbGUiLCJjb250ZW50cyIsImh0bWxXZWJwYWNrUGx1Z2luQmVmb3JlSHRtbEdlbmVyYXRpb24iLCJkYXRhIiwib3V0cHV0UGF0aCIsImRldlNlcnZlciIsImNvbnRlbnRCYXNlIiwidHJpbSIsImpzUGF0aCIsImV4dFBhdGgiLCJjc3NQYXRoIiwiYXNzZXRzIiwidW5zaGlmdCIsImNzcyIsImVtaXQiLCJjYWxsYmFjayIsIl9idWlsZEV4dEJ1bmRsZSIsIl9wcmVwYXJlRm9yQnVpbGQiLCJjb21tYW5kIiwid2F0Y2giLCJyZWJ1aWxkIiwicGFybXMiLCJwcm9maWxlIiwid2F0Y2hTdGFydGVkIiwib3V0cHV0IiwicmltcmFmIiwicGFja2FnZXMiLCJ0b29sa2l0IiwidGhlbWUiLCJmaXJzdFRpbWUiLCJidWlsZFhNTCIsImNyZWF0ZUFwcEpzb24iLCJjcmVhdGVXb3Jrc3BhY2VKc29uIiwiY3JlYXRlSlNET01FbnZpcm9ubWVudCIsImZyb21QYXRoIiwidG9QYXRoIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsImluY2x1ZGVzIiwibWFuaWZlc3QiLCJidW5kbGVEaXIiLCJzZW5jaGEiLCJQcm9taXNlIiwicmVqZWN0Iiwib25CdWlsZERvbmUiLCJvcHRzIiwic2lsZW50Iiwic3RkaW8iLCJlbmNvZGluZyIsImV4ZWN1dGVBc3luYyIsInRoZW4iLCJyZWFzb24iLCJERUZBVUxUX1NVQlNUUlMiLCJzdWJzdHJpbmdzIiwiY2hhbGsiLCJjcm9zc1NwYXduIiwiY2hpbGQiLCJvbiIsInNpZ25hbCIsIkVycm9yIiwiZXJyb3IiLCJzdGRvdXQiLCJzdHIiLCJzb21lIiwidiIsInJlZCIsInN0ZGVyciIsInN0ckphdmFPcHRzIiwicyIsImN1cnNvclRvIiwiY2xlYXJMaW5lIiwid3JpdGUiLCJ2ZXJib3NlIiwicHJlZml4IiwicGxhdGZvcm0iLCJncmVlbiIsImZyYW1ld29ya05hbWUiLCJwbHVnaW5QYXRoIiwicGx1Z2luUGtnIiwicGx1Z2luVmVyc2lvbiIsInZlcnNpb24iLCJfcmVzb2x2ZWQiLCJlZGl0aW9uIiwid2VicGFja1BhdGgiLCJ3ZWJwYWNrUGtnIiwid2VicGFja1ZlcnNpb24iLCJleHRQa2ciLCJleHRWZXJzaW9uIiwiY21kUGF0aCIsImNtZFBrZyIsImNtZFZlcnNpb24iLCJ2ZXJzaW9uX2Z1bGwiLCJmcmFtZXdvcmtJbmZvIiwiZnJhbWV3b3JrUGF0aCIsImZyYW1ld29ya1BrZyIsImZyYW1ld29ya1ZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDcEMsUUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxRQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUVBLE1BQUlFLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBRUEsTUFBSU4sT0FBTyxDQUFDTyxTQUFSLElBQXFCQyxTQUF6QixFQUFvQztBQUNsQ0osSUFBQUEsUUFBUSxDQUFDSyxZQUFULEdBQXdCLEVBQXhC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O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29uc3RydWN0b3Iob3B0aW9ucykge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB0aGlzVmFycyA9IHt9XG4gIHZhciB0aGlzT3B0aW9ucyA9IHt9XG4gIHZhciBwbHVnaW4gPSB7fVxuXG4gIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMgPSBbXVxuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycy5wdXNoKCd3ZWJwYWNrIGNvbmZpZzogZnJhbWV3b3JrIHBhcmFtZXRlciBvbiBleHQtd2VicGFjay1wbHVnaW4gaXMgbm90IGRlZmluZWQgLSB2YWx1ZXM6IHJlYWN0LCBhbmd1bGFyLCBleHRqcycpXG4gICAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICAgIHJldHVybiBwbHVnaW5cbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlT3B0aW9ucyA9IHJlcXVpcmUoJ3NjaGVtYS11dGlscycpXG4gIHZhbGlkYXRlT3B0aW9ucyhyZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldFZhbGlkYXRlT3B0aW9ucygpLCBvcHRpb25zLCAnJylcblxuICAvL2ZpeCBzZW5jaGEgY21kIG5vIGpldHR5IHNlcnZlciBwcm9ibGVtXG4gIC8vIHZhciB3YXRjaEZpbGUgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kL2Rpc3QvYW50L2J1aWxkL2FwcC93YXRjaC1pbXBsLnhtbGApXG4gIC8vIGxvZ3Yob3B0aW9ucywgYG1vZGlmeSAke3dhdGNoRmlsZX1gKVxuICAvLyB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3YXRjaEZpbGUsICd1dGYtOCcpO1xuICAvLyB2YXIgaXAgPSAnd2ViU2VydmVyUmVmSWQ9XCJhcHAud2ViLnNlcnZlclwiJztcbiAgLy8gdmFyIG5ld1ZhbHVlID0gZGF0YS5yZXBsYWNlKG5ldyBSZWdFeHAoaXApLCAnJyk7XG4gIC8vIGZzLndyaXRlRmlsZVN5bmMod2F0Y2hGaWxlLCBuZXdWYWx1ZSwgJ3V0Zi04Jyk7XG5cbiAgdGhpc1ZhcnMgPSByZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldERlZmF1bHRWYXJzKClcbiAgdGhpc1ZhcnMuZnJhbWV3b3JrID0gb3B0aW9ucy5mcmFtZXdvcmtcbiAgc3dpdGNoKHRoaXNWYXJzLmZyYW1ld29yaykge1xuICAgIGNhc2UgJ2V4dGpzJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVhY3QnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtcmVhY3Qtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbmd1bGFyJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LWFuZ3VsYXItd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gIH1cblxuICAvL2ZpeCBmYXNoaW9uIGRpc3QgcHJvYmxlbVxuICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gIHZhciB0b0Zhc2hpb25EaXN0ID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZC9kaXN0L2pzL25vZGVfbW9kdWxlcy9mYXNoaW9uL2Rpc3RgKVxuICBsb2d2KG9wdGlvbnMsIGB0b0Zhc2hpb25EaXN0ICR7dG9GYXNoaW9uRGlzdH1gKVxuICBpZiAoIWZzLmV4aXN0c1N5bmModG9GYXNoaW9uRGlzdCkpIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBjb3B5YClcbiAgICB2YXIgZnJvbUZhc2hpb25EaXN0ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS8nICsgdGhpc1ZhcnMucGx1Z2luTmFtZSArICcvZmFzaGlvbi9kaXN0LycpXG4gICAgZnN4LmNvcHlTeW5jKGZyb21GYXNoaW9uRGlzdCwgdG9GYXNoaW9uRGlzdClcbiAgfVxuICBlbHNlIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBubyBjb3B5IG9mIGZhc2hpb25gKVxuICB9XG5cbiAgdGhpc1ZhcnMuYXBwID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldEFwcCgpXG4gIGxvZ3Yob3B0aW9ucywgYHBsdWdpbk5hbWUgLSAke3RoaXNWYXJzLnBsdWdpbk5hbWV9YClcbiAgbG9ndihvcHRpb25zLCBgdGhpc1ZhcnMuYXBwIC0gJHt0aGlzVmFycy5hcHB9YClcblxuICBjb25zdCByYyA9IChmcy5leGlzdHNTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCkgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgLCAndXRmLTgnKSkgfHwge30pXG4gIHRoaXNPcHRpb25zID0geyAuLi5yZXF1aXJlKGAuLyR7dGhpc1ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0T3B0aW9ucygpLCAuLi5vcHRpb25zLCAuLi5yYyB9XG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNPcHRpb25zIC0gJHtKU09OLnN0cmluZ2lmeSh0aGlzT3B0aW9ucyl9YClcbiAgaWYgKHRoaXNPcHRpb25zLmVudmlyb25tZW50ID09ICdwcm9kdWN0aW9uJykgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSB0cnVlfVxuICBlbHNlIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gZmFsc2V9XG4gIGxvZyhyZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fZ2V0VmVyc2lvbnModGhpc1ZhcnMuYXBwLCB0aGlzVmFycy5wbHVnaW5OYW1lLCB0aGlzVmFycy5mcmFtZXdvcmspKVxuICBsb2codGhpc1ZhcnMuYXBwICsgJ0J1aWxkaW5nIGZvciAnICsgdGhpc09wdGlvbnMuZW52aXJvbm1lbnQpXG5cbiAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICBwbHVnaW4ub3B0aW9ucyA9IHRoaXNPcHRpb25zXG4gIHJldHVybiBwbHVnaW5cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIF9jb21waWxhdGlvbicpXG5cbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cblxuXG4gICAgaWYgKHZhcnMucHJvZHVjdGlvbikge1xuICAgICAgbG9ndihvcHRpb25zLCBgZXh0LWNvbXBpbGF0aW9uOiBwcm9kdWN0aW9uIGlzIGAgKyB2YXJzLnByb2R1Y3Rpb24pXG5cbiAgICAgIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSAnYW5ndWxhcicpIHtcbiAgICAgICAgdmFyIGV4dENvbXBvbmVudHMgPSBbXVxuICAgICAgICB2YXIgdXNlZEV4dENvbXBvbmVudHMgPSBbXVxuICAgICAgICBjb25zdCBleHRBbmd1bGFGb2xkZXIgPSAnZXh0LWFuZ3VsYXItbW9kZXJuLXByb2QnXG4gICAgICAgIGNvbnN0IGV4dEFuZ3VsYXJNb2R1bGUgPSAnZXh0LWFuZ3VsYXItbW9kZXJuLm1vZHVsZSdcbiAgICAgICAgY29uc3QgZXh0QW5ndWxhclBhY2thZ2UgPSAnQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4nXG4gICAgICAgIGNvbnN0IHBhY2thZ2VQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvJyArIGV4dEFuZ3VsYXJQYWNrYWdlKVxuICAgICAgICB2YXIgZmlsZXMgPSBmc3gucmVhZGRpclN5bmMoYCR7cGFja2FnZVBhdGh9L2xpYmApXG4gICAgICAgIGZpbGVzLmZvckVhY2goKGZpbGVOYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbGVOYW1lICYmIGZpbGVOYW1lLnN1YnN0cigwLCA0KSA9PSAnZXh0LScpIHtcbiAgICAgICAgICAgIHZhciBlbmQgPSBmaWxlTmFtZS5zdWJzdHIoNCkuaW5kZXhPZignLmNvbXBvbmVudCcpXG4gICAgICAgICAgICBpZiAoZW5kID49IDApIHtcbiAgICAgICAgICAgICAgZXh0Q29tcG9uZW50cy5wdXNoKGZpbGVOYW1lLnN1YnN0cmluZyg0LCBlbmQgKyA0KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgcmV3cml0ZSA9IGZhbHNlXG4gICAgICAgICAgY29uc3QgYXBwTW9kdWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2FwcC9hcHAubW9kdWxlLnRzJylcbiAgICAgICAgICB2YXIganMgPSBmc3gucmVhZEZpbGVTeW5jKGFwcE1vZHVsZVBhdGgpLnRvU3RyaW5nKClcbiAgICAgICAgICB2YXIgaSA9IGpzLmluZGV4T2YoZXh0QW5ndWxhclBhY2thZ2UpXG4gICAgICAgICAgaSA9IGpzLnN1YnN0cmluZygwLCBpKS5sYXN0SW5kZXhPZignaW1wb3J0JylcblxuICAgICAgICAgIGlmIChqcy5zdWJzdHIoaSAtIDMsIDMpICE9PSAnLy8gJykge1xuICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaSkgKyAnXFxuIC8vICcgKyBqcy5zdWJzdHJpbmcoaSlcbiAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcGF0aFRvRXh0QW5ndWxhck1vZGVybiA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgc3JjL2FwcC8ke2V4dEFuZ3VsYUZvbGRlcn1gKVxuICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKSkge1xuICAgICAgICAgICAgbWtkaXJwLnN5bmMocGF0aFRvRXh0QW5ndWxhck1vZGVybilcbiAgICAgICAgICAgIGNvbnN0IHQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmV4dEFuZ3VsYXJNb2Rlck1vZHVsZSgnJywgJycsICcnKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoXG4gICAgICAgICAgICAgIGAke3BhdGhUb0V4dEFuZ3VsYXJNb2Rlcm59LyR7ZXh0QW5ndWxhck1vZHVsZX0udHNgLCB0LCAndXRmLTgnLCAoKSA9PiB7cmV0dXJufVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGogPSBqcy5pbmRleE9mKGAuLyR7ZXh0QW5ndWxhRm9sZGVyfS8ke2V4dEFuZ3VsYXJNb2R1bGV9YClcbiAgICAgICAgICBpZiAoaiA8IDApIHtcbiAgICAgICAgICAgIGpzID0ganMuc3Vic3RyaW5nKDAsIGkpICsgYGltcG9ydCB7ZXh0QW5ndWxhck1vZHVsZX0gZnJvbSAnLi8ke2V4dEFuZ3VsYUZvbGRlcn0vJHtleHRBbmd1bGFyTW9kdWxlfSdcXG5gICsganMuc3Vic3RyKGkpXG4gICAgICAgICAgICByZXdyaXRlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqcy5zdWJzdHIoaiAtIDQzLCAzKSA9PSAnLy8gJykge1xuICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaiAtIDQzKSArICdcXG4nICtqcy5zdWJzdHJpbmcoaiAtIDQwKVxuICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJld3JpdGUpXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhhcHBNb2R1bGVQYXRoLCBqcywgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnYnVpbGRNb2R1bGUgaG9vayBpbiBfY29tcGlsYXRpb246ICcgKyBlKVxuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCBtb2R1bGUgPT4ge1xuICAgICAgICBpZiAoZXh0Q29tcG9uZW50cy5sZW5ndGggJiYgbW9kdWxlLnJlc291cmNlICYmIChtb2R1bGUucmVzb3VyY2UubWF0Y2goL1xcLihqfHQpc3g/JC8pIHx8XG4gICAgICAgIG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBtb2R1bGUucmVzb3VyY2UubWF0Y2goL1xcLmh0bWwkLykpICYmXG4gICAgICAgICFtb2R1bGUucmVzb3VyY2UubWF0Y2goL25vZGVfbW9kdWxlcy8pICYmICFtb2R1bGUucmVzb3VyY2UubWF0Y2goYC9leHQteyRvcHRpb25zLmZyYW1ld29ya30vZGlzdC9gKSkge1xuICAgICAgICAgIHZhcnMuZGVwcyA9IFsuLi4odmFycy5kZXBzIHx8IFtdKSwgLi4ucmVxdWlyZShgLi8ke3ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5leHRyYWN0RnJvbVNvdXJjZShtb2R1bGUsIG9wdGlvbnMsIGNvbXBpbGF0aW9uLCBleHRDb21wb25lbnRzKV1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuICAgICAgICBjb21waWxhdGlvbi5ob29rcy5maW5pc2hNb2R1bGVzLnRhcChgZXh0LWZpbmlzaC1tb2R1bGVzYCwgbW9kdWxlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gJ0V4dC5jcmVhdGUoe1xcXCJ4dHlwZVxcXCI6XFxcIidcbiAgICAgICAgICB2YXJzLmRlcHMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNvZGUuaW5kZXhPZihzdHJpbmcpXG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnN1YnN0cmluZyhpbmRleCArIHN0cmluZy5sZW5ndGgpXG4gICAgICAgICAgICAgIHZhciBlbmQgPSBjb2RlLmluZGV4T2YoJ1xcXCInKVxuICAgICAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cy5wdXNoKGNvZGUuc3Vic3RyKDAsIGVuZCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KHVzZWRFeHRDb21wb25lbnRzKV1cbiAgICAgICAgICBjb25zdCByZWFkRnJvbSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzLycgKyBleHRBbmd1bGFyUGFja2FnZSArICcvc3JjL2xpYicpXG4gICAgICAgICAgY29uc3Qgd3JpdGVUb1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYHNyYy9hcHAvJHtleHRBbmd1bGFGb2xkZXJ9YClcbiAgICAgICAgICBjb25zdCBleHRBbmd1bGFyTW9kdWxlQmFzZUZpbGUgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYCR7d3JpdGVUb1BhdGh9L2Jhc2UudHNgKVxuXG4gICAgICAgICAgY29uc3QgYmFzZUNvbnRlbnQgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfS9iYXNlLnRzYCkudG9TdHJpbmcoKVxuICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofS9iYXNlLnRzYCwgYmFzZUNvbnRlbnQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICBcbiAgICAgICAgICB2YXIgd3JpdGVUb1BhdGhXcml0dGVuID0gZmFsc2VcbiAgICAgICAgICB2YXIgbW9kdWxlVmFycyA9IHtcbiAgICAgICAgICAgIGltcG9ydHM6ICcnLFxuICAgICAgICAgICAgZXhwb3J0czogJycsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHVzZWRFeHRDb21wb25lbnRzLmZvckVhY2goeHR5cGUgPT4ge1xuICAgICAgICAgICAgdmFyIGNhcGNsYXNzbmFtZSA9IHh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeHR5cGUucmVwbGFjZSgvLS9nLCBcIl9cIikuc2xpY2UoMSlcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cyA9IG1vZHVsZVZhcnMuaW1wb3J0cyArIGBpbXBvcnQgeyBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQgfSBmcm9tICcuL2V4dC0ke3h0eXBlfS5jb21wb25lbnQnO1xcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZXhwb3J0cyA9IG1vZHVsZVZhcnMuZXhwb3J0cyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zID0gbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgKyBgICAgIEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCxcXG5gXG4gICAgICAgICAgICB2YXIgY2xhc3NGaWxlID0gYC9leHQtJHt4dHlwZX0uY29tcG9uZW50LnRzYFxuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfSR7Y2xhc3NGaWxlfWApLnRvU3RyaW5nKClcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofSR7Y2xhc3NGaWxlfWAsIGNvbnRlbnRzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgICB3cml0ZVRvUGF0aFdyaXR0ZW4gPSB0cnVlXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmICh3cml0ZVRvUGF0aFdyaXR0ZW4pIHtcbiAgICAgICAgICAgIHZhciB0ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5leHRBbmd1bGFyTW9kZXJNb2R1bGUoXG4gICAgICAgICAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cywgbW9kdWxlVmFycy5leHBvcnRzLCBtb2R1bGVWYXJzLmRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0vJHtleHRBbmd1bGFyTW9kdWxlfS50c2AsIHQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmh0bWxXZWJwYWNrUGx1Z2luQmVmb3JlSHRtbEdlbmVyYXRpb24udGFwKGBleHQtaHRtbC1nZW5lcmF0aW9uYCwoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ0hPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICAgICAgdmFyIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgICAgICBpZiAoY29tcGlsZXIub3V0cHV0UGF0aCA9PT0gJy8nKSB7XG4gICAgICAgICAgICBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlLCBvdXRwdXRQYXRoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICdidWlsZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBvdXRwdXRQYXRoID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb3V0cHV0UGF0aCA9ICdidWlsZCdcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXRQYXRoID0gb3V0cHV0UGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgdmFyIGpzUGF0aCA9IHBhdGguam9pbihvdXRwdXRQYXRoLCB2YXJzLmV4dFBhdGgsICdleHQuanMnKVxuICAgICAgICB2YXIgY3NzUGF0aCA9IHBhdGguam9pbihvdXRwdXRQYXRoLCB2YXJzLmV4dFBhdGgsICdleHQuY3NzJylcbiAgICAgICAgZGF0YS5hc3NldHMuanMudW5zaGlmdChqc1BhdGgpXG4gICAgICAgIGRhdGEuYXNzZXRzLmNzcy51bnNoaWZ0KGNzc1BhdGgpXG4gICAgICAgIGxvZyh2YXJzLmFwcCArIGBBZGRpbmcgJHtqc1BhdGh9IGFuZCAke2Nzc1BhdGh9IHRvIGluZGV4Lmh0bWxgKVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NraXBwZWQgSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICB9XG5cblxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gZW1pdCcpXG4gICAgdmFyIGFwcCA9IHZhcnMuYXBwXG4gICAgdmFyIGZyYW1ld29yayA9IHZhcnMuZnJhbWV3b3JrXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgIGNvbnN0IF9idWlsZEV4dEJ1bmRsZSA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9idWlsZEV4dEJ1bmRsZVxuICAgIGxldCBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm91dHB1dFBhdGgsdmFycy5leHRQYXRoKVxuICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycgJiYgY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgfVxuICAgIGxvZ3Yob3B0aW9ucywnb3V0cHV0UGF0aDogJyArIG91dHB1dFBhdGgpXG4gICAgbG9ndihvcHRpb25zLCdmcmFtZXdvcms6ICcgKyBmcmFtZXdvcmspXG4gICAgaWYgKG9wdGlvbnMuZW1pdCA9PSB0cnVlKSB7XG4gICAgICBpZiAoZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgICAgX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlcXVpcmUoYC4vJHtmcmFtZXdvcmt9VXRpbGApLl9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbW1hbmQgPSAnJ1xuICAgICAgaWYgKG9wdGlvbnMud2F0Y2ggPT0gJ3llcycgJiYgdmFycy5wcm9kdWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgIGNvbW1hbmQgPSAnd2F0Y2gnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tbWFuZCA9ICdidWlsZCdcbiAgICAgIH1cblxuICAgICAgaWYgKHZhcnMucmVidWlsZCA9PSB0cnVlKSB7XG4gICAgICAgIHZhciBwYXJtcyA9IFtdXG4gICAgICAgIGlmIChvcHRpb25zLnByb2ZpbGUgPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucHJvZmlsZSA9PSAnJyB8fCBvcHRpb25zLnByb2ZpbGUgPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChjb21tYW5kID09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCAnLS13ZWItc2VydmVyJywgJ2ZhbHNlJywgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCAnLS13ZWItc2VydmVyJywgJ2ZhbHNlJywgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YXJzLndhdGNoU3RhcnRlZCA9PSBmYWxzZSkge1xuICAgICAgICAgIGF3YWl0IF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucylcbiAgICAgICAgICB2YXJzLndhdGNoU3RhcnRlZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc3QganNDaHVuayA9IGNvbXBpbGF0aW9uLmFkZENodW5rKGBleHQtYW5ndWxhci1qc2ApXG4gICAgICAgIC8vanNDaHVuay5oYXNSdW50aW1lID0ganNDaHVuay5pc0luaXRpYWwgPSAoKSA9PiB0cnVlO1xuICAgICAgICAvL2pzQ2h1bmsuZmlsZXMucHVzaChwYXRoLmpvaW4oJ2J1aWxkJywgJ2V4dC1hbmd1bGFyJywgJ2V4dC5qcycpKTtcbiAgICAgICAgLy9qc0NodW5rLmZpbGVzLnB1c2gocGF0aC5qb2luKCdidWlsZCcsICdleHQtYW5ndWxhcicsICAnZXh0LmNzcycpKTtcbiAgICAgICAgLy9qc0NodW5rLmlkID0gLTI7IC8vIHRoaXMgZm9yY2VzIGh0bWwtd2VicGFjay1wbHVnaW4gdG8gaW5jbHVkZSBleHQuanMgZmlyc3RcblxuICAgICAgICAvLyBpZihvcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSAmJiBvcHRpb25zLndhdGNoID09ICd5ZXMnKSB7XG4gICAgICAgIC8vICAgaWYgKHZhcnMuYnJvd3NlckNvdW50ID09IDAgJiYgY29tcGlsYXRpb24uZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIC8vICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6JyArIG9wdGlvbnMucG9ydFxuICAgICAgICAvLyAgICAgbG9nKGFwcCArIGBPcGVuaW5nIGJyb3dzZXIgYXQgJHt1cmx9YClcbiAgICAgICAgLy8gICAgIHZhcnMuYnJvd3NlckNvdW50KytcbiAgICAgICAgLy8gICAgIGNvbnN0IG9wbiA9IHJlcXVpcmUoJ29wbicpXG4gICAgICAgIC8vICAgICBvcG4odXJsKVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICBsb2d2KG9wdGlvbnMsJ2Jyb3dzZXIgTk9UIG9wZW5lZCcpXG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9nKGAke3ZhcnMuYXBwfUZVTkNUSU9OIGVtaXQgbm90IHJ1bmApXG4gICAgICAvLyBpZihvcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSkge1xuICAgICAgLy8gICBpZiAodmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBvcHRpb25zLndhdGNoID09ICd5ZXMnKSB7XG4gICAgICAvLyAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyBvcHRpb25zLnBvcnRcbiAgICAgIC8vICAgICBsb2coYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgLy8gICAgIHZhcnMuYnJvd3NlckNvdW50KytcbiAgICAgIC8vICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgLy8gICAgIG9wbih1cmwpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICBsb2d2KG9wdGlvbnMsJ2Jyb3dzZXIgTk9UIG9wZW5lZCcpXG4gICAgICAvLyB9XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZW1pdDogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXQsIGNvbXBpbGF0aW9uKSB7XG4gIHRyeSB7XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfcHJlcGFyZUZvckJ1aWxkJylcbiAgICBjb25zdCByaW1yYWYgPSByZXF1aXJlKCdyaW1yYWYnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxuICAgIHZhciBwYWNrYWdlcyA9IG9wdGlvbnMucGFja2FnZXNcbiAgICB2YXIgdG9vbGtpdCA9IG9wdGlvbnMudG9vbGtpdFxuICAgIHZhciB0aGVtZSA9IG9wdGlvbnMudGhlbWVcblxuICAgIHRoZW1lID0gdGhlbWUgfHwgKHRvb2xraXQgPT09ICdjbGFzc2ljJyA/ICd0aGVtZS10cml0b24nIDogJ3RoZW1lLW1hdGVyaWFsJylcbiAgICBsb2d2KG9wdGlvbnMsJ2ZpcnN0VGltZTogJyArIHZhcnMuZmlyc3RUaW1lKVxuICAgIGlmICh2YXJzLmZpcnN0VGltZSkge1xuICAgICAgcmltcmFmLnN5bmMob3V0cHV0KVxuICAgICAgbWtkaXJwLnN5bmMob3V0cHV0KVxuICAgICAgY29uc3QgYnVpbGRYTUwgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmJ1aWxkWE1MXG4gICAgICBjb25zdCBjcmVhdGVBcHBKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVBcHBKc29uXG4gICAgICBjb25zdCBjcmVhdGVXb3Jrc3BhY2VKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVXb3Jrc3BhY2VKc29uXG4gICAgICBjb25zdCBjcmVhdGVKU0RPTUVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVKU0RPTUVudmlyb25tZW50XG5cbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2J1aWxkLnhtbCcpLCBidWlsZFhNTCh2YXJzLnByb2R1Y3Rpb24sIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2FwcC5qc29uJyksIGNyZWF0ZUFwcEpzb24odGhlbWUsIHBhY2thZ2VzLCB0b29sa2l0LCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdqc2RvbS1lbnZpcm9ubWVudC5qcycpLCBjcmVhdGVKU0RPTUVudmlyb25tZW50KG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ3dvcmtzcGFjZS5qc29uJyksIGNyZWF0ZVdvcmtzcGFjZUpzb24ob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuXG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtYW5ndWxhci9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAncmVhY3QnKSAge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L3BhY2thZ2VzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9vdmVycmlkZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdvdmVycmlkZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJy4uL3Jlc291cmNlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICAvLyBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgLy8gICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAvLyAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICdyZXNvdXJjZXMnKVxuICAgICAgLy8gICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAvLyAgIGxvZyhhcHAgKyAnNkNvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAvLyB9XG4gICAgICBcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdwYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21QYWNrYWdlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncGFja2FnZXMvJylcbiAgICAgICAgdmFyIHRvUGFja2FnZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhY2thZ2VzLCB0b1BhY2thZ2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYWNrYWdlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ292ZXJyaWRlcy8nKVxuICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuICAgIH1cbiAgICB2YXJzLmZpcnN0VGltZSA9IGZhbHNlXG4gICAgdmFyIGpzID0gJydcbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBpZiAoIXZhcnMuZGVwcy5pbmNsdWRlcygnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJykpXG4gICAgICAgIHZhcnMuZGVwcy5wdXNoKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKVxuICAgICAganMgPSB2YXJzLmRlcHMuam9pbignO1xcbicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGpzID0gJ0V4dC5yZXF1aXJlKFwiRXh0LipcIiknXG4gICAgfVxuICAgIGlmICh2YXJzLm1hbmlmZXN0ID09PSBudWxsIHx8IGpzICE9PSB2YXJzLm1hbmlmZXN0KSB7XG4gICAgICB2YXJzLm1hbmlmZXN0ID0ganNcbiAgICAgIGNvbnN0IG1hbmlmZXN0ID0gcGF0aC5qb2luKG91dHB1dCwgJ21hbmlmZXN0LmpzJylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMobWFuaWZlc3QsIGpzLCAndXRmOCcpXG4gICAgICB2YXJzLnJlYnVpbGQgPSB0cnVlXG4gICAgICB2YXIgYnVuZGxlRGlyID0gb3V0cHV0LnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpXG4gICAgICBpZiAoYnVuZGxlRGlyLnRyaW0oKSA9PSAnJykge2J1bmRsZURpciA9ICcuLyd9XG4gICAgICBsb2coYXBwICsgJ0J1aWxkaW5nIEV4dCBidW5kbGUgYXQ6ICcgKyBidW5kbGVEaXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFycy5yZWJ1aWxkID0gZmFsc2VcbiAgICAgIGxvZyhhcHAgKyAnRXh0IHJlYnVpbGQgTk9UIG5lZWRlZCcpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX3ByZXBhcmVGb3JCdWlsZDogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9idWlsZEV4dEJ1bmRsZScpXG5cbiAgICBsZXQgc2VuY2hhOyB0cnkgeyBzZW5jaGEgPSByZXF1aXJlKCdAc2VuY2hhL2NtZCcpIH0gY2F0Y2ggKGUpIHsgc2VuY2hhID0gJ3NlbmNoYScgfVxuICAgIGlmIChmcy5leGlzdHNTeW5jKHNlbmNoYSkpIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2VuY2hhIGZvbGRlciBleGlzdHMnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2VuY2hhIGZvbGRlciBET0VTIE5PVCBleGlzdCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9uQnVpbGREb25lID0gKCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ29uQnVpbGREb25lJylcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRzID0geyBjd2Q6IG91dHB1dFBhdGgsIHNpbGVudDogdHJ1ZSwgc3RkaW86ICdwaXBlJywgZW5jb2Rpbmc6ICd1dGYtOCd9XG4gICAgICBleGVjdXRlQXN5bmMoYXBwLCBzZW5jaGEsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykudGhlbiAoXG4gICAgICAgIGZ1bmN0aW9uKCkgeyBvbkJ1aWxkRG9uZSgpIH0sIFxuICAgICAgICBmdW5jdGlvbihyZWFzb24pIHsgcmVqZWN0KHJlYXNvbikgfVxuICAgICAgKVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIGNvbnNvbGUubG9nKCdlJylcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2J1aWxkRXh0QnVuZGxlOiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUFzeW5jIChhcHAsIGNvbW1hbmQsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykge1xuICB0cnkge1xuICAgIC8vY29uc3QgREVGQVVMVF9TVUJTVFJTID0gWydbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gU2VydmVyXCIsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIGNvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFtcIltJTkZdIHhTZXJ2ZXJcIiwgJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gQXBwZW5kJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0lORl0gUHJvY2Vzc2luZyBCdWlsZCcsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgdmFyIHN1YnN0cmluZ3MgPSBERUZBVUxUX1NVQlNUUlMgXG4gICAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICAgIGNvbnN0IGNyb3NzU3Bhd24gPSByZXF1aXJlKCdjcm9zcy1zcGF3bicpXG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgbG9ndihvcHRpb25zLCAnRlVOQ1RJT04gZXhlY3V0ZUFzeW5jJylcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsb2d2KG9wdGlvbnMsYGNvbW1hbmQgLSAke2NvbW1hbmR9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYHBhcm1zIC0gJHtwYXJtc31gKVxuICAgICAgbG9ndihvcHRpb25zLCBgb3B0cyAtICR7SlNPTi5zdHJpbmdpZnkob3B0cyl9YClcbiAgICAgIGxldCBjaGlsZCA9IGNyb3NzU3Bhd24oY29tbWFuZCwgcGFybXMsIG9wdHMpXG4gICAgICBjaGlsZC5vbignY2xvc2UnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGNsb3NlOiBgICsgY29kZSkgXG4gICAgICAgIGlmKGNvZGUgPT09IDApIHsgcmVzb2x2ZSgwKSB9XG4gICAgICAgIGVsc2UgeyBjb21waWxhdGlvbi5lcnJvcnMucHVzaCggbmV3IEVycm9yKGNvZGUpICk7IHJlc29sdmUoMCkgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLm9uKCdlcnJvcicsIChlcnJvcikgPT4geyBcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gZXJyb3JgKSBcbiAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICAgIHJlc29sdmUoMClcbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgbG9ndihvcHRpb25zLCBgJHtzdHJ9YClcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZygpLm1hdGNoKC93YWl0aW5nIGZvciBjaGFuZ2VzXFwuXFwuXFwuLykpIHtcbiAgICAgICAgICByZXNvbHZlKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHN1YnN0cmluZ3Muc29tZShmdW5jdGlvbih2KSB7IHJldHVybiBkYXRhLmluZGV4T2YodikgPj0gMDsgfSkpIHsgXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltJTkZdXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltMT0ddXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKFwiW0VSUl1cIikpIHtcbiAgICAgICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goYXBwICsgc3RyLnJlcGxhY2UoL15cXFtFUlJcXF0gL2dpLCAnJykpO1xuICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltFUlJdXCIsIGAke2NoYWxrLnJlZChcIltFUlJdXCIpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2coYCR7YXBwfSR7c3RyfWApIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZGVyci5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYGVycm9yIG9uIGNsb3NlOiBgICsgZGF0YSkgXG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICB2YXIgc3RySmF2YU9wdHMgPSBcIlBpY2tlZCB1cCBfSkFWQV9PUFRJT05TXCI7XG4gICAgICAgIHZhciBpbmNsdWRlcyA9IHN0ci5pbmNsdWRlcyhzdHJKYXZhT3B0cylcbiAgICAgICAgaWYgKCFpbmNsdWRlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2FwcH0gJHtjaGFsay5yZWQoXCJbRVJSXVwiKX0gJHtzdHJ9YClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZXhlY3V0ZUFzeW5jOiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH0gXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhzKSB7XG4gIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gIHRyeSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKClcbiAgfVxuICBjYXRjaChlKSB7fVxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShzKVxuICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ3Yob3B0aW9ucywgcykge1xuICBpZiAob3B0aW9ucy52ZXJib3NlID09ICd5ZXMnKSB7XG4gICAgcmVxdWlyZSgncmVhZGxpbmUnKS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMClcbiAgICB0cnkge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKClcbiAgICB9XG4gICAgY2F0Y2goZSkge31cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShgLXZlcmJvc2U6ICR7c31gKVxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG4nKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QXBwKCkge1xuICB2YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG4gIHZhciBwcmVmaXggPSBgYFxuICBjb25zdCBwbGF0Zm9ybSA9IHJlcXVpcmUoJ29zJykucGxhdGZvcm0oKVxuICBpZiAocGxhdGZvcm0gPT0gJ2RhcndpbicpIHsgcHJlZml4ID0gYOKEuSDvvaJleHTvvaM6YCB9XG4gIGVsc2UgeyBwcmVmaXggPSBgaSBbZXh0XTpgIH1cbiAgcmV0dXJuIGAke2NoYWxrLmdyZWVuKHByZWZpeCl9IGBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRWZXJzaW9ucyhhcHAsIHBsdWdpbk5hbWUsIGZyYW1ld29ya05hbWUpIHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuICB2YXIgdiA9IHt9XG4gIHZhciBwbHVnaW5QYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9Ac2VuY2hhJywgcGx1Z2luTmFtZSlcbiAgdmFyIHBsdWdpblBrZyA9IChmcy5leGlzdHNTeW5jKHBsdWdpblBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5wbHVnaW5WZXJzaW9uID0gcGx1Z2luUGtnLnZlcnNpb25cbiAgdi5fcmVzb2x2ZWQgPSBwbHVnaW5Qa2cuX3Jlc29sdmVkXG4gIGlmICh2Ll9yZXNvbHZlZCA9PSB1bmRlZmluZWQpIHtcbiAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoLTEgPT0gdi5fcmVzb2x2ZWQuaW5kZXhPZignY29tbXVuaXR5JykpIHtcbiAgICAgIHYuZWRpdGlvbiA9IGBDb21tZXJjaWFsYFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYuZWRpdGlvbiA9IGBDb21tdW5pdHlgXG4gICAgfVxuICB9XG5cbiAgdmFyIHdlYnBhY2tQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy93ZWJwYWNrJylcbiAgdmFyIHdlYnBhY2tQa2cgPSAoZnMuZXhpc3RzU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi53ZWJwYWNrVmVyc2lvbiA9IHdlYnBhY2tQa2cudmVyc2lvblxuXG4gIHZhciBleHRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9Ac2VuY2hhL2V4dCcpXG4gIHZhciBleHRQa2cgPSAoZnMuZXhpc3RzU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYuZXh0VmVyc2lvbiA9IGV4dFBrZy5zZW5jaGEudmVyc2lvblxuXG4gIHZhciBjbWRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYuY21kVmVyc2lvbiA9IGNtZFBrZy52ZXJzaW9uX2Z1bGxcblxuICBpZiAodi5jbWRWZXJzaW9uID09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjbWRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhLyR7cGx1Z2luTmFtZX0vbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICAgIHYuY21kVmVyc2lvbiA9IGNtZFBrZy52ZXJzaW9uX2Z1bGxcbiAgfVxuXG4gIHZhciBmcmFtZXdvcmtJbmZvID0gJydcbiAgIGlmIChmcmFtZXdvcmtOYW1lICE9IHVuZGVmaW5lZCAmJiBmcmFtZXdvcmtOYW1lICE9ICdleHRqcycpIHtcbiAgICB2YXIgZnJhbWV3b3JrUGF0aCA9ICcnXG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ3JlYWN0Jykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvcmVhY3QnKVxuICAgIH1cbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAnYW5ndWxhcicpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUnKVxuICAgIH1cbiAgICB2YXIgZnJhbWV3b3JrUGtnID0gKGZzLmV4aXN0c1N5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICAgIHYuZnJhbWV3b3JrVmVyc2lvbiA9IGZyYW1ld29ya1BrZy52ZXJzaW9uXG4gICAgZnJhbWV3b3JrSW5mbyA9ICcsICcgKyBmcmFtZXdvcmtOYW1lICsgJyB2JyArIHYuZnJhbWV3b3JrVmVyc2lvblxuICB9XG4gIHJldHVybiBhcHAgKyAnZXh0LXdlYnBhY2stcGx1Z2luIHYnICsgdi5wbHVnaW5WZXJzaW9uICsgJywgRXh0IEpTIHYnICsgdi5leHRWZXJzaW9uICsgJyAnICsgdi5lZGl0aW9uICsgJyBFZGl0aW9uLCBTZW5jaGEgQ21kIHYnICsgdi5jbWRWZXJzaW9uICsgJywgd2VicGFjayB2JyArIHYud2VicGFja1ZlcnNpb24gKyBmcmFtZXdvcmtJbmZvXG4gfSJdfQ==