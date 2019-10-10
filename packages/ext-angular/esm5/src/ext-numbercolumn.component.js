import * as tslib_1 from "tslib";
import { Ext_grid_column_Number } from './Ext/grid/column/Number';
var ExtNumbercolumnMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtNumbercolumnMetaData, _super);
    function ExtNumbercolumnMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtNumbercolumnMetaData.getAll = function () {
        ExtNumbercolumnMetaData.PROPERTIES = Ext_grid_column_Number.getProperties(ExtNumbercolumnMetaData.PROPERTIES);
        ExtNumbercolumnMetaData.EVENTS = Ext_grid_column_Number.getEvents(ExtNumbercolumnMetaData.EVENTS);
        ExtNumbercolumnMetaData.EVENTS.forEach(function (event) {
            ExtNumbercolumnMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtNumbercolumnMetaData.PROPERTIES = [];
    ExtNumbercolumnMetaData.EVENTS = [];
    ExtNumbercolumnMetaData.EVENTNAMES = [];
    return ExtNumbercolumnMetaData;
}(Ext_grid_column_Number));
export { ExtNumbercolumnMetaData };
(function () { ExtNumbercolumnMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtNumbercolumnComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtNumbercolumnComponent, _super);
    function ExtNumbercolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtNumbercolumnMetaData.PROPERTIES, ExtNumbercolumnMetaData.EVENTS) || this;
        _this.xtype = 'numbercolumn';
        return _this;
    }
    ExtNumbercolumnComponent_1 = ExtNumbercolumnComponent;
    ExtNumbercolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtNumbercolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtNumbercolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtNumbercolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtNumbercolumnComponent_1;
    ExtNumbercolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtNumbercolumnComponent = ExtNumbercolumnComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-numbercolumn',
            inputs: ExtNumbercolumnMetaData.PROPERTIES,
            outputs: ExtNumbercolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtNumbercolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtNumbercolumnComponent);
    return ExtNumbercolumnComponent;
}(EngBase));
export { ExtNumbercolumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW51bWJlcmNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1udW1iZXJjb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRTtJQUE2QyxtREFBc0I7SUFBbkU7O0lBV0EsQ0FBQztJQVBVLDhCQUFNLEdBQWI7UUFDSSx1QkFBdUIsQ0FBQyxVQUFVLEdBQUcsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlHLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDL0MsdUJBQXVCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksa0NBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsOEJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsa0NBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsOEJBQUM7Q0FBQSxBQVhELENBQTZDLHNCQUFzQixHQVdsRTtTQVhZLHVCQUF1QjtBQVlwQyxDQUFDLGNBQWEsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRXBELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBOEMsb0RBQU87SUFFakQsa0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLHVCQUF1QixDQUFDLFVBQVUsRUFDbEMsdUJBQXVCLENBQUMsTUFBTSxDQUNqQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUE7O0lBQy9CLENBQUM7aUNBYlEsd0JBQXdCO0lBZTFCLDJDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLGtEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDhDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLDhDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4Qix3QkFBd0I7UUFQcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixNQUFNLEVBQUUsdUJBQXVCLENBQUMsVUFBVTtZQUMxQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsVUFBVTtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMEJBQXdCLEVBQXhCLENBQXdCLENBQUMsRUFBQyxDQUFDO1lBQ3hGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELHdCQUF3QixDQThCcEM7SUFBRCwrQkFBQztDQUFBLEFBOUJELENBQThDLE9BQU8sR0E4QnBEO1NBOUJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9ncmlkX2NvbHVtbl9OdW1iZXIgfSBmcm9tICcuL0V4dC9ncmlkL2NvbHVtbi9OdW1iZXInO1xuZXhwb3J0IGNsYXNzIEV4dE51bWJlcmNvbHVtbk1ldGFEYXRhIGV4dGVuZHMgRXh0X2dyaWRfY29sdW1uX051bWJlciB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHROdW1iZXJjb2x1bW5NZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2dyaWRfY29sdW1uX051bWJlci5nZXRQcm9wZXJ0aWVzKEV4dE51bWJlcmNvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHROdW1iZXJjb2x1bW5NZXRhRGF0YS5FVkVOVFMgPSBFeHRfZ3JpZF9jb2x1bW5fTnVtYmVyLmdldEV2ZW50cyhFeHROdW1iZXJjb2x1bW5NZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHROdW1iZXJjb2x1bW5NZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dE51bWJlcmNvbHVtbk1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHROdW1iZXJjb2x1bW5NZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtbnVtYmVyY29sdW1uJyxcbiAgaW5wdXRzOiBFeHROdW1iZXJjb2x1bW5NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHROdW1iZXJjb2x1bW5NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0TnVtYmVyY29sdW1uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0TnVtYmVyY29sdW1uQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dE51bWJlcmNvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHROdW1iZXJjb2x1bW5NZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ251bWJlcmNvbHVtbidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==