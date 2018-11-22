/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var axisMetaData = /** @class */ (function () {
    function axisMetaData() {
    }
    axisMetaData.XTYPE = 'axis';
    axisMetaData.PROPERTIESOBJECT = {
        "adjustByMajorUnit": "Boolean",
        "background": "Object",
        "center": "Array",
        "chart": "Ext.chart.AbstractChart",
        "expandRangeBy": "Number",
        "fields": "Array",
        "floating": "Number/Object",
        "grid": "Object",
        "hidden": "Boolean",
        "id": "String",
        "label": "Object",
        "layout": "Object/Ext.chart.axis.layout.Layout",
        "length": "Number",
        "limits": "Array/Object",
        "linkedTo": "Ext.chart.axis.Axis/String/Number",
        "listeners": "Object",
        "majorTickSteps": "Number",
        "margin": "Number",
        "maximum": "Number",
        "maxZoom": "Number",
        "minimum": "Number",
        "minorTickSteps": "Number",
        "minZoom": "Number",
        "needHighPrecision": "Boolean",
        "position": "String",
        "radius": "Number",
        "reconcileRange": "Boolean",
        "renderer": "Function",
        "rotation": "Number",
        "segmenter": "Object/Ext.chart.axis.segmenter.Segmenter",
        "style": "Object",
        "title": "String/Object",
        "titleMargin": "Number",
        "totalAngle": "any",
        "visibleRange": "Array",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    axisMetaData.PROPERTIES = [
        'adjustByMajorUnit',
        'background',
        'center',
        'chart',
        'expandRangeBy',
        'fields',
        'floating',
        'grid',
        'hidden',
        'id',
        'label',
        'layout',
        'length',
        'limits',
        'linkedTo',
        'listeners',
        'majorTickSteps',
        'margin',
        'maximum',
        'maxZoom',
        'minimum',
        'minorTickSteps',
        'minZoom',
        'needHighPrecision',
        'position',
        'radius',
        'reconcileRange',
        'renderer',
        'rotation',
        'segmenter',
        'style',
        'title',
        'titleMargin',
        'totalAngle',
        'visibleRange',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    axisMetaData.EVENTS = [
        { name: 'rangechange', parameters: 'axis,range,oldRange' },
        { name: 'visiblerangechange', parameters: 'axis,visibleRange' },
        { name: 'ready', parameters: '' }
    ];
    axisMetaData.EVENTNAMES = [
        'rangechange',
        'visiblerangechange',
        'ready'
    ];
    return axisMetaData;
}());
export { axisMetaData };
if (false) {
    /** @type {?} */
    axisMetaData.XTYPE;
    /** @type {?} */
    axisMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    axisMetaData.PROPERTIES;
    /** @type {?} */
    axisMetaData.EVENTS;
    /** @type {?} */
    axisMetaData.EVENTNAMES;
}
var ExtAxisComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtAxisComponent, _super);
    function ExtAxisComponent(eRef) {
        return _super.call(this, eRef, axisMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtAxisComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(axisMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtAxisComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtAxisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'axis',
                    inputs: axisMetaData.PROPERTIES,
                    outputs: axisMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtAxisComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtAxisComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtAxisComponent;
}(base));
export { ExtAxisComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LWF4aXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQThGQSxDQUFDO0lBN0ZlLGtCQUFLLEdBQVcsTUFBTSxDQUFDO0lBQ3ZCLDZCQUFnQixHQUFRO1FBQ3BDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsWUFBWSxFQUFFLFFBQVE7UUFDdEIsUUFBUSxFQUFFLE9BQU87UUFDakIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxlQUFlLEVBQUUsUUFBUTtRQUN6QixRQUFRLEVBQUUsT0FBTztRQUNqQixVQUFVLEVBQUUsZUFBZTtRQUMzQixNQUFNLEVBQUUsUUFBUTtRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxxQ0FBcUM7UUFDL0MsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixVQUFVLEVBQUUsUUFBUTtRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFdBQVcsRUFBRSwyQ0FBMkM7UUFDeEQsT0FBTyxFQUFFLFFBQVE7UUFDakIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsY0FBYyxFQUFFLE9BQU87UUFDdkIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUM7SUFDYyx1QkFBVSxHQUFhO1FBQ25DLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osUUFBUTtRQUNSLE9BQU87UUFDUCxlQUFlO1FBQ2YsUUFBUTtRQUNSLFVBQVU7UUFDVixNQUFNO1FBQ04sUUFBUTtRQUNSLElBQUk7UUFDSixPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixVQUFVO1FBQ1YsV0FBVztRQUNYLE9BQU87UUFDUCxPQUFPO1FBQ1AsYUFBYTtRQUNiLFlBQVk7UUFDWixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyxtQkFBTSxHQUFVO1FBQzlCLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDYyx1QkFBVSxHQUFhO1FBQ3JDLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsT0FBTztLQUNSLENBQUM7SUFDRixtQkFBQztDQUFBLEFBOUZELElBOEZDO1NBOUZZLFlBQVk7OztJQUN2QixtQkFBcUM7O0lBQ3JDLDhCQXdDQTs7SUFDQSx3QkF3Q0E7O0lBQ0Esb0JBSUE7O0lBQ0Esd0JBSUE7O0FBRUY7SUFPc0MsNENBQUk7SUFDeEMsMEJBQVksSUFBZTtlQUFHLGtCQUFNLElBQUksRUFBQyxZQUFZLENBQUM7SUFBQSxDQUFDOzs7O0lBQ2hELG1DQUFROzs7SUFBZixjQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUEsQ0FBQztJQUNqRCwwRUFBMEU7Ozs7O0lBQ25FLDZDQUFrQjs7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7O2dCQWRKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO29CQUMvQixPQUFPLEVBQUUsWUFBWSxDQUFDLFVBQVU7b0JBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUFDLENBQUM7b0JBQzdFLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQXpHQyxVQUFVOztJQWtIWix1QkFBQztDQUFBLEFBZkQsQ0FPc0MsSUFBSSxHQVF6QztTQVJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGF4aXNNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdheGlzJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGp1c3RCeU1ham9yVW5pdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhY2tncm91bmRcIjogXCJPYmplY3RcIixcbiAgICBcImNlbnRlclwiOiBcIkFycmF5XCIsXG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJleHBhbmRSYW5nZUJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmaWVsZHNcIjogXCJBcnJheVwiLFxuICAgIFwiZmxvYXRpbmdcIjogXCJOdW1iZXIvT2JqZWN0XCIsXG4gICAgXCJncmlkXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGFiZWxcIjogXCJPYmplY3RcIixcbiAgICBcImxheW91dFwiOiBcIk9iamVjdC9FeHQuY2hhcnQuYXhpcy5sYXlvdXQuTGF5b3V0XCIsXG4gICAgXCJsZW5ndGhcIjogXCJOdW1iZXJcIixcbiAgICBcImxpbWl0c1wiOiBcIkFycmF5L09iamVjdFwiLFxuICAgIFwibGlua2VkVG9cIjogXCJFeHQuY2hhcnQuYXhpcy5BeGlzL1N0cmluZy9OdW1iZXJcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibWFqb3JUaWNrU3RlcHNcIjogXCJOdW1iZXJcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4aW11bVwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4Wm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibWluaW11bVwiOiBcIk51bWJlclwiLFxuICAgIFwibWlub3JUaWNrU3RlcHNcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pblpvb21cIjogXCJOdW1iZXJcIixcbiAgICBcIm5lZWRIaWdoUHJlY2lzaW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJTdHJpbmdcIixcbiAgICBcInJhZGl1c1wiOiBcIk51bWJlclwiLFxuICAgIFwicmVjb25jaWxlUmFuZ2VcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJyb3RhdGlvblwiOiBcIk51bWJlclwiLFxuICAgIFwic2VnbWVudGVyXCI6IFwiT2JqZWN0L0V4dC5jaGFydC5heGlzLnNlZ21lbnRlci5TZWdtZW50ZXJcIixcbiAgICBcInN0eWxlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0aXRsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRpdGxlTWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b3RhbEFuZ2xlXCI6IFwiYW55XCIsXG4gICAgXCJ2aXNpYmxlUmFuZ2VcIjogXCJBcnJheVwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhZGp1c3RCeU1ham9yVW5pdCcsXG4gICAgJ2JhY2tncm91bmQnLFxuICAgICdjZW50ZXInLFxuICAgICdjaGFydCcsXG4gICAgJ2V4cGFuZFJhbmdlQnknLFxuICAgICdmaWVsZHMnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2dyaWQnLFxuICAgICdoaWRkZW4nLFxuICAgICdpZCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVuZ3RoJyxcbiAgICAnbGltaXRzJyxcbiAgICAnbGlua2VkVG8nLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYWpvclRpY2tTdGVwcycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21heGltdW0nLFxuICAgICdtYXhab29tJyxcbiAgICAnbWluaW11bScsXG4gICAgJ21pbm9yVGlja1N0ZXBzJyxcbiAgICAnbWluWm9vbScsXG4gICAgJ25lZWRIaWdoUHJlY2lzaW9uJyxcbiAgICAncG9zaXRpb24nLFxuICAgICdyYWRpdXMnLFxuICAgICdyZWNvbmNpbGVSYW5nZScsXG4gICAgJ3JlbmRlcmVyJyxcbiAgICAncm90YXRpb24nLFxuICAgICdzZWdtZW50ZXInLFxuICAgICdzdHlsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAndGl0bGVNYXJnaW4nLFxuICAgICd0b3RhbEFuZ2xlJyxcbiAgICAndmlzaWJsZVJhbmdlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHJhbmdlLG9sZFJhbmdlJ30sXG5cdFx0e25hbWU6J3Zpc2libGVyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyx2aXNpYmxlUmFuZ2UnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyYW5nZWNoYW5nZScsXG5cdFx0J3Zpc2libGVyYW5nZWNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F4aXMnLCBcbiAgaW5wdXRzOiBheGlzTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogYXhpc01ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRBeGlzQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QXhpc0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGF4aXNNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoYXhpc01ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19