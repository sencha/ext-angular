import * as tslib_1 from "tslib";
import { Ext_pivot_d3_Container } from './Ext/pivot/d3/Container';
var ExtPivotd3containerMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotd3containerMetaData, _super);
    function ExtPivotd3containerMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPivotd3containerMetaData.getAll = function () {
        ExtPivotd3containerMetaData.PROPERTIES = Ext_pivot_d3_Container.getProperties(ExtPivotd3containerMetaData.PROPERTIES);
        ExtPivotd3containerMetaData.EVENTS = Ext_pivot_d3_Container.getEvents(ExtPivotd3containerMetaData.EVENTS);
        ExtPivotd3containerMetaData.EVENTS.forEach(function (event) {
            ExtPivotd3containerMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPivotd3containerMetaData.PROPERTIES = [];
    ExtPivotd3containerMetaData.EVENTS = [];
    ExtPivotd3containerMetaData.EVENTNAMES = [];
    return ExtPivotd3containerMetaData;
}(Ext_pivot_d3_Container));
export { ExtPivotd3containerMetaData };
(function () { ExtPivotd3containerMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPivotd3containerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotd3containerComponent, _super);
    function ExtPivotd3containerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPivotd3containerMetaData.PROPERTIES, ExtPivotd3containerMetaData.EVENTS) || this;
        _this.xtype = 'pivotd3container';
        return _this;
    }
    ExtPivotd3containerComponent_1 = ExtPivotd3containerComponent;
    ExtPivotd3containerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPivotd3containerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPivotd3containerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPivotd3containerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPivotd3containerComponent_1;
    ExtPivotd3containerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPivotd3containerComponent = ExtPivotd3containerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-pivotd3container',
            inputs: ExtPivotd3containerMetaData.PROPERTIES,
            outputs: ExtPivotd3containerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPivotd3containerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPivotd3containerComponent);
    return ExtPivotd3containerComponent;
}(EngBase));
export { ExtPivotd3containerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtcGl2b3RkM2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFO0lBQWlELHVEQUFzQjtJQUF2RTs7SUFXQSxDQUFDO0lBUFUsa0NBQU0sR0FBYjtRQUNJLDJCQUEyQixDQUFDLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEgsMkJBQTJCLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNuRCwyQkFBMkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixrQ0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxrQ0FBQztDQUFBLEFBWEQsQ0FBaUQsc0JBQXNCLEdBV3RFO1NBWFksMkJBQTJCO0FBWXhDLENBQUMsY0FBYSwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFrRCx3REFBTztJQUVyRCxzQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsMkJBQTJCLENBQUMsVUFBVSxFQUN0QywyQkFBMkIsQ0FBQyxNQUFNLENBQ3JDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFBOztJQUNuQyxDQUFDO3FDQWJRLDRCQUE0QjtJQWU5QiwrQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxzREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxrREFBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxrREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsNEJBQTRCO1FBUHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsTUFBTSxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDOUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDL0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDhCQUE0QixFQUE1QixDQUE0QixDQUFDLEVBQUMsQ0FBQztZQUM1RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCw0QkFBNEIsQ0E4QnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTlCRCxDQUFrRCxPQUFPLEdBOEJ4RDtTQTlCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfcGl2b3RfZDNfQ29udGFpbmVyIH0gZnJvbSAnLi9FeHQvcGl2b3QvZDMvQ29udGFpbmVyJztcbmV4cG9ydCBjbGFzcyBFeHRQaXZvdGQzY29udGFpbmVyTWV0YURhdGEgZXh0ZW5kcyBFeHRfcGl2b3RfZDNfQ29udGFpbmVyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X3Bpdm90X2QzX0NvbnRhaW5lci5nZXRQcm9wZXJ0aWVzKEV4dFBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0UGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLkVWRU5UUyA9IEV4dF9waXZvdF9kM19Db250YWluZXIuZ2V0RXZlbnRzKEV4dFBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRQaXZvdGQzY29udGFpbmVyTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRQaXZvdGQzY29udGFpbmVyTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtcGl2b3RkM2NvbnRhaW5lcicsXG4gIGlucHV0czogRXh0UGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0UGl2b3RkM2NvbnRhaW5lckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFBpdm90ZDNjb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0UGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRQaXZvdGQzY29udGFpbmVyTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdwaXZvdGQzY29udGFpbmVyJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19