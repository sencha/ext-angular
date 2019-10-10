import * as tslib_1 from "tslib";
import { Ext_grid_menu_GroupByThis } from './Ext/grid/menu/GroupByThis';
var ExtGridgroupbythismenuitemMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridgroupbythismenuitemMetaData, _super);
    function ExtGridgroupbythismenuitemMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtGridgroupbythismenuitemMetaData.getAll = function () {
        ExtGridgroupbythismenuitemMetaData.PROPERTIES = Ext_grid_menu_GroupByThis.getProperties(ExtGridgroupbythismenuitemMetaData.PROPERTIES);
        ExtGridgroupbythismenuitemMetaData.EVENTS = Ext_grid_menu_GroupByThis.getEvents(ExtGridgroupbythismenuitemMetaData.EVENTS);
        ExtGridgroupbythismenuitemMetaData.EVENTS.forEach(function (event) {
            ExtGridgroupbythismenuitemMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtGridgroupbythismenuitemMetaData.PROPERTIES = [];
    ExtGridgroupbythismenuitemMetaData.EVENTS = [];
    ExtGridgroupbythismenuitemMetaData.EVENTNAMES = [];
    return ExtGridgroupbythismenuitemMetaData;
}(Ext_grid_menu_GroupByThis));
export { ExtGridgroupbythismenuitemMetaData };
(function () { ExtGridgroupbythismenuitemMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtGridgroupbythismenuitemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridgroupbythismenuitemComponent, _super);
    function ExtGridgroupbythismenuitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridgroupbythismenuitemMetaData.PROPERTIES, ExtGridgroupbythismenuitemMetaData.EVENTS) || this;
        _this.xtype = 'gridgroupbythismenuitem';
        return _this;
    }
    ExtGridgroupbythismenuitemComponent_1 = ExtGridgroupbythismenuitemComponent;
    ExtGridgroupbythismenuitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridgroupbythismenuitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridgroupbythismenuitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridgroupbythismenuitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridgroupbythismenuitemComponent_1;
    ExtGridgroupbythismenuitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridgroupbythismenuitemComponent = ExtGridgroupbythismenuitemComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-gridgroupbythismenuitem',
            inputs: ExtGridgroupbythismenuitemMetaData.PROPERTIES,
            outputs: ExtGridgroupbythismenuitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridgroupbythismenuitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridgroupbythismenuitemComponent);
    return ExtGridgroupbythismenuitemComponent;
}(EngBase));
export { ExtGridgroupbythismenuitemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWdyaWRncm91cGJ5dGhpc21lbnVpdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWdyaWRncm91cGJ5dGhpc21lbnVpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEU7SUFBd0QsOERBQXlCO0lBQWpGOztJQVdBLENBQUM7SUFQVSx5Q0FBTSxHQUFiO1FBQ0ksa0NBQWtDLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxrQ0FBa0MsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2SSxrQ0FBa0MsQ0FBQyxNQUFNLEdBQUcseUJBQXlCLENBQUMsU0FBUyxDQUFDLGtDQUFrQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNILGtDQUFrQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzFELGtDQUFrQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDZDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHlDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDZDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHlDQUFDO0NBQUEsQUFYRCxDQUF3RCx5QkFBeUIsR0FXaEY7U0FYWSxrQ0FBa0M7QUFZL0MsQ0FBQyxjQUFhLGtDQUFrQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXlELCtEQUFPO0lBRTVELDZDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixrQ0FBa0MsQ0FBQyxVQUFVLEVBQzdDLGtDQUFrQyxDQUFDLE1BQU0sQ0FDNUMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUE7O0lBQzFDLENBQUM7NENBYlEsbUNBQW1DO0lBZXJDLHNEQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDZEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHlEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHlEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixtQ0FBbUM7UUFQL0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxNQUFNLEVBQUUsa0NBQWtDLENBQUMsVUFBVTtZQUNyRCxPQUFPLEVBQUUsa0NBQWtDLENBQUMsVUFBVTtZQUN0RCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUNBQW1DLEVBQW5DLENBQW1DLENBQUMsRUFBQyxDQUFDO1lBQ25HLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELG1DQUFtQyxDQThCL0M7SUFBRCwwQ0FBQztDQUFBLEFBOUJELENBQXlELE9BQU8sR0E4Qi9EO1NBOUJZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9ncmlkX21lbnVfR3JvdXBCeVRoaXMgfSBmcm9tICcuL0V4dC9ncmlkL21lbnUvR3JvdXBCeVRoaXMnO1xuZXhwb3J0IGNsYXNzIEV4dEdyaWRncm91cGJ5dGhpc21lbnVpdGVtTWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9tZW51X0dyb3VwQnlUaGlzIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dEdyaWRncm91cGJ5dGhpc21lbnVpdGVtTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9ncmlkX21lbnVfR3JvdXBCeVRoaXMuZ2V0UHJvcGVydGllcyhFeHRHcmlkZ3JvdXBieXRoaXNtZW51aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRHcmlkZ3JvdXBieXRoaXNtZW51aXRlbU1ldGFEYXRhLkVWRU5UUyA9IEV4dF9ncmlkX21lbnVfR3JvdXBCeVRoaXMuZ2V0RXZlbnRzKEV4dEdyaWRncm91cGJ5dGhpc21lbnVpdGVtTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0R3JpZGdyb3VwYnl0aGlzbWVudWl0ZW1NZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dEdyaWRncm91cGJ5dGhpc21lbnVpdGVtTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dEdyaWRncm91cGJ5dGhpc21lbnVpdGVtTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWdyaWRncm91cGJ5dGhpc21lbnVpdGVtJyxcbiAgaW5wdXRzOiBFeHRHcmlkZ3JvdXBieXRoaXNtZW51aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dEdyaWRncm91cGJ5dGhpc21lbnVpdGVtTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEdyaWRncm91cGJ5dGhpc21lbnVpdGVtQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0R3JpZGdyb3VwYnl0aGlzbWVudWl0ZW1Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0R3JpZGdyb3VwYnl0aGlzbWVudWl0ZW1NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0R3JpZGdyb3VwYnl0aGlzbWVudWl0ZW1NZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2dyaWRncm91cGJ5dGhpc21lbnVpdGVtJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19