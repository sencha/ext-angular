/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
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
    function ExtColorselectorComponent(eRef) {
        return _super.call(this, eRef, colorselectorMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtColorselectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(colorselectorMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtColorselectorComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
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
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtColorselectorComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtColorselectorComponent;
}(base));
export { ExtColorselectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQThDQSxDQUFDO0lBN0NlLDJCQUFLLEdBQVcsZUFBZSxDQUFDO0lBQ2hDLHNDQUFnQixHQUFRO1FBQ3BDLG9CQUFvQixFQUFFLFFBQVE7UUFDOUIsa0JBQWtCLEVBQUUsUUFBUTtRQUM1QixPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVBQUUsUUFBUTtRQUNwQixZQUFZLEVBQUUsUUFBUTtRQUN0QixRQUFRLEVBQUUsNkRBQTZEO1FBQ3ZFLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixPQUFPLEVBQUUsUUFBUTtRQUNqQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUNjLGdDQUFVLEdBQWE7UUFDbkMsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsVUFBVTtRQUNWLFlBQVk7UUFDWixRQUFRO1FBQ1IsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsNEJBQU0sR0FBVTtRQUM5QixFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUMxQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLG1DQUFtQyxFQUFDO1FBQzlELEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDNUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDN0IsQ0FBQztJQUNjLGdDQUFVLEdBQWE7UUFDckMsUUFBUTtRQUNSLFFBQVE7UUFDUixJQUFJO1FBQ0osT0FBTztLQUNSLENBQUM7SUFDRiw0QkFBQztDQUFBLEFBOUNELElBOENDO1NBOUNZLHFCQUFxQjs7O0lBQ2hDLDRCQUE4Qzs7SUFDOUMsdUNBZUE7O0lBQ0EsaUNBZUE7O0lBQ0EsNkJBS0E7O0lBQ0EsaUNBS0E7O0FBRUY7SUFPK0MscURBQUk7SUFDakQsbUNBQVksSUFBZTtlQUFHLGtCQUFNLElBQUksRUFBQyxxQkFBcUIsQ0FBQztJQUFBLENBQUM7Ozs7SUFDekQsNENBQVE7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDMUQsMEVBQTBFOzs7OztJQUNuRSxzREFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO29CQUN4QyxPQUFPLEVBQUUscUJBQXFCLENBQUMsVUFBVTtvQkFDekMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDLEVBQUMsQ0FBQztvQkFDdEYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBekRDLFVBQVU7O0lBa0VaLGdDQUFDO0NBQUEsQUFmRCxDQU8rQyxJQUFJLEdBUWxEO1NBUlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY29sb3JzZWxlY3Rvck1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NvbG9yc2VsZWN0b3InO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFscGhhRGVjaW1hbEZvcm1hdFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY2FuY2VsQnV0dG9uVGV4dFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29sb3JcIjogXCJPYmplY3RcIixcbiAgICBcImZpZWxkUGFkXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmaWVsZFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmb3JtYXRcIjogXCInaGV4NicvJ2hleDgnLycjaGV4NicvJyNoZXg4Jy8nSEVYNicvJ0hFWDgnLycjSEVYNicvJyNIRVg4J1wiLFxuICAgIFwib2tCdXR0b25UZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzaG93T2tDYW5jZWxCdXR0b25zXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hvd1ByZXZpb3VzQ29sb3JcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhbHBoYURlY2ltYWxGb3JtYXQnLFxuICAgICdjYW5jZWxCdXR0b25UZXh0JyxcbiAgICAnY29sb3InLFxuICAgICdmaWVsZFBhZCcsXG4gICAgJ2ZpZWxkV2lkdGgnLFxuICAgICdmb3JtYXQnLFxuICAgICdva0J1dHRvblRleHQnLFxuICAgICdzaG93T2tDYW5jZWxCdXR0b25zJyxcbiAgICAnc2hvd1ByZXZpb3VzQ29sb3InLFxuICAgICd2YWx1ZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidjYW5jZWwnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3InfSxcblx0XHR7bmFtZTonY2hhbmdlJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yLGNvbG9yLHByZXZpb3VzQ29sb3InfSxcblx0XHR7bmFtZTonb2snLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3InfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdjYW5jZWwnLFxuXHRcdCdjaGFuZ2UnLFxuXHRcdCdvaycsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yc2VsZWN0b3InLCBcbiAgaW5wdXRzOiBjb2xvcnNlbGVjdG9yTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY29sb3JzZWxlY3Rvck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGNvbG9yc2VsZWN0b3JNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoY29sb3JzZWxlY3Rvck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19