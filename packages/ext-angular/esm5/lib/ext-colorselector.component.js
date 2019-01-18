/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var colorselectorMetaData = /** @class */ (function () {
    function colorselectorMetaData() {
    }
    colorselectorMetaData.XTYPE = 'colorselector';
    colorselectorMetaData.PROPERTIESOBJECT = {
        "alphaDecimalFormat": "String",
        "cancelButtonText": "String",
        "color": "Object",
        "fieldPad": "Number",
        "fieldWidth": "Number",
        "format": "'hex6'/'hex8'/'#hex6'/'#hex8'/'HEX6'/'HEX8'/'#HEX6'/'#HEX8'",
        "okButtonText": "String",
        "showOkCancelButtons": "Boolean",
        "showPreviousColor": "Boolean",
        "value": "String",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    colorselectorMetaData.PROPERTIES = [
        'alphaDecimalFormat',
        'cancelButtonText',
        'color',
        'fieldPad',
        'fieldWidth',
        'format',
        'okButtonText',
        'showOkCancelButtons',
        'showPreviousColor',
        'value',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    colorselectorMetaData.EVENTS = [
        { name: 'cancel', parameters: 'colorselector' },
        { name: 'change', parameters: 'colorselector,color,previousColor' },
        { name: 'ok', parameters: 'colorselector,color' },
        { name: 'ready', parameters: '' }
    ];
    colorselectorMetaData.EVENTNAMES = [
        'cancel',
        'change',
        'ok',
        'ready'
    ];
    return colorselectorMetaData;
}());
export { colorselectorMetaData };
if (false) {
    /** @type {?} */
    colorselectorMetaData.XTYPE;
    /** @type {?} */
    colorselectorMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    colorselectorMetaData.PROPERTIES;
    /** @type {?} */
    colorselectorMetaData.EVENTS;
    /** @type {?} */
    colorselectorMetaData.EVENTNAMES;
}
var ExtColorselectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorselectorComponent, _super);
    function ExtColorselectorComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, colorselectorMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    /**
     * @return {?}
     */
    ExtColorselectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.baseOnInit(colorselectorMetaData);
    };
    /**
     * @return {?}
     */
    ExtColorselectorComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtColorselectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'colorselector',
                    inputs: colorselectorMetaData.PROPERTIES,
                    outputs: colorselectorMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtColorselectorComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtColorselectorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtColorselectorComponent;
}(base));
export { ExtColorselectorComponent };
if (false) {
    /** @type {?} */
    ExtColorselectorComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBK0NBLENBQUM7SUE5Q2UsMkJBQUssR0FBVyxlQUFlLENBQUM7SUFDaEMsc0NBQWdCLEdBQVE7UUFDcEMsb0JBQW9CLEVBQUUsUUFBUTtRQUM5QixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFFBQVEsRUFBRSw2REFBNkQ7UUFDdkUsY0FBYyxFQUFFLFFBQVE7UUFDeEIscUJBQXFCLEVBQUUsU0FBUztRQUNoQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtRQUM1QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBQ2MsZ0NBQVUsR0FBYTtRQUNuQyxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxVQUFVO1FBQ1YsWUFBWTtRQUNaLFFBQVE7UUFDUixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsNEJBQU0sR0FBVTtRQUM5QixFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUMxQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLG1DQUFtQyxFQUFDO1FBQzlELEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDNUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDN0IsQ0FBQztJQUNjLGdDQUFVLEdBQWE7UUFDckMsUUFBUTtRQUNSLFFBQVE7UUFDUixJQUFJO1FBQ0osT0FBTztLQUNSLENBQUM7SUFDRiw0QkFBQztDQUFBLEFBL0NELElBK0NDO1NBL0NZLHFCQUFxQjs7O0lBQ2hDLDRCQUE4Qzs7SUFDOUMsdUNBZUE7O0lBQ0EsaUNBZ0JBOztJQUNBLDZCQUtBOztJQUNBLGlDQUtBOztBQUVGO0lBTytDLHFEQUFJO0lBQ2pELG1DQUNFLElBQWUsRUFBeUMsYUFBb0I7UUFEOUUsWUFFSSxrQkFBTSxJQUFJLENBQUMsYUFBYSxFQUFDLHFCQUFxQixFQUFDLGFBQWEsQ0FBQyxTQUM5RDtRQUZ1RCxtQkFBYSxHQUFiLGFBQWEsQ0FBTzs7SUFFNUUsQ0FBQzs7OztJQUNJLDRDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUN4QyxDQUFDOzs7O0lBQ00sc0RBQWtCOzs7SUFBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFCLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO29CQUN4QyxPQUFPLEVBQUUscUJBQXFCLENBQUMsVUFBVTtvQkFDekMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDLEVBQUMsQ0FBQztvQkFDdEYsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7Ozs7Z0JBMURDLFVBQVU7Z0JBR0gsSUFBSSx1QkEwRFMsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQVlsRCxnQ0FBQztDQUFBLEFBckJELENBTytDLElBQUksR0FjbEQ7U0FkWSx5QkFBeUI7OztJQUVqQixrREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGNvbG9yc2VsZWN0b3JNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjb2xvcnNlbGVjdG9yJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhbHBoYURlY2ltYWxGb3JtYXRcIjogXCJTdHJpbmdcIixcbiAgICBcImNhbmNlbEJ1dHRvblRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbG9yXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaWVsZFBhZFwiOiBcIk51bWJlclwiLFxuICAgIFwiZmllbGRXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwiZm9ybWF0XCI6IFwiJ2hleDYnLydoZXg4Jy8nI2hleDYnLycjaGV4OCcvJ0hFWDYnLydIRVg4Jy8nI0hFWDYnLycjSEVYOCdcIixcbiAgICBcIm9rQnV0dG9uVGV4dFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic2hvd09rQ2FuY2VsQnV0dG9uc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dQcmV2aW91c0NvbG9yXCI6IFwiQm9vbGVhblwiLFxuICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWxwaGFEZWNpbWFsRm9ybWF0JyxcbiAgICAnY2FuY2VsQnV0dG9uVGV4dCcsXG4gICAgJ2NvbG9yJyxcbiAgICAnZmllbGRQYWQnLFxuICAgICdmaWVsZFdpZHRoJyxcbiAgICAnZm9ybWF0JyxcbiAgICAnb2tCdXR0b25UZXh0JyxcbiAgICAnc2hvd09rQ2FuY2VsQnV0dG9ucycsXG4gICAgJ3Nob3dQcmV2aW91c0NvbG9yJyxcbiAgICAndmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidjYW5jZWwnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3InfSxcblx0XHR7bmFtZTonY2hhbmdlJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yLGNvbG9yLHByZXZpb3VzQ29sb3InfSxcblx0XHR7bmFtZTonb2snLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3InfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdjYW5jZWwnLFxuXHRcdCdjaGFuZ2UnLFxuXHRcdCdvaycsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yc2VsZWN0b3InLCBcbiAgaW5wdXRzOiBjb2xvcnNlbGVjdG9yTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY29sb3JzZWxlY3Rvck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY29sb3JzZWxlY3Rvck1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iYXNlT25Jbml0KGNvbG9yc2VsZWN0b3JNZXRhRGF0YSlcbiAgfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=