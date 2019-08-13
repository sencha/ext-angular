import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ExtAngularModule } from './ext-angular-prod/ext-angular.module';
//import { base } from '@sencha/ext-angular/esm5/lib/base'
//import { ExtGridComponent } from '@sencha/ext-angular/esm5/lib/ext-grid.component'
//import { ExtAngularGridModule } from '@sencha/ext-angular-grid';
//import { ExtAngularModule } from '@sencha/ext-angular-all';
//import { ExtGridComponent } from '@sencha/ext-angular-all/src/ext-grid.component';
//import { ExtGridComponent } from '@sencha/ext-angular';
//import { ExtGridComponent } from '@sencha/ext-angular/lib/ext-grid.component';
//import { ExtGridComponent } from '@sencha/ext-angular/esm2015/sencha-ext-angular';
import { ExtGridComponent } from '@sencha/ext-angular/esm5/src/ext-grid.component';
import { ExtPanelComponent } from '@sencha/ext-angular/esm5/src/ext-panel.component';
//import { ExtGridComponent } from '@sencha/ext-angular/esm2015/lib/ext-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtGridComponent,
    ExtPanelComponent
  ],
  imports: [
    BrowserModule,
    //ExtAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }