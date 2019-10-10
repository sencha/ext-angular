import * as tslib_1 from "tslib";
import { Ext_form_Checkbox } from './Ext/form/Checkbox';
var ExtCheckboxMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCheckboxMetaData, _super);
    function ExtCheckboxMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtCheckboxMetaData.getAll = function () {
        ExtCheckboxMetaData.PROPERTIES = Ext_form_Checkbox.getProperties(ExtCheckboxMetaData.PROPERTIES);
        ExtCheckboxMetaData.EVENTS = Ext_form_Checkbox.getEvents(ExtCheckboxMetaData.EVENTS);
        ExtCheckboxMetaData.EVENTS.forEach(function (event) {
            ExtCheckboxMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtCheckboxMetaData.PROPERTIES = [];
    ExtCheckboxMetaData.EVENTS = [];
    ExtCheckboxMetaData.EVENTNAMES = [];
    return ExtCheckboxMetaData;
}(Ext_form_Checkbox));
export { ExtCheckboxMetaData };
(function () { ExtCheckboxMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtCheckboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCheckboxComponent, _super);
    function ExtCheckboxComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCheckboxMetaData.PROPERTIES, ExtCheckboxMetaData.EVENTS) || this;
        _this.xtype = 'checkbox';
        return _this;
    }
    ExtCheckboxComponent_1 = ExtCheckboxComponent;
    ExtCheckboxComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCheckboxComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCheckboxComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCheckboxComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCheckboxComponent_1;
    ExtCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCheckboxComponent = ExtCheckboxComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-checkbox',
            inputs: ExtCheckboxMetaData.PROPERTIES,
            outputs: ExtCheckboxMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCheckboxComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCheckboxComponent);
    return ExtCheckboxComponent;
}(EngBase));
export { ExtCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQ7SUFBeUMsK0NBQWlCO0lBQTFEOztJQVdBLENBQUM7SUFQVSwwQkFBTSxHQUFiO1FBQ0ksbUJBQW1CLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQzNDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDhCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLDBCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDhCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLDBCQUFDO0NBQUEsQUFYRCxDQUF5QyxpQkFBaUIsR0FXekQ7U0FYWSxtQkFBbUI7QUFZaEMsQ0FBQyxjQUFhLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTBDLGdEQUFPO0lBRTdDLDhCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixtQkFBbUIsQ0FBQyxVQUFVLEVBQzlCLG1CQUFtQixDQUFDLE1BQU0sQ0FDN0IsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFBOztJQUMzQixDQUFDOzZCQWJRLG9CQUFvQjtJQWV0Qix1Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSw4Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsb0JBQW9CO1FBUGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFDLENBQUM7WUFDcEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsb0JBQW9CLENBOEJoQztJQUFELDJCQUFDO0NBQUEsQUE5QkQsQ0FBMEMsT0FBTyxHQThCaEQ7U0E5Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2Zvcm1fQ2hlY2tib3ggfSBmcm9tICcuL0V4dC9mb3JtL0NoZWNrYm94JztcbmV4cG9ydCBjbGFzcyBFeHRDaGVja2JveE1ldGFEYXRhIGV4dGVuZHMgRXh0X2Zvcm1fQ2hlY2tib3gge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0Q2hlY2tib3hNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2Zvcm1fQ2hlY2tib3guZ2V0UHJvcGVydGllcyhFeHRDaGVja2JveE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRDaGVja2JveE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9mb3JtX0NoZWNrYm94LmdldEV2ZW50cyhFeHRDaGVja2JveE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dENoZWNrYm94TWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRDaGVja2JveE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRDaGVja2JveE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1jaGVja2JveCcsXG4gIGlucHV0czogRXh0Q2hlY2tib3hNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRDaGVja2JveE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDaGVja2JveENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dENoZWNrYm94TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dENoZWNrYm94TWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjaGVja2JveCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==