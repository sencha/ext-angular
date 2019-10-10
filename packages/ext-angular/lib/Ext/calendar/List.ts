import { Ext_calendar_AbstractList } from '../../Ext/calendar/AbstractList';

export class Ext_calendar_List extends Ext_calendar_AbstractList {
    public static PROPERTIES: string[] = [
'enableToggle',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,calendar-list,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:''},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'calendar-list'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'calendar-list,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'childdoubletap',parameters:'calendar-list,location'},
{name:'childlongpress',parameters:'calendar-list,location'},
{name:'childmouseenter',parameters:'calendar-list,location'},
{name:'childmouseleave',parameters:'calendar-list,location'},
{name:'childsingletap',parameters:'calendar-list,location'},
{name:'childtap',parameters:'calendar-list,location'},
{name:'childtaphold',parameters:'calendar-list,location'},
{name:'childtouchcancel',parameters:'calendar-list,location'},
{name:'childtouchend',parameters:'calendar-list,location'},
{name:'childtouchmove',parameters:'calendar-list,location'},
{name:'childtouchstart',parameters:'calendar-list,location'},
{name:'deactivate',parameters:'oldActiveItem,calendar-list,newActiveItem'},
{name:'deselect',parameters:'calendar-list,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'calendar-list,event'},
{name:'focusenter',parameters:'calendar-list,event'},
{name:'focusleave',parameters:'calendar-list,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemdoubletap',parameters:'calendar-list,index,target,record,e'},
{name:'itemlongpress',parameters:'calendar-list,index,target,record,e'},
{name:'itemmouseenter',parameters:'calendar-list,index,target,record,e'},
{name:'itemmouseleave',parameters:'calendar-list,index,target,record,e'},
{name:'itemsingletap',parameters:'calendar-list,index,target,record,e'},
{name:'itemswipe',parameters:'calendar-list,index,target,record,e'},
{name:'itemtap',parameters:'calendar-list,index,target,record,e'},
{name:'itemtaphold',parameters:'calendar-list,index,target,record,e'},
{name:'itemtouchcancel',parameters:'calendar-list,index,target,record,e'},
{name:'itemtouchend',parameters:'calendar-list,index,target,record,e'},
{name:'itemtouchmove',parameters:'calendar-list,index,target,record,e'},
{name:'itemtouchstart',parameters:'calendar-list,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'calendar-list,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'calendar-list'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'calendar-list,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'rowselection',parameters:'view,selection'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'calendar-list,selected'},
{name:'selectionchange',parameters:'view,records,selected,selection'},
{name:'show',parameters:'sender'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'calendar-list'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_List.PROPERTIES);
        return Ext_calendar_AbstractList.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_List.EVENTS);
        return Ext_calendar_AbstractList.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_List.EVENTNAMES);
    //    return Ext_calendar_AbstractList.getEventNames(eventnames);
    //}
