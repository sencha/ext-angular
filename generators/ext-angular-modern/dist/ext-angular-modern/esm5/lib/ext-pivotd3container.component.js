/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
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
    function ExtPivotd3containerComponent(eRef) {
        return _super.call(this, eRef, pivotd3containerMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtPivotd3containerComponent.prototype.ngOnInit = /**
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
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtPivotd3containerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtPivotd3containerComponent;
}(base));
export { ExtPivotd3containerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTBCQSxDQUFDO0lBekJlLDhCQUFLLEdBQVcsa0JBQWtCLENBQUM7SUFDbkMseUNBQWdCLEdBQVE7UUFDcEMsY0FBYyxFQUFFLCtCQUErQjtRQUMvQyxTQUFTLEVBQUUsZUFBZTtRQUMxQixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtRQUM1QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBQ2MsbUNBQVUsR0FBYTtRQUNuQyxjQUFjO1FBQ2QsU0FBUztRQUNULFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0tBQ1gsQ0FBQztJQUNjLCtCQUFNLEdBQVU7UUFDOUIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDN0IsQ0FBQztJQUNjLG1DQUFVLEdBQWE7UUFDckMsT0FBTztLQUNSLENBQUM7SUFDRiwrQkFBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLHdCQUF3Qjs7O0lBQ25DLCtCQUFpRDs7SUFDakQsMENBUUE7O0lBQ0Esb0NBUUE7O0lBQ0EsZ0NBRUE7O0lBQ0Esb0NBRUE7O0FBRUY7SUFPa0Qsd0RBQUk7SUFDcEQsc0NBQVksSUFBZTtlQUFHLGtCQUFNLElBQUksRUFBQyx3QkFBd0IsQ0FBQztJQUFBLENBQUM7Ozs7SUFDNUQsK0NBQVE7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDN0QsMEVBQTBFOzs7OztJQUNuRSx5REFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsTUFBTSxFQUFFLHdCQUF3QixDQUFDLFVBQVU7b0JBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNEJBQTRCLEVBQTVCLENBQTRCLENBQUMsRUFBQyxDQUFDO29CQUN6RixRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkFyQ0MsVUFBVTs7SUE4Q1osbUNBQUM7Q0FBQSxBQWZELENBT2tELElBQUksR0FRckQ7U0FSWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBwaXZvdGQzY29udGFpbmVyTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAncGl2b3RkM2NvbnRhaW5lcic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiY29uZmlndXJhdG9yXCI6IFwiRXh0LnBpdm90LnBsdWdpbi5Db25maWd1cmF0b3JcIixcbiAgICBcImRyYXdpbmdcIjogXCJFeHQuQ29tcG9uZW50XCIsXG4gICAgXCJtYXRyaXhcIjogXCJFeHQucGl2b3QubWF0cml4LkJhc2VcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnY29uZmlndXJhdG9yJyxcbiAgICAnZHJhd2luZycsXG4gICAgJ21hdHJpeCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Bpdm90ZDNjb250YWluZXInLCBcbiAgaW5wdXRzOiBwaXZvdGQzY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogcGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaXZvdGQzY29udGFpbmVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGl2b3RkM2NvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQocGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19