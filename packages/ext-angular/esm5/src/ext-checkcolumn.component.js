import * as tslib_1 from "tslib";
import { Ext_grid_column_Check } from './Ext/grid/column/Check';
var ExtCheckcolumnMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCheckcolumnMetaData, _super);
    function ExtCheckcolumnMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCheckcolumnMetaData.getAll = function () {
        ExtCheckcolumnMetaData.PROPERTIES = Ext_grid_column_Check.getProperties(ExtCheckcolumnMetaData.PROPERTIES);
        ExtCheckcolumnMetaData.EVENTS = Ext_grid_column_Check.getEvents(ExtCheckcolumnMetaData.EVENTS);
        ExtCheckcolumnMetaData.EVENTS.forEach(function (event) {
            ExtCheckcolumnMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCheckcolumnMetaData.PROPERTIES = [];
    ExtCheckcolumnMetaData.EVENTS = [];
    ExtCheckcolumnMetaData.EVENTNAMES = [];
    return ExtCheckcolumnMetaData;
}(Ext_grid_column_Check));
export { ExtCheckcolumnMetaData };
(function () { ExtCheckcolumnMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCheckcolumnComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCheckcolumnComponent, _super);
    function ExtCheckcolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCheckcolumnMetaData.PROPERTIES, ExtCheckcolumnMetaData.EVENTS) || this;
        _this.xtype = 'checkcolumn';
        return _this;
    }
    ExtCheckcolumnComponent_1 = ExtCheckcolumnComponent;
    ExtCheckcolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCheckcolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCheckcolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCheckcolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCheckcolumnComponent_1;
    ExtCheckcolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCheckcolumnComponent = ExtCheckcolumnComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-checkcolumn',
            inputs: ExtCheckcolumnMetaData.PROPERTIES,
            outputs: ExtCheckcolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCheckcolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCheckcolumnComponent);
    return ExtCheckcolumnComponent;
}(EngBase));
export { ExtCheckcolumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoZWNrY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNoZWNrY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEU7SUFBNEMsa0RBQXFCO0lBQWpFOztJQVdBLENBQUM7SUFQVSw2QkFBTSxHQUFiO1FBQ0ksc0JBQXNCLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRyxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9GLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzlDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLGlDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDZCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLGlDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDZCQUFDO0NBQUEsQUFYRCxDQUE0QyxxQkFBcUIsR0FXaEU7U0FYWSxzQkFBc0I7QUFZbkMsQ0FBQyxjQUFhLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTZDLG1EQUFPO0lBRWhELGlDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixzQkFBc0IsQ0FBQyxVQUFVLEVBQ2pDLHNCQUFzQixDQUFDLE1BQU0sQ0FDaEMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFBOztJQUM5QixDQUFDO2dDQWJRLHVCQUF1QjtJQWV6QiwwQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxpREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSw2Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSw2Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsdUJBQXVCO1FBUG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsTUFBTSxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDekMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztZQUN2RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCx1QkFBdUIsQ0E4Qm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTlCRCxDQUE2QyxPQUFPLEdBOEJuRDtTQTlCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZ3JpZF9jb2x1bW5fQ2hlY2sgfSBmcm9tICcuL0V4dC9ncmlkL2NvbHVtbi9DaGVjayc7XG5leHBvcnQgY2xhc3MgRXh0Q2hlY2tjb2x1bW5NZXRhRGF0YSBleHRlbmRzIEV4dF9ncmlkX2NvbHVtbl9DaGVjayB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRDaGVja2NvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZ3JpZF9jb2x1bW5fQ2hlY2suZ2V0UHJvcGVydGllcyhFeHRDaGVja2NvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDaGVja2NvbHVtbk1ldGFEYXRhLkVWRU5UUyA9IEV4dF9ncmlkX2NvbHVtbl9DaGVjay5nZXRFdmVudHMoRXh0Q2hlY2tjb2x1bW5NZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRDaGVja2NvbHVtbk1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Q2hlY2tjb2x1bW5NZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0Q2hlY2tjb2x1bW5NZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtY2hlY2tjb2x1bW4nLFxuICBpbnB1dHM6IEV4dENoZWNrY29sdW1uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0Q2hlY2tjb2x1bW5NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2hlY2tjb2x1bW5Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDaGVja2NvbHVtbkNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRDaGVja2NvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRDaGVja2NvbHVtbk1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY2hlY2tjb2x1bW4nXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=