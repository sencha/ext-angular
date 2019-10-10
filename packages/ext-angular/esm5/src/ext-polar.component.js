import * as tslib_1 from "tslib";
import { Ext_chart_PolarChart } from './Ext/chart/PolarChart';
var ExtPolarMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPolarMetaData, _super);
    function ExtPolarMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtPolarMetaData.getAll = function () {
        ExtPolarMetaData.PROPERTIES = Ext_chart_PolarChart.getProperties(ExtPolarMetaData.PROPERTIES);
        ExtPolarMetaData.EVENTS = Ext_chart_PolarChart.getEvents(ExtPolarMetaData.EVENTS);
        ExtPolarMetaData.EVENTS.forEach(function (event) {
            ExtPolarMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtPolarMetaData.PROPERTIES = [];
    ExtPolarMetaData.EVENTS = [];
    ExtPolarMetaData.EVENTNAMES = [];
    return ExtPolarMetaData;
}(Ext_chart_PolarChart));
export { ExtPolarMetaData };
(function () { ExtPolarMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtPolarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPolarComponent, _super);
    function ExtPolarComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPolarMetaData.PROPERTIES, ExtPolarMetaData.EVENTS) || this;
        _this.xtype = 'polar';
        return _this;
    }
    ExtPolarComponent_1 = ExtPolarComponent;
    ExtPolarComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPolarComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPolarComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPolarComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPolarComponent_1;
    ExtPolarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPolarComponent = ExtPolarComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-polar',
            inputs: ExtPolarMetaData.PROPERTIES,
            outputs: ExtPolarMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPolarComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPolarComponent);
    return ExtPolarComponent;
}(EngBase));
export { ExtPolarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBvbGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXBvbGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQ7SUFBc0MsNENBQW9CO0lBQTFEOztJQVdBLENBQUM7SUFQVSx1QkFBTSxHQUFiO1FBQ0ksZ0JBQWdCLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5RixnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xGLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3hDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDJCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHVCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDJCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHVCQUFDO0NBQUEsQUFYRCxDQUFzQyxvQkFBb0IsR0FXekQ7U0FYWSxnQkFBZ0I7QUFZN0IsQ0FBQyxjQUFhLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXVDLDZDQUFPO0lBRTFDLDJCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixnQkFBZ0IsQ0FBQyxVQUFVLEVBQzNCLGdCQUFnQixDQUFDLE1BQU0sQ0FDMUIsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBOztJQUN4QixDQUFDOzBCQWJRLGlCQUFpQjtJQWVuQixvQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSx1Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsaUJBQWlCO1FBUDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ25DLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQyxFQUFDLENBQUM7WUFDakYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsaUJBQWlCLENBOEI3QjtJQUFELHdCQUFDO0NBQUEsQUE5QkQsQ0FBdUMsT0FBTyxHQThCN0M7U0E5QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2NoYXJ0X1BvbGFyQ2hhcnQgfSBmcm9tICcuL0V4dC9jaGFydC9Qb2xhckNoYXJ0JztcbmV4cG9ydCBjbGFzcyBFeHRQb2xhck1ldGFEYXRhIGV4dGVuZHMgRXh0X2NoYXJ0X1BvbGFyQ2hhcnQge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0UG9sYXJNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2NoYXJ0X1BvbGFyQ2hhcnQuZ2V0UHJvcGVydGllcyhFeHRQb2xhck1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRQb2xhck1ldGFEYXRhLkVWRU5UUyA9IEV4dF9jaGFydF9Qb2xhckNoYXJ0LmdldEV2ZW50cyhFeHRQb2xhck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFBvbGFyTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRQb2xhck1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRQb2xhck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1wb2xhcicsXG4gIGlucHV0czogRXh0UG9sYXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRQb2xhck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQb2xhckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFBvbGFyQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dFBvbGFyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFBvbGFyTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdwb2xhcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==