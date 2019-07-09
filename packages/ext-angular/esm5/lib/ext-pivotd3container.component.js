import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var pivotd3containerMetaData = /** @class */ (function () {
    function pivotd3containerMetaData() {
    }
    pivotd3containerMetaData.XTYPE = 'pivotd3container';
    pivotd3containerMetaData.PROPERTIES = [
        'configurator',
        'drawing',
        'matrix',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    pivotd3containerMetaData.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    pivotd3containerMetaData.EVENTNAMES = [
        'ready'
    ];
    return pivotd3containerMetaData;
}());
export { pivotd3containerMetaData };
var ExtPivotd3containerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotd3containerComponent, _super);
    function ExtPivotd3containerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, pivotd3containerMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtPivotd3containerComponent_1 = ExtPivotd3containerComponent;
    ExtPivotd3containerComponent.prototype.ngOnInit = function () {
        this.baseOnInit(pivotd3containerMetaData);
    };
    ExtPivotd3containerComponent.prototype.ngAfterContentInit = function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    var ExtPivotd3containerComponent_1;
    ExtPivotd3containerComponent = ExtPivotd3containerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'pivotd3container',
            inputs: pivotd3containerMetaData.PROPERTIES,
            outputs: pivotd3containerMetaData.EVENTNAMES,
            providers: [{ provide: base, useExisting: forwardRef(function () { return ExtPivotd3containerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, base])
    ], ExtPivotd3containerComponent);
    return ExtPivotd3containerComponent;
}(base));
export { ExtPivotd3containerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtcGl2b3RkM2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUFrQkEsQ0FBQztJQWpCZSw4QkFBSyxHQUFXLGtCQUFrQixDQUFDO0lBQ25DLG1DQUFVLEdBQWE7UUFDbkMsY0FBYztRQUNkLFNBQVM7UUFDVCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsK0JBQU0sR0FBVTtRQUNoQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUMzQixDQUFDO0lBQ2MsbUNBQVUsR0FBYTtRQUN2QyxPQUFPO0tBQ04sQ0FBQztJQUNGLCtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksd0JBQXdCO0FBMEJyQztJQUFrRCx3REFBSTtJQUNwRCxzQ0FDRSxJQUFlLEVBQXlDLGFBQW9CO1FBRDlFLFlBRUksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQyx3QkFBd0IsRUFBQyxhQUFhLENBQUMsU0FDakU7UUFGdUQsbUJBQWEsR0FBYixhQUFhLENBQU87O0lBRTVFLENBQUM7cUNBSlEsNEJBQTRCO0lBS2hDLCtDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUNNLHlEQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLDBCQUEwQjtJQUM1QixDQUFDOztJQVhVLDRCQUE0QjtRQVB4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw4QkFBNEIsRUFBNUIsQ0FBNEIsQ0FBQyxFQUFDLENBQUM7WUFDekYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBR29CLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFBM0MsVUFBVSxFQUF5RCxJQUFJO09BRm5FLDRCQUE0QixDQWN4QztJQUFELG1DQUFDO0NBQUEsQUFkRCxDQUFrRCxJQUFJLEdBY3JEO1NBZFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBwaXZvdGQzY29udGFpbmVyTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAncGl2b3RkM2NvbnRhaW5lcic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2NvbmZpZ3VyYXRvcicsXG4gICAgJ2RyYXdpbmcnLFxuICAgICdtYXRyaXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaXZvdGQzY29udGFpbmVyJywgXG4gIGlucHV0czogcGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IHBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0UGl2b3RkM2NvbnRhaW5lckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFBpdm90ZDNjb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFzZU9uSW5pdChwaXZvdGQzY29udGFpbmVyTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=