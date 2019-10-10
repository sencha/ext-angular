import * as tslib_1 from "tslib";
import { Ext_grid_menu_ShowInGroups } from './Ext/grid/menu/ShowInGroups';
var ExtGridshowingroupsmenuitemMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridshowingroupsmenuitemMetaData, _super);
    function ExtGridshowingroupsmenuitemMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtGridshowingroupsmenuitemMetaData.getAll = function () {
        ExtGridshowingroupsmenuitemMetaData.PROPERTIES = Ext_grid_menu_ShowInGroups.getProperties(ExtGridshowingroupsmenuitemMetaData.PROPERTIES);
        ExtGridshowingroupsmenuitemMetaData.EVENTS = Ext_grid_menu_ShowInGroups.getEvents(ExtGridshowingroupsmenuitemMetaData.EVENTS);
        ExtGridshowingroupsmenuitemMetaData.EVENTS.forEach(function (event) {
            ExtGridshowingroupsmenuitemMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtGridshowingroupsmenuitemMetaData.PROPERTIES = [];
    ExtGridshowingroupsmenuitemMetaData.EVENTS = [];
    ExtGridshowingroupsmenuitemMetaData.EVENTNAMES = [];
    return ExtGridshowingroupsmenuitemMetaData;
}(Ext_grid_menu_ShowInGroups));
export { ExtGridshowingroupsmenuitemMetaData };
(function () { ExtGridshowingroupsmenuitemMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtGridshowingroupsmenuitemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridshowingroupsmenuitemComponent, _super);
    function ExtGridshowingroupsmenuitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridshowingroupsmenuitemMetaData.PROPERTIES, ExtGridshowingroupsmenuitemMetaData.EVENTS) || this;
        _this.xtype = 'gridshowingroupsmenuitem';
        return _this;
    }
    ExtGridshowingroupsmenuitemComponent_1 = ExtGridshowingroupsmenuitemComponent;
    ExtGridshowingroupsmenuitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridshowingroupsmenuitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridshowingroupsmenuitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridshowingroupsmenuitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridshowingroupsmenuitemComponent_1;
    ExtGridshowingroupsmenuitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridshowingroupsmenuitemComponent = ExtGridshowingroupsmenuitemComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-gridshowingroupsmenuitem',
            inputs: ExtGridshowingroupsmenuitemMetaData.PROPERTIES,
            outputs: ExtGridshowingroupsmenuitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridshowingroupsmenuitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridshowingroupsmenuitemComponent);
    return ExtGridshowingroupsmenuitemComponent;
}(EngBase));
export { ExtGridshowingroupsmenuitemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWdyaWRzaG93aW5ncm91cHNtZW51aXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1ncmlkc2hvd2luZ3JvdXBzbWVudWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRTtJQUF5RCwrREFBMEI7SUFBbkY7O0lBV0EsQ0FBQztJQVBVLDBDQUFNLEdBQWI7UUFDSSxtQ0FBbUMsQ0FBQyxVQUFVLEdBQUcsMEJBQTBCLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFJLG1DQUFtQyxDQUFDLE1BQU0sR0FBRywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsbUNBQW1DLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUgsbUNBQW1DLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDM0QsbUNBQW1DLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksOENBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsMENBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsOENBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsMENBQUM7Q0FBQSxBQVhELENBQXlELDBCQUEwQixHQVdsRjtTQVhZLG1DQUFtQztBQVloRCxDQUFDLGNBQWEsbUNBQW1DLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBMEQsZ0VBQU87SUFFN0QsOENBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLG1DQUFtQyxDQUFDLFVBQVUsRUFDOUMsbUNBQW1DLENBQUMsTUFBTSxDQUM3QyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQTs7SUFDM0MsQ0FBQzs2Q0FiUSxvQ0FBb0M7SUFldEMsdURBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sOERBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sMERBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sMERBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLG9DQUFvQztRQVBoRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLE1BQU0sRUFBRSxtQ0FBbUMsQ0FBQyxVQUFVO1lBQ3RELE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxVQUFVO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQ0FBb0MsRUFBcEMsQ0FBb0MsQ0FBQyxFQUFDLENBQUM7WUFDcEcsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsb0NBQW9DLENBOEJoRDtJQUFELDJDQUFDO0NBQUEsQUE5QkQsQ0FBMEQsT0FBTyxHQThCaEU7U0E5Qlksb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2dyaWRfbWVudV9TaG93SW5Hcm91cHMgfSBmcm9tICcuL0V4dC9ncmlkL21lbnUvU2hvd0luR3JvdXBzJztcbmV4cG9ydCBjbGFzcyBFeHRHcmlkc2hvd2luZ3JvdXBzbWVudWl0ZW1NZXRhRGF0YSBleHRlbmRzIEV4dF9ncmlkX21lbnVfU2hvd0luR3JvdXBzIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dEdyaWRzaG93aW5ncm91cHNtZW51aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZ3JpZF9tZW51X1Nob3dJbkdyb3Vwcy5nZXRQcm9wZXJ0aWVzKEV4dEdyaWRzaG93aW5ncm91cHNtZW51aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRHcmlkc2hvd2luZ3JvdXBzbWVudWl0ZW1NZXRhRGF0YS5FVkVOVFMgPSBFeHRfZ3JpZF9tZW51X1Nob3dJbkdyb3Vwcy5nZXRFdmVudHMoRXh0R3JpZHNob3dpbmdyb3Vwc21lbnVpdGVtTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0R3JpZHNob3dpbmdyb3Vwc21lbnVpdGVtTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRHcmlkc2hvd2luZ3JvdXBzbWVudWl0ZW1NZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0R3JpZHNob3dpbmdyb3Vwc21lbnVpdGVtTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWdyaWRzaG93aW5ncm91cHNtZW51aXRlbScsXG4gIGlucHV0czogRXh0R3JpZHNob3dpbmdyb3Vwc21lbnVpdGVtTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0R3JpZHNob3dpbmdyb3Vwc21lbnVpdGVtTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEdyaWRzaG93aW5ncm91cHNtZW51aXRlbUNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEdyaWRzaG93aW5ncm91cHNtZW51aXRlbUNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRHcmlkc2hvd2luZ3JvdXBzbWVudWl0ZW1NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0R3JpZHNob3dpbmdyb3Vwc21lbnVpdGVtTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdncmlkc2hvd2luZ3JvdXBzbWVudWl0ZW0nXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=