import * as tslib_1 from "tslib";
import { Ext_Gadget } from './Ext/Gadget';
var ExtComponentMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtComponentMetaData, _super);
    function ExtComponentMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtComponentMetaData.getAll = function () {
        ExtComponentMetaData.PROPERTIES = Ext_Gadget.getProperties(ExtComponentMetaData.PROPERTIES);
        ExtComponentMetaData.EVENTS = Ext_Gadget.getEvents(ExtComponentMetaData.EVENTS);
        ExtComponentMetaData.EVENTS.forEach(function (event) {
            ExtComponentMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtComponentMetaData.PROPERTIES = [];
    ExtComponentMetaData.EVENTS = [];
    ExtComponentMetaData.EVENTNAMES = [];
    return ExtComponentMetaData;
}(Ext_Gadget));
export { ExtComponentMetaData };
(function () { ExtComponentMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtComponentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtComponentComponent, _super);
    function ExtComponentComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtComponentMetaData.PROPERTIES, ExtComponentMetaData.EVENTS) || this;
        _this.xtype = 'component';
        return _this;
    }
    ExtComponentComponent_1 = ExtComponentComponent;
    ExtComponentComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtComponentComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtComponentComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtComponentComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtComponentComponent_1;
    ExtComponentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtComponentComponent = ExtComponentComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-component',
            inputs: ExtComponentMetaData.PROPERTIES,
            outputs: ExtComponentMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtComponentComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtComponentComponent);
    return ExtComponentComponent;
}(EngBase));
export { ExtComponentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDO0lBQTBDLGdEQUFVO0lBQXBEOztJQVdBLENBQUM7SUFQVSwyQkFBTSxHQUFiO1FBQ0ksb0JBQW9CLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUYsb0JBQW9CLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEYsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDNUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksK0JBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsMkJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsK0JBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsMkJBQUM7Q0FBQSxBQVhELENBQTBDLFVBQVUsR0FXbkQ7U0FYWSxvQkFBb0I7QUFZakMsQ0FBQyxjQUFhLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTJDLGlEQUFPO0lBRTlDLCtCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixvQkFBb0IsQ0FBQyxVQUFVLEVBQy9CLG9CQUFvQixDQUFDLE1BQU0sQ0FDOUIsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFBOztJQUM1QixDQUFDOzhCQWJRLHFCQUFxQjtJQWV2Qix3Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSwrQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSwyQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIscUJBQXFCO1FBUGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxVQUFVO1lBQ3ZDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxVQUFVO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBcUIsRUFBckIsQ0FBcUIsQ0FBQyxFQUFDLENBQUM7WUFDckYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQscUJBQXFCLENBOEJqQztJQUFELDRCQUFDO0NBQUEsQUE5QkQsQ0FBMkMsT0FBTyxHQThCakQ7U0E5QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X0dhZGdldCB9IGZyb20gJy4vRXh0L0dhZGdldCc7XG5leHBvcnQgY2xhc3MgRXh0Q29tcG9uZW50TWV0YURhdGEgZXh0ZW5kcyBFeHRfR2FkZ2V0IHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENvbXBvbmVudE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfR2FkZ2V0LmdldFByb3BlcnRpZXMoRXh0Q29tcG9uZW50TWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dENvbXBvbmVudE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9HYWRnZXQuZ2V0RXZlbnRzKEV4dENvbXBvbmVudE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dENvbXBvbmVudE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Q29tcG9uZW50TWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dENvbXBvbmVudE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1jb21wb25lbnQnLFxuICBpbnB1dHM6IEV4dENvbXBvbmVudE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dENvbXBvbmVudE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDb21wb25lbnRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDb21wb25lbnRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Q29tcG9uZW50TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dENvbXBvbmVudE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY29tcG9uZW50J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19