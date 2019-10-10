import { Ext_picker_Picker } from '../../Ext/picker/Picker';

export class Ext_picker_SelectPicker extends Ext_picker_Picker {
    public static PROPERTIES: string[] = [
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,selectpicker,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'selectpicker,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'selectpicker'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'selectpicker'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'selectpicker,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'selectpicker'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'selectpicker,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'cancel',parameters:'selectpicker'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'change',parameters:'selectpicker,values'},
{name:'collapse',parameters:'selectpicker'},
{name:'deactivate',parameters:'oldActiveItem,selectpicker,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'selectpicker'},
{name:'drawershow',parameters:'selectpicker'},
{name:'erased',parameters:'sender'},
{name:'expand',parameters:'selectpicker'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'selectpicker,event'},
{name:'focusenter',parameters:'selectpicker,event'},
{name:'focusleave',parameters:'selectpicker,event'},
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
{name:'move',parameters:'selectpicker,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'pick',parameters:'selectpicker,values,slot'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'selectpicker,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'selectpicker,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'selectpicker,context'},
{name:'resizedragcancel',parameters:'selectpicker,context'},
{name:'resizedragend',parameters:'selectpicker,context'},
{name:'resizedragstart',parameters:'selectpicker,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'selectpicker'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_picker_SelectPicker.PROPERTIES);
        return Ext_picker_Picker.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_picker_SelectPicker.EVENTS);
        return Ext_picker_Picker.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_picker_SelectPicker.EVENTNAMES);
    //    return Ext_picker_Picker.getEventNames(eventnames);
    //}
