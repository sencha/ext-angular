import * as tslib_1 from "tslib";
import { Ext_ux_rating_Picker } from './Ext/ux/rating/Picker';
var ExtRatingMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRatingMetaData, _super);
    function ExtRatingMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtRatingMetaData.getAll = function () {
        ExtRatingMetaData.PROPERTIES = Ext_ux_rating_Picker.getProperties(ExtRatingMetaData.PROPERTIES);
        ExtRatingMetaData.EVENTS = Ext_ux_rating_Picker.getEvents(ExtRatingMetaData.EVENTS);
        ExtRatingMetaData.EVENTS.forEach(function (event) {
            ExtRatingMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtRatingMetaData.PROPERTIES = [];
    ExtRatingMetaData.EVENTS = [];
    ExtRatingMetaData.EVENTNAMES = [];
    return ExtRatingMetaData;
}(Ext_ux_rating_Picker));
export { ExtRatingMetaData };
(function () { ExtRatingMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtRatingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRatingComponent, _super);
    function ExtRatingComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRatingMetaData.PROPERTIES, ExtRatingMetaData.EVENTS) || this;
        _this.xtype = 'rating';
        return _this;
    }
    ExtRatingComponent_1 = ExtRatingComponent;
    ExtRatingComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRatingComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRatingComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRatingComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRatingComponent_1;
    ExtRatingComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRatingComponent = ExtRatingComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-rating',
            inputs: ExtRatingMetaData.PROPERTIES,
            outputs: ExtRatingMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRatingComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRatingComponent);
    return ExtRatingComponent;
}(EngBase));
export { ExtRatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RDtJQUF1Qyw2Q0FBb0I7SUFBM0Q7O0lBV0EsQ0FBQztJQVBVLHdCQUFNLEdBQWI7UUFDSSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hHLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEYsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDekMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsd0JBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsNEJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsd0JBQUM7Q0FBQSxBQVhELENBQXVDLG9CQUFvQixHQVcxRDtTQVhZLGlCQUFpQjtBQVk5QixDQUFDLGNBQWEsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBd0MsOENBQU87SUFFM0MsNEJBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLGlCQUFpQixDQUFDLFVBQVUsRUFDNUIsaUJBQWlCLENBQUMsTUFBTSxDQUMzQixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7O0lBQ3pCLENBQUM7MkJBYlEsa0JBQWtCO0lBZXBCLHFDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDRDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHdDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHdDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixrQkFBa0I7UUFQOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsTUFBTSxFQUFFLGlCQUFpQixDQUFDLFVBQVU7WUFDcEMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7WUFDckMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFrQixFQUFsQixDQUFrQixDQUFDLEVBQUMsQ0FBQztZQUNsRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxrQkFBa0IsQ0E4QjlCO0lBQUQseUJBQUM7Q0FBQSxBQTlCRCxDQUF3QyxPQUFPLEdBOEI5QztTQTlCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfdXhfcmF0aW5nX1BpY2tlciB9IGZyb20gJy4vRXh0L3V4L3JhdGluZy9QaWNrZXInO1xuZXhwb3J0IGNsYXNzIEV4dFJhdGluZ01ldGFEYXRhIGV4dGVuZHMgRXh0X3V4X3JhdGluZ19QaWNrZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0UmF0aW5nTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF91eF9yYXRpbmdfUGlja2VyLmdldFByb3BlcnRpZXMoRXh0UmF0aW5nTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFJhdGluZ01ldGFEYXRhLkVWRU5UUyA9IEV4dF91eF9yYXRpbmdfUGlja2VyLmdldEV2ZW50cyhFeHRSYXRpbmdNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRSYXRpbmdNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFJhdGluZ01ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRSYXRpbmdNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtcmF0aW5nJyxcbiAgaW5wdXRzOiBFeHRSYXRpbmdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRSYXRpbmdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0UmF0aW5nQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dFJhdGluZ01ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRSYXRpbmdNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3JhdGluZydcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==