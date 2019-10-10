import * as tslib_1 from "tslib";
import { Ext_panel_Panel } from '../../../Ext/panel/Panel';
var Ext_ux_colorpick_Selector = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_ux_colorpick_Selector, _super);
    function Ext_ux_colorpick_Selector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_ux_colorpick_Selector.getProperties = function (properties) {
        properties = properties.concat(Ext_ux_colorpick_Selector.PROPERTIES);
        return Ext_panel_Panel.getProperties(properties);
    };
    Ext_ux_colorpick_Selector.getEvents = function (events) {
        events = events.concat(Ext_ux_colorpick_Selector.EVENTS);
        return Ext_panel_Panel.getEvents(events);
    };
    Ext_ux_colorpick_Selector.PROPERTIES = [
        'cancelButtonText',
        'fieldPad',
        'fieldWidth',
        'okButtonText',
        'showOkCancelButtons',
        'showPreviousColor',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_ux_colorpick_Selector.EVENTS = [
        { name: 'cancel', parameters: 'colorselector' },
        { name: 'change', parameters: 'colorselector,color,previousColor' },
        { name: 'ok', parameters: 'colorselector,color' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_ux_colorpick_Selector;
}(Ext_panel_Panel));
export { Ext_ux_colorpick_Selector };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_ux_colorpick_Selector.EVENTNAMES);
//    return Ext_panel_Panel.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL0V4dC91eC9jb2xvcnBpY2svU2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRDtJQUErQyxxREFBZTtJQUE5RDs7SUEyQkEsQ0FBQztJQVJVLHVDQUFhLEdBQXBCLFVBQXFCLFVBQVU7UUFDM0IsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckUsT0FBTyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSxtQ0FBUyxHQUFoQixVQUFpQixNQUFNO1FBQ25CLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELE9BQU8sZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBekJhLG9DQUFVLEdBQWE7UUFDekMsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osY0FBYztRQUNkLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNQLENBQUM7SUFDZ0IsZ0NBQU0sR0FBVTtRQUNsQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUMxQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLG1DQUFtQyxFQUFDO1FBQzlELEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDNUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDM0IsQ0FBQztJQVNGLGdDQUFDO0NBQUEsQUEzQkQsQ0FBK0MsZUFBZSxHQTJCN0Q7U0EzQlkseUJBQXlCO0FBOEJsQywwREFBMEQ7QUFDMUQsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUN6QyxvQ0FBb0M7QUFDeEMsMkVBQTJFO0FBQzNFLHVEQUF1RDtBQUN2RCxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3BhbmVsX1BhbmVsIH0gZnJvbSAnLi4vLi4vLi4vRXh0L3BhbmVsL1BhbmVsJztcblxuZXhwb3J0IGNsYXNzIEV4dF91eF9jb2xvcnBpY2tfU2VsZWN0b3IgZXh0ZW5kcyBFeHRfcGFuZWxfUGFuZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nY2FuY2VsQnV0dG9uVGV4dCcsXG4nZmllbGRQYWQnLFxuJ2ZpZWxkV2lkdGgnLFxuJ29rQnV0dG9uVGV4dCcsXG4nc2hvd09rQ2FuY2VsQnV0dG9ucycsXG4nc2hvd1ByZXZpb3VzQ29sb3InLFxuJ3BsYXRmb3JtQ29uZmlnJyxcbidyZXNwb25zaXZlQ29uZmlnJyxcbidmaXRUb1BhcmVudCcsXG4nY29uZmlnJ1xuXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonY2FuY2VsJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yJ30sXG57bmFtZTonY2hhbmdlJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yLGNvbG9yLHByZXZpb3VzQ29sb3InfSxcbntuYW1lOidvaycscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcixjb2xvcid9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgICBzdGF0aWMgZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmNvbmNhdChFeHRfdXhfY29sb3JwaWNrX1NlbGVjdG9yLlBST1BFUlRJRVMpO1xuICAgICAgICByZXR1cm4gRXh0X3BhbmVsX1BhbmVsLmdldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRFdmVudHMoZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IGV2ZW50cy5jb25jYXQoRXh0X3V4X2NvbG9ycGlja19TZWxlY3Rvci5FVkVOVFMpO1xuICAgICAgICByZXR1cm4gRXh0X3BhbmVsX1BhbmVsLmdldEV2ZW50cyhldmVudHMpO1xuICAgIH1cbn1cblxuXG4gICAgLy9wdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtbb2JqZWN0IE9iamVjdF19O1xuICAgIC8vc3RhdGljIE1FVEhPRFM6IGFueVtdID0gW107XG4gICAgLy9wdWJsaWMgc3RhdGljIE1KR0VWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vc3RhdGljIGdldEV2ZW50TmFtZXMoZXZlbnRuYW1lcykge1xuICAgIC8vICAgIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzLmNvbmNhdChFeHRfdXhfY29sb3JwaWNrX1NlbGVjdG9yLkVWRU5UTkFNRVMpO1xuICAgIC8vICAgIHJldHVybiBFeHRfcGFuZWxfUGFuZWwuZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKTtcbiAgICAvL31cbiJdfQ==