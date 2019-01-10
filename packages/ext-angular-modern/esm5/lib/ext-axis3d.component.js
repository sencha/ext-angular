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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtYXhpczNkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUE4RkEsQ0FBQztJQTdGZSxvQkFBSyxHQUFXLFFBQVEsQ0FBQztJQUN6QiwrQkFBZ0IsR0FBUTtRQUNwQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsT0FBTyxFQUFFLEtBQUs7UUFDZCxlQUFlLEVBQUUsUUFBUTtRQUN6QixRQUFRLEVBQUUsT0FBTztRQUNqQixVQUFVLEVBQUUsZUFBZTtRQUMzQixNQUFNLEVBQUUsUUFBUTtRQUNoQixRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxxQ0FBcUM7UUFDL0MsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxRQUFRO1FBQ25CLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixVQUFVLEVBQUUsUUFBUTtR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QWhCRCxDQU93QyxJQUFJLEdBUzNDO1NBVFksa0JBQWtCOzs7SUFDQSwyQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGF4aXMzZE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2F4aXMzZCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWRqdXN0QnlNYWpvclVuaXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJjZW50ZXJcIjogXCJBcnJheVwiLFxuICAgIFwiY2hhcnRcIjogXCJFeHQuY2hhcnQuQWJzdHJhY3RDaGFydFwiLFxuICAgIFwiZGVwdGhcIjogXCJhbnlcIixcbiAgICBcImV4cGFuZFJhbmdlQnlcIjogXCJOdW1iZXJcIixcbiAgICBcImZpZWxkc1wiOiBcIkFycmF5XCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIk51bWJlci9PYmplY3RcIixcbiAgICBcImdyaWRcIjogXCJPYmplY3RcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsYWJlbFwiOiBcIk9iamVjdFwiLFxuICAgIFwibGF5b3V0XCI6IFwiT2JqZWN0L0V4dC5jaGFydC5heGlzLmxheW91dC5MYXlvdXRcIixcbiAgICBcImxlbmd0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibGltaXRzXCI6IFwiQXJyYXkvT2JqZWN0XCIsXG4gICAgXCJsaW5rZWRUb1wiOiBcIkV4dC5jaGFydC5heGlzLkF4aXMvU3RyaW5nL051bWJlclwiLFxuICAgIFwibWFqb3JUaWNrU3RlcHNcIjogXCJOdW1iZXJcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4aW11bVwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4Wm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibWluaW11bVwiOiBcIk51bWJlclwiLFxuICAgIFwibWlub3JUaWNrU3RlcHNcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pblpvb21cIjogXCJOdW1iZXJcIixcbiAgICBcIm5lZWRIaWdoUHJlY2lzaW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJTdHJpbmdcIixcbiAgICBcInJhZGl1c1wiOiBcIk51bWJlclwiLFxuICAgIFwicmVjb25jaWxlUmFuZ2VcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJyb3RhdGlvblwiOiBcIk51bWJlclwiLFxuICAgIFwic2VnbWVudGVyXCI6IFwiT2JqZWN0L0V4dC5jaGFydC5heGlzLnNlZ21lbnRlci5TZWdtZW50ZXJcIixcbiAgICBcInN0eWxlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0aXRsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRpdGxlTWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b3RhbEFuZ2xlXCI6IFwiYW55XCIsXG4gICAgXCJ2aXNpYmxlUmFuZ2VcIjogXCJBcnJheVwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhZGp1c3RCeU1ham9yVW5pdCcsXG4gICAgJ2JhY2tncm91bmQnLFxuICAgICdjZW50ZXInLFxuICAgICdjaGFydCcsXG4gICAgJ2RlcHRoJyxcbiAgICAnZXhwYW5kUmFuZ2VCeScsXG4gICAgJ2ZpZWxkcycsXG4gICAgJ2Zsb2F0aW5nJyxcbiAgICAnZ3JpZCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lkJyxcbiAgICAnbGFiZWwnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZW5ndGgnLFxuICAgICdsaW1pdHMnLFxuICAgICdsaW5rZWRUbycsXG4gICAgJ21ham9yVGlja1N0ZXBzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4aW11bScsXG4gICAgJ21heFpvb20nLFxuICAgICdtaW5pbXVtJyxcbiAgICAnbWlub3JUaWNrU3RlcHMnLFxuICAgICdtaW5ab29tJyxcbiAgICAnbmVlZEhpZ2hQcmVjaXNpb24nLFxuICAgICdwb3NpdGlvbicsXG4gICAgJ3JhZGl1cycsXG4gICAgJ3JlY29uY2lsZVJhbmdlJyxcbiAgICAncmVuZGVyZXInLFxuICAgICdyb3RhdGlvbicsXG4gICAgJ3NlZ21lbnRlcicsXG4gICAgJ3N0eWxlJyxcbiAgICAndGl0bGUnLFxuICAgICd0aXRsZU1hcmdpbicsXG4gICAgJ3RvdGFsQW5nbGUnLFxuICAgICd2aXNpYmxlUmFuZ2UnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmFuZ2VjaGFuZ2UnLHBhcmFtZXRlcnM6J2F4aXMscmFuZ2Usb2xkUmFuZ2UnfSxcblx0XHR7bmFtZTondmlzaWJsZXJhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHZpc2libGVSYW5nZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JhbmdlY2hhbmdlJyxcblx0XHQndmlzaWJsZXJhbmdlY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXhpczNkJywgXG4gIGlucHV0czogYXhpczNkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogYXhpczNkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEF4aXMzZENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEF4aXMzZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGF4aXMzZE1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGhvc3RDb21wb25lbnQsYXhpczNkTWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoYXhpczNkTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=