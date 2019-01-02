'use strict'
require('@babel/polyfill')

export default class ExtWebpackPlugin {
  constructor(options) {
    this.plugin = require(`./pluginUtil`)._constructor(options)

//     function callback() {
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
    require('./pluginUtil').logv(this.plugin.options,'FUNCTION apply')
    if (compiler.hooks) {

      compiler.hooks.thisCompilation.tap(`ext-this-compilation`, (compilation) => {
        require('./pluginUtil').logv(this.plugin.options,'HOOK thisCompilation')
        if (this.plugin.vars.pluginErrors.length > 0) {
          compilation.errors.push( new Error(this.plugin.vars.pluginErrors.join("")) )
        }
        else {
          //this.plugin.vars.deps = []
        }
      })

      if (this.plugin.vars.pluginErrors.length > 0) {
        return
      }

      // compiler.hooks.beforeRun.tapAsync(`ext-before-run`, (compilation, callback) => {
      //   require('./pluginUtil').log(this.plugin.options,'HOOK beforeRun')
      //   callback()
      // })

      const path = require('path')
      var jsPath = path.join(compiler.options.output.path, this.plugin.vars.extPath, 'ext.js')
      const fs = require('fs')
      var itExists = fs.existsSync(jsPath)

      if(!itExists && !this.plugin.vars.production) {
        compiler.hooks.beforeCompile.tapAsync(`ext-before-compile`, (compilation, callback) => {
          require('./pluginUtil').logv(this.plugin.options,'HOOK beforeCompile')
          //compilation.errors = []
          require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback)
        })
      }
      else {
        require('./pluginUtil').log(this.plugin.vars.app + 'Using existing build at: ' + jsPath)
      }

      if ( this.plugin.vars.framework == 'extjs') {
        compiler.hooks.afterCompile.tap('ext-after-compile', (compilation) => {
          require('./pluginUtil').logv(this.plugin.options,'HOOK afterCompile')
          require(`./extjsUtil`)._afterCompile(compilation, this.plugin.vars, this.plugin.options)
        })
      }
      else {
        compiler.hooks.compilation.tap(`ext-compilation`, (compilation) => {
          require('./pluginUtil').logv(this.plugin.options,'HOOK compilation')
          if (this.plugin.vars.production) {
            require(`./pluginUtil`)._compilation(compiler, compilation, this.plugin.vars, this.plugin.options)
          }
        })
      }

      compiler.hooks.emit.tapAsync(`ext-emit`, (compilation, callback) => {
        require('./pluginUtil').logv(this.plugin.options,'HOOK emit')
        if (this.plugin.vars.production) {
          require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback)
        }
        else {
          callback()
        }
      })

      compiler.hooks.done.tap(`ext-done`, () => {
        require('./pluginUtil').logv(this.plugin.options,'HOOK done')

        try {
          if(this.plugin.options.browser == true && this.plugin.options.watch == 'yes' && this.plugin.vars.production == false) {
            if (this.plugin.vars.browserCount == 0) {
            //if (this.plugin.vars.browserCount == 0 && compilation.errors.length == 0) {
              var url = 'http://localhost:' + this.plugin.options.port
              require('./pluginUtil').log(this.plugin.vars.app + `Opening browser at ${url}`)
              this.plugin.vars.browserCount++
              const opn = require('opn')
              opn(url)
            }
          }
        }
        catch (e) {
          console.log(e)
        }



        require('./pluginUtil').log(this.plugin.vars.app + `Completed ext-webpack-plugin processing`)
      })

    }
    else {console.log('not webpack 4')}
  }
}
