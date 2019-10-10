import * as tslib_1 from "tslib";
import { Ext_field_trigger_Expand } from '../../../Ext/field/trigger/Expand';
var Ext_field_trigger_Date = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_field_trigger_Date, _super);
    function Ext_field_trigger_Date() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_field_trigger_Date.getProperties = function (properties) {
        properties = properties.concat(Ext_field_trigger_Date.PROPERTIES);
        return Ext_field_trigger_Expand.getProperties(properties);
    };
    Ext_field_trigger_Date.getEvents = function (events) {
        events = events.concat(Ext_field_trigger_Date.EVENTS);
        return Ext_field_trigger_Expand.getEvents(events);
    };
    Ext_field_trigger_Date.PROPERTIES = [
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_field_trigger_Date.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'datetrigger' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'datetrigger,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'datetrigger,event' },
        { name: 'focusenter', parameters: 'datetrigger,event' },
        { name: 'focusleave', parameters: 'datetrigger,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'datetrigger' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_field_trigger_Date;
}(Ext_field_trigger_Expand));
export { Ext_field_trigger_Date };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_field_trigger_Date.EVENTNAMES);
//    return Ext_field_trigger_Expand.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0L2ZpZWxkL3RyaWdnZXIvRGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFN0U7SUFBNEMsa0RBQXdCO0lBQXBFOztJQWdDQSxDQUFDO0lBUlUsb0NBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ00sZ0NBQVMsR0FBaEIsVUFBaUIsTUFBTTtRQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBOUJhLGlDQUFVLEdBQWE7UUFDekMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNQLENBQUM7SUFDZ0IsNkJBQU0sR0FBVTtRQUNsQyxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQztRQUMvQyxFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDdkUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztRQUM1QyxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDMUQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztRQUM3QyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDO1FBQ2xELEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7UUFDbEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDO1FBQ3pDLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDdkQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDM0IsQ0FBQztJQVNGLDZCQUFDO0NBQUEsQUFoQ0QsQ0FBNEMsd0JBQXdCLEdBZ0NuRTtTQWhDWSxzQkFBc0I7QUFtQy9CLDBEQUEwRDtBQUMxRCw2QkFBNkI7QUFDN0IsNkNBQTZDO0FBQ3pDLG9DQUFvQztBQUN4Qyx3RUFBd0U7QUFDeEUsZ0VBQWdFO0FBQ2hFLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZmllbGRfdHJpZ2dlcl9FeHBhbmQgfSBmcm9tICcuLi8uLi8uLi9FeHQvZmllbGQvdHJpZ2dlci9FeHBhbmQnO1xuXG5leHBvcnQgY2xhc3MgRXh0X2ZpZWxkX3RyaWdnZXJfRGF0ZSBleHRlbmRzIEV4dF9maWVsZF90cmlnZ2VyX0V4cGFuZCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbidwbGF0Zm9ybUNvbmZpZycsXG4ncmVzcG9uc2l2ZUNvbmZpZycsXG4nZml0VG9QYXJlbnQnLFxuJ2NvbmZpZydcbl07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonZGF0ZXRyaWdnZXInfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2RhdGV0cmlnZ2VyLGV2ZW50J30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidkYXRldHJpZ2dlcixldmVudCd9LFxue25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2RhdGV0cmlnZ2VyLGV2ZW50J30sXG57bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonZGF0ZXRyaWdnZXIsZXZlbnQnfSxcbntuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonZGF0ZXRyaWdnZXInfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuY29uY2F0KEV4dF9maWVsZF90cmlnZ2VyX0RhdGUuUFJPUEVSVElFUyk7XG4gICAgICAgIHJldHVybiBFeHRfZmllbGRfdHJpZ2dlcl9FeHBhbmQuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEV2ZW50cyhldmVudHMpIHtcbiAgICAgICAgZXZlbnRzID0gZXZlbnRzLmNvbmNhdChFeHRfZmllbGRfdHJpZ2dlcl9EYXRlLkVWRU5UUyk7XG4gICAgICAgIHJldHVybiBFeHRfZmllbGRfdHJpZ2dlcl9FeHBhbmQuZ2V0RXZlbnRzKGV2ZW50cyk7XG4gICAgfVxufVxuXG5cbiAgICAvL3B1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1tvYmplY3QgT2JqZWN0XX07XG4gICAgLy9zdGF0aWMgTUVUSE9EUzogYW55W10gPSBbXTtcbiAgICAvL3B1YmxpYyBzdGF0aWMgTUpHRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgLy9zdGF0aWMgZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKSB7XG4gICAgLy8gICAgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXMuY29uY2F0KEV4dF9maWVsZF90cmlnZ2VyX0RhdGUuRVZFTlROQU1FUyk7XG4gICAgLy8gICAgcmV0dXJuIEV4dF9maWVsZF90cmlnZ2VyX0V4cGFuZC5nZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpO1xuICAgIC8vfVxuIl19