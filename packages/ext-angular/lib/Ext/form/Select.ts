import { Ext_field_Picker } from '../../Ext/field/Picker';

export class Ext_form_Select extends Ext_field_Picker {
    public static PROPERTIES: string[] = [
'autoFocus',
'autoFocusLast',
'autoLoadOnValue',
'autoSelect',
'chipView',
'collapseOnSelect',
'delimiter',
'displayField',
'displayTpl',
'edgePicker',
'editable',
'floatedPicker',
'forceSelection',
'hiddenName',
'itemCls',
'itemTpl',
'multiSelect',
'options',
'publishes',
'recordCreator',
'recordCreatorScope',
'selection',
'selectOnTab',
'store',
'twoWayBindable',
'valueCollection',
'valueField',
'valueNotFoundText',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'action',parameters:'selectfield,e'},
{name:'added',parameters:'sender,container,index'},
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
{name:'beforetofront',parameters:'selectfield'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'selectfield,e'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'change',parameters:'selectfield,newValue,oldValue'},
{name:'clearicontap',parameters:'selectfield,input,e'},
{name:'click',parameters:'e'},
{name:'collapse',parameters:'field'},
{name:'destroy',parameters:''},
{name:'dirtychange',parameters:'selectfield,dirty'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'errorchange',parameters:'selectfield,error'},
{name:'expand',parameters:'field'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'selectfield,e'},
{name:'focusenter',parameters:'selectfield,event'},
{name:'focusleave',parameters:'selectfield,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'keydown',parameters:'selectfield,e'},
{name:'keyup',parameters:'selectfield,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'mousedown',parameters:'selectfield,e'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'paste',parameters:'selectfield,e'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'selectfield,newValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'selectfield'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_form_Select.PROPERTIES);
        return Ext_field_Picker.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_form_Select.EVENTS);
        return Ext_field_Picker.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_form_Select.EVENTNAMES);
    //    return Ext_field_Picker.getEventNames(eventnames);
    //}
