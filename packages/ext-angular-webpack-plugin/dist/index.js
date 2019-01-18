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

      if (!this.plugin.options.genProdData) {
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
      }
    } else {
      console.log('not webpack 4');
    }
  }

}

exports.default = ExtWebpackPlugin;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRXh0V2VicGFja1BsdWdpbiIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBsdWdpbiIsIl9jb25zdHJ1Y3RvciIsImFwcGx5IiwiY29tcGlsZXIiLCJsb2d2IiwiaG9va3MiLCJ0aGlzQ29tcGlsYXRpb24iLCJ0YXAiLCJjb21waWxhdGlvbiIsInZhcnMiLCJwbHVnaW5FcnJvcnMiLCJsZW5ndGgiLCJlcnJvcnMiLCJwdXNoIiwiRXJyb3IiLCJqb2luIiwiZnJhbWV3b3JrIiwiYWZ0ZXJDb21waWxlIiwiX2FmdGVyQ29tcGlsZSIsIl9jb21waWxhdGlvbiIsImdlblByb2REYXRhIiwiZW1pdCIsInRhcEFzeW5jIiwiY2FsbGJhY2siLCJkb25lIiwiYnJvd3NlciIsIndhdGNoIiwicHJvZHVjdGlvbiIsImJyb3dzZXJDb3VudCIsInVybCIsInBvcnQiLCJsb2ciLCJhcHAiLCJvcG4iLCJlIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFDQUEsT0FBTyxDQUFDLGlCQUFELENBQVA7O0FBRWUsTUFBTUMsZ0JBQU4sQ0FBdUI7QUFDcENDLEVBQUFBLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVO0FBQ25CLFNBQUtDLE1BQUwsR0FBY0osT0FBTyxDQUFFLGNBQUYsQ0FBUCxDQUF3QkssWUFBeEIsQ0FBcUNGLE9BQXJDLENBQWQsQ0FEbUIsQ0FHdkI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0c7O0FBQ0RHLEVBQUFBLEtBQUssQ0FBQ0MsUUFBRCxFQUFXO0FBQ2RQLElBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsZ0JBQWpEOztBQUNBLFFBQUlJLFFBQVEsQ0FBQ0UsS0FBYixFQUFvQjtBQUVsQkYsTUFBQUEsUUFBUSxDQUFDRSxLQUFU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O0FBQUNHLE1BQUFBLE9BQU8sQ0FBQ0osR0FBUixDQUFZLGVBQVo7QUFBNkI7QUFDcEM7O0FBN0dtQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xucmVxdWlyZSgnQGJhYmVsL3BvbHlmaWxsJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0V2VicGFja1BsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBsdWdpbiA9IHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLl9jb25zdHJ1Y3RvcihvcHRpb25zKVxuXG4vLyAgICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4vLyAgICAgICByZXR1cm5cbi8vICAgICB9XG5cbi8vIC8vICAgIGF3YWl0IF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucylcbi8vICAgICBpZiAoIXRoaXMucGx1Z2luLnZhcnMucHJvZHVjdGlvbikge1xuLy8gICAgICAgY29uc29sZS5sb2coJzInKVxuLy8gICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMsIGNhbGxiYWNrKVxuLy8gICAgICAgY29uc29sZS5sb2coJzMnKVxuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgIGNhbGxiYWNrKClcbi8vICAgICB9XG5cblxuICB9XG4gIGFwcGx5KGNvbXBpbGVyKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdGVU5DVElPTiBhcHBseScpXG4gICAgaWYgKGNvbXBpbGVyLmhvb2tzKSB7XG5cbiAgICAgIGNvbXBpbGVyLmhvb2tzLnRoaXNDb21waWxhdGlvbi50YXAoYGV4dC10aGlzLWNvbXBpbGF0aW9uYCwgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyB0aGlzQ29tcGlsYXRpb24nKVxuICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5wbHVnaW5FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCBuZXcgRXJyb3IodGhpcy5wbHVnaW4udmFycy5wbHVnaW5FcnJvcnMuam9pbihcIlwiKSkgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vdGhpcy5wbHVnaW4udmFycy5kZXBzID0gW11cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMucGx1Z2luLnZhcnMucGx1Z2luRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbXBpbGVyLmhvb2tzLmJlZm9yZVJ1bi50YXBBc3luYyhgZXh0LWJlZm9yZS1ydW5gLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAvLyAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZyh0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGJlZm9yZVJ1bicpXG4gICAgICAvLyAgIGNhbGxiYWNrKClcbiAgICAgIC8vIH0pXG5cbiAgICAgIC8vIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICAgIC8vIHZhciBqc1BhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5vdXRwdXQucGF0aCwgdGhpcy5wbHVnaW4udmFycy5leHRQYXRoLCAnZXh0LmpzJylcbiAgICAgIC8vIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgICAgLy8gdmFyIGl0RXhpc3RzID0gZnMuZXhpc3RzU3luYyhqc1BhdGgpXG5cbiAgICAgIC8vaWYoIWl0RXhpc3RzICYmICF0aGlzLnBsdWdpbi52YXJzLnByb2R1Y3Rpb24gJiYgdGhpcy5wbHVnaW4udmFycy5mcmFtZXdvcmsgIT0gJ2V4dGpzJykge1xuICAgICAgLy8gICBjb21waWxlci5ob29rcy5iZWZvcmVDb21waWxlLnRhcEFzeW5jKGBleHQtYmVmb3JlLWNvbXBpbGVgLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAvLyAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGJlZm9yZUNvbXBpbGUnKVxuICAgICAgLy8gICAgIGNvbXBpbGF0aW9uLmVycm9ycyA9IFtdXG4gICAgICAvLyAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAvLyAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZyh0aGlzLnBsdWdpbi52YXJzLmFwcCArICdVc2luZyBleGlzdGluZyBidWlsZCBhdDogJyArIGpzUGF0aClcbiAgICAgIC8vIH1cblxuICAgICAgaWYgKCB0aGlzLnBsdWdpbi52YXJzLmZyYW1ld29yayA9PSAnZXh0anMnKSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmFmdGVyQ29tcGlsZS50YXAoJ2V4dC1hZnRlci1jb21waWxlJywgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGFmdGVyQ29tcGlsZScpXG4gICAgICAgICAgcmVxdWlyZShgLi9leHRqc1V0aWxgKS5fYWZ0ZXJDb21waWxlKGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmNvbXBpbGF0aW9uLnRhcChgZXh0LWNvbXBpbGF0aW9uYCwgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGNvbXBpbGF0aW9uJylcbi8vICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi52YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLl9jb21waWxhdGlvbihjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMpXG4vLyAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLnBsdWdpbi5vcHRpb25zLmdlblByb2REYXRhKSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmVtaXQudGFwQXN5bmMoYGV4dC1lbWl0YCwgKGNvbXBpbGF0aW9uLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBlbWl0JylcbiAgICAgICAgICAvL2lmICh0aGlzLnBsdWdpbi52YXJzLnByb2R1Y3Rpb24pIHtcbiAgICAgICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLmVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zLCBjYWxsYmFjaylcbiAgICAgICAgICAvL31cbiAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAvLyAgIGNhbGxiYWNrKClcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29tcGlsZXIuaG9va3MuZG9uZS50YXAoYGV4dC1kb25lYCwgKCkgPT4ge1xuICAgICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBkb25lJylcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZih0aGlzLnBsdWdpbi5vcHRpb25zLmJyb3dzZXIgPT0gdHJ1ZSAmJiB0aGlzLnBsdWdpbi5vcHRpb25zLndhdGNoID09ICd5ZXMnICYmIHRoaXMucGx1Z2luLnZhcnMucHJvZHVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAvL2lmICh0aGlzLnBsdWdpbi52YXJzLmJyb3dzZXJDb3VudCA9PSAwICYmIGNvbXBpbGF0aW9uLmVycm9ycy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgdGhpcy5wbHVnaW4ub3B0aW9ucy5wb3J0XG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLnZhcnMuYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnZhcnMuYnJvd3NlckNvdW50KytcbiAgICAgICAgICAgICAgICBjb25zdCBvcG4gPSByZXF1aXJlKCdvcG4nKVxuICAgICAgICAgICAgICAgIG9wbih1cmwpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZyh0aGlzLnBsdWdpbi52YXJzLmFwcCArIGBDb21wbGV0ZWQgZXh0LXdlYnBhY2stcGx1Z2luIHByb2Nlc3NpbmdgKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2Uge2NvbnNvbGUubG9nKCdub3Qgd2VicGFjayA0Jyl9XG4gIH1cbn1cbiJdfQ==