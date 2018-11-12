import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularModernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }