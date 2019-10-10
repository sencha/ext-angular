import * as tslib_1 from "tslib";
import { Ext_grid_menu_SortDesc } from './Ext/grid/menu/SortDesc';
var ExtGridsortdescmenuitemMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridsortdescmenuitemMetaData, _super);
    function ExtGridsortdescmenuitemMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtGridsortdescmenuitemMetaData.getAll = function () {
        ExtGridsortdescmenuitemMetaData.PROPERTIES = Ext_grid_menu_SortDesc.getProperties(ExtGridsortdescmenuitemMetaData.PROPERTIES);
        ExtGridsortdescmenuitemMetaData.EVENTS = Ext_grid_menu_SortDesc.getEvents(ExtGridsortdescmenuitemMetaData.EVENTS);
        ExtGridsortdescmenuitemMetaData.EVENTS.forEach(function (event) {
            ExtGridsortdescmenuitemMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtGridsortdescmenuitemMetaData.PROPERTIES = [];
    ExtGridsortdescmenuitemMetaData.EVENTS = [];
    ExtGridsortdescmenuitemMetaData.EVENTNAMES = [];
    return ExtGridsortdescmenuitemMetaData;
}(Ext_grid_menu_SortDesc));
export { ExtGridsortdescmenuitemMetaData };
(function () { ExtGridsortdescmenuitemMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtGridsortdescmenuitemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridsortdescmenuitemComponent, _super);
    function ExtGridsortdescmenuitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridsortdescmenuitemMetaData.PROPERTIES, ExtGridsortdescmenuitemMetaData.EVENTS) || this;
        _this.xtype = 'gridsortdescmenuitem';
        return _this;
    }
    ExtGridsortdescmenuitemComponent_1 = ExtGridsortdescmenuitemComponent;
    ExtGridsortdescmenuitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridsortdescmenuitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridsortdescmenuitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridsortdescmenuitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridsortdescmenuitemComponent_1;
    ExtGridsortdescmenuitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridsortdescmenuitemComponent = ExtGridsortdescmenuitemComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-gridsortdescmenuitem',
            inputs: ExtGridsortdescmenuitemMetaData.PROPERTIES,
            outputs: ExtGridsortdescmenuitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridsortdescmenuitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridsortdescmenuitemComponent);
    return ExtGridsortdescmenuitemComponent;
}(EngBase));
export { ExtGridsortdescmenuitemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWdyaWRzb3J0ZGVzY21lbnVpdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWdyaWRzb3J0ZGVzY21lbnVpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEU7SUFBcUQsMkRBQXNCO0lBQTNFOztJQVdBLENBQUM7SUFQVSxzQ0FBTSxHQUFiO1FBQ0ksK0JBQStCLENBQUMsVUFBVSxHQUFHLHNCQUFzQixDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5SCwrQkFBK0IsQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDLCtCQUErQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xILCtCQUErQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3ZELCtCQUErQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDBDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHNDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDBDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHNDQUFDO0NBQUEsQUFYRCxDQUFxRCxzQkFBc0IsR0FXMUU7U0FYWSwrQkFBK0I7QUFZNUMsQ0FBQyxjQUFhLCtCQUErQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXNELDREQUFPO0lBRXpELDBDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYiwrQkFBK0IsQ0FBQyxVQUFVLEVBQzFDLCtCQUErQixDQUFDLE1BQU0sQ0FDekMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUE7O0lBQ3ZDLENBQUM7eUNBYlEsZ0NBQWdDO0lBZWxDLG1EQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDBEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHNEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHNEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixnQ0FBZ0M7UUFQNUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxNQUFNLEVBQUUsK0JBQStCLENBQUMsVUFBVTtZQUNsRCxPQUFPLEVBQUUsK0JBQStCLENBQUMsVUFBVTtZQUNuRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0NBQWdDLEVBQWhDLENBQWdDLENBQUMsRUFBQyxDQUFDO1lBQ2hHLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELGdDQUFnQyxDQThCNUM7SUFBRCx1Q0FBQztDQUFBLEFBOUJELENBQXNELE9BQU8sR0E4QjVEO1NBOUJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9ncmlkX21lbnVfU29ydERlc2MgfSBmcm9tICcuL0V4dC9ncmlkL21lbnUvU29ydERlc2MnO1xuZXhwb3J0IGNsYXNzIEV4dEdyaWRzb3J0ZGVzY21lbnVpdGVtTWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9tZW51X1NvcnREZXNjIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dEdyaWRzb3J0ZGVzY21lbnVpdGVtTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9ncmlkX21lbnVfU29ydERlc2MuZ2V0UHJvcGVydGllcyhFeHRHcmlkc29ydGRlc2NtZW51aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRHcmlkc29ydGRlc2NtZW51aXRlbU1ldGFEYXRhLkVWRU5UUyA9IEV4dF9ncmlkX21lbnVfU29ydERlc2MuZ2V0RXZlbnRzKEV4dEdyaWRzb3J0ZGVzY21lbnVpdGVtTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0R3JpZHNvcnRkZXNjbWVudWl0ZW1NZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dEdyaWRzb3J0ZGVzY21lbnVpdGVtTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dEdyaWRzb3J0ZGVzY21lbnVpdGVtTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWdyaWRzb3J0ZGVzY21lbnVpdGVtJyxcbiAgaW5wdXRzOiBFeHRHcmlkc29ydGRlc2NtZW51aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dEdyaWRzb3J0ZGVzY21lbnVpdGVtTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEdyaWRzb3J0ZGVzY21lbnVpdGVtQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0R3JpZHNvcnRkZXNjbWVudWl0ZW1Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0R3JpZHNvcnRkZXNjbWVudWl0ZW1NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0R3JpZHNvcnRkZXNjbWVudWl0ZW1NZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2dyaWRzb3J0ZGVzY21lbnVpdGVtJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19