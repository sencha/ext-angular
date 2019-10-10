import * as tslib_1 from "tslib";
import { Ext_grid_RowBody } from './Ext/grid/RowBody';
var ExtRowbodyMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRowbodyMetaData, _super);
    function ExtRowbodyMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtRowbodyMetaData.getAll = function () {
        ExtRowbodyMetaData.PROPERTIES = Ext_grid_RowBody.getProperties(ExtRowbodyMetaData.PROPERTIES);
        ExtRowbodyMetaData.EVENTS = Ext_grid_RowBody.getEvents(ExtRowbodyMetaData.EVENTS);
        ExtRowbodyMetaData.EVENTS.forEach(function (event) {
            ExtRowbodyMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtRowbodyMetaData.PROPERTIES = [];
    ExtRowbodyMetaData.EVENTS = [];
    ExtRowbodyMetaData.EVENTNAMES = [];
    return ExtRowbodyMetaData;
}(Ext_grid_RowBody));
export { ExtRowbodyMetaData };
(function () { ExtRowbodyMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtRowbodyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRowbodyComponent, _super);
    function ExtRowbodyComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRowbodyMetaData.PROPERTIES, ExtRowbodyMetaData.EVENTS) || this;
        _this.xtype = 'rowbody';
        return _this;
    }
    ExtRowbodyComponent_1 = ExtRowbodyComponent;
    ExtRowbodyComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRowbodyComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRowbodyComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRowbodyComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRowbodyComponent_1;
    ExtRowbodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRowbodyComponent = ExtRowbodyComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-rowbody',
            inputs: ExtRowbodyMetaData.PROPERTIES,
            outputs: ExtRowbodyMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRowbodyComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRowbodyComponent);
    return ExtRowbodyComponent;
}(EngBase));
export { ExtRowbodyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXJvd2JvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtcm93Ym9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3REO0lBQXdDLDhDQUFnQjtJQUF4RDs7SUFXQSxDQUFDO0lBUFUseUJBQU0sR0FBYjtRQUNJLGtCQUFrQixDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUYsa0JBQWtCLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRixrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUMxQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSw2QkFBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQix5QkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQiw2QkFBVSxHQUFhLEVBQUUsQ0FBQztJQVE1Qyx5QkFBQztDQUFBLEFBWEQsQ0FBd0MsZ0JBQWdCLEdBV3ZEO1NBWFksa0JBQWtCO0FBWS9CLENBQUMsY0FBYSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUF5QywrQ0FBTztJQUU1Qyw2QkFDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2Isa0JBQWtCLENBQUMsVUFBVSxFQUM3QixrQkFBa0IsQ0FBQyxNQUFNLENBQzVCLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQTs7SUFDMUIsQ0FBQzs0QkFiUSxtQkFBbUI7SUFlckIsc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sNkNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0seUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLG1CQUFtQjtRQVAvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtZQUNyQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtZQUN0QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQW1CLEVBQW5CLENBQW1CLENBQUMsRUFBQyxDQUFDO1lBQ25GLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELG1CQUFtQixDQThCL0I7SUFBRCwwQkFBQztDQUFBLEFBOUJELENBQXlDLE9BQU8sR0E4Qi9DO1NBOUJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9ncmlkX1Jvd0JvZHkgfSBmcm9tICcuL0V4dC9ncmlkL1Jvd0JvZHknO1xuZXhwb3J0IGNsYXNzIEV4dFJvd2JvZHlNZXRhRGF0YSBleHRlbmRzIEV4dF9ncmlkX1Jvd0JvZHkge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0Um93Ym9keU1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZ3JpZF9Sb3dCb2R5LmdldFByb3BlcnRpZXMoRXh0Um93Ym9keU1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRSb3dib2R5TWV0YURhdGEuRVZFTlRTID0gRXh0X2dyaWRfUm93Qm9keS5nZXRFdmVudHMoRXh0Um93Ym9keU1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFJvd2JvZHlNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFJvd2JvZHlNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0Um93Ym9keU1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1yb3dib2R5JyxcbiAgaW5wdXRzOiBFeHRSb3dib2R5TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0Um93Ym9keU1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRSb3dib2R5Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Um93Ym9keUNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRSb3dib2R5TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFJvd2JvZHlNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3Jvd2JvZHknXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=