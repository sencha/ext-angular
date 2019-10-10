import { Ext_Container } from '../Ext/Container';

export class Ext_NestedList extends Ext_Container {
    public static PROPERTIES: string[] = [
'allowDeselect',
'backButton',
'backText',
'cardSwitchAnimation',
'detailCard',
'detailContainer',
'displayField',
'emptyText',
'lastActiveList',
'lastNode',
'layout',
'listConfig',
'loadingText',
'onItemDisclosure',
'store',
'title',
'toolbar',
'updateTitleText',
'useTitleAsBackText',
'variableHeights',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,nestedlist,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'nestedlist,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'back',parameters:'nestedlist,node,lastActiveList,detailCardActive'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeload',parameters:'nestedlist,store,operation'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeselectionchange',parameters:'nestedlist,list,node,selections'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'nestedlist'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'nestedlist,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'containertap',parameters:'nestedlist,list,e'},
{name:'deactivate',parameters:'oldActiveItem,nestedlist,newActiveItem'},
{name:'deselect',parameters:'nestedlist,list,selections'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'nestedlist,event'},
{name:'focusenter',parameters:'nestedlist,event'},
{name:'focusleave',parameters:'nestedlist,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemdoubletap',parameters:'nestedlist,list,index,target,record,e'},
{name:'itemtap',parameters:'nestedlist,list,index,target,record,e'},
{name:'leafitemtap',parameters:'nestedlist,list,index,target,record,e'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'listchange',parameters:'nestedlist,listitem'},
{name:'load',parameters:'nestedlist,store,records,successful,operation'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'nestedlist,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'nestedlist,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'nestedlist,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'select',parameters:'nestedlist,list,selections'},
{name:'selectionchange',parameters:'nestedlist,list,selections'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'nestedlist'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_NestedList.PROPERTIES);
        return Ext_Container.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_NestedList.EVENTS);
        return Ext_Container.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_NestedList.EVENTNAMES);
    //    return Ext_Container.getEventNames(eventnames);
    //}
