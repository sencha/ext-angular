import { Ext_panel_Panel } from '../../../Ext/panel/Panel';

export class Ext_ux_colorpick_Selector extends Ext_panel_Panel {
    public static PROPERTIES: string[] = [
'alphaDecimalFormat',
'cancelButtonText',
'color',
'fieldPad',
'fieldWidth',
'format',
'okButtonText',
'showOkCancelButtons',
'showPreviousColor',
'value',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'cancel',parameters:'colorselector'},
{name:'change',parameters:'colorselector,color,previousColor'},
{name:'ok',parameters:'colorselector,color'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_ux_colorpick_Selector.PROPERTIES);
        return Ext_panel_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_ux_colorpick_Selector.EVENTS);
        return Ext_panel_Panel.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [
'cancel',
'change',
'ok',
'ready'
];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_ux_colorpick_Selector.EVENTNAMES);
    //    return Ext_panel_Panel.getEventNames(eventnames);
    //}
