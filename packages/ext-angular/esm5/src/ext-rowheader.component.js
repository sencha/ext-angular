import * as tslib_1 from "tslib";
import { Ext_grid_RowHeader } from './Ext/grid/RowHeader';
var ExtRowheaderMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRowheaderMetaData, _super);
    function ExtRowheaderMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtRowheaderMetaData.getAll = function () {
        ExtRowheaderMetaData.PROPERTIES = Ext_grid_RowHeader.getProperties(ExtRowheaderMetaData.PROPERTIES);
        ExtRowheaderMetaData.EVENTS = Ext_grid_RowHeader.getEvents(ExtRowheaderMetaData.EVENTS);
        ExtRowheaderMetaData.EVENTS.forEach(function (event) {
            ExtRowheaderMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtRowheaderMetaData.PROPERTIES = [];
    ExtRowheaderMetaData.EVENTS = [];
    ExtRowheaderMetaData.EVENTNAMES = [];
    return ExtRowheaderMetaData;
}(Ext_grid_RowHeader));
export { ExtRowheaderMetaData };
(function () { ExtRowheaderMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtRowheaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRowheaderComponent, _super);
    function ExtRowheaderComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRowheaderMetaData.PROPERTIES, ExtRowheaderMetaData.EVENTS) || this;
        _this.xtype = 'rowheader';
        return _this;
    }
    ExtRowheaderComponent_1 = ExtRowheaderComponent;
    ExtRowheaderComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRowheaderComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRowheaderComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRowheaderComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRowheaderComponent_1;
    ExtRowheaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRowheaderComponent = ExtRowheaderComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-rowheader',
            inputs: ExtRowheaderMetaData.PROPERTIES,
            outputs: ExtRowheaderMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRowheaderComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRowheaderComponent);
    return ExtRowheaderComponent;
}(EngBase));
export { ExtRowheaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXJvd2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1yb3doZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRDtJQUEwQyxnREFBa0I7SUFBNUQ7O0lBV0EsQ0FBQztJQVBVLDJCQUFNLEdBQWI7UUFDSSxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BHLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEYsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDNUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksK0JBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsMkJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsK0JBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsMkJBQUM7Q0FBQSxBQVhELENBQTBDLGtCQUFrQixHQVczRDtTQVhZLG9CQUFvQjtBQVlqQyxDQUFDLGNBQWEsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBMkMsaURBQU87SUFFOUMsK0JBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLG9CQUFvQixDQUFDLFVBQVUsRUFDL0Isb0JBQW9CLENBQUMsTUFBTSxDQUM5QixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUE7O0lBQzVCLENBQUM7OEJBYlEscUJBQXFCO0lBZXZCLHdDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLCtDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLDJDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixxQkFBcUI7UUFQakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDdkMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDeEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDLEVBQUMsQ0FBQztZQUNyRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxxQkFBcUIsQ0E4QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlCRCxDQUEyQyxPQUFPLEdBOEJqRDtTQTlCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZ3JpZF9Sb3dIZWFkZXIgfSBmcm9tICcuL0V4dC9ncmlkL1Jvd0hlYWRlcic7XG5leHBvcnQgY2xhc3MgRXh0Um93aGVhZGVyTWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9Sb3dIZWFkZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0Um93aGVhZGVyTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9ncmlkX1Jvd0hlYWRlci5nZXRQcm9wZXJ0aWVzKEV4dFJvd2hlYWRlck1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRSb3doZWFkZXJNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZ3JpZF9Sb3dIZWFkZXIuZ2V0RXZlbnRzKEV4dFJvd2hlYWRlck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFJvd2hlYWRlck1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Um93aGVhZGVyTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFJvd2hlYWRlck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1yb3doZWFkZXInLFxuICBpbnB1dHM6IEV4dFJvd2hlYWRlck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFJvd2hlYWRlck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRSb3doZWFkZXJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRSb3doZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Um93aGVhZGVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFJvd2hlYWRlck1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAncm93aGVhZGVyJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19