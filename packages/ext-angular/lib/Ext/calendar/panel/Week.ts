import { Ext_calendar_panel_Days } from '../../../Ext/calendar/panel/Days';

export class Ext_calendar_panel_Week extends Ext_calendar_panel_Days {
    public static PROPERTIES: string[] = [
'firstDayOfWeek',
'value',
'view',
'visibleDays',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,calendar-week,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'calendar-week,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'calendar-week'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeeventadd',parameters:'calendar-week,context'},
{name:'beforeeventdragstart',parameters:'calendar-week,context'},
{name:'beforeeventedit',parameters:'calendar-week,context'},
{name:'beforeeventresizestart',parameters:'calendar-week,context'},
{name:'beforeexpand',parameters:'calendar-week'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'calendar-week,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'calendar-week'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'calendar-week,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'calendar-week'},
{name:'deactivate',parameters:'oldActiveItem,calendar-week,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'calendar-week'},
{name:'drawershow',parameters:'calendar-week'},
{name:'erased',parameters:'sender'},
{name:'eventadd',parameters:'calendar-week,context'},
{name:'eventdrop',parameters:'calendar-week,context'},
{name:'eventedit',parameters:'calendar-week,context'},
{name:'eventresize',parameters:'calendar-week,context'},
{name:'eventtap',parameters:'calendar-week,context'},
{name:'expand',parameters:'calendar-week'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'calendar-week,event'},
{name:'focusenter',parameters:'calendar-week,event'},
{name:'focusleave',parameters:'calendar-week,event'},
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
{name:'move',parameters:'calendar-week,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'calendar-week,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'calendar-week,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'calendar-week,context'},
{name:'resizedragcancel',parameters:'calendar-week,context'},
{name:'resizedragend',parameters:'calendar-week,context'},
{name:'resizedragstart',parameters:'calendar-week,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'calendar-week'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'validateeventadd',parameters:'calendar-week,context'},
{name:'validateeventdrop',parameters:'calendar-week,context'},
{name:'validateeventedit',parameters:'calendar-week,context'},
{name:'validateeventresize',parameters:'calendar-week,context'},
{name:'valuechange',parameters:'calendar-week,context'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_panel_Week.PROPERTIES);
        return Ext_calendar_panel_Days.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_panel_Week.EVENTS);
        return Ext_calendar_panel_Days.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_panel_Week.EVENTNAMES);
    //    return Ext_calendar_panel_Days.getEventNames(eventnames);
    //}
