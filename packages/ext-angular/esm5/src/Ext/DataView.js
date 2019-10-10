import * as tslib_1 from "tslib";
import { Ext_dataview_Abstract } from '../Ext/dataview/Abstract';
var Ext_DataView = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_DataView, _super);
    function Ext_DataView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_DataView.getProperties = function (properties) {
        properties = properties.concat(Ext_DataView.PROPERTIES);
        return Ext_dataview_Abstract.getProperties(properties);
    };
    Ext_DataView.getEvents = function (events) {
        events = events.concat(Ext_DataView.EVENTS);
        return Ext_dataview_Abstract.getEvents(events);
    };
    Ext_DataView.PROPERTIES = [
        'lastSelected',
        'selected',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_DataView.EVENTS = [
        { name: 'activate', parameters: 'newActiveItem,dataview,oldActiveItem' },
        { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
        { name: 'add', parameters: '' },
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
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforestorechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'dataview' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'dataview,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'childdoubletap', parameters: 'dataview,location' },
        { name: 'childlongpress', parameters: 'dataview,location' },
        { name: 'childmouseenter', parameters: 'dataview,location' },
        { name: 'childmouseleave', parameters: 'dataview,location' },
        { name: 'childsingletap', parameters: 'dataview,location' },
        { name: 'childtap', parameters: 'dataview,location' },
        { name: 'childtaphold', parameters: 'dataview,location' },
        { name: 'childtouchcancel', parameters: 'dataview,location' },
        { name: 'childtouchend', parameters: 'dataview,location' },
        { name: 'childtouchmove', parameters: 'dataview,location' },
        { name: 'childtouchstart', parameters: 'dataview,location' },
        { name: 'deactivate', parameters: 'oldActiveItem,dataview,newActiveItem' },
        { name: 'deselect', parameters: 'dataview,records' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'dataview,event' },
        { name: 'focusenter', parameters: 'dataview,event' },
        { name: 'focusleave', parameters: 'dataview,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'itemdoubletap', parameters: 'dataview,index,target,record,e' },
        { name: 'itemlongpress', parameters: 'dataview,index,target,record,e' },
        { name: 'itemmouseenter', parameters: 'dataview,index,target,record,e' },
        { name: 'itemmouseleave', parameters: 'dataview,index,target,record,e' },
        { name: 'itemsingletap', parameters: 'dataview,index,target,record,e' },
        { name: 'itemswipe', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtap', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtaphold', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtouchcancel', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtouchend', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtouchmove', parameters: 'dataview,index,target,record,e' },
        { name: 'itemtouchstart', parameters: 'dataview,index,target,record,e' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'move', parameters: '' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'navigate', parameters: 'dataview,to,from' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'refresh', parameters: 'dataview' },
        { name: 'remove', parameters: '' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'renderedchange', parameters: 'dataview,item,rendered' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'rowselection', parameters: 'view,selection' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'select', parameters: 'dataview,selected' },
        { name: 'selectionchange', parameters: 'view,records,selected,selection' },
        { name: 'show', parameters: 'sender' },
        { name: 'storechange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'dataview' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_DataView;
}(Ext_dataview_Abstract));
export { Ext_DataView };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_DataView.EVENTNAMES);
//    return Ext_dataview_Abstract.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL0V4dC9EYXRhVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFakU7SUFBa0Msd0NBQXFCO0lBQXZEOztJQWlIQSxDQUFDO0lBUlUsMEJBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsT0FBTyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNNLHNCQUFTLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU8scUJBQXFCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUEvR2EsdUJBQVUsR0FBYTtRQUN6QyxjQUFjO1FBQ2QsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDUCxDQUFDO0lBQ2dCLG1CQUFNLEdBQVU7UUFDbEMsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxzQ0FBc0MsRUFBQztRQUNuRSxFQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDNUQsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7UUFDMUIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyx3QkFBd0IsRUFBQztRQUNsRCxFQUFDLElBQUksRUFBQyx3QkFBd0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDNUUsRUFBQyxJ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QUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDO1FBQ3RDLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQztRQUMvQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFTRixtQkFBQztDQUFBLEFBakhELENBQWtDLHFCQUFxQixHQWlIdEQ7U0FqSFksWUFBWTtBQW9IckIsMERBQTBEO0FBQzFELDZCQUE2QjtBQUM3Qiw2Q0FBNkM7QUFDekMsb0NBQW9DO0FBQ3hDLDhEQUE4RDtBQUM5RCw2REFBNkQ7QUFDN0QsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9kYXRhdmlld19BYnN0cmFjdCB9IGZyb20gJy4uL0V4dC9kYXRhdmlldy9BYnN0cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBFeHRfRGF0YVZpZXcgZXh0ZW5kcyBFeHRfZGF0YXZpZXdfQWJzdHJhY3Qge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nbGFzdFNlbGVjdGVkJyxcbidzZWxlY3RlZCcsXG4ncGxhdGZvcm1Db25maWcnLFxuJ3Jlc3BvbnNpdmVDb25maWcnLFxuJ2ZpdFRvUGFyZW50Jyxcbidjb25maWcnXG5dO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczonbmV3QWN0aXZlSXRlbSxkYXRhdmlldyxvbGRBY3RpdmVJdGVtJ30sXG57bmFtZTonYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonYWRkJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3Jlc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOidkYXRhdmlldyd9LFxue25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmx1cicscGFyYW1ldGVyczonZGF0YXZpZXcsZXZlbnQnfSxcbntuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidjaGlsZGRvdWJsZXRhcCcscGFyYW1ldGVyczonZGF0YXZpZXcsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZGxvbmdwcmVzcycscGFyYW1ldGVyczonZGF0YXZpZXcsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZG1vdXNlZW50ZXInLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGRtb3VzZWxlYXZlJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkc2luZ2xldGFwJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkdGFwJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkdGFwaG9sZCcscGFyYW1ldGVyczonZGF0YXZpZXcsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZHRvdWNoY2FuY2VsJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkdG91Y2hlbmQnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGR0b3VjaG1vdmUnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGR0b3VjaHN0YXJ0JyxwYXJhbWV0ZXJzOidkYXRhdmlldyxsb2NhdGlvbid9LFxue25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J29sZEFjdGl2ZUl0ZW0sZGF0YXZpZXcsbmV3QWN0aXZlSXRlbSd9LFxue25hbWU6J2Rlc2VsZWN0JyxwYXJhbWV0ZXJzOidkYXRhdmlldyxyZWNvcmRzJ30sXG57bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczonZGF0YXZpZXcsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGV2ZW50J30sXG57bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2l0ZW1kb3VibGV0YXAnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW1sb25ncHJlc3MnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW1tb3VzZWVudGVyJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtbW91c2VsZWF2ZScscGFyYW1ldGVyczonZGF0YXZpZXcsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbXNpbmdsZXRhcCcscGFyYW1ldGVyczonZGF0YXZpZXcsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbXN3aXBlJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdGFwJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdGFwaG9sZCcscGFyYW1ldGVyczonZGF0YXZpZXcsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbXRvdWNoY2FuY2VsJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdG91Y2hlbmQnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10b3VjaG1vdmUnLHBhcmFtZXRlcnM6J2RhdGF2aWV3LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10b3VjaHN0YXJ0JyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J25hdmlnYXRlJyxwYXJhbWV0ZXJzOidkYXRhdmlldyx0byxmcm9tJ30sXG57bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG57bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidyZWZyZXNoJyxwYXJhbWV0ZXJzOidkYXRhdmlldyd9LFxue25hbWU6J3JlbW92ZScscGFyYW1ldGVyczonJ30sXG57bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J3JlbmRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidkYXRhdmlldyxpdGVtLHJlbmRlcmVkJ30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncm93c2VsZWN0aW9uJyxwYXJhbWV0ZXJzOid2aWV3LHNlbGVjdGlvbid9LFxue25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3NlbGVjdCcscGFyYW1ldGVyczonZGF0YXZpZXcsc2VsZWN0ZWQnfSxcbntuYW1lOidzZWxlY3Rpb25jaGFuZ2UnLHBhcmFtZXRlcnM6J3ZpZXcscmVjb3JkcyxzZWxlY3RlZCxzZWxlY3Rpb24nfSxcbntuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidzdG9yZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonZGF0YXZpZXcnfSxcbntuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgICBzdGF0aWMgZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmNvbmNhdChFeHRfRGF0YVZpZXcuUFJPUEVSVElFUyk7XG4gICAgICAgIHJldHVybiBFeHRfZGF0YXZpZXdfQWJzdHJhY3QuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEV2ZW50cyhldmVudHMpIHtcbiAgICAgICAgZXZlbnRzID0gZXZlbnRzLmNvbmNhdChFeHRfRGF0YVZpZXcuRVZFTlRTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9kYXRhdmlld19BYnN0cmFjdC5nZXRFdmVudHMoZXZlbnRzKTtcbiAgICB9XG59XG5cblxuICAgIC8vcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7W29iamVjdCBPYmplY3RdfTtcbiAgICAvL3N0YXRpYyBNRVRIT0RTOiBhbnlbXSA9IFtdO1xuICAgIC8vcHVibGljIHN0YXRpYyBNSkdFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAvL3N0YXRpYyBnZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpIHtcbiAgICAvLyAgICBldmVudG5hbWVzID0gZXZlbnRuYW1lcy5jb25jYXQoRXh0X0RhdGFWaWV3LkVWRU5UTkFNRVMpO1xuICAgIC8vICAgIHJldHVybiBFeHRfZGF0YXZpZXdfQWJzdHJhY3QuZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKTtcbiAgICAvL31cbiJdfQ==