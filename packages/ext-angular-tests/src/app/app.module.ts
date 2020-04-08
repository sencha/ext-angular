declare var Ext: any
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { ExtAngularModernModule } from '@sencha/ext-angular-modern';

// import { ExtAngularModule } from '@sencha/ext-angular'
// import { ExtAngularBootstrapService } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.service'
// import { ExtAngularBootstrapComponent } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component'

import { AppService } from './app.service';

import * as d3 from 'd3'
window['d3'] = d3

import { LandingpageComponent } from './view/landingpage/landingpage.component';

// import { SimpleComponent } from './test/Simple/Simple';
// import { BasicEventComponent } from './test/Events/BasicEvent/BasicEvent';
// import { SingleEventComponent } from './test/Events/SingleEvent/SingleEvent';
// import { ElementInsertBetweenComponent } from './test/CreateChild/ElementInsertBetween/ElementInsertBetween';
// import { ElementInsertEndComponent } from './test/CreateChild/ElementInsertEnd/ElementInsertEnd';
// import { ElementInsertStartComponent } from './test/CreateChild/ElementInsertStart/ElementInsertStart';
// import { InsertBetweenComponent } from './test/CreateChild/InsertBetween/InsertBetween';
// import { InsertEndComponent } from './test/CreateChild/InsertEnd/InsertEnd';
// import { InsertStartComponent } from './test/CreateChild/InsertStart/InsertStart';
// import { DefaultComponent } from './test/Default/Default';
// import { HTMLInExtAngularComponent } from './test/HTMLInExtAngular/HTMLInExtAngular';
// import { LifecycleUnmountComponent } from './test/Lifecycle/LifecycleUnmount';
// import { MyComponent } from './test/Lifecycle/MyComponent/MyComponent';
// import { SimplePropUpdateComponent } from './test/Props/SimplePropUpdate/SimplePropUpdate';
// import { UpdateClassNameComponent } from './test/Props/UpdateClassName/UpdateClassName';
// import { RendererCellTestComponent } from './test/Renderer/RendererCellTest/RendererCellTest';
// import { CellComponent } from './test/Renderer/Cell/Cell';
// import { TemplateGridComponent } from './test/Template/TemplateGrid/TemplateGrid';
// import { TemplateListComponent } from './test/Template/TemplateList/TemplateList';
// import { TemplateUnmountComponent } from './test/Template/TemplateUnmount/TemplateUnmount'
// import { ListItemComponent } from './test/Template/TemplateUnmount/ListItem/ListItem';
// import { RenderWhenReadyComponent } from './test/RenderWhenReady/RenderWhenReady'
// import { ReplaceNodeWithMarkupComponent } from './test/ReplaceNodeWithMarkup/ReplaceNodeWithMarkup';
// import { ResponsiveComponent } from './test/Responsive/Responsive';
// import { SenchaTestHooksComponent } from './test/SenchaTestHooks/SenchaTestHooks';
// import { UpdateFunctionsComponent } from './test/UpdateFunctions/UpdateFunctions';
// import { RelComponent } from './test/Rel/RelComponent/RelComponent';
// import { RelArrayDeleteComponent } from './test/Rel/RelArrayDelete/RelArrayDelete';
// import { RelDialogComponent } from './test/Rel/RelDialog/RelDialog';
// import { RelEditorComponent } from './test/Rel/RelEditor/RelEditor';
// import { RelGridColumnComponent } from './test/Rel/RelGridColumn/RelGridColumn';
// import { RelMenuComponent } from './test/Rel/RelMenu/RelMenu';
// import { RelTooltipComponent } from './test/Rel/RelTooltip/RelTooltip';
// import { RelUpdateComponent } from './test/Rel/RelUpdate/RelUpdate';
interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
export declare type ExtAngularRoutes = ExtAngularRoute[];
const routes: ExtAngularRoutes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'simple', component: SimpleComponent, text: 'Simple', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'basic_event', component: BasicEventComponent, text: 'Basic Event', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'single_event', component: SingleEventComponent, text: 'Single Event', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'element_insert_between', component: ElementInsertBetweenComponent, text: 'Element Insert Between', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'element_insert_end', component: ElementInsertEndComponent, text: 'Element Insert End', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'element_insert_start', component: ElementInsertStartComponent, text: 'Element Insert Start', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'insert_between', component: InsertBetweenComponent, text: 'Insert Between', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'insert_start', component: InsertStartComponent, text: 'Insert Start', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'insert_end', component: InsertEndComponent, text: 'Insert End', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'default', component: DefaultComponent, text: 'Default', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'html', component: HTMLInExtAngularComponent, text: 'HTML', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'lifecycle_unmount', component: LifecycleUnmountComponent, text: 'Lifecycle Unmount', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'simple_prop_update', component: SimplePropUpdateComponent, text: 'Simple Prop Update', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'update_class_name', component: UpdateClassNameComponent, text: 'Update Class Name', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'renderer_cell', component: RendererCellTestComponent, text: 'Renderer Cell', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'template_grid', component: TemplateGridComponent, text: 'Template Grid', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'template_list', component: TemplateListComponent, text: 'Template List', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'template_unmount', component: TemplateUnmountComponent, text: 'Template Unmount', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'render_when_ready', component: RenderWhenReadyComponent, text: 'Render When Ready', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'replace_with_markup', component: ReplaceNodeWithMarkupComponent, text: 'Replace Node with Markup', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'responsive', component: ResponsiveComponent, text: 'Responsive', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'sencha_test_hook', component: SenchaTestHooksComponent, text: 'Sencha Test Hooks', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'update_functions', component: UpdateFunctionsComponent, text: 'Update Functions', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'rel', component: RelComponent, text: 'Rel Component', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'rel_array_delete', component: RelArrayDeleteComponent, text: 'Rel Array Delete', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'rel_dialog', component: RelDialogComponent, text: 'Rel Dialog', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'rel_editor', component: RelEditorComponent, text: 'Rel Editor', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'rel_grid_column', component: RelGridColumnComponent, text: 'Rel Grid Column', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'rel_menu', component: RelMenuComponent, text: 'Rel Menu', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'rel_tooltip', component: RelTooltipComponent, text: 'Rel Tooltip', iconCls: 'x-fa fa-dashboard', leaf: true },
  // { path: 'rel_update', component: RelUpdateComponent, text: 'Rel Update', iconCls: 'x-fa fa-dashboard', leaf: true }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports: [
    BrowserModule,
    ExtAngularModernModule,
    routingModule
  ],
	declarations: [
    // ExtAngularBootstrapComponent,
    LandingpageComponent,
    // SimpleComponent,
    // BasicEventComponent,
    // SingleEventComponent,
    // ElementInsertBetweenComponent,
    // ElementInsertEndComponent,
    // ElementInsertStartComponent,
    // InsertBetweenComponent,
    // InsertEndComponent,
    // InsertStartComponent,
    // DefaultComponent,
    // HTMLInExtAngularComponent,
    // LifecycleUnmountComponent,
    // MyComponent,
    // SimplePropUpdateComponent,
    // UpdateClassNameComponent,
    // RendererCellTestComponent,
    // CellComponent,
    // TemplateGridComponent,
    // TemplateListComponent,
    // TemplateUnmountComponent,
    // ListItemComponent,
    // RenderWhenReadyComponent,
    // ReplaceNodeWithMarkupComponent,
    // ResponsiveComponent,
    // SenchaTestHooksComponent,
    // UpdateFunctionsComponent,
    // RelComponent,
    // RelArrayDeleteComponent,
    // RelDialogComponent,
    // RelEditorComponent,
    // RelGridColumnComponent,
    // RelMenuComponent,
    // RelTooltipComponent,
    // RelUpdateComponent
  ],
  providers: [
    // ExtAngularBootstrapService,
    AppService
  ],
  // entryComponents: [
  //   // LandingpageComponent
  // ],
  bootstrap: [LandingpageComponent]
})

export class AppModule {
  // constructor(extAngularService : ExtAngularBootstrapService, appService: AppService) {
  //   extAngularService.setBootStrapComponent(LandingpageComponent)
  // }
  constructor(appService: AppService) {

  }
}
