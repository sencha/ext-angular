/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYWxlbmRhci1tdWx0aXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDOztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUFxQ0EsQ0FBQztJQXBDZSxnQ0FBSyxHQUFXLG9CQUFvQixDQUFDO0lBQ3JDLDJDQUFnQixHQUFRO1FBQ3BDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsT0FBTyxFQUFFLHFDQUFxQztRQUM5QyxnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsT0FBTyxFQUFFLFFBQVE7UUFDakIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUM7SUFDYyxxQ0FBVSxHQUFhO1FBQ25DLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFFBQVE7UUFDUixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsaUNBQU0sR0FBVTtRQUM5QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUM3QixDQUFDO0lBQ2MscUNBQVUsR0FBYTtRQUNyQyxPQUFPO0tBQ1IsQ0FBQztJQUNGLGlDQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1ksMEJBQTBCOzs7SUFDckMsaUNBQW1EOztJQUNuRCw0Q0FhQTs7SUFDQSxzQ0FjQTs7SUFDQSxrQ0FFQTs7SUFDQSxzQ0FFQTs7QUFFRjtJQU9vRCwwREFBSTtJQUN0RCx3Q0FDRSxJQUFlLEVBQXlDLGFBQW9CO1FBRDlFLFlBRUksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQywwQkFBMEIsRUFBQyxhQUFhLENBQUMsU0FDbkU7UUFGdUQsbUJBQWEsR0FBYixhQUFhLENBQU87O0lBRTVFLENBQUM7SUFDSCx5S0FBeUs7Ozs7O0lBQ2xLLGlEQUFROzs7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDL0QsMEVBQTBFOzs7OztJQUNuRSwyREFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFsQkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO29CQUM3QyxPQUFPLEVBQUUsMEJBQTBCLENBQUMsVUFBVTtvQkFDOUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDhCQUE4QixFQUE5QixDQUE4QixDQUFDLEVBQUMsQ0FBQztvQkFDM0YsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7Ozs7Z0JBakRDLFVBQVU7Z0JBSUgsSUFBSSx1QkFnRFMsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQVVsRCxxQ0FBQztDQUFBLEFBbkJELENBT29ELElBQUksR0FZdkQ7U0FaWSw4QkFBOEI7OztJQUV0Qix1REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY2FsZW5kYXItbXVsdGl2aWV3JztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJjb21wYWN0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29tcGFjdE9wdGlvbnNcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRWaWV3XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsYXlvdXRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzdG9yZVwiOiBcIk9iamVjdC9FeHQuY2FsZW5kYXIuc3RvcmUuQ2FsZW5kYXJzXCIsXG4gICAgXCJ0aW1lem9uZU9mZnNldFwiOiBcIk51bWJlclwiLFxuICAgIFwidmFsdWVcIjogXCJEYXRlXCIsXG4gICAgXCJ2aWV3c1wiOiBcIk9iamVjdFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdjb21wYWN0JyxcbiAgICAnY29tcGFjdE9wdGlvbnMnLFxuICAgICdkZWZhdWx0VmlldycsXG4gICAgJ2xheW91dCcsXG4gICAgJ3N0b3JlJyxcbiAgICAndGltZXpvbmVPZmZzZXQnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdzJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1tdWx0aXZpZXcnLCBcbiAgaW5wdXRzOiBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfbXVsdGl2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfbXVsdGl2aWV3Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19