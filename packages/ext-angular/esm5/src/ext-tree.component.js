import * as tslib_1 from "tslib";
import { Ext_tree_Tree } from './Ext/tree/Tree';
var ExtTreeMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTreeMetaData, _super);
    function ExtTreeMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtTreeMetaData.getAll = function () {
        ExtTreeMetaData.PROPERTIES = Ext_tree_Tree.getProperties(ExtTreeMetaData.PROPERTIES);
        ExtTreeMetaData.EVENTS = Ext_tree_Tree.getEvents(ExtTreeMetaData.EVENTS);
        ExtTreeMetaData.EVENTS.forEach(function (event) {
            ExtTreeMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtTreeMetaData.PROPERTIES = [];
    ExtTreeMetaData.EVENTS = [];
    ExtTreeMetaData.EVENTNAMES = [];
    return ExtTreeMetaData;
}(Ext_tree_Tree));
export { ExtTreeMetaData };
(function () { ExtTreeMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtTreeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTreeComponent, _super);
    function ExtTreeComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTreeMetaData.PROPERTIES, ExtTreeMetaData.EVENTS) || this;
        _this.xtype = 'tree';
        return _this;
    }
    ExtTreeComponent_1 = ExtTreeComponent;
    ExtTreeComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTreeComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTreeComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTreeComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTreeComponent_1;
    ExtTreeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTreeComponent = ExtTreeComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-tree',
            inputs: ExtTreeMetaData.PROPERTIES,
            outputs: ExtTreeMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTreeComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTreeComponent);
    return ExtTreeComponent;
}(EngBase));
export { ExtTreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRDtJQUFxQywyQ0FBYTtJQUFsRDs7SUFXQSxDQUFDO0lBUFUsc0JBQU0sR0FBYjtRQUNJLGVBQWUsQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckYsZUFBZSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RSxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDdkMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDBCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHNCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDBCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHNCQUFDO0NBQUEsQUFYRCxDQUFxQyxhQUFhLEdBV2pEO1NBWFksZUFBZTtBQVk1QixDQUFDLGNBQWEsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXNDLDRDQUFPO0lBRXpDLDBCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixlQUFlLENBQUMsVUFBVSxFQUMxQixlQUFlLENBQUMsTUFBTSxDQUN6QixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUE7O0lBQ3ZCLENBQUM7eUJBYlEsZ0JBQWdCO0lBZWxCLG1DQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHNDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHNDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixnQkFBZ0I7UUFQNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVO1lBQ2xDLE9BQU8sRUFBRSxlQUFlLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWdCLEVBQWhCLENBQWdCLENBQUMsRUFBQyxDQUFDO1lBQ2hGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELGdCQUFnQixDQThCNUI7SUFBRCx1QkFBQztDQUFBLEFBOUJELENBQXNDLE9BQU8sR0E4QjVDO1NBOUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF90cmVlX1RyZWUgfSBmcm9tICcuL0V4dC90cmVlL1RyZWUnO1xuZXhwb3J0IGNsYXNzIEV4dFRyZWVNZXRhRGF0YSBleHRlbmRzIEV4dF90cmVlX1RyZWUge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0VHJlZU1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfdHJlZV9UcmVlLmdldFByb3BlcnRpZXMoRXh0VHJlZU1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRUcmVlTWV0YURhdGEuRVZFTlRTID0gRXh0X3RyZWVfVHJlZS5nZXRFdmVudHMoRXh0VHJlZU1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFRyZWVNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFRyZWVNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0VHJlZU1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC10cmVlJyxcbiAgaW5wdXRzOiBFeHRUcmVlTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0VHJlZU1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRUcmVlQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VHJlZUNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRUcmVlTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFRyZWVNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3RyZWUnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=