import * as tslib_1 from "tslib";
import { Ext_chart_AbstractChart } from '../../Ext/chart/AbstractChart';
var Ext_chart_SpaceFillingChart = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_chart_SpaceFillingChart, _super);
    function Ext_chart_SpaceFillingChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_chart_SpaceFillingChart.getProperties = function (properties) {
        properties = properties.concat(Ext_chart_SpaceFillingChart.PROPERTIES);
        return Ext_chart_AbstractChart.getProperties(properties);
    };
    Ext_chart_SpaceFillingChart.getEvents = function (events) {
        events = events.concat(Ext_chart_SpaceFillingChart.EVENTS);
        return Ext_chart_AbstractChart.getEvents(events);
    };
    Ext_chart_SpaceFillingChart.PROPERTIES = [
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_chart_SpaceFillingChart.EVENTS = [
        { name: 'activate', parameters: 'newActiveItem,spacefilling,oldActiveItem' },
        { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
        { name: 'add', parameters: 'spacefilling,item,index' },
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehide', parameters: 'sender' },
        { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforerefresh', parameters: 'spacefilling' },
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforetofront', parameters: 'spacefilling' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'spacefilling,event' },
        { name: 'bodyresize', parameters: 'size' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'deactivate', parameters: 'oldActiveItem,spacefilling,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'spacefilling,event' },
        { name: 'focusenter', parameters: 'spacefilling,event' },
        { name: 'focusleave', parameters: 'spacefilling,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'itemclick', parameters: 'chart,item,event' },
        { name: 'itemdblclick', parameters: 'chart,item,event' },
        { name: 'itemhighlight', parameters: 'spacefilling,newItem,oldItem' },
        { name: 'itemhighlightchange', parameters: 'spacefilling,newItem,oldItem' },
        { name: 'itemmousedown', parameters: 'chart,item,event' },
        { name: 'itemmousemove', parameters: 'chart,item,event' },
        { name: 'itemmouseout', parameters: 'chart,item,event' },
        { name: 'itemmouseover', parameters: 'chart,item,event' },
        { name: 'itemmouseup', parameters: 'chart,item,event' },
        { name: 'itemtap', parameters: 'chart,item,event' },
        { name: 'layout', parameters: 'spacefilling' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'move', parameters: 'spacefilling,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'redraw', parameters: 'spacefilling' },
        { name: 'refresh', parameters: 'spacefilling' },
        { name: 'remove', parameters: 'spacefilling,item,index' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'renderedchange', parameters: 'spacefilling,item,rendered' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'spriteclick', parameters: 'sprite,event' },
        { name: 'spritedblclick', parameters: 'sprite,event' },
        { name: 'spritemousedown', parameters: 'sprite,event' },
        { name: 'spritemousemove', parameters: 'sprite,event' },
        { name: 'spritemouseout', parameters: 'sprite,event' },
        { name: 'spritemouseover', parameters: 'sprite,event' },
        { name: 'spritemouseup', parameters: 'sprite,event' },
        { name: 'spritetap', parameters: 'sprite,event' },
        { name: 'storechange', parameters: 'chart,newStore,oldStore' },
        { name: 'tofront', parameters: 'spacefilling' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_chart_SpaceFillingChart;
}(Ext_chart_AbstractChart));
export { Ext_chart_SpaceFillingChart };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_chart_SpaceFillingChart.EVENTNAMES);
//    return Ext_chart_AbstractChart.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BhY2VGaWxsaW5nQ2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL0V4dC9jaGFydC9TcGFjZUZpbGxpbmdDaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFeEU7SUFBaUQsdURBQXVCO0lBQXhFOztJQXdHQSxDQUFDO0lBUlUseUNBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RSxPQUFPLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ00scUNBQVMsR0FBaEIsVUFBaUIsTUFBTTtRQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxPQUFPLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBdEdhLHNDQUFVLEdBQWE7UUFDekMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNQLENBQUM7SUFDZ0Isa0NBQU0sR0FBVTtRQUNsQyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLDBDQUEwQyxFQUFDO1FBQ3ZFLEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUM1RCxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLHlCQUF5QixFQUFDO1FBQ2pELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsd0JBQXdCLEVBQUM7UUFDbEQsRUFBQyxJQUFJLEVBQUMsd0JBQXdCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FB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O0FBQy9ELEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfY2hhcnRfQWJzdHJhY3RDaGFydCB9IGZyb20gJy4uLy4uL0V4dC9jaGFydC9BYnN0cmFjdENoYXJ0JztcblxuZXhwb3J0IGNsYXNzIEV4dF9jaGFydF9TcGFjZUZpbGxpbmdDaGFydCBleHRlbmRzIEV4dF9jaGFydF9BYnN0cmFjdENoYXJ0IHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuJ3BsYXRmb3JtQ29uZmlnJyxcbidyZXNwb25zaXZlQ29uZmlnJyxcbidmaXRUb1BhcmVudCcsXG4nY29uZmlnJ1xuXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J25ld0FjdGl2ZUl0ZW0sc3BhY2VmaWxsaW5nLG9sZEFjdGl2ZUl0ZW0nfSxcbntuYW1lOidhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidhZGQnLHBhcmFtZXRlcnM6J3NwYWNlZmlsbGluZyxpdGVtLGluZGV4J30sXG57bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2JlZm9yZXJlZnJlc2gnLHBhcmFtZXRlcnM6J3NwYWNlZmlsbGluZyd9LFxue25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J3NwYWNlZmlsbGluZyd9LFxue25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmx1cicscGFyYW1ldGVyczonc3BhY2VmaWxsaW5nLGV2ZW50J30sXG57bmFtZTonYm9keXJlc2l6ZScscGFyYW1ldGVyczonc2l6ZSd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J29sZEFjdGl2ZUl0ZW0sc3BhY2VmaWxsaW5nLG5ld0FjdGl2ZUl0ZW0nfSxcbntuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidzcGFjZWZpbGxpbmcsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidzcGFjZWZpbGxpbmcsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidzcGFjZWZpbGxpbmcsZXZlbnQnfSxcbntuYW1lOidmdWxsc2NyZWVuJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaXRlbWNsaWNrJyxwYXJhbWV0ZXJzOidjaGFydCxpdGVtLGV2ZW50J30sXG57bmFtZTonaXRlbWRibGNsaWNrJyxwYXJhbWV0ZXJzOidjaGFydCxpdGVtLGV2ZW50J30sXG57bmFtZTonaXRlbWhpZ2hsaWdodCcscGFyYW1ldGVyczonc3BhY2VmaWxsaW5nLG5ld0l0ZW0sb2xkSXRlbSd9LFxue25hbWU6J2l0ZW1oaWdobGlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NwYWNlZmlsbGluZyxuZXdJdGVtLG9sZEl0ZW0nfSxcbntuYW1lOidpdGVtbW91c2Vkb3duJyxwYXJhbWV0ZXJzOidjaGFydCxpdGVtLGV2ZW50J30sXG57bmFtZTonaXRlbW1vdXNlbW92ZScscGFyYW1ldGVyczonY2hhcnQsaXRlbSxldmVudCd9LFxue25hbWU6J2l0ZW1tb3VzZW91dCcscGFyYW1ldGVyczonY2hhcnQsaXRlbSxldmVudCd9LFxue25hbWU6J2l0ZW1tb3VzZW92ZXInLHBhcmFtZXRlcnM6J2NoYXJ0LGl0ZW0sZXZlbnQnfSxcbntuYW1lOidpdGVtbW91c2V1cCcscGFyYW1ldGVyczonY2hhcnQsaXRlbSxldmVudCd9LFxue25hbWU6J2l0ZW10YXAnLHBhcmFtZXRlcnM6J2NoYXJ0LGl0ZW0sZXZlbnQnfSxcbntuYW1lOidsYXlvdXQnLHBhcmFtZXRlcnM6J3NwYWNlZmlsbGluZyd9LFxue25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J3NwYWNlZmlsbGluZyxpdGVtLHRvSW5kZXgsZnJvbUluZGV4J30sXG57bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcbntuYW1lOidvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcbntuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J3JlZHJhdycscGFyYW1ldGVyczonc3BhY2VmaWxsaW5nJ30sXG57bmFtZToncmVmcmVzaCcscGFyYW1ldGVyczonc3BhY2VmaWxsaW5nJ30sXG57bmFtZToncmVtb3ZlJyxwYXJhbWV0ZXJzOidzcGFjZWZpbGxpbmcsaXRlbSxpbmRleCd9LFxue25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidyZW5kZXJlZGNoYW5nZScscGFyYW1ldGVyczonc3BhY2VmaWxsaW5nLGl0ZW0scmVuZGVyZWQnfSxcbntuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2VsZW1lbnQsaW5mbyd9LFxue25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidzcHJpdGVjbGljaycscGFyYW1ldGVyczonc3ByaXRlLGV2ZW50J30sXG57bmFtZTonc3ByaXRlZGJsY2xpY2snLHBhcmFtZXRlcnM6J3Nwcml0ZSxldmVudCd9LFxue25hbWU6J3Nwcml0ZW1vdXNlZG93bicscGFyYW1ldGVyczonc3ByaXRlLGV2ZW50J30sXG57bmFtZTonc3ByaXRlbW91c2Vtb3ZlJyxwYXJhbWV0ZXJzOidzcHJpdGUsZXZlbnQnfSxcbntuYW1lOidzcHJpdGVtb3VzZW91dCcscGFyYW1ldGVyczonc3ByaXRlLGV2ZW50J30sXG57bmFtZTonc3ByaXRlbW91c2VvdmVyJyxwYXJhbWV0ZXJzOidzcHJpdGUsZXZlbnQnfSxcbntuYW1lOidzcHJpdGVtb3VzZXVwJyxwYXJhbWV0ZXJzOidzcHJpdGUsZXZlbnQnfSxcbntuYW1lOidzcHJpdGV0YXAnLHBhcmFtZXRlcnM6J3Nwcml0ZSxldmVudCd9LFxue25hbWU6J3N0b3JlY2hhbmdlJyxwYXJhbWV0ZXJzOidjaGFydCxuZXdTdG9yZSxvbGRTdG9yZSd9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J3NwYWNlZmlsbGluZyd9LFxue25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondXBkYXRlZGF0YScscGFyYW1ldGVyczonc2VuZGVyLG5ld0RhdGEnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuY29uY2F0KEV4dF9jaGFydF9TcGFjZUZpbGxpbmdDaGFydC5QUk9QRVJUSUVTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9jaGFydF9BYnN0cmFjdENoYXJ0LmdldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRFdmVudHMoZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IGV2ZW50cy5jb25jYXQoRXh0X2NoYXJ0X1NwYWNlRmlsbGluZ0NoYXJ0LkVWRU5UUyk7XG4gICAgICAgIHJldHVybiBFeHRfY2hhcnRfQWJzdHJhY3RDaGFydC5nZXRFdmVudHMoZXZlbnRzKTtcbiAgICB9XG59XG5cblxuICAgIC8vcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7W29iamVjdCBPYmplY3RdfTtcbiAgICAvL3N0YXRpYyBNRVRIT0RTOiBhbnlbXSA9IFtdO1xuICAgIC8vcHVibGljIHN0YXRpYyBNSkdFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAvL3N0YXRpYyBnZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpIHtcbiAgICAvLyAgICBldmVudG5hbWVzID0gZXZlbnRuYW1lcy5jb25jYXQoRXh0X2NoYXJ0X1NwYWNlRmlsbGluZ0NoYXJ0LkVWRU5UTkFNRVMpO1xuICAgIC8vICAgIHJldHVybiBFeHRfY2hhcnRfQWJzdHJhY3RDaGFydC5nZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpO1xuICAgIC8vfVxuIl19