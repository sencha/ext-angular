import { Ext_calendar_panel_Base } from '../../../Ext/calendar/panel/Base';

export class Ext_calendar_panel_Days extends Ext_calendar_panel_Base {
    public static PROPERTIES: string[] = [
'allowSelection',
'dayHeader',
'dayHeaderFormat',
'displayOverlap',
'draggable',
'droppable',
'endTime',
'eventRelayers',
'highlightToday',
'resizeEvents',
'showNowMarker',
'startTime',
'timeFormat',
'view',
'visibleDays',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,calendar-days,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'calendar-days,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'calendar-days'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeeventadd',parameters:'calendar-days,context'},
{name:'beforeeventdragstart',parameters:'calendar-days,context'},
{name:'beforeeventedit',parameters:'calendar-days,context'},
{name:'beforeeventresizestart',parameters:'calendar-days,context'},
{name:'beforeexpand',parameters:'calendar-days'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'calendar-days,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'calendar-days'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'calendar-days,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'calendar-days'},
{name:'deactivate',parameters:'oldActiveItem,calendar-days,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'calendar-days'},
{name:'drawershow',parameters:'calendar-days'},
{name:'erased',parameters:'sender'},
{name:'eventadd',parameters:'calendar-days,context'},
{name:'eventdrop',parameters:'calendar-days,context'},
{name:'eventedit',parameters:'calendar-days,context'},
{name:'eventresize',parameters:'calendar-days,context'},
{name:'eventtap',parameters:'calendar-days,context'},
{name:'expand',parameters:'calendar-days'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'calendar-days,event'},
{name:'focusenter',parameters:'calendar-days,event'},
{name:'focusleave',parameters:'calendar-days,event'},
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
{name:'move',parameters:'calendar-days,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'calendar-days,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'calendar-days,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'calendar-days,context'},
{name:'resizedragcancel',parameters:'calendar-days,context'},
{name:'resizedragend',parameters:'calendar-days,context'},
{name:'resizedragstart',parameters:'calendar-days,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'calendar-days'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'validateeventadd',parameters:'calendar-days,context'},
{name:'validateeventdrop',parameters:'calendar-days,context'},
{name:'validateeventedit',parameters:'calendar-days,context'},
{name:'validateeventresize',parameters:'calendar-days,context'},
{name:'valuechange',parameters:'calendar-days,context'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_panel_Days.PROPERTIES);
        return Ext_calendar_panel_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_panel_Days.EVENTS);
        return Ext_calendar_panel_Base.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_panel_Days.EVENTNAMES);
    //    return Ext_calendar_panel_Base.getEventNames(eventnames);
    //}
