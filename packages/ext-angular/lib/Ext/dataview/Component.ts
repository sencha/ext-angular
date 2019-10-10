import { Ext_dataview_Abstract } from '../../Ext/dataview/Abstract';

export class Ext_dataview_Component extends Ext_dataview_Abstract {
    public static PROPERTIES: string[] = [
'defaultType',
'itemConfig',
'itemContentCls',
'itemDataMap',
'itemInnerCls',
'maxItemCache',
'striped',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,componentdataview,oldActiveItem'},
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
{name:'beforetofront',parameters:'componentdataview'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'componentdataview,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'childdoubletap',parameters:'componentdataview,location'},
{name:'childlongpress',parameters:'componentdataview,location'},
{name:'childmouseenter',parameters:'componentdataview,location'},
{name:'childmouseleave',parameters:'componentdataview,location'},
{name:'childsingletap',parameters:'componentdataview,location'},
{name:'childtap',parameters:'componentdataview,location'},
{name:'childtaphold',parameters:'componentdataview,location'},
{name:'childtouchcancel',parameters:'componentdataview,location'},
{name:'childtouchend',parameters:'componentdataview,location'},
{name:'childtouchmove',parameters:'componentdataview,location'},
{name:'childtouchstart',parameters:'componentdataview,location'},
{name:'deactivate',parameters:'oldActiveItem,componentdataview,newActiveItem'},
{name:'deselect',parameters:'componentdataview,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'componentdataview,event'},
{name:'focusenter',parameters:'componentdataview,event'},
{name:'focusleave',parameters:'componentdataview,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemdoubletap',parameters:'componentdataview,index,target,record,e'},
{name:'itemlongpress',parameters:'componentdataview,index,target,record,e'},
{name:'itemmouseenter',parameters:'componentdataview,index,target,record,e'},
{name:'itemmouseleave',parameters:'componentdataview,index,target,record,e'},
{name:'itemsingletap',parameters:'componentdataview,index,target,record,e'},
{name:'itemswipe',parameters:'componentdataview,index,target,record,e'},
{name:'itemtap',parameters:'componentdataview,index,target,record,e'},
{name:'itemtaphold',parameters:'componentdataview,index,target,record,e'},
{name:'itemtouchcancel',parameters:'componentdataview,index,target,record,e'},
{name:'itemtouchend',parameters:'componentdataview,index,target,record,e'},
{name:'itemtouchmove',parameters:'componentdataview,index,target,record,e'},
{name:'itemtouchstart',parameters:'componentdataview,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'componentdataview,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'componentdataview'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'componentdataview,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'componentdataview,selected'},
{name:'show',parameters:'sender'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'componentdataview'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_dataview_Component.PROPERTIES);
        return Ext_dataview_Abstract.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_dataview_Component.EVENTS);
        return Ext_dataview_Abstract.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_dataview_Component.EVENTNAMES);
    //    return Ext_dataview_Abstract.getEventNames(eventnames);
    //}
