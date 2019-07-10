import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var calendar_multiviewMetaData = /** @class */ (function () {
    function calendar_multiviewMetaData() {
    }
    calendar_multiviewMetaData.XTYPE = 'calendar-multiview';
    calendar_multiviewMetaData.PROPERTIES = [
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
    ExtCalendar_multiviewComponent.prototype.ngAfterContentInit = function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    var ExtCalendar_multiviewComponent_1;
    ExtCalendar_multiviewComponent = ExtCalendar_multiviewComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'calendar-multiview',
            inputs: calendar_multiviewMetaData.PROPERTIES,
            outputs: calendar_multiviewMetaData.EVENTNAMES,
            providers: [{ provide: base, useExisting: forwardRef(function () { return ExtCalendar_multiviewComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, base])
    ], ExtCalendar_multiviewComponent);
    return ExtCalendar_multiviewComponent;
}(base));
export { ExtCalendar_multiviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYWxlbmRhci1tdWx0aXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBdUJBLENBQUM7SUF0QmUsZ0NBQUssR0FBVyxvQkFBb0IsQ0FBQztJQUNyQyxxQ0FBVSxHQUFhO1FBQ25DLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFFBQVE7UUFDUixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsaUNBQU0sR0FBVTtRQUNoQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUMzQixDQUFDO0lBQ2MscUNBQVUsR0FBYTtRQUN2QyxPQUFPO0tBQ04sQ0FBQztJQUNGLGlDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F2QlksMEJBQTBCO0FBK0J2QztJQUFvRCwwREFBSTtJQUN0RCx3Q0FDRSxJQUFlLEVBQXlDLGFBQW9CO1FBRDlFLFlBRUksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQywwQkFBMEIsRUFBQyxhQUFhLENBQUMsU0FDbkU7UUFGdUQsbUJBQWEsR0FBYixhQUFhLENBQU87O0lBRTVFLENBQUM7dUNBSlEsOEJBQThCO0lBS2xDLGlEQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUNNLDJEQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLDBCQUEwQjtJQUM1QixDQUFDOztJQVhVLDhCQUE4QjtRQVAxQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzdDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO1lBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBOEIsRUFBOUIsQ0FBOEIsQ0FBQyxFQUFDLENBQUM7WUFDM0YsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBR29CLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFBM0MsVUFBVSxFQUF5RCxJQUFJO09BRm5FLDhCQUE4QixDQWMxQztJQUFELHFDQUFDO0NBQUEsQUFkRCxDQUFvRCxJQUFJLEdBY3ZEO1NBZFksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYWxlbmRhci1tdWx0aXZpZXcnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdjb21wYWN0JyxcbiAgICAnY29tcGFjdE9wdGlvbnMnLFxuICAgICdkZWZhdWx0VmlldycsXG4gICAgJ2xheW91dCcsXG4gICAgJ3N0b3JlJyxcbiAgICAndGltZXpvbmVPZmZzZXQnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdzJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItbXVsdGl2aWV3JywgXG4gIGlucHV0czogY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=