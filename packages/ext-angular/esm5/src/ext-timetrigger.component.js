import * as tslib_1 from "tslib";
import { Ext_field_trigger_Time } from './Ext/field/trigger/Time';
var ExtTimetriggerMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTimetriggerMetaData, _super);
    function ExtTimetriggerMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtTimetriggerMetaData.getAll = function () {
        ExtTimetriggerMetaData.PROPERTIES = Ext_field_trigger_Time.getProperties(ExtTimetriggerMetaData.PROPERTIES);
        ExtTimetriggerMetaData.EVENTS = Ext_field_trigger_Time.getEvents(ExtTimetriggerMetaData.EVENTS);
        ExtTimetriggerMetaData.EVENTS.forEach(function (event) {
            ExtTimetriggerMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtTimetriggerMetaData.PROPERTIES = [];
    ExtTimetriggerMetaData.EVENTS = [];
    ExtTimetriggerMetaData.EVENTNAMES = [];
    return ExtTimetriggerMetaData;
}(Ext_field_trigger_Time));
export { ExtTimetriggerMetaData };
(function () { ExtTimetriggerMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtTimetriggerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTimetriggerComponent, _super);
    function ExtTimetriggerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTimetriggerMetaData.PROPERTIES, ExtTimetriggerMetaData.EVENTS) || this;
        _this.xtype = 'timetrigger';
        return _this;
    }
    ExtTimetriggerComponent_1 = ExtTimetriggerComponent;
    ExtTimetriggerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTimetriggerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTimetriggerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTimetriggerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTimetriggerComponent_1;
    ExtTimetriggerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTimetriggerComponent = ExtTimetriggerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-timetrigger',
            inputs: ExtTimetriggerMetaData.PROPERTIES,
            outputs: ExtTimetriggerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTimetriggerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTimetriggerComponent);
    return ExtTimetriggerComponent;
}(EngBase));
export { ExtTimetriggerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRpbWV0cmlnZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXRpbWV0cmlnZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEU7SUFBNEMsa0RBQXNCO0lBQWxFOztJQVdBLENBQUM7SUFQVSw2QkFBTSxHQUFiO1FBQ0ksc0JBQXNCLENBQUMsVUFBVSxHQUFHLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RyxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzlDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLGlDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDZCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLGlDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDZCQUFDO0NBQUEsQUFYRCxDQUE0QyxzQkFBc0IsR0FXakU7U0FYWSxzQkFBc0I7QUFZbkMsQ0FBQyxjQUFhLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTZDLG1EQUFPO0lBRWhELGlDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixzQkFBc0IsQ0FBQyxVQUFVLEVBQ2pDLHNCQUFzQixDQUFDLE1BQU0sQ0FDaEMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFBOztJQUM5QixDQUFDO2dDQWJRLHVCQUF1QjtJQWV6QiwwQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSxpREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSw2Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSw2Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsdUJBQXVCO1FBUG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsTUFBTSxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDekMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztZQUN2RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCx1QkFBdUIsQ0E4Qm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTlCRCxDQUE2QyxPQUFPLEdBOEJuRDtTQTlCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZmllbGRfdHJpZ2dlcl9UaW1lIH0gZnJvbSAnLi9FeHQvZmllbGQvdHJpZ2dlci9UaW1lJztcbmV4cG9ydCBjbGFzcyBFeHRUaW1ldHJpZ2dlck1ldGFEYXRhIGV4dGVuZHMgRXh0X2ZpZWxkX3RyaWdnZXJfVGltZSB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsKCkge1xuICAgICAgICBFeHRUaW1ldHJpZ2dlck1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZmllbGRfdHJpZ2dlcl9UaW1lLmdldFByb3BlcnRpZXMoRXh0VGltZXRyaWdnZXJNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0VGltZXRyaWdnZXJNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZmllbGRfdHJpZ2dlcl9UaW1lLmdldEV2ZW50cyhFeHRUaW1ldHJpZ2dlck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFRpbWV0cmlnZ2VyTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRUaW1ldHJpZ2dlck1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRUaW1ldHJpZ2dlck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC10aW1ldHJpZ2dlcicsXG4gIGlucHV0czogRXh0VGltZXRyaWdnZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRUaW1ldHJpZ2dlck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRUaW1ldHJpZ2dlckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFRpbWV0cmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dFRpbWV0cmlnZ2VyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFRpbWV0cmlnZ2VyTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICd0aW1ldHJpZ2dlcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==