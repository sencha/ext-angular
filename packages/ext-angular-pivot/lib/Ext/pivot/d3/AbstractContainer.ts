import { Ext_panel_Panel } from '../../../Ext/panel/Panel';

export class Ext_pivot_d3_AbstractContainer extends Ext_panel_Panel {
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
        properties = properties.concat(Ext_pivot_d3_AbstractContainer.PROPERTIES);
        return Ext_panel_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_d3_AbstractContainer.EVENTS);
        return Ext_panel_Panel.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [
'ready'
];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_pivot_d3_AbstractContainer.EVENTNAMES);
    //    return Ext_panel_Panel.getEventNames(eventnames);
    //}
