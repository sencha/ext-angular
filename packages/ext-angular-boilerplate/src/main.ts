import './themer.ts' // for Sencha Themer Integration
import { enableProdMode } from '@angular/core';
import { bootstrapModule } from '@sencha/ext-angular/esm5/src/ext-angular-bootstrap.component';
import { AppModule } from './app/app.module';

enableProdMode();bootstrapModule(AppModule);
