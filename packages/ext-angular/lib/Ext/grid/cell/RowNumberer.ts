import { Ext_grid_cell_Number } from '../../../Ext/grid/cell/Number';

export class Ext_grid_cell_RowNumberer extends Ext_grid_cell_Number {
    public static PROPERTIES: string[] = [
'format',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'rownumberercell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'rownumberercell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'rownumberercell,event'},
{name:'focusenter',parameters:'rownumberercell,event'},
{name:'focusleave',parameters:'rownumberercell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'rownumberercell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_RowNumberer.PROPERTIES);
        return Ext_grid_cell_Number.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_RowNumberer.EVENTS);
        return Ext_grid_cell_Number.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_grid_cell_RowNumberer.EVENTNAMES);
    //    return Ext_grid_cell_Number.getEventNames(eventnames);
    //}
