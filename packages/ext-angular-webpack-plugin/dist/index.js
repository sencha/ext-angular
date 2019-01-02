'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require('@babel/polyfill');

class ExtWebpackPlugin {
  constructor(options) {
    this.plugin = require(`./pluginUtil`)._constructor(options); //     function callback() {
    //       return
    //     }
    // //    await _buildExtBundle(app, compilation, outputPath, parms, options)
    //     if (!this.plugin.vars.production) {
    //       console.log('2')
    //       require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback)
    //       console.log('3')
    //     }
    //     else {
    //       callback()
    //     }
  }

  apply(compiler) {
    require('./pluginUtil').logv(this.plugin.options, 'FUNCTION apply');

    if (compiler.hooks) {
      compiler.hooks.thisCompilation.tap(`ext-this-compilation`, compilation => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK thisCompilation');

        if (this.plugin.vars.pluginErrors.length > 0) {
          compilation.errors.push(new Error(this.plugin.vars.pluginErrors.join("")));
        } else {//this.plugin.vars.deps = []
        }
      });

      if (this.plugin.vars.pluginErrors.length > 0) {
        return;
      } // compiler.hooks.beforeRun.tapAsync(`ext-before-run`, (compilation, callback) => {
      //   require('./pluginUtil').log(this.plugin.options,'HOOK beforeRun')
      //   callback()
      // })


      const path = require('path');

      var jsPath = path.join(compiler.options.output.path, this.plugin.vars.extPath, 'ext.js');

      const fs = require('fs');

      var itExists = fs.existsSync(jsPath);

      if (!itExists && !this.plugin.vars.production) {
        compiler.hooks.beforeCompile.tapAsync(`ext-before-compile`, (compilation, callback) => {
          require('./pluginUtil').logv(this.plugin.options, 'HOOK beforeCompile'); //compilation.errors = []


          require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback);
        });
      } else {
        require('./pluginUtil').log(this.plugin.vars.app + 'Using existing build at: ' + jsPath);
      }

      if (this.plugin.vars.framework == 'extjs') {
        compiler.hooks.afterCompile.tap('ext-after-compile', compilation => {
          require('./pluginUtil').logv(this.plugin.options, 'HOOK afterCompile');

          require(`./extjsUtil`)._afterCompile(compilation, this.plugin.vars, this.plugin.options);
        });
      } else {
        compiler.hooks.compilation.tap(`ext-compilation`, compilation => {
          require('./pluginUtil').logv(this.plugin.options, 'HOOK compilation');

          if (this.plugin.vars.production) {
            require(`./pluginUtil`)._compilation(compiler, compilation, this.plugin.vars, this.plugin.options);
          }
        });
      }

      compiler.hooks.emit.tapAsync(`ext-emit`, (compilation, callback) => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK emit');

        if (this.plugin.vars.production) {
          require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback);
        } else {
          callback();
        }
      });
      compiler.hooks.done.tap(`ext-done`, () => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK done');

        try {
          if (this.plugin.options.browser == true && this.plugin.options.watch == 'yes') {
            if (this.plugin.vars.browserCount == 0) {
              //if (this.plugin.vars.browserCount == 0 && compilation.errors.length == 0) {
              var url = 'http://localhost:' + this.plugin.options.port;

              require('./pluginUtil').log(this.plugin.vars.app + `Opening browser at ${url}`);

              this.plugin.vars.browserCount++;

              const opn = require('opn');

              opn(url);
            }
          }
        } catch (e) {
          console.log(e);
        }

        require('./pluginUtil').log(this.plugin.vars.app + `Completed ext-webpack-plugin processing`);
      });
    } else {
      console.log('not webpack 4');
    }
  }

}

exports.default = ExtWebpackPlugin;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRXh0V2VicGFja1BsdWdpbiIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBsdWdpbiIsIl9jb25zdHJ1Y3RvciIsImFwcGx5IiwiY29tcGlsZXIiLCJsb2d2IiwiaG9va3MiLCJ0aGlzQ29tcGlsYXRpb24iLCJ0YXAiLCJjb21waWxhdGlvbiIsInZhcnMiLCJwbHVnaW5FcnJvcnMiLCJsZW5ndGgiLCJlcnJvcnMiLCJwdXNoIiwiRXJyb3IiLCJqb2luIiwicGF0aCIsImpzUGF0aCIsIm91dHB1dCIsImV4dFBhdGgiLCJmcyIsIml0RXhpc3RzIiwiZXhpc3RzU3luYyIsInByb2R1Y3Rpb24iLCJiZWZvcmVDb21waWxlIiwidGFwQXN5bmMiLCJjYWxsYmFjayIsImVtaXQiLCJsb2ciLCJhcHAiLCJmcmFtZXdvcmsiLCJhZnRlckNvbXBpbGUiLCJfYWZ0ZXJDb21waWxlIiwiX2NvbXBpbGF0aW9uIiwiZG9uZSIsImJyb3dzZXIiLCJ3YXRjaCIsImJyb3dzZXJDb3VudCIsInVybCIsInBvcnQiLCJvcG4iLCJlIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFDQUEsT0FBTyxDQUFDLGlCQUFELENBQVA7O0FBRWUsTUFBTUMsZ0JBQU4sQ0FBdUI7QUFDcENDLEVBQUFBLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVO0FBQ25CLFNBQUtDLE1BQUwsR0FBY0osT0FBTyxDQUFFLGNBQUYsQ0FBUCxDQUF3QkssWUFBeEIsQ0FBcUNGLE9BQXJDLENBQWQsQ0FEbUIsQ0FHdkI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0c7O0FBQ0RHLEVBQUFBLEtBQUssQ0FBQ0MsUUFBRCxFQUFXO0FBQ2RQLElBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsZ0JB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dGVudCI6WyIndXNlIHN0cmljdCdcbnJlcXVpcmUoJ0BiYWJlbC9wb2x5ZmlsbCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dFdlYnBhY2tQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5wbHVnaW4gPSByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5fY29uc3RydWN0b3Iob3B0aW9ucylcblxuLy8gICAgIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuLy8gICAgICAgcmV0dXJuXG4vLyAgICAgfVxuXG4vLyAvLyAgICBhd2FpdCBfYnVpbGRFeHRCdW5kbGUoYXBwLCBjb21waWxhdGlvbiwgb3V0cHV0UGF0aCwgcGFybXMsIG9wdGlvbnMpXG4vLyAgICAgaWYgKCF0aGlzLnBsdWdpbi52YXJzLnByb2R1Y3Rpb24pIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCcyJylcbi8vICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLmVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zLCBjYWxsYmFjaylcbi8vICAgICAgIGNvbnNvbGUubG9nKCczJylcbi8vICAgICB9XG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICBjYWxsYmFjaygpXG4vLyAgICAgfVxuXG5cbiAgfVxuICBhcHBseShjb21waWxlcikge1xuICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnRlVOQ1RJT04gYXBwbHknKVxuICAgIGlmIChjb21waWxlci5ob29rcykge1xuXG4gICAgICBjb21waWxlci5ob29rcy50aGlzQ29tcGlsYXRpb24udGFwKGBleHQtdGhpcy1jb21waWxhdGlvbmAsIChjb21waWxhdGlvbikgPT4ge1xuICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgdGhpc0NvbXBpbGF0aW9uJylcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnZhcnMucGx1Z2luRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCggbmV3IEVycm9yKHRoaXMucGx1Z2luLnZhcnMucGx1Z2luRXJyb3JzLmpvaW4oXCJcIikpIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL3RoaXMucGx1Z2luLnZhcnMuZGVwcyA9IFtdXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLnBsdWdpbi52YXJzLnBsdWdpbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBjb21waWxlci5ob29rcy5iZWZvcmVSdW4udGFwQXN5bmMoYGV4dC1iZWZvcmUtcnVuYCwgKGNvbXBpbGF0aW9uLCBjYWxsYmFjaykgPT4ge1xuICAgICAgLy8gICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2codGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBiZWZvcmVSdW4nKVxuICAgICAgLy8gICBjYWxsYmFjaygpXG4gICAgICAvLyB9KVxuXG4gICAgICBjb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG4gICAgICB2YXIganNQYXRoID0gcGF0aC5qb2luKGNvbXBpbGVyLm9wdGlvbnMub3V0cHV0LnBhdGgsIHRoaXMucGx1Z2luLnZhcnMuZXh0UGF0aCwgJ2V4dC5qcycpXG4gICAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICAgIHZhciBpdEV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoanNQYXRoKVxuXG4gICAgICBpZighaXRFeGlzdHMgJiYgIXRoaXMucGx1Z2luLnZhcnMucHJvZHVjdGlvbikge1xuICAgICAgICBjb21waWxlci5ob29rcy5iZWZvcmVDb21waWxlLnRhcEFzeW5jKGBleHQtYmVmb3JlLWNvbXBpbGVgLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGJlZm9yZUNvbXBpbGUnKVxuICAgICAgICAgIC8vY29tcGlsYXRpb24uZXJyb3JzID0gW11cbiAgICAgICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5lbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdGhpcy5wbHVnaW4udmFycywgdGhpcy5wbHVnaW4ub3B0aW9ucywgY2FsbGJhY2spXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLnZhcnMuYXBwICsgJ1VzaW5nIGV4aXN0aW5nIGJ1aWxkIGF0OiAnICsganNQYXRoKVxuICAgICAgfVxuXG4gICAgICBpZiAoIHRoaXMucGx1Z2luLnZhcnMuZnJhbWV3b3JrID09ICdleHRqcycpIHtcbiAgICAgICAgY29tcGlsZXIuaG9va3MuYWZ0ZXJDb21waWxlLnRhcCgnZXh0LWFmdGVyLWNvbXBpbGUnLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgYWZ0ZXJDb21waWxlJylcbiAgICAgICAgICByZXF1aXJlKGAuL2V4dGpzVXRpbGApLl9hZnRlckNvbXBpbGUoY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tcGlsZXIuaG9va3MuY29tcGlsYXRpb24udGFwKGBleHQtY29tcGlsYXRpb25gLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgY29tcGlsYXRpb24nKVxuICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi52YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLl9jb21waWxhdGlvbihjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb21waWxlci5ob29rcy5lbWl0LnRhcEFzeW5jKGBleHQtZW1pdGAsIChjb21waWxhdGlvbiwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGVtaXQnKVxuICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29tcGlsZXIuaG9va3MuZG9uZS50YXAoYGV4dC1kb25lYCwgKCkgPT4ge1xuICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgZG9uZScpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZih0aGlzLnBsdWdpbi5vcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSAmJiB0aGlzLnBsdWdpbi5vcHRpb25zLndhdGNoID09ICd5ZXMnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCkge1xuICAgICAgICAgICAgLy9pZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBjb21waWxhdGlvbi5lcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyB0aGlzLnBsdWdpbi5vcHRpb25zLnBvcnRcbiAgICAgICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLnZhcnMuYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi52YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAgICAgICAgIGNvbnN0IG9wbiA9IHJlcXVpcmUoJ29wbicpXG4gICAgICAgICAgICAgIG9wbih1cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG5cblxuICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2codGhpcy5wbHVnaW4udmFycy5hcHAgKyBgQ29tcGxldGVkIGV4dC13ZWJwYWNrLXBsdWdpbiBwcm9jZXNzaW5nYClcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgZWxzZSB7Y29uc29sZS5sb2coJ25vdCB3ZWJwYWNrIDQnKX1cbiAgfVxufVxuIl19