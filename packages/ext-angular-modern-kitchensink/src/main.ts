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
  autoCreateViewport: false,
  launch: () => {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
    console.log("Ext application launched. Angular bootstrap done!");
  },
  debug: false,
  quickTips: {
    tooltip: {
        // show qtips on tap on mobile
        showOnTap: true
    },
    overflowTip: {
        // This means that mouseover (or a touch)
        // cancels the auto dismiss timer to give the
        // user an opportunity to read long text.
        // Tap outside of the tip then closes it.
        allowOver: true
    }
  }
})
*/



Ext.onReady(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})


