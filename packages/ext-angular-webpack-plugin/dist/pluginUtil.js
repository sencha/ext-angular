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

          if (options.watch == 'yes') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJob29rcyIsInN1Y2NlZWRNb2R1bGUiLCJ0YXAiLCJtb2R1bGUiLCJyZXNvdXJjZSIsIm1hdGNoIiwidG9vbGtpdCIsImRlcHMiLCJleHRyYWN0RnJvbVNvdXJjZSIsImh0bWxXZWJwYWNrUGx1Z2luQmVmb3JlSHRtbEdlbmVyYXRpb24iLCJkYXRhIiwib3V0cHV0UGF0aCIsImRldlNlcnZlciIsImNvbnRlbnRCYXNlIiwicmVwbGFjZSIsInRyaW0iLCJqc1BhdGgiLCJleHRQYXRoIiwiY3NzUGF0aCIsImFzc2V0cyIsImpzIiwidW5zaGlmdCIsImNzcyIsImUiLCJlcnJvcnMiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsIndhdGNoU3RhcnRlZCIsImNvbnNvbGUiLCJvdXRwdXQiLCJyaW1yYWYiLCJta2RpcnAiLCJwYWNrYWdlcyIsInRoZW1lIiwiZmlyc3RUaW1lIiwic3luYyIsImJ1aWxkWE1MIiwiY3JlYXRlQXBwSnNvbiIsImNyZWF0ZVdvcmtzcGFjZUpzb24iLCJjcmVhdGVKU0RPTUVudmlyb25tZW50Iiwid3JpdGVGaWxlU3luYyIsImZyb21QYXRoIiwidG9QYXRoIiwiZnJvbVJlc291cmNlcyIsInRvUmVzb3VyY2VzIiwiZnJvbVBhY2thZ2VzIiwidG9QYWNrYWdlcyIsIm1hbmlmZXN0IiwiYnVuZGxlRGlyIiwic2VuY2hhIiwiUHJvbWlzZSIsInJlamVjdCIsIm9uQnVpbGREb25lIiwib3B0cyIsInNpbGVudCIsInN0ZGlvIiwiZW5jb2RpbmciLCJleGVjdXRlQXN5bmMiLCJ0aGVuIiwicmVhc29uIiwiREVGQVVMVF9TVUJTVFJTIiwic3Vic3RyaW5ncyIsImNoYWxrIiwiY3Jvc3NTcGF3biIsImNoaWxkIiwib24iLCJjb2RlIiwic2lnbmFsIiwiRXJyb3IiLCJlcnJvciIsInN0ZG91dCIsInN0ciIsInRvU3RyaW5nIiwic29tZSIsInYiLCJpbmRleE9mIiwiaW5jbHVkZXMiLCJyZWQiLCJzdGRlcnIiLCJzdHJKYXZhT3B0cyIsInMiLCJjdXJzb3JUbyIsImNsZWFyTGluZSIsIndyaXRlIiwidmVyYm9zZSIsInByZWZpeCIsInBsYXRmb3JtIiwiZ3JlZW4iLCJmcmFtZXdvcmtOYW1lIiwicGx1Z2luUGF0aCIsInBsdWdpblBrZyIsInBsdWdpblZlcnNpb24iLCJ2ZXJzaW9uIiwiX3Jlc29sdmVkIiwiZWRpdGlvbiIsIndlYnBhY2tQYXRoIiwid2VicGFja1BrZyIsIndlYnBhY2tWZXJzaW9uIiwiZXh0UGtnIiwiZXh0VmVyc2lvbiIsImNtZFBhdGgiLCJjbWRQa2ciLCJjbWRWZXJzaW9uIiwidmVyc2lvbl9mdWxsIiwiZnJhbWV3b3JrSW5mbyIsImZyYW1ld29ya1BhdGgiLCJmcmFtZXdvcmtQa2ci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WCxDQUFoRCxJQUF1SCxFQUEzSTtBQUNBL0IsSUFBQUEsQ0FBQyxDQUFDaUMsZ0JBQUYsR0FBcUJELFlBQVksQ0FBQ2QsT0FBbEM7QUFDQVksSUFBQUEsYUFBYSxHQUFHLE9BQU9oQixhQUFQLEdBQXVCLElBQXZCLEdBQThCZCxDQUFDLENBQUNpQyxnQkFBaEQ7QUFDRDs7QUFDRCxTQUFPakksR0FBRyxHQUFHLHNCQUFOLEdBQStCZ0csQ0FBQyxDQUFDaUIsYUFBakMsR0FBaUQsWUFBakQsR0FBZ0VqQixDQUFDLENBQUN5QixVQUFsRSxHQUErRSxHQUEvRSxHQUFxRnpCLENBQUMsQ0FBQ29CLE9BQXZGLEdBQWlHLHdCQUFqRyxHQUE0SHBCLENBQUMsQ0FBQzRCLFVBQTlILEdBQTJJLGFBQTNJLEdBQTJKNUIsQ0FBQyxDQUFDdUIsY0FBN0osR0FBOEtPLGFBQXJMO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29uc3RydWN0b3Iob3B0aW9ucykge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB0aGlzVmFycyA9IHt9XG4gIHZhciB0aGlzT3B0aW9ucyA9IHt9XG4gIHZhciBwbHVnaW4gPSB7fVxuXG4gIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMgPSBbXVxuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycy5wdXNoKCd3ZWJwYWNrIGNvbmZpZzogZnJhbWV3b3JrIHBhcmFtZXRlciBvbiBleHQtd2VicGFjay1wbHVnaW4gaXMgbm90IGRlZmluZWQgLSB2YWx1ZXM6IHJlYWN0LCBhbmd1bGFyLCBleHRqcycpXG4gICAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICAgIHJldHVybiBwbHVnaW5cbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlT3B0aW9ucyA9IHJlcXVpcmUoJ3NjaGVtYS11dGlscycpXG4gIHZhbGlkYXRlT3B0aW9ucyhyZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldFZhbGlkYXRlT3B0aW9ucygpLCBvcHRpb25zLCAnJylcblxuICAvL2ZpeCBzZW5jaGEgY21kIG5vIGpldHR5IHNlcnZlciBwcm9ibGVtXG4gIC8vIHZhciB3YXRjaEZpbGUgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kL2Rpc3QvYW50L2J1aWxkL2FwcC93YXRjaC1pbXBsLnhtbGApXG4gIC8vIGxvZ3Yob3B0aW9ucywgYG1vZGlmeSAke3dhdGNoRmlsZX1gKVxuICAvLyB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3YXRjaEZpbGUsICd1dGYtOCcpO1xuICAvLyB2YXIgaXAgPSAnd2ViU2VydmVyUmVmSWQ9XCJhcHAud2ViLnNlcnZlclwiJztcbiAgLy8gdmFyIG5ld1ZhbHVlID0gZGF0YS5yZXBsYWNlKG5ldyBSZWdFeHAoaXApLCAnJyk7XG4gIC8vIGZzLndyaXRlRmlsZVN5bmMod2F0Y2hGaWxlLCBuZXdWYWx1ZSwgJ3V0Zi04Jyk7XG5cbiAgdGhpc1ZhcnMgPSByZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldERlZmF1bHRWYXJzKClcbiAgdGhpc1ZhcnMuZnJhbWV3b3JrID0gb3B0aW9ucy5mcmFtZXdvcmtcbiAgc3dpdGNoKHRoaXNWYXJzLmZyYW1ld29yaykge1xuICAgIGNhc2UgJ2V4dGpzJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVhY3QnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtcmVhY3Qtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbmd1bGFyJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LWFuZ3VsYXItd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gIH1cblxuICAvL2ZpeCBmYXNoaW9uIGRpc3QgcHJvYmxlbVxuICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gIHZhciB0b0Zhc2hpb25EaXN0ID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZC9kaXN0L2pzL25vZGVfbW9kdWxlcy9mYXNoaW9uL2Rpc3RgKVxuICBsb2d2KG9wdGlvbnMsIGB0b0Zhc2hpb25EaXN0ICR7dG9GYXNoaW9uRGlzdH1gKVxuICBpZiAoIWZzLmV4aXN0c1N5bmModG9GYXNoaW9uRGlzdCkpIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBjb3B5YClcbiAgICB2YXIgZnJvbUZhc2hpb25EaXN0ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS8nICsgdGhpc1ZhcnMucGx1Z2luTmFtZSArICcvZmFzaGlvbi9kaXN0LycpXG4gICAgZnN4LmNvcHlTeW5jKGZyb21GYXNoaW9uRGlzdCwgdG9GYXNoaW9uRGlzdClcbiAgfVxuICBlbHNlIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBubyBjb3B5YClcbiAgfVxuXG4gIHRoaXNWYXJzLmFwcCA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRBcHAoKVxuICBsb2d2KG9wdGlvbnMsIGBwbHVnaW5OYW1lIC0gJHt0aGlzVmFycy5wbHVnaW5OYW1lfWApXG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNWYXJzLmFwcCAtICR7dGhpc1ZhcnMuYXBwfWApXG5cbiAgY29uc3QgcmMgPSAoZnMuZXhpc3RzU3luYyhgLmV4dC0ke3RoaXNWYXJzLmZyYW1ld29ya31yY2ApICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCwgJ3V0Zi04JykpIHx8IHt9KVxuICB0aGlzT3B0aW9ucyA9IHsgLi4ucmVxdWlyZShgLi8ke3RoaXNWYXJzLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdE9wdGlvbnMoKSwgLi4ub3B0aW9ucywgLi4ucmMgfVxuICBsb2d2KG9wdGlvbnMsIGB0aGlzT3B0aW9ucyAtICR7SlNPTi5zdHJpbmdpZnkodGhpc09wdGlvbnMpfWApXG4gIGlmICh0aGlzT3B0aW9ucy5lbnZpcm9ubWVudCA9PSAncHJvZHVjdGlvbicpIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gdHJ1ZX1cbiAgZWxzZSBcbiAgICB7dGhpc1ZhcnMucHJvZHVjdGlvbiA9IGZhbHNlfVxuICBsb2cocmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldFZlcnNpb25zKHRoaXNWYXJzLmFwcCwgdGhpc1ZhcnMucGx1Z2luTmFtZSwgdGhpc1ZhcnMuZnJhbWV3b3JrKSlcbiAgbG9nKHRoaXNWYXJzLmFwcCArICdCdWlsZGluZyBmb3IgJyArIHRoaXNPcHRpb25zLmVudmlyb25tZW50KVxuXG4gIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgcGx1Z2luLm9wdGlvbnMgPSB0aGlzT3B0aW9uc1xuICByZXR1cm4gcGx1Z2luXG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxhdGlvbihjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9jb21waWxhdGlvbicpXG4gICAgaWYgKHZhcnMucHJvZHVjdGlvbikge1xuICAgICAgbG9ndihvcHRpb25zLGBleHQtY29tcGlsYXRpb246IHByb2R1Y3Rpb24gaXMgYCArICB2YXJzLnByb2R1Y3Rpb24pXG4gICAgICBjb21waWxhdGlvbi5ob29rcy5zdWNjZWVkTW9kdWxlLnRhcChgZXh0LXN1Y2NlZWQtbW9kdWxlYCwgKG1vZHVsZSkgPT4ge1xuICAgICAgICBpZiAobW9kdWxlLnJlc291cmNlICYmIG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuKGp8dClzeD8kLykgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvbm9kZV9tb2R1bGVzLykgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaChgL2V4dC17JG9wdGlvbnMuZnJhbWV3b3JrfS9kaXN0L2ApICYmICFtb2R1bGUucmVzb3VyY2UubWF0Y2goYC9leHQtJHtvcHRpb25zLmZyYW1ld29ya30tJHtvcHRpb25zLnRvb2xraXR9L2ApKSB7XG4gICAgICAgICAgdmFycy5kZXBzID0gWyBcbiAgICAgICAgICAgIC4uLih2YXJzLmRlcHMgfHwgW10pLCBcbiAgICAgICAgICAgIC4uLnJlcXVpcmUoYC4vJHt2YXJzLmZyYW1ld29ya31VdGlsYCkuZXh0cmFjdEZyb21Tb3VyY2UobW9kdWxlLCBvcHRpb25zLCBjb21waWxhdGlvbikgXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucyxgZXh0LWNvbXBpbGF0aW9uOiBwcm9kdWN0aW9uIGlzIGAgKyAgdmFycy5wcm9kdWN0aW9uKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgIT0gJ2FuZ3VsYXInKSB7XG4gICAgICBjb21waWxhdGlvbi5ob29rcy5odG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uLnRhcChgZXh0LWh0bWwtZ2VuZXJhdGlvbmAsKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgICAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgICAgIHZhciBvdXRwdXRQYXRoID0gJydcbiAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICAgICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJykge1xuICAgICAgICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG91dHB1dFBhdGggPSAnYnVpbGQnXG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0UGF0aCA9IG91dHB1dFBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgIHZhciBqc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmpzJylcbiAgICAgICAgdmFyIGNzc1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0UGF0aCwgdmFycy5leHRQYXRoLCAnZXh0LmNzcycpXG4gICAgICAgIGRhdGEuYXNzZXRzLmpzLnVuc2hpZnQoanNQYXRoKVxuICAgICAgICBkYXRhLmFzc2V0cy5jc3MudW5zaGlmdChjc3NQYXRoKVxuICAgICAgICBsb2codmFycy5hcHAgKyBgQWRkaW5nICR7anNQYXRofSBhbmQgJHtjc3NQYXRofSB0byBpbmRleC5odG1sYClcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdza2lwcGVkIEhPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2NvbXBpbGF0aW9uOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gZW1pdCcpXG4gICAgdmFyIGFwcCA9IHZhcnMuYXBwXG4gICAgdmFyIGZyYW1ld29yayA9IHZhcnMuZnJhbWV3b3JrXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgIGNvbnN0IF9idWlsZEV4dEJ1bmRsZSA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9idWlsZEV4dEJ1bmRsZVxuICAgIGxldCBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm91dHB1dFBhdGgsdmFycy5leHRQYXRoKVxuICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycgJiYgY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgfVxuICAgIGxvZ3Yob3B0aW9ucywnb3V0cHV0UGF0aDogJyArIG91dHB1dFBhdGgpXG4gICAgbG9ndihvcHRpb25zLCdmcmFtZXdvcms6ICcgKyBmcmFtZXdvcmspXG4gICAgaWYgKG9wdGlvbnMuZW1pdCA9PSB0cnVlKSB7XG4gICAgICBpZiAoZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgICAgX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlcXVpcmUoYC4vJHtmcmFtZXdvcmt9VXRpbGApLl9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbW1hbmQgPSAnJ1xuICAgICAgaWYgKG9wdGlvbnMud2F0Y2ggPT0gJ3llcycpIHtcbiAgICAgICAgY29tbWFuZCA9ICd3YXRjaCdcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21tYW5kID0gJ2J1aWxkJ1xuICAgICAgfVxuXG4gICAgICBpZiAodmFycy5yZWJ1aWxkID09IHRydWUpIHtcbiAgICAgICAgdmFyIHBhcm1zID0gW11cbiAgICAgICAgaWYgKG9wdGlvbnMucHJvZmlsZSA9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5wcm9maWxlID09ICcnIHx8IG9wdGlvbnMucHJvZmlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsICctLXdlYi1zZXJ2ZXInLCAnZmFsc2UnLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChjb21tYW5kID09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCBvcHRpb25zLnByb2ZpbGUsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsICctLXdlYi1zZXJ2ZXInLCAnZmFsc2UnLCBvcHRpb25zLnByb2ZpbGUsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhcnMud2F0Y2hTdGFydGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2J1aWxkMScpXG4gICAgICAgICAgYXdhaXQgX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdidWlsZDInKVxuICAgICAgICAgIHZhcnMud2F0Y2hTdGFydGVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb25zdCBqc0NodW5rID0gY29tcGlsYXRpb24uYWRkQ2h1bmsoYGV4dC1hbmd1bGFyLWpzYClcbiAgICAgICAgLy9qc0NodW5rLmhhc1J1bnRpbWUgPSBqc0NodW5rLmlzSW5pdGlhbCA9ICgpID0+IHRydWU7XG4gICAgICAgIC8vanNDaHVuay5maWxlcy5wdXNoKHBhdGguam9pbignYnVpbGQnLCAnZXh0LWFuZ3VsYXInLCAnZXh0LmpzJykpO1xuICAgICAgICAvL2pzQ2h1bmsuZmlsZXMucHVzaChwYXRoLmpvaW4oJ2J1aWxkJywgJ2V4dC1hbmd1bGFyJywgICdleHQuY3NzJykpO1xuICAgICAgICAvL2pzQ2h1bmsuaWQgPSAtMjsgLy8gdGhpcyBmb3JjZXMgaHRtbC13ZWJwYWNrLXBsdWdpbiB0byBpbmNsdWRlIGV4dC5qcyBmaXJzdFxuXG4gICAgICAgIC8vIGlmKG9wdGlvbnMuYnJvd3NlciA9PSB0cnVlICYmIG9wdGlvbnMud2F0Y2ggPT0gJ3llcycpIHtcbiAgICAgICAgLy8gICBpZiAodmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBjb21waWxhdGlvbi5lcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy8gICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgb3B0aW9ucy5wb3J0XG4gICAgICAgIC8vICAgICBsb2coYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAvLyAgICAgdmFycy5icm93c2VyQ291bnQrK1xuICAgICAgICAvLyAgICAgY29uc3Qgb3BuID0gcmVxdWlyZSgnb3BuJylcbiAgICAgICAgLy8gICAgIG9wbih1cmwpXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgIGxvZ3Yob3B0aW9ucywnYnJvd3NlciBOT1Qgb3BlbmVkJylcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2coYCR7dmFycy5hcHB9RlVOQ1RJT04gZW1pdCBub3QgcnVuYClcbiAgICAgIC8vIGlmKG9wdGlvbnMuYnJvd3NlciA9PSB0cnVlKSB7XG4gICAgICAvLyAgIGlmICh2YXJzLmJyb3dzZXJDb3VudCA9PSAwICYmIG9wdGlvbnMud2F0Y2ggPT0gJ3llcycpIHtcbiAgICAgIC8vICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6JyArIG9wdGlvbnMucG9ydFxuICAgICAgLy8gICAgIGxvZyhhcHAgKyBgT3BlbmluZyBicm93c2VyIGF0ICR7dXJsfWApXG4gICAgICAvLyAgICAgdmFycy5icm93c2VyQ291bnQrK1xuICAgICAgLy8gICAgIGNvbnN0IG9wbiA9IHJlcXVpcmUoJ29wbicpXG4gICAgICAvLyAgICAgb3BuKHVybClcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAvLyAgIGxvZ3Yob3B0aW9ucywnYnJvd3NlciBOT1Qgb3BlbmVkJylcbiAgICAgIC8vIH1cbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdlbWl0OiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dCwgY29tcGlsYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9wcmVwYXJlRm9yQnVpbGQnKVxuICAgIGNvbnN0IHJpbXJhZiA9IHJlcXVpcmUoJ3JpbXJhZicpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgdmFyIHBhY2thZ2VzID0gb3B0aW9ucy5wYWNrYWdlc1xuICAgIHZhciB0b29sa2l0ID0gb3B0aW9ucy50b29sa2l0XG4gICAgdmFyIHRoZW1lID0gb3B0aW9ucy50aGVtZVxuXG4gICAgdGhlbWUgPSB0aGVtZSB8fCAodG9vbGtpdCA9PT0gJ2NsYXNzaWMnID8gJ3RoZW1lLXRyaXRvbicgOiAndGhlbWUtbWF0ZXJpYWwnKVxuICAgIGxvZ3Yob3B0aW9ucywnZmlyc3RUaW1lOiAnICsgdmFycy5maXJzdFRpbWUpXG4gICAgaWYgKHZhcnMuZmlyc3RUaW1lKSB7XG4gICAgICByaW1yYWYuc3luYyhvdXRwdXQpXG4gICAgICBta2RpcnAuc3luYyhvdXRwdXQpXG4gICAgICBjb25zdCBidWlsZFhNTCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuYnVpbGRYTUxcbiAgICAgIGNvbnN0IGNyZWF0ZUFwcEpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUFwcEpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZVdvcmtzcGFjZUpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZVdvcmtzcGFjZUpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUpTRE9NRW52aXJvbm1lbnRcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYnVpbGQueG1sJyksIGJ1aWxkWE1MKHZhcnMucHJvZHVjdGlvbiwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYXBwLmpzb24nKSwgY3JlYXRlQXBwSnNvbih0aGVtZSwgcGFja2FnZXMsIHRvb2xraXQsIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2pzZG9tLWVudmlyb25tZW50LmpzJyksIGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnd29ya3NwYWNlLmpzb24nKSwgY3JlYXRlV29ya3NwYWNlSnNvbihvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG5cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAnYW5ndWxhcicpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHZhcnMuZnJhbWV3b3JrID09ICdyZWFjdCcpICB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3QvcGFja2FnZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtcmVhY3QvcGFja2FnZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ3BhY2thZ2VzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9vdmVycmlkZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cblxuLy9kbyB3ZSBldmVyIGhpdCB0aGVzZT9cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJy4uL3Jlc291cmNlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICdyZXNvdXJjZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3BhY2thZ2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhY2thZ2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcy8nKVxuICAgICAgICB2YXIgdG9QYWNrYWdlcyA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGFja2FnZXMsIHRvUGFja2FnZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdvdmVycmlkZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnb3ZlcnJpZGVzLycpXG4gICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG5cblxuICAgIH1cbiAgICB2YXJzLmZpcnN0VGltZSA9IGZhbHNlXG4gICAgdmFyIGpzID0gJydcbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICB2YXJzLmRlcHMucHVzaCgnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJylcbiAgICAgIGpzID0gdmFycy5kZXBzLmpvaW4oJztcXG4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBqcyA9ICdFeHQucmVxdWlyZShcIkV4dC4qXCIpJ1xuICAgIH1cbiAgICBpZiAodmFycy5tYW5pZmVzdCA9PT0gbnVsbCB8fCBqcyAhPT0gdmFycy5tYW5pZmVzdCkge1xuICAgICAgdmFycy5tYW5pZmVzdCA9IGpzXG4gICAgICBjb25zdCBtYW5pZmVzdCA9IHBhdGguam9pbihvdXRwdXQsICdtYW5pZmVzdC5qcycpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0LCBqcywgJ3V0ZjgnKVxuICAgICAgdmFycy5yZWJ1aWxkID0gdHJ1ZVxuICAgICAgdmFyIGJ1bmRsZURpciA9IG91dHB1dC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKVxuICAgICAgaWYgKGJ1bmRsZURpci50cmltKCkgPT0gJycpIHtidW5kbGVEaXIgPSAnLi8nfVxuICAgICAgbG9nKGFwcCArICdCdWlsZGluZyBFeHQgYnVuZGxlIGF0OiAnICsgYnVuZGxlRGlyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhcnMucmVidWlsZCA9IGZhbHNlXG4gICAgICBsb2coYXBwICsgJ0V4dCByZWJ1aWxkIE5PVCBuZWVkZWQnKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19wcmVwYXJlRm9yQnVpbGQ6ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfYnVpbGRFeHRCdW5kbGUnKVxuXG4gICAgbGV0IHNlbmNoYTsgdHJ5IHsgc2VuY2hhID0gcmVxdWlyZSgnQHNlbmNoYS9jbWQnKSB9IGNhdGNoIChlKSB7IHNlbmNoYSA9ICdzZW5jaGEnIH1cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhzZW5jaGEpKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgZXhpc3RzJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NlbmNoYSBmb2xkZXIgRE9FUyBOT1QgZXhpc3QnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBvbkJ1aWxkRG9uZSA9ICgpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCdvbkJ1aWxkRG9uZScpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICB2YXIgb3B0cyA9IHsgY3dkOiBvdXRwdXRQYXRoLCBzaWxlbnQ6IHRydWUsIHN0ZGlvOiAncGlwZScsIGVuY29kaW5nOiAndXRmLTgnfVxuICAgICAgZXhlY3V0ZUFzeW5jKGFwcCwgc2VuY2hhLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpLnRoZW4gKFxuICAgICAgICBmdW5jdGlvbigpIHsgb25CdWlsZERvbmUoKSB9LCBcbiAgICAgICAgZnVuY3Rpb24ocmVhc29uKSB7IHJlamVjdChyZWFzb24pIH1cbiAgICAgIClcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZScpXG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19idWlsZEV4dEJ1bmRsZTogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVBc3luYyAoYXBwLCBjb21tYW5kLCBwYXJtcywgb3B0cywgY29tcGlsYXRpb24sIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICAvL2NvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFsnW0lORl0gTG9hZGluZycsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFNlcnZlclwiLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICBjb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbXCJbSU5GXSB4U2VydmVyXCIsICdbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIEFwcGVuZCcsICdbSU5GXSBQcm9jZXNzaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcgQnVpbGQnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIHZhciBzdWJzdHJpbmdzID0gREVGQVVMVF9TVUJTVFJTIFxuICAgIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgICBjb25zdCBjcm9zc1NwYXduID0gcmVxdWlyZSgnY3Jvc3Mtc3Bhd24nKVxuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIGV4ZWN1dGVBc3luYycpXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbG9ndihvcHRpb25zLGBjb21tYW5kIC0gJHtjb21tYW5kfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBwYXJtcyAtICR7cGFybXN9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYG9wdHMgLSAke0pTT04uc3RyaW5naWZ5KG9wdHMpfWApXG4gICAgICBsZXQgY2hpbGQgPSBjcm9zc1NwYXduKGNvbW1hbmQsIHBhcm1zLCBvcHRzKVxuICAgICAgY2hpbGQub24oJ2Nsb3NlJywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBjbG9zZTogYCArIGNvZGUpIFxuICAgICAgICBpZihjb2RlID09PSAwKSB7IHJlc29sdmUoMCkgfVxuICAgICAgICBlbHNlIHsgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcihjb2RlKSApOyByZXNvbHZlKDApIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5vbignZXJyb3InLCAoZXJyb3IpID0+IHsgXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGVycm9yYCkgXG4gICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGVycm9yKVxuICAgICAgICByZXNvbHZlKDApXG4gICAgICB9KVxuICAgICAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYCR7c3RyfWApXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcoKS5tYXRjaCgvd2FpdGluZyBmb3IgY2hhbmdlc1xcLlxcLlxcLi8pKSB7XG4gICAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzdWJzdHJpbmdzLnNvbWUoZnVuY3Rpb24odikgeyByZXR1cm4gZGF0YS5pbmRleE9mKHYpID49IDA7IH0pKSB7IFxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbSU5GXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbTE9HXVwiLCBcIlwiKVxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICAgICAgaWYgKHN0ci5pbmNsdWRlcyhcIltFUlJdXCIpKSB7XG4gICAgICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKGFwcCArIHN0ci5yZXBsYWNlKC9eXFxbRVJSXFxdIC9naSwgJycpKTtcbiAgICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCJbRVJSXVwiLCBgJHtjaGFsay5yZWQoXCJbRVJSXVwiKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nKGAke2FwcH0ke3N0cn1gKSBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsIGBlcnJvciBvbiBjbG9zZTogYCArIGRhdGEpIFxuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgdmFyIHN0ckphdmFPcHRzID0gXCJQaWNrZWQgdXAgX0pBVkFfT1BUSU9OU1wiO1xuICAgICAgICB2YXIgaW5jbHVkZXMgPSBzdHIuaW5jbHVkZXMoc3RySmF2YU9wdHMpXG4gICAgICAgIGlmICghaW5jbHVkZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHthcHB9ICR7Y2hhbGsucmVkKFwiW0VSUl1cIil9ICR7c3RyfWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2V4ZWN1dGVBc3luYzogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9IFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cocykge1xuICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICB0cnkge1xuICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gIH1cbiAgY2F0Y2goZSkge31cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUocylcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2d2KG9wdGlvbnMsIHMpIHtcbiAgaWYgKG9wdGlvbnMudmVyYm9zZSA9PSAneWVzJykge1xuICAgIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYC12ZXJib3NlOiAke3N9YClcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFwcCgpIHtcbiAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICB2YXIgcHJlZml4ID0gYGBcbiAgY29uc3QgcGxhdGZvcm0gPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKClcbiAgaWYgKHBsYXRmb3JtID09ICdkYXJ3aW4nKSB7IHByZWZpeCA9IGDihLkg772iZXh0772jOmAgfVxuICBlbHNlIHsgcHJlZml4ID0gYGkgW2V4dF06YCB9XG4gIHJldHVybiBgJHtjaGFsay5ncmVlbihwcmVmaXgpfSBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VmVyc2lvbnMoYXBwLCBwbHVnaW5OYW1lLCBmcmFtZXdvcmtOYW1lKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHYgPSB7fVxuICB2YXIgcGx1Z2luUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYScsIHBsdWdpbk5hbWUpXG4gIHZhciBwbHVnaW5Qa2cgPSAoZnMuZXhpc3RzU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYucGx1Z2luVmVyc2lvbiA9IHBsdWdpblBrZy52ZXJzaW9uXG4gIHYuX3Jlc29sdmVkID0gcGx1Z2luUGtnLl9yZXNvbHZlZFxuICBpZiAodi5fcmVzb2x2ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKC0xID09IHYuX3Jlc29sdmVkLmluZGV4T2YoJ2NvbW11bml0eScpKSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbXVuaXR5YFxuICAgIH1cbiAgfVxuXG4gIHZhciB3ZWJwYWNrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvd2VicGFjaycpXG4gIHZhciB3ZWJwYWNrUGtnID0gKGZzLmV4aXN0c1N5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYud2VicGFja1ZlcnNpb24gPSB3ZWJwYWNrUGtnLnZlcnNpb25cblxuICB2YXIgZXh0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQnKVxuICB2YXIgZXh0UGtnID0gKGZzLmV4aXN0c1N5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmV4dFZlcnNpb24gPSBleHRQa2cuc2VuY2hhLnZlcnNpb25cblxuICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG5cbiAgaWYgKHYuY21kVmVyc2lvbiA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS8ke3BsdWdpbk5hbWV9L25vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gICAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG4gIH1cblxuICB2YXIgZnJhbWV3b3JrSW5mbyA9ICcnXG4gICBpZiAoZnJhbWV3b3JrTmFtZSAhPSB1bmRlZmluZWQgJiYgZnJhbWV3b3JrTmFtZSAhPSAnZXh0anMnKSB7XG4gICAgdmFyIGZyYW1ld29ya1BhdGggPSAnJ1xuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdyZWFjdCcpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3JlYWN0JylcbiAgICB9XG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlJylcbiAgICB9XG4gICAgdmFyIGZyYW1ld29ya1BrZyA9IChmcy5leGlzdHNTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmZyYW1ld29ya1ZlcnNpb24gPSBmcmFtZXdvcmtQa2cudmVyc2lvblxuICAgIGZyYW1ld29ya0luZm8gPSAnLCAnICsgZnJhbWV3b3JrTmFtZSArICcgdicgKyB2LmZyYW1ld29ya1ZlcnNpb25cbiAgfVxuICByZXR1cm4gYXBwICsgJ2V4dC13ZWJwYWNrLXBsdWdpbiB2JyArIHYucGx1Z2luVmVyc2lvbiArICcsIEV4dCBKUyB2JyArIHYuZXh0VmVyc2lvbiArICcgJyArIHYuZWRpdGlvbiArICcgRWRpdGlvbiwgU2VuY2hhIENtZCB2JyArIHYuY21kVmVyc2lvbiArICcsIHdlYnBhY2sgdicgKyB2LndlYnBhY2tWZXJzaW9uICsgZnJhbWV3b3JrSW5mb1xuIH0iXX0=