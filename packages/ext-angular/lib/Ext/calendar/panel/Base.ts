import { Ext_calendar_panel_AbstractBase } from '../../../Ext/calendar/panel/AbstractBase';

export class Ext_calendar_panel_Base extends Ext_calendar_panel_AbstractBase {
    public static PROPERTIES: string[] = [
'addForm',
'cls',
'compact',
'compactOptions',
'controlStoreRange',
'dayHeader',
'editForm',
'eventDefaults',
'eventRelayers',
'gestureNavigation',
'store',
'timezoneOffset',
'twoWayBindable',
'value',
'view',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,undefined,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'undefined,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeeventadd',parameters:'undefined,context'},
{name:'beforeeventedit',parameters:'undefined,context'},
{name:'beforeexpand',parameters:'undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'undefined,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'undefined'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'undefined,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'undefined'},
{name:'deactivate',parameters:'oldActiveItem,undefined,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'undefined'},
{name:'drawershow',parameters:'undefined'},
{name:'erased',parameters:'sender'},
{name:'eventadd',parameters:'undefined,context'},
{name:'eventdrop',parameters:'undefined,context'},
{name:'eventedit',parameters:'undefined,context'},
{name:'eventtap',parameters:'undefined,context'},
{name:'expand',parameters:'undefined'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'undefined,event'},
{name:'focusenter',parameters:'undefined,event'},
{name:'focusleave',parameters:'undefined,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'undefined,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'undefined,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'undefined,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'undefined,context'},
{name:'resizedragcancel',parameters:'undefined,context'},
{name:'resizedragend',parameters:'undefined,context'},
{name:'resizedragstart',parameters:'undefined,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'undefined'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'validateeventadd',parameters:'undefined,context'},
{name:'validateeventdrop',parameters:'undefined,context'},
{name:'validateeventedit',parameters:'undefined,context'},
{name:'valuechange',parameters:'undefined,context'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_panel_Base.PROPERTIES);
        return Ext_calendar_panel_AbstractBase.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_panel_Base.EVENTS);
        return Ext_calendar_panel_AbstractBase.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_panel_Base.EVENTNAMES);
    //    return Ext_calendar_panel_AbstractBase.getEventNames(eventnames);
    //}
