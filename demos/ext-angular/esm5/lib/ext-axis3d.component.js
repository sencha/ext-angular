/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var axis3dMetaData = /** @class */ (function () {
    function axis3dMetaData() {
    }
    axis3dMetaData.XTYPE = 'axis3d';
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
                    providers: [{ provide: base, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ExtAxis3dComponent; })) }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1heGlzM2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQXNEQSxDQUFDO0lBckRlLG9CQUFLLEdBQVcsUUFBUSxDQUFDO0lBQ3pCLHlCQUFVLEdBQWE7UUFDbkMsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixRQUFRO1FBQ1IsT0FBTztRQUNQLE9BQU87UUFDUCxlQUFlO1FBQ2YsUUFBUTtRQUNSLFVBQVU7UUFDVixNQUFNO1FBQ04sUUFBUTtRQUNSLElBQUk7UUFDSixPQUFPO1FBQ1AsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixRQUFRO1FBQ1IsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFVBQVU7UUFDVixXQUFXO1FBQ1gsT0FBTztRQUNQLE9BQU87UUFDUCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyxxQkFBTSxHQUFVO1FBQzlCLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDYyx5QkFBVSxHQUFhO1FBQ3JDLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsT0FBTztLQUNSLENBQUM7SUFDRixxQkFBQztDQUFBLEFBdERELElBc0RDO1NBdERZLGNBQWM7OztJQUN6QixxQkFBdUM7O0lBQ3ZDLDBCQXlDQTs7SUFDQSxzQkFJQTs7SUFDQSwwQkFJQTs7QUFFRjtJQU93Qyw4Q0FBSTtJQUMxQyw0QkFDRSxJQUFlLEVBQXlDLGFBQW9CO1FBRDlFLFlBRUksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQyxjQUFjLEVBQUMsYUFBYSxDQUFDLFNBQ3ZEO1FBRnVELG1CQUFhLEdBQWIsYUFBYSxDQUFPOztJQUU1RSxDQUFDOzs7O0lBQ0kscUNBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNqQyxDQUFDOzs7O0lBQ00sK0NBQWtCOzs7SUFBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQiwwQkFBMEI7SUFDNUIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxVQUFVO29CQUNqQyxPQUFPLEVBQUUsY0FBYyxDQUFDLFVBQVU7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsRUFBQyxFQUFDLENBQUM7b0JBQy9FLFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOzs7O2dCQWpFQyxVQUFVO2dCQUdILElBQUksdUJBaUVTLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFZbEQseUJBQUM7Q0FBQSxBQXJCRCxDQU93QyxJQUFJLEdBYzNDO1NBZFksa0JBQWtCOzs7SUFFViwyQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGF4aXMzZE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2F4aXMzZCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkanVzdEJ5TWFqb3JVbml0JyxcbiAgICAnYmFja2dyb3VuZCcsXG4gICAgJ2NlbnRlcicsXG4gICAgJ2NoYXJ0JyxcbiAgICAnZGVwdGgnLFxuICAgICdleHBhbmRSYW5nZUJ5JyxcbiAgICAnZmllbGRzJyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdncmlkJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaWQnLFxuICAgICdsYWJlbCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xlbmd0aCcsXG4gICAgJ2xpbWl0cycsXG4gICAgJ2xpbmtlZFRvJyxcbiAgICAnbWFqb3JUaWNrU3RlcHMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhpbXVtJyxcbiAgICAnbWF4Wm9vbScsXG4gICAgJ21pbmltdW0nLFxuICAgICdtaW5vclRpY2tTdGVwcycsXG4gICAgJ21pblpvb20nLFxuICAgICduZWVkSGlnaFByZWNpc2lvbicsXG4gICAgJ3Bvc2l0aW9uJyxcbiAgICAncmFkaXVzJyxcbiAgICAncmVjb25jaWxlUmFuZ2UnLFxuICAgICdyZW5kZXJlcicsXG4gICAgJ3JvdGF0aW9uJyxcbiAgICAnc2VnbWVudGVyJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aXRsZScsXG4gICAgJ3RpdGxlTWFyZ2luJyxcbiAgICAndG90YWxBbmdsZScsXG4gICAgJ3Zpc2libGVSYW5nZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHJhbmdlLG9sZFJhbmdlJ30sXG5cdFx0e25hbWU6J3Zpc2libGVyYW5nZWNoYW5nZScscGFyYW1ldGVyczonYXhpcyx2aXNpYmxlUmFuZ2UnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyYW5nZWNoYW5nZScsXG5cdFx0J3Zpc2libGVyYW5nZWNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F4aXMzZCcsIFxuICBpbnB1dHM6IGF4aXMzZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGF4aXMzZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRBeGlzM2RDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBeGlzM2RDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGF4aXMzZE1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iYXNlT25Jbml0KGF4aXMzZE1ldGFEYXRhKVxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG59Il19