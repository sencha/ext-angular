declare var Ext: any;
//import { ExtAngularModule } from '@sencha/ext-angular';


import { ExtGridComponent } from '@sencha/ext-angular/lib/ext-grid.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
