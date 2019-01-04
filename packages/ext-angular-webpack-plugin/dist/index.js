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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRXh0V2VicGFja1BsdWdpbiIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBsdWdpbiIsIl9jb25zdHJ1Y3RvciIsImFwcGx5IiwiY29tcGlsZXIiLCJsb2d2IiwiaG9va3MiLCJ0aGlzQ29tcGlsYXRpb24iLCJ0YXAiLCJjb21waWxhdGlvbiIsInZhcnMiLCJwbHVnaW5FcnJvcnMiLCJsZW5ndGgiLCJlcnJvcnMiLCJwdXNoIiwiRXJyb3IiLCJqb2luIiwicGF0aCIsImpzUGF0aCIsIm91dHB1dCIsImV4dFBhdGgiLCJmcyIsIml0RXhpc3RzIiwiZXhpc3RzU3luYyIsInByb2R1Y3Rpb24iLCJmcmFtZXdvcmsiLCJiZWZvcmVDb21waWxlIiwidGFwQXN5bmMiLCJjYWxsYmFjayIsImVtaXQiLCJsb2ciLCJhcHAiLCJhZnRlckNvbXBpbGUiLCJfYWZ0ZXJDb21waWxlIiwiX2NvbXBpbGF0aW9uIiwiZG9uZSIsImJyb3dzZXIiLCJ3YXRjaCIsImJyb3dzZXJDb3VudCIsInVybCIsInBvcnQiLCJvcG4iLCJlIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFDQUEsT0FBTyxDQUFDLGlCQUFELENBQVA7O0FBRWUsTUFBTUMsZ0JBQU4sQ0FBdUI7QUFDcENDLEVBQUFBLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVO0FBQ25CLFNBQUtDLE1BQUwsR0FBY0osT0FBTyxDQUFFLGNBQUYsQ0FBUCxDQUF3QkssWUFBeEIsQ0FBcUNGLE9BQXJDLENBQWQsQ0FEbUIsQ0FHdkI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0c7O0FBQ0RHLEVBQUFBLEtBQUssQ0FBQ0MsUUFBRCxFQUFXO0FBQ2RQLElBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsZ0JBQWpEOztBQUNBLFFBQUlJLFFBQVEsQ0FBQ0UsS0FBYixFQUFvQjtBQUVsQkYsTUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWVDLGVBQWYsQ0FBK0JDLEdBQS9CLENBQW9DLHNCQUFwQyxFQUE0REMsV0FBRCxJQUFpQjtBQUMxRVosUUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QlEsSUFBeEIsQ0FBNkIsS0FBS0osTUFBTCxDQUFZRCxPQUF6QyxFQUFpRCxzQkFBakQ7O0FBQ0EsWUFBSSxLQUFLQyxNQUFMLENBQVlTLElBQVosQ0FBaUJDLFlBQWpCLENBQThCQyxNQUE5QixHQUF1QyxDQUEzQyxFQUE4QztBQUM1Q0gsVUFBQUEsV0FBVyxDQUFDSSxNQUFaLENBQW1CQyxJQUFuQixDQUF5QixJQUFJQyxLQUFKLENBQVUsS0FBS2QsTUFBTCxDQUFZUyxJQUFaLENBQWlCQyxZQUFqQixDQUE4QkssSUFBOUIsQ0FBbUMsRUFBbkMsQ0FBVixDQUF6QjtBQUNELFNBRkQsTUFHSyxDQUNIO0FBQ0Q7QUFDRixPQVJEOztBQVVBLFVBQUksS0FBS2YsTUFBTCxDQUFZUyxJQUFaLENBQWlCQyxZQUFqQixDQUE4QkMsTUFBOUIsR0FBdUMsQ0FBM0MsRUFBOEM7QUFDNUM7QUFDRCxPQWRpQixDQWdCbEI7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFlBQU1LLElBQUksR0FBR3BCLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLFVBQUlxQixNQUFNLEdBQUdELElBQUksQ0FBQ0QsSUFBTCxDQUFVWixRQUFRLENBQUNKLE9BQVQsQ0FBaUJtQixNQUFqQixDQUF3QkYsSUFBbEMsRUFBd0MsS0FBS2hCLE1BQUwsQ0FBWVMsSUFBWixDQUFpQlUsT0FBekQsRUFBa0UsUUFBbEUsQ0FBYjs7QUFDQSxZQUFNQyxFQUFFLEdBQUd4QixPQUFPLENBQUMsSUFBRCxDQUFsQjs7QUFDQSxVQUFJeUIsUUFBUSxHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBY0wsTUFBZCxDQUFmOztBQUVBLFVBQUcsQ0FBQ0ksUUFBRCxJQUFhLENBQUMsS0FBS3JCLE1BQUwsQ0FBWVMsSUFBWixDQUFpQmMsVUFBL0IsSUFBNkMsS0FBS3ZCLE1BQUwsQ0FBWVMsSUFBWixDQUFpQmUsU0FBakIsSUFBOEIsT0FBOUUsRUFBdUY7QUFDckZyQixRQUFBQSxRQUFRLENBQUNFLEtBQVQsQ0FBZW9CLGFBQWYsQ0FBNkJDLFFBQTdCLENBQXVDLG9CQUF2QyxFQUE0RCxDQUFDbEIsV0FBRCxFQUFjbUIsUUFBZCxLQUEyQjtBQUNyRi9CLFVBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsb0JBQWpELEVBRHFGLENBRXJGOzs7QUFDQUgsVUFBQUEsT0FBTyxDQUFFLGNBQUYsQ0FBUCxDQUF3QmdDLElBQXhCLENBQTZCekIsUUFBN0IsRUFBdUNLLFdBQXZDLEVBQW9ELEtBQUtSLE1BQUwsQ0FBWVMsSUFBaEUsRUFBc0UsS0FBS1QsTUFBTCxDQUFZRCxPQUFsRixFQUEyRjRCLFFBQTNGO0FBQ0QsU0FKRDtBQUtELE9BTkQsTUFPSztBQUNIL0IsUUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QmlDLEdBQXhCLENBQTRCLEtBQUs3QixNQUFMLENBQVlTLElBQVosQ0FBaUJxQixHQUFqQixHQUF1QiwyQkFBdkIsR0FBcURiLE1BQWpGO0FBQ0Q7O0FBRUQsVUFBSyxLQUFLakIsTUFBTCxDQUFZUyxJQUFaLENBQWlCZSxTQUFqQixJQUE4QixPQUFuQyxFQUE0QztBQUMxQ3JCLFFBQUFBLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlMEIsWUFBZixDQUE0QnhCLEdBQTVCLENBQWdDLG1CQUFoQyxFQUFzREMsV0FBRCxJQUFpQjtBQUNwRVosVUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QlEsSUFBeEIsQ0FBNkIsS0FBS0osTUFBTCxDQUFZRCxPQUF6QyxFQUFpRCxtQkFBakQ7O0FBQ0FILFVBQUFBLE9BQU8sQ0FBRSxhQUFGLENBQVAsQ0FBdUJvQyxhQUF2QixDQUFxQ3hCLFdBQXJDLEVBQWtELEtBQUtSLE1BQUwsQ0FBWVMsSUFBOUQsRUFBb0UsS0FBS1QsTUFBTCxDQUFZRCxPQUFoRjtBQUNELFNBSEQ7QUFJRCxPQUxELE1BTUs7QUFDSEksUUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWVHLFdBQWYsQ0FBMkJELEdBQTNCLENBQWdDLGlCQUFoQyxFQUFtREMsV0FBRCxJQUFpQjtBQUNqRVosVUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QlEsSUFBeEIsQ0FBNkIsS0FBS0osTUFBTCxDQUFZRCxPQUF6QyxFQUFpRCxrQkFBakQ7O0FBQ0EsY0FBSSxLQUFLQyxNQUFMLENBQVlTLElBQVosQ0FBaUJjLFVBQXJCLEVBQWlDO0FBQy9CM0IsWUFBQUEsT0FBTyxDQUFFLGNBQUYsQ0FBUCxDQUF3QnFDLFlBQXhCLENBQXFDOUIsUUFBckMsRUFBK0NLLFdBQS9DLEVBQTRELEtBQUtSLE1BQUwsQ0FBWVMsSUFBeEUsRUFBOEUsS0FBS1QsTUFBTCxDQUFZRCxPQUExRjtBQUNEO0FBQ0YsU0FMRDtBQU1EOztBQUVESSxNQUFBQSxRQUFRLENBQUNFLEtBQVQsQ0FBZXVCLElBQWYsQ0FBb0JGLFFBQXBCLENBQThCLFVBQTlCLEVBQXlDLENBQUNsQixXQUFELEVBQWNtQixRQUFkLEtBQTJCO0FBQ2xFL0IsUUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QlEsSUFBeEIsQ0FBNkIsS0FBS0osTUFBTCxDQUFZRCxPQUF6QyxFQUFpRCxXQUFqRDs7QUFDQSxZQUFJLEtBQUtDLE1BQUwsQ0FBWVMsSUFBWixDQUFpQmMsVUFBckIsRUFBaUM7QUFDL0IzQixVQUFBQSxPQUFPLENBQUUsY0FBRixDQUFQLENBQXdCZ0MsSUFBeEIsQ0FBNkJ6QixRQUE3QixFQUF1Q0ssV0FBdkMsRUFBb0QsS0FBS1IsTUFBTCxDQUFZUyxJQUFoRSxFQUFzRSxLQUFLVCxNQUFMLENBQVlELE9BQWxGLEVBQTJGNEIsUUFBM0Y7QUFDRCxTQUZELE1BR0s7QUFDSEEsVUFBQUEsUUFBUTtBQUNUO0FBQ0YsT0FSRDtBQVVBeEIsTUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWU2QixJQUFmLENBQW9CM0IsR0FBcEIsQ0FBeUIsVUFBekIsRUFBb0MsTUFBTTtBQUN4Q1gsUUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QlEsSUFBeEIsQ0FBNkIsS0FBS0osTUFBTCxDQUFZRCxPQUF6QyxFQUFpRCxXQUFqRDs7QUFNQSxZQUFJO0FBQ0YsY0FBRyxLQUFLQyxNQUFMLENBQVlELE9BQVosQ0FBb0JvQyxPQUFwQixJQUErQixJQUEvQixJQUF1QyxLQUFLbkMsTUFBTCxDQUFZRCxPQUFaLENBQW9CcUMsS0FBcEIsSUFBNkIsS0FBcEUsSUFBNkUsS0FBS3BDLE1BQUwsQ0FBWVMsSUFBWixDQUFpQmMsVUFBakIsSUFBK0IsS0FBL0csRUFBc0g7QUFDcEgsZ0JBQUksS0FBS3ZCLE1BQUwsQ0FBWVMsSUFBWixDQUFpQjRCLFlBQWpCLElBQWlDLENBQXJDLEVBQXdDO0FBQ3hDO0FBQ0Usa0JBQUlDLEdBQUcsR0FBRyxzQkFBc0IsS0FBS3RDLE1BQUwsQ0FBWUQsT0FBWixDQUFvQndDLElBQXBEOztBQUNBM0MsY0FBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QmlDLEdBQXhCLENBQTRCLEtBQUs3QixNQUFMLENBQVlTLElBQVosQ0FBaUJxQixHQUFqQixHQUF3QixzQkFBcUJRLEdBQUksRUFBN0U7O0FBQ0EsbUJBQUt0QyxNQUFMLENBQVlTLElBQVosQ0FBaUI0QixZQUFqQjs7QUFDQSxvQkFBTUcsR0FBRyxHQUFHNUMsT0FBTyxDQUFDLEtBQUQsQ0FBbkI7O0FBQ0E0QyxjQUFBQSxHQUFHLENBQUNGLEdBQUQsQ0FBSDtBQUNEO0FBQ0Y7QUFDRixTQVhELENBWUEsT0FBT0csQ0FBUCxFQUFVO0FBQ1JDLFVBQUFBLE9BQU8sQ0FBQ2IsR0FBUixDQUFZWSxDQUFaO0FBQ0Q7O0FBSUQ3QyxRQUFBQSxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCaUMsR0FBeEIsQ0FBNEIsS0FBSzdCLE1BQUwsQ0FBWVMsSUFBWixDQUFpQnFCLEdBQWpCLEdBQXdCLHlDQUFwRDtBQUNELE9BMUJEO0FBNEJELEtBMUZELE1BMkZLO0FBQUNZLE1BQUFBLE9BQU8sQ0FBQ2IsR0FBUixDQUFZLGVBQVo7QUFBNkI7QUFDcEM7O0FBbEhtQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xucmVxdWlyZSgnQGJhYmVsL3BvbHlmaWxsJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0V2VicGFja1BsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBsdWdpbiA9IHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLl9jb25zdHJ1Y3RvcihvcHRpb25zKVxuXG4vLyAgICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4vLyAgICAgICByZXR1cm5cbi8vICAgICB9XG5cbi8vIC8vICAgIGF3YWl0IF9idWlsZEV4dEJ1bmRsZShhcHAsIGNvbXBpbGF0aW9uLCBvdXRwdXRQYXRoLCBwYXJtcywgb3B0aW9ucylcbi8vICAgICBpZiAoIXRoaXMucGx1Z2luLnZhcnMucHJvZHVjdGlvbikge1xuLy8gICAgICAgY29uc29sZS5sb2coJzInKVxuLy8gICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMsIGNhbGxiYWNrKVxuLy8gICAgICAgY29uc29sZS5sb2coJzMnKVxuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgIGNhbGxiYWNrKClcbi8vICAgICB9XG5cblxuICB9XG4gIGFwcGx5KGNvbXBpbGVyKSB7XG4gICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdGVU5DVElPTiBhcHBseScpXG4gICAgaWYgKGNvbXBpbGVyLmhvb2tzKSB7XG5cbiAgICAgIGNvbXBpbGVyLmhvb2tzLnRoaXNDb21waWxhdGlvbi50YXAoYGV4dC10aGlzLWNvbXBpbGF0aW9uYCwgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyB0aGlzQ29tcGlsYXRpb24nKVxuICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5wbHVnaW5FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbXBpbGF0aW9uLmVycm9ycy5wdXNoKCBuZXcgRXJyb3IodGhpcy5wbHVnaW4udmFycy5wbHVnaW5FcnJvcnMuam9pbihcIlwiKSkgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vdGhpcy5wbHVnaW4udmFycy5kZXBzID0gW11cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMucGx1Z2luLnZhcnMucGx1Z2luRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbXBpbGVyLmhvb2tzLmJlZm9yZVJ1bi50YXBBc3luYyhgZXh0LWJlZm9yZS1ydW5gLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAvLyAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZyh0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGJlZm9yZVJ1bicpXG4gICAgICAvLyAgIGNhbGxiYWNrKClcbiAgICAgIC8vIH0pXG5cbiAgICAgIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbiAgICAgIHZhciBqc1BhdGggPSBwYXRoLmpvaW4oY29tcGlsZXIub3B0aW9ucy5vdXRwdXQucGF0aCwgdGhpcy5wbHVnaW4udmFycy5leHRQYXRoLCAnZXh0LmpzJylcbiAgICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuICAgICAgdmFyIGl0RXhpc3RzID0gZnMuZXhpc3RzU3luYyhqc1BhdGgpXG5cbiAgICAgIGlmKCFpdEV4aXN0cyAmJiAhdGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uICYmIHRoaXMucGx1Z2luLnZhcnMuZnJhbWV3b3JrICE9ICdleHRqcycpIHtcbiAgICAgICAgY29tcGlsZXIuaG9va3MuYmVmb3JlQ29tcGlsZS50YXBBc3luYyhgZXh0LWJlZm9yZS1jb21waWxlYCwgKGNvbXBpbGF0aW9uLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBiZWZvcmVDb21waWxlJylcbiAgICAgICAgICAvL2NvbXBpbGF0aW9uLmVycm9ycyA9IFtdXG4gICAgICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHRoaXMucGx1Z2luLnZhcnMsIHRoaXMucGx1Z2luLm9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZyh0aGlzLnBsdWdpbi52YXJzLmFwcCArICdVc2luZyBleGlzdGluZyBidWlsZCBhdDogJyArIGpzUGF0aClcbiAgICAgIH1cblxuICAgICAgaWYgKCB0aGlzLnBsdWdpbi52YXJzLmZyYW1ld29yayA9PSAnZXh0anMnKSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmFmdGVyQ29tcGlsZS50YXAoJ2V4dC1hZnRlci1jb21waWxlJywgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGFmdGVyQ29tcGlsZScpXG4gICAgICAgICAgcmVxdWlyZShgLi9leHRqc1V0aWxgKS5fYWZ0ZXJDb21waWxlKGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmNvbXBpbGF0aW9uLnRhcChgZXh0LWNvbXBpbGF0aW9uYCwgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGNvbXBpbGF0aW9uJylcbiAgICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5fY29tcGlsYXRpb24oY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29tcGlsZXIuaG9va3MuZW1pdC50YXBBc3luYyhgZXh0LWVtaXRgLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBlbWl0JylcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnZhcnMucHJvZHVjdGlvbikge1xuICAgICAgICAgIHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLmVtaXQoY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zLCBjYWxsYmFjaylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbXBpbGVyLmhvb2tzLmRvbmUudGFwKGBleHQtZG9uZWAsICgpID0+IHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGRvbmUnKVxuXG5cblxuICAgICAgICBcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmKHRoaXMucGx1Z2luLm9wdGlvbnMuYnJvd3NlciA9PSB0cnVlICYmIHRoaXMucGx1Z2luLm9wdGlvbnMud2F0Y2ggPT0gJ3llcycgJiYgdGhpcy5wbHVnaW4udmFycy5wcm9kdWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCkge1xuICAgICAgICAgICAgLy9pZiAodGhpcy5wbHVnaW4udmFycy5icm93c2VyQ291bnQgPT0gMCAmJiBjb21waWxhdGlvbi5lcnJvcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OicgKyB0aGlzLnBsdWdpbi5vcHRpb25zLnBvcnRcbiAgICAgICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLnZhcnMuYXBwICsgYE9wZW5pbmcgYnJvd3NlciBhdCAke3VybH1gKVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi52YXJzLmJyb3dzZXJDb3VudCsrXG4gICAgICAgICAgICAgIGNvbnN0IG9wbiA9IHJlcXVpcmUoJ29wbicpXG4gICAgICAgICAgICAgIG9wbih1cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG5cblxuICAgICAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2codGhpcy5wbHVnaW4udmFycy5hcHAgKyBgQ29tcGxldGVkIGV4dC13ZWJwYWNrLXBsdWdpbiBwcm9jZXNzaW5nYClcbiAgICAgIH0pXG5cbiAgICB9XG4gICAgZWxzZSB7Y29uc29sZS5sb2coJ25vdCB3ZWJwYWNrIDQnKX1cbiAgfVxufVxuIl19