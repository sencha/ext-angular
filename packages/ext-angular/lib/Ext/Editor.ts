import { Ext_Container } from '../Ext/Container';

export class Ext_Editor extends Ext_Container {
    public static PROPERTIES: string[] = [
'alignment',
'allowBlur',
'cancelOnClear',
'cancelOnEsc',
'completeOnEnter',
'constrain',
'field',
'hideEl',
'ignoreNoChange',
'matchFont',
'offset',
'parentEl',
'revertInvalid',
'shadow',
'swallowKeys',
'updateEl',
'value',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,editor,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'editor,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecomplete',parameters:'editor,value,startValue'},
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
{name:'beforestartedit',parameters:'editor,boundEl,value'},
{name:'beforetofront',parameters:'editor'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'editor,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'canceledit',parameters:'editor,value,startValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'complete',parameters:'editor,value,startValue'},
{name:'deactivate',parameters:'oldActiveItem,editor,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'editor,event'},
{name:'focusenter',parameters:'editor,event'},
{name:'focusleave',parameters:'editor,event'},
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
{name:'move',parameters:'editor,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'editor,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'editor,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'specialkey',parameters:'editor,field,event'},
{name:'startedit',parameters:'editor,boundEl,value'},
{name:'tofront',parameters:'editor'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_Editor.PROPERTIES);
        return Ext_Container.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_Editor.EVENTS);
        return Ext_Container.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_Editor.EVENTNAMES);
    //    return Ext_Container.getEventNames(eventnames);
    //}
