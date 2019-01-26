'use strict'
require('@babel/polyfill')
export default class ExtWebpackPlugin {
  constructor(options) {
    this.plugin = require(`./pluginUtil`)._constructor(options)
  }

  apply(compiler) {
    require('./pluginUtil').logv(this.plugin.options,'FUNCTION apply')
    if (!compiler.hooks) {console.log('not webpack 4');return}

    compiler.hooks.thisCompilation.tap(`ext-this-compilation`, (compilation) => {
      require('./pluginUtil').logv(this.plugin.options,'HOOK thisCompilation')
      if (this.plugin.vars.pluginErrors.length > 0) {
        compilation.errors.push( new Error(this.plugin.vars.pluginErrors.join("")) )
      }
    })
    if (this.plugin.vars.pluginErrors.length > 0) {
      return
    }

    if ( this.plugin.vars.framework == 'extjs') {
      compiler.hooks.compilation.tap(`ext-compilation`, (compilation) => {
        require('./pluginUtil').logv(this.plugin.options,'HOOK compilation')
      })
      compiler.hooks.afterCompile.tap('ext-after-compile', (compilation) => {
        require('./pluginUtil').logv(this.plugin.options,'HOOK afterCompile')
        require(`./extjsUtil`)._afterCompile(compilation, this.plugin.vars, this.plugin.options)
      })
    }
    else {
      compiler.hooks.compilation.tap(`ext-compilation`, (compilation) => {
        require('./pluginUtil').logv(this.plugin.options,'HOOK compilation')
        require(`./pluginUtil`)._compilation(compiler, compilation, this.plugin.vars, this.plugin.options)
      })
      compiler.hooks.afterCompile.tap('ext-after-compile', (compilation) => {
        require('./pluginUtil').logv(this.plugin.options,'HOOK afterCompile')
        require(`./pluginUtil`)._afterCompile(compiler, compilation, this.plugin.vars, this.plugin.options)
      })
    }

    if((this.plugin.options.genProdData == true && this.plugin.options.environment == 'production') ||
       (this.plugin.options.genProdData == false && this.plugin.options.environment != 'production'))
    {
      compiler.hooks.emit.tapAsync(`ext-emit`, (compilation, callback) => {
        require('./pluginUtil').logv(this.plugin.options,'HOOK emit')
        require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback)
      })
    }

    compiler.hooks.done.tap(`ext-done`, () => {
      require('./pluginUtil').logv(this.plugin.options,'HOOK done')

      if (this.plugin.vars.production && !this.plugin.options.genProdData && this.plugin.options.framework == 'angular') {
        const path = require('path')
        const fsx = require('fs-extra')
        var rimraf = require("rimraf");
        rimraf.sync(path.resolve(process.cwd(), `src/app/ext-angular-prod`));
        try {
          const appModulePath = path.resolve(process.cwd(), 'src/app/app.module.ts')
          var js = fsx.readFileSync(appModulePath).toString()
          var newJs = js.replace(
            `import { ExtAngularModule } from './ext-angular-prod/ext-angular.module'`,
            `import { ExtAngularModule } from '@sencha/ext-angular'`
          );
          fsx.writeFileSync(appModulePath, newJs, 'utf-8', ()=>{return})
        }
        catch (e) {
          console.log(e)
          compilation.errors.push('replace ExtAngularModule - ext-done: ' + e)
          return []
        }
      } 

      try {
        if(this.plugin.options.browser == true && this.plugin.options.watch == 'yes' && this.plugin.vars.production == false) {
          if (this.plugin.vars.browserCount == 0) {
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
        compilation.errors.push('show browser window - ext-done: ' + e)
      }
      require('./pluginUtil').log(this.plugin.vars.app + `Completed ext-webpack-plugin processing`)
    })
  }
}
