import * as tslib_1 from "tslib";
import { Ext_slider_Thumb } from './Ext/slider/Thumb';
var ExtThumbMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtThumbMetaData, _super);
    function ExtThumbMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtThumbMetaData.getAll = function () {
        ExtThumbMetaData.PROPERTIES = Ext_slider_Thumb.getProperties(ExtThumbMetaData.PROPERTIES);
        ExtThumbMetaData.EVENTS = Ext_slider_Thumb.getEvents(ExtThumbMetaData.EVENTS);
        ExtThumbMetaData.EVENTS.forEach(function (event) {
            ExtThumbMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtThumbMetaData.PROPERTIES = [];
    ExtThumbMetaData.EVENTS = [];
    ExtThumbMetaData.EVENTNAMES = [];
    return ExtThumbMetaData;
}(Ext_slider_Thumb));
export { ExtThumbMetaData };
(function () { ExtThumbMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtThumbComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtThumbComponent, _super);
    function ExtThumbComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtThumbMetaData.PROPERTIES, ExtThumbMetaData.EVENTS) || this;
        _this.xtype = 'thumb';
        return _this;
    }
    ExtThumbComponent_1 = ExtThumbComponent;
    ExtThumbComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtThumbComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtThumbComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtThumbComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtThumbComponent_1;
    ExtThumbComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtThumbComponent = ExtThumbComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-thumb',
            inputs: ExtThumbMetaData.PROPERTIES,
            outputs: ExtThumbMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtThumbComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtThumbComponent);
    return ExtThumbComponent;
}(EngBase));
export { ExtThumbComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRodW1iLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXRodW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQ7SUFBc0MsNENBQWdCO0lBQXREOztJQVdBLENBQUM7SUFQVSx1QkFBTSxHQUFiO1FBQ0ksZ0JBQWdCLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRixnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3hDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDJCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHVCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDJCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHVCQUFDO0NBQUEsQUFYRCxDQUFzQyxnQkFBZ0IsR0FXckQ7U0FYWSxnQkFBZ0I7QUFZN0IsQ0FBQyxjQUFhLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXVDLDZDQUFPO0lBRTFDLDJCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixnQkFBZ0IsQ0FBQyxVQUFVLEVBQzNCLGdCQUFnQixDQUFDLE1BQU0sQ0FDMUIsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBOztJQUN4QixDQUFDOzBCQWJRLGlCQUFpQjtJQWVuQixvQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSx1Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsaUJBQWlCO1FBUDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ25DLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQyxFQUFDLENBQUM7WUFDakYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsaUJBQWlCLENBOEI3QjtJQUFELHdCQUFDO0NBQUEsQUE5QkQsQ0FBdUMsT0FBTyxHQThCN0M7U0E5QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X3NsaWRlcl9UaHVtYiB9IGZyb20gJy4vRXh0L3NsaWRlci9UaHVtYic7XG5leHBvcnQgY2xhc3MgRXh0VGh1bWJNZXRhRGF0YSBleHRlbmRzIEV4dF9zbGlkZXJfVGh1bWIge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0VGh1bWJNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X3NsaWRlcl9UaHVtYi5nZXRQcm9wZXJ0aWVzKEV4dFRodW1iTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFRodW1iTWV0YURhdGEuRVZFTlRTID0gRXh0X3NsaWRlcl9UaHVtYi5nZXRFdmVudHMoRXh0VGh1bWJNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRUaHVtYk1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0VGh1bWJNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0VGh1bWJNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtdGh1bWInLFxuICBpbnB1dHM6IEV4dFRodW1iTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0VGh1bWJNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0VGh1bWJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRUaHVtYkNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRUaHVtYk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRUaHVtYk1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAndGh1bWInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=