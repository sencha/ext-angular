import * as tslib_1 from "tslib";
import { Ext_calendar_view_Multi } from './Ext/calendar/view/Multi';
var ExtCalendar_multiviewMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_multiviewMetaData, _super);
    function ExtCalendar_multiviewMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_multiviewMetaData.getAll = function () {
        ExtCalendar_multiviewMetaData.PROPERTIES = Ext_calendar_view_Multi.getProperties(ExtCalendar_multiviewMetaData.PROPERTIES);
        ExtCalendar_multiviewMetaData.EVENTS = Ext_calendar_view_Multi.getEvents(ExtCalendar_multiviewMetaData.EVENTS);
        ExtCalendar_multiviewMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_multiviewMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_multiviewMetaData.PROPERTIES = [];
    ExtCalendar_multiviewMetaData.EVENTS = [];
    ExtCalendar_multiviewMetaData.EVENTNAMES = [];
    return ExtCalendar_multiviewMetaData;
}(Ext_calendar_view_Multi));
export { ExtCalendar_multiviewMetaData };
(function () { ExtCalendar_multiviewMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_multiviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_multiviewComponent, _super);
    function ExtCalendar_multiviewComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_multiviewMetaData.PROPERTIES, ExtCalendar_multiviewMetaData.EVENTS) || this;
        _this.xtype = 'calendar-multiview';
        return _this;
    }
    ExtCalendar_multiviewComponent_1 = ExtCalendar_multiviewComponent;
    ExtCalendar_multiviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_multiviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_multiviewComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_multiviewComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_multiviewComponent_1;
    ExtCalendar_multiviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_multiviewComponent = ExtCalendar_multiviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-multiview',
            inputs: ExtCalendar_multiviewMetaData.PROPERTIES,
            outputs: ExtCalendar_multiviewMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_multiviewComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_multiviewComponent);
    return ExtCalendar_multiviewComponent;
}(EngBase));
export { ExtCalendar_multiviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1jYWxlbmRhci1tdWx0aXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRTtJQUFtRCx5REFBdUI7SUFBMUU7O0lBV0EsQ0FBQztJQVBVLG9DQUFNLEdBQWI7UUFDSSw2QkFBNkIsQ0FBQyxVQUFVLEdBQUcsdUJBQXVCLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNILDZCQUE2QixDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0csNkJBQTZCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDckQsNkJBQTZCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsb0NBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsb0NBQUM7Q0FBQSxBQVhELENBQW1ELHVCQUF1QixHQVd6RTtTQVhZLDZCQUE2QjtBQVkxQyxDQUFDLGNBQWEsNkJBQTZCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBb0QsMERBQU87SUFFdkQsd0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDZCQUE2QixDQUFDLFVBQVUsRUFDeEMsNkJBQTZCLENBQUMsTUFBTSxDQUN2QyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQTs7SUFDckMsQ0FBQzt1Q0FiUSw4QkFBOEI7SUFlaEMsaURBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sd0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sb0RBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sb0RBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDhCQUE4QjtRQVAxQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2hELE9BQU8sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2pELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBOEIsRUFBOUIsQ0FBOEIsQ0FBQyxFQUFDLENBQUM7WUFDOUYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsOEJBQThCLENBOEIxQztJQUFELHFDQUFDO0NBQUEsQUE5QkQsQ0FBb0QsT0FBTyxHQThCMUQ7U0E5QlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NhbGVuZGFyX3ZpZXdfTXVsdGkgfSBmcm9tICcuL0V4dC9jYWxlbmRhci92aWV3L011bHRpJztcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSBleHRlbmRzIEV4dF9jYWxlbmRhcl92aWV3X011bHRpIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX211bHRpdmlld01ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfY2FsZW5kYXJfdmlld19NdWx0aS5nZXRQcm9wZXJ0aWVzKEV4dENhbGVuZGFyX211bHRpdmlld01ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5FVkVOVFMgPSBFeHRfY2FsZW5kYXJfdmlld19NdWx0aS5nZXRFdmVudHMoRXh0Q2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRDYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0Q2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNhbGVuZGFyLW11bHRpdmlldycsXG4gIGlucHV0czogRXh0Q2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0Q2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRDYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjYWxlbmRhci1tdWx0aXZpZXcnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=