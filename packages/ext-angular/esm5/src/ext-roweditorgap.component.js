import * as tslib_1 from "tslib";
import { Ext_grid_rowedit_Gap } from './Ext/grid/rowedit/Gap';
var ExtRoweditorgapMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRoweditorgapMetaData, _super);
    function ExtRoweditorgapMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtRoweditorgapMetaData.getAll = function () {
        ExtRoweditorgapMetaData.PROPERTIES = Ext_grid_rowedit_Gap.getProperties(ExtRoweditorgapMetaData.PROPERTIES);
        ExtRoweditorgapMetaData.EVENTS = Ext_grid_rowedit_Gap.getEvents(ExtRoweditorgapMetaData.EVENTS);
        ExtRoweditorgapMetaData.EVENTS.forEach(function (event) {
            ExtRoweditorgapMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtRoweditorgapMetaData.PROPERTIES = [];
    ExtRoweditorgapMetaData.EVENTS = [];
    ExtRoweditorgapMetaData.EVENTNAMES = [];
    return ExtRoweditorgapMetaData;
}(Ext_grid_rowedit_Gap));
export { ExtRoweditorgapMetaData };
(function () { ExtRoweditorgapMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtRoweditorgapComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRoweditorgapComponent, _super);
    function ExtRoweditorgapComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRoweditorgapMetaData.PROPERTIES, ExtRoweditorgapMetaData.EVENTS) || this;
        _this.xtype = 'roweditorgap';
        return _this;
    }
    ExtRoweditorgapComponent_1 = ExtRoweditorgapComponent;
    ExtRoweditorgapComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRoweditorgapComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRoweditorgapComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRoweditorgapComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRoweditorgapComponent_1;
    ExtRoweditorgapComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRoweditorgapComponent = ExtRoweditorgapComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-roweditorgap',
            inputs: ExtRoweditorgapMetaData.PROPERTIES,
            outputs: ExtRoweditorgapMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRoweditorgapComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRoweditorgapComponent);
    return ExtRoweditorgapComponent;
}(EngBase));
export { ExtRoweditorgapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXJvd2VkaXRvcmdhcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1yb3dlZGl0b3JnYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RDtJQUE2QyxtREFBb0I7SUFBakU7O0lBV0EsQ0FBQztJQVBVLDhCQUFNLEdBQWI7UUFDSSx1QkFBdUIsQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVHLHVCQUF1QixDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEcsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDL0MsdUJBQXVCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksa0NBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsOEJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsa0NBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsOEJBQUM7Q0FBQSxBQVhELENBQTZDLG9CQUFvQixHQVdoRTtTQVhZLHVCQUF1QjtBQVlwQyxDQUFDLGNBQWEsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRXBELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBOEMsb0RBQU87SUFFakQsa0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLHVCQUF1QixDQUFDLFVBQVUsRUFDbEMsdUJBQXVCLENBQUMsTUFBTSxDQUNqQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUE7O0lBQy9CLENBQUM7aUNBYlEsd0JBQXdCO0lBZTFCLDJDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLGtEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDhDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLDhDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4Qix3QkFBd0I7UUFQcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixNQUFNLEVBQUUsdUJBQXVCLENBQUMsVUFBVTtZQUMxQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsVUFBVTtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMEJBQXdCLEVBQXhCLENBQXdCLENBQUMsRUFBQyxDQUFDO1lBQ3hGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELHdCQUF3QixDQThCcEM7SUFBRCwrQkFBQztDQUFBLEFBOUJELENBQThDLE9BQU8sR0E4QnBEO1NBOUJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9ncmlkX3Jvd2VkaXRfR2FwIH0gZnJvbSAnLi9FeHQvZ3JpZC9yb3dlZGl0L0dhcCc7XG5leHBvcnQgY2xhc3MgRXh0Um93ZWRpdG9yZ2FwTWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9yb3dlZGl0X0dhcCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRSb3dlZGl0b3JnYXBNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2dyaWRfcm93ZWRpdF9HYXAuZ2V0UHJvcGVydGllcyhFeHRSb3dlZGl0b3JnYXBNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0Um93ZWRpdG9yZ2FwTWV0YURhdGEuRVZFTlRTID0gRXh0X2dyaWRfcm93ZWRpdF9HYXAuZ2V0RXZlbnRzKEV4dFJvd2VkaXRvcmdhcE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFJvd2VkaXRvcmdhcE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Um93ZWRpdG9yZ2FwTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFJvd2VkaXRvcmdhcE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1yb3dlZGl0b3JnYXAnLFxuICBpbnB1dHM6IEV4dFJvd2VkaXRvcmdhcE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFJvd2VkaXRvcmdhcE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRSb3dlZGl0b3JnYXBDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRSb3dlZGl0b3JnYXBDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Um93ZWRpdG9yZ2FwTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFJvd2VkaXRvcmdhcE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAncm93ZWRpdG9yZ2FwJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19