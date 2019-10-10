import { Ext_calendar_panel_Days } from '../../../Ext/calendar/panel/Days';

export class Ext_calendar_panel_Day extends Ext_calendar_panel_Days {
    public static PROPERTIES: string[] = [
'view',
'visibleDays',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,calendar-day,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'calendar-day,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'calendar-day'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeeventadd',parameters:'calendar-day,context'},
{name:'beforeeventdragstart',parameters:'calendar-day,context'},
{name:'beforeeventedit',parameters:'calendar-day,context'},
{name:'beforeeventresizestart',parameters:'calendar-day,context'},
{name:'beforeexpand',parameters:'calendar-day'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'calendar-day,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'calendar-day'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'calendar-day,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'calendar-day'},
{name:'deactivate',parameters:'oldActiveItem,calendar-day,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'calendar-day'},
{name:'drawershow',parameters:'calendar-day'},
{name:'erased',parameters:'sender'},
{name:'eventadd',parameters:'calendar-day,context'},
{name:'eventdrop',parameters:'calendar-day,context'},
{name:'eventedit',parameters:'calendar-day,context'},
{name:'eventresize',parameters:'calendar-day,context'},
{name:'eventtap',parameters:'calendar-day,context'},
{name:'expand',parameters:'calendar-day'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'calendar-day,event'},
{name:'focusenter',parameters:'calendar-day,event'},
{name:'focusleave',parameters:'calendar-day,event'},
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
{name:'move',parameters:'calendar-day,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'calendar-day,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'calendar-day,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'calendar-day,context'},
{name:'resizedragcancel',parameters:'calendar-day,context'},
{name:'resizedragend',parameters:'calendar-day,context'},
{name:'resizedragstart',parameters:'calendar-day,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'calendar-day'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'validateeventadd',parameters:'calendar-day,context'},
{name:'validateeventdrop',parameters:'calendar-day,context'},
{name:'validateeventedit',parameters:'calendar-day,context'},
{name:'validateeventresize',parameters:'calendar-day,context'},
{name:'valuechange',parameters:'calendar-day,context'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_panel_Day.PROPERTIES);
        return Ext_calendar_panel_Days.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_panel_Day.EVENTS);
        return Ext_calendar_panel_Days.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_panel_Day.EVENTNAMES);
    //    return Ext_calendar_panel_Days.getEventNames(eventnames);
    //}
