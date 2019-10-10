import { Ext_chart_AbstractChart } from '../../Ext/chart/AbstractChart';

export class Ext_chart_PolarChart extends Ext_chart_AbstractChart {
    public static PROPERTIES: string[] = [
'center',
'innerPadding',
'radius',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,polar,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'polar,item,index'},
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
{name:'beforerefresh',parameters:'polar'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'polar'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'polar,event'},
{name:'bodyresize',parameters:'size'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'deactivate',parameters:'oldActiveItem,polar,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'polar,event'},
{name:'focusenter',parameters:'polar,event'},
{name:'focusleave',parameters:'polar,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'itemclick',parameters:'chart,item,event'},
{name:'itemdblclick',parameters:'chart,item,event'},
{name:'itemhighlight',parameters:'polar,newItem,oldItem'},
{name:'itemhighlightchange',parameters:'polar,newItem,oldItem'},
{name:'itemmousedown',parameters:'chart,item,event'},
{name:'itemmousemove',parameters:'chart,item,event'},
{name:'itemmouseout',parameters:'chart,item,event'},
{name:'itemmouseover',parameters:'chart,item,event'},
{name:'itemmouseup',parameters:'chart,item,event'},
{name:'itemtap',parameters:'chart,item,event'},
{name:'layout',parameters:'polar'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'polar,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'redraw',parameters:'polar'},
{name:'refresh',parameters:'polar'},
{name:'remove',parameters:'polar,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'polar,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'spriteclick',parameters:'sprite,event'},
{name:'spritedblclick',parameters:'sprite,event'},
{name:'spritemousedown',parameters:'sprite,event'},
{name:'spritemousemove',parameters:'sprite,event'},
{name:'spritemouseout',parameters:'sprite,event'},
{name:'spritemouseover',parameters:'sprite,event'},
{name:'spritemouseup',parameters:'sprite,event'},
{name:'spritetap',parameters:'sprite,event'},
{name:'storechange',parameters:'chart,newStore,oldStore'},
{name:'tofront',parameters:'polar'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
    static getProperties(properties) {
        properties = properties.concat(Ext_chart_PolarChart.PROPERTIES);
        return Ext_chart_AbstractChart.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_chart_PolarChart.EVENTS);
        return Ext_chart_AbstractChart.getEvents(events);
    }
}


    //public static PROPERTIESOBJECT: any = {[object Object]};
    //static METHODS: any[] = [];
    //public static MJGEVENTNAMES: string[] = [];
        //static getEventNames(eventnames) {
    //    eventnames = eventnames.concat(Ext_chart_PolarChart.EVENTNAMES);
    //    return Ext_chart_AbstractChart.getEventNames(eventnames);
    //}
