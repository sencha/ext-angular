/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
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
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,axis3dMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,axis3dMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtAxis3dComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,axis3dMetaData,hostComponent)}
    /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1heGlzM2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDOztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUErRkEsQ0FBQztJQTlGZSxvQkFBSyxHQUFXLFFBQVEsQ0FBQztJQUN6QiwrQkFBZ0IsR0FBUTtRQUNwQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsUUFBUTtRQUN6QixRQUFRLEVBQUUsT0FBTztRQUNqQixVQUFVLEVBQUUsZUFBZTtRQUMzQixNQUFNLEVBQUUsUUFBUTtRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxxQ0FBcUM7UUFDL0MsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixVQUFVLEVBQUUsUUFBUTtRQUNwQixR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QSxBQW5CRCxDQU93QyxJQUFJLEdBWTNDO1NBWlksa0JBQWtCOzs7SUFFViwyQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYXhpczNkTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnYXhpczNkJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGp1c3RCeU1ham9yVW5pdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhY2tncm91bmRcIjogXCJPYmplY3RcIixcbiAgICBcImNlbnRlclwiOiBcIkFycmF5XCIsXG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJkZXB0aFwiOiBcImFueVwiLFxuICAgIFwiZXhwYW5kUmFuZ2VCeVwiOiBcIk51bWJlclwiLFxuICAgIFwiZmllbGRzXCI6IFwiQXJyYXlcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiTnVtYmVyL09iamVjdFwiLFxuICAgIFwiZ3JpZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcImxhYmVsXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsYXlvdXRcIjogXCJPYmplY3QvRXh0LmNoYXJ0LmF4aXMubGF5b3V0LkxheW91dFwiLFxuICAgIFwibGVuZ3RoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJsaW1pdHNcIjogXCJBcnJheS9PYmplY3RcIixcbiAgICBcImxpbmtlZFRvXCI6IFwiRXh0LmNoYXJ0LmF4aXMuQXhpcy9TdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJtYWpvclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhpbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5pbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5vclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWluWm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibmVlZEhpZ2hQcmVjaXNpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmFkaXVzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJyZWNvbmNpbGVSYW5nZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlcmVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInJvdGF0aW9uXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzZWdtZW50ZXJcIjogXCJPYmplY3QvRXh0LmNoYXJ0LmF4aXMuc2VnbWVudGVyLlNlZ21lbnRlclwiLFxuICAgIFwic3R5bGVcIjogXCJPYmplY3RcIixcbiAgICBcInRpdGxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGl0bGVNYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcInRvdGFsQW5nbGVcIjogXCJhbnlcIixcbiAgICBcInZpc2libGVSYW5nZVwiOiBcIkFycmF5XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkanVzdEJ5TWFqb3JVbml0JyxcbiAgICAnYmFja2dyb3VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2NoYXJ0JyxcbiAgICAnZGVwdGgnLFxuICAgICdleHBhbmRSYW5nZUJ5JyxcbiAgICAnZmllbGRzJyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdncmlkJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaWQnLFxuICAgICdsYWJlbCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xlbmd0aCcsXG4gICAgJ2xpbWl0cycsXG4gICAgJ2xpbmtlZFRvJyxcbiAgICAnbWFqb3JUaWNrU3RlcHMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhpbXVtJyxcbiAgICAnbWF4Wm9vbScsXG4gICAgJ21pbmltdW0nLFxuICAgICdtaW5vclRpY2tTdGVwcycsXG4gICAgJ21pblpvb20nLFxuICAgICduZWVkSGlnaFByZWNpc2lvbicsXG4gICAgJ3Bvc2l0aW9uJyxcbiAgICAncmFkaXVzJyxcbiAgICAncmVjb25jaWxlUmFuZ2UnLFxuICAgICdyZW5kZXJlcicsXG4gICAgJ3JvdGF0aW9uJyxcbiAgICAnc2VnbWVudGVyJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aXRsZScsXG4gICAgJ3RpdGxlTWFyZ2luJyxcbiAgICAndG90YWxBbmdsZScsXG4gICAgJ3Zpc2libGVSYW5nZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHJhbmdlLG9sZFJhbmdlJ30sXG5cdFx0e25hbWU6J3Zpc2libGVyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyx2aXNpYmxlUmFuZ2UnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyYW5nZWNoYW5nZScsXG5cdFx0J3Zpc2libGVyYW5nZWNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F4aXMzZCcsIFxuICBpbnB1dHM6IGF4aXMzZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGF4aXMzZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRBeGlzM2RDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBeGlzM2RDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGF4aXMzZE1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGhvc3RDb21wb25lbnQsYXhpczNkTWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoYXhpczNkTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=