import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern';
import { AppComponent } from './app.component';

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
