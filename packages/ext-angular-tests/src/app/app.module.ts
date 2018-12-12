declare var Ext: any
import {
  Component,
  NgModule,
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  VERSION} from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {BrowserModule} from '@angular/platform-browser'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'

import * as d3 from 'd3'
window['d3'] = d3

//services
import { ExtAngularService } from './ext-angular.service';
import {AppService} from './app.service';

import { LandingpageComponent } from './view/landingpage/landingpage.component';


import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { SimpleComponent } from './test/Simple/Simple';




interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
export declare type ExtAngularRoutes = ExtAngularRoute[];
const routes: ExtAngularRoutes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'simple', component: SimpleComponent, text: 'Dashboard', iconCls: 'x-fa fa-dashboard', leaf: true }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  constructor(private ExtAngularService: ExtAngularService) {
    this.ExtAngularService.appendComponentToViewport(LandingpageComponent);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    ExtAngularModernModule,
    BrowserAnimationsModule,
    routingModule
  ],
	declarations: [
		App,
		LandingpageComponent,
		SimpleComponent

	],
	providers: [
		AppService,
		ExtAngularService
	],
	entryComponents: [
		LandingpageComponent
	],
	bootstrap: [App]
})


export class AppModule {
  constructor(appService: AppService) {
    appService.init();
  }
}


