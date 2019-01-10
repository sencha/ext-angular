/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class pivotd3containerMetaData {
}
pivotd3containerMetaData.XTYPE = 'pivotd3container';
pivotd3containerMetaData.PROPERTIESOBJECT = {
    "configurator": "Ext.pivot.plugin.Configurator",
    "drawing": "Ext.Component",
    "matrix": "Ext.pivot.matrix.Base",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
pivotd3containerMetaData.PROPERTIES = [
    'configurator',
    'drawing',
    'matrix',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
pivotd3containerMetaData.EVENTS = [
    { name: 'ready', parameters: '' }
];
pivotd3containerMetaData.EVENTNAMES = [
    'ready'
];
if (false) {
    /** @type {?} */
    pivotd3containerMetaData.XTYPE;
    /** @type {?} */
    pivotd3containerMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    pivotd3containerMetaData.PROPERTIES;
    /** @type {?} */
    pivotd3containerMetaData.EVENTS;
    /** @type {?} */
    pivotd3containerMetaData.EVENTNAMES;
}
export class ExtPivotd3containerComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, pivotd3containerMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,pivotd3containerMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(pivotd3containerMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtPivotd3containerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pivotd3container',
                inputs: pivotd3containerMetaData.PROPERTIES,
                outputs: pivotd3containerMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtPivotd3containerComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtPivotd3containerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtPivotd3containerComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sd0JBQXdCOztBQUNyQiw4QkFBSyxHQUFXLGtCQUFrQixDQUFDO0FBQ25DLHlDQUFnQixHQUFRO0lBQ3BDLGNBQWMsRUFBRSwrQkFBK0I7SUFDL0MsU0FBUyxFQUFFLGVBQWU7SUFDMUIsUUFBUSxFQUFFLHVCQUF1QjtJQUNqQyxnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGtCQUFrQixFQUFFLFFBQVE7SUFDNUIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUNjLG1DQUFVLEdBQWE7SUFDbkMsY0FBYztJQUNkLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtDQUNYLENBQUM7QUFDYywrQkFBTSxHQUFVO0lBQzlCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0NBQzdCLENBQUM7QUFDYyxtQ0FBVSxHQUFhO0lBQ3JDLE9BQU87Q0FDUixDQUFDOzs7SUF4QkEsK0JBQWlEOztJQUNqRCwwQ0FRQTs7SUFDQSxvQ0FRQTs7SUFDQSxnQ0FFQTs7SUFDQSxvQ0FFQTs7QUFTRixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsSUFBSTs7Ozs7SUFDcEQsWUFBWSxJQUFlLEVBQXlDLGFBQW9CO1FBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsd0JBQXdCLEVBQUMsYUFBYSxDQUFDLENBQUE7UUFBdkYsa0JBQWEsR0FBYixhQUFhLENBQU87SUFBbUUsQ0FBQzs7Ozs7SUFFckosUUFBUSxLQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBRXRELGtCQUFrQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7OztZQWZKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixNQUFNLEVBQUUsd0JBQXdCLENBQUMsVUFBVTtnQkFDM0MsT0FBTyxFQUFFLHdCQUF3QixDQUFDLFVBQVU7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixDQUFDLEVBQUMsQ0FBQztnQkFDekYsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7OztZQXJDQyxVQUFVO1lBR0gsSUFBSSx1QkFvQ21CLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7OztJQUE3QixxREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdwaXZvdGQzY29udGFpbmVyJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJjb25maWd1cmF0b3JcIjogXCJFeHQucGl2b3QucGx1Z2luLkNvbmZpZ3VyYXRvclwiLFxuICAgIFwiZHJhd2luZ1wiOiBcIkV4dC5Db21wb25lbnRcIixcbiAgICBcIm1hdHJpeFwiOiBcIkV4dC5waXZvdC5tYXRyaXguQmFzZVwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdjb25maWd1cmF0b3InLFxuICAgICdkcmF3aW5nJyxcbiAgICAnbWF0cml4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGl2b3RkM2NvbnRhaW5lcicsIFxuICBpbnB1dHM6IHBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBwaXZvdGQzY29udGFpbmVyTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFBpdm90ZDNjb250YWluZXJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRQaXZvdGQzY29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQscGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGhvc3RDb21wb25lbnQscGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KHBpdm90ZDNjb250YWluZXJNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==