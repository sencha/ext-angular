import * as tslib_1 from "tslib";
import { Ext_Label } from './Ext/Label';
var ExtLabelMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtLabelMetaData, _super);
    function ExtLabelMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtLabelMetaData.getAll = function () {
        ExtLabelMetaData.PROPERTIES = Ext_Label.getProperties(ExtLabelMetaData.PROPERTIES);
        ExtLabelMetaData.EVENTS = Ext_Label.getEvents(ExtLabelMetaData.EVENTS);
        ExtLabelMetaData.EVENTS.forEach(function (event) {
            ExtLabelMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtLabelMetaData.PROPERTIES = [];
    ExtLabelMetaData.EVENTS = [];
    ExtLabelMetaData.EVENTNAMES = [];
    return ExtLabelMetaData;
}(Ext_Label));
export { ExtLabelMetaData };
(function () { ExtLabelMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtLabelComponent, _super);
    function ExtLabelComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtLabelMetaData.PROPERTIES, ExtLabelMetaData.EVENTS) || this;
        _this.xtype = 'label';
        return _this;
    }
    ExtLabelComponent_1 = ExtLabelComponent;
    ExtLabelComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtLabelComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtLabelComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtLabelComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtLabelComponent_1;
    ExtLabelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtLabelComponent = ExtLabelComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-label',
            inputs: ExtLabelMetaData.PROPERTIES,
            outputs: ExtLabelMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtLabelComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtLabelComponent);
    return ExtLabelComponent;
}(EngBase));
export { ExtLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QztJQUFzQyw0Q0FBUztJQUEvQzs7SUFXQSxDQUFDO0lBUFUsdUJBQU0sR0FBYjtRQUNJLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25GLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3hDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDJCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHVCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDJCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHVCQUFDO0NBQUEsQUFYRCxDQUFzQyxTQUFTLEdBVzlDO1NBWFksZ0JBQWdCO0FBWTdCLENBQUMsY0FBYSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUF1Qyw2Q0FBTztJQUUxQywyQkFDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsZ0JBQWdCLENBQUMsVUFBVSxFQUMzQixnQkFBZ0IsQ0FBQyxNQUFNLENBQzFCLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQTs7SUFDeEIsQ0FBQzswQkFiUSxpQkFBaUI7SUFlbkIsb0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sdUNBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sdUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLGlCQUFpQjtRQVA3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtZQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQWlCLEVBQWpCLENBQWlCLENBQUMsRUFBQyxDQUFDO1lBQ2pGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELGlCQUFpQixDQThCN0I7SUFBRCx3QkFBQztDQUFBLEFBOUJELENBQXVDLE9BQU8sR0E4QjdDO1NBOUJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9MYWJlbCB9IGZyb20gJy4vRXh0L0xhYmVsJztcbmV4cG9ydCBjbGFzcyBFeHRMYWJlbE1ldGFEYXRhIGV4dGVuZHMgRXh0X0xhYmVsIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dExhYmVsTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9MYWJlbC5nZXRQcm9wZXJ0aWVzKEV4dExhYmVsTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dExhYmVsTWV0YURhdGEuRVZFTlRTID0gRXh0X0xhYmVsLmdldEV2ZW50cyhFeHRMYWJlbE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dExhYmVsTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRMYWJlbE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRMYWJlbE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1sYWJlbCcsXG4gIGlucHV0czogRXh0TGFiZWxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRMYWJlbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRMYWJlbENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dExhYmVsQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dExhYmVsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dExhYmVsTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdsYWJlbCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==