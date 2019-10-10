import * as tslib_1 from "tslib";
import { Ext_menu_Separator } from './Ext/menu/Separator';
var ExtMenuseparatorMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtMenuseparatorMetaData, _super);
    function ExtMenuseparatorMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtMenuseparatorMetaData.getAll = function () {
        ExtMenuseparatorMetaData.PROPERTIES = Ext_menu_Separator.getProperties(ExtMenuseparatorMetaData.PROPERTIES);
        ExtMenuseparatorMetaData.EVENTS = Ext_menu_Separator.getEvents(ExtMenuseparatorMetaData.EVENTS);
        ExtMenuseparatorMetaData.EVENTS.forEach(function (event) {
            ExtMenuseparatorMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtMenuseparatorMetaData.PROPERTIES = [];
    ExtMenuseparatorMetaData.EVENTS = [];
    ExtMenuseparatorMetaData.EVENTNAMES = [];
    return ExtMenuseparatorMetaData;
}(Ext_menu_Separator));
export { ExtMenuseparatorMetaData };
(function () { ExtMenuseparatorMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtMenuseparatorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtMenuseparatorComponent, _super);
    function ExtMenuseparatorComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtMenuseparatorMetaData.PROPERTIES, ExtMenuseparatorMetaData.EVENTS) || this;
        _this.xtype = 'menuseparator';
        return _this;
    }
    ExtMenuseparatorComponent_1 = ExtMenuseparatorComponent;
    ExtMenuseparatorComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtMenuseparatorComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtMenuseparatorComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtMenuseparatorComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtMenuseparatorComponent_1;
    ExtMenuseparatorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtMenuseparatorComponent = ExtMenuseparatorComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-menuseparator',
            inputs: ExtMenuseparatorMetaData.PROPERTIES,
            outputs: ExtMenuseparatorMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtMenuseparatorComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtMenuseparatorComponent);
    return ExtMenuseparatorComponent;
}(EngBase));
export { ExtMenuseparatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW1lbnVzZXBhcmF0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtbWVudXNlcGFyYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFEO0lBQThDLG9EQUFrQjtJQUFoRTs7SUFXQSxDQUFDO0lBUFUsK0JBQU0sR0FBYjtRQUNJLHdCQUF3QixDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUcsd0JBQXdCLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNoRCx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxtQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQiwrQkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixtQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QywrQkFBQztDQUFBLEFBWEQsQ0FBOEMsa0JBQWtCLEdBVy9EO1NBWFksd0JBQXdCO0FBWXJDLENBQUMsY0FBYSx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUErQyxxREFBTztJQUVsRCxtQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2Isd0JBQXdCLENBQUMsVUFBVSxFQUNuQyx3QkFBd0IsQ0FBQyxNQUFNLENBQ2xDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQTs7SUFDaEMsQ0FBQztrQ0FiUSx5QkFBeUI7SUFlM0IsNENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sbURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sK0NBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sK0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHlCQUF5QjtRQVByQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwyQkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFDLENBQUM7WUFDekYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQseUJBQXlCLENBOEJyQztJQUFELGdDQUFDO0NBQUEsQUE5QkQsQ0FBK0MsT0FBTyxHQThCckQ7U0E5QlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X21lbnVfU2VwYXJhdG9yIH0gZnJvbSAnLi9FeHQvbWVudS9TZXBhcmF0b3InO1xuZXhwb3J0IGNsYXNzIEV4dE1lbnVzZXBhcmF0b3JNZXRhRGF0YSBleHRlbmRzIEV4dF9tZW51X1NlcGFyYXRvciB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRNZW51c2VwYXJhdG9yTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9tZW51X1NlcGFyYXRvci5nZXRQcm9wZXJ0aWVzKEV4dE1lbnVzZXBhcmF0b3JNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0TWVudXNlcGFyYXRvck1ldGFEYXRhLkVWRU5UUyA9IEV4dF9tZW51X1NlcGFyYXRvci5nZXRFdmVudHMoRXh0TWVudXNlcGFyYXRvck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dE1lbnVzZXBhcmF0b3JNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dE1lbnVzZXBhcmF0b3JNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0TWVudXNlcGFyYXRvck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1tZW51c2VwYXJhdG9yJyxcbiAgaW5wdXRzOiBFeHRNZW51c2VwYXJhdG9yTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0TWVudXNlcGFyYXRvck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRNZW51c2VwYXJhdG9yQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0TWVudXNlcGFyYXRvckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRNZW51c2VwYXJhdG9yTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dE1lbnVzZXBhcmF0b3JNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ21lbnVzZXBhcmF0b3InXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=