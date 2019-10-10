import * as tslib_1 from "tslib";
import { Ext_grid_Row } from './Ext/grid/Row';
var ExtGridrowMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridrowMetaData, _super);
    function ExtGridrowMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtGridrowMetaData.getAll = function () {
        ExtGridrowMetaData.PROPERTIES = Ext_grid_Row.getProperties(ExtGridrowMetaData.PROPERTIES);
        ExtGridrowMetaData.EVENTS = Ext_grid_Row.getEvents(ExtGridrowMetaData.EVENTS);
        ExtGridrowMetaData.EVENTS.forEach(function (event) {
            ExtGridrowMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtGridrowMetaData.PROPERTIES = [];
    ExtGridrowMetaData.EVENTS = [];
    ExtGridrowMetaData.EVENTNAMES = [];
    return ExtGridrowMetaData;
}(Ext_grid_Row));
export { ExtGridrowMetaData };
(function () { ExtGridrowMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtGridrowComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridrowComponent, _super);
    function ExtGridrowComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridrowMetaData.PROPERTIES, ExtGridrowMetaData.EVENTS) || this;
        _this.xtype = 'gridrow';
        return _this;
    }
    ExtGridrowComponent_1 = ExtGridrowComponent;
    ExtGridrowComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridrowComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridrowComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridrowComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridrowComponent_1;
    ExtGridrowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridrowComponent = ExtGridrowComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-gridrow',
            inputs: ExtGridrowMetaData.PROPERTIES,
            outputs: ExtGridrowMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridrowComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridrowComponent);
    return ExtGridrowComponent;
}(EngBase));
export { ExtGridrowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWdyaWRyb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtZ3JpZHJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QztJQUF3Qyw4Q0FBWTtJQUFwRDs7SUFXQSxDQUFDO0lBUFUseUJBQU0sR0FBYjtRQUNJLGtCQUFrQixDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFGLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDZCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHlCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDZCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHlCQUFDO0NBQUEsQUFYRCxDQUF3QyxZQUFZLEdBV25EO1NBWFksa0JBQWtCO0FBWS9CLENBQUMsY0FBYSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUF5QywrQ0FBTztJQUU1Qyw2QkFDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2Isa0JBQWtCLENBQUMsVUFBVSxFQUM3QixrQkFBa0IsQ0FBQyxNQUFNLENBQzVCLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQTs7SUFDMUIsQ0FBQzs0QkFiUSxtQkFBbUI7SUFlckIsc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sNkNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0seUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLG1CQUFtQjtRQVAvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtZQUNyQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtZQUN0QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQW1CLEVBQW5CLENBQW1CLENBQUMsRUFBQyxDQUFDO1lBQ25GLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELG1CQUFtQixDQThCL0I7SUFBRCwwQkFBQztDQUFBLEFBOUJELENBQXlDLE9BQU8sR0E4Qi9DO1NBOUJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9ncmlkX1JvdyB9IGZyb20gJy4vRXh0L2dyaWQvUm93JztcbmV4cG9ydCBjbGFzcyBFeHRHcmlkcm93TWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9Sb3cge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0R3JpZHJvd01ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZ3JpZF9Sb3cuZ2V0UHJvcGVydGllcyhFeHRHcmlkcm93TWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dEdyaWRyb3dNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZ3JpZF9Sb3cuZ2V0RXZlbnRzKEV4dEdyaWRyb3dNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRHcmlkcm93TWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRHcmlkcm93TWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dEdyaWRyb3dNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtZ3JpZHJvdycsXG4gIGlucHV0czogRXh0R3JpZHJvd01ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dEdyaWRyb3dNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0R3JpZHJvd0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEdyaWRyb3dDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0R3JpZHJvd01ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRHcmlkcm93TWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdncmlkcm93J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19