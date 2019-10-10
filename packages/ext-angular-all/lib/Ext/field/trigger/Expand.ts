import { Ext_field_trigger_Trigger } from '../../../Ext/field/trigger/Trigger';

export class Ext_field_trigger_Expand extends Ext_field_trigger_Trigger {
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
'field',
'flex',
'floated',
'focusCls',
'focusOnTap',
'group',
'handler',
'height',
'hidden',
'hideMode',
'iconCls',
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
'reference',
'relative',
'renderTo',
'repeat',
'ripple',
'scope',
'session',
'shadow',
'shareableName',
'shim',
'side',
'style',
'toFrontOnShow',
'touchAction',
'translatable',
'triggers',
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
{name:'beforetofront',parameters:'expandtrigger'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'expandtrigger,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'expandtrigger,event'},
{name:'focusenter',parameters:'expandtrigger,event'},
{name:'focusleave',parameters:'expandtrigger,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'expandtrigger'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_field_trigger_Expand.PROPERTIES);
        return Ext_field_trigger_Trigger.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_field_trigger_Expand.EVENTS);
        return Ext_field_trigger_Trigger.getEvents(events);
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
    //    eventnames = eventnames.concat(Ext_field_trigger_Expand.EVENTNAMES);
    //    return Ext_field_trigger_Trigger.getEventNames(eventnames);
    //}
