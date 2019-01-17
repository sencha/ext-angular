/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
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
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,calendar_multiviewMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(calendar_multiviewMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYWxlbmRhci1tdWx0aXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLDBCQUEwQjs7QUFDdkIsZ0NBQUssR0FBVyxvQkFBb0IsQ0FBQztBQUNyQywyQ0FBZ0IsR0FBUTtJQUNwQyxTQUFTLEVBQUUsU0FBUztJQUNwQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE9BQU8sRUFBRSxxQ0FBcUM7SUFDOUMsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixPQUFPLEVBQUUsTUFBTTtJQUNmLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixhQUFhLEVBQUUsU0FBUztJQUN4QixRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBQ2MscUNBQVUsR0FBYTtJQUNuQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0NBQ1gsQ0FBQztBQUNjLGlDQUFNLEdBQVU7SUFDOUIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7Q0FDN0IsQ0FBQztBQUNjLHFDQUFVLEdBQWE7SUFDckMsT0FBTztDQUNSLENBQUM7OztJQW5DQSxpQ0FBbUQ7O0lBQ25ELDRDQWFBOztJQUNBLHNDQWNBOztJQUNBLGtDQUVBOztJQUNBLHNDQUVBOztBQVNGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxJQUFJOzs7OztJQUN0RCxZQUNFLElBQWUsRUFBeUMsYUFBb0I7UUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsMEJBQTBCLEVBQUMsYUFBYSxDQUFDLENBQUE7UUFEWixrQkFBYSxHQUFiLGFBQWEsQ0FBTztJQUU1RSxDQUFDOzs7OztJQUVJLFFBQVEsS0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7OztJQUV4RCxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOzs7WUFsQkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO2dCQUM3QyxPQUFPLEVBQUUsMEJBQTBCLENBQUMsVUFBVTtnQkFDOUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsOEJBQThCLENBQUMsRUFBQyxDQUFDO2dCQUMzRixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7O1lBakRDLFVBQVU7WUFJSCxJQUFJLHVCQWdEUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7SUFBN0IsdURBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NhbGVuZGFyLW11bHRpdmlldyc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiY29tcGFjdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbXBhY3RPcHRpb25zXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0Vmlld1wiOiBcIlN0cmluZ1wiLFxuICAgIFwibGF5b3V0XCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic3RvcmVcIjogXCJPYmplY3QvRXh0LmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc1wiLFxuICAgIFwidGltZXpvbmVPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInZhbHVlXCI6IFwiRGF0ZVwiLFxuICAgIFwidmlld3NcIjogXCJPYmplY3RcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnY29tcGFjdCcsXG4gICAgJ2NvbXBhY3RPcHRpb25zJyxcbiAgICAnZGVmYXVsdFZpZXcnLFxuICAgICdsYXlvdXQnLFxuICAgICdzdG9yZScsXG4gICAgJ3RpbWV6b25lT2Zmc2V0JyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3cycsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItbXVsdGl2aWV3JywgXG4gIGlucHV0czogY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX211bHRpdmlld0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==