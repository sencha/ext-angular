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
    logv(options, `no copy`);
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

    if (vars.production) {
      logv(options, `ext-compilation: production is ` + vars.production);
      compilation.hooks.succeedModule.tap(`ext-succeed-module`, module => {
        if (module.resource && (module.resource.match(/\.(j|t)sx?$/) || options.framework == 'angular' && module.resource.match(/\.html$/)) && !module.resource.match(/node_modules/) && !module.resource.match(`/ext-{$options.framework}/dist/`) && !module.resource.match(`/ext-${options.framework}-${options.toolkit}/`)) {
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
            _context.next = 31;
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
            _context.next = 28;
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
            _context.next = 25;
            break;
          }

          console.log('build1');
          _context.next = 23;
          return _buildExtBundle(app, compilation, outputPath, parms, options);

        case 23:
          console.log('build2');
          vars.watchStarted = true;

        case 25:
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
          _context.next = 29;
          break;

        case 28:
          callback();

        case 29:
          _context.next = 33;
          break;

        case 31:
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

        case 33:
          _context.next = 40;
          break;

        case 35:
          _context.prev = 35;
          _context.t0 = _context["catch"](0);

          require('./pluginUtil').logv(options, _context.t0);

          compilation.errors.push('emit: ' + _context.t0);
          callback();

        case 40:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[0, 35]]);
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
      } //do we ever hit these?


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJob29rcyIsInN1Y2NlZWRNb2R1bGUiLCJ0YXAiLCJtb2R1bGUiLCJyZXNvdXJjZSIsIm1hdGNoIiwidG9vbGtpdCIsImRlcHMiLCJleHRyYWN0RnJvbVNvdXJjZSIsImh0bWxXZWJwYWNrUGx1Z2luQmVmb3JlSHRtbEdlbmVyYXRpb24iLCJkYXRhIiwib3V0cHV0UGF0aCIsImRldlNlcnZlciIsImNvbnRlbnRCYXNlIiwicmVwbGFjZSIsInRyaW0iLCJqc1BhdGgiLCJleHRQYXRoIiwiY3NzUGF0aCIsImFzc2V0cyIsImpzIiwidW5zaGlmdCIsImNzcyIsImUiLCJlcnJvcnMiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsIndhdGNoU3RhcnRlZCIsImNvbnNvbGUiLCJvdXRwdXQiLCJyaW1yYWYiLCJta2RpcnAiLCJwYWNrYWdlcyIsInRoZW1lIiwiZmlyc3RUaW1lIiwic3luYyIsImJ1aWxkWE1MIiwiY3JlYXRlQXBwSnNvbiIsImNyZWF0ZVdvcmtzcGFjZUpzb24iLCJjcmVhdGVKU0RPTUVudmlyb25tZW50Iiwid3JpdGVGaWxlU3luYyIsImZyb21QYXRoIiwidG9QYXRoIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsIm1hbmlmZXN0IiwiYnVuZGxlRGlyIiwic2VuY2hhIiwiUHJvbWlzZSIsInJlamVjdCIsIm9uQnVpbGREb25lIiwib3B0cyIsInNpbGVudCIsInN0ZGlvIiwiZW5jb2RpbmciLCJleGVjdXRlQXN5bmMiLCJ0aGVuIiwicmVhc29uIiwiREVGQVVMVF9TVUJTVFJTIiwic3Vic3RyaW5ncyIsImNoYWxrIiwiY3Jvc3NTcGF3biIsImNoaWxkIiwib24iLCJjb2RlIiwic2lnbmFsIiwiRXJyb3IiLCJlcnJvciIsInN0ZG91dCIsInN0ciIsInRvU3RyaW5nIiwic29tZSIsInYiLCJpbmRleE9mIiwiaW5jbHVkZXMiLCJyZWQiLCJzdGRlcnIiLCJzdHJKYXZhT3B0cyIsInMiLCJjdXJzb3JUbyIsImNsZWFyTGluZSIsIndyaXRlIiwidmVyYm9zZSIsInByZWZpeCIsInBsYXRmb3JtIiwiZ3JlZW4iLCJmcmFtZXdvcmtOYW1lIiwicGx1Z2luUGF0aCIsInBsdWdpblBrZyIsInBsdWdpblZlcnNpb24iLCJ2ZXJzaW9uIiwiX3Jlc29sdmVkIiwiZWRpdGlvbiIsIndlYnBhY2tQYXRoIiwid2VicGFja1BrZyIsIndlYnBhY2tWZXJzaW9uIiwiZXh0UGtnIiwiZXh0VmVyc2lvbiIsImNtZFBhdGgiLCJjbWRQa2ciLCJjbWRWZXJzaW9uIiwidmVyc2lvbl9mdWxsIiwiZnJhbWV3b3JrSW5mbyIsImZyYW1ld29ya1BhdGgiLCJmcmFtZXdvcmtQa2ci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Q21CLFVBQUgsQ0FBY21JLGFBQWEsR0FBQyxlQUE1QixLQUFnRDVILElBQUksQ0FBQ0MsS0FBTCxDQUFXM0IsRUFBRSxDQUFDNEIsWUFBSCxDQUFnQjBILGFBQWEsR0FBQyxlQUE5QixFQUErQyxPQUEvQyxDQUFYLENBQWhELElBQXVILEVBQTNJO0FBQ0EvQixJQUFBQSxDQUFDLENBQUNpQyxnQkFBRixHQUFxQkQsWUFBWSxDQUFDZCxPQUFsQztBQUNBWSxJQUFBQSxhQUFhLEdBQUcsT0FBT2hCLGFBQVAsR0FBdUIsSUFBdkIsR0FBOEJkLENBQUMsQ0FBQ2lDLGdCQUFoRDtBQUNEOztBQUNELFNBQU9qSSxHQUFHLEdBQUcsc0JBQU4sR0FBK0JnRyxDQUFDLENBQUNpQixhQUFqQyxHQUFpRCxZQUFqRCxHQUFnRWpCLENBQUMsQ0FBQ3lCLFVBQWxFLEdBQStFLEdBQS9FLEdBQXFGekIsQ0FBQyxDQUFDb0IsT0FBdkYsR0FBaUcsd0JBQWpHLEdBQTRIcEIsQ0FBQyxDQUFDNEIsVUFBOUgsR0FBMkksYUFBM0ksR0FBMko1QixDQUFDLENBQUN1QixjQUE3SixHQUE4S08sYUFBckw7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9jb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHRoaXNWYXJzID0ge31cbiAgdmFyIHRoaXNPcHRpb25zID0ge31cbiAgdmFyIHBsdWdpbiA9IHt9XG5cbiAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycyA9IFtdXG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzLnB1c2goJ3dlYnBhY2sgY29uZmlnOiBmcmFtZXdvcmsgcGFyYW1ldGVyIG9uIGV4dC13ZWJwYWNrLXBsdWdpbiBpcyBub3QgZGVmaW5lZCAtIHZhbHVlczogcmVhY3QsIGFuZ3VsYXIsIGV4dGpzJylcbiAgICBwbHVnaW4udmFycyA9IHRoaXNWYXJzXG4gICAgcmV0dXJuIHBsdWdpblxuICB9XG5cbiAgY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnc2NoZW1hLXV0aWxzJylcbiAgdmFsaWRhdGVPcHRpb25zKHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0VmFsaWRhdGVPcHRpb25zKCksIG9wdGlvbnMsICcnKVxuXG4gIC8vZml4IHNlbmNoYSBjbWQgbm8gamV0dHkgc2VydmVyIHByb2JsZW1cbiAgLy8gdmFyIHdhdGNoRmlsZSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWQvZGlzdC9hbnQvYnVpbGQvYXBwL3dhdGNoLWltcGwueG1sYClcbiAgLy8gbG9ndihvcHRpb25zLCBgbW9kaWZ5ICR7d2F0Y2hGaWxlfWApXG4gIC8vIHZhciBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHdhdGNoRmlsZSwgJ3V0Zi04Jyk7XG4gIC8vIHZhciBpcCA9ICd3ZWJTZXJ2ZXJSZWZJZD1cImFwcC53ZWIuc2VydmVyXCInO1xuICAvLyB2YXIgbmV3VmFsdWUgPSBkYXRhLnJlcGxhY2UobmV3IFJlZ0V4cChpcCksICcnKTtcbiAgLy8gZnMud3JpdGVGaWxlU3luYyh3YXRjaEZpbGUsIG5ld1ZhbHVlLCAndXRmLTgnKTtcblxuICB0aGlzVmFycyA9IHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdFZhcnMoKVxuICB0aGlzVmFycy5mcmFtZXdvcmsgPSBvcHRpb25zLmZyYW1ld29ya1xuICBzd2l0Y2godGhpc1ZhcnMuZnJhbWV3b3JrKSB7XG4gICAgY2FzZSAnZXh0anMnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWFjdCc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1yZWFjdC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FuZ3VsYXInOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtYW5ndWxhci13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgfVxuXG4gIC8vZml4IGZhc2hpb24gZGlzdCBwcm9ibGVtXG4gIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgdmFyIHRvRmFzaGlvbkRpc3QgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kL2Rpc3QvanMvbm9kZV9tb2R1bGVzL2Zhc2hpb24vZGlzdGApXG4gIGxvZ3Yob3B0aW9ucywgYHRvRmFzaGlvbkRpc3QgJHt0b0Zhc2hpb25EaXN0fWApXG4gIGlmICghZnMuZXhpc3RzU3luYyh0b0Zhc2hpb25EaXN0KSkge1xuICAgIGxvZ3Yob3B0aW9ucywgYGNvcHlgKVxuICAgIHZhciBmcm9tRmFzaGlvbkRpc3QgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy9Ac2VuY2hhLycgKyB0aGlzVmFycy5wbHVnaW5OYW1lICsgJy9mYXNoaW9uL2Rpc3QvJylcbiAgICBmc3guY29weVN5bmMoZnJvbUZhc2hpb25EaXN0LCB0b0Zhc2hpb25EaXN0KVxuICB9XG4gIGVsc2Uge1xuICAgIGxvZ3Yob3B0aW9ucywgYG5vIGNvcHlgKVxuICB9XG5cbiAgdGhpc1ZhcnMuYXBwID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldEFwcCgpXG4gIGxvZ3Yob3B0aW9ucywgYHBsdWdpbk5hbWUgLSAke3RoaXNWYXJzLnBsdWdpbk5hbWV9YClcbiAgbG9ndihvcHRpb25zLCBgdGhpc1ZhcnMuYXBwIC0gJHt0aGlzVmFycy5hcHB9YClcblxuICBjb25zdCByYyA9IChmcy5leGlzdHNTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCkgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgLCAndXRmLTgnKSkgfHwge30pXG4gIHRoaXNPcHRpb25zID0geyAuLi5yZXF1aXJlKGAuLyR7dGhpc1ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0T3B0aW9ucygpLCAuLi5vcHRpb25zLCAuLi5yYyB9XG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNPcHRpb25zIC0gJHtKU09OLnN0cmluZ2lmeSh0aGlzT3B0aW9ucyl9YClcbiAgaWYgKHRoaXNPcHRpb25zLmVudmlyb25tZW50ID09ICdwcm9kdWN0aW9uJykgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSB0cnVlfVxuICBlbHNlIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gZmFsc2V9XG4gIGxvZyhyZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fZ2V0VmVyc2lvbnModGhpc1ZhcnMuYXBwLCB0aGlzVmFycy5wbHVnaW5OYW1lLCB0aGlzVmFycy5mcmFtZXdvcmspKVxuICBsb2codGhpc1ZhcnMuYXBwICsgJ0J1aWxkaW5nIGZvciAnICsgdGhpc09wdGlvbnMuZW52aXJvbm1lbnQpXG5cbiAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICBwbHVnaW4ub3B0aW9ucyA9IHRoaXNPcHRpb25zXG4gIHJldHVybiBwbHVnaW5cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2NvbXBpbGF0aW9uJylcbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsYGV4dC1jb21waWxhdGlvbjogcHJvZHVjdGlvbiBpcyBgICsgIHZhcnMucHJvZHVjdGlvbilcbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCAobW9kdWxlKSA9PiB7XG4gICAgICAgIGlmIChtb2R1bGUucmVzb3VyY2UgJiYgKG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuKGp8dClzeD8kLykgfHxcbiAgICAgICAgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBtb2R1bGUucmVzb3VyY2UubWF0Y2goL1xcLmh0bWwkLykpKSAmJlxuICAgICAgICAhbW9kdWxlLnJlc291cmNlLm1hdGNoKC9ub2RlX21vZHVsZXMvKSAmJiAhbW9kdWxlLnJlc291cmNlLm1hdGNoKGAvZXh0LXskb3B0aW9ucy5mcmFtZXdvcmt9L2Rpc3QvYClcbiAgICAgICAgICYmICFtb2R1bGUucmVzb3VyY2UubWF0Y2goYC9leHQtJHtvcHRpb25zLmZyYW1ld29ya30tJHtvcHRpb25zLnRvb2xraXR9L2ApKSB7XG4gICAgICAgICAgdmFycy5kZXBzID0gWyBcbiAgICAgICAgICAgIC4uLih2YXJzLmRlcHMgfHwgW10pLCBcbiAgICAgICAgICAgIC4uLnJlcXVpcmUoYC4vJHt2YXJzLmZyYW1ld29ya31VdGlsYCkuZXh0cmFjdEZyb21Tb3VyY2UobW9kdWxlLCBvcHRpb25zLCBjb21waWxhdGlvbikgXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucyxgZXh0LWNvbXBpbGF0aW9uOiBwcm9kdWN0aW9uIGlzIGAgKyAgdmFycy5wcm9kdWN0aW9uKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgIT0gJ2FuZ3VsYXInKSB7XG4gICAgICBjb21waWxhdGlvbi5ob29rcy5odG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uLnRhcChgZXh0LWh0bWwtZ2VuZXJhdGlvbmAsKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgICAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgICAgIHZhciBvdXRwdXRQYXRoID0gJydcbiAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICAgICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJykge1xuICAgICAgICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0UGF0aCA9IG91dHB1dFBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgIHZhciBqc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmpzJylcbiAgICAgICAgdmFyIGNzc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmNzcycpXG4gICAgICAgIGRhdGEuYXNzZXRzLmpzLnVuc2hpZnQoanNQYXRoKVxuICAgICAgICBkYXRhLmFzc2V0cy5jc3MudW5zaGlmdChjc3NQYXRoKVxuICAgICAgICBsb2codmFycy5hcHAgKyBgQWRkaW5nICR7anNQYXRofSBhbmQgJHtjc3NQYXRofSB0byBpbmRleC5odG1sYClcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdza2lwcGVkIEhPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gZW1pdCcpXG4gICAgdmFyIGFwcCA9IHZhcnMuYXBwXG4gICAgdmFyIGZyYW1ld29yayA9IHZhcnMuZnJhbWV3b3JrXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgIGNvbnN0IF9idWlsZEV4dEJ1bmRsZSA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9idWlsZEV4dEJ1bmRsZVxuICAgIGxldCBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm91dHB1dFBhdGgsdmFycy5leHRQYXRoKVxuICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycgJiYgY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgfVxuICAgIGxvZ3Yob3B0aW9ucywnb3V0cHV0UGF0aDogJyArIG91dHB1dFBhdGgpXG4gICAgbG9ndihvcHRpb25zLCdmcmFtZXdvcms6ICcgKyBmcmFtZXdvcmspXG4gICAgaWYgKG9wdGlvbnMuZW1pdCA9PSB0cnVlKSB7XG4gICAgICBpZiAoZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgICAgX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlcXVpcmUoYC4vJHtmcmFtZXdvcmt9VXRpbGApLl9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbW1hbmQgPSAnJ1xuICAgICAgaWYgKG9wdGlvbnMud2F0Y2ggPT0gJ3llcycgJiYgdmFycy5wcm9kdWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgIGNvbW1hbmQgPSAnd2F0Y2gnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tbWFuZCA9ICdidWlsZCdcbiAgICAgIH1cblxuICAgICAgaWYgKHZhcnMucmVidWlsZCA9PSB0cnVlKSB7XG4gICAgICAgIHZhciBwYXJtcyA9IFtdXG4gICAgICAgIGlmIChvcHRpb25zLnByb2ZpbGUgPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMucHJvZmlsZSA9PSAnJyB8fCBvcHRpb25zLnByb2ZpbGUgPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChjb21tYW5kID09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCAnLS13ZWItc2VydmVyJywgJ2ZhbHNlJywgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCAnLS13ZWItc2VydmVyJywgJ2ZhbHNlJywgb3B0aW9ucy5wcm9maWxlLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YXJzLndhdGNoU3RhcnRlZCA9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdidWlsZDEnKVxuICAgICAgICAgIGF3YWl0IF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucylcbiAgICAgICAgICBjb25zb2xlLmxvZygnYnVpbGQyJylcbiAgICAgICAgICB2YXJzLndhdGNoU3RhcnRlZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc3QganNDaHVuayA9IGNvbXBpbGF0aW9uLmFkZENodW5rKGBleHQtYW5ndWxhci1qc2ApXG4gICAgICAgIC8vanNDaHVuay5oYXNSdW50aW1lID0ganNDaHVuay5pc0luaXRpYWwgPSAoKSA9PiB0cnVlO1xuICAgICAgICAvL2pzQ2h1bmsuZmlsZXMucHVzaChwYXRoLmpvaW4oJ2J1aWxkJywgJ2V4dC1hbmd1bGFyJywgJ2V4dC5qcycpKTtcbiAgICAgICAgLy9qc0NodW5rLmZpbGVzLnB1c2gocGF0aC5qb2luKCdidWlsZCcsICdleHQtYW5ndWxhcicsICAnZXh0LmNzcycpKTtcbiAgICAgICAgLy9qc0NodW5rLmlkID0gLTI7IC8vIHRoaXMgZm9yY2VzIGh0bWwtd2VicGFjay1wbHVnaW4gdG8gaW5jbHVkZSBleHQuanMgZmlyc3RcblxuICAgICAgICAvLyBpZihvcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSAmJiBvcHRpb25zLndhdGNoID09ICd5ZXMnKSB7XG4gICAgICAgIC8vICAgaWYgKHZhcnMuYnJvd3NlckNvdW50ID09IDAgJiYgY29tcGlsYXRpb24uZXJyb3JzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIC8vICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6JyArIG9wdGlvbnMucG9ydFxuICAgICAgICAvLyAgICAgbG9nKGFwcCArIGBPcGVuaW5nIGJyb3dzZXIgYXQgJHt1cmx9YClcbiAgICAgICAgLy8gICAgIHZhcnMuYnJvd3NlckNvdW50KytcbiAgICAgICAgLy8gICAgIGNvbnN0IG9wbiA9IHJlcXVpcmUoJ29wbicpXG4gICAgICAgIC8vICAgICBvcG4odXJsKVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICBsb2d2KG9wdGlvbnMsJ2Jyb3dzZXIgTk9UIG9wZW5lZCcpXG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9nKGAke3ZhcnMuYXBwfUZVTkNUSU9OIGVtaXQgbm90IHJ1bmApXG4gICAgICAvLyBpZihvcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSkge1xuICAgICAgLy8gICBpZiAodmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBvcHRpb25zLndhdGNoID09ICd5ZXMnKSB7XG4gICAgICAvLyAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyBvcHRpb25zLnBvcnRcbiAgICAgIC8vICAgICBsb2coYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgLy8gICAgIHZhcnMuYnJvd3NlckNvdW50KytcbiAgICAgIC8vICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgLy8gICAgIG9wbih1cmwpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICBsb2d2KG9wdGlvbnMsJ2Jyb3dzZXIgTk9UIG9wZW5lZCcpXG4gICAgICAvLyB9XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZW1pdDogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXQsIGNvbXBpbGF0aW9uKSB7XG4gIHRyeSB7XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfcHJlcGFyZUZvckJ1aWxkJylcbiAgICBjb25zdCByaW1yYWYgPSByZXF1aXJlKCdyaW1yYWYnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxuICAgIHZhciBwYWNrYWdlcyA9IG9wdGlvbnMucGFja2FnZXNcbiAgICB2YXIgdG9vbGtpdCA9IG9wdGlvbnMudG9vbGtpdFxuICAgIHZhciB0aGVtZSA9IG9wdGlvbnMudGhlbWVcblxuICAgIHRoZW1lID0gdGhlbWUgfHwgKHRvb2xraXQgPT09ICdjbGFzc2ljJyA/ICd0aGVtZS10cml0b24nIDogJ3RoZW1lLW1hdGVyaWFsJylcbiAgICBsb2d2KG9wdGlvbnMsJ2ZpcnN0VGltZTogJyArIHZhcnMuZmlyc3RUaW1lKVxuICAgIGlmICh2YXJzLmZpcnN0VGltZSkge1xuICAgICAgcmltcmFmLnN5bmMob3V0cHV0KVxuICAgICAgbWtkaXJwLnN5bmMob3V0cHV0KVxuICAgICAgY29uc3QgYnVpbGRYTUwgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmJ1aWxkWE1MXG4gICAgICBjb25zdCBjcmVhdGVBcHBKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVBcHBKc29uXG4gICAgICBjb25zdCBjcmVhdGVXb3Jrc3BhY2VKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVXb3Jrc3BhY2VKc29uXG4gICAgICBjb25zdCBjcmVhdGVKU0RPTUVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVKU0RPTUVudmlyb25tZW50XG5cbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2J1aWxkLnhtbCcpLCBidWlsZFhNTCh2YXJzLnByb2R1Y3Rpb24sIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2FwcC5qc29uJyksIGNyZWF0ZUFwcEpzb24odGhlbWUsIHBhY2thZ2VzLCB0b29sa2l0LCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdqc2RvbS1lbnZpcm9ubWVudC5qcycpLCBjcmVhdGVKU0RPTUVudmlyb25tZW50KG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ3dvcmtzcGFjZS5qc29uJyksIGNyZWF0ZVdvcmtzcGFjZUpzb24ob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuXG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtYW5ndWxhci9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAncmVhY3QnKSAge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L3BhY2thZ2VzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9vdmVycmlkZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdvdmVycmlkZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG5cbi8vZG8gd2UgZXZlciBoaXQgdGhlc2U/XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICcuLi9yZXNvdXJjZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3Jlc291cmNlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21SZXNvdXJjZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Jlc291cmNlcy8nKVxuICAgICAgICB2YXIgdG9SZXNvdXJjZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAncmVzb3VyY2VzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21SZXNvdXJjZXMsIHRvUmVzb3VyY2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdwYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21QYWNrYWdlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncGFja2FnZXMvJylcbiAgICAgICAgdmFyIHRvUGFja2FnZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhY2thZ2VzLCB0b1BhY2thZ2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYWNrYWdlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ292ZXJyaWRlcy8nKVxuICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuXG5cbiAgICB9XG4gICAgdmFycy5maXJzdFRpbWUgPSBmYWxzZVxuICAgIHZhciBqcyA9ICcnXG4gICAgaWYgKHZhcnMucHJvZHVjdGlvbikge1xuICAgICAgdmFycy5kZXBzLnB1c2goJ0V4dC5yZXF1aXJlKFwiRXh0LmxheW91dC4qXCIpO1xcbicpXG4gICAgICBqcyA9IHZhcnMuZGVwcy5qb2luKCc7XFxuJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAganMgPSAnRXh0LnJlcXVpcmUoXCJFeHQuKlwiKSdcbiAgICB9XG4gICAgaWYgKHZhcnMubWFuaWZlc3QgPT09IG51bGwgfHwganMgIT09IHZhcnMubWFuaWZlc3QpIHtcbiAgICAgIHZhcnMubWFuaWZlc3QgPSBqc1xuICAgICAgY29uc3QgbWFuaWZlc3QgPSBwYXRoLmpvaW4ob3V0cHV0LCAnbWFuaWZlc3QuanMnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhtYW5pZmVzdCwganMsICd1dGY4JylcbiAgICAgIHZhcnMucmVidWlsZCA9IHRydWVcbiAgICAgIHZhciBidW5kbGVEaXIgPSBvdXRwdXQucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJylcbiAgICAgIGlmIChidW5kbGVEaXIudHJpbSgpID09ICcnKSB7YnVuZGxlRGlyID0gJy4vJ31cbiAgICAgIGxvZyhhcHAgKyAnQnVpbGRpbmcgRXh0IGJ1bmRsZSBhdDogJyArIGJ1bmRsZURpcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXJzLnJlYnVpbGQgPSBmYWxzZVxuICAgICAgbG9nKGFwcCArICdFeHQgcmVidWlsZCBOT1QgbmVlZGVkJylcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfcHJlcGFyZUZvckJ1aWxkOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2J1aWxkRXh0QnVuZGxlJylcblxuICAgIGxldCBzZW5jaGE7IHRyeSB7IHNlbmNoYSA9IHJlcXVpcmUoJ0BzZW5jaGEvY21kJykgfSBjYXRjaCAoZSkgeyBzZW5jaGEgPSAnc2VuY2hhJyB9XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoc2VuY2hhKSkge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIGV4aXN0cycpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIERPRVMgTk9UIGV4aXN0JylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb25CdWlsZERvbmUgPSAoKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnb25CdWlsZERvbmUnKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdHMgPSB7IGN3ZDogb3V0cHV0UGF0aCwgc2lsZW50OiB0cnVlLCBzdGRpbzogJ3BpcGUnLCBlbmNvZGluZzogJ3V0Zi04J31cbiAgICAgIGV4ZWN1dGVBc3luYyhhcHAsIHNlbmNoYSwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24oKSB7IG9uQnVpbGREb25lKCkgfSwgXG4gICAgICAgIGZ1bmN0aW9uKHJlYXNvbikgeyByZWplY3QocmVhc29uKSB9XG4gICAgICApXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coJ2UnKVxuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfYnVpbGRFeHRCdW5kbGU6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlQXN5bmMgKGFwcCwgY29tbWFuZCwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgLy9jb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBTZXJ2ZXJcIiwgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgY29uc3QgREVGQVVMVF9TVUJTVFJTID0gW1wiW0lORl0geFNlcnZlclwiLCAnW0lORl0gTG9hZGluZycsICdbSU5GXSBBcHBlbmQnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbSU5GXSBQcm9jZXNzaW5nIEJ1aWxkJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICB2YXIgc3Vic3RyaW5ncyA9IERFRkFVTFRfU1VCU1RSUyBcbiAgICB2YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG4gICAgY29uc3QgY3Jvc3NTcGF3biA9IHJlcXVpcmUoJ2Nyb3NzLXNwYXduJylcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBsb2d2KG9wdGlvbnMsICdGVU5DVElPTiBleGVjdXRlQXN5bmMnKVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxvZ3Yob3B0aW9ucyxgY29tbWFuZCAtICR7Y29tbWFuZH1gKVxuICAgICAgbG9ndihvcHRpb25zLCBgcGFybXMgLSAke3Bhcm1zfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBvcHRzIC0gJHtKU09OLnN0cmluZ2lmeShvcHRzKX1gKVxuICAgICAgbGV0IGNoaWxkID0gY3Jvc3NTcGF3bihjb21tYW5kLCBwYXJtcywgb3B0cylcbiAgICAgIGNoaWxkLm9uKCdjbG9zZScsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gY2xvc2U6IGAgKyBjb2RlKSBcbiAgICAgICAgaWYoY29kZSA9PT0gMCkgeyByZXNvbHZlKDApIH1cbiAgICAgICAgZWxzZSB7IGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCBuZXcgRXJyb3IoY29kZSkgKTsgcmVzb2x2ZSgwKSB9XG4gICAgICB9KVxuICAgICAgY2hpbGQub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7IFxuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBlcnJvcmApIFxuICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChlcnJvcilcbiAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICBsb2d2KG9wdGlvbnMsIGAke3N0cn1gKVxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKCkubWF0Y2goL3dhaXRpbmcgZm9yIGNoYW5nZXNcXC5cXC5cXC4vKSkge1xuICAgICAgICAgIHJlc29sdmUoMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc3Vic3RyaW5ncy5zb21lKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIGRhdGEuaW5kZXhPZih2KSA+PSAwOyB9KSkgeyBcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0lORl1cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0xPR11cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoXCJbRVJSXVwiKSkge1xuICAgICAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChhcHAgKyBzdHIucmVwbGFjZSgvXlxcW0VSUlxcXSAvZ2ksICcnKSk7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0VSUl1cIiwgYCR7Y2hhbGsucmVkKFwiW0VSUl1cIil9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZyhgJHthcHB9JHtzdHJ9YCkgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY2hpbGQuc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgZXJyb3Igb24gY2xvc2U6IGAgKyBkYXRhKSBcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIHZhciBzdHJKYXZhT3B0cyA9IFwiUGlja2VkIHVwIF9KQVZBX09QVElPTlNcIjtcbiAgICAgICAgdmFyIGluY2x1ZGVzID0gc3RyLmluY2x1ZGVzKHN0ckphdmFPcHRzKVxuICAgICAgICBpZiAoIWluY2x1ZGVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7YXBwfSAke2NoYWxrLnJlZChcIltFUlJdXCIpfSAke3N0cn1gKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdleGVjdXRlQXN5bmM6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfSBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKHMpIHtcbiAgcmVxdWlyZSgncmVhZGxpbmUnKS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMClcbiAgdHJ5IHtcbiAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICB9XG4gIGNhdGNoKGUpIHt9XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHMpXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9ndihvcHRpb25zLCBzKSB7XG4gIGlmIChvcHRpb25zLnZlcmJvc2UgPT0gJ3llcycpIHtcbiAgICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICAgIHRyeSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICAgIH1cbiAgICBjYXRjaChlKSB7fVxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGAtdmVyYm9zZTogJHtzfWApXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBcHAoKSB7XG4gIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgdmFyIHByZWZpeCA9IGBgXG4gIGNvbnN0IHBsYXRmb3JtID0gcmVxdWlyZSgnb3MnKS5wbGF0Zm9ybSgpXG4gIGlmIChwbGF0Zm9ybSA9PSAnZGFyd2luJykgeyBwcmVmaXggPSBg4oS5IO+9omV4dO+9ozpgIH1cbiAgZWxzZSB7IHByZWZpeCA9IGBpIFtleHRdOmAgfVxuICByZXR1cm4gYCR7Y2hhbGsuZ3JlZW4ocHJlZml4KX0gYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFZlcnNpb25zKGFwcCwgcGx1Z2luTmFtZSwgZnJhbWV3b3JrTmFtZSkge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB2ID0ge31cbiAgdmFyIHBsdWdpblBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEnLCBwbHVnaW5OYW1lKVxuICB2YXIgcGx1Z2luUGtnID0gKGZzLmV4aXN0c1N5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBsdWdpblBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LnBsdWdpblZlcnNpb24gPSBwbHVnaW5Qa2cudmVyc2lvblxuICB2Ll9yZXNvbHZlZCA9IHBsdWdpblBrZy5fcmVzb2x2ZWRcbiAgaWYgKHYuX3Jlc29sdmVkID09IHVuZGVmaW5lZCkge1xuICAgIHYuZWRpdGlvbiA9IGBDb21tZXJjaWFsYFxuICB9XG4gIGVsc2Uge1xuICAgIGlmICgtMSA9PSB2Ll9yZXNvbHZlZC5pbmRleE9mKCdjb21tdW5pdHknKSkge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW11bml0eWBcbiAgICB9XG4gIH1cblxuICB2YXIgd2VicGFja1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3dlYnBhY2snKVxuICB2YXIgd2VicGFja1BrZyA9IChmcy5leGlzdHNTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LndlYnBhY2tWZXJzaW9uID0gd2VicGFja1BrZy52ZXJzaW9uXG5cbiAgdmFyIGV4dFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEvZXh0JylcbiAgdmFyIGV4dFBrZyA9IChmcy5leGlzdHNTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5leHRWZXJzaW9uID0gZXh0UGtnLnNlbmNoYS52ZXJzaW9uXG5cbiAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuXG4gIGlmICh2LmNtZFZlcnNpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvJHtwbHVnaW5OYW1lfS9ub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICAgIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuICB9XG5cbiAgdmFyIGZyYW1ld29ya0luZm8gPSAnJ1xuICAgaWYgKGZyYW1ld29ya05hbWUgIT0gdW5kZWZpbmVkICYmIGZyYW1ld29ya05hbWUgIT0gJ2V4dGpzJykge1xuICAgIHZhciBmcmFtZXdvcmtQYXRoID0gJydcbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAncmVhY3QnKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9yZWFjdCcpXG4gICAgfVxuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdhbmd1bGFyJykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZScpXG4gICAgfVxuICAgIHZhciBmcmFtZXdvcmtQa2cgPSAoZnMuZXhpc3RzU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5mcmFtZXdvcmtWZXJzaW9uID0gZnJhbWV3b3JrUGtnLnZlcnNpb25cbiAgICBmcmFtZXdvcmtJbmZvID0gJywgJyArIGZyYW1ld29ya05hbWUgKyAnIHYnICsgdi5mcmFtZXdvcmtWZXJzaW9uXG4gIH1cbiAgcmV0dXJuIGFwcCArICdleHQtd2VicGFjay1wbHVnaW4gdicgKyB2LnBsdWdpblZlcnNpb24gKyAnLCBFeHQgSlMgdicgKyB2LmV4dFZlcnNpb24gKyAnICcgKyB2LmVkaXRpb24gKyAnIEVkaXRpb24sIFNlbmNoYSBDbWQgdicgKyB2LmNtZFZlcnNpb24gKyAnLCB3ZWJwYWNrIHYnICsgdi53ZWJwYWNrVmVyc2lvbiArIGZyYW1ld29ya0luZm9cbiB9Il19