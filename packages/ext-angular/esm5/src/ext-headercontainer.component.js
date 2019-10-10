import * as tslib_1 from "tslib";
import { Ext_grid_HeaderContainer } from './Ext/grid/HeaderContainer';
var ExtHeadercontainerMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtHeadercontainerMetaData, _super);
    function ExtHeadercontainerMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtHeadercontainerMetaData.getAll = function () {
        ExtHeadercontainerMetaData.PROPERTIES = Ext_grid_HeaderContainer.getProperties(ExtHeadercontainerMetaData.PROPERTIES);
        ExtHeadercontainerMetaData.EVENTS = Ext_grid_HeaderContainer.getEvents(ExtHeadercontainerMetaData.EVENTS);
        ExtHeadercontainerMetaData.EVENTS.forEach(function (event) {
            ExtHeadercontainerMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtHeadercontainerMetaData.PROPERTIES = [];
    ExtHeadercontainerMetaData.EVENTS = [];
    ExtHeadercontainerMetaData.EVENTNAMES = [];
    return ExtHeadercontainerMetaData;
}(Ext_grid_HeaderContainer));
export { ExtHeadercontainerMetaData };
(function () { ExtHeadercontainerMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtHeadercontainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtHeadercontainerComponent, _super);
    function ExtHeadercontainerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtHeadercontainerMetaData.PROPERTIES, ExtHeadercontainerMetaData.EVENTS) || this;
        _this.xtype = 'headercontainer';
        return _this;
    }
    ExtHeadercontainerComponent_1 = ExtHeadercontainerComponent;
    ExtHeadercontainerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtHeadercontainerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtHeadercontainerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtHeadercontainerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtHeadercontainerComponent_1;
    ExtHeadercontainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtHeadercontainerComponent = ExtHeadercontainerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-headercontainer',
            inputs: ExtHeadercontainerMetaData.PROPERTIES,
            outputs: ExtHeadercontainerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtHeadercontainerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtHeadercontainerComponent);
    return ExtHeadercontainerComponent;
}(EngBase));
export { ExtHeadercontainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWhlYWRlcmNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1oZWFkZXJjb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RTtJQUFnRCxzREFBd0I7SUFBeEU7O0lBV0EsQ0FBQztJQVBVLGlDQUFNLEdBQWI7UUFDSSwwQkFBMEIsQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RILDBCQUEwQixDQUFDLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDbEQsMEJBQTBCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFkscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsaUNBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIscUNBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsaUNBQUM7Q0FBQSxBQVhELENBQWdELHdCQUF3QixHQVd2RTtTQVhZLDBCQUEwQjtBQVl2QyxDQUFDLGNBQWEsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRXZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBaUQsdURBQU87SUFFcEQscUNBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLDBCQUEwQixDQUFDLFVBQVUsRUFDckMsMEJBQTBCLENBQUMsTUFBTSxDQUNwQyxTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTs7SUFDbEMsQ0FBQztvQ0FiUSwyQkFBMkI7SUFlN0IsOENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0scURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0saURBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0saURBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLDJCQUEyQjtRQVB2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzdDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBMkIsRUFBM0IsQ0FBMkIsQ0FBQyxFQUFDLENBQUM7WUFDM0YsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsMkJBQTJCLENBOEJ2QztJQUFELGtDQUFDO0NBQUEsQUE5QkQsQ0FBaUQsT0FBTyxHQThCdkQ7U0E5QlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2dyaWRfSGVhZGVyQ29udGFpbmVyIH0gZnJvbSAnLi9FeHQvZ3JpZC9IZWFkZXJDb250YWluZXInO1xuZXhwb3J0IGNsYXNzIEV4dEhlYWRlcmNvbnRhaW5lck1ldGFEYXRhIGV4dGVuZHMgRXh0X2dyaWRfSGVhZGVyQ29udGFpbmVyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dEhlYWRlcmNvbnRhaW5lck1ldGFEYXRhLlBST1BFUlRJRVMgPSBFeHRfZ3JpZF9IZWFkZXJDb250YWluZXIuZ2V0UHJvcGVydGllcyhFeHRIZWFkZXJjb250YWluZXJNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0SGVhZGVyY29udGFpbmVyTWV0YURhdGEuRVZFTlRTID0gRXh0X2dyaWRfSGVhZGVyQ29udGFpbmVyLmdldEV2ZW50cyhFeHRIZWFkZXJjb250YWluZXJNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRIZWFkZXJjb250YWluZXJNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dEhlYWRlcmNvbnRhaW5lck1ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRIZWFkZXJjb250YWluZXJNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtaGVhZGVyY29udGFpbmVyJyxcbiAgaW5wdXRzOiBFeHRIZWFkZXJjb250YWluZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRIZWFkZXJjb250YWluZXJNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0SGVhZGVyY29udGFpbmVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0SGVhZGVyY29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dEhlYWRlcmNvbnRhaW5lck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRIZWFkZXJjb250YWluZXJNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2hlYWRlcmNvbnRhaW5lcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==