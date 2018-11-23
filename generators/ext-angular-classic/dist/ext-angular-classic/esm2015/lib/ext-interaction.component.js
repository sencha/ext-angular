/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class interactionMetaData {
}
interactionMetaData.XTYPE = 'interaction';
interactionMetaData.PROPERTIESOBJECT = {
    "chart": "Ext.chart.AbstractChart",
    "enabled": "Boolean",
    "gesture": "Object",
    "listeners": "Object",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
interactionMetaData.PROPERTIES = [
    'chart',
    'enabled',
    'gesture',
    'listeners',
    'platformConfig',
    'fitToParent',
    'config'
];
interactionMetaData.EVENTS = [
    { name: 'ready', parameters: '' }
];
interactionMetaData.EVENTNAMES = [
    'ready'
];
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
export class ExtInteractionComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, interactionMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(interactionMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtInteractionComponent.decorators = [
    { type: Component, args: [{
                selector: 'interaction',
                inputs: interactionMetaData.PROPERTIES,
                outputs: interactionMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtInteractionComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtInteractionComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtaW50ZXJhY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sbUJBQW1COztBQUNoQix5QkFBSyxHQUFXLGFBQWEsQ0FBQztBQUM5QixvQ0FBZ0IsR0FBUTtJQUNwQyxPQUFPLEVBQUUseUJBQXlCO0lBQ2xDLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsYUFBYSxFQUFFLFNBQVM7SUFDeEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUNjLDhCQUFVLEdBQWE7SUFDbkMsT0FBTztJQUNQLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsUUFBUTtDQUNYLENBQUM7QUFDYywwQkFBTSxHQUFVO0lBQzlCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0NBQzdCLENBQUM7QUFDYyw4QkFBVSxHQUFhO0lBQ3JDLE9BQU87Q0FDUixDQUFDOzs7SUF4QkEsMEJBQTRDOztJQUM1QyxxQ0FRQTs7SUFDQSwrQkFRQTs7SUFDQSwyQkFFQTs7SUFDQSwrQkFFQTs7QUFTRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsSUFBSTs7OztJQUMvQyxZQUFZLElBQWUsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7O0lBQ3ZELFFBQVEsS0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7OztJQUVqRCxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOzs7WUFkSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO2dCQUN0QyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtnQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBQyxDQUFDO2dCQUNwRixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBckNDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBpbnRlcmFjdGlvbk1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2ludGVyYWN0aW9uJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJjaGFydFwiOiBcIkV4dC5jaGFydC5BYnN0cmFjdENoYXJ0XCIsXG4gICAgXCJlbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZ2VzdHVyZVwiOiBcIk9iamVjdFwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2NoYXJ0JyxcbiAgICAnZW5hYmxlZCcsXG4gICAgJ2dlc3R1cmUnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ludGVyYWN0aW9uJywgXG4gIGlucHV0czogaW50ZXJhY3Rpb25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBpbnRlcmFjdGlvbk1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRJbnRlcmFjdGlvbkNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEludGVyYWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsaW50ZXJhY3Rpb25NZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoaW50ZXJhY3Rpb25NZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==