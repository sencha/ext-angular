import * as tslib_1 from "tslib";
import { Ext_TabBar } from './Ext/TabBar';
var ExtTabbarMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTabbarMetaData, _super);
    function ExtTabbarMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtTabbarMetaData.getAll = function () {
        ExtTabbarMetaData.PROPERTIES = Ext_TabBar.getProperties(ExtTabbarMetaData.PROPERTIES);
        ExtTabbarMetaData.EVENTS = Ext_TabBar.getEvents(ExtTabbarMetaData.EVENTS);
        ExtTabbarMetaData.EVENTS.forEach(function (event) {
            ExtTabbarMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtTabbarMetaData.PROPERTIES = [];
    ExtTabbarMetaData.EVENTS = [];
    ExtTabbarMetaData.EVENTNAMES = [];
    return ExtTabbarMetaData;
}(Ext_TabBar));
export { ExtTabbarMetaData };
(function () { ExtTabbarMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtTabbarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTabbarComponent, _super);
    function ExtTabbarComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTabbarMetaData.PROPERTIES, ExtTabbarMetaData.EVENTS) || this;
        _this.xtype = 'tabbar';
        return _this;
    }
    ExtTabbarComponent_1 = ExtTabbarComponent;
    ExtTabbarComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTabbarComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTabbarComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTabbarComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTabbarComponent_1;
    ExtTabbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTabbarComponent = ExtTabbarComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-tabbar',
            inputs: ExtTabbarMetaData.PROPERTIES,
            outputs: ExtTabbarMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTabbarComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTabbarComponent);
    return ExtTabbarComponent;
}(EngBase));
export { ExtTabbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRhYmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC10YWJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDO0lBQXVDLDZDQUFVO0lBQWpEOztJQVdBLENBQUM7SUFQVSx3QkFBTSxHQUFiO1FBQ0ksaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEYsaUJBQWlCLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDekMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsd0JBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsd0JBQUM7Q0FBQSxBQVhELENBQXVDLFVBQVUsR0FXaEQ7U0FYWSxpQkFBaUI7QUFZOUIsQ0FBQyxjQUFhLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXdDLDhDQUFPO0lBRTNDLDRCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixpQkFBaUIsQ0FBQyxVQUFVLEVBQzVCLGlCQUFpQixDQUFDLE1BQU0sQ0FDM0IsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBOztJQUN6QixDQUFDOzJCQWJRLGtCQUFrQjtJQWVwQixxQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSx3Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsa0JBQWtCO1FBUDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFDLENBQUM7WUFDbEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsa0JBQWtCLENBOEI5QjtJQUFELHlCQUFDO0NBQUEsQUE5QkQsQ0FBd0MsT0FBTyxHQThCOUM7U0E5Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X1RhYkJhciB9IGZyb20gJy4vRXh0L1RhYkJhcic7XG5leHBvcnQgY2xhc3MgRXh0VGFiYmFyTWV0YURhdGEgZXh0ZW5kcyBFeHRfVGFiQmFyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFRhYmJhck1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfVGFiQmFyLmdldFByb3BlcnRpZXMoRXh0VGFiYmFyTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFRhYmJhck1ldGFEYXRhLkVWRU5UUyA9IEV4dF9UYWJCYXIuZ2V0RXZlbnRzKEV4dFRhYmJhck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFRhYmJhck1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0VGFiYmFyTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFRhYmJhck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC10YWJiYXInLFxuICBpbnB1dHM6IEV4dFRhYmJhck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFRhYmJhck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRUYWJiYXJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRUYWJiYXJDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0VGFiYmFyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFRhYmJhck1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAndGFiYmFyJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19