import { Ext_field_trigger_Trigger } from '../../../Ext/field/trigger/Trigger';

export class Ext_field_trigger_Reveal extends Ext_field_trigger_Trigger {
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
{name:'beforetofront',parameters:'revealtrigger'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'revealtrigger,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'revealtrigger,event'},
{name:'focusenter',parameters:'revealtrigger,event'},
{name:'focusleave',parameters:'revealtrigger,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'revealtrigger'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_field_trigger_Reveal.PROPERTIES);
        return Ext_field_trigger_Trigger.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_field_trigger_Reveal.EVENTS);
        return Ext_field_trigger_Trigger.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_field_trigger_Reveal.EVENTNAMES);
    //    return Ext_field_trigger_Trigger.getEventNames(eventnames);
    //}
