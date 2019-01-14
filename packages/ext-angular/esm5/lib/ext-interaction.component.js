/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
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
    function ExtInteractionComponent(location, resolver, changeDetector, eRef, hostComponent) {
        var _this = _super.call(this, eRef, eRef.nativeElement, interactionMetaData, hostComponent) || this;
        _this.location = location;
        _this.resolver = resolver;
        _this.changeDetector = changeDetector;
        _this.hostComponent = hostComponent;
        console.log(location);
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,interactionMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,interactionMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtInteractionComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,interactionMetaData,hostComponent)}
    /**
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
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'interaction',
                    inputs: interactionMetaData.PROPERTIES,
                    outputs: interactionMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtInteractionComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtInteractionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtInteractionComponent;
}(base));
export { ExtInteractionComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExtInteractionComponent.prototype.location;
    /**
     * @type {?}
     * @private
     */
    ExtInteractionComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ExtInteractionComponent.prototype.changeDetector;
    /** @type {?} */
    ExtInteractionComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUVqQixJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBNEJBLENBQUM7SUEzQmUseUJBQUssR0FBVyxhQUFhLENBQUM7SUFDOUIsb0NBQWdCLEdBQVE7UUFDcEMsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUUsUUFBUTtRQUNuQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUNjLDhCQUFVLEdBQWE7UUFDbkMsT0FBTztRQUNQLFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsMEJBQU0sR0FBVTtRQUM5QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUM3QixDQUFDO0lBQ2MsOEJBQVUsR0FBYTtRQUNyQyxPQUFPO0tBQ1IsQ0FBQztJQUNGLDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QlksbUJBQW1COzs7SUFDOUIsMEJBQTRDOztJQUM1QyxxQ0FTQTs7SUFDQSwrQkFTQTs7SUFDQSwyQkFFQTs7SUFDQSwrQkFFQTs7QUFFRjtJQU82QyxtREFBSTtJQUMvQyxpQ0FFYyxRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxjQUFpQyxFQUM3QyxJQUFlLEVBQXlDLGFBQW9CO1FBTDlFLFlBTUksa0JBQU0sSUFBSSxFQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxDQUFDLFNBRWpFO1FBTlcsY0FBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsY0FBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsb0JBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ1csbUJBQWEsR0FBYixhQUFhLENBQU87UUFFMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTs7SUFDdkIsQ0FBQztJQUNILGtLQUFrSzs7Ozs7SUFDM0osMENBQVE7Ozs7O0lBQWYsY0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBQztJQUN4RCwwRUFBMEU7Ozs7O0lBQ25FLG9EQUFrQjs7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7O2dCQXZCSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO29CQUN0QyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtvQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztvQkFDcEYsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7Ozs7Z0JBbkRDLGdCQUFnQjtnQkFEaEIsd0JBQXdCO2dCQUV4QixpQkFBaUI7Z0JBVWpCLFVBQVU7Z0JBSUgsSUFBSSx1QkEyQ1MsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQVdsRCw4QkFBQztDQUFBLEFBeEJELENBTzZDLElBQUksR0FpQmhEO1NBakJZLHVCQUF1Qjs7Ozs7O0lBRzVCLDJDQUFrQzs7Ozs7SUFDbEMsMkNBQTBDOzs7OztJQUMxQyxpREFBeUM7O0lBQzVCLGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXJPdXRsZXQsIENoaWxkcmVuT3V0bGV0Q29udGV4dHMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBpbnRlcmFjdGlvbk1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2ludGVyYWN0aW9uJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJlbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZ2VzdHVyZVwiOiBcIk9iamVjdFwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2NoYXJ0JyxcbiAgICAnZW5hYmxlZCcsXG4gICAgJ2dlc3R1cmUnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnRlcmFjdGlvbicsIFxuICBpbnB1dHM6IGludGVyYWN0aW9uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogaW50ZXJhY3Rpb25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0SW50ZXJhY3Rpb25Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRJbnRlcmFjdGlvbkNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgLy8gICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLGVSZWYubmF0aXZlRWxlbWVudCxpbnRlcmFjdGlvbk1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcbiAgICB9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxpbnRlcmFjdGlvbk1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGludGVyYWN0aW9uTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=