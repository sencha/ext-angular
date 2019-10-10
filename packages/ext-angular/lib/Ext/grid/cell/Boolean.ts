import { Ext_grid_cell_Text } from '../../../Ext/grid/cell/Text';

export class Ext_grid_cell_Boolean extends Ext_grid_cell_Text {
    public static PROPERTIES: string[] = [
'falseText',
'trueText',
'undefinedText',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'booleancell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'booleancell,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'booleancell,event'},
{name:'focusenter',parameters:'booleancell,event'},
{name:'focusleave',parameters:'booleancell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'booleancell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Boolean.PROPERTIES);
        return Ext_grid_cell_Text.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Boolean.EVENTS);
        return Ext_grid_cell_Text.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_grid_cell_Boolean.EVENTNAMES);
    //    return Ext_grid_cell_Text.getEventNames(eventnames);
    //}
