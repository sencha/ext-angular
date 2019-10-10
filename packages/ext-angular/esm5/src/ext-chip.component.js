import * as tslib_1 from "tslib";
import { Ext_Chip } from './Ext/Chip';
var ExtChipMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtChipMetaData, _super);
    function ExtChipMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtChipMetaData.getAll = function () {
        ExtChipMetaData.PROPERTIES = Ext_Chip.getProperties(ExtChipMetaData.PROPERTIES);
        ExtChipMetaData.EVENTS = Ext_Chip.getEvents(ExtChipMetaData.EVENTS);
        ExtChipMetaData.EVENTS.forEach(function (event) {
            ExtChipMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtChipMetaData.PROPERTIES = [];
    ExtChipMetaData.EVENTS = [];
    ExtChipMetaData.EVENTNAMES = [];
    return ExtChipMetaData;
}(Ext_Chip));
export { ExtChipMetaData };
(function () { ExtChipMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtChipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtChipComponent, _super);
    function ExtChipComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtChipMetaData.PROPERTIES, ExtChipMetaData.EVENTS) || this;
        _this.xtype = 'chip';
        return _this;
    }
    ExtChipComponent_1 = ExtChipComponent;
    ExtChipComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtChipComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtChipComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtChipComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtChipComponent_1;
    ExtChipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtChipComponent = ExtChipComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-chip',
            inputs: ExtChipMetaData.PROPERTIES,
            outputs: ExtChipMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtChipComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtChipComponent);
    return ExtChipComponent;
}(EngBase));
export { ExtChipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEM7SUFBcUMsMkNBQVE7SUFBN0M7O0lBV0EsQ0FBQztJQVBVLHNCQUFNLEdBQWI7UUFDSSxlQUFlLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hGLGVBQWUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3ZDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSwwQkFBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixzQkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQiwwQkFBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxzQkFBQztDQUFBLEFBWEQsQ0FBcUMsUUFBUSxHQVc1QztTQVhZLGVBQWU7QUFZNUIsQ0FBQyxjQUFhLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFzQyw0Q0FBTztJQUV6QywwQkFDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsZUFBZSxDQUFDLFVBQVUsRUFDMUIsZUFBZSxDQUFDLE1BQU0sQ0FDekIsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBOztJQUN2QixDQUFDO3lCQWJRLGdCQUFnQjtJQWVsQixtQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxzQ0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxzQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsZ0JBQWdCO1FBUDVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxlQUFlLENBQUMsVUFBVTtZQUNsQyxPQUFPLEVBQUUsZUFBZSxDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFnQixFQUFoQixDQUFnQixDQUFDLEVBQUMsQ0FBQztZQUNoRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxnQkFBZ0IsQ0E4QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTlCRCxDQUFzQyxPQUFPLEdBOEI1QztTQTlCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfQ2hpcCB9IGZyb20gJy4vRXh0L0NoaXAnO1xuZXhwb3J0IGNsYXNzIEV4dENoaXBNZXRhRGF0YSBleHRlbmRzIEV4dF9DaGlwIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENoaXBNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X0NoaXAuZ2V0UHJvcGVydGllcyhFeHRDaGlwTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dENoaXBNZXRhRGF0YS5FVkVOVFMgPSBFeHRfQ2hpcC5nZXRFdmVudHMoRXh0Q2hpcE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dENoaXBNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dENoaXBNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0Q2hpcE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1jaGlwJyxcbiAgaW5wdXRzOiBFeHRDaGlwTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0Q2hpcE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDaGlwQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2hpcENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRDaGlwTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dENoaXBNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2NoaXAnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=