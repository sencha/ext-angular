import * as tslib_1 from "tslib";
import { Ext_Spacer } from './Ext/Spacer';
var ExtSpacerMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSpacerMetaData, _super);
    function ExtSpacerMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtSpacerMetaData.getAll = function () {
        ExtSpacerMetaData.PROPERTIES = Ext_Spacer.getProperties(ExtSpacerMetaData.PROPERTIES);
        ExtSpacerMetaData.EVENTS = Ext_Spacer.getEvents(ExtSpacerMetaData.EVENTS);
        ExtSpacerMetaData.EVENTS.forEach(function (event) {
            ExtSpacerMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtSpacerMetaData.PROPERTIES = [];
    ExtSpacerMetaData.EVENTS = [];
    ExtSpacerMetaData.EVENTNAMES = [];
    return ExtSpacerMetaData;
}(Ext_Spacer));
export { ExtSpacerMetaData };
(function () { ExtSpacerMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtSpacerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSpacerComponent, _super);
    function ExtSpacerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtSpacerMetaData.PROPERTIES, ExtSpacerMetaData.EVENTS) || this;
        _this.xtype = 'spacer';
        return _this;
    }
    ExtSpacerComponent_1 = ExtSpacerComponent;
    ExtSpacerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSpacerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSpacerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSpacerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSpacerComponent_1;
    ExtSpacerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtSpacerComponent = ExtSpacerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-spacer',
            inputs: ExtSpacerMetaData.PROPERTIES,
            outputs: ExtSpacerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSpacerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtSpacerComponent);
    return ExtSpacerComponent;
}(EngBase));
export { ExtSpacerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwYWNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1zcGFjZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDO0lBQXVDLDZDQUFVO0lBQWpEOztJQVdBLENBQUM7SUFQVSx3QkFBTSxHQUFiO1FBQ0ksaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsaUJBQWlCLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDekMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsd0JBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsd0JBQUM7Q0FBQSxBQVhELENBQXVDLFVBQVUsR0FXaEQ7U0FYWSxpQkFBaUI7QUFZOUIsQ0FBQyxjQUFhLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXdDLDhDQUFPO0lBRTNDLDRCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixpQkFBaUIsQ0FBQyxVQUFVLEVBQzVCLGlCQUFpQixDQUFDLE1BQU0sQ0FDM0IsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBOztJQUN6QixDQUFDOzJCQWJRLGtCQUFrQjtJQWVwQixxQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSx3Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsa0JBQWtCO1FBUDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFDLENBQUM7WUFDbEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsa0JBQWtCLENBOEI5QjtJQUFELHlCQUFDO0NBQUEsQUE5QkQsQ0FBd0MsT0FBTyxHQThCOUM7U0E5Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X1NwYWNlciB9IGZyb20gJy4vRXh0L1NwYWNlcic7XG5leHBvcnQgY2xhc3MgRXh0U3BhY2VyTWV0YURhdGEgZXh0ZW5kcyBFeHRfU3BhY2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFNwYWNlck1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfU3BhY2VyLmdldFByb3BlcnRpZXMoRXh0U3BhY2VyTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFNwYWNlck1ldGFEYXRhLkVWRU5UUyA9IEV4dF9TcGFjZXIuZ2V0RXZlbnRzKEV4dFNwYWNlck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFNwYWNlck1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0U3BhY2VyTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFNwYWNlck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1zcGFjZXInLFxuICBpbnB1dHM6IEV4dFNwYWNlck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFNwYWNlck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRTcGFjZXJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRTcGFjZXJDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0U3BhY2VyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFNwYWNlck1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnc3BhY2VyJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19