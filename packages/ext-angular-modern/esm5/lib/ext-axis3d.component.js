/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /**
     * @return {?}
     */
    ExtAxis3dComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { this.baseAfterContentInit(); };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LWF4aXMzZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBSUwsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7OzsyQkFFRSxRQUFRO3NDQUNBO1FBQ3BDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsWUFBWSxFQUFFLFFBQVE7UUFDdEIsUUFBUSxFQUFFLE9BQU87UUFDakIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFVBQVUsRUFBRSxlQUFlO1FBQzNCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLHFDQUFxQztRQUMvQyxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsY0FBYztRQUN4QixVQUFVLEVBQUUsbUNBQW1DO1FBQy9DLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixTQUFTLEVBQUUsUUFBUTtRQUNuQixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsVUFBVSxFQUFFLFVBQVU7UUFDdEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxPQUFPLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUUsZUFBZTtRQUN4QixhQUFhLEVBQUUsUUFBUTtRQUN2QixZQUFZLEVBQUUsS0FBSztRQUNuQixjQUFjLEVBQUUsT0FBTztRQUN2QixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDckI7Z0NBQ3NDO1FBQ25DLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osUUFBUTtRQUNSLE9BQU87UUFDUCxPQUFPO1FBQ1AsZUFBZTtRQUNmLFFBQVE7UUFDUixVQUFVO1FBQ1YsTUFBTTtRQUNOLFFBQVE7UUFDUixJQUFJO1FBQ0osT0FBTztRQUNQLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFVBQVU7UUFDVixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsU0FBUztRQUNULG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsVUFBVTtRQUNWLFdBQVc7UUFDWCxPQUFPO1FBQ1AsT0FBTztRQUNQLGFBQWE7UUFDYixZQUFZO1FBQ1osY0FBYztRQUNkLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDWDs0QkFDK0I7UUFDOUIsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQztRQUNyRCxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7UUFDMUQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDN0I7Z0NBQ3NDO1FBQ3JDLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsT0FBTztLQUNSO3lCQXhHRDs7U0FTYSxjQUFjOzs7Ozs7Ozs7Ozs7OztJQXdHYSw4Q0FBSTtJQUMxQyw0QkFBWSxJQUFlO2VBQUcsa0JBQU0sSUFBSSxFQUFDLGNBQWMsQ0FBQztLQUFDOzs7O0lBQ2xELHFDQUFROzs7a0JBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTs7OztJQUUzQywrQ0FBa0I7OztrQkFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTs7Z0JBWHpELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxVQUFVO29CQUNqQyxPQUFPLEVBQUUsY0FBYyxDQUFDLFVBQVU7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFDLENBQUM7b0JBQy9FLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQTNHQyxVQUFVOzs2QkFMWjtFQWlId0MsSUFBSTtTQUEvQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYXhpczNkTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnYXhpczNkJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGp1c3RCeU1ham9yVW5pdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhY2tncm91bmRcIjogXCJPYmplY3RcIixcbiAgICBcImNlbnRlclwiOiBcIkFycmF5XCIsXG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJkZXB0aFwiOiBcImFueVwiLFxuICAgIFwiZXhwYW5kUmFuZ2VCeVwiOiBcIk51bWJlclwiLFxuICAgIFwiZmllbGRzXCI6IFwiQXJyYXlcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiTnVtYmVyL09iamVjdFwiLFxuICAgIFwiZ3JpZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcImxhYmVsXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsYXlvdXRcIjogXCJPYmplY3QvRXh0LmNoYXJ0LmF4aXMubGF5b3V0LkxheW91dFwiLFxuICAgIFwibGVuZ3RoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJsaW1pdHNcIjogXCJBcnJheS9PYmplY3RcIixcbiAgICBcImxpbmtlZFRvXCI6IFwiRXh0LmNoYXJ0LmF4aXMuQXhpcy9TdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm1ham9yVGlja1N0ZXBzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcIm1heGltdW1cIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFpvb21cIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbmltdW1cIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbm9yVGlja1N0ZXBzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5ab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJuZWVkSGlnaFByZWNpc2lvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyYWRpdXNcIjogXCJOdW1iZXJcIixcbiAgICBcInJlY29uY2lsZVJhbmdlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwicm90YXRpb25cIjogXCJOdW1iZXJcIixcbiAgICBcInNlZ21lbnRlclwiOiBcIk9iamVjdC9FeHQuY2hhcnQuYXhpcy5zZWdtZW50ZXIuU2VnbWVudGVyXCIsXG4gICAgXCJzdHlsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidGl0bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0aXRsZU1hcmdpblwiOiBcIk51bWJlclwiLFxuICAgIFwidG90YWxBbmdsZVwiOiBcImFueVwiLFxuICAgIFwidmlzaWJsZVJhbmdlXCI6IFwiQXJyYXlcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWRqdXN0QnlNYWpvclVuaXQnLFxuICAgICdiYWNrZ3JvdW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnY2hhcnQnLFxuICAgICdkZXB0aCcsXG4gICAgJ2V4cGFuZFJhbmdlQnknLFxuICAgICdmaWVsZHMnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2dyaWQnLFxuICAgICdoaWRkZW4nLFxuICAgICdpZCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVuZ3RoJyxcbiAgICAnbGltaXRzJyxcbiAgICAnbGlua2VkVG8nLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYWpvclRpY2tTdGVwcycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21heGltdW0nLFxuICAgICdtYXhab29tJyxcbiAgICAnbWluaW11bScsXG4gICAgJ21pbm9yVGlja1N0ZXBzJyxcbiAgICAnbWluWm9vbScsXG4gICAgJ25lZWRIaWdoUHJlY2lzaW9uJyxcbiAgICAncG9zaXRpb24nLFxuICAgICdyYWRpdXMnLFxuICAgICdyZWNvbmNpbGVSYW5nZScsXG4gICAgJ3JlbmRlcmVyJyxcbiAgICAncm90YXRpb24nLFxuICAgICdzZWdtZW50ZXInLFxuICAgICdzdHlsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAndGl0bGVNYXJnaW4nLFxuICAgICd0b3RhbEFuZ2xlJyxcbiAgICAndmlzaWJsZVJhbmdlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHJhbmdlLG9sZFJhbmdlJ30sXG5cdFx0e25hbWU6J3Zpc2libGVyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyx2aXNpYmxlUmFuZ2UnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyYW5nZWNoYW5nZScsXG5cdFx0J3Zpc2libGVyYW5nZWNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F4aXMzZCcsIFxuICBpbnB1dHM6IGF4aXMzZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGF4aXMzZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRBeGlzM2RDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBeGlzM2RDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixheGlzM2RNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoYXhpczNkTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge3RoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKX1cbn0iXX0=