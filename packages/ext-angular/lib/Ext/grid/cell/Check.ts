import { Ext_grid_cell_Base } from '../../../Ext/grid/cell/Base';

export class Ext_grid_cell_Check extends Ext_grid_cell_Base {
    public static PROPERTIES: string[] = [
'disabled',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'checkcell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'checkcell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'checkcell,event'},
{name:'focusenter',parameters:'checkcell,event'},
{name:'focusleave',parameters:'checkcell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'checkcell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Check.PROPERTIES);
        return Ext_grid_cell_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Check.EVENTS);
        return Ext_grid_cell_Base.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_grid_cell_Check.EVENTNAMES);
    //    return Ext_grid_cell_Base.getEventNames(eventnames);
    //}
