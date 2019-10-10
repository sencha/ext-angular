import * as tslib_1 from "tslib";
import { Ext_pivot_cell_Group } from './Ext/pivot/cell/Group';
var ExtPivotgridgroupcellMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotgridgroupcellMetaData, _super);
    function ExtPivotgridgroupcellMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPivotgridgroupcellMetaData.getAll = function () {
        ExtPivotgridgroupcellMetaData.PROPERTIES = Ext_pivot_cell_Group.getProperties(ExtPivotgridgroupcellMetaData.PROPERTIES);
        ExtPivotgridgroupcellMetaData.EVENTS = Ext_pivot_cell_Group.getEvents(ExtPivotgridgroupcellMetaData.EVENTS);
        ExtPivotgridgroupcellMetaData.EVENTS.forEach(function (event) {
            ExtPivotgridgroupcellMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPivotgridgroupcellMetaData.PROPERTIES = [];
    ExtPivotgridgroupcellMetaData.EVENTS = [];
    ExtPivotgridgroupcellMetaData.EVENTNAMES = [];
    return ExtPivotgridgroupcellMetaData;
}(Ext_pivot_cell_Group));
export { ExtPivotgridgroupcellMetaData };
(function () { ExtPivotgridgroupcellMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPivotgridgroupcellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotgridgroupcellComponent, _super);
    function ExtPivotgridgroupcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPivotgridgroupcellMetaData.PROPERTIES, ExtPivotgridgroupcellMetaData.EVENTS) || this;
        _this.xtype = 'pivotgridgroupcell';
        return _this;
    }
    ExtPivotgridgroupcellComponent_1 = ExtPivotgridgroupcellComponent;
    ExtPivotgridgroupcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPivotgridgroupcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPivotgridgroupcellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPivotgridgroupcellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPivotgridgroupcellComponent_1;
    ExtPivotgridgroupcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPivotgridgroupcellComponent = ExtPivotgridgroupcellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-pivotgridgroupcell',
            inputs: ExtPivotgridgroupcellMetaData.PROPERTIES,
            outputs: ExtPivotgridgroupcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPivotgridgroupcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPivotgridgroupcellComponent);
    return ExtPivotgridgroupcellComponent;
}(EngBase));
export { ExtPivotgridgroupcellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90Z3JpZGdyb3VwY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1waXZvdGdyaWRncm91cGNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RDtJQUFtRCx5REFBb0I7SUFBdkU7O0lBV0EsQ0FBQztJQVBVLG9DQUFNLEdBQWI7UUFDSSw2QkFBNkIsQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hILDZCQUE2QixDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUcsNkJBQTZCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDckQsNkJBQTZCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsb0NBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsb0NBQUM7Q0FBQSxBQVhELENBQW1ELG9CQUFvQixHQVd0RTtTQVhZLDZCQUE2QjtBQVkxQyxDQUFDLGNBQWEsNkJBQTZCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBb0QsMERBQU87SUFFdkQsd0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDZCQUE2QixDQUFDLFVBQVUsRUFDeEMsNkJBQTZCLENBQUMsTUFBTSxDQUN2QyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQTs7SUFDckMsQ0FBQzt1Q0FiUSw4QkFBOEI7SUFlaEMsaURBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sd0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sb0RBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sb0RBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDhCQUE4QjtRQVAxQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2hELE9BQU8sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2pELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBOEIsRUFBOUIsQ0FBOEIsQ0FBQyxFQUFDLENBQUM7WUFDOUYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsOEJBQThCLENBOEIxQztJQUFELHFDQUFDO0NBQUEsQUE5QkQsQ0FBb0QsT0FBTyxHQThCMUQ7U0E5QlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3Bpdm90X2NlbGxfR3JvdXAgfSBmcm9tICcuL0V4dC9waXZvdC9jZWxsL0dyb3VwJztcbmV4cG9ydCBjbGFzcyBFeHRQaXZvdGdyaWRncm91cGNlbGxNZXRhRGF0YSBleHRlbmRzIEV4dF9waXZvdF9jZWxsX0dyb3VwIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFBpdm90Z3JpZGdyb3VwY2VsbE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfcGl2b3RfY2VsbF9Hcm91cC5nZXRQcm9wZXJ0aWVzKEV4dFBpdm90Z3JpZGdyb3VwY2VsbE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRQaXZvdGdyaWRncm91cGNlbGxNZXRhRGF0YS5FVkVOVFMgPSBFeHRfcGl2b3RfY2VsbF9Hcm91cC5nZXRFdmVudHMoRXh0UGl2b3RncmlkZ3JvdXBjZWxsTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0UGl2b3RncmlkZ3JvdXBjZWxsTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRQaXZvdGdyaWRncm91cGNlbGxNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0UGl2b3RncmlkZ3JvdXBjZWxsTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXBpdm90Z3JpZGdyb3VwY2VsbCcsXG4gIGlucHV0czogRXh0UGl2b3RncmlkZ3JvdXBjZWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0UGl2b3RncmlkZ3JvdXBjZWxsTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFBpdm90Z3JpZGdyb3VwY2VsbENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFBpdm90Z3JpZGdyb3VwY2VsbENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRQaXZvdGdyaWRncm91cGNlbGxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0UGl2b3RncmlkZ3JvdXBjZWxsTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdwaXZvdGdyaWRncm91cGNlbGwnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=