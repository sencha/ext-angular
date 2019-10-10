import { Ext_container_Container } from '../../../Ext/container/Container';

export class Ext_calendar_view_Multi extends Ext_container_Container {
    public static PROPERTIES: string[] = [
'compact',
'compactOptions',
'defaultView',
'layout',
'store',
'timezoneOffset',
'value',
'views',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_view_Multi.PROPERTIES);
        return Ext_container_Container.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_view_Multi.EVENTS);
        return Ext_container_Container.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_view_Multi.EVENTNAMES);
    //    return Ext_container_Container.getEventNames(eventnames);
    //}
