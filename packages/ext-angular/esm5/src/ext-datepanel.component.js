import * as tslib_1 from "tslib";
import { Ext_panel_Date } from './Ext/panel/Date';
var ExtDatepanelMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatepanelMetaData, _super);
    function ExtDatepanelMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtDatepanelMetaData.getAll = function () {
        ExtDatepanelMetaData.PROPERTIES = Ext_panel_Date.getProperties(ExtDatepanelMetaData.PROPERTIES);
        ExtDatepanelMetaData.EVENTS = Ext_panel_Date.getEvents(ExtDatepanelMetaData.EVENTS);
        ExtDatepanelMetaData.EVENTS.forEach(function (event) {
            ExtDatepanelMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtDatepanelMetaData.PROPERTIES = [];
    ExtDatepanelMetaData.EVENTS = [];
    ExtDatepanelMetaData.EVENTNAMES = [];
    return ExtDatepanelMetaData;
}(Ext_panel_Date));
export { ExtDatepanelMetaData };
(function () { ExtDatepanelMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtDatepanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatepanelComponent, _super);
    function ExtDatepanelComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDatepanelMetaData.PROPERTIES, ExtDatepanelMetaData.EVENTS) || this;
        _this.xtype = 'datepanel';
        return _this;
    }
    ExtDatepanelComponent_1 = ExtDatepanelComponent;
    ExtDatepanelComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatepanelComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatepanelComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatepanelComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatepanelComponent_1;
    ExtDatepanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDatepanelComponent = ExtDatepanelComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-datepanel',
            inputs: ExtDatepanelMetaData.PROPERTIES,
            outputs: ExtDatepanelMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatepanelComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDatepanelComponent);
    return ExtDatepanelComponent;
}(EngBase));
export { ExtDatepanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGVwYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1kYXRlcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQ7SUFBMEMsZ0RBQWM7SUFBeEQ7O0lBV0EsQ0FBQztJQVBVLDJCQUFNLEdBQWI7UUFDSSxvQkFBb0IsQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUM1QyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSwrQkFBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQiwyQkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQiwrQkFBVSxHQUFhLEVBQUUsQ0FBQztJQVE1QywyQkFBQztDQUFBLEFBWEQsQ0FBMEMsY0FBYyxHQVd2RDtTQVhZLG9CQUFvQjtBQVlqQyxDQUFDLGNBQWEsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRWpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBMkMsaURBQU87SUFFOUMsK0JBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLG9CQUFvQixDQUFDLFVBQVUsRUFDL0Isb0JBQW9CLENBQUMsTUFBTSxDQUM5QixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUE7O0lBQzVCLENBQUM7OEJBYlEscUJBQXFCO0lBZXZCLHdDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLCtDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLDJDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixxQkFBcUI7UUFQakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDdkMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLFVBQVU7WUFDeEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDLEVBQUMsQ0FBQztZQUNyRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxxQkFBcUIsQ0E4QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlCRCxDQUEyQyxPQUFPLEdBOEJqRDtTQTlCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfcGFuZWxfRGF0ZSB9IGZyb20gJy4vRXh0L3BhbmVsL0RhdGUnO1xuZXhwb3J0IGNsYXNzIEV4dERhdGVwYW5lbE1ldGFEYXRhIGV4dGVuZHMgRXh0X3BhbmVsX0RhdGUge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0RGF0ZXBhbmVsTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9wYW5lbF9EYXRlLmdldFByb3BlcnRpZXMoRXh0RGF0ZXBhbmVsTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dERhdGVwYW5lbE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9wYW5lbF9EYXRlLmdldEV2ZW50cyhFeHREYXRlcGFuZWxNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHREYXRlcGFuZWxNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dERhdGVwYW5lbE1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHREYXRlcGFuZWxNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtZGF0ZXBhbmVsJyxcbiAgaW5wdXRzOiBFeHREYXRlcGFuZWxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHREYXRlcGFuZWxNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0RGF0ZXBhbmVsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RGF0ZXBhbmVsQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dERhdGVwYW5lbE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHREYXRlcGFuZWxNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2RhdGVwYW5lbCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==