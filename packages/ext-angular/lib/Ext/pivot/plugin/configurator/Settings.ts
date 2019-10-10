import { Ext_form_Panel } from '../../../../Ext/form/Panel';

export class Ext_pivot_plugin_configurator_Settings extends Ext_form_Panel {
    public static PROPERTIES: string[] = [
'controller',
'defaults',
'hideAnimation',
'listeners',
'showAnimation',
'viewModel',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,pivotsettings,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'pivotsettings,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'pivotsettings'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'pivotsettings'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'pivotsettings,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforesubmit',parameters:'pivotsettings,values,options,e'},
{name:'beforetofront',parameters:'pivotsettings'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'pivotsettings,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'pivotsettings'},
{name:'deactivate',parameters:'oldActiveItem,pivotsettings,newActiveItem'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'pivotsettings,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'pivotsettings'},
{name:'drawershow',parameters:'pivotsettings'},
{name:'erased',parameters:'sender'},
{name:'exception',parameters:'pivotsettings,result'},
{name:'expand',parameters:'pivotsettings'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'pivotsettings,event'},
{name:'focusenter',parameters:'pivotsettings,event'},
{name:'focusleave',parameters:'pivotsettings,event'},
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
{name:'move',parameters:'pivotsettings,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'pivotsettings,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'pivotsettings,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'pivotsettings,context'},
{name:'resizedragcancel',parameters:'pivotsettings,context'},
{name:'resizedragend',parameters:'pivotsettings,context'},
{name:'resizedragstart',parameters:'pivotsettings,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'submit',parameters:'pivotsettings,result,e'},
{name:'tofront',parameters:'pivotsettings'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_pivot_plugin_configurator_Settings.PROPERTIES);
        return Ext_form_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_pivot_plugin_configurator_Settings.EVENTS);
        return Ext_form_Panel.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_pivot_plugin_configurator_Settings.EVENTNAMES);
    //    return Ext_form_Panel.getEventNames(eventnames);
    //}
