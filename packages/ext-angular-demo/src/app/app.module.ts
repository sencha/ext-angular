import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  exports: [
    BrowserModule,
    ExtAngularModernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }