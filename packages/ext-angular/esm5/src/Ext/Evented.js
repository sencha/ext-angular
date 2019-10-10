import * as tslib_1 from "tslib";
import { Ext_Base } from '../Ext/Base';
var Ext_Evented = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_Evented, _super);
    function Ext_Evented() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_Evented.getProperties = function (properties) {
        properties = properties.concat(Ext_Evented.PROPERTIES);
        return Ext_Base.getProperties(properties);
    };
    Ext_Evented.getEvents = function (events) {
        events = events.concat(Ext_Evented.EVENTS);
        return Ext_Base.getEvents(events);
    };
    Ext_Evented.PROPERTIES = [
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_Evented.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    return Ext_Evented;
}(Ext_Base));
export { Ext_Evented };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_Evented.EVENTNAMES);
//    return Ext_Base.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0L0V2ZW50ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkM7SUFBaUMsdUNBQVE7SUFBekM7O0lBa0JBLENBQUM7SUFSVSx5QkFBYSxHQUFwQixVQUFxQixVQUFVO1FBQzNCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNNLHFCQUFTLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBaEJhLHNCQUFVLEdBQWE7UUFDekMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNQLENBQUM7SUFDZ0Isa0JBQU0sR0FBVTtRQUNsQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUMzQixDQUFDO0lBU0Ysa0JBQUM7Q0FBQSxBQWxCRCxDQUFpQyxRQUFRLEdBa0J4QztTQWxCWSxXQUFXO0FBcUJwQiwwREFBMEQ7QUFDMUQsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUN6QyxvQ0FBb0M7QUFDeEMsNkRBQTZEO0FBQzdELGdEQUFnRDtBQUNoRCxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X0Jhc2UgfSBmcm9tICcuLi9FeHQvQmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBFeHRfRXZlbnRlZCBleHRlbmRzIEV4dF9CYXNlIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuJ3BsYXRmb3JtQ29uZmlnJyxcbidyZXNwb25zaXZlQ29uZmlnJyxcbidmaXRUb1BhcmVudCcsXG4nY29uZmlnJ1xuXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuY29uY2F0KEV4dF9FdmVudGVkLlBST1BFUlRJRVMpO1xuICAgICAgICByZXR1cm4gRXh0X0Jhc2UuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEV2ZW50cyhldmVudHMpIHtcbiAgICAgICAgZXZlbnRzID0gZXZlbnRzLmNvbmNhdChFeHRfRXZlbnRlZC5FVkVOVFMpO1xuICAgICAgICByZXR1cm4gRXh0X0Jhc2UuZ2V0RXZlbnRzKGV2ZW50cyk7XG4gICAgfVxufVxuXG5cbiAgICAvL3B1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1tvYmplY3QgT2JqZWN0XX07XG4gICAgLy9zdGF0aWMgTUVUSE9EUzogYW55W10gPSBbXTtcbiAgICAvL3B1YmxpYyBzdGF0aWMgTUpHRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgLy9zdGF0aWMgZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKSB7XG4gICAgLy8gICAgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXMuY29uY2F0KEV4dF9FdmVudGVkLkVWRU5UTkFNRVMpO1xuICAgIC8vICAgIHJldHVybiBFeHRfQmFzZS5nZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpO1xuICAgIC8vfVxuIl19