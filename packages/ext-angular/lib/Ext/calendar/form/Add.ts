import { Ext_calendar_form_Form } from '../../../Ext/calendar/form/Form';

export class Ext_calendar_form_Add extends Ext_calendar_form_Form {
    public static PROPERTIES: string[] = [
'title',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,calendar-form-add,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'calendar-form-add,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'calendar-form-add'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'calendar-form-add'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'calendar-form-add,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforesubmit',parameters:'calendar-form-add,values,options,e'},
{name:'beforetofront',parameters:'calendar-form-add'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'calendar-form-add,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'cancel',parameters:'calendar-form-add'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'calendar-form-add'},
{name:'deactivate',parameters:'oldActiveItem,calendar-form-add,newActiveItem'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'calendar-form-add,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'calendar-form-add'},
{name:'drawershow',parameters:'calendar-form-add'},
{name:'drop',parameters:'calendar-form-add'},
{name:'erased',parameters:'sender'},
{name:'exception',parameters:'calendar-form-add,result'},
{name:'expand',parameters:'calendar-form-add'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'calendar-form-add,event'},
{name:'focusenter',parameters:'calendar-form-add,event'},
{name:'focusleave',parameters:'calendar-form-add,event'},
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
{name:'move',parameters:'calendar-form-add,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'calendar-form-add,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'calendar-form-add,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'calendar-form-add,context'},
{name:'resizedragcancel',parameters:'calendar-form-add,context'},
{name:'resizedragend',parameters:'calendar-form-add,context'},
{name:'resizedragstart',parameters:'calendar-form-add,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'save',parameters:'calendar-form-add,context'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'submit',parameters:'calendar-form-add,result,e'},
{name:'tofront',parameters:'calendar-form-add'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_form_Add.PROPERTIES);
        return Ext_calendar_form_Form.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_form_Add.EVENTS);
        return Ext_calendar_form_Form.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_calendar_form_Add.EVENTNAMES);
    //    return Ext_calendar_form_Form.getEventNames(eventnames);
    //}
