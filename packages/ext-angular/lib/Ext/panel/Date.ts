import { Ext_Panel } from '../../Ext/Panel';

export class Ext_panel_Date extends Ext_Panel {
    public static PROPERTIES: string[] = [
'animation',
'autoConfirm',
'captionFormat',
'dateCellFormat',
'disabledDates',
'disabledDays',
'focusableDate',
'format',
'handler',
'headerFormat',
'headerLength',
'hideCaptions',
'hideOutside',
'maxDate',
'minDate',
'navigationPosition',
'nextText',
'panes',
'prevText',
'scope',
'selectOnNavigate',
'showAfterMaxDate',
'showBeforeMinDate',
'showFooter',
'showTodayButton',
'specialDates',
'specialDays',
'splitTitle',
'startDay',
'titleAnimation',
'transformCellCls',
'value',
'weekendDays',
'yearPicker',
'yearPickerDefaults',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,datepanel,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'datepanel,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'datepanel'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'datepanel'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'datepanel,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'datepanel'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'datepanel,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'datepanel'},
{name:'deactivate',parameters:'oldActiveItem,datepanel,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'datepanel'},
{name:'drawershow',parameters:'datepanel'},
{name:'erased',parameters:'sender'},
{name:'expand',parameters:'datepanel'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'datepanel,event'},
{name:'focusenter',parameters:'datepanel,event'},
{name:'focusleave',parameters:'datepanel,event'},
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
{name:'move',parameters:'datepanel,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'datepanel,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'datepanel,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'datepanel,context'},
{name:'resizedragcancel',parameters:'datepanel,context'},
{name:'resizedragend',parameters:'datepanel,context'},
{name:'resizedragstart',parameters:'datepanel,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'datepanel'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_panel_Date.PROPERTIES);
        return Ext_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_panel_Date.EVENTS);
        return Ext_Panel.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_panel_Date.EVENTNAMES);
    //    return Ext_Panel.getEventNames(eventnames);
    //}
