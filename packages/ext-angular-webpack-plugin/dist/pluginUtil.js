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

  const fs = require('fs');

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

    if (vars.production) {
      logv(options, `ext-compilation: production is ` + vars.production);
      compilation.hooks.succeedModule.tap(`ext-succeed-module`, module => {
        if (module.resource && module.resource.match(/\.(j|t)sx?$/) && !module.resource.match(/node_modules/) && !module.resource.match(`/ext-{$options.framework}/dist/`) && !module.resource.match(`/ext-${options.framework}-${options.toolkit}/`)) {
          vars.deps = [...(vars.deps || []), ...require(`./${vars.framework}Util`).extractFromSource(module, options, compilation)];
        }
      });
    } else {
      logv(options, `ext-compilation: production is ` + vars.production);
    }

    if (options.framework != 'angular') {
      compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tap(`ext-html-generation`, data => {
        logv(options, 'HOOK ext-html-generation');

        const path = require('path');

        var outputPath = '';

        if (compiler.options.devServer) {
          console.log('a');

          if (compiler.outputPath === '/') {
            console.log('e');
            outputPath = path.join(compiler.options.devServer.contentBase, outputPath);
          } else {
            console.log('b');

            if (compiler.options.devServer.contentBase == undefined) {
              console.log('c');
              outputPath = 'build';
            } else {
              console.log('d');
              outputPath = '';
            }
          }
        } else {
          console.log('f');
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
    var log, logv, app, framework, path, _buildExtBundle, outputPath, command, parms, url, opn;

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
            _context.next = 28;
            break;
          }

          if (framework != 'extjs') {
            _prepareForBuild(app, vars, options, outputPath, compilation);
          } else {
            require(`./${framework}Util`)._prepareForBuild(app, vars, options, outputPath, compilation);
          }

          command = '';

          if (options.watch == 'yes') {
            command = 'watch';
          } else {
            command = 'build';
          }

          if (!(vars.rebuild == true)) {
            _context.next = 25;
            break;
          }

          parms = [];

          if (options.profile == undefined || options.profile == '' || options.profile == null) {
            parms = ['app', command, options.environment];
          } else {
            parms = ['app', command, options.profile, options.environment];
          }

          _context.next = 21;
          return _buildExtBundle(app, compilation, outputPath, parms, options);

        case 21:
          //const jsChunk = compilation.addChunk(`ext-angular-js`)
          //jsChunk.hasRuntime = jsChunk.isInitial = () => true;
          //jsChunk.files.push(path.join('build', 'ext-angular', 'ext.js'));
          //jsChunk.files.push(path.join('build', 'ext-angular',  'ext.css'));
          //jsChunk.id = -2; // this forces html-webpack-plugin to include ext.js first
          if (options.browser == true && options.watch == 'yes') {
            if (vars.browserCount == 0 && compilation.errors.length == 0) {
              url = 'http://localhost:' + options.port;
              log(app + `Opening browser at ${url}`);
              vars.browserCount++;
              opn = require('opn');
              opn(url);
            }
          } else {
            logv(options, 'browser NOT opened');
          }

          callback();
          _context.next = 26;
          break;

        case 25:
          callback();

        case 26:
          _context.next = 31;
          break;

        case 28:
          log(`${vars.app}FUNCTION emit not run`);

          if (options.browser == true) {
            if (vars.browserCount == 0 && options.watch == 'yes') {
              url = 'http://localhost:' + options.port;
              log(app + `Opening browser at ${url}`);
              vars.browserCount++;
              opn = require('opn');
              opn(url);
            }
          } else {
            logv(options, 'browser NOT opened');
          }

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

      if (fs.existsSync(path.join(process.cwd(), 'resources/'))) {
        var fromResources = path.join(process.cwd(), 'resources/');
        var toResources = path.join(output, '../resources');
        fsx.copySync(fromResources, toResources);
        log(app + 'Copying ' + fromResources.replace(process.cwd(), '') + ' to: ' + toResources.replace(process.cwd(), ''));
      }

      if (fs.existsSync(path.join(process.cwd(), 'resources/'))) {
        var fromResources = path.join(process.cwd(), 'resources/');
        var toResources = path.join(output, 'resources');
        fsx.copySync(fromResources, toResources);
        log(app + 'Copying ' + fromResources.replace(process.cwd(), '') + ' to: ' + toResources.replace(process.cwd(), ''));
      }
    }

    vars.firstTime = false;
    var js = '';

    if (vars.production) {
      vars.deps.push('Ext.require("Ext.layout.*");\n');
      js = vars.deps.join(';\n');
    } else {
      js = 'Ext.require("Ext.*")';
    }

    if (vars.manifest === null || js !== vars.manifest) {
      vars.manifest = js;
      const manifest = path.join(output, 'manifest.js');
      fs.writeFileSync(manifest, js, 'utf8');
      vars.rebuild = true;
      log(app + 'Building Ext bundle at: ' + output.replace(process.cwd(), ''));
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
          DEFAULT_SUBSTRS = ['[INF] Loading', '[INF] Append', '[INF] Processing', '[INF] Processing Build', '[LOG] Fashion build complete', '[ERR]', '[WRN]', "[INF] Server", "[INF] Writing", "[INF] Loading Build", "[INF] Waiting", "[LOG] Fashion waiting"];
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

  return app + 'ext-webpack-plugin v' + v.pluginVersion + ', Ext JS v' + v.extVersion + ', Sencha Cmd v' + v.cmdVersion + ', webpack v' + v.webpackVersion + frameworkInfo;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJ0aGlzVmFycyIsInRoaXNPcHRpb25zIiwicGx1Z2luIiwiZnJhbWV3b3JrIiwidW5kZWZpbmVkIiwicGx1Z2luRXJyb3JzIiwicHVzaCIsInZhcnMiLCJ2YWxpZGF0ZU9wdGlvbnMiLCJyZXF1aXJlIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiYXBwIiwiX2dldEFwcCIsImxvZ3YiLCJmcyIsInJjIiwiZXhpc3RzU3luYyIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsImdldERlZmF1bHRPcHRpb25zIiwic3RyaW5naWZ5IiwiZW52aXJvbm1lbnQiLCJwcm9kdWN0aW9uIiwibG9nIiwiX2dldFZlcnNpb25zIiwiX2NvbXBpbGF0aW9uIiwiY29tcGlsZXIiLCJjb21waWxhdGlvbiIsImhvb2tzIiwic3VjY2VlZE1vZHVsZSIsInRhcCIsIm1vZHVsZSIsInJlc291cmNlIiwibWF0Y2giLCJ0b29sa2l0IiwiZGVwcyIsImV4dHJhY3RGcm9tU291cmNlIiwiaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbiIsImRhdGEiLCJwYXRoIiwib3V0cHV0UGF0aCIsImRldlNlcnZlciIsImNvbnNvbGUiLCJqb2luIiwiY29udGVudEJhc2UiLCJyZXBsYWNlIiwicHJvY2VzcyIsImN3ZCIsInRyaW0iLCJqc1BhdGgiLCJleHRQYXRoIiwiY3NzUGF0aCIsImFzc2V0cyIsImpzIiwidW5zaGlmdCIsImNzcyIsImUiLCJlcnJvcnMiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsImJyb3dzZXIiLCJicm93c2VyQ291bnQiLCJsZW5ndGgiLCJ1cmwiLCJwb3J0Iiwib3BuIiwib3V0cHV0IiwicmltcmFmIiwibWtkaXJwIiwiZnN4IiwicGFja2FnZXMiLCJ0aGVtZSIsImZpcnN0VGltZSIsInN5bmMiLCJidWlsZFhNTCIsImNyZWF0ZUFwcEpzb24iLCJjcmVhdGVXb3Jrc3BhY2VKc29uIiwiY3JlYXRlSlNET01FbnZpcm9ubWVudCIsIndyaXRlRmlsZVN5bmMiLCJmcm9tUmVzb3VyY2VzIiwidG9SZXNvdXJjZXMiLCJjb3B5U3luYyIsIm1hbmlmZXN0Iiwic2VuY2hhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbkJ1aWxkRG9uZSIsIm9wdHMiLCJzaWxlbnQiLCJzdGRpbyIsImVuY29kaW5nIiwiZXhlY3V0ZUFzeW5jIiwidGhlbiIsInJlYXNvbiIsIkRFRkFVTFRfU1VCU1RSUyIsInN1YnN0cmluZ3MiLCJjaGFsayIsImNyb3NzU3Bhd24iLCJjaGlsZCIsIm9uIiwiY29kZSIsInNpZ25hbCIsIkVycm9yIiwiZXJyb3IiLCJzdGRvdXQiLCJzdHIiLCJ0b1N0cmluZyIsInNvbWUiLCJ2IiwiaW5kZXhPZiIsImluY2x1ZGVzIiwicmVkIiwic3RkZXJyIiwic3RySmF2YU9wdHMiLCJzIiwiY3Vyc29yVG8iLCJjbGVhckxpbmUiLCJ3cml0ZSIsInZlcmJvc2UiLCJwcmVmaXgiLCJwbGF0Zm9ybSIsImdyZWVuIiwiZnJhbWV3b3JrTmFtZSIsInBsdWdpblBhdGgiLCJwbHVnaW5Qa2ciLCJwbHVnaW5WZXJzaW9uIiwidmVyc2lvbiIsIndlYnBhY2tQYXRoIiwid2VicGFja1BrZyIsIndlYnBhY2tWZXJzaW9uIiwiZXh0UGtnIiwiZXh0VmVyc2lvbiIsImNtZFBhdGgiLCJjbWRQa2ciLCJjbWRWZXJzaW9uIiwidmVyc2lvbl9mdWxsIiwiZnJhbWV3b3JrSW5mbyIsImZyYW1ld29ya1BhdGgiLCJmcmFtZXdvcmtQa2ciLCJmcmFtZXdvcmtWZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLFNBQVNBLFlBQVQs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QUFqQixJQUE4QmlJLGFBQWEsSUFBSSxPQUFuRCxFQUE0RDtBQUMzRCxRQUFJZSxhQUFhLEdBQUcsRUFBcEI7O0FBQ0EsUUFBSWYsYUFBYSxJQUFJLE9BQXJCLEVBQThCO0FBQzVCZSxNQUFBQSxhQUFhLEdBQUcxRyxJQUFJLENBQUNxRCxPQUFMLENBQWE5QyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUEyQixvQkFBM0IsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJbUYsYUFBYSxJQUFJLFNBQXJCLEVBQWdDO0FBQzlCZSxNQUFBQSxhQUFhLEdBQUcxRyxJQUFJLENBQUNxRCxPQUFMLENBQWE5QyxPQUFPLENBQUNDLEdBQVIsRUFBYixFQUEyQiw0QkFBM0IsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJbUcsWUFBWSxHQUFJckksRUFBRSxDQUFDRSxVQUFILENBQWNrSSxhQUFhLEdBQUMsZUFBNUIsS0FBZ0RqSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0osRUFBRSxDQUFDSyxZQUFILENBQWdCK0gsYUFBYSxHQUFDLGVBQTlCLEVBQStDLE9BQS9DLENBQVgsQ0FBaEQsSUFBdUgsRUFBM0k7QUFDQTdCLElBQUFBLENBQUMsQ0FBQytCLGdCQUFGLEdBQXFCRCxZQUFZLENBQUNaLE9BQWxDO0FBQ0FVLElBQUFBLGFBQWEsR0FBRyxPQUFPZCxhQUFQLEdBQXVCLElBQXZCLEdBQThCZCxDQUFDLENBQUMrQixnQkFBaEQ7QUFDRDs7QUFFRCxTQUFPekksR0FBRyxHQUFHLHNCQUFOLEdBQStCMEcsQ0FBQyxDQUFDaUIsYUFBakMsR0FBaUQsWUFBakQsR0FBZ0VqQixDQUFDLENBQUN1QixVQUFsRSxHQUErRSxnQkFBL0UsR0FBa0d2QixDQUFDLENBQUMwQixVQUFwRyxHQUFpSCxhQUFqSCxHQUFpSTFCLENBQUMsQ0FBQ3FCLGNBQW5JLEdBQW9KTyxhQUEzSjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgdmFyIHRoaXNWYXJzID0ge31cbiAgdmFyIHRoaXNPcHRpb25zID0ge31cbiAgdmFyIHBsdWdpbiA9IHt9XG5cbiAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycyA9IFtdXG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzLnB1c2goJ3dlYnBhY2sgY29uZmlnOiBmcmFtZXdvcmsgcGFyYW1ldGVyIG9uIGV4dC13ZWJwYWNrLXBsdWdpbiBpcyBub3QgZGVmaW5lZCAtIHZhbHVlczogcmVhY3QsIGFuZ3VsYXIsIGV4dGpzJylcbiAgICBwbHVnaW4udmFycyA9IHRoaXNWYXJzXG4gICAgcmV0dXJuIHBsdWdpblxuICB9XG5cbiAgY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnc2NoZW1hLXV0aWxzJylcbiAgdmFsaWRhdGVPcHRpb25zKHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0VmFsaWRhdGVPcHRpb25zKCksIG9wdGlvbnMsICcnKVxuXG4gIHRoaXNWYXJzID0gcmVxdWlyZShgLi8ke29wdGlvbnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0VmFycygpXG4gIHRoaXNWYXJzLmZyYW1ld29yayA9IG9wdGlvbnMuZnJhbWV3b3JrXG4gIHN3aXRjaCh0aGlzVmFycy5mcmFtZXdvcmspIHtcbiAgICBjYXNlICdleHRqcyc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JlYWN0JzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXJlYWN0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW5ndWxhcic6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1hbmd1bGFyLXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICB9XG4gIHRoaXNWYXJzLmFwcCA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRBcHAoKVxuICBsb2d2KG9wdGlvbnMsIGBwbHVnaW5OYW1lIC0gJHt0aGlzVmFycy5wbHVnaW5OYW1lfWApXG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNWYXJzLmFwcCAtICR7dGhpc1ZhcnMuYXBwfWApXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICBjb25zdCByYyA9IChmcy5leGlzdHNTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCkgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgLCAndXRmLTgnKSkgfHwge30pXG4gIHRoaXNPcHRpb25zID0geyAuLi5yZXF1aXJlKGAuLyR7dGhpc1ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0T3B0aW9ucygpLCAuLi5vcHRpb25zLCAuLi5yYyB9XG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNPcHRpb25zIC0gJHtKU09OLnN0cmluZ2lmeSh0aGlzT3B0aW9ucyl9YClcbiAgaWYgKHRoaXNPcHRpb25zLmVudmlyb25tZW50ID09ICdwcm9kdWN0aW9uJykgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSB0cnVlfVxuICBlbHNlIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gZmFsc2V9XG4gIGxvZyhyZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fZ2V0VmVyc2lvbnModGhpc1ZhcnMuYXBwLCB0aGlzVmFycy5wbHVnaW5OYW1lLCB0aGlzVmFycy5mcmFtZXdvcmspKVxuICBsb2codGhpc1ZhcnMuYXBwICsgJ0J1aWxkaW5nIGZvciAnICsgdGhpc09wdGlvbnMuZW52aXJvbm1lbnQpXG5cbiAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICBwbHVnaW4ub3B0aW9ucyA9IHRoaXNPcHRpb25zXG4gIHJldHVybiBwbHVnaW5cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2NvbXBpbGF0aW9uJylcbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsYGV4dC1jb21waWxhdGlvbjogcHJvZHVjdGlvbiBpcyBgICsgIHZhcnMucHJvZHVjdGlvbilcbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCAobW9kdWxlKSA9PiB7XG4gICAgICAgIGlmIChtb2R1bGUucmVzb3VyY2UgJiYgbW9kdWxlLnJlc291cmNlLm1hdGNoKC9cXC4oanx0KXN4PyQvKSAmJiAhbW9kdWxlLnJlc291cmNlLm1hdGNoKC9ub2RlX21vZHVsZXMvKSAmJiAhbW9kdWxlLnJlc291cmNlLm1hdGNoKGAvZXh0LXskb3B0aW9ucy5mcmFtZXdvcmt9L2Rpc3QvYCkgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaChgL2V4dC0ke29wdGlvbnMuZnJhbWV3b3JrfS0ke29wdGlvbnMudG9vbGtpdH0vYCkpIHtcbiAgICAgICAgICB2YXJzLmRlcHMgPSBbIFxuICAgICAgICAgICAgLi4uKHZhcnMuZGVwcyB8fCBbXSksIFxuICAgICAgICAgICAgLi4ucmVxdWlyZShgLi8ke3ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5leHRyYWN0RnJvbVNvdXJjZShtb2R1bGUsIG9wdGlvbnMsIGNvbXBpbGF0aW9uKSBcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLGBleHQtY29tcGlsYXRpb246IHByb2R1Y3Rpb24gaXMgYCArICB2YXJzLnByb2R1Y3Rpb24pXG4gICAgfVxuICAgIGlmIChvcHRpb25zLmZyYW1ld29yayAhPSAnYW5ndWxhcicpIHtcbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmh0bWxXZWJwYWNrUGx1Z2luQmVmb3JlSHRtbEdlbmVyYXRpb24udGFwKGBleHQtaHRtbC1nZW5lcmF0aW9uYCwoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ0hPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICAgICAgdmFyIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYScpXG4gICAgICAgICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2UnKVxuICAgICAgICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYicpXG4gICAgICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjJylcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICdidWlsZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZCcpXG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZicpXG4gICAgICAgICAgb3V0cHV0UGF0aCA9ICdidWlsZCdcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXRQYXRoID0gb3V0cHV0UGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgdmFyIGpzUGF0aCA9IHBhdGguam9pbihvdXRwdXRQYXRoLCB2YXJzLmV4dFBhdGgsICdleHQuanMnKVxuICAgICAgICB2YXIgY3NzUGF0aCA9IHBhdGguam9pbihvdXRwdXRQYXRoLCB2YXJzLmV4dFBhdGgsICdleHQuY3NzJylcbiAgICAgICAgZGF0YS5hc3NldHMuanMudW5zaGlmdChqc1BhdGgpXG4gICAgICAgIGRhdGEuYXNzZXRzLmNzcy51bnNoaWZ0KGNzc1BhdGgpXG4gICAgICAgIGxvZyh2YXJzLmFwcCArIGBBZGRpbmcgJHtqc1BhdGh9IGFuZCAke2Nzc1BhdGh9IHRvIGluZGV4Lmh0bWxgKVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NraXBwZWQgSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfY29tcGlsYXRpb246ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBlbWl0JylcbiAgICB2YXIgYXBwID0gdmFycy5hcHBcbiAgICB2YXIgZnJhbWV3b3JrID0gdmFycy5mcmFtZXdvcmtcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgY29uc3QgX2J1aWxkRXh0QnVuZGxlID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2J1aWxkRXh0QnVuZGxlXG4gICAgbGV0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3V0cHV0UGF0aCx2YXJzLmV4dFBhdGgpXG4gICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJyAmJiBjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICB9XG4gICAgbG9ndihvcHRpb25zLCdvdXRwdXRQYXRoOiAnICsgb3V0cHV0UGF0aClcbiAgICBsb2d2KG9wdGlvbnMsJ2ZyYW1ld29yazogJyArIGZyYW1ld29yaylcbiAgICBpZiAob3B0aW9ucy5lbWl0ID09IHRydWUpIHtcbiAgICAgIGlmIChmcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgICBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVxdWlyZShgLi8ke2ZyYW1ld29ya31VdGlsYCkuX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuXG4gICAgICB2YXIgY29tbWFuZCA9ICcnXG4gICAgICBpZiAob3B0aW9ucy53YXRjaCA9PSAneWVzJykge1xuICAgICAgICBjb21tYW5kID0gJ3dhdGNoJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbW1hbmQgPSAnYnVpbGQnXG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJzLnJlYnVpbGQgPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGFybXMgPSBbXVxuICAgICAgICBpZiAob3B0aW9ucy5wcm9maWxlID09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByb2ZpbGUgPT0gJycgfHwgb3B0aW9ucy5wcm9maWxlID09IG51bGwpIHtcbiAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucylcblxuICAgICAgICAvL2NvbnN0IGpzQ2h1bmsgPSBjb21waWxhdGlvbi5hZGRDaHVuayhgZXh0LWFuZ3VsYXItanNgKVxuICAgICAgICAvL2pzQ2h1bmsuaGFzUnVudGltZSA9IGpzQ2h1bmsuaXNJbml0aWFsID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLy9qc0NodW5rLmZpbGVzLnB1c2gocGF0aC5qb2luKCdidWlsZCcsICdleHQtYW5ndWxhcicsICdleHQuanMnKSk7XG4gICAgICAgIC8vanNDaHVuay5maWxlcy5wdXNoKHBhdGguam9pbignYnVpbGQnLCAnZXh0LWFuZ3VsYXInLCAgJ2V4dC5jc3MnKSk7XG4gICAgICAgIC8vanNDaHVuay5pZCA9IC0yOyAvLyB0aGlzIGZvcmNlcyBodG1sLXdlYnBhY2stcGx1Z2luIHRvIGluY2x1ZGUgZXh0LmpzIGZpcnN0XG5cbiAgICAgICAgaWYob3B0aW9ucy5icm93c2VyID09IHRydWUgJiYgb3B0aW9ucy53YXRjaCA9PSAneWVzJykge1xuICAgICAgICAgIGlmICh2YXJzLmJyb3dzZXJDb3VudCA9PSAwICYmIGNvbXBpbGF0aW9uLmVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyBvcHRpb25zLnBvcnRcbiAgICAgICAgICAgIGxvZyhhcHAgKyBgT3BlbmluZyBicm93c2VyIGF0ICR7dXJsfWApXG4gICAgICAgICAgICB2YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAgICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgICAgICAgb3BuKHVybClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbG9ndihvcHRpb25zLCdicm93c2VyIE5PVCBvcGVuZWQnKVxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9nKGAke3ZhcnMuYXBwfUZVTkNUSU9OIGVtaXQgbm90IHJ1bmApXG4gICAgICBpZihvcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSkge1xuICAgICAgICBpZiAodmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBvcHRpb25zLndhdGNoID09ICd5ZXMnKSB7XG4gICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyBvcHRpb25zLnBvcnRcbiAgICAgICAgICBsb2coYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAgIHZhcnMuYnJvd3NlckNvdW50KytcbiAgICAgICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgICAgIG9wbih1cmwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ2Jyb3dzZXIgTk9UIG9wZW5lZCcpXG4gICAgICB9XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZW1pdDogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXQsIGNvbXBpbGF0aW9uKSB7XG4gIHRyeSB7XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfcHJlcGFyZUZvckJ1aWxkJylcbiAgICBjb25zdCByaW1yYWYgPSByZXF1aXJlKCdyaW1yYWYnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxuICAgIHZhciBwYWNrYWdlcyA9IG9wdGlvbnMucGFja2FnZXNcbiAgICB2YXIgdG9vbGtpdCA9IG9wdGlvbnMudG9vbGtpdFxuICAgIHZhciB0aGVtZSA9IG9wdGlvbnMudGhlbWVcblxuICAgIHRoZW1lID0gdGhlbWUgfHwgKHRvb2xraXQgPT09ICdjbGFzc2ljJyA/ICd0aGVtZS10cml0b24nIDogJ3RoZW1lLW1hdGVyaWFsJylcbiAgICBsb2d2KG9wdGlvbnMsJ2ZpcnN0VGltZTogJyArIHZhcnMuZmlyc3RUaW1lKVxuICAgIGlmICh2YXJzLmZpcnN0VGltZSkge1xuICAgICAgcmltcmFmLnN5bmMob3V0cHV0KVxuICAgICAgbWtkaXJwLnN5bmMob3V0cHV0KVxuICAgICAgY29uc3QgYnVpbGRYTUwgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmJ1aWxkWE1MXG4gICAgICBjb25zdCBjcmVhdGVBcHBKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVBcHBKc29uXG4gICAgICBjb25zdCBjcmVhdGVXb3Jrc3BhY2VKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVXb3Jrc3BhY2VKc29uXG4gICAgICBjb25zdCBjcmVhdGVKU0RPTUVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVKU0RPTUVudmlyb25tZW50XG5cbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2J1aWxkLnhtbCcpLCBidWlsZFhNTCh2YXJzLnByb2R1Y3Rpb24sIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2FwcC5qc29uJyksIGNyZWF0ZUFwcEpzb24odGhlbWUsIHBhY2thZ2VzLCB0b29sa2l0LCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdqc2RvbS1lbnZpcm9ubWVudC5qcycpLCBjcmVhdGVKU0RPTUVudmlyb25tZW50KG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ3dvcmtzcGFjZS5qc29uJyksIGNyZWF0ZVdvcmtzcGFjZUpzb24ob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICcuLi9yZXNvdXJjZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3Jlc291cmNlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21SZXNvdXJjZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Jlc291cmNlcy8nKVxuICAgICAgICB2YXIgdG9SZXNvdXJjZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAncmVzb3VyY2VzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21SZXNvdXJjZXMsIHRvUmVzb3VyY2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIHZhcnMuZGVwcy5wdXNoKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKVxuICAgICAganMgPSB2YXJzLmRlcHMuam9pbignO1xcbicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGpzID0gJ0V4dC5yZXF1aXJlKFwiRXh0LipcIiknXG4gICAgfVxuICAgIGlmICh2YXJzLm1hbmlmZXN0ID09PSBudWxsIHx8IGpzICE9PSB2YXJzLm1hbmlmZXN0KSB7XG4gICAgICB2YXJzLm1hbmlmZXN0ID0ganNcbiAgICAgIGNvbnN0IG1hbmlmZXN0ID0gcGF0aC5qb2luKG91dHB1dCwgJ21hbmlmZXN0LmpzJylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMobWFuaWZlc3QsIGpzLCAndXRmOCcpXG4gICAgICB2YXJzLnJlYnVpbGQgPSB0cnVlXG4gICAgICBsb2coYXBwICsgJ0J1aWxkaW5nIEV4dCBidW5kbGUgYXQ6ICcgKyBvdXRwdXQucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFycy5yZWJ1aWxkID0gZmFsc2VcbiAgICAgIGxvZyhhcHAgKyAnRXh0IHJlYnVpbGQgTk9UIG5lZWRlZCcpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX3ByZXBhcmVGb3JCdWlsZDogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9idWlsZEV4dEJ1bmRsZScpXG5cbiAgICBsZXQgc2VuY2hhOyB0cnkgeyBzZW5jaGEgPSByZXF1aXJlKCdAc2VuY2hhL2NtZCcpIH0gY2F0Y2ggKGUpIHsgc2VuY2hhID0gJ3NlbmNoYScgfVxuICAgIGlmIChmcy5leGlzdHNTeW5jKHNlbmNoYSkpIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2VuY2hhIGZvbGRlciBleGlzdHMnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2VuY2hhIGZvbGRlciBET0VTIE5PVCBleGlzdCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9uQnVpbGREb25lID0gKCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ29uQnVpbGREb25lJylcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRzID0geyBjd2Q6IG91dHB1dFBhdGgsIHNpbGVudDogdHJ1ZSwgc3RkaW86ICdwaXBlJywgZW5jb2Rpbmc6ICd1dGYtOCd9XG4gICAgICBleGVjdXRlQXN5bmMoYXBwLCBzZW5jaGEsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykudGhlbiAoXG4gICAgICAgIGZ1bmN0aW9uKCkgeyBvbkJ1aWxkRG9uZSgpIH0sIFxuICAgICAgICBmdW5jdGlvbihyZWFzb24pIHsgcmVqZWN0KHJlYXNvbikgfVxuICAgICAgKVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfYnVpbGRFeHRCdW5kbGU6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlQXN5bmMgKGFwcCwgY29tbWFuZCwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgLy9jb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBTZXJ2ZXJcIiwgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgY29uc3QgREVGQVVMVF9TVUJTVFJTID0gWydbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIEFwcGVuZCcsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcgQnVpbGQnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gU2VydmVyXCIsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIHZhciBzdWJzdHJpbmdzID0gREVGQVVMVF9TVUJTVFJTIFxuICAgIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgICBjb25zdCBjcm9zc1NwYXduID0gcmVxdWlyZSgnY3Jvc3Mtc3Bhd24nKVxuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIGV4ZWN1dGVBc3luYycpXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbG9ndihvcHRpb25zLGBjb21tYW5kIC0gJHtjb21tYW5kfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBwYXJtcyAtICR7cGFybXN9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYG9wdHMgLSAke0pTT04uc3RyaW5naWZ5KG9wdHMpfWApXG4gICAgICBsZXQgY2hpbGQgPSBjcm9zc1NwYXduKGNvbW1hbmQsIHBhcm1zLCBvcHRzKVxuICAgICAgY2hpbGQub24oJ2Nsb3NlJywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBjbG9zZTogYCArIGNvZGUpIFxuICAgICAgICBpZihjb2RlID09PSAwKSB7IHJlc29sdmUoMCkgfVxuICAgICAgICBlbHNlIHsgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcihjb2RlKSApOyByZXNvbHZlKDApIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5vbignZXJyb3InLCAoZXJyb3IpID0+IHsgXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGVycm9yYCkgXG4gICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgICByZXNvbHZlKDApXG4gICAgICB9KVxuICAgICAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYCR7c3RyfWApXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcoKS5tYXRjaCgvd2FpdGluZyBmb3IgY2hhbmdlc1xcLlxcLlxcLi8pKSB7XG4gICAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdWJzdHJpbmdzLnNvbWUoZnVuY3Rpb24odikgeyByZXR1cm4gZGF0YS5pbmRleE9mKHYpID49IDA7IH0pKSB7IFxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbSU5GXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbTE9HXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhcIltFUlJdXCIpKSB7XG4gICAgICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGFwcCArIHN0ci5yZXBsYWNlKC9eXFxbRVJSXFxdIC9naSwgJycpKTtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbRVJSXVwiLCBgJHtjaGFsay5yZWQoXCJbRVJSXVwiKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nKGAke2FwcH0ke3N0cn1gKSBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBlcnJvciBvbiBjbG9zZTogYCArIGRhdGEpIFxuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgdmFyIHN0ckphdmFPcHRzID0gXCJQaWNrZWQgdXAgX0pBVkFfT1BUSU9OU1wiO1xuICAgICAgICB2YXIgaW5jbHVkZXMgPSBzdHIuaW5jbHVkZXMoc3RySmF2YU9wdHMpXG4gICAgICAgIGlmICghaW5jbHVkZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHthcHB9ICR7Y2hhbGsucmVkKFwiW0VSUl1cIil9ICR7c3RyfWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2V4ZWN1dGVBc3luYzogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9IFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cocykge1xuICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICB0cnkge1xuICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gIH1cbiAgY2F0Y2goZSkge31cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUocylcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2d2KG9wdGlvbnMsIHMpIHtcbiAgaWYgKG9wdGlvbnMudmVyYm9zZSA9PSAneWVzJykge1xuICAgIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYC12ZXJib3NlOiAke3N9YClcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFwcCgpIHtcbiAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICB2YXIgcHJlZml4ID0gYGBcbiAgY29uc3QgcGxhdGZvcm0gPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKClcbiAgaWYgKHBsYXRmb3JtID09ICdkYXJ3aW4nKSB7IHByZWZpeCA9IGDihLkg772iZXh0772jOmAgfVxuICBlbHNlIHsgcHJlZml4ID0gYGkgW2V4dF06YCB9XG4gIHJldHVybiBgJHtjaGFsay5ncmVlbihwcmVmaXgpfSBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VmVyc2lvbnMoYXBwLCBwbHVnaW5OYW1lLCBmcmFtZXdvcmtOYW1lKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHYgPSB7fVxuICB2YXIgcGx1Z2luUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYScsIHBsdWdpbk5hbWUpXG4gIHZhciBwbHVnaW5Qa2cgPSAoZnMuZXhpc3RzU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYucGx1Z2luVmVyc2lvbiA9IHBsdWdpblBrZy52ZXJzaW9uXG5cbiAgdmFyIHdlYnBhY2tQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy93ZWJwYWNrJylcbiAgdmFyIHdlYnBhY2tQa2cgPSAoZnMuZXhpc3RzU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi53ZWJwYWNrVmVyc2lvbiA9IHdlYnBhY2tQa2cudmVyc2lvblxuXG4gIHZhciBleHRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9Ac2VuY2hhL2V4dCcpXG4gIHZhciBleHRQa2cgPSAoZnMuZXhpc3RzU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYuZXh0VmVyc2lvbiA9IGV4dFBrZy5zZW5jaGEudmVyc2lvblxuXG4gIHZhciBjbWRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYuY21kVmVyc2lvbiA9IGNtZFBrZy52ZXJzaW9uX2Z1bGxcblxuICBpZiAodi5jbWRWZXJzaW9uID09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjbWRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhLyR7cGx1Z2luTmFtZX0vbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICAgIHYuY21kVmVyc2lvbiA9IGNtZFBrZy52ZXJzaW9uX2Z1bGxcbiAgfVxuXG4gIHZhciBmcmFtZXdvcmtJbmZvID0gJydcbiAgIGlmIChmcmFtZXdvcmtOYW1lICE9IHVuZGVmaW5lZCAmJiBmcmFtZXdvcmtOYW1lICE9ICdleHRqcycpIHtcbiAgICB2YXIgZnJhbWV3b3JrUGF0aCA9ICcnXG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ3JlYWN0Jykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvcmVhY3QnKVxuICAgIH1cbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAnYW5ndWxhcicpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUnKVxuICAgIH1cbiAgICB2YXIgZnJhbWV3b3JrUGtnID0gKGZzLmV4aXN0c1N5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICAgIHYuZnJhbWV3b3JrVmVyc2lvbiA9IGZyYW1ld29ya1BrZy52ZXJzaW9uXG4gICAgZnJhbWV3b3JrSW5mbyA9ICcsICcgKyBmcmFtZXdvcmtOYW1lICsgJyB2JyArIHYuZnJhbWV3b3JrVmVyc2lvblxuICB9XG5cbiAgcmV0dXJuIGFwcCArICdleHQtd2VicGFjay1wbHVnaW4gdicgKyB2LnBsdWdpblZlcnNpb24gKyAnLCBFeHQgSlMgdicgKyB2LmV4dFZlcnNpb24gKyAnLCBTZW5jaGEgQ21kIHYnICsgdi5jbWRWZXJzaW9uICsgJywgd2VicGFjayB2JyArIHYud2VicGFja1ZlcnNpb24gKyBmcmFtZXdvcmtJbmZvXG59Il19