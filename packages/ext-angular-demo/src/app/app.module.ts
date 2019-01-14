declare var Ext: any
import { NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ExtAngularModule } from '@sencha/ext-angular'
import { ExtAngularBootstrapService } from './ext-angular/ext-angular-bootstrap.service'
import { ExtAngularBootstrapComponent } from './ext-angular/ext-angular-bootstrap.component'

import { AppComponent } from './app.component'

@NgModule({
  imports:         [BrowserModule, ExtAngularModule],
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
