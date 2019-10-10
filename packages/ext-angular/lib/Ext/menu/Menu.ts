import { Ext_Panel } from '../../Ext/Panel';

export class Ext_menu_Menu extends Ext_Panel {
    public static PROPERTIES: string[] = [
'align',
'allowOtherMenus',
'autoHide',
'groups',
'ignoreParentClicks',
'indented',
'mouseLeaveDelay',
'separator',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,menu,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'menu,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'menu'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'menu'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'menu,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'menu'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'menu,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'menu'},
{name:'deactivate',parameters:'oldActiveItem,menu,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'menu'},
{name:'drawershow',parameters:'menu'},
{name:'erased',parameters:'sender'},
{name:'expand',parameters:'menu'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'menu,event'},
{name:'focusenter',parameters:'menu,event'},
{name:'focusleave',parameters:'menu,event'},
{name:'fullscreen',parameters:'sender'},
{name:'groupchange',parameters:'menu,groupName,newValue,oldValue'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'menu,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'menu,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'menu,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'menu,context'},
{name:'resizedragcancel',parameters:'menu,context'},
{name:'resizedragend',parameters:'menu,context'},
{name:'resizedragstart',parameters:'menu,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'menu'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_menu_Menu.PROPERTIES);
        return Ext_Panel.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_menu_Menu.EVENTS);
        return Ext_Panel.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_menu_Menu.EVENTNAMES);
    //    return Ext_Panel.getEventNames(eventnames);
    //}
