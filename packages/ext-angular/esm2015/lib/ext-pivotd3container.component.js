/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
import { base } from './base';
export class pivotd3containerMetaData {
}
pivotd3containerMetaData.XTYPE = 'pivotd3container';
pivotd3containerMetaData.PROPERTIESOBJECT = {
    "configurator": "Ext.pivot.plugin.Configurator",
    "drawing": "Ext.Component",
    "matrix": "Ext.pivot.matrix.Base",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
pivotd3containerMetaData.PROPERTIES = [
    'configurator',
    'drawing',
    'matrix',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
pivotd3containerMetaData.EVENTS = [
    { name: 'ready', parameters: '' }
];
pivotd3containerMetaData.EVENTNAMES = [
    'ready'
];
if (false) {
    /** @type {?} */
    pivotd3containerMetaData.XTYPE;
    /** @type {?} */
    pivotd3containerMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    pivotd3containerMetaData.PROPERTIES;
    /** @type {?} */
    pivotd3containerMetaData.EVENTS;
    /** @type {?} */
    pivotd3containerMetaData.EVENTNAMES;
}
export class ExtPivotd3containerComponent extends base {
    /**
     * @param {?} location
     * @param {?} resolver
     * @param {?} changeDetector
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(location, resolver, changeDetector, eRef, hostComponent) {
        super(eRef, eRef.nativeElement, pivotd3containerMetaData, hostComponent);
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.hostComponent = hostComponent;
        console.log(location);
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,pivotd3containerMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(pivotd3containerMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtPivotd3containerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pivotd3container',
                inputs: pivotd3containerMetaData.PROPERTIES,
                outputs: pivotd3containerMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtPivotd3containerComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtPivotd3containerComponent.ctorParameters = () => [
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
    ExtPivotd3containerComponent.prototype.location;
    /**
     * @type {?}
     * @private
     */
    ExtPivotd3containerComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ExtPivotd3containerComponent.prototype.changeDetector;
    /** @type {?} */
    ExtPivotd3containerComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtcGl2b3RkM2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUVqQixJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sd0JBQXdCOztBQUNyQiw4QkFBSyxHQUFXLGtCQUFrQixDQUFDO0FBQ25DLHlDQUFnQixHQUFRO0lBQ3BDLGNBQWMsRUFBRSwrQkFBK0I7SUFDL0MsU0FBUyxFQUFFLGVBQWU7SUFDMUIsUUFBUSxFQUFFLHVCQUF1QjtJQUNqQyxnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGtCQUFrQixFQUFFLFFBQVE7SUFDNUIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUNjLG1DQUFVLEdBQWE7SUFDbkMsY0FBYztJQUNkLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtDQUNYLENBQUM7QUFDYywrQkFBTSxHQUFVO0lBQzlCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0NBQzdCLENBQUM7QUFDYyxtQ0FBVSxHQUFhO0lBQ3JDLE9BQU87Q0FDUixDQUFDOzs7SUF4QkEsK0JBQWlEOztJQUNqRCwwQ0FRQTs7SUFDQSxvQ0FRQTs7SUFDQSxnQ0FFQTs7SUFDQSxvQ0FFQTs7QUFTRixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsSUFBSTs7Ozs7Ozs7SUFDcEQsWUFFYyxRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxjQUFpQyxFQUM3QyxJQUFlLEVBQXlDLGFBQW9CO1FBQzFFLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyx3QkFBd0IsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQUozRCxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDVyxrQkFBYSxHQUFiLGFBQWEsQ0FBTztRQUUxRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Ozs7O0lBRUksUUFBUSxLQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBRXRELGtCQUFrQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7OztZQXZCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsTUFBTSxFQUFFLHdCQUF3QixDQUFDLFVBQVU7Z0JBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFDLENBQUM7Z0JBQ3pGLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7Ozs7WUFqREMsZ0JBQWdCO1lBRGhCLHdCQUF3QjtZQUV4QixpQkFBaUI7WUFVakIsVUFBVTtZQUlILElBQUksdUJBeUNTLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7Ozs7OztJQUgxQyxnREFBa0M7Ozs7O0lBQ2xDLGdEQUEwQzs7Ozs7SUFDMUMsc0RBQXlDOztJQUM1QixxREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgcGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ3Bpdm90ZDNjb250YWluZXInO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImNvbmZpZ3VyYXRvclwiOiBcIkV4dC5waXZvdC5wbHVnaW4uQ29uZmlndXJhdG9yXCIsXG4gICAgXCJkcmF3aW5nXCI6IFwiRXh0LkNvbXBvbmVudFwiLFxuICAgIFwibWF0cml4XCI6IFwiRXh0LnBpdm90Lm1hdHJpeC5CYXNlXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2NvbmZpZ3VyYXRvcicsXG4gICAgJ2RyYXdpbmcnLFxuICAgICdtYXRyaXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaXZvdGQzY29udGFpbmVyJywgXG4gIGlucHV0czogcGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IHBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0UGl2b3RkM2NvbnRhaW5lckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFBpdm90ZDNjb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gIC8vICAgICAgcHJpdmF0ZSBwYXJlbnRDb250ZXh0czogQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZixlUmVmLm5hdGl2ZUVsZW1lbnQscGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcbiAgICB9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxwaXZvdGQzY29udGFpbmVyTWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQocGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19