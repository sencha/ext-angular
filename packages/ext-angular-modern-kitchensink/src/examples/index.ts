
import {ButtonComponent} from './Button/Button';
import {SegmentedButtonComponent} from "./SegmentedButton/SegmentedButton"
import {SplitButtonComponent} from "./SplitButton/SplitButton"
import {AudioComponent} from "./Audio/Audio";
import {VideoComponent} from "./Video/Video";
import {CalendarPanelComponent} from "./Calendar/CalendarPanel/CalendarPanel";
import {CalendarDaysViewComponent} from "./Calendar/DaysView/DaysView";
import {CalendarDragResizeValidationComponent} from "./Calendar/DragResizeValidation/DragResizeValidation";
import {CalendarMonthViewComponent} from "./Calendar/MonthView/MonthView";
import {CalendarTimezoneSupportComponent} from "./Calendar/TimezoneSupport/TimezoneSupport";
import {CalendarWeekViewComponent} from "./Calendar/WeekView/WeekView";
import {SheetComponent} from "./Sheet/Sheet";
import {RippleComponent} from './Ripple/Ripple';
import {ProgressBarComponent} from './ProgressBar/ProgressBar';
import {TitleBarComponent} from './TitleBar/TitleBar';
import {ToolBarComponent} from './ToolBar/ToolBar';
import {ToolTipComponent} from './ToolTip/ToolTip';

import {EditableTreeComponent} from './Trees/EditableTree/EditableTree';
import {HeterogeneousTreeComponent} from './Trees/HeterogeneousTree/HeterogeneousTree';
import {TreeComponent} from './Trees/Tree/Tree';
import {TreeDecorationsComponent} from './Trees/TreeDecorations/TreeDecorations';
import {TreeGridComponent} from './Trees/TreeGrid/TreeGrid';
import {TreeListComponent} from './Trees/TreeList/TreeList';
import { DefaultGaugeComponent } from 'src/examples/Gauges/DefaultGauge';
import { NeedleGaugeComponent } from 'src/examples/Gauges/NeedleGauge';

import {BasicGridComponent} from './Grid/BasicGrid/BasicGrid';
import {EditableGridComponent} from './Grid/EditableGrid/EditableGrid';
import {GroupedGridComponent} from './Grid/GroupedGrid/GroupedGrid';
import {ReduxGridComponent} from './Grid/ReduxGrid/ReduxGrid';
import {XMLGridComponent} from './Grid/XMLGrid/XMLGrid';

import {CheckBoxFieldComponent} from './FormFields/CheckBoxField/CheckBoxField';
import {ComboBoxFieldComponent} from './FormFields/ComboBoxField/ComboBoxField';
import {ContainerFieldComponent} from './FormFields/ContainerField/ContainerField';
import {DatePickerFieldComponent} from './FormFields/DatePickerField/DatePickerField';
import {EmailFieldComponent} from './FormFields/EmailField/EmailField';
import {FieldSetComponent} from './FormFields/FieldSet/FieldSet';
import {FileFieldComponent} from './FormFields/FileField/FileField';
import {FormPanelComponent} from './FormFields/FormPanel/FormPanel';
import {NumberFieldComponent} from './FormFields/NumberField/NumberField';
import {PasswordFieldComponent} from './FormFields/PasswordField/PasswordField';
import {RadioFieldComponent} from './FormFields/RadioField/RadioField';
import {SearchFieldComponent} from './FormFields/SearchField/SearchField';
import {SelectFieldComponent} from './FormFields/SelectField/SelectField';
import {SliderFieldComponent} from './FormFields/SliderField/SliderField';


declare var Ext: any;

const treeRoot = {
    id: '/',
    text: 'All',
    children: [
        { text: 'Components', navIcon: 'icon-buttons', children: [
            { text: 'Buttons', navIcon: 'icon-buttons', children: [
                { text: 'Button', component: ButtonComponent, layout: 'center', navIcon: 'icon-buttons' },
                { text: 'SegmentedButton', component: SegmentedButtonComponent, layout: 'center', navIcon: 'icon-segmented-buttons' },
                { text: 'SplitButton', component: SplitButtonComponent, layout: 'center', navIcon: 'icon-buttons' },
            ]},
            { text: 'Carousel', component: ButtonComponent, navIcon: 'icon-carousel' },
            { text: 'Drag & Drop', navIcon: 'icon-drag-drop', children: [
                { text: 'Simple', component: ButtonComponent, navIcon: 'icon-drag-simple' },
                { text: 'Constraints', component: ButtonComponent, navIcon: 'icon-drag-constraint' },
                { text: 'Proxies', component: ButtonComponent, navIcon: 'icon-drag-proxy' },
                { text: 'Handles', component: ButtonComponent, navIcon: 'icon-drag-handle' },
                { text: 'Groups', component: ButtonComponent, navIcon: 'icon-drag-group' },
                { text: 'Data', component: ButtonComponent, navIcon: 'icon-drag-data' },
                { text: 'Files', component: ButtonComponent, navIcon: 'icon-drag-drop-element' }
            ]},
            { text: 'Draw', component: ButtonComponent, navIcon: 'icon-drawing' },
            { text: 'Forms', navIcon: 'icon-forms', children: [
                { text: 'CheckBoxField', component: CheckBoxFieldComponent, layout: 'center', navIcon: 'icon-Forms-CheckBoxField'  },
                { text: 'ComboBoxField', component: ComboBoxFieldComponent, layout: 'center', navIcon: 'icon-Forms-ComboBoxField'  },
                { text: 'ContainerField', component: ContainerFieldComponent, layout: Ext.os.is.Phone ? 'auto' : 'center', navIcon: 'icon-Forms-ContainerField'  },
                { text: 'DatePickerField', component: DatePickerFieldComponent, layout: 'center', navIcon: 'icon-Forms-DatePickerField'  },
                { text: 'EmailField', component: EmailFieldComponent , layout: 'center', navIcon: 'icon-Forms-EmailField' },
                { text: 'FieldSet', component: FieldSetComponent, layout: 'center', navIcon: 'icon-Forms-FieldSet'  },
                { text: 'FileField', component: FileFieldComponent, layout: 'center', navIcon: 'icon-Forms-FileField'  },
                { text: 'FormPanel', component: FormPanelComponent, navIcon: 'icon-form-panel' },
                { text: 'NumberField', component: NumberFieldComponent, layout: 'center', navIcon: 'icon-Forms-NumberField' },
                { text: 'PasswordField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-PasswordField' },
                { text: 'RadioField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-RadioField' },
                // { text: 'Picker', component: Picker, layout: 'center', navIcon: 'icon-picker' },
                { text: 'SearchField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-SearchField' },
                { text: 'SelectField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-SelectField' },
                { text: 'SliderField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-SliderField' },
                { text: 'SpinnerField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-SpinnerField' },
                { text: 'TextAreaField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-TextAreaField' },
                { text: 'TextField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-TextField' },
                { text: 'TimeField', component: ButtonComponent, navIcon: 'icon-form-panel' },
                { text: 'ToggleField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-ToggleField' },
                { text: 'URLField', component: ButtonComponent, layout: 'center', navIcon: 'icon-Forms-URLField' },
                { text: 'Validation', component: ButtonComponent, layout: 'auto', navIcon: 'icon-form-validation'}
            ] },
           
           { text: 'Gauges', navIcon: 'icon-gauge-charts', children: [
                { text: 'Default Gauge', component: DefaultGaugeComponent, layout: 'center', navIcon: 'icon-gauge-charts' },
                { text: 'Needle Gauge', component: NeedleGaugeComponent, layout: 'center', navIcon: 'icon-gauge-charts' }
            ]},
            { text: 'Layouts', navIcon: 'icon-layouts', children: [
                { text: 'card', component: ButtonComponent, navIcon: 'icon-layout-card' },
                { text: 'center', component: ButtonComponent, navIcon: 'icon-layout-center' },
                { text: 'fit', component: ButtonComponent, navIcon: 'icon-layout-fit' },
                { text: 'form', component: ButtonComponent, layout: 'auto', navIcon: 'icon-layout-form' },
                { text: 'hbox', component: ButtonComponent, layout: 'auto', navIcon: 'icon-layout-horizontal-box' },
                { text: 'resizable', component: ButtonComponent, navIcon: 'icon-layout-box' },
                { text: 'vbox', component: ButtonComponent, layout: 'auto', navIcon: 'icon-layout-vertical-box' }
            ]},
            { text: 'Lists', navIcon: 'icon-lists', children: [
                { text: 'Basic List', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-basic-list' },
                { text: 'Disclosure', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-disclosure-list' },
                { text: 'Grouped', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-grouped-list' },
                { text: 'NestedList', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-nested-list' },
                { text: 'Pull Refresh', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-pullrefresh-list' },
                { text: 'Paging', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-listpaging-list' },
                { text: 'Basic Accordion Swiper', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-basic-accordion-swiper'},
                { text: 'Basic Step Swiper', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-basic-step-swiper'},
                { text: 'Undoable Accordion Swiper', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-undoable-accordion-swiper'},
                { text: 'Undoable Step Swiper', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-undoable-step-swiper'}
            ]},
            { text: 'Media', navIcon: 'x-fa fa-video-camera', children: [
                { text: 'Video', navIcon: 'icon-video', component: VideoComponent },
                { text: 'Audio', navIcon: 'icon-audio', component: AudioComponent }
            ] },
            { text: 'Panels', navIcon: 'icon-panels', children: [
                { text: 'Basic Panels', component: ButtonComponent, layout: Ext.os.is.Phone ? 'auto': 'center', navIcon: 'icon-panels' },
                { text: 'Resizable Handle', component: ButtonComponent, layout: 'fit', navIcon: 'icon-panel-handleresize', hidden: Ext.os.is.Phone },
                { text: 'Collapsible Panel', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-panel-collapsible' },
                { text: 'Basic Date Panel', component: ButtonComponent, layout: 'center', navIcon: 'icon-panel-date' },
                { text: 'Advanced Date Panel', component: ButtonComponent, layout: 'center', navIcon: 'icon-panel-date-adv', hidden: Ext.os.is.Phone },
                { text: 'Time Panel', component: ButtonComponent, layout: 'center', navIcon: 'icon-panel-time', hidden: Ext.os.is.Phone },
            ]},
            { text: 'Popups', navIcon: 'icon-windows', children: [
                { text: 'Dialog', component: ButtonComponent, layout: 'center', navIcon: 'icon-basic-dialog' },
                { text: 'Msg', component: ButtonComponent, layout: 'center', navIcon: 'icon-overlays' },
                { text: 'Toast', component: ButtonComponent, layout: 'center', navIcon: 'icon-toast-view' }
            ]},
            { text: 'ProgressBar', component: ProgressBarComponent, layout: 'center', navIcon: 'icon-progress-decorated' },
            { text: 'Ripple', component: RippleComponent, layout: 'center', navIcon: 'icon-Ripple' },
            { text: 'Sheet', component: SheetComponent, layout: 'center', navIcon: 'icon-actionsheets' },
            { text: 'Tabs', navIcon: 'icon-tabs', children: [
                { text: 'Basic Tabs', component: ButtonComponent, navIcon: 'icon-basic-tabs' },
                { text: 'Bottom Tabs', component: ButtonComponent, navIcon: 'icon-bottom-tabs' },
                { text: 'Icon Tabs', component: ButtonComponent, navIcon: 'icon-icon-tabs' },
                { text: 'Desktop Tabs', component: ButtonComponent, navIcon: 'icon-Desktop-Tabs' },
                { text: 'Closable', component: ButtonComponent, navIcon: 'icon-Closable-Tabs' },
                { text: 'ScrollingTabs', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-Scrolling-Tabs' },
                { text: 'TabBar', component: ButtonComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-Tab-Bar' }        
            ]},
            { text: 'TitleBar', component: TitleBarComponent, navIcon: 'icon-Title-Bar' },
            { text: 'Toolbar', component: ToolBarComponent, navIcon: 'icon-toolbar' },
            { text: 'ToolTip', component: ToolTipComponent, layout: 'center', navIcon: 'icon-tooltips'  },
            { text: 'Touch Events', component: ButtonComponent, navIcon: 'icon-touch-events' },
            //{ text: 'Transition', component: Transition, navIcon: 'icon-Transition' },
            { text: 'Wizard', component: ButtonComponent, navIcon: 'icon-layout-card-indicator', layout: Ext.os.is.Phone ? 'fit': 'center' },
        ]},

        { text: 'Grids', navIcon: 'icon-grids', children: [
            { text: 'Core Features', navIcon: 'icon-grids', children: [
                { text: 'Basic Grid', component: BasicGridComponent, navIcon: 'icon-grids'},
                { text: 'Grouped Grid', component: GroupedGridComponent, navIcon: 'icon-grouped-grid'},
                { text: 'Editable Grid', component: EditableGridComponent, navIcon: 'icon-editable-grid'},
                { text: 'XML Grid', component: XMLGridComponent, navIcon: 'icon-xml-grid'}
            ]},
            { text: 'Add-ons', navIcon: 'icon-framing-buttons', children: [
                { text: 'Grid Tools', component: ButtonComponent, navIcon: 'icon-grid-tools'},
                { text: 'Row Expander', component: ButtonComponent, navIcon: 'icon-row-expander-grid'},
                { text: 'Row Body', component: ButtonComponent, navIcon: 'icon-row-body-grid'},
                { text: 'Summary Row', component: ButtonComponent, navIcon: 'icon-grid-summary'},
                { text: 'View Options', component: ButtonComponent, navIcon: 'icon-view-options-grid'}
            ]},
            { text: 'Advanced Features', navIcon: 'icon-grid-plugins', children:[
                { text: 'Big Data', component: ButtonComponent, navIcon: 'icon-big-data-grid' },
                { text: 'Select And Copy', component: ButtonComponent, navIcon: 'icon-flexible-selection-grid' },
                { text: 'Reconfigure Grid', component: ButtonComponent, navIcon: 'icon-reconfigure-grid' },
                { text: 'Render Components In Cells', component: ButtonComponent, navIcon: 'icon-grid-tools' },
                { text: 'Stock Ticker', component: ButtonComponent, navIcon: 'icon-ticker-grid' }
            ]},
            { text: 'Redux Grid', component: ReduxGridComponent, navIcon: 'icon-Redux-Grid' }
        ] },
        { text: 'Trees', navIcon: 'icon-trees', children: [
            { text: 'TreeList', component: TreeListComponent, layout: Ext.os.is.Phone ? 'fit': 'center', navIcon: 'icon-tree-list' },
            { text: 'Tree', premium: true, component: TreeComponent, navIcon: 'icon-trees' },
            { text: 'Editable Tree', premium: true, component: EditableTreeComponent, navIcon: 'icon-tree-editable'},
            { text: 'Tree Grid', premium: true, component: TreeGridComponent, navIcon: 'icon-tree-grid' },
            { text: 'Tree Decorations', premium: true, component:TreeDecorationsComponent, navIcon: 'icon-tree-decorations'},
            { text: 'Heterogeneous Tree', premium: true, component: HeterogeneousTreeComponent, navIcon: 'icon-heterogeneous-tree'}
        ] },
        { text: 'Calendar', premium: false, navIcon: 'icon-calendar', children:[
            { text: 'Calendar Panel', component: CalendarPanelComponent, navIcon: 'icon-calendar-panel' },
            { text: 'Month View', component: CalendarMonthViewComponent, navIcon: 'icon-calendar-month-view' },
            { text: 'Week View', component: CalendarWeekViewComponent, navIcon: 'icon-calendar-week-view' },
            { text: 'Days View', component: CalendarDaysViewComponent, navIcon: 'icon-calendar-days-view' },
            { text: 'Timezone Support', component: CalendarTimezoneSupportComponent, navIcon: 'icon-calendar-timezone' },
            { text: 'Drag Resize Validation', component: CalendarDragResizeValidationComponent, navIcon: 'icon-calendar-validation' }
        ]},
        { text: 'Charts', premium: true, navIcon: 'icon-charts', children: [
            { text: 'Area', navIcon: 'icon-area-basic', children: [
                { text: 'Basic Area', component: ButtonComponent, navIcon: 'icon-area-basic' },
                { text: 'Stacked Area', component: ButtonComponent, navIcon: 'icon-area-stacked'},
                { text: 'Full Stacked Area', component: ButtonComponent, navIcon: 'icon-area-stacked-100'},
                { text: 'Negative Values Area', component: ButtonComponent, navIcon: 'icon-area-negative'}
            ] },
            { text: 'Bar', navIcon: 'icon-bar-basic', children: [
                { text: 'Basic Bar', component: ButtonComponent, navIcon: 'icon-bar-basic' },
                { text: 'Stacked Bar', component: ButtonComponent, navIcon: 'icon-bar-stacked' },
                { text: 'Full Stacked Bar', component: ButtonComponent, navIcon: 'icon-bar-stacked-100'}
            ] },
            { text: 'BoxPlot', component: ButtonComponent, navIcon: 'icon-boxplot-charts' },
            { text: 'Column', navIcon: 'icon-column-charts', children: [
                { text: 'Basic Column', component: ButtonComponent, navIcon: 'icon-column-basic' },
                { text: 'Stacked', component: ButtonComponent, navIcon: 'icon-column-stacked' },
                { text: 'Column With Renderer', component: ButtonComponent, navIcon: 'icon-column-renderer' },
                { text: 'Multiaxis Column', component: ButtonComponent, navIcon: 'icon-column-multi-axis' }
            ] },
            { text: '3D Column', navIcon: 'icon-column-3d', children: [
                { text: 'Basic 3D Column', component: ButtonComponent, navIcon: 'icon-column-basic-3d' },
                { text: '3D Grouped', component: ButtonComponent, navIcon: 'icon-column-grouped-3d' },
                { text: '3D Stacked', component: ButtonComponent, navIcon: 'icon-column-stacked-3d' },
                { text: 'Negative Values', component: ButtonComponent, navIcon: 'icon-column-negative-3d' },
                { text: '3D Column With Renderer', component: ButtonComponent, navIcon: 'icon-column-renderer-3d' }
            ]},
            { text: 'Financial', navIcon: 'icon-financial-charts', children: [
                { text: 'Candlestick', component: ButtonComponent, navIcon: 'icon-financial-candlestick' },
                { text: 'OHLC', component: ButtonComponent, navIcon: 'icon-financial-ohlc' }
            ] },
            { text: 'Gauges', navIcon: 'icon-gauge-charts', children: [
                { text: 'Basic Gauge', component: ButtonComponent, navIcon: 'icon-gauge-basic' }  
            ] }, 
            { text: 'Line', navIcon: 'icon-line-charts', children: [
                { text: 'Basic Line', component: ButtonComponent, navIcon: 'icon-line-basic' },
                { text: 'Basic Markers', component: ButtonComponent, navIcon: 'icon-line-markers' },
                { text: 'Spline', component: ButtonComponent, navIcon: 'icon-line-spline' },
                { text: 'Spline Markers', component: ButtonComponent, navIcon: 'icon-line-marked-spline' },
                { text: 'Plot', component: ButtonComponent, navIcon: 'icon-line-plot' },
                { text: 'With Renderer', component: ButtonComponent, navIcon: 'icon-line-renderer' },
                { text: 'Realtime', component: ButtonComponent, navIcon: 'icon-line-real-time' }
            ] },
            { text: 'Navigator', component: Navigator, navIcon: 'icon-navigator-charts' },
            { text: 'Pie', navIcon: 'icon-pie-basic', children: [
                { text: 'Basic Pie', component: ButtonComponent, navIcon: 'icon-pie-basic' },
                { text: 'Spie', component: ButtonComponent, navIcon: 'icon-pie-custom' },
                { text: 'Donut', component: ButtonComponent, navIcon: 'icon-pie-donut' },
                { text: 'Double Donut', component: ButtonComponent, navIcon: 'icon-pie-double-donut' },
                { text: '3D Pie', component: ButtonComponent, navIcon: 'icon-pie-3d' } 
            ] },
            { text: 'Radar', navIcon: 'icon-radar-charts', children: [
                { text: 'Basic Radar', component: ButtonComponent, navIcon: 'icon-radar-basic' },
                { text: 'Filled', component: ButtonComponent, navIcon: 'icon-radar-filled' },
                { text: 'Marked', component: ButtonComponent, navIcon: 'icon-radar-marked' },
                { text: 'Multiaxis', component: ButtonComponent, navIcon: 'icon-radar-multi-axis' }
            ] },
            { text: 'Scatter', navIcon: 'icon-scatter-charts', children: [
                { text: 'Basic Scatter', component: ButtonComponent, navIcon: 'icon-scatter-basic' },
                { text: 'Custom Icons', component: ButtonComponent, navIcon: 'icon-scatter-custom-icons' },
                { text: 'Bubble', component: ButtonComponent, navIcon: 'icon-scatter-bubble' }
            ] }
        ] },
        { text: 'D3', premium: true, navIcon: 'icon-d3', children: [
            { text: 'Heatmap', navIcon: 'icon-d3-heatmap', children: [
                { text: 'Purchases By Day', component: ButtonComponent, navIcon: 'icon-d3-view-heatmap-purchases' },
                { text: 'Sales Per Employee', component: ButtonComponent, navIcon: 'icon-d3-view-heatmap-sales' },
                { text: 'Pivot Heatmap', component: ButtonComponent, navIcon: 'icon-d3-view-heatmap-pivot' },
                { text: 'Configurable Pivot Heatmap', component: ButtonComponent, navIcon: 'icon-d3-view-heatmap-pivot-configurator' }
            ]},
            { text: 'Hierarchy', navIcon: 'icon-d3-hierarchy', children: [
                { text: 'Org Chart', component: ButtonComponent, navIcon: 'icon-d3-view-sencha-tree' },
                { text: 'Pack', component: ButtonComponent, navIcon: 'icon-d3-view-pack' },
                { text: 'Sunburst', component: ButtonComponent, navIcon: 'icon-d3-view-sunburst' },
                { text: 'Zoomable Sunburst', component: ButtonComponent, navIcon: 'icon-d3-view-sunburst-zoom' },
                { text: 'Tree', component: ButtonComponent, navIcon: 'icon-d3-view-tree' },
                { text: 'TreeMap', component: ButtonComponent, navIcon: 'icon-d3-view-treemap' },
                { text: 'TreeMap Tooltip', component: ButtonComponent, navIcon: 'icon-d3-view-treemap-tooltip' },
                { text: 'Configurable Pivot TreeMap', component: ButtonComponent, navIcon: 'icon-d3-view-treemap-pivot-configurator' }
            ]}
        ] },
        { text: 'Pivot Grids', premium: true, navIcon: 'icon-pivot-grids', children: [
            { text: 'Outline Layout', component: ButtonComponent, navIcon: 'icon-outline-pivot-grid' },
            { text: 'Compact Layout', component: ButtonComponent, navIcon: 'icon-compact-pivot-grid' },
            { text: 'Tabular Layout', component: ButtonComponent, navIcon: 'icon-tabular-pivot-grid' },
            { text: 'Collapsible', component: ButtonComponent, navIcon: 'icon-collapsible-pivot-grid' },
            { text: 'Data Changes', component: ButtonComponent, navIcon: 'icon-datachanges-pivot-grid' },
            { text: 'Pivot Grid Widgets', component: ButtonComponent, navIcon: 'icon-widgets-pivot-grid' },
            { text: 'Drilldown Plugin', component: ButtonComponent, navIcon: 'icon-drilldown-pivot-grid' },
            { text: 'Configurator Plugin', component: ButtonComponent, navIcon: 'icon-configurable-pivot-grid' },
            { text: 'Range Editor Plugin', component: ButtonComponent, navIcon: 'icon-rangeeditor-pivot-grid' },
            { text: 'Exporter Plugin', component: ButtonComponent, navIcon: 'icon-exporter-pivot-grid' }
        ]},

    ]
};

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

export const navTreeRoot = treeRoot;