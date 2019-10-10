import * as tslib_1 from "tslib";
import { Ext_draw_Component } from './Ext/draw/Component';
var ExtDrawMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDrawMetaData, _super);
    function ExtDrawMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtDrawMetaData.getAll = function () {
        ExtDrawMetaData.PROPERTIES = Ext_draw_Component.getProperties(ExtDrawMetaData.PROPERTIES);
        ExtDrawMetaData.EVENTS = Ext_draw_Component.getEvents(ExtDrawMetaData.EVENTS);
        ExtDrawMetaData.EVENTS.forEach(function (event) {
            ExtDrawMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtDrawMetaData.PROPERTIES = [];
    ExtDrawMetaData.EVENTS = [];
    ExtDrawMetaData.EVENTNAMES = [];
    return ExtDrawMetaData;
}(Ext_draw_Component));
export { ExtDrawMetaData };
(function () { ExtDrawMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtDrawComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDrawComponent, _super);
    function ExtDrawComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDrawMetaData.PROPERTIES, ExtDrawMetaData.EVENTS) || this;
        _this.xtype = 'draw';
        return _this;
    }
    ExtDrawComponent_1 = ExtDrawComponent;
    ExtDrawComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDrawComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDrawComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDrawComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDrawComponent_1;
    ExtDrawComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDrawComponent = ExtDrawComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-draw',
            inputs: ExtDrawMetaData.PROPERTIES,
            outputs: ExtDrawMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDrawComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDrawComponent);
    return ExtDrawComponent;
}(EngBase));
export { ExtDrawComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRyYXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFEO0lBQXFDLDJDQUFrQjtJQUF2RDs7SUFXQSxDQUFDO0lBUFUsc0JBQU0sR0FBYjtRQUNJLGVBQWUsQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRixlQUFlLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3ZDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSwwQkFBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixzQkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQiwwQkFBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxzQkFBQztDQUFBLEFBWEQsQ0FBcUMsa0JBQWtCLEdBV3REO1NBWFksZUFBZTtBQVk1QixDQUFDLGNBQWEsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXNDLDRDQUFPO0lBRXpDLDBCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixlQUFlLENBQUMsVUFBVSxFQUMxQixlQUFlLENBQUMsTUFBTSxDQUN6QixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUE7O0lBQ3ZCLENBQUM7eUJBYlEsZ0JBQWdCO0lBZWxCLG1DQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHNDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHNDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixnQkFBZ0I7UUFQNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVO1lBQ2xDLE9BQU8sRUFBRSxlQUFlLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWdCLEVBQWhCLENBQWdCLENBQUMsRUFBQyxDQUFDO1lBQ2hGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELGdCQUFnQixDQThCNUI7SUFBRCx1QkFBQztDQUFBLEFBOUJELENBQXNDLE9BQU8sR0E4QjVDO1NBOUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9kcmF3X0NvbXBvbmVudCB9IGZyb20gJy4vRXh0L2RyYXcvQ29tcG9uZW50JztcbmV4cG9ydCBjbGFzcyBFeHREcmF3TWV0YURhdGEgZXh0ZW5kcyBFeHRfZHJhd19Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0RHJhd01ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZHJhd19Db21wb25lbnQuZ2V0UHJvcGVydGllcyhFeHREcmF3TWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dERyYXdNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZHJhd19Db21wb25lbnQuZ2V0RXZlbnRzKEV4dERyYXdNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHREcmF3TWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHREcmF3TWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dERyYXdNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtZHJhdycsXG4gIGlucHV0czogRXh0RHJhd01ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dERyYXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0RHJhd0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dERyYXdDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0RHJhd01ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHREcmF3TWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdkcmF3J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19