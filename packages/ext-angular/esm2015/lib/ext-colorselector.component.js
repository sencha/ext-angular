/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8scUJBQXFCOztBQUNsQiwyQkFBSyxHQUFXLGVBQWUsQ0FBQztBQUNoQyxzQ0FBZ0IsR0FBUTtJQUNwQyxvQkFBb0IsRUFBRSxRQUFRO0lBQzlCLGtCQUFrQixFQUFFLFFBQVE7SUFDNUIsT0FBTyxFQUFFLFFBQVE7SUFDakIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsUUFBUSxFQUFFLDZEQUE2RDtJQUN2RSxjQUFjLEVBQUUsUUFBUTtJQUN4QixxQkFBcUIsRUFBRSxTQUFTO0lBQ2hDLG1CQUFtQixFQUFFLFNBQVM7SUFDOUIsT0FBTyxFQUFFLFFBQVE7SUFDakIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixrQkFBa0IsRUFBRSxRQUFRO0lBQzVCLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUM7QUFDYyxnQ0FBVSxHQUFhO0lBQ25DLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0NBQ1gsQ0FBQztBQUNjLDRCQUFNLEdBQVU7SUFDOUIsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxtQ0FBbUMsRUFBQztJQUM5RCxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0NBQzdCLENBQUM7QUFDYyxnQ0FBVSxHQUFhO0lBQ3JDLFFBQVE7SUFDUixRQUFRO0lBQ1IsSUFBSTtJQUNKLE9BQU87Q0FDUixDQUFDOzs7SUE1Q0EsNEJBQThDOztJQUM5Qyx1Q0FlQTs7SUFDQSxpQ0FlQTs7SUFDQSw2QkFLQTs7SUFDQSxpQ0FLQTs7QUFTRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsSUFBSTs7Ozs7SUFDakQsWUFDRSxJQUFlLEVBQXlDLGFBQW9CO1FBQzFFLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLHFCQUFxQixFQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRFAsa0JBQWEsR0FBYixhQUFhLENBQU87SUFFNUUsQ0FBQzs7Ozs7SUFFSSxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7Ozs7SUFFbkQsa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBbEJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsTUFBTSxFQUFFLHFCQUFxQixDQUFDLFVBQVU7Z0JBQ3hDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFDLENBQUM7Z0JBQ3RGLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7Ozs7WUExREMsVUFBVTtZQUlILElBQUksdUJBeURTLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7OztJQUE3QixrREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY29sb3JzZWxlY3Rvck1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NvbG9yc2VsZWN0b3InO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFscGhhRGVjaW1hbEZvcm1hdFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY2FuY2VsQnV0dG9uVGV4dFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29sb3JcIjogXCJPYmplY3RcIixcbiAgICBcImZpZWxkUGFkXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmaWVsZFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmb3JtYXRcIjogXCInaGV4NicvJ2hleDgnLycjaGV4NicvJyNoZXg4Jy8nSEVYNicvJ0hFWDgnLycjSEVYNicvJyNIRVg4J1wiLFxuICAgIFwib2tCdXR0b25UZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzaG93T2tDYW5jZWxCdXR0b25zXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hvd1ByZXZpb3VzQ29sb3JcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhbHBoYURlY2ltYWxGb3JtYXQnLFxuICAgICdjYW5jZWxCdXR0b25UZXh0JyxcbiAgICAnY29sb3InLFxuICAgICdmaWVsZFBhZCcsXG4gICAgJ2ZpZWxkV2lkdGgnLFxuICAgICdmb3JtYXQnLFxuICAgICdva0J1dHRvblRleHQnLFxuICAgICdzaG93T2tDYW5jZWxCdXR0b25zJyxcbiAgICAnc2hvd1ByZXZpb3VzQ29sb3InLFxuICAgICd2YWx1ZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidjYW5jZWwnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3InfSxcblx0XHR7bmFtZTonY2hhbmdlJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yLGNvbG9yLHByZXZpb3VzQ29sb3InfSxcblx0XHR7bmFtZTonb2snLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3InfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdjYW5jZWwnLFxuXHRcdCdjaGFuZ2UnLFxuXHRcdCdvaycsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yc2VsZWN0b3InLCBcbiAgaW5wdXRzOiBjb2xvcnNlbGVjdG9yTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY29sb3JzZWxlY3Rvck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY29sb3JzZWxlY3Rvck1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGhvc3RDb21wb25lbnQsY29sb3JzZWxlY3Rvck1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNvbG9yc2VsZWN0b3JNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==