import * as tslib_1 from "tslib";
import { Ext_pivot_plugin_configurator_Container } from './Ext/pivot/plugin/configurator/Container';
var ExtPivotconfigcontainerMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotconfigcontainerMetaData, _super);
    function ExtPivotconfigcontainerMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPivotconfigcontainerMetaData.getAll = function () {
        ExtPivotconfigcontainerMetaData.PROPERTIES = Ext_pivot_plugin_configurator_Container.getProperties(ExtPivotconfigcontainerMetaData.PROPERTIES);
        ExtPivotconfigcontainerMetaData.EVENTS = Ext_pivot_plugin_configurator_Container.getEvents(ExtPivotconfigcontainerMetaData.EVENTS);
        ExtPivotconfigcontainerMetaData.EVENTS.forEach(function (event) {
            ExtPivotconfigcontainerMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPivotconfigcontainerMetaData.PROPERTIES = [];
    ExtPivotconfigcontainerMetaData.EVENTS = [];
    ExtPivotconfigcontainerMetaData.EVENTNAMES = [];
    return ExtPivotconfigcontainerMetaData;
}(Ext_pivot_plugin_configurator_Container));
export { ExtPivotconfigcontainerMetaData };
(function () { ExtPivotconfigcontainerMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPivotconfigcontainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotconfigcontainerComponent, _super);
    function ExtPivotconfigcontainerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPivotconfigcontainerMetaData.PROPERTIES, ExtPivotconfigcontainerMetaData.EVENTS) || this;
        _this.xtype = 'pivotconfigcontainer';
        return _this;
    }
    ExtPivotconfigcontainerComponent_1 = ExtPivotconfigcontainerComponent;
    ExtPivotconfigcontainerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPivotconfigcontainerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPivotconfigcontainerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPivotconfigcontainerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPivotconfigcontainerComponent_1;
    ExtPivotconfigcontainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPivotconfigcontainerComponent = ExtPivotconfigcontainerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-pivotconfigcontainer',
            inputs: ExtPivotconfigcontainerMetaData.PROPERTIES,
            outputs: ExtPivotconfigcontainerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPivotconfigcontainerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPivotconfigcontainerComponent);
    return ExtPivotconfigcontainerComponent;
}(EngBase));
export { ExtPivotconfigcontainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90Y29uZmlnY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXBpdm90Y29uZmlnY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEc7SUFBcUQsMkRBQXVDO0lBQTVGOztJQVdBLENBQUM7SUFQVSxzQ0FBTSxHQUFiO1FBQ0ksK0JBQStCLENBQUMsVUFBVSxHQUFHLHVDQUF1QyxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvSSwrQkFBK0IsQ0FBQyxNQUFNLEdBQUcsdUNBQXVDLENBQUMsU0FBUyxDQUFDLCtCQUErQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25JLCtCQUErQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3ZELCtCQUErQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDBDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHNDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDBDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHNDQUFDO0NBQUEsQUFYRCxDQUFxRCx1Q0FBdUMsR0FXM0Y7U0FYWSwrQkFBK0I7QUFZNUMsQ0FBQyxjQUFhLCtCQUErQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXNELDREQUFPO0lBRXpELDBDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYiwrQkFBK0IsQ0FBQyxVQUFVLEVBQzFDLCtCQUErQixDQUFDLE1BQU0sQ0FDekMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUE7O0lBQ3ZDLENBQUM7eUNBYlEsZ0NBQWdDO0lBZWxDLG1EQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDBEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHNEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHNEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixnQ0FBZ0M7UUFQNUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxNQUFNLEVBQUUsK0JBQStCLENBQUMsVUFBVTtZQUNsRCxPQUFPLEVBQUUsK0JBQStCLENBQUMsVUFBVTtZQUNuRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0NBQWdDLEVBQWhDLENBQWdDLENBQUMsRUFBQyxDQUFDO1lBQ2hHLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELGdDQUFnQyxDQThCNUM7SUFBRCx1Q0FBQztDQUFBLEFBOUJELENBQXNELE9BQU8sR0E4QjVEO1NBOUJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9waXZvdF9wbHVnaW5fY29uZmlndXJhdG9yX0NvbnRhaW5lciB9IGZyb20gJy4vRXh0L3Bpdm90L3BsdWdpbi9jb25maWd1cmF0b3IvQ29udGFpbmVyJztcbmV4cG9ydCBjbGFzcyBFeHRQaXZvdGNvbmZpZ2NvbnRhaW5lck1ldGFEYXRhIGV4dGVuZHMgRXh0X3Bpdm90X3BsdWdpbl9jb25maWd1cmF0b3JfQ29udGFpbmVyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFBpdm90Y29uZmlnY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9waXZvdF9wbHVnaW5fY29uZmlndXJhdG9yX0NvbnRhaW5lci5nZXRQcm9wZXJ0aWVzKEV4dFBpdm90Y29uZmlnY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFBpdm90Y29uZmlnY29udGFpbmVyTWV0YURhdGEuRVZFTlRTID0gRXh0X3Bpdm90X3BsdWdpbl9jb25maWd1cmF0b3JfQ29udGFpbmVyLmdldEV2ZW50cyhFeHRQaXZvdGNvbmZpZ2NvbnRhaW5lck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFBpdm90Y29uZmlnY29udGFpbmVyTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRQaXZvdGNvbmZpZ2NvbnRhaW5lck1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRQaXZvdGNvbmZpZ2NvbnRhaW5lck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1waXZvdGNvbmZpZ2NvbnRhaW5lcicsXG4gIGlucHV0czogRXh0UGl2b3Rjb25maWdjb250YWluZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRQaXZvdGNvbmZpZ2NvbnRhaW5lck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaXZvdGNvbmZpZ2NvbnRhaW5lckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFBpdm90Y29uZmlnY29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dFBpdm90Y29uZmlnY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFBpdm90Y29uZmlnY29udGFpbmVyTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdwaXZvdGNvbmZpZ2NvbnRhaW5lcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==