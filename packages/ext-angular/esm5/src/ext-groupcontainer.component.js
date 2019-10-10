import * as tslib_1 from "tslib";
import { Ext_field_FieldGroupContainer } from './Ext/field/FieldGroupContainer';
var ExtGroupcontainerMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGroupcontainerMetaData, _super);
    function ExtGroupcontainerMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtGroupcontainerMetaData.getAll = function () {
        ExtGroupcontainerMetaData.PROPERTIES = Ext_field_FieldGroupContainer.getProperties(ExtGroupcontainerMetaData.PROPERTIES);
        ExtGroupcontainerMetaData.EVENTS = Ext_field_FieldGroupContainer.getEvents(ExtGroupcontainerMetaData.EVENTS);
        ExtGroupcontainerMetaData.EVENTS.forEach(function (event) {
            ExtGroupcontainerMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtGroupcontainerMetaData.PROPERTIES = [];
    ExtGroupcontainerMetaData.EVENTS = [];
    ExtGroupcontainerMetaData.EVENTNAMES = [];
    return ExtGroupcontainerMetaData;
}(Ext_field_FieldGroupContainer));
export { ExtGroupcontainerMetaData };
(function () { ExtGroupcontainerMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtGroupcontainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGroupcontainerComponent, _super);
    function ExtGroupcontainerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGroupcontainerMetaData.PROPERTIES, ExtGroupcontainerMetaData.EVENTS) || this;
        _this.xtype = 'groupcontainer';
        return _this;
    }
    ExtGroupcontainerComponent_1 = ExtGroupcontainerComponent;
    ExtGroupcontainerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGroupcontainerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGroupcontainerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGroupcontainerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGroupcontainerComponent_1;
    ExtGroupcontainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGroupcontainerComponent = ExtGroupcontainerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-groupcontainer',
            inputs: ExtGroupcontainerMetaData.PROPERTIES,
            outputs: ExtGroupcontainerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGroupcontainerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGroupcontainerComponent);
    return ExtGroupcontainerComponent;
}(EngBase));
export { ExtGroupcontainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWdyb3VwY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWdyb3VwY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEY7SUFBK0MscURBQTZCO0lBQTVFOztJQVdBLENBQUM7SUFQVSxnQ0FBTSxHQUFiO1FBQ0kseUJBQXlCLENBQUMsVUFBVSxHQUFHLDZCQUE2QixDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6SCx5QkFBeUIsQ0FBQyxNQUFNLEdBQUcsNkJBQTZCLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ2pELHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLG9DQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLGdDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLG9DQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLGdDQUFDO0NBQUEsQUFYRCxDQUErQyw2QkFBNkIsR0FXM0U7U0FYWSx5QkFBeUI7QUFZdEMsQ0FBQyxjQUFhLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQWdELHNEQUFPO0lBRW5ELG9DQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYix5QkFBeUIsQ0FBQyxVQUFVLEVBQ3BDLHlCQUF5QixDQUFDLE1BQU0sQ0FDbkMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUE7O0lBQ2pDLENBQUM7bUNBYlEsMEJBQTBCO0lBZTVCLDZDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLG9EQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLGdEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLGdEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QiwwQkFBMEI7UUFQdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixNQUFNLEVBQUUseUJBQXlCLENBQUMsVUFBVTtZQUM1QyxPQUFPLEVBQUUseUJBQXlCLENBQUMsVUFBVTtZQUM3QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNEJBQTBCLEVBQTFCLENBQTBCLENBQUMsRUFBQyxDQUFDO1lBQzFGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELDBCQUEwQixDQThCdEM7SUFBRCxpQ0FBQztDQUFBLEFBOUJELENBQWdELE9BQU8sR0E4QnREO1NBOUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9maWVsZF9GaWVsZEdyb3VwQ29udGFpbmVyIH0gZnJvbSAnLi9FeHQvZmllbGQvRmllbGRHcm91cENvbnRhaW5lcic7XG5leHBvcnQgY2xhc3MgRXh0R3JvdXBjb250YWluZXJNZXRhRGF0YSBleHRlbmRzIEV4dF9maWVsZF9GaWVsZEdyb3VwQ29udGFpbmVyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dEdyb3VwY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9maWVsZF9GaWVsZEdyb3VwQ29udGFpbmVyLmdldFByb3BlcnRpZXMoRXh0R3JvdXBjb250YWluZXJNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0R3JvdXBjb250YWluZXJNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZmllbGRfRmllbGRHcm91cENvbnRhaW5lci5nZXRFdmVudHMoRXh0R3JvdXBjb250YWluZXJNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRHcm91cGNvbnRhaW5lck1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0R3JvdXBjb250YWluZXJNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0R3JvdXBjb250YWluZXJNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtZ3JvdXBjb250YWluZXInLFxuICBpbnB1dHM6IEV4dEdyb3VwY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0R3JvdXBjb250YWluZXJNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0R3JvdXBjb250YWluZXJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRHcm91cGNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRHcm91cGNvbnRhaW5lck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRHcm91cGNvbnRhaW5lck1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnZ3JvdXBjb250YWluZXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=