import { Ext_dataview_BoundList } from '../../Ext/dataview/BoundList';

export class Ext_panel_YearPicker extends Ext_dataview_BoundList {
    public static PROPERTIES: string[] = [
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,yearpicker,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:''},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforegroupcollapse',parameters:'yearpicker,group'},
{name:'beforegroupexpand',parameters:'yearpicker,group'},
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
{name:'beforetofront',parameters:'yearpicker'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'yearpicker,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'childdoubletap',parameters:'yearpicker,location'},
{name:'childlongpress',parameters:'yearpicker,location'},
{name:'childmouseenter',parameters:'yearpicker,location'},
{name:'childmouseleave',parameters:'yearpicker,location'},
{name:'childsingletap',parameters:'yearpicker,location'},
{name:'childtap',parameters:'yearpicker,location'},
{name:'childtaphold',parameters:'yearpicker,location'},
{name:'childtouchcancel',parameters:'yearpicker,location'},
{name:'childtouchend',parameters:'yearpicker,location'},
{name:'childtouchmove',parameters:'yearpicker,location'},
{name:'childtouchstart',parameters:'yearpicker,location'},
{name:'deactivate',parameters:'oldActiveItem,yearpicker,newActiveItem'},
{name:'deselect',parameters:'yearpicker,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'disclose',parameters:'list,record,target,index,event'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'yearpicker,event'},
{name:'focusenter',parameters:'yearpicker,event'},
{name:'focusleave',parameters:'yearpicker,event'},
{name:'fullscreen',parameters:'sender'},
{name:'groupcollapse',parameters:'yearpicker,group'},
{name:'groupexpand',parameters:'yearpicker,group'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemaction',parameters:'yearpicker,index,record,action'},
{name:'itemdoubletap',parameters:'yearpicker,index,target,record,e'},
{name:'itemlongpress',parameters:'yearpicker,index,target,record,e'},
{name:'itemmouseenter',parameters:'yearpicker,index,target,record,e'},
{name:'itemmouseleave',parameters:'yearpicker,index,target,record,e'},
{name:'itemsingletap',parameters:'yearpicker,index,target,record,e'},
{name:'itemswipe',parameters:'yearpicker,index,target,record,e'},
{name:'itemtap',parameters:'yearpicker,index,target,record,e'},
{name:'itemtaphold',parameters:'yearpicker,index,target,record,e'},
{name:'itemtouchcancel',parameters:'yearpicker,index,target,record,e'},
{name:'itemtouchend',parameters:'yearpicker,index,target,record,e'},
{name:'itemtouchmove',parameters:'yearpicker,index,target,record,e'},
{name:'itemtouchstart',parameters:'yearpicker,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'yearpicker,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'yearpicker'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'yearpicker,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'yearpicker,selected'},
{name:'show',parameters:'sender'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'yearpicker'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_panel_YearPicker.PROPERTIES);
        return Ext_dataview_BoundList.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_panel_YearPicker.EVENTS);
        return Ext_dataview_BoundList.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_panel_YearPicker.EVENTNAMES);
    //    return Ext_dataview_BoundList.getEventNames(eventnames);
    //}
