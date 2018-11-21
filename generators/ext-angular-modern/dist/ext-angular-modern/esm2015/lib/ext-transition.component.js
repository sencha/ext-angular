/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class transitionMetaData {
}
transitionMetaData.XTYPE = 'transition';
transitionMetaData.PROPERTIESOBJECT = {
    "type": "slide/reveal/cover/fade/pop",
    "duration": "Number",
    "easing": "String",
    "direction": "String",
    "bindDirectionToLocation": "Boolean",
};
transitionMetaData.PROPERTIES = [
    'type',
    'duration',
    'easing',
    'direction',
    'bindDirectionToLocation',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
transitionMetaData.EVENTS = [
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'ready', parameters: '' }
];
transitionMetaData.EVENTNAMES = [
    'added',
    'ready'
];
if (false) {
    /** @type {?} */
    transitionMetaData.XTYPE;
    /** @type {?} */
    transitionMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    transitionMetaData.PROPERTIES;
    /** @type {?} */
    transitionMetaData.EVENTS;
    /** @type {?} */
    transitionMetaData.EVENTNAMES;
}
export class ExtTransitionComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, transitionMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(transitionMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() { this.baseAfterContentInit(); }
}
ExtTransitionComponent.decorators = [
    { type: Component, args: [{
                selector: 'transition',
                inputs: transitionMetaData.PROPERTIES,
                outputs: transitionMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtTransitionComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtTransitionComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRyYW5zaXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LXRyYW5zaXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBSUwsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sa0JBQWtCOztBQUNmLHdCQUFLLEdBQVcsWUFBWSxDQUFDO0FBQzdCLG1DQUFnQixHQUFRO0lBQ3BDLE1BQU0sRUFBRSw2QkFBNkI7SUFDckMsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsV0FBVyxFQUFFLFFBQVE7SUFDckIseUJBQXlCLEVBQUUsU0FBUztDQUNyQyxDQUFDO0FBQ1ksNkJBQVUsR0FBYTtJQUNuQyxNQUFNO0lBQ04sVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gseUJBQXlCO0lBRXpCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDVCxDQUFDO0FBQ1kseUJBQU0sR0FBVTtJQUM1QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLHdCQUF3QixFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0NBQzdCLENBQUM7QUFDWSw2QkFBVSxHQUFhO0lBQ25DLE9BQU87SUFDUCxPQUFPO0NBQ1IsQ0FBQzs7O0lBM0JGLHlCQUEyQzs7SUFDM0Msb0NBTUU7O0lBQ0YsOEJBV0U7O0lBQ0YsMEJBR0U7O0lBQ0YsOEJBR0U7O0FBU0osTUFBTSxPQUFPLHNCQUF1QixTQUFRLElBQUk7Ozs7SUFDOUMsWUFBWSxJQUFlLElBQUcsS0FBSyxDQUFDLElBQUksRUFBQyxrQkFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7OztJQUN0RCxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7Ozs7SUFFaEQsa0JBQWtCLEtBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUEsQ0FBQSxDQUFDOzs7WUFYMUQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtnQkFDckMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLFVBQVU7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUMsQ0FBQztnQkFDbkYsUUFBUSxFQUFFLHNDQUFzQzthQUNqRDs7OztZQXhDQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIHRyYW5zaXRpb25NZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICd0cmFuc2l0aW9uJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJ0eXBlXCI6IFwic2xpZGUvcmV2ZWFsL2NvdmVyL2ZhZGUvcG9wXCIsXG4gICAgXCJkdXJhdGlvblwiOiBcIk51bWJlclwiLFxuICAgIFwiZWFzaW5nXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkaXJlY3Rpb25cIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmREaXJlY3Rpb25Ub0xvY2F0aW9uXCI6IFwiQm9vbGVhblwiLFxuICB9O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICd0eXBlJyxcbiAgICAnZHVyYXRpb24nLFxuICAgICdlYXNpbmcnLFxuICAgICdkaXJlY3Rpb24nLFxuICAgICdiaW5kRGlyZWN0aW9uVG9Mb2NhdGlvbicsXG5cbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG4gIF07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbiAgICB7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbiAgICB7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG4gIF07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkZGVkJyxcbiAgICAncmVhZHknXG4gIF07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmFuc2l0aW9uJywgXG4gIGlucHV0czogdHJhbnNpdGlvbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IHRyYW5zaXRpb25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0VHJhbnNpdGlvbkNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFRyYW5zaXRpb25Db21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZix0cmFuc2l0aW9uTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KHRyYW5zaXRpb25NZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7dGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpfVxufSJdfQ==