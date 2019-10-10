import * as tslib_1 from "tslib";
import { Ext_calendar_header_Weeks } from './Ext/calendar/header/Weeks';
var ExtCalendar_weeksheaderMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_weeksheaderMetaData, _super);
    function ExtCalendar_weeksheaderMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_weeksheaderMetaData.getAll = function () {
        ExtCalendar_weeksheaderMetaData.PROPERTIES = Ext_calendar_header_Weeks.getProperties(ExtCalendar_weeksheaderMetaData.PROPERTIES);
        ExtCalendar_weeksheaderMetaData.EVENTS = Ext_calendar_header_Weeks.getEvents(ExtCalendar_weeksheaderMetaData.EVENTS);
        ExtCalendar_weeksheaderMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_weeksheaderMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_weeksheaderMetaData.PROPERTIES = [];
    ExtCalendar_weeksheaderMetaData.EVENTS = [];
    ExtCalendar_weeksheaderMetaData.EVENTNAMES = [];
    return ExtCalendar_weeksheaderMetaData;
}(Ext_calendar_header_Weeks));
export { ExtCalendar_weeksheaderMetaData };
(function () { ExtCalendar_weeksheaderMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_weeksheaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_weeksheaderComponent, _super);
    function ExtCalendar_weeksheaderComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_weeksheaderMetaData.PROPERTIES, ExtCalendar_weeksheaderMetaData.EVENTS) || this;
        _this.xtype = 'calendar-weeksheader';
        return _this;
    }
    ExtCalendar_weeksheaderComponent_1 = ExtCalendar_weeksheaderComponent;
    ExtCalendar_weeksheaderComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_weeksheaderComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_weeksheaderComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_weeksheaderComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_weeksheaderComponent_1;
    ExtCalendar_weeksheaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_weeksheaderComponent = ExtCalendar_weeksheaderComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-weeksheader',
            inputs: ExtCalendar_weeksheaderMetaData.PROPERTIES,
            outputs: ExtCalendar_weeksheaderMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_weeksheaderComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_weeksheaderComponent);
    return ExtCalendar_weeksheaderComponent;
}(EngBase));
export { ExtCalendar_weeksheaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLXdlZWtzaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNhbGVuZGFyLXdlZWtzaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEU7SUFBcUQsMkRBQXlCO0lBQTlFOztJQVdBLENBQUM7SUFQVSxzQ0FBTSxHQUFiO1FBQ0ksK0JBQStCLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqSSwrQkFBK0IsQ0FBQyxNQUFNLEdBQUcseUJBQXlCLENBQUMsU0FBUyxDQUFDLCtCQUErQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JILCtCQUErQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3ZELCtCQUErQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDBDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHNDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDBDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHNDQUFDO0NBQUEsQUFYRCxDQUFxRCx5QkFBeUIsR0FXN0U7U0FYWSwrQkFBK0I7QUFZNUMsQ0FBQyxjQUFhLCtCQUErQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXNELDREQUFPO0lBRXpELDBDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYiwrQkFBK0IsQ0FBQyxVQUFVLEVBQzFDLCtCQUErQixDQUFDLE1BQU0sQ0FDekMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUE7O0lBQ3ZDLENBQUM7eUNBYlEsZ0NBQWdDO0lBZWxDLG1EQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDBEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHNEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHNEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixnQ0FBZ0M7UUFQNUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxNQUFNLEVBQUUsK0JBQStCLENBQUMsVUFBVTtZQUNsRCxPQUFPLEVBQUUsK0JBQStCLENBQUMsVUFBVTtZQUNuRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0NBQWdDLEVBQWhDLENBQWdDLENBQUMsRUFBQyxDQUFDO1lBQ2hHLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELGdDQUFnQyxDQThCNUM7SUFBRCx1Q0FBQztDQUFBLEFBOUJELENBQXNELE9BQU8sR0E4QjVEO1NBOUJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9jYWxlbmRhcl9oZWFkZXJfV2Vla3MgfSBmcm9tICcuL0V4dC9jYWxlbmRhci9oZWFkZXIvV2Vla3MnO1xuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX3dlZWtzaGVhZGVyTWV0YURhdGEgZXh0ZW5kcyBFeHRfY2FsZW5kYXJfaGVhZGVyX1dlZWtzIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX3dlZWtzaGVhZGVyTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9jYWxlbmRhcl9oZWFkZXJfV2Vla3MuZ2V0UHJvcGVydGllcyhFeHRDYWxlbmRhcl93ZWVrc2hlYWRlck1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDYWxlbmRhcl93ZWVrc2hlYWRlck1ldGFEYXRhLkVWRU5UUyA9IEV4dF9jYWxlbmRhcl9oZWFkZXJfV2Vla3MuZ2V0RXZlbnRzKEV4dENhbGVuZGFyX3dlZWtzaGVhZGVyTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q2FsZW5kYXJfd2Vla3NoZWFkZXJNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX3dlZWtzaGVhZGVyTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dENhbGVuZGFyX3dlZWtzaGVhZGVyTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNhbGVuZGFyLXdlZWtzaGVhZGVyJyxcbiAgaW5wdXRzOiBFeHRDYWxlbmRhcl93ZWVrc2hlYWRlck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dENhbGVuZGFyX3dlZWtzaGVhZGVyTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX3dlZWtzaGVhZGVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfd2Vla3NoZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfd2Vla3NoZWFkZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfd2Vla3NoZWFkZXJNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2NhbGVuZGFyLXdlZWtzaGVhZGVyJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19