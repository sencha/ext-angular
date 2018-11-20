declare var Ext: any
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

Ext.application({
  name: '$ExtAngularApp',
  quickTips: true,
  launch: () => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err))
  }
})
