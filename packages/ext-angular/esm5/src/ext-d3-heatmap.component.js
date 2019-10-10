import * as tslib_1 from "tslib";
import { Ext_d3_HeatMap } from './Ext/d3/HeatMap';
var ExtD3_heatmapMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_heatmapMetaData, _super);
    function ExtD3_heatmapMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtD3_heatmapMetaData.getAll = function () {
        ExtD3_heatmapMetaData.PROPERTIES = Ext_d3_HeatMap.getProperties(ExtD3_heatmapMetaData.PROPERTIES);
        ExtD3_heatmapMetaData.EVENTS = Ext_d3_HeatMap.getEvents(ExtD3_heatmapMetaData.EVENTS);
        ExtD3_heatmapMetaData.EVENTS.forEach(function (event) {
            ExtD3_heatmapMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtD3_heatmapMetaData.PROPERTIES = [];
    ExtD3_heatmapMetaData.EVENTS = [];
    ExtD3_heatmapMetaData.EVENTNAMES = [];
    return ExtD3_heatmapMetaData;
}(Ext_d3_HeatMap));
export { ExtD3_heatmapMetaData };
(function () { ExtD3_heatmapMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtD3_heatmapComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_heatmapComponent, _super);
    function ExtD3_heatmapComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtD3_heatmapMetaData.PROPERTIES, ExtD3_heatmapMetaData.EVENTS) || this;
        _this.xtype = 'd3-heatmap';
        return _this;
    }
    ExtD3_heatmapComponent_1 = ExtD3_heatmapComponent;
    ExtD3_heatmapComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtD3_heatmapComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtD3_heatmapComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtD3_heatmapComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtD3_heatmapComponent_1;
    ExtD3_heatmapComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtD3_heatmapComponent = ExtD3_heatmapComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-d3-heatmap',
            inputs: ExtD3_heatmapMetaData.PROPERTIES,
            outputs: ExtD3_heatmapMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtD3_heatmapComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtD3_heatmapComponent);
    return ExtD3_heatmapComponent;
}(EngBase));
export { ExtD3_heatmapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWQzLWhlYXRtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtZDMtaGVhdG1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRDtJQUEyQyxpREFBYztJQUF6RDs7SUFXQSxDQUFDO0lBUFUsNEJBQU0sR0FBYjtRQUNJLHFCQUFxQixDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xHLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RGLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzdDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLGdDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDRCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLGdDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDRCQUFDO0NBQUEsQUFYRCxDQUEyQyxjQUFjLEdBV3hEO1NBWFkscUJBQXFCO0FBWWxDLENBQUMsY0FBYSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUE0QyxrREFBTztJQUUvQyxnQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IscUJBQXFCLENBQUMsVUFBVSxFQUNoQyxxQkFBcUIsQ0FBQyxNQUFNLENBQy9CLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQTs7SUFDN0IsQ0FBQzsrQkFiUSxzQkFBc0I7SUFleEIseUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sZ0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sNENBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHNCQUFzQjtRQVBsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3hDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFDLENBQUM7WUFDdEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsc0JBQXNCLENBOEJsQztJQUFELDZCQUFDO0NBQUEsQUE5QkQsQ0FBNEMsT0FBTyxHQThCbEQ7U0E5Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2QzX0hlYXRNYXAgfSBmcm9tICcuL0V4dC9kMy9IZWF0TWFwJztcbmV4cG9ydCBjbGFzcyBFeHREM19oZWF0bWFwTWV0YURhdGEgZXh0ZW5kcyBFeHRfZDNfSGVhdE1hcCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHREM19oZWF0bWFwTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9kM19IZWF0TWFwLmdldFByb3BlcnRpZXMoRXh0RDNfaGVhdG1hcE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHREM19oZWF0bWFwTWV0YURhdGEuRVZFTlRTID0gRXh0X2QzX0hlYXRNYXAuZ2V0RXZlbnRzKEV4dEQzX2hlYXRtYXBNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHREM19oZWF0bWFwTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHREM19oZWF0bWFwTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dEQzX2hlYXRtYXBNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtZDMtaGVhdG1hcCcsXG4gIGlucHV0czogRXh0RDNfaGVhdG1hcE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dEQzX2hlYXRtYXBNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0RDNfaGVhdG1hcENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEQzX2hlYXRtYXBDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0RDNfaGVhdG1hcE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHREM19oZWF0bWFwTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdkMy1oZWF0bWFwJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19