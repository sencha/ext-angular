/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
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
    "floating": "Number|Object",
    "grid": "Object",
    "hidden": "Boolean",
    "id": "String",
    "label": "Object",
    "layout": "Object|Ext.chart.axis.layout.Layout",
    "length": "Number",
    "limits": "Array|Object",
    "linkedTo": "Ext.chart.axis.Axis|String|Number",
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
    "segmenter": "Object|Ext.chart.axis.segmenter.Segmenter",
    "style": "Object",
    "title": "String|Object",
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
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, axis3dMetaData); }
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
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtAxis3dComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJsaWIvZXh0LWF4aXMzZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxjQUFjOztBQUNYLG9CQUFLLEdBQVcsUUFBUSxDQUFDO0FBQ3pCLCtCQUFnQixHQUFRO0lBQ3BDLG1CQUFtQixFQUFFLFNBQVM7SUFDOUIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsUUFBUSxFQUFFLE9BQU87SUFDakIsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQyxPQUFPLEVBQUUsS0FBSztJQUNkLGVBQWUsRUFBRSxRQUFRO0lBQ3pCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxRQUFRO0lBQ2QsT0FBTyxFQUFFLFFBQVE7SUFDakIsUUFBUSxFQUFFLHFDQUFxQztJQUMvQyxRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsY0FBYztJQUN4QixVQUFVLEVBQUUsbUNBQW1DO0lBQy9DLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixTQUFTLEVBQUUsUUFBUTtJQUNuQixtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsVUFBVSxFQUFFLFVBQVU7SUFDdEIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsV0FBVyxFQUFFLDJDQUEyQztJQUN4RCxPQUFPLEVBQUUsUUFBUTtJQUNqQixPQUFPLEVBQUUsZUFBZTtJQUN4QixhQUFhLEVBQUUsUUFBUTtJQUN2QixZQUFZLEVBQUUsS0FBSztJQUNuQixjQUFjLEVBQUUsT0FBTztJQUN2QixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGtCQUFrQixFQUFFLFFBQVE7SUFDNUIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUNjLHlCQUFVLEdBQWE7SUFDbkMsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixRQUFRO0lBQ1IsT0FBTztJQUNQLE9BQU87SUFDUCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLElBQUk7SUFDSixPQUFPO0lBQ1AsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsT0FBTztJQUNQLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0NBQ1gsQ0FBQztBQUNjLHFCQUFNLEdBQVU7SUFDOUIsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQztJQUNyRCxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7SUFDMUQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7Q0FDN0IsQ0FBQztBQUNjLHlCQUFVLEdBQWE7SUFDckMsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixPQUFPO0NBQ1IsQ0FBQzs7O0lBNUZBLHFCQUF1Qzs7SUFDdkMsZ0NBd0NBOztJQUNBLDBCQXdDQTs7SUFDQSxzQkFJQTs7SUFDQSwwQkFJQTs7QUFTRixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsSUFBSTs7OztJQUMxQyxZQUFZLElBQWUsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7OztJQUNsRCxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBRTVDLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7OztZQWRKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxVQUFVO2dCQUNqQyxPQUFPLEVBQUUsY0FBYyxDQUFDLFVBQVU7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUMsQ0FBQztnQkFDL0UsUUFBUSxFQUFFLHNDQUFzQzthQUNqRDs7OztZQXpHQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYXhpczNkTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnYXhpczNkJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGp1c3RCeU1ham9yVW5pdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhY2tncm91bmRcIjogXCJPYmplY3RcIixcbiAgICBcImNlbnRlclwiOiBcIkFycmF5XCIsXG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJkZXB0aFwiOiBcImFueVwiLFxuICAgIFwiZXhwYW5kUmFuZ2VCeVwiOiBcIk51bWJlclwiLFxuICAgIFwiZmllbGRzXCI6IFwiQXJyYXlcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiTnVtYmVyfE9iamVjdFwiLFxuICAgIFwiZ3JpZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcImxhYmVsXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsYXlvdXRcIjogXCJPYmplY3R8RXh0LmNoYXJ0LmF4aXMubGF5b3V0LkxheW91dFwiLFxuICAgIFwibGVuZ3RoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJsaW1pdHNcIjogXCJBcnJheXxPYmplY3RcIixcbiAgICBcImxpbmtlZFRvXCI6IFwiRXh0LmNoYXJ0LmF4aXMuQXhpc3xTdHJpbmd8TnVtYmVyXCIsXG4gICAgXCJtYWpvclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhpbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5pbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5vclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWluWm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibmVlZEhpZ2hQcmVjaXNpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmFkaXVzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJyZWNvbmNpbGVSYW5nZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlcmVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInJvdGF0aW9uXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzZWdtZW50ZXJcIjogXCJPYmplY3R8RXh0LmNoYXJ0LmF4aXMuc2VnbWVudGVyLlNlZ21lbnRlclwiLFxuICAgIFwic3R5bGVcIjogXCJPYmplY3RcIixcbiAgICBcInRpdGxlXCI6IFwiU3RyaW5nfE9iamVjdFwiLFxuICAgIFwidGl0bGVNYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcInRvdGFsQW5nbGVcIjogXCJhbnlcIixcbiAgICBcInZpc2libGVSYW5nZVwiOiBcIkFycmF5XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkanVzdEJ5TWFqb3JVbml0JyxcbiAgICAnYmFja2dyb3VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2NoYXJ0JyxcbiAgICAnZGVwdGgnLFxuICAgICdleHBhbmRSYW5nZUJ5JyxcbiAgICAnZmllbGRzJyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdncmlkJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaWQnLFxuICAgICdsYWJlbCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xlbmd0aCcsXG4gICAgJ2xpbWl0cycsXG4gICAgJ2xpbmtlZFRvJyxcbiAgICAnbWFqb3JUaWNrU3RlcHMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhpbXVtJyxcbiAgICAnbWF4Wm9vbScsXG4gICAgJ21pbmltdW0nLFxuICAgICdtaW5vclRpY2tTdGVwcycsXG4gICAgJ21pblpvb20nLFxuICAgICduZWVkSGlnaFByZWNpc2lvbicsXG4gICAgJ3Bvc2l0aW9uJyxcbiAgICAncmFkaXVzJyxcbiAgICAncmVjb25jaWxlUmFuZ2UnLFxuICAgICdyZW5kZXJlcicsXG4gICAgJ3JvdGF0aW9uJyxcbiAgICAnc2VnbWVudGVyJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aXRsZScsXG4gICAgJ3RpdGxlTWFyZ2luJyxcbiAgICAndG90YWxBbmdsZScsXG4gICAgJ3Zpc2libGVSYW5nZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyxyYW5nZSxvbGRSYW5nZSd9LFxuXHRcdHtuYW1lOid2aXNpYmxlcmFuZ2VjaGFuZ2UnLHBhcmFtZXRlcnM6J2F4aXMsdmlzaWJsZVJhbmdlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQncmFuZ2VjaGFuZ2UnLFxuXHRcdCd2aXNpYmxlcmFuZ2VjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdheGlzM2QnLCBcbiAgaW5wdXRzOiBheGlzM2RNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBheGlzM2RNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QXhpczNkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QXhpczNkQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsYXhpczNkTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGF4aXMzZE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19