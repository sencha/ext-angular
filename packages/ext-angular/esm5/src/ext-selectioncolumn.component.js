import * as tslib_1 from "tslib";
import { Ext_grid_column_Selection } from './Ext/grid/column/Selection';
var ExtSelectioncolumnMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSelectioncolumnMetaData, _super);
    function ExtSelectioncolumnMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtSelectioncolumnMetaData.getAll = function () {
        ExtSelectioncolumnMetaData.PROPERTIES = Ext_grid_column_Selection.getProperties(ExtSelectioncolumnMetaData.PROPERTIES);
        ExtSelectioncolumnMetaData.EVENTS = Ext_grid_column_Selection.getEvents(ExtSelectioncolumnMetaData.EVENTS);
        ExtSelectioncolumnMetaData.EVENTS.forEach(function (event) {
            ExtSelectioncolumnMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtSelectioncolumnMetaData.PROPERTIES = [];
    ExtSelectioncolumnMetaData.EVENTS = [];
    ExtSelectioncolumnMetaData.EVENTNAMES = [];
    return ExtSelectioncolumnMetaData;
}(Ext_grid_column_Selection));
export { ExtSelectioncolumnMetaData };
(function () { ExtSelectioncolumnMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtSelectioncolumnComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSelectioncolumnComponent, _super);
    function ExtSelectioncolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtSelectioncolumnMetaData.PROPERTIES, ExtSelectioncolumnMetaData.EVENTS) || this;
        _this.xtype = 'selectioncolumn';
        return _this;
    }
    ExtSelectioncolumnComponent_1 = ExtSelectioncolumnComponent;
    ExtSelectioncolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSelectioncolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSelectioncolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSelectioncolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSelectioncolumnComponent_1;
    ExtSelectioncolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtSelectioncolumnComponent = ExtSelectioncolumnComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-selectioncolumn',
            inputs: ExtSelectioncolumnMetaData.PROPERTIES,
            outputs: ExtSelectioncolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSelectioncolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtSelectioncolumnComponent);
    return ExtSelectioncolumnComponent;
}(EngBase));
export { ExtSelectioncolumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNlbGVjdGlvbmNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1zZWxlY3Rpb25jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RTtJQUFnRCxzREFBeUI7SUFBekU7O0lBV0EsQ0FBQztJQVBVLGlDQUFNLEdBQWI7UUFDSSwwQkFBMEIsQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZILDBCQUEwQixDQUFDLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0csMEJBQTBCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDbEQsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFkscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsaUNBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsaUNBQUM7Q0FBQSxBQVhELENBQWdELHlCQUF5QixHQVd4RTtTQVhZLDBCQUEwQjtBQVl2QyxDQUFDLGNBQWEsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBaUQsdURBQU87SUFFcEQscUNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDBCQUEwQixDQUFDLFVBQVUsRUFDckMsMEJBQTBCLENBQUMsTUFBTSxDQUNwQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTs7SUFDbEMsQ0FBQztvQ0FiUSwyQkFBMkI7SUFlN0IsOENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0scURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0saURBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0saURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDJCQUEyQjtRQVB2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzdDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBMkIsRUFBM0IsQ0FBMkIsQ0FBQyxFQUFDLENBQUM7WUFDM0YsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsMkJBQTJCLENBOEJ2QztJQUFELGtDQUFDO0NBQUEsQUE5QkQsQ0FBaUQsT0FBTyxHQThCdkQ7U0E5QlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2dyaWRfY29sdW1uX1NlbGVjdGlvbiB9IGZyb20gJy4vRXh0L2dyaWQvY29sdW1uL1NlbGVjdGlvbic7XG5leHBvcnQgY2xhc3MgRXh0U2VsZWN0aW9uY29sdW1uTWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9jb2x1bW5fU2VsZWN0aW9uIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZ3JpZF9jb2x1bW5fU2VsZWN0aW9uLmdldFByb3BlcnRpZXMoRXh0U2VsZWN0aW9uY29sdW1uTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLkVWRU5UUyA9IEV4dF9ncmlkX2NvbHVtbl9TZWxlY3Rpb24uZ2V0RXZlbnRzKEV4dFNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0U2VsZWN0aW9uY29sdW1uTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1zZWxlY3Rpb25jb2x1bW4nLFxuICBpbnB1dHM6IEV4dFNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRTZWxlY3Rpb25jb2x1bW5Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRTZWxlY3Rpb25jb2x1bW5Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0U2VsZWN0aW9uY29sdW1uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFNlbGVjdGlvbmNvbHVtbk1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnc2VsZWN0aW9uY29sdW1uJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19