import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service'
import { ExtAngularBootstrapComponent } from './ext-angular-bootstrap.component'
import {AppComponent} from "./app.component"
import {GridService} from './Grid.service'

@NgModule({
  imports:         [BrowserModule, ExtAngularModernModule],
  declarations:    [ExtAngularBootstrapComponent, AppComponent],
  providers:       [ExtAngularBootstrapService, GridService],
  entryComponents: [AppComponent],
  bootstrap:       [ExtAngularBootstrapComponent]
})
export class AppModule {
  constructor(extAngularService : ExtAngularBootstrapService) {
    console.log("In AppModule constructor")
    extAngularService.setBootStrapComponent(AppComponent)
  }
}