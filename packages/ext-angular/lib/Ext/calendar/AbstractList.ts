import { Ext_dataview_DataView } from '../../Ext/dataview/DataView';

export class Ext_calendar_AbstractList extends Ext_dataview_DataView {
    public static PROPERTIES: string[] = [
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,undefined,oldActiveItem'},
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
{name:'beforetofront',parameters:'undefined'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'undefined,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'childdoubletap',parameters:'undefined,location'},
{name:'childlongpress',parameters:'undefined,location'},
{name:'childmouseenter',parameters:'undefined,location'},
{name:'childmouseleave',parameters:'undefined,location'},
{name:'childsingletap',parameters:'undefined,location'},
{name:'childtap',parameters:'undefined,location'},
{name:'childtaphold',parameters:'undefined,location'},
{name:'childtouchcancel',parameters:'undefined,location'},
{name:'childtouchend',parameters:'undefined,location'},
{name:'childtouchmove',parameters:'undefined,location'},
{name:'childtouchstart',parameters:'undefined,location'},
{name:'deactivate',parameters:'oldActiveItem,undefined,newActiveItem'},
{name:'deselect',parameters:'undefined,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'undefined,event'},
{name:'focusenter',parameters:'undefined,event'},
{name:'focusleave',parameters:'undefined,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemdoubletap',parameters:'undefined,index,target,record,e'},
{name:'itemlongpress',parameters:'undefined,index,target,record,e'},
{name:'itemmouseenter',parameters:'undefined,index,target,record,e'},
{name:'itemmouseleave',parameters:'undefined,index,target,record,e'},
{name:'itemsingletap',parameters:'undefined,index,target,record,e'},
{name:'itemswipe',parameters:'undefined,index,target,record,e'},
{name:'itemtap',parameters:'undefined,index,target,record,e'},
{name:'itemtaphold',parameters:'undefined,index,target,record,e'},
{name:'itemtouchcancel',parameters:'undefined,index,target,record,e'},
{name:'itemtouchend',parameters:'undefined,index,target,record,e'},
{name:'itemtouchmove',parameters:'undefined,index,target,record,e'},
{name:'itemtouchstart',parameters:'undefined,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'undefined,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'undefined'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'undefined,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'rowselection',parameters:'view,selection'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'undefined,selected'},
{name:'selectionchange',parameters:'view,records,selected,selection'},
{name:'show',parameters:'sender'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'undefined'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_AbstractList.PROPERTIES);
        return Ext_dataview_DataView.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_AbstractList.EVENTS);
        return Ext_dataview_DataView.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_AbstractList.EVENTNAMES);
    //    return Ext_dataview_DataView.getEventNames(eventnames);
    //}
