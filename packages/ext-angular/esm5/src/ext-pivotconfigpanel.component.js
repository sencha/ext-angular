import * as tslib_1 from "tslib";
import { Ext_pivot_plugin_configurator_Panel } from './Ext/pivot/plugin/configurator/Panel';
var ExtPivotconfigpanelMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotconfigpanelMetaData, _super);
    function ExtPivotconfigpanelMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPivotconfigpanelMetaData.getAll = function () {
        ExtPivotconfigpanelMetaData.PROPERTIES = Ext_pivot_plugin_configurator_Panel.getProperties(ExtPivotconfigpanelMetaData.PROPERTIES);
        ExtPivotconfigpanelMetaData.EVENTS = Ext_pivot_plugin_configurator_Panel.getEvents(ExtPivotconfigpanelMetaData.EVENTS);
        ExtPivotconfigpanelMetaData.EVENTS.forEach(function (event) {
            ExtPivotconfigpanelMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPivotconfigpanelMetaData.PROPERTIES = [];
    ExtPivotconfigpanelMetaData.EVENTS = [];
    ExtPivotconfigpanelMetaData.EVENTNAMES = [];
    return ExtPivotconfigpanelMetaData;
}(Ext_pivot_plugin_configurator_Panel));
export { ExtPivotconfigpanelMetaData };
(function () { ExtPivotconfigpanelMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPivotconfigpanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotconfigpanelComponent, _super);
    function ExtPivotconfigpanelComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPivotconfigpanelMetaData.PROPERTIES, ExtPivotconfigpanelMetaData.EVENTS) || this;
        _this.xtype = 'pivotconfigpanel';
        return _this;
    }
    ExtPivotconfigpanelComponent_1 = ExtPivotconfigpanelComponent;
    ExtPivotconfigpanelComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPivotconfigpanelComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPivotconfigpanelComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPivotconfigpanelComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPivotconfigpanelComponent_1;
    ExtPivotconfigpanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPivotconfigpanelComponent = ExtPivotconfigpanelComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-pivotconfigpanel',
            inputs: ExtPivotconfigpanelMetaData.PROPERTIES,
            outputs: ExtPivotconfigpanelMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPivotconfigpanelComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPivotconfigpanelComponent);
    return ExtPivotconfigpanelComponent;
}(EngBase));
export { ExtPivotconfigpanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90Y29uZmlncGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtcGl2b3Rjb25maWdwYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVGO0lBQWlELHVEQUFtQztJQUFwRjs7SUFXQSxDQUFDO0lBUFUsa0NBQU0sR0FBYjtRQUNJLDJCQUEyQixDQUFDLFVBQVUsR0FBRyxtQ0FBbUMsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkksMkJBQTJCLENBQUMsTUFBTSxHQUFHLG1DQUFtQyxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2SCwyQkFBMkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUNuRCwyQkFBMkIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixrQ0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixzQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QyxrQ0FBQztDQUFBLEFBWEQsQ0FBaUQsbUNBQW1DLEdBV25GO1NBWFksMkJBQTJCO0FBWXhDLENBQUMsY0FBYSwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUFrRCx3REFBTztJQUVyRCxzQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsMkJBQTJCLENBQUMsVUFBVSxFQUN0QywyQkFBMkIsQ0FBQyxNQUFNLENBQ3JDLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFBOztJQUNuQyxDQUFDO3FDQWJRLDRCQUE0QjtJQWU5QiwrQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxzREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSxrREFBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxrREFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsNEJBQTRCO1FBUHhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsTUFBTSxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDOUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDLFVBQVU7WUFDL0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDhCQUE0QixFQUE1QixDQUE0QixDQUFDLEVBQUMsQ0FBQztZQUM1RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCw0QkFBNEIsQ0E4QnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTlCRCxDQUFrRCxPQUFPLEdBOEJ4RDtTQTlCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfcGl2b3RfcGx1Z2luX2NvbmZpZ3VyYXRvcl9QYW5lbCB9IGZyb20gJy4vRXh0L3Bpdm90L3BsdWdpbi9jb25maWd1cmF0b3IvUGFuZWwnO1xuZXhwb3J0IGNsYXNzIEV4dFBpdm90Y29uZmlncGFuZWxNZXRhRGF0YSBleHRlbmRzIEV4dF9waXZvdF9wbHVnaW5fY29uZmlndXJhdG9yX1BhbmVsIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFBpdm90Y29uZmlncGFuZWxNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X3Bpdm90X3BsdWdpbl9jb25maWd1cmF0b3JfUGFuZWwuZ2V0UHJvcGVydGllcyhFeHRQaXZvdGNvbmZpZ3BhbmVsTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFBpdm90Y29uZmlncGFuZWxNZXRhRGF0YS5FVkVOVFMgPSBFeHRfcGl2b3RfcGx1Z2luX2NvbmZpZ3VyYXRvcl9QYW5lbC5nZXRFdmVudHMoRXh0UGl2b3Rjb25maWdwYW5lbE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFBpdm90Y29uZmlncGFuZWxNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFBpdm90Y29uZmlncGFuZWxNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0UGl2b3Rjb25maWdwYW5lbE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1waXZvdGNvbmZpZ3BhbmVsJyxcbiAgaW5wdXRzOiBFeHRQaXZvdGNvbmZpZ3BhbmVsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0UGl2b3Rjb25maWdwYW5lbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaXZvdGNvbmZpZ3BhbmVsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGl2b3Rjb25maWdwYW5lbENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRQaXZvdGNvbmZpZ3BhbmVsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFBpdm90Y29uZmlncGFuZWxNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3Bpdm90Y29uZmlncGFuZWwnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=