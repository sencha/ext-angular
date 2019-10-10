import { Ext_grid_cell_Base } from '../../../Ext/grid/cell/Base';

export class Ext_grid_cell_Widget extends Ext_grid_cell_Base {
    public static PROPERTIES: string[] = [
'align',
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'bind',
'bodyCls',
'bodyStyle',
'border',
'cellCls',
'cls',
'column',
'constrainAlign',
'controller',
'defaultListenerScope',
'defaultToolWeights',
'disabled',
'flex',
'floated',
'focusCls',
'forceWidth',
'height',
'hidden',
'hideMode',
'id',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'listeners',
'margin',
'name',
'nameable',
'plugins',
'publishes',
'record',
'reference',
'relative',
'renderTo',
'ripple',
'selectable',
'session',
'shadow',
'shareableName',
'shim',
'style',
'toFrontOnShow',
'toolDefaults',
'tools',
'touchAction',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'value',
'viewModel',
'widget',
'width',
'x',
'y',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'widgetcell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'widgetcell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'widgetcell,event'},
{name:'focusenter',parameters:'widgetcell,event'},
{name:'focusleave',parameters:'widgetcell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'widgetcell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Widget.PROPERTIES);
        return Ext_grid_cell_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Widget.EVENTS);
        return Ext_grid_cell_Base.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [
'beforedisabledchange',
'beforeheightchange',
'beforehiddenchange',
'beforetofront',
'beforewidthchange',
'blur',
'disabledchange',
'focus',
'focusenter',
'focusleave',
'heightchange',
'hiddenchange',
'tofront',
'widthchange',
'ready'
];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_grid_cell_Widget.EVENTNAMES);
    //    return Ext_grid_cell_Base.getEventNames(eventnames);
    //}
