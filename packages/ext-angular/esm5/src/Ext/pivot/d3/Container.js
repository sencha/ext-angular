import * as tslib_1 from "tslib";
import { Ext_pivot_d3_AbstractContainer } from '../../../Ext/pivot/d3/AbstractContainer';
var Ext_pivot_d3_Container = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_pivot_d3_Container, _super);
    function Ext_pivot_d3_Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_pivot_d3_Container.getProperties = function (properties) {
        properties = properties.concat(Ext_pivot_d3_Container.PROPERTIES);
        return Ext_pivot_d3_AbstractContainer.getProperties(properties);
    };
    Ext_pivot_d3_Container.getEvents = function (events) {
        events = events.concat(Ext_pivot_d3_Container.EVENTS);
        return Ext_pivot_d3_AbstractContainer.getEvents(events);
    };
    Ext_pivot_d3_Container.PROPERTIES = [
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_pivot_d3_Container.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    return Ext_pivot_d3_Container;
}(Ext_pivot_d3_AbstractContainer));
export { Ext_pivot_d3_Container };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_pivot_d3_Container.EVENTNAMES);
//    return Ext_pivot_d3_AbstractContainer.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9FeHQvcGl2b3QvZDMvQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV6RjtJQUE0QyxrREFBOEI7SUFBMUU7O0lBa0JBLENBQUM7SUFSVSxvQ0FBYSxHQUFwQixVQUFxQixVQUFVO1FBQzNCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sOEJBQThCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDTSxnQ0FBUyxHQUFoQixVQUFpQixNQUFNO1FBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELE9BQU8sOEJBQThCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFoQmEsaUNBQVUsR0FBYTtRQUN6QyxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0tBQ1AsQ0FBQztJQUNnQiw2QkFBTSxHQUFVO1FBQ2xDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFTRiw2QkFBQztDQUFBLEFBbEJELENBQTRDLDhCQUE4QixHQWtCekU7U0FsQlksc0JBQXNCO0FBcUIvQiwwREFBMEQ7QUFDMUQsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUN6QyxvQ0FBb0M7QUFDeEMsd0VBQXdFO0FBQ3hFLHNFQUFzRTtBQUN0RSxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3Bpdm90X2QzX0Fic3RyYWN0Q29udGFpbmVyIH0gZnJvbSAnLi4vLi4vLi4vRXh0L3Bpdm90L2QzL0Fic3RyYWN0Q29udGFpbmVyJztcblxuZXhwb3J0IGNsYXNzIEV4dF9waXZvdF9kM19Db250YWluZXIgZXh0ZW5kcyBFeHRfcGl2b3RfZDNfQWJzdHJhY3RDb250YWluZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4ncGxhdGZvcm1Db25maWcnLFxuJ3Jlc3BvbnNpdmVDb25maWcnLFxuJ2ZpdFRvUGFyZW50Jyxcbidjb25maWcnXG5dO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gICAgc3RhdGljIGdldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5jb25jYXQoRXh0X3Bpdm90X2QzX0NvbnRhaW5lci5QUk9QRVJUSUVTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9waXZvdF9kM19BYnN0cmFjdENvbnRhaW5lci5nZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RXZlbnRzKGV2ZW50cykge1xuICAgICAgICBldmVudHMgPSBldmVudHMuY29uY2F0KEV4dF9waXZvdF9kM19Db250YWluZXIuRVZFTlRTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9waXZvdF9kM19BYnN0cmFjdENvbnRhaW5lci5nZXRFdmVudHMoZXZlbnRzKTtcbiAgICB9XG59XG5cblxuICAgIC8vcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7W29iamVjdCBPYmplY3RdfTtcbiAgICAvL3N0YXRpYyBNRVRIT0RTOiBhbnlbXSA9IFtdO1xuICAgIC8vcHVibGljIHN0YXRpYyBNSkdFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAvL3N0YXRpYyBnZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpIHtcbiAgICAvLyAgICBldmVudG5hbWVzID0gZXZlbnRuYW1lcy5jb25jYXQoRXh0X3Bpdm90X2QzX0NvbnRhaW5lci5FVkVOVE5BTUVTKTtcbiAgICAvLyAgICByZXR1cm4gRXh0X3Bpdm90X2QzX0Fic3RyYWN0Q29udGFpbmVyLmdldEV2ZW50TmFtZXMoZXZlbnRuYW1lcyk7XG4gICAgLy99XG4iXX0=