import { Ext_grid_cell_Text } from '../../../Ext/grid/cell/Text';

export class Ext_grid_cell_Number extends Ext_grid_cell_Text {
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
{name:'beforetofront',parameters:'numbercell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'numbercell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'numbercell,event'},
{name:'focusenter',parameters:'numbercell,event'},
{name:'focusleave',parameters:'numbercell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'numbercell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Number.PROPERTIES);
        return Ext_grid_cell_Text.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Number.EVENTS);
        return Ext_grid_cell_Text.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_grid_cell_Number.EVENTNAMES);
    //    return Ext_grid_cell_Text.getEventNames(eventnames);
    //}
