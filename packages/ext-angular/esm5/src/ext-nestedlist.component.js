import * as tslib_1 from "tslib";
import { Ext_NestedList } from './Ext/NestedList';
var ExtNestedlistMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtNestedlistMetaData, _super);
    function ExtNestedlistMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtNestedlistMetaData.getAll = function () {
        ExtNestedlistMetaData.PROPERTIES = Ext_NestedList.getProperties(ExtNestedlistMetaData.PROPERTIES);
        ExtNestedlistMetaData.EVENTS = Ext_NestedList.getEvents(ExtNestedlistMetaData.EVENTS);
        ExtNestedlistMetaData.EVENTS.forEach(function (event) {
            ExtNestedlistMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtNestedlistMetaData.PROPERTIES = [];
    ExtNestedlistMetaData.EVENTS = [];
    ExtNestedlistMetaData.EVENTNAMES = [];
    return ExtNestedlistMetaData;
}(Ext_NestedList));
export { ExtNestedlistMetaData };
(function () { ExtNestedlistMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtNestedlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtNestedlistComponent, _super);
    function ExtNestedlistComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtNestedlistMetaData.PROPERTIES, ExtNestedlistMetaData.EVENTS) || this;
        _this.xtype = 'nestedlist';
        return _this;
    }
    ExtNestedlistComponent_1 = ExtNestedlistComponent;
    ExtNestedlistComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtNestedlistComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtNestedlistComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtNestedlistComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtNestedlistComponent_1;
    ExtNestedlistComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtNestedlistComponent = ExtNestedlistComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-nestedlist',
            inputs: ExtNestedlistMetaData.PROPERTIES,
            outputs: ExtNestedlistMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtNestedlistComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtNestedlistComponent);
    return ExtNestedlistComponent;
}(EngBase));
export { ExtNestedlistComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW5lc3RlZGxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtbmVzdGVkbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRDtJQUEyQyxpREFBYztJQUF6RDs7SUFXQSxDQUFDO0lBUFUsNEJBQU0sR0FBYjtRQUNJLHFCQUFxQixDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xHLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RGLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzdDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLGdDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDRCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLGdDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDRCQUFDO0NBQUEsQUFYRCxDQUEyQyxjQUFjLEdBV3hEO1NBWFkscUJBQXFCO0FBWWxDLENBQUMsY0FBYSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUE0QyxrREFBTztJQUUvQyxnQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IscUJBQXFCLENBQUMsVUFBVSxFQUNoQyxxQkFBcUIsQ0FBQyxNQUFNLENBQy9CLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQTs7SUFDN0IsQ0FBQzsrQkFiUSxzQkFBc0I7SUFleEIseUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sZ0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sNENBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHNCQUFzQjtRQVBsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3hDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFDLENBQUM7WUFDdEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsc0JBQXNCLENBOEJsQztJQUFELDZCQUFDO0NBQUEsQUE5QkQsQ0FBNEMsT0FBTyxHQThCbEQ7U0E5Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X05lc3RlZExpc3QgfSBmcm9tICcuL0V4dC9OZXN0ZWRMaXN0JztcbmV4cG9ydCBjbGFzcyBFeHROZXN0ZWRsaXN0TWV0YURhdGEgZXh0ZW5kcyBFeHRfTmVzdGVkTGlzdCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHROZXN0ZWRsaXN0TWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9OZXN0ZWRMaXN0LmdldFByb3BlcnRpZXMoRXh0TmVzdGVkbGlzdE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHROZXN0ZWRsaXN0TWV0YURhdGEuRVZFTlRTID0gRXh0X05lc3RlZExpc3QuZ2V0RXZlbnRzKEV4dE5lc3RlZGxpc3RNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHROZXN0ZWRsaXN0TWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHROZXN0ZWRsaXN0TWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dE5lc3RlZGxpc3RNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtbmVzdGVkbGlzdCcsXG4gIGlucHV0czogRXh0TmVzdGVkbGlzdE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dE5lc3RlZGxpc3RNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0TmVzdGVkbGlzdENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dE5lc3RlZGxpc3RDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0TmVzdGVkbGlzdE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHROZXN0ZWRsaXN0TWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICduZXN0ZWRsaXN0J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19