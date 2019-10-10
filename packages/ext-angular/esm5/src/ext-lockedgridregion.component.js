import * as tslib_1 from "tslib";
import { Ext_grid_LockedGridRegion } from './Ext/grid/LockedGridRegion';
var ExtLockedgridregionMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtLockedgridregionMetaData, _super);
    function ExtLockedgridregionMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtLockedgridregionMetaData.getAll = function () {
        ExtLockedgridregionMetaData.PROPERTIES = Ext_grid_LockedGridRegion.getProperties(ExtLockedgridregionMetaData.PROPERTIES);
        ExtLockedgridregionMetaData.EVENTS = Ext_grid_LockedGridRegion.getEvents(ExtLockedgridregionMetaData.EVENTS);
        ExtLockedgridregionMetaData.EVENTS.forEach(function (event) {
            ExtLockedgridregionMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtLockedgridregionMetaData.PROPERTIES = [];
    ExtLockedgridregionMetaData.EVENTS = [];
    ExtLockedgridregionMetaData.EVENTNAMES = [];
    return ExtLockedgridregionMetaData;
}(Ext_grid_LockedGridRegion));
export { ExtLockedgridregionMetaData };
(function () { ExtLockedgridregionMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtLockedgridregionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtLockedgridregionComponent, _super);
    function ExtLockedgridregionComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtLockedgridregionMetaData.PROPERTIES, ExtLockedgridregionMetaData.EVENTS) || this;
        _this.xtype = 'lockedgridregion';
        return _this;
    }
    ExtLockedgridregionComponent_1 = ExtLockedgridregionComponent;
    ExtLockedgridregionComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtLockedgridregionComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtLockedgridregionComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtLockedgridregionComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtLockedgridregionComponent_1;
    ExtLockedgridregionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtLockedgridregionComponent = ExtLockedgridregionComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-lockedgridregion',
            inputs: ExtLockedgridregionMetaData.PROPERTIES,
            outputs: ExtLockedgridregionMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtLockedgridregionComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtLockedgridregionComponent);
    return ExtLockedgridregionComponent;
}(EngBase));
export { ExtLockedgridregionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWxvY2tlZGdyaWRyZWdpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtbG9ja2VkZ3JpZHJlZ2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFO0lBQWlELHVEQUF5QjtJQUExRTs7SUFXQSxDQUFDO0lBUFUsa0NBQU0sR0FBYjtRQUNJLDJCQUEyQixDQUFDLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekgsMkJBQTJCLENBQUMsTUFBTSxHQUFHLHlCQUF5QixDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNuRCwyQkFBMkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixrQ0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxrQ0FBQztDQUFBLEFBWEQsQ0FBaUQseUJBQXlCLEdBV3pFO1NBWFksMkJBQTJCO0FBWXhDLENBQUMsY0FBYSwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFrRCx3REFBTztJQUVyRCxzQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsMkJBQTJCLENBQUMsVUFBVSxFQUN0QywyQkFBMkIsQ0FBQyxNQUFNLENBQ3JDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFBOztJQUNuQyxDQUFDO3FDQWJRLDRCQUE0QjtJQWU5QiwrQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxzREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxrREFBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxrREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsNEJBQTRCO1FBUHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsTUFBTSxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDOUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDL0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDhCQUE0QixFQUE1QixDQUE0QixDQUFDLEVBQUMsQ0FBQztZQUM1RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCw0QkFBNEIsQ0E4QnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTlCRCxDQUFrRCxPQUFPLEdBOEJ4RDtTQTlCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZ3JpZF9Mb2NrZWRHcmlkUmVnaW9uIH0gZnJvbSAnLi9FeHQvZ3JpZC9Mb2NrZWRHcmlkUmVnaW9uJztcbmV4cG9ydCBjbGFzcyBFeHRMb2NrZWRncmlkcmVnaW9uTWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9Mb2NrZWRHcmlkUmVnaW9uIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dExvY2tlZGdyaWRyZWdpb25NZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2dyaWRfTG9ja2VkR3JpZFJlZ2lvbi5nZXRQcm9wZXJ0aWVzKEV4dExvY2tlZGdyaWRyZWdpb25NZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0TG9ja2VkZ3JpZHJlZ2lvbk1ldGFEYXRhLkVWRU5UUyA9IEV4dF9ncmlkX0xvY2tlZEdyaWRSZWdpb24uZ2V0RXZlbnRzKEV4dExvY2tlZGdyaWRyZWdpb25NZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRMb2NrZWRncmlkcmVnaW9uTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRMb2NrZWRncmlkcmVnaW9uTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dExvY2tlZGdyaWRyZWdpb25NZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtbG9ja2VkZ3JpZHJlZ2lvbicsXG4gIGlucHV0czogRXh0TG9ja2VkZ3JpZHJlZ2lvbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dExvY2tlZGdyaWRyZWdpb25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0TG9ja2VkZ3JpZHJlZ2lvbkNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dExvY2tlZGdyaWRyZWdpb25Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0TG9ja2VkZ3JpZHJlZ2lvbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRMb2NrZWRncmlkcmVnaW9uTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdsb2NrZWRncmlkcmVnaW9uJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19