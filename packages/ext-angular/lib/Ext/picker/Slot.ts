import { Ext_dataview_DataView } from '../../Ext/dataview/DataView';

export class Ext_picker_Slot extends Ext_dataview_DataView {
    public static PROPERTIES: string[] = [
'align',
'cls',
'displayField',
'flex',
'itemTpl',
'name',
'scrollable',
'showTitle',
'title',
'triggerEvent',
'value',
'valueField',
'verticallyCenterItems',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,pickerslot,oldActiveItem'},
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
{name:'beforetofront',parameters:'pickerslot'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'pickerslot,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'childdoubletap',parameters:'pickerslot,location'},
{name:'childlongpress',parameters:'pickerslot,location'},
{name:'childmouseenter',parameters:'pickerslot,location'},
{name:'childmouseleave',parameters:'pickerslot,location'},
{name:'childsingletap',parameters:'pickerslot,location'},
{name:'childtap',parameters:'pickerslot,location'},
{name:'childtaphold',parameters:'pickerslot,location'},
{name:'childtouchcancel',parameters:'pickerslot,location'},
{name:'childtouchend',parameters:'pickerslot,location'},
{name:'childtouchmove',parameters:'pickerslot,location'},
{name:'childtouchstart',parameters:'pickerslot,location'},
{name:'deactivate',parameters:'oldActiveItem,pickerslot,newActiveItem'},
{name:'deselect',parameters:'pickerslot,records'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'pickerslot,event'},
{name:'focusenter',parameters:'pickerslot,event'},
{name:'focusleave',parameters:'pickerslot,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemdoubletap',parameters:'pickerslot,index,target,record,e'},
{name:'itemlongpress',parameters:'pickerslot,index,target,record,e'},
{name:'itemmouseenter',parameters:'pickerslot,index,target,record,e'},
{name:'itemmouseleave',parameters:'pickerslot,index,target,record,e'},
{name:'itemsingletap',parameters:'pickerslot,index,target,record,e'},
{name:'itemswipe',parameters:'pickerslot,index,target,record,e'},
{name:'itemtap',parameters:'pickerslot,index,target,record,e'},
{name:'itemtaphold',parameters:'pickerslot,index,target,record,e'},
{name:'itemtouchcancel',parameters:'pickerslot,index,target,record,e'},
{name:'itemtouchend',parameters:'pickerslot,index,target,record,e'},
{name:'itemtouchmove',parameters:'pickerslot,index,target,record,e'},
{name:'itemtouchstart',parameters:'pickerslot,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:''},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'navigate',parameters:'pickerslot,to,from'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'refresh',parameters:'pickerslot'},
{name:'remove',parameters:''},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'pickerslot,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'rowselection',parameters:'view,selection'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'pickerslot,selected'},
{name:'selectionchange',parameters:'view,records,selected,selection'},
{name:'show',parameters:'sender'},
{name:'slotpick',parameters:'pickerslot,value,node'},
{name:'storechange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'pickerslot'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_picker_Slot.PROPERTIES);
        return Ext_dataview_DataView.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_picker_Slot.EVENTS);
        return Ext_dataview_DataView.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_picker_Slot.EVENTNAMES);
    //    return Ext_dataview_DataView.getEventNames(eventnames);
    //}
