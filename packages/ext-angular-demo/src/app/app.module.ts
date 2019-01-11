declare var Ext: any
import { NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { ExtAngularBootstrapService } from './ext-angular/ext-angular-bootstrap.service'
import { ExtAngularBootstrapComponent } from './ext-angular/ext-angular-bootstrap.component'

import { AppComponent } from './app.component'

@NgModule({
  imports:         [BrowserModule, ExtAngularModernModule],
  declarations:    [ExtAngularBootstrapComponent, AppComponent],
  providers:       [ExtAngularBootstrapService],
  entryComponents: [AppComponent],
  bootstrap:       [ExtAngularBootstrapComponent]
})
export class AppModule {
  constructor(extAngularService : ExtAngularBootstrapService) {
    extAngularService.setBootStrapComponent(AppComponent)
  }
}
