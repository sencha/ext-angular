/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var colorselectorMetaData = /** @class */ (function () {
    function colorselectorMetaData() {
    }
    colorselectorMetaData.XTYPE = 'colorselector';
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
        //this['ready'].emit(this)
    };
    ExtColorselectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'colorselector',
                    inputs: colorselectorMetaData.PROPERTIES,
                    outputs: colorselectorMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ExtColorselectorComponent; })) }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBK0JBLENBQUM7SUE5QmUsMkJBQUssR0FBVyxlQUFlLENBQUM7SUFDaEMsZ0NBQVUsR0FBYTtRQUNuQyxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxVQUFVO1FBQ1YsWUFBWTtRQUNaLFFBQVE7UUFDUixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsNEJBQU0sR0FBVTtRQUM5QixFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUMxQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLG1DQUFtQyxFQUFDO1FBQzlELEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDNUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDN0IsQ0FBQztJQUNjLGdDQUFVLEdBQWE7UUFDckMsUUFBUTtRQUNSLFFBQVE7UUFDUixJQUFJO1FBQ0osT0FBTztLQUNSLENBQUM7SUFDRiw0QkFBQztDQUFBLEFBL0JELElBK0JDO1NBL0JZLHFCQUFxQjs7O0lBQ2hDLDRCQUE4Qzs7SUFDOUMsaUNBZ0JBOztJQUNBLDZCQUtBOztJQUNBLGlDQUtBOztBQUVGO0lBTytDLHFEQUFJO0lBQ2pELG1DQUNFLElBQWUsRUFBeUMsYUFBb0I7UUFEOUUsWUFFSSxrQkFBTSxJQUFJLENBQUMsYUFBYSxFQUFDLHFCQUFxQixFQUFDLGFBQWEsQ0FBQyxTQUM5RDtRQUZ1RCxtQkFBYSxHQUFiLGFBQWEsQ0FBTzs7SUFFNUUsQ0FBQzs7OztJQUNJLDRDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUN4QyxDQUFDOzs7O0lBQ00sc0RBQWtCOzs7SUFBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQiwwQkFBMEI7SUFDNUIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsTUFBTSxFQUFFLHFCQUFxQixDQUFDLFVBQVU7b0JBQ3hDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO29CQUN6QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUMsRUFBQyxDQUFDO29CQUN0RixRQUFRLEVBQUUsNkJBQTZCO2lCQUN4Qzs7OztnQkExQ0MsVUFBVTtnQkFHSCxJQUFJLHVCQTBDUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBWWxELGdDQUFDO0NBQUEsQUFyQkQsQ0FPK0MsSUFBSSxHQWNsRDtTQWRZLHlCQUF5Qjs7O0lBRWpCLGtEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY29sb3JzZWxlY3Rvck1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NvbG9yc2VsZWN0b3InO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhbHBoYURlY2ltYWxGb3JtYXQnLFxuICAgICdjYW5jZWxCdXR0b25UZXh0JyxcbiAgICAnY29sb3InLFxuICAgICdmaWVsZFBhZCcsXG4gICAgJ2ZpZWxkV2lkdGgnLFxuICAgICdmb3JtYXQnLFxuICAgICdva0J1dHRvblRleHQnLFxuICAgICdzaG93T2tDYW5jZWxCdXR0b25zJyxcbiAgICAnc2hvd1ByZXZpb3VzQ29sb3InLFxuICAgICd2YWx1ZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2NhbmNlbCcscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcid9LFxuXHRcdHtuYW1lOidjaGFuZ2UnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3IscHJldmlvdXNDb2xvcid9LFxuXHRcdHtuYW1lOidvaycscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcixjb2xvcid9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2NhbmNlbCcsXG5cdFx0J2NoYW5nZScsXG5cdFx0J29rJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3JzZWxlY3RvcicsIFxuICBpbnB1dHM6IGNvbG9yc2VsZWN0b3JNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjb2xvcnNlbGVjdG9yTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxjb2xvcnNlbGVjdG9yTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoY29sb3JzZWxlY3Rvck1ldGFEYXRhKVxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG59Il19