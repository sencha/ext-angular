import { Ext_calendar_panel_Base } from '../../../Ext/calendar/panel/Base';

export class Ext_calendar_panel_Weeks extends Ext_calendar_panel_Base {
    public static PROPERTIES: string[] = [
'addOnSelect',
'allowSelection',
'dayFormat',
'dayHeader',
'dayHeaderFormat',
'draggable',
'droppable',
'eventRelayers',
'firstDayOfWeek',
'highlightToday',
'overflowText',
'showOverflow',
'view',
'visibleDays',
'visibleWeeks',
'weekendDays',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,calendar-weeks,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'calendar-weeks,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'calendar-weeks'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeeventadd',parameters:'calendar-weeks,context'},
{name:'beforeeventdragstart',parameters:'calendar-weeks,context'},
{name:'beforeeventedit',parameters:'calendar-weeks,context'},
{name:'beforeexpand',parameters:'calendar-weeks'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'calendar-weeks,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'calendar-weeks'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'calendar-weeks,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'calendar-weeks'},
{name:'deactivate',parameters:'oldActiveItem,calendar-weeks,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'calendar-weeks'},
{name:'drawershow',parameters:'calendar-weeks'},
{name:'erased',parameters:'sender'},
{name:'eventadd',parameters:'calendar-weeks,context'},
{name:'eventdrop',parameters:'calendar-weeks,context'},
{name:'eventedit',parameters:'calendar-weeks,context'},
{name:'eventtap',parameters:'calendar-weeks,context'},
{name:'expand',parameters:'calendar-weeks'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'calendar-weeks,event'},
{name:'focusenter',parameters:'calendar-weeks,event'},
{name:'focusleave',parameters:'calendar-weeks,event'},
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
{name:'move',parameters:'calendar-weeks,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'calendar-weeks,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'calendar-weeks,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'calendar-weeks,context'},
{name:'resizedragcancel',parameters:'calendar-weeks,context'},
{name:'resizedragend',parameters:'calendar-weeks,context'},
{name:'resizedragstart',parameters:'calendar-weeks,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'calendar-weeks'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'validateeventadd',parameters:'calendar-weeks,context'},
{name:'validateeventdrop',parameters:'calendar-weeks,context'},
{name:'validateeventedit',parameters:'calendar-weeks,context'},
{name:'valuechange',parameters:'calendar-weeks,context'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_panel_Weeks.PROPERTIES);
        return Ext_calendar_panel_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_panel_Weeks.EVENTS);
        return Ext_calendar_panel_Base.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_panel_Weeks.EVENTNAMES);
    //    return Ext_calendar_panel_Base.getEventNames(eventnames);
    //}
