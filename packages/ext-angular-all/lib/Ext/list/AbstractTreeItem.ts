import { Ext_Widget } from '../../Ext/Widget';

export class Ext_list_AbstractTreeItem extends Ext_Widget {
    public static PROPERTIES: string[] = [
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'bind',
'border',
'cls',
'constrainAlign',
'controller',
'defaultListenerScope',
'disabled',
'expandable',
'expanded',
'flex',
'floated',
'focusCls',
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
'leaf',
'listeners',
'loading',
'margin',
'name',
'nameable',
'node',
'over',
'owner',
'parentItem',
'plugins',
'publishes',
'reference',
'relative',
'renderTo',
'ripple',
'selected',
'selectedParent',
'session',
'shadow',
'shareableName',
'shim',
'style',
'text',
'textProperty',
'toFrontOnShow',
'touchAction',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'viewModel',
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
{name:'beforetofront',parameters:'undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'undefined,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'undefined,event'},
{name:'focusenter',parameters:'undefined,event'},
{name:'focusleave',parameters:'undefined,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'undefined'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_list_AbstractTreeItem.PROPERTIES);
        return Ext_Widget.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_list_AbstractTreeItem.EVENTS);
        return Ext_Widget.getEvents(events);
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
    //    eventnames = eventnames.concat(Ext_list_AbstractTreeItem.EVENTNAMES);
    //    return Ext_Widget.getEventNames(eventnames);
    //}
