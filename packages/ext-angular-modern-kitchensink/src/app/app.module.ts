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

import {NumberFieldComponent} from "../examples/FormFields/NumberField/NumberField"
import {CheckBoxFieldComponent} from '../examples/FormFields/CheckBoxField/CheckBoxField'
import {ComboBoxFieldComponent} from "../examples/FormFields/ComboBoxField/ComboBoxField"
import {FormPanelComponent} from "../examples/FormFields/FormPanel/FormPanel"
import {ContainerFieldComponent} from "../examples/FormFields/ContainerField/ContainerField"
import {DatePickerFieldComponent} from "../examples/FormFields/DatePickerField/DatePickerField"
import {EmailFieldComponent} from "../examples/FormFields/EmailField/EmailField"
import {FileFieldComponent} from "../examples/FormFields/FileField/FileField"
import {FieldSetComponent} from "../examples/FormFields/FieldSet/FieldSet"
import {PasswordFieldComponent} from "../examples/FormFields/PasswordField/PasswordField"
import {RadioFieldComponent} from "../examples/FormFields/RadioField/RadioField"
import {SearchFieldComponent} from "../examples/FormFields/SearchField/SearchField"
import {SelectFieldComponent} from "../examples/FormFields/SelectField/SelectField"
import {SliderFieldComponent} from "../examples/FormFields/SliderField/SliderField"
import {SpinnerFieldComponent} from "../examples/FormFields/SpinnerField/SpinnerField"
import {TextFieldComponent} from "../examples/FormFields/TextField/TextField"
import {TextAreaFieldComponent} from "../examples/FormFields/TextAreaField/TextAreaField"
import {TimeFieldComponent} from "../examples/FormFields/TimeField/TimeField"
import {URLFieldComponent} from "../examples/FormFields/URLField/URLField"
import {ValidationComponent} from "../examples/FormFields/Validation/Validation"
import {ToggleFieldComponent} from "../examples/FormFields/ToggleField/ToggleField"

import {CardLayoutComponent} from "../examples/Layouts/CardLayout/CardLayout";
import {CenterLayoutComponent} from "../examples/Layouts/CenterLayout/CenterLayout";
import {FitLayoutComponent} from "../examples/Layouts/FitLayout/FitLayout";
import { hboxLayoutComponent } from 'src/examples/Layouts/hboxLayout/hboxLayout';
import { FormLayoutComponent } from 'src/examples/Layouts/FormLayout/FormLayout';

import {EditableTreeComponent} from '../examples/Trees/EditableTree/EditableTree';
import {HeterogeneousTreeComponent} from '../examples/Trees/HeterogeneousTree/HeterogeneousTree';
import {TreeComponent} from '../examples/Trees/Tree/Tree';
import {TreeDecorationsComponent} from '../examples/Trees/TreeDecorations/TreeDecorations';
import {TreeGridComponent} from '../examples/Trees/TreeGrid/TreeGrid';
import {TreeListComponent} from '../examples/Trees/TreeList/TreeList';

import {BasicGridComponent} from '../examples/Grid/BasicGrid/BasicGrid';
import {EditableGridComponent} from '../examples/Grid/EditableGrid/EditableGrid';
import {GroupedGridComponent} from '../examples/Grid/GroupedGrid/GroupedGrid';
import {ReduxGridComponent} from '../examples/Grid/ReduxGrid/ReduxGrid';
import {XMLGridComponent} from '../examples/Grid/XMLGrid/XMLGrid';

import {GridToolsComponent} from '../examples/Grid/AddonsDecorations/GridTools/GridTools';
import {RowBodyComponent} from '../examples/Grid/AddonsDecorations/RowBody/RowBody';
import {RowExpanderComponent} from '../examples/Grid/AddonsDecorations/RowExpander/RowExpander';
import {SummaryRowComponent} from '../examples/Grid/AddonsDecorations/SummaryRow/SummaryRow';
import {ViewOptionsComponent} from '../examples/Grid/AddonsDecorations/ViewOptions/ViewOptions';

import {BigDataComponent} from '../examples/Grid/AdvancedFeatures/BigData/BigData';
import {ReconfigureGridComponent} from '../examples/Grid/AdvancedFeatures/ReconfigureGrid/ReconfigureGrid';
import {RenderComponentsInCellsComponent} from '../examples/Grid/AdvancedFeatures/RenderComponentsInCells/RenderComponentsInCells';
import {SelectAndCopyComponent} from '../examples/Grid/AdvancedFeatures/SelectAndCopy/SelectAndCopy';
import {StockTickerComponent} from '../examples/Grid/AdvancedFeatures/StockTicker/StockTicker';

import {DefaultGaugeComponent} from "../examples/Gauges/DefaultGauge"
import {NeedleGaugeComponent} from "../examples/Gauges/NeedleGauge"

import {CalendarService} from "../examples/Calendar/Calendar.service"
import {GridService} from '../examples/Grid/Grid.service'
import {BigDataService} from '../examples/Grid/AdvancedFeatures/BigData/BigData.service'


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
	{ path: 'grids/core_features', component: DummyComponent, text: 'Grids Core Features', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/addons', component: DummyComponent, text: 'Grids Addons', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/advanced_features', component: DummyComponent, text: 'Grids advanced features', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	
	
	{ path: 'trees', component: DummyComponent, text: 'Trees', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'calendar', component: DummyComponent, text: 'Calendar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'charts', component: DummyComponent, text: 'Charts', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'd3', component: DummyComponent, text: 'D3', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'pivotgrids', component: DummyComponent, text: 'Pivot Grids', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	//example components
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

	{ path: 'trees/editable_tree', component: EditableTreeComponent, text: 'Editable Tree', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/heterogeneous_tree', component: HeterogeneousTreeComponent, text: 'Hetrogeneous Tree', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree', component: TreeComponent, text: 'Tree', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree_decorations', component: TreeDecorationsComponent, text: 'Tree Decorations', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree_grid', component: TreeGridComponent, text: 'Tree Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/treelist', component: TreeListComponent, text: 'Tree List', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	{ path: 'grids/core_features/basic_grid', component: BasicGridComponent, text: 'Basic Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/core_features/grouped_grid', component: GroupedGridComponent, text: 'Grouped Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/core_features/editable_grid', component: EditableGridComponent, text: 'Editable Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/core_features/xml_grid', component: XMLGridComponent, text: 'XML Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/redux_grid', component: ReduxGridComponent, text: 'Redux Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },




	{ path: 'grids/addons/grid_tools', component: GridToolsComponent, text: 'Grid Tools', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/addons/row_expander', component: RowExpanderComponent, text: 'Row Expander', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/addons/row_body', component: RowBodyComponent, text: 'Row Body', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/addons/summary_row', component: SummaryRowComponent, text: 'Summary Row', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/addons/view_options', component: ViewOptionsComponent, text: 'View Options', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	{ path: 'grids/advanced_features/big_data', component: BigDataComponent, text: 'Big Data', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/advanced_features/select_and_copy', component: SelectAndCopyComponent, text: 'Select and Copy', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/advanced_features/reconfigure_grid', component: ReconfigureGridComponent, text: 'Reconfigure grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/advanced_features/render_components_in_cells', component: RenderComponentsInCellsComponent, text: 'Render components in cell', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'grids/advanced_features/stock_ticker', component: StockTickerComponent, text: 'Stock tikcer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },


	{ path: 'trees/editable_tree', component: EditableTreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/heterogeneous_tree', component: HeterogeneousTreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree', component: TreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree_decorations', component: TreeDecorationsComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/tree_grid', component: TreeGridComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'trees/treelist', component: TreeListComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	{ path: 'components/forms/checkboxfield', component: CheckBoxFieldComponent, text: 'CheckBoxField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/comboboxfield', component: ComboBoxFieldComponent, text: 'ComboBoxField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/containerfield', component: ContainerFieldComponent, text: 'ContainerField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/datepickerfield', component: DatePickerFieldComponent, text: 'DatePickerField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/emailfield', component: EmailFieldComponent, text: 'EmailField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/fieldset', component: FieldSetComponent, text: 'FieldSet', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/filefield', component: FileFieldComponent, text: 'FileField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/formpanel', component: FormPanelComponent, text: 'FormPanel', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/numberfield', component: NumberFieldComponent, text: 'NumberField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/passwordfield', component: PasswordFieldComponent, text: 'PasswordField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/selectfield', component: SelectFieldComponent, text: 'SelectField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/spinnerfield', component: SpinnerFieldComponent, text: 'SpinnerField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/radiofield', component: RadioFieldComponent, text: 'RadioField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/sliderfield', component: SliderFieldComponent, text: 'SliderField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/searchfield', component: SearchFieldComponent, text: 'SearchField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/textfield', component: TextFieldComponent, text: 'TextField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/textareafield', component: TextAreaFieldComponent, text: 'TextAreaField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/timefield', component: TimeFieldComponent, text: 'TimeField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/togglefield', component: ToggleFieldComponent, text: 'ToggleField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/urlfield', component: URLFieldComponent, text: 'URLField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/forms/validation', component: ValidationComponent, text: 'Validation', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

	{ path: 'components/layouts/center', component: CenterLayoutComponent, text: 'center', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/layouts/fit', component: FitLayoutComponent, text: 'fit', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/layouts/card', component: CardLayoutComponent, text: 'card', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/layouts/hbox', component: hboxLayoutComponent, text: 'hbox', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
	{ path: 'components/layouts/form', component: FormLayoutComponent, text: 'form', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

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
    BrowserAnimationsModule,
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
		TreeListComponent,

		BasicGridComponent,
		EditableGridComponent,
		GroupedGridComponent,
		ReduxGridComponent,
		XMLGridComponent,

		GridToolsComponent,
		RowBodyComponent,
		RowExpanderComponent,
		SummaryRowComponent,
		ViewOptionsComponent,

		BigDataComponent,
		ReconfigureGridComponent,
		RenderComponentsInCellsComponent,
		SelectAndCopyComponent,
		StockTickerComponent,

		CheckBoxFieldComponent,
		ComboBoxFieldComponent,
		ContainerFieldComponent,
		NumberFieldComponent,
		FormPanelComponent,
		FieldSetComponent,
		FileFieldComponent,
		EmailFieldComponent,
		DatePickerFieldComponent,
		PasswordFieldComponent,
		RadioFieldComponent,
		SelectFieldComponent,
		SearchFieldComponent,
		SliderFieldComponent,
		SpinnerFieldComponent,
		TextFieldComponent,
		TextAreaFieldComponent,
		TimeFieldComponent,
		ToggleFieldComponent,
		URLFieldComponent,
		ValidationComponent,

		CardLayoutComponent,
		FitLayoutComponent,
		CenterLayoutComponent,
		hboxLayoutComponent,
		FormLayoutComponent,

	],
	providers: [
		AgencyService,
		CalendarService,
		GridService,
		AppService,
		ExtAngularService,
		BigDataService
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
    //console.log("isphone: " + Ext.os.is.Phone);
    //console.log("isDesktop: " + Ext.os.is.Desktop);
  }
}
