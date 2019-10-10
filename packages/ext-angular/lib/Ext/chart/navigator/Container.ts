import { Ext_chart_navigator_ContainerBase } from '../../../Ext/chart/navigator/ContainerBase';

export class Ext_chart_navigator_Container extends Ext_chart_navigator_ContainerBase {
    public static PROPERTIES: string[] = [
'chart',
'navigator',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,chartnavigator,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'chartnavigator,item,index'},
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
{name:'beforetofront',parameters:'chartnavigator'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'chartnavigator,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'deactivate',parameters:'oldActiveItem,chartnavigator,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'chartnavigator,event'},
{name:'focusenter',parameters:'chartnavigator,event'},
{name:'focusleave',parameters:'chartnavigator,event'},
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
{name:'move',parameters:'chartnavigator,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'chartnavigator,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'chartnavigator,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'chartnavigator'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_chart_navigator_Container.PROPERTIES);
        return Ext_chart_navigator_ContainerBase.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_chart_navigator_Container.EVENTS);
        return Ext_chart_navigator_ContainerBase.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_chart_navigator_Container.EVENTNAMES);
    //    return Ext_chart_navigator_ContainerBase.getEventNames(eventnames);
    //}
