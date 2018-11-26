/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var calendar_weekviewMetaData = /** @class */ (function () {
    function calendar_weekviewMetaData() {
    }
    calendar_weekviewMetaData.XTYPE = 'calendar-weekview';
    calendar_weekviewMetaData.PROPERTIESOBJECT = {
        "addForm": "Object",
        "allowSelection": "Boolean",
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "bind": "Object/String",
        "border": "Boolean",
        "cls": "String/String[]",
        "compact": "Boolean",
        "compactOptions": "Object",
        "controller": "String/Object/Ext.app.ViewController",
        "controlStoreRange": "Boolean",
        "defaultListenerScope": "Boolean",
        "disabled": "Boolean",
        "displayOverlap": "Boolean",
        "draggable": "Boolean",
        "droppable": "Boolean",
        "editForm": "Object",
        "endTime": "Number",
        "eventDefaults": "Object",
        "eventHandlers": "Object",
        "firstDayOfWeek": "Number",
        "focusCls": "String",
        "gestureNavigation": "Boolean",
        "header": "Ext.calendar.header.Base",
        "height": "Number/String",
        "hidden": "Boolean",
        "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
        "instanceCls": "String/String[]",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "listeners": "Object",
        "name": "String",
        "nameable": "Boolean",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "reference": "String",
        "renderTo": "Ext.Element",
        "resizeEvents": "Boolean",
        "ripple": "Boolean/Object/String",
        "session": "Boolean/Object/Ext.data.Session",
        "shareableName": "Boolean",
        "showNowMarker": "Boolean",
        "startTime": "Number",
        "store": "Object/Ext.calendar.store.Calendars",
        "style": "String/Object",
        "timeFormat": "String",
        "timeRenderer": "Function",
        "timezoneOffset": "Number",
        "touchAction": "Object",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String/String[]",
        "userCls": "String/String[]",
        "value": "Date",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "visibleDays": "Number",
        "width": "Number/String",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    calendar_weekviewMetaData.PROPERTIES = [
        'addForm',
        'allowSelection',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'bind',
        'border',
        'cls',
        'compact',
        'compactOptions',
        'controller',
        'controlStoreRange',
        'defaultListenerScope',
        'disabled',
        'displayOverlap',
        'draggable',
        'droppable',
        'editForm',
        'endTime',
        'eventDefaults',
        'eventHandlers',
        'firstDayOfWeek',
        'focusCls',
        'gestureNavigation',
        'header',
        'height',
        'hidden',
        'hideMode',
        'instanceCls',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'listeners',
        'name',
        'nameable',
        'plugins',
        'publishes',
        'reference',
        'renderTo',
        'resizeEvents',
        'ripple',
        'session',
        'shareableName',
        'showNowMarker',
        'startTime',
        'store',
        'style',
        'timeFormat',
        'timeRenderer',
        'timezoneOffset',
        'touchAction',
        'twoWayBindable',
        'ui',
        'userCls',
        'value',
        'viewModel',
        'visibleDays',
        'width',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    calendar_weekviewMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeeventadd', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-weekview,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-weekview,context' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'calendar-weekview,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'eventadd', parameters: 'calendar-weekview,context' },
        { name: 'eventdrop', parameters: 'calendar-weekview,context' },
        { name: 'eventedit', parameters: 'calendar-weekview,context' },
        { name: 'eventresize', parameters: 'calendar-weekview,context' },
        { name: 'eventtap', parameters: 'calendar-weekview,context' },
        { name: 'focus', parameters: 'calendar-weekview,event' },
        { name: 'focusenter', parameters: 'calendar-weekview,event' },
        { name: 'focusleave', parameters: 'calendar-weekview,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'validateeventadd', parameters: 'calendar-weekview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-weekview,context' },
        { name: 'validateeventedit', parameters: 'calendar-weekview,context' },
        { name: 'validateeventresize', parameters: 'calendar-weekview,context' },
        { name: 'valuechange', parameters: 'calendar-weekview,context' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    calendar_weekviewMetaData.EVENTNAMES = [
        'beforedisabledchange',
        'beforeeventadd',
        'beforeeventdragstart',
        'beforeeventedit',
        'beforeeventresizestart',
        'beforeheightchange',
        'beforehiddenchange',
        'beforewidthchange',
        'blur',
        'disabledchange',
        'eventadd',
        'eventdrop',
        'eventedit',
        'eventresize',
        'eventtap',
        'focus',
        'focusenter',
        'focusleave',
        'heightchange',
        'hiddenchange',
        'validateeventadd',
        'validateeventdrop',
        'validateeventedit',
        'validateeventresize',
        'valuechange',
        'widthchange',
        'ready'
    ];
    return calendar_weekviewMetaData;
}());
export { calendar_weekviewMetaData };
if (false) {
    /** @type {?} */
    calendar_weekviewMetaData.XTYPE;
    /** @type {?} */
    calendar_weekviewMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    calendar_weekviewMetaData.PROPERTIES;
    /** @type {?} */
    calendar_weekviewMetaData.EVENTS;
    /** @type {?} */
    calendar_weekviewMetaData.EVENTNAMES;
}
var ExtCalendar_weekviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_weekviewComponent, _super);
    function ExtCalendar_weekviewComponent(eRef) {
        return _super.call(this, eRef, calendar_weekviewMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtCalendar_weekviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(calendar_weekviewMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtCalendar_weekviewComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtCalendar_weekviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-weekview',
                    inputs: calendar_weekviewMetaData.PROPERTIES,
                    outputs: calendar_weekviewMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtCalendar_weekviewComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtCalendar_weekviewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtCalendar_weekviewComponent;
}(base));
export { ExtCalendar_weekviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLXdlZWt2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYWxlbmRhci13ZWVrdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBNExBLENBQUM7SUEzTGUsK0JBQUssR0FBVyxtQkFBbUIsQ0FBQztJQUNwQywwQ0FBZ0IsR0FBUTtRQUNwQyxTQUFTLEVBQUUsUUFBUTtRQUNuQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixZQUFZLEVBQUUsc0NBQXNDO1FBQ3BELG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxVQUFVLEVBQUUsU0FBUztRQUNyQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFVBQVUsRUFBRSxtREFBbUQ7UUFDL0QsYUFBYSxFQUFFLGlCQUFpQjtRQUNoQyxRQUFRLEVBQUUsUUFBUTtRQUNsQixlQUFlLEVBQUUsU0FBUztRQUMxQixjQUFjLEVBQUUsUUFBUTtRQUN4QixXQUFXLEVBQUUsUUFBUTtRQUNyQixNQUFNLEVBQUUsUUFBUTtRQUNoQixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsbURBQW1EO1FBQzlELFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsV0FBVyxFQUFFLFFBQVE7UUFDckIsVUFBVSxFQUFFLGFBQWE7UUFDekIsY0FBYyxFQUFFLFNBQVM7UUFDekIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxTQUFTLEVBQUUsaUNBQWlDO1FBQzVDLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLE9BQU8sRUFBRSxxQ0FBcUM7UUFDOUMsT0FBTyxFQUFFLGVBQWU7UUFDeEIsWUFBWSxFQUFFLFFBQVE7UUFDdEIsY0FBYyxFQUFFLFVBQVU7UUFDMUIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixhQUFhLEVBQUUsUUFBUTtRQUN2QixnQkFBZ0IsRUFBRSx3QkFBd0I7UUFDMUMsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsV0FBVyxFQUFFLGlDQUFpQztRQUM5QyxhQUFhLEVBQUUsUUFBUTtRQUN2QixPQUFPLEVBQUUsZUFBZTtRQUN4QixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUM7SUFDYyxvQ0FBVSxHQUFhO1FBQ25DLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLE1BQU07UUFDTixRQUFRO1FBQ1IsS0FBSztRQUNMLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7UUFDVixTQUFTO1FBQ1QsZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixVQUFVO1FBQ1YsYUFBYTtRQUNiLFFBQVE7UUFDUixlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxNQUFNO1FBQ04sVUFBVTtRQUNWLFNBQVM7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO1FBQ2QsUUFBUTtRQUNSLFNBQVM7UUFDVCxlQUFlO1FBQ2YsZUFBZTtRQUNmLFdBQVc7UUFDWCxPQUFPO1FBQ1AsT0FBTztRQUNQLFlBQVk7UUFDWixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsSUFBSTtRQUNKLFNBQVM7UUFDVCxPQUFPO1FBQ1AsV0FBVztRQUNYLGFBQWE7UUFDYixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixRQUFRO0tBQ1gsQ0FBQztJQUNjLGdDQUFNLEdBQVU7UUFDOUIsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzFFLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQywyQkFBMkIsRUFBQztRQUM5RCxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsMkJBQTJCLEVBQUM7UUFDcEUsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLDJCQUEyQixFQUFDO1FBQy9ELEVBQUMsSUFBSSxFQUFDLHdCQUF3QixFQUFDLFVBQVUsRUFBQywyQkFBMkIsRUFBQztRQUN0RSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDeEUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN2RSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLHlCQUF5QixFQUFDO1FBQ2xELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUMxRCxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLDJCQUEyQixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsMkJBQTJCLEVBQUM7UUFDekQsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQywyQkFBMkIsRUFBQztRQUN6RCxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLDJCQUEyQixFQUFDO1FBQzNELEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsMkJBQTJCLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyx5QkFBeUIsRUFBQztRQUNuRCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLHlCQUF5QixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMseUJBQXlCLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQywyQkFBMkIsRUFBQztRQUNoRSxFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsMkJBQTJCLEVBQUM7UUFDakUsRUFBQyxJQUFJLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLDJCQUEyQixFQUFDO1FBQ2pFLEVBQUMsSUFBSSxFQUFDLHFCQUFxQixFQUFDLFVBQVUsRUFBQywyQkFBMkIsRUFBQztRQUNuRSxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLDJCQUEyQixFQUFDO1FBQzNELEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDdkQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDN0IsQ0FBQztJQUNjLG9DQUFVLEdBQWE7UUFDckMsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixNQUFNO1FBQ04sZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7UUFDYixVQUFVO1FBQ1YsT0FBTztRQUNQLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLGFBQWE7UUFDYixPQUFPO0tBQ1IsQ0FBQztJQUNGLGdDQUFDO0NBQUEsQUE1TEQsSUE0TEM7U0E1TFkseUJBQXlCOzs7SUFDcEMsZ0NBQWtEOztJQUNsRCwyQ0ErREE7O0lBQ0EscUNBK0RBOztJQUNBLGlDQTRCQTs7SUFDQSxxQ0E0QkE7O0FBRUY7SUFPbUQseURBQUk7SUFDckQsdUNBQVksSUFBZTtlQUFHLGtCQUFNLElBQUksRUFBQyx5QkFBeUIsQ0FBQztJQUFBLENBQUM7Ozs7SUFDN0QsZ0RBQVE7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDOUQsMEVBQTBFOzs7OztJQUNuRSwwREFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsTUFBTSxFQUFFLHlCQUF5QixDQUFDLFVBQVU7b0JBQzVDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxVQUFVO29CQUM3QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNkJBQTZCLEVBQTdCLENBQTZCLENBQUMsRUFBQyxDQUFDO29CQUMxRixRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkF2TUMsVUFBVTs7SUFnTlosb0NBQUM7Q0FBQSxBQWZELENBT21ELElBQUksR0FRdEQ7U0FSWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl93ZWVrdmlld01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NhbGVuZGFyLXdlZWt2aWV3JztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGRGb3JtXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhbGxvd1NlbGVjdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbXBhY3RcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb21wYWN0T3B0aW9uc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiY29udHJvbFN0b3JlUmFuZ2VcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzcGxheU92ZXJsYXBcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkcm9wcGFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJlZGl0Rm9ybVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZW5kVGltZVwiOiBcIk51bWJlclwiLFxuICAgIFwiZXZlbnREZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZmlyc3REYXlPZldlZWtcIjogXCJOdW1iZXJcIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJnZXN0dXJlTmF2aWdhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlYWRlclwiOiBcIkV4dC5jYWxlbmRhci5oZWFkZXIuQmFzZVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuRWxlbWVudFwiLFxuICAgIFwicmVzaXplRXZlbnRzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dOb3dNYXJrZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzdGFydFRpbWVcIjogXCJOdW1iZXJcIixcbiAgICBcInN0b3JlXCI6IFwiT2JqZWN0L0V4dC5jYWxlbmRhci5zdG9yZS5DYWxlbmRhcnNcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGltZUZvcm1hdFwiOiBcIlN0cmluZ1wiLFxuICAgIFwidGltZVJlbmRlcmVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInRpbWV6b25lT2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmFsdWVcIjogXCJEYXRlXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ2aXNpYmxlRGF5c1wiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkZEZvcm0nLFxuICAgICdhbGxvd1NlbGVjdGlvbicsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2xzJyxcbiAgICAnY29tcGFjdCcsXG4gICAgJ2NvbXBhY3RPcHRpb25zJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2NvbnRyb2xTdG9yZVJhbmdlJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXlPdmVybGFwJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZHJvcHBhYmxlJyxcbiAgICAnZWRpdEZvcm0nLFxuICAgICdlbmRUaW1lJyxcbiAgICAnZXZlbnREZWZhdWx0cycsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdmaXJzdERheU9mV2VlaycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZ2VzdHVyZU5hdmlnYXRpb24nLFxuICAgICdoZWFkZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3Jlc2l6ZUV2ZW50cycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hvd05vd01hcmtlcicsXG4gICAgJ3N0YXJ0VGltZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aW1lRm9ybWF0JyxcbiAgICAndGltZVJlbmRlcmVyJyxcbiAgICAndGltZXpvbmVPZmZzZXQnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd2aXNpYmxlRGF5cycsXG4gICAgJ3dpZHRoJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRkcmFnc3RhcnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50cmVzaXplc3RhcnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2V2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50ZHJvcCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRyZXNpemUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnR0YXAnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudGRyb3AnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudHJlc2l6ZScscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWx1ZWNoYW5nZScscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVldmVudGFkZCcsXG5cdFx0J2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0Jyxcblx0XHQnYmVmb3JlZXZlbnRlZGl0Jyxcblx0XHQnYmVmb3JlZXZlbnRyZXNpemVzdGFydCcsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZXZlbnRhZGQnLFxuXHRcdCdldmVudGRyb3AnLFxuXHRcdCdldmVudGVkaXQnLFxuXHRcdCdldmVudHJlc2l6ZScsXG5cdFx0J2V2ZW50dGFwJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J3ZhbGlkYXRlZXZlbnRhZGQnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50ZHJvcCcsXG5cdFx0J3ZhbGlkYXRlZXZlbnRlZGl0Jyxcblx0XHQndmFsaWRhdGVldmVudHJlc2l6ZScsXG5cdFx0J3ZhbHVlY2hhbmdlJyxcblx0XHQnd2lkdGhjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci13ZWVrdmlldycsIFxuICBpbnB1dHM6IGNhbGVuZGFyX3dlZWt2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FsZW5kYXJfd2Vla3ZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfd2Vla3ZpZXdDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl93ZWVrdmlld0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGNhbGVuZGFyX3dlZWt2aWV3TWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNhbGVuZGFyX3dlZWt2aWV3TWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=