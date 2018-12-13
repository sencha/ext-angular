/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var orgchartMetaData = /** @class */ (function () {
    function orgchartMetaData() {
    }
    orgchartMetaData.XTYPE = 'orgchart';
    orgchartMetaData.PROPERTIESOBJECT = {
        "zIndex": "Number",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    orgchartMetaData.PROPERTIES = [
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    orgchartMetaData.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    orgchartMetaData.EVENTNAMES = [
        'ready'
    ];
    return orgchartMetaData;
}());
export { orgchartMetaData };
if (false) {
    /** @type {?} */
    orgchartMetaData.XTYPE;
    /** @type {?} */
    orgchartMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    orgchartMetaData.PROPERTIES;
    /** @type {?} */
    orgchartMetaData.EVENTS;
    /** @type {?} */
    orgchartMetaData.EVENTNAMES;
}
var ExtOrgChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtOrgChartComponent, _super);
    function ExtOrgChartComponent(eRef) {
        return _super.call(this, eRef, orgchartMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtOrgChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(orgchartMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtOrgChartComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtOrgChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'orgchart',
                    inputs: orgchartMetaData.PROPERTIES,
                    outputs: orgchartMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtOrgChartComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtOrgChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtOrgChartComponent;
}(base));
export { ExtOrgChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW9yZ2NoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC1vcmdjaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBS0gsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBc0JBLENBQUM7SUFyQmUsc0JBQUssR0FBVyxVQUFVLENBQUM7SUFDM0IsaUNBQWdCLEdBQVE7UUFDcEMsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUM7SUFDYywyQkFBVSxHQUFhO1FBQ25DLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0tBQ1gsQ0FBQztJQUNjLHVCQUFNLEdBQVU7UUFDeEIsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDbkMsQ0FBQztJQUNjLDJCQUFVLEdBQWE7UUFDL0IsT0FBTztLQUNkLENBQUM7SUFDRix1QkFBQztDQUFBLEFBdEJELElBc0JDO1NBdEJZLGdCQUFnQjs7O0lBQzNCLHVCQUF5Qzs7SUFDekMsa0NBTUE7O0lBQ0EsNEJBTUE7O0lBQ0Esd0JBRUE7O0lBQ0EsNEJBRUE7O0FBRUY7SUFPMEMsZ0RBQUk7SUFDNUMsOEJBQVksSUFBZTtlQUFHLGtCQUFNLElBQUksRUFBQyxnQkFBZ0IsQ0FBQztJQUFBLENBQUM7Ozs7SUFDcEQsdUNBQVE7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDckQsMEVBQTBFOzs7OztJQUNuRSxpREFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO29CQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtvQkFDcEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDLEVBQUMsQ0FBQztvQkFDakYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBakNDLFVBQVU7O0lBMENaLDJCQUFDO0NBQUEsQUFmRCxDQU8wQyxJQUFJLEdBUTdDO1NBUlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBPdXRwdXQsXG4gICAgT25Jbml0LFxuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAgaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG4gIGV4cG9ydCBjbGFzcyBvcmdjaGFydE1ldGFEYXRhIHtcbiAgICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnb3JnY2hhcnQnO1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgICAgXCJ6SW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gIH07XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAgICd6SW5kZXgnLFxuICAgICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAgICdmaXRUb1BhcmVudCcsXG4gICAgICAnY29uZmlnJ1xuICBdO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbiAgICAgICAgICB7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG4gIF07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgICAncmVhZHknXG4gIF07XG4gIH1cbiAgQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdvcmdjaGFydCcsIFxuICAgIGlucHV0czogb3JnY2hhcnRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgIG91dHB1dHM6IG9yZ2NoYXJ0TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0T3JnQ2hhcnRDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG4gIH0pXG4gIGV4cG9ydCBjbGFzcyBFeHRPcmdDaGFydENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsb3JnY2hhcnRNZXRhRGF0YSl9XG4gICAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChvcmdjaGFydE1ldGFEYXRhKX1cbiAgICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgICAgfVxuICB9Il19