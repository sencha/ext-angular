/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
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
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,colorselectorMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,colorselectorMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtColorselectorComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,colorselectorMetaData,hostComponent)}
    /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQStDQSxDQUFDO0lBOUNlLDJCQUFLLEdBQVcsZUFBZSxDQUFDO0lBQ2hDLHNDQUFnQixHQUFRO1FBQ3BDLG9CQUFvQixFQUFFLFFBQVE7UUFDOUIsa0JBQWtCLEVBQUUsUUFBUTtRQUM1QixPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVBQUUsUUFBUTtRQUNwQixZQUFZLEVBQUUsUUFBUTtRQUN0QixRQUFRLEVBQUUsNkRBQTZEO1FBQ3ZFLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixPQUFPLEVBQUUsUUFBUTtRQUNqQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGtCQUFrQixFQUFFLFFBQVE7UUFDNUIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUNjLGdDQUFVLEdBQWE7UUFDbkMsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsVUFBVTtRQUNWLFlBQVk7UUFDWixRQUFRO1FBQ1IsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsT0FBTztRQUNQLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLGFBQWE7UUFDYixRQUFRO0tBQ1gsQ0FBQztJQUNjLDRCQUFNLEdBQVU7UUFDOUIsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUM7UUFDMUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxtQ0FBbUMsRUFBQztRQUM5RCxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO1FBQzVDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDYyxnQ0FBVSxHQUFhO1FBQ3JDLFFBQVE7UUFDUixRQUFRO1FBQ1IsSUFBSTtRQUNKLE9BQU87S0FDUixDQUFDO0lBQ0YsNEJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQS9DWSxxQkFBcUI7OztJQUNoQyw0QkFBOEM7O0lBQzlDLHVDQWVBOztJQUNBLGlDQWdCQTs7SUFDQSw2QkFLQTs7SUFDQSxpQ0FLQTs7QUFFRjtJQU8rQyxxREFBSTtJQUNqRCxtQ0FDRSxJQUFlLEVBQXlDLGFBQW9CO1FBRDlFLFlBRUksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQyxxQkFBcUIsRUFBQyxhQUFhLENBQUMsU0FDOUQ7UUFGdUQsbUJBQWEsR0FBYixhQUFhLENBQU87O0lBRTVFLENBQUM7SUFDSCxvS0FBb0s7Ozs7O0lBQzdKLDRDQUFROzs7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDMUQsMEVBQTBFOzs7OztJQUNuRSxzREFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFsQkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUscUJBQXFCLENBQUMsVUFBVTtvQkFDeEMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLFVBQVU7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFDLENBQUM7b0JBQ3RGLFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOzs7O2dCQTNEQyxVQUFVO2dCQUlILElBQUksdUJBMERTLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFVbEQsZ0NBQUM7Q0FBQSxBQW5CRCxDQU8rQyxJQUFJLEdBWWxEO1NBWlkseUJBQXlCOzs7SUFFakIsa0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGNvbG9yc2VsZWN0b3JNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjb2xvcnNlbGVjdG9yJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhbHBoYURlY2ltYWxGb3JtYXRcIjogXCJTdHJpbmdcIixcbiAgICBcImNhbmNlbEJ1dHRvblRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbG9yXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaWVsZFBhZFwiOiBcIk51bWJlclwiLFxuICAgIFwiZmllbGRXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwiZm9ybWF0XCI6IFwiJ2hleDYnLydoZXg4Jy8nI2hleDYnLycjaGV4OCcvJ0hFWDYnLydIRVg4Jy8nI0hFWDYnLycjSEVYOCdcIixcbiAgICBcIm9rQnV0dG9uVGV4dFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic2hvd09rQ2FuY2VsQnV0dG9uc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dQcmV2aW91c0NvbG9yXCI6IFwiQm9vbGVhblwiLFxuICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWxwaGFEZWNpbWFsRm9ybWF0JyxcbiAgICAnY2FuY2VsQnV0dG9uVGV4dCcsXG4gICAgJ2NvbG9yJyxcbiAgICAnZmllbGRQYWQnLFxuICAgICdmaWVsZFdpZHRoJyxcbiAgICAnZm9ybWF0JyxcbiAgICAnb2tCdXR0b25UZXh0JyxcbiAgICAnc2hvd09rQ2FuY2VsQnV0dG9ucycsXG4gICAgJ3Nob3dQcmV2aW91c0NvbG9yJyxcbiAgICAndmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidjYW5jZWwnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3InfSxcblx0XHR7bmFtZTonY2hhbmdlJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yLGNvbG9yLHByZXZpb3VzQ29sb3InfSxcblx0XHR7bmFtZTonb2snLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3InfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdjYW5jZWwnLFxuXHRcdCdjaGFuZ2UnLFxuXHRcdCdvaycsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yc2VsZWN0b3InLCBcbiAgaW5wdXRzOiBjb2xvcnNlbGVjdG9yTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY29sb3JzZWxlY3Rvck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY29sb3JzZWxlY3Rvck1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGhvc3RDb21wb25lbnQsY29sb3JzZWxlY3Rvck1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNvbG9yc2VsZWN0b3JNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==