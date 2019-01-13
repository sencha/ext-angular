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
        const extAngulaFolder = 'ext-angular-prod';
        const extAngularModule = 'ext-angular.module';
        const extAngularPackage = '@sencha/ext-angular';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5VdGlsLmpzIl0sIm5hbWVzIjpbIl9jb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwidGhpc1ZhcnMiLCJ0aGlzT3B0aW9ucyIsInBsdWdpbiIsImZyYW1ld29yayIsInVuZGVmaW5lZCIsInBsdWdpbkVycm9ycyIsInB1c2giLCJ2YXJzIiwidmFsaWRhdGVPcHRpb25zIiwiZ2V0VmFsaWRhdGVPcHRpb25zIiwiZ2V0RGVmYXVsdFZhcnMiLCJwbHVnaW5OYW1lIiwiZnN4IiwidG9GYXNoaW9uRGlzdCIsInJlc29sdmUiLCJwcm9jZXNzIiwiY3dkIiwibG9ndiIsImV4aXN0c1N5bmMiLCJmcm9tRmFzaGlvbkRpc3QiLCJqb2luIiwiY29weVN5bmMiLCJhcHAiLCJfZ2V0QXBwIiwicmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0cmluZ2lmeSIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImxvZyIsIl9nZXRWZXJzaW9ucyIsIl9jb21waWxhdGlvbiIsImNvbXBpbGVyIiwiY29tcGlsYXRpb24iLCJta2RpcnAiLCJleHRDb21wb25lbnRzIiwidXNlZEV4dENvbXBvbmVudHMiLCJleHRBbmd1bGFGb2xkZXIiLCJleHRBbmd1bGFyTW9kdWxlIiwiZXh0QW5ndWxhclBhY2thZ2UiLCJwYWNrYWdlUGF0aCIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJmb3JFYWNoIiwiZmlsZU5hbWUiLCJzdWJzdHIiLCJlbmQiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwicmV3cml0ZSIsImFwcE1vZHVsZVBhdGgiLCJqcyIsInRvU3RyaW5nIiwiaSIsImxhc3RJbmRleE9mIiwicGF0aFRvRXh0QW5ndWxhck1vZGVybiIsInN5bmMiLCJ0IiwiZXh0QW5ndWxhck1vZGVybk1vZHVsZSIsIndyaXRlRmlsZVN5bmMiLCJqIiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJob29rcyIsInN1Y2NlZWRNb2R1bGUiLCJ0YXAiLCJtb2R1bGUiLCJsZW5ndGgiLCJyZXNvdXJjZSIsIm1hdGNoIiwiZGVwcyIsImV4dHJhY3RGcm9tU291cmNlIiwiZmluaXNoTW9kdWxlcyIsIm1vZHVsZXMiLCJzdHJpbmciLCJjb2RlIiwiaW5kZXgiLCJTZXQiLCJyZWFkRnJvbSIsIndyaXRlVG9QYXRoIiwiYmFzZUNvbnRlbnQiLCJ3cml0ZVRvUGF0aFdyaXR0ZW4iLCJtb2R1bGVWYXJzIiwiaW1wb3J0cyIsImV4cG9ydHMiLCJkZWNsYXJhdGlvbnMiLCJ4dHlwZSIsImNhcGNsYXNzbmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsInNsaWNlIiwiY2xhc3NGaWxlIiwiY29udGVudHMiLCJodG1sV2VicGFja1BsdWdpbkJlZm9yZUh0bWxHZW5lcmF0aW9uIiwiZGF0YSIsIm91dHB1dFBhdGgiLCJkZXZTZXJ2ZXIiLCJjb250ZW50QmFzZSIsInRyaW0iLCJqc1BhdGgiLCJleHRQYXRoIiwiY3NzUGF0aCIsImFzc2V0cyIsInVuc2hpZnQiLCJjc3MiLCJlbWl0IiwiY2FsbGJhY2siLCJfYnVpbGRFeHRCdW5kbGUiLCJfcHJlcGFyZUZvckJ1aWxkIiwiY29tbWFuZCIsIndhdGNoIiwicmVidWlsZCIsInBhcm1zIiwicHJvZmlsZSIsIndhdGNoU3RhcnRlZCIsIm91dHB1dCIsInJpbXJhZiIsInBhY2thZ2VzIiwidG9vbGtpdCIsInRoZW1lIiwiZmlyc3RUaW1lIiwiYnVpbGRYTUwiLCJjcmVhdGVBcHBKc29uIiwiY3JlYXRlV29ya3NwYWNlSnNvbiIsImNyZWF0ZUpTRE9NRW52aXJvbm1lbnQiLCJmcm9tUGF0aCIsInRvUGF0aCIsImZyb21SZXNvdXJjZXMiLCJ0b1Jlc291cmNlcyIsImZyb21QYWNrYWdlcyIsInRvUGFja2FnZXMiLCJpbmNsdWRlcyIsIm1hbmlmZXN0IiwiYnVuZGxlRGlyIiwic2VuY2hhIiwiUHJvbWlzZSIsInJlamVjdCIsIm9uQnVpbGREb25lIiwib3B0cyIsInNpbGVudCIsInN0ZGlvIiwiZW5jb2RpbmciLCJleGVjdXRlQXN5bmMiLCJ0aGVuIiwicmVhc29uIiwiREVGQVVMVF9TVUJTVFJTIiwic3Vic3RyaW5ncyIsImNoYWxrIiwiY3Jvc3NTcGF3biIsImNoaWxkIiwib24iLCJzaWduYWwiLCJFcnJvciIsImVycm9yIiwic3Rkb3V0Iiwic3RyIiwic29tZSIsInYiLCJyZWQiLCJzdGRlcnIiLCJzdHJKYXZhT3B0cyIsInMiLCJjdXJzb3JUbyIsImNsZWFyTGluZSIsIndyaXRlIiwidmVyYm9zZSIsInByZWZpeCIsInBsYXRmb3JtIiwiZ3JlZW4iLCJmcmFtZXdvcmtOYW1lIiwicGx1Z2luUGF0aCIsInBsdWdpblBrZyIsInBsdWdpblZlcnNpb24iLCJ2ZXJzaW9uIiwiX3Jlc29sdmVkIiwiZWRpdGlvbiIsIndlYnBhY2tQYXRoIiwid2VicGFja1BrZyIsIndlYnBhY2tWZXJzaW9uIiwiZXh0UGtnIiwiZXh0VmVyc2lvbiIsImNtZFBhdGgiLCJjbWRQa2ciLCJjbWRWZXJzaW9uIiwidmVyc2lvbl9mdWxsIiwiZnJhbWV3b3JrSW5mbyIsImZyYW1ld29ya1BhdGgiLCJmcmFtZXdvcmtQa2ciLCJmcmFtZXdvcmtWZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQ3BDLFFBQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsUUFBTUMsRUFBRSxHQUFHRCxPQUFPLENBQUMsSUFBRCxDQUFsQjs7QUFFQSxNQUFJRSxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUVBLE1BQUlOLE9BQU8sQ0FBQ08sU0FBUixJQUFxQkMsU0FBekIsRUFBb0M7QUFDbENKLElBQUFBLFFBQVEsQ0FBQ0ssWUFBVCxHQUF3QixFQUF4QjtBQUNBTCxJQUFBQSxRQUFRLENBQUNLLFlB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SyxHQUFHLEdBQUcsc0JBQU4sR0FBK0I0SSxDQUFDLENBQUNlLGFBQWpDLEdBQWlELFlBQWpELEdBQWdFZixDQUFDLENBQUN1QixVQUFsRSxHQUErRSxHQUEvRSxHQUFxRnZCLENBQUMsQ0FBQ2tCLE9BQXZGLEdBQWlHLHdCQUFqRyxHQUE0SGxCLENBQUMsQ0FBQzBCLFVBQTlILEdBQTJJLGFBQTNJLEdBQTJKMUIsQ0FBQyxDQUFDcUIsY0FBN0osR0FBOEtPLGFBQXJMO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29uc3RydWN0b3Iob3B0aW9ucykge1xuICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuXG4gIHZhciB0aGlzVmFycyA9IHt9XG4gIHZhciB0aGlzT3B0aW9ucyA9IHt9XG4gIHZhciBwbHVnaW4gPSB7fVxuXG4gIGlmIChvcHRpb25zLmZyYW1ld29yayA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzVmFycy5wbHVnaW5FcnJvcnMgPSBbXVxuICAgIHRoaXNWYXJzLnBsdWdpbkVycm9ycy5wdXNoKCd3ZWJwYWNrIGNvbmZpZzogZnJhbWV3b3JrIHBhcmFtZXRlciBvbiBleHQtd2VicGFjay1wbHVnaW4gaXMgbm90IGRlZmluZWQgLSB2YWx1ZXM6IHJlYWN0LCBhbmd1bGFyLCBleHRqcycpXG4gICAgcGx1Z2luLnZhcnMgPSB0aGlzVmFyc1xuICAgIHJldHVybiBwbHVnaW5cbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlT3B0aW9ucyA9IHJlcXVpcmUoJ3NjaGVtYS11dGlscycpXG4gIHZhbGlkYXRlT3B0aW9ucyhyZXF1aXJlKGAuLyR7b3B0aW9ucy5mcmFtZXdvcmt9VXRpbGApLmdldFZhbGlkYXRlT3B0aW9ucygpLCBvcHRpb25zLCAnJylcblxuICB0aGlzVmFycyA9IHJlcXVpcmUoYC4vJHtvcHRpb25zLmZyYW1ld29ya31VdGlsYCkuZ2V0RGVmYXVsdFZhcnMoKVxuICB0aGlzVmFycy5mcmFtZXdvcmsgPSBvcHRpb25zLmZyYW1ld29ya1xuICBzd2l0Y2godGhpc1ZhcnMuZnJhbWV3b3JrKSB7XG4gICAgY2FzZSAnZXh0anMnOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtd2VicGFjay1wbHVnaW4nXG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWFjdCc6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC1yZWFjdC13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2FuZ3VsYXInOlxuICAgICAgdGhpc1ZhcnMucGx1Z2luTmFtZSA9ICdleHQtYW5ndWxhci13ZWJwYWNrLXBsdWdpbidcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzVmFycy5wbHVnaW5OYW1lID0gJ2V4dC13ZWJwYWNrLXBsdWdpbidcbiAgfVxuXG4gIC8vZml4IGZhc2hpb24gZGlzdCBwcm9ibGVtXG4gIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgdmFyIHRvRmFzaGlvbkRpc3QgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSxgbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kL2Rpc3QvanMvbm9kZV9tb2R1bGVzL2Zhc2hpb24vZGlzdGApXG4gIGxvZ3Yob3B0aW9ucywgYHRvRmFzaGlvbkRpc3QgJHt0b0Zhc2hpb25EaXN0fWApXG4gIGlmICghZnMuZXhpc3RzU3luYyh0b0Zhc2hpb25EaXN0KSkge1xuICAgIGxvZ3Yob3B0aW9ucywgYGNvcHlgKVxuICAgIHZhciBmcm9tRmFzaGlvbkRpc3QgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy9Ac2VuY2hhLycgKyB0aGlzVmFycy5wbHVnaW5OYW1lICsgJy9mYXNoaW9uL2Rpc3QvJylcbiAgICBmc3guY29weVN5bmMoZnJvbUZhc2hpb25EaXN0LCB0b0Zhc2hpb25EaXN0KVxuICB9XG4gIGVsc2Uge1xuICAgIGxvZ3Yob3B0aW9ucywgYG5vIGNvcHkgb2YgZmFzaGlvbmApXG4gIH1cblxuICB0aGlzVmFycy5hcHAgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fZ2V0QXBwKClcbiAgbG9ndihvcHRpb25zLCBgcGx1Z2luTmFtZSAtICR7dGhpc1ZhcnMucGx1Z2luTmFtZX1gKVxuICBsb2d2KG9wdGlvbnMsIGB0aGlzVmFycy5hcHAgLSAke3RoaXNWYXJzLmFwcH1gKVxuXG4gIGNvbnN0IHJjID0gKGZzLmV4aXN0c1N5bmMoYC5leHQtJHt0aGlzVmFycy5mcmFtZXdvcmt9cmNgKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhgLmV4dC0ke3RoaXNWYXJzLmZyYW1ld29ya31yY2AsICd1dGYtOCcpKSB8fCB7fSlcbiAgdGhpc09wdGlvbnMgPSB7IC4uLnJlcXVpcmUoYC4vJHt0aGlzVmFycy5mcmFtZXdvcmt9VXRpbGApLmdldERlZmF1bHRPcHRpb25zKCksIC4uLm9wdGlvbnMsIC4uLnJjIH1cbiAgbG9ndihvcHRpb25zLCBgdGhpc09wdGlvbnMgLSAke0pTT04uc3RyaW5naWZ5KHRoaXNPcHRpb25zKX1gKVxuICBpZiAodGhpc09wdGlvbnMuZW52aXJvbm1lbnQgPT0gJ3Byb2R1Y3Rpb24nKSBcbiAgICB7dGhpc1ZhcnMucHJvZHVjdGlvbiA9IHRydWV9XG4gIGVsc2UgXG4gICAge3RoaXNWYXJzLnByb2R1Y3Rpb24gPSBmYWxzZX1cbiAgbG9nKHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLl9nZXRWZXJzaW9ucyh0aGlzVmFycy5hcHAsIHRoaXNWYXJzLnBsdWdpbk5hbWUsIHRoaXNWYXJzLmZyYW1ld29yaykpXG4gIGxvZyh0aGlzVmFycy5hcHAgKyAnQnVpbGRpbmcgZm9yICcgKyB0aGlzT3B0aW9ucy5lbnZpcm9ubWVudClcblxuICBwbHVnaW4udmFycyA9IHRoaXNWYXJzXG4gIHBsdWdpbi5vcHRpb25zID0gdGhpc09wdGlvbnNcbiAgcmV0dXJuIHBsdWdpblxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfY29tcGlsYXRpb24oY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB2YXJzLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLCAnRlVOQ1RJT04gX2NvbXBpbGF0aW9uJylcblxuICAgIGNvbnN0IGZzeCA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKVxuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywgYGV4dC1jb21waWxhdGlvbjogcHJvZHVjdGlvbiBpcyBgICsgdmFycy5wcm9kdWN0aW9uKVxuXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIHZhciBleHRDb21wb25lbnRzID0gW11cbiAgICAgICAgdmFyIHVzZWRFeHRDb21wb25lbnRzID0gW11cbiAgICAgICAgY29uc3QgZXh0QW5ndWxhRm9sZGVyID0gJ2V4dC1hbmd1bGFyLXByb2QnXG4gICAgICAgIGNvbnN0IGV4dEFuZ3VsYXJNb2R1bGUgPSAnZXh0LWFuZ3VsYXIubW9kdWxlJ1xuICAgICAgICBjb25zdCBleHRBbmd1bGFyUGFja2FnZSA9ICdAc2VuY2hhL2V4dC1hbmd1bGFyJ1xuICAgICAgICBjb25zdCBwYWNrYWdlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzLycgKyBleHRBbmd1bGFyUGFja2FnZSlcbiAgICAgICAgdmFyIGZpbGVzID0gZnN4LnJlYWRkaXJTeW5jKGAke3BhY2thZ2VQYXRofS9saWJgKVxuICAgICAgICBmaWxlcy5mb3JFYWNoKChmaWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGlmIChmaWxlTmFtZSAmJiBmaWxlTmFtZS5zdWJzdHIoMCwgNCkgPT0gJ2V4dC0nKSB7XG4gICAgICAgICAgICB2YXIgZW5kID0gZmlsZU5hbWUuc3Vic3RyKDQpLmluZGV4T2YoJy5jb21wb25lbnQnKVxuICAgICAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICAgIGV4dENvbXBvbmVudHMucHVzaChmaWxlTmFtZS5zdWJzdHJpbmcoNCwgZW5kICsgNCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHJld3JpdGUgPSBmYWxzZVxuICAgICAgICAgIGNvbnN0IGFwcE1vZHVsZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hcHAvYXBwLm1vZHVsZS50cycpXG4gICAgICAgICAgdmFyIGpzID0gZnN4LnJlYWRGaWxlU3luYyhhcHBNb2R1bGVQYXRoKS50b1N0cmluZygpXG4gICAgICAgICAgdmFyIGkgPSBqcy5pbmRleE9mKGV4dEFuZ3VsYXJQYWNrYWdlKVxuICAgICAgICAgIGkgPSBqcy5zdWJzdHJpbmcoMCwgaSkubGFzdEluZGV4T2YoJ2ltcG9ydCcpXG5cbiAgICAgICAgICBpZiAoanMuc3Vic3RyKGkgLSAzLCAzKSAhPT0gJy8vICcpIHtcbiAgICAgICAgICAgIGpzID0ganMuc3Vic3RyaW5nKDAsIGkpICsgJ1xcbiAvLyAnICsganMuc3Vic3RyaW5nKGkpXG4gICAgICAgICAgICByZXdyaXRlID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm4gPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYHNyYy9hcHAvJHtleHRBbmd1bGFGb2xkZXJ9YClcbiAgICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGF0aFRvRXh0QW5ndWxhck1vZGVybikpIHtcbiAgICAgICAgICAgIG1rZGlycC5zeW5jKHBhdGhUb0V4dEFuZ3VsYXJNb2Rlcm4pXG4gICAgICAgICAgICBjb25zdCB0ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5leHRBbmd1bGFyTW9kZXJuTW9kdWxlKCcnLCAnJywgJycpXG4gICAgICAgICAgICBmc3gud3JpdGVGaWxlU3luYyhcbiAgICAgICAgICAgICAgYCR7cGF0aFRvRXh0QW5ndWxhck1vZGVybn0vJHtleHRBbmd1bGFyTW9kdWxlfS50c2AsIHQsICd1dGYtOCcsICgpID0+IHtyZXR1cm59XG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXdyaXRlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgaiA9IGpzLmluZGV4T2YoYC4vJHtleHRBbmd1bGFGb2xkZXJ9LyR7ZXh0QW5ndWxhck1vZHVsZX1gKVxuICAgICAgICAgIGlmIChqIDwgMCkge1xuICAgICAgICAgICAganMgPSBqcy5zdWJzdHJpbmcoMCwgaSkgKyBgaW1wb3J0IHtleHRBbmd1bGFyTW9kdWxlfSBmcm9tICcuLyR7ZXh0QW5ndWxhRm9sZGVyfS8ke2V4dEFuZ3VsYXJNb2R1bGV9J1xcbmAgKyBqcy5zdWJzdHIoaSlcbiAgICAgICAgICAgIHJld3JpdGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGpzLnN1YnN0cihqIC0gNDMsIDMpID09ICcvLyAnKSB7XG4gICAgICAgICAgICBqcyA9IGpzLnN1YnN0cmluZygwLCBqIC0gNDMpICsgJ1xcbicgK2pzLnN1YnN0cmluZyhqIC0gNDApXG4gICAgICAgICAgICByZXdyaXRlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmV3cml0ZSlcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGFwcE1vZHVsZVBhdGgsIGpzLCAndXRmLTgnLCAoKT0+e3JldHVybn0pXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdidWlsZE1vZHVsZSBob29rIGluIF9jb21waWxhdGlvbjogJyArIGUpXG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29tcGlsYXRpb24uaG9va3Muc3VjY2VlZE1vZHVsZS50YXAoYGV4dC1zdWNjZWVkLW1vZHVsZWAsIG1vZHVsZSA9PiB7XG4gICAgICAgIGlmIChleHRDb21wb25lbnRzLmxlbmd0aCAmJiBtb2R1bGUucmVzb3VyY2UgJiYgKG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuKGp8dClzeD8kLykgfHxcbiAgICAgICAgb3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInICYmIG1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvXFwuaHRtbCQvKSkgJiZcbiAgICAgICAgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaCgvbm9kZV9tb2R1bGVzLykgJiYgIW1vZHVsZS5yZXNvdXJjZS5tYXRjaChgL2V4dC17JG9wdGlvbnMuZnJhbWV3b3JrfS9kaXN0L2ApKSB7XG4gICAgICAgICAgdmFycy5kZXBzID0gWy4uLih2YXJzLmRlcHMgfHwgW10pLCAuLi5yZXF1aXJlKGAuLyR7dmFycy5mcmFtZXdvcmt9VXRpbGApLmV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICAgIGNvbXBpbGF0aW9uLmhvb2tzLmZpbmlzaE1vZHVsZXMudGFwKGBleHQtZmluaXNoLW1vZHVsZXNgLCBtb2R1bGVzID0+IHtcbiAgICAgICAgICBjb25zdCBzdHJpbmcgPSAnRXh0LmNyZWF0ZSh7XFxcInh0eXBlXFxcIjpcXFwiJ1xuICAgICAgICAgIHZhcnMuZGVwcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY29kZS5pbmRleE9mKHN0cmluZylcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnN1YnN0cmluZyhpbmRleCArIHN0cmluZy5sZW5ndGgpXG4gICAgICAgICAgICAgIHZhciBlbmQgPSBjb2RlLmluZGV4T2YoJ1xcXCInKVxuICAgICAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cy5wdXNoKGNvZGUuc3Vic3RyKDAsIGVuZCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICB1c2VkRXh0Q29tcG9uZW50cyA9IFsuLi5uZXcgU2V0KHVzZWRFeHRDb21wb25lbnRzKV1cbiAgICAgICAgICBjb25zdCByZWFkRnJvbSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnbm9kZV9tb2R1bGVzLycgKyBleHRBbmd1bGFyUGFja2FnZSArICcvc3JjL2xpYicpXG4gICAgICAgICAgY29uc3Qgd3JpdGVUb1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgYHNyYy9hcHAvJHtleHRBbmd1bGFGb2xkZXJ9YClcbiAgICAgICAgICAvL2NvbnN0IGV4dEFuZ3VsYXJNb2R1bGVCYXNlRmlsZSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBgJHt3cml0ZVRvUGF0aH0vYmFzZS50c2ApXG5cbiAgICAgICAgICBjb25zdCBiYXNlQ29udGVudCA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cmVhZEZyb219L2Jhc2UudHNgKS50b1N0cmluZygpXG4gICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9L2Jhc2UudHNgLCBiYXNlQ29udGVudCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIFxuICAgICAgICAgIHZhciB3cml0ZVRvUGF0aFdyaXR0ZW4gPSBmYWxzZVxuICAgICAgICAgIHZhciBtb2R1bGVWYXJzID0ge1xuICAgICAgICAgICAgaW1wb3J0czogJycsXG4gICAgICAgICAgICBleHBvcnRzOiAnJyxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogJydcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlZEV4dENvbXBvbmVudHMuZm9yRWFjaCh4dHlwZSA9PiB7XG4gICAgICAgICAgICB2YXIgY2FwY2xhc3NuYW1lID0geHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB4dHlwZS5yZXBsYWNlKC8tL2csIFwiX1wiKS5zbGljZSgxKVxuICAgICAgICAgICAgbW9kdWxlVmFycy5pbXBvcnRzID0gbW9kdWxlVmFycy5pbXBvcnRzICsgYGltcG9ydCB7IEV4dCR7Y2FwY2xhc3NuYW1lfUNvbXBvbmVudCB9IGZyb20gJy4vZXh0LSR7eHR5cGV9LmNvbXBvbmVudCc7XFxuYFxuICAgICAgICAgICAgbW9kdWxlVmFycy5leHBvcnRzID0gbW9kdWxlVmFycy5leHBvcnRzICsgYCAgICBFeHQke2NhcGNsYXNzbmFtZX1Db21wb25lbnQsXFxuYFxuICAgICAgICAgICAgbW9kdWxlVmFycy5kZWNsYXJhdGlvbnMgPSBtb2R1bGVWYXJzLmRlY2xhcmF0aW9ucyArIGAgICAgRXh0JHtjYXBjbGFzc25hbWV9Q29tcG9uZW50LFxcbmBcbiAgICAgICAgICAgIHZhciBjbGFzc0ZpbGUgPSBgL2V4dC0ke3h0eXBlfS5jb21wb25lbnQudHNgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50cyA9IGZzeC5yZWFkRmlsZVN5bmMoYCR7cmVhZEZyb219JHtjbGFzc0ZpbGV9YCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgZnN4LndyaXRlRmlsZVN5bmMoYCR7d3JpdGVUb1BhdGh9JHtjbGFzc0ZpbGV9YCwgY29udGVudHMsICd1dGYtOCcsICgpPT57cmV0dXJufSlcbiAgICAgICAgICAgIHdyaXRlVG9QYXRoV3JpdHRlbiA9IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmICh3cml0ZVRvUGF0aFdyaXR0ZW4pIHtcbiAgICAgICAgICAgIHZhciB0ID0gcmVxdWlyZSgnLi9hcnRpZmFjdHMnKS5leHRBbmd1bGFyTW9kZXJuTW9kdWxlKFxuICAgICAgICAgICAgICBtb2R1bGVWYXJzLmltcG9ydHMsIG1vZHVsZVZhcnMuZXhwb3J0cywgbW9kdWxlVmFycy5kZWNsYXJhdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGZzeC53cml0ZUZpbGVTeW5jKGAke3dyaXRlVG9QYXRofS8ke2V4dEFuZ3VsYXJNb2R1bGV9LnRzYCwgdCwgJ3V0Zi04JywgKCk9PntyZXR1cm59KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5mcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgY29tcGlsYXRpb24uaG9va3MuaHRtbFdlYnBhY2tQbHVnaW5CZWZvcmVIdG1sR2VuZXJhdGlvbi50YXAoYGV4dC1odG1sLWdlbmVyYXRpb25gLChkYXRhKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnSE9PSyBleHQtaHRtbC1nZW5lcmF0aW9uJylcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgICAgICB2YXIgb3V0cHV0UGF0aCA9ICcnXG4gICAgICAgIGlmIChjb21waWxlci5vcHRpb25zLmRldlNlcnZlcikge1xuICAgICAgICAgIGlmIChjb21waWxlci5vdXRwdXRQYXRoID09PSAnLycpIHtcbiAgICAgICAgICAgIG91dHB1dFBhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5kZXZTZXJ2ZXIuY29udGVudEJhc2UsIG91dHB1dFBhdGgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG91dHB1dFBhdGggPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvdXRwdXRQYXRoID0gJ2J1aWxkJ1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dFBhdGggPSBvdXRwdXRQYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpLnRyaW0oKVxuICAgICAgICB2YXIganNQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5qcycpXG4gICAgICAgIHZhciBjc3NQYXRoID0gcGF0aC5qb2luKG91dHB1dFBhdGgsIHZhcnMuZXh0UGF0aCwgJ2V4dC5jc3MnKVxuICAgICAgICBkYXRhLmFzc2V0cy5qcy51bnNoaWZ0KGpzUGF0aClcbiAgICAgICAgZGF0YS5hc3NldHMuY3NzLnVuc2hpZnQoY3NzUGF0aClcbiAgICAgICAgbG9nKHZhcnMuYXBwICsgYEFkZGluZyAke2pzUGF0aH0gYW5kICR7Y3NzUGF0aH0gdG8gaW5kZXguaHRtbGApXG4gICAgICB9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZ3Yob3B0aW9ucywnc2tpcHBlZCBIT09LIGV4dC1odG1sLWdlbmVyYXRpb24nKVxuICAgIH1cbiAgfVxuICBjYXRjaChlKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndihvcHRpb25zLGUpXG4gICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goJ19jb21waWxhdGlvbjogJyArIGUpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9nID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nXG4gICAgY29uc3QgbG9ndiA9IHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3ZcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIGVtaXQnKVxuICAgIHZhciBhcHAgPSB2YXJzLmFwcFxuICAgIHZhciBmcmFtZXdvcmsgPSB2YXJzLmZyYW1ld29ya1xuICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICBjb25zdCBfYnVpbGRFeHRCdW5kbGUgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5fYnVpbGRFeHRCdW5kbGVcbiAgICBsZXQgb3V0cHV0UGF0aCA9IHBhdGguam9pbihjb21waWxlci5vdXRwdXRQYXRoLHZhcnMuZXh0UGF0aClcbiAgICBpZiAoY29tcGlsZXIub3V0cHV0UGF0aCA9PT0gJy8nICYmIGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyKSB7XG4gICAgICBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm9wdGlvbnMuZGV2U2VydmVyLmNvbnRlbnRCYXNlLCBvdXRwdXRQYXRoKVxuICAgIH1cbiAgICBsb2d2KG9wdGlvbnMsJ291dHB1dFBhdGg6ICcgKyBvdXRwdXRQYXRoKVxuICAgIGxvZ3Yob3B0aW9ucywnZnJhbWV3b3JrOiAnICsgZnJhbWV3b3JrKVxuICAgIGlmIChvcHRpb25zLmVtaXQgPT0gdHJ1ZSkge1xuICAgICAgaWYgKGZyYW1ld29yayAhPSAnZXh0anMnKSB7XG4gICAgICAgIF9wcmVwYXJlRm9yQnVpbGQoYXBwLCB2YXJzLCBvcHRpb25zLCBvdXRwdXRQYXRoLCBjb21waWxhdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXF1aXJlKGAuLyR7ZnJhbWV3b3JrfVV0aWxgKS5fcHJlcGFyZUZvckJ1aWxkKGFwcCwgdmFycywgb3B0aW9ucywgb3V0cHV0UGF0aCwgY29tcGlsYXRpb24pXG4gICAgICB9XG5cbiAgICAgIHZhciBjb21tYW5kID0gJydcbiAgICAgIGlmIChvcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICBjb21tYW5kID0gJ3dhdGNoJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbW1hbmQgPSAnYnVpbGQnXG4gICAgICB9XG5cbiAgICAgIGlmICh2YXJzLnJlYnVpbGQgPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGFybXMgPSBbXVxuICAgICAgICBpZiAob3B0aW9ucy5wcm9maWxlID09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnByb2ZpbGUgPT0gJycgfHwgb3B0aW9ucy5wcm9maWxlID09IG51bGwpIHtcbiAgICAgICAgICBpZiAoY29tbWFuZCA9PSAnYnVpbGQnKSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMuZW52aXJvbm1lbnRdXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgcGFybXMgPSBbJ2FwcCcsIGNvbW1hbmQsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJtcyA9IFsnYXBwJywgY29tbWFuZCwgJy0td2ViLXNlcnZlcicsICdmYWxzZScsIG9wdGlvbnMucHJvZmlsZSwgb3B0aW9ucy5lbnZpcm9ubWVudF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFycy53YXRjaFN0YXJ0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICBhd2FpdCBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpXG4gICAgICAgICAgdmFycy53YXRjaFN0YXJ0ZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsb2coYCR7dmFycy5hcHB9RlVOQ1RJT04gZW1pdCBub3QgcnVuYClcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdlbWl0OiAnICsgZSlcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuLy8qKioqKioqKioqXG5leHBvcnQgZnVuY3Rpb24gX3ByZXBhcmVGb3JCdWlsZChhcHAsIHZhcnMsIG9wdGlvbnMsIG91dHB1dCwgY29tcGlsYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBsb2d2KG9wdGlvbnMsJ0ZVTkNUSU9OIF9wcmVwYXJlRm9yQnVpbGQnKVxuICAgIGNvbnN0IHJpbXJhZiA9IHJlcXVpcmUoJ3JpbXJhZicpXG4gICAgY29uc3QgbWtkaXJwID0gcmVxdWlyZSgnbWtkaXJwJylcbiAgICBjb25zdCBmc3ggPSByZXF1aXJlKCdmcy1leHRyYScpXG4gICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4gICAgdmFyIHBhY2thZ2VzID0gb3B0aW9ucy5wYWNrYWdlc1xuICAgIHZhciB0b29sa2l0ID0gb3B0aW9ucy50b29sa2l0XG4gICAgdmFyIHRoZW1lID0gb3B0aW9ucy50aGVtZVxuXG4gICAgdGhlbWUgPSB0aGVtZSB8fCAodG9vbGtpdCA9PT0gJ2NsYXNzaWMnID8gJ3RoZW1lLXRyaXRvbicgOiAndGhlbWUtbWF0ZXJpYWwnKVxuICAgIGxvZ3Yob3B0aW9ucywnZmlyc3RUaW1lOiAnICsgdmFycy5maXJzdFRpbWUpXG4gICAgaWYgKHZhcnMuZmlyc3RUaW1lKSB7XG4gICAgICByaW1yYWYuc3luYyhvdXRwdXQpXG4gICAgICBta2RpcnAuc3luYyhvdXRwdXQpXG4gICAgICBjb25zdCBidWlsZFhNTCA9IHJlcXVpcmUoJy4vYXJ0aWZhY3RzJykuYnVpbGRYTUxcbiAgICAgIGNvbnN0IGNyZWF0ZUFwcEpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUFwcEpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZVdvcmtzcGFjZUpzb24gPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZVdvcmtzcGFjZUpzb25cbiAgICAgIGNvbnN0IGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL2FydGlmYWN0cycpLmNyZWF0ZUpTRE9NRW52aXJvbm1lbnRcblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYnVpbGQueG1sJyksIGJ1aWxkWE1MKHZhcnMucHJvZHVjdGlvbiwgb3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnYXBwLmpzb24nKSwgY3JlYXRlQXBwSnNvbih0aGVtZSwgcGFja2FnZXMsIHRvb2xraXQsIG9wdGlvbnMsIG91dHB1dCksICd1dGY4JylcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKG91dHB1dCwgJ2pzZG9tLWVudmlyb25tZW50LmpzJyksIGNyZWF0ZUpTRE9NRW52aXJvbm1lbnQob3B0aW9ucywgb3V0cHV0KSwgJ3V0ZjgnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ob3V0cHV0LCAnd29ya3NwYWNlLmpzb24nKSwgY3JlYXRlV29ya3NwYWNlSnNvbihvcHRpb25zLCBvdXRwdXQpLCAndXRmOCcpXG5cbiAgICAgIGlmICh2YXJzLmZyYW1ld29yayA9PSAnYW5ndWxhcicpIHtcblxuICAgICAgICAvL2JlY2F1c2Ugb2YgYSBwcm9ibGVtIHdpdGggY29sb3JwaWNrZXJcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3V4LycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgKHV4KSAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ2V4dC1hbmd1bGFyL3BhY2thZ2VzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LWFuZ3VsYXIvb3ZlcnJpZGVzLycpKSkge1xuICAgICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZXh0LWFuZ3VsYXIvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dClcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHZhcnMuZnJhbWV3b3JrID09ICdyZWFjdCcpICB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdleHQtcmVhY3QvcGFja2FnZXMvJykpKSB7XG4gICAgICAgICAgdmFyIGZyb21QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdleHQtcmVhY3QvcGFja2FnZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ3BhY2thZ2VzJylcbiAgICAgICAgICBmc3guY29weVN5bmMoZnJvbVBhdGgsIHRvUGF0aClcbiAgICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnZXh0LXJlYWN0L292ZXJyaWRlcy8nKSkpIHtcbiAgICAgICAgICB2YXIgZnJvbVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2V4dC1yZWFjdC9vdmVycmlkZXMvJylcbiAgICAgICAgICB2YXIgdG9QYXRoID0gcGF0aC5qb2luKG91dHB1dCwgJ292ZXJyaWRlcycpXG4gICAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgICAgbG9nKGFwcCArICdDb3B5aW5nICcgKyBmcm9tUGF0aC5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1BhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3Jlc291cmNlcy8nKSkpIHtcbiAgICAgICAgdmFyIGZyb21SZXNvdXJjZXMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Jlc291cmNlcy8nKVxuICAgICAgICB2YXIgdG9SZXNvdXJjZXMgPSBwYXRoLmpvaW4ob3V0cHV0LCAnLi4vcmVzb3VyY2VzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21SZXNvdXJjZXMsIHRvUmVzb3VyY2VzKVxuICAgICAgICBsb2coYXBwICsgJ0NvcHlpbmcgJyArIGZyb21SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9SZXNvdXJjZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdyZXNvdXJjZXMvJykpKSB7XG4gICAgICAvLyAgIHZhciBmcm9tUmVzb3VyY2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdyZXNvdXJjZXMvJylcbiAgICAgIC8vICAgdmFyIHRvUmVzb3VyY2VzID0gcGF0aC5qb2luKG91dHB1dCwgJ3Jlc291cmNlcycpXG4gICAgICAvLyAgIGZzeC5jb3B5U3luYyhmcm9tUmVzb3VyY2VzLCB0b1Jlc291cmNlcylcbiAgICAgIC8vICAgbG9nKGFwcCArICc2Q29weWluZyAnICsgZnJvbVJlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSArICcgdG86ICcgKyB0b1Jlc291cmNlcy5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKSlcbiAgICAgIC8vIH1cbiAgICAgIFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksJ3BhY2thZ2VzLycpKSkge1xuICAgICAgICB2YXIgZnJvbVBhY2thZ2VzID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwYWNrYWdlcy8nKVxuICAgICAgICB2YXIgdG9QYWNrYWdlcyA9IHBhdGguam9pbihvdXRwdXQsICdwYWNrYWdlcycpXG4gICAgICAgIGZzeC5jb3B5U3luYyhmcm9tUGFja2FnZXMsIHRvUGFja2FnZXMpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhY2thZ2VzLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpICsgJyB0bzogJyArIHRvUGFja2FnZXMucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdvdmVycmlkZXMvJykpKSB7XG4gICAgICAgIHZhciBmcm9tUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnb3ZlcnJpZGVzLycpXG4gICAgICAgIHZhciB0b1BhdGggPSBwYXRoLmpvaW4ob3V0cHV0LCAnb3ZlcnJpZGVzJylcbiAgICAgICAgZnN4LmNvcHlTeW5jKGZyb21QYXRoLCB0b1BhdGgpXG4gICAgICAgIGxvZyhhcHAgKyAnQ29weWluZyAnICsgZnJvbVBhdGgucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJykgKyAnIHRvOiAnICsgdG9QYXRoLnJlcGxhY2UocHJvY2Vzcy5jd2QoKSwgJycpKVxuICAgICAgfVxuXG4gICAgfVxuICAgIHZhcnMuZmlyc3RUaW1lID0gZmFsc2VcbiAgICB2YXIganMgPSAnJ1xuICAgIGlmICh2YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgIGlmICghdmFycy5kZXBzLmluY2x1ZGVzKCdFeHQucmVxdWlyZShcIkV4dC5sYXlvdXQuKlwiKTtcXG4nKSlcbiAgICAgICAgdmFycy5kZXBzLnB1c2goJ0V4dC5yZXF1aXJlKFwiRXh0LmxheW91dC4qXCIpO1xcbicpXG4gICAgICBqcyA9IHZhcnMuZGVwcy5qb2luKCc7XFxuJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAganMgPSAnRXh0LnJlcXVpcmUoXCJFeHQuKlwiKSdcbiAgICB9XG4gICAgaWYgKHZhcnMubWFuaWZlc3QgPT09IG51bGwgfHwganMgIT09IHZhcnMubWFuaWZlc3QpIHtcbiAgICAgIHZhcnMubWFuaWZlc3QgPSBqc1xuICAgICAgY29uc3QgbWFuaWZlc3QgPSBwYXRoLmpvaW4ob3V0cHV0LCAnbWFuaWZlc3QuanMnKVxuICAgICAgZnMud3JpdGVGaWxlU3luYyhtYW5pZmVzdCwganMsICd1dGY4JylcbiAgICAgIHZhcnMucmVidWlsZCA9IHRydWVcbiAgICAgIHZhciBidW5kbGVEaXIgPSBvdXRwdXQucmVwbGFjZShwcm9jZXNzLmN3ZCgpLCAnJylcbiAgICAgIGlmIChidW5kbGVEaXIudHJpbSgpID09ICcnKSB7YnVuZGxlRGlyID0gJy4vJ31cbiAgICAgIGxvZyhhcHAgKyAnQnVpbGRpbmcgRXh0IGJ1bmRsZSBhdDogJyArIGJ1bmRsZURpcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXJzLnJlYnVpbGQgPSBmYWxzZVxuICAgICAgbG9nKGFwcCArICdFeHQgcmVidWlsZCBOT1QgbmVlZGVkJylcbiAgICB9XG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfcHJlcGFyZUZvckJ1aWxkOiAnICsgZSlcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBmdW5jdGlvbiBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gX2J1aWxkRXh0QnVuZGxlJylcblxuICAgIGxldCBzZW5jaGE7IHRyeSB7IHNlbmNoYSA9IHJlcXVpcmUoJ0BzZW5jaGEvY21kJykgfSBjYXRjaCAoZSkgeyBzZW5jaGEgPSAnc2VuY2hhJyB9XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoc2VuY2hhKSkge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIGV4aXN0cycpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9ndihvcHRpb25zLCdzZW5jaGEgZm9sZGVyIERPRVMgTk9UIGV4aXN0JylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb25CdWlsZERvbmUgPSAoKSA9PiB7XG4gICAgICAgIGxvZ3Yob3B0aW9ucywnb25CdWlsZERvbmUnKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdHMgPSB7IGN3ZDogb3V0cHV0UGF0aCwgc2lsZW50OiB0cnVlLCBzdGRpbzogJ3BpcGUnLCBlbmNvZGluZzogJ3V0Zi04J31cbiAgICAgIGV4ZWN1dGVBc3luYyhhcHAsIHNlbmNoYSwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKS50aGVuIChcbiAgICAgICAgZnVuY3Rpb24oKSB7IG9uQnVpbGREb25lKCkgfSwgXG4gICAgICAgIGZ1bmN0aW9uKHJlYXNvbikgeyByZWplY3QocmVhc29uKSB9XG4gICAgICApXG4gICAgfSlcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coJ2UnKVxuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdfYnVpbGRFeHRCdW5kbGU6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG4vLyoqKioqKioqKipcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlQXN5bmMgKGFwcCwgY29tbWFuZCwgcGFybXMsIG9wdHMsIGNvbXBpbGF0aW9uLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgLy9jb25zdCBERUZBVUxUX1NVQlNUUlMgPSBbJ1tJTkZdIExvYWRpbmcnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbTE9HXSBGYXNoaW9uIGJ1aWxkIGNvbXBsZXRlJywgJ1tFUlJdJywgJ1tXUk5dJywgXCJbSU5GXSBTZXJ2ZXJcIiwgXCJbSU5GXSBXcml0aW5nXCIsIFwiW0lORl0gTG9hZGluZyBCdWlsZFwiLCBcIltJTkZdIFdhaXRpbmdcIiwgXCJbTE9HXSBGYXNoaW9uIHdhaXRpbmdcIl07XG4gICAgY29uc3QgREVGQVVMVF9TVUJTVFJTID0gW1wiW0lORl0geFNlcnZlclwiLCAnW0lORl0gTG9hZGluZycsICdbSU5GXSBBcHBlbmQnLCAnW0lORl0gUHJvY2Vzc2luZycsICdbSU5GXSBQcm9jZXNzaW5nIEJ1aWxkJywgJ1tMT0ddIEZhc2hpb24gYnVpbGQgY29tcGxldGUnLCAnW0VSUl0nLCAnW1dSTl0nLCBcIltJTkZdIFdyaXRpbmdcIiwgXCJbSU5GXSBMb2FkaW5nIEJ1aWxkXCIsIFwiW0lORl0gV2FpdGluZ1wiLCBcIltMT0ddIEZhc2hpb24gd2FpdGluZ1wiXTtcbiAgICB2YXIgc3Vic3RyaW5ncyA9IERFRkFVTFRfU1VCU1RSUyBcbiAgICB2YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG4gICAgY29uc3QgY3Jvc3NTcGF3biA9IHJlcXVpcmUoJ2Nyb3NzLXNwYXduJylcbiAgICBjb25zdCBsb2cgPSByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2dcbiAgICBsb2d2KG9wdGlvbnMsICdGVU5DVElPTiBleGVjdXRlQXN5bmMnKVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxvZ3Yob3B0aW9ucyxgY29tbWFuZCAtICR7Y29tbWFuZH1gKVxuICAgICAgbG9ndihvcHRpb25zLCBgcGFybXMgLSAke3Bhcm1zfWApXG4gICAgICBsb2d2KG9wdGlvbnMsIGBvcHRzIC0gJHtKU09OLnN0cmluZ2lmeShvcHRzKX1gKVxuICAgICAgbGV0IGNoaWxkID0gY3Jvc3NTcGF3bihjb21tYW5kLCBwYXJtcywgb3B0cylcbiAgICAgIGNoaWxkLm9uKCdjbG9zZScsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgb24gY2xvc2U6IGAgKyBjb2RlKSBcbiAgICAgICAgaWYoY29kZSA9PT0gMCkgeyByZXNvbHZlKDApIH1cbiAgICAgICAgZWxzZSB7IGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCBuZXcgRXJyb3IoY29kZSkgKTsgcmVzb2x2ZSgwKSB9XG4gICAgICB9KVxuICAgICAgY2hpbGQub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7IFxuICAgICAgICBsb2d2KG9wdGlvbnMsIGBvbiBlcnJvcmApIFxuICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChlcnJvcilcbiAgICAgICAgcmVzb2x2ZSgwKVxuICAgICAgfSlcbiAgICAgIGNoaWxkLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBzdHIgPSBkYXRhLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgXCIgXCIpLnRyaW0oKVxuICAgICAgICBsb2d2KG9wdGlvbnMsIGAke3N0cn1gKVxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKCkubWF0Y2goL3dhaXRpbmcgZm9yIGNoYW5nZXNcXC5cXC5cXC4vKSkge1xuICAgICAgICAgIHJlc29sdmUoMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoc3Vic3RyaW5ncy5zb21lKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIGRhdGEuaW5kZXhPZih2KSA+PSAwOyB9KSkgeyBcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0lORl1cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0xPR11cIiwgXCJcIilcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHByb2Nlc3MuY3dkKCksICcnKS50cmltKClcbiAgICAgICAgICAgIGlmIChzdHIuaW5jbHVkZXMoXCJbRVJSXVwiKSkge1xuICAgICAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaChhcHAgKyBzdHIucmVwbGFjZSgvXlxcW0VSUlxcXSAvZ2ksICcnKSk7XG4gICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKFwiW0VSUl1cIiwgYCR7Y2hhbGsucmVkKFwiW0VSUl1cIil9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZyhgJHthcHB9JHtzdHJ9YCkgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY2hpbGQuc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgbG9ndihvcHRpb25zLCBgZXJyb3Igb24gY2xvc2U6IGAgKyBkYXRhKSBcbiAgICAgICAgdmFyIHN0ciA9IGRhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCBcIiBcIikudHJpbSgpXG4gICAgICAgIHZhciBzdHJKYXZhT3B0cyA9IFwiUGlja2VkIHVwIF9KQVZBX09QVElPTlNcIjtcbiAgICAgICAgdmFyIGluY2x1ZGVzID0gc3RyLmluY2x1ZGVzKHN0ckphdmFPcHRzKVxuICAgICAgICBpZiAoIWluY2x1ZGVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7YXBwfSAke2NoYWxrLnJlZChcIltFUlJdXCIpfSAke3N0cn1gKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgY2F0Y2goZSkge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3Yob3B0aW9ucyxlKVxuICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCdleGVjdXRlQXN5bmM6ICcgKyBlKVxuICAgIGNhbGxiYWNrKClcbiAgfSBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhzKSB7XG4gIHJlcXVpcmUoJ3JlYWRsaW5lJykuY3Vyc29yVG8ocHJvY2Vzcy5zdGRvdXQsIDApXG4gIHRyeSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKClcbiAgfVxuICBjYXRjaChlKSB7fVxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShzKVxuICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ3Yob3B0aW9ucywgcykge1xuICBpZiAob3B0aW9ucy52ZXJib3NlID09ICd5ZXMnKSB7XG4gICAgcmVxdWlyZSgncmVhZGxpbmUnKS5jdXJzb3JUbyhwcm9jZXNzLnN0ZG91dCwgMClcbiAgICB0cnkge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKClcbiAgICB9XG4gICAgY2F0Y2goZSkge31cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShgLXZlcmJvc2U6ICR7c31gKVxuICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG4nKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0QXBwKCkge1xuICB2YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG4gIHZhciBwcmVmaXggPSBgYFxuICBjb25zdCBwbGF0Zm9ybSA9IHJlcXVpcmUoJ29zJykucGxhdGZvcm0oKVxuICBpZiAocGxhdGZvcm0gPT0gJ2RhcndpbicpIHsgcHJlZml4ID0gYOKEuSDvvaJleHTvvaM6YCB9XG4gIGVsc2UgeyBwcmVmaXggPSBgaSBbZXh0XTpgIH1cbiAgcmV0dXJuIGAke2NoYWxrLmdyZWVuKHByZWZpeCl9IGBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRWZXJzaW9ucyhhcHAsIHBsdWdpbk5hbWUsIGZyYW1ld29ya05hbWUpIHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcblxuICB2YXIgdiA9IHt9XG4gIHZhciBwbHVnaW5QYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9Ac2VuY2hhJywgcGx1Z2luTmFtZSlcbiAgdmFyIHBsdWdpblBrZyA9IChmcy5leGlzdHNTeW5jKHBsdWdpblBhdGgrJy9wYWNrYWdlLmpzb24nKSAmJiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwbHVnaW5QYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi5wbHVnaW5WZXJzaW9uID0gcGx1Z2luUGtnLnZlcnNpb25cbiAgdi5fcmVzb2x2ZWQgPSBwbHVnaW5Qa2cuX3Jlc29sdmVkXG4gIGlmICh2Ll9yZXNvbHZlZCA9PSB1bmRlZmluZWQpIHtcbiAgICB2LmVkaXRpb24gPSBgQ29tbWVyY2lhbGBcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoLTEgPT0gdi5fcmVzb2x2ZWQuaW5kZXhPZignY29tbXVuaXR5JykpIHtcbiAgICAgIHYuZWRpdGlvbiA9IGBDb21tZXJjaWFsYFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYuZWRpdGlvbiA9IGBDb21tdW5pdHlgXG4gICAgfVxuICB9XG5cbiAgdmFyIHdlYnBhY2tQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy93ZWJwYWNrJylcbiAgdmFyIHdlYnBhY2tQa2cgPSAoZnMuZXhpc3RzU3luYyh3ZWJwYWNrUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHdlYnBhY2tQYXRoKycvcGFja2FnZS5qc29uJywgJ3V0Zi04JykpIHx8IHt9KTtcbiAgdi53ZWJwYWNrVmVyc2lvbiA9IHdlYnBhY2tQa2cudmVyc2lvblxuXG4gIHZhciBleHRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksJ25vZGVfbW9kdWxlcy9Ac2VuY2hhL2V4dCcpXG4gIHZhciBleHRQa2cgPSAoZnMuZXhpc3RzU3luYyhleHRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZXh0UGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYuZXh0VmVyc2lvbiA9IGV4dFBrZy5zZW5jaGEudmVyc2lvblxuXG4gIHZhciBjbWRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhL2NtZGApXG4gIHZhciBjbWRQa2cgPSAoZnMuZXhpc3RzU3luYyhjbWRQYXRoKycvcGFja2FnZS5qc29uJykgJiYgSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicsICd1dGYtOCcpKSB8fCB7fSk7XG4gIHYuY21kVmVyc2lvbiA9IGNtZFBrZy52ZXJzaW9uX2Z1bGxcblxuICBpZiAodi5jbWRWZXJzaW9uID09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjbWRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksYG5vZGVfbW9kdWxlcy9Ac2VuY2hhLyR7cGx1Z2luTmFtZX0vbm9kZV9tb2R1bGVzL0BzZW5jaGEvY21kYClcbiAgICB2YXIgY21kUGtnID0gKGZzLmV4aXN0c1N5bmMoY21kUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNtZFBhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICAgIHYuY21kVmVyc2lvbiA9IGNtZFBrZy52ZXJzaW9uX2Z1bGxcbiAgfVxuXG4gIHZhciBmcmFtZXdvcmtJbmZvID0gJydcbiAgIGlmIChmcmFtZXdvcmtOYW1lICE9IHVuZGVmaW5lZCAmJiBmcmFtZXdvcmtOYW1lICE9ICdleHRqcycpIHtcbiAgICB2YXIgZnJhbWV3b3JrUGF0aCA9ICcnXG4gICAgaWYgKGZyYW1ld29ya05hbWUgPT0gJ3JlYWN0Jykge1xuICAgICAgZnJhbWV3b3JrUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCdub2RlX21vZHVsZXMvcmVhY3QnKVxuICAgIH1cbiAgICBpZiAoZnJhbWV3b3JrTmFtZSA9PSAnYW5ndWxhcicpIHtcbiAgICAgIGZyYW1ld29ya1BhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUnKVxuICAgIH1cbiAgICB2YXIgZnJhbWV3b3JrUGtnID0gKGZzLmV4aXN0c1N5bmMoZnJhbWV3b3JrUGF0aCsnL3BhY2thZ2UuanNvbicpICYmIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZyYW1ld29ya1BhdGgrJy9wYWNrYWdlLmpzb24nLCAndXRmLTgnKSkgfHwge30pO1xuICAgIHYuZnJhbWV3b3JrVmVyc2lvbiA9IGZyYW1ld29ya1BrZy52ZXJzaW9uXG4gICAgZnJhbWV3b3JrSW5mbyA9ICcsICcgKyBmcmFtZXdvcmtOYW1lICsgJyB2JyArIHYuZnJhbWV3b3JrVmVyc2lvblxuICB9XG4gIHJldHVybiBhcHAgKyAnZXh0LXdlYnBhY2stcGx1Z2luIHYnICsgdi5wbHVnaW5WZXJzaW9uICsgJywgRXh0IEpTIHYnICsgdi5leHRWZXJzaW9uICsgJyAnICsgdi5lZGl0aW9uICsgJyBFZGl0aW9uLCBTZW5jaGEgQ21kIHYnICsgdi5jbWRWZXJzaW9uICsgJywgd2VicGFjayB2JyArIHYud2VicGFja1ZlcnNpb24gKyBmcmFtZXdvcmtJbmZvXG4gfSJdfQ==