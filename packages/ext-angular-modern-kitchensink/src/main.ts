declare var Ext: any;
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
declare var Ext: any;
Ext.application({
  name: '$ExtAngularApp',
  launch: () => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
    console.log("Ext application launched. Angular bootstrap done!");
  }
})
*/


Ext.onReady(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})

