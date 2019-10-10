import * as tslib_1 from "tslib";
import { Ext_tip_ToolTip } from './Ext/tip/ToolTip';
var ExtTooltipMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTooltipMetaData, _super);
    function ExtTooltipMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtTooltipMetaData.getAll = function () {
        ExtTooltipMetaData.PROPERTIES = Ext_tip_ToolTip.getProperties(ExtTooltipMetaData.PROPERTIES);
        ExtTooltipMetaData.EVENTS = Ext_tip_ToolTip.getEvents(ExtTooltipMetaData.EVENTS);
        ExtTooltipMetaData.EVENTS.forEach(function (event) {
            ExtTooltipMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtTooltipMetaData.PROPERTIES = [];
    ExtTooltipMetaData.EVENTS = [];
    ExtTooltipMetaData.EVENTNAMES = [];
    return ExtTooltipMetaData;
}(Ext_tip_ToolTip));
export { ExtTooltipMetaData };
(function () { ExtTooltipMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtTooltipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTooltipComponent, _super);
    function ExtTooltipComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTooltipMetaData.PROPERTIES, ExtTooltipMetaData.EVENTS) || this;
        _this.xtype = 'tooltip';
        return _this;
    }
    ExtTooltipComponent_1 = ExtTooltipComponent;
    ExtTooltipComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTooltipComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTooltipComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTooltipComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTooltipComponent_1;
    ExtTooltipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTooltipComponent = ExtTooltipComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-tooltip',
            inputs: ExtTooltipMetaData.PROPERTIES,
            outputs: ExtTooltipMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTooltipComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTooltipComponent);
    return ExtTooltipComponent;
}(EngBase));
export { ExtTooltipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRDtJQUF3Qyw4Q0FBZTtJQUF2RDs7SUFXQSxDQUFDO0lBUFUseUJBQU0sR0FBYjtRQUNJLGtCQUFrQixDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdGLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pGLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDZCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHlCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDZCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHlCQUFDO0NBQUEsQUFYRCxDQUF3QyxlQUFlLEdBV3REO1NBWFksa0JBQWtCO0FBWS9CLENBQUMsY0FBYSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUF5QywrQ0FBTztJQUU1Qyw2QkFDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2Isa0JBQWtCLENBQUMsVUFBVSxFQUM3QixrQkFBa0IsQ0FBQyxNQUFNLENBQzVCLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQTs7SUFDMUIsQ0FBQzs0QkFiUSxtQkFBbUI7SUFlckIsc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sNkNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0seUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLG1CQUFtQjtRQVAvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtZQUNyQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtZQUN0QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQW1CLEVBQW5CLENBQW1CLENBQUMsRUFBQyxDQUFDO1lBQ25GLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELG1CQUFtQixDQThCL0I7SUFBRCwwQkFBQztDQUFBLEFBOUJELENBQXlDLE9BQU8sR0E4Qi9DO1NBOUJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF90aXBfVG9vbFRpcCB9IGZyb20gJy4vRXh0L3RpcC9Ub29sVGlwJztcbmV4cG9ydCBjbGFzcyBFeHRUb29sdGlwTWV0YURhdGEgZXh0ZW5kcyBFeHRfdGlwX1Rvb2xUaXAge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0VG9vbHRpcE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfdGlwX1Rvb2xUaXAuZ2V0UHJvcGVydGllcyhFeHRUb29sdGlwTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFRvb2x0aXBNZXRhRGF0YS5FVkVOVFMgPSBFeHRfdGlwX1Rvb2xUaXAuZ2V0RXZlbnRzKEV4dFRvb2x0aXBNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRUb29sdGlwTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRUb29sdGlwTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFRvb2x0aXBNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtdG9vbHRpcCcsXG4gIGlucHV0czogRXh0VG9vbHRpcE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFRvb2x0aXBNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0VG9vbHRpcENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFRvb2x0aXBDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0VG9vbHRpcE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRUb29sdGlwTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICd0b29sdGlwJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19