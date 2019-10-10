import * as tslib_1 from "tslib";
import { Ext_dataview_ListItemPlaceholder } from './Ext/dataview/ListItemPlaceholder';
var ExtListitemplaceholderMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtListitemplaceholderMetaData, _super);
    function ExtListitemplaceholderMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtListitemplaceholderMetaData.getAll = function () {
        ExtListitemplaceholderMetaData.PROPERTIES = Ext_dataview_ListItemPlaceholder.getProperties(ExtListitemplaceholderMetaData.PROPERTIES);
        ExtListitemplaceholderMetaData.EVENTS = Ext_dataview_ListItemPlaceholder.getEvents(ExtListitemplaceholderMetaData.EVENTS);
        ExtListitemplaceholderMetaData.EVENTS.forEach(function (event) {
            ExtListitemplaceholderMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtListitemplaceholderMetaData.PROPERTIES = [];
    ExtListitemplaceholderMetaData.EVENTS = [];
    ExtListitemplaceholderMetaData.EVENTNAMES = [];
    return ExtListitemplaceholderMetaData;
}(Ext_dataview_ListItemPlaceholder));
export { ExtListitemplaceholderMetaData };
(function () { ExtListitemplaceholderMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtListitemplaceholderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtListitemplaceholderComponent, _super);
    function ExtListitemplaceholderComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtListitemplaceholderMetaData.PROPERTIES, ExtListitemplaceholderMetaData.EVENTS) || this;
        _this.xtype = 'listitemplaceholder';
        return _this;
    }
    ExtListitemplaceholderComponent_1 = ExtListitemplaceholderComponent;
    ExtListitemplaceholderComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtListitemplaceholderComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtListitemplaceholderComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtListitemplaceholderComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtListitemplaceholderComponent_1;
    ExtListitemplaceholderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtListitemplaceholderComponent = ExtListitemplaceholderComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-listitemplaceholder',
            inputs: ExtListitemplaceholderMetaData.PROPERTIES,
            outputs: ExtListitemplaceholderMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtListitemplaceholderComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtListitemplaceholderComponent);
    return ExtListitemplaceholderComponent;
}(EngBase));
export { ExtListitemplaceholderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWxpc3RpdGVtcGxhY2Vob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtbGlzdGl0ZW1wbGFjZWhvbGRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGO0lBQW9ELDBEQUFnQztJQUFwRjs7SUFXQSxDQUFDO0lBUFUscUNBQU0sR0FBYjtRQUNJLDhCQUE4QixDQUFDLFVBQVUsR0FBRyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEksOEJBQThCLENBQUMsTUFBTSxHQUFHLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxSCw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUN0RCw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSx5Q0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixxQ0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQix5Q0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxxQ0FBQztDQUFBLEFBWEQsQ0FBb0QsZ0NBQWdDLEdBV25GO1NBWFksOEJBQThCO0FBWTNDLENBQUMsY0FBYSw4QkFBOEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFxRCwyREFBTztJQUV4RCx5Q0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsOEJBQThCLENBQUMsVUFBVSxFQUN6Qyw4QkFBOEIsQ0FBQyxNQUFNLENBQ3hDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFBOztJQUN0QyxDQUFDO3dDQWJRLCtCQUErQjtJQWVqQyxrREFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSx5REFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxxREFBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxxREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsK0JBQStCO1FBUDNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsTUFBTSxFQUFFLDhCQUE4QixDQUFDLFVBQVU7WUFDakQsT0FBTyxFQUFFLDhCQUE4QixDQUFDLFVBQVU7WUFDbEQsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlDQUErQixFQUEvQixDQUErQixDQUFDLEVBQUMsQ0FBQztZQUMvRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCwrQkFBK0IsQ0E4QjNDO0lBQUQsc0NBQUM7Q0FBQSxBQTlCRCxDQUFxRCxPQUFPLEdBOEIzRDtTQTlCWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZGF0YXZpZXdfTGlzdEl0ZW1QbGFjZWhvbGRlciB9IGZyb20gJy4vRXh0L2RhdGF2aWV3L0xpc3RJdGVtUGxhY2Vob2xkZXInO1xuZXhwb3J0IGNsYXNzIEV4dExpc3RpdGVtcGxhY2Vob2xkZXJNZXRhRGF0YSBleHRlbmRzIEV4dF9kYXRhdmlld19MaXN0SXRlbVBsYWNlaG9sZGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dExpc3RpdGVtcGxhY2Vob2xkZXJNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2RhdGF2aWV3X0xpc3RJdGVtUGxhY2Vob2xkZXIuZ2V0UHJvcGVydGllcyhFeHRMaXN0aXRlbXBsYWNlaG9sZGVyTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dExpc3RpdGVtcGxhY2Vob2xkZXJNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZGF0YXZpZXdfTGlzdEl0ZW1QbGFjZWhvbGRlci5nZXRFdmVudHMoRXh0TGlzdGl0ZW1wbGFjZWhvbGRlck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dExpc3RpdGVtcGxhY2Vob2xkZXJNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dExpc3RpdGVtcGxhY2Vob2xkZXJNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0TGlzdGl0ZW1wbGFjZWhvbGRlck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1saXN0aXRlbXBsYWNlaG9sZGVyJyxcbiAgaW5wdXRzOiBFeHRMaXN0aXRlbXBsYWNlaG9sZGVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0TGlzdGl0ZW1wbGFjZWhvbGRlck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRMaXN0aXRlbXBsYWNlaG9sZGVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0TGlzdGl0ZW1wbGFjZWhvbGRlckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRMaXN0aXRlbXBsYWNlaG9sZGVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dExpc3RpdGVtcGxhY2Vob2xkZXJNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2xpc3RpdGVtcGxhY2Vob2xkZXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=