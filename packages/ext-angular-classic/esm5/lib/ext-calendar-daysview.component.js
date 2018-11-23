/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var calendar_daysviewMetaData = /** @class */ (function () {
    function calendar_daysviewMetaData() {
    }
    calendar_daysviewMetaData.XTYPE = 'calendar-daysview';
    calendar_daysviewMetaData.PROPERTIESOBJECT = {
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
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    calendar_daysviewMetaData.PROPERTIES = [
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
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    calendar_daysviewMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeeventadd', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-daysview,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-daysview,context' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'calendar-daysview,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'eventadd', parameters: 'calendar-daysview,context' },
        { name: 'eventdrop', parameters: 'calendar-daysview,context' },
        { name: 'eventedit', parameters: 'calendar-daysview,context' },
        { name: 'eventresize', parameters: 'calendar-daysview,context' },
        { name: 'eventtap', parameters: 'calendar-daysview,context' },
        { name: 'focus', parameters: 'calendar-daysview,event' },
        { name: 'focusenter', parameters: 'calendar-daysview,event' },
        { name: 'focusleave', parameters: 'calendar-daysview,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'validateeventadd', parameters: 'calendar-daysview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-daysview,context' },
        { name: 'validateeventedit', parameters: 'calendar-daysview,context' },
        { name: 'validateeventresize', parameters: 'calendar-daysview,context' },
        { name: 'valuechange', parameters: 'calendar-daysview,context' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    calendar_daysviewMetaData.EVENTNAMES = [
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
    return calendar_daysviewMetaData;
}());
export { calendar_daysviewMetaData };
if (false) {
    /** @type {?} */
    calendar_daysviewMetaData.XTYPE;
    /** @type {?} */
    calendar_daysviewMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    calendar_daysviewMetaData.PROPERTIES;
    /** @type {?} */
    calendar_daysviewMetaData.EVENTS;
    /** @type {?} */
    calendar_daysviewMetaData.EVENTNAMES;
}
var ExtCalendar_daysviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_daysviewComponent, _super);
    function ExtCalendar_daysviewComponent(eRef) {
        return _super.call(this, eRef, calendar_daysviewMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtCalendar_daysviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(calendar_daysviewMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtCalendar_daysviewComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtCalendar_daysviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-daysview',
                    inputs: calendar_daysviewMetaData.PROPERTIES,
                    outputs: calendar_daysviewMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtCalendar_daysviewComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtCalendar_daysviewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtCalendar_daysviewComponent;
}(base));
export { ExtCalendar_daysviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWRheXN2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtY2FsZW5kYXItZGF5c3ZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTRMQSxDQUFDO0lBM0xlLCtCQUFLLEdBQVcsbUJBQW1CLENBQUM7SUFDcEMsMENBQWdCLEdBQVE7UUFDcEMsU0FBUyxFQUFFLFFBQVE7UUFDbkIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsWUFBWSxFQUFFLHNDQUFzQztRQUNwRCxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsVUFBVSxFQUFFLFNBQVM7UUFDckIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsU0FBUztRQUN0QixVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTLEVBQUUsUUFBUTtRQUNuQixlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsUUFBUTtRQUN6QixVQUFVLEVBQUUsUUFBUTtRQUNwQixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLFFBQVEsRUFBRSww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RTs7Ozs7SUFDbkUsMERBQWtCOzs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxVQUFVO29CQUM1QyxPQUFPLEVBQUUseUJBQXlCLENBQUMsVUFBVTtvQkFDN0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDZCQUE2QixFQUE3QixDQUE2QixDQUFDLEVBQUMsQ0FBQztvQkFDMUYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBdk1DLFVBQVU7O0lBZ05aLG9DQUFDO0NBQUEsQUFmRCxDQU9tRCxJQUFJLEdBUXREO1NBUlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY2FsZW5kYXJfZGF5c3ZpZXdNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYWxlbmRhci1kYXlzdmlldyc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWRkRm9ybVwiOiBcIk9iamVjdFwiLFxuICAgIFwiYWxsb3dTZWxlY3Rpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb21wYWN0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29tcGFjdE9wdGlvbnNcIjogXCJPYmplY3RcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImNvbnRyb2xTdG9yZVJhbmdlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc3BsYXlPdmVybGFwXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZHJvcHBhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZWRpdEZvcm1cIjogXCJPYmplY3RcIixcbiAgICBcImVuZFRpbWVcIjogXCJOdW1iZXJcIixcbiAgICBcImV2ZW50RGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJnZXN0dXJlTmF2aWdhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlYWRlclwiOiBcIkV4dC5jYWxlbmRhci5oZWFkZXIuQmFzZVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuRWxlbWVudFwiLFxuICAgIFwicmVzaXplRXZlbnRzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dOb3dNYXJrZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzdGFydFRpbWVcIjogXCJOdW1iZXJcIixcbiAgICBcInN0b3JlXCI6IFwiT2JqZWN0L0V4dC5jYWxlbmRhci5zdG9yZS5DYWxlbmRhcnNcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGltZUZvcm1hdFwiOiBcIlN0cmluZ1wiLFxuICAgIFwidGltZVJlbmRlcmVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInRpbWV6b25lT2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmFsdWVcIjogXCJEYXRlXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ2aXNpYmxlRGF5c1wiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkZEZvcm0nLFxuICAgICdhbGxvd1NlbGVjdGlvbicsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2xzJyxcbiAgICAnY29tcGFjdCcsXG4gICAgJ2NvbXBhY3RPcHRpb25zJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2NvbnRyb2xTdG9yZVJhbmdlJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXlPdmVybGFwJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZHJvcHBhYmxlJyxcbiAgICAnZWRpdEZvcm0nLFxuICAgICdlbmRUaW1lJyxcbiAgICAnZXZlbnREZWZhdWx0cycsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2dlc3R1cmVOYXZpZ2F0aW9uJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNpemVFdmVudHMnLFxuICAgICdyaXBwbGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3Nob3dOb3dNYXJrZXInLFxuICAgICdzdGFydFRpbWUnLFxuICAgICdzdG9yZScsXG4gICAgJ3N0eWxlJyxcbiAgICAndGltZUZvcm1hdCcsXG4gICAgJ3RpbWVSZW5kZXJlcicsXG4gICAgJ3RpbWV6b25lT2Zmc2V0JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAndmlzaWJsZURheXMnLFxuICAgICd3aWR0aCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudGRyYWdzdGFydCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRyZXNpemVzdGFydCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRkcm9wJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50ZWRpdCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudHJlc2l6ZScscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudHRhcCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWxpZGF0ZWV2ZW50ZHJvcCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWxpZGF0ZWV2ZW50ZWRpdCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWxpZGF0ZWV2ZW50cmVzaXplJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbHVlY2hhbmdlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWV2ZW50YWRkJyxcblx0XHQnYmVmb3JlZXZlbnRkcmFnc3RhcnQnLFxuXHRcdCdiZWZvcmVldmVudGVkaXQnLFxuXHRcdCdiZWZvcmVldmVudHJlc2l6ZXN0YXJ0Jyxcblx0XHQnYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlaGlkZGVuY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdldmVudGFkZCcsXG5cdFx0J2V2ZW50ZHJvcCcsXG5cdFx0J2V2ZW50ZWRpdCcsXG5cdFx0J2V2ZW50cmVzaXplJyxcblx0XHQnZXZlbnR0YXAnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQndmFsaWRhdGVldmVudGFkZCcsXG5cdFx0J3ZhbGlkYXRlZXZlbnRkcm9wJyxcblx0XHQndmFsaWRhdGVldmVudGVkaXQnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50cmVzaXplJyxcblx0XHQndmFsdWVjaGFuZ2UnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWRheXN2aWV3JywgXG4gIGlucHV0czogY2FsZW5kYXJfZGF5c3ZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjYWxlbmRhcl9kYXlzdmlld01ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9kYXlzdmlld0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX2RheXN2aWV3Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsY2FsZW5kYXJfZGF5c3ZpZXdNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoY2FsZW5kYXJfZGF5c3ZpZXdNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==