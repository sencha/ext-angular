/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var transitionMetaData = /** @class */ (function () {
    function transitionMetaData() {
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
    return transitionMetaData;
}());
export { transitionMetaData };
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
var ExtTransitionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTransitionComponent, _super);
    function ExtTransitionComponent(eRef) {
        return _super.call(this, eRef, transitionMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtTransitionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(transitionMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtTransitionComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () { this.baseAfterContentInit(); };
    ExtTransitionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'transition',
                    inputs: transitionMetaData.PROPERTIES,
                    outputs: transitionMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtTransitionComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtTransitionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtTransitionComponent;
}(base));
export { ExtTransitionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRyYW5zaXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LXRyYW5zaXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUlMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTZCQSxDQUFDO0lBNUJlLHdCQUFLLEdBQVcsWUFBWSxDQUFDO0lBQzdCLG1DQUFnQixHQUFRO1FBQ3BDLE1BQU0sRUFBRSw2QkFBNkI7UUFDckMsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLFFBQVE7UUFDckIseUJBQXlCLEVBQUUsU0FBUztLQUNyQyxDQUFDO0lBQ1ksNkJBQVUsR0FBYTtRQUNuQyxNQUFNO1FBQ04sVUFBVTtRQUNWLFFBQVE7UUFDUixXQUFXO1FBQ1gseUJBQXlCO1FBRXpCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDVCxDQUFDO0lBQ1kseUJBQU0sR0FBVTtRQUM1QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLHdCQUF3QixFQUFDO1FBQ2xELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDWSw2QkFBVSxHQUFhO1FBQ25DLE9BQU87UUFDUCxPQUFPO0tBQ1IsQ0FBQztJQUNKLHlCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E3Qlksa0JBQWtCOzs7SUFDN0IseUJBQTJDOztJQUMzQyxvQ0FNRTs7SUFDRiw4QkFXRTs7SUFDRiwwQkFHRTs7SUFDRiw4QkFHRTs7QUFFSjtJQU80QyxrREFBSTtJQUM5QyxnQ0FBWSxJQUFlO2VBQUcsa0JBQU0sSUFBSSxFQUFDLGtCQUFrQixDQUFDO0lBQUEsQ0FBQzs7OztJQUN0RCx5Q0FBUTs7O0lBQWYsY0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBQztJQUN2RCwwRUFBMEU7Ozs7O0lBQ25FLG1EQUFrQjs7Ozs7SUFBekIsY0FBNkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUEsQ0FBQSxDQUFDOztnQkFYMUQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtvQkFDckMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLFVBQVU7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFDLENBQUM7b0JBQ25GLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQXhDQyxVQUFVOztJQThDWiw2QkFBQztDQUFBLEFBWkQsQ0FPNEMsSUFBSSxHQUsvQztTQUxZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyB0cmFuc2l0aW9uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAndHJhbnNpdGlvbic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwidHlwZVwiOiBcInNsaWRlL3JldmVhbC9jb3Zlci9mYWRlL3BvcFwiLFxuICAgIFwiZHVyYXRpb25cIjogXCJOdW1iZXJcIixcbiAgICBcImVhc2luZ1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGlyZWN0aW9uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kRGlyZWN0aW9uVG9Mb2NhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgfTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAndHlwZScsXG4gICAgJ2R1cmF0aW9uJyxcbiAgICAnZWFzaW5nJyxcbiAgICAnZGlyZWN0aW9uJyxcbiAgICAnYmluZERpcmVjdGlvblRvTG9jYXRpb24nLFxuXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuICBdO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG4gICAge25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG4gICAge25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuICBdO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuICAgICdhZGRlZCcsXG4gICAgJ3JlYWR5J1xuICBdO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJhbnNpdGlvbicsIFxuICBpbnB1dHM6IHRyYW5zaXRpb25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiB0cmFuc2l0aW9uTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFRyYW5zaXRpb25Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRUcmFuc2l0aW9uQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsdHJhbnNpdGlvbk1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdCh0cmFuc2l0aW9uTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge3RoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKX1cbn0iXX0=