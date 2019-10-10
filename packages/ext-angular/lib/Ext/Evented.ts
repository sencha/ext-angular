import { Ext_Base } from '../Ext/Base';

export class Ext_Evented extends Ext_Base {
    public static PROPERTIES: string[] = [
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_Evented.PROPERTIES);
        return Ext_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_Evented.EVENTS);
        return Ext_Base.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_Evented.EVENTNAMES);
    //    return Ext_Base.getEventNames(eventnames);
    //}
