import * as tslib_1 from "tslib";
import { Ext_calendar_panel_Month } from './Ext/calendar/panel/Month';
var ExtCalendar_monthMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_monthMetaData, _super);
    function ExtCalendar_monthMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_monthMetaData.getAll = function () {
        ExtCalendar_monthMetaData.PROPERTIES = Ext_calendar_panel_Month.getProperties(ExtCalendar_monthMetaData.PROPERTIES);
        ExtCalendar_monthMetaData.EVENTS = Ext_calendar_panel_Month.getEvents(ExtCalendar_monthMetaData.EVENTS);
        ExtCalendar_monthMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_monthMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_monthMetaData.PROPERTIES = [];
    ExtCalendar_monthMetaData.EVENTS = [];
    ExtCalendar_monthMetaData.EVENTNAMES = [];
    return ExtCalendar_monthMetaData;
}(Ext_calendar_panel_Month));
export { ExtCalendar_monthMetaData };
(function () { ExtCalendar_monthMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_monthComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_monthComponent, _super);
    function ExtCalendar_monthComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_monthMetaData.PROPERTIES, ExtCalendar_monthMetaData.EVENTS) || this;
        _this.xtype = 'calendar-month';
        return _this;
    }
    ExtCalendar_monthComponent_1 = ExtCalendar_monthComponent;
    ExtCalendar_monthComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_monthComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_monthComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_monthComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_monthComponent_1;
    ExtCalendar_monthComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_monthComponent = ExtCalendar_monthComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-month',
            inputs: ExtCalendar_monthMetaData.PROPERTIES,
            outputs: ExtCalendar_monthMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_monthComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_monthComponent);
    return ExtCalendar_monthComponent;
}(EngBase));
export { ExtCalendar_monthComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW1vbnRoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNhbGVuZGFyLW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEU7SUFBK0MscURBQXdCO0lBQXZFOztJQVdBLENBQUM7SUFQVSxnQ0FBTSxHQUFiO1FBQ0kseUJBQXlCLENBQUMsVUFBVSxHQUFHLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwSCx5QkFBeUIsQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ2pELHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLG9DQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLGdDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLG9DQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLGdDQUFDO0NBQUEsQUFYRCxDQUErQyx3QkFBd0IsR0FXdEU7U0FYWSx5QkFBeUI7QUFZdEMsQ0FBQyxjQUFhLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQWdELHNEQUFPO0lBRW5ELG9DQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYix5QkFBeUIsQ0FBQyxVQUFVLEVBQ3BDLHlCQUF5QixDQUFDLE1BQU0sQ0FDbkMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUE7O0lBQ2pDLENBQUM7bUNBYlEsMEJBQTBCO0lBZTVCLDZDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLG9EQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLGdEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLGdEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QiwwQkFBMEI7UUFQdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixNQUFNLEVBQUUseUJBQXlCLENBQUMsVUFBVTtZQUM1QyxPQUFPLEVBQUUseUJBQXlCLENBQUMsVUFBVTtZQUM3QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNEJBQTBCLEVBQTFCLENBQTBCLENBQUMsRUFBQyxDQUFDO1lBQzFGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELDBCQUEwQixDQThCdEM7SUFBRCxpQ0FBQztDQUFBLEFBOUJELENBQWdELE9BQU8sR0E4QnREO1NBOUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9jYWxlbmRhcl9wYW5lbF9Nb250aCB9IGZyb20gJy4vRXh0L2NhbGVuZGFyL3BhbmVsL01vbnRoJztcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9tb250aE1ldGFEYXRhIGV4dGVuZHMgRXh0X2NhbGVuZGFyX3BhbmVsX01vbnRoIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX21vbnRoTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9jYWxlbmRhcl9wYW5lbF9Nb250aC5nZXRQcm9wZXJ0aWVzKEV4dENhbGVuZGFyX21vbnRoTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dENhbGVuZGFyX21vbnRoTWV0YURhdGEuRVZFTlRTID0gRXh0X2NhbGVuZGFyX3BhbmVsX01vbnRoLmdldEV2ZW50cyhFeHRDYWxlbmRhcl9tb250aE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dENhbGVuZGFyX21vbnRoTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRDYWxlbmRhcl9tb250aE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRDYWxlbmRhcl9tb250aE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1jYWxlbmRhci1tb250aCcsXG4gIGlucHV0czogRXh0Q2FsZW5kYXJfbW9udGhNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRDYWxlbmRhcl9tb250aE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9tb250aENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX21vbnRoQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX21vbnRoTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX21vbnRoTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjYWxlbmRhci1tb250aCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==