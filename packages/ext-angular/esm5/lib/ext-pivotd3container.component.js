/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
import { base } from './base';
var pivotd3containerMetaData = /** @class */ (function () {
    function pivotd3containerMetaData() {
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
    return pivotd3containerMetaData;
}());
export { pivotd3containerMetaData };
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
var ExtPivotd3containerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivotd3containerComponent, _super);
    function ExtPivotd3containerComponent(location, resolver, changeDetector, eRef, hostComponent) {
        var _this = _super.call(this, eRef, eRef.nativeElement, pivotd3containerMetaData, hostComponent) || this;
        _this.location = location;
        _this.resolver = resolver;
        _this.changeDetector = changeDetector;
        _this.hostComponent = hostComponent;
        console.log(location);
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,pivotd3containerMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,pivotd3containerMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtPivotd3containerComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,pivotd3containerMetaData,hostComponent)}
    /**
     * @return {?}
     */
    function () { this.baseOnInit(pivotd3containerMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtPivotd3containerComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtPivotd3containerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pivotd3container',
                    inputs: pivotd3containerMetaData.PROPERTIES,
                    outputs: pivotd3containerMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtPivotd3containerComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtPivotd3containerComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtPivotd3containerComponent;
}(base));
export { ExtPivotd3containerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtcGl2b3RkM2NvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFFakIsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTBCQSxDQUFDO0lBekJlLDhCQUFLLEdBQVcsa0JBQWtCLENBQUM7SUFDbkMseUNBQWdCLEdBQVE7UUFDcEMsY0FBYyxFQUFFLCtCQUErQjtRQUMvQyxTQUFTLEVBQUUsZUFBZTtRQUMxQixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtRQUM1QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBQ2MsbUNBQVUsR0FBYTtRQUNuQyxjQUFjO1FBQ2QsU0FBUztRQUNULFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0tBQ1gsQ0FBQztJQUNjLCtCQUFNLEdBQVU7UUFDOUIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDN0IsQ0FBQztJQUNjLG1DQUFVLEdBQWE7UUFDckMsT0FBTztLQUNSLENBQUM7SUFDRiwrQkFBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLHdCQUF3Qjs7O0lBQ25DLCtCQUFpRDs7SUFDakQsMENBUUE7O0lBQ0Esb0NBUUE7O0lBQ0EsZ0NBRUE7O0lBQ0Esb0NBRUE7O0FBRUY7SUFPa0Qsd0RBQUk7SUFDcEQsc0NBRWMsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsY0FBaUMsRUFDN0MsSUFBZSxFQUF5QyxhQUFvQjtRQUw5RSxZQU1JLGtCQUFNLElBQUksRUFBQyxJQUFJLENBQUMsYUFBYSxFQUFDLHdCQUF3QixFQUFDLGFBQWEsQ0FBQyxTQUV0RTtRQU5XLGNBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGNBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLG9CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNXLG1CQUFhLEdBQWIsYUFBYSxDQUFPO1FBRTFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7O0lBQ3ZCLENBQUM7SUFDSCx1S0FBdUs7Ozs7O0lBQ2hLLCtDQUFROzs7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDN0QsMEVBQTBFOzs7OztJQUNuRSx5REFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkF2QkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO29CQUMzQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsVUFBVTtvQkFDNUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDRCQUE0QixFQUE1QixDQUE0QixDQUFDLEVBQUMsQ0FBQztvQkFDekYsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7Ozs7Z0JBakRDLGdCQUFnQjtnQkFEaEIsd0JBQXdCO2dCQUV4QixpQkFBaUI7Z0JBVWpCLFVBQVU7Z0JBSUgsSUFBSSx1QkF5Q1MsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQVdsRCxtQ0FBQztDQUFBLEFBeEJELENBT2tELElBQUksR0FpQnJEO1NBakJZLDRCQUE0Qjs7Ozs7O0lBR2pDLGdEQUFrQzs7Ozs7SUFDbEMsZ0RBQTBDOzs7OztJQUMxQyxzREFBeUM7O0lBQzVCLHFEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXJPdXRsZXQsIENoaWxkcmVuT3V0bGV0Q29udGV4dHMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBwaXZvdGQzY29udGFpbmVyTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAncGl2b3RkM2NvbnRhaW5lcic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiY29uZmlndXJhdG9yXCI6IFwiRXh0LnBpdm90LnBsdWdpbi5Db25maWd1cmF0b3JcIixcbiAgICBcImRyYXdpbmdcIjogXCJFeHQuQ29tcG9uZW50XCIsXG4gICAgXCJtYXRyaXhcIjogXCJFeHQucGl2b3QubWF0cml4LkJhc2VcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnY29uZmlndXJhdG9yJyxcbiAgICAnZHJhd2luZycsXG4gICAgJ21hdHJpeCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Bpdm90ZDNjb250YWluZXInLCBcbiAgaW5wdXRzOiBwaXZvdGQzY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogcGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaXZvdGQzY29udGFpbmVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGl2b3RkM2NvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgLy8gICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLGVSZWYubmF0aXZlRWxlbWVudCxwaXZvdGQzY29udGFpbmVyTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgIH1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChwaXZvdGQzY29udGFpbmVyTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=