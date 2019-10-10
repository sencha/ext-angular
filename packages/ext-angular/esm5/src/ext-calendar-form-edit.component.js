import * as tslib_1 from "tslib";
import { Ext_calendar_form_Edit } from './Ext/calendar/form/Edit';
var ExtCalendar_form_editMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_form_editMetaData, _super);
    function ExtCalendar_form_editMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCalendar_form_editMetaData.getAll = function () {
        ExtCalendar_form_editMetaData.PROPERTIES = Ext_calendar_form_Edit.getProperties(ExtCalendar_form_editMetaData.PROPERTIES);
        ExtCalendar_form_editMetaData.EVENTS = Ext_calendar_form_Edit.getEvents(ExtCalendar_form_editMetaData.EVENTS);
        ExtCalendar_form_editMetaData.EVENTS.forEach(function (event) {
            ExtCalendar_form_editMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCalendar_form_editMetaData.PROPERTIES = [];
    ExtCalendar_form_editMetaData.EVENTS = [];
    ExtCalendar_form_editMetaData.EVENTNAMES = [];
    return ExtCalendar_form_editMetaData;
}(Ext_calendar_form_Edit));
export { ExtCalendar_form_editMetaData };
(function () { ExtCalendar_form_editMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCalendar_form_editComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_form_editComponent, _super);
    function ExtCalendar_form_editComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCalendar_form_editMetaData.PROPERTIES, ExtCalendar_form_editMetaData.EVENTS) || this;
        _this.xtype = 'calendar-form-edit';
        return _this;
    }
    ExtCalendar_form_editComponent_1 = ExtCalendar_form_editComponent;
    ExtCalendar_form_editComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_form_editComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_form_editComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_form_editComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_form_editComponent_1;
    ExtCalendar_form_editComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCalendar_form_editComponent = ExtCalendar_form_editComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-form-edit',
            inputs: ExtCalendar_form_editMetaData.PROPERTIES,
            outputs: ExtCalendar_form_editMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_form_editComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCalendar_form_editComponent);
    return ExtCalendar_form_editComponent;
}(EngBase));
export { ExtCalendar_form_editComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWZvcm0tZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1jYWxlbmRhci1mb3JtLWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRTtJQUFtRCx5REFBc0I7SUFBekU7O0lBV0EsQ0FBQztJQVBVLG9DQUFNLEdBQWI7UUFDSSw2QkFBNkIsQ0FBQyxVQUFVLEdBQUcsc0JBQXNCLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFILDZCQUE2QixDQUFDLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUcsNkJBQTZCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDckQsNkJBQTZCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsb0NBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsd0NBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsb0NBQUM7Q0FBQSxBQVhELENBQW1ELHNCQUFzQixHQVd4RTtTQVhZLDZCQUE2QjtBQVkxQyxDQUFDLGNBQWEsNkJBQTZCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBb0QsMERBQU87SUFFdkQsd0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDZCQUE2QixDQUFDLFVBQVUsRUFDeEMsNkJBQTZCLENBQUMsTUFBTSxDQUN2QyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQTs7SUFDckMsQ0FBQzt1Q0FiUSw4QkFBOEI7SUFlaEMsaURBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sd0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sb0RBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sb0RBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDhCQUE4QjtRQVAxQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2hELE9BQU8sRUFBRSw2QkFBNkIsQ0FBQyxVQUFVO1lBQ2pELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBOEIsRUFBOUIsQ0FBOEIsQ0FBQyxFQUFDLENBQUM7WUFDOUYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsOEJBQThCLENBOEIxQztJQUFELHFDQUFDO0NBQUEsQUE5QkQsQ0FBb0QsT0FBTyxHQThCMUQ7U0E5QlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NhbGVuZGFyX2Zvcm1fRWRpdCB9IGZyb20gJy4vRXh0L2NhbGVuZGFyL2Zvcm0vRWRpdCc7XG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfZm9ybV9lZGl0TWV0YURhdGEgZXh0ZW5kcyBFeHRfY2FsZW5kYXJfZm9ybV9FZGl0IHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fZWRpdE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfY2FsZW5kYXJfZm9ybV9FZGl0LmdldFByb3BlcnRpZXMoRXh0Q2FsZW5kYXJfZm9ybV9lZGl0TWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fZWRpdE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9jYWxlbmRhcl9mb3JtX0VkaXQuZ2V0RXZlbnRzKEV4dENhbGVuZGFyX2Zvcm1fZWRpdE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fZWRpdE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfZm9ybV9lZGl0TWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dENhbGVuZGFyX2Zvcm1fZWRpdE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1jYWxlbmRhci1mb3JtLWVkaXQnLFxuICBpbnB1dHM6IEV4dENhbGVuZGFyX2Zvcm1fZWRpdE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dENhbGVuZGFyX2Zvcm1fZWRpdE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9mb3JtX2VkaXRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9mb3JtX2VkaXRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Q2FsZW5kYXJfZm9ybV9lZGl0TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dENhbGVuZGFyX2Zvcm1fZWRpdE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY2FsZW5kYXItZm9ybS1lZGl0J1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19