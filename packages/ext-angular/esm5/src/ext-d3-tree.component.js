import * as tslib_1 from "tslib";
import { Ext_d3_hierarchy_tree_HorizontalTree } from './Ext/d3/hierarchy/tree/HorizontalTree';
var ExtD3_treeMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_treeMetaData, _super);
    function ExtD3_treeMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtD3_treeMetaData.getAll = function () {
        ExtD3_treeMetaData.PROPERTIES = Ext_d3_hierarchy_tree_HorizontalTree.getProperties(ExtD3_treeMetaData.PROPERTIES);
        ExtD3_treeMetaData.EVENTS = Ext_d3_hierarchy_tree_HorizontalTree.getEvents(ExtD3_treeMetaData.EVENTS);
        ExtD3_treeMetaData.EVENTS.forEach(function (event) {
            ExtD3_treeMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtD3_treeMetaData.PROPERTIES = [];
    ExtD3_treeMetaData.EVENTS = [];
    ExtD3_treeMetaData.EVENTNAMES = [];
    return ExtD3_treeMetaData;
}(Ext_d3_hierarchy_tree_HorizontalTree));
export { ExtD3_treeMetaData };
(function () { ExtD3_treeMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtD3_treeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_treeComponent, _super);
    function ExtD3_treeComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtD3_treeMetaData.PROPERTIES, ExtD3_treeMetaData.EVENTS) || this;
        _this.xtype = 'd3-tree';
        return _this;
    }
    ExtD3_treeComponent_1 = ExtD3_treeComponent;
    ExtD3_treeComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtD3_treeComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtD3_treeComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtD3_treeComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtD3_treeComponent_1;
    ExtD3_treeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtD3_treeComponent = ExtD3_treeComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-d3-tree',
            inputs: ExtD3_treeMetaData.PROPERTIES,
            outputs: ExtD3_treeMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtD3_treeComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtD3_treeComponent);
    return ExtD3_treeComponent;
}(EngBase));
export { ExtD3_treeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWQzLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtZDMtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGO0lBQXdDLDhDQUFvQztJQUE1RTs7SUFXQSxDQUFDO0lBUFUseUJBQU0sR0FBYjtRQUNJLGtCQUFrQixDQUFDLFVBQVUsR0FBRyxvQ0FBb0MsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEgsa0JBQWtCLENBQUMsTUFBTSxHQUFHLG9DQUFvQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUMxQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSw2QkFBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQix5QkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQiw2QkFBVSxHQUFhLEVBQUUsQ0FBQztJQVE1Qyx5QkFBQztDQUFBLEFBWEQsQ0FBd0Msb0NBQW9DLEdBVzNFO1NBWFksa0JBQWtCO0FBWS9CLENBQUMsY0FBYSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUF5QywrQ0FBTztJQUU1Qyw2QkFDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2Isa0JBQWtCLENBQUMsVUFBVSxFQUM3QixrQkFBa0IsQ0FBQyxNQUFNLENBQzVCLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQTs7SUFDMUIsQ0FBQzs0QkFiUSxtQkFBbUI7SUFlckIsc0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sNkNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0seUNBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0seUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLG1CQUFtQjtRQVAvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtZQUNyQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtZQUN0QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQW1CLEVBQW5CLENBQW1CLENBQUMsRUFBQyxDQUFDO1lBQ25GLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELG1CQUFtQixDQThCL0I7SUFBRCwwQkFBQztDQUFBLEFBOUJELENBQXlDLE9BQU8sR0E4Qi9DO1NBOUJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9kM19oaWVyYXJjaHlfdHJlZV9Ib3Jpem9udGFsVHJlZSB9IGZyb20gJy4vRXh0L2QzL2hpZXJhcmNoeS90cmVlL0hvcml6b250YWxUcmVlJztcbmV4cG9ydCBjbGFzcyBFeHREM190cmVlTWV0YURhdGEgZXh0ZW5kcyBFeHRfZDNfaGllcmFyY2h5X3RyZWVfSG9yaXpvbnRhbFRyZWUge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0RDNfdHJlZU1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZDNfaGllcmFyY2h5X3RyZWVfSG9yaXpvbnRhbFRyZWUuZ2V0UHJvcGVydGllcyhFeHREM190cmVlTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dEQzX3RyZWVNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZDNfaGllcmFyY2h5X3RyZWVfSG9yaXpvbnRhbFRyZWUuZ2V0RXZlbnRzKEV4dEQzX3RyZWVNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHREM190cmVlTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHREM190cmVlTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dEQzX3RyZWVNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtZDMtdHJlZScsXG4gIGlucHV0czogRXh0RDNfdHJlZU1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dEQzX3RyZWVNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0RDNfdHJlZUNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEQzX3RyZWVDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0RDNfdHJlZU1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHREM190cmVlTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdkMy10cmVlJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19