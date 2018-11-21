/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var interactionMetaData = /** @class */ (function () {
    function interactionMetaData() {
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
        'fitToParent',
        'config'
    ];
    interactionMetaData.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    interactionMetaData.EVENTNAMES = [
        'ready'
    ];
    return interactionMetaData;
}());
export { interactionMetaData };
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
var ExtInteractionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtInteractionComponent, _super);
    function ExtInteractionComponent(eRef) {
        return _super.call(this, eRef, interactionMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtInteractionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(interactionMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtInteractionComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () { this.baseAfterContentInit(); };
    ExtInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'interaction',
                    inputs: interactionMetaData.PROPERTIES,
                    outputs: interactionMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtInteractionComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtInteractionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtInteractionComponent;
}(base));
export { ExtInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC1pbnRlcmFjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBSUwsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBNEJBLENBQUM7SUEzQmUseUJBQUssR0FBVyxhQUFhLENBQUM7SUFDOUIsb0NBQWdCLEdBQVE7UUFDcEMsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUUsUUFBUTtRQUNuQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUNjLDhCQUFVLEdBQWE7UUFDbkMsT0FBTztRQUNQLFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsMEJBQU0sR0FBVTtRQUM5QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUM3QixDQUFDO0lBQ2MsOEJBQVUsR0FBYTtRQUNyQyxPQUFPO0tBQ1IsQ0FBQztJQUNGLDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QlksbUJBQW1COzs7SUFDOUIsMEJBQTRDOztJQUM1QyxxQ0FTQTs7SUFDQSwrQkFTQTs7SUFDQSwyQkFFQTs7SUFDQSwrQkFFQTs7QUFFRjtJQU82QyxtREFBSTtJQUMvQyxpQ0FBWSxJQUFlO2VBQUcsa0JBQU0sSUFBSSxFQUFDLG1CQUFtQixDQUFDO0lBQUEsQ0FBQzs7OztJQUN2RCwwQ0FBUTs7O0lBQWYsY0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBQztJQUN4RCwwRUFBMEU7Ozs7O0lBQ25FLG9EQUFrQjs7Ozs7SUFBekIsY0FBNkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUEsQ0FBQSxDQUFDOztnQkFYMUQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixNQUFNLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtvQkFDdEMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFVBQVU7b0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBdUIsRUFBdkIsQ0FBdUIsQ0FBQyxFQUFDLENBQUM7b0JBQ3BGLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQXZDQyxVQUFVOztJQTZDWiw4QkFBQztDQUFBLEFBWkQsQ0FPNkMsSUFBSSxHQUtoRDtTQUxZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBpbnRlcmFjdGlvbk1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2ludGVyYWN0aW9uJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJlbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZ2VzdHVyZVwiOiBcIk9iamVjdFwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2NoYXJ0JyxcbiAgICAnZW5hYmxlZCcsXG4gICAgJ2dlc3R1cmUnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnRlcmFjdGlvbicsIFxuICBpbnB1dHM6IGludGVyYWN0aW9uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogaW50ZXJhY3Rpb25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0SW50ZXJhY3Rpb25Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRJbnRlcmFjdGlvbkNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGludGVyYWN0aW9uTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGludGVyYWN0aW9uTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge3RoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKX1cbn0iXX0=