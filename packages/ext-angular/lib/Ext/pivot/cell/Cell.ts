import { Ext_grid_cell_Cell } from '../../../Ext/grid/cell/Cell';

export class Ext_pivot_cell_Cell extends Ext_grid_cell_Cell {
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
{name:'beforetofront',parameters:'pivotgridcell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'pivotgridcell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'pivotgridcell,event'},
{name:'focusenter',parameters:'pivotgridcell,event'},
{name:'focusleave',parameters:'pivotgridcell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'pivotgridcell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_pivot_cell_Cell.PROPERTIES);
        return Ext_grid_cell_Cell.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_cell_Cell.EVENTS);
        return Ext_grid_cell_Cell.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_pivot_cell_Cell.EVENTNAMES);
    //    return Ext_grid_cell_Cell.getEventNames(eventnames);
    //}
