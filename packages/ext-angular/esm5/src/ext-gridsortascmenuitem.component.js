import * as tslib_1 from "tslib";
import { Ext_grid_menu_SortAsc } from './Ext/grid/menu/SortAsc';
var ExtGridsortascmenuitemMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridsortascmenuitemMetaData, _super);
    function ExtGridsortascmenuitemMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtGridsortascmenuitemMetaData.getAll = function () {
        ExtGridsortascmenuitemMetaData.PROPERTIES = Ext_grid_menu_SortAsc.getProperties(ExtGridsortascmenuitemMetaData.PROPERTIES);
        ExtGridsortascmenuitemMetaData.EVENTS = Ext_grid_menu_SortAsc.getEvents(ExtGridsortascmenuitemMetaData.EVENTS);
        ExtGridsortascmenuitemMetaData.EVENTS.forEach(function (event) {
            ExtGridsortascmenuitemMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtGridsortascmenuitemMetaData.PROPERTIES = [];
    ExtGridsortascmenuitemMetaData.EVENTS = [];
    ExtGridsortascmenuitemMetaData.EVENTNAMES = [];
    return ExtGridsortascmenuitemMetaData;
}(Ext_grid_menu_SortAsc));
export { ExtGridsortascmenuitemMetaData };
(function () { ExtGridsortascmenuitemMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtGridsortascmenuitemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridsortascmenuitemComponent, _super);
    function ExtGridsortascmenuitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridsortascmenuitemMetaData.PROPERTIES, ExtGridsortascmenuitemMetaData.EVENTS) || this;
        _this.xtype = 'gridsortascmenuitem';
        return _this;
    }
    ExtGridsortascmenuitemComponent_1 = ExtGridsortascmenuitemComponent;
    ExtGridsortascmenuitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridsortascmenuitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridsortascmenuitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridsortascmenuitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridsortascmenuitemComponent_1;
    ExtGridsortascmenuitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridsortascmenuitemComponent = ExtGridsortascmenuitemComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-gridsortascmenuitem',
            inputs: ExtGridsortascmenuitemMetaData.PROPERTIES,
            outputs: ExtGridsortascmenuitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridsortascmenuitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridsortascmenuitemComponent);
    return ExtGridsortascmenuitemComponent;
}(EngBase));
export { ExtGridsortascmenuitemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWdyaWRzb3J0YXNjbWVudWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtZ3JpZHNvcnRhc2NtZW51aXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFO0lBQW9ELDBEQUFxQjtJQUF6RTs7SUFXQSxDQUFDO0lBUFUscUNBQU0sR0FBYjtRQUNJLDhCQUE4QixDQUFDLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0gsOEJBQThCLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUN0RCw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSx5Q0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixxQ0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQix5Q0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxxQ0FBQztDQUFBLEFBWEQsQ0FBb0QscUJBQXFCLEdBV3hFO1NBWFksOEJBQThCO0FBWTNDLENBQUMsY0FBYSw4QkFBOEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFxRCwyREFBTztJQUV4RCx5Q0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsOEJBQThCLENBQUMsVUFBVSxFQUN6Qyw4QkFBOEIsQ0FBQyxNQUFNLENBQ3hDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFBOztJQUN0QyxDQUFDO3dDQWJRLCtCQUErQjtJQWVqQyxrREFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSx5REFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxxREFBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxxREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsK0JBQStCO1FBUDNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsTUFBTSxFQUFFLDhCQUE4QixDQUFDLFVBQVU7WUFDakQsT0FBTyxFQUFFLDhCQUE4QixDQUFDLFVBQVU7WUFDbEQsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlDQUErQixFQUEvQixDQUErQixDQUFDLEVBQUMsQ0FBQztZQUMvRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCwrQkFBK0IsQ0E4QjNDO0lBQUQsc0NBQUM7Q0FBQSxBQTlCRCxDQUFxRCxPQUFPLEdBOEIzRDtTQTlCWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZ3JpZF9tZW51X1NvcnRBc2MgfSBmcm9tICcuL0V4dC9ncmlkL21lbnUvU29ydEFzYyc7XG5leHBvcnQgY2xhc3MgRXh0R3JpZHNvcnRhc2NtZW51aXRlbU1ldGFEYXRhIGV4dGVuZHMgRXh0X2dyaWRfbWVudV9Tb3J0QXNjIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dEdyaWRzb3J0YXNjbWVudWl0ZW1NZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2dyaWRfbWVudV9Tb3J0QXNjLmdldFByb3BlcnRpZXMoRXh0R3JpZHNvcnRhc2NtZW51aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRHcmlkc29ydGFzY21lbnVpdGVtTWV0YURhdGEuRVZFTlRTID0gRXh0X2dyaWRfbWVudV9Tb3J0QXNjLmdldEV2ZW50cyhFeHRHcmlkc29ydGFzY21lbnVpdGVtTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0R3JpZHNvcnRhc2NtZW51aXRlbU1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0R3JpZHNvcnRhc2NtZW51aXRlbU1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRHcmlkc29ydGFzY21lbnVpdGVtTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWdyaWRzb3J0YXNjbWVudWl0ZW0nLFxuICBpbnB1dHM6IEV4dEdyaWRzb3J0YXNjbWVudWl0ZW1NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRHcmlkc29ydGFzY21lbnVpdGVtTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEdyaWRzb3J0YXNjbWVudWl0ZW1Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRHcmlkc29ydGFzY21lbnVpdGVtQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dEdyaWRzb3J0YXNjbWVudWl0ZW1NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0R3JpZHNvcnRhc2NtZW51aXRlbU1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnZ3JpZHNvcnRhc2NtZW51aXRlbSdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==