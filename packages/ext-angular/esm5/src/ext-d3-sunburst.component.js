import * as tslib_1 from "tslib";
import { Ext_d3_hierarchy_partition_Sunburst } from './Ext/d3/hierarchy/partition/Sunburst';
var ExtD3_sunburstMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_sunburstMetaData, _super);
    function ExtD3_sunburstMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtD3_sunburstMetaData.getAll = function () {
        ExtD3_sunburstMetaData.PROPERTIES = Ext_d3_hierarchy_partition_Sunburst.getProperties(ExtD3_sunburstMetaData.PROPERTIES);
        ExtD3_sunburstMetaData.EVENTS = Ext_d3_hierarchy_partition_Sunburst.getEvents(ExtD3_sunburstMetaData.EVENTS);
        ExtD3_sunburstMetaData.EVENTS.forEach(function (event) {
            ExtD3_sunburstMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtD3_sunburstMetaData.PROPERTIES = [];
    ExtD3_sunburstMetaData.EVENTS = [];
    ExtD3_sunburstMetaData.EVENTNAMES = [];
    return ExtD3_sunburstMetaData;
}(Ext_d3_hierarchy_partition_Sunburst));
export { ExtD3_sunburstMetaData };
(function () { ExtD3_sunburstMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtD3_sunburstComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_sunburstComponent, _super);
    function ExtD3_sunburstComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtD3_sunburstMetaData.PROPERTIES, ExtD3_sunburstMetaData.EVENTS) || this;
        _this.xtype = 'd3-sunburst';
        return _this;
    }
    ExtD3_sunburstComponent_1 = ExtD3_sunburstComponent;
    ExtD3_sunburstComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtD3_sunburstComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtD3_sunburstComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtD3_sunburstComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtD3_sunburstComponent_1;
    ExtD3_sunburstComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtD3_sunburstComponent = ExtD3_sunburstComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-d3-sunburst',
            inputs: ExtD3_sunburstMetaData.PROPERTIES,
            outputs: ExtD3_sunburstMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtD3_sunburstComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtD3_sunburstComponent);
    return ExtD3_sunburstComponent;
}(EngBase));
export { ExtD3_sunburstComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWQzLXN1bmJ1cnN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWQzLXN1bmJ1cnN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUY7SUFBNEMsa0RBQW1DO0lBQS9FOztJQVdBLENBQUM7SUFQVSw2QkFBTSxHQUFiO1FBQ0ksc0JBQXNCLENBQUMsVUFBVSxHQUFHLG1DQUFtQyxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6SCxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsbUNBQW1DLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzlDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLGlDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDZCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLGlDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDZCQUFDO0NBQUEsQUFYRCxDQUE0QyxtQ0FBbUMsR0FXOUU7U0FYWSxzQkFBc0I7QUFZbkMsQ0FBQyxjQUFhLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTZDLG1EQUFPO0lBRWhELGlDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixzQkFBc0IsQ0FBQyxVQUFVLEVBQ2pDLHNCQUFzQixDQUFDLE1BQU0sQ0FDaEMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFBOztJQUM5QixDQUFDO2dDQWJRLHVCQUF1QjtJQWV6QiwwQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxpREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSw2Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSw2Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsdUJBQXVCO1FBUG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsTUFBTSxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDekMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztZQUN2RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCx1QkFBdUIsQ0E4Qm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTlCRCxDQUE2QyxPQUFPLEdBOEJuRDtTQTlCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZDNfaGllcmFyY2h5X3BhcnRpdGlvbl9TdW5idXJzdCB9IGZyb20gJy4vRXh0L2QzL2hpZXJhcmNoeS9wYXJ0aXRpb24vU3VuYnVyc3QnO1xuZXhwb3J0IGNsYXNzIEV4dEQzX3N1bmJ1cnN0TWV0YURhdGEgZXh0ZW5kcyBFeHRfZDNfaGllcmFyY2h5X3BhcnRpdGlvbl9TdW5idXJzdCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHREM19zdW5idXJzdE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZDNfaGllcmFyY2h5X3BhcnRpdGlvbl9TdW5idXJzdC5nZXRQcm9wZXJ0aWVzKEV4dEQzX3N1bmJ1cnN0TWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dEQzX3N1bmJ1cnN0TWV0YURhdGEuRVZFTlRTID0gRXh0X2QzX2hpZXJhcmNoeV9wYXJ0aXRpb25fU3VuYnVyc3QuZ2V0RXZlbnRzKEV4dEQzX3N1bmJ1cnN0TWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0RDNfc3VuYnVyc3RNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dEQzX3N1bmJ1cnN0TWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dEQzX3N1bmJ1cnN0TWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWQzLXN1bmJ1cnN0JyxcbiAgaW5wdXRzOiBFeHREM19zdW5idXJzdE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dEQzX3N1bmJ1cnN0TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEQzX3N1bmJ1cnN0Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RDNfc3VuYnVyc3RDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0RDNfc3VuYnVyc3RNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0RDNfc3VuYnVyc3RNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2QzLXN1bmJ1cnN0J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19