import { Ext_grid_cell_Cell } from '../../../Ext/grid/cell/Cell';

export class Ext_grid_cell_Tree extends Ext_grid_cell_Cell {
    public static PROPERTIES: string[] = [
'align',
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoCheckChildren',
'bind',
'bodyCls',
'bodyStyle',
'border',
'cellCls',
'checkable',
'checkableField',
'checkedField',
'checkOnTriTap',
'cls',
'column',
'constrainAlign',
'controller',
'defaultListenerScope',
'defaultToolWeights',
'disabled',
'enableTri',
'encodeHtml',
'flex',
'floated',
'focusCls',
'formatter',
'height',
'hidden',
'hideMode',
'iconCls',
'iconClsProperty',
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
'rawValue',
'record',
'reference',
'relative',
'renderer',
'renderTo',
'ripple',
'scope',
'selectable',
'session',
'shadow',
'shareableName',
'shim',
'style',
'text',
'toFrontOnShow',
'toolDefaults',
'tools',
'touchAction',
'tpl',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'value',
'viewModel',
'width',
'x',
'y',
'zeroValue',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'beforecheckchange',parameters:'treecell,checked,current,record,e'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'treecell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'treecell,event'},
{name:'checkchange',parameters:'treecell,checked,record,e'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'treecell,event'},
{name:'focusenter',parameters:'treecell,event'},
{name:'focusleave',parameters:'treecell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'treecell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Tree.PROPERTIES);
        return Ext_grid_cell_Cell.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Tree.EVENTS);
        return Ext_grid_cell_Cell.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [
'beforecheckchange',
'beforedisabledchange',
'beforeheightchange',
'beforehiddenchange',
'beforetofront',
'beforewidthchange',
'blur',
'checkchange',
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
    //    eventnames = eventnames.concat(Ext_grid_cell_Tree.EVENTNAMES);
    //    return Ext_grid_cell_Cell.getEventNames(eventnames);
    //}
