import * as tslib_1 from "tslib";
import { Ext_grid_column_Drag } from './Ext/grid/column/Drag';
var ExtDragcolumnMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDragcolumnMetaData, _super);
    function ExtDragcolumnMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtDragcolumnMetaData.getAll = function () {
        ExtDragcolumnMetaData.PROPERTIES = Ext_grid_column_Drag.getProperties(ExtDragcolumnMetaData.PROPERTIES);
        ExtDragcolumnMetaData.EVENTS = Ext_grid_column_Drag.getEvents(ExtDragcolumnMetaData.EVENTS);
        ExtDragcolumnMetaData.EVENTS.forEach(function (event) {
            ExtDragcolumnMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtDragcolumnMetaData.PROPERTIES = [];
    ExtDragcolumnMetaData.EVENTS = [];
    ExtDragcolumnMetaData.EVENTNAMES = [];
    return ExtDragcolumnMetaData;
}(Ext_grid_column_Drag));
export { ExtDragcolumnMetaData };
(function () { ExtDragcolumnMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtDragcolumnComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDragcolumnComponent, _super);
    function ExtDragcolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDragcolumnMetaData.PROPERTIES, ExtDragcolumnMetaData.EVENTS) || this;
        _this.xtype = 'dragcolumn';
        return _this;
    }
    ExtDragcolumnComponent_1 = ExtDragcolumnComponent;
    ExtDragcolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDragcolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDragcolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDragcolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDragcolumnComponent_1;
    ExtDragcolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDragcolumnComponent = ExtDragcolumnComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-dragcolumn',
            inputs: ExtDragcolumnMetaData.PROPERTIES,
            outputs: ExtDragcolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDragcolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDragcolumnComponent);
    return ExtDragcolumnComponent;
}(EngBase));
export { ExtDragcolumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRyYWdjb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtZHJhZ2NvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlEO0lBQTJDLGlEQUFvQjtJQUEvRDs7SUFXQSxDQUFDO0lBUFUsNEJBQU0sR0FBYjtRQUNJLHFCQUFxQixDQUFDLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEcscUJBQXFCLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RixxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUM3QyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSxnQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQiw0QkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQixnQ0FBVSxHQUFhLEVBQUUsQ0FBQztJQVE1Qyw0QkFBQztDQUFBLEFBWEQsQ0FBMkMsb0JBQW9CLEdBVzlEO1NBWFkscUJBQXFCO0FBWWxDLENBQUMsY0FBYSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUE0QyxrREFBTztJQUUvQyxnQ0FDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IscUJBQXFCLENBQUMsVUFBVSxFQUNoQyxxQkFBcUIsQ0FBQyxNQUFNLENBQy9CLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQTs7SUFDN0IsQ0FBQzsrQkFiUSxzQkFBc0I7SUFleEIseUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sZ0RBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sNENBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLHNCQUFzQjtRQVBsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3hDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFDLENBQUM7WUFDdEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsc0JBQXNCLENBOEJsQztJQUFELDZCQUFDO0NBQUEsQUE5QkQsQ0FBNEMsT0FBTyxHQThCbEQ7U0E5Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2dyaWRfY29sdW1uX0RyYWcgfSBmcm9tICcuL0V4dC9ncmlkL2NvbHVtbi9EcmFnJztcbmV4cG9ydCBjbGFzcyBFeHREcmFnY29sdW1uTWV0YURhdGEgZXh0ZW5kcyBFeHRfZ3JpZF9jb2x1bW5fRHJhZyB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHREcmFnY29sdW1uTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9ncmlkX2NvbHVtbl9EcmFnLmdldFByb3BlcnRpZXMoRXh0RHJhZ2NvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHREcmFnY29sdW1uTWV0YURhdGEuRVZFTlRTID0gRXh0X2dyaWRfY29sdW1uX0RyYWcuZ2V0RXZlbnRzKEV4dERyYWdjb2x1bW5NZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHREcmFnY29sdW1uTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHREcmFnY29sdW1uTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dERyYWdjb2x1bW5NZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtZHJhZ2NvbHVtbicsXG4gIGlucHV0czogRXh0RHJhZ2NvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dERyYWdjb2x1bW5NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0RHJhZ2NvbHVtbkNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dERyYWdjb2x1bW5Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0RHJhZ2NvbHVtbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHREcmFnY29sdW1uTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdkcmFnY29sdW1uJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19