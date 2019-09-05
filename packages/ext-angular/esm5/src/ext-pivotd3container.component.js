//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
var pivotd3containerMetaData = /** @class */ (function () {
    function pivotd3containerMetaData() {
    }
    pivotd3containerMetaData.XTYPE = 'pivotd3container';
    pivotd3containerMetaData.PROPERTIES = [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
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
    ExtPivotd3containerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(pivotd3containerMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtPivotd3containerComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtPivotd3containerComponent_1;
    ExtPivotd3containerComponent = ExtPivotd3containerComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-pivotd3container',
            inputs: pivotd3containerMetaData.PROPERTIES,
            outputs: pivotd3containerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPivotd3containerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtPivotd3containerComponent);
    return ExtPivotd3containerComponent;
}(EngBase));
export { ExtPivotd3containerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtcGl2b3RkM2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywyQ0FBMkM7O0FBRzNDLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDO0lBQUE7SUF3QkEsQ0FBQztJQXZCZSw4QkFBSyxHQUFXLGtCQUFrQixDQUFDO0lBQ25DLG1DQUFVLEdBQWE7UUFDbkMsS0FBSztRQUNMLFVBQVU7UUFDVixPQUFPO1FBQ1AsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLFNBQVM7UUFDVCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsK0JBQU0sR0FBVTtRQUNoQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUMzQixDQUFDO0lBQ2MsbUNBQVUsR0FBYTtRQUN2QyxPQUFPO0tBQ04sQ0FBQztJQUNGLCtCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4Qlksd0JBQXdCO0FBZ0NyQztJQUFrRCx3REFBTztJQUNyRCxzQ0FBWSxJQUFlLEVBQXlDLGFBQXVCO1FBQTNGLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQyx3QkFBd0IsRUFBQyxhQUFhLENBQUMsU0FDbkU7UUFGbUUsbUJBQWEsR0FBYixhQUFhLENBQVU7O0lBRTNGLENBQUM7cUNBSFEsNEJBQTRCO0lBSzlCLCtDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVNLHNEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUlILCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsR0FBRztJQUVJLGtEQUFXLEdBQWxCLFVBQW1CLE9BQXNCLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUM7O0lBbkI3RCw0QkFBNEI7UUFQeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsVUFBVTtZQUMzQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsVUFBVTtZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsOEJBQTRCLEVBQTVCLENBQTRCLENBQUMsRUFBQyxDQUFDO1lBQzVGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUVnQyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQTNDLFVBQVUsRUFBeUQsT0FBTztPQURsRiw0QkFBNEIsQ0EwQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTFCRCxDQUFrRCxPQUFPLEdBMEJ4RDtTQTFCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvL0V4dC5vblJlYWR5KGZ1bmN0aW9uKCkge1xuLy9pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZGVjbGFyZSB2YXIgRXh0OiBhbnlcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuZXhwb3J0IGNsYXNzIHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdwaXZvdGQzY29udGFpbmVyJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW5nJyxcbiAgICAndmlld3BvcnQnLFxuICAgICdhbGlnbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUZvcm11bGFzJyxcbiAgICAnY29uZmlndXJhdG9yJyxcbiAgICAnZHJhd2luZycsXG4gICAgJ21hdHJpeCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1waXZvdGQzY29udGFpbmVyJyxcbiAgaW5wdXRzOiBwaXZvdGQzY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogcGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaXZvdGQzY29udGFpbmVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGl2b3RkM2NvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UpIHtcbiAgICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSlcbiAgICB9XG5cblxuXG4gIC8vcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgLy8gIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAvL31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxuXG5cbiAgIC8vIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAvLyAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0NoZWNrZWQnKVxuICAvL31cbn1cblxuIl19