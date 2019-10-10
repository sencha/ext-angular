import * as tslib_1 from "tslib";
import { Ext_ux_colorpick_Selector } from './Ext/ux/colorpick/Selector';
var ExtColorselectorMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorselectorMetaData, _super);
    function ExtColorselectorMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtColorselectorMetaData.getAll = function () {
        ExtColorselectorMetaData.PROPERTIES = Ext_ux_colorpick_Selector.getProperties(ExtColorselectorMetaData.PROPERTIES);
        ExtColorselectorMetaData.EVENTS = Ext_ux_colorpick_Selector.getEvents(ExtColorselectorMetaData.EVENTS);
        ExtColorselectorMetaData.EVENTS.forEach(function (event) {
            ExtColorselectorMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtColorselectorMetaData.PROPERTIES = [];
    ExtColorselectorMetaData.EVENTS = [];
    ExtColorselectorMetaData.EVENTNAMES = [];
    return ExtColorselectorMetaData;
}(Ext_ux_colorpick_Selector));
export { ExtColorselectorMetaData };
(function () { ExtColorselectorMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtColorselectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorselectorComponent, _super);
    function ExtColorselectorComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtColorselectorMetaData.PROPERTIES, ExtColorselectorMetaData.EVENTS) || this;
        _this.xtype = 'colorselector';
        return _this;
    }
    ExtColorselectorComponent_1 = ExtColorselectorComponent;
    ExtColorselectorComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtColorselectorComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtColorselectorComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtColorselectorComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtColorselectorComponent_1;
    ExtColorselectorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtColorselectorComponent = ExtColorselectorComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-colorselector',
            inputs: ExtColorselectorMetaData.PROPERTIES,
            outputs: ExtColorselectorMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtColorselectorComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtColorselectorComponent);
    return ExtColorselectorComponent;
}(EngBase));
export { ExtColorselectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFO0lBQThDLG9EQUF5QjtJQUF2RTs7SUFXQSxDQUFDO0lBUFUsK0JBQU0sR0FBYjtRQUNJLHdCQUF3QixDQUFDLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkgsd0JBQXdCLENBQUMsTUFBTSxHQUFHLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2Ryx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNoRCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxtQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQiwrQkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixtQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QywrQkFBQztDQUFBLEFBWEQsQ0FBOEMseUJBQXlCLEdBV3RFO1NBWFksd0JBQXdCO0FBWXJDLENBQUMsY0FBYSx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUErQyxxREFBTztJQUVsRCxtQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2Isd0JBQXdCLENBQUMsVUFBVSxFQUNuQyx3QkFBd0IsQ0FBQyxNQUFNLENBQ2xDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQTs7SUFDaEMsQ0FBQztrQ0FiUSx5QkFBeUI7SUFlM0IsNENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sbURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sK0NBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sK0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHlCQUF5QjtRQVByQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwyQkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFDLENBQUM7WUFDekYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQseUJBQXlCLENBOEJyQztJQUFELGdDQUFDO0NBQUEsQUE5QkQsQ0FBK0MsT0FBTyxHQThCckQ7U0E5QlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3V4X2NvbG9ycGlja19TZWxlY3RvciB9IGZyb20gJy4vRXh0L3V4L2NvbG9ycGljay9TZWxlY3Rvcic7XG5leHBvcnQgY2xhc3MgRXh0Q29sb3JzZWxlY3Rvck1ldGFEYXRhIGV4dGVuZHMgRXh0X3V4X2NvbG9ycGlja19TZWxlY3RvciB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRDb2xvcnNlbGVjdG9yTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF91eF9jb2xvcnBpY2tfU2VsZWN0b3IuZ2V0UHJvcGVydGllcyhFeHRDb2xvcnNlbGVjdG9yTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dENvbG9yc2VsZWN0b3JNZXRhRGF0YS5FVkVOVFMgPSBFeHRfdXhfY29sb3JwaWNrX1NlbGVjdG9yLmdldEV2ZW50cyhFeHRDb2xvcnNlbGVjdG9yTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q29sb3JzZWxlY3Rvck1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Q29sb3JzZWxlY3Rvck1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRDb2xvcnNlbGVjdG9yTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNvbG9yc2VsZWN0b3InLFxuICBpbnB1dHM6IEV4dENvbG9yc2VsZWN0b3JNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRDb2xvcnNlbGVjdG9yTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dENvbG9yc2VsZWN0b3JNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q29sb3JzZWxlY3Rvck1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY29sb3JzZWxlY3RvcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==