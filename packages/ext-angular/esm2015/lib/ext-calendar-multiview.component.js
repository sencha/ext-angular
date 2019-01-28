/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class calendar_multiviewMetaData {
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
export class ExtCalendar_multiviewComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, calendar_multiviewMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.baseOnInit(calendar_multiviewMetaData);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    }
}
ExtCalendar_multiviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-multiview',
                inputs: calendar_multiviewMetaData.PROPERTIES,
                outputs: calendar_multiviewMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtCalendar_multiviewComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtCalendar_multiviewComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtCalendar_multiviewComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYWxlbmRhci1tdWx0aXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sMEJBQTBCOztBQUN2QixnQ0FBSyxHQUFXLG9CQUFvQixDQUFDO0FBQ3JDLDJDQUFnQixHQUFRO0lBQ3BDLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsUUFBUSxFQUFFLGVBQWU7SUFDekIsT0FBTyxFQUFFLHFDQUFxQztJQUM5QyxnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsT0FBTyxFQUFFLFFBQVE7SUFDakIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixrQkFBa0IsRUFBRSxRQUFRO0lBQzVCLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUM7QUFDYyxxQ0FBVSxHQUFhO0lBQ25DLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFFBQVE7SUFDUixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MsaUNBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztDQUM3QixDQUFDO0FBQ2MscUNBQVUsR0FBYTtJQUNyQyxPQUFPO0NBQ1IsQ0FBQzs7O0lBbkNBLGlDQUFtRDs7SUFDbkQsNENBYUE7O0lBQ0Esc0NBY0E7O0lBQ0Esa0NBRUE7O0lBQ0Esc0NBRUE7O0FBU0YsTUFBTSxPQUFPLDhCQUErQixTQUFRLElBQUk7Ozs7O0lBQ3RELFlBQ0UsSUFBZSxFQUF5QyxhQUFvQjtRQUMxRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQywwQkFBMEIsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQURaLGtCQUFhLEdBQWIsYUFBYSxDQUFPO0lBRTVFLENBQUM7Ozs7SUFDSSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQzdDLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsMEJBQTBCO0lBQzVCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsTUFBTSxFQUFFLDBCQUEwQixDQUFDLFVBQVU7Z0JBQzdDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFDLENBQUM7Z0JBQzNGLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7Ozs7WUFoREMsVUFBVTtZQUdILElBQUksdUJBZ0RTLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7OztJQUE3Qix1REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NhbGVuZGFyLW11bHRpdmlldyc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiY29tcGFjdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbXBhY3RPcHRpb25zXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0Vmlld1wiOiBcIlN0cmluZ1wiLFxuICAgIFwibGF5b3V0XCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic3RvcmVcIjogXCJPYmplY3QvRXh0LmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc1wiLFxuICAgIFwidGltZXpvbmVPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInZhbHVlXCI6IFwiRGF0ZVwiLFxuICAgIFwidmlld3NcIjogXCJPYmplY3RcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnY29tcGFjdCcsXG4gICAgJ2NvbXBhY3RPcHRpb25zJyxcbiAgICAnZGVmYXVsdFZpZXcnLFxuICAgICdsYXlvdXQnLFxuICAgICdzdG9yZScsXG4gICAgJ3RpbWV6b25lT2Zmc2V0JyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3cycsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItbXVsdGl2aWV3JywgXG4gIGlucHV0czogY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=