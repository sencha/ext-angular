import * as tslib_1 from "tslib";
import { Ext_sparkline_Pie } from './Ext/sparkline/Pie';
var ExtSparklinepieMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklinepieMetaData, _super);
    function ExtSparklinepieMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtSparklinepieMetaData.getAll = function () {
        ExtSparklinepieMetaData.PROPERTIES = Ext_sparkline_Pie.getProperties(ExtSparklinepieMetaData.PROPERTIES);
        ExtSparklinepieMetaData.EVENTS = Ext_sparkline_Pie.getEvents(ExtSparklinepieMetaData.EVENTS);
        ExtSparklinepieMetaData.EVENTS.forEach(function (event) {
            ExtSparklinepieMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtSparklinepieMetaData.PROPERTIES = [];
    ExtSparklinepieMetaData.EVENTS = [];
    ExtSparklinepieMetaData.EVENTNAMES = [];
    return ExtSparklinepieMetaData;
}(Ext_sparkline_Pie));
export { ExtSparklinepieMetaData };
(function () { ExtSparklinepieMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtSparklinepieComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklinepieComponent, _super);
    function ExtSparklinepieComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtSparklinepieMetaData.PROPERTIES, ExtSparklinepieMetaData.EVENTS) || this;
        _this.xtype = 'sparklinepie';
        return _this;
    }
    ExtSparklinepieComponent_1 = ExtSparklinepieComponent;
    ExtSparklinepieComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSparklinepieComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSparklinepieComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSparklinepieComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSparklinepieComponent_1;
    ExtSparklinepieComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtSparklinepieComponent = ExtSparklinepieComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-sparklinepie',
            inputs: ExtSparklinepieMetaData.PROPERTIES,
            outputs: ExtSparklinepieMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSparklinepieComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtSparklinepieComponent);
    return ExtSparklinepieComponent;
}(EngBase));
export { ExtSparklinepieComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwYXJrbGluZXBpZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1zcGFya2xpbmVwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RDtJQUE2QyxtREFBaUI7SUFBOUQ7O0lBV0EsQ0FBQztJQVBVLDhCQUFNLEdBQWI7UUFDSSx1QkFBdUIsQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pHLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0YsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDL0MsdUJBQXVCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksa0NBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsOEJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsa0NBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsOEJBQUM7Q0FBQSxBQVhELENBQTZDLGlCQUFpQixHQVc3RDtTQVhZLHVCQUF1QjtBQVlwQyxDQUFDLGNBQWEsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRXBELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBOEMsb0RBQU87SUFFakQsa0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLHVCQUF1QixDQUFDLFVBQVUsRUFDbEMsdUJBQXVCLENBQUMsTUFBTSxDQUNqQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUE7O0lBQy9CLENBQUM7aUNBYlEsd0JBQXdCO0lBZTFCLDJDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLGtEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDhDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLDhDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4Qix3QkFBd0I7UUFQcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixNQUFNLEVBQUUsdUJBQXVCLENBQUMsVUFBVTtZQUMxQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsVUFBVTtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMEJBQXdCLEVBQXhCLENBQXdCLENBQUMsRUFBQyxDQUFDO1lBQ3hGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELHdCQUF3QixDQThCcEM7SUFBRCwrQkFBQztDQUFBLEFBOUJELENBQThDLE9BQU8sR0E4QnBEO1NBOUJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9zcGFya2xpbmVfUGllIH0gZnJvbSAnLi9FeHQvc3BhcmtsaW5lL1BpZSc7XG5leHBvcnQgY2xhc3MgRXh0U3BhcmtsaW5lcGllTWV0YURhdGEgZXh0ZW5kcyBFeHRfc3BhcmtsaW5lX1BpZSB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRTcGFya2xpbmVwaWVNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X3NwYXJrbGluZV9QaWUuZ2V0UHJvcGVydGllcyhFeHRTcGFya2xpbmVwaWVNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0U3BhcmtsaW5lcGllTWV0YURhdGEuRVZFTlRTID0gRXh0X3NwYXJrbGluZV9QaWUuZ2V0RXZlbnRzKEV4dFNwYXJrbGluZXBpZU1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFNwYXJrbGluZXBpZU1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0U3BhcmtsaW5lcGllTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFNwYXJrbGluZXBpZU1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1zcGFya2xpbmVwaWUnLFxuICBpbnB1dHM6IEV4dFNwYXJrbGluZXBpZU1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFNwYXJrbGluZXBpZU1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRTcGFya2xpbmVwaWVDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRTcGFya2xpbmVwaWVDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0U3BhcmtsaW5lcGllTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFNwYXJrbGluZXBpZU1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnc3BhcmtsaW5lcGllJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19