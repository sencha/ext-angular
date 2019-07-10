declare var Ext: any
import { Inject, NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Route, RouterModule } from '@angular/router'

import { ExtAngularModule } from '@sencha/ext-angular'
import { ExtAngularBootstrapService } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.service'
import { ExtAngularBootstrapComponent } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component'

import {AppService} from './app.service'

import * as d3 from 'd3'
window['d3'] = d3

import { LandingpageComponent } from './view/landingpage/landingpage.component';
import { DummyComponent } from './view/landingpage/landingpage.component';

import {ButtonComponent} from "../examples/Button/Button"
import {SegmentedButtonComponent} from "../examples/SegmentedButton/SegmentedButton"
import {SplitButtonComponent} from "../examples/SplitButton/SplitButton"
import {RippleComponent} from "../examples/Ripple/Ripple"
import {AudioComponent} from "../examples/Audio/Audio"
import {DrawComponent} from '../examples/Draw/Draw';
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
import {ColorPickerComponent} from '../examples/ColorPicker/ColorPicker';

import {NumberFieldComponent} from "../examples/FormFields/NumberField/NumberField"
import {CheckBoxFieldComponent} from '../examples/FormFields/CheckBoxField/CheckBoxField'
import {ComboBoxFieldComponent} from "../examples/FormFields/ComboBoxField/ComboBoxField"
import {MultiSelectComboBoxFieldComponent} from '../examples/FormFields/MultiSelectComboBoxField/MultiSelectComboBoxField'
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
import { hboxLayoutComponent } from '../examples/Layouts/hboxLayout/hboxLayout';
import { FormLayoutComponent } from '../examples/Layouts/FormLayout/FormLayout';
import {ResizableLayoutComponent} from '../examples/Layouts/ResizableLayout/ResizableLayout';
import {vboxLayoutComponent} from '../examples/Layouts/vboxLayout/vboxLayout';

import {EditableTreeComponent} from '../examples/Trees/EditableTree/EditableTree';
import {HeterogeneousTreeComponent} from '../examples/Trees/HeterogeneousTree/HeterogeneousTree';
import {TreeComponent} from '../examples/Trees/Tree/Tree';
import {TreeDecorationsComponent} from '../examples/Trees/TreeDecorations/TreeDecorations';
import {TreeGridComponent} from '../examples/Trees/TreeGrid/TreeGrid';
import {TreeListComponent} from '../examples/Trees/TreeList/TreeList';

import {BasicGridComponent} from '../examples/Grid/BasicGrid/BasicGrid';
import {EditableGridComponent} from '../examples/Grid/EditableGrid/EditableGrid';
import {GroupedGridComponent} from '../examples/Grid/GroupedGrid/GroupedGrid';
import {LockingGridComponent} from '../examples/Grid/LockingGrid/LockingGrid';
import {XMLGridComponent} from '../examples/Grid/XMLGrid/XMLGrid';

import {GridToolsComponent} from '../examples/Grid/AddonsDecorations/GridTools/GridTools';
import {RowBodyComponent} from '../examples/Grid/AddonsDecorations/RowBody/RowBody';
import {RowExpanderComponent} from '../examples/Grid/AddonsDecorations/RowExpander/RowExpander';
import {SummaryRowComponent} from '../examples/Grid/AddonsDecorations/SummaryRow/SummaryRow';
import {GridFilteringComponent} from '../examples/Grid/AddonsDecorations/GridFiltering/GridFiltering';
import {ViewOptionsComponent} from '../examples/Grid/AddonsDecorations/ViewOptions/ViewOptions';
import {RowDragAndDropComponent} from '../examples/Grid/AddonsDecorations/RowDragAndDrop/RowDragAndDrop';


import {BigDataComponent} from '../examples/Grid/AdvancedFeatures/BigData/BigData';
import {ReconfigureGridComponent} from '../examples/Grid/AdvancedFeatures/ReconfigureGrid/ReconfigureGrid';
import {ComponentsInCellsComponent} from '../examples/Grid/AdvancedFeatures/ComponentsInCells/ComponentsInCells';
import { ActionCellsComponent } from '../examples/Grid/AdvancedFeatures/ComponentsInCells/ActionCells'
import {SelectAndCopyComponent} from '../examples/Grid/AdvancedFeatures/SelectAndCopy/SelectAndCopy';
import {StockTickerComponent} from '../examples/Grid/AdvancedFeatures/StockTicker/StockTicker';

import {DefaultGaugeComponent} from "../examples/Gauges/DefaultGauge/DefaultGauge"
import {NeedleGaugeComponent} from "../examples/Gauges/NeedleGauge/NeedleGauge"
import {CarouselComponent} from "../examples/Carousel/Carousel"

import {ChartToolbarComponent} from "../examples/Charts/ChartToolbar"
import {BasicGaugeChartComponent} from '../examples/Charts/Gauges/BasicGaugeChart/BasicGaugeChart';
import {BoxPlotComponent} from '../examples/Charts/BoxPlot/BoxPlot';
import {NavigatorComponent} from '../examples/Charts/Navigator/Navigator';
import {BasicScatterComponent} from '../examples/Charts/Scatter/BasicScatter/BasicScatter';
import {BubbleComponent} from '../examples/Charts/Scatter/Bubble/Bubble';
import {CustomIconsComponent} from '../examples/Charts/Scatter/CustomIcons/CustomIcons';
import {BasicLineComponent} from '../examples/Charts/Line/BasicLine/BasicLine';
import {BasicMarkersComponent} from '../examples/Charts/Line/BasicMarkers/BasicMarkers';
import {PlotComponent} from '../examples/Charts/Line/Plot/Plot';
import {RealtimeComponent} from '../examples/Charts/Line/Realtime/Realtime';
import {SplineComponent} from '../examples/Charts/Line/Spline/Spline';
import {SplineMarkersComponent} from '../examples/Charts/Line/SplineMarkers/SplineMarkers';
import {WithRendererComponent} from '../examples/Charts/Line/WithRenderer/WithRenderer';

import {BasicAreaComponent} from '../examples/Charts/Area/BasicArea/BasicArea';
import {FullStackedAreaComponent} from '../examples/Charts/Area/FullStackedArea/FullStackedArea';
import {NegativeValuesAreaComponent} from '../examples/Charts/Area/NegativeValuesArea/NegativeValuesArea';
import {StackedAreaComponent} from '../examples/Charts/Area/StackedArea/StackedArea';

import {BasicRadarComponent} from '../examples/Charts/Radar/BasicRadar/BasicRadar';
import {FilledComponent} from '../examples/Charts/Radar/Filled/Filled';
import {MarkedComponent} from '../examples/Charts/Radar/Marked/Marked';
import {MultiaxisComponent} from '../examples/Charts/Radar/Multiaxis/Multiaxis';
import {ThreeDPieComponent} from '../examples/Charts/Pie/3DPie/3DPie';
import {BasicPieComponent} from '../examples/Charts/Pie/BasicPie/BasicPie';
import {DonutComponent} from '../examples/Charts/Pie/Donut/Donut';
import {DoubleDonutComponent} from '../examples/Charts/Pie/DoubleDonut/DoubleDonut';
import {SpieComponent} from '../examples/Charts/Pie/Spie/Spie';

import {BasicBarComponent} from '../examples/Charts/Bar/BasicBar/BasicBar';
import {FullStackedBarComponent} from '../examples/Charts/Bar/FullStackedBar/FullStackedBar';
import {StackedBarComponent} from '../examples/Charts/Bar/StackedBar/StackedBar';

import {CandlestickComponent} from '../examples/Charts/Financial/Candlestick/Candlestick';
import {OHLCComponent} from '../examples/Charts/Financial/OHLC/OHLC';

import {BasicColumnComponent} from '../examples/Charts/Column/BasicColumn/BasicColumn';
import {ColumnWithRendererComponent} from '../examples/Charts/Column/ColumnWithRenderer/ColumnWithRenderer';
import {MultiaxisColumnComponent} from '../examples/Charts/Column/MultiaxisColumn/MultiaxisColumn';
import {StackedComponent} from '../examples/Charts/Column/Stacked/Stacked';
import {ThreeDColumnWithRendererComponent} from '../examples/Charts/3DColumn/3DColumnWithRenderer/3DColumnWithRenderer';
import {ThreeDGroupedComponent} from '../examples/Charts/3DColumn/3DGrouped/3DGrouped';
import {ThreeDStackedComponent} from '../examples/Charts/3DColumn/3DStacked/3DStacked';
import {Basic3DColumnComponent} from '../examples/Charts/3DColumn/Basic3DColumn/Basic3DColumn';
import {NegativeValuesComponent} from '../examples/Charts/3DColumn/NegativeValues/NegativeValues';

import {CollapsibleComponent} from '../examples/PivotGrid/Collapsible/Collapsible'
import {CompactLayoutComponent} from '../examples/PivotGrid/CompactLayout/CompactLayout'
import {ConfiguratorPluginComponent} from '../examples/PivotGrid/ConfiguratorPlugin/ConfiguratorPlugin'
import {DataChangesComponent} from '../examples/PivotGrid/DataChanges/DataChanges'
import {DrilldownPluginComponent} from '../examples/PivotGrid/DrilldownPlugin/DrilldownPlugin'
import {ExporterPluginComponent} from '../examples/PivotGrid/ExporterPlugin/ExporterPlugin'
import {OutlineLayoutComponent} from '../examples/PivotGrid/OutlineLayout/OutlineLayout'
import {PivotGridWidgetsComponent} from '../examples/PivotGrid/PivotGridWidgets/PivotGridWidgets'
import {RangeEditorPluginComponent} from '../examples/PivotGrid/RangeEditorPlugin/RangeEditorPlugin'
import {TabularLayoutComponent} from '../examples/PivotGrid/TabularLayout/TabularLayout'

import {SimpleDragDropComponent} from "../examples/DragAndDrop/Simple/Simple";
import {ConstraintsDragDropComponent} from '../examples/DragAndDrop/Constraints/Constraints';
import {ProxiesDragDropComponent} from '../examples/DragAndDrop/Proxies/Proxies';
import {HandlesDragDropComponent} from '../examples/DragAndDrop/Handles/Handles';
import {GroupsDragDropComponent} from '../examples/DragAndDrop/Groups/Groups';
import {FilesDragDropComponent} from '../examples/DragAndDrop/Files/Files';
import {DataDragDropComponent} from '../examples/DragAndDrop/Data/Data';

import {BasicPanelComponent} from '../examples/Panels/Basic/Basic';
import {BasicDatePanelComponent} from '../examples/Panels/BasicDate/BasicDate';
import {AdvancedDatePanelComponent} from '../examples/Panels/AdvancedDate/AdvancedDate';
import {TimePanelComponent} from '../examples/Panels/TimePanel/Time';
import {CollapsiblePanelComponent} from '../examples/Panels/Collapsible/Collapsible';
import {ResizableHandleComponent} from '../examples/Panels/ResizableHandle/ResizableHandle';
import {DialogPopupComponent} from '../examples/Popups/Dialog/Dialog';
import {MessagePopupComponent} from '../examples/Popups/Message/Message';
import {ToastPopupComponent} from '../examples/Popups/Toast/Toast';

import {BasicListComponent} from '../examples/Lists/BasicList/BasicList';
import {DisclosureListComponent} from '../examples/Lists/Disclosure/Disclosure';
import {GroupedListComponent} from '../examples/Lists/Grouped/GroupedList';
import {NestedListComponent} from '../examples/Lists/NestedList/NestedList';
import {PagingListComponent} from '../examples/Lists/Paging/PagingList';
import {PullRefreshListComponent} from '../examples/Lists/PullRefresh/PullRefresh';
import {BasicAccordionSwiperComponent} from '../examples/Lists/BasicAccordionSwiper/BasicAccordionSwiper';
import {BasicStepSwiperComponent} from '../examples/Lists/BasicStepSwiper/BasicStepSwiper';
import {UndoableAccordionSwiperComponent} from '../examples/Lists/UndoableAccordionSwiper/UndoableAccordionSwiper';
import {UndoableStepSwiperComponent} from '../examples/Lists/UndoableStepSwiper/UndoableStepSwiper';

import {TouchEventsComponent} from '../examples/TouchEvents/TouchEvents';
import {BasicTabComponent} from '../examples/Tabs/BasicTab/BasicTab';
import {BottomTabComponent} from '../examples/Tabs/BottomTab/BottomTab';
import {IconTabComponent} from '../examples/Tabs/IconTab/IconTab';
import {DesktopTabComponent} from '../examples/Tabs/DesktopTab/DesktopTab';
import {ClosableTabComponent} from '../examples/Tabs/Closable/Closable';
// import {ScrollingTabComponent} from '../examples/Tabs/Scrolling/Scrolling';
import {TabBarComponent} from '../examples/Tabs/TabBar/TabBar';
import {WizardComponent} from '../examples/Wizard/Wizard';

import {CalendarService} from "../examples/Calendar/Calendar.service"
import {GridService} from '../examples/Grid/Grid.service'
import {BigDataService} from '../examples/Grid/AdvancedFeatures/BigData/BigData.service'
import {GridFilteringService} from '../examples/Grid/AddonsDecorations/GridFiltering/GridFiltering.service'

import {ConfigurablePivotHeatmapComponent} from '../examples/D3/HeatMap/ConfigurablePivotHeatmap/ConfigurablePivotHeatmap';
import {PivotHeatmapComponent} from '../examples/D3/HeatMap/PivotHeatmap/PivotHeatmap';
import {PurchasesByDayComponent} from '../examples/D3/HeatMap/PurchasesByDay/PurchasesByDay';
import {SalesPerEmployeeComponent} from '../examples/D3/HeatMap/SalesPerEmployee/SalesPerEmployee';

import {OrgChartComponent} from '../examples/D3/Hierarchy/OrgChart/OrgChart';
import {PackComponent} from '../examples/D3/Hierarchy/Pack/Pack';
import {TreeMapToolTipComponent} from '../examples/D3/Hierarchy/TreeMapToolTip/TreeMapToolTip';
import {ConfigurablePivotTreeMapComponent} from '../examples/D3/Hierarchy/ConfigurablePivotTreeMap/ConfigurablePivotTreeMap';
import {TreeMapComponent} from '../examples/D3/Hierarchy/TreeMap/TreeMap';
import {SunburstComponent} from '../examples/D3/Hierarchy/Sunburst/Sunburst';
import {TreeHierarchyComponent} from '../examples/D3/Hierarchy/Tree/Tree';
import {ZoomableSunburstComponent} from '../examples/D3/Hierarchy/ZoomableSunburst/ZoomableSunburst';
import { ScrollingTabComponent } from '../examples/Tabs/Scrolling/Scrolling';

interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
export declare type ExtAngularRoutes = ExtAngularRoute[];
const routes: ExtAngularRoutes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'components', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/buttons', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/color_picker', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/drag__drop', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/drag__drop/simple', component: SimpleDragDropComponent, text: 'Simple', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/drag__drop/constraints', component: ConstraintsDragDropComponent, text: 'Constraints', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/drag__drop/proxies', component: ProxiesDragDropComponent, text: 'Proxies', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/drag__drop/handles', component: HandlesDragDropComponent, text: 'Handles', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/drag__drop/groups', component: GroupsDragDropComponent, text: 'Groups', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/drag__drop/data', component: DataDragDropComponent, text: 'Data', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/drag__drop/files', component: FilesDragDropComponent, text: 'Files', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'components/draw', component: DrawComponent, text: 'Draw', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/forms', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/gauges', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/layouts', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/media', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/panels', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/popups', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/tabs', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/touch_events', component: TouchEventsComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/wizard', component: WizardComponent, text: 'Wizard', iconCls: 'x-fafa-calendar', xtype: 'homeview', leaf: true },

  { path: 'grids', component: DummyComponent, text: 'Grids', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/core_features', component: DummyComponent, text: 'Grids Core Features', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/addons', component: DummyComponent, text: 'Grids Addons', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/advanced_features', component: DummyComponent, text: 'Grids advanced features', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'trees', component: DummyComponent, text: 'Trees', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'calendar', component: DummyComponent, text: 'Calendar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts', component: DummyComponent, text: 'Charts', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/area', component: DummyComponent, text: 'Area', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/bar', component: DummyComponent, text: 'Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/column', component: DummyComponent, text: 'Column', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/3d_column', component: DummyComponent, text: '3D Column', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/financial', component: DummyComponent, text: 'Financial', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/gauges', component: DummyComponent, text: 'Gauges', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/line', component: DummyComponent, text: 'Line', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/pie', component: DummyComponent, text: 'Pie', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/radar', component: DummyComponent, text: 'Radar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/scatter', component: DummyComponent, text: 'Scatter', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'd3', component: DummyComponent, text: 'D3', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/heatmap', component: DummyComponent, text: 'D3 Heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/hierarchy', component: DummyComponent, text: 'D3 Hierarchy', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids', component: DummyComponent, text: 'Pivot Grids', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'components/buttons/button', component: ButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/buttons/splitbutton', component: SplitButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/buttons/segmentedbutton', component: SegmentedButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/ripple', component: RippleComponent, text: 'Riple', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/carousel', component: CarouselComponent, text: 'Carousel', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/colorpicker', component: ColorPickerComponent, text: 'Color Picker', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
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
  { path: 'grids/core_features/locking_grid', component: LockingGridComponent, text: 'Locking Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/core_features/editable_grid', component: EditableGridComponent, text: 'Editable Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/core_features/xml_grid', component: XMLGridComponent, text: 'XML Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'grids/addons/grid_tools', component: GridToolsComponent, text: 'Grid Tools', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/addons/row_expander', component: RowExpanderComponent, text: 'Row Expander', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/addons/row_body', component: RowBodyComponent, text: 'Row Body', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/addons/summary_row', component: SummaryRowComponent, text: 'Summary Row', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/addons/grid_filtering', component: GridFilteringComponent, text: 'Grid Filtering', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/addons/view_options', component: ViewOptionsComponent, text: 'View Options', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/addons/row_drag_and_drop', component: RowDragAndDropComponent, text: 'Row Drag and Drop Options', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'grids/advanced_features/big_data', component: BigDataComponent, text: 'Big Data', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/advanced_features/select_and_copy', component: SelectAndCopyComponent, text: 'Select and Copy', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/advanced_features/reconfigure_grid', component: ReconfigureGridComponent, text: 'Reconfigure grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/advanced_features/components_in_cells', component: ComponentsInCellsComponent, text: 'Render components in cell', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'grids/advanced_features/stock_ticker', component: StockTickerComponent, text: 'Stock tikcer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'trees/editable_tree', component: EditableTreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'trees/heterogeneous_tree', component: HeterogeneousTreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'trees/tree', component: TreeComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'trees/tree_decorations', component: TreeDecorationsComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'trees/tree_grid', component: TreeGridComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'trees/treelist', component: TreeListComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'components/forms/checkboxfield', component: CheckBoxFieldComponent, text: 'CheckBoxField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/forms/comboboxfield', component: ComboBoxFieldComponent, text: 'ComboBoxField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/forms/multiselect_comboboxfield', component: MultiSelectComboBoxFieldComponent, text: 'MultiSelectComboBoxField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
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
  { path: 'components/layouts/resizable', component: ResizableLayoutComponent, text: 'resizable', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/layouts/vbox', component: vboxLayoutComponent, text: 'vbox', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'components/panels/basic_panels', component: BasicPanelComponent, text: 'Basic Panels', iconCls: 'x-fa fa-calender', xtype: 'homeview', leaf: true },
  { path: 'components/panels/resizable_handle', component: ResizableHandleComponent, text: 'Resizeable handle', iconCls: 'x-fa fa-calender', xtype: 'homeview', leaf: true },
  { path: 'components/panels/collapsible_panel', component: CollapsiblePanelComponent, text: 'Collapsible Panel', iconCls: 'x-fa fa-calender', xtype: 'homeview', leaf: true },
  { path: 'components/panels/basic_date_panel', component: BasicDatePanelComponent, text: 'Basic Date Panel', iconCls: 'x-fa fa-calender', xtype: 'homeview', leaf: true },
  { path: 'components/panels/advanced_date_panel', component: AdvancedDatePanelComponent, text: 'Advanced Date Panel', iconCls: 'x-fa fa-calender', xtype: 'homeview', leaf: true },
  { path: 'components/panels/time_panel', component: TimePanelComponent, text: 'Time Panel', iconCls: 'x-fa fa-calender', xtype: 'homeview', leaf: true },

  { path: 'components/popups/dialog', component: DialogPopupComponent, text: 'Dialog', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/popups/message', component: MessagePopupComponent, text: 'Message', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/popups/toast', component: ToastPopupComponent, text: 'Toast', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'components/lists/basic_list', component: BasicListComponent, text: 'Basic List', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/disclosure', component: DisclosureListComponent, text: 'Disclosure', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/grouped', component: GroupedListComponent, text: 'Grouped', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/nestedlist', component: NestedListComponent, text: 'Nested List', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/pull_refresh', component: PullRefreshListComponent, text: 'Pull refresh', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/paging', component: PagingListComponent, text: 'Paging', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/basic_accordion_swiper', component: BasicAccordionSwiperComponent, text: 'Basic Accordion Swiper', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/basic_step_swiper', component: BasicStepSwiperComponent, text: 'Basic Step Swiper', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/undoable_accordion_swiper', component: UndoableAccordionSwiperComponent, text: 'Basic Accordion Swiper', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/lists/undoable_step_swiper', component: UndoableStepSwiperComponent, text: 'Basic Step Swiper', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'components/tabs/basic_tabs', component: BasicTabComponent, text: 'Basic Taps', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/tabs/bottom_tabs', component: BottomTabComponent, text: 'Bottom Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/tabs/icon_tabs', component: IconTabComponent, text: 'Icon Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/tabs/scrollingtabs', component: ScrollingTabComponent, text: 'Scrolling Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/tabs/closable', component: ClosableTabComponent, text: 'Closable Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/tabs/desktop_tabs', component: DesktopTabComponent, text: 'Desktop Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/tabs/tabbar', component: TabBarComponent, text: 'TabBar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/gauges/basic_gauge', component: BasicGaugeChartComponent, text: 'Basic Gauge', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/boxplot', component: BoxPlotComponent, text: 'Box Plot', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/navigator', component: NavigatorComponent, text: 'Navigator', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/scatter/basic_scatter', component: BasicScatterComponent, text: 'Basic scatter', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/scatter/custom_icons', component: CustomIconsComponent, text: 'Custom icons', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/scatter/bubble', component: BubbleComponent, text: 'Bubble', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/line/basic_line', component: BasicLineComponent, text: 'Basic Line', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/line/basic_markers', component: BasicMarkersComponent, text: 'Basic Markers', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/line/spline', component: SplineComponent, text: 'Spline', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/line/spline_markers', component: SplineMarkersComponent, text: 'Spline Markers', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/line/plot', component: PlotComponent, text: 'Plot', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/line/with_renderer', component: WithRendererComponent, text: 'With Renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/line/realtime', component: RealtimeComponent, text: 'Realtime', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/area/basic_area', component: BasicAreaComponent, text: 'Basic Area', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/area/stacked_area', component: StackedAreaComponent, text: 'Stacked Area', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/area/full_stacked_area', component: FullStackedAreaComponent, text: 'Full Stacked Area', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/area/negative_values_area', component: NegativeValuesAreaComponent, text: 'Negative values area', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/radar/basic_radar', component: BasicRadarComponent, text: 'Basic Radar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/radar/filled', component: FilledComponent, text: 'Filled Component', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/radar/marked', component: MarkedComponent, text: 'Marked Component', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/radar/multiaxis', component: MultiaxisComponent, text: 'Multi axis', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/bar/basic_bar', component: BasicBarComponent, text: 'Basic Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/bar/stacked_bar', component: StackedBarComponent, text: 'Stacked Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/bar/full_stacked_bar', component: FullStackedBarComponent, text: 'Full Stacked Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/pie/3d_pie', component: ThreeDPieComponent, text: '3D Pie', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/pie/basic_pie', component: BasicPieComponent, text: 'Basic Pie', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/pie/donut', component: DonutComponent, text: 'Donut', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/pie/double_donut', component: DoubleDonutComponent, text: 'Double Donut', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/pie/spie', component: SpieComponent, text: 'Spie', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/financial/candlestick', component: CandlestickComponent, text: 'Candle stick', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/financial/ohlc', component: OHLCComponent, text: 'OHLC', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/column/basic_column', component: BasicColumnComponent, text: 'Basic Column', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/column/stacked', component: StackedComponent, text: 'Stacked Column', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/column/column_with_renderer', component: ColumnWithRendererComponent, text: 'Column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/column/multiaxis_column', component: MultiaxisColumnComponent, text: 'Multi axis column', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'charts/3d_column/basic_3d_column', component: Basic3DColumnComponent, text: 'Basic 3D column', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/3d_column/3d_grouped', component: ThreeDGroupedComponent, text: '3D grouped column', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/3d_column/3d_stacked', component: ThreeDStackedComponent, text: '3D stacked', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/3d_column/negative_values', component: NegativeValuesComponent, text: 'Ngeative values', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'charts/3d_column/3d_column_with_renderer', component: ThreeDColumnWithRendererComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'pivot_grids/outline_layout', component: OutlineLayoutComponent, text: 'Outline layout component', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/compact_layout', component: CompactLayoutComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/tabular_layout', component: TabularLayoutComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/collapsible', component: CollapsibleComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/data_changes', component: DataChangesComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/pivot_grid_widgets', component: PivotGridWidgetsComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/drilldown_plugin', component: DrilldownPluginComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/configurator_plugin', component: ConfiguratorPluginComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/range_editor_plugin', component: RangeEditorPluginComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'pivot_grids/exporter_plugin', component: ExporterPluginComponent, text: '3D column with renderer', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'd3/heatmap/purchases_by_day', component: PurchasesByDayComponent, text: 'Purchase by day component', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/heatmap/sales_per_employee', component: SalesPerEmployeeComponent, text: 'Sales per employee', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/heatmap/pivot_heatmap', component: PivotHeatmapComponent, text: 'Pivot heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/heatmap/configurable_pivot_heatmap', component: ConfigurablePivotHeatmapComponent, text: 'Configurable Pivot heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

  { path: 'd3/hierarchy/org_chart', component: OrgChartComponent, text: 'Configurable Pivot heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/hierarchy/pack', component: PackComponent, text: 'Configurable Pivot heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/hierarchy/treemap_tooltip', component: TreeMapToolTipComponent, text: 'TreeMap Tooltip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/hierarchy/configurable_pivot_treemap', component: ConfigurablePivotTreeMapComponent, text: 'Configurable Pivot TreeMap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/hierarchy/treemap', component: TreeMapComponent, text: 'TreeMap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/hierarchy/sunburst', component: SunburstComponent, text: 'Sunburst', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/hierarchy/tree', component: TreeHierarchyComponent, text: 'Tree', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'd3/hierarchy/zoomable_sunburst', component: ZoomableSunburstComponent, text: 'Zoomable Sunburst', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports: [
    BrowserModule,
    ExtAngularModule,
    routingModule
  ],
  declarations: [
    ExtAngularBootstrapComponent,

    LandingpageComponent,
    DummyComponent,

    ButtonComponent,
    SplitButtonComponent,
    SegmentedButtonComponent,
    RippleComponent,
    ColorPickerComponent,
    CarouselComponent,
    DrawComponent,
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
    LockingGridComponent,
    XMLGridComponent,

    GridToolsComponent,
    RowBodyComponent,
    RowExpanderComponent,
    SummaryRowComponent,
    GridFilteringComponent,
    ViewOptionsComponent,
    RowDragAndDropComponent,

    BigDataComponent,
    ReconfigureGridComponent,
    ComponentsInCellsComponent,
    ActionCellsComponent,
    SelectAndCopyComponent,
    StockTickerComponent,

    CheckBoxFieldComponent,
    ComboBoxFieldComponent,
    MultiSelectComboBoxFieldComponent,
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
    ResizableLayoutComponent,
    vboxLayoutComponent,

    ChartToolbarComponent,
    BasicGaugeChartComponent,
    BoxPlotComponent,
    NavigatorComponent,
    BasicScatterComponent,
    BubbleComponent,
    CustomIconsComponent,
    BasicLineComponent,
    BasicMarkersComponent,
    PlotComponent,
    RealtimeComponent,
    SplineComponent,
    SplineMarkersComponent,
    WithRendererComponent,
    BasicAreaComponent,
    FullStackedAreaComponent,
    NegativeValuesAreaComponent,
    StackedAreaComponent,
    BasicRadarComponent,
    FilledComponent,
    MarkedComponent,
    MultiaxisComponent,
    ThreeDPieComponent,
    BasicPieComponent,
    DonutComponent,
    DoubleDonutComponent,
    SpieComponent,

    BasicBarComponent,
    FullStackedBarComponent,
    StackedBarComponent,

    CandlestickComponent,
    OHLCComponent,

    BasicColumnComponent,
    ColumnWithRendererComponent,
    MultiaxisColumnComponent,
    StackedComponent,
    ThreeDColumnWithRendererComponent,
    ThreeDGroupedComponent,
    ThreeDStackedComponent,
    Basic3DColumnComponent,
    NegativeValuesComponent,

    CollapsibleComponent,
    CompactLayoutComponent,
    ConfiguratorPluginComponent,
    DataChangesComponent,
    DrilldownPluginComponent,
    ExporterPluginComponent,
    OutlineLayoutComponent,
    PivotGridWidgetsComponent,
    RangeEditorPluginComponent,
    TabularLayoutComponent,

    SimpleDragDropComponent,
    ConstraintsDragDropComponent,
    ProxiesDragDropComponent,
    HandlesDragDropComponent,
    GroupsDragDropComponent,
    FilesDragDropComponent,
    DataDragDropComponent,

    BasicPanelComponent,
    BasicDatePanelComponent,
    AdvancedDatePanelComponent,
    DialogPopupComponent,
    MessagePopupComponent,
    ToastPopupComponent,
    TimePanelComponent,
    ResizableHandleComponent,
    CollapsiblePanelComponent,

    BasicListComponent,
    DisclosureListComponent,
    GroupedListComponent,
    NestedListComponent,
    PullRefreshListComponent,
    PagingListComponent,
    BasicAccordionSwiperComponent,
    BasicStepSwiperComponent,
    UndoableAccordionSwiperComponent,
    UndoableStepSwiperComponent,

    TouchEventsComponent,
    BasicTabComponent,
    BottomTabComponent,
    IconTabComponent,
    ScrollingTabComponent,
    DesktopTabComponent,
    ClosableTabComponent,
    // ScrollingTabComponent,
    TabBarComponent,
    WizardComponent,

    ConfigurablePivotHeatmapComponent,
    PivotHeatmapComponent,
    PurchasesByDayComponent,
    SalesPerEmployeeComponent,

    OrgChartComponent,
    PackComponent,
    TreeMapToolTipComponent,
    ConfigurablePivotTreeMapComponent,
    TreeMapComponent,
    SunburstComponent,
    TreeHierarchyComponent,
    ZoomableSunburstComponent
  ],
  providers: [
    ExtAngularBootstrapService,
    CalendarService,
    GridService,
    BigDataService,,
    GridFilteringService,
    AppService
  ],
  entryComponents: [
    LandingpageComponent
  ],
  bootstrap: [ExtAngularBootstrapComponent]
})

export class AppModule {
  constructor(@Inject(ExtAngularBootstrapService) extAngularService : ExtAngularBootstrapService, appService: AppService) {
    extAngularService.setBootStrapComponent(LandingpageComponent)
  }
}
