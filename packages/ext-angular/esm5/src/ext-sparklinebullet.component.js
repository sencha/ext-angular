import * as tslib_1 from "tslib";
import { Ext_sparkline_Bullet } from './Ext/sparkline/Bullet';
var ExtSparklinebulletMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklinebulletMetaData, _super);
    function ExtSparklinebulletMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtSparklinebulletMetaData.getAll = function () {
        ExtSparklinebulletMetaData.PROPERTIES = Ext_sparkline_Bullet.getProperties(ExtSparklinebulletMetaData.PROPERTIES);
        ExtSparklinebulletMetaData.EVENTS = Ext_sparkline_Bullet.getEvents(ExtSparklinebulletMetaData.EVENTS);
        ExtSparklinebulletMetaData.EVENTS.forEach(function (event) {
            ExtSparklinebulletMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtSparklinebulletMetaData.PROPERTIES = [];
    ExtSparklinebulletMetaData.EVENTS = [];
    ExtSparklinebulletMetaData.EVENTNAMES = [];
    return ExtSparklinebulletMetaData;
}(Ext_sparkline_Bullet));
export { ExtSparklinebulletMetaData };
(function () { ExtSparklinebulletMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtSparklinebulletComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklinebulletComponent, _super);
    function ExtSparklinebulletComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtSparklinebulletMetaData.PROPERTIES, ExtSparklinebulletMetaData.EVENTS) || this;
        _this.xtype = 'sparklinebullet';
        return _this;
    }
    ExtSparklinebulletComponent_1 = ExtSparklinebulletComponent;
    ExtSparklinebulletComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSparklinebulletComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSparklinebulletComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSparklinebulletComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSparklinebulletComponent_1;
    ExtSparklinebulletComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtSparklinebulletComponent = ExtSparklinebulletComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-sparklinebullet',
            inputs: ExtSparklinebulletMetaData.PROPERTIES,
            outputs: ExtSparklinebulletMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSparklinebulletComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtSparklinebulletComponent);
    return ExtSparklinebulletComponent;
}(EngBase));
export { ExtSparklinebulletComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwYXJrbGluZWJ1bGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1zcGFya2xpbmVidWxsZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RDtJQUFnRCxzREFBb0I7SUFBcEU7O0lBV0EsQ0FBQztJQVBVLGlDQUFNLEdBQWI7UUFDSSwwQkFBMEIsQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xILDBCQUEwQixDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDbEQsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFkscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsaUNBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsaUNBQUM7Q0FBQSxBQVhELENBQWdELG9CQUFvQixHQVduRTtTQVhZLDBCQUEwQjtBQVl2QyxDQUFDLGNBQWEsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBaUQsdURBQU87SUFFcEQscUNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDBCQUEwQixDQUFDLFVBQVUsRUFDckMsMEJBQTBCLENBQUMsTUFBTSxDQUNwQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTs7SUFDbEMsQ0FBQztvQ0FiUSwyQkFBMkI7SUFlN0IsOENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0scURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0saURBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0saURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDJCQUEyQjtRQVB2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzdDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBMkIsRUFBM0IsQ0FBMkIsQ0FBQyxFQUFDLENBQUM7WUFDM0YsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsMkJBQTJCLENBOEJ2QztJQUFELGtDQUFDO0NBQUEsQUE5QkQsQ0FBaUQsT0FBTyxHQThCdkQ7U0E5QlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3NwYXJrbGluZV9CdWxsZXQgfSBmcm9tICcuL0V4dC9zcGFya2xpbmUvQnVsbGV0JztcbmV4cG9ydCBjbGFzcyBFeHRTcGFya2xpbmVidWxsZXRNZXRhRGF0YSBleHRlbmRzIEV4dF9zcGFya2xpbmVfQnVsbGV0IHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFNwYXJrbGluZWJ1bGxldE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfc3BhcmtsaW5lX0J1bGxldC5nZXRQcm9wZXJ0aWVzKEV4dFNwYXJrbGluZWJ1bGxldE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRTcGFya2xpbmVidWxsZXRNZXRhRGF0YS5FVkVOVFMgPSBFeHRfc3BhcmtsaW5lX0J1bGxldC5nZXRFdmVudHMoRXh0U3BhcmtsaW5lYnVsbGV0TWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0U3BhcmtsaW5lYnVsbGV0TWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRTcGFya2xpbmVidWxsZXRNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0U3BhcmtsaW5lYnVsbGV0TWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXNwYXJrbGluZWJ1bGxldCcsXG4gIGlucHV0czogRXh0U3BhcmtsaW5lYnVsbGV0TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0U3BhcmtsaW5lYnVsbGV0TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNwYXJrbGluZWJ1bGxldENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFNwYXJrbGluZWJ1bGxldENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRTcGFya2xpbmVidWxsZXRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0U3BhcmtsaW5lYnVsbGV0TWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdzcGFya2xpbmVidWxsZXQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=