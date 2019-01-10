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

      if (!itExists && !this.plugin.vars.production && this.plugin.vars.framework != 'extjs') {
        compiler.hooks.beforeCompile.tapAsync(`ext-before-compile`, (compilation, callback) => {
          require('./pluginUtil').logv(this.plugin.options, 'HOOK beforeCompile');

          compilation.errors = [];

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
          if (this.plugin.options.browser == true && this.plugin.options.watch == 'yes' && this.plugin.vars.production == false) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRXh0V2VicGFja1BsdWdpbiIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBsdWdpbiIsIl9jb25zdHJ1Y3RvciIsImFwcGx5IiwiY29tcGlsZXIiLCJsb2d2IiwiaG9va3MiLCJ0aGlzQ29tcGlsYXRpb24iLCJ0YXAiLCJjb21waWxhdGlvbiIsInZhcnMiLCJwbHVnaW5FcnJvcnMiLCJsZW5ndGgiLCJlcnJvcnMiLCJwdXNoIiwiRXJyb3IiLCJqb2luIiwicGF0aCIsImpzUGF0aCIsIm91dHB1dCIsImV4dFBhdGgiLCJmcyIsIml0RXhpc3RzIiwiZXhpc3RzU3luYyIsInByb2R1Y3Rpb24iLCJmcmFtZXdvcmsiLCJiZWZvcmVDb21waWxlIiwidGFwQXN5bmMiLCJjYWxsYmFjayIsImVtaXQiLCJsb2ciLCJhcHAiLCJhZnRlckNvbXBpbGUiLCJfYWZ0ZXJDb21waWxlIiwiX2NvbXBpbGF0aW9uIiwiZG9uZSIsImJyb3dzZXIiLCJ3YXRjaCIsImJyb3dzZXJDb3VudCIsInVybCIsInBvcnQiLCJvcG4iLCJlIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFDQUEsT0FBTyxDQUFDLGlCQUFELENBQVA7O0FBRWUsTUFBTUMsZ0JBQU4sQ0FBdUI7QUFDcENDLEVBQUFBLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVO0FBQ25CLFNBQUtDLE1BQUwsR0FBY0osT0FBTyxDQUFFLGNBQUYsQ0FBUCxDQUF3QkssWUFBeEIsQ0FBcUNGLE9BQXJDLENBQWQsQ0FEbUIsQ0FHdkI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0c7O0FBQ0RHLEVBQUFBLEtBQUssQ0FBQ0MsUUFBRCxFQUFXO0FBQ2RQLElBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsZ0JB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QUFZUyxJQUFaLENBQWlCcUIsR0FBakIsR0FBd0IseUNBQXBEO0FBQ0QsT0ExQkQ7QUE0QkQsS0ExRkQsTUEyRks7QUFBQ1ksTUFBQUEsT0FBTyxDQUFDYixHQUFSLENBQVksZUFBWjtBQUE2QjtBQUNwQzs7QUFsSG1DIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5yZXF1aXJlKCdAYmFiZWwvcG9seWZpbGwnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRXZWJwYWNrUGx1Z2luIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMucGx1Z2luID0gcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuX2NvbnN0cnVjdG9yKG9wdGlvbnMpXG5cbi8vICAgICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbi8vICAgICAgIHJldHVyblxuLy8gICAgIH1cblxuLy8gLy8gICAgYXdhaXQgX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKVxuLy8gICAgIGlmICghdGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnMicpXG4vLyAgICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5lbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdGhpcy5wbHVnaW4udmFycywgdGhpcy5wbHVnaW4ub3B0aW9ucywgY2FsbGJhY2spXG4vLyAgICAgICBjb25zb2xlLmxvZygnMycpXG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgY2FsbGJhY2soKVxuLy8gICAgIH1cblxuXG4gIH1cbiAgYXBwbHkoY29tcGlsZXIpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0ZVTkNUSU9OIGFwcGx5JylcbiAgICBpZiAoY29tcGlsZXIuaG9va3MpIHtcblxuICAgICAgY29tcGlsZXIuaG9va3MudGhpc0NvbXBpbGF0aW9uLnRhcChgZXh0LXRoaXMtY29tcGlsYXRpb25gLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIHRoaXNDb21waWxhdGlvbicpXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi52YXJzLnBsdWdpbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcih0aGlzLnBsdWdpbi52YXJzLnBsdWdpbkVycm9ycy5qb2luKFwiXCIpKSApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy90aGlzLnBsdWdpbi52YXJzLmRlcHMgPSBbXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5wbHVnaW5FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gY29tcGlsZXIuaG9va3MuYmVmb3JlUnVuLnRhcEFzeW5jKGBleHQtYmVmb3JlLXJ1bmAsIChjb21waWxhdGlvbiwgY2FsbGJhY2spID0+IHtcbiAgICAgIC8vICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgYmVmb3JlUnVuJylcbiAgICAgIC8vICAgY2FsbGJhY2soKVxuICAgICAgLy8gfSlcblxuICAgICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgICAgdmFyIGpzUGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLm91dHB1dC5wYXRoLCB0aGlzLnBsdWdpbi52YXJzLmV4dFBhdGgsICdleHQuanMnKVxuICAgICAgY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgICB2YXIgaXRFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGpzUGF0aClcblxuICAgICAgaWYoIWl0RXhpc3RzICYmICF0aGlzLnBsdWdpbi52YXJzLnByb2R1Y3Rpb24gJiYgdGhpcy5wbHVnaW4udmFycy5mcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgICBjb21waWxlci5ob29rcy5iZWZvcmVDb21waWxlLnRhcEFzeW5jKGBleHQtYmVmb3JlLWNvbXBpbGVgLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGJlZm9yZUNvbXBpbGUnKVxuICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycyA9IFtdXG4gICAgICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZyh0aGlzLnBsdWdpbi52YXJzLmFwcCArICdVc2luZyBleGlzdGluZyBidWlsZCBhdDogJyArIGpzUGF0aClcbiAgICAgIH1cblxuICAgICAgaWYgKCB0aGlzLnBsdWdpbi52YXJzLmZyYW1ld29yayA9PSAnZXh0anMnKSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmFmdGVyQ29tcGlsZS50YXAoJ2V4dC1hZnRlci1jb21waWxlJywgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGFmdGVyQ29tcGlsZScpXG4gICAgICAgICAgcmVxdWlyZShgLi9leHRqc1V0aWxgKS5fYWZ0ZXJDb21waWxlKGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmNvbXBpbGF0aW9uLnRhcChgZXh0LWNvbXBpbGF0aW9uYCwgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGNvbXBpbGF0aW9uJylcbiAgICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5fY29tcGlsYXRpb24oY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29tcGlsZXIuaG9va3MuZW1pdC50YXBBc3luYyhgZXh0LWVtaXRgLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBlbWl0JylcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnZhcnMucHJvZHVjdGlvbikge1xuICAgICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLmVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zLCBjYWxsYmFjaylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbXBpbGVyLmhvb2tzLmRvbmUudGFwKGBleHQtZG9uZWAsICgpID0+IHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGRvbmUnKVxuXG5cblxuICAgICAgICBcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmKHRoaXMucGx1Z2luLm9wdGlvbnMuYnJvd3NlciA9PSB0cnVlICYmIHRoaXMucGx1Z2luLm9wdGlvbnMud2F0Y2ggPT0gJ3llcycgJiYgdGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCkge1xuICAgICAgICAgICAgLy9pZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBjb21waWxhdGlvbi5lcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyB0aGlzLnBsdWdpbi5vcHRpb25zLnBvcnRcbiAgICAgICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLnZhcnMuYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi52YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAgICAgICAgIGNvbnN0IG9wbiA9IHJlcXVpcmUoJ29wbicpXG4gICAgICAgICAgICAgIG9wbih1cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG5cblxuICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2codGhpcy5wbHVnaW4udmFycy5hcHAgKyBgQ29tcGxldGVkIGV4dC13ZWJwYWNrLXBsdWdpbiBwcm9jZXNzaW5nYClcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgZWxzZSB7Y29uc29sZS5sb2coJ25vdCB3ZWJwYWNrIDQnKX1cbiAgfVxufVxuIl19