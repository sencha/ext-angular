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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.baseOnInit(axis3dMetaData);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1heGlzM2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sY0FBYzs7QUFDWCxvQkFBSyxHQUFXLFFBQVEsQ0FBQztBQUN6QiwrQkFBZ0IsR0FBUTtJQUNwQyxtQkFBbUIsRUFBRSxTQUFTO0lBQzlCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLE9BQU8sRUFBRSx5QkFBeUI7SUFDbEMsT0FBTyxFQUFFLEtBQUs7SUFDZCxlQUFlLEVBQUUsUUFBUTtJQUN6QixRQUFRLEVBQUUsT0FBTztJQUNqQixVQUFVLEVBQUUsZUFBZTtJQUMzQixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsU0FBUztJQUNuQixJQUFJLEVBQUUsUUFBUTtJQUNkLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFFBQVEsRUFBRSxxQ0FBcUM7SUFDL0MsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLGNBQWM7SUFDeEIsVUFBVSxFQUFFLG1DQUFtQztJQUMvQyxnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixVQUFVLEVBQUUsUUFBUTtJQUNwQixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxTQUFTO0lBQzNCLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFdBQVcsRUFBRSwyQ0FBMkM7SUFDeEQsT0FBTyxFQUFFLFFBQVE7SUFDakIsT0FBTyxFQUFFLGVBQWU7SUFDeEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsWUFBWSxFQUFFLEtBQUs7SUFDbkIsY0FBYyxFQUFFLE9BQU87SUFDdkIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixrQkFBa0IsRUFBRSxRQUFRO0lBQzVCLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUM7QUFDYyx5QkFBVSxHQUFhO0lBQ25DLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osUUFBUTtJQUNSLE9BQU87SUFDUCxPQUFPO0lBQ1AsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixJQUFJO0lBQ0osT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLE9BQU87SUFDUCxPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MscUJBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztJQUMxRCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztDQUM3QixDQUFDO0FBQ2MseUJBQVUsR0FBYTtJQUNyQyxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLE9BQU87Q0FDUixDQUFDOzs7SUE3RkEscUJBQXVDOztJQUN2QyxnQ0F3Q0E7O0lBQ0EsMEJBeUNBOztJQUNBLHNCQUlBOztJQUNBLDBCQUlBOztBQVNGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxJQUFJOzs7OztJQUMxQyxZQUNFLElBQWUsRUFBeUMsYUFBb0I7UUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsY0FBYyxFQUFDLGFBQWEsQ0FBQyxDQUFBO1FBREEsa0JBQWEsR0FBYixhQUFhLENBQU87SUFFNUUsQ0FBQzs7OztJQUNJLFFBQVE7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxQixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixNQUFNLEVBQUUsY0FBYyxDQUFDLFVBQVU7Z0JBQ2pDLE9BQU8sRUFBRSxjQUFjLENBQUMsVUFBVTtnQkFDbEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBQyxDQUFDO2dCQUMvRSxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7O1lBMUdDLFVBQVU7WUFHSCxJQUFJLHVCQTBHUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7SUFBN0IsMkNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBheGlzM2RNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdheGlzM2QnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFkanVzdEJ5TWFqb3JVbml0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiY2VudGVyXCI6IFwiQXJyYXlcIixcbiAgICBcImNoYXJ0XCI6IFwiRXh0LmNoYXJ0LkFic3RyYWN0Q2hhcnRcIixcbiAgICBcImRlcHRoXCI6IFwiYW55XCIsXG4gICAgXCJleHBhbmRSYW5nZUJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmaWVsZHNcIjogXCJBcnJheVwiLFxuICAgIFwiZmxvYXRpbmdcIjogXCJOdW1iZXIvT2JqZWN0XCIsXG4gICAgXCJncmlkXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGFiZWxcIjogXCJPYmplY3RcIixcbiAgICBcImxheW91dFwiOiBcIk9iamVjdC9FeHQuY2hhcnQuYXhpcy5sYXlvdXQuTGF5b3V0XCIsXG4gICAgXCJsZW5ndGhcIjogXCJOdW1iZXJcIixcbiAgICBcImxpbWl0c1wiOiBcIkFycmF5L09iamVjdFwiLFxuICAgIFwibGlua2VkVG9cIjogXCJFeHQuY2hhcnQuYXhpcy5BeGlzL1N0cmluZy9OdW1iZXJcIixcbiAgICBcIm1ham9yVGlja1N0ZXBzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXJcIixcbiAgICBcIm1heGltdW1cIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFpvb21cIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbmltdW1cIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbm9yVGlja1N0ZXBzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5ab29tXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJuZWVkSGlnaFByZWNpc2lvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyYWRpdXNcIjogXCJOdW1iZXJcIixcbiAgICBcInJlY29uY2lsZVJhbmdlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwicm90YXRpb25cIjogXCJOdW1iZXJcIixcbiAgICBcInNlZ21lbnRlclwiOiBcIk9iamVjdC9FeHQuY2hhcnQuYXhpcy5zZWdtZW50ZXIuU2VnbWVudGVyXCIsXG4gICAgXCJzdHlsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidGl0bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0aXRsZU1hcmdpblwiOiBcIk51bWJlclwiLFxuICAgIFwidG90YWxBbmdsZVwiOiBcImFueVwiLFxuICAgIFwidmlzaWJsZVJhbmdlXCI6IFwiQXJyYXlcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWRqdXN0QnlNYWpvclVuaXQnLFxuICAgICdiYWNrZ3JvdW5kJyxcbiAgICAnY2VudGVyJyxcbiAgICAnY2hhcnQnLFxuICAgICdkZXB0aCcsXG4gICAgJ2V4cGFuZFJhbmdlQnknLFxuICAgICdmaWVsZHMnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2dyaWQnLFxuICAgICdoaWRkZW4nLFxuICAgICdpZCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVuZ3RoJyxcbiAgICAnbGltaXRzJyxcbiAgICAnbGlua2VkVG8nLFxuICAgICdtYWpvclRpY2tTdGVwcycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21heGltdW0nLFxuICAgICdtYXhab29tJyxcbiAgICAnbWluaW11bScsXG4gICAgJ21pbm9yVGlja1N0ZXBzJyxcbiAgICAnbWluWm9vbScsXG4gICAgJ25lZWRIaWdoUHJlY2lzaW9uJyxcbiAgICAncG9zaXRpb24nLFxuICAgICdyYWRpdXMnLFxuICAgICdyZWNvbmNpbGVSYW5nZScsXG4gICAgJ3JlbmRlcmVyJyxcbiAgICAncm90YXRpb24nLFxuICAgICdzZWdtZW50ZXInLFxuICAgICdzdHlsZScsXG4gICAgJ3RpdGxlJyxcbiAgICAndGl0bGVNYXJnaW4nLFxuICAgICd0b3RhbEFuZ2xlJyxcbiAgICAndmlzaWJsZVJhbmdlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmFuZ2VjaGFuZ2UnLHBhcmFtZXRlcnM6J2F4aXMscmFuZ2Usb2xkUmFuZ2UnfSxcblx0XHR7bmFtZTondmlzaWJsZXJhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHZpc2libGVSYW5nZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JhbmdlY2hhbmdlJyxcblx0XHQndmlzaWJsZXJhbmdlY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXhpczNkJywgXG4gIGlucHV0czogYXhpczNkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogYXhpczNkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEF4aXMzZENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEF4aXMzZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsYXhpczNkTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoYXhpczNkTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG59Il19