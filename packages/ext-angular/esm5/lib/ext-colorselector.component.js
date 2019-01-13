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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBOENBLENBQUM7SUE3Q2UsMkJBQUssR0FBVyxlQUFlLENBQUM7SUFDaEMsc0NBQWdCLEdBQVE7UUFDcEMsb0JBQW9CLEVBQUUsUUFBUTtRQUM5QixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFFBQVEsRUFBRSw2REFBNkQ7UUFDdkUsY0FBYyxFQUFFLFFBQVE7UUFDeEIscUJBQXFCLEVBQUUsU0FBUztRQUNoQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtRQUM1QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBQ2MsZ0NBQVUsR0FBYTtRQUNuQyxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxVQUFVO1FBQ1YsWUFBWTtRQUNaLFFBQVE7UUFDUixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyw0QkFBTSxHQUFVO1FBQzlCLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDO1FBQzFDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsbUNBQW1DLEVBQUM7UUFDOUQsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQztRQUM1QyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUM3QixDQUFDO0lBQ2MsZ0NBQVUsR0FBYTtRQUNyQyxRQUFRO1FBQ1IsUUFBUTtRQUNSLElBQUk7UUFDSixPQUFPO0tBQ1IsQ0FBQztJQUNGLDRCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0E5Q1kscUJBQXFCOzs7SUFDaEMsNEJBQThDOztJQUM5Qyx1Q0FlQTs7SUFDQSxpQ0FlQTs7SUFDQSw2QkFLQTs7SUFDQSxpQ0FLQTs7QUFFRjtJQU8rQyxxREFBSTtJQUNqRCxtQ0FBWSxJQUFlLEVBQXlDLGFBQW9CO1FBQXhGLFlBQTJGLGtCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUMscUJBQXFCLEVBQUMsYUFBYSxDQUFDLFNBQUM7UUFBckYsbUJBQWEsR0FBYixhQUFhLENBQU87O0lBQWdFLENBQUM7SUFDekosb0tBQW9LOzs7OztJQUM3Siw0Q0FBUTs7Ozs7SUFBZixjQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUEsQ0FBQSxDQUFDO0lBQzFELDBFQUEwRTs7Ozs7SUFDbkUsc0RBQWtCOzs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUscUJBQXFCLENBQUMsVUFBVTtvQkFDeEMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLFVBQVU7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFDLENBQUM7b0JBQ3RGLFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOzs7O2dCQXpEQyxVQUFVO2dCQUdILElBQUksdUJBd0RtQixJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBUTVELGdDQUFDO0NBQUEsQUFoQkQsQ0FPK0MsSUFBSSxHQVNsRDtTQVRZLHlCQUF5Qjs7O0lBQ1Asa0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjb2xvcnNlbGVjdG9yTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY29sb3JzZWxlY3Rvcic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWxwaGFEZWNpbWFsRm9ybWF0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjYW5jZWxCdXR0b25UZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb2xvclwiOiBcIk9iamVjdFwiLFxuICAgIFwiZmllbGRQYWRcIjogXCJOdW1iZXJcIixcbiAgICBcImZpZWxkV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImZvcm1hdFwiOiBcIidoZXg2Jy8naGV4OCcvJyNoZXg2Jy8nI2hleDgnLydIRVg2Jy8nSEVYOCcvJyNIRVg2Jy8nI0hFWDgnXCIsXG4gICAgXCJva0J1dHRvblRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcInNob3dPa0NhbmNlbEJ1dHRvbnNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93UHJldmlvdXNDb2xvclwiOiBcIkJvb2xlYW5cIixcbiAgICBcInZhbHVlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FscGhhRGVjaW1hbEZvcm1hdCcsXG4gICAgJ2NhbmNlbEJ1dHRvblRleHQnLFxuICAgICdjb2xvcicsXG4gICAgJ2ZpZWxkUGFkJyxcbiAgICAnZmllbGRXaWR0aCcsXG4gICAgJ2Zvcm1hdCcsXG4gICAgJ29rQnV0dG9uVGV4dCcsXG4gICAgJ3Nob3dPa0NhbmNlbEJ1dHRvbnMnLFxuICAgICdzaG93UHJldmlvdXNDb2xvcicsXG4gICAgJ3ZhbHVlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2NhbmNlbCcscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcid9LFxuXHRcdHtuYW1lOidjaGFuZ2UnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3IscHJldmlvdXNDb2xvcid9LFxuXHRcdHtuYW1lOidvaycscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcixjb2xvcid9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2NhbmNlbCcsXG5cdFx0J2NoYW5nZScsXG5cdFx0J29rJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3JzZWxlY3RvcicsIFxuICBpbnB1dHM6IGNvbG9yc2VsZWN0b3JNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjb2xvcnNlbGVjdG9yTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY29sb3JzZWxlY3Rvck1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGhvc3RDb21wb25lbnQsY29sb3JzZWxlY3Rvck1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNvbG9yc2VsZWN0b3JNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==