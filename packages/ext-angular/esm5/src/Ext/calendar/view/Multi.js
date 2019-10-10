import * as tslib_1 from "tslib";
import { Ext_container_Container } from '../../../Ext/container/Container';
var Ext_calendar_view_Multi = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_calendar_view_Multi, _super);
    function Ext_calendar_view_Multi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_calendar_view_Multi.getProperties = function (properties) {
        properties = properties.concat(Ext_calendar_view_Multi.PROPERTIES);
        return Ext_container_Container.getProperties(properties);
    };
    Ext_calendar_view_Multi.getEvents = function (events) {
        events = events.concat(Ext_calendar_view_Multi.EVENTS);
        return Ext_container_Container.getEvents(events);
    };
    Ext_calendar_view_Multi.PROPERTIES = [
        'compact',
        'compactOptions',
        'defaultView',
        'layout',
        'store',
        'timezoneOffset',
        'value',
        'views',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_calendar_view_Multi.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    return Ext_calendar_view_Multi;
}(Ext_container_Container));
export { Ext_calendar_view_Multi };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_calendar_view_Multi.EVENTNAMES);
//    return Ext_container_Container.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL0V4dC9jYWxlbmRhci92aWV3L011bHRpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUzRTtJQUE2QyxtREFBdUI7SUFBcEU7O0lBMEJBLENBQUM7SUFSVSxxQ0FBYSxHQUFwQixVQUFxQixVQUFVO1FBQzNCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sdUJBQXVCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTSxpQ0FBUyxHQUFoQixVQUFpQixNQUFNO1FBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sdUJBQXVCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUF4QmEsa0NBQVUsR0FBYTtRQUN6QyxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixRQUFRO1FBQ1IsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixPQUFPO1FBQ1AsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDUCxDQUFDO0lBQ2dCLDhCQUFNLEdBQVU7UUFDbEMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDM0IsQ0FBQztJQVNGLDhCQUFDO0NBQUEsQUExQkQsQ0FBNkMsdUJBQXVCLEdBMEJuRTtTQTFCWSx1QkFBdUI7QUE2QmhDLDBEQUEwRDtBQUMxRCw2QkFBNkI7QUFDN0IsNkNBQTZDO0FBQ3pDLG9DQUFvQztBQUN4Qyx5RUFBeUU7QUFDekUsK0RBQStEO0FBQy9ELEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfY29udGFpbmVyX0NvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL0V4dC9jb250YWluZXIvQ29udGFpbmVyJztcblxuZXhwb3J0IGNsYXNzIEV4dF9jYWxlbmRhcl92aWV3X011bHRpIGV4dGVuZHMgRXh0X2NvbnRhaW5lcl9Db250YWluZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nY29tcGFjdCcsXG4nY29tcGFjdE9wdGlvbnMnLFxuJ2RlZmF1bHRWaWV3JyxcbidsYXlvdXQnLFxuJ3N0b3JlJyxcbid0aW1lem9uZU9mZnNldCcsXG4ndmFsdWUnLFxuJ3ZpZXdzJyxcbidwbGF0Zm9ybUNvbmZpZycsXG4ncmVzcG9uc2l2ZUNvbmZpZycsXG4nZml0VG9QYXJlbnQnLFxuJ2NvbmZpZydcbl07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgICBzdGF0aWMgZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmNvbmNhdChFeHRfY2FsZW5kYXJfdmlld19NdWx0aS5QUk9QRVJUSUVTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9jb250YWluZXJfQ29udGFpbmVyLmdldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRFdmVudHMoZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IGV2ZW50cy5jb25jYXQoRXh0X2NhbGVuZGFyX3ZpZXdfTXVsdGkuRVZFTlRTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9jb250YWluZXJfQ29udGFpbmVyLmdldEV2ZW50cyhldmVudHMpO1xuICAgIH1cbn1cblxuXG4gICAgLy9wdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtbb2JqZWN0IE9iamVjdF19O1xuICAgIC8vc3RhdGljIE1FVEhPRFM6IGFueVtdID0gW107XG4gICAgLy9wdWJsaWMgc3RhdGljIE1KR0VWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vc3RhdGljIGdldEV2ZW50TmFtZXMoZXZlbnRuYW1lcykge1xuICAgIC8vICAgIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzLmNvbmNhdChFeHRfY2FsZW5kYXJfdmlld19NdWx0aS5FVkVOVE5BTUVTKTtcbiAgICAvLyAgICByZXR1cm4gRXh0X2NvbnRhaW5lcl9Db250YWluZXIuZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKTtcbiAgICAvL31cbiJdfQ==