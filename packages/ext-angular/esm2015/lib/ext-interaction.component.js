/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class interactionMetaData {
}
interactionMetaData.XTYPE = 'interaction';
interactionMetaData.PROPERTIESOBJECT = {
    "chart": "Ext.chart.AbstractChart",
    "enabled": "Boolean",
    "gesture": "Object",
    "listeners": "Object",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
interactionMetaData.PROPERTIES = [
    'chart',
    'enabled',
    'gesture',
    'listeners',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
interactionMetaData.EVENTS = [
    { name: 'ready', parameters: '' }
];
interactionMetaData.EVENTNAMES = [
    'ready'
];
if (false) {
    /** @type {?} */
    interactionMetaData.XTYPE;
    /** @type {?} */
    interactionMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    interactionMetaData.PROPERTIES;
    /** @type {?} */
    interactionMetaData.EVENTS;
    /** @type {?} */
    interactionMetaData.EVENTNAMES;
}
export class ExtInteractionComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, interactionMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.baseOnInit(interactionMetaData);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    }
}
ExtInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'interaction',
                inputs: interactionMetaData.PROPERTIES,
                outputs: interactionMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtInteractionComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtInteractionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtInteractionComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLG1CQUFtQjs7QUFDaEIseUJBQUssR0FBVyxhQUFhLENBQUM7QUFDOUIsb0NBQWdCLEdBQVE7SUFDcEMsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQyxTQUFTLEVBQUUsU0FBUztJQUNwQixTQUFTLEVBQUUsUUFBUTtJQUNuQixXQUFXLEVBQUUsUUFBUTtJQUNyQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGtCQUFrQixFQUFFLFFBQVE7SUFDNUIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUNjLDhCQUFVLEdBQWE7SUFDbkMsT0FBTztJQUNQLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0NBQ1gsQ0FBQztBQUNjLDBCQUFNLEdBQVU7SUFDOUIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7Q0FDN0IsQ0FBQztBQUNjLDhCQUFVLEdBQWE7SUFDckMsT0FBTztDQUNSLENBQUM7OztJQTNCQSwwQkFBNEM7O0lBQzVDLHFDQVNBOztJQUNBLCtCQVVBOztJQUNBLDJCQUVBOztJQUNBLCtCQUVBOztBQVNGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxJQUFJOzs7OztJQUMvQyxZQUNFLElBQWUsRUFBeUMsYUFBb0I7UUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxDQUFDLENBQUE7UUFETCxrQkFBYSxHQUFiLGFBQWEsQ0FBTztJQUU1RSxDQUFDOzs7O0lBQ0ksUUFBUTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUN0QyxDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLDBCQUEwQjtJQUM1QixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixNQUFNLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtnQkFDdEMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFVBQVU7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEVBQUMsQ0FBQztnQkFDcEYsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7OztZQXhDQyxVQUFVO1lBR0gsSUFBSSx1QkF3Q1MsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROzs7O0lBQTdCLGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgaW50ZXJhY3Rpb25NZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdpbnRlcmFjdGlvbic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiY2hhcnRcIjogXCJFeHQuY2hhcnQuQWJzdHJhY3RDaGFydFwiLFxuICAgIFwiZW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImdlc3R1cmVcIjogXCJPYmplY3RcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdjaGFydCcsXG4gICAgJ2VuYWJsZWQnLFxuICAgICdnZXN0dXJlJyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnRlcmFjdGlvbicsIFxuICBpbnB1dHM6IGludGVyYWN0aW9uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogaW50ZXJhY3Rpb25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0SW50ZXJhY3Rpb25Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRJbnRlcmFjdGlvbkNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsaW50ZXJhY3Rpb25NZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFzZU9uSW5pdChpbnRlcmFjdGlvbk1ldGFEYXRhKVxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG59Il19