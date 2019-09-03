// import './themer.ts' // for Sencha Themer Integration
// import { enableProdMode } from '@angular/core';
// import { bootstrapModule } from '@sencha/ext-angular/esm5/src/ext-angular-bootstrap.component';
// import { AppModule } from './app/app.module';

// enableProdMode();bootstrapModule(AppModule);

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

