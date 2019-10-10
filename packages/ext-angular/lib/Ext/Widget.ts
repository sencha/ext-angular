import { Ext_Evented } from '../Ext/Evented';

export class Ext_Widget extends Ext_Evented {
    public static PROPERTIES: string[] = [
'alignSelf',
'alwaysOnTop',
'border',
'cls',
'constrainAlign',
'disabled',
'flex',
'floated',
'height',
'hidden',
'hideMode',
'id',
'instanceCls',
'itemId',
'margin',
'name',
'relative',
'renderTo',
'ripple',
'shadow',
'shim',
'style',
'toFrontOnShow',
'touchAction',
'translatable',
'ui',
'userCls',
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
{name:'beforetofront',parameters:'widget'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'widget,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'widget,event'},
{name:'focusenter',parameters:'widget,event'},
{name:'focusleave',parameters:'widget,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'widget'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_Widget.PROPERTIES);
        return Ext_Evented.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_Widget.EVENTS);
        return Ext_Evented.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_Widget.EVENTNAMES);
    //    return Ext_Evented.getEventNames(eventnames);
    //}
