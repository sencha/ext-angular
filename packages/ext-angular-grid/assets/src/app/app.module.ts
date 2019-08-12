import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExtAngularGridModule } from '@sencha/ext-angular-grid';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
