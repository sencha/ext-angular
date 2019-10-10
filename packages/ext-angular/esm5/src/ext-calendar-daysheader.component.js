import * as tslib_1 from "tslib";
import { Ext_calendar_header_Days } from './Ext/calendar/header/Days';
var ExtCalendar_daysheaderMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_daysheaderMetaData, _super);
    function ExtCalendar_daysheaderMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_daysheaderMetaData.getAll = function () {
        ExtCalendar_daysheaderMetaData.PROPERTIES = Ext_calendar_header_Days.getProperties(ExtCalendar_daysheaderMetaData.PROPERTIES);
        ExtCalendar_daysheaderMetaData.EVENTS = Ext_calendar_header_Days.getEvents(ExtCalendar_daysheaderMetaData.EVENTS);
        ExtCalendar_daysheaderMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_daysheaderMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_daysheaderMetaData.PROPERTIES = [];
    ExtCalendar_daysheaderMetaData.EVENTS = [];
    ExtCalendar_daysheaderMetaData.EVENTNAMES = [];
    return ExtCalendar_daysheaderMetaData;
}(Ext_calendar_header_Days));
export { ExtCalendar_daysheaderMetaData };
(function () { ExtCalendar_daysheaderMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_daysheaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_daysheaderComponent, _super);
    function ExtCalendar_daysheaderComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_daysheaderMetaData.PROPERTIES, ExtCalendar_daysheaderMetaData.EVENTS) || this;
        _this.xtype = 'calendar-daysheader';
        return _this;
    }
    ExtCalendar_daysheaderComponent_1 = ExtCalendar_daysheaderComponent;
    ExtCalendar_daysheaderComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_daysheaderComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_daysheaderComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_daysheaderComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_daysheaderComponent_1;
    ExtCalendar_daysheaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_daysheaderComponent = ExtCalendar_daysheaderComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-daysheader',
            inputs: ExtCalendar_daysheaderMetaData.PROPERTIES,
            outputs: ExtCalendar_daysheaderMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_daysheaderComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_daysheaderComponent);
    return ExtCalendar_daysheaderComponent;
}(EngBase));
export { ExtCalendar_daysheaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWRheXNoZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtY2FsZW5kYXItZGF5c2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFO0lBQW9ELDBEQUF3QjtJQUE1RTs7SUFXQSxDQUFDO0lBUFUscUNBQU0sR0FBYjtRQUNJLDhCQUE4QixDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUgsOEJBQThCLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsSCw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUN0RCw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSx5Q0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixxQ0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQix5Q0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxxQ0FBQztDQUFBLEFBWEQsQ0FBb0Qsd0JBQXdCLEdBVzNFO1NBWFksOEJBQThCO0FBWTNDLENBQUMsY0FBYSw4QkFBOEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFxRCwyREFBTztJQUV4RCx5Q0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsOEJBQThCLENBQUMsVUFBVSxFQUN6Qyw4QkFBOEIsQ0FBQyxNQUFNLENBQ3hDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFBOztJQUN0QyxDQUFDO3dDQWJRLCtCQUErQjtJQWVqQyxrREFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSx5REFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxxREFBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxxREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsK0JBQStCO1FBUDNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsTUFBTSxFQUFFLDhCQUE4QixDQUFDLFVBQVU7WUFDakQsT0FBTyxFQUFFLDhCQUE4QixDQUFDLFVBQVU7WUFDbEQsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlDQUErQixFQUEvQixDQUErQixDQUFDLEVBQUMsQ0FBQztZQUMvRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCwrQkFBK0IsQ0E4QjNDO0lBQUQsc0NBQUM7Q0FBQSxBQTlCRCxDQUFxRCxPQUFPLEdBOEIzRDtTQTlCWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfY2FsZW5kYXJfaGVhZGVyX0RheXMgfSBmcm9tICcuL0V4dC9jYWxlbmRhci9oZWFkZXIvRGF5cyc7XG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfZGF5c2hlYWRlck1ldGFEYXRhIGV4dGVuZHMgRXh0X2NhbGVuZGFyX2hlYWRlcl9EYXlzIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX2RheXNoZWFkZXJNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2NhbGVuZGFyX2hlYWRlcl9EYXlzLmdldFByb3BlcnRpZXMoRXh0Q2FsZW5kYXJfZGF5c2hlYWRlck1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDYWxlbmRhcl9kYXlzaGVhZGVyTWV0YURhdGEuRVZFTlRTID0gRXh0X2NhbGVuZGFyX2hlYWRlcl9EYXlzLmdldEV2ZW50cyhFeHRDYWxlbmRhcl9kYXlzaGVhZGVyTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q2FsZW5kYXJfZGF5c2hlYWRlck1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfZGF5c2hlYWRlck1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRDYWxlbmRhcl9kYXlzaGVhZGVyTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNhbGVuZGFyLWRheXNoZWFkZXInLFxuICBpbnB1dHM6IEV4dENhbGVuZGFyX2RheXNoZWFkZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRDYWxlbmRhcl9kYXlzaGVhZGVyTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX2RheXNoZWFkZXJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9kYXlzaGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX2RheXNoZWFkZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfZGF5c2hlYWRlck1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY2FsZW5kYXItZGF5c2hlYWRlcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==