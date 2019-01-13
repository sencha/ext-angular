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

            const t = require('./artifacts').extAngularModernModule('', '', '');

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
          const writeToPath = path.resolve(process.cwd(), `src/app/${extAngulaFolder}`); //const extAngularModuleBaseFile = path.resolve(process.cwd(), `${writeToPath}/base.ts`)

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
            var t = require('./artifacts').extAngularModernModule(moduleVars.imports, moduleVars.exports, moduleVars.declarations);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJta2RpcnAiLCJleHRDb21wb25lbnRzIiwidXNlZEV4dENvbXBvbmVudHMiLCJleHRBbmd1bGFGb2xkZXIiLCJleHRBbmd1bGFyTW9kdWxlIiwiZXh0QW5ndWxhclBhY2thZ2UiLCJwYWNrYWdlUGF0aCIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJmb3JFYWNoIiwiZmlsZU5hbWUiLCJzdWJzdHIiLCJlbmQiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwicmV3cml0ZSIsImFwcE1vZHVsZVBhdGgiLCJqcyIsInRvU3RyaW5nIiwiaSIsImxhc3RJbmRleE9mIiwicGF0aFRvRXh0QW5ndWxhck1vZGVybiIsInN5bmMiLCJ0IiwiZXh0QW5ndWxhck1vZGVybk1vZHVsZSIsIndyaXRlRmlsZVN5bmMiLCJqIiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJob29rcyIsInN1Y2NlZWRNb2R1bGUiLCJ0YXAiLCJtb2R1bGUiLCJsZW5ndGgiLCJyZXNvdXJjZSIsIm1hdGNoIiwiZGVwcyIsImV4dHJhY3RGcm9tU291cmNlIiwiZmluaXNoTW9kdWxlcyIsIm1vZHVsZXMiLCJzdHJpbmciLCJjb2RlIiwiaW5kZXgiLCJTZXQiLCJyZWFkRnJvbSIsIndyaXRlVG9QYXRoIiwiYmFzZUNvbnRlbnQiLCJ3cml0ZVRvUGF0aFdyaXR0ZW4iLCJtb2R1bGVWYXJzIiwiaW1wb3J0cyIsImV4cG9ydHMiLCJkZWNsYXJhdGlvbnMiLCJ4dHlwZSIsImNhcGNsYXNzbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsInNsaWNlIiwiY2xhc3NGaWxlIiwiY29udGVudHMiLCJodG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uIiwiZGF0YSIsIm91dHB1dFBhdGgiLCJkZXZTZXJ2ZXIiLCJjb250ZW50QmFzZSIsInRyaW0iLCJqc1BhdGgiLCJleHRQYXRoIiwiY3NzUGF0aCIsImFzc2V0cyIsInVuc2hpZnQiLCJjc3MiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsIndhdGNoU3RhcnRlZCIsIm91dHB1dCIsInJpbXJhZiIsInBhY2thZ2VzIiwidG9vbGtpdCIsInRoZW1lIiwiZmlyc3RUaW1lIiwiYnVpbGRYTUwiLCJjcmVhdGVBcHBKc29uIiwiY3JlYXRlV29ya3NwYWNlSnNvbiIsImNyZWF0ZUpTRE9NRW52aXJvbm1lbnQiLCJmcm9tUGF0aCIsInRvUGF0aCIsImZyb21SZXNvdXJjZXMiLCJ0b1Jlc291cmNlcyIsImZyb21QYWNrYWdlcyIsInRvUGFja2FnZXMiLCJpbmNsdWRlcyIsIm1hbmlmZXN0IiwiYnVuZGxlRGlyIiwic2VuY2hhIiwiUHJvbWlzZSIsInJlamVjdCIsIm9uQnVpbGREb25lIiwib3B0cyIsInNpbGVudCIsInN0ZGlvIiwiZW5jb2RpbmciLCJleGVjdXRlQXN5bmMiLCJ0aGVuIiwicmVhc29uIiwiREVGQVVMVF9TVUJTVFJTIiwic3Vic3RyaW5ncyIsImNoYWxrIiwiY3Jvc3NTcGF3biIsImNoaWxkIiwib24iLCJzaWduYWwiLCJFcnJvciIsImVycm9yIiwic3Rkb3V0Iiwic3RyIiwic29tZSIsInYiLCJyZWQiLCJzdGRlcnIiLCJzdHJKYXZhT3B0cyIsInMiLCJjdXJzb3JUbyIsImNsZWFyTGluZSIsIndyaXRlIiwidmVyYm9zZSIsInByZWZpeCIsInBsYXRmb3JtIiwiZ3JlZW4iLCJmcmFtZXdvcmtOYW1lIiwicGx1Z2luUGF0aCIsInBsdWdpblBrZyIsInBsdWdpblZlcnNpb24iLCJ2ZXJzaW9uIiwiX3Jlc29sdmVkIiwiZWRpdGlvbiIsIndlYnBhY2tQYXRoIiwid2VicGFja1BrZyIsIndlYnBhY2tWZXJzaW9uIiwiZXh0UGtnIiwiZXh0VmVyc2lvbiIsImNtZFBhdGgiLCJjbWRQa2ciLCJjbWRWZXJzaW9uIiwidmVyc2lvbl9mdWxsIiwiZnJhbWV3b3JrSW5mbyIsImZyYW1ld29ya1BhdGgiLCJmcmFtZXdvcmtQa2ciLCJmcmFtZXdvcmtWZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQ3BDLFFBQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsUUFBTUMsRUFBRSxHQUFHRCxPQUFPLENBQUMsSUFBRCxDQUFsQjs7QUFFQSxNQUFJRSxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUVBLE1BQUlOLE9BQU8sQ0FBQ08sU0FBUixJQUFxQkMsU0FBekIsRUFBb0M7QUFDbENKLElBQUFBLFFBQVEsQ0FBQ0ssWUFBVCxHQUF3QixFQUF4QjtBQUNBTCxJQUFBQSxRQUFRLENBQUNLLFlB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QUFJLENBQUNpQixPQUFMLENBQWFDLE9BQU8sQ0FBQ0MsR0FBUixFQUFiLEVBQTJCLDRCQUEzQixDQUFoQjtBQUNEOztBQUNELFFBQUlnTCxZQUFZLEdBQUlqTSxFQUFFLENBQUNtQixVQUFILENBQWM2SyxhQUFhLEdBQUMsZUFBNUIsS0FBZ0R0SyxJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLEVBQUUsQ0FBQzRCLFlBQUgsQ0FBZ0JvSyxhQUFhLEdBQUMsZUFBOUIsRUFBK0MsT0FBL0MsQ0FBWCxDQUFoRCxJQUF1SCxFQUEzSTtBQUNBN0IsSUFBQUEsQ0FBQyxDQUFDK0IsZ0JBQUYsR0FBcUJELFlBQVksQ0FBQ2QsT0FBbEM7QUFDQVksSUFBQUEsYUFBYSxHQUFHLE9BQU9oQixhQUFQLEdBQXVCLElBQXZCLEdBQThCWixDQUFDLENBQUMrQixnQkFBaEQ7QUFDRDs7QUFDRCxTQUFPM0ssR0FBRyxHQUFHLHNCQUFOLEdBQStCNEksQ0FBQyxDQUFDZSxhQUFqQyxHQUFpRCxZQUFqRCxHQUFnRWYsQ0FBQyxDQUFDdUIsVUFBbEUsR0FBK0UsR0FBL0UsR0FBcUZ2QixDQUFDLENBQUNrQixPQUF2RixHQUFpRyx3QkFBakcsR0FBNEhsQixDQUFDLENBQUMwQixVQUE5SCxHQUEySSxhQUEzSSxHQUEySjFCLENBQUMsQ0FBQ3FCLGNBQTdKLEdBQThLTyxhQUFyTDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuICB2YXIgdGhpc1ZhcnMgPSB7fVxuICB2YXIgdGhpc09wdGlvbnMgPSB7fVxuICB2YXIgcGx1Z2luID0ge31cblxuICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1ZhcnMucGx1Z2luRXJyb3JzID0gW11cbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMucHVzaCgnd2VicGFjayBjb25maWc6IGZyYW1ld29yayBwYXJhbWV0ZXIgb24gZXh0LXdlYnBhY2stcGx1Z2luIGlzIG5vdCBkZWZpbmVkIC0gdmFsdWVzOiByZWFjdCwgYW5ndWxhciwgZXh0anMnKVxuICAgIHBsdWdpbi52YXJzID0gdGhpc1ZhcnNcbiAgICByZXR1cm4gcGx1Z2luXG4gIH1cblxuICBjb25zdCB2YWxpZGF0ZU9wdGlvbnMgPSByZXF1aXJlKCdzY2hlbWEtdXRpbHMnKVxuICB2YWxpZGF0ZU9wdGlvbnMocmVxdWlyZShgLi8ke29wdGlvbnMuZnJhbWV3b3JrfVV0aWxgKS5nZXRWYWxpZGF0ZU9wdGlvbnMoKSwgb3B0aW9ucywgJycpXG5cbiAgdGhpc1ZhcnMgPSByZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldERlZmF1bHRWYXJzKClcbiAgdGhpc1ZhcnMuZnJhbWV3b3JrID0gb3B0aW9ucy5mcmFtZXdvcmtcbiAgc3dpdGNoKHRoaXNWYXJzLmZyYW1ld29yaykge1xuICAgIGNhc2UgJ2V4dGpzJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LXdlYnBhY2stcGx1Z2luJ1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVhY3QnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtcmVhY3Qtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbmd1bGFyJzpcbiAgICAgIHRoaXNWYXJzLnBsdWdpbk5hbWUgPSAnZXh0LWFuZ3VsYXItd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gIH1cblxuICAvL2ZpeCBmYXNoaW9uIGRpc3QgcHJvYmxlbVxuICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gIHZhciB0b0Zhc2hpb25EaXN0ID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZC9kaXN0L2pzL25vZGVfbW9kdWxlcy9mYXNoaW9uL2Rpc3RgKVxuICBsb2d2KG9wdGlvbnMsIGB0b0Zhc2hpb25EaXN0ICR7dG9GYXNoaW9uRGlzdH1gKVxuICBpZiAoIWZzLmV4aXN0c1N5bmModG9GYXNoaW9uRGlzdCkpIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBjb3B5YClcbiAgICB2YXIgZnJvbUZhc2hpb25EaXN0ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvQHNlbmNoYS8nICsgdGhpc1ZhcnMucGx1Z2luTmFtZSArICcvZmFzaGlvbi9kaXN0LycpXG4gICAgZnN4LmNvcHlTeW5jKGZyb21GYXNoaW9uRGlzdCwgdG9GYXNoaW9uRGlzdClcbiAgfVxuICBlbHNlIHtcbiAgICBsb2d2KG9wdGlvbnMsIGBubyBjb3B5IG9mIGZhc2hpb25gKVxuICB9XG5cbiAgdGhpc1ZhcnMuYXBwID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2dldEFwcCgpXG4gIGxvZ3Yob3B0aW9ucywgYHBsdWdpbk5hbWUgLSAke3RoaXNWYXJzLnBsdWdpbk5hbWV9YClcbiAgbG9ndihvcHRpb25zLCBgdGhpc1ZhcnMuYXBwIC0gJHt0aGlzVmFycy5hcHB9YClcblxuICBjb25zdCByYyA9IChmcy5leGlzdHNTeW5jKGAuZXh0LSR7dGhpc1ZhcnMuZnJhbWV3b3JrfXJjYCkgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgLCAndXRmLTgnKSkgfHwge30pXG4gIHRoaXNPcHRpb25zID0geyAuLi5yZXF1aXJlKGAuLyR7dGhpc1ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5nZXREZWZhdWx0T3B0aW9ucygpLCAuLi5vcHRpb25zLCAuLi5yYyB9XG4gIGxvZ3Yob3B0aW9ucywgYHRoaXNPcHRpb25zIC0gJHtKU09OLnN0cmluZ2lmeSh0aGlzT3B0aW9ucyl9YClcbiAgaWYgKHRoaXNPcHRpb25zLmVudmlyb25tZW50ID09ICdwcm9kdWN0aW9uJykgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSB0cnVlfVxuICBlbHNlIFxuICAgIHt0aGlzVmFycy5wcm9kdWN0aW9uID0gZmFsc2V9XG4gIGxvZyhyZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fZ2V0VmVyc2lvbnModGhpc1ZhcnMuYXBwLCB0aGlzVmFycy5wbHVnaW5OYW1lLCB0aGlzVmFycy5mcmFtZXdvcmspKVxuICBsb2codGhpc1ZhcnMuYXBwICsgJ0J1aWxkaW5nIGZvciAnICsgdGhpc09wdGlvbnMuZW52aXJvbm1lbnQpXG5cbiAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICBwbHVnaW4ub3B0aW9ucyA9IHRoaXNPcHRpb25zXG4gIHJldHVybiBwbHVnaW5cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucykge1xuICB0cnkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucywgJ0ZVTkNUSU9OIF9jb21waWxhdGlvbicpXG5cbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBsb2d2KG9wdGlvbnMsIGBleHQtY29tcGlsYXRpb246IHByb2R1Y3Rpb24gaXMgYCArIHZhcnMucHJvZHVjdGlvbilcblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuICAgICAgICB2YXIgZXh0Q29tcG9uZW50cyA9IFtdXG4gICAgICAgIHZhciB1c2VkRXh0Q29tcG9uZW50cyA9IFtdXG4gICAgICAgIGNvbnN0IGV4dEFuZ3VsYUZvbGRlciA9ICdleHQtYW5ndWxhci1tb2Rlcm4tcHJvZCdcbiAgICAgICAgY29uc3QgZXh0QW5ndWxhck1vZHVsZSA9ICdleHQtYW5ndWxhci1tb2Rlcm4ubW9kdWxlJ1xuICAgICAgICBjb25zdCBleHRBbmd1bGFyUGFja2FnZSA9ICdAc2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybidcbiAgICAgICAgY29uc3QgcGFja2FnZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy8nICsgZXh0QW5ndWxhclBhY2thZ2UpXG4gICAgICAgIHZhciBmaWxlcyA9IGZzeC5yZWFkZGlyU3luYyhgJHtwYWNrYWdlUGF0aH0vbGliYClcbiAgICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgICBpZiAoZmlsZU5hbWUgJiYgZmlsZU5hbWUuc3Vic3RyKDAsIDQpID09ICdleHQtJykge1xuICAgICAgICAgICAgdmFyIGVuZCA9IGZpbGVOYW1lLnN1YnN0cig0KS5pbmRleE9mKCcuY29tcG9uZW50JylcbiAgICAgICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgICAgICBleHRDb21wb25lbnRzLnB1c2goZmlsZU5hbWUuc3Vic3RyaW5nKDQsIGVuZCArIDQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciByZXdyaXRlID0gZmFsc2VcbiAgICAgICAgICBjb25zdCBhcHBNb2R1bGVQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXBwL2FwcC5tb2R1bGUudHMnKVxuICAgICAgICAgIHZhciBqcyA9IGZzeC5yZWFkRmlsZVN5bmMoYXBwTW9kdWxlUGF0aCkudG9TdHJpbmcoKVxuICAgICAgICAgIHZhciBpID0ganMuaW5kZXhPZihleHRBbmd1bGFyUGFja2FnZSlcbiAgICAgICAgICBpID0ganMuc3Vic3RyaW5nKDAsIGkpLmxhc3RJbmRleE9mKCdpbXBvcnQnKVxuXG4gICAgICAgICAgaWYgKGpzLnN1YnN0cihpIC0gMywgMykgIT09ICcvLyAnKSB7XG4gICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBpKSArICdcXG4gLy8gJyArIGpzLnN1YnN0cmluZyhpKVxuICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYXRoVG9FeHRBbmd1bGFyTW9kZXJuID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGBzcmMvYXBwLyR7ZXh0QW5ndWxhRm9sZGVyfWApXG4gICAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm4pKSB7XG4gICAgICAgICAgICBta2RpcnAuc3luYyhwYXRoVG9FeHRBbmd1bGFyTW9kZXJuKVxuICAgICAgICAgICAgY29uc3QgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZGVybk1vZHVsZSgnJywgJycsICcnKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoXG4gICAgICAgICAgICAgIGAke3BhdGhUb0V4dEFuZ3VsYXJNb2Rlcm59LyR7ZXh0QW5ndWxhck1vZHVsZX0udHNgLCB0LCAndXRmLTgnLCAoKSA9PiB7cmV0dXJufVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGogPSBqcy5pbmRleE9mKGAuLyR7ZXh0QW5ndWxhRm9sZGVyfS8ke2V4dEFuZ3VsYXJNb2R1bGV9YClcbiAgICAgICAgICBpZiAoaiA8IDApIHtcbiAgICAgICAgICAgIGpzID0ganMuc3Vic3RyaW5nKDAsIGkpICsgYGltcG9ydCB7ZXh0QW5ndWxhck1vZHVsZX0gZnJvbSAnLi8ke2V4dEFuZ3VsYUZvbGRlcn0vJHtleHRBbmd1bGFyTW9kdWxlfSdcXG5gICsganMuc3Vic3RyKGkpXG4gICAgICAgICAgICByZXdyaXRlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChqcy5zdWJzdHIoaiAtIDQzLCAzKSA9PSAnLy8gJykge1xuICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaiAtIDQzKSArICdcXG4nICtqcy5zdWJzdHJpbmcoaiAtIDQwKVxuICAgICAgICAgICAgcmV3cml0ZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJld3JpdGUpXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhhcHBNb2R1bGVQYXRoLCBqcywgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnYnVpbGRNb2R1bGUgaG9vayBpbiBfY29tcGlsYXRpb246ICcgKyBlKVxuICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLnN1Y2NlZWRNb2R1bGUudGFwKGBleHQtc3VjY2VlZC1tb2R1bGVgLCBtb2R1bGUgPT4ge1xuICAgICAgICBpZiAoZXh0Q29tcG9uZW50cy5sZW5ndGggJiYgbW9kdWxlLnJlc291cmNlICYmIChtb2R1bGUucmVzb3VyY2UubWF0Y2goL1xcLihqfHQpc3g/JC8pIHx8XG4gICAgICAgIG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJyAmJiBtb2R1bGUucmVzb3VyY2UubWF0Y2goL1xcLmh0bWwkLykpICYmXG4gICAgICAgICFtb2R1bGUucmVzb3VyY2UubWF0Y2goL25vZGVfbW9kdWxlcy8pICYmICFtb2R1bGUucmVzb3VyY2UubWF0Y2goYC9leHQteyRvcHRpb25zLmZyYW1ld29ya30vZGlzdC9gKSkge1xuICAgICAgICAgIHZhcnMuZGVwcyA9IFsuLi4odmFycy5kZXBzIHx8IFtdKSwgLi4ucmVxdWlyZShgLi8ke3ZhcnMuZnJhbWV3b3JrfVV0aWxgKS5leHRyYWN0RnJvbVNvdXJjZShtb2R1bGUsIG9wdGlvbnMsIGNvbXBpbGF0aW9uLCBleHRDb21wb25lbnRzKV1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrID09ICdhbmd1bGFyJykge1xuICAgICAgICBjb21waWxhdGlvbi5ob29rcy5maW5pc2hNb2R1bGVzLnRhcChgZXh0LWZpbmlzaC1tb2R1bGVzYCwgbW9kdWxlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gJ0V4dC5jcmVhdGUoe1xcXCJ4dHlwZVxcXCI6XFxcIidcbiAgICAgICAgICB2YXJzLmRlcHMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNvZGUuaW5kZXhPZihzdHJpbmcpXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICBjb2RlID0gY29kZS5zdWJzdHJpbmcoaW5kZXggKyBzdHJpbmcubGVuZ3RoKVxuICAgICAgICAgICAgICB2YXIgZW5kID0gY29kZS5pbmRleE9mKCdcXFwiJylcbiAgICAgICAgICAgICAgdXNlZEV4dENvbXBvbmVudHMucHVzaChjb2RlLnN1YnN0cigwLCBlbmQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdXNlZEV4dENvbXBvbmVudHMgPSBbLi4ubmV3IFNldCh1c2VkRXh0Q29tcG9uZW50cyldXG4gICAgICAgICAgY29uc3QgcmVhZEZyb20gPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy8nICsgZXh0QW5ndWxhclBhY2thZ2UgKyAnL3NyYy9saWInKVxuICAgICAgICAgIGNvbnN0IHdyaXRlVG9QYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIGBzcmMvYXBwLyR7ZXh0QW5ndWxhRm9sZGVyfWApXG4gICAgICAgICAgLy9jb25zdCBleHRBbmd1bGFyTW9kdWxlQmFzZUZpbGUgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYCR7d3JpdGVUb1BhdGh9L2Jhc2UudHNgKVxuXG4gICAgICAgICAgY29uc3QgYmFzZUNvbnRlbnQgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfS9iYXNlLnRzYCkudG9TdHJpbmcoKVxuICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofS9iYXNlLnRzYCwgYmFzZUNvbnRlbnQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICBcbiAgICAgICAgICB2YXIgd3JpdGVUb1BhdGhXcml0dGVuID0gZmFsc2VcbiAgICAgICAgICB2YXIgbW9kdWxlVmFycyA9IHtcbiAgICAgICAgICAgIGltcG9ydHM6ICcnLFxuICAgICAgICAgICAgZXhwb3J0czogJycsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHVzZWRFeHRDb21wb25lbnRzLmZvckVhY2goeHR5cGUgPT4ge1xuICAgICAgICAgICAgdmFyIGNhcGNsYXNzbmFtZSA9IHh0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgeHR5cGUucmVwbGFjZSgvLS9nLCBcIl9cIikuc2xpY2UoMSlcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuaW1wb3J0cyA9IG1vZHVsZVZhcnMuaW1wb3J0cyArIGBpbXBvcnQgeyBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQgfSBmcm9tICcuL2V4dC0ke3h0eXBlfS5jb21wb25lbnQnO1xcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZXhwb3J0cyA9IG1vZHVsZVZhcnMuZXhwb3J0cyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zID0gbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgKyBgICAgIEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCxcXG5gXG4gICAgICAgICAgICB2YXIgY2xhc3NGaWxlID0gYC9leHQtJHt4dHlwZX0uY29tcG9uZW50LnRzYFxuICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSBmc3gucmVhZEZpbGVTeW5jKGAke3JlYWRGcm9tfSR7Y2xhc3NGaWxlfWApLnRvU3RyaW5nKClcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofSR7Y2xhc3NGaWxlfWAsIGNvbnRlbnRzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgICAgICB3cml0ZVRvUGF0aFdyaXR0ZW4gPSB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAod3JpdGVUb1BhdGhXcml0dGVuKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuZXh0QW5ndWxhck1vZGVybk1vZHVsZShcbiAgICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzLCBtb2R1bGVWYXJzLmV4cG9ydHMsIG1vZHVsZVZhcnMuZGVjbGFyYXRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhgJHt3cml0ZVRvUGF0aH0vJHtleHRBbmd1bGFyTW9kdWxlfS50c2AsIHQsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmh0bWxXZWJwYWNrUGx1Z2luQmVmb3JlSHRtbEdlbmVyYXRpb24udGFwKGBleHQtaHRtbC1nZW5lcmF0aW9uYCwoZGF0YSkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ0hPT0sgZXh0LWh0bWwtZ2VuZXJhdGlvbicpXG4gICAgICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICAgICAgdmFyIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICBpZiAoY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIpIHtcbiAgICAgICAgICBpZiAoY29tcGlsZXIub3V0cHV0UGF0aCA9PT0gJy8nKSB7XG4gICAgICAgICAgICBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlLCBvdXRwdXRQYXRoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgb3V0cHV0UGF0aCA9ICdidWlsZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBvdXRwdXRQYXRoID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb3V0cHV0UGF0aCA9ICdidWlsZCdcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXRQYXRoID0gb3V0cHV0UGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgdmFyIGpzUGF0aCA9IHBhdGguam9pbihvdXRwdXRQYXRoLCB2YXJzLmV4dFBhdGgsICdleHQuanMnKVxuICAgICAgICB2YXIgY3NzUGF0aCA9IHBhdGguam9pbihvdXRwdXRQYXRoLCB2YXJzLmV4dFBhdGgsICdleHQuY3NzJylcbiAgICAgICAgZGF0YS5hc3NldHMuanMudW5zaGlmdChqc1BhdGgpXG4gICAgICAgIGRhdGEuYXNzZXRzLmNzcy51bnNoaWZ0KGNzc1BhdGgpXG4gICAgICAgIGxvZyh2YXJzLmFwcCArIGBBZGRpbmcgJHtqc1BhdGh9IGFuZCAke2Nzc1BhdGh9IHRvIGluZGV4Lmh0bWxgKVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2d2KG9wdGlvbnMsJ3NraXBwZWQgSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfY29tcGlsYXRpb246ICcgKyBlKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ1xuICAgIGNvbnN0IGxvZ3YgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBlbWl0JylcbiAgICB2YXIgYXBwID0gdmFycy5hcHBcbiAgICB2YXIgZnJhbWV3b3JrID0gdmFycy5mcmFtZXdvcmtcbiAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgY29uc3QgX2J1aWxkRXh0QnVuZGxlID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykuX2J1aWxkRXh0QnVuZGxlXG4gICAgbGV0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3V0cHV0UGF0aCx2YXJzLmV4dFBhdGgpXG4gICAgaWYgKGNvbXBpbGVyLm91dHB1dFBhdGggPT09ICcvJyAmJiBjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLmRldlNlcnZlci5jb250ZW50QmFzZSwgb3V0cHV0UGF0aClcbiAgICB9XG4gICAgbG9ndihvcHRpb25zLCdvdXRwdXRQYXRoOiAnICsgb3V0cHV0UGF0aClcbiAgICBsb2d2KG9wdGlvbnMsJ2ZyYW1ld29yazogJyArIGZyYW1ld29yaylcbiAgICBpZiAob3B0aW9ucy5lbWl0ID09IHRydWUpIHtcbiAgICAgIGlmIChmcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgICBfcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVxdWlyZShgLi8ke2ZyYW1ld29ya31VdGlsYCkuX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dFBhdGgsIGNvbXBpbGF0aW9uKVxuICAgICAgfVxuXG4gICAgICB2YXIgY29tbWFuZCA9ICcnXG4gICAgICBpZiAob3B0aW9ucy53YXRjaCA9PSAneWVzJyAmJiB2YXJzLnByb2R1Y3Rpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgY29tbWFuZCA9ICd3YXRjaCdcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21tYW5kID0gJ2J1aWxkJ1xuICAgICAgfVxuXG4gICAgICBpZiAodmFycy5yZWJ1aWxkID09IHRydWUpIHtcbiAgICAgICAgdmFyIHBhcm1zID0gW11cbiAgICAgICAgaWYgKG9wdGlvbnMucHJvZmlsZSA9PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5wcm9maWxlID09ICcnIHx8IG9wdGlvbnMucHJvZmlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsICctLXdlYi1zZXJ2ZXInLCAnZmFsc2UnLCBvcHRpb25zLmVudmlyb25tZW50XVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChjb21tYW5kID09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIHBhcm1zID0gWydhcHAnLCBjb21tYW5kLCBvcHRpb25zLnByb2ZpbGUsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsICctLXdlYi1zZXJ2ZXInLCAnZmFsc2UnLCBvcHRpb25zLnByb2ZpbGUsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhcnMud2F0Y2hTdGFydGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgYXdhaXQgX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKVxuICAgICAgICAgIHZhcnMud2F0Y2hTdGFydGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9nKGAke3ZhcnMuYXBwfUZVTkNUSU9OIGVtaXQgbm90IHJ1bmApXG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZW1pdDogJyArIGUpXG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbi8vKioqKioqKioqKlxuZXhwb3J0IGZ1bmN0aW9uIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXQsIGNvbXBpbGF0aW9uKSB7XG4gIHRyeSB7XG4gICAgbG9ndihvcHRpb25zLCdGVU5DVElPTiBfcHJlcGFyZUZvckJ1aWxkJylcbiAgICBjb25zdCByaW1yYWYgPSByZXF1aXJlKCdyaW1yYWYnKVxuICAgIGNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJ21rZGlycCcpXG4gICAgY29uc3QgZnN4ID0gcmVxdWlyZSgnZnMtZXh0cmEnKVxuICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxuICAgIHZhciBwYWNrYWdlcyA9IG9wdGlvbnMucGFja2FnZXNcbiAgICB2YXIgdG9vbGtpdCA9IG9wdGlvbnMudG9vbGtpdFxuICAgIHZhciB0aGVtZSA9IG9wdGlvbnMudGhlbWVcblxuICAgIHRoZW1lID0gdGhlbWUgfHwgKHRvb2xraXQgPT09ICdjbGFzc2ljJyA/ICd0aGVtZS10cml0b24nIDogJ3RoZW1lLW1hdGVyaWFsJylcbiAgICBsb2d2KG9wdGlvbnMsJ2ZpcnN0VGltZTogJyArIHZhcnMuZmlyc3RUaW1lKVxuICAgIGlmICh2YXJzLmZpcnN0VGltZSkge1xuICAgICAgcmltcmFmLnN5bmMob3V0cHV0KVxuICAgICAgbWtkaXJwLnN5bmMob3V0cHV0KVxuICAgICAgY29uc3QgYnVpbGRYTUwgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmJ1aWxkWE1MXG4gICAgICBjb25zdCBjcmVhdGVBcHBKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVBcHBKc29uXG4gICAgICBjb25zdCBjcmVhdGVXb3Jrc3BhY2VKc29uID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVXb3Jrc3BhY2VKc29uXG4gICAgICBjb25zdCBjcmVhdGVKU0RPTUVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5jcmVhdGVKU0RPTUVudmlyb25tZW50XG5cbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2J1aWxkLnhtbCcpLCBidWlsZFhNTCh2YXJzLnByb2R1Y3Rpb24sIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2FwcC5qc29uJyksIGNyZWF0ZUFwcEpzb24odGhlbWUsIHBhY2thZ2VzLCB0b29sa2l0LCBvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihvdXRwdXQsICdqc2RvbS1lbnZpcm9ubWVudC5qcycpLCBjcmVhdGVKU0RPTUVudmlyb25tZW50KG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ3dvcmtzcGFjZS5qc29uJyksIGNyZWF0ZVdvcmtzcGFjZUpzb24ob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuXG4gICAgICBpZiAodmFycy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtYW5ndWxhci9wYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1hbmd1bGFyLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAncmVhY3QnKSAge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LXJlYWN0L3BhY2thZ2VzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1yZWFjdC9vdmVycmlkZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtcmVhY3Qvb3ZlcnJpZGVzLycpXG4gICAgICAgICAgdmFyIHRvUGF0aCA9IHBhdGguam9pbihvdXRwdXQsICdvdmVycmlkZXMnKVxuICAgICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJy4uL3Jlc291cmNlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUmVzb3VyY2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICAvLyBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwncmVzb3VyY2VzLycpKSkge1xuICAgICAgLy8gICB2YXIgZnJvbVJlc291cmNlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncmVzb3VyY2VzLycpXG4gICAgICAvLyAgIHZhciB0b1Jlc291cmNlcyA9IHBhdGguam9pbihvdXRwdXQsICdyZXNvdXJjZXMnKVxuICAgICAgLy8gICBmc3guY29weVN5bmMoZnJvbVJlc291cmNlcywgdG9SZXNvdXJjZXMpXG4gICAgICAvLyAgIGxvZyhhcHAgKyAnNkNvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAvLyB9XG4gICAgICBcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdwYWNrYWdlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21QYWNrYWdlcyA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncGFja2FnZXMvJylcbiAgICAgICAgdmFyIHRvUGFja2FnZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAncGFja2FnZXMnKVxuICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhY2thZ2VzLCB0b1BhY2thZ2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYWNrYWdlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ292ZXJyaWRlcy8nKVxuICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGF0aCwgdG9QYXRoKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIH1cblxuICAgIH1cbiAgICB2YXJzLmZpcnN0VGltZSA9IGZhbHNlXG4gICAgdmFyIGpzID0gJydcbiAgICBpZiAodmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICBpZiAoIXZhcnMuZGVwcy5pbmNsdWRlcygnRXh0LnJlcXVpcmUoXCJFeHQubGF5b3V0LipcIik7XFxuJykpXG4gICAgICAgIHZhcnMuZGVwcy5wdXNoKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKVxuICAgICAganMgPSB2YXJzLmRlcHMuam9pbignO1xcbicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGpzID0gJ0V4dC5yZXF1aXJlKFwiRXh0LipcIiknXG4gICAgfVxuICAgIGlmICh2YXJzLm1hbmlmZXN0ID09PSBudWxsIHx8IGpzICE9PSB2YXJzLm1hbmlmZXN0KSB7XG4gICAgICB2YXJzLm1hbmlmZXN0ID0ganNcbiAgICAgIGNvbnN0IG1hbmlmZXN0ID0gcGF0aC5qb2luKG91dHB1dCwgJ21hbmlmZXN0LmpzJylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMobWFuaWZlc3QsIGpzLCAndXRmOCcpXG4gICAgICB2YXJzLnJlYnVpbGQgPSB0cnVlXG4gICAgICB2YXIgYnVuZGxlRGlyID0gb3V0cHV0LnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpXG4gICAgICBpZiAoYnVuZGxlRGlyLnRyaW0oKSA9PSAnJykge2J1bmRsZURpciA9ICcuLyd9XG4gICAgICBsb2coYXBwICsgJ0J1aWxkaW5nIEV4dCBidW5kbGUgYXQ6ICcgKyBidW5kbGVEaXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFycy5yZWJ1aWxkID0gZmFsc2VcbiAgICAgIGxvZyhhcHAgKyAnRXh0IHJlYnVpbGQgTk9UIG5lZWRlZCcpXG4gICAgfVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX3ByZXBhcmVGb3JCdWlsZDogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9idWlsZEV4dEJ1bmRsZScpXG5cbiAgICBsZXQgc2VuY2hhOyB0cnkgeyBzZW5jaGEgPSByZXF1aXJlKCdAc2VuY2hhL2NtZCcpIH0gY2F0Y2ggKGUpIHsgc2VuY2hhID0gJ3NlbmNoYScgfVxuICAgIGlmIChmcy5leGlzdHNTeW5jKHNlbmNoYSkpIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2VuY2hhIGZvbGRlciBleGlzdHMnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2VuY2hhIGZvbGRlciBET0VTIE5PVCBleGlzdCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG9uQnVpbGREb25lID0gKCkgPT4ge1xuICAgICAgICBsb2d2KG9wdGlvbnMsJ29uQnVpbGREb25lJylcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRzID0geyBjd2Q6IG91dHB1dFBhdGgsIHNpbGVudDogdHJ1ZSwgc3RkaW86ICdwaXBlJywgZW5jb2Rpbmc6ICd1dGYtOCd9XG4gICAgICBleGVjdXRlQXN5bmMoYXBwLCBzZW5jaGEsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykudGhlbiAoXG4gICAgICAgIGZ1bmN0aW9uKCkgeyBvbkJ1aWxkRG9uZSgpIH0sIFxuICAgICAgICBmdW5jdGlvbihyZWFzb24pIHsgcmVqZWN0KHJlYXNvbikgfVxuICAgICAgKVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIGNvbnNvbGUubG9nKCdlJylcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnX2J1aWxkRXh0QnVuZGxlOiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZUFzeW5jIChhcHAsIGNvbW1hbmQsIHBhcm1zLCBvcHRzLCBjb21waWxhdGlvbiwgb3B0aW9ucykge1xuICB0cnkge1xuICAgIC8vY29uc3QgREVGQVVMVF9TVUJTVFJTID0gWydbSU5GXSBMb2FkaW5nJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0xPR10gRmFzaGlvbiBidWlsZCBjb21wbGV0ZScsICdbRVJSXScsICdbV1JOXScsIFwiW0lORl0gU2VydmVyXCIsIFwiW0lORl0gV3JpdGluZ1wiLCBcIltJTkZdIExvYWRpbmcgQnVpbGRcIiwgXCJbSU5GXSBXYWl0aW5nXCIsIFwiW0xPR10gRmFzaGlvbiB3YWl0aW5nXCJdO1xuICAgIGNvbnN0IERFRkFVTFRfU1VCU1RSUyA9IFtcIltJTkZdIHhTZXJ2ZXJcIiwgJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gQXBwZW5kJywgJ1tJTkZdIFByb2Nlc3NpbmcnLCAnW0lORl0gUHJvY2Vzc2luZyBCdWlsZCcsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgdmFyIHN1YnN0cmluZ3MgPSBERUZBVUxUX1NVQlNUUlMgXG4gICAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICAgIGNvbnN0IGNyb3NzU3Bhd24gPSByZXF1aXJlKCdjcm9zcy1zcGF3bicpXG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgbG9ndihvcHRpb25zLCAnRlVOQ1RJT04gZXhlY3V0ZUFzeW5jJylcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsb2d2KG9wdGlvbnMsYGNvbW1hbmQgLSAke2NvbW1hbmR9YClcbiAgICAgIGxvZ3Yob3B0aW9ucywgYHBhcm1zIC0gJHtwYXJtc31gKVxuICAgICAgbG9ndihvcHRpb25zLCBgb3B0cyAtICR7SlNPTi5zdHJpbmdpZnkob3B0cyl9YClcbiAgICAgIGxldCBjaGlsZCA9IGNyb3NzU3Bhd24oY29tbWFuZCwgcGFybXMsIG9wdHMpXG4gICAgICBjaGlsZC5vbignY2xvc2UnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYG9uIGNsb3NlOiBgICsgY29kZSkgXG4gICAgICAgIGlmKGNvZGUgPT09IDApIHsgcmVzb2x2ZSgwKSB9XG4gICAgICAgIGVsc2UgeyBjb21waWxhdGlvbi5lcnJvcnMucHVzaCggbmV3IEVycm9yKGNvZGUpICk7IHJlc29sdmUoMCkgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLm9uKCdlcnJvcicsIChlcnJvcikgPT4geyBcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gZXJyb3JgKSBcbiAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goZXJyb3IpXG4gICAgICAgIHJlc29sdmUoMClcbiAgICAgIH0pXG4gICAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgc3RyID0gZGF0YS50b1N0cmluZygpLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiIFwiKS50cmltKClcbiAgICAgICAgbG9ndihvcHRpb25zLCBgJHtzdHJ9YClcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZygpLm1hdGNoKC93YWl0aW5nIGZvciBjaGFuZ2VzXFwuXFwuXFwuLykpIHtcbiAgICAgICAgICByZXNvbHZlKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHN1YnN0cmluZ3Muc29tZShmdW5jdGlvbih2KSB7IHJldHVybiBkYXRhLmluZGV4T2YodikgPj0gMDsgfSkpIHsgXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltJTkZdXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltMT0ddXCIsIFwiXCIpXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykudHJpbSgpXG4gICAgICAgICAgICBpZiAoc3RyLmluY2x1ZGVzKFwiW0VSUl1cIikpIHtcbiAgICAgICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goYXBwICsgc3RyLnJlcGxhY2UoL15cXFtFUlJcXF0gL2dpLCAnJykpO1xuICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIltFUlJdXCIsIGAke2NoYWxrLnJlZChcIltFUlJdXCIpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2coYCR7YXBwfSR7c3RyfWApIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZGVyci5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywgYGVycm9yIG9uIGNsb3NlOiBgICsgZGF0YSkgXG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICB2YXIgc3RySmF2YU9wdHMgPSBcIlBpY2tlZCB1cCBfSkFWQV9PUFRJT05TXCI7XG4gICAgICAgIHZhciBpbmNsdWRlcyA9IHN0ci5pbmNsdWRlcyhzdHJKYXZhT3B0cylcbiAgICAgICAgaWYgKCFpbmNsdWRlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke2FwcH0gJHtjaGFsay5yZWQoXCJbRVJSXVwiKX0gJHtzdHJ9YClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIGNhdGNoKGUpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KG9wdGlvbnMsZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZXhlY3V0ZUFzeW5jOiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH0gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cocykge1xuICByZXF1aXJlKCdyZWFkbGluZScpLmN1cnNvclRvKHByb2Nlc3Muc3Rkb3V0LCAwKVxuICB0cnkge1xuICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gIH1cbiAgY2F0Y2goZSkge31cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUocylcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcbicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2d2KG9wdGlvbnMsIHMpIHtcbiAgaWYgKG9wdGlvbnMudmVyYm9zZSA9PSAneWVzJykge1xuICAgIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gICAgdHJ5IHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpXG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoYC12ZXJib3NlOiAke3N9YClcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2dldEFwcCgpIHtcbiAgdmFyIGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKVxuICB2YXIgcHJlZml4ID0gYGBcbiAgY29uc3QgcGxhdGZvcm0gPSByZXF1aXJlKCdvcycpLnBsYXRmb3JtKClcbiAgaWYgKHBsYXRmb3JtID09ICdkYXJ3aW4nKSB7IHByZWZpeCA9IGDihLkg772iZXh0772jOmAgfVxuICBlbHNlIHsgcHJlZml4ID0gYGkgW2V4dF06YCB9XG4gIHJldHVybiBgJHtjaGFsay5ncmVlbihwcmVmaXgpfSBgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0VmVyc2lvbnMoYXBwLCBwbHVnaW5OYW1lLCBmcmFtZXdvcmtOYW1lKSB7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbiAgdmFyIHYgPSB7fVxuICB2YXIgcGx1Z2luUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYScsIHBsdWdpbk5hbWUpXG4gIHZhciBwbHVnaW5Qa2cgPSAoZnMuZXhpc3RzU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGx1Z2luUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYucGx1Z2luVmVyc2lvbiA9IHBsdWdpblBrZy52ZXJzaW9uXG4gIHYuX3Jlc29sdmVkID0gcGx1Z2luUGtnLl9yZXNvbHZlZFxuICBpZiAodi5fcmVzb2x2ZWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgdi5lZGl0aW9uID0gYENvbW1lcmNpYWxgXG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKC0xID09IHYuX3Jlc29sdmVkLmluZGV4T2YoJ2NvbW11bml0eScpKSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2LmVkaXRpb24gPSBgQ29tbXVuaXR5YFxuICAgIH1cbiAgfVxuXG4gIHZhciB3ZWJwYWNrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvd2VicGFjaycpXG4gIHZhciB3ZWJwYWNrUGtnID0gKGZzLmV4aXN0c1N5bmMod2VicGFja1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYud2VicGFja1ZlcnNpb24gPSB3ZWJwYWNrUGtnLnZlcnNpb25cblxuICB2YXIgZXh0UGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvQHNlbmNoYS9leHQnKVxuICB2YXIgZXh0UGtnID0gKGZzLmV4aXN0c1N5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGV4dFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmV4dFZlcnNpb24gPSBleHRQa2cuc2VuY2hhLnZlcnNpb25cblxuICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS9jbWRgKVxuICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG5cbiAgaWYgKHYuY21kVmVyc2lvbiA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY21kUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLGBub2RlX21vZHVsZXMvQHNlbmNoYS8ke3BsdWdpbk5hbWV9L25vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gICAgdmFyIGNtZFBrZyA9IChmcy5leGlzdHNTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmNtZFZlcnNpb24gPSBjbWRQa2cudmVyc2lvbl9mdWxsXG4gIH1cblxuICB2YXIgZnJhbWV3b3JrSW5mbyA9ICcnXG4gICBpZiAoZnJhbWV3b3JrTmFtZSAhPSB1bmRlZmluZWQgJiYgZnJhbWV3b3JrTmFtZSAhPSAnZXh0anMnKSB7XG4gICAgdmFyIGZyYW1ld29ya1BhdGggPSAnJ1xuICAgIGlmIChmcmFtZXdvcmtOYW1lID09ICdyZWFjdCcpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL3JlYWN0JylcbiAgICB9XG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmcmFtZXdvcmtQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlJylcbiAgICB9XG4gICAgdmFyIGZyYW1ld29ya1BrZyA9IChmcy5leGlzdHNTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmcmFtZXdvcmtQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgICB2LmZyYW1ld29ya1ZlcnNpb24gPSBmcmFtZXdvcmtQa2cudmVyc2lvblxuICAgIGZyYW1ld29ya0luZm8gPSAnLCAnICsgZnJhbWV3b3JrTmFtZSArICcgdicgKyB2LmZyYW1ld29ya1ZlcnNpb25cbiAgfVxuICByZXR1cm4gYXBwICsgJ2V4dC13ZWJwYWNrLXBsdWdpbiB2JyArIHYucGx1Z2luVmVyc2lvbiArICcsIEV4dCBKUyB2JyArIHYuZXh0VmVyc2lvbiArICcgJyArIHYuZWRpdGlvbiArICcgRWRpdGlvbiwgU2VuY2hhIENtZCB2JyArIHYuY21kVmVyc2lvbiArICcsIHdlYnBhY2sgdicgKyB2LndlYnBhY2tWZXJzaW9uICsgZnJhbWV3b3JrSW5mb1xuIH0iXX0=