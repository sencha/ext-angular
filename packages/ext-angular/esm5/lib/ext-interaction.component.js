/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var interactionMetaData = /** @class */ (function () {
    function interactionMetaData() {
    }
    interactionMetaData.XTYPE = 'interaction';
    interactionMetaData.PROPERTIESOBJECT = {
        "chart": "Ext.chart.AbstractChart",
        "enabled": "Boolean",
        "gesture": "Object",
        "listeners": "Object",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    interactionMetaData.PROPERTIES = [
        'chart',
        'enabled',
        'gesture',
        'listeners',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    interactionMetaData.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    interactionMetaData.EVENTNAMES = [
        'ready'
    ];
    return interactionMetaData;
}());
export { interactionMetaData };
if (false) {
    /** @type {?} */
    interactionMetaData.XTYPE;
    /** @type {?} */
    interactionMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    interactionMetaData.PROPERTIES;
    /** @type {?} */
    interactionMetaData.EVENTS;
    /** @type {?} */
    interactionMetaData.EVENTNAMES;
}
var ExtInteractionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtInteractionComponent, _super);
    function ExtInteractionComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, interactionMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,interactionMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,interactionMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtInteractionComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,interactionMetaData,hostComponent)}
    /**
     * @return {?}
     */
    function () { this.baseOnInit(interactionMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtInteractionComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtInteractionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'interaction',
                    inputs: interactionMetaData.PROPERTIES,
                    outputs: interactionMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtInteractionComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtInteractionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtInteractionComponent;
}(base));
export { ExtInteractionComponent };
if (false) {
    /** @type {?} */
    ExtInteractionComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUE0QkEsQ0FBQztJQTNCZSx5QkFBSyxHQUFXLGFBQWEsQ0FBQztJQUM5QixvQ0FBZ0IsR0FBUTtRQUNwQyxPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtRQUM1QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBQ2MsOEJBQVUsR0FBYTtRQUNuQyxPQUFPO1FBQ1AsU0FBUztRQUNULFNBQVM7UUFDVCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYywwQkFBTSxHQUFVO1FBQzlCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDYyw4QkFBVSxHQUFhO1FBQ3JDLE9BQU87S0FDUixDQUFDO0lBQ0YsMEJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTVCWSxtQkFBbUI7OztJQUM5QiwwQkFBNEM7O0lBQzVDLHFDQVNBOztJQUNBLCtCQVNBOztJQUNBLDJCQUVBOztJQUNBLCtCQUVBOztBQUVGO0lBTzZDLG1EQUFJO0lBQy9DLGlDQUFZLElBQWUsRUFBeUMsYUFBb0I7UUFBeEYsWUFBMkYsa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxhQUFhLENBQUMsU0FBQztRQUFuRixtQkFBYSxHQUFiLGFBQWEsQ0FBTzs7SUFBOEQsQ0FBQztJQUN2SixrS0FBa0s7Ozs7O0lBQzNKLDBDQUFROzs7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDeEQsMEVBQTBFOzs7OztJQUNuRSxvREFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFmSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO29CQUN0QyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtvQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztvQkFDcEYsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7Ozs7Z0JBdkNDLFVBQVU7Z0JBR0gsSUFBSSx1QkFzQ21CLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFRNUQsOEJBQUM7Q0FBQSxBQWhCRCxDQU82QyxJQUFJLEdBU2hEO1NBVFksdUJBQXVCOzs7SUFDTCxnREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGludGVyYWN0aW9uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnaW50ZXJhY3Rpb24nO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImNoYXJ0XCI6IFwiRXh0LmNoYXJ0LkFic3RyYWN0Q2hhcnRcIixcbiAgICBcImVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJnZXN0dXJlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnY2hhcnQnLFxuICAgICdlbmFibGVkJyxcbiAgICAnZ2VzdHVyZScsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ludGVyYWN0aW9uJywgXG4gIGlucHV0czogaW50ZXJhY3Rpb25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBpbnRlcmFjdGlvbk1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRJbnRlcmFjdGlvbkNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEludGVyYWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsaW50ZXJhY3Rpb25NZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LGludGVyYWN0aW9uTWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoaW50ZXJhY3Rpb25NZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==