/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class colorselectorMetaData {
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
export class ExtColorselectorComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, colorselectorMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.baseOnInit(colorselectorMetaData);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    }
}
ExtColorselectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'colorselector',
                inputs: colorselectorMetaData.PROPERTIES,
                outputs: colorselectorMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => ExtColorselectorComponent)) }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxxQkFBcUI7O0FBQ2xCLDJCQUFLLEdBQVcsZUFBZSxDQUFDO0FBQ2hDLGdDQUFVLEdBQWE7SUFDbkMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0NBQ1gsQ0FBQztBQUNjLDRCQUFNLEdBQVU7SUFDOUIsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxtQ0FBbUMsRUFBQztJQUM5RCxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0NBQzdCLENBQUM7QUFDYyxnQ0FBVSxHQUFhO0lBQ3JDLFFBQVE7SUFDUixRQUFRO0lBQ1IsSUFBSTtJQUNKLE9BQU87Q0FDUixDQUFDOzs7SUE3QkEsNEJBQThDOztJQUM5QyxpQ0FnQkE7O0lBQ0EsNkJBS0E7O0lBQ0EsaUNBS0E7O0FBU0YsTUFBTSxPQUFPLHlCQUEwQixTQUFRLElBQUk7Ozs7O0lBQ2pELFlBQ0UsSUFBZSxFQUF5QyxhQUFvQjtRQUMxRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxxQkFBcUIsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQURQLGtCQUFhLEdBQWIsYUFBYSxDQUFPO0lBRTVFLENBQUM7Ozs7SUFDSSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsMEJBQTBCO0lBQzVCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO2dCQUN4QyxPQUFPLEVBQUUscUJBQXFCLENBQUMsVUFBVTtnQkFDekMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUMsRUFBQyxDQUFDO2dCQUN0RixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7O1lBMUNDLFVBQVU7WUFHSCxJQUFJLHVCQTBDUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7SUFBN0Isa0RBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjb2xvcnNlbGVjdG9yTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY29sb3JzZWxlY3Rvcic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FscGhhRGVjaW1hbEZvcm1hdCcsXG4gICAgJ2NhbmNlbEJ1dHRvblRleHQnLFxuICAgICdjb2xvcicsXG4gICAgJ2ZpZWxkUGFkJyxcbiAgICAnZmllbGRXaWR0aCcsXG4gICAgJ2Zvcm1hdCcsXG4gICAgJ29rQnV0dG9uVGV4dCcsXG4gICAgJ3Nob3dPa0NhbmNlbEJ1dHRvbnMnLFxuICAgICdzaG93UHJldmlvdXNDb2xvcicsXG4gICAgJ3ZhbHVlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonY2FuY2VsJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yJ30sXG5cdFx0e25hbWU6J2NoYW5nZScscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcixjb2xvcixwcmV2aW91c0NvbG9yJ30sXG5cdFx0e25hbWU6J29rJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yLGNvbG9yJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnY2FuY2VsJyxcblx0XHQnY2hhbmdlJyxcblx0XHQnb2snLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvcnNlbGVjdG9yJywgXG4gIGlucHV0czogY29sb3JzZWxlY3Rvck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGNvbG9yc2VsZWN0b3JNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGNvbG9yc2VsZWN0b3JNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFzZU9uSW5pdChjb2xvcnNlbGVjdG9yTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=