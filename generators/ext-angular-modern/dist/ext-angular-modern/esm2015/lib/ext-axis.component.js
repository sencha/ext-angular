/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class axisMetaData {
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
export class ExtAxisComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, axisMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(axisMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() { this.baseAfterContentInit(); }
}
ExtAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'axis',
                inputs: axisMetaData.PROPERTIES,
                outputs: axisMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtAxisComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtAxisComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LWF4aXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBSUwsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sWUFBWTs7QUFDVCxrQkFBSyxHQUFXLE1BQU0sQ0FBQztBQUN2Qiw2QkFBZ0IsR0FBUTtJQUNwQyxtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLE9BQU8sRUFBRSx5QkFBeUI7SUFDbEMsZUFBZSxFQUFFLFFBQVE7SUFDekIsUUFBUSxFQUFFLE9BQU87SUFDakIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLFFBQVE7SUFDZCxPQUFPLEVBQUUsUUFBUTtJQUNqQixRQUFRLEVBQUUscUNBQXFDO0lBQy9DLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFVBQVUsRUFBRSxtQ0FBbUM7SUFDL0MsV0FBVyxFQUFFLFFBQVE7SUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixRQUFRLEVBQUUsUUFBUTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLG1CQUFtQixFQUFFLFNBQVM7SUFDOUIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixVQUFVLEVBQUUsVUFBVTtJQUN0QixVQUFVLEVBQUUsUUFBUTtJQUNwQixXQUFXLEVBQUUsMkNBQTJDO0lBQ3hELE9BQU8sRUFBRSxRQUFRO0lBQ2pCLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFlBQVksRUFBRSxLQUFLO0lBQ25CLGNBQWMsRUFBRSxPQUFPO0lBQ3ZCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixhQUFhLEVBQUUsU0FBUztJQUN4QixRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBQ2MsdUJBQVUsR0FBYTtJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFFBQVE7SUFDUixPQUFPO0lBQ1AsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixJQUFJO0lBQ0osT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MsbUJBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztJQUMxRCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztDQUM3QixDQUFDO0FBQ2MsdUJBQVUsR0FBYTtJQUNyQyxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLE9BQU87Q0FDUixDQUFDOzs7SUE1RkEsbUJBQXFDOztJQUNyQyw4QkF3Q0E7O0lBQ0Esd0JBd0NBOztJQUNBLG9CQUlBOztJQUNBLHdCQUlBOztBQVNGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxJQUFJOzs7O0lBQ3hDLFlBQVksSUFBZSxJQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQSxDQUFDOzs7O0lBQ2hELFFBQVEsS0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUEsQ0FBQzs7Ozs7SUFFMUMsa0JBQWtCLEtBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUEsQ0FBQSxDQUFDOzs7WUFYMUQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNO2dCQUNoQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQy9CLE9BQU8sRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDaEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxDQUFDO2dCQUM3RSxRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBekdDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYXhpc01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2F4aXMnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFkanVzdEJ5TWFqb3JVbml0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiY2VudGVyXCI6IFwiQXJyYXlcIixcbiAgICBcImNoYXJ0XCI6IFwiRXh0LmNoYXJ0LkFic3RyYWN0Q2hhcnRcIixcbiAgICBcImV4cGFuZFJhbmdlQnlcIjogXCJOdW1iZXJcIixcbiAgICBcImZpZWxkc1wiOiBcIkFycmF5XCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIk51bWJlci9PYmplY3RcIixcbiAgICBcImdyaWRcIjogXCJPYmplY3RcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsYWJlbFwiOiBcIk9iamVjdFwiLFxuICAgIFwibGF5b3V0XCI6IFwiT2JqZWN0L0V4dC5jaGFydC5heGlzLmxheW91dC5MYXlvdXRcIixcbiAgICBcImxlbmd0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibGltaXRzXCI6IFwiQXJyYXkvT2JqZWN0XCIsXG4gICAgXCJsaW5rZWRUb1wiOiBcIkV4dC5jaGFydC5heGlzLkF4aXMvU3RyaW5nL051bWJlclwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYWpvclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhpbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5pbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5vclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWluWm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibmVlZEhpZ2hQcmVjaXNpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmFkaXVzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJyZWNvbmNpbGVSYW5nZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlcmVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInJvdGF0aW9uXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzZWdtZW50ZXJcIjogXCJPYmplY3QvRXh0LmNoYXJ0LmF4aXMuc2VnbWVudGVyLlNlZ21lbnRlclwiLFxuICAgIFwic3R5bGVcIjogXCJPYmplY3RcIixcbiAgICBcInRpdGxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGl0bGVNYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcInRvdGFsQW5nbGVcIjogXCJhbnlcIixcbiAgICBcInZpc2libGVSYW5nZVwiOiBcIkFycmF5XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkanVzdEJ5TWFqb3JVbml0JyxcbiAgICAnYmFja2dyb3VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2NoYXJ0JyxcbiAgICAnZXhwYW5kUmFuZ2VCeScsXG4gICAgJ2ZpZWxkcycsXG4gICAgJ2Zsb2F0aW5nJyxcbiAgICAnZ3JpZCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lkJyxcbiAgICAnbGFiZWwnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZW5ndGgnLFxuICAgICdsaW1pdHMnLFxuICAgICdsaW5rZWRUbycsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ21ham9yVGlja1N0ZXBzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4aW11bScsXG4gICAgJ21heFpvb20nLFxuICAgICdtaW5pbXVtJyxcbiAgICAnbWlub3JUaWNrU3RlcHMnLFxuICAgICdtaW5ab29tJyxcbiAgICAnbmVlZEhpZ2hQcmVjaXNpb24nLFxuICAgICdwb3NpdGlvbicsXG4gICAgJ3JhZGl1cycsXG4gICAgJ3JlY29uY2lsZVJhbmdlJyxcbiAgICAncmVuZGVyZXInLFxuICAgICdyb3RhdGlvbicsXG4gICAgJ3NlZ21lbnRlcicsXG4gICAgJ3N0eWxlJyxcbiAgICAndGl0bGUnLFxuICAgICd0aXRsZU1hcmdpbicsXG4gICAgJ3RvdGFsQW5nbGUnLFxuICAgICd2aXNpYmxlUmFuZ2UnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmFuZ2VjaGFuZ2UnLHBhcmFtZXRlcnM6J2F4aXMscmFuZ2Usb2xkUmFuZ2UnfSxcblx0XHR7bmFtZTondmlzaWJsZXJhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHZpc2libGVSYW5nZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JhbmdlY2hhbmdlJyxcblx0XHQndmlzaWJsZXJhbmdlY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXhpcycsIFxuICBpbnB1dHM6IGF4aXNNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBheGlzTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEF4aXNDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBeGlzQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsYXhpc01ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChheGlzTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge3RoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKX1cbn0iXX0=