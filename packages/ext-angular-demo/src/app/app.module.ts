import { Component, NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'

// import { ExtAngularModernModule } from './ext-angular-modern-prod/ext-angular-modern.module'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'

//this should come from '@sencha/ext-angular-modern'
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service'
import { ExtAngularBootstrapComponent } from './ext-angular-bootstrap.component'

import { AppComponent } from './app.component'
//import { MjgComponent } from './mjg.component'
//import { AppComponent } from './example.component';





@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, ExtAngularModernModule ],
  declarations: [ ExtAngularBootstrapComponent, AppComponent ],
  providers: [ ExtAngularBootstrapService ],
  entryComponents: [ AppComponent],
  bootstrap: [ ExtAngularBootstrapComponent ]
})
export class AppModule {
  constructor(extAngularService : ExtAngularBootstrapService) {
    console.log("In AppModule constructor");
    extAngularService.setBootStrapComponent(AppComponent);
  }
}