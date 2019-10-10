import * as tslib_1 from "tslib";
import { Ext_calendar_view_Day } from './Ext/calendar/view/Day';
var ExtCalendar_dayviewMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_dayviewMetaData, _super);
    function ExtCalendar_dayviewMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_dayviewMetaData.getAll = function () {
        ExtCalendar_dayviewMetaData.PROPERTIES = Ext_calendar_view_Day.getProperties(ExtCalendar_dayviewMetaData.PROPERTIES);
        ExtCalendar_dayviewMetaData.EVENTS = Ext_calendar_view_Day.getEvents(ExtCalendar_dayviewMetaData.EVENTS);
        ExtCalendar_dayviewMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_dayviewMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_dayviewMetaData.PROPERTIES = [];
    ExtCalendar_dayviewMetaData.EVENTS = [];
    ExtCalendar_dayviewMetaData.EVENTNAMES = [];
    return ExtCalendar_dayviewMetaData;
}(Ext_calendar_view_Day));
export { ExtCalendar_dayviewMetaData };
(function () { ExtCalendar_dayviewMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_dayviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_dayviewComponent, _super);
    function ExtCalendar_dayviewComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_dayviewMetaData.PROPERTIES, ExtCalendar_dayviewMetaData.EVENTS) || this;
        _this.xtype = 'calendar-dayview';
        return _this;
    }
    ExtCalendar_dayviewComponent_1 = ExtCalendar_dayviewComponent;
    ExtCalendar_dayviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_dayviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_dayviewComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_dayviewComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_dayviewComponent_1;
    ExtCalendar_dayviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_dayviewComponent = ExtCalendar_dayviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-dayview',
            inputs: ExtCalendar_dayviewMetaData.PROPERTIES,
            outputs: ExtCalendar_dayviewMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_dayviewComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_dayviewComponent);
    return ExtCalendar_dayviewComponent;
}(EngBase));
export { ExtCalendar_dayviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWRheXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtY2FsZW5kYXItZGF5dmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFO0lBQWlELHVEQUFxQjtJQUF0RTs7SUFXQSxDQUFDO0lBUFUsa0NBQU0sR0FBYjtRQUNJLDJCQUEyQixDQUFDLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckgsMkJBQTJCLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNuRCwyQkFBMkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixrQ0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxrQ0FBQztDQUFBLEFBWEQsQ0FBaUQscUJBQXFCLEdBV3JFO1NBWFksMkJBQTJCO0FBWXhDLENBQUMsY0FBYSwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFrRCx3REFBTztJQUVyRCxzQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsMkJBQTJCLENBQUMsVUFBVSxFQUN0QywyQkFBMkIsQ0FBQyxNQUFNLENBQ3JDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFBOztJQUNuQyxDQUFDO3FDQWJRLDRCQUE0QjtJQWU5QiwrQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxzREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxrREFBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxrREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsNEJBQTRCO1FBUHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsTUFBTSxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDOUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDL0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDhCQUE0QixFQUE1QixDQUE0QixDQUFDLEVBQUMsQ0FBQztZQUM1RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCw0QkFBNEIsQ0E4QnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTlCRCxDQUFrRCxPQUFPLEdBOEJ4RDtTQTlCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfY2FsZW5kYXJfdmlld19EYXkgfSBmcm9tICcuL0V4dC9jYWxlbmRhci92aWV3L0RheSc7XG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfZGF5dmlld01ldGFEYXRhIGV4dGVuZHMgRXh0X2NhbGVuZGFyX3ZpZXdfRGF5IHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX2RheXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2NhbGVuZGFyX3ZpZXdfRGF5LmdldFByb3BlcnRpZXMoRXh0Q2FsZW5kYXJfZGF5dmlld01ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDYWxlbmRhcl9kYXl2aWV3TWV0YURhdGEuRVZFTlRTID0gRXh0X2NhbGVuZGFyX3ZpZXdfRGF5LmdldEV2ZW50cyhFeHRDYWxlbmRhcl9kYXl2aWV3TWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q2FsZW5kYXJfZGF5dmlld01ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfZGF5dmlld01ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRDYWxlbmRhcl9kYXl2aWV3TWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNhbGVuZGFyLWRheXZpZXcnLFxuICBpbnB1dHM6IEV4dENhbGVuZGFyX2RheXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRDYWxlbmRhcl9kYXl2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX2RheXZpZXdDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9kYXl2aWV3Q29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX2RheXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfZGF5dmlld01ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY2FsZW5kYXItZGF5dmlldydcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==