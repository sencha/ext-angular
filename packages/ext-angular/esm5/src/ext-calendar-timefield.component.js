import * as tslib_1 from "tslib";
import { Ext_calendar_form_TimeField } from './Ext/calendar/form/TimeField';
var ExtCalendar_timefieldMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_timefieldMetaData, _super);
    function ExtCalendar_timefieldMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_timefieldMetaData.getAll = function () {
        ExtCalendar_timefieldMetaData.PROPERTIES = Ext_calendar_form_TimeField.getProperties(ExtCalendar_timefieldMetaData.PROPERTIES);
        ExtCalendar_timefieldMetaData.EVENTS = Ext_calendar_form_TimeField.getEvents(ExtCalendar_timefieldMetaData.EVENTS);
        ExtCalendar_timefieldMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_timefieldMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_timefieldMetaData.PROPERTIES = [];
    ExtCalendar_timefieldMetaData.EVENTS = [];
    ExtCalendar_timefieldMetaData.EVENTNAMES = [];
    return ExtCalendar_timefieldMetaData;
}(Ext_calendar_form_TimeField));
export { ExtCalendar_timefieldMetaData };
(function () { ExtCalendar_timefieldMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_timefieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_timefieldComponent, _super);
    function ExtCalendar_timefieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_timefieldMetaData.PROPERTIES, ExtCalendar_timefieldMetaData.EVENTS) || this;
        _this.xtype = 'calendar-timefield';
        return _this;
    }
    ExtCalendar_timefieldComponent_1 = ExtCalendar_timefieldComponent;
    ExtCalendar_timefieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_timefieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_timefieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_timefieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_timefieldComponent_1;
    ExtCalendar_timefieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_timefieldComponent = ExtCalendar_timefieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-timefield',
            inputs: ExtCalendar_timefieldMetaData.PROPERTIES,
            outputs: ExtCalendar_timefieldMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_timefieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_timefieldComponent);
    return ExtCalendar_timefieldComponent;
}(EngBase));
export { ExtCalendar_timefieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLXRpbWVmaWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1jYWxlbmRhci10aW1lZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RTtJQUFtRCx5REFBMkI7SUFBOUU7O0lBV0EsQ0FBQztJQVBVLG9DQUFNLEdBQWI7UUFDSSw2QkFBNkIsQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ILDZCQUE2QixDQUFDLE1BQU0sR0FBRywyQkFBMkIsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkgsNkJBQTZCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDckQsNkJBQTZCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsb0NBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsb0NBQUM7Q0FBQSxBQVhELENBQW1ELDJCQUEyQixHQVc3RTtTQVhZLDZCQUE2QjtBQVkxQyxDQUFDLGNBQWEsNkJBQTZCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBb0QsMERBQU87SUFFdkQsd0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDZCQUE2QixDQUFDLFVBQVUsRUFDeEMsNkJBQTZCLENBQUMsTUFBTSxDQUN2QyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQTs7SUFDckMsQ0FBQzt1Q0FiUSw4QkFBOEI7SUFlaEMsaURBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sd0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sb0RBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sb0RBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDhCQUE4QjtRQVAxQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2hELE9BQU8sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2pELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBOEIsRUFBOUIsQ0FBOEIsQ0FBQyxFQUFDLENBQUM7WUFDOUYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsOEJBQThCLENBOEIxQztJQUFELHFDQUFDO0NBQUEsQUE5QkQsQ0FBb0QsT0FBTyxHQThCMUQ7U0E5QlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NhbGVuZGFyX2Zvcm1fVGltZUZpZWxkIH0gZnJvbSAnLi9FeHQvY2FsZW5kYXIvZm9ybS9UaW1lRmllbGQnO1xuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX3RpbWVmaWVsZE1ldGFEYXRhIGV4dGVuZHMgRXh0X2NhbGVuZGFyX2Zvcm1fVGltZUZpZWxkIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX3RpbWVmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfY2FsZW5kYXJfZm9ybV9UaW1lRmllbGQuZ2V0UHJvcGVydGllcyhFeHRDYWxlbmRhcl90aW1lZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0Q2FsZW5kYXJfdGltZWZpZWxkTWV0YURhdGEuRVZFTlRTID0gRXh0X2NhbGVuZGFyX2Zvcm1fVGltZUZpZWxkLmdldEV2ZW50cyhFeHRDYWxlbmRhcl90aW1lZmllbGRNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRDYWxlbmRhcl90aW1lZmllbGRNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX3RpbWVmaWVsZE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRDYWxlbmRhcl90aW1lZmllbGRNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtY2FsZW5kYXItdGltZWZpZWxkJyxcbiAgaW5wdXRzOiBFeHRDYWxlbmRhcl90aW1lZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRDYWxlbmRhcl90aW1lZmllbGRNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfdGltZWZpZWxkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfdGltZWZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX3RpbWVmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRDYWxlbmRhcl90aW1lZmllbGRNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2NhbGVuZGFyLXRpbWVmaWVsZCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==