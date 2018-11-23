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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLXdlZWt2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtY2FsZW5kYXItd2Vla3ZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTRMQSxDQUFDO0lBM0xlLCtCQUFLLEdBQVcsbUJBQW1CLENBQUM7SUFDcEMsMENBQWdCLEdBQVE7UUFDcEMsU0FBUyxFQUFFLFFBQVE7UUFDbkIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsWUFBWSxFQUFFLHNDQUFzQztRQUNwRCxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsVUFBVSxFQUFFLFNBQVM7UUFDckIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsU0FBUztRQUN0QixVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTLEVBQUUsUUFBUTtRQUNuQixlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsUUFBUTtRQUN6QixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLG1CQUFtQixFQUFF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RTs7Ozs7SUFDbkUsMERBQWtCOzs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxVQUFVO29CQUM1QyxPQUFPLEVBQUUseUJBQXlCLENBQUMsVUFBVTtvQkFDN0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDZCQUE2QixFQUE3QixDQUE2QixDQUFDLEVBQUMsQ0FBQztvQkFDMUYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBdk1DLFVBQVU7O0lBZ05aLG9DQUFDO0NBQUEsQUFmRCxDQU9tRCxJQUFJLEdBUXREO1NBUlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY2FsZW5kYXJfd2Vla3ZpZXdNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYWxlbmRhci13ZWVrdmlldyc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWRkRm9ybVwiOiBcIk9iamVjdFwiLFxuICAgIFwiYWxsb3dTZWxlY3Rpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb21wYWN0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29tcGFjdE9wdGlvbnNcIjogXCJPYmplY3RcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImNvbnRyb2xTdG9yZVJhbmdlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc3BsYXlPdmVybGFwXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZHJvcHBhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZWRpdEZvcm1cIjogXCJPYmplY3RcIixcbiAgICBcImVuZFRpbWVcIjogXCJOdW1iZXJcIixcbiAgICBcImV2ZW50RGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImZpcnN0RGF5T2ZXZWVrXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZ2VzdHVyZU5hdmlnYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWFkZXJcIjogXCJFeHQuY2FsZW5kYXIuaGVhZGVyLkJhc2VcIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbmRlclRvXCI6IFwiRXh0LkVsZW1lbnRcIixcbiAgICBcInJlc2l6ZUV2ZW50c1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93Tm93TWFya2VyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic3RhcnRUaW1lXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzdG9yZVwiOiBcIk9iamVjdC9FeHQuY2FsZW5kYXIuc3RvcmUuQ2FsZW5kYXJzXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRpbWVGb3JtYXRcIjogXCJTdHJpbmdcIixcbiAgICBcInRpbWVSZW5kZXJlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJ0aW1lem9uZU9mZnNldFwiOiBcIk51bWJlclwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZhbHVlXCI6IFwiRGF0ZVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwidmlzaWJsZURheXNcIjogXCJOdW1iZXJcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhZGRGb3JtJyxcbiAgICAnYWxsb3dTZWxlY3Rpb24nLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NscycsXG4gICAgJ2NvbXBhY3QnLFxuICAgICdjb21wYWN0T3B0aW9ucycsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdjb250cm9sU3RvcmVSYW5nZScsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5T3ZlcmxhcCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2Ryb3BwYWJsZScsXG4gICAgJ2VkaXRGb3JtJyxcbiAgICAnZW5kVGltZScsXG4gICAgJ2V2ZW50RGVmYXVsdHMnLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZmlyc3REYXlPZldlZWsnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2dlc3R1cmVOYXZpZ2F0aW9uJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNpemVFdmVudHMnLFxuICAgICdyaXBwbGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3Nob3dOb3dNYXJrZXInLFxuICAgICdzdGFydFRpbWUnLFxuICAgICdzdG9yZScsXG4gICAgJ3N0eWxlJyxcbiAgICAndGltZUZvcm1hdCcsXG4gICAgJ3RpbWVSZW5kZXJlcicsXG4gICAgJ3RpbWV6b25lT2Zmc2V0JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAndmlzaWJsZURheXMnLFxuICAgICd3aWR0aCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50ZWRpdCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudHJlc2l6ZXN0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudGRyb3AnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50cmVzaXplJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50dGFwJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid2YWxpZGF0ZWV2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRkcm9wJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRyZXNpemUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsdWVjaGFuZ2UnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWt2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZXZlbnRhZGQnLFxuXHRcdCdiZWZvcmVldmVudGRyYWdzdGFydCcsXG5cdFx0J2JlZm9yZWV2ZW50ZWRpdCcsXG5cdFx0J2JlZm9yZWV2ZW50cmVzaXplc3RhcnQnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2V2ZW50YWRkJyxcblx0XHQnZXZlbnRkcm9wJyxcblx0XHQnZXZlbnRlZGl0Jyxcblx0XHQnZXZlbnRyZXNpemUnLFxuXHRcdCdldmVudHRhcCcsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50YWRkJyxcblx0XHQndmFsaWRhdGVldmVudGRyb3AnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50ZWRpdCcsXG5cdFx0J3ZhbGlkYXRlZXZlbnRyZXNpemUnLFxuXHRcdCd2YWx1ZWNoYW5nZScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItd2Vla3ZpZXcnLCBcbiAgaW5wdXRzOiBjYWxlbmRhcl93ZWVrdmlld01ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGNhbGVuZGFyX3dlZWt2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX3dlZWt2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfd2Vla3ZpZXdDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixjYWxlbmRhcl93ZWVrdmlld01ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjYWxlbmRhcl93ZWVrdmlld01ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19