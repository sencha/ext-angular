import { Ext_dataview_DataView } from '../../Ext/dataview/DataView';

export class Ext_dataview_ChipView extends Ext_dataview_DataView {
    public static PROPERTIES: string[] = [
'closable',
'closableField',
'closeHandler',
'displayField',
'displayTpl',
'iconClsField',
'iconField',
'itemTpl',
'scope',
'ui',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,chipview,oldActiveItem'},
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
{name:'beforetofront',parameters:'chipview'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'chipview,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'childdoubletap',parameters:'chipview,location'},
{name:'childlongpress',parameters:'chipview,location'},
{name:'childmouseenter',parameters:'chipview,location'},
{name:'childmouseleave',parameters:'chipview,location'},
{name:'childsingletap',parameters:'chipview,location'},
{name:'childtap',parameters:'chipview,location'},
{name:'childtaphold',parameters:'chipview,location'},
{name:'childtouchcancel',parameters:'chipview,location'},
{name:'childtouchend',parameters:'chipview,location'},
{name:'childtouchmove',parameters:'chipview,location'},
{name:'childtouchstart',parameters:'chipview,location'},
{name:'deactivate',parameters:'oldActiveItem,chipview,newActiveItem'},
{name:'deselect',parameters:'chipview,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'chipview,event'},
{name:'focusenter',parameters:'chipview,event'},
{name:'focusleave',parameters:'chipview,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemdoubletap',parameters:'chipview,index,target,record,e'},
{name:'itemlongpress',parameters:'chipview,index,target,record,e'},
{name:'itemmouseenter',parameters:'chipview,index,target,record,e'},
{name:'itemmouseleave',parameters:'chipview,index,target,record,e'},
{name:'itemsingletap',parameters:'chipview,index,target,record,e'},
{name:'itemswipe',parameters:'chipview,index,target,record,e'},
{name:'itemtap',parameters:'chipview,index,target,record,e'},
{name:'itemtaphold',parameters:'chipview,index,target,record,e'},
{name:'itemtouchcancel',parameters:'chipview,index,target,record,e'},
{name:'itemtouchend',parameters:'chipview,index,target,record,e'},
{name:'itemtouchmove',parameters:'chipview,index,target,record,e'},
{name:'itemtouchstart',parameters:'chipview,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'chipview,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'chipview'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'chipview,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'rowselection',parameters:'view,selection'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'chipview,selected'},
{name:'selectionchange',parameters:'view,records,selected,selection'},
{name:'show',parameters:'sender'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'chipview'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_dataview_ChipView.PROPERTIES);
        return Ext_dataview_DataView.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_dataview_ChipView.EVENTS);
        return Ext_dataview_DataView.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_dataview_ChipView.EVENTNAMES);
    //    return Ext_dataview_DataView.getEventNames(eventnames);
    //}
