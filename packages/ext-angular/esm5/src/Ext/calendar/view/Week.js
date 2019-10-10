import * as tslib_1 from "tslib";
import { Ext_calendar_view_Days } from '../../../Ext/calendar/view/Days';
var Ext_calendar_view_Week = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_calendar_view_Week, _super);
    function Ext_calendar_view_Week() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_calendar_view_Week.getProperties = function (properties) {
        properties = properties.concat(Ext_calendar_view_Week.PROPERTIES);
        return Ext_calendar_view_Days.getProperties(properties);
    };
    Ext_calendar_view_Week.getEvents = function (events) {
        events = events.concat(Ext_calendar_view_Week.EVENTS);
        return Ext_calendar_view_Days.getEvents(events);
    };
    Ext_calendar_view_Week.PROPERTIES = [
        'firstDayOfWeek',
        'value',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_calendar_view_Week.EVENTS = [
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeeventadd', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-weekview,context' },
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
        { name: 'beforetofront', parameters: 'calendar-weekview' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'calendar-weekview,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'eventadd', parameters: 'calendar-weekview,context' },
        { name: 'eventdrop', parameters: 'calendar-weekview,context' },
        { name: 'eventedit', parameters: 'calendar-weekview,context' },
        { name: 'eventresize', parameters: 'calendar-weekview,context' },
        { name: 'eventtap', parameters: 'calendar-weekview,context' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'calendar-weekview,event' },
        { name: 'focusenter', parameters: 'calendar-weekview,event' },
        { name: 'focusleave', parameters: 'calendar-weekview,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'calendar-weekview' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'validateeventadd', parameters: 'calendar-weekview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-weekview,context' },
        { name: 'validateeventedit', parameters: 'calendar-weekview,context' },
        { name: 'validateeventresize', parameters: 'calendar-weekview,context' },
        { name: 'valuechange', parameters: 'calendar-weekview,context' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_calendar_view_Week;
}(Ext_calendar_view_Days));
export { Ext_calendar_view_Week };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_calendar_view_Week.EVENTNAMES);
//    return Ext_calendar_view_Days.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vlay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0L2NhbGVuZGFyL3ZpZXcvV2Vlay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekU7SUFBNEMsa0RBQXNCO0lBQWxFOztJQXlGQSxDQUFDO0lBUlUsb0NBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ00sZ0NBQVMsR0FBaEIsVUFBaUIsTUFBTTtRQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBdkZhLGlDQUFVLEdBQWE7UUFDekMsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNQLENBQUM7SUFDZ0IsNkJBQU0sR0FBVTtRQUNsQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLHdCQUF3QixFQUFDO1FBQ2xELEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzFFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUs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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NhbGVuZGFyX3ZpZXdfRGF5cyB9IGZyb20gJy4uLy4uLy4uL0V4dC9jYWxlbmRhci92aWV3L0RheXMnO1xuXG5leHBvcnQgY2xhc3MgRXh0X2NhbGVuZGFyX3ZpZXdfV2VlayBleHRlbmRzIEV4dF9jYWxlbmRhcl92aWV3X0RheXMge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nZmlyc3REYXlPZldlZWsnLFxuJ3ZhbHVlJyxcbid2aXNpYmxlRGF5cycsXG4ncGxhdGZvcm1Db25maWcnLFxuJ3Jlc3BvbnNpdmVDb25maWcnLFxuJ2ZpdFRvUGFyZW50Jyxcbidjb25maWcnXG5dO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J2JlZm9yZWJvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxue25hbWU6J2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG57bmFtZTonYmVmb3JlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG57bmFtZTonYmVmb3JlZXZlbnRyZXNpemVzdGFydCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3J30sXG57bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxldmVudCd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcbntuYW1lOidldmVudGRyb3AnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcbntuYW1lOidldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcbntuYW1lOidldmVudHJlc2l6ZScscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxue25hbWU6J2V2ZW50dGFwJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG57bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGV2ZW50J30sXG57bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxldmVudCd9LFxue25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxue25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG57bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3J30sXG57bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxue25hbWU6J3ZhbGlkYXRlZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcbntuYW1lOid2YWxpZGF0ZWV2ZW50ZHJvcCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxue25hbWU6J3ZhbGlkYXRlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG57bmFtZTondmFsaWRhdGVldmVudHJlc2l6ZScscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxue25hbWU6J3ZhbHVlY2hhbmdlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgICBzdGF0aWMgZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmNvbmNhdChFeHRfY2FsZW5kYXJfdmlld19XZWVrLlBST1BFUlRJRVMpO1xuICAgICAgICByZXR1cm4gRXh0X2NhbGVuZGFyX3ZpZXdfRGF5cy5nZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RXZlbnRzKGV2ZW50cykge1xuICAgICAgICBldmVudHMgPSBldmVudHMuY29uY2F0KEV4dF9jYWxlbmRhcl92aWV3X1dlZWsuRVZFTlRTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9jYWxlbmRhcl92aWV3X0RheXMuZ2V0RXZlbnRzKGV2ZW50cyk7XG4gICAgfVxufVxuXG5cbiAgICAvL3B1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1tvYmplY3QgT2JqZWN0XX07XG4gICAgLy9zdGF0aWMgTUVUSE9EUzogYW55W10gPSBbXTtcbiAgICAvL3B1YmxpYyBzdGF0aWMgTUpHRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgLy9zdGF0aWMgZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKSB7XG4gICAgLy8gICAgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXMuY29uY2F0KEV4dF9jYWxlbmRhcl92aWV3X1dlZWsuRVZFTlROQU1FUyk7XG4gICAgLy8gICAgcmV0dXJuIEV4dF9jYWxlbmRhcl92aWV3X0RheXMuZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKTtcbiAgICAvL31cbiJdfQ==