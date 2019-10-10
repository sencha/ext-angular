import * as tslib_1 from "tslib";
import { Ext_grid_cell_RowNumberer } from './Ext/grid/cell/RowNumberer';
var ExtRownumberercellMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRownumberercellMetaData, _super);
    function ExtRownumberercellMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtRownumberercellMetaData.getAll = function () {
        ExtRownumberercellMetaData.PROPERTIES = Ext_grid_cell_RowNumberer.getProperties(ExtRownumberercellMetaData.PROPERTIES);
        ExtRownumberercellMetaData.EVENTS = Ext_grid_cell_RowNumberer.getEvents(ExtRownumberercellMetaData.EVENTS);
        ExtRownumberercellMetaData.EVENTS.forEach(function (event) {
            ExtRownumberercellMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtRownumberercellMetaData.PROPERTIES = [];
    ExtRownumberercellMetaData.EVENTS = [];
    ExtRownumberercellMetaData.EVENTNAMES = [];
    return ExtRownumberercellMetaData;
}(Ext_grid_cell_RowNumberer));
export { ExtRownumberercellMetaData };
(function () { ExtRownumberercellMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtRownumberercellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRownumberercellComponent, _super);
    function ExtRownumberercellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRownumberercellMetaData.PROPERTIES, ExtRownumberercellMetaData.EVENTS) || this;
        _this.xtype = 'rownumberercell';
        return _this;
    }
    ExtRownumberercellComponent_1 = ExtRownumberercellComponent;
    ExtRownumberercellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRownumberercellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRownumberercellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRownumberercellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRownumberercellComponent_1;
    ExtRownumberercellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRownumberercellComponent = ExtRownumberercellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-rownumberercell',
            inputs: ExtRownumberercellMetaData.PROPERTIES,
            outputs: ExtRownumberercellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRownumberercellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRownumberercellComponent);
    return ExtRownumberercellComponent;
}(EngBase));
export { ExtRownumberercellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXJvd251bWJlcmVyY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1yb3dudW1iZXJlcmNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RTtJQUFnRCxzREFBeUI7SUFBekU7O0lBV0EsQ0FBQztJQVBVLGlDQUFNLEdBQWI7UUFDSSwwQkFBMEIsQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZILDBCQUEwQixDQUFDLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0csMEJBQTBCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDbEQsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFkscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsaUNBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsaUNBQUM7Q0FBQSxBQVhELENBQWdELHlCQUF5QixHQVd4RTtTQVhZLDBCQUEwQjtBQVl2QyxDQUFDLGNBQWEsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBaUQsdURBQU87SUFFcEQscUNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDBCQUEwQixDQUFDLFVBQVUsRUFDckMsMEJBQTBCLENBQUMsTUFBTSxDQUNwQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTs7SUFDbEMsQ0FBQztvQ0FiUSwyQkFBMkI7SUFlN0IsOENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0scURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0saURBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0saURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDJCQUEyQjtRQVB2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzdDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBMkIsRUFBM0IsQ0FBMkIsQ0FBQyxFQUFDLENBQUM7WUFDM0YsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsMkJBQTJCLENBOEJ2QztJQUFELGtDQUFDO0NBQUEsQUE5QkQsQ0FBaUQsT0FBTyxHQThCdkQ7U0E5QlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2dyaWRfY2VsbF9Sb3dOdW1iZXJlciB9IGZyb20gJy4vRXh0L2dyaWQvY2VsbC9Sb3dOdW1iZXJlcic7XG5leHBvcnQgY2xhc3MgRXh0Um93bnVtYmVyZXJjZWxsTWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9jZWxsX1Jvd051bWJlcmVyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFJvd251bWJlcmVyY2VsbE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZ3JpZF9jZWxsX1Jvd051bWJlcmVyLmdldFByb3BlcnRpZXMoRXh0Um93bnVtYmVyZXJjZWxsTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFJvd251bWJlcmVyY2VsbE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9ncmlkX2NlbGxfUm93TnVtYmVyZXIuZ2V0RXZlbnRzKEV4dFJvd251bWJlcmVyY2VsbE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFJvd251bWJlcmVyY2VsbE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Um93bnVtYmVyZXJjZWxsTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFJvd251bWJlcmVyY2VsbE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1yb3dudW1iZXJlcmNlbGwnLFxuICBpbnB1dHM6IEV4dFJvd251bWJlcmVyY2VsbE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFJvd251bWJlcmVyY2VsbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRSb3dudW1iZXJlcmNlbGxDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRSb3dudW1iZXJlcmNlbGxDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0Um93bnVtYmVyZXJjZWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFJvd251bWJlcmVyY2VsbE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAncm93bnVtYmVyZXJjZWxsJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19