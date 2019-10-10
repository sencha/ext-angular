import { Ext_grid_cell_Text } from '../../../Ext/grid/cell/Text';

export class Ext_grid_cell_Date extends Ext_grid_cell_Text {
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
{name:'beforetofront',parameters:'datecell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'datecell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'datecell,event'},
{name:'focusenter',parameters:'datecell,event'},
{name:'focusleave',parameters:'datecell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'datecell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Date.PROPERTIES);
        return Ext_grid_cell_Text.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Date.EVENTS);
        return Ext_grid_cell_Text.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_grid_cell_Date.EVENTNAMES);
    //    return Ext_grid_cell_Text.getEventNames(eventnames);
    //}
