/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var axis3dMetaData = /** @class */ (function () {
    function axis3dMetaData() {
    }
    axis3dMetaData.XTYPE = 'axis3d';
    axis3dMetaData.PROPERTIESOBJECT = {
        "adjustByMajorUnit": "Boolean",
        "background": "Object",
        "center": "Array",
        "chart": "Ext.chart.AbstractChart",
        "depth": "any",
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
        "fitToParent": "Boolean",
        "config": "Object",
    };
    axis3dMetaData.PROPERTIES = [
        'adjustByMajorUnit',
        'background',
        'center',
        'chart',
        'depth',
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
        'fitToParent',
        'config'
    ];
    axis3dMetaData.EVENTS = [
        { name: 'rangechange', parameters: 'axis,range,oldRange' },
        { name: 'visiblerangechange', parameters: 'axis,visibleRange' },
        { name: 'ready', parameters: '' }
    ];
    axis3dMetaData.EVENTNAMES = [
        'rangechange',
        'visiblerangechange',
        'ready'
    ];
    return axis3dMetaData;
}());
export { axis3dMetaData };
if (false) {
    /** @type {?} */
    axis3dMetaData.XTYPE;
    /** @type {?} */
    axis3dMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    axis3dMetaData.PROPERTIES;
    /** @type {?} */
    axis3dMetaData.EVENTS;
    /** @type {?} */
    axis3dMetaData.EVENTNAMES;
}
var ExtAxis3dComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtAxis3dComponent, _super);
    function ExtAxis3dComponent(eRef) {
        return _super.call(this, eRef, axis3dMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtAxis3dComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(axis3dMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtAxis3dComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtAxis3dComponent.decorators = [
        { type: Component, args: [{
                    selector: 'axis3d',
                    inputs: axis3dMetaData.PROPERTIES,
                    outputs: axis3dMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtAxis3dComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtAxis3dComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtAxis3dComponent;
}(base));
export { ExtAxis3dComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtYXhpczNkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUE0RkEsQ0FBQztJQTNGZSxvQkFBSyxHQUFXLFFBQVEsQ0FBQztJQUN6QiwrQkFBZ0IsR0FBUTtRQUNwQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsUUFBUTtRQUN6QixRQUFRLEVBQUUsT0FBTztRQUNqQixVQUFVLEVBQUUsZUFBZTtRQUMzQixNQUFNLEVBQUUsUUFBUTtRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxxQ0FBcUM7UUFDL0MsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixVQUFVLEVBQUUsUUFBUTtRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFdBQVcsRUFBRSwyQ0FBMkM7UUFDeEQsT0FBTyxFQUFFLFFBQVE7UUFDakIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsY0FBYyxFQUFFLE9BQU87UUFDdkIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBQ2MseUJBQVUsR0FBYTtRQUNuQyxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFFBQVE7UUFDUixPQUFPO1FBQ1AsT0FBTztRQUNQLGVBQWU7UUFDZixRQUFRO1FBQ1IsVUFBVTtRQUNWLE1BQU07UUFDTixRQUFRO1FBQ1IsSUFBSTtRQUNKLE9BQU87UUFDUCxRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxPQUFPO1FBQ1AsT0FBTztRQUNQLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyxxQkFBTSxHQUFVO1FBQzlCLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDYyx5QkFBVSxHQUFhO1FBQ3JDLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsT0FBTztLQUNSLENBQUM7SUFDRixxQkFBQztDQUFBLEFBNUZELElBNEZDO1NBNUZZLGNBQWM7OztJQUN6QixxQkFBdUM7O0lBQ3ZDLGdDQXVDQTs7SUFDQSwwQkF1Q0E7O0lBQ0Esc0JBSUE7O0lBQ0EsMEJBSUE7O0FBRUY7SUFPd0MsOENBQUk7SUFDMUMsNEJBQVksSUFBZTtlQUFHLGtCQUFNLElBQUksRUFBQyxjQUFjLENBQUM7SUFBQSxDQUFDOzs7O0lBQ2xELHFDQUFROzs7SUFBZixjQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQztJQUNuRCwwRUFBMEU7Ozs7O0lBQ25FLCtDQUFrQjs7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7O2dCQWRKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxVQUFVO29CQUNqQyxPQUFPLEVBQUUsY0FBYyxDQUFDLFVBQVU7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFDLENBQUM7b0JBQy9FLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQXZHQyxVQUFVOztJQWdIWix5QkFBQztDQUFBLEFBZkQsQ0FPd0MsSUFBSSxHQVEzQztTQVJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGF4aXMzZE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2F4aXMzZCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWRqdXN0QnlNYWpvclVuaXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJjZW50ZXJcIjogXCJBcnJheVwiLFxuICAgIFwiY2hhcnRcIjogXCJFeHQuY2hhcnQuQWJzdHJhY3RDaGFydFwiLFxuICAgIFwiZGVwdGhcIjogXCJhbnlcIixcbiAgICBcImV4cGFuZFJhbmdlQnlcIjogXCJOdW1iZXJcIixcbiAgICBcImZpZWxkc1wiOiBcIkFycmF5XCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIk51bWJlci9PYmplY3RcIixcbiAgICBcImdyaWRcIjogXCJPYmplY3RcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsYWJlbFwiOiBcIk9iamVjdFwiLFxuICAgIFwibGF5b3V0XCI6IFwiT2JqZWN0L0V4dC5jaGFydC5heGlzLmxheW91dC5MYXlvdXRcIixcbiAgICBcImxlbmd0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibGltaXRzXCI6IFwiQXJyYXkvT2JqZWN0XCIsXG4gICAgXCJsaW5rZWRUb1wiOiBcIkV4dC5jaGFydC5heGlzLkF4aXMvU3RyaW5nL051bWJlclwiLFxuICAgIFwibWFqb3JUaWNrU3RlcHNcIjogXCJOdW1iZXJcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4aW11bVwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4Wm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibWluaW11bVwiOiBcIk51bWJlclwiLFxuICAgIFwibWlub3JUaWNrU3RlcHNcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pblpvb21cIjogXCJOdW1iZXJcIixcbiAgICBcIm5lZWRIaWdoUHJlY2lzaW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJTdHJpbmdcIixcbiAgICBcInJhZGl1c1wiOiBcIk51bWJlclwiLFxuICAgIFwicmVjb25jaWxlUmFuZ2VcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJyb3RhdGlvblwiOiBcIk51bWJlclwiLFxuICAgIFwic2VnbWVudGVyXCI6IFwiT2JqZWN0L0V4dC5jaGFydC5heGlzLnNlZ21lbnRlci5TZWdtZW50ZXJcIixcbiAgICBcInN0eWxlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0aXRsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRpdGxlTWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b3RhbEFuZ2xlXCI6IFwiYW55XCIsXG4gICAgXCJ2aXNpYmxlUmFuZ2VcIjogXCJBcnJheVwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhZGp1c3RCeU1ham9yVW5pdCcsXG4gICAgJ2JhY2tncm91bmQnLFxuICAgICdjZW50ZXInLFxuICAgICdjaGFydCcsXG4gICAgJ2RlcHRoJyxcbiAgICAnZXhwYW5kUmFuZ2VCeScsXG4gICAgJ2ZpZWxkcycsXG4gICAgJ2Zsb2F0aW5nJyxcbiAgICAnZ3JpZCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lkJyxcbiAgICAnbGFiZWwnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZW5ndGgnLFxuICAgICdsaW1pdHMnLFxuICAgICdsaW5rZWRUbycsXG4gICAgJ21ham9yVGlja1N0ZXBzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4aW11bScsXG4gICAgJ21heFpvb20nLFxuICAgICdtaW5pbXVtJyxcbiAgICAnbWlub3JUaWNrU3RlcHMnLFxuICAgICdtaW5ab29tJyxcbiAgICAnbmVlZEhpZ2hQcmVjaXNpb24nLFxuICAgICdwb3NpdGlvbicsXG4gICAgJ3JhZGl1cycsXG4gICAgJ3JlY29uY2lsZVJhbmdlJyxcbiAgICAncmVuZGVyZXInLFxuICAgICdyb3RhdGlvbicsXG4gICAgJ3NlZ21lbnRlcicsXG4gICAgJ3N0eWxlJyxcbiAgICAndGl0bGUnLFxuICAgICd0aXRsZU1hcmdpbicsXG4gICAgJ3RvdGFsQW5nbGUnLFxuICAgICd2aXNpYmxlUmFuZ2UnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyxyYW5nZSxvbGRSYW5nZSd9LFxuXHRcdHtuYW1lOid2aXNpYmxlcmFuZ2VjaGFuZ2UnLHBhcmFtZXRlcnM6J2F4aXMsdmlzaWJsZVJhbmdlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQncmFuZ2VjaGFuZ2UnLFxuXHRcdCd2aXNpYmxlcmFuZ2VjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdheGlzM2QnLCBcbiAgaW5wdXRzOiBheGlzM2RNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBheGlzM2RNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QXhpczNkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QXhpczNkQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsYXhpczNkTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGF4aXMzZE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19