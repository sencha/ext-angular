import * as tslib_1 from "tslib";
import { Ext_Gadget } from './Ext/Gadget';
var ExtWidgetMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtWidgetMetaData, _super);
    function ExtWidgetMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtWidgetMetaData.getAll = function () {
        ExtWidgetMetaData.PROPERTIES = Ext_Gadget.getProperties(ExtWidgetMetaData.PROPERTIES);
        ExtWidgetMetaData.EVENTS = Ext_Gadget.getEvents(ExtWidgetMetaData.EVENTS);
        ExtWidgetMetaData.EVENTS.forEach(function (event) {
            ExtWidgetMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtWidgetMetaData.PROPERTIES = [];
    ExtWidgetMetaData.EVENTS = [];
    ExtWidgetMetaData.EVENTNAMES = [];
    return ExtWidgetMetaData;
}(Ext_Gadget));
export { ExtWidgetMetaData };
(function () { ExtWidgetMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtWidgetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtWidgetComponent, _super);
    function ExtWidgetComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtWidgetMetaData.PROPERTIES, ExtWidgetMetaData.EVENTS) || this;
        _this.xtype = 'widget';
        return _this;
    }
    ExtWidgetComponent_1 = ExtWidgetComponent;
    ExtWidgetComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtWidgetComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtWidgetComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtWidgetComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtWidgetComponent_1;
    ExtWidgetComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtWidgetComponent = ExtWidgetComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-widget',
            inputs: ExtWidgetMetaData.PROPERTIES,
            outputs: ExtWidgetMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtWidgetComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtWidgetComponent);
    return ExtWidgetComponent;
}(EngBase));
export { ExtWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDO0lBQXVDLDZDQUFVO0lBQWpEOztJQVdBLENBQUM7SUFQVSx3QkFBTSxHQUFiO1FBQ0ksaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsaUJBQWlCLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDekMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsd0JBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsd0JBQUM7Q0FBQSxBQVhELENBQXVDLFVBQVUsR0FXaEQ7U0FYWSxpQkFBaUI7QUFZOUIsQ0FBQyxjQUFhLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXdDLDhDQUFPO0lBRTNDLDRCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixpQkFBaUIsQ0FBQyxVQUFVLEVBQzVCLGlCQUFpQixDQUFDLE1BQU0sQ0FDM0IsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBOztJQUN6QixDQUFDOzJCQWJRLGtCQUFrQjtJQWVwQixxQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSx3Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsa0JBQWtCO1FBUDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFDLENBQUM7WUFDbEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsa0JBQWtCLENBOEI5QjtJQUFELHlCQUFDO0NBQUEsQUE5QkQsQ0FBd0MsT0FBTyxHQThCOUM7U0E5Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X0dhZGdldCB9IGZyb20gJy4vRXh0L0dhZGdldCc7XG5leHBvcnQgY2xhc3MgRXh0V2lkZ2V0TWV0YURhdGEgZXh0ZW5kcyBFeHRfR2FkZ2V0IHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFdpZGdldE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfR2FkZ2V0LmdldFByb3BlcnRpZXMoRXh0V2lkZ2V0TWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFdpZGdldE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9HYWRnZXQuZ2V0RXZlbnRzKEV4dFdpZGdldE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFdpZGdldE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0V2lkZ2V0TWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFdpZGdldE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC13aWRnZXQnLFxuICBpbnB1dHM6IEV4dFdpZGdldE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFdpZGdldE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRXaWRnZXRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0V2lkZ2V0TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFdpZGdldE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnd2lkZ2V0J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19