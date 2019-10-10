import * as tslib_1 from "tslib";
import { Ext_pivot_plugin_configurator_Column } from './Ext/pivot/plugin/configurator/Column';
var ExtPivotconfigfieldMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotconfigfieldMetaData, _super);
    function ExtPivotconfigfieldMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPivotconfigfieldMetaData.getAll = function () {
        ExtPivotconfigfieldMetaData.PROPERTIES = Ext_pivot_plugin_configurator_Column.getProperties(ExtPivotconfigfieldMetaData.PROPERTIES);
        ExtPivotconfigfieldMetaData.EVENTS = Ext_pivot_plugin_configurator_Column.getEvents(ExtPivotconfigfieldMetaData.EVENTS);
        ExtPivotconfigfieldMetaData.EVENTS.forEach(function (event) {
            ExtPivotconfigfieldMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPivotconfigfieldMetaData.PROPERTIES = [];
    ExtPivotconfigfieldMetaData.EVENTS = [];
    ExtPivotconfigfieldMetaData.EVENTNAMES = [];
    return ExtPivotconfigfieldMetaData;
}(Ext_pivot_plugin_configurator_Column));
export { ExtPivotconfigfieldMetaData };
(function () { ExtPivotconfigfieldMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPivotconfigfieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotconfigfieldComponent, _super);
    function ExtPivotconfigfieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPivotconfigfieldMetaData.PROPERTIES, ExtPivotconfigfieldMetaData.EVENTS) || this;
        _this.xtype = 'pivotconfigfield';
        return _this;
    }
    ExtPivotconfigfieldComponent_1 = ExtPivotconfigfieldComponent;
    ExtPivotconfigfieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPivotconfigfieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPivotconfigfieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPivotconfigfieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPivotconfigfieldComponent_1;
    ExtPivotconfigfieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPivotconfigfieldComponent = ExtPivotconfigfieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-pivotconfigfield',
            inputs: ExtPivotconfigfieldMetaData.PROPERTIES,
            outputs: ExtPivotconfigfieldMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPivotconfigfieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPivotconfigfieldComponent);
    return ExtPivotconfigfieldComponent;
}(EngBase));
export { ExtPivotconfigfieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90Y29uZmlnZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtcGl2b3Rjb25maWdmaWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGO0lBQWlELHVEQUFvQztJQUFyRjs7SUFXQSxDQUFDO0lBUFUsa0NBQU0sR0FBYjtRQUNJLDJCQUEyQixDQUFDLFVBQVUsR0FBRyxvQ0FBb0MsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEksMkJBQTJCLENBQUMsTUFBTSxHQUFHLG9DQUFvQyxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4SCwyQkFBMkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNuRCwyQkFBMkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixrQ0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxrQ0FBQztDQUFBLEFBWEQsQ0FBaUQsb0NBQW9DLEdBV3BGO1NBWFksMkJBQTJCO0FBWXhDLENBQUMsY0FBYSwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFrRCx3REFBTztJQUVyRCxzQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsMkJBQTJCLENBQUMsVUFBVSxFQUN0QywyQkFBMkIsQ0FBQyxNQUFNLENBQ3JDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFBOztJQUNuQyxDQUFDO3FDQWJRLDRCQUE0QjtJQWU5QiwrQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxzREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxrREFBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxrREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsNEJBQTRCO1FBUHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsTUFBTSxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDOUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDL0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDhCQUE0QixFQUE1QixDQUE0QixDQUFDLEVBQUMsQ0FBQztZQUM1RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCw0QkFBNEIsQ0E4QnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTlCRCxDQUFrRCxPQUFPLEdBOEJ4RDtTQTlCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfcGl2b3RfcGx1Z2luX2NvbmZpZ3VyYXRvcl9Db2x1bW4gfSBmcm9tICcuL0V4dC9waXZvdC9wbHVnaW4vY29uZmlndXJhdG9yL0NvbHVtbic7XG5leHBvcnQgY2xhc3MgRXh0UGl2b3Rjb25maWdmaWVsZE1ldGFEYXRhIGV4dGVuZHMgRXh0X3Bpdm90X3BsdWdpbl9jb25maWd1cmF0b3JfQ29sdW1uIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFBpdm90Y29uZmlnZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X3Bpdm90X3BsdWdpbl9jb25maWd1cmF0b3JfQ29sdW1uLmdldFByb3BlcnRpZXMoRXh0UGl2b3Rjb25maWdmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRQaXZvdGNvbmZpZ2ZpZWxkTWV0YURhdGEuRVZFTlRTID0gRXh0X3Bpdm90X3BsdWdpbl9jb25maWd1cmF0b3JfQ29sdW1uLmdldEV2ZW50cyhFeHRQaXZvdGNvbmZpZ2ZpZWxkTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0UGl2b3Rjb25maWdmaWVsZE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0UGl2b3Rjb25maWdmaWVsZE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRQaXZvdGNvbmZpZ2ZpZWxkTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXBpdm90Y29uZmlnZmllbGQnLFxuICBpbnB1dHM6IEV4dFBpdm90Y29uZmlnZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRQaXZvdGNvbmZpZ2ZpZWxkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFBpdm90Y29uZmlnZmllbGRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRQaXZvdGNvbmZpZ2ZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dFBpdm90Y29uZmlnZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0UGl2b3Rjb25maWdmaWVsZE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAncGl2b3Rjb25maWdmaWVsZCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==