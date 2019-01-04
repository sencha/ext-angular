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

    var extComponents = [];

    if (vars.production) {
      logv(options, `ext-compilation: production is ` + vars.production);

      if (options.framework == 'angular') {
        compilation.hooks.succeedModule.tap(`ext-succeed-module`, module => {
          if (module && module.resource && module.resource.match(/ext-angular-modern\/fesm5\/sencha-ext-angular-modern.js/)) {
            extComponents = require(`./${vars.framework}Util`).extractExtComponents(module, options, compilation);
          }
        });
      }

      compilation.hooks.optimizeModules.tap(`ext-succeed-module`, modules => {
        modules.forEach(module => {
          if (extComponents.length && module.resource && (module.resource.match(/\.(j|t)sx?$/) || options.framework == 'angular' && module.resource.match(/\.html$/)) && !module.resource.match(/node_modules/) && !module.resource.match(`/ext-{$options.framework}/dist/`)) {
            vars.deps = [...(vars.deps || []), ...require(`./${vars.framework}Util`).extractFromSource(module, options, compilation, extComponents)];
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJleHRDb21wb25lbnRzIiwiaG9va3MiLCJzdWNjZWVkTW9kdWxlIiwidGFwIiwibW9kdWxlIiwicmVzb3VyY2UiLCJtYXRjaCIsImV4dHJhY3RFeHRDb21wb25lbnRzIiwib3B0aW1pemVNb2R1bGVzIiwibW9kdWxlcyIsImZvckVhY2giLCJsZW5ndGgiLCJkZXBzIiwiZXh0cmFjdEZyb21Tb3VyY2UiLCJodG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uIiwiZGF0YSIsIm91dHB1dFBhdGgiLCJkZXZTZXJ2ZXIiLCJjb250ZW50QmFzZSIsInJlcGxhY2UiLCJ0cmltIiwianNQYXRoIiwiZXh0UGF0aCIsImNzc1BhdGgiLCJhc3NldHMiLCJqcyIsInVuc2hpZnQiLCJjc3MiLCJlIiwiZXJyb3JzIiwiZW1pdCIsImNhbGxiYWNrIiwiX2J1aWxkRXh0QnVuZGxlIiwiX3ByZXBhcmVGb3JCdWlsZCIsImNvbW1hbmQiLCJ3YXRjaCIsInJlYnVpbGQiLCJwYXJtcyIsInByb2ZpbGUiLCJ3YXRjaFN0YXJ0ZWQiLCJjb25zb2xlIiwib3V0cHV0IiwicmltcmFmIiwibWtkaXJwIiwicGFja2FnZXMiLCJ0b29sa2l0IiwidGhlbWUiLCJmaXJzdFRpbWUiLCJzeW5jIiwiYnVpbGRYTUwiLCJjcmVhdGVBcHBKc29uIiwiY3JlYXRlV29ya3NwYWNlSnNvbiIsImNyZWF0ZUpTRE9NRW52aXJvbm1lbnQiLCJ3cml0ZUZpbGVTeW5jIiwiZnJvbVBhdGgiLCJ0b1BhdGgiLCJmcm9tUmVzb3VyY2VzIiwidG9SZXNvdXJjZXMiLCJmcm9tUGFja2FnZXMiLCJ0b1BhY2thZ2VzIiwiaW5jbHVkZXMiLCJtYW5pZmVzdCIsImJ1bmRsZURpciIsInNlbmNoYSIsIlByb21pc2UiLCJyZWplY3QiLCJvbkJ1aWxkRG9uZSIsIm9wdHMiLCJzaWxlbnQiLCJzdGRpbyIsImVuY29kaW5nIiwiZXhlY3V0ZUFzeW5jIiwidGhlbiIsInJlYXNvbiIsIkRFRkFVTFRfU1VCU1RSUyIsInN1YnN0cmluZ3MiLCJjaGFsayIsImNyb3NzU3Bhd24iLCJjaGlsZCIsIm9uIiwiY29kZSIsInNpZ25hbCIsIkVycm9yIiwiZXJyb3IiLCJzdGRvdXQiLCJzdHIiLCJ0b1N0cmluZyIsInNvbWUiLCJ2IiwiaW5kZXhPZiIsInJlZCIsInN0ZGVyciIsInN0ckphdmFPcHRzIiwicyIsImN1cnNvclRvIiwiY2xlYXJMaW5lIiwid3JpdGUiLCJ2ZXJib3NlIiwicHJlZml4IiwicGxhdGZvcm0iLCJncmVlbiIsImZyYW1ld29ya05hbWUiLCJwbHVnaW5QYXRoIiwicGx1Z2luUGtnIiwicGx1Z2luVmVyc2lvbiIsInZlcnNpb24iLCJfcmVzb2x2ZWQiLCJlZGl0aW9uIiwid2VicGFja1BhdGgiLCJ3ZWJwYWNrUGtnIiwid2VicGFja1ZlcnNpb24iLCJleHRQa2ciLCJleHRWZXJzaW9uIiwiY21kUGF0aCIsImNtZFBrZyIsImNtZFZlcnNpb24iLCJ2ZXJzaW9uX2Z1bGwiLCJmcmFtZXdvcmtJbmZvIiwiZnJhbWV3b3JrUGF0aCIsImZyYW1ld29ya1BrZyIsImZyYW1ld29ya1ZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDcEMsUUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxRQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQyxJQUFELENBQWxCOztBQUVBLE1BQUlFLFFBQVEsR0FBRyxFQUFmO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBRUEsTUFBSU4sT0FBTyxDQUFDTyxTQUFSLElBQXFCQyxTQUF6QixFQUFvQztBQUNsQ0osSUFBQUEsUUFBUSxDQUFDSyxZQUFULEdBQXdCLEVBQXhCO0FBQ0FMLElBQUFBLFFBQVEsQ0FBQ0ssWUFBVCxDQUFzQkMsSUFBdEIsQ0FBMkIsMEdBQTNCO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0ssSUFBUCxHQUFjUCxRQUFkO0FBQ0EsV0FBT0UsTUFBUDtBQUNEOztBQUVELFFBQU1NLGVBQWUsR0FBR1YsT0FBTyxDQUFDLGNBQUQsQ0FBL0I7O0FBQ0FVLEVBQUFBLGVBQWUsQ0FBQ1YsT0FBTyxDQUFFLEtBQUlGLE9BQU8sQ0FBQ08sU0FBVSxNQUF4QixDQUFQLENBQXNDTSxrQkFBdEMsRUFBRCxFQUE2RGIsT0FBN0QsRUFBc0UsRUFBdEUsQ0FBZixDQWhCb0MsQ0FrQnBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBSSxFQUFBQSxRQUFRLEdBQUdGLE9BQU8sQ0FBRSxLQUFJRixPQUFPLENBQUNPLFNBQVUsTUFBeEIsQ0FBUCxDQUFzQ08sY0FBdEMsRUFBWDtBQUNBVixFQUFBQSxRQUFRLENBQUNHLFNBQVQsR0FBcUJQLE9BQU8sQ0FBQ08sU0FBN0I7O0FBQ0Es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WUFBakQsR0FBZ0VoQixDQUFDLENBQUN3QixVQUFsRSxHQUErRSxHQUEvRSxHQUFxRnhCLENBQUMsQ0FBQ21CLE9BQXZGLEdBQWlHLHdCQUFqRyxHQUE0SG5CLENBQUMsQ0FBQzJCLFVBQTlILEdBQTJJLGFBQTNJLEdBQTJKM0IsQ0FBQyxDQUFDc0IsY0FBN0osR0FBOEtPLGFBQXJMO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29uc3RydWN0b3Iob3B0aW9ucykge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB0aGlzVmFycyA9IHt9XG4gIHZhciB0aGlzT3B0aW9ucyA9IHt9XG4gIHZhciBwbHVnaW4gPSB7fVxuXG4gIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMgPSBbXVxuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycy5wdXNoKCd3ZWJwYWNrIGNvbmZpZzogZnJhbWV3b3JrIHBhcmFtZXRlciBvbiBleHQtd2VicGFjay1wbHVnaW4gaXMgbm90IGRlZmluZWQgLSB2YWx1ZXM6IHJlYWN0LCBhbmd1bGFyLCBleHRqcycpXG4gICAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICAgIHJldHVybiBwbHVnaW5cbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlT3B0aW9ucyA9IHJlcXVpcmUoJ3NjaGVtYS11dGlscycpXG4gIHZhbGlkYXRlT3B0aW9ucyhyZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldFZhbGlkYXRlT3B0aW9ucygpLCBvcHRpb25zLCAnJylcblxuICAvL2ZpeCBzZW5jaGEgY21kIG5vIGpldHR5IHNlcnZlciBwcm9ibGVtXG4gIC8vIHZhciB3YXRjaEZpbGUgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kL2Rpc3QvYW50L2J1aWxkL2FwcC93YXRjaC1pbXBsLnhtbGApXG4gIC8vIGxvZ3Yob3B0aW9ucywgYG1vZGlmeSAke3dhdGNoRmlsZX1gKVxuICAvLyB2YXIgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyh3YXRjaEZpbGUsICd1dGYtOCcpO1xuICAvLyB2YXIgaXAgPSAnd2ViU2VydmVyUmVmSWQ9XCJhcHAud2ViLnNlcnZlclwiJztcbiAgLy8gdmFyIG5ld1ZhbHVlID0gZGF0YS5yZXBsYWNlKG5ldyBSZWdFeHAoaXApLCAnJyk7XG4gIC8vIGZzLndyaXRlRmlsZVN5bmMod2F0Y2hGaWxlLCBuZXdWYWx1ZSwgJ3V0Zi04Jyk7XG5cbiAgdGhpc1ZhcnMgPSByZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldERlZmF1bHRWYXJzKClcbiAgdGhpc1ZhcnMuZnJhbWV3b3JrID0gb3B0aW9ucy5mcmFtZXdvcmtcbiAgc3dpdGNoKHRoaXNWYXJzLmZyYW1ld29yaykge1xuICAgIGNhc2UgJ2V4dGpzJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVhY3QnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtcmVhY3Qtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbmd1bGFyJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LWFuZ3VsYXItd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gIH1cblxuICAvL2ZpeCBmYXNoaW9uIGRpc3QgcHJvYmxlbVxuICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gIHZhciB0b0Zhc2hpb25EaXN0ID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZC9kaXN0L2pzL25vZGVfbW9kdWxlcy9mYXNoaW9uL2Rpc3RgKVxuICBsb2d2KG9wdGlvbnMsIGB0b0Zhc2hpb25EaXN0ICR7dG9GYXNoaW9uRGlzdH1gKVxuICBpZiAoIWZzLmV4aXN0c1N5bmModG9GYXNoaW9uRGlzdCkpIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBjb3B5YClcbiAgICB2YXIgZnJvbUZhc2hpb25EaXN0ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS8nICsgdGhpc1ZhcnMucGx1Z2luTmFtZSArICcvZmFzaGlvbi9kaXN0LycpXG4gICAgZnN4LmNvcHlTeW5jKGZyb21GYXNoaW9uRGlzdCwgdG9GYXNoaW9uRGlzdClcbiAgfVxuICBlbHNlIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBubyBjb3B5YClcbiAgfVxuXG4gIHRoaXNWYXJzLmFwcCA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRBcHAoKVxuICBsb2d2KG9wdGlvbnMsIGBwbHVnaW5OYW1lIC0gJHt0aGlzVmFycy5wbHVnaW5OYW1lfWApXG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNWYXJzLmFwcCAtICR7dGhpc1ZhcnMuYXBwfWApXG5cbiAgY29uc3QgcmMgPSAoZnMuZXhpc3RzU3luYyhgLmV4dC0ke3RoaXNWYXJzLmZyYW1ld29ya31yY2ApICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCwgJ3V0Zi04JykpIHx8IHt9KVxuICB0aGlzT3B0aW9ucyA9IHsgLi4ucmVxdWlyZShgLi8ke3RoaXNWYXJzLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdE9wdGlvbnMoKSwgLi4ub3B0aW9ucywgLi4ucmMgfVxuICBsb2d2KG9wdGlvbnMsIGB0aGlzT3B0aW9ucyAtICR7SlNPTi5zdHJpbmdpZnkodGhpc09wdGlvbnMpfWApXG4gIGlmICh0aGlzT3B0aW9ucy5lbnZpcm9ubWVudCA9PSAncHJvZHVjdGlvbicpIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gdHJ1ZX1cbiAgZWxzZSBcbiAgICB7dGhpc1ZhcnMucHJvZHVjdGlvbiA9IGZhbHNlfVxuICBsb2cocmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldFZlcnNpb25zKHRoaXNWYXJzLmFwcCwgdGhpc1ZhcnMucGx1Z2luTmFtZSwgdGhpc1ZhcnMuZnJhbWV3b3JrKSlcbiAgbG9nKHRoaXNWYXJzLmFwcCArICdCdWlsZGluZyBmb3IgJyArIHRoaXNPcHRpb25zLmVudmlyb25tZW50KVxuXG4gIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgcGx1Z2luLm9wdGlvbnMgPSB0aGlzT3B0aW9uc1xuICByZXR1cm4gcGx1Z2luXG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9jb21waWxhdGlvbihjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9jb21waWxhdGlvbicpXG4gICAgdmFyIGV4dENvbXBvbmVudHMgPSBbXVxuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGxvZ3Yob3B0aW9ucyxgZXh0LWNvbXBpbGF0aW9uOiBwcm9kdWN0aW9uIGlzIGAgKyB2YXJzLnByb2R1Y3Rpb24pXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCBtb2R1bGUgPT4ge1xuICAgICAgICAgIGlmKG1vZHVsZSAmJiBtb2R1bGUucmVzb3VyY2UgJiYgbW9kdWxlLnJlc291cmNlLm1hdGNoKC9leHQtYW5ndWxhci1tb2Rlcm5cXC9mZXNtNVxcL3NlbmNoYS1leHQtYW5ndWxhci1tb2Rlcm4uanMvKSl7ICBcbiAgICAgICAgICAgIGV4dENvbXBvbmVudHMgPSByZXF1aXJlKGAuLyR7dmFycy5mcmFtZXdvcmt9VXRpbGApLmV4dHJhY3RFeHRDb21wb25lbnRzKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLm9wdGltaXplTW9kdWxlcy50YXAoYGV4dC1zdWNjZWVkLW1vZHVsZWAsIG1vZHVsZXMgPT4ge1xuICAgICAgICBtb2R1bGVzLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgICAgICAgIGlmIChleHRDb21wb25lbnRzLmxlbmd0aCAmJiBtb2R1bGUucmVzb3VyY2UgJiYgKG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuKGp8dClzeD8kLykgfHwgb3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuaHRtbCQvKSkgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvbm9kZV9tb2R1bGVzLykgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaChgL2V4dC17JG9wdGlvbnMuZnJhbWV3b3JrfS9kaXN0L2ApKSB7XG4gICAgICAgICAgICB2YXJzLmRlcHMgPSBbLi4uKHZhcnMuZGVwcyB8fCBbXSksIC4uLnJlcXVpcmUoYC4vJHt2YXJzLmZyYW1ld29ya31VdGlsYCkuZXh0cmFjdEZyb21Tb3VyY2UobW9kdWxlLCBvcHRpb25zLCBjb21waWxhdGlvbiwgZXh0Q29tcG9uZW50cyldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsYGV4dC1jb21waWxhdGlvbjogcHJvZHVjdGlvbiBpcyBgICsgIHZhcnMucHJvZHVjdGlvbilcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrICE9ICdhbmd1bGFyJykge1xuICAgICAgY29tcGlsYXRpb24uaG9va3MuaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbi50YXAoYGV4dC1odG1sLWdlbmVyYXRpb25gLChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgICAgICB2YXIgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgIGlmIChjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycpIHtcbiAgICAgICAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dFBhdGggPSBvdXRwdXRQYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICB2YXIganNQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5qcycpXG4gICAgICAgIHZhciBjc3NQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5jc3MnKVxuICAgICAgICBkYXRhLmFzc2V0cy5qcy51bnNoaWZ0KGpzUGF0aClcbiAgICAgICAgZGF0YS5hc3NldHMuY3NzLnVuc2hpZnQoY3NzUGF0aClcbiAgICAgICAgbG9nKHZhcnMuYXBwICsgYEFkZGluZyAke2pzUGF0aH0gYW5kICR7Y3NzUGF0aH0gdG8gaW5kZXguaHRtbGApXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2tpcHBlZCBIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19jb21waWxhdGlvbjogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIGVtaXQnKVxuICAgIHZhciBhcHAgPSB2YXJzLmFwcFxuICAgIHZhciBmcmFtZXdvcmsgPSB2YXJzLmZyYW1ld29ya1xuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICBjb25zdCBfYnVpbGRFeHRCdW5kbGUgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fYnVpbGRFeHRCdW5kbGVcbiAgICBsZXQgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vdXRwdXRQYXRoLHZhcnMuZXh0UGF0aClcbiAgICBpZiAoY29tcGlsZXIub3V0cHV0UGF0aCA9PT0gJy8nICYmIGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlLCBvdXRwdXRQYXRoKVxuICAgIH1cbiAgICBsb2d2KG9wdGlvbnMsJ291dHB1dFBhdGg6ICcgKyBvdXRwdXRQYXRoKVxuICAgIGxvZ3Yob3B0aW9ucywnZnJhbWV3b3JrOiAnICsgZnJhbWV3b3JrKVxuICAgIGlmIChvcHRpb25zLmVtaXQgPT0gdHJ1ZSkge1xuICAgICAgaWYgKGZyYW1ld29yayAhPSAnZXh0anMnKSB7XG4gICAgICAgIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG5cbiAgICAgIHZhciBjb21tYW5kID0gJydcbiAgICAgIGlmIChvcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICBjb21tYW5kID0gJ3dhdGNoJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbW1hbmQgPSAnYnVpbGQnXG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJzLnJlYnVpbGQgPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGFybXMgPSBbXVxuICAgICAgICBpZiAob3B0aW9ucy5wcm9maWxlID09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByb2ZpbGUgPT0gJycgfHwgb3B0aW9ucy5wcm9maWxlID09IG51bGwpIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFycy53YXRjaFN0YXJ0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYnVpbGQxJylcbiAgICAgICAgICBhd2FpdCBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2J1aWxkMicpXG4gICAgICAgICAgdmFycy53YXRjaFN0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbnN0IGpzQ2h1bmsgPSBjb21waWxhdGlvbi5hZGRDaHVuayhgZXh0LWFuZ3VsYXItanNgKVxuICAgICAgICAvL2pzQ2h1bmsuaGFzUnVudGltZSA9IGpzQ2h1bmsuaXNJbml0aWFsID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLy9qc0NodW5rLmZpbGVzLnB1c2gocGF0aC5qb2luKCdidWlsZCcsICdleHQtYW5ndWxhcicsICdleHQuanMnKSk7XG4gICAgICAgIC8vanNDaHVuay5maWxlcy5wdXNoKHBhdGguam9pbignYnVpbGQnLCAnZXh0LWFuZ3VsYXInLCAgJ2V4dC5jc3MnKSk7XG4gICAgICAgIC8vanNDaHVuay5pZCA9IC0yOyAvLyB0aGlzIGZvcmNlcyBodG1sLXdlYnBhY2stcGx1Z2luIHRvIGluY2x1ZGUgZXh0LmpzIGZpcnN0XG5cbiAgICAgICAgLy8gaWYob3B0aW9ucy5icm93c2VyID09IHRydWUgJiYgb3B0aW9ucy53YXRjaCA9PSAneWVzJykge1xuICAgICAgICAvLyAgIGlmICh2YXJzLmJyb3dzZXJDb3VudCA9PSAwICYmIGNvbXBpbGF0aW9uLmVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyBvcHRpb25zLnBvcnRcbiAgICAgICAgLy8gICAgIGxvZyhhcHAgKyBgT3BlbmluZyBicm93c2VyIGF0ICR7dXJsfWApXG4gICAgICAgIC8vICAgICB2YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAgIC8vICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgICAvLyAgICAgb3BuKHVybClcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgbG9ndihvcHRpb25zLCdicm93c2VyIE5PVCBvcGVuZWQnKVxuICAgICAgICAvLyB9XG5cblxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZyhgJHt2YXJzLmFwcH1GVU5DVElPTiBlbWl0IG5vdCBydW5gKVxuICAgICAgLy8gaWYob3B0aW9ucy5icm93c2VyID09IHRydWUpIHtcbiAgICAgIC8vICAgaWYgKHZhcnMuYnJvd3NlckNvdW50ID09IDAgJiYgb3B0aW9ucy53YXRjaCA9PSAneWVzJykge1xuICAgICAgLy8gICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgb3B0aW9ucy5wb3J0XG4gICAgICAvLyAgICAgbG9nKGFwcCArIGBPcGVuaW5nIGJyb3dzZXIgYXQgJHt1cmx9YClcbiAgICAgIC8vICAgICB2YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAvLyAgICAgY29uc3Qgb3BuID0gcmVxdWlyZSgnb3BuJylcbiAgICAgIC8vICAgICBvcG4odXJsKVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgbG9ndihvcHRpb25zLCdicm93c2VyIE5PVCBvcGVuZWQnKVxuICAgICAgLy8gfVxuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ2VtaXQ6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0LCBjb21waWxhdGlvbikge1xuICB0cnkge1xuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX3ByZXBhcmVGb3JCdWlsZCcpXG4gICAgY29uc3QgcmltcmFmID0gcmVxdWlyZSgncmltcmFmJylcbiAgICBjb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKVxuICAgIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbiAgICB2YXIgcGFja2FnZXMgPSBvcHRpb25zLnBhY2thZ2VzXG4gICAgdmFyIHRvb2xraXQgPSBvcHRpb25zLnRvb2xraXRcbiAgICB2YXIgdGhlbWUgPSBvcHRpb25zLnRoZW1lXG5cbiAgICB0aGVtZSA9IHRoZW1lIHx8ICh0b29sa2l0ID09PSAnY2xhc3NpYycgPyAndGhlbWUtdHJpdG9uJyA6ICd0aGVtZS1tYXRlcmlhbCcpXG4gICAgbG9ndihvcHRpb25zLCdmaXJzdFRpbWU6ICcgKyB2YXJzLmZpcnN0VGltZSlcbiAgICBpZiAodmFycy5maXJzdFRpbWUpIHtcbiAgICAgIHJpbXJhZi5zeW5jKG91dHB1dClcbiAgICAgIG1rZGlycC5zeW5jKG91dHB1dClcbiAgICAgIGNvbnN0IGJ1aWxkWE1MID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5idWlsZFhNTFxuICAgICAgY29uc3QgY3JlYXRlQXBwSnNvbiA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlQXBwSnNvblxuICAgICAgY29uc3QgY3JlYXRlV29ya3NwYWNlSnNvbiA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlV29ya3NwYWNlSnNvblxuICAgICAgY29uc3QgY3JlYXRlSlNET01FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuY3JlYXRlSlNET01FbnZpcm9ubWVudFxuXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdidWlsZC54bWwnKSwgYnVpbGRYTUwodmFycy5wcm9kdWN0aW9uLCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdhcHAuanNvbicpLCBjcmVhdGVBcHBKc29uKHRoZW1lLCBwYWNrYWdlcywgdG9vbGtpdCwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnanNkb20tZW52aXJvbm1lbnQuanMnKSwgY3JlYXRlSlNET01FbnZpcm9ubWVudChvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICd3b3Jrc3BhY2UuanNvbicpLCBjcmVhdGVXb3Jrc3BhY2VKc29uKG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcblxuICAgICAgaWYgKHZhcnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvcGFja2FnZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtYW5ndWxhci9vdmVycmlkZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtYW5ndWxhci8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0KVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ3JlYWN0JykgIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9wYWNrYWdlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L292ZXJyaWRlcy8nKVxuICAgICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2RvIHdlIGV2ZXIgaGl0IHRoZXNlP1xuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3Jlc291cmNlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21SZXNvdXJjZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Jlc291cmNlcy8nKVxuICAgICAgICB2YXIgdG9SZXNvdXJjZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAnLi4vcmVzb3VyY2VzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21SZXNvdXJjZXMsIHRvUmVzb3VyY2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJ3Jlc291cmNlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncGFja2FnZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGFja2FnZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3BhY2thZ2VzLycpXG4gICAgICAgIHZhciB0b1BhY2thZ2VzID0gcGF0aC5qb2luKG91dHB1dCwgJ3BhY2thZ2VzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYWNrYWdlcywgdG9QYWNrYWdlcylcbiAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYWNrYWdlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdvdmVycmlkZXMvJylcbiAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdvdmVycmlkZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cblxuXG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmICghdmFycy5kZXBzLmluY2x1ZGVzKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKSlcbiAgICAgICAgdmFycy5kZXBzLnB1c2goJ0V4dC5yZXF1aXJlKFwiRXh0LmxheW91dC4qXCIpO1xcbicpXG4gICAgICBqcyA9IHZhcnMuZGVwcy5qb2luKCc7XFxuJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAganMgPSAnRXh0LnJlcXVpcmUoXCJFeHQuKlwiKSdcbiAgICB9XG4gICAgaWYgKHZhcnMubWFuaWZlc3QgPT09IG51bGwgfHwganMgIT09IHZhcnMubWFuaWZlc3QpIHtcbiAgICAgIHZhcnMubWFuaWZlc3QgPSBqc1xuICAgICAgY29uc3QgbWFuaWZlc3QgPSBwYXRoLmpvaW4ob3V0cHV0LCAnbWFuaWZlc3QuanMnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhtYW5pZmVzdCwganMsICd1dGY4JylcbiAgICAgIHZhcnMucmVidWlsZCA9IHRydWVcbiAgICAgIHZhciBidW5kbGVEaXIgPSBvdXRwdXQucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJylcbiAgICAgIGlmIChidW5kbGVEaXIudHJpbSgpID09ICcnKSB7YnVuZGxlRGlyID0gJy4vJ31cbiAgICAgIGxvZyhhcHAgKyAnQnVpbGRpbmcgRXh0IGJ1bmRsZSBhdDogJyArIGJ1bmRsZURpcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXJzLnJlYnVpbGQgPSBmYWxzZVxuICAgICAgbG9nKGFwcCArICdFeHQgcmVidWlsZCBOT1QgbmVlZGVkJylcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfcHJlcGFyZUZvckJ1aWxkOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2J1aWxkRXh0QnVuZGxlJylcblxuICAgIGxldCBzZW5jaGE7IHRyeSB7IHNlbmNoYSA9IHJlcXVpcmUoJ0BzZW5jaGEvY21kJykgfSBjYXRjaCAoZSkgeyBzZW5jaGEgPSAnc2VuY2hhJyB9XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoc2VuY2hhKSkge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIGV4aXN0cycpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIERPRVMgTk9UIGV4aXN0JylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb25CdWlsZERvbmUgPSAoKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnb25CdWlsZERvbmUnKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdHMgPSB7IGN3ZDogb3V0cHV0UGF0aCwgc2lsZW50OiB0cnVlLCBzdGRpbzogJ3BpcGUnLCBlbmNvZGluZzogJ3V0Zi04J31cbiAgICAgIGV4ZWN1dGVBc3luYyhhcHAsIHNlbmNoYSwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24oKSB7IG9uQnVpbGREb25lKCkgfSwgXG4gICAgICAgIGZ1bmN0aW9uKHJlYXNvbikgeyByZWplY3QocmVhc29uKSB9XG4gICAgICApXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coJ2UnKVxuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfYnVpbGRFeHRCdW5kbGU6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlQXN5bmMgKGFwcCwgY29tbWFuZCwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgLy9jb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBTZXJ2ZXJcIiwgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgY29uc3QgREVGQVVMVF9TVUJTVFJTID0gW1wiW0lORl0geFNlcnZlclwiLCAnW0lORl0gTG9hZGluZycsICdbSU5GXSBBcHBlbmQnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbSU5GXSBQcm9jZXNzaW5nIEJ1aWxkJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICB2YXIgc3Vic3RyaW5ncyA9IERFRkFVTFRfU1VCU1RSUyBcbiAgICB2YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG4gICAgY29uc3QgY3Jvc3NTcGF3biA9IHJlcXVpcmUoJ2Nyb3NzLXNwYXduJylcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBsb2d2KG9wdGlvbnMsICdGVU5DVElPTiBleGVjdXRlQXN5bmMnKVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxvZ3Yob3B0aW9ucyxgY29tbWFuZCAtICR7Y29tbWFuZH1gKVxuICAgICAgbG9ndihvcHRpb25zLCBgcGFybXMgLSAke3Bhcm1zfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBvcHRzIC0gJHtKU09OLnN0cmluZ2lmeShvcHRzKX1gKVxuICAgICAgbGV0IGNoaWxkID0gY3Jvc3NTcGF3bihjb21tYW5kLCBwYXJtcywgb3B0cylcbiAgICAgIGNoaWxkLm9uKCdjbG9zZScsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gY2xvc2U6IGAgKyBjb2RlKSBcbiAgICAgICAgaWYoY29kZSA9PT0gMCkgeyByZXNvbHZlKDApIH1cbiAgICAgICAgZWxzZSB7IGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCBuZXcgRXJyb3IoY29kZSkgKTsgcmVzb2x2ZSgwKSB9XG4gICAgICB9KVxuICAgICAgY2hpbGQub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7IFxuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBlcnJvcmApIFxuICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChlcnJvcilcbiAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICBsb2d2KG9wdGlvbnMsIGAke3N0cn1gKVxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKCkubWF0Y2goL3dhaXRpbmcgZm9yIGNoYW5nZXNcXC5cXC5cXC4vKSkge1xuICAgICAgICAgIHJlc29sdmUoMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc3Vic3RyaW5ncy5zb21lKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIGRhdGEuaW5kZXhPZih2KSA+PSAwOyB9KSkgeyBcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0lORl1cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0xPR11cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoXCJbRVJSXVwiKSkge1xuICAgICAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChhcHAgKyBzdHIucmVwbGFjZSgvXlxcW0VSUlxcXSAvZ2ksICcnKSk7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0VSUl1cIiwgYCR7Y2hhbGsucmVkKFwiW0VSUl1cIil9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZyhgJHthcHB9JHtzdHJ9YCkgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY2hpbGQuc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgZXJyb3Igb24gY2xvc2U6IGAgKyBkYXRhKSBcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIHZhciBzdHJKYXZhT3B0cyA9IFwiUGlja2VkIHVwIF9KQVZBX09QVElPTlNcIjtcbiAgICAgICAgdmFyIGluY2x1ZGVzID0gc3RyLmluY2x1ZGVzKHN0ckphdmFPcHRzKVxuICAgICAgICBpZiAoIWluY2x1ZGVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7YXBwfSAke2NoYWxrLnJlZChcIltFUlJdXCIpfSAke3N0cn1gKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdleGVjdXRlQXN5bmM6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfSBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbG9nKHMpIHtcbiAgcmVxdWlyZSgncmVhZGxpbmUnKS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMClcbiAgdHJ5IHtcbiAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICB9XG4gIGNhdGNoKGUpIHt9XG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHMpXG4gIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9ndihvcHRpb25zLCBzKSB7XG4gIGlmIChvcHRpb25zLnZlcmJvc2UgPT0gJ3llcycpIHtcbiAgICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICAgIHRyeSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKVxuICAgIH1cbiAgICBjYXRjaChlKSB7fVxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGAtdmVyYm9zZTogJHtzfWApXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRBcHAoKSB7XG4gIHZhciBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcbiAgdmFyIHByZWZpeCA9IGBgXG4gIGNvbnN0IHBsYXRmb3JtID0gcmVxdWlyZSgnb3MnKS5wbGF0Zm9ybSgpXG4gIGlmIChwbGF0Zm9ybSA9PSAnZGFyd2luJykgeyBwcmVmaXggPSBg4oS5IO+9omV4dO+9ozpgIH1cbiAgZWxzZSB7IHByZWZpeCA9IGBpIFtleHRdOmAgfVxuICByZXR1cm4gYCR7Y2hhbGsuZ3JlZW4ocHJlZml4KX0gYFxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldFZlcnNpb25zKGFwcCwgcGx1Z2luTmFtZSwgZnJhbWV3b3JrTmFtZSkge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB2ID0ge31cbiAgdmFyIHBsdWdpblBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEnLCBwbHVnaW5OYW1lKVxuICB2YXIgcGx1Z2luUGtnID0gKGZzLmV4aXN0c1N5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBsdWdpblBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LnBsdWdpblZlcnNpb24gPSBwbHVnaW5Qa2cudmVyc2lvblxuICB2Ll9yZXNvbHZlZCA9IHBsdWdpblBrZy5fcmVzb2x2ZWRcbiAgaWYgKHYuX3Jlc29sdmVkID09IHVuZGVmaW5lZCkge1xuICAgIHYuZWRpdGlvbiA9IGBDb21tZXJjaWFsYFxuICB9XG4gIGVsc2Uge1xuICAgIGlmICgtMSA9PSB2Ll9yZXNvbHZlZC5pbmRleE9mKCdjb21tdW5pdHknKSkge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdi5lZGl0aW9uID0gYENvbW11bml0eWBcbiAgICB9XG4gIH1cblxuICB2YXIgd2VicGFja1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3dlYnBhY2snKVxuICB2YXIgd2VicGFja1BrZyA9IChmcy5leGlzdHNTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LndlYnBhY2tWZXJzaW9uID0gd2VicGFja1BrZy52ZXJzaW9uXG5cbiAgdmFyIGV4dFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0BzZW5jaGEvZXh0JylcbiAgdmFyIGV4dFBrZyA9IChmcy5leGlzdHNTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5leHRWZXJzaW9uID0gZXh0UGtnLnNlbmNoYS52ZXJzaW9uXG5cbiAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuXG4gIGlmICh2LmNtZFZlcnNpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGNtZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvJHtwbHVnaW5OYW1lfS9ub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICAgIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5jbWRWZXJzaW9uID0gY21kUGtnLnZlcnNpb25fZnVsbFxuICB9XG5cbiAgdmFyIGZyYW1ld29ya0luZm8gPSAnJ1xuICAgaWYgKGZyYW1ld29ya05hbWUgIT0gdW5kZWZpbmVkICYmIGZyYW1ld29ya05hbWUgIT0gJ2V4dGpzJykge1xuICAgIHZhciBmcmFtZXdvcmtQYXRoID0gJydcbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAncmVhY3QnKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9yZWFjdCcpXG4gICAgfVxuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdhbmd1bGFyJykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZScpXG4gICAgfVxuICAgIHZhciBmcmFtZXdvcmtQa2cgPSAoZnMuZXhpc3RzU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gICAgdi5mcmFtZXdvcmtWZXJzaW9uID0gZnJhbWV3b3JrUGtnLnZlcnNpb25cbiAgICBmcmFtZXdvcmtJbmZvID0gJywgJyArIGZyYW1ld29ya05hbWUgKyAnIHYnICsgdi5mcmFtZXdvcmtWZXJzaW9uXG4gIH1cbiAgcmV0dXJuIGFwcCArICdleHQtd2VicGFjay1wbHVnaW4gdicgKyB2LnBsdWdpblZlcnNpb24gKyAnLCBFeHQgSlMgdicgKyB2LmV4dFZlcnNpb24gKyAnICcgKyB2LmVkaXRpb24gKyAnIEVkaXRpb24sIFNlbmNoYSBDbWQgdicgKyB2LmNtZFZlcnNpb24gKyAnLCB3ZWJwYWNrIHYnICsgdi53ZWJwYWNrVmVyc2lvbiArIGZyYW1ld29ya0luZm9cbiB9Il19