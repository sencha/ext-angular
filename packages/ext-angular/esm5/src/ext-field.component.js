import * as tslib_1 from "tslib";
import { Ext_form_Field } from './Ext/form/Field';
var ExtFieldMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtFieldMetaData, _super);
    function ExtFieldMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtFieldMetaData.getAll = function () {
        ExtFieldMetaData.PROPERTIES = Ext_form_Field.getProperties(ExtFieldMetaData.PROPERTIES);
        ExtFieldMetaData.EVENTS = Ext_form_Field.getEvents(ExtFieldMetaData.EVENTS);
        ExtFieldMetaData.EVENTS.forEach(function (event) {
            ExtFieldMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtFieldMetaData.PROPERTIES = [];
    ExtFieldMetaData.EVENTS = [];
    ExtFieldMetaData.EVENTNAMES = [];
    return ExtFieldMetaData;
}(Ext_form_Field));
export { ExtFieldMetaData };
(function () { ExtFieldMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtFieldComponent, _super);
    function ExtFieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtFieldMetaData.PROPERTIES, ExtFieldMetaData.EVENTS) || this;
        _this.xtype = 'field';
        return _this;
    }
    ExtFieldComponent_1 = ExtFieldComponent;
    ExtFieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtFieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtFieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtFieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtFieldComponent_1;
    ExtFieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtFieldComponent = ExtFieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-field',
            inputs: ExtFieldMetaData.PROPERTIES,
            outputs: ExtFieldMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtFieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtFieldComponent);
    return ExtFieldComponent;
}(EngBase));
export { ExtFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xEO0lBQXNDLDRDQUFjO0lBQXBEOztJQVdBLENBQUM7SUFQVSx1QkFBTSxHQUFiO1FBQ0ksZ0JBQWdCLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEYsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDeEMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksMkJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsdUJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsMkJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsdUJBQUM7Q0FBQSxBQVhELENBQXNDLGNBQWMsR0FXbkQ7U0FYWSxnQkFBZ0I7QUFZN0IsQ0FBQyxjQUFhLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUU3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQXVDLDZDQUFPO0lBRTFDLDJCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixnQkFBZ0IsQ0FBQyxVQUFVLEVBQzNCLGdCQUFnQixDQUFDLE1BQU0sQ0FDMUIsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBOztJQUN4QixDQUFDOzBCQWJRLGlCQUFpQjtJQWVuQixvQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSx1Q0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsaUJBQWlCO1FBUDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ25DLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQyxFQUFDLENBQUM7WUFDakYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsaUJBQWlCLENBOEI3QjtJQUFELHdCQUFDO0NBQUEsQUE5QkQsQ0FBdUMsT0FBTyxHQThCN0M7U0E5QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2Zvcm1fRmllbGQgfSBmcm9tICcuL0V4dC9mb3JtL0ZpZWxkJztcbmV4cG9ydCBjbGFzcyBFeHRGaWVsZE1ldGFEYXRhIGV4dGVuZHMgRXh0X2Zvcm1fRmllbGQge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0RmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2Zvcm1fRmllbGQuZ2V0UHJvcGVydGllcyhFeHRGaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRGaWVsZE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9mb3JtX0ZpZWxkLmdldEV2ZW50cyhFeHRGaWVsZE1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dEZpZWxkTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRGaWVsZE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRGaWVsZE1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1maWVsZCcsXG4gIGlucHV0czogRXh0RmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRGaWVsZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRGaWVsZENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dEZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dEZpZWxkTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdmaWVsZCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==