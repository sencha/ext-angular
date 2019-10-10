import { Ext_Widget } from '../../Ext/Widget';

export class Ext_draw_SurfaceBase extends Ext_Widget {
    public static PROPERTIES: string[] = [
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
        properties = properties.concat(Ext_draw_SurfaceBase.PROPERTIES);
        return Ext_Widget.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_draw_SurfaceBase.EVENTS);
        return Ext_Widget.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_draw_SurfaceBase.EVENTNAMES);
    //    return Ext_Widget.getEventNames(eventnames);
    //}
