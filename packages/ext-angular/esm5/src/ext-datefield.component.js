import * as tslib_1 from "tslib";
import { Ext_field_DatePicker } from './Ext/field/DatePicker';
var ExtDatefieldMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatefieldMetaData, _super);
    function ExtDatefieldMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtDatefieldMetaData.getAll = function () {
        ExtDatefieldMetaData.PROPERTIES = Ext_field_DatePicker.getProperties(ExtDatefieldMetaData.PROPERTIES);
        ExtDatefieldMetaData.EVENTS = Ext_field_DatePicker.getEvents(ExtDatefieldMetaData.EVENTS);
        ExtDatefieldMetaData.EVENTS.forEach(function (event) {
            ExtDatefieldMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtDatefieldMetaData.PROPERTIES = [];
    ExtDatefieldMetaData.EVENTS = [];
    ExtDatefieldMetaData.EVENTNAMES = [];
    return ExtDatefieldMetaData;
}(Ext_field_DatePicker));
export { ExtDatefieldMetaData };
(function () { ExtDatefieldMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtDatefieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatefieldComponent, _super);
    function ExtDatefieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDatefieldMetaData.PROPERTIES, ExtDatefieldMetaData.EVENTS) || this;
        _this.xtype = 'datefield';
        return _this;
    }
    ExtDatefieldComponent_1 = ExtDatefieldComponent;
    ExtDatefieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatefieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatefieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatefieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatefieldComponent_1;
    ExtDatefieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDatefieldComponent = ExtDatefieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-datefield',
            inputs: ExtDatefieldMetaData.PROPERTIES,
            outputs: ExtDatefieldMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatefieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDatefieldComponent);
    return ExtDatefieldComponent;
}(EngBase));
export { ExtDatefieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGVmaWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1kYXRlZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RDtJQUEwQyxnREFBb0I7SUFBOUQ7O0lBV0EsQ0FBQztJQVBVLDJCQUFNLEdBQWI7UUFDSSxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RHLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUYsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDNUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksK0JBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsMkJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsK0JBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsMkJBQUM7Q0FBQSxBQVhELENBQTBDLG9CQUFvQixHQVc3RDtTQVhZLG9CQUFvQjtBQVlqQyxDQUFDLGNBQWEsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBMkMsaURBQU87SUFFOUMsK0JBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLG9CQUFvQixDQUFDLFVBQVUsRUFDL0Isb0JBQW9CLENBQUMsTUFBTSxDQUM5QixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUE7O0lBQzVCLENBQUM7OEJBYlEscUJBQXFCO0lBZXZCLHdDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLCtDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLDJDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixxQkFBcUI7UUFQakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDdkMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDeEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDLEVBQUMsQ0FBQztZQUNyRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxxQkFBcUIsQ0E4QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlCRCxDQUEyQyxPQUFPLEdBOEJqRDtTQTlCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfZmllbGRfRGF0ZVBpY2tlciB9IGZyb20gJy4vRXh0L2ZpZWxkL0RhdGVQaWNrZXInO1xuZXhwb3J0IGNsYXNzIEV4dERhdGVmaWVsZE1ldGFEYXRhIGV4dGVuZHMgRXh0X2ZpZWxkX0RhdGVQaWNrZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0RGF0ZWZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9maWVsZF9EYXRlUGlja2VyLmdldFByb3BlcnRpZXMoRXh0RGF0ZWZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dERhdGVmaWVsZE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9maWVsZF9EYXRlUGlja2VyLmdldEV2ZW50cyhFeHREYXRlZmllbGRNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHREYXRlZmllbGRNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dERhdGVmaWVsZE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHREYXRlZmllbGRNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtZGF0ZWZpZWxkJyxcbiAgaW5wdXRzOiBFeHREYXRlZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHREYXRlZmllbGRNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0RGF0ZWZpZWxkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RGF0ZWZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dERhdGVmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHREYXRlZmllbGRNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2RhdGVmaWVsZCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==