import { EngBase } from '../eng-base';

export class Ext_Base {
    public static PROPERTIES: string[] = [
'eng',
'viewport',
'align',
'plugins',
'responsiveConfig',
'responsiveFormulas',

'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        return properties.concat(Ext_Base.PROPERTIES)
    }
    static getEvents(events) {
        return events.concat(Ext_Base.EVENTS)
    }
}





  //public static XTYPE: string = '';
//public static PROPERTIESOBJECT: any = {
//[object Object]
//"ext": ["string"],
//"ewc": ["string"],
//"viewport":["boolean"],
//"plugins":["Array","Ext.enums.Plugin","Object","Ext.plugin.Abstract"],
//"responsiveFormulas":["Object"]
//};
//static METHODS: any[] = [];

//public static EVENTNAMES: string[] = [];

