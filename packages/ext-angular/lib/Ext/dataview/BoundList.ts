import { Ext_dataview_List } from '../../Ext/dataview/List';

export class Ext_dataview_BoundList extends Ext_dataview_List {
    public static PROPERTIES: string[] = [
'triggerEvent',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,boundlist,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:''},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforegroupcollapse',parameters:'boundlist,group'},
{name:'beforegroupexpand',parameters:'boundlist,group'},
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
{name:'beforetofront',parameters:'boundlist'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'boundlist,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'childdoubletap',parameters:'boundlist,location'},
{name:'childlongpress',parameters:'boundlist,location'},
{name:'childmouseenter',parameters:'boundlist,location'},
{name:'childmouseleave',parameters:'boundlist,location'},
{name:'childsingletap',parameters:'boundlist,location'},
{name:'childtap',parameters:'boundlist,location'},
{name:'childtaphold',parameters:'boundlist,location'},
{name:'childtouchcancel',parameters:'boundlist,location'},
{name:'childtouchend',parameters:'boundlist,location'},
{name:'childtouchmove',parameters:'boundlist,location'},
{name:'childtouchstart',parameters:'boundlist,location'},
{name:'deactivate',parameters:'oldActiveItem,boundlist,newActiveItem'},
{name:'deselect',parameters:'boundlist,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'disclose',parameters:'list,record,target,index,event'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'boundlist,event'},
{name:'focusenter',parameters:'boundlist,event'},
{name:'focusleave',parameters:'boundlist,event'},
{name:'fullscreen',parameters:'sender'},
{name:'groupcollapse',parameters:'boundlist,group'},
{name:'groupexpand',parameters:'boundlist,group'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemaction',parameters:'boundlist,index,record,action'},
{name:'itemdoubletap',parameters:'boundlist,index,target,record,e'},
{name:'itemlongpress',parameters:'boundlist,index,target,record,e'},
{name:'itemmouseenter',parameters:'boundlist,index,target,record,e'},
{name:'itemmouseleave',parameters:'boundlist,index,target,record,e'},
{name:'itemsingletap',parameters:'boundlist,index,target,record,e'},
{name:'itemswipe',parameters:'boundlist,index,target,record,e'},
{name:'itemtap',parameters:'boundlist,index,target,record,e'},
{name:'itemtaphold',parameters:'boundlist,index,target,record,e'},
{name:'itemtouchcancel',parameters:'boundlist,index,target,record,e'},
{name:'itemtouchend',parameters:'boundlist,index,target,record,e'},
{name:'itemtouchmove',parameters:'boundlist,index,target,record,e'},
{name:'itemtouchstart',parameters:'boundlist,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'boundlist,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'boundlist'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'boundlist,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'boundlist,selected'},
{name:'show',parameters:'sender'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'boundlist'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_dataview_BoundList.PROPERTIES);
        return Ext_dataview_List.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_dataview_BoundList.EVENTS);
        return Ext_dataview_List.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_dataview_BoundList.EVENTNAMES);
    //    return Ext_dataview_List.getEventNames(eventnames);
    //}
