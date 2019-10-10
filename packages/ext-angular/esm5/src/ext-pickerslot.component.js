import * as tslib_1 from "tslib";
import { Ext_picker_Slot } from './Ext/picker/Slot';
var ExtPickerslotMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPickerslotMetaData, _super);
    function ExtPickerslotMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPickerslotMetaData.getAll = function () {
        ExtPickerslotMetaData.PROPERTIES = Ext_picker_Slot.getProperties(ExtPickerslotMetaData.PROPERTIES);
        ExtPickerslotMetaData.EVENTS = Ext_picker_Slot.getEvents(ExtPickerslotMetaData.EVENTS);
        ExtPickerslotMetaData.EVENTS.forEach(function (event) {
            ExtPickerslotMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPickerslotMetaData.PROPERTIES = [];
    ExtPickerslotMetaData.EVENTS = [];
    ExtPickerslotMetaData.EVENTNAMES = [];
    return ExtPickerslotMetaData;
}(Ext_picker_Slot));
export { ExtPickerslotMetaData };
(function () { ExtPickerslotMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPickerslotComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPickerslotComponent, _super);
    function ExtPickerslotComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPickerslotMetaData.PROPERTIES, ExtPickerslotMetaData.EVENTS) || this;
        _this.xtype = 'pickerslot';
        return _this;
    }
    ExtPickerslotComponent_1 = ExtPickerslotComponent;
    ExtPickerslotComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPickerslotComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPickerslotComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPickerslotComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPickerslotComponent_1;
    ExtPickerslotComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPickerslotComponent = ExtPickerslotComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-pickerslot',
            inputs: ExtPickerslotMetaData.PROPERTIES,
            outputs: ExtPickerslotMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPickerslotComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPickerslotComponent);
    return ExtPickerslotComponent;
}(EngBase));
export { ExtPickerslotComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpY2tlcnNsb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtcGlja2Vyc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRDtJQUEyQyxpREFBZTtJQUExRDs7SUFXQSxDQUFDO0lBUFUsNEJBQU0sR0FBYjtRQUNJLHFCQUFxQixDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25HLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZGLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzdDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLGdDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDRCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLGdDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDRCQUFDO0NBQUEsQUFYRCxDQUEyQyxlQUFlLEdBV3pEO1NBWFkscUJBQXFCO0FBWWxDLENBQUMsY0FBYSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUE0QyxrREFBTztJQUUvQyxnQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IscUJBQXFCLENBQUMsVUFBVSxFQUNoQyxxQkFBcUIsQ0FBQyxNQUFNLENBQy9CLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQTs7SUFDN0IsQ0FBQzsrQkFiUSxzQkFBc0I7SUFleEIseUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sZ0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sNENBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHNCQUFzQjtRQVBsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3hDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFDLENBQUM7WUFDdEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsc0JBQXNCLENBOEJsQztJQUFELDZCQUFDO0NBQUEsQUE5QkQsQ0FBNEMsT0FBTyxHQThCbEQ7U0E5Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3BpY2tlcl9TbG90IH0gZnJvbSAnLi9FeHQvcGlja2VyL1Nsb3QnO1xuZXhwb3J0IGNsYXNzIEV4dFBpY2tlcnNsb3RNZXRhRGF0YSBleHRlbmRzIEV4dF9waWNrZXJfU2xvdCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRQaWNrZXJzbG90TWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9waWNrZXJfU2xvdC5nZXRQcm9wZXJ0aWVzKEV4dFBpY2tlcnNsb3RNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0UGlja2Vyc2xvdE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9waWNrZXJfU2xvdC5nZXRFdmVudHMoRXh0UGlja2Vyc2xvdE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFBpY2tlcnNsb3RNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFBpY2tlcnNsb3RNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0UGlja2Vyc2xvdE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1waWNrZXJzbG90JyxcbiAgaW5wdXRzOiBFeHRQaWNrZXJzbG90TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0UGlja2Vyc2xvdE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaWNrZXJzbG90Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGlja2Vyc2xvdENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRQaWNrZXJzbG90TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFBpY2tlcnNsb3RNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3BpY2tlcnNsb3QnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=