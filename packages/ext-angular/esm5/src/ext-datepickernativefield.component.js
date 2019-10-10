import * as tslib_1 from "tslib";
import { Ext_form_DatePickerNative } from './Ext/form/DatePickerNative';
var ExtDatepickernativefieldMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatepickernativefieldMetaData, _super);
    function ExtDatepickernativefieldMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtDatepickernativefieldMetaData.getAll = function () {
        ExtDatepickernativefieldMetaData.PROPERTIES = Ext_form_DatePickerNative.getProperties(ExtDatepickernativefieldMetaData.PROPERTIES);
        ExtDatepickernativefieldMetaData.EVENTS = Ext_form_DatePickerNative.getEvents(ExtDatepickernativefieldMetaData.EVENTS);
        ExtDatepickernativefieldMetaData.EVENTS.forEach(function (event) {
            ExtDatepickernativefieldMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtDatepickernativefieldMetaData.PROPERTIES = [];
    ExtDatepickernativefieldMetaData.EVENTS = [];
    ExtDatepickernativefieldMetaData.EVENTNAMES = [];
    return ExtDatepickernativefieldMetaData;
}(Ext_form_DatePickerNative));
export { ExtDatepickernativefieldMetaData };
(function () { ExtDatepickernativefieldMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtDatepickernativefieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatepickernativefieldComponent, _super);
    function ExtDatepickernativefieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDatepickernativefieldMetaData.PROPERTIES, ExtDatepickernativefieldMetaData.EVENTS) || this;
        _this.xtype = 'datepickernativefield';
        return _this;
    }
    ExtDatepickernativefieldComponent_1 = ExtDatepickernativefieldComponent;
    ExtDatepickernativefieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatepickernativefieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatepickernativefieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatepickernativefieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatepickernativefieldComponent_1;
    ExtDatepickernativefieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDatepickernativefieldComponent = ExtDatepickernativefieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-datepickernativefield',
            inputs: ExtDatepickernativefieldMetaData.PROPERTIES,
            outputs: ExtDatepickernativefieldMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatepickernativefieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDatepickernativefieldComponent);
    return ExtDatepickernativefieldComponent;
}(EngBase));
export { ExtDatepickernativefieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGVwaWNrZXJuYXRpdmVmaWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1kYXRlcGlja2VybmF0aXZlZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RTtJQUFzRCw0REFBeUI7SUFBL0U7O0lBV0EsQ0FBQztJQVBVLHVDQUFNLEdBQWI7UUFDSSxnQ0FBZ0MsQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25JLGdDQUFnQyxDQUFDLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkgsZ0NBQWdDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDeEQsZ0NBQWdDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksMkNBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsdUNBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsMkNBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsdUNBQUM7Q0FBQSxBQVhELENBQXNELHlCQUF5QixHQVc5RTtTQVhZLGdDQUFnQztBQVk3QyxDQUFDLGNBQWEsZ0NBQWdDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRTdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBdUQsNkRBQU87SUFFMUQsMkNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLGdDQUFnQyxDQUFDLFVBQVUsRUFDM0MsZ0NBQWdDLENBQUMsTUFBTSxDQUMxQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQTs7SUFDeEMsQ0FBQzswQ0FiUSxpQ0FBaUM7SUFlbkMsb0RBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sMkRBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sdURBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sdURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLGlDQUFpQztRQVA3QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLE1BQU0sRUFBRSxnQ0FBZ0MsQ0FBQyxVQUFVO1lBQ25ELE9BQU8sRUFBRSxnQ0FBZ0MsQ0FBQyxVQUFVO1lBQ3BELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQ0FBaUMsRUFBakMsQ0FBaUMsQ0FBQyxFQUFDLENBQUM7WUFDakcsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsaUNBQWlDLENBOEI3QztJQUFELHdDQUFDO0NBQUEsQUE5QkQsQ0FBdUQsT0FBTyxHQThCN0Q7U0E5QlksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2Zvcm1fRGF0ZVBpY2tlck5hdGl2ZSB9IGZyb20gJy4vRXh0L2Zvcm0vRGF0ZVBpY2tlck5hdGl2ZSc7XG5leHBvcnQgY2xhc3MgRXh0RGF0ZXBpY2tlcm5hdGl2ZWZpZWxkTWV0YURhdGEgZXh0ZW5kcyBFeHRfZm9ybV9EYXRlUGlja2VyTmF0aXZlIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dERhdGVwaWNrZXJuYXRpdmVmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZm9ybV9EYXRlUGlja2VyTmF0aXZlLmdldFByb3BlcnRpZXMoRXh0RGF0ZXBpY2tlcm5hdGl2ZWZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dERhdGVwaWNrZXJuYXRpdmVmaWVsZE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9mb3JtX0RhdGVQaWNrZXJOYXRpdmUuZ2V0RXZlbnRzKEV4dERhdGVwaWNrZXJuYXRpdmVmaWVsZE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dERhdGVwaWNrZXJuYXRpdmVmaWVsZE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0RGF0ZXBpY2tlcm5hdGl2ZWZpZWxkTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dERhdGVwaWNrZXJuYXRpdmVmaWVsZE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1kYXRlcGlja2VybmF0aXZlZmllbGQnLFxuICBpbnB1dHM6IEV4dERhdGVwaWNrZXJuYXRpdmVmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dERhdGVwaWNrZXJuYXRpdmVmaWVsZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREYXRlcGlja2VybmF0aXZlZmllbGRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHREYXRlcGlja2VybmF0aXZlZmllbGRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0RGF0ZXBpY2tlcm5hdGl2ZWZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dERhdGVwaWNrZXJuYXRpdmVmaWVsZE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnZGF0ZXBpY2tlcm5hdGl2ZWZpZWxkJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19