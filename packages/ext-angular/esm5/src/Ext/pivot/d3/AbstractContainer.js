import * as tslib_1 from "tslib";
import { Ext_panel_Panel } from '../../../Ext/panel/Panel';
var Ext_pivot_d3_AbstractContainer = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_pivot_d3_AbstractContainer, _super);
    function Ext_pivot_d3_AbstractContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_pivot_d3_AbstractContainer.getProperties = function (properties) {
        properties = properties.concat(Ext_pivot_d3_AbstractContainer.PROPERTIES);
        return Ext_panel_Panel.getProperties(properties);
    };
    Ext_pivot_d3_AbstractContainer.getEvents = function (events) {
        events = events.concat(Ext_pivot_d3_AbstractContainer.EVENTS);
        return Ext_panel_Panel.getEvents(events);
    };
    Ext_pivot_d3_AbstractContainer.PROPERTIES = [
        'configurator',
        'drawing',
        'matrix',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_pivot_d3_AbstractContainer.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    return Ext_pivot_d3_AbstractContainer;
}(Ext_panel_Panel));
export { Ext_pivot_d3_AbstractContainer };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_pivot_d3_AbstractContainer.EVENTNAMES);
//    return Ext_panel_Panel.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL0V4dC9waXZvdC9kMy9BYnN0cmFjdENvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNEO0lBQW9ELDBEQUFlO0lBQW5FOztJQXFCQSxDQUFDO0lBUlUsNENBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRSxPQUFPLGVBQWUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNNLHdDQUFTLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsT0FBTyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFuQmEseUNBQVUsR0FBYTtRQUN6QyxjQUFjO1FBQ2QsU0FBUztRQUNULFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0tBQ1AsQ0FBQztJQUNnQixxQ0FBTSxHQUFVO1FBQ2xDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFTRixxQ0FBQztDQUFBLEFBckJELENBQW9ELGVBQWUsR0FxQmxFO1NBckJZLDhCQUE4QjtBQXdCdkMsMERBQTBEO0FBQzFELDZCQUE2QjtBQUM3Qiw2Q0FBNkM7QUFDekMsb0NBQW9DO0FBQ3hDLGdGQUFnRjtBQUNoRix1REFBdUQ7QUFDdkQsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9wYW5lbF9QYW5lbCB9IGZyb20gJy4uLy4uLy4uL0V4dC9wYW5lbC9QYW5lbCc7XG5cbmV4cG9ydCBjbGFzcyBFeHRfcGl2b3RfZDNfQWJzdHJhY3RDb250YWluZXIgZXh0ZW5kcyBFeHRfcGFuZWxfUGFuZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nY29uZmlndXJhdG9yJyxcbidkcmF3aW5nJyxcbidtYXRyaXgnLFxuJ3BsYXRmb3JtQ29uZmlnJyxcbidyZXNwb25zaXZlQ29uZmlnJyxcbidmaXRUb1BhcmVudCcsXG4nY29uZmlnJ1xuXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuY29uY2F0KEV4dF9waXZvdF9kM19BYnN0cmFjdENvbnRhaW5lci5QUk9QRVJUSUVTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9wYW5lbF9QYW5lbC5nZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RXZlbnRzKGV2ZW50cykge1xuICAgICAgICBldmVudHMgPSBldmVudHMuY29uY2F0KEV4dF9waXZvdF9kM19BYnN0cmFjdENvbnRhaW5lci5FVkVOVFMpO1xuICAgICAgICByZXR1cm4gRXh0X3BhbmVsX1BhbmVsLmdldEV2ZW50cyhldmVudHMpO1xuICAgIH1cbn1cblxuXG4gICAgLy9wdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtbb2JqZWN0IE9iamVjdF19O1xuICAgIC8vc3RhdGljIE1FVEhPRFM6IGFueVtdID0gW107XG4gICAgLy9wdWJsaWMgc3RhdGljIE1KR0VWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vc3RhdGljIGdldEV2ZW50TmFtZXMoZXZlbnRuYW1lcykge1xuICAgIC8vICAgIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzLmNvbmNhdChFeHRfcGl2b3RfZDNfQWJzdHJhY3RDb250YWluZXIuRVZFTlROQU1FUyk7XG4gICAgLy8gICAgcmV0dXJuIEV4dF9wYW5lbF9QYW5lbC5nZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpO1xuICAgIC8vfVxuIl19