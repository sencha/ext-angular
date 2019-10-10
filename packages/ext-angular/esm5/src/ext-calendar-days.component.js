import * as tslib_1 from "tslib";
import { Ext_calendar_panel_Days } from './Ext/calendar/panel/Days';
var ExtCalendar_daysMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_daysMetaData, _super);
    function ExtCalendar_daysMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_daysMetaData.getAll = function () {
        ExtCalendar_daysMetaData.PROPERTIES = Ext_calendar_panel_Days.getProperties(ExtCalendar_daysMetaData.PROPERTIES);
        ExtCalendar_daysMetaData.EVENTS = Ext_calendar_panel_Days.getEvents(ExtCalendar_daysMetaData.EVENTS);
        ExtCalendar_daysMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_daysMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_daysMetaData.PROPERTIES = [];
    ExtCalendar_daysMetaData.EVENTS = [];
    ExtCalendar_daysMetaData.EVENTNAMES = [];
    return ExtCalendar_daysMetaData;
}(Ext_calendar_panel_Days));
export { ExtCalendar_daysMetaData };
(function () { ExtCalendar_daysMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_daysComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_daysComponent, _super);
    function ExtCalendar_daysComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_daysMetaData.PROPERTIES, ExtCalendar_daysMetaData.EVENTS) || this;
        _this.xtype = 'calendar-days';
        return _this;
    }
    ExtCalendar_daysComponent_1 = ExtCalendar_daysComponent;
    ExtCalendar_daysComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_daysComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_daysComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_daysComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_daysComponent_1;
    ExtCalendar_daysComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_daysComponent = ExtCalendar_daysComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-days',
            inputs: ExtCalendar_daysMetaData.PROPERTIES,
            outputs: ExtCalendar_daysMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_daysComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_daysComponent);
    return ExtCalendar_daysComponent;
}(EngBase));
export { ExtCalendar_daysComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWRheXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtY2FsZW5kYXItZGF5cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFO0lBQThDLG9EQUF1QjtJQUFyRTs7SUFXQSxDQUFDO0lBUFUsK0JBQU0sR0FBYjtRQUNJLHdCQUF3QixDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakgsd0JBQXdCLENBQUMsTUFBTSxHQUFHLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNoRCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxtQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQiwrQkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixtQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QywrQkFBQztDQUFBLEFBWEQsQ0FBOEMsdUJBQXVCLEdBV3BFO1NBWFksd0JBQXdCO0FBWXJDLENBQUMsY0FBYSx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUErQyxxREFBTztJQUVsRCxtQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2Isd0JBQXdCLENBQUMsVUFBVSxFQUNuQyx3QkFBd0IsQ0FBQyxNQUFNLENBQ2xDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQTs7SUFDaEMsQ0FBQztrQ0FiUSx5QkFBeUI7SUFlM0IsNENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sbURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sK0NBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sK0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHlCQUF5QjtRQVByQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwyQkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFDLENBQUM7WUFDekYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQseUJBQXlCLENBOEJyQztJQUFELGdDQUFDO0NBQUEsQUE5QkQsQ0FBK0MsT0FBTyxHQThCckQ7U0E5QlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NhbGVuZGFyX3BhbmVsX0RheXMgfSBmcm9tICcuL0V4dC9jYWxlbmRhci9wYW5lbC9EYXlzJztcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9kYXlzTWV0YURhdGEgZXh0ZW5kcyBFeHRfY2FsZW5kYXJfcGFuZWxfRGF5cyB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRDYWxlbmRhcl9kYXlzTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9jYWxlbmRhcl9wYW5lbF9EYXlzLmdldFByb3BlcnRpZXMoRXh0Q2FsZW5kYXJfZGF5c01ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDYWxlbmRhcl9kYXlzTWV0YURhdGEuRVZFTlRTID0gRXh0X2NhbGVuZGFyX3BhbmVsX0RheXMuZ2V0RXZlbnRzKEV4dENhbGVuZGFyX2RheXNNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRDYWxlbmRhcl9kYXlzTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRDYWxlbmRhcl9kYXlzTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dENhbGVuZGFyX2RheXNNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtY2FsZW5kYXItZGF5cycsXG4gIGlucHV0czogRXh0Q2FsZW5kYXJfZGF5c01ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dENhbGVuZGFyX2RheXNNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfZGF5c0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX2RheXNDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfZGF5c01ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRDYWxlbmRhcl9kYXlzTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjYWxlbmRhci1kYXlzJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19