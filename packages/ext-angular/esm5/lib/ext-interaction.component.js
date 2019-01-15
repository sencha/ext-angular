/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
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
    function ExtInteractionComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, interactionMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
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
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtInteractionComponent;
}(base));
export { ExtInteractionComponent };
if (false) {
    /** @type {?} */
    ExtInteractionComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBNEJBLENBQUM7SUEzQmUseUJBQUssR0FBVyxhQUFhLENBQUM7SUFDOUIsb0NBQWdCLEdBQVE7UUFDcEMsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUUsUUFBUTtRQUNuQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUNjLDhCQUFVLEdBQWE7UUFDbkMsT0FBTztRQUNQLFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsMEJBQU0sR0FBVTtRQUM5QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUM3QixDQUFDO0lBQ2MsOEJBQVUsR0FBYTtRQUNyQyxPQUFPO0tBQ1IsQ0FBQztJQUNGLDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QlksbUJBQW1COzs7SUFDOUIsMEJBQTRDOztJQUM1QyxxQ0FTQTs7SUFDQSwrQkFTQTs7SUFDQSwyQkFFQTs7SUFDQSwrQkFFQTs7QUFFRjtJQU82QyxtREFBSTtJQUMvQyxpQ0FDRSxJQUFlLEVBQXlDLGFBQW9CO1FBRDlFLFlBRUksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxhQUFhLENBQUMsU0FDNUQ7UUFGdUQsbUJBQWEsR0FBYixhQUFhLENBQU87O0lBRTVFLENBQUM7SUFDSCxrS0FBa0s7Ozs7O0lBQzNKLDBDQUFROzs7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDeEQsMEVBQTBFOzs7OztJQUNuRSxvREFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFsQkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixNQUFNLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtvQkFDdEMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFVBQVU7b0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBdUIsRUFBdkIsQ0FBdUIsQ0FBQyxFQUFDLENBQUM7b0JBQ3BGLFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOzs7O2dCQXhDQyxVQUFVO2dCQUlILElBQUksdUJBdUNTLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFVbEQsOEJBQUM7Q0FBQSxBQW5CRCxDQU82QyxJQUFJLEdBWWhEO1NBWlksdUJBQXVCOzs7SUFFZixnREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgaW50ZXJhY3Rpb25NZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdpbnRlcmFjdGlvbic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiY2hhcnRcIjogXCJFeHQuY2hhcnQuQWJzdHJhY3RDaGFydFwiLFxuICAgIFwiZW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImdlc3R1cmVcIjogXCJPYmplY3RcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdjaGFydCcsXG4gICAgJ2VuYWJsZWQnLFxuICAgICdnZXN0dXJlJyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW50ZXJhY3Rpb24nLCBcbiAgaW5wdXRzOiBpbnRlcmFjdGlvbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGludGVyYWN0aW9uTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEludGVyYWN0aW9uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0SW50ZXJhY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGludGVyYWN0aW9uTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxpbnRlcmFjdGlvbk1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGludGVyYWN0aW9uTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=