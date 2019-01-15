/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
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
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, axis3dMetaData, hostComponent);
        this.hostComponent = hostComponent;
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
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtAxis3dComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1heGlzM2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLGNBQWM7O0FBQ1gsb0JBQUssR0FBVyxRQUFRLENBQUM7QUFDekIsK0JBQWdCLEdBQVE7SUFDcEMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixZQUFZLEVBQUUsUUFBUTtJQUN0QixRQUFRLEVBQUUsT0FBTztJQUNqQixPQUFPLEVBQUUseUJBQXlCO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsZUFBZSxFQUFFLFFBQVE7SUFDekIsUUFBUSxFQUFFLE9BQU87SUFDakIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLFFBQVE7SUFDZCxPQUFPLEVBQUUsUUFBUTtJQUNqQixRQUFRLEVBQUUscUNBQXFDO0lBQy9DLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFVBQVUsRUFBRSxtQ0FBbUM7SUFDL0MsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixRQUFRLEVBQUUsUUFBUTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLG1CQUFtQixFQUFFLFNBQVM7SUFDOUIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixVQUFVLEVBQUUsVUFBVTtJQUN0QixVQUFVLEVBQUUsUUFBUTtJQUNwQixXQUFXLEVBQUUsMkNBQTJDO0lBQ3hELE9BQU8sRUFBRSxRQUFRO0lBQ2pCLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFlBQVksRUFBRSxLQUFLO0lBQ25CLGNBQWMsRUFBRSxPQUFPO0lBQ3ZCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixhQUFhLEVBQUUsU0FBUztJQUN4QixRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBQ2MseUJBQVUsR0FBYTtJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFFBQVE7SUFDUixPQUFPO0lBQ1AsT0FBTztJQUNQLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsSUFBSTtJQUNKLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MscUJBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztJQUMxRCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztDQUM3QixDQUFDO0FBQ2MseUJBQVUsR0FBYTtJQUNyQyxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLE9BQU87Q0FDUixDQUFDOzs7SUE1RkEscUJBQXVDOztJQUN2QyxnQ0F3Q0E7O0lBQ0EsMEJBd0NBOztJQUNBLHNCQUlBOztJQUNBLDBCQUlBOztBQVNGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxJQUFJOzs7OztJQUMxQyxZQUNFLElBQWUsRUFBeUMsYUFBb0I7UUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLGFBQWEsQ0FBQyxDQUFBO1FBREEsa0JBQWEsR0FBYixhQUFhLENBQU87SUFFNUUsQ0FBQzs7Ozs7SUFFSSxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBRTVDLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7OztZQWxCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxjQUFjLENBQUMsVUFBVTtnQkFDakMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxVQUFVO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLENBQUM7Z0JBQy9FLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7Ozs7WUExR0MsVUFBVTtZQUlILElBQUksdUJBeUdTLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7OztJQUE3QiwyQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYXhpczNkTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnYXhpczNkJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGp1c3RCeU1ham9yVW5pdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhY2tncm91bmRcIjogXCJPYmplY3RcIixcbiAgICBcImNlbnRlclwiOiBcIkFycmF5XCIsXG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJkZXB0aFwiOiBcImFueVwiLFxuICAgIFwiZXhwYW5kUmFuZ2VCeVwiOiBcIk51bWJlclwiLFxuICAgIFwiZmllbGRzXCI6IFwiQXJyYXlcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiTnVtYmVyL09iamVjdFwiLFxuICAgIFwiZ3JpZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcImxhYmVsXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsYXlvdXRcIjogXCJPYmplY3QvRXh0LmNoYXJ0LmF4aXMubGF5b3V0LkxheW91dFwiLFxuICAgIFwibGVuZ3RoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJsaW1pdHNcIjogXCJBcnJheS9PYmplY3RcIixcbiAgICBcImxpbmtlZFRvXCI6IFwiRXh0LmNoYXJ0LmF4aXMuQXhpcy9TdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJtYWpvclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhpbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5pbXVtXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5vclRpY2tTdGVwc1wiOiBcIk51bWJlclwiLFxuICAgIFwibWluWm9vbVwiOiBcIk51bWJlclwiLFxuICAgIFwibmVlZEhpZ2hQcmVjaXNpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmFkaXVzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJyZWNvbmNpbGVSYW5nZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlcmVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInJvdGF0aW9uXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzZWdtZW50ZXJcIjogXCJPYmplY3QvRXh0LmNoYXJ0LmF4aXMuc2VnbWVudGVyLlNlZ21lbnRlclwiLFxuICAgIFwic3R5bGVcIjogXCJPYmplY3RcIixcbiAgICBcInRpdGxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGl0bGVNYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcInRvdGFsQW5nbGVcIjogXCJhbnlcIixcbiAgICBcInZpc2libGVSYW5nZVwiOiBcIkFycmF5XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkanVzdEJ5TWFqb3JVbml0JyxcbiAgICAnYmFja2dyb3VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2NoYXJ0JyxcbiAgICAnZGVwdGgnLFxuICAgICdleHBhbmRSYW5nZUJ5JyxcbiAgICAnZmllbGRzJyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdncmlkJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaWQnLFxuICAgICdsYWJlbCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xlbmd0aCcsXG4gICAgJ2xpbWl0cycsXG4gICAgJ2xpbmtlZFRvJyxcbiAgICAnbWFqb3JUaWNrU3RlcHMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhpbXVtJyxcbiAgICAnbWF4Wm9vbScsXG4gICAgJ21pbmltdW0nLFxuICAgICdtaW5vclRpY2tTdGVwcycsXG4gICAgJ21pblpvb20nLFxuICAgICduZWVkSGlnaFByZWNpc2lvbicsXG4gICAgJ3Bvc2l0aW9uJyxcbiAgICAncmFkaXVzJyxcbiAgICAncmVjb25jaWxlUmFuZ2UnLFxuICAgICdyZW5kZXJlcicsXG4gICAgJ3JvdGF0aW9uJyxcbiAgICAnc2VnbWVudGVyJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aXRsZScsXG4gICAgJ3RpdGxlTWFyZ2luJyxcbiAgICAndG90YWxBbmdsZScsXG4gICAgJ3Zpc2libGVSYW5nZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyxyYW5nZSxvbGRSYW5nZSd9LFxuXHRcdHtuYW1lOid2aXNpYmxlcmFuZ2VjaGFuZ2UnLHBhcmFtZXRlcnM6J2F4aXMsdmlzaWJsZVJhbmdlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQncmFuZ2VjaGFuZ2UnLFxuXHRcdCd2aXNpYmxlcmFuZ2VjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdheGlzM2QnLCBcbiAgaW5wdXRzOiBheGlzM2RNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBheGlzM2RNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QXhpczNkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QXhpczNkQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxheGlzM2RNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LGF4aXMzZE1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGF4aXMzZE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19