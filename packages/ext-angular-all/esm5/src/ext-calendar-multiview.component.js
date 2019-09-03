//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
var calendar_multiviewMetaData = /** @class */ (function () {
    function calendar_multiviewMetaData() {
    }
    calendar_multiviewMetaData.XTYPE = 'calendar-multiview';
    calendar_multiviewMetaData.PROPERTIES = [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
        'compact',
        'compactOptions',
        'defaultView',
        'layout',
        'store',
        'timezoneOffset',
        'value',
        'views',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    calendar_multiviewMetaData.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    calendar_multiviewMetaData.EVENTNAMES = [
        'ready'
    ];
    return calendar_multiviewMetaData;
}());
export { calendar_multiviewMetaData };
var ExtCalendar_multiviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_multiviewComponent, _super);
    function ExtCalendar_multiviewComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, calendar_multiviewMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtCalendar_multiviewComponent_1 = ExtCalendar_multiviewComponent;
    ExtCalendar_multiviewComponent.prototype.ngOnInit = function () {
        this.baseOnInit(calendar_multiviewMetaData);
    };
    ExtCalendar_multiviewComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(calendar_multiviewMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtCalendar_multiviewComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtCalendar_multiviewComponent_1;
    ExtCalendar_multiviewComponent = ExtCalendar_multiviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-calendar-multiview',
            inputs: calendar_multiviewMetaData.PROPERTIES,
            outputs: calendar_multiviewMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_multiviewComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtCalendar_multiviewComponent);
    return ExtCalendar_multiviewComponent;
}(EngBase));
export { ExtCalendar_multiviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWFsbC8iLCJzb3VyY2VzIjpbInNyYy9leHQtY2FsZW5kYXItbXVsdGl2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLDJDQUEyQzs7QUFHM0MsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckM7SUFBQTtJQTZCQSxDQUFDO0lBNUJlLGdDQUFLLEdBQVcsb0JBQW9CLENBQUM7SUFDckMscUNBQVUsR0FBYTtRQUNuQyxLQUFLO1FBQ0wsVUFBVTtRQUNWLE9BQU87UUFDUCxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixRQUFRO1FBQ1IsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixPQUFPO1FBQ1AsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLGFBQWE7UUFDYixRQUFRO0tBQ1gsQ0FBQztJQUNjLGlDQUFNLEdBQVU7UUFDaEMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDM0IsQ0FBQztJQUNjLHFDQUFVLEdBQWE7UUFDdkMsT0FBTztLQUNOLENBQUM7SUFDRixpQ0FBQztDQUFBLEFBN0JELElBNkJDO1NBN0JZLDBCQUEwQjtBQXFDdkM7SUFBb0QsMERBQU87SUFDdkQsd0NBQVksSUFBZSxFQUF5QyxhQUF1QjtRQUEzRixZQUNJLGtCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUMsMEJBQTBCLEVBQUMsYUFBYSxDQUFDLFNBQ3JFO1FBRm1FLG1CQUFhLEdBQWIsYUFBYSxDQUFVOztJQUUzRixDQUFDO3VDQUhRLDhCQUE4QjtJQUtoQyxpREFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFTSx3REFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFJSCwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLEdBQUc7SUFFSSxvREFBVyxHQUFsQixVQUFtQixPQUFzQixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDOztJQW5CN0QsOEJBQThCO1FBUDFDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsTUFBTSxFQUFFLDBCQUEwQixDQUFDLFVBQVU7WUFDN0MsT0FBTyxFQUFFLDBCQUEwQixDQUFDLFVBQVU7WUFDOUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdDQUE4QixFQUE5QixDQUE4QixDQUFDLEVBQUMsQ0FBQztZQUM5RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFFZ0MsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUEzQyxVQUFVLEVBQXlELE9BQU87T0FEbEYsOEJBQThCLENBMEIxQztJQUFELHFDQUFDO0NBQUEsQUExQkQsQ0FBb0QsT0FBTyxHQTBCMUQ7U0ExQlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy9FeHQub25SZWFkeShmdW5jdGlvbigpIHtcbi8vaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYWxlbmRhci1tdWx0aXZpZXcnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdlbmcnLFxuICAgICd2aWV3cG9ydCcsXG4gICAgJ2FsaWduJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdyZXNwb25zaXZlRm9ybXVsYXMnLFxuICAgICdjb21wYWN0JyxcbiAgICAnY29tcGFjdE9wdGlvbnMnLFxuICAgICdkZWZhdWx0VmlldycsXG4gICAgJ2xheW91dCcsXG4gICAgJ3N0b3JlJyxcbiAgICAndGltZXpvbmVPZmZzZXQnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdzJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNhbGVuZGFyLW11bHRpdmlldycsXG4gIGlucHV0czogY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UpIHtcbiAgICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdChjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSlcbiAgICB9XG5cblxuXG4gIC8vcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgLy8gIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAvL31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxuXG5cbiAgIC8vIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAvLyAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0NoZWNrZWQnKVxuICAvL31cbn1cblxuIl19