/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
import { base } from './base';
export class axis3dMetaData {
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
export class ExtAxis3dComponent extends base {
    /**
     * @param {?} location
     * @param {?} resolver
     * @param {?} changeDetector
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(location, resolver, changeDetector, eRef, hostComponent) {
        super(eRef, eRef.nativeElement, axis3dMetaData, hostComponent);
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.hostComponent = hostComponent;
        console.log(location);
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,axis3dMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(axis3dMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtAxis3dComponent.decorators = [
    { type: Component, args: [{
                selector: 'axis3d',
                inputs: axis3dMetaData.PROPERTIES,
                outputs: axis3dMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtAxis3dComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtAxis3dComponent.ctorParameters = () => [
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
    ExtAxis3dComponent.prototype.location;
    /**
     * @type {?}
     * @private
     */
    ExtAxis3dComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ExtAxis3dComponent.prototype.changeDetector;
    /** @type {?} */
    ExtAxis3dComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1heGlzM2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFFakIsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLGNBQWM7O0FBQ1gsb0JBQUssR0FBVyxRQUFRLENBQUM7QUFDekIsK0JBQWdCLEdBQVE7SUFDcEMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixZQUFZLEVBQUUsUUFBUTtJQUN0QixRQUFRLEVBQUUsT0FBTztJQUNqQixPQUFPLEVBQUUseUJBQXlCO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsZUFBZSxFQUFFLFFBQVE7SUFDekIsUUFBUSxFQUFFLE9BQU87SUFDakIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLFFBQVE7SUFDZCxPQUFPLEVBQUUsUUFBUTtJQUNqQixRQUFRLEVBQUUscUNBQXFDO0lBQy9DLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFVBQVUsRUFBRSxtQ0FBbUM7SUFDL0MsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixRQUFRLEVBQUUsUUFBUTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLG1CQUFtQixF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LENBQUMsRUFBQyxDQUFDO2dCQUMvRSxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7O1lBckhDLGdCQUFnQjtZQURoQix3QkFBd0I7WUFFeEIsaUJBQWlCO1lBVWpCLFVBQVU7WUFJSCxJQUFJLHVCQTZHUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7Ozs7SUFIMUMsc0NBQWtDOzs7OztJQUNsQyxzQ0FBMEM7Ozs7O0lBQzFDLDRDQUF5Qzs7SUFDNUIsMkNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGF4aXMzZE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2F4aXMzZCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWRqdXN0QnlNYWpvclVuaXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJjZW50ZXJcIjogXCJBcnJheVwiLFxuICAgIFwiY2hhcnRcIjogXCJFeHQuY2hhcnQuQWJzdHJhY3RDaGFydFwiLFxuICAgIFwiZGVwdGhcIjogXCJhbnlcIixcbiAgICBcImV4cGFuZFJhbmdlQnlcIjogXCJOdW1iZXJcIixcbiAgICBcImZpZWxkc1wiOiBcIkFycmF5XCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIk51bWJlci9PYmplY3RcIixcbiAgICBcImdyaWRcIjogXCJPYmplY3RcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsYWJlbFwiOiBcIk9iamVjdFwiLFxuICAgIFwibGF5b3V0XCI6IFwiT2JqZWN0L0V4dC5jaGFydC5heGlzLmxheW91dC5MYXlvdXRcIixcbiAgICBcImxlbmd0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibGltaXRzXCI6IFwiQXJyYXkvT2JqZWN0XCIsXG4gICAgXCJsaW5rZWRUb1wiOiBcIkV4dC5jaGFydC5heGlzLkF4aXMvU3RyaW5nL051bWJlclwiLFxuICAgIFwibWFqb3JUaWNrU3RlcHNcIjogXCJOdW1iZXJcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4aW11bVwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4Wm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibWluaW11bVwiOiBcIk51bWJlclwiLFxuICAgIFwibWlub3JUaWNrU3RlcHNcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pblpvb21cIjogXCJOdW1iZXJcIixcbiAgICBcIm5lZWRIaWdoUHJlY2lzaW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJTdHJpbmdcIixcbiAgICBcInJhZGl1c1wiOiBcIk51bWJlclwiLFxuICAgIFwicmVjb25jaWxlUmFuZ2VcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJyb3RhdGlvblwiOiBcIk51bWJlclwiLFxuICAgIFwic2VnbWVudGVyXCI6IFwiT2JqZWN0L0V4dC5jaGFydC5heGlzLnNlZ21lbnRlci5TZWdtZW50ZXJcIixcbiAgICBcInN0eWxlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0aXRsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRpdGxlTWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b3RhbEFuZ2xlXCI6IFwiYW55XCIsXG4gICAgXCJ2aXNpYmxlUmFuZ2VcIjogXCJBcnJheVwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhZGp1c3RCeU1ham9yVW5pdCcsXG4gICAgJ2JhY2tncm91bmQnLFxuICAgICdjZW50ZXInLFxuICAgICdjaGFydCcsXG4gICAgJ2RlcHRoJyxcbiAgICAnZXhwYW5kUmFuZ2VCeScsXG4gICAgJ2ZpZWxkcycsXG4gICAgJ2Zsb2F0aW5nJyxcbiAgICAnZ3JpZCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lkJyxcbiAgICAnbGFiZWwnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZW5ndGgnLFxuICAgICdsaW1pdHMnLFxuICAgICdsaW5rZWRUbycsXG4gICAgJ21ham9yVGlja1N0ZXBzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4aW11bScsXG4gICAgJ21heFpvb20nLFxuICAgICdtaW5pbXVtJyxcbiAgICAnbWlub3JUaWNrU3RlcHMnLFxuICAgICdtaW5ab29tJyxcbiAgICAnbmVlZEhpZ2hQcmVjaXNpb24nLFxuICAgICdwb3NpdGlvbicsXG4gICAgJ3JhZGl1cycsXG4gICAgJ3JlY29uY2lsZVJhbmdlJyxcbiAgICAncmVuZGVyZXInLFxuICAgICdyb3RhdGlvbicsXG4gICAgJ3NlZ21lbnRlcicsXG4gICAgJ3N0eWxlJyxcbiAgICAndGl0bGUnLFxuICAgICd0aXRsZU1hcmdpbicsXG4gICAgJ3RvdGFsQW5nbGUnLFxuICAgICd2aXNpYmxlUmFuZ2UnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmFuZ2VjaGFuZ2UnLHBhcmFtZXRlcnM6J2F4aXMscmFuZ2Usb2xkUmFuZ2UnfSxcblx0XHR7bmFtZTondmlzaWJsZXJhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHZpc2libGVSYW5nZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JhbmdlY2hhbmdlJyxcblx0XHQndmlzaWJsZXJhbmdlY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXhpczNkJywgXG4gIGlucHV0czogYXhpczNkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogYXhpczNkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEF4aXMzZENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEF4aXMzZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgLy8gICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLGVSZWYubmF0aXZlRWxlbWVudCxheGlzM2RNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG4gICAgfVxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGhvc3RDb21wb25lbnQsYXhpczNkTWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoYXhpczNkTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=