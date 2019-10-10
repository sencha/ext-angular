import * as tslib_1 from "tslib";
import { Ext_sparkline_TriState } from './Ext/sparkline/TriState';
var ExtSparklinetristateMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklinetristateMetaData, _super);
    function ExtSparklinetristateMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtSparklinetristateMetaData.getAll = function () {
        ExtSparklinetristateMetaData.PROPERTIES = Ext_sparkline_TriState.getProperties(ExtSparklinetristateMetaData.PROPERTIES);
        ExtSparklinetristateMetaData.EVENTS = Ext_sparkline_TriState.getEvents(ExtSparklinetristateMetaData.EVENTS);
        ExtSparklinetristateMetaData.EVENTS.forEach(function (event) {
            ExtSparklinetristateMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtSparklinetristateMetaData.PROPERTIES = [];
    ExtSparklinetristateMetaData.EVENTS = [];
    ExtSparklinetristateMetaData.EVENTNAMES = [];
    return ExtSparklinetristateMetaData;
}(Ext_sparkline_TriState));
export { ExtSparklinetristateMetaData };
(function () { ExtSparklinetristateMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtSparklinetristateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklinetristateComponent, _super);
    function ExtSparklinetristateComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtSparklinetristateMetaData.PROPERTIES, ExtSparklinetristateMetaData.EVENTS) || this;
        _this.xtype = 'sparklinetristate';
        return _this;
    }
    ExtSparklinetristateComponent_1 = ExtSparklinetristateComponent;
    ExtSparklinetristateComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSparklinetristateComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSparklinetristateComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSparklinetristateComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSparklinetristateComponent_1;
    ExtSparklinetristateComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtSparklinetristateComponent = ExtSparklinetristateComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-sparklinetristate',
            inputs: ExtSparklinetristateMetaData.PROPERTIES,
            outputs: ExtSparklinetristateMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSparklinetristateComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtSparklinetristateComponent);
    return ExtSparklinetristateComponent;
}(EngBase));
export { ExtSparklinetristateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwYXJrbGluZXRyaXN0YXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXNwYXJrbGluZXRyaXN0YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEU7SUFBa0Qsd0RBQXNCO0lBQXhFOztJQVdBLENBQUM7SUFQVSxtQ0FBTSxHQUFiO1FBQ0ksNEJBQTRCLENBQUMsVUFBVSxHQUFHLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4SCw0QkFBNEIsQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVHLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3BELDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLHVDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLG1DQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLHVDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLG1DQUFDO0NBQUEsQUFYRCxDQUFrRCxzQkFBc0IsR0FXdkU7U0FYWSw0QkFBNEI7QUFZekMsQ0FBQyxjQUFhLDRCQUE0QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQW1ELHlEQUFPO0lBRXRELHVDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYiw0QkFBNEIsQ0FBQyxVQUFVLEVBQ3ZDLDRCQUE0QixDQUFDLE1BQU0sQ0FDdEMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUE7O0lBQ3BDLENBQUM7c0NBYlEsNkJBQTZCO0lBZS9CLGdEQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLHVEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLG1EQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLG1EQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4Qiw2QkFBNkI7UUFQekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsNEJBQTRCLENBQUMsVUFBVTtZQUMvQyxPQUFPLEVBQUUsNEJBQTRCLENBQUMsVUFBVTtZQUNoRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsK0JBQTZCLEVBQTdCLENBQTZCLENBQUMsRUFBQyxDQUFDO1lBQzdGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELDZCQUE2QixDQThCekM7SUFBRCxvQ0FBQztDQUFBLEFBOUJELENBQW1ELE9BQU8sR0E4QnpEO1NBOUJZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9zcGFya2xpbmVfVHJpU3RhdGUgfSBmcm9tICcuL0V4dC9zcGFya2xpbmUvVHJpU3RhdGUnO1xuZXhwb3J0IGNsYXNzIEV4dFNwYXJrbGluZXRyaXN0YXRlTWV0YURhdGEgZXh0ZW5kcyBFeHRfc3BhcmtsaW5lX1RyaVN0YXRlIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFNwYXJrbGluZXRyaXN0YXRlTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9zcGFya2xpbmVfVHJpU3RhdGUuZ2V0UHJvcGVydGllcyhFeHRTcGFya2xpbmV0cmlzdGF0ZU1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRTcGFya2xpbmV0cmlzdGF0ZU1ldGFEYXRhLkVWRU5UUyA9IEV4dF9zcGFya2xpbmVfVHJpU3RhdGUuZ2V0RXZlbnRzKEV4dFNwYXJrbGluZXRyaXN0YXRlTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0U3BhcmtsaW5ldHJpc3RhdGVNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFNwYXJrbGluZXRyaXN0YXRlTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFNwYXJrbGluZXRyaXN0YXRlTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXNwYXJrbGluZXRyaXN0YXRlJyxcbiAgaW5wdXRzOiBFeHRTcGFya2xpbmV0cmlzdGF0ZU1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFNwYXJrbGluZXRyaXN0YXRlTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNwYXJrbGluZXRyaXN0YXRlQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0U3BhcmtsaW5ldHJpc3RhdGVDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0U3BhcmtsaW5ldHJpc3RhdGVNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0U3BhcmtsaW5ldHJpc3RhdGVNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3NwYXJrbGluZXRyaXN0YXRlJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19