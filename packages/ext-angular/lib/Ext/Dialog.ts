import { Ext_Panel } from '../Ext/Panel';

export class Ext_Dialog extends Ext_Panel {
    public static PROPERTIES: string[] = [
'bodyBorder',
'border',
'centered',
'constrainDrag',
'dismissAction',
'dismissHandler',
'draggable',
'floated',
'hideAnimation',
'hideMode',
'keyMap',
'maskTapHandler',
'maximizable',
'maximizeAnimation',
'maximized',
'maximizeProxy',
'maximizeTool',
'modal',
'restorable',
'restoreAnimation',
'restoreTool',
'shadow',
'showAnimation',
'tabIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,dialog,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'dialog,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'dialog'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'dialog'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaximize',parameters:'dialog'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'dialog,context'},
{name:'beforerestore',parameters:'dialog'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'dialog'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'dialog,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'dialog'},
{name:'deactivate',parameters:'oldActiveItem,dialog,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'dialog'},
{name:'drawershow',parameters:'dialog'},
{name:'erased',parameters:'sender'},
{name:'expand',parameters:'dialog'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'dialog,event'},
{name:'focusenter',parameters:'dialog,event'},
{name:'focusleave',parameters:'dialog,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maximize',parameters:'dialog'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'dialog,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'dialog,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'dialog,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'dialog,context'},
{name:'resizedragcancel',parameters:'dialog,context'},
{name:'resizedragend',parameters:'dialog,context'},
{name:'resizedragstart',parameters:'dialog,context'},
{name:'restore',parameters:'dialog'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'dialog'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_Dialog.PROPERTIES);
        return Ext_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_Dialog.EVENTS);
        return Ext_Panel.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_Dialog.EVENTNAMES);
    //    return Ext_Panel.getEventNames(eventnames);
    //}
