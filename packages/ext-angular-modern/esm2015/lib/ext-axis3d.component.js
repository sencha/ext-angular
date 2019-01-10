/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtYXhpczNkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLGNBQWM7O0FBQ1gsb0JBQUssR0FBVyxRQUFRLENBQUM7QUFDekIsK0JBQWdCLEdBQVE7SUFDcEMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixZQUFZLEVBQUUsUUFBUTtJQUN0QixRQUFRLEVBQUUsT0FBTztJQUNqQixPQUFPLEVBQUUseUJBQXlCO0lBQ2xDLE9BQU8sRUFBRSxLQUFLO0lBQ2QsZUFBZSxFQUFFLFFBQVE7SUFDekIsUUFBUSxFQUFFLE9BQU87SUFDakIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsSUFBSSxFQUFFLFFBQVE7SUFDZCxPQUFPLEVBQUUsUUFBUTtJQUNqQixRQUFRLEVBQUUscUNBQXFDO0lBQy9DLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFVBQVUsRUFBRSxtQ0FBbUM7SUFDL0MsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixRQUFRLEVBQUUsUUFBUTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLG1CQUFtQixFQUFFLFNBQVM7SUFDOUIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixVQUFVLEVBQUUsVUFBVTtJQUN0QixVQUFVLEVBQUUsUUFBUTtJQUNwQixXQUFXLEVBQUUsMkNBQTJDO0lBQ3hELE9BQU8sRUFBRSxRQUFRO0lBQ2pCLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFlBQVksRUFBRSxLQUFLO0lBQ25CLGNBQWMsRUFBRSxPQUFPO0lBQ3ZCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixhQUFhLEVBQUUsU0FBUztJQUN4QixRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBQ2MseUJBQVUsR0FBYTtJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFFBQVE7SUFDUixPQUFPO0lBQ1AsT0FBTztJQUNQLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsSUFBSTtJQUNKLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MscUJBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztJQUMxRCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztDQUM3QixDQUFDO0FBQ2MseUJBQVUsR0FBYTtJQUNyQyxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLE9BQU87Q0FDUixDQUFDOzs7SUE1RkEscUJBQXVDOztJQUN2QyxnQ0F3Q0E7O0lBQ0EsMEJBd0NBOztJQUNBLHNCQUlBOztJQUNBLDBCQUlBOztBQVNGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxJQUFJOzs7OztJQUMxQyxZQUFZLElBQWUsRUFBeUMsYUFBb0I7UUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsYUFBYSxDQUFDLENBQUE7UUFBN0Usa0JBQWEsR0FBYixhQUFhLENBQU87SUFBeUQsQ0FBQzs7Ozs7SUFFM0ksUUFBUSxLQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUEsQ0FBQSxDQUFDOzs7OztJQUU1QyxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOzs7WUFmSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxjQUFjLENBQUMsVUFBVTtnQkFDakMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxVQUFVO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLENBQUM7Z0JBQy9FLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7Ozs7WUF6R0MsVUFBVTtZQUdILElBQUksdUJBd0dtQixJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7SUFBN0IsMkNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBheGlzM2RNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdheGlzM2QnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFkanVzdEJ5TWFqb3JVbml0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiY2VudGVyXCI6IFwiQXJyYXlcIixcbiAgICBcImNoYXJ0XCI6IFwiRXh0LmNoYXJ0LkFic3RyYWN0Q2hhcnRcIixcbiAgICBcImRlcHRoXCI6IFwiYW55XCIsXG4gICAgXCJleHBhbmRSYW5nZUJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmaWVsZHNcIjogXCJBcnJheVwiLFxuICAgIFwiZmxvYXRpbmdcIjogXCJOdW1iZXIvT2JqZWN0XCIsXG4gICAgXCJncmlkXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGFiZWxcIjogXCJPYmplY3RcIixcbiAgICBcImxheW91dFwiOiBcIk9iamVjdC9FeHQuY2hhcnQuYXhpcy5sYXlvdXQuTGF5b3V0XCIsXG4gICAgXCJsZW5ndGhcIjogXCJOdW1iZXJcIixcbiAgICBcImxpbWl0c1wiOiBcIkFycmF5L09iamVjdFwiLFxuICAgIFwibGlua2VkVG9cIjogXCJFeHQuY2hhcnQuYXhpcy5BeGlzL1N0cmluZy9OdW1iZXJcIixcbiAgICBcIm1ham9yVGlja1N0ZXBzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcIm1heGltdW1cIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFpvb21cIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbmltdW1cIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbm9yVGlja1N0ZXBzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5ab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJuZWVkSGlnaFByZWNpc2lvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyYWRpdXNcIjogXCJOdW1iZXJcIixcbiAgICBcInJlY29uY2lsZVJhbmdlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwicm90YXRpb25cIjogXCJOdW1iZXJcIixcbiAgICBcInNlZ21lbnRlclwiOiBcIk9iamVjdC9FeHQuY2hhcnQuYXhpcy5zZWdtZW50ZXIuU2VnbWVudGVyXCIsXG4gICAgXCJzdHlsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidGl0bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0aXRsZU1hcmdpblwiOiBcIk51bWJlclwiLFxuICAgIFwidG90YWxBbmdsZVwiOiBcImFueVwiLFxuICAgIFwidmlzaWJsZVJhbmdlXCI6IFwiQXJyYXlcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWRqdXN0QnlNYWpvclVuaXQnLFxuICAgICdiYWNrZ3JvdW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnY2hhcnQnLFxuICAgICdkZXB0aCcsXG4gICAgJ2V4cGFuZFJhbmdlQnknLFxuICAgICdmaWVsZHMnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2dyaWQnLFxuICAgICdoaWRkZW4nLFxuICAgICdpZCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVuZ3RoJyxcbiAgICAnbGltaXRzJyxcbiAgICAnbGlua2VkVG8nLFxuICAgICdtYWpvclRpY2tTdGVwcycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21heGltdW0nLFxuICAgICdtYXhab29tJyxcbiAgICAnbWluaW11bScsXG4gICAgJ21pbm9yVGlja1N0ZXBzJyxcbiAgICAnbWluWm9vbScsXG4gICAgJ25lZWRIaWdoUHJlY2lzaW9uJyxcbiAgICAncG9zaXRpb24nLFxuICAgICdyYWRpdXMnLFxuICAgICdyZWNvbmNpbGVSYW5nZScsXG4gICAgJ3JlbmRlcmVyJyxcbiAgICAncm90YXRpb24nLFxuICAgICdzZWdtZW50ZXInLFxuICAgICdzdHlsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAndGl0bGVNYXJnaW4nLFxuICAgICd0b3RhbEFuZ2xlJyxcbiAgICAndmlzaWJsZVJhbmdlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHJhbmdlLG9sZFJhbmdlJ30sXG5cdFx0e25hbWU6J3Zpc2libGVyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyx2aXNpYmxlUmFuZ2UnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyYW5nZWNoYW5nZScsXG5cdFx0J3Zpc2libGVyYW5nZWNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F4aXMzZCcsIFxuICBpbnB1dHM6IGF4aXMzZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGF4aXMzZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRBeGlzM2RDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBeGlzM2RDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxheGlzM2RNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LGF4aXMzZE1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGF4aXMzZE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19