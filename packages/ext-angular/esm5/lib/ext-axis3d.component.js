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
        this['ready'].emit(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1heGlzM2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQStGQSxDQUFDO0lBOUZlLG9CQUFLLEdBQVcsUUFBUSxDQUFDO0lBQ3pCLCtCQUFnQixHQUFRO1FBQ3BDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsWUFBWSxFQUFFLFFBQVE7UUFDdEIsUUFBUSxFQUFFLE9BQU87UUFDakIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFVBQVUsRUFBRSxlQUFlO1FBQzNCLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLHFDQUFxQztRQUMvQyxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsY0FBYztRQUN4QixVQUFVLEVBQUUsbUNBQW1DO1FBQy9DLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixTQUFTLEVBQUUsUUFBUTtRQUNuQixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFB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a0I7OztJQUVWLDJDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYXhpczNkTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnYXhpczNkJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGp1c3RCeU1ham9yVW5pdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhY2tncm91bmRcIjogXCJPYmplY3RcIixcbiAgICBcImNlbnRlclwiOiBcIkFycmF5XCIsXG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJkZXB0aFwiOiBcImFueVwiLFxuICAgIFwiZXhwYW5kUmFuZ2VCeVwiOiBcIk51bWJlclwiLFxuICAgIFwiZmllbGRzXCI6IFwiQXJyYXlcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiTnVtYmVyL09iamVjdFwiLFxuICAgIFwiZ3JpZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcImxhYmVsXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsYXlvdXRcIjogXCJPYmplY3QvRXh0LmNoYXJ0LmF4aXMubGF5b3V0LkxheW91dFwiLFxuICAgIFwibGVuZ3RoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJsaW1pdHNcIjogXCJBcnJheS9PYmplY3RcIixcbiAgICBcImxpbmtlZFRvXCI6IFwiRXh0LmNoYXJ0LmF4aXMuQXhpcy9TdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJtYWpvclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhpbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5pbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5vclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWluWm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibmVlZEhpZ2hQcmVjaXNpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmFkaXVzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJyZWNvbmNpbGVSYW5nZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlcmVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInJvdGF0aW9uXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzZWdtZW50ZXJcIjogXCJPYmplY3QvRXh0LmNoYXJ0LmF4aXMuc2VnbWVudGVyLlNlZ21lbnRlclwiLFxuICAgIFwic3R5bGVcIjogXCJPYmplY3RcIixcbiAgICBcInRpdGxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGl0bGVNYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcInRvdGFsQW5nbGVcIjogXCJhbnlcIixcbiAgICBcInZpc2libGVSYW5nZVwiOiBcIkFycmF5XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkanVzdEJ5TWFqb3JVbml0JyxcbiAgICAnYmFja2dyb3VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2NoYXJ0JyxcbiAgICAnZGVwdGgnLFxuICAgICdleHBhbmRSYW5nZUJ5JyxcbiAgICAnZmllbGRzJyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdncmlkJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaWQnLFxuICAgICdsYWJlbCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xlbmd0aCcsXG4gICAgJ2xpbWl0cycsXG4gICAgJ2xpbmtlZFRvJyxcbiAgICAnbWFqb3JUaWNrU3RlcHMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhpbXVtJyxcbiAgICAnbWF4Wm9vbScsXG4gICAgJ21pbmltdW0nLFxuICAgICdtaW5vclRpY2tTdGVwcycsXG4gICAgJ21pblpvb20nLFxuICAgICduZWVkSGlnaFByZWNpc2lvbicsXG4gICAgJ3Bvc2l0aW9uJyxcbiAgICAncmFkaXVzJyxcbiAgICAncmVjb25jaWxlUmFuZ2UnLFxuICAgICdyZW5kZXJlcicsXG4gICAgJ3JvdGF0aW9uJyxcbiAgICAnc2VnbWVudGVyJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aXRsZScsXG4gICAgJ3RpdGxlTWFyZ2luJyxcbiAgICAndG90YWxBbmdsZScsXG4gICAgJ3Zpc2libGVSYW5nZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHJhbmdlLG9sZFJhbmdlJ30sXG5cdFx0e25hbWU6J3Zpc2libGVyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyx2aXNpYmxlUmFuZ2UnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyYW5nZWNoYW5nZScsXG5cdFx0J3Zpc2libGVyYW5nZWNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F4aXMzZCcsIFxuICBpbnB1dHM6IGF4aXMzZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGF4aXMzZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRBeGlzM2RDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBeGlzM2RDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGF4aXMzZE1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iYXNlT25Jbml0KGF4aXMzZE1ldGFEYXRhKVxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxufSJdfQ==