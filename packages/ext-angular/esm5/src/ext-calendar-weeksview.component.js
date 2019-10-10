import * as tslib_1 from "tslib";
import { Ext_calendar_view_Weeks } from './Ext/calendar/view/Weeks';
var ExtCalendar_weeksviewMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_weeksviewMetaData, _super);
    function ExtCalendar_weeksviewMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_weeksviewMetaData.getAll = function () {
        ExtCalendar_weeksviewMetaData.PROPERTIES = Ext_calendar_view_Weeks.getProperties(ExtCalendar_weeksviewMetaData.PROPERTIES);
        ExtCalendar_weeksviewMetaData.EVENTS = Ext_calendar_view_Weeks.getEvents(ExtCalendar_weeksviewMetaData.EVENTS);
        ExtCalendar_weeksviewMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_weeksviewMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_weeksviewMetaData.PROPERTIES = [];
    ExtCalendar_weeksviewMetaData.EVENTS = [];
    ExtCalendar_weeksviewMetaData.EVENTNAMES = [];
    return ExtCalendar_weeksviewMetaData;
}(Ext_calendar_view_Weeks));
export { ExtCalendar_weeksviewMetaData };
(function () { ExtCalendar_weeksviewMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_weeksviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_weeksviewComponent, _super);
    function ExtCalendar_weeksviewComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_weeksviewMetaData.PROPERTIES, ExtCalendar_weeksviewMetaData.EVENTS) || this;
        _this.xtype = 'calendar-weeksview';
        return _this;
    }
    ExtCalendar_weeksviewComponent_1 = ExtCalendar_weeksviewComponent;
    ExtCalendar_weeksviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_weeksviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_weeksviewComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_weeksviewComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_weeksviewComponent_1;
    ExtCalendar_weeksviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_weeksviewComponent = ExtCalendar_weeksviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-weeksview',
            inputs: ExtCalendar_weeksviewMetaData.PROPERTIES,
            outputs: ExtCalendar_weeksviewMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_weeksviewComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_weeksviewComponent);
    return ExtCalendar_weeksviewComponent;
}(EngBase));
export { ExtCalendar_weeksviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLXdlZWtzdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1jYWxlbmRhci13ZWVrc3ZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRTtJQUFtRCx5REFBdUI7SUFBMUU7O0lBV0EsQ0FBQztJQVBVLG9DQUFNLEdBQWI7UUFDSSw2QkFBNkIsQ0FBQyxVQUFVLEdBQUcsdUJBQXVCLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNILDZCQUE2QixDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0csNkJBQTZCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDckQsNkJBQTZCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsb0NBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsb0NBQUM7Q0FBQSxBQVhELENBQW1ELHVCQUF1QixHQVd6RTtTQVhZLDZCQUE2QjtBQVkxQyxDQUFDLGNBQWEsNkJBQTZCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBb0QsMERBQU87SUFFdkQsd0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDZCQUE2QixDQUFDLFVBQVUsRUFDeEMsNkJBQTZCLENBQUMsTUFBTSxDQUN2QyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQTs7SUFDckMsQ0FBQzt1Q0FiUSw4QkFBOEI7SUFlaEMsaURBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sd0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sb0RBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sb0RBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDhCQUE4QjtRQVAxQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2hELE9BQU8sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2pELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBOEIsRUFBOUIsQ0FBOEIsQ0FBQyxFQUFDLENBQUM7WUFDOUYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsOEJBQThCLENBOEIxQztJQUFELHFDQUFDO0NBQUEsQUE5QkQsQ0FBb0QsT0FBTyxHQThCMUQ7U0E5QlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NhbGVuZGFyX3ZpZXdfV2Vla3MgfSBmcm9tICcuL0V4dC9jYWxlbmRhci92aWV3L1dlZWtzJztcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YSBleHRlbmRzIEV4dF9jYWxlbmRhcl92aWV3X1dlZWtzIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX3dlZWtzdmlld01ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfY2FsZW5kYXJfdmlld19XZWVrcy5nZXRQcm9wZXJ0aWVzKEV4dENhbGVuZGFyX3dlZWtzdmlld01ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YS5FVkVOVFMgPSBFeHRfY2FsZW5kYXJfdmlld19XZWVrcy5nZXRFdmVudHMoRXh0Q2FsZW5kYXJfd2Vla3N2aWV3TWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q2FsZW5kYXJfd2Vla3N2aWV3TWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRDYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0Q2FsZW5kYXJfd2Vla3N2aWV3TWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNhbGVuZGFyLXdlZWtzdmlldycsXG4gIGlucHV0czogRXh0Q2FsZW5kYXJfd2Vla3N2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0Q2FsZW5kYXJfd2Vla3N2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX3dlZWtzdmlld0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX3dlZWtzdmlld0NvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRDYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfd2Vla3N2aWV3TWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjYWxlbmRhci13ZWVrc3ZpZXcnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=