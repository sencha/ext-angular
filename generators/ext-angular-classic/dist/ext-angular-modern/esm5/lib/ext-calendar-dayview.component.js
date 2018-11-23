/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var calendar_dayviewMetaData = /** @class */ (function () {
    function calendar_dayviewMetaData() {
    }
    calendar_dayviewMetaData.XTYPE = 'calendar-dayview';
    calendar_dayviewMetaData.PROPERTIESOBJECT = {
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
        "fitToParent": "Boolean",
        "config": "Object",
    };
    calendar_dayviewMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    calendar_dayviewMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeeventadd', parameters: 'calendar-dayview,context' },
        { name: 'beforeeventdragstart', parameters: 'calendar-dayview,context' },
        { name: 'beforeeventedit', parameters: 'calendar-dayview,context' },
        { name: 'beforeeventresizestart', parameters: 'calendar-dayview,context' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'calendar-dayview,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'eventadd', parameters: 'calendar-dayview,context' },
        { name: 'eventdrop', parameters: 'calendar-dayview,context' },
        { name: 'eventedit', parameters: 'calendar-dayview,context' },
        { name: 'eventresize', parameters: 'calendar-dayview,context' },
        { name: 'eventtap', parameters: 'calendar-dayview,context' },
        { name: 'focus', parameters: 'calendar-dayview,event' },
        { name: 'focusenter', parameters: 'calendar-dayview,event' },
        { name: 'focusleave', parameters: 'calendar-dayview,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'validateeventadd', parameters: 'calendar-dayview,context' },
        { name: 'validateeventdrop', parameters: 'calendar-dayview,context' },
        { name: 'validateeventedit', parameters: 'calendar-dayview,context' },
        { name: 'validateeventresize', parameters: 'calendar-dayview,context' },
        { name: 'valuechange', parameters: 'calendar-dayview,context' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    calendar_dayviewMetaData.EVENTNAMES = [
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
    return calendar_dayviewMetaData;
}());
export { calendar_dayviewMetaData };
if (false) {
    /** @type {?} */
    calendar_dayviewMetaData.XTYPE;
    /** @type {?} */
    calendar_dayviewMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    calendar_dayviewMetaData.PROPERTIES;
    /** @type {?} */
    calendar_dayviewMetaData.EVENTS;
    /** @type {?} */
    calendar_dayviewMetaData.EVENTNAMES;
}
var ExtCalendar_dayviewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_dayviewComponent, _super);
    function ExtCalendar_dayviewComponent(eRef) {
        return _super.call(this, eRef, calendar_dayviewMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtCalendar_dayviewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(calendar_dayviewMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtCalendar_dayviewComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtCalendar_dayviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-dayview',
                    inputs: calendar_dayviewMetaData.PROPERTIES,
                    outputs: calendar_dayviewMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtCalendar_dayviewComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtCalendar_dayviewComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtCalendar_dayviewComponent;
}(base));
export { ExtCalendar_dayviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWRheXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LWNhbGVuZGFyLWRheXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTBMQSxDQUFDO0lBekxlLDhCQUFLLEdBQVcsa0JBQWtCLENBQUM7SUFDbkMseUNBQWdCLEdBQVE7UUFDcEMsU0FBUyxFQUFFLFFBQVE7UUFDbkIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsWUFBWSxFQUFFLHNDQUFzQztRQUNwRCxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsVUFBVSxFQUFFLFNBQVM7UUFDckIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixXQUFXLEVBQUUsU0FBUztRQUN0QixXQUFXLEVBQUUsU0FBUztRQUN0QixVQUFVLEVBQUUsUUFBUTtRQUNwQixTQUFTLEVBQUUsUUFBUTtRQUNuQixlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsUUFBUTtRQUN6QixVQUFVLEVBQUUsUUFBUTtRQUNwQixtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLFFBQVEsRUFBRSwwQkFB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Q0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO29CQUMzQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsVUFBVTtvQkFDNUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDRCQUE0QixFQUE1QixDQUE0QixDQUFDLEVBQUMsQ0FBQztvQkFDekYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBck1DLFVBQVU7O0lBOE1aLG1DQUFDO0NBQUEsQUFmRCxDQU9rRCxJQUFJLEdBUXJEO1NBUlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY2FsZW5kYXJfZGF5dmlld01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NhbGVuZGFyLWRheXZpZXcnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFkZEZvcm1cIjogXCJPYmplY3RcIixcbiAgICBcImFsbG93U2VsZWN0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29tcGFjdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbXBhY3RPcHRpb25zXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJjb250cm9sU3RvcmVSYW5nZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNwbGF5T3ZlcmxhcFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRyb3BwYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImVkaXRGb3JtXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJlbmRUaW1lXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJldmVudERlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJldmVudEhhbmRsZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZ2VzdHVyZU5hdmlnYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWFkZXJcIjogXCJFeHQuY2FsZW5kYXIuaGVhZGVyLkJhc2VcIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbmRlclRvXCI6IFwiRXh0LkVsZW1lbnRcIixcbiAgICBcInJlc2l6ZUV2ZW50c1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93Tm93TWFya2VyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic3RhcnRUaW1lXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzdG9yZVwiOiBcIk9iamVjdC9FeHQuY2FsZW5kYXIuc3RvcmUuQ2FsZW5kYXJzXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRpbWVGb3JtYXRcIjogXCJTdHJpbmdcIixcbiAgICBcInRpbWVSZW5kZXJlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJ0aW1lem9uZU9mZnNldFwiOiBcIk51bWJlclwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZhbHVlXCI6IFwiRGF0ZVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwidmlzaWJsZURheXNcIjogXCJOdW1iZXJcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhZGRGb3JtJyxcbiAgICAnYWxsb3dTZWxlY3Rpb24nLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NscycsXG4gICAgJ2NvbXBhY3QnLFxuICAgICdjb21wYWN0T3B0aW9ucycsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdjb250cm9sU3RvcmVSYW5nZScsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5T3ZlcmxhcCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2Ryb3BwYWJsZScsXG4gICAgJ2VkaXRGb3JtJyxcbiAgICAnZW5kVGltZScsXG4gICAgJ2V2ZW50RGVmYXVsdHMnLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdnZXN0dXJlTmF2aWdhdGlvbicsXG4gICAgJ2hlYWRlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVzaXplRXZlbnRzJyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaG93Tm93TWFya2VyJyxcbiAgICAnc3RhcnRUaW1lJyxcbiAgICAnc3RvcmUnLFxuICAgICdzdHlsZScsXG4gICAgJ3RpbWVGb3JtYXQnLFxuICAgICd0aW1lUmVuZGVyZXInLFxuICAgICd0aW1lem9uZU9mZnNldCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3Zpc2libGVEYXlzJyxcbiAgICAnd2lkdGgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRyZXNpemVzdGFydCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2V2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRkcm9wJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRyZXNpemUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudHRhcCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid2YWxpZGF0ZWV2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudGRyb3AnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWxpZGF0ZWV2ZW50ZWRpdCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRyZXNpemUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWx1ZWNoYW5nZScscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWV2ZW50YWRkJyxcblx0XHQnYmVmb3JlZXZlbnRkcmFnc3RhcnQnLFxuXHRcdCdiZWZvcmVldmVudGVkaXQnLFxuXHRcdCdiZWZvcmVldmVudHJlc2l6ZXN0YXJ0Jyxcblx0XHQnYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlaGlkZGVuY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdldmVudGFkZCcsXG5cdFx0J2V2ZW50ZHJvcCcsXG5cdFx0J2V2ZW50ZWRpdCcsXG5cdFx0J2V2ZW50cmVzaXplJyxcblx0XHQnZXZlbnR0YXAnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQndmFsaWRhdGVldmVudGFkZCcsXG5cdFx0J3ZhbGlkYXRlZXZlbnRkcm9wJyxcblx0XHQndmFsaWRhdGVldmVudGVkaXQnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50cmVzaXplJyxcblx0XHQndmFsdWVjaGFuZ2UnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWRheXZpZXcnLCBcbiAgaW5wdXRzOiBjYWxlbmRhcl9kYXl2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FsZW5kYXJfZGF5dmlld01ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9kYXl2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfZGF5dmlld0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGNhbGVuZGFyX2RheXZpZXdNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoY2FsZW5kYXJfZGF5dmlld01ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19