import * as tslib_1 from "tslib";
import { Ext_field_trigger_Trigger } from '../../../Ext/field/trigger/Trigger';
var Ext_field_trigger_Reveal = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_field_trigger_Reveal, _super);
    function Ext_field_trigger_Reveal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_field_trigger_Reveal.getProperties = function (properties) {
        properties = properties.concat(Ext_field_trigger_Reveal.PROPERTIES);
        return Ext_field_trigger_Trigger.getProperties(properties);
    };
    Ext_field_trigger_Reveal.getEvents = function (events) {
        events = events.concat(Ext_field_trigger_Reveal.EVENTS);
        return Ext_field_trigger_Trigger.getEvents(events);
    };
    Ext_field_trigger_Reveal.PROPERTIES = [
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_field_trigger_Reveal.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'revealtrigger' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'revealtrigger,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'revealtrigger,event' },
        { name: 'focusenter', parameters: 'revealtrigger,event' },
        { name: 'focusleave', parameters: 'revealtrigger,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'revealtrigger' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_field_trigger_Reveal;
}(Ext_field_trigger_Trigger));
export { Ext_field_trigger_Reveal };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_field_trigger_Reveal.EVENTNAMES);
//    return Ext_field_trigger_Trigger.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV2ZWFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9FeHQvZmllbGQvdHJpZ2dlci9SZXZlYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRS9FO0lBQThDLG9EQUF5QjtJQUF2RTs7SUFnQ0EsQ0FBQztJQVJVLHNDQUFhLEdBQXBCLFVBQXFCLFVBQVU7UUFDM0IsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEUsT0FBTyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNNLGtDQUFTLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsT0FBTyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQTlCYSxtQ0FBVSxHQUFhO1FBQ3pDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDUCxDQUFDO0lBQ2dCLCtCQUFNLEdBQVU7UUFDbEMsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzFFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDeEUsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUM7UUFDakQsRUFBQyxJQUFJLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3ZFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDOUMsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDL0MsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQztRQUNwRCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO1FBQ3BELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUMzQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFTRiwrQkFBQztDQUFBLEFBaENELENBQThDLHlCQUF5QixHQWdDdEU7U0FoQ1ksd0JBQXdCO0FBbUNqQywwREFBMEQ7QUFDMUQsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUN6QyxvQ0FBb0M7QUFDeEMsMEVBQTBFO0FBQzFFLGlFQUFpRTtBQUNqRSxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2ZpZWxkX3RyaWdnZXJfVHJpZ2dlciB9IGZyb20gJy4uLy4uLy4uL0V4dC9maWVsZC90cmlnZ2VyL1RyaWdnZXInO1xuXG5leHBvcnQgY2xhc3MgRXh0X2ZpZWxkX3RyaWdnZXJfUmV2ZWFsIGV4dGVuZHMgRXh0X2ZpZWxkX3RyaWdnZXJfVHJpZ2dlciB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbidwbGF0Zm9ybUNvbmZpZycsXG4ncmVzcG9uc2l2ZUNvbmZpZycsXG4nZml0VG9QYXJlbnQnLFxuJ2NvbmZpZydcbl07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczoncmV2ZWFsdHJpZ2dlcid9LFxue25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmx1cicscGFyYW1ldGVyczoncmV2ZWFsdHJpZ2dlcixldmVudCd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczoncmV2ZWFsdHJpZ2dlcixldmVudCd9LFxue25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3JldmVhbHRyaWdnZXIsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidyZXZlYWx0cmlnZ2VyLGV2ZW50J30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J3JldmVhbHRyaWdnZXInfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuY29uY2F0KEV4dF9maWVsZF90cmlnZ2VyX1JldmVhbC5QUk9QRVJUSUVTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9maWVsZF90cmlnZ2VyX1RyaWdnZXIuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEV2ZW50cyhldmVudHMpIHtcbiAgICAgICAgZXZlbnRzID0gZXZlbnRzLmNvbmNhdChFeHRfZmllbGRfdHJpZ2dlcl9SZXZlYWwuRVZFTlRTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9maWVsZF90cmlnZ2VyX1RyaWdnZXIuZ2V0RXZlbnRzKGV2ZW50cyk7XG4gICAgfVxufVxuXG5cbiAgICAvL3B1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1tvYmplY3QgT2JqZWN0XX07XG4gICAgLy9zdGF0aWMgTUVUSE9EUzogYW55W10gPSBbXTtcbiAgICAvL3B1YmxpYyBzdGF0aWMgTUpHRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgLy9zdGF0aWMgZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKSB7XG4gICAgLy8gICAgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXMuY29uY2F0KEV4dF9maWVsZF90cmlnZ2VyX1JldmVhbC5FVkVOVE5BTUVTKTtcbiAgICAvLyAgICByZXR1cm4gRXh0X2ZpZWxkX3RyaWdnZXJfVHJpZ2dlci5nZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpO1xuICAgIC8vfVxuIl19