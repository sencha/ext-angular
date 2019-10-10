import * as tslib_1 from "tslib";
import { Ext_calendar_form_Add } from './Ext/calendar/form/Add';
var ExtCalendar_form_addMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_form_addMetaData, _super);
    function ExtCalendar_form_addMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_form_addMetaData.getAll = function () {
        ExtCalendar_form_addMetaData.PROPERTIES = Ext_calendar_form_Add.getProperties(ExtCalendar_form_addMetaData.PROPERTIES);
        ExtCalendar_form_addMetaData.EVENTS = Ext_calendar_form_Add.getEvents(ExtCalendar_form_addMetaData.EVENTS);
        ExtCalendar_form_addMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_form_addMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_form_addMetaData.PROPERTIES = [];
    ExtCalendar_form_addMetaData.EVENTS = [];
    ExtCalendar_form_addMetaData.EVENTNAMES = [];
    return ExtCalendar_form_addMetaData;
}(Ext_calendar_form_Add));
export { ExtCalendar_form_addMetaData };
(function () { ExtCalendar_form_addMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_form_addComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_form_addComponent, _super);
    function ExtCalendar_form_addComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_form_addMetaData.PROPERTIES, ExtCalendar_form_addMetaData.EVENTS) || this;
        _this.xtype = 'calendar-form-add';
        return _this;
    }
    ExtCalendar_form_addComponent_1 = ExtCalendar_form_addComponent;
    ExtCalendar_form_addComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_form_addComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_form_addComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_form_addComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_form_addComponent_1;
    ExtCalendar_form_addComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_form_addComponent = ExtCalendar_form_addComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-form-add',
            inputs: ExtCalendar_form_addMetaData.PROPERTIES,
            outputs: ExtCalendar_form_addMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_form_addComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_form_addComponent);
    return ExtCalendar_form_addComponent;
}(EngBase));
export { ExtCalendar_form_addComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWZvcm0tYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNhbGVuZGFyLWZvcm0tYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEU7SUFBa0Qsd0RBQXFCO0lBQXZFOztJQVdBLENBQUM7SUFQVSxtQ0FBTSxHQUFiO1FBQ0ksNEJBQTRCLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2SCw0QkFBNEIsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNHLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3BELDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLHVDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLG1DQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLHVDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLG1DQUFDO0NBQUEsQUFYRCxDQUFrRCxxQkFBcUIsR0FXdEU7U0FYWSw0QkFBNEI7QUFZekMsQ0FBQyxjQUFhLDRCQUE0QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQW1ELHlEQUFPO0lBRXRELHVDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYiw0QkFBNEIsQ0FBQyxVQUFVLEVBQ3ZDLDRCQUE0QixDQUFDLE1BQU0sQ0FDdEMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUE7O0lBQ3BDLENBQUM7c0NBYlEsNkJBQTZCO0lBZS9CLGdEQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLHVEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLG1EQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLG1EQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4Qiw2QkFBNkI7UUFQekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsNEJBQTRCLENBQUMsVUFBVTtZQUMvQyxPQUFPLEVBQUUsNEJBQTRCLENBQUMsVUFBVTtZQUNoRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsK0JBQTZCLEVBQTdCLENBQTZCLENBQUMsRUFBQyxDQUFDO1lBQzdGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELDZCQUE2QixDQThCekM7SUFBRCxvQ0FBQztDQUFBLEFBOUJELENBQW1ELE9BQU8sR0E4QnpEO1NBOUJZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9jYWxlbmRhcl9mb3JtX0FkZCB9IGZyb20gJy4vRXh0L2NhbGVuZGFyL2Zvcm0vQWRkJztcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9mb3JtX2FkZE1ldGFEYXRhIGV4dGVuZHMgRXh0X2NhbGVuZGFyX2Zvcm1fQWRkIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fYWRkTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9jYWxlbmRhcl9mb3JtX0FkZC5nZXRQcm9wZXJ0aWVzKEV4dENhbGVuZGFyX2Zvcm1fYWRkTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fYWRkTWV0YURhdGEuRVZFTlRTID0gRXh0X2NhbGVuZGFyX2Zvcm1fQWRkLmdldEV2ZW50cyhFeHRDYWxlbmRhcl9mb3JtX2FkZE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fYWRkTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRDYWxlbmRhcl9mb3JtX2FkZE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRDYWxlbmRhcl9mb3JtX2FkZE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1jYWxlbmRhci1mb3JtLWFkZCcsXG4gIGlucHV0czogRXh0Q2FsZW5kYXJfZm9ybV9hZGRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRDYWxlbmRhcl9mb3JtX2FkZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9mb3JtX2FkZENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX2Zvcm1fYWRkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fYWRkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fYWRkTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjYWxlbmRhci1mb3JtLWFkZCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==