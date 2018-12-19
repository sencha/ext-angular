/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class orgchartMetaData {
}
orgchartMetaData.XTYPE = 'orgchart';
orgchartMetaData.PROPERTIESOBJECT = {
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
orgchartMetaData.PROPERTIES = [
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
orgchartMetaData.EVENTS = [
    { name: 'ready', parameters: '' }
];
orgchartMetaData.EVENTNAMES = [
    'ready'
];
if (false) {
    /** @type {?} */
    orgchartMetaData.XTYPE;
    /** @type {?} */
    orgchartMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    orgchartMetaData.PROPERTIES;
    /** @type {?} */
    orgchartMetaData.EVENTS;
    /** @type {?} */
    orgchartMetaData.EVENTNAMES;
}
export class ExtOrgChartComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, orgchartMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(orgchartMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtOrgChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'orgchart',
                inputs: orgchartMetaData.PROPERTIES,
                outputs: orgchartMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtOrgChartComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtOrgChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW9yZ2NoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC1vcmdjaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ2Isc0JBQUssR0FBVyxVQUFVLENBQUM7QUFDM0IsaUNBQWdCLEdBQVE7SUFDcEMsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixrQkFBa0IsRUFBRSxRQUFRO0lBQzVCLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUM7QUFDYywyQkFBVSxHQUFhO0lBQ25DLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0NBQ1gsQ0FBQztBQUNjLHVCQUFNLEdBQVU7SUFDeEIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7Q0FDbkMsQ0FBQztBQUNjLDJCQUFVLEdBQWE7SUFDL0IsT0FBTztDQUNkLENBQUM7OztJQXBCQSx1QkFBeUM7O0lBQ3pDLGtDQU1BOztJQUNBLDRCQU1BOztJQUNBLHdCQUVBOztJQUNBLDRCQUVBOztBQVNGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxJQUFJOzs7O0lBQzVDLFlBQVksSUFBZSxJQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7SUFDcEQsUUFBUSxLQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBRTlDLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7OztZQWRKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFVBQVU7Z0JBQ25DLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFDLENBQUM7Z0JBQ2pGLFFBQVEsRUFBRSxzQ0FBc0M7YUFDakQ7Ozs7WUFqQ0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgT3V0cHV0LFxuICAgIE9uSW5pdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gIGltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuICBleHBvcnQgY2xhc3Mgb3JnY2hhcnRNZXRhRGF0YSB7XG4gICAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ29yZ2NoYXJ0JztcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICAgIFwiekluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICB9O1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgICAnekluZGV4JyxcbiAgICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgICAnZml0VG9QYXJlbnQnLFxuICAgICAgJ2NvbmZpZydcbiAgXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG4gICAgICAgICAge25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuICBdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4gICAgICAgICAgJ3JlYWR5J1xuICBdO1xuICB9XG4gIEBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnb3JnY2hhcnQnLCBcbiAgICBpbnB1dHM6IG9yZ2NoYXJ0TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICBvdXRwdXRzOiBvcmdjaGFydE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dE9yZ0NoYXJ0Q29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xuICB9KVxuICBleHBvcnQgY2xhc3MgRXh0T3JnQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLG9yZ2NoYXJ0TWV0YURhdGEpfVxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQob3JnY2hhcnRNZXRhRGF0YSl9XG4gICAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICAgIH1cbiAgfSJdfQ==