import * as tslib_1 from "tslib";
import { Ext_ActionSheet } from './Ext/ActionSheet';
var ExtActionsheetMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtActionsheetMetaData, _super);
    function ExtActionsheetMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtActionsheetMetaData.getAll = function () {
        ExtActionsheetMetaData.PROPERTIES = Ext_ActionSheet.getProperties(ExtActionsheetMetaData.PROPERTIES);
        ExtActionsheetMetaData.EVENTS = Ext_ActionSheet.getEvents(ExtActionsheetMetaData.EVENTS);
        ExtActionsheetMetaData.EVENTS.forEach(function (event) {
            ExtActionsheetMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtActionsheetMetaData.PROPERTIES = [];
    ExtActionsheetMetaData.EVENTS = [];
    ExtActionsheetMetaData.EVENTNAMES = [];
    return ExtActionsheetMetaData;
}(Ext_ActionSheet));
export { ExtActionsheetMetaData };
(function () { ExtActionsheetMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtActionsheetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtActionsheetComponent, _super);
    function ExtActionsheetComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtActionsheetMetaData.PROPERTIES, ExtActionsheetMetaData.EVENTS) || this;
        _this.xtype = 'actionsheet';
        return _this;
    }
    ExtActionsheetComponent_1 = ExtActionsheetComponent;
    ExtActionsheetComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtActionsheetComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtActionsheetComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtActionsheetComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtActionsheetComponent_1;
    ExtActionsheetComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtActionsheetComponent = ExtActionsheetComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-actionsheet',
            inputs: ExtActionsheetMetaData.PROPERTIES,
            outputs: ExtActionsheetMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtActionsheetComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtActionsheetComponent);
    return ExtActionsheetComponent;
}(EngBase));
export { ExtActionsheetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFjdGlvbnNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWFjdGlvbnNoZWV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BEO0lBQTRDLGtEQUFlO0lBQTNEOztJQVdBLENBQUM7SUFQVSw2QkFBTSxHQUFiO1FBQ0ksc0JBQXNCLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckcsc0JBQXNCLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekYsc0JBQXNCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDOUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksaUNBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsNkJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsaUNBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsNkJBQUM7Q0FBQSxBQVhELENBQTRDLGVBQWUsR0FXMUQ7U0FYWSxzQkFBc0I7QUFZbkMsQ0FBQyxjQUFhLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTZDLG1EQUFPO0lBRWhELGlDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixzQkFBc0IsQ0FBQyxVQUFVLEVBQ2pDLHNCQUFzQixDQUFDLE1BQU0sQ0FDaEMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFBOztJQUM5QixDQUFDO2dDQWJRLHVCQUF1QjtJQWV6QiwwQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxpREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSw2Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSw2Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsdUJBQXVCO1FBUG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsTUFBTSxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDekMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztZQUN2RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCx1QkFBdUIsQ0E4Qm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTlCRCxDQUE2QyxPQUFPLEdBOEJuRDtTQTlCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfQWN0aW9uU2hlZXQgfSBmcm9tICcuL0V4dC9BY3Rpb25TaGVldCc7XG5leHBvcnQgY2xhc3MgRXh0QWN0aW9uc2hlZXRNZXRhRGF0YSBleHRlbmRzIEV4dF9BY3Rpb25TaGVldCB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRBY3Rpb25zaGVldE1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfQWN0aW9uU2hlZXQuZ2V0UHJvcGVydGllcyhFeHRBY3Rpb25zaGVldE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRBY3Rpb25zaGVldE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9BY3Rpb25TaGVldC5nZXRFdmVudHMoRXh0QWN0aW9uc2hlZXRNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRBY3Rpb25zaGVldE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0QWN0aW9uc2hlZXRNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0QWN0aW9uc2hlZXRNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtYWN0aW9uc2hlZXQnLFxuICBpbnB1dHM6IEV4dEFjdGlvbnNoZWV0TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0QWN0aW9uc2hlZXRNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QWN0aW9uc2hlZXRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBY3Rpb25zaGVldENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRBY3Rpb25zaGVldE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRBY3Rpb25zaGVldE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnYWN0aW9uc2hlZXQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=