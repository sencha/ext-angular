/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
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
     * @param {?} location
     * @param {?} resolver
     * @param {?} changeDetector
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(location, resolver, changeDetector, eRef, hostComponent) {
        super(eRef, eRef.nativeElement, calendar_multiviewMetaData, hostComponent);
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.hostComponent = hostComponent;
        console.log(location);
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
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExtCalendar_multiviewComponent.prototype.location;
    /**
     * @type {?}
     * @private
     */
    ExtCalendar_multiviewComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ExtCalendar_multiviewComponent.prototype.changeDetector;
    /** @type {?} */
    ExtCalendar_multiviewComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYWxlbmRhci1tdWx0aXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFFakIsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLDBCQUEwQjs7QUFDdkIsZ0NBQUssR0FBVyxvQkFBb0IsQ0FBQztBQUNyQywyQ0FBZ0IsR0FBUTtJQUNwQyxTQUFTLEVBQUUsU0FBUztJQUNwQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE9BQU8sRUFBRSxxQ0FBcUM7SUFDOUMsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixPQUFPLEVBQUUsTUFBTTtJQUNmLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixhQUFhLEVBQUUsU0FBUztJQUN4QixRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBQ2MscUNBQVUsR0FBYTtJQUNuQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MsaUNBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztDQUM3QixDQUFDO0FBQ2MscUNBQVUsR0FBYTtJQUNyQyxPQUFPO0NBQ1IsQ0FBQzs7O0lBbENBLGlDQUFtRDs7SUFDbkQsNENBYUE7O0lBQ0Esc0NBYUE7O0lBQ0Esa0NBRUE7O0lBQ0Esc0NBRUE7O0FBU0YsTUFBTSxPQUFPLDhCQUErQixTQUFRLElBQUk7Ozs7Ozs7O0lBQ3RELFlBRWMsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsY0FBaUMsRUFDN0MsSUFBZSxFQUF5QyxhQUFvQjtRQUMxRSxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsMEJBQTBCLEVBQUMsYUFBYSxDQUFDLENBQUE7UUFKN0QsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ1csa0JBQWEsR0FBYixhQUFhLENBQU87UUFFMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QixDQUFDOzs7OztJQUVJLFFBQVEsS0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7OztJQUV4RCxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOzs7WUF2QkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLE1BQU0sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO2dCQUM3QyxPQUFPLEVBQUUsMEJBQTBCLENBQUMsVUFBVTtnQkFDOUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsOEJBQThCLENBQUMsRUFBQyxDQUFDO2dCQUMzRixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7O1lBM0RDLGdCQUFnQjtZQURoQix3QkFBd0I7WUFFeEIsaUJBQWlCO1lBVWpCLFVBQVU7WUFJSCxJQUFJLHVCQW1EUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7Ozs7SUFIMUMsa0RBQWtDOzs7OztJQUNsQyxrREFBMEM7Ozs7O0lBQzFDLHdEQUF5Qzs7SUFDNUIsdURBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NhbGVuZGFyLW11bHRpdmlldyc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiY29tcGFjdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbXBhY3RPcHRpb25zXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0Vmlld1wiOiBcIlN0cmluZ1wiLFxuICAgIFwibGF5b3V0XCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic3RvcmVcIjogXCJPYmplY3QvRXh0LmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc1wiLFxuICAgIFwidGltZXpvbmVPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInZhbHVlXCI6IFwiRGF0ZVwiLFxuICAgIFwidmlld3NcIjogXCJPYmplY3RcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnY29tcGFjdCcsXG4gICAgJ2NvbXBhY3RPcHRpb25zJyxcbiAgICAnZGVmYXVsdFZpZXcnLFxuICAgICdsYXlvdXQnLFxuICAgICdzdG9yZScsXG4gICAgJ3RpbWV6b25lT2Zmc2V0JyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3cycsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhbGVuZGFyLW11bHRpdmlldycsIFxuICBpbnB1dHM6IGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9tdWx0aXZpZXdDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9tdWx0aXZpZXdDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gIC8vICAgICAgcHJpdmF0ZSBwYXJlbnRDb250ZXh0czogQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZixlUmVmLm5hdGl2ZUVsZW1lbnQsY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgIH1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNhbGVuZGFyX211bHRpdmlld01ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19