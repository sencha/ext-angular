import * as tslib_1 from "tslib";
import { Ext_calendar_view_Base } from '../../../Ext/calendar/view/Base';
var Ext_calendar_view_Days = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_calendar_view_Days, _super);
    function Ext_calendar_view_Days() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_calendar_view_Days.getProperties = function (properties) {
        properties = properties.concat(Ext_calendar_view_Days.PROPERTIES);
        return Ext_calendar_view_Base.getProperties(properties);
    };
    Ext_calendar_view_Days.getEvents = function (events) {
        events = events.concat(Ext_calendar_view_Days.EVENTS);
        return Ext_calendar_view_Base.getEvents(events);
    };
    Ext_calendar_view_Days.PROPERTIES = [
        'allowSelection',
        'displayOverlap',
        'draggable',
        'droppable',
        'endTime',
        'resizeEvents',
        'showNowMarker',
        'startTime',
        'timeFormat',
        'timeRenderer',
        'value',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_calendar_view_Days.EVENTS = [
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeeventadd', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-daysview,context' },
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
        { name: 'beforetofront', parameters: 'calendar-daysview' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'calendar-daysview,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'eventadd', parameters: 'calendar-daysview,context' },
        { name: 'eventdrop', parameters: 'calendar-daysview,context' },
        { name: 'eventedit', parameters: 'calendar-daysview,context' },
        { name: 'eventresize', parameters: 'calendar-daysview,context' },
        { name: 'eventtap', parameters: 'calendar-daysview,context' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'calendar-daysview,event' },
        { name: 'focusenter', parameters: 'calendar-daysview,event' },
        { name: 'focusleave', parameters: 'calendar-daysview,event' },
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
        { name: 'tofront', parameters: 'calendar-daysview' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'validateeventadd', parameters: 'calendar-daysview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-daysview,context' },
        { name: 'validateeventedit', parameters: 'calendar-daysview,context' },
        { name: 'validateeventresize', parameters: 'calendar-daysview,context' },
        { name: 'valuechange', parameters: 'calendar-daysview,context' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_calendar_view_Days;
}(Ext_calendar_view_Base));
export { Ext_calendar_view_Days };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_calendar_view_Days.EVENTNAMES);
//    return Ext_calendar_view_Base.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF5cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0L2NhbGVuZGFyL3ZpZXcvRGF5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekU7SUFBNEMsa0RBQXNCO0lBQWxFOztJQWtHQSxDQUFDO0lBUlUsb0NBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ00sZ0NBQVMsR0FBaEIsVUFBaUIsTUFBTTtRQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBaEdhLGlDQUFVLEdBQWE7UUFDekMsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUNYLFNBQVM7UUFDVCxjQUFjO1FBQ2QsZUFBZTtRQUNmLFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYztRQUNkLE9BQU87UUFDUCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNQLENBQUM7SUFDZ0IsNkJBQU0sR0FBVTtRQUNsQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLHdCQUF3QixFQUFDO1FBQ2xELEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7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QXNCO0FBcUcvQiwwREFBMEQ7QUFDMUQsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUN6QyxvQ0FBb0M7QUFDeEMsd0VBQXdFO0FBQ3hFLDhEQUE4RDtBQUM5RCxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NhbGVuZGFyX3ZpZXdfQmFzZSB9IGZyb20gJy4uLy4uLy4uL0V4dC9jYWxlbmRhci92aWV3L0Jhc2UnO1xuXG5leHBvcnQgY2xhc3MgRXh0X2NhbGVuZGFyX3ZpZXdfRGF5cyBleHRlbmRzIEV4dF9jYWxlbmRhcl92aWV3X0Jhc2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nYWxsb3dTZWxlY3Rpb24nLFxuJ2Rpc3BsYXlPdmVybGFwJyxcbidkcmFnZ2FibGUnLFxuJ2Ryb3BwYWJsZScsXG4nZW5kVGltZScsXG4ncmVzaXplRXZlbnRzJyxcbidzaG93Tm93TWFya2VyJyxcbidzdGFydFRpbWUnLFxuJ3RpbWVGb3JtYXQnLFxuJ3RpbWVSZW5kZXJlcicsXG4ndmFsdWUnLFxuJ3Zpc2libGVEYXlzJyxcbidwbGF0Zm9ybUNvbmZpZycsXG4ncmVzcG9uc2l2ZUNvbmZpZycsXG4nZml0VG9QYXJlbnQnLFxuJ2NvbmZpZydcbl07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWV2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG57bmFtZTonYmVmb3JlZXZlbnRkcmFnc3RhcnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcbntuYW1lOidiZWZvcmVldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcbntuYW1lOidiZWZvcmVldmVudHJlc2l6ZXN0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcnfSxcbntuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGV2ZW50J30sXG57bmFtZTonYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxue25hbWU6J2V2ZW50ZHJvcCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxue25hbWU6J2V2ZW50ZWRpdCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxue25hbWU6J2V2ZW50cmVzaXplJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG57bmFtZTonZXZlbnR0YXAnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcbntuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGV2ZW50J30sXG57bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLHRvSW5kZXgsZnJvbUluZGV4J30sXG57bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG57bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcnfSxcbntuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG57bmFtZTondmFsaWRhdGVldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxue25hbWU6J3ZhbGlkYXRlZXZlbnRkcm9wJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG57bmFtZTondmFsaWRhdGVldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcbntuYW1lOid2YWxpZGF0ZWV2ZW50cmVzaXplJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG57bmFtZTondmFsdWVjaGFuZ2UnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuY29uY2F0KEV4dF9jYWxlbmRhcl92aWV3X0RheXMuUFJPUEVSVElFUyk7XG4gICAgICAgIHJldHVybiBFeHRfY2FsZW5kYXJfdmlld19CYXNlLmdldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRFdmVudHMoZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IGV2ZW50cy5jb25jYXQoRXh0X2NhbGVuZGFyX3ZpZXdfRGF5cy5FVkVOVFMpO1xuICAgICAgICByZXR1cm4gRXh0X2NhbGVuZGFyX3ZpZXdfQmFzZS5nZXRFdmVudHMoZXZlbnRzKTtcbiAgICB9XG59XG5cblxuICAgIC8vcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7W29iamVjdCBPYmplY3RdfTtcbiAgICAvL3N0YXRpYyBNRVRIT0RTOiBhbnlbXSA9IFtdO1xuICAgIC8vcHVibGljIHN0YXRpYyBNSkdFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAvL3N0YXRpYyBnZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpIHtcbiAgICAvLyAgICBldmVudG5hbWVzID0gZXZlbnRuYW1lcy5jb25jYXQoRXh0X2NhbGVuZGFyX3ZpZXdfRGF5cy5FVkVOVE5BTUVTKTtcbiAgICAvLyAgICByZXR1cm4gRXh0X2NhbGVuZGFyX3ZpZXdfQmFzZS5nZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpO1xuICAgIC8vfVxuIl19