declare var Ext: any
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ExtAngularModule } from '@sencha/ext-angular'
import { ExtAngularBootstrapService } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.service'
import { ExtAngularBootstrapComponent } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component'

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
