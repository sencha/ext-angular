import * as tslib_1 from "tslib";
import { Ext_grid_cell_Base } from '../../../Ext/grid/cell/Base';
var Ext_grid_cell_Widget = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_grid_cell_Widget, _super);
    function Ext_grid_cell_Widget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_grid_cell_Widget.getProperties = function (properties) {
        properties = properties.concat(Ext_grid_cell_Widget.PROPERTIES);
        return Ext_grid_cell_Base.getProperties(properties);
    };
    Ext_grid_cell_Widget.getEvents = function (events) {
        events = events.concat(Ext_grid_cell_Widget.EVENTS);
        return Ext_grid_cell_Base.getEvents(events);
    };
    Ext_grid_cell_Widget.PROPERTIES = [
        'align',
        'forceWidth',
        'selectable',
        'widget',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_grid_cell_Widget.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'widgetcell' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'widgetcell,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'widgetcell,event' },
        { name: 'focusenter', parameters: 'widgetcell,event' },
        { name: 'focusleave', parameters: 'widgetcell,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'widgetcell' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_grid_cell_Widget;
}(Ext_grid_cell_Base));
export { Ext_grid_cell_Widget };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_grid_cell_Widget.EVENTNAMES);
//    return Ext_grid_cell_Base.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9FeHQvZ3JpZC9jZWxsL1dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFakU7SUFBMEMsZ0RBQWtCO0lBQTVEOztJQW9DQSxDQUFDO0lBUlUsa0NBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRSxPQUFPLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ00sOEJBQVMsR0FBaEIsVUFBaUIsTUFBTTtRQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBbENhLCtCQUFVLEdBQWE7UUFDekMsT0FBTztRQUNQLFlBQVk7UUFDWixZQUFZO1FBQ1osUUFBUTtRQUNSLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDUCxDQUFDO0lBQ2dCLDJCQUFNLEdBQVU7UUFDbEMsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzFFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDeEUsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUM7UUFDOUMsRUFBQyxJQUFJLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3ZFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsa0JBQWtCLEVBQUM7UUFDM0MsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsa0JBQWtCLEVBQUM7UUFDNUMsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQztRQUNqRCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGtCQUFrQixFQUFDO1FBQ2pELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQztRQUN4QyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFTRiwyQkFBQztDQUFBLEFBcENELENBQTBDLGtCQUFrQixHQW9DM0Q7U0FwQ1ksb0JBQW9CO0FBdUM3QiwwREFBMEQ7QUFDMUQsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUN6QyxvQ0FBb0M7QUFDeEMsc0VBQXNFO0FBQ3RFLDBEQUEwRDtBQUMxRCxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2dyaWRfY2VsbF9CYXNlIH0gZnJvbSAnLi4vLi4vLi4vRXh0L2dyaWQvY2VsbC9CYXNlJztcblxuZXhwb3J0IGNsYXNzIEV4dF9ncmlkX2NlbGxfV2lkZ2V0IGV4dGVuZHMgRXh0X2dyaWRfY2VsbF9CYXNlIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuJ2FsaWduJyxcbidmb3JjZVdpZHRoJyxcbidzZWxlY3RhYmxlJyxcbid3aWRnZXQnLFxuJ3BsYXRmb3JtQ29uZmlnJyxcbidyZXNwb25zaXZlQ29uZmlnJyxcbidmaXRUb1BhcmVudCcsXG4nY29uZmlnJ1xuXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOid3aWRnZXRjZWxsJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOid3aWRnZXRjZWxsLGV2ZW50J30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOid3aWRnZXRjZWxsLGV2ZW50J30sXG57bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczond2lkZ2V0Y2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J3dpZGdldGNlbGwsZXZlbnQnfSxcbntuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczond2lkZ2V0Y2VsbCd9LFxue25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gICAgc3RhdGljIGdldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5jb25jYXQoRXh0X2dyaWRfY2VsbF9XaWRnZXQuUFJPUEVSVElFUyk7XG4gICAgICAgIHJldHVybiBFeHRfZ3JpZF9jZWxsX0Jhc2UuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEV2ZW50cyhldmVudHMpIHtcbiAgICAgICAgZXZlbnRzID0gZXZlbnRzLmNvbmNhdChFeHRfZ3JpZF9jZWxsX1dpZGdldC5FVkVOVFMpO1xuICAgICAgICByZXR1cm4gRXh0X2dyaWRfY2VsbF9CYXNlLmdldEV2ZW50cyhldmVudHMpO1xuICAgIH1cbn1cblxuXG4gICAgLy9wdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtbb2JqZWN0IE9iamVjdF19O1xuICAgIC8vc3RhdGljIE1FVEhPRFM6IGFueVtdID0gW107XG4gICAgLy9wdWJsaWMgc3RhdGljIE1KR0VWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vc3RhdGljIGdldEV2ZW50TmFtZXMoZXZlbnRuYW1lcykge1xuICAgIC8vICAgIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzLmNvbmNhdChFeHRfZ3JpZF9jZWxsX1dpZGdldC5FVkVOVE5BTUVTKTtcbiAgICAvLyAgICByZXR1cm4gRXh0X2dyaWRfY2VsbF9CYXNlLmdldEV2ZW50TmFtZXMoZXZlbnRuYW1lcyk7XG4gICAgLy99XG4iXX0=