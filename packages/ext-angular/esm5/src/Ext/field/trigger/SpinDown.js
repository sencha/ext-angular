import * as tslib_1 from "tslib";
import { Ext_field_trigger_Trigger } from '../../../Ext/field/trigger/Trigger';
var Ext_field_trigger_SpinDown = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_field_trigger_SpinDown, _super);
    function Ext_field_trigger_SpinDown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_field_trigger_SpinDown.getProperties = function (properties) {
        properties = properties.concat(Ext_field_trigger_SpinDown.PROPERTIES);
        return Ext_field_trigger_Trigger.getProperties(properties);
    };
    Ext_field_trigger_SpinDown.getEvents = function (events) {
        events = events.concat(Ext_field_trigger_SpinDown.EVENTS);
        return Ext_field_trigger_Trigger.getEvents(events);
    };
    Ext_field_trigger_SpinDown.PROPERTIES = [
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_field_trigger_SpinDown.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'spindowntrigger' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'spindowntrigger,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'spindowntrigger,event' },
        { name: 'focusenter', parameters: 'spindowntrigger,event' },
        { name: 'focusleave', parameters: 'spindowntrigger,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'spindowntrigger' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_field_trigger_SpinDown;
}(Ext_field_trigger_Trigger));
export { Ext_field_trigger_SpinDown };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_field_trigger_SpinDown.EVENTNAMES);
//    return Ext_field_trigger_Trigger.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BpbkRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL0V4dC9maWVsZC90cmlnZ2VyL1NwaW5Eb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUvRTtJQUFnRCxzREFBeUI7SUFBekU7O0lBZ0NBLENBQUM7SUFSVSx3Q0FBYSxHQUFwQixVQUFxQixVQUFVO1FBQzNCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8seUJBQXlCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDTSxvQ0FBUyxHQUFoQixVQUFpQixNQUFNO1FBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELE9BQU8seUJBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUE5QmEscUNBQVUsR0FBYTtRQUN6QyxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0tBQ1AsQ0FBQztJQUNnQixpQ0FBTSxHQUFVO1FBQ2xDLEVBQUMsSUFBSSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUMxRSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDeEUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUM7UUFDbkQsRUFBQyxJQUFJLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3ZFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDaEQsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDakQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN0RCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3RELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDO1FBQzdDLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDdkQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDM0IsQ0FBQztJQVNGLGlDQUFDO0NBQUEsQUFoQ0QsQ0FBZ0QseUJBQXlCLEdBZ0N4RTtTQWhDWSwwQkFBMEI7QUFtQ25DLDBEQUEwRDtBQUMxRCw2QkFBNkI7QUFDN0IsNkNBQTZDO0FBQ3pDLG9DQUFvQztBQUN4Qyw0RUFBNEU7QUFDNUUsaUVBQWlFO0FBQ2pFLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZmllbGRfdHJpZ2dlcl9UcmlnZ2VyIH0gZnJvbSAnLi4vLi4vLi4vRXh0L2ZpZWxkL3RyaWdnZXIvVHJpZ2dlcic7XG5cbmV4cG9ydCBjbGFzcyBFeHRfZmllbGRfdHJpZ2dlcl9TcGluRG93biBleHRlbmRzIEV4dF9maWVsZF90cmlnZ2VyX1RyaWdnZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4ncGxhdGZvcm1Db25maWcnLFxuJ3Jlc3BvbnNpdmVDb25maWcnLFxuJ2ZpdFRvUGFyZW50Jyxcbidjb25maWcnXG5dO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J3NwaW5kb3dudHJpZ2dlcid9LFxue25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmx1cicscGFyYW1ldGVyczonc3BpbmRvd250cmlnZ2VyLGV2ZW50J30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidzcGluZG93bnRyaWdnZXIsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidzcGluZG93bnRyaWdnZXIsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidzcGluZG93bnRyaWdnZXIsZXZlbnQnfSxcbntuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonc3BpbmRvd250cmlnZ2VyJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgICBzdGF0aWMgZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmNvbmNhdChFeHRfZmllbGRfdHJpZ2dlcl9TcGluRG93bi5QUk9QRVJUSUVTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9maWVsZF90cmlnZ2VyX1RyaWdnZXIuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEV2ZW50cyhldmVudHMpIHtcbiAgICAgICAgZXZlbnRzID0gZXZlbnRzLmNvbmNhdChFeHRfZmllbGRfdHJpZ2dlcl9TcGluRG93bi5FVkVOVFMpO1xuICAgICAgICByZXR1cm4gRXh0X2ZpZWxkX3RyaWdnZXJfVHJpZ2dlci5nZXRFdmVudHMoZXZlbnRzKTtcbiAgICB9XG59XG5cblxuICAgIC8vcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7W29iamVjdCBPYmplY3RdfTtcbiAgICAvL3N0YXRpYyBNRVRIT0RTOiBhbnlbXSA9IFtdO1xuICAgIC8vcHVibGljIHN0YXRpYyBNSkdFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAvL3N0YXRpYyBnZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpIHtcbiAgICAvLyAgICBldmVudG5hbWVzID0gZXZlbnRuYW1lcy5jb25jYXQoRXh0X2ZpZWxkX3RyaWdnZXJfU3BpbkRvd24uRVZFTlROQU1FUyk7XG4gICAgLy8gICAgcmV0dXJuIEV4dF9maWVsZF90cmlnZ2VyX1RyaWdnZXIuZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKTtcbiAgICAvL31cbiJdfQ==