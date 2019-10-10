import * as tslib_1 from "tslib";
import { Ext_calendar_form_CalendarPicker } from './Ext/calendar/form/CalendarPicker';
var ExtCalendar_calendar_pickerMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_calendar_pickerMetaData, _super);
    function ExtCalendar_calendar_pickerMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_calendar_pickerMetaData.getAll = function () {
        ExtCalendar_calendar_pickerMetaData.PROPERTIES = Ext_calendar_form_CalendarPicker.getProperties(ExtCalendar_calendar_pickerMetaData.PROPERTIES);
        ExtCalendar_calendar_pickerMetaData.EVENTS = Ext_calendar_form_CalendarPicker.getEvents(ExtCalendar_calendar_pickerMetaData.EVENTS);
        ExtCalendar_calendar_pickerMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_calendar_pickerMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_calendar_pickerMetaData.PROPERTIES = [];
    ExtCalendar_calendar_pickerMetaData.EVENTS = [];
    ExtCalendar_calendar_pickerMetaData.EVENTNAMES = [];
    return ExtCalendar_calendar_pickerMetaData;
}(Ext_calendar_form_CalendarPicker));
export { ExtCalendar_calendar_pickerMetaData };
(function () { ExtCalendar_calendar_pickerMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_calendar_pickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_calendar_pickerComponent, _super);
    function ExtCalendar_calendar_pickerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_calendar_pickerMetaData.PROPERTIES, ExtCalendar_calendar_pickerMetaData.EVENTS) || this;
        _this.xtype = 'calendar-calendar-picker';
        return _this;
    }
    ExtCalendar_calendar_pickerComponent_1 = ExtCalendar_calendar_pickerComponent;
    ExtCalendar_calendar_pickerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_calendar_pickerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_calendar_pickerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_calendar_pickerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_calendar_pickerComponent_1;
    ExtCalendar_calendar_pickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_calendar_pickerComponent = ExtCalendar_calendar_pickerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-calendar-picker',
            inputs: ExtCalendar_calendar_pickerMetaData.PROPERTIES,
            outputs: ExtCalendar_calendar_pickerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_calendar_pickerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_calendar_pickerComponent);
    return ExtCalendar_calendar_pickerComponent;
}(EngBase));
export { ExtCalendar_calendar_pickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWNhbGVuZGFyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1jYWxlbmRhci1jYWxlbmRhci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RjtJQUF5RCwrREFBZ0M7SUFBekY7O0lBV0EsQ0FBQztJQVBVLDBDQUFNLEdBQWI7UUFDSSxtQ0FBbUMsQ0FBQyxVQUFVLEdBQUcsZ0NBQWdDLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hKLG1DQUFtQyxDQUFDLE1BQU0sR0FBRyxnQ0FBZ0MsQ0FBQyxTQUFTLENBQUMsbUNBQW1DLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEksbUNBQW1DLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDM0QsbUNBQW1DLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksOENBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsMENBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsOENBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsMENBQUM7Q0FBQSxBQVhELENBQXlELGdDQUFnQyxHQVd4RjtTQVhZLG1DQUFtQztBQVloRCxDQUFDLGNBQWEsbUNBQW1DLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBMEQsZ0VBQU87SUFFN0QsOENBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLG1DQUFtQyxDQUFDLFVBQVUsRUFDOUMsbUNBQW1DLENBQUMsTUFBTSxDQUM3QyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQTs7SUFDM0MsQ0FBQzs2Q0FiUSxvQ0FBb0M7SUFldEMsdURBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sOERBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sMERBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sMERBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLG9DQUFvQztRQVBoRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLE1BQU0sRUFBRSxtQ0FBbUMsQ0FBQyxVQUFVO1lBQ3RELE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxVQUFVO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQ0FBb0MsRUFBcEMsQ0FBb0MsQ0FBQyxFQUFDLENBQUM7WUFDcEcsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsb0NBQW9DLENBOEJoRDtJQUFELDJDQUFDO0NBQUEsQUE5QkQsQ0FBMEQsT0FBTyxHQThCaEU7U0E5Qlksb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NhbGVuZGFyX2Zvcm1fQ2FsZW5kYXJQaWNrZXIgfSBmcm9tICcuL0V4dC9jYWxlbmRhci9mb3JtL0NhbGVuZGFyUGlja2VyJztcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9jYWxlbmRhcl9waWNrZXJNZXRhRGF0YSBleHRlbmRzIEV4dF9jYWxlbmRhcl9mb3JtX0NhbGVuZGFyUGlja2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX2NhbGVuZGFyX3BpY2tlck1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfY2FsZW5kYXJfZm9ybV9DYWxlbmRhclBpY2tlci5nZXRQcm9wZXJ0aWVzKEV4dENhbGVuZGFyX2NhbGVuZGFyX3BpY2tlck1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDYWxlbmRhcl9jYWxlbmRhcl9waWNrZXJNZXRhRGF0YS5FVkVOVFMgPSBFeHRfY2FsZW5kYXJfZm9ybV9DYWxlbmRhclBpY2tlci5nZXRFdmVudHMoRXh0Q2FsZW5kYXJfY2FsZW5kYXJfcGlja2VyTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q2FsZW5kYXJfY2FsZW5kYXJfcGlja2VyTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRDYWxlbmRhcl9jYWxlbmRhcl9waWNrZXJNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0Q2FsZW5kYXJfY2FsZW5kYXJfcGlja2VyTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNhbGVuZGFyLWNhbGVuZGFyLXBpY2tlcicsXG4gIGlucHV0czogRXh0Q2FsZW5kYXJfY2FsZW5kYXJfcGlja2VyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0Q2FsZW5kYXJfY2FsZW5kYXJfcGlja2VyTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX2NhbGVuZGFyX3BpY2tlckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX2NhbGVuZGFyX3BpY2tlckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRDYWxlbmRhcl9jYWxlbmRhcl9waWNrZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfY2FsZW5kYXJfcGlja2VyTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjYWxlbmRhci1jYWxlbmRhci1waWNrZXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=