import * as tslib_1 from "tslib";
import { Ext_ux_colorpick_Button } from './Ext/ux/colorpick/Button';
var ExtColorbuttonMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorbuttonMetaData, _super);
    function ExtColorbuttonMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtColorbuttonMetaData.getAll = function () {
        ExtColorbuttonMetaData.PROPERTIES = Ext_ux_colorpick_Button.getProperties(ExtColorbuttonMetaData.PROPERTIES);
        ExtColorbuttonMetaData.EVENTS = Ext_ux_colorpick_Button.getEvents(ExtColorbuttonMetaData.EVENTS);
        ExtColorbuttonMetaData.EVENTS.forEach(function (event) {
            ExtColorbuttonMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtColorbuttonMetaData.PROPERTIES = [];
    ExtColorbuttonMetaData.EVENTS = [];
    ExtColorbuttonMetaData.EVENTNAMES = [];
    return ExtColorbuttonMetaData;
}(Ext_ux_colorpick_Button));
export { ExtColorbuttonMetaData };
(function () { ExtColorbuttonMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtColorbuttonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorbuttonComponent, _super);
    function ExtColorbuttonComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtColorbuttonMetaData.PROPERTIES, ExtColorbuttonMetaData.EVENTS) || this;
        _this.xtype = 'colorbutton';
        return _this;
    }
    ExtColorbuttonComponent_1 = ExtColorbuttonComponent;
    ExtColorbuttonComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtColorbuttonComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtColorbuttonComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtColorbuttonComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtColorbuttonComponent_1;
    ExtColorbuttonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtColorbuttonComponent = ExtColorbuttonComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-colorbutton',
            inputs: ExtColorbuttonMetaData.PROPERTIES,
            outputs: ExtColorbuttonMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtColorbuttonComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtColorbuttonComponent);
    return ExtColorbuttonComponent;
}(EngBase));
export { ExtColorbuttonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNvbG9yYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEU7SUFBNEMsa0RBQXVCO0lBQW5FOztJQVdBLENBQUM7SUFQVSw2QkFBTSxHQUFiO1FBQ0ksc0JBQXNCLENBQUMsVUFBVSxHQUFHLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RyxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzlDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLGlDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDZCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLGlDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDZCQUFDO0NBQUEsQUFYRCxDQUE0Qyx1QkFBdUIsR0FXbEU7U0FYWSxzQkFBc0I7QUFZbkMsQ0FBQyxjQUFhLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTZDLG1EQUFPO0lBRWhELGlDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixzQkFBc0IsQ0FBQyxVQUFVLEVBQ2pDLHNCQUFzQixDQUFDLE1BQU0sQ0FDaEMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFBOztJQUM5QixDQUFDO2dDQWJRLHVCQUF1QjtJQWV6QiwwQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxpREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSw2Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSw2Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsdUJBQXVCO1FBUG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsTUFBTSxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDekMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztZQUN2RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCx1QkFBdUIsQ0E4Qm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTlCRCxDQUE2QyxPQUFPLEdBOEJuRDtTQTlCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfdXhfY29sb3JwaWNrX0J1dHRvbiB9IGZyb20gJy4vRXh0L3V4L2NvbG9ycGljay9CdXR0b24nO1xuZXhwb3J0IGNsYXNzIEV4dENvbG9yYnV0dG9uTWV0YURhdGEgZXh0ZW5kcyBFeHRfdXhfY29sb3JwaWNrX0J1dHRvbiB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRDb2xvcmJ1dHRvbk1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfdXhfY29sb3JwaWNrX0J1dHRvbi5nZXRQcm9wZXJ0aWVzKEV4dENvbG9yYnV0dG9uTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dENvbG9yYnV0dG9uTWV0YURhdGEuRVZFTlRTID0gRXh0X3V4X2NvbG9ycGlja19CdXR0b24uZ2V0RXZlbnRzKEV4dENvbG9yYnV0dG9uTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q29sb3JidXR0b25NZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dENvbG9yYnV0dG9uTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dENvbG9yYnV0dG9uTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNvbG9yYnV0dG9uJyxcbiAgaW5wdXRzOiBFeHRDb2xvcmJ1dHRvbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dENvbG9yYnV0dG9uTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENvbG9yYnV0dG9uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q29sb3JidXR0b25Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Q29sb3JidXR0b25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q29sb3JidXR0b25NZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2NvbG9yYnV0dG9uJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19