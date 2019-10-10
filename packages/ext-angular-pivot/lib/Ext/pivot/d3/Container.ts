import { Ext_pivot_d3_AbstractContainer } from '../../../Ext/pivot/d3/AbstractContainer';

export class Ext_pivot_d3_Container extends Ext_pivot_d3_AbstractContainer {
    public static PROPERTIES: string[] = [
'configurator',
'drawing',
'matrix',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_pivot_d3_Container.PROPERTIES);
        return Ext_pivot_d3_AbstractContainer.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_d3_Container.EVENTS);
        return Ext_pivot_d3_AbstractContainer.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [
'ready'
];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_pivot_d3_Container.EVENTNAMES);
    //    return Ext_pivot_d3_AbstractContainer.getEventNames(eventnames);
    //}
