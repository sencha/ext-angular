declare var Ext: any;
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AppService} from './app.service'

import * as d3 from 'd3'
window['d3'] = d3
import * as FroalaEditor from 'froala-editor/js/froala_editor.pkgd.min.js';
window['FroalaEditor'] = FroalaEditor;

import { DummyComponent } from './dummy.component';
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
import {ToolBarComponent} from "../examples/ToolBars/ToolBar/ToolBar"
import {BreadcrumbToolBarComponent} from "../examples/ToolBars/BreadcrumbToolBar/BreadcrumbToolBar"
import {ToolTipComponent} from "../examples/ToolTip/ToolTip"
import {ColorPickerComponent} from '../examples/ColorPicker/ColorPicker';
import {FroalaEditorComponent} from '../examples/FroalaEditor/FroalaEditor';

import {NumberFieldComponent} from "../examples/FormFields/NumberField/NumberField"
import {CheckBoxFieldComponent} from '../examples/FormFields/CheckBoxField/CheckBoxField'
import {CheckBoxGroupsComponent} from '../examples/FormFields/CheckboxGroups/CheckboxGroups';
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
import {AccordionLayoutComponent} from "../examples/Layouts/AccordionLayout/AccordionLayout";

import {EditableTreeComponent} from '../examples/Trees/EditableTree/EditableTree';
import {HeterogeneousTreeComponent} from '../examples/Trees/HeterogeneousTree/HeterogeneousTree';
import {TreeComponent} from '../examples/Trees/Tree/Tree';
import {TreeDecorationsComponent} from '../examples/Trees/TreeDecorations/TreeDecorations';
import {TreeGridComponent} from '../examples/Trees/TreeGrid/TreeGrid';
import {TreeListComponent} from '../examples/Trees/TreeList/TreeList';
import {TreeReorderComponent} from '../examples/Trees/TreeReorder/TreeReorder';

import {BasicGridComponent} from '../examples/Grid/BasicGrid/BasicGrid';
import {EditableGridComponent} from '../examples/Grid/EditableGrid/EditableGrid';
import {GroupedGridComponent} from '../examples/Grid/GroupedGrid/GroupedGrid';
import {LockingGridComponent} from '../examples/Grid/LockingGrid/LockingGrid';
import {XMLGridComponent} from '../examples/Grid/XMLGrid/XMLGrid';
import {EditableRowComponent} from '../examples/Grid/EditableRow/EditableRow';
import {InfiniteGridComponent} from '../examples/Grid/InfiniteGrid/InfiniteGrid';

import {GridToolsComponent} from '../examples/Grid/AddonsDecorations/GridTools/GridTools';
import {RowBodyComponent} from '../examples/Grid/AddonsDecorations/RowBody/RowBody';
import {RowExpanderComponent} from '../examples/Grid/AddonsDecorations/RowExpander/RowExpander';
import {SummaryRowComponent} from '../examples/Grid/AddonsDecorations/SummaryRow/SummaryRow';
import {GridFilteringComponent} from '../examples/Grid/AddonsDecorations/GridFiltering/GridFiltering';
import {ViewOptionsComponent} from '../examples/Grid/AddonsDecorations/ViewOptions/ViewOptions';
import {RowDragAndDropComponent} from '../examples/Grid/AddonsDecorations/RowDragAndDrop/RowDragAndDrop';
import {DragFormToGridComponent} from '../examples/Grid/AddonsDecorations/DragFormToGrid/DragFormToGrid';


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

import {BasicPanelsComponent} from '../examples/Panels/BasicPanels/BasicPanels';
import {BasicDatePanelComponent} from '../examples/Panels/BasicDatePanel/BasicDatePanel';
import {AdvancedDatePanelComponent} from '../examples/Panels/AdvancedDatePanel/AdvancedDatePanel';
import {TimePanelComponent} from '../examples/Panels/TimePanel/TimePanel';
import {CollapsiblePanelComponent} from '../examples/Panels/CollapsiblePanel/CollapsiblePanel';
import {ResizableHandleComponent} from '../examples/Panels/ResizableHandle/ResizableHandle';
import {DialogPopupComponent} from '../examples/Popups/Dialog/Dialog';
import {MessagePopupComponent} from '../examples/Popups/Message/Message';
import {ToastPopupComponent} from '../examples/Popups/Toast/Toast';

import {BasicListComponent} from '../examples/Lists/BasicList/BasicList';
import {DisclosureListComponent} from '../examples/Lists/Disclosure/Disclosure';
import {GroupedListComponent} from '../examples/Lists/GroupedList/GroupedList';
import {NestedListComponent} from '../examples/Lists/NestedList/NestedList';
import {PagingListComponent} from '../examples/Lists/PagingList/PagingList';
import {PullRefreshListComponent} from '../examples/Lists/PullRefresh/PullRefresh';
import {BasicAccordionSwiperComponent} from '../examples/Lists/BasicAccordionSwiper/BasicAccordionSwiper';
import {BasicStepSwiperComponent} from '../examples/Lists/BasicStepSwiper/BasicStepSwiper';
import {UndoableAccordionSwiperComponent} from '../examples/Lists/UndoableAccordionSwiper/UndoableAccordionSwiper';
import {UndoableStepSwiperComponent} from '../examples/Lists/UndoableStepSwiper/UndoableStepSwiper';

import {TouchEventsComponent} from '../examples/TouchEvents/TouchEvents';
import {BasicTabsComponent} from '../examples/Tabs/BasicTabs/BasicTabs';
import {BottomTabsComponent} from '../examples/Tabs/BottomTabs/BottomTabs';
import {IconTabsComponent} from '../examples/Tabs/IconTabs/IconTabs';
import {DesktopTabsComponent} from '../examples/Tabs/DesktopTabs/DesktopTabs';
import {ClosableTabsComponent} from '../examples/Tabs/ClosableTabs/ClosableTabs';
// import {ScrollingTabComponent} from './examples/Tabs/Scrolling/Scrolling';
import {TabBarComponent} from '../examples/Tabs/TabBar/TabBar';
import {WizardComponent} from '../examples/Wizard/Wizard';

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
import { ScrollingTabsComponent } from '../examples/Tabs/ScrollingTabs/ScrollingTabs';

import {CalendarService} from "../examples/Calendar/Calendar.service"
import {GridService} from '../examples/Grid/Grid.service'
import {BigDataService} from '../examples/Grid/AdvancedFeatures/BigData/BigData.service'
import {GridFilteringService} from '../examples/Grid/AddonsDecorations/GridFiltering/GridFiltering.service'

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    ButtonComponent,
    SplitButtonComponent,
    SegmentedButtonComponent,
    RippleComponent,
    ColorPickerComponent,
    FroalaEditorComponent,
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
    BreadcrumbToolBarComponent,
    ToolTipComponent,

    EditableTreeComponent,
    HeterogeneousTreeComponent,
    TreeComponent,
    TreeDecorationsComponent,
    TreeGridComponent,
    TreeListComponent,
    TreeReorderComponent,

    BasicGridComponent,
    EditableGridComponent,
    GroupedGridComponent,
    LockingGridComponent,
    XMLGridComponent,
    EditableRowComponent,
    InfiniteGridComponent,

    GridToolsComponent,
    RowBodyComponent,
    RowExpanderComponent,
    SummaryRowComponent,
    GridFilteringComponent,
    ViewOptionsComponent,
    RowDragAndDropComponent,
    DragFormToGridComponent,

    BigDataComponent,
    ReconfigureGridComponent,
    ComponentsInCellsComponent,
    ActionCellsComponent,
    SelectAndCopyComponent,
    StockTickerComponent,

    CheckBoxFieldComponent,
    CheckBoxGroupsComponent,
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
    AccordionLayoutComponent,

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

    BasicPanelsComponent,
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
    BasicTabsComponent,
    BottomTabsComponent,
    IconTabsComponent,
    ScrollingTabsComponent,
    DesktopTabsComponent,
    ClosableTabsComponent,
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExtAngularModernModule
    //SharedModule
  ],
  providers: [
    AppService,
    GridService,
    GridFilteringService,
    CalendarService,
    BigDataService
    //GroupListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(appService: AppService) {
    }
}
