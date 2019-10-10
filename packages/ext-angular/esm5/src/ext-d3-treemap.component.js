import * as tslib_1 from "tslib";
import { Ext_d3_hierarchy_TreeMap } from './Ext/d3/hierarchy/TreeMap';
var ExtD3_treemapMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_treemapMetaData, _super);
    function ExtD3_treemapMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtD3_treemapMetaData.getAll = function () {
        ExtD3_treemapMetaData.PROPERTIES = Ext_d3_hierarchy_TreeMap.getProperties(ExtD3_treemapMetaData.PROPERTIES);
        ExtD3_treemapMetaData.EVENTS = Ext_d3_hierarchy_TreeMap.getEvents(ExtD3_treemapMetaData.EVENTS);
        ExtD3_treemapMetaData.EVENTS.forEach(function (event) {
            ExtD3_treemapMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtD3_treemapMetaData.PROPERTIES = [];
    ExtD3_treemapMetaData.EVENTS = [];
    ExtD3_treemapMetaData.EVENTNAMES = [];
    return ExtD3_treemapMetaData;
}(Ext_d3_hierarchy_TreeMap));
export { ExtD3_treemapMetaData };
(function () { ExtD3_treemapMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtD3_treemapComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_treemapComponent, _super);
    function ExtD3_treemapComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtD3_treemapMetaData.PROPERTIES, ExtD3_treemapMetaData.EVENTS) || this;
        _this.xtype = 'd3-treemap';
        return _this;
    }
    ExtD3_treemapComponent_1 = ExtD3_treemapComponent;
    ExtD3_treemapComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtD3_treemapComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtD3_treemapComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtD3_treemapComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtD3_treemapComponent_1;
    ExtD3_treemapComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtD3_treemapComponent = ExtD3_treemapComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-d3-treemap',
            inputs: ExtD3_treemapMetaData.PROPERTIES,
            outputs: ExtD3_treemapMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtD3_treemapComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtD3_treemapComponent);
    return ExtD3_treemapComponent;
}(EngBase));
export { ExtD3_treemapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWQzLXRyZWVtYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtZDMtdHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFO0lBQTJDLGlEQUF3QjtJQUFuRTs7SUFXQSxDQUFDO0lBUFUsNEJBQU0sR0FBYjtRQUNJLHFCQUFxQixDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUcscUJBQXFCLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUM3QyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxnQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQiw0QkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixnQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1Qyw0QkFBQztDQUFBLEFBWEQsQ0FBMkMsd0JBQXdCLEdBV2xFO1NBWFkscUJBQXFCO0FBWWxDLENBQUMsY0FBYSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUE0QyxrREFBTztJQUUvQyxnQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IscUJBQXFCLENBQUMsVUFBVSxFQUNoQyxxQkFBcUIsQ0FBQyxNQUFNLENBQy9CLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQTs7SUFDN0IsQ0FBQzsrQkFiUSxzQkFBc0I7SUFleEIseUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sZ0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sNENBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHNCQUFzQjtRQVBsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3hDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFDLENBQUM7WUFDdEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsc0JBQXNCLENBOEJsQztJQUFELDZCQUFDO0NBQUEsQUE5QkQsQ0FBNEMsT0FBTyxHQThCbEQ7U0E5Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2QzX2hpZXJhcmNoeV9UcmVlTWFwIH0gZnJvbSAnLi9FeHQvZDMvaGllcmFyY2h5L1RyZWVNYXAnO1xuZXhwb3J0IGNsYXNzIEV4dEQzX3RyZWVtYXBNZXRhRGF0YSBleHRlbmRzIEV4dF9kM19oaWVyYXJjaHlfVHJlZU1hcCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHREM190cmVlbWFwTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9kM19oaWVyYXJjaHlfVHJlZU1hcC5nZXRQcm9wZXJ0aWVzKEV4dEQzX3RyZWVtYXBNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0RDNfdHJlZW1hcE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9kM19oaWVyYXJjaHlfVHJlZU1hcC5nZXRFdmVudHMoRXh0RDNfdHJlZW1hcE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dEQzX3RyZWVtYXBNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dEQzX3RyZWVtYXBNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0RDNfdHJlZW1hcE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1kMy10cmVlbWFwJyxcbiAgaW5wdXRzOiBFeHREM190cmVlbWFwTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0RDNfdHJlZW1hcE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREM190cmVlbWFwQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RDNfdHJlZW1hcENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHREM190cmVlbWFwTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dEQzX3RyZWVtYXBNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2QzLXRyZWVtYXAnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=