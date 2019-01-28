/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
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
        'align',
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
    function ExtAxis3dComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, axis3dMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    /**
     * @return {?}
     */
    ExtAxis3dComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.baseOnInit(axis3dMetaData);
    };
    /**
     * @return {?}
     */
    ExtAxis3dComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    ExtAxis3dComponent.decorators = [
        { type: Component, args: [{
                    selector: 'axis3d',
                    inputs: axis3dMetaData.PROPERTIES,
                    outputs: axis3dMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtAxis3dComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtAxis3dComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtAxis3dComponent;
}(base));
export { ExtAxis3dComponent };
if (false) {
    /** @type {?} */
    ExtAxis3dComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1heGlzM2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQStGQSxDQUFDO0lBOUZlLG9CQUFLLEdBQVcsUUFBUSxDQUFDO0lBQ3pCLCtCQUFnQixHQUFRO1FBQ3BDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsWUFBWSxFQUFFLFFBQVE7UUFDdEIsUUFBUSxFQUFFLE9BQU87UUFDakIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFVBQVUsRUFBRSxlQUFlO1FBQzNCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLHFDQUFxQztRQUMvQyxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsY0FBYztRQUN4QixVQUFVLEVBQUUsbUNBQW1DO1FBQy9DLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixTQUFTLEVBQUUsUUFBUTtRQUNuQixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsVUFBVSxFQUFFLFVBQVU7UUFDdEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxPQUFPLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUUsZUFBZTtRQUN4QixhQUFhLEVBQUUsUUFBUTtRQUN2QixZQUFZLEVBQUUsS0FBSztRQUNuQixjQUFjLEVBQUUsT0FBTztRQUN2QixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUNjLHlCQUFVLEdBQWE7UUFDbkMsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixRQUFRO1FBQ1IsT0FBTztRQUNQLE9BQU87UUFDUCxlQUFlO1FBQ2YsUUFBUTtRQUNSLFVBQVU7UUFDVixNQUFNO1FBQ04sUUFBUTtRQUNSLElBQUk7UUFDSixPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixRQUFRO1FBQ1IsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsT0FBTztRQUNQLE9BQU87UUFDUCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyxxQkFBTSxHQUFVO1FBQzlCLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDYyx5QkFBVSxHQUFhO1FBQ3JDLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsT0FBTztLQUNSLENBQUM7SUFDRixxQkFBQztDQUFBLEFBL0ZELElBK0ZDO1NBL0ZZLGNBQWM7OztJQUN6QixxQkFBdUM7O0lBQ3ZDLGdDQXdDQTs7SUFDQSwwQkF5Q0E7O0lBQ0Esc0JBSUE7O0lBQ0EsMEJBSUE7O0FBRUY7SUFPd0MsOENBQUk7SUFDMUMsNEJBQ0UsSUFBZSxFQUF5QyxhQUFvQjtRQUQ5RSxZQUVJLGtCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLGFBQWEsQ0FBQyxTQUN2RDtRQUZ1RCxtQkFBYSxHQUFiLGFBQWEsQ0FBTzs7SUFFNUUsQ0FBQzs7OztJQUNJLHFDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDakMsQ0FBQzs7OztJQUNNLCtDQUFrQjs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsMEJBQTBCO0lBQzVCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLE1BQU0sRUFBRSxjQUFjLENBQUMsVUFBVTtvQkFDakMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxVQUFVO29CQUNsQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUMsRUFBQyxDQUFDO29CQUMvRSxRQUFRLEVBQUUsNkJBQTZCO2lCQUN4Qzs7OztnQkExR0MsVUFBVTtnQkFHSCxJQUFJLHVCQTBHUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBWWxELHlCQUFDO0NBQUEsQUFyQkQsQ0FPd0MsSUFBSSxHQWMzQztTQWRZLGtCQUFrQjs7O0lBRVYsMkNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBheGlzM2RNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdheGlzM2QnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFkanVzdEJ5TWFqb3JVbml0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiY2VudGVyXCI6IFwiQXJyYXlcIixcbiAgICBcImNoYXJ0XCI6IFwiRXh0LmNoYXJ0LkFic3RyYWN0Q2hhcnRcIixcbiAgICBcImRlcHRoXCI6IFwiYW55XCIsXG4gICAgXCJleHBhbmRSYW5nZUJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmaWVsZHNcIjogXCJBcnJheVwiLFxuICAgIFwiZmxvYXRpbmdcIjogXCJOdW1iZXIvT2JqZWN0XCIsXG4gICAgXCJncmlkXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGFiZWxcIjogXCJPYmplY3RcIixcbiAgICBcImxheW91dFwiOiBcIk9iamVjdC9FeHQuY2hhcnQuYXhpcy5sYXlvdXQuTGF5b3V0XCIsXG4gICAgXCJsZW5ndGhcIjogXCJOdW1iZXJcIixcbiAgICBcImxpbWl0c1wiOiBcIkFycmF5L09iamVjdFwiLFxuICAgIFwibGlua2VkVG9cIjogXCJFeHQuY2hhcnQuYXhpcy5BeGlzL1N0cmluZy9OdW1iZXJcIixcbiAgICBcIm1ham9yVGlja1N0ZXBzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcIm1heGltdW1cIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFpvb21cIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbmltdW1cIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbm9yVGlja1N0ZXBzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5ab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJuZWVkSGlnaFByZWNpc2lvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyYWRpdXNcIjogXCJOdW1iZXJcIixcbiAgICBcInJlY29uY2lsZVJhbmdlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwicm90YXRpb25cIjogXCJOdW1iZXJcIixcbiAgICBcInNlZ21lbnRlclwiOiBcIk9iamVjdC9FeHQuY2hhcnQuYXhpcy5zZWdtZW50ZXIuU2VnbWVudGVyXCIsXG4gICAgXCJzdHlsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidGl0bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0aXRsZU1hcmdpblwiOiBcIk51bWJlclwiLFxuICAgIFwidG90YWxBbmdsZVwiOiBcImFueVwiLFxuICAgIFwidmlzaWJsZVJhbmdlXCI6IFwiQXJyYXlcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWRqdXN0QnlNYWpvclVuaXQnLFxuICAgICdiYWNrZ3JvdW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnY2hhcnQnLFxuICAgICdkZXB0aCcsXG4gICAgJ2V4cGFuZFJhbmdlQnknLFxuICAgICdmaWVsZHMnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2dyaWQnLFxuICAgICdoaWRkZW4nLFxuICAgICdpZCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVuZ3RoJyxcbiAgICAnbGltaXRzJyxcbiAgICAnbGlua2VkVG8nLFxuICAgICdtYWpvclRpY2tTdGVwcycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21heGltdW0nLFxuICAgICdtYXhab29tJyxcbiAgICAnbWluaW11bScsXG4gICAgJ21pbm9yVGlja1N0ZXBzJyxcbiAgICAnbWluWm9vbScsXG4gICAgJ25lZWRIaWdoUHJlY2lzaW9uJyxcbiAgICAncG9zaXRpb24nLFxuICAgICdyYWRpdXMnLFxuICAgICdyZWNvbmNpbGVSYW5nZScsXG4gICAgJ3JlbmRlcmVyJyxcbiAgICAncm90YXRpb24nLFxuICAgICdzZWdtZW50ZXInLFxuICAgICdzdHlsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAndGl0bGVNYXJnaW4nLFxuICAgICd0b3RhbEFuZ2xlJyxcbiAgICAndmlzaWJsZVJhbmdlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmFuZ2VjaGFuZ2UnLHBhcmFtZXRlcnM6J2F4aXMscmFuZ2Usb2xkUmFuZ2UnfSxcblx0XHR7bmFtZTondmlzaWJsZXJhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHZpc2libGVSYW5nZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JhbmdlY2hhbmdlJyxcblx0XHQndmlzaWJsZXJhbmdlY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXhpczNkJywgXG4gIGlucHV0czogYXhpczNkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogYXhpczNkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEF4aXMzZENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEF4aXMzZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsYXhpczNkTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoYXhpczNkTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=