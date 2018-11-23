/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
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
    function ExtCalendar_multiviewComponent(eRef) {
        return _super.call(this, eRef, calendar_multiviewMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtCalendar_multiviewComponent.prototype.ngOnInit = /**
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
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtCalendar_multiviewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtCalendar_multiviewComponent;
}(base));
export { ExtCalendar_multiviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtY2FsZW5kYXItbXVsdGl2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUFrQ0EsQ0FBQztJQWpDZSxnQ0FBSyxHQUFXLG9CQUFvQixDQUFDO0lBQ3JDLDJDQUFnQixHQUFRO1FBQ3BDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsT0FBTyxFQUFFLHFDQUFxQztRQUM5QyxnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsT0FBTyxFQUFFLFFBQVE7UUFDakIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBQ2MscUNBQVUsR0FBYTtRQUNuQyxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixRQUFRO1FBQ1IsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixPQUFPO1FBQ1AsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyxpQ0FBTSxHQUFVO1FBQzlCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDYyxxQ0FBVSxHQUFhO1FBQ3JDLE9BQU87S0FDUixDQUFDO0lBQ0YsaUNBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSwwQkFBMEI7OztJQUNyQyxpQ0FBbUQ7O0lBQ25ELDRDQVlBOztJQUNBLHNDQVlBOztJQUNBLGtDQUVBOztJQUNBLHNDQUVBOztBQUVGO0lBT29ELDBEQUFJO0lBQ3RELHdDQUFZLElBQWU7ZUFBRyxrQkFBTSxJQUFJLEVBQUMsMEJBQTBCLENBQUM7SUFBQSxDQUFDOzs7O0lBQzlELGlEQUFROzs7SUFBZixjQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUEsQ0FBQSxDQUFDO0lBQy9ELDBFQUEwRTs7Ozs7SUFDbkUsMkRBQWtCOzs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO29CQUM3QyxPQUFPLEVBQUUsMEJBQTBCLENBQUMsVUFBVTtvQkFDOUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDhCQUE4QixFQUE5QixDQUE4QixDQUFDLEVBQUMsQ0FBQztvQkFDM0YsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBN0NDLFVBQVU7O0lBc0RaLHFDQUFDO0NBQUEsQUFmRCxDQU9vRCxJQUFJLEdBUXZEO1NBUlksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY2FsZW5kYXItbXVsdGl2aWV3JztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJjb21wYWN0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29tcGFjdE9wdGlvbnNcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRWaWV3XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsYXlvdXRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzdG9yZVwiOiBcIk9iamVjdC9FeHQuY2FsZW5kYXIuc3RvcmUuQ2FsZW5kYXJzXCIsXG4gICAgXCJ0aW1lem9uZU9mZnNldFwiOiBcIk51bWJlclwiLFxuICAgIFwidmFsdWVcIjogXCJEYXRlXCIsXG4gICAgXCJ2aWV3c1wiOiBcIk9iamVjdFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdjb21wYWN0JyxcbiAgICAnY29tcGFjdE9wdGlvbnMnLFxuICAgICdkZWZhdWx0VmlldycsXG4gICAgJ2xheW91dCcsXG4gICAgJ3N0b3JlJyxcbiAgICAndGltZXpvbmVPZmZzZXQnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdzJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1tdWx0aXZpZXcnLCBcbiAgaW5wdXRzOiBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfbXVsdGl2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfbXVsdGl2aWV3Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19