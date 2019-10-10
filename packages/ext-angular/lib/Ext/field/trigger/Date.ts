import { Ext_field_trigger_Expand } from '../../../Ext/field/trigger/Expand';

export class Ext_field_trigger_Date extends Ext_field_trigger_Expand {
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
{name:'beforetofront',parameters:'datetrigger'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'datetrigger,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'datetrigger,event'},
{name:'focusenter',parameters:'datetrigger,event'},
{name:'focusleave',parameters:'datetrigger,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'datetrigger'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_field_trigger_Date.PROPERTIES);
        return Ext_field_trigger_Expand.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_field_trigger_Date.EVENTS);
        return Ext_field_trigger_Expand.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_field_trigger_Date.EVENTNAMES);
    //    return Ext_field_trigger_Expand.getEventNames(eventnames);
    //}
