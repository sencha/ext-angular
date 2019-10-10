import * as tslib_1 from "tslib";
import { Ext_ux_colorpick_ColorPreview } from './Ext/ux/colorpick/ColorPreview';
var ExtColorpickercolorpreviewMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorpickercolorpreviewMetaData, _super);
    function ExtColorpickercolorpreviewMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtColorpickercolorpreviewMetaData.getAll = function () {
        ExtColorpickercolorpreviewMetaData.PROPERTIES = Ext_ux_colorpick_ColorPreview.getProperties(ExtColorpickercolorpreviewMetaData.PROPERTIES);
        ExtColorpickercolorpreviewMetaData.EVENTS = Ext_ux_colorpick_ColorPreview.getEvents(ExtColorpickercolorpreviewMetaData.EVENTS);
        ExtColorpickercolorpreviewMetaData.EVENTS.forEach(function (event) {
            ExtColorpickercolorpreviewMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtColorpickercolorpreviewMetaData.PROPERTIES = [];
    ExtColorpickercolorpreviewMetaData.EVENTS = [];
    ExtColorpickercolorpreviewMetaData.EVENTNAMES = [];
    return ExtColorpickercolorpreviewMetaData;
}(Ext_ux_colorpick_ColorPreview));
export { ExtColorpickercolorpreviewMetaData };
(function () { ExtColorpickercolorpreviewMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtColorpickercolorpreviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorpickercolorpreviewComponent, _super);
    function ExtColorpickercolorpreviewComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtColorpickercolorpreviewMetaData.PROPERTIES, ExtColorpickercolorpreviewMetaData.EVENTS) || this;
        _this.xtype = 'colorpickercolorpreview';
        return _this;
    }
    ExtColorpickercolorpreviewComponent_1 = ExtColorpickercolorpreviewComponent;
    ExtColorpickercolorpreviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtColorpickercolorpreviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtColorpickercolorpreviewComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtColorpickercolorpreviewComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtColorpickercolorpreviewComponent_1;
    ExtColorpickercolorpreviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtColorpickercolorpreviewComponent = ExtColorpickercolorpreviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-colorpickercolorpreview',
            inputs: ExtColorpickercolorpreviewMetaData.PROPERTIES,
            outputs: ExtColorpickercolorpreviewMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtColorpickercolorpreviewComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtColorpickercolorpreviewComponent);
    return ExtColorpickercolorpreviewComponent;
}(EngBase));
export { ExtColorpickercolorpreviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9ycGlja2VyY29sb3JwcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNvbG9ycGlja2VyY29sb3JwcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEY7SUFBd0QsOERBQTZCO0lBQXJGOztJQVdBLENBQUM7SUFQVSx5Q0FBTSxHQUFiO1FBQ0ksa0NBQWtDLENBQUMsVUFBVSxHQUFHLDZCQUE2QixDQUFDLGFBQWEsQ0FBQyxrQ0FBa0MsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzSSxrQ0FBa0MsQ0FBQyxNQUFNLEdBQUcsNkJBQTZCLENBQUMsU0FBUyxDQUFDLGtDQUFrQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ILGtDQUFrQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzFELGtDQUFrQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDZDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHlDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDZDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHlDQUFDO0NBQUEsQUFYRCxDQUF3RCw2QkFBNkIsR0FXcEY7U0FYWSxrQ0FBa0M7QUFZL0MsQ0FBQyxjQUFhLGtDQUFrQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXlELCtEQUFPO0lBRTVELDZDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixrQ0FBa0MsQ0FBQyxVQUFVLEVBQzdDLGtDQUFrQyxDQUFDLE1BQU0sQ0FDNUMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUE7O0lBQzFDLENBQUM7NENBYlEsbUNBQW1DO0lBZXJDLHNEQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDZEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHlEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHlEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixtQ0FBbUM7UUFQL0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxNQUFNLEVBQUUsa0NBQWtDLENBQUMsVUFBVTtZQUNyRCxPQUFPLEVBQUUsa0NBQWtDLENBQUMsVUFBVTtZQUN0RCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUNBQW1DLEVBQW5DLENBQW1DLENBQUMsRUFBQyxDQUFDO1lBQ25HLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELG1DQUFtQyxDQThCL0M7SUFBRCwwQ0FBQztDQUFBLEFBOUJELENBQXlELE9BQU8sR0E4Qi9EO1NBOUJZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF91eF9jb2xvcnBpY2tfQ29sb3JQcmV2aWV3IH0gZnJvbSAnLi9FeHQvdXgvY29sb3JwaWNrL0NvbG9yUHJldmlldyc7XG5leHBvcnQgY2xhc3MgRXh0Q29sb3JwaWNrZXJjb2xvcnByZXZpZXdNZXRhRGF0YSBleHRlbmRzIEV4dF91eF9jb2xvcnBpY2tfQ29sb3JQcmV2aWV3IHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dENvbG9ycGlja2VyY29sb3JwcmV2aWV3TWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF91eF9jb2xvcnBpY2tfQ29sb3JQcmV2aWV3LmdldFByb3BlcnRpZXMoRXh0Q29sb3JwaWNrZXJjb2xvcnByZXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0Q29sb3JwaWNrZXJjb2xvcnByZXZpZXdNZXRhRGF0YS5FVkVOVFMgPSBFeHRfdXhfY29sb3JwaWNrX0NvbG9yUHJldmlldy5nZXRFdmVudHMoRXh0Q29sb3JwaWNrZXJjb2xvcnByZXZpZXdNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRDb2xvcnBpY2tlcmNvbG9ycHJldmlld01ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0Q29sb3JwaWNrZXJjb2xvcnByZXZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0Q29sb3JwaWNrZXJjb2xvcnByZXZpZXdNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtY29sb3JwaWNrZXJjb2xvcnByZXZpZXcnLFxuICBpbnB1dHM6IEV4dENvbG9ycGlja2VyY29sb3JwcmV2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0Q29sb3JwaWNrZXJjb2xvcnByZXZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q29sb3JwaWNrZXJjb2xvcnByZXZpZXdDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDb2xvcnBpY2tlcmNvbG9ycHJldmlld0NvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRDb2xvcnBpY2tlcmNvbG9ycHJldmlld01ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRDb2xvcnBpY2tlcmNvbG9ycHJldmlld01ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY29sb3JwaWNrZXJjb2xvcnByZXZpZXcnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=