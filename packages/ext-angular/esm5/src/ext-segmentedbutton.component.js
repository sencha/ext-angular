import * as tslib_1 from "tslib";
import { Ext_button_Segmented } from './Ext/button/Segmented';
var ExtSegmentedbuttonMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSegmentedbuttonMetaData, _super);
    function ExtSegmentedbuttonMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtSegmentedbuttonMetaData.getAll = function () {
        ExtSegmentedbuttonMetaData.PROPERTIES = Ext_button_Segmented.getProperties(ExtSegmentedbuttonMetaData.PROPERTIES);
        ExtSegmentedbuttonMetaData.EVENTS = Ext_button_Segmented.getEvents(ExtSegmentedbuttonMetaData.EVENTS);
        ExtSegmentedbuttonMetaData.EVENTS.forEach(function (event) {
            ExtSegmentedbuttonMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtSegmentedbuttonMetaData.PROPERTIES = [];
    ExtSegmentedbuttonMetaData.EVENTS = [];
    ExtSegmentedbuttonMetaData.EVENTNAMES = [];
    return ExtSegmentedbuttonMetaData;
}(Ext_button_Segmented));
export { ExtSegmentedbuttonMetaData };
(function () { ExtSegmentedbuttonMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtSegmentedbuttonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSegmentedbuttonComponent, _super);
    function ExtSegmentedbuttonComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtSegmentedbuttonMetaData.PROPERTIES, ExtSegmentedbuttonMetaData.EVENTS) || this;
        _this.xtype = 'segmentedbutton';
        return _this;
    }
    ExtSegmentedbuttonComponent_1 = ExtSegmentedbuttonComponent;
    ExtSegmentedbuttonComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSegmentedbuttonComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSegmentedbuttonComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSegmentedbuttonComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSegmentedbuttonComponent_1;
    ExtSegmentedbuttonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtSegmentedbuttonComponent = ExtSegmentedbuttonComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-segmentedbutton',
            inputs: ExtSegmentedbuttonMetaData.PROPERTIES,
            outputs: ExtSegmentedbuttonMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSegmentedbuttonComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtSegmentedbuttonComponent);
    return ExtSegmentedbuttonComponent;
}(EngBase));
export { ExtSegmentedbuttonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNlZ21lbnRlZGJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1zZWdtZW50ZWRidXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RDtJQUFnRCxzREFBb0I7SUFBcEU7O0lBV0EsQ0FBQztJQVBVLGlDQUFNLEdBQWI7UUFDSSwwQkFBMEIsQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xILDBCQUEwQixDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDbEQsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFkscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsaUNBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsaUNBQUM7Q0FBQSxBQVhELENBQWdELG9CQUFvQixHQVduRTtTQVhZLDBCQUEwQjtBQVl2QyxDQUFDLGNBQWEsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBaUQsdURBQU87SUFFcEQscUNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDBCQUEwQixDQUFDLFVBQVUsRUFDckMsMEJBQTBCLENBQUMsTUFBTSxDQUNwQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTs7SUFDbEMsQ0FBQztvQ0FiUSwyQkFBMkI7SUFlN0IsOENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0scURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0saURBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0saURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDJCQUEyQjtRQVB2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzdDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBMkIsRUFBM0IsQ0FBMkIsQ0FBQyxFQUFDLENBQUM7WUFDM0YsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsMkJBQTJCLENBOEJ2QztJQUFELGtDQUFDO0NBQUEsQUE5QkQsQ0FBaUQsT0FBTyxHQThCdkQ7U0E5QlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2J1dHRvbl9TZWdtZW50ZWQgfSBmcm9tICcuL0V4dC9idXR0b24vU2VnbWVudGVkJztcbmV4cG9ydCBjbGFzcyBFeHRTZWdtZW50ZWRidXR0b25NZXRhRGF0YSBleHRlbmRzIEV4dF9idXR0b25fU2VnbWVudGVkIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFNlZ21lbnRlZGJ1dHRvbk1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfYnV0dG9uX1NlZ21lbnRlZC5nZXRQcm9wZXJ0aWVzKEV4dFNlZ21lbnRlZGJ1dHRvbk1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRTZWdtZW50ZWRidXR0b25NZXRhRGF0YS5FVkVOVFMgPSBFeHRfYnV0dG9uX1NlZ21lbnRlZC5nZXRFdmVudHMoRXh0U2VnbWVudGVkYnV0dG9uTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0U2VnbWVudGVkYnV0dG9uTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRTZWdtZW50ZWRidXR0b25NZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0U2VnbWVudGVkYnV0dG9uTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXNlZ21lbnRlZGJ1dHRvbicsXG4gIGlucHV0czogRXh0U2VnbWVudGVkYnV0dG9uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0U2VnbWVudGVkYnV0dG9uTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNlZ21lbnRlZGJ1dHRvbkNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFNlZ21lbnRlZGJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRTZWdtZW50ZWRidXR0b25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0U2VnbWVudGVkYnV0dG9uTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdzZWdtZW50ZWRidXR0b24nXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=