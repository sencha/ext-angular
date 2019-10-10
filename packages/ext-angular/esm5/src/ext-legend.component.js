import * as tslib_1 from "tslib";
import { Ext_chart_Legend } from './Ext/chart/Legend';
var ExtLegendMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtLegendMetaData, _super);
    function ExtLegendMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtLegendMetaData.getAll = function () {
        ExtLegendMetaData.PROPERTIES = Ext_chart_Legend.getProperties(ExtLegendMetaData.PROPERTIES);
        ExtLegendMetaData.EVENTS = Ext_chart_Legend.getEvents(ExtLegendMetaData.EVENTS);
        ExtLegendMetaData.EVENTS.forEach(function (event) {
            ExtLegendMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtLegendMetaData.PROPERTIES = [];
    ExtLegendMetaData.EVENTS = [];
    ExtLegendMetaData.EVENTNAMES = [];
    return ExtLegendMetaData;
}(Ext_chart_Legend));
export { ExtLegendMetaData };
(function () { ExtLegendMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtLegendComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtLegendComponent, _super);
    function ExtLegendComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtLegendMetaData.PROPERTIES, ExtLegendMetaData.EVENTS) || this;
        _this.xtype = 'legend';
        return _this;
    }
    ExtLegendComponent_1 = ExtLegendComponent;
    ExtLegendComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtLegendComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtLegendComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtLegendComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtLegendComponent_1;
    ExtLegendComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtLegendComponent = ExtLegendComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-legend',
            inputs: ExtLegendMetaData.PROPERTIES,
            outputs: ExtLegendMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtLegendComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtLegendComponent);
    return ExtLegendComponent;
}(EngBase));
export { ExtLegendComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWxlZ2VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RDtJQUF1Qyw2Q0FBZ0I7SUFBdkQ7O0lBV0EsQ0FBQztJQVBVLHdCQUFNLEdBQWI7UUFDSSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVGLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEYsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDekMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsd0JBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsd0JBQUM7Q0FBQSxBQVhELENBQXVDLGdCQUFnQixHQVd0RDtTQVhZLGlCQUFpQjtBQVk5QixDQUFDLGNBQWEsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBd0MsOENBQU87SUFFM0MsNEJBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLGlCQUFpQixDQUFDLFVBQVUsRUFDNUIsaUJBQWlCLENBQUMsTUFBTSxDQUMzQixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7O0lBQ3pCLENBQUM7MkJBYlEsa0JBQWtCO0lBZXBCLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDRDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHdDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHdDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixrQkFBa0I7UUFQOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsTUFBTSxFQUFFLGlCQUFpQixDQUFDLFVBQVU7WUFDcEMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7WUFDckMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFrQixFQUFsQixDQUFrQixDQUFDLEVBQUMsQ0FBQztZQUNsRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxrQkFBa0IsQ0E4QjlCO0lBQUQseUJBQUM7Q0FBQSxBQTlCRCxDQUF3QyxPQUFPLEdBOEI5QztTQTlCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfY2hhcnRfTGVnZW5kIH0gZnJvbSAnLi9FeHQvY2hhcnQvTGVnZW5kJztcbmV4cG9ydCBjbGFzcyBFeHRMZWdlbmRNZXRhRGF0YSBleHRlbmRzIEV4dF9jaGFydF9MZWdlbmQge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0TGVnZW5kTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9jaGFydF9MZWdlbmQuZ2V0UHJvcGVydGllcyhFeHRMZWdlbmRNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0TGVnZW5kTWV0YURhdGEuRVZFTlRTID0gRXh0X2NoYXJ0X0xlZ2VuZC5nZXRFdmVudHMoRXh0TGVnZW5kTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0TGVnZW5kTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRMZWdlbmRNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0TGVnZW5kTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWxlZ2VuZCcsXG4gIGlucHV0czogRXh0TGVnZW5kTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0TGVnZW5kTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dExlZ2VuZENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dExlZ2VuZENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRMZWdlbmRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0TGVnZW5kTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdsZWdlbmQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=