import { Ext_draw_SurfaceBase } from '../../Ext/draw/SurfaceBase';

export class Ext_draw_Surface extends Ext_draw_SurfaceBase {
    public static PROPERTIES: string[] = [
'background',
'dirty',
'flipRtlText',
'items',
'rect',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'surface'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'surface,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'surface,event'},
{name:'focusenter',parameters:'surface,event'},
{name:'focusleave',parameters:'surface,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'surface'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_draw_Surface.PROPERTIES);
        return Ext_draw_SurfaceBase.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_draw_Surface.EVENTS);
        return Ext_draw_SurfaceBase.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_draw_Surface.EVENTNAMES);
    //    return Ext_draw_SurfaceBase.getEventNames(eventnames);
    //}
