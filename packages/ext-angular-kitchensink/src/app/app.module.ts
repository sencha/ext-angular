declare var Ext: any;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'

import * as d3 from 'd3';
window['d3'] = d3;
import * as FroalaEditor from 'froala-editor/js/froala_editor.pkgd.min.js';
window['FroalaEditor'] = FroalaEditor;

import { AppComponent } from './app.component';
import { DummyComponent }                     from './dummy.component';

import { AppService }                         from './app.service'
import { CalendarService }                    from "../examples/Calendar/Calendar.service"
import { GridService }                        from '../examples/grids/Grid.service'
import { BigDataService }                     from '../examples/grids/advanced_features/BigData/BigData.service'
import { GridFilteringService }               from '../examples/grids/add_ons/GridFiltering/GridFiltering.service'

import { ButtonComponent }                    from "../examples/components/buttons/Button/Button";
import { SplitButtonComponent }               from "../examples/components/buttons/SplitButton/SplitButton";
import { SegmentedButtonComponent }           from "../examples/components/buttons/SegmentedButton/SegmentedButton";

import { CarouselComponent }                  from '../examples/components/Carousel/Carousel';
import { ColorPickerComponent }               from '../examples/components/ColorPicker/ColorPicker';

import {SimpleDragDropComponent}              from '../examples/components/DragAndDrop/Simple/Simple';
import {ConstraintsDragDropComponent}         from '../examples/components/DragAndDrop/Constraints/Constraints';
import {ProxiesDragDropComponent}             from '../examples/components/DragAndDrop/Proxies/Proxies';
import {HandlesDragDropComponent}             from '../examples/components/DragAndDrop/Handles/Handles';
import {GroupsDragDropComponent}              from '../examples/components/DragAndDrop/Groups/Groups';
import {FilesDragDropComponent}               from '../examples/components/DragAndDrop/Files/Files';
import {DataDragDropComponent}                from '../examples/components/DragAndDrop/Data/Data';

import {DrawComponent}                         from '../examples/components/Draw/Draw';

import {CheckBoxFieldComponent}                from '../examples/components/FormFields/CheckBoxField/CheckBoxField';
import {CheckBoxGroupsComponent}               from '../examples/components/FormFields/CheckboxGroups/CheckboxGroups';
import {ComboBoxFieldComponent}                from '../examples/components/FormFields/ComboBoxField/ComboBoxField';
import {MultiSelectComboBoxFieldComponent}     from '../examples/components/FormFields/MultiSelectComboBoxField/MultiSelectComboBoxField'
import {ContainerFieldComponent}               from '../examples/components/FormFields/ContainerField/ContainerField';
import {DatePickerFieldComponent}              from '../examples/components/FormFields/DatePickerField/DatePickerField';
import {EmailFieldComponent}                   from '../examples/components/FormFields/EmailField/EmailField';
import {FieldSetComponent}                     from '../examples/components/FormFields/FieldSet/FieldSet';
import {FileFieldComponent}                    from '../examples/components/FormFields/FileField/FileField';
import {FormPanelComponent}                    from '../examples/components/FormFields/FormPanel/FormPanel';
import {NumberFieldComponent}                  from '../examples/components/FormFields/NumberField/NumberField';
import {PasswordFieldComponent}                from '../examples/components/FormFields/PasswordField/PasswordField';
import {RadioFieldComponent}                   from '../examples/components/FormFields/RadioField/RadioField';
import {SearchFieldComponent}                  from '../examples/components/FormFields/SearchField/SearchField';
import {SelectFieldComponent}                  from '../examples/components/FormFields/SelectField/SelectField';
import {SliderFieldComponent}                  from '../examples/components/FormFields/SliderField/SliderField';
import {SpinnerFieldComponent}                 from '../examples/components/FormFields/SpinnerField/SpinnerField';
import {TextAreaFieldComponent}                from '../examples/components/FormFields/TextAreaField/TextAreaField';
import {TextFieldComponent}                    from '../examples/components/FormFields/TextField/TextField';
import {TimeFieldComponent}                    from '../examples/components/FormFields/TimeField/TimeField';
import {ToggleFieldComponent}                  from '../examples/components/FormFields/ToggleField/ToggleField';
import {URLFieldComponent}                     from '../examples/components/FormFields/URLField/URLField';
import {ValidationComponent}                   from '../examples/components/FormFields/Validation/Validation';

import {DefaultGaugeComponent}                 from '../examples/components/Gauges/DefaultGauge/DefaultGauge';
import {NeedleGaugeComponent}                  from '../examples/components/Gauges/NeedleGauge/NeedleGauge';

import {AccordionLayoutComponent}          from '../examples/components/Layouts/AccordionLayout/AccordionLayout';
import {CardLayoutComponent}               from '../examples/components/Layouts/CardLayout/CardLayout';
import {CenterLayoutComponent}             from '../examples/components/Layouts/CenterLayout/CenterLayout';
import {FitLayoutComponent}                from '../examples/components/Layouts/FitLayout/FitLayout';
import {FormLayoutComponent}               from '../examples/components/Layouts/FormLayout/FormLayout';
import {hboxLayoutComponent}               from '../examples/components/Layouts/hboxLayout/hboxLayout';
import {ResizableLayoutComponent}          from '../examples/components/Layouts/ResizableLayout/ResizableLayout';
import {vboxLayoutComponent}               from '../examples/components/Layouts/vboxLayout/vboxLayout';

import {BasicListComponent}               from '../examples/components/Lists/BasicList/BasicList';
import {DisclosureListComponent}          from '../examples/components/Lists/Disclosure/Disclosure';
import {GroupedListComponent}             from '../examples/components/Lists/GroupedList/GroupedList';
import {NestedListComponent}              from '../examples/components/Lists/NestedList/NestedList';
import {PagingListComponent}              from '../examples/components/Lists/PagingList/PagingList';
import {PullRefreshListComponent}         from '../examples/components/Lists/PullRefresh/PullRefresh';
import {BasicAccordionSwiperComponent}    from '../examples/components/Lists/BasicAccordionSwiper/BasicAccordionSwiper';
import {BasicStepSwiperComponent}         from '../examples/components/Lists/BasicStepSwiper/BasicStepSwiper';
import {UndoableAccordionSwiperComponent} from '../examples/components/Lists/UndoableAccordionSwiper/UndoableAccordionSwiper';
import {UndoableStepSwiperComponent}      from '../examples/components/Lists/UndoableStepSwiper/UndoableStepSwiper';

import {AudioComponent}                        from "../examples/components/media/Audio/Audio";
import {VideoComponent}                        from "../examples/components/media/Video/Video";

import {BasicPanelsComponent}         from '../examples/components/Panels/BasicPanels/BasicPanels';
import {BasicDatePanelComponent}      from '../examples/components/Panels/BasicDatePanel/BasicDatePanel';
import {AdvancedDatePanelComponent}   from '../examples/components/Panels/AdvancedDatePanel/AdvancedDatePanel';
import {TimePanelComponent}           from '../examples/components/Panels/TimePanel/TimePanel';
import {CollapsiblePanelComponent}    from '../examples/components/Panels/CollapsiblePanel/CollapsiblePanel';
import {ResizableHandleComponent}     from '../examples/components/Panels/ResizableHandle/ResizableHandle';

import {DialogPopupComponent}         from '../examples/components/Popups/Dialog/Dialog';
import {MessagePopupComponent}        from '../examples/components/Popups/Message/Message';
import {ToastPopupComponent}          from '../examples/components/Popups/Toast/Toast';

import {ProgressBarComponent}                  from '../examples/components/ProgressBar/ProgressBar';
import {RippleComponent}                       from '../examples/components/Ripple/Ripple';
import {SheetComponent}                        from "../examples/components/Sheet/Sheet";

import {BasicTabsComponent}               from '../examples/components/Tabs/BasicTabs/BasicTabs';
import {BottomTabsComponent}              from '../examples/components/Tabs/BottomTabs/BottomTabs';
import {IconTabsComponent}                from '../examples/components/Tabs/IconTabs/IconTabs';
import {DesktopTabsComponent}             from '../examples/components/Tabs/DesktopTabs/DesktopTabs';
import {ClosableTabsComponent}            from '../examples/components/Tabs/ClosableTabs/ClosableTabs';
import {ScrollingTabsComponent}           from '../examples/components/Tabs/ScrollingTabs/ScrollingTabs';
import {TabBarComponent}                  from '../examples/components/Tabs/TabBar/TabBar';

import {TitleBarComponent}                     from '../examples/components/TitleBar/TitleBar';

import {ToolBarComponent}                      from '../examples/components/ToolBars/ToolBar/ToolBar';
import {BreadcrumbToolBarComponent}            from '../examples/components/ToolBars/BreadcrumbToolBar/BreadcrumbToolBar';

import {ToolTipComponent}                      from '../examples/components/ToolTip/ToolTip';
import {TouchEventsComponent}                  from '../examples/components/TouchEvents/TouchEvents';
import {WizardComponent}                       from '../examples/components/Wizard/Wizard';
import {FroalaEditorComponent}                 from '../examples/components/FroalaEditor/FroalaEditor';


import {BasicGridComponent}                from '../examples/grids/core_features/BasicGrid/BasicGrid';
import {EditableGridComponent}             from '../examples/grids/core_features/EditableGrid/EditableGrid';
import {GroupedGridComponent}              from '../examples/grids/core_features/GroupedGrid/GroupedGrid';
import {LockingGridComponent}              from '../examples/grids/core_features/LockingGrid/LockingGrid';
import {XMLGridComponent}                  from '../examples/grids/core_features/XMLGrid/XMLGrid';
import {EditableRowComponent}              from '../examples/grids/core_features/EditableRow/EditableRow';
import {InfiniteGridComponent}             from '../examples/grids/core_features/InfiniteGrid/InfiniteGrid';
import {GridToolsComponent}                from '../examples/grids/add_ons/GridTools/GridTools';
import {RowBodyComponent}                  from '../examples/grids/add_ons/RowBody/RowBody';
import {RowExpanderComponent}              from '../examples/grids/add_ons/RowExpander/RowExpander';
import {SummaryRowComponent}               from '../examples/grids/add_ons/SummaryRow/SummaryRow';
import {GridFilteringComponent}            from '../examples/grids/add_ons/GridFiltering/GridFiltering';
import {ViewOptionsComponent}              from '../examples/grids/add_ons/ViewOptions/ViewOptions';
import {RowDragAndDropComponent}           from '../examples/grids/add_ons/RowDragAndDrop/RowDragAndDrop';
import {DragFormToGridComponent}           from '../examples/grids/add_ons/DragFormToGrid/DragFormToGrid';
import {BigDataComponent}                  from '../examples/grids/advanced_features/BigData/BigData';
import {ReconfigureGridComponent}          from '../examples/grids/advanced_features/ReconfigureGrid/ReconfigureGrid';
import {ComponentsInCellsComponent}        from '../examples/grids/advanced_features/ComponentsInCells/ComponentsInCells';
import {SelectAndCopyComponent}            from '../examples/grids/advanced_features/SelectAndCopy/SelectAndCopy';
import {StockTickerComponent}              from '../examples/grids/advanced_features/StockTicker/StockTicker';


import {EditableTreeComponent}                 from '../examples/Trees/EditableTree/EditableTree';
import {HeterogeneousTreeComponent}            from '../examples/Trees/HeterogeneousTree/HeterogeneousTree';
import {TreeComponent}                         from '../examples/Trees/Tree/Tree';
import {TreeDecorationsComponent}              from '../examples/Trees/TreeDecorations/TreeDecorations';
import {TreeGridComponent}                     from '../examples/Trees/TreeGrid/TreeGrid';
import {TreeListComponent}                     from '../examples/Trees/TreeList/TreeList';
import {TreeReorderComponent}                  from '../examples/Trees/TreeReorder/TreeReorder';

import {CalendarPanelComponent}                from "../examples/Calendar/CalendarPanel/CalendarPanel";
import {CalendarDaysViewComponent}             from "../examples/Calendar/DaysView/DaysView";
import {CalendarDragResizeValidationComponent} from "../examples/Calendar/DragResizeValidation/DragResizeValidation";
import {CalendarMonthViewComponent}            from "../examples/Calendar/MonthView/MonthView";
import {CalendarTimezoneSupportComponent}      from "../examples/Calendar/TimezoneSupport/TimezoneSupport";
import {CalendarWeekViewComponent}             from "../examples/Calendar/WeekView/WeekView";

import {ChartToolbarComponent}             from "../examples/Charts/ChartToolbar"
import {BasicGaugeChartComponent}          from '../examples/Charts/Gauges/BasicGaugeChart/BasicGaugeChart';

import {BoxPlotComponent} from '../examples/Charts/BoxPlot/BoxPlot';
import {NavigatorComponent} from '../examples/Charts/Navigator/Navigator';
import {BasicScatterComponent} from '../examples/Charts/Scatter/BasicScatter/BasicScatter';
import {BubbleComponent} from '../examples/Charts/Scatter/Bubble/Bubble';
import {CustomIconsComponent} from '../examples/Charts/Scatter/CustomIcons/CustomIcons';

import {BasicLineComponent}                from '../examples/Charts/Line/BasicLine/BasicLine';
import {BasicMarkersComponent}             from '../examples/Charts/Line/BasicMarkers/BasicMarkers';
import {PlotComponent}                     from '../examples/Charts/Line/Plot/Plot';
import {RealtimeComponent}                 from '../examples/Charts/Line/Realtime/Realtime';
import {SplineComponent}                   from '../examples/Charts/Line/Spline/Spline';
import {SplineMarkersComponent}            from '../examples/Charts/Line/SplineMarkers/SplineMarkers';
import {WithRendererComponent}             from '../examples/Charts/Line/WithRenderer/WithRenderer';
import {BasicAreaComponent}                from '../examples/Charts/Area/BasicArea/BasicArea';
import {FullStackedAreaComponent}          from '../examples/Charts/Area/FullStackedArea/FullStackedArea';
import {NegativeValuesAreaComponent}       from '../examples/Charts/Area/NegativeValuesArea/NegativeValuesArea';
import {StackedAreaComponent}              from '../examples/Charts/Area/StackedArea/StackedArea';
import {BasicRadarComponent}               from '../examples/Charts/Radar/BasicRadar/BasicRadar';
import {FilledComponent}                   from '../examples/Charts/Radar/Filled/Filled';
import {MarkedComponent}                   from '../examples/Charts/Radar/Marked/Marked';
import {MultiaxisComponent}                from '../examples/Charts/Radar/Multiaxis/Multiaxis';
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
import {BasicColumnComponent}                from '../examples/Charts/Column/BasicColumn/BasicColumn';
import {ColumnWithRendererComponent}         from '../examples/Charts/Column/ColumnWithRenderer/ColumnWithRenderer';
import {MultiaxisColumnComponent}            from '../examples/Charts/Column/MultiaxisColumn/MultiaxisColumn';
import {StackedComponent}                    from '../examples/Charts/Column/Stacked/Stacked';
import {ThreeDColumnWithRendererComponent}   from '../examples/Charts/3DColumn/3DColumnWithRenderer/3DColumnWithRenderer';
import {ThreeDGroupedComponent}              from '../examples/Charts/3DColumn/3DGrouped/3DGrouped';
import {ThreeDStackedComponent}              from '../examples/Charts/3DColumn/3DStacked/3DStacked';
import {Basic3DColumnComponent}              from '../examples/Charts/3DColumn/Basic3DColumn/Basic3DColumn';
import {NegativeValuesComponent}             from '../examples/Charts/3DColumn/NegativeValues/NegativeValues';


import {ConfigPivotHeatmapComponent} from '../examples/D3/HeatMap/ConfigPivotHeatmap/ConfigPivotHeatmap';
import {PivotHeatmapComponent} from '../examples/D3/HeatMap/PivotHeatmap/PivotHeatmap';
import {PurchasesByDayComponent} from '../examples/D3/HeatMap/PurchasesByDay/PurchasesByDay';
import {SalesPerEmployeeComponent} from '../examples/D3/HeatMap/SalesPerEmployee/SalesPerEmployee';
import {OrgChartComponent} from '../examples/D3/Hierarchy/OrgChart/OrgChart';
import {PackComponent} from '../examples/D3/Hierarchy/Pack/Pack';
import {TreeMapToolTipComponent} from '../examples/D3/Hierarchy/TreeMapToolTip/TreeMapToolTip';
import {ConfigPivotTreeMapComponent} from '../examples/D3/Hierarchy/ConfigPivotTreeMap/ConfigPivotTreeMap';
import {TreeMapComponent} from '../examples/D3/Hierarchy/TreeMap/TreeMap';
import {SunburstComponent} from '../examples/D3/Hierarchy/Sunburst/Sunburst';
import {TreeHierarchyComponent} from '../examples/D3/Hierarchy/Tree/Tree';
import {ZoomableSunburstComponent} from '../examples/D3/Hierarchy/ZoomableSunburst/ZoomableSunburst';


import {CollapsibleComponent}         from '../examples/PivotGrid/Collapsible/Collapsible'
import {CompactLayoutComponent}       from '../examples/PivotGrid/CompactLayout/CompactLayout'
import {ConfiguratorPluginComponent}  from '../examples/PivotGrid/ConfiguratorPlugin/ConfiguratorPlugin'
import {DataChangesComponent}         from '../examples/PivotGrid/DataChanges/DataChanges'
import {DrilldownPluginComponent}     from '../examples/PivotGrid/DrilldownPlugin/DrilldownPlugin'
import {ExporterPluginComponent}      from '../examples/PivotGrid/ExporterPlugin/ExporterPlugin'
import {OutlineLayoutComponent}       from '../examples/PivotGrid/OutlineLayout/OutlineLayout'
import {PivotGridWidgetsComponent}    from '../examples/PivotGrid/PivotGridWidgets/PivotGridWidgets'
import {RangeEditorPluginComponent}   from '../examples/PivotGrid/RangeEditorPlugin/RangeEditorPlugin'
import {TabularLayoutComponent}       from '../examples/PivotGrid/TabularLayout/TabularLayout'


var declarations: any = [
  //ActionCellsComponent,
  ChartToolbarComponent,
  AppComponent,
  ButtonComponent,
  SplitButtonComponent,
  SegmentedButtonComponent,
  CarouselComponent,
  ColorPickerComponent,

  RippleComponent,
  ColorPickerComponent,
  FroalaEditorComponent,
  DrawComponent,

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

  AccordionLayoutComponent,
  CardLayoutComponent,
  CenterLayoutComponent,
  FitLayoutComponent,
  FormLayoutComponent,
  hboxLayoutComponent,
  ResizableLayoutComponent,
  vboxLayoutComponent,


  DefaultGaugeComponent,
  NeedleGaugeComponent,

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

  ConfigPivotHeatmapComponent,
  PivotHeatmapComponent,
  PurchasesByDayComponent,
  SalesPerEmployeeComponent,
  OrgChartComponent,
  PackComponent,
  TreeMapToolTipComponent,
  ConfigPivotTreeMapComponent,
  TreeMapComponent,
  SunburstComponent,
  TreeHierarchyComponent,
  ZoomableSunburstComponent

]

var treeRoot = {
  id: '/',
  text: 'All',
  children: [
    { text: 'Components', navIcon: 'icon-buttons', children: [
      { text: 'Buttons', navIcon: 'icon-buttons', children: [
        { text: 'Button', component: ButtonComponent, layout: 'center', navIcon: 'icon-buttons' },
        { text: 'SplitButton', component: SplitButtonComponent, layout: 'center', navIcon: 'icon-buttons' },
        { text: 'SegmentedButton', component: SegmentedButtonComponent, layout: 'center', navIcon: 'icon-segmented-buttons' },
      ]},
      { text: 'Carousel', component: CarouselComponent, navIcon: 'icon-carousel' },
      { text: 'ColorPicker', component: ColorPickerComponent, layout: 'center', navIcon: 'icon-color-picker' },
      { text: 'Drag & Drop', navIcon: 'icon-drag-drop', children: [
        { text: 'Simple', component: SimpleDragDropComponent, navIcon: 'icon-drag-simple' },
        { text: 'Constraints', component: ConstraintsDragDropComponent, navIcon: 'icon-drag-constraint' },
        { text: 'Proxies', component: ProxiesDragDropComponent, navIcon: 'icon-drag-proxy' },
        { text: 'Handles', component: HandlesDragDropComponent, navIcon: 'icon-drag-handle' },
        { text: 'Groups', component: GroupsDragDropComponent, navIcon: 'icon-drag-group' },
        { text: 'Data', component: DataDragDropComponent, navIcon: 'icon-drag-data' },
        { text: 'Files', component: FilesDragDropComponent, navIcon: 'icon-drag-drop-element' }
      ]},
      { text: 'Draw', component: DrawComponent, layout: 'center', navIcon: 'icon-drawing' },
      { text: 'Forms', navIcon: 'icon-forms', children: [
        { text: 'CheckBoxField', component: CheckBoxFieldComponent, layout: 'center', navIcon: 'icon-Forms-CheckBoxField'  },
        { text: 'CheckboxGroups', component: CheckBoxGroupsComponent, layout: 'center', navIcon: 'icon-form-checkboxgroup'  },
        { text: 'ComboBoxField', component: ComboBoxFieldComponent, layout: 'center', navIcon: 'icon-Forms-ComboBoxField'  },
        { text: 'MultiSelect ComboBoxField', component: MultiSelectComboBoxFieldComponent, layout: 'center', navIcon: 'icon-Forms-ComboBoxField'  },
        { text: 'ContainerField', component: ContainerFieldComponent, layout: Ext.os.is.Phone ? 'auto' : 'center', navIcon: 'icon-Forms-ContainerField'  },
        { text: 'DatePickerField', component: DatePickerFieldComponent, layout: 'center', navIcon: 'icon-Forms-DatePickerField'  },
        { text: 'EmailField', component: EmailFieldComponent , layout: 'center', navIcon: 'icon-Forms-EmailField' },
        { text: 'FieldSet', component: FieldSetComponent, layout: 'center', navIcon: 'icon-Forms-FieldSet'  },
        { text: 'FileField', component: FileFieldComponent, layout: 'center', navIcon: 'icon-Forms-FileField'  },
        { text: 'FormPanel', component: FormPanelComponent, navIcon: 'icon-form-panel' },
        { text: 'NumberField', component: NumberFieldComponent, layout: 'center', navIcon: 'icon-Forms-NumberField' },
        { text: 'PasswordField', component: PasswordFieldComponent, layout: 'center', navIcon: 'icon-Forms-PasswordField' },
        { text: 'RadioField', component: RadioFieldComponent, layout: 'center', navIcon: 'icon-Forms-RadioField' },
        { text: 'SearchField', component: SearchFieldComponent, layout: 'center', navIcon: 'icon-Forms-SearchField' },
        { text: 'SelectField', component: SelectFieldComponent, layout: 'center', navIcon: 'icon-Forms-SelectField' },
        { text: 'SliderField', component: SliderFieldComponent, layout: 'center', navIcon: 'icon-Forms-SliderField' },
        { text: 'SpinnerField', component: SpinnerFieldComponent, layout: 'center', navIcon: 'icon-Forms-SpinnerField' },
        { text: 'TextAreaField', component: TextAreaFieldComponent, layout: 'center', navIcon: 'icon-Forms-TextAreaField' },
        { text: 'TextField', component: TextFieldComponent, layout: 'center', navIcon: 'icon-Forms-TextField' },
        { text: 'TimeField', component: TimeFieldComponent, navIcon: 'icon-form-panel' },
        { text: 'ToggleField', component: ToggleFieldComponent, layout: 'center', navIcon: 'icon-Forms-ToggleField' },
        { text: 'URLField', component: URLFieldComponent, layout: 'center', navIcon: 'icon-Forms-URLField' },
        { text: 'Validation', component: ValidationComponent, layout: 'auto', navIcon: 'icon-form-validation'}
      ] },
      { text: 'Gauges', navIcon: 'icon-gauge-charts', children: [
        { text: 'Default Gauge', component: DefaultGaugeComponent, layout: 'center', navIcon: 'icon-gauge-charts' },
        { text: 'Needle Gauge', component: NeedleGaugeComponent, layout: 'center', navIcon: 'icon-gauge-charts' }
      ]},
      { text: 'Layouts', navIcon: 'icon-layouts', children: [
         { text: 'Accordion Layout', component: AccordionLayoutComponent, navIcon: 'icon-layout-accordion' },
         { text: 'Card Layout', component: CardLayoutComponent, navIcon: 'icon-layout-card' },
         { text: 'Center Layout', component: CenterLayoutComponent, navIcon: 'icon-layout-center' },
         { text: 'Fit Layout', component: FitLayoutComponent, navIcon: 'icon-layout-fit' },
         { text: 'Form Layout', component: FormLayoutComponent, layout: 'auto', navIcon: 'icon-layout-form' },
         { text: 'hbox Layout', component: hboxLayoutComponent, layout: 'auto', navIcon: 'icon-layout-horizontal-box' },
         { text: 'Resizable Layout', component: ResizableLayoutComponent, navIcon: 'icon-layout-box' },
         { text: 'vbox Layout', component: vboxLayoutComponent, layout: 'auto', navIcon: 'icon-layout-vertical-box' }
      ]},
      { text: 'Lists', navIcon: 'icon-lists', children: [
        { text: 'Basic List', component: BasicListComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-basic-list' },
        { text: 'Disclosure', component: DisclosureListComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-disclosure-list' },
        { text: 'Grouped List', component: GroupedListComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-grouped-list' },
        { text: 'Nested List', component: NestedListComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-nested-list' },
        { text: 'Pull Refresh', component: PullRefreshListComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-pullrefresh-list' },
        { text: 'Paging List', component: PagingListComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-listpaging-list' },
        { text: 'Basic Accordion Swiper', component: BasicAccordionSwiperComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-basic-accordion-swiper'},
        { text: 'Basic Step Swiper', component: BasicStepSwiperComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-basic-step-swiper'},
        { text: 'Undoable Accordion Swiper', component: UndoableAccordionSwiperComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-undoable-accordion-swiper'},
        { text: 'Undoable Step Swiper', component: UndoableStepSwiperComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-undoable-step-swiper'}
      ]},
      { text: 'Media', navIcon: 'icon-video', children: [
          { text: 'Video', navIcon: 'icon-video', component: VideoComponent },
          { text: 'Audio', navIcon: 'icon-audio', component: AudioComponent }
      ] },
      { text: 'Panels', navIcon: 'icon-panels', children: [
          { text: 'Basic Panels', component: BasicPanelsComponent, layout: Ext.os.is.Phone ? 'auto': 'center', navIcon: 'icon-panels' },
          { text: 'Resizable Handle', component: ResizableHandleComponent, layout: 'fit', navIcon: 'icon-panel-handleresize', hidden: Ext.os.is.Phone },
          { text: 'Collapsible Panel', component: CollapsiblePanelComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-panel-collapsible' },
          { text: 'Basic Date Panel', component: BasicDatePanelComponent, layout: 'center', navIcon: 'icon-panel-date' },
          { text: 'Advanced Date Panel', component: AdvancedDatePanelComponent, layout: 'center', navIcon: 'icon-panel-date-adv', hidden: Ext.os.is.Phone },
          { text: 'Time Panel', component: TimePanelComponent, layout: 'center', navIcon: 'icon-panel-date-adv', hidden: Ext.os.is.Phone },
      ]},
      { text: 'Popups', navIcon: 'icon-windows', children: [
          { text: 'Dialog', component: DialogPopupComponent, layout: 'center', navIcon: 'icon-basic-dialog' },
          { text: 'Message', component: MessagePopupComponent, layout: 'center', navIcon: 'icon-overlays' },
          { text: 'Toast', component: ToastPopupComponent, layout: 'center', navIcon: 'icon-toast-view' }
      ]},
      { text: 'ProgressBar', component: ProgressBarComponent, layout: 'center', navIcon: 'icon-progress-decorated' },
      { text: 'Ripple', component: RippleComponent, layout: 'center', navIcon: 'icon-Ripple' },
      { text: 'Sheet', component: SheetComponent, layout: 'center', navIcon: 'icon-actionsheets' },
      { text: 'Tabs', navIcon: 'icon-tabs', children: [
          { text: 'Basic Tabs', component: BasicTabsComponent, navIcon: 'icon-basic-tabs' },
          { text: 'Bottom Tabs', component: BottomTabsComponent, navIcon: 'icon-bottom-tabs' },
          { text: 'Icon Tabs', component: IconTabsComponent, navIcon: 'icon-icon-tabs' },
          { text: 'Desktop Tabs', component: DesktopTabsComponent, navIcon: 'icon-Desktop-Tabs' },
          { text: 'Closable Tabs', component: ClosableTabsComponent, navIcon: 'icon-Closable-Tabs' },
          { text: 'Scrolling Tabs', component: ScrollingTabsComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-Scrolling-Tabs' },
          { text: 'TabBar', component: TabBarComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-Tab-Bar' }
      ]},
      { text: 'TitleBar', component: TitleBarComponent, navIcon: 'icon-Title-Bar' },
      { text: 'Toolbars', navIcon: 'icon-toolbar',children:[
          { text: 'Tool Bar', component: ToolBarComponent , navIcon: 'icon-toolbar'},
          { text: 'Breadcrumb Tool Bar', component: BreadcrumbToolBarComponent , navIcon: 'icon-toolbar'}
      ] },
      { text: 'Tool Tip', component: ToolTipComponent, layout: 'center', navIcon: 'icon-tooltips'  },
      { text: 'Touch Events', component: TouchEventsComponent, navIcon: 'icon-touch-events' },
      //{ text: 'Transition', component: Transition, navIcon: 'icon-Transition' },
      { text: 'Wizard', component: ButtonComponent, navIcon: 'icon-layout-card-indicator', layout: Ext.os.is.Phone ? 'fit': 'center' },
      { text: 'Froala Editor', component: FroalaEditorComponent, layout: 'center', navIcon: 'icon-editor' },
    ]},

    { text: 'Grids', navIcon: 'icon-grids', children: [
      { text: 'Core Features', navIcon: 'icon-grids', children: [
          { text: 'Basic Grid', component: BasicGridComponent, navIcon: 'icon-grids'},
          { text: 'Grouped Grid', component: GroupedGridComponent, navIcon: 'icon-grouped-grid'},
          { text: 'Locking Grid', component: LockingGridComponent, navIcon: 'icon-locking-grid'},
          { text: 'Editable Grid', component: EditableGridComponent, navIcon: 'icon-editable-grid'},
          { text: 'XML Grid', component: XMLGridComponent, navIcon: 'icon-xml-grid'},
          { text: 'Editable Row', component: EditableRowComponent, navIcon: 'icon-row-editing'},
          { text: 'Infinite Grid', component: InfiniteGridComponent, navIcon: 'icon-buffer-grid'}
      ]},
      { text: 'Add-ons', navIcon: 'icon-framing-buttons', children: [
          { text: 'Grid Tools', component: GridToolsComponent, navIcon: 'icon-grid-tools'},
          { text: 'Row Expander', component: RowExpanderComponent, navIcon: 'icon-row-expander-grid'},
          { text: 'Row Body', component: RowBodyComponent, navIcon: 'icon-row-body-grid'},
          { text: 'Summary Row', component: SummaryRowComponent, navIcon: 'icon-grid-summary'},
          { text: 'Grid Filtering', component: GridFilteringComponent, navIcon: 'icon-grid-filtering'},
          { text: 'View Options', component: ViewOptionsComponent, navIcon: 'icon-view-options-grid'},
          { text: 'Row Drag And Drop', component: RowDragAndDropComponent, navIcon: 'icon-dd-grid-row'},
          { text: 'Drag Form To Grid', component: DragFormToGridComponent, navIcon: 'icon-dd-form-to-grid'}
      ]},
      { text: 'Advanced Features', navIcon: 'icon-grid-plugins', children:[
          { text: 'Big Data', component: BigDataComponent, navIcon: 'icon-big-data-grid' },
          { text: 'Select And Copy', component: SelectAndCopyComponent, navIcon: 'icon-flexible-selection-grid' },
          { text: 'Reconfigure Grid', component: ReconfigureGridComponent, navIcon: 'icon-reconfigure-grid' },
          { text: 'Components In Cells', component: ComponentsInCellsComponent, navIcon: 'icon-grid-tools' },
          { text: 'Stock Ticker', component: StockTickerComponent, navIcon: 'icon-ticker-grid' }
      ]}
    ]},
    { text: 'Trees', navIcon: 'icon-trees', children: [
        { text: 'TreeList', component: TreeListComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-tree-list' },
        { text: 'Tree', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component: TreeComponent, navIcon: 'icon-trees' },
        { text: 'Editable Tree', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component: EditableTreeComponent, navIcon: 'icon-tree-editable'},
        { text: 'Tree Grid', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component: TreeGridComponent, navIcon: 'icon-tree-grid' },
        { text: 'Tree Decorations', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component:TreeDecorationsComponent, navIcon: 'icon-tree-decorations'},
        { text: 'Tree Reorder', component: TreeReorderComponent, navIcon: 'icon-tree-reorder'},
        { text: 'Heterogeneous Tree', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component: HeterogeneousTreeComponent, navIcon: 'icon-heterogeneous-tree'}
    ]},
    { text: 'Calendar', premium: false, navIcon: 'icon-calendar', children:[
        { text: 'Calendar Panel', component: CalendarPanelComponent, navIcon: 'icon-calendar-panel' },
        { text: 'Month View', component: CalendarMonthViewComponent, navIcon: 'icon-calendar-month-view' },
        { text: 'Week View', component: CalendarWeekViewComponent, navIcon: 'icon-calendar-week-view' },
        { text: 'Days View', component: CalendarDaysViewComponent, navIcon: 'icon-calendar-days-view' },
        { text: 'Timezone Support', component: CalendarTimezoneSupportComponent, navIcon: 'icon-calendar-timezone' },
        { text: 'Drag Resize Validation', component: CalendarDragResizeValidationComponent, navIcon: 'icon-calendar-validation' }
    ]},
    { text: 'Charts', premium: false, xpremiumClass: 'x-fa fa-star app-premium-indicator', navIcon: 'icon-charts', children: [
        { text: 'Area', navIcon: 'icon-area-basic', children: [
            { text: 'Basic Area', component: BasicAreaComponent, navIcon: 'icon-area-basic' },
            { text: 'Stacked Area', component: StackedAreaComponent, navIcon: 'icon-area-stacked'},
            { text: 'Full Stacked Area', component: FullStackedAreaComponent, navIcon: 'icon-area-stacked-100'},
            { text: 'Negative Values Area', component: NegativeValuesAreaComponent, navIcon: 'icon-area-negative'}
        ]},
        { text: 'Bar', navIcon: 'icon-bar-basic', children: [
            { text: 'Basic Bar', component: BasicBarComponent, navIcon: 'icon-bar-basic' },
            { text: 'Stacked Bar', component: StackedBarComponent, navIcon: 'icon-bar-stacked' },
            { text: 'Full Stacked Bar', component: FullStackedBarComponent, navIcon: 'icon-bar-stacked-100'}
        ] },
        { text: 'BoxPlot', component: BoxPlotComponent, navIcon: 'icon-boxplot-charts' },
        { text: 'Column', navIcon: 'icon-column-charts', children: [
            { text: 'Basic Column', component: BasicColumnComponent, navIcon: 'icon-column-basic' },
            { text: 'Stacked', component: StackedComponent, navIcon: 'icon-column-stacked' },
            { text: 'Column With Renderer', component: ColumnWithRendererComponent, navIcon: 'icon-column-renderer' },
            { text: 'Multiaxis Column', component: MultiaxisColumnComponent, navIcon: 'icon-column-multi-axis' }
        ] },
        { text: '3D Column', navIcon: 'icon-column-3d', children: [
            { text: 'Basic 3D Column', component: Basic3DColumnComponent, navIcon: 'icon-column-basic-3d' },
            { text: '3D Grouped', component: ThreeDGroupedComponent, navIcon: 'icon-column-grouped-3d' },
            { text: '3D Stacked', component: ThreeDStackedComponent, navIcon: 'icon-column-stacked-3d' },
            { text: 'Negative Values', component: NegativeValuesComponent, navIcon: 'icon-column-negative-3d' },
            { text: '3D Column With Renderer', component: ThreeDColumnWithRendererComponent, navIcon: 'icon-column-renderer-3d' }
        ]},
        { text: 'Financial', navIcon: 'icon-financial-charts', children: [
            { text: 'Candlestick', component: CandlestickComponent, navIcon: 'icon-financial-candlestick' },
            { text: 'OHLC', component: OHLCComponent, navIcon: 'icon-financial-ohlc' }
        ] },
        { text: 'Gauges', navIcon: 'icon-gauge-charts', children: [
            { text: 'Basic Gauge Chart', component: BasicGaugeChartComponent, navIcon: 'icon-gauge-basic' }
        ]},
        { text: 'Line', navIcon: 'icon-line-charts', children: [
            { text: 'Basic Line', component: BasicLineComponent, navIcon: 'icon-line-basic' },
            { text: 'Basic Markers', component: BasicMarkersComponent, navIcon: 'icon-line-markers' },
            { text: 'Spline', component: SplineComponent, navIcon: 'icon-line-spline' },
            { text: 'Spline Markers', component: SplineMarkersComponent, navIcon: 'icon-line-marked-spline' },
            { text: 'Plot', component: PlotComponent, navIcon: 'icon-line-plot' },
            { text: 'With Renderer', component: WithRendererComponent, navIcon: 'icon-line-renderer' },
            { text: 'Realtime', component: RealtimeComponent, navIcon: 'icon-line-real-time' }
        ]},
        //{ text: 'Navigator', component: NavigatorComponent, navIcon: 'icon-navigator-charts' },
        { text: 'Pie', navIcon: 'icon-pie-basic', children: [
            { text: 'Basic Pie', component: BasicPieComponent, navIcon: 'icon-pie-basic' },
            { text: 'Spie', component: SpieComponent, navIcon: 'icon-pie-custom' },
            { text: 'Donut', component: DonutComponent, navIcon: 'icon-pie-donut' },
            { text: 'Double Donut', component: DoubleDonutComponent, navIcon: 'icon-pie-double-donut' },
            { text: '3D Pie', component: ThreeDPieComponent, navIcon: 'icon-pie-3d' }
        ] },
        { text: 'Radar', navIcon: 'icon-radar-charts', children: [
            { text: 'Basic Radar', component: BasicRadarComponent, navIcon: 'icon-radar-basic' },
            { text: 'Filled', component: FilledComponent, navIcon: 'icon-radar-filled' },
            { text: 'Marked', component: MarkedComponent, navIcon: 'icon-radar-marked' },
            { text: 'Multiaxis', component: MultiaxisComponent, navIcon: 'icon-radar-multi-axis' }
        ]},
        { text: 'Scatter', navIcon: 'icon-scatter-charts', children: [
            { text: 'Basic Scatter', component: BasicScatterComponent, navIcon: 'icon-scatter-basic' },
            { text: 'Custom Icons', component: CustomIconsComponent, navIcon: 'icon-scatter-custom-icons' },
            { text: 'Bubble', component: BubbleComponent, navIcon: 'icon-scatter-bubble' }
        ]}
    ]},
     { text: 'D3', premium: false, xpremiumClass: 'x-fa fa-star app-premium-indicator', navIcon: 'icon-d3', children: [
         { text: 'Heatmap', navIcon: 'icon-d3-heatmap', children: [
            { text: 'Purchases By Day', component: PurchasesByDayComponent, navIcon: 'icon-d3-view-heatmap-purchases' },
            { text: 'Sales Per Employee', component: SalesPerEmployeeComponent, navIcon: 'icon-d3-view-heatmap-sales' },
            { text: 'Pivot Heatmap', component: PivotHeatmapComponent, navIcon: 'icon-d3-view-heatmap-pivot' },
            { text: 'Config Pivot Heatmap', component: ConfigPivotHeatmapComponent, navIcon: 'icon-d3-view-heatmap-pivot-configurator' }
         ]},
        { text: 'Hierarchy', navIcon: 'icon-d3-hierarchy', children: [
            { text: 'Org Chart', component: OrgChartComponent, navIcon: 'icon-d3-view-sencha-tree' },
            { text: 'Pack', component: PackComponent, navIcon: 'icon-d3-view-pack' },
            { text: 'Sunburst', component: SunburstComponent, navIcon: 'icon-d3-view-sunburst' },
            { text: 'Zoomable Sunburst', component: ZoomableSunburstComponent, navIcon: 'icon-d3-view-sunburst-zoom' },
            { text: 'Tree', component: TreeHierarchyComponent, navIcon: 'icon-d3-view-tree' },
            { text: 'TreeMap', component: TreeMapComponent, navIcon: 'icon-d3-view-treemap' },
            { text: 'TreeMap Tool Tip', component: TreeMapToolTipComponent, navIcon: 'icon-d3-view-treemap-tooltip' },
            { text: 'Config Pivot TreeMap', component: ConfigPivotTreeMapComponent, navIcon: 'icon-d3-view-treemap-pivot-configurator' }
        ]}
     ]},
    { text: 'Pivot Grids', premium: false, xpremiumClass: 'x-fa fa-star app-premium-indicator', navIcon: 'icon-pivot-grids', children: [
        { text: 'Outline Layout', component: OutlineLayoutComponent, navIcon: 'icon-outline-pivot-grid' },
        { text: 'Compact Layout', component: CompactLayoutComponent, navIcon: 'icon-compact-pivot-grid' },
        { text: 'Tabular Layout', component: TabularLayoutComponent, navIcon: 'icon-tabular-pivot-grid' },
        { text: 'Collapsible', component: CollapsibleComponent, navIcon: 'icon-collapsible-pivot-grid' },
        { text: 'Data Changes', component: DataChangesComponent, navIcon: 'icon-datachanges-pivot-grid' },
        { text: 'Pivot Grid Widgets', component: PivotGridWidgetsComponent, navIcon: 'icon-widgets-pivot-grid' },
        { text: 'Drilldown Plugin', component: DrilldownPluginComponent, navIcon: 'icon-drilldown-pivot-grid' },
        { text: 'Configurator Plugin', component: ConfiguratorPluginComponent, navIcon: 'icon-configurable-pivot-grid' },
        { text: 'Range Editor Plugin', component: RangeEditorPluginComponent, navIcon: 'icon-rangeeditor-pivot-grid' },
        { text: 'Exporter Plugin', component: ExporterPluginComponent, navIcon: 'icon-exporter-pivot-grid' }
    ]}
  ]
}

var theroutes =[
    { path: 'frame-index.html', redirectTo: '/', pathMatch: 'full' },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'components/buttons/button', component: ButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/buttons/splitbutton', component: SplitButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/buttons/segmentedbutton', component: SegmentedButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/carousel', component: CarouselComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/colorpicker', component: ColorPickerComponent, text: 'Color Picker', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

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
    { path: 'components/toolbar', component: DummyComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/touch_events', component: TouchEventsComponent, text: 'components', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/wizard', component: WizardComponent, text: 'Wizard', iconCls: 'x-fafa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/froala_editor', component: FroalaEditorComponent, text: 'Froala Editor', iconCls: 'x-fa fa-editor', xtype: 'homeview', leaf: true },

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

    // { path: 'd3', component: DummyComponent, text: 'D3', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    // { path: 'd3/heatmap', component: DummyComponent, text: 'D3 Heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    // { path: 'd3/hierarchy', component: DummyComponent, text: 'D3 Hierarchy', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    // { path: 'pivot_grids', component: DummyComponent, text: 'Pivot Grids', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

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
    { path: 'components/toolbars/tool_bar', component: ToolBarComponent, text: 'Tool Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/toolbars/breadcrumb_tool_bar', component: BreadcrumbToolBarComponent, text: 'Breadcrumb Tool Bar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/tool_tip', component: ToolTipComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

    { path: 'trees/editable_tree', component: EditableTreeComponent, text: 'Editable Tree', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'trees/heterogeneous_tree', component: HeterogeneousTreeComponent, text: 'Hetrogeneous Tree', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'trees/tree', component: TreeComponent, text: 'Tree', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'trees/tree_decorations', component: TreeDecorationsComponent, text: 'Tree Decorations', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'trees/tree_grid', component: TreeGridComponent, text: 'Tree Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'trees/treelist', component: TreeListComponent, text: 'Tree List', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'trees/tree_reorder', component: TreeReorderComponent, text: 'Tree Reorder', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

    { path: 'grids/core_features/basic_grid', component: BasicGridComponent, text: 'Basic Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/core_features/grouped_grid', component: GroupedGridComponent, text: 'Grouped Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/core_features/locking_grid', component: LockingGridComponent, text: 'Locking Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/core_features/editable_grid', component: EditableGridComponent, text: 'Editable Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/core_features/xml_grid', component: XMLGridComponent, text: 'XML Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/core_features/editable_row', component: EditableRowComponent, text: 'Row Editing', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/core_features/infinite_grid', component: InfiniteGridComponent, text: 'Infinite Grid', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

    { path: 'grids/addons/grid_tools', component: GridToolsComponent, text: 'Grid Tools', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/addons/row_expander', component: RowExpanderComponent, text: 'Row Expander', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/addons/row_body', component: RowBodyComponent, text: 'Row Body', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/addons/summary_row', component: SummaryRowComponent, text: 'Summary Row', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/addons/grid_filtering', component: GridFilteringComponent, text: 'Grid Filtering', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/addons/view_options', component: ViewOptionsComponent, text: 'View Options', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/addons/row_drag_and_drop', component: RowDragAndDropComponent, text: 'Row Drag And Drop', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'grids/addons/drag_form_to_grid', component: DragFormToGridComponent, text: 'Drag Form To Grid', iconCls: 'icon-dd-form-to-grid', xtype: 'homeview', leaf: true },

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
    { path: 'trees/tree_reorder', component: TreeReorderComponent, text: 'Tool Tip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

    { path: 'components/forms/checkboxfield', component: CheckBoxFieldComponent, text: 'CheckBoxField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/forms/comboboxfield', component: ComboBoxFieldComponent, text: 'ComboBoxField', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/forms/checkboxgroups', component: CheckBoxGroupsComponent, text: 'CheckBoxGroups', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
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

    { path: 'components/layouts/center_layout', component: CenterLayoutComponent, text: 'center', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/layouts/fit_layout', component: FitLayoutComponent, text: 'fit', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/layouts/card_layout', component: CardLayoutComponent, text: 'card', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/layouts/hbox_layout', component: hboxLayoutComponent, text: 'hbox', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/layouts/form_layout', component: FormLayoutComponent, text: 'form', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/layouts/resizable_layout', component: ResizableLayoutComponent, text: 'resizable', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/layouts/vbox_layout', component: vboxLayoutComponent, text: 'vbox', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/layouts/accordion_layout', component: AccordionLayoutComponent, text: 'accordion', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

    { path: 'components/panels/basic_panels', component: BasicPanelsComponent, text: 'Basic Panels', iconCls: 'x-fa fa-calender', xtype: 'homeview', leaf: true },
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
    { path: 'components/lists/grouped_list', component: GroupedListComponent, text: 'Grouped List', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/lists/nestedlist', component: NestedListComponent, text: 'Nested List', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/lists/pull_refresh', component: PullRefreshListComponent, text: 'Pull refresh', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/lists/paging_list', component: PagingListComponent, text: 'Paging List', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/lists/basic_accordion_swiper', component: BasicAccordionSwiperComponent, text: 'Basic Accordion Swiper', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/lists/basic_step_swiper', component: BasicStepSwiperComponent, text: 'Basic Step Swiper', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/lists/undoable_accordion_swiper', component: UndoableAccordionSwiperComponent, text: 'Basic Accordion Swiper', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/lists/undoable_step_swiper', component: UndoableStepSwiperComponent, text: 'Basic Step Swiper', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

    { path: 'components/tabs/basic_tabs', component: BasicTabsComponent, text: 'Basic Taps', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/tabs/bottom_tabs', component: BottomTabsComponent, text: 'Bottom Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/tabs/icon_tabs', component: IconTabsComponent, text: 'Icon Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/tabs/scrolling_tabs', component: ScrollingTabsComponent, text: 'Scrolling Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/tabs/closable_tabs', component: ClosableTabsComponent, text: 'Closable Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/tabs/desktop_tabs', component: DesktopTabsComponent, text: 'Desktop Tabs', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/tabs/tabbar', component: TabBarComponent, text: 'TabBar', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

    { path: 'charts/gauges/basic_gauge_chart', component: BasicGaugeChartComponent, text: 'Basic Gauge Chart', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

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
    { path: 'charts/area/negative_values_area', component: NegativeValuesAreaComponent, text: 'Negative Values Area', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },

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
    { path: 'd3/heatmap/config_pivot_heatmap', component: ConfigPivotHeatmapComponent, text: 'Config Pivot heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'd3/hierarchy/org_chart', component: OrgChartComponent, text: 'Configurable Pivot heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'd3/hierarchy/pack', component: PackComponent, text: 'Configurable Pivot heatmap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'd3/hierarchy/treemap_tool_tip', component: TreeMapToolTipComponent, text: 'TreeMap Tooltip', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'd3/hierarchy/config_pivot_treemap', component: ConfigPivotTreeMapComponent, text: 'Config Pivot TreeMap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'd3/hierarchy/treemap', component: TreeMapComponent, text: 'TreeMap', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'd3/hierarchy/sunburst', component: SunburstComponent, text: 'Sunburst', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'd3/hierarchy/tree', component: TreeHierarchyComponent, text: 'Tree', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'd3/hierarchy/zoomable_sunburst', component: ZoomableSunburstComponent, text: 'Zoomable Sunburst', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },



  ];


  function transform(node, parentUrl) {
    node.leaf = !node.hasOwnProperty('children');
    node.iconCls = node.navIcon;

    if (node.text && !node.id) {
        node.id = (parentUrl === '/' ? '' : parentUrl) + '/' + node.text.toLowerCase().replace(/\s/g, '_').replace(/[^\w]/g, '');
    }

    node.name = node.text;

    if (node.children) {
        node.children = node.children.filter(node => !node.hidden);
        node.children.forEach(child => transform(child, node.id))
    }
  }
  transform(treeRoot, null);
  //console.log(treeRoot)
  window['treeroot'] = treeRoot
  //console.log(window['treeroot'])

interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
const routes : ExtAngularRoute[] = theroutes

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ExtAngularModernModule
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
  constructor(appService: AppService) {}
}