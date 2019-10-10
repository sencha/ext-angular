import * as tslib_1 from "tslib";
import { Ext_panel_DateTitle } from './Ext/panel/DateTitle';
var ExtDatetitleMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatetitleMetaData, _super);
    function ExtDatetitleMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtDatetitleMetaData.getAll = function () {
        ExtDatetitleMetaData.PROPERTIES = Ext_panel_DateTitle.getProperties(ExtDatetitleMetaData.PROPERTIES);
        ExtDatetitleMetaData.EVENTS = Ext_panel_DateTitle.getEvents(ExtDatetitleMetaData.EVENTS);
        ExtDatetitleMetaData.EVENTS.forEach(function (event) {
            ExtDatetitleMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtDatetitleMetaData.PROPERTIES = [];
    ExtDatetitleMetaData.EVENTS = [];
    ExtDatetitleMetaData.EVENTNAMES = [];
    return ExtDatetitleMetaData;
}(Ext_panel_DateTitle));
export { ExtDatetitleMetaData };
(function () { ExtDatetitleMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtDatetitleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatetitleComponent, _super);
    function ExtDatetitleComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDatetitleMetaData.PROPERTIES, ExtDatetitleMetaData.EVENTS) || this;
        _this.xtype = 'datetitle';
        return _this;
    }
    ExtDatetitleComponent_1 = ExtDatetitleComponent;
    ExtDatetitleComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatetitleComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatetitleComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatetitleComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatetitleComponent_1;
    ExtDatetitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDatetitleComponent = ExtDatetitleComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-datetitle',
            inputs: ExtDatetitleMetaData.PROPERTIES,
            outputs: ExtDatetitleMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatetitleComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDatetitleComponent);
    return ExtDatetitleComponent;
}(EngBase));
export { ExtDatetitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGV0aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1kYXRldGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RDtJQUEwQyxnREFBbUI7SUFBN0Q7O0lBV0EsQ0FBQztJQVBVLDJCQUFNLEdBQWI7UUFDSSxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JHLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekYsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDNUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksK0JBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsMkJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsK0JBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsMkJBQUM7Q0FBQSxBQVhELENBQTBDLG1CQUFtQixHQVc1RDtTQVhZLG9CQUFvQjtBQVlqQyxDQUFDLGNBQWEsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBMkMsaURBQU87SUFFOUMsK0JBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLG9CQUFvQixDQUFDLFVBQVUsRUFDL0Isb0JBQW9CLENBQUMsTUFBTSxDQUM5QixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUE7O0lBQzVCLENBQUM7OEJBYlEscUJBQXFCO0lBZXZCLHdDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLCtDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLDJDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixxQkFBcUI7UUFQakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDdkMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDeEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDLEVBQUMsQ0FBQztZQUNyRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxxQkFBcUIsQ0E4QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlCRCxDQUEyQyxPQUFPLEdBOEJqRDtTQTlCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfcGFuZWxfRGF0ZVRpdGxlIH0gZnJvbSAnLi9FeHQvcGFuZWwvRGF0ZVRpdGxlJztcbmV4cG9ydCBjbGFzcyBFeHREYXRldGl0bGVNZXRhRGF0YSBleHRlbmRzIEV4dF9wYW5lbF9EYXRlVGl0bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0RGF0ZXRpdGxlTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9wYW5lbF9EYXRlVGl0bGUuZ2V0UHJvcGVydGllcyhFeHREYXRldGl0bGVNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0RGF0ZXRpdGxlTWV0YURhdGEuRVZFTlRTID0gRXh0X3BhbmVsX0RhdGVUaXRsZS5nZXRFdmVudHMoRXh0RGF0ZXRpdGxlTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0RGF0ZXRpdGxlTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHREYXRldGl0bGVNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0RGF0ZXRpdGxlTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWRhdGV0aXRsZScsXG4gIGlucHV0czogRXh0RGF0ZXRpdGxlTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0RGF0ZXRpdGxlTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dERhdGV0aXRsZUNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dERhdGV0aXRsZUNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHREYXRldGl0bGVNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0RGF0ZXRpdGxlTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdkYXRldGl0bGUnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=