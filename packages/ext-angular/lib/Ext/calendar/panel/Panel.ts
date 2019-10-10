import { Ext_calendar_panel_AbstractPanel } from '../../../Ext/calendar/panel/AbstractPanel';

export class Ext_calendar_panel_Panel extends Ext_calendar_panel_AbstractPanel {
    public static PROPERTIES: string[] = [
'calendarList',
'cls',
'compact',
'compactOptions',
'createButton',
'createButtonPosition',
'dateTitle',
'defaultView',
'highlightToday',
'nextButton',
'previousButton',
'referenceHolder',
'sideBar',
'store',
'switcher',
'switcherPosition',
'timezoneOffset',
'titleBar',
'todayButton',
'value',
'views',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,calendar,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'calendar,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'calendar'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'calendar'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'calendar,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'calendar'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'calendar,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'calendar'},
{name:'deactivate',parameters:'oldActiveItem,calendar,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'calendar'},
{name:'drawershow',parameters:'calendar'},
{name:'erased',parameters:'sender'},
{name:'expand',parameters:'calendar'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'calendar,event'},
{name:'focusenter',parameters:'calendar,event'},
{name:'focusleave',parameters:'calendar,event'},
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
{name:'move',parameters:'calendar,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'calendar,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'calendar,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'calendar,context'},
{name:'resizedragcancel',parameters:'calendar,context'},
{name:'resizedragend',parameters:'calendar,context'},
{name:'resizedragstart',parameters:'calendar,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'calendar'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_panel_Panel.PROPERTIES);
        return Ext_calendar_panel_AbstractPanel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_panel_Panel.EVENTS);
        return Ext_calendar_panel_AbstractPanel.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_panel_Panel.EVENTNAMES);
    //    return Ext_calendar_panel_AbstractPanel.getEventNames(eventnames);
    //}
