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
import { BasicEventComponent } from './test/Events/BasicEvent/BasicEvent';
import { SingleEventComponent } from './test/Events/SingleEvent/SingleEvent';
import { ElementInsertBetweenComponent } from './test/CreateChild/ElementInsertBetween/ElementInsertBetween';
import { ElementInsertEndComponent } from './test/CreateChild/ElementInsertEnd/ElementInsertEnd';
import { ElementInsertStartComponent } from './test/CreateChild/ElementInsertStart/ElementInsertStart';
import { InsertBetweenComponent } from './test/CreateChild/InsertBetween/InsertBetween';
import { InsertEndComponent } from './test/CreateChild/InsertEnd/InsertEnd';
import { InsertStartComponent } from './test/CreateChild/InsertStart/InsertStart';
import { DefaultComponent } from './test/Default/Default';
import { HTMLInExtAngularComponent } from './test/HTMLInExtAngular/HTMLInExtAngular';
import { LifecycleUnmountComponent } from './test/Lifecycle/LifecycleUnmount';
import { MyComponent } from './test/Lifecycle/MyComponent/MyComponent';
import { SimplePropUpdateComponent } from './test/Props/SimplePropUpdate/SimplePropUpdate';
import { UpdateClassNameComponent } from './test/Props/UpdateClassName/UpdateClassName';
import { RendererCellTestComponent } from './test/Renderer/RendererCellTest/RendererCelltest';
import { CellComponent } from './test/Renderer/Cell/Cell';
import { TemplateGridComponent } from './test/Template/TemplateGrid/TemplateGrid';
import { TemplateListComponent } from './test/Template/TemplateList/TemplateList';
import { TemplateUnmountComponent } from './test/Template/TemplateUnmount/TemplateUnmount'
import { ListItemComponent } from './test/Template/TemplateUnmount/ListItem/ListItem';
import { RenderWhenReadyComponent } from './test/RenderWhenReady/RenderWhenReady'
import { ReplaceNodeWithMarkupComponent } from './test/ReplaceNodeWithMarkup/ReplaceNodeWithMarkup';
import { ResponsiveComponent } from './test/Responsive/Responsive';
import { SenchaTestHooksComponent } from './test/SenchaTestHooks/SenchaTestHooks';
import { UpdateFunctionsComponent } from './test/UpdateFunctions/UpdateFunctions';


interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
export declare type ExtAngularRoutes = ExtAngularRoute[];
const routes: ExtAngularRoutes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'simple', component: SimpleComponent, text: 'Simple', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'basic-event', component: BasicEventComponent, text: 'Basic Event', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'single-event', component: SingleEventComponent, text: 'Single Event', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'element-insert-between', component: ElementInsertBetweenComponent, text: 'Element Insert Between', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'element-insert-end', component: ElementInsertEndComponent, text: 'Element Insert End', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'element-insert-start', component: ElementInsertStartComponent, text: 'Element Insert Start', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'insert-between', component: InsertBetweenComponent, text: 'Insert Between', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'insert-start', component: InsertStartComponent, text: 'Insert Start', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'insert-end', component: InsertEndComponent, text: 'Insert End', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'default', component: DefaultComponent, text: 'Default', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'html', component: HTMLInExtAngularComponent, text: 'HTML', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'lifecycle-unmount', component: LifecycleUnmountComponent, text: 'Lifecycle Unmount', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'simple-prop-update', component: SimplePropUpdateComponent, text: 'Simple Prop Update', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'update-class-name', component: UpdateClassNameComponent, text: 'Update Class Name', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'renderer-cell', component: RendererCellTestComponent, text: 'Renderer Cell', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'template-grid', component: TemplateGridComponent, text: 'Template Grid', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'template-list', component: TemplateListComponent, text: 'Template List', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'template-unmount', component: TemplateUnmountComponent, text: 'Template Unmount', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'render-when-ready', component: RenderWhenReadyComponent, text: 'Render When Ready', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'replace-with-markup', component: ReplaceNodeWithMarkupComponent, text: 'Replace Node with Markup', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'responsive', component: ResponsiveComponent, text: 'Responsive', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'sencha-test-hook', component: SenchaTestHooksComponent, text: 'Sencha Test Hooks', iconCls: 'x-fa fa-dashboard', leaf: true },
  { path: 'update-functions', component: UpdateFunctionsComponent, text: 'Update Functions', iconCls: 'x-fa fa-dashboard', leaf: true }
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
    SimpleComponent,
    BasicEventComponent,
    SingleEventComponent,
    ElementInsertBetweenComponent,
    ElementInsertEndComponent,
    ElementInsertStartComponent,
    InsertBetweenComponent,
    InsertEndComponent,
    InsertStartComponent,
    DefaultComponent,
    HTMLInExtAngularComponent,
    LifecycleUnmountComponent,
    MyComponent,
    SimplePropUpdateComponent,
    UpdateClassNameComponent,
    RendererCellTestComponent,
    CellComponent,
    TemplateGridComponent,
    TemplateListComponent,
    TemplateUnmountComponent,
    ListItemComponent,
    RenderWhenReadyComponent,
    ReplaceNodeWithMarkupComponent,
    ResponsiveComponent,
    SenchaTestHooksComponent,
    UpdateFunctionsComponent
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


