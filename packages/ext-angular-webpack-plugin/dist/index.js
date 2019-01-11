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
      // const path = require('path')
      // var jsPath = path.join(compiler.options.output.path, this.plugin.vars.extPath, 'ext.js')
      // const fs = require('fs')
      // var itExists = fs.existsSync(jsPath)
      //if(!itExists && !this.plugin.vars.production && this.plugin.vars.framework != 'extjs') {
      //   compiler.hooks.beforeCompile.tapAsync(`ext-before-compile`, (compilation, callback) => {
      //     require('./pluginUtil').logv(this.plugin.options,'HOOK beforeCompile')
      //     compilation.errors = []
      //     require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback)
      //   })
      // }
      // else {
      //   require('./pluginUtil').log(this.plugin.vars.app + 'Using existing build at: ' + jsPath)
      // }


      if (this.plugin.vars.framework == 'extjs') {
        compiler.hooks.afterCompile.tap('ext-after-compile', compilation => {
          require('./pluginUtil').logv(this.plugin.options, 'HOOK afterCompile');

          require(`./extjsUtil`)._afterCompile(compilation, this.plugin.vars, this.plugin.options);
        });
      } else {
        compiler.hooks.compilation.tap(`ext-compilation`, compilation => {
          require('./pluginUtil').logv(this.plugin.options, 'HOOK compilation'); //          if (this.plugin.vars.production) {


          require(`./pluginUtil`)._compilation(compiler, compilation, this.plugin.vars, this.plugin.options); //          }

        });
      }

      compiler.hooks.emit.tapAsync(`ext-emit`, (compilation, callback) => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK emit'); //if (this.plugin.vars.production) {


        require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback); //}
        // else {
        //   callback()
        // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRXh0V2VicGFja1BsdWdpbiIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBsdWdpbiIsIl9jb25zdHJ1Y3RvciIsImFwcGx5IiwiY29tcGlsZXIiLCJsb2d2IiwiaG9va3MiLCJ0aGlzQ29tcGlsYXRpb24iLCJ0YXAiLCJjb21waWxhdGlvbiIsInZhcnMiLCJwbHVnaW5FcnJvcnMiLCJsZW5ndGgiLCJlcnJvcnMiLCJwdXNoIiwiRXJyb3IiLCJqb2luIiwiZnJhbWV3b3JrIiwiYWZ0ZXJDb21waWxlIiwiX2FmdGVyQ29tcGlsZSIsIl9jb21waWxhdGlvbiIsImVtaXQiLCJ0YXBBc3luYyIsImNhbGxiYWNrIiwiZG9uZSIsImJyb3dzZXIiLCJ3YXRjaCIsInByb2R1Y3Rpb24iLCJicm93c2VyQ291bnQiLCJ1cmwiLCJwb3J0IiwibG9nIiwiYXBwIiwib3BuIiwiZSIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBQ0FBLE9BQU8sQ0FBQyxpQkFBRCxDQUFQOztBQUVlLE1BQU1DLGdCQUFOLENBQXVCO0FBQ3BDQyxFQUFBQSxXQUFXLENBQUNDLE9BQUQsRUFBVTtBQUNuQixTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBRSxjQUFGLENBQVAsQ0FBd0JLLFlBQXhCLENBQXFDRixPQUFyQyxDQUFkLENBRG1CLENBR3ZCO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdHOztBQUNERyxFQUFBQSxLQUFLLENBQUNDLFFBQUQsRUFBVztBQUNkUCxJQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCUSxJQUF4QixDQUE2QixLQUFLSixNQUFMLENBQVlELE9BQXpDLEVBQWlELGdCQUFqRDs7QUFDQSxRQUFJSSxRQUFRLENBQUNFLEtBQWIsRUFBb0I7QUFFbEJGLE1BQUFBLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlQyxlQUFmLENB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ZSBzdHJpY3QnXG5yZXF1aXJlKCdAYmFiZWwvcG9seWZpbGwnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRXZWJwYWNrUGx1Z2luIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMucGx1Z2luID0gcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuX2NvbnN0cnVjdG9yKG9wdGlvbnMpXG5cbi8vICAgICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbi8vICAgICAgIHJldHVyblxuLy8gICAgIH1cblxuLy8gLy8gICAgYXdhaXQgX2J1aWxkRXh0QnVuZGxlKGFwcCwgY29tcGlsYXRpb24sIG91dHB1dFBhdGgsIHBhcm1zLCBvcHRpb25zKVxuLy8gICAgIGlmICghdGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnMicpXG4vLyAgICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5lbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdGhpcy5wbHVnaW4udmFycywgdGhpcy5wbHVnaW4ub3B0aW9ucywgY2FsbGJhY2spXG4vLyAgICAgICBjb25zb2xlLmxvZygnMycpXG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgY2FsbGJhY2soKVxuLy8gICAgIH1cblxuXG4gIH1cbiAgYXBwbHkoY29tcGlsZXIpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0ZVTkNUSU9OIGFwcGx5JylcbiAgICBpZiAoY29tcGlsZXIuaG9va3MpIHtcblxuICAgICAgY29tcGlsZXIuaG9va3MudGhpc0NvbXBpbGF0aW9uLnRhcChgZXh0LXRoaXMtY29tcGlsYXRpb25gLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIHRoaXNDb21waWxhdGlvbicpXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi52YXJzLnBsdWdpbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcih0aGlzLnBsdWdpbi52YXJzLnBsdWdpbkVycm9ycy5qb2luKFwiXCIpKSApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy90aGlzLnBsdWdpbi52YXJzLmRlcHMgPSBbXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5wbHVnaW5FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gY29tcGlsZXIuaG9va3MuYmVmb3JlUnVuLnRhcEFzeW5jKGBleHQtYmVmb3JlLXJ1bmAsIChjb21waWxhdGlvbiwgY2FsbGJhY2spID0+IHtcbiAgICAgIC8vICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgYmVmb3JlUnVuJylcbiAgICAgIC8vICAgY2FsbGJhY2soKVxuICAgICAgLy8gfSlcblxuICAgICAgLy8gY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuICAgICAgLy8gdmFyIGpzUGF0aCA9IHBhdGguam9pbihjb21waWxlci5vcHRpb25zLm91dHB1dC5wYXRoLCB0aGlzLnBsdWdpbi52YXJzLmV4dFBhdGgsICdleHQuanMnKVxuICAgICAgLy8gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4gICAgICAvLyB2YXIgaXRFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGpzUGF0aClcblxuICAgICAgLy9pZighaXRFeGlzdHMgJiYgIXRoaXMucGx1Z2luLnZhcnMucHJvZHVjdGlvbiAmJiB0aGlzLnBsdWdpbi52YXJzLmZyYW1ld29yayAhPSAnZXh0anMnKSB7XG4gICAgICAvLyAgIGNvbXBpbGVyLmhvb2tzLmJlZm9yZUNvbXBpbGUudGFwQXN5bmMoYGV4dC1iZWZvcmUtY29tcGlsZWAsIChjb21waWxhdGlvbiwgY2FsbGJhY2spID0+IHtcbiAgICAgIC8vICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgYmVmb3JlQ29tcGlsZScpXG4gICAgICAvLyAgICAgY29tcGlsYXRpb24uZXJyb3JzID0gW11cbiAgICAgIC8vICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5lbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdGhpcy5wbHVnaW4udmFycywgdGhpcy5wbHVnaW4ub3B0aW9ucywgY2FsbGJhY2spXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLnZhcnMuYXBwICsgJ1VzaW5nIGV4aXN0aW5nIGJ1aWxkIGF0OiAnICsganNQYXRoKVxuICAgICAgLy8gfVxuXG4gICAgICBpZiAoIHRoaXMucGx1Z2luLnZhcnMuZnJhbWV3b3JrID09ICdleHRqcycpIHtcbiAgICAgICAgY29tcGlsZXIuaG9va3MuYWZ0ZXJDb21waWxlLnRhcCgnZXh0LWFmdGVyLWNvbXBpbGUnLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgYWZ0ZXJDb21waWxlJylcbiAgICAgICAgICByZXF1aXJlKGAuL2V4dGpzVXRpbGApLl9hZnRlckNvbXBpbGUoY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tcGlsZXIuaG9va3MuY29tcGlsYXRpb24udGFwKGBleHQtY29tcGlsYXRpb25gLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0hPT0sgY29tcGlsYXRpb24nKVxuLy8gICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnZhcnMucHJvZHVjdGlvbikge1xuICAgICAgICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdGhpcy5wbHVnaW4udmFycywgdGhpcy5wbHVnaW4ub3B0aW9ucylcbi8vICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29tcGlsZXIuaG9va3MuZW1pdC50YXBBc3luYyhgZXh0LWVtaXRgLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBlbWl0JylcbiAgICAgICAgLy9pZiAodGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICAvL31cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgY2FsbGJhY2soKVxuICAgICAgICAvLyB9XG4gICAgICB9KVxuXG4gICAgICBjb21waWxlci5ob29rcy5kb25lLnRhcChgZXh0LWRvbmVgLCAoKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBkb25lJylcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmKHRoaXMucGx1Z2luLm9wdGlvbnMuYnJvd3NlciA9PSB0cnVlICYmIHRoaXMucGx1Z2luLm9wdGlvbnMud2F0Y2ggPT0gJ3llcycgJiYgdGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCkge1xuICAgICAgICAgICAgLy9pZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBjb21waWxhdGlvbi5lcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyB0aGlzLnBsdWdpbi5vcHRpb25zLnBvcnRcbiAgICAgICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLnZhcnMuYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi52YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAgICAgICAgIGNvbnN0IG9wbiA9IHJlcXVpcmUoJ29wbicpXG4gICAgICAgICAgICAgIG9wbih1cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2codGhpcy5wbHVnaW4udmFycy5hcHAgKyBgQ29tcGxldGVkIGV4dC13ZWJwYWNrLXBsdWdpbiBwcm9jZXNzaW5nYClcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgZWxzZSB7Y29uc29sZS5sb2coJ25vdCB3ZWJwYWNrIDQnKX1cbiAgfVxufVxuIl19