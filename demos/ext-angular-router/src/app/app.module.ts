import { Component, NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { ExtAngularService } from './ext-angular.service'
import { AppComponent } from './app.component'
import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import {ButtonComponent} from "./Button"
import {FlexLayoutModule} from '@angular/flex-layout'

interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
export declare type ExtAngularRoutes = ExtAngularRoute[];
const routes: ExtAngularRoutes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: ButtonComponent, text: 'Dashboard', iconCls: 'x-fa fa-dashboard', leaf: true },
]
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});



@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  constructor(private ExtAngularService: ExtAngularService) {
    this.ExtAngularService.appendComponentToViewport(AppComponent)
  }
}

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, FlexLayoutModule, ExtAngularModernModule, routingModule ],
  declarations: [ App, AppComponent, AppComponent, ButtonComponent ],
  providers: [ ExtAngularService ],
  entryComponents: [ AppComponent, AppComponent],
  bootstrap: [ App ]
})
export class AppModule {}