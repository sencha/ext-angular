
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
import {BrowserModule} from '@angular/platform-browser'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'


import * as d3 from 'd3'
window['d3'] = d3

//services
import { AgencyService } from './service/agency.service';
import {AppService} from './app.service';


//in main
import { DetailComponent } from './view/main/detail/detail.component';
import { FooterComponent } from './view/main/footer/footer.component';
import { HeaderComponent } from './view/main/header/header.component';
import { MainComponent } from './view/main/main.component';
import { SideBarComponent } from './view/main/sidebar/sidebar.component';

//menu
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AgenciesComponent } from './view/agencies/agencies.component';
import { AnalyzeComponent } from './view/analyze/analyze.component';
import { SpendingDetailComponent } from './view/spendingdetail/spendingdetail.component';
import { CandidateCalendarsComponent } from './view/candidatecalendars/candidatecalendars.component';
import { ReportsComponent } from './view/reports/reports.component';
import { ChartComponent } from './view/chart/chart.component';
import { D3TreeListComponent } from './view/d3treelist/d3treelist.component';
import { WidgetGridComponent } from './view/widgetgrid/widgetgrid.component';
import { SimpleGridComponent } from './view/simplegrid/simplegrid.component';
import { BoilerplateComponent } from './view/boilerplate/boilerplate.component';
import { ConfiguratorComponent } from './view/configurator/configurator.component';
import { LandingpageComponent } from './view/landingpage/landingpage.component';
import { DummyComponent } from './view/landingpage/landingpage.component';

import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import {ButtonComponent} from "../examples/Button/Button"
import {SegmentedButtonComponent} from "../examples/SegmentedButton/SegmentedButton"
import {SplitButtonComponent} from "../examples/SplitButton/SplitButton"
import {RippleComponent} from "../examples/Ripple/Ripple"
import {AudioComponent} from "../examples/Audio/Audio"
import {VideoComponent} from "../examples/Video/Video"
import {CalendarPanelComponent} from "../examples/Calendar/CalendarPanel/CalendarPanel"
import {CalendarDaysViewComponent} from "../examples/Calendar/DaysView/DaysView"
import {CalendarDragResizeValidationComponent} from "../examples/Calendar/DragResizeValidation/DragResizeValidation"
import {CalendarMonthViewComponent} from "../examples/Calendar/MonthView/MonthView"
import {CalendarWeekViewComponent} from "../examples/Calendar/WeekView/WeekView"
import {CalendarTimezoneSupportComponent} from "../examples/Calendar/TimezoneSupport/TimezoneSupport"
import {SheetComponent} from "../examples/Sheet/Sheet"
import {ProgressBarComponent} from "../examples/ProgressBar/ProgressBar"
import {TitleBarComponent} from "../examples/TitleBar/TitleBar"
import {ToolBarComponent} from "../examples/ToolBar/ToolBar"
import {ToolTipComponent} from "../examples/ToolTip/ToolTip"

import {EditableTreeComponent} from '../examples/Trees/EditableTree/EditableTree';
import {HeterogeneousTreeComponent} from '../examples/Trees/HeterogeneousTree/HeterogeneousTree';
import {TreeComponent} from '../examples/Trees/Tree/Tree';
import {TreeDecorationsComponent} from '../examples/Trees/TreeDecorations/TreeDecorations';
import {TreeGridComponent} from '../examples/Trees/TreeGrid/TreeGrid';
import {TreeListComponent} from '../examples/Trees/TreeList/TreeList';

import {DefaultGaugeComponent} from "../examples/Gauges/DefaultGauge"
import {NeedleGaugeComponent} from "../examples/Gauges/NeedleGauge"

import {CalendarService} from "../examples/Calendar/Calendar.service"


interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
export declare type ExtAngularRoutes = ExtAngularRoute[];
const routes: ExtAngularRoutes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent, text: 'Dashboard', iconCls: 'x-fa fa-dashboard', leaf: true },
	{ path: 'agencies', component: AgenciesComponent, text: 'Agencies', iconCls: 'x-fa fa-institution', leaf: true },
	{ path: 'analyze', component: AnalyzeComponent, text: 'Analyze', iconCls: 'x-fa fa-cog', xtype: 'homeview', leaf: true },
	{ path: 'spendingdetail', component: SpendingDetailComponent, text: 'Spending Detail', iconCls: 'x-fa fa-dollar', xtype: 'homeview', leaf: true },
	{ path: 'candidatecalendars', component: CandidateCalendarsComponent, text: 'Calendars', iconCls: 'x-fa fa-dollar', xtype: 'homeview', leaf: true },
	{ path: 'reports', component: ReportsComponent, text: 'Reports', iconCls: 'x-fa fa-dollar', xtype: 'homeview', leaf: true },
	{ path: 'chart', component: ChartComponent, text: 'Bar Chart', iconCls: 'x-fa fa-bar-chart', xtype: 'homeview', leaf: true },
	{ path: 'd3treelist', component: D3TreeListComponent, text: 'D3 TreeList', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'widgetgrid', component: WidgetGridComponent, text: 'Widget Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'simplegrid', component: SimpleGridComponent, text: 'Simple Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'boilerplate', component: BoilerplateComponent, text: 'Boilerplate', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'configurator', component: ConfiguratorComponent, text: 'Configurator', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },


	{ path: 'components', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/buttons', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/drag__drop', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/drag__drop/simple', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/drag__drop/constraints', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/drag__drop/proxies', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/drag__drop/handles', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/drag__drop/groups', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/drag__drop/data', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/drag__drop/files', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	{ path: 'components/draw', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/gauges', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/layouts', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/lists', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/media', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/panels', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/popups', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/tabs', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	
	
	
	{ path: 'grids', component: DummyComponent, text: 'Grids', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/core_features', component: DummyComponent, text: 'Grids', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	
	
	
	
	{ path: 'trees', component: DummyComponent, text: 'Trees', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'calendar', component: DummyComponent, text: 'Calendar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'charts', component: DummyComponent, text: 'Charts', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'd3', component: DummyComponent, text: 'D3', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'pivotgrids', component: DummyComponent, text: 'Pivot Grids', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },




	//example components
	//TODO: FOr now we are defining routes as ids of the navtree. Need to to this dynamically.
	{ path: 'components/buttons/button', component: ButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/buttons/splitbutton', component: SplitButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/buttons/segmentedbutton', component: SegmentedButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/ripple', component: RippleComponent, text: 'Riple', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/gauges/default_gauge', component: DefaultGaugeComponent, text: 'Carousel', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/gauges/needle_gauge', component: NeedleGaugeComponent, text: 'Carousel', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/media/audio', component: AudioComponent, text: 'Audio', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/media/video', component: VideoComponent, text: 'Video', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'calendar/calendar_panel', component: CalendarPanelComponent, text: 'Calendar Panel', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'calendar/days_view', component: CalendarDaysViewComponent, text: 'Calendar Days view', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'calendar/drag_resize_validation', component: CalendarDragResizeValidationComponent, text: 'Calendar drah rezize validation view', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'calendar/month_view', component: CalendarMonthViewComponent, text: 'Calendar month view', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'calendar/week_view', component: CalendarWeekViewComponent, text: 'Calendar week view', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'calendar/timezone_support', component: CalendarTimezoneSupportComponent, text: 'Calendar TZ support view', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/sheet', component: SheetComponent, text: 'Sheet', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/progressbar', component: ProgressBarComponent, text: 'Progress Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/titlebar', component: TitleBarComponent, text: 'Title Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/toolbar', component: ToolBarComponent, text: 'Tool Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/tooltip', component: ToolTipComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	{ path: 'trees/editable_tree', component: EditableTreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/heterogeneous_tree', component: HeterogeneousTreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree', component: TreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree_decorations', component: TreeDecorationsComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree_grid', component: TreeGridComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/treelist', component: TreeListComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },


];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@Injectable()
export class ExtAngularService {
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector
  ) {}
  appendComponentToViewport(component: any) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector)
    this.appRef.attachView(componentRef.hostView)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement
    var root = document.getElementsByClassName('x-viewport-body-el')[0]
    root.appendChild(domElem)
  }
}

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
    routingModule
  ],
	declarations: [
		App,

		DetailComponent,
		FooterComponent,
		HeaderComponent,
		MainComponent,
		SideBarComponent,
		AgenciesComponent,
		AnalyzeComponent,
		BoilerplateComponent,
		CandidateCalendarsComponent,
		ChartComponent,
		ConfiguratorComponent,
		D3TreeListComponent,
		DashboardComponent,
		ReportsComponent,
		SimpleGridComponent,
		SpendingDetailComponent,
		WidgetGridComponent,

		LandingpageComponent,
		DummyComponent,

		ButtonComponent,
		SplitButtonComponent,
		SegmentedButtonComponent,
		RippleComponent,
		DefaultGaugeComponent,
		NeedleGaugeComponent,
		AudioComponent,
		VideoComponent,
		CalendarPanelComponent,
		CalendarDaysViewComponent,
		CalendarDragResizeValidationComponent,
		CalendarMonthViewComponent,
		CalendarWeekViewComponent,
		CalendarTimezoneSupportComponent,
		SheetComponent,
		ProgressBarComponent,
		TitleBarComponent,
		ToolBarComponent,
		ToolTipComponent,

		EditableTreeComponent,
		HeterogeneousTreeComponent,
		TreeComponent,
		TreeDecorationsComponent,
		TreeGridComponent,
		TreeListComponent



	],
	providers: [
		AgencyService,
		CalendarService,
		AppService,
		ExtAngularService
	],
	entryComponents: [
		SideBarComponent, 
		FooterComponent, 
		ChartComponent,
		LandingpageComponent
	],
	bootstrap: [App]
})
export class AppModule {

	constructor(appService: AppService) {
		appService.init();
		console.log("isphone: " + Ext.os.is.Phone);
		console.log("isDesktop: " + Ext.os.is.Desktop);

	}


 }



