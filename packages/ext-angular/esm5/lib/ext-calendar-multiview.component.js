/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var calendar_multiviewMetaData = /** @class */ (function () {
    function calendar_multiviewMetaData() {
    }
    calendar_multiviewMetaData.XTYPE = 'calendar-multiview';
    calendar_multiviewMetaData.PROPERTIESOBJECT = {
        "compact": "Boolean",
        "compactOptions": "Object",
        "defaultView": "String",
        "layout": "Object/String",
        "store": "Object/Ext.calendar.store.Calendars",
        "timezoneOffset": "Number",
        "value": "Date",
        "views": "Object",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
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
if (false) {
    /** @type {?} */
    calendar_multiviewMetaData.XTYPE;
    /** @type {?} */
    calendar_multiviewMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    calendar_multiviewMetaData.PROPERTIES;
    /** @type {?} */
    calendar_multiviewMetaData.EVENTS;
    /** @type {?} */
    calendar_multiviewMetaData.EVENTNAMES;
}
var ExtCalendar_multiviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_multiviewComponent, _super);
    function ExtCalendar_multiviewComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, calendar_multiviewMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,calendar_multiviewMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,calendar_multiviewMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtCalendar_multiviewComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,calendar_multiviewMetaData,hostComponent)}
    /**
     * @return {?}
     */
    function () { this.baseOnInit(calendar_multiviewMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtCalendar_multiviewComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtCalendar_multiviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-multiview',
                    inputs: calendar_multiviewMetaData.PROPERTIES,
                    outputs: calendar_multiviewMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtCalendar_multiviewComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtCalendar_multiviewComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtCalendar_multiviewComponent;
}(base));
export { ExtCalendar_multiviewComponent };
if (false) {
    /** @type {?} */
    ExtCalendar_multiviewComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYWxlbmRhci1tdWx0aXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQW9DQSxDQUFDO0lBbkNlLGdDQUFLLEdBQVcsb0JBQW9CLENBQUM7SUFDckMsMkNBQWdCLEdBQVE7UUFDcEMsU0FBUyxFQUFFLFNBQVM7UUFDcEIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixhQUFhLEVBQUUsUUFBUTtRQUN2QixRQUFRLEVBQUUsZUFBZTtRQUN6QixPQUFPLEVBQUUscUNBQXFDO1FBQzlDLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsT0FBTyxFQUFFLE1BQU07UUFDZixPQUFPLEVBQUUsUUFBUTtRQUNqQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUNjLHFDQUFVLEdBQWE7UUFDbkMsU0FBUztRQUNULGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsUUFBUTtRQUNSLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsT0FBTztRQUNQLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0tBQ1gsQ0FBQztJQUNjLGlDQUFNLEdBQVU7UUFDOUIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDN0IsQ0FBQztJQUNjLHFDQUFVLEdBQWE7UUFDckMsT0FBTztLQUNSLENBQUM7SUFDRixpQ0FBQztDQUFBLEFBcENELElBb0NDO1NBcENZLDBCQUEwQjs7O0lBQ3JDLGlDQUFtRDs7SUFDbkQsNENBYUE7O0lBQ0Esc0NBYUE7O0lBQ0Esa0NBRUE7O0lBQ0Esc0NBRUE7O0FBRUY7SUFPb0QsMERBQUk7SUFDdEQsd0NBQVksSUFBZSxFQUF5QyxhQUFvQjtRQUF4RixZQUEyRixrQkFBTSxJQUFJLENBQUMsYUFBYSxFQUFDLDBCQUEwQixFQUFDLGFBQWEsQ0FBQyxTQUFDO1FBQTFGLG1CQUFhLEdBQWIsYUFBYSxDQUFPOztJQUFxRSxDQUFDO0lBQzlKLHlLQUF5Szs7Ozs7SUFDbEssaURBQVE7Ozs7O0lBQWYsY0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBLENBQUEsQ0FBQztJQUMvRCwwRUFBMEU7Ozs7O0lBQ25FLDJEQUFrQjs7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7O2dCQWZKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixNQUFNLEVBQUUsMEJBQTBCLENBQUMsVUFBVTtvQkFDN0MsT0FBTyxFQUFFLDBCQUEwQixDQUFDLFVBQVU7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw4QkFBOEIsRUFBOUIsQ0FBOEIsQ0FBQyxFQUFDLENBQUM7b0JBQzNGLFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOzs7O2dCQS9DQyxVQUFVO2dCQUdILElBQUksdUJBOENtQixJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBUTVELHFDQUFDO0NBQUEsQUFoQkQsQ0FPb0QsSUFBSSxHQVN2RDtTQVRZLDhCQUE4Qjs7O0lBQ1osdURBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYWxlbmRhci1tdWx0aXZpZXcnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImNvbXBhY3RcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb21wYWN0T3B0aW9uc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdFZpZXdcIjogXCJTdHJpbmdcIixcbiAgICBcImxheW91dFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcInN0b3JlXCI6IFwiT2JqZWN0L0V4dC5jYWxlbmRhci5zdG9yZS5DYWxlbmRhcnNcIixcbiAgICBcInRpbWV6b25lT2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIkRhdGVcIixcbiAgICBcInZpZXdzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2NvbXBhY3QnLFxuICAgICdjb21wYWN0T3B0aW9ucycsXG4gICAgJ2RlZmF1bHRWaWV3JyxcbiAgICAnbGF5b3V0JyxcbiAgICAnc3RvcmUnLFxuICAgICd0aW1lem9uZU9mZnNldCcsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmlld3MnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1tdWx0aXZpZXcnLCBcbiAgaW5wdXRzOiBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfbXVsdGl2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfbXVsdGl2aWV3Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==