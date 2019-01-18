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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxxQkFBcUI7O0FBQ2xCLDJCQUFLLEdBQVcsZUFBZSxDQUFDO0FBQ2hDLHNDQUFnQixHQUFRO0lBQ3BDLG9CQUFvQixFQUFFLFFBQVE7SUFDOUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixPQUFPLEVBQUUsUUFBUTtJQUNqQixVQUFVLEVBQUUsUUFBUTtJQUNwQixZQUFZLEVBQUUsUUFBUTtJQUN0QixRQUFRLEVBQUUsNkRBQTZEO0lBQ3ZFLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLHFCQUFxQixFQUFFLFNBQVM7SUFDaEMsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixPQUFPLEVBQUUsUUFBUTtJQUNqQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGtCQUFrQixFQUFFLFFBQVE7SUFDNUIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUNjLGdDQUFVLEdBQWE7SUFDbkMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0NBQ1gsQ0FBQztBQUNjLDRCQUFNLEdBQVU7SUFDOUIsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxtQ0FBbUMsRUFBQztJQUM5RCxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0NBQzdCLENBQUM7QUFDYyxnQ0FBVSxHQUFhO0lBQ3JDLFFBQVE7SUFDUixRQUFRO0lBQ1IsSUFBSTtJQUNKLE9BQU87Q0FDUixDQUFDOzs7SUE3Q0EsNEJBQThDOztJQUM5Qyx1Q0FlQTs7SUFDQSxpQ0FnQkE7O0lBQ0EsNkJBS0E7O0lBQ0EsaUNBS0E7O0FBU0YsTUFBTSxPQUFPLHlCQUEwQixTQUFRLElBQUk7Ozs7O0lBQ2pELFlBQ0UsSUFBZSxFQUF5QyxhQUFvQjtRQUMxRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxxQkFBcUIsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQURQLGtCQUFhLEdBQWIsYUFBYSxDQUFPO0lBRTVFLENBQUM7Ozs7SUFDSSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMxQixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixNQUFNLEVBQUUscUJBQXFCLENBQUMsVUFBVTtnQkFDeEMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLFVBQVU7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDLEVBQUMsQ0FBQztnQkFDdEYsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7OztZQTFEQyxVQUFVO1lBR0gsSUFBSSx1QkEwRFMsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROzs7O0lBQTdCLGtEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY29sb3JzZWxlY3Rvck1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NvbG9yc2VsZWN0b3InO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFscGhhRGVjaW1hbEZvcm1hdFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY2FuY2VsQnV0dG9uVGV4dFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29sb3JcIjogXCJPYmplY3RcIixcbiAgICBcImZpZWxkUGFkXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmaWVsZFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmb3JtYXRcIjogXCInaGV4NicvJ2hleDgnLycjaGV4NicvJyNoZXg4Jy8nSEVYNicvJ0hFWDgnLycjSEVYNicvJyNIRVg4J1wiLFxuICAgIFwib2tCdXR0b25UZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzaG93T2tDYW5jZWxCdXR0b25zXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hvd1ByZXZpb3VzQ29sb3JcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhbHBoYURlY2ltYWxGb3JtYXQnLFxuICAgICdjYW5jZWxCdXR0b25UZXh0JyxcbiAgICAnY29sb3InLFxuICAgICdmaWVsZFBhZCcsXG4gICAgJ2ZpZWxkV2lkdGgnLFxuICAgICdmb3JtYXQnLFxuICAgICdva0J1dHRvblRleHQnLFxuICAgICdzaG93T2tDYW5jZWxCdXR0b25zJyxcbiAgICAnc2hvd1ByZXZpb3VzQ29sb3InLFxuICAgICd2YWx1ZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2NhbmNlbCcscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcid9LFxuXHRcdHtuYW1lOidjaGFuZ2UnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3IscHJldmlvdXNDb2xvcid9LFxuXHRcdHtuYW1lOidvaycscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcixjb2xvcid9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2NhbmNlbCcsXG5cdFx0J2NoYW5nZScsXG5cdFx0J29rJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3JzZWxlY3RvcicsIFxuICBpbnB1dHM6IGNvbG9yc2VsZWN0b3JNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjb2xvcnNlbGVjdG9yTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxjb2xvcnNlbGVjdG9yTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoY29sb3JzZWxlY3Rvck1ldGFEYXRhKVxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxufSJdfQ==