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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJta2RpcnAiLCJleHRDb21wb25lbnRzIiwidXNlZEV4dENvbXBvbmVudHMiLCJleHRBbmd1bGFyTW9kZXJuRm9sZGVyIiwiZXh0QW5ndWxhck1vZGVybk1vZHVsZSIsInBhY2thZ2VQYXRoIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZvckVhY2giLCJmaWxlTmFtZSIsInN1YnN0ciIsImVuZCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJyZXdyaXRlIiwiYXBwTW9kdWxlUGF0aCIsImpzIiwidG9TdHJpbmciLCJpIiwibGFzdEluZGV4T2YiLCJwYXRoVG9FeHRBbmd1bGFyTW9kZXJuIiwic3luYyIsInQiLCJleHRBbmd1bGFyTW9kZXJNb2R1bGUiLCJ3cml0ZUZpbGVTeW5jIiwiaiIsImUiLCJjb25zb2xlIiwiZXJyb3JzIiwiaG9va3MiLCJzdWNjZWVkTW9kdWxlIiwidGFwIiwibW9kdWxlIiwibGVuZ3RoIiwicmVzb3VyY2UiLCJtYXRjaCIsImRlcHMiLCJleHRyYWN0RnJvbVNvdXJjZSIsImZpbmlzaE1vZHVsZXMiLCJtb2R1bGVzIiwic3RyaW5nIiwiY29kZSIsImluZGV4IiwiU2V0IiwicmVhZEZyb20iLCJ3cml0ZVRvUGF0aCIsImV4dEFuZ3VsYXJNb2R1bGVCYXNlRmlsZSIsImJhc2VDb250ZW50Iiwid3JpdGVUb1BhdGhXcml0dGVuIiwibW9kdWxlVmFycyIsImltcG9ydHMiLCJleHBvcnRzIiwiZGVjbGFyYXRpb25zIiwieHR5cGUiLCJjYXBjbGFzc25hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2UiLCJzbGljZSIsImNsYXNzRmlsZSIsImNvbnRlbnRzIiwiZW1pdCIsImNhbGxiYWNrIiwiX2J1aWxkRXh0QnVuZGxlIiwib3V0cHV0UGF0aCIsImV4dFBhdGgiLCJkZXZTZXJ2ZXIiLCJjb250ZW50QmFzZSIsIl9wcmVwYXJlRm9yQnVpbGQiLCJjb21tYW5kIiwid2F0Y2giLCJyZWJ1aWxkIiwicGFybXMiLCJwcm9maWxlIiwid2F0Y2hTdGFydGVkIiwib3V0cHV0IiwicmltcmFmIiwicGFja2FnZXMiLCJ0b29sa2l0IiwidGhlbWUiLCJmaXJzdFRpbWUiLCJidWlsZFhNTCIsImNyZWF0ZUFwcEpzb24iLCJjcmVhdGVXb3Jrc3BhY2VKc29uIiwiY3JlYXRlSlNET01FbnZpcm9ubWVudCIsImZyb21QYXRoIiwidG9QYXRoIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsImluY2x1ZGVzIiwibWFuaWZlc3QiLCJidW5kbGVEaXIiLCJ0cmltIiwic2VuY2hhIiwiUHJvbWlzZSIsInJlamVjdCIsIm9uQnVpbGREb25lIiwib3B0cyIsInNpbGVudCIsInN0ZGlvIiwiZW5jb2RpbmciLCJleGVjdXRlQXN5bmMiLCJ0aGVuIiwicmVhc29uIiwiREVGQVVMVF9TVUJTVFJTIiwic3Vic3RyaW5ncyIsImNoYWxrIiwiY3Jvc3NTcGF3biIsImNoaWxkIiwib24iLCJzaWduYWwiLCJFcnJvciIsImVycm9yIiwic3Rkb3V0IiwiZGF0YSIsInN0ciIsInNvbWUiLCJ2IiwicmVkIiwic3RkZXJyIiwic3RySmF2YU9wdHMiLCJzIiwiY3Vyc29yVG8iLCJjbGVhckxpbmUiLCJ3cml0ZSIsInZlcmJvc2UiLCJwcmVmaXgiLCJwbGF0Zm9ybSIsImdyZWVuIiwiZnJhbWV3b3JrTmFtZSIsInBsdWdpblBhdGgiLCJwbHVnaW5Qa2ciLCJwbHVnaW5WZXJzaW9uIiwidmVyc2lvbiIsIl9yZXNvbHZlZCIsImVkaXRpb24iLCJ3ZWJwYWNrUGF0aCIsIndlYnBhY2tQa2ciLCJ3ZWJwYWNrVmVyc2lvbiIsImV4dFBrZyIsImV4dFZlcnNpb24iLCJjbWRQYXRoIiwiY21kUGtnIiwiY21kVmVyc2lvbiIsInZlcnNpb25fZnVsbCIsImZyYW1ld29ya0luZm8iLCJmcmFtZXdvcmtQYXRoIiwiZnJhbWV3b3JrUGtnIiwiZnJhbWV3b3JrVmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxTQUFTQSxZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUNwQyxRQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLFFBQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDLElBQUQsQ0FBbEI7O0FBRUEsTUFBSUUsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFFQSxNQUFJTixPQUFPLENBQUNPLFNBQVIsSUFBcUJDLFNBQXpCLEVBQW9DO0FBQ2xDSixJQUFBQSxRQUFRLENBQUNLLFlBQVQsR0FBd0IsRUFBeEI7QUFDQUwsSUFBQUEsUUFBUSxDQUFDSyxZQUFULENBQXNCQyxJQUF0QixDQUEyQiwwR0FBM0I7QUFDQUosSUFBQUEsTUFBTSxDQUFDSyxJQUFQLEdBQWNQLFFB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QyxlQUE5QixFQUErQyxPQUEvQyxDQUFYLENBQWhELElBQXVILEVBQTNJO0FBQ0E3QixJQUFBQSxDQUFDLENBQUMrQixnQkFBRixHQUFxQkQsWUFBWSxDQUFDZCxPQUFsQztBQUNBWSxJQUFBQSxhQUFhLEdBQUcsT0FBT2hCLGFBQVAsR0FBdUIsSUFBdkIsR0FBOEJaLENBQUMsQ0FBQytCLGdCQUFoRDtBQUNEOztBQUNELFNBQU9ySyxHQUFHLEdBQUcsc0JBQU4sR0FBK0JzSSxDQUFDLENBQUNlLGFBQWpDLEdBQWlELFlBQWpELEdBQWdFZixDQUFDLENBQUN1QixVQUFsRSxHQUErRSxHQUEvRSxHQUFxRnZCLENBQUMsQ0FBQ2tCLE9BQXZGLEdBQWlHLHdCQUFqRyxHQUE0SGxCLENBQUMsQ0FBQzBCLFVBQTlILEdBQTJJLGFBQTNJLEdBQTJKMUIsQ0FBQyxDQUFDcUIsY0FBN0osR0FBOEtPLGFBQXJMO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29uc3RydWN0b3Iob3B0aW9ucykge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB0aGlzVmFycyA9IHt9XG4gIHZhciB0aGlzT3B0aW9ucyA9IHt9XG4gIHZhciBwbHVnaW4gPSB7fVxuXG4gIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMgPSBbXVxuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycy5wdXNoKCd3ZWJwYWNrIGNvbmZpZzogZnJhbWV3b3JrIHBhcmFtZXRlciBvbiBleHQtd2VicGFjay1wbHVnaW4gaXMgbm90IGRlZmluZWQgLSB2YWx1ZXM6IHJlYWN0LCBhbmd1bGFyLCBleHRqcycpXG4gICAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICAgIHJldHVybiBwbHVnaW5cbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlT3B0aW9ucyA9IHJlcXVpcmUoJ3NjaGVtYS11dGlscycpXG4gIHZhbGlkYXRlT3B0aW9ucyhyZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldFZhbGlkYXRlT3B0aW9ucygpLCBvcHRpb25zLCAnJylcblxuICAvL2ZpeCBzZW5jaGEgY21kIG5vIGpldHR5IHNlcnZlciBwcm9ibGVtXG4gIC8vIHZhciB3YXRjaEZpbGUgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kL2Rpc3QvYW50L2J1aWxkL2FwcC93YXRjaC1pbXBsLnhtbGApXG4gIC8vIGxvZ3Yob3B0aW9ucywgYG1vZGlmeSAke3dhdGNoRmlsZX1gKVxuICAvLyB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3YXRjaEZpbGUsICd1dGYtOCcpO1xuICAvLyB2YXIgaXAgPSAnd2ViU2VydmVyUmVmSWQ9XCJhcHAud2ViLnNlcnZlclwiJztcbiAgLy8gdmFyIG5ld1ZhbHVlID0gZGF0YS5yZXBsYWNlKG5ldyBSZWdFeHAoaXApLCAnJyk7XG4gIC8vIGZzLndyaXRlRmlsZVN5bmMod2F0Y2hGaWxlLCBuZXdWYWx1ZSwgJ3V0Zi04Jyk7XG5cbiAgdGhpc1ZhcnMgPSByZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldERlZmF1bHRWYXJzKClcbiAgdGhpc1ZhcnMuZnJhbWV3b3JrID0gb3B0aW9ucy5mcmFtZXdvcmtcbiAgc3dpdGNoKHRoaXNWYXJzLmZyYW1ld29yaykge1xuICAgIGNhc2UgJ2V4dGpzJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVhY3QnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtcmVhY3Qtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbmd1bGFyJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LWFuZ3VsYXItd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gIH1cblxuICAvL2ZpeCBmYXNoaW9uIGRpc3QgcHJvYmxlbVxuICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gIHZhciB0b0Zhc2hpb25EaXN0ID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZC9kaXN0L2pzL25vZGVfbW9kdWxlcy9mYXNoaW9uL2Rpc3RgKVxuICBsb2d2KG9wdGlvbnMsIGB0b0Zhc2hpb25EaXN0ICR7dG9GYXNoaW9uRGlzdH1gKVxuICBpZiAoIWZzLmV4aXN0c1N5bmModG9GYXNoaW9uRGlzdCkpIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBjb3B5YClcbiAgICB2YXIgZnJvbUZhc2hpb25EaXN0ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS8nICsgdGhpc1ZhcnMucGx1Z2luTmFtZSArICcvZmFzaGlvbi9kaXN0LycpXG4gICAgZnN4LmNvcHlTeW5jKGZyb21GYXNoaW9uRGlzdCwgdG9GYXNoaW9uRGlzdClcbiAgfVxuICBlbHNlIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBubyBjb3B5IG9mIGZhc2hpb25gKVxuICB9XG5cbiAgdGhpc1ZhcnMuYXBwID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldEFwcCgpXG4gIGxvZ3Yob3B0aW9ucywgYHBsdWdpbk5hbWUgLSAke3RoaXNWYXJzLnBsdWdpbk5hbWV9YClcbiAgbG9ndihvcHRpb25zLCBgdGhpc1ZhcnMuYXBwIC0gJHt0aGlzVmFycy5hcHB9YClcblxuICBjb25zdCByYyA9IChmcy5leGlzdHNTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCkgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgLCAndXRmLTgnKSkgfHwge30pXG4gIHRoaXNPcHRpb25zID0geyAuLi5yZXF1aXJlKGAuLyR7dGhpc1ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0T3B0aW9ucygpLCAuLi5vcHRpb25zLCAuLi5yYyB9XG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNPcHRpb25zIC0gJHtKU09OLnN0cmluZ2lmeSh0aGlzT3B0aW9ucyl9YClcbiAgaWYgKHRoaXNPcHRpb25zLmVudmlyb25tZW50ID09ICdwcm9kdWN0aW9uJykgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSB0cnVlfVxuICBlbHNlIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gZmFsc2V9XG4gIGxvZyhyZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fZ2V0VmVyc2lvbnModGhpc1ZhcnMuYXBwLCB0aGlzVmFycy5wbHVnaW5OYW1lLCB0aGlzVmFycy5mcmFtZXdvcmspKVxuICBsb2codGhpc1ZhcnMuYXBwICsgJ0J1aWxkaW5nIGZvciAnICsgdGhpc09wdGlvbnMuZW52aXJvbm1lbnQpXG5cbiAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICBwbHVnaW4ub3B0aW9ucyA9IHRoaXNPcHRpb25zXG4gIHJldHVybiBwbHVnaW5cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIF9jb21waWxhdGlvbicpXG5cbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbiAgICB2YXIgZXh0Q29tcG9uZW50cyA9IFtdXG4gICAgdmFyIHVzZWRFeHRDb21wb25lbnRzID0gW11cbiAgICBjb25zdCBleHRBbmd1bGFyTW9kZXJuRm9sZGVyID0gJ2V4dC1hbmd1bGFyLW1vZGVybi1wcm9kJ1xuICAgIGNvbnN0IGV4dEFuZ3VsYXJNb2Rlcm5Nb2R1bGUgPSAnZXh0LWFuZ3VsYXItbW9kZXJuLm1vZHVsZSdcblxuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywgYGV4dC1jb21waWxhdGlvbjogcHJvZHVjdGlvbiBpcyBgICsgdmFycy5wcm9kdWN0aW9uKVxuXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIGNvbnN0IHBhY2thZ2VQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4nKVxuICAgICAgICB2YXIgZmlsZXMgPSBmc3gucmVhZGRpclN5bmMoYCR7cGFja2FnZVBhdGh9L2xpYmApXG4gICAgICAgIGZpbGVzLmZvckVhY2goKGZpbGVOYW1lKSA9PiB7XG4gICAgICAgICAgaWYgKGZpbGVOYW1lICYmIGZpbGVOYW1lLnN1YnN0cigwLCA0KSA9PSAnZXh0LScpIHtcbiAgICAgICAgICAgIHZhciBlbmQgPSBmaWxlTmFtZS5zdWJzdHIoNCkuaW5kZXhPZignLmNvbXBvbmVudCcpXG4gICAgICAgICAgICBpZiAoZW5kID49IDApIHtcbiAgICAgICAgICAgICAgZXh0Q29tcG9uZW50cy5wdXNoKGZpbGVOYW1lLnN1YnN0cmluZyg0LCBlbmQgKyA0KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgcmV3cml0ZSA9IGZhbHNlXG4gICAgICAgICAgY29uc3QgYXBwTW9kdWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2FwcC9hcHAubW9kdWxlLnRzJylcbiAgICAgICAgICB2YXIganMgPSBmc3gucmVhZEZpbGVTeW5jKGFwcE1vZHVsZVBhdGgpLnRvU3RyaW5nKClcbiAgICAgICAgICB2YXIgaSA9IGpzLmluZGV4T2YoJ0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuJylcbiAgICAgICAgICBpID0ganMuc3Vic3RyaW5nKDAsIGkpLmxhc3RJbmRleE9mKCdpbXBvcnQnKVxuXG4gICAgICAgICAgaWYgKGpzLnN1YnN0cihpIC0gMywgMykgIT09ICcvLyAnKSB7XG4gICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBpKSArICdcXG4gLy8gJyArIGpzLnN1YnN0cmluZyhpKVxuICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXRoVG9FeHRBbmd1bGFyTW9kZXJuID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGBzcmMvYXBwLyR7ZXh0QW5ndWxhck1vZGVybkZvbGRlcn1gKVxuICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKSkge1xuICAgICAgICAgICAgbWtkaXJwLnN5bmMocGF0aFRvRXh0QW5ndWxhck1vZGVybilcbiAgICAgICAgICAgIGNvbnN0IHQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmV4dEFuZ3VsYXJNb2Rlck1vZHVsZSgnJywgJycsICcnKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoXG4gICAgICAgICAgICAgIGAke3BhdGhUb0V4dEFuZ3VsYXJNb2Rlcm59LyR7ZXh0QW5ndWxhck1vZGVybk1vZHVsZX0udHNgLCB0LCAndXRmLTgnLCAoKSA9PiB7cmV0dXJufVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGogPSBqcy5pbmRleE9mKGAuLyR7ZXh0QW5ndWxhck1vZGVybkZvbGRlcn0vJHtleHRBbmd1bGFyTW9kZXJuTW9kdWxlfWApXG4gICAgICAgICAgaWYgKGogPCAwKSB7XG4gICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBpKSArIGBpbXBvcnQge0V4dEFuZ3VsYXJNb2Rlcm5Nb2R1bGV9IGZyb20gJy4vJHtleHRBbmd1bGFyTW9kZXJuRm9sZGVyfS8ke2V4dEFuZ3VsYXJNb2Rlcm5Nb2R1bGV9J1xcbmAgKyBqcy5zdWJzdHIoaSlcbiAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGpzLnN1YnN0cihqIC0gNDMsIDMpID09ICcvLyAnKSB7XG4gICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBqIC0gNDMpICsgJ1xcbicgK2pzLnN1YnN0cmluZyhqIC0gNDApXG4gICAgICAgICAgICByZXdyaXRlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmV3cml0ZSlcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGFwcE1vZHVsZVBhdGgsIGpzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdidWlsZE1vZHVsZSBob29rIGluIF9jb21waWxhdGlvbjogJyArIGUpXG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29tcGlsYXRpb24uaG9va3Muc3VjY2VlZE1vZHVsZS50YXAoYGV4dC1zdWNjZWVkLW1vZHVsZWAsIG1vZHVsZSA9PiB7XG4gICAgICAgIGlmIChleHRDb21wb25lbnRzLmxlbmd0aCAmJiBtb2R1bGUucmVzb3VyY2UgJiYgKG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuKGp8dClzeD8kLykgfHxcbiAgICAgICAgb3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuaHRtbCQvKSkgJiZcbiAgICAgICAgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvbm9kZV9tb2R1bGVzLykgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaChgL2V4dC17JG9wdGlvbnMuZnJhbWV3b3JrfS9kaXN0L2ApKSB7XG4gICAgICAgICAgdmFycy5kZXBzID0gWy4uLih2YXJzLmRlcHMgfHwgW10pLCAuLi5yZXF1aXJlKGAuLyR7dmFycy5mcmFtZXdvcmt9VXRpbGApLmV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmZpbmlzaE1vZHVsZXMudGFwKGBleHQtZmluaXNoLW1vZHVsZXNgLCBtb2R1bGVzID0+IHtcbiAgICAgICAgICBjb25zdCBzdHJpbmcgPSAnRXh0LmNyZWF0ZSh7XFxcInh0eXBlXFxcIjpcXFwiJ1xuICAgICAgICAgIHZhcnMuZGVwcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY29kZS5pbmRleE9mKHN0cmluZylcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUuc3Vic3RyaW5nKGluZGV4ICsgc3RyaW5nLmxlbmd0aClcbiAgICAgICAgICAgICAgdmFyIGVuZCA9IGNvZGUuaW5kZXhPZignXFxcIicpXG4gICAgICAgICAgICAgIHVzZWRFeHRDb21wb25lbnRzLnB1c2goY29kZS5zdWJzdHIoMCwgZW5kKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHVzZWRFeHRDb21wb25lbnRzID0gWy4uLm5ldyBTZXQodXNlZEV4dENvbXBvbmVudHMpXVxuICAgICAgICAgIGNvbnN0IHJlYWRGcm9tID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vc3JjL2xpYicpXG4gICAgICAgICAgY29uc3Qgd3JpdGVUb1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYHNyYy9hcHAvJHtleHRBbmd1bGFyTW9kZXJuRm9sZGVyfWApXG4gICAgICAgICAgY29uc3QgZXh0QW5ndWxhck1vZHVsZUJhc2VGaWxlID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGAke3dyaXRlVG9QYXRofS9iYXNlLnRzYClcblxuICAgICAgICAgIGNvbnN0IGJhc2VDb250ZW50ID0gZnN4LnJlYWRGaWxlU3luYyhgJHtyZWFkRnJvbX0vYmFzZS50c2ApLnRvU3RyaW5nKClcbiAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0vYmFzZS50c2AsIGJhc2VDb250ZW50LCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgXG4gICAgICAgICAgdmFyIHdyaXRlVG9QYXRoV3JpdHRlbiA9IGZhbHNlXG4gICAgICAgICAgdmFyIG1vZHVsZVZhcnMgPSB7XG4gICAgICAgICAgICBpbXBvcnRzOiAnJyxcbiAgICAgICAgICAgIGV4cG9ydHM6ICcnLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cy5mb3JFYWNoKHh0eXBlID0+IHtcbiAgICAgICAgICAgIHZhciBjYXBjbGFzc25hbWUgPSB4dHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHh0eXBlLnJlcGxhY2UoLy0vZywgXCJfXCIpLnNsaWNlKDEpXG4gICAgICAgICAgICBtb2R1bGVWYXJzLmltcG9ydHMgPSBtb2R1bGVWYXJzLmltcG9ydHMgKyBgaW1wb3J0IHsgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50IH0gZnJvbSAnLi9leHQtJHt4dHlwZX0uY29tcG9uZW50JztcXG5gXG4gICAgICAgICAgICBtb2R1bGVWYXJzLmV4cG9ydHMgPSBtb2R1bGVWYXJzLmV4cG9ydHMgKyBgICAgIEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCxcXG5gXG4gICAgICAgICAgICBtb2R1bGVWYXJzLmRlY2xhcmF0aW9ucyA9IG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zICsgYCAgICBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQsXFxuYFxuICAgICAgICAgICAgdmFyIGNsYXNzRmlsZSA9IGAvZXh0LSR7eHR5cGV9LmNvbXBvbmVudC50c2BcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRzID0gZnN4LnJlYWRGaWxlU3luYyhgJHtyZWFkRnJvbX0ke2NsYXNzRmlsZX1gKS50b1N0cmluZygpXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0ke2NsYXNzRmlsZX1gLCBjb250ZW50cywgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgICAgd3JpdGVUb1BhdGhXcml0dGVuID0gdHJ1ZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpZiAod3JpdGVUb1BhdGhXcml0dGVuKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZGVyTW9kdWxlKFxuICAgICAgICAgICAgICBtb2R1bGVWYXJzLmltcG9ydHMsIG1vZHVsZVZhcnMuZXhwb3J0cywgbW9kdWxlVmFycy5kZWNsYXJhdGlvbnNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9LyR7ZXh0QW5ndWxhck1vZGVybk1vZHVsZX0udHNgLCB0LCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19jb21waWxhdGlvbjogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIGVtaXQnKVxuICAgIHZhciBhcHAgPSB2YXJzLmFwcFxuICAgIHZhciBmcmFtZXdvcmsgPSB2YXJzLmZyYW1ld29ya1xuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICBjb25zdCBfYnVpbGRFeHRCdW5kbGUgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fYnVpbGRFeHRCdW5kbGVcbiAgICBsZXQgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vdXRwdXRQYXRoLHZhcnMuZXh0UGF0aClcbiAgICBpZiAoY29tcGlsZXIub3V0cHV0UGF0aCA9PT0gJy8nICYmIGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlLCBvdXRwdXRQYXRoKVxuICAgIH1cbiAgICBsb2d2KG9wdGlvbnMsJ291dHB1dFBhdGg6ICcgKyBvdXRwdXRQYXRoKVxuICAgIGxvZ3Yob3B0aW9ucywnZnJhbWV3b3JrOiAnICsgZnJhbWV3b3JrKVxuICAgIGlmIChvcHRpb25zLmVtaXQgPT0gdHJ1ZSkge1xuICAgICAgaWYgKGZyYW1ld29yayAhPSAnZXh0anMnKSB7XG4gICAgICAgIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG5cbiAgICAgIHZhciBjb21tYW5kID0gJydcbiAgICAgIGlmIChvcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICBjb21tYW5kID0gJ3dhdGNoJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbW1hbmQgPSAnYnVpbGQnXG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJzLnJlYnVpbGQgPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGFybXMgPSBbXVxuICAgICAgICBpZiAob3B0aW9ucy5wcm9maWxlID09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByb2ZpbGUgPT0gJycgfHwgb3B0aW9ucy5wcm9maWxlID09IG51bGwpIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFycy53YXRjaFN0YXJ0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICBhd2FpdCBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpXG4gICAgICAgICAgdmFycy53YXRjaFN0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbnN0IGpzQ2h1bmsgPSBjb21waWxhdGlvbi5hZGRDaHVuayhgZXh0LWFuZ3VsYXItanNgKVxuICAgICAgICAvL2pzQ2h1bmsuaGFzUnVudGltZSA9IGpzQ2h1bmsuaXNJbml0aWFsID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLy9qc0NodW5rLmZpbGVzLnB1c2gocGF0aC5qb2luKCdidWlsZCcsICdleHQtYW5ndWxhcicsICdleHQuanMnKSk7XG4gICAgICAgIC8vanNDaHVuay5maWxlcy5wdXNoKHBhdGguam9pbignYnVpbGQnLCAnZXh0LWFuZ3VsYXInLCAgJ2V4dC5jc3MnKSk7XG4gICAgICAgIC8vanNDaHVuay5pZCA9IC0yOyAvLyB0aGlzIGZvcmNlcyBodG1sLXdlYnBhY2stcGx1Z2luIHRvIGluY2x1ZGUgZXh0LmpzIGZpcnN0XG5cbiAgICAgICAgLy8gaWYob3B0aW9ucy5icm93c2VyID09IHRydWUgJiYgb3B0aW9ucy53YXRjaCA9PSAneWVzJykge1xuICAgICAgICAvLyAgIGlmICh2YXJzLmJyb3dzZXJDb3VudCA9PSAwICYmIGNvbXBpbGF0aW9uLmVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyBvcHRpb25zLnBvcnRcbiAgICAgICAgLy8gICAgIGxvZyhhcHAgKyBgT3BlbmluZyBicm93c2VyIGF0ICR7dXJsfWApXG4gICAgICAgIC8vICAgICB2YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAgIC8vICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgICAvLyAgICAgb3BuKHVybClcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgbG9ndihvcHRpb25zLCdicm93c2VyIE5PVCBvcGVuZWQnKVxuICAgICAgICAvLyB9XG5cblxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZyhgJHt2YXJzLmFwcH1GVU5DVElPTiBlbWl0IG5vdCBydW5gKVxuICAgICAgLy8gaWYob3B0aW9ucy5icm93c2VyID09IHRydWUpIHtcbiAgICAgIC8vICAgaWYgKHZhcnMuYnJvd3NlckNvdW50ID09IDAgJiYgb3B0aW9ucy53YXRjaCA9PSAneWVzJykge1xuICAgICAgLy8gICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgb3B0aW9ucy5wb3J0XG4gICAgICAvLyAgICAgbG9nKGFwcCArIGBPcGVuaW5nIGJyb3dzZXIgYXQgJHt1cmx9YClcbiAgICAgIC8vICAgICB2YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAvLyAgICAgY29uc3Qgb3BuID0gcmVxdWlyZSgnb3BuJylcbiAgICAgIC8vICAgICBvcG4odXJsKVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgbG9ndihvcHRpb25zLCdicm93c2VyIE5PVCBvcGVuZWQnKVxuICAgICAgLy8gfVxuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2VtaXQ6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0LCBjb21waWxhdGlvbikge1xuICB0cnkge1xuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX3ByZXBhcmVGb3JCdWlsZCcpXG4gICAgY29uc3QgcmltcmFmID0gcmVxdWlyZSgncmltcmFmJylcbiAgICBjb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKVxuICAgIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbiAgICB2YXIgcGFja2FnZXMgPSBvcHRpb25zLnBhY2thZ2VzXG4gICAgdmFyIHRvb2xraXQgPSBvcHRpb25zLnRvb2xraXRcbiAgICB2YXIgdGhlbWUgPSBvcHRpb25zLnRoZW1lXG5cbiAgICB0aGVtZSA9IHRoZW1lIHx8ICh0b29sa2l0ID09PSAnY2xhc3NpYycgPyAndGhlbWUtdHJpdG9uJyA6ICd0aGVtZS1tYXRlcmlhbCcpXG4gICAgbG9ndihvcHRpb25zLCdmaXJzdFRpbWU6ICcgKyB2YXJzLmZpcnN0VGltZSlcbiAgICBpZiAodmFycy5maXJzdFRpbWUpIHtcbiAgICAgIHJpbXJhZi5zeW5jKG91dHB1dClcbiAgICAgIG1rZGlycC5zeW5jKG91dHB1dClcbiAgICAgIGNvbnN0IGJ1aWxkWE1MID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5idWlsZFhNTFxuICAgICAgY29uc3QgY3JlYXRlQXBwSnNvbiA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlQXBwSnNvblxuICAgICAgY29uc3QgY3JlYXRlV29ya3NwYWNlSnNvbiA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlV29ya3NwYWNlSnNvblxuICAgICAgY29uc3QgY3JlYXRlSlNET01FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlSlNET01FbnZpcm9ubWVudFxuXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdidWlsZC54bWwnKSwgYnVpbGRYTUwodmFycy5wcm9kdWN0aW9uLCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdhcHAuanNvbicpLCBjcmVhdGVBcHBKc29uKHRoZW1lLCBwYWNrYWdlcywgdG9vbGtpdCwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnanNkb20tZW52aXJvbm1lbnQuanMnKSwgY3JlYXRlSlNET01FbnZpcm9ubWVudChvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICd3b3Jrc3BhY2UuanNvbicpLCBjcmVhdGVXb3Jrc3BhY2VKc29uKG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcblxuICAgICAgaWYgKHZhcnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvcGFja2FnZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnMUNvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJzJDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAncmVhY3QnKSAge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L3BhY2thZ2VzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICczQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L292ZXJyaWRlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJzRDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9kbyB3ZSBldmVyIGhpdCB0aGVzZT9cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJy4uL3Jlc291cmNlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgICAgbG9nKGFwcCArICc1Q29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuICAgICAgLy8gaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3Jlc291cmNlcy8nKSkpIHtcbiAgICAgIC8vICAgdmFyIGZyb21SZXNvdXJjZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Jlc291cmNlcy8nKVxuICAgICAgLy8gICB2YXIgdG9SZXNvdXJjZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAncmVzb3VyY2VzJylcbiAgICAgIC8vICAgZnN4LmNvcHlTeW5jKGZyb21SZXNvdXJjZXMsIHRvUmVzb3VyY2VzKVxuICAgICAgLy8gICBsb2coYXBwICsgJzZDb3B5aW5nICcgKyBmcm9tUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgLy8gfVxuICAgICAgXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncGFja2FnZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGFja2FnZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3BhY2thZ2VzLycpXG4gICAgICAgIHZhciB0b1BhY2thZ2VzID0gcGF0aC5qb2luKG91dHB1dCwgJ3BhY2thZ2VzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYWNrYWdlcywgdG9QYWNrYWdlcylcbiAgICAgICAgbG9nKGFwcCArICc3Q29weWluZyAnICsgZnJvbVBhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdvdmVycmlkZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnb3ZlcnJpZGVzLycpXG4gICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgIGxvZyhhcHAgKyAnOENvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuXG5cbiAgICB9XG4gICAgdmFycy5maXJzdFRpbWUgPSBmYWxzZVxuICAgIHZhciBqcyA9ICcnXG4gICAgaWYgKHZhcnMucHJvZHVjdGlvbikge1xuICAgICAgaWYgKCF2YXJzLmRlcHMuaW5jbHVkZXMoJ0V4dC5yZXF1aXJlKFwiRXh0LmxheW91dC4qXCIpO1xcbicpKVxuICAgICAgICB2YXJzLmRlcHMucHVzaCgnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJylcbiAgICAgIGpzID0gdmFycy5kZXBzLmpvaW4oJztcXG4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBqcyA9ICdFeHQucmVxdWlyZShcIkV4dC4qXCIpJ1xuICAgIH1cbiAgICBpZiAodmFycy5tYW5pZmVzdCA9PT0gbnVsbCB8fCBqcyAhPT0gdmFycy5tYW5pZmVzdCkge1xuICAgICAgdmFycy5tYW5pZmVzdCA9IGpzXG4gICAgICBjb25zdCBtYW5pZmVzdCA9IHBhdGguam9pbihvdXRwdXQsICdtYW5pZmVzdC5qcycpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0LCBqcywgJ3V0ZjgnKVxuICAgICAgdmFycy5yZWJ1aWxkID0gdHJ1ZVxuICAgICAgdmFyIGJ1bmRsZURpciA9IG91dHB1dC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKVxuICAgICAgaWYgKGJ1bmRsZURpci50cmltKCkgPT0gJycpIHtidW5kbGVEaXIgPSAnLi8nfVxuICAgICAgbG9nKGFwcCArICdCdWlsZGluZyBFeHQgYnVuZGxlIGF0OiAnICsgYnVuZGxlRGlyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhcnMucmVidWlsZCA9IGZhbHNlXG4gICAgICBsb2coYXBwICsgJ0V4dCByZWJ1aWxkIE5PVCBuZWVkZWQnKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19wcmVwYXJlRm9yQnVpbGQ6ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfYnVpbGRFeHRCdW5kbGUnKVxuXG4gICAgbGV0IHNlbmNoYTsgdHJ5IHsgc2VuY2hhID0gcmVxdWlyZSgnQHNlbmNoYS9jbWQnKSB9IGNhdGNoIChlKSB7IHNlbmNoYSA9ICdzZW5jaGEnIH1cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhzZW5jaGEpKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgZXhpc3RzJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgRE9FUyBOT1QgZXhpc3QnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvbkJ1aWxkRG9uZSA9ICgpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdvbkJ1aWxkRG9uZScpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB2YXIgb3B0cyA9IHsgY3dkOiBvdXRwdXRQYXRoLCBzaWxlbnQ6IHRydWUsIHN0ZGlvOiAncGlwZScsIGVuY29kaW5nOiAndXRmLTgnfVxuICAgICAgZXhlY3V0ZUFzeW5jKGFwcCwgc2VuY2hhLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbigpIHsgb25CdWlsZERvbmUoKSB9LCBcbiAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7IHJlamVjdChyZWFzb24pIH1cbiAgICAgIClcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZScpXG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19idWlsZEV4dEJ1bmRsZTogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVBc3luYyAoYXBwLCBjb21tYW5kLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICAvL2NvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFsnW0lORl0gTG9hZGluZycsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFNlcnZlclwiLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICBjb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbXCJbSU5GXSB4U2VydmVyXCIsICdbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIEFwcGVuZCcsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcgQnVpbGQnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIHZhciBzdWJzdHJpbmdzID0gREVGQVVMVF9TVUJTVFJTIFxuICAgIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgICBjb25zdCBjcm9zc1NwYXduID0gcmVxdWlyZSgnY3Jvc3Mtc3Bhd24nKVxuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIGV4ZWN1dGVBc3luYycpXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbG9ndihvcHRpb25zLGBjb21tYW5kIC0gJHtjb21tYW5kfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBwYXJtcyAtICR7cGFybXN9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYG9wdHMgLSAke0pTT04uc3RyaW5naWZ5KG9wdHMpfWApXG4gICAgICBsZXQgY2hpbGQgPSBjcm9zc1NwYXduKGNvbW1hbmQsIHBhcm1zLCBvcHRzKVxuICAgICAgY2hpbGQub24oJ2Nsb3NlJywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBjbG9zZTogYCArIGNvZGUpIFxuICAgICAgICBpZihjb2RlID09PSAwKSB7IHJlc29sdmUoMCkgfVxuICAgICAgICBlbHNlIHsgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcihjb2RlKSApOyByZXNvbHZlKDApIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5vbignZXJyb3InLCAoZXJyb3IpID0+IHsgXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGVycm9yYCkgXG4gICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgICByZXNvbHZlKDApXG4gICAgICB9KVxuICAgICAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYCR7c3RyfWApXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcoKS5tYXRjaCgvd2FpdGluZyBmb3IgY2hhbmdlc1xcLlxcLlxcLi8pKSB7XG4gICAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdWJzdHJpbmdzLnNvbWUoZnVuY3Rpb24odikgeyByZXR1cm4gZGF0YS5pbmRleE9mKHYpID49IDA7IH0pKSB7IFxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbSU5GXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbTE9HXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhcIltFUlJdXCIpKSB7XG4gICAgICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGFwcCArIHN0ci5yZXBsYWNlKC9eXFxbRVJSXFxdIC9naSwgJycpKTtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbRVJSXVwiLCBgJHtjaGFsay5yZWQoXCJbRVJSXVwiKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nKGAke2FwcH0ke3N0cn1gKSBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBlcnJvciBvbiBjbG9zZTogYCArIGRhdGEpIFxuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgdmFyIHN0ckphdmFPcHRzID0gXCJQaWNrZWQgdXAgX0pBVkFfT1BUSU9OU1wiO1xuICAgICAgICB2YXIgaW5jbHVkZXMgPSBzdHIuaW5jbHVkZXMoc3RySmF2YU9wdHMpXG4gICAgICAgIGlmICghaW5jbHVkZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHthcHB9ICR7Y2hhbGsucmVkKFwiW0VSUl1cIil9ICR7c3RyfWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2V4ZWN1dGVBc3luYzogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9IFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cocykge1xuICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICB0cnkge1xuICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gIH1cbiAgY2F0Y2goZSkge31cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUocylcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2d2KG9wdGlvbnMsIHMpIHtcbiAgaWYgKG9wdGlvbnMudmVyYm9zZSA9PSAneWVzJykge1xuICAgIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYC12ZXJib3NlOiAke3N9YClcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFwcCgpIHtcbiAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICB2YXIgcHJlZml4ID0gYGBcbiAgY29uc3QgcGxhdGZvcm0gPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKClcbiAgaWYgKHBsYXRmb3JtID09ICdkYXJ3aW4nKSB7IHByZWZpeCA9IGDihLkg772iZXh0772jOmAgfVxuICBlbHNlIHsgcHJlZml4ID0gYGkgW2V4dF06YCB9XG4gIHJldHVybiBgJHtjaGFsay5ncmVlbihwcmVmaXgpfSBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VmVyc2lvbnMoYXBwLCBwbHVnaW5OYW1lLCBmcmFtZXdvcmtOYW1lKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHYgPSB7fVxuICB2YXIgcGx1Z2luUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYScsIHBsdWdpbk5hbWUpXG4gIHZhciBwbHVnaW5Qa2cgPSAoZnMuZXhpc3RzU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYucGx1Z2luVmVyc2lvbiA9IHBsdWdpblBrZy52ZXJzaW9uXG4gIHYuX3Jlc29sdmVkID0gcGx1Z2luUGtnLl9yZXNvbHZlZFxuICBpZiAodi5fcmVzb2x2ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKC0xID09IHYuX3Jlc29sdmVkLmluZGV4T2YoJ2NvbW11bml0eScpKSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbXVuaXR5YFxuICAgIH1cbiAgfVxuXG4gIHZhciB3ZWJwYWNrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvd2VicGFjaycpXG4gIHZhciB3ZWJwYWNrUGtnID0gKGZzLmV4aXN0c1N5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYud2VicGFja1ZlcnNpb24gPSB3ZWJwYWNrUGtnLnZlcnNpb25cblxuICB2YXIgZXh0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQnKVxuICB2YXIgZXh0UGtnID0gKGZzLmV4aXN0c1N5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmV4dFZlcnNpb24gPSBleHRQa2cuc2VuY2hhLnZlcnNpb25cblxuICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG5cbiAgaWYgKHYuY21kVmVyc2lvbiA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS8ke3BsdWdpbk5hbWV9L25vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gICAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG4gIH1cblxuICB2YXIgZnJhbWV3b3JrSW5mbyA9ICcnXG4gICBpZiAoZnJhbWV3b3JrTmFtZSAhPSB1bmRlZmluZWQgJiYgZnJhbWV3b3JrTmFtZSAhPSAnZXh0anMnKSB7XG4gICAgdmFyIGZyYW1ld29ya1BhdGggPSAnJ1xuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdyZWFjdCcpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3JlYWN0JylcbiAgICB9XG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlJylcbiAgICB9XG4gICAgdmFyIGZyYW1ld29ya1BrZyA9IChmcy5leGlzdHNTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmZyYW1ld29ya1ZlcnNpb24gPSBmcmFtZXdvcmtQa2cudmVyc2lvblxuICAgIGZyYW1ld29ya0luZm8gPSAnLCAnICsgZnJhbWV3b3JrTmFtZSArICcgdicgKyB2LmZyYW1ld29ya1ZlcnNpb25cbiAgfVxuICByZXR1cm4gYXBwICsgJ2V4dC13ZWJwYWNrLXBsdWdpbiB2JyArIHYucGx1Z2luVmVyc2lvbiArICcsIEV4dCBKUyB2JyArIHYuZXh0VmVyc2lvbiArICcgJyArIHYuZWRpdGlvbiArICcgRWRpdGlvbiwgU2VuY2hhIENtZCB2JyArIHYuY21kVmVyc2lvbiArICcsIHdlYnBhY2sgdicgKyB2LndlYnBhY2tWZXJzaW9uICsgZnJhbWV3b3JrSW5mb1xuIH0iXX0=