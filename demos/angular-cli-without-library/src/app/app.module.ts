import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExtAngularModule } from 'ext-angular'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
