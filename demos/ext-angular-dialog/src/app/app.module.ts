import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExtAngularModule } from '@sencha/ext-angular-all'
import { AppComponent } from './app.component';
import { DialogComponent } from './app.dialog'

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
