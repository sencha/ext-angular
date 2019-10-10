import { Ext_Widget } from '../../../Ext/Widget';

export class Ext_grid_cell_Base extends Ext_Widget {
    public static PROPERTIES: string[] = [
'align',
'bodyCls',
'bodyStyle',
'cellCls',
'cls',
'column',
'hidden',
'record',
'selectable',
'value',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'gridcellbase'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'gridcellbase,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'gridcellbase,event'},
{name:'focusenter',parameters:'gridcellbase,event'},
{name:'focusleave',parameters:'gridcellbase,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'gridcellbase'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_grid_cell_Base.PROPERTIES);
        return Ext_Widget.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_grid_cell_Base.EVENTS);
        return Ext_Widget.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_grid_cell_Base.EVENTNAMES);
    //    return Ext_Widget.getEventNames(eventnames);
    //}
