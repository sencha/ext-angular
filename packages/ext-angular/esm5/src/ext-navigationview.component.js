import * as tslib_1 from "tslib";
import { Ext_NavigationView } from './Ext/NavigationView';
var ExtNavigationviewMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtNavigationviewMetaData, _super);
    function ExtNavigationviewMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtNavigationviewMetaData.getAll = function () {
        ExtNavigationviewMetaData.PROPERTIES = Ext_NavigationView.getProperties(ExtNavigationviewMetaData.PROPERTIES);
        ExtNavigationviewMetaData.EVENTS = Ext_NavigationView.getEvents(ExtNavigationviewMetaData.EVENTS);
        ExtNavigationviewMetaData.EVENTS.forEach(function (event) {
            ExtNavigationviewMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtNavigationviewMetaData.PROPERTIES = [];
    ExtNavigationviewMetaData.EVENTS = [];
    ExtNavigationviewMetaData.EVENTNAMES = [];
    return ExtNavigationviewMetaData;
}(Ext_NavigationView));
export { ExtNavigationviewMetaData };
(function () { ExtNavigationviewMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtNavigationviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtNavigationviewComponent, _super);
    function ExtNavigationviewComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtNavigationviewMetaData.PROPERTIES, ExtNavigationviewMetaData.EVENTS) || this;
        _this.xtype = 'navigationview';
        return _this;
    }
    ExtNavigationviewComponent_1 = ExtNavigationviewComponent;
    ExtNavigationviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtNavigationviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtNavigationviewComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtNavigationviewComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtNavigationviewComponent_1;
    ExtNavigationviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtNavigationviewComponent = ExtNavigationviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-navigationview',
            inputs: ExtNavigationviewMetaData.PROPERTIES,
            outputs: ExtNavigationviewMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtNavigationviewComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtNavigationviewComponent);
    return ExtNavigationviewComponent;
}(EngBase));
export { ExtNavigationviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW5hdmlnYXRpb252aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LW5hdmlnYXRpb252aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQ7SUFBK0MscURBQWtCO0lBQWpFOztJQVdBLENBQUM7SUFQVSxnQ0FBTSxHQUFiO1FBQ0kseUJBQXlCLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5Ryx5QkFBeUIsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xHLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ2pELHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLG9DQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLGdDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLG9DQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLGdDQUFDO0NBQUEsQUFYRCxDQUErQyxrQkFBa0IsR0FXaEU7U0FYWSx5QkFBeUI7QUFZdEMsQ0FBQyxjQUFhLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQWdELHNEQUFPO0lBRW5ELG9DQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYix5QkFBeUIsQ0FBQyxVQUFVLEVBQ3BDLHlCQUF5QixDQUFDLE1BQU0sQ0FDbkMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUE7O0lBQ2pDLENBQUM7bUNBYlEsMEJBQTBCO0lBZTVCLDZDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLG9EQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLGdEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLGdEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QiwwQkFBMEI7UUFQdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixNQUFNLEVBQUUseUJBQXlCLENBQUMsVUFBVTtZQUM1QyxPQUFPLEVBQUUseUJBQXlCLENBQUMsVUFBVTtZQUM3QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNEJBQTBCLEVBQTFCLENBQTBCLENBQUMsRUFBQyxDQUFDO1lBQzFGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELDBCQUEwQixDQThCdEM7SUFBRCxpQ0FBQztDQUFBLEFBOUJELENBQWdELE9BQU8sR0E4QnREO1NBOUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9OYXZpZ2F0aW9uVmlldyB9IGZyb20gJy4vRXh0L05hdmlnYXRpb25WaWV3JztcbmV4cG9ydCBjbGFzcyBFeHROYXZpZ2F0aW9udmlld01ldGFEYXRhIGV4dGVuZHMgRXh0X05hdmlnYXRpb25WaWV3IHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dE5hdmlnYXRpb252aWV3TWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9OYXZpZ2F0aW9uVmlldy5nZXRQcm9wZXJ0aWVzKEV4dE5hdmlnYXRpb252aWV3TWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dE5hdmlnYXRpb252aWV3TWV0YURhdGEuRVZFTlRTID0gRXh0X05hdmlnYXRpb25WaWV3LmdldEV2ZW50cyhFeHROYXZpZ2F0aW9udmlld01ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dE5hdmlnYXRpb252aWV3TWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHROYXZpZ2F0aW9udmlld01ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHROYXZpZ2F0aW9udmlld01ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1uYXZpZ2F0aW9udmlldycsXG4gIGlucHV0czogRXh0TmF2aWdhdGlvbnZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHROYXZpZ2F0aW9udmlld01ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHROYXZpZ2F0aW9udmlld0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dE5hdmlnYXRpb252aWV3Q29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dE5hdmlnYXRpb252aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dE5hdmlnYXRpb252aWV3TWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICduYXZpZ2F0aW9udmlldydcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==