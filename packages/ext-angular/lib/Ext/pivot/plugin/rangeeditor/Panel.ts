import { Ext_form_Panel } from '../../../../Ext/form/Panel';

export class Ext_pivot_plugin_rangeeditor_Panel extends Ext_form_Panel {
    public static PROPERTIES: string[] = [
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,pivotrangeeditor,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'pivotrangeeditor,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'pivotrangeeditor'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'pivotrangeeditor'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'pivotrangeeditor,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforesubmit',parameters:'pivotrangeeditor,values,options,e'},
{name:'beforetofront',parameters:'pivotrangeeditor'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'pivotrangeeditor,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'pivotrangeeditor'},
{name:'deactivate',parameters:'oldActiveItem,pivotrangeeditor,newActiveItem'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'pivotrangeeditor,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'pivotrangeeditor'},
{name:'drawershow',parameters:'pivotrangeeditor'},
{name:'erased',parameters:'sender'},
{name:'exception',parameters:'pivotrangeeditor,result'},
{name:'expand',parameters:'pivotrangeeditor'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'pivotrangeeditor,event'},
{name:'focusenter',parameters:'pivotrangeeditor,event'},
{name:'focusleave',parameters:'pivotrangeeditor,event'},
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
{name:'move',parameters:'pivotrangeeditor,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'pivotrangeeditor,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'pivotrangeeditor,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'pivotrangeeditor,context'},
{name:'resizedragcancel',parameters:'pivotrangeeditor,context'},
{name:'resizedragend',parameters:'pivotrangeeditor,context'},
{name:'resizedragstart',parameters:'pivotrangeeditor,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'submit',parameters:'pivotrangeeditor,result,e'},
{name:'tofront',parameters:'pivotrangeeditor'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_pivot_plugin_rangeeditor_Panel.PROPERTIES);
        return Ext_form_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_plugin_rangeeditor_Panel.EVENTS);
        return Ext_form_Panel.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_pivot_plugin_rangeeditor_Panel.EVENTNAMES);
    //    return Ext_form_Panel.getEventNames(eventnames);
    //}
