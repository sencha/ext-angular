import * as tslib_1 from "tslib";
import { Ext_pivot_cell_Cell } from './Ext/pivot/cell/Cell';
var ExtPivotgridcellMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotgridcellMetaData, _super);
    function ExtPivotgridcellMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPivotgridcellMetaData.getAll = function () {
        ExtPivotgridcellMetaData.PROPERTIES = Ext_pivot_cell_Cell.getProperties(ExtPivotgridcellMetaData.PROPERTIES);
        ExtPivotgridcellMetaData.EVENTS = Ext_pivot_cell_Cell.getEvents(ExtPivotgridcellMetaData.EVENTS);
        ExtPivotgridcellMetaData.EVENTS.forEach(function (event) {
            ExtPivotgridcellMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPivotgridcellMetaData.PROPERTIES = [];
    ExtPivotgridcellMetaData.EVENTS = [];
    ExtPivotgridcellMetaData.EVENTNAMES = [];
    return ExtPivotgridcellMetaData;
}(Ext_pivot_cell_Cell));
export { ExtPivotgridcellMetaData };
(function () { ExtPivotgridcellMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPivotgridcellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotgridcellComponent, _super);
    function ExtPivotgridcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPivotgridcellMetaData.PROPERTIES, ExtPivotgridcellMetaData.EVENTS) || this;
        _this.xtype = 'pivotgridcell';
        return _this;
    }
    ExtPivotgridcellComponent_1 = ExtPivotgridcellComponent;
    ExtPivotgridcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPivotgridcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPivotgridcellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPivotgridcellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPivotgridcellComponent_1;
    ExtPivotgridcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPivotgridcellComponent = ExtPivotgridcellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-pivotgridcell',
            inputs: ExtPivotgridcellMetaData.PROPERTIES,
            outputs: ExtPivotgridcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPivotgridcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPivotgridcellComponent);
    return ExtPivotgridcellComponent;
}(EngBase));
export { ExtPivotgridcellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90Z3JpZGNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtcGl2b3RncmlkY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVEO0lBQThDLG9EQUFtQjtJQUFqRTs7SUFXQSxDQUFDO0lBUFUsK0JBQU0sR0FBYjtRQUNJLHdCQUF3QixDQUFDLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0csd0JBQXdCLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNoRCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxtQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQiwrQkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixtQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QywrQkFBQztDQUFBLEFBWEQsQ0FBOEMsbUJBQW1CLEdBV2hFO1NBWFksd0JBQXdCO0FBWXJDLENBQUMsY0FBYSx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUErQyxxREFBTztJQUVsRCxtQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2Isd0JBQXdCLENBQUMsVUFBVSxFQUNuQyx3QkFBd0IsQ0FBQyxNQUFNLENBQ2xDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQTs7SUFDaEMsQ0FBQztrQ0FiUSx5QkFBeUI7SUFlM0IsNENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sbURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sK0NBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sK0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHlCQUF5QjtRQVByQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwyQkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFDLENBQUM7WUFDekYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQseUJBQXlCLENBOEJyQztJQUFELGdDQUFDO0NBQUEsQUE5QkQsQ0FBK0MsT0FBTyxHQThCckQ7U0E5QlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3Bpdm90X2NlbGxfQ2VsbCB9IGZyb20gJy4vRXh0L3Bpdm90L2NlbGwvQ2VsbCc7XG5leHBvcnQgY2xhc3MgRXh0UGl2b3RncmlkY2VsbE1ldGFEYXRhIGV4dGVuZHMgRXh0X3Bpdm90X2NlbGxfQ2VsbCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRQaXZvdGdyaWRjZWxsTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9waXZvdF9jZWxsX0NlbGwuZ2V0UHJvcGVydGllcyhFeHRQaXZvdGdyaWRjZWxsTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFBpdm90Z3JpZGNlbGxNZXRhRGF0YS5FVkVOVFMgPSBFeHRfcGl2b3RfY2VsbF9DZWxsLmdldEV2ZW50cyhFeHRQaXZvdGdyaWRjZWxsTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0UGl2b3RncmlkY2VsbE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0UGl2b3RncmlkY2VsbE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRQaXZvdGdyaWRjZWxsTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXBpdm90Z3JpZGNlbGwnLFxuICBpbnB1dHM6IEV4dFBpdm90Z3JpZGNlbGxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRQaXZvdGdyaWRjZWxsTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFBpdm90Z3JpZGNlbGxDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRQaXZvdGdyaWRjZWxsQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dFBpdm90Z3JpZGNlbGxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0UGl2b3RncmlkY2VsbE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAncGl2b3RncmlkY2VsbCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==