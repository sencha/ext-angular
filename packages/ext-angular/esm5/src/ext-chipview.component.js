import * as tslib_1 from "tslib";
import { Ext_dataview_ChipView } from './Ext/dataview/ChipView';
var ExtChipviewMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtChipviewMetaData, _super);
    function ExtChipviewMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtChipviewMetaData.getAll = function () {
        ExtChipviewMetaData.PROPERTIES = Ext_dataview_ChipView.getProperties(ExtChipviewMetaData.PROPERTIES);
        ExtChipviewMetaData.EVENTS = Ext_dataview_ChipView.getEvents(ExtChipviewMetaData.EVENTS);
        ExtChipviewMetaData.EVENTS.forEach(function (event) {
            ExtChipviewMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtChipviewMetaData.PROPERTIES = [];
    ExtChipviewMetaData.EVENTS = [];
    ExtChipviewMetaData.EVENTNAMES = [];
    return ExtChipviewMetaData;
}(Ext_dataview_ChipView));
export { ExtChipviewMetaData };
(function () { ExtChipviewMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtChipviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtChipviewComponent, _super);
    function ExtChipviewComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtChipviewMetaData.PROPERTIES, ExtChipviewMetaData.EVENTS) || this;
        _this.xtype = 'chipview';
        return _this;
    }
    ExtChipviewComponent_1 = ExtChipviewComponent;
    ExtChipviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtChipviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtChipviewComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtChipviewComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtChipviewComponent_1;
    ExtChipviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtChipviewComponent = ExtChipviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-chipview',
            inputs: ExtChipviewMetaData.PROPERTIES,
            outputs: ExtChipviewMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtChipviewComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtChipviewComponent);
    return ExtChipviewComponent;
}(EngBase));
export { ExtChipviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoaXB2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNoaXB2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEU7SUFBeUMsK0NBQXFCO0lBQTlEOztJQVdBLENBQUM7SUFQVSwwQkFBTSxHQUFiO1FBQ0ksbUJBQW1CLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pGLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzNDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDhCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDBCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDhCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDBCQUFDO0NBQUEsQUFYRCxDQUF5QyxxQkFBcUIsR0FXN0Q7U0FYWSxtQkFBbUI7QUFZaEMsQ0FBQyxjQUFhLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTBDLGdEQUFPO0lBRTdDLDhCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixtQkFBbUIsQ0FBQyxVQUFVLEVBQzlCLG1CQUFtQixDQUFDLE1BQU0sQ0FDN0IsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFBOztJQUMzQixDQUFDOzZCQWJRLG9CQUFvQjtJQWV0Qix1Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSw4Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsb0JBQW9CO1FBUGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFDLENBQUM7WUFDcEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsb0JBQW9CLENBOEJoQztJQUFELDJCQUFDO0NBQUEsQUE5QkQsQ0FBMEMsT0FBTyxHQThCaEQ7U0E5Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2RhdGF2aWV3X0NoaXBWaWV3IH0gZnJvbSAnLi9FeHQvZGF0YXZpZXcvQ2hpcFZpZXcnO1xuZXhwb3J0IGNsYXNzIEV4dENoaXB2aWV3TWV0YURhdGEgZXh0ZW5kcyBFeHRfZGF0YXZpZXdfQ2hpcFZpZXcge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0Q2hpcHZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2RhdGF2aWV3X0NoaXBWaWV3LmdldFByb3BlcnRpZXMoRXh0Q2hpcHZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0Q2hpcHZpZXdNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZGF0YXZpZXdfQ2hpcFZpZXcuZ2V0RXZlbnRzKEV4dENoaXB2aWV3TWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0Q2hpcHZpZXdNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dENoaXB2aWV3TWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dENoaXB2aWV3TWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNoaXB2aWV3JyxcbiAgaW5wdXRzOiBFeHRDaGlwdmlld01ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dENoaXB2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENoaXB2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2hpcHZpZXdDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Q2hpcHZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0Q2hpcHZpZXdNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2NoaXB2aWV3J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19