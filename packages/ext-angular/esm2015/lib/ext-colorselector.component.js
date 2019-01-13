/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class colorselectorMetaData {
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
export class ExtColorselectorComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, colorselectorMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,colorselectorMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(colorselectorMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtColorselectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'colorselector',
                inputs: colorselectorMetaData.PROPERTIES,
                outputs: colorselectorMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtColorselectorComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtColorselectorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtColorselectorComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxxQkFBcUI7O0FBQ2xCLDJCQUFLLEdBQVcsZUFBZSxDQUFDO0FBQ2hDLHNDQUFnQixHQUFRO0lBQ3BDLG9CQUFvQixFQUFFLFFBQVE7SUFDOUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixPQUFPLEVBQUUsUUFBUTtJQUNqQixVQUFVLEVBQUUsUUFBUTtJQUNwQixZQUFZLEVBQUUsUUFBUTtJQUN0QixRQUFRLEVBQUUsNkRBQTZEO0lBQ3ZFLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLHFCQUFxQixFQUFFLFNBQVM7SUFDaEMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixPQUFPLEVBQUUsUUFBUTtJQUNqQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGtCQUFrQixFQUFFLFFBQVE7SUFDNUIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUNjLGdDQUFVLEdBQWE7SUFDbkMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MsNEJBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztJQUMxQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLG1DQUFtQyxFQUFDO0lBQzlELEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7SUFDNUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7Q0FDN0IsQ0FBQztBQUNjLGdDQUFVLEdBQWE7SUFDckMsUUFBUTtJQUNSLFFBQVE7SUFDUixJQUFJO0lBQ0osT0FBTztDQUNSLENBQUM7OztJQTVDQSw0QkFBOEM7O0lBQzlDLHVDQWVBOztJQUNBLGlDQWVBOztJQUNBLDZCQUtBOztJQUNBLGlDQUtBOztBQVNGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxJQUFJOzs7OztJQUNqRCxZQUFZLElBQWUsRUFBeUMsYUFBb0I7UUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxxQkFBcUIsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQUFwRixrQkFBYSxHQUFiLGFBQWEsQ0FBTztJQUFnRSxDQUFDOzs7OztJQUVsSixRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7Ozs7SUFFbkQsa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixNQUFNLEVBQUUscUJBQXFCLENBQUMsVUFBVTtnQkFDeEMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLFVBQVU7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDLEVBQUMsQ0FBQztnQkFDdEYsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7OztZQXpEQyxVQUFVO1lBR0gsSUFBSSx1QkF3RG1CLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7OztJQUE3QixrREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGNvbG9yc2VsZWN0b3JNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjb2xvcnNlbGVjdG9yJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhbHBoYURlY2ltYWxGb3JtYXRcIjogXCJTdHJpbmdcIixcbiAgICBcImNhbmNlbEJ1dHRvblRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbG9yXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaWVsZFBhZFwiOiBcIk51bWJlclwiLFxuICAgIFwiZmllbGRXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwiZm9ybWF0XCI6IFwiJ2hleDYnLydoZXg4Jy8nI2hleDYnLycjaGV4OCcvJ0hFWDYnLydIRVg4Jy8nI0hFWDYnLycjSEVYOCdcIixcbiAgICBcIm9rQnV0dG9uVGV4dFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic2hvd09rQ2FuY2VsQnV0dG9uc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dQcmV2aW91c0NvbG9yXCI6IFwiQm9vbGVhblwiLFxuICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWxwaGFEZWNpbWFsRm9ybWF0JyxcbiAgICAnY2FuY2VsQnV0dG9uVGV4dCcsXG4gICAgJ2NvbG9yJyxcbiAgICAnZmllbGRQYWQnLFxuICAgICdmaWVsZFdpZHRoJyxcbiAgICAnZm9ybWF0JyxcbiAgICAnb2tCdXR0b25UZXh0JyxcbiAgICAnc2hvd09rQ2FuY2VsQnV0dG9ucycsXG4gICAgJ3Nob3dQcmV2aW91c0NvbG9yJyxcbiAgICAndmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonY2FuY2VsJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yJ30sXG5cdFx0e25hbWU6J2NoYW5nZScscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcixjb2xvcixwcmV2aW91c0NvbG9yJ30sXG5cdFx0e25hbWU6J29rJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yLGNvbG9yJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnY2FuY2VsJyxcblx0XHQnY2hhbmdlJyxcblx0XHQnb2snLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvcnNlbGVjdG9yJywgXG4gIGlucHV0czogY29sb3JzZWxlY3Rvck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGNvbG9yc2VsZWN0b3JNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxjb2xvcnNlbGVjdG9yTWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxjb2xvcnNlbGVjdG9yTWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoY29sb3JzZWxlY3Rvck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19