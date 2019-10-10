import { Ext_picker_Picker } from '../../Ext/picker/Picker';

export class Ext_picker_Date extends Ext_picker_Picker {
    public static PROPERTIES: string[] = [
'dayText',
'doneButton',
'monthText',
'slotOrder',
'slots',
'value',
'yearFrom',
'yearText',
'yearTo',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,datepicker,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'datepicker,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'datepicker'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'datepicker'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'datepicker,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'datepicker'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'datepicker,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'cancel',parameters:'datepicker'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'change',parameters:'datepicker,value'},
{name:'collapse',parameters:'datepicker'},
{name:'deactivate',parameters:'oldActiveItem,datepicker,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'datepicker'},
{name:'drawershow',parameters:'datepicker'},
{name:'erased',parameters:'sender'},
{name:'expand',parameters:'datepicker'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'datepicker,event'},
{name:'focusenter',parameters:'datepicker,event'},
{name:'focusleave',parameters:'datepicker,event'},
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
{name:'move',parameters:'datepicker,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'pick',parameters:'datepicker,values,slot'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'datepicker,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'datepicker,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'datepicker,context'},
{name:'resizedragcancel',parameters:'datepicker,context'},
{name:'resizedragend',parameters:'datepicker,context'},
{name:'resizedragstart',parameters:'datepicker,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'datepicker'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_picker_Date.PROPERTIES);
        return Ext_picker_Picker.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_picker_Date.EVENTS);
        return Ext_picker_Picker.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_picker_Date.EVENTNAMES);
    //    return Ext_picker_Picker.getEventNames(eventnames);
    //}
