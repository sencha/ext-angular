import { Component, NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'

//import { ExtAngularModernModule } from './ext-angular-modern-prod/ext-angular-modern.module'
//import { ExtAngularModernModule } from './ext-angular-modern-test/ext-angular-modern.module'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'

//this should come from '@sencha/ext-angular-modern'
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service'
//import { ExtAngularBootstrapService } from '@sencha/ext-angular-modern/lib/ext-angular-bootstrap.service'
//import { ExtAngularBootstrapService } from '@sencha/ext-angular-modern'
//import { ExtAngularBootstrapComponent } from '@sencha/ext-angular-modern/lib/ext-angular-bootstrap.component'
import { ExtAngularBootstrapComponent } from './ext-angular-bootstrap.component'
//import { ExtAngularBootstrapComponent } from '@sencha/ext-angular-modern'
//import { ExtAngularButtonComponent } from '@sencha/ext-angular-modern'
import { AppComponent } from './app.component'
//import { MjgComponent } from './mjg.component'
//import { AppComponent } from './example.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, ExtAngularModernModule ],
  declarations: [ ExtAngularBootstrapComponent,AppComponent ],
  entryComponents: [AppComponent],
  bootstrap: [ ExtAngularBootstrapComponent ]
})
export class AppModule {
  constructor(extAngularService : ExtAngularBootstrapService) {
    console.log("In AppModule constructor")
    extAngularService.setBootStrapComponent(AppComponent)
  }
}