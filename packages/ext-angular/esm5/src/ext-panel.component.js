import * as tslib_1 from "tslib";
import { Ext_panel_Panel } from './Ext/panel/Panel';
var ExtPanelMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPanelMetaData, _super);
    function ExtPanelMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPanelMetaData.getAll = function () {
        ExtPanelMetaData.PROPERTIES = Ext_panel_Panel.getProperties(ExtPanelMetaData.PROPERTIES);
        ExtPanelMetaData.EVENTS = Ext_panel_Panel.getEvents(ExtPanelMetaData.EVENTS);
        ExtPanelMetaData.EVENTS.forEach(function (event) {
            ExtPanelMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPanelMetaData.PROPERTIES = [];
    ExtPanelMetaData.EVENTS = [];
    ExtPanelMetaData.EVENTNAMES = [];
    return ExtPanelMetaData;
}(Ext_panel_Panel));
export { ExtPanelMetaData };
(function () { ExtPanelMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPanelComponent, _super);
    function ExtPanelComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPanelMetaData.PROPERTIES, ExtPanelMetaData.EVENTS) || this;
        _this.xtype = 'panel';
        return _this;
    }
    ExtPanelComponent_1 = ExtPanelComponent;
    ExtPanelComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPanelComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPanelComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPanelComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPanelComponent_1;
    ExtPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPanelComponent = ExtPanelComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-panel',
            inputs: ExtPanelMetaData.PROPERTIES,
            outputs: ExtPanelMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPanelComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPanelComponent);
    return ExtPanelComponent;
}(EngBase));
export { ExtPanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BEO0lBQXNDLDRDQUFlO0lBQXJEOztJQVdBLENBQUM7SUFQVSx1QkFBTSxHQUFiO1FBQ0ksZ0JBQWdCLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekYsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0UsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDeEMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksMkJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsdUJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsMkJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsdUJBQUM7Q0FBQSxBQVhELENBQXNDLGVBQWUsR0FXcEQ7U0FYWSxnQkFBZ0I7QUFZN0IsQ0FBQyxjQUFhLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXVDLDZDQUFPO0lBRTFDLDJCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixnQkFBZ0IsQ0FBQyxVQUFVLEVBQzNCLGdCQUFnQixDQUFDLE1BQU0sQ0FDMUIsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBOztJQUN4QixDQUFDOzBCQWJRLGlCQUFpQjtJQWVuQixvQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSx1Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsaUJBQWlCO1FBUDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ25DLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQyxFQUFDLENBQUM7WUFDakYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsaUJBQWlCLENBOEI3QjtJQUFELHdCQUFDO0NBQUEsQUE5QkQsQ0FBdUMsT0FBTyxHQThCN0M7U0E5QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3BhbmVsX1BhbmVsIH0gZnJvbSAnLi9FeHQvcGFuZWwvUGFuZWwnO1xuZXhwb3J0IGNsYXNzIEV4dFBhbmVsTWV0YURhdGEgZXh0ZW5kcyBFeHRfcGFuZWxfUGFuZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0UGFuZWxNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X3BhbmVsX1BhbmVsLmdldFByb3BlcnRpZXMoRXh0UGFuZWxNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0UGFuZWxNZXRhRGF0YS5FVkVOVFMgPSBFeHRfcGFuZWxfUGFuZWwuZ2V0RXZlbnRzKEV4dFBhbmVsTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0UGFuZWxNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFBhbmVsTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFBhbmVsTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXBhbmVsJyxcbiAgaW5wdXRzOiBFeHRQYW5lbE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFBhbmVsTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFBhbmVsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGFuZWxDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0UGFuZWxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0UGFuZWxNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3BhbmVsJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19