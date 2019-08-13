declare var Ext: any
import './themer.ts' // for Sencha Themer Integration
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { bootstrapModule } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component';
import { AppModule } from './app/app.module';

//bootstrapModule( AppModule );

Ext.onReady(function() {
    platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});


