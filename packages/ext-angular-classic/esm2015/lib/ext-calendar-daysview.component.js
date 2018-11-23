/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class calendar_daysviewMetaData {
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
export class ExtCalendar_daysviewComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, calendar_daysviewMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(calendar_daysviewMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtCalendar_daysviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-daysview',
                inputs: calendar_daysviewMetaData.PROPERTIES,
                outputs: calendar_daysviewMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtCalendar_daysviewComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtCalendar_daysviewComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWRheXN2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtY2FsZW5kYXItZGF5c3ZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8seUJBQXlCOztBQUN0QiwrQkFBSyxHQUFXLG1CQUFtQixDQUFDO0FBQ3BDLDBDQUFnQixHQUFRO0lBQ3BDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsV0FBVyxFQUFFLFNBQVM7SUFDdEIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsZUFBZSxFQUFFLFFBQVE7SUFDekIsZUFBZSxFQUFFLFFBQVE7SUFDekIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixRQUFRLEVBQUUs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QkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBZEosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxVQUFVO2dCQUM1QyxPQUFPLEVBQUUseUJBQXlCLENBQUMsVUFBVTtnQkFDN0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNkJBQTZCLENBQUMsRUFBQyxDQUFDO2dCQUMxRixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBdk1DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl9kYXlzdmlld01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NhbGVuZGFyLWRheXN2aWV3JztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGRGb3JtXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhbGxvd1NlbGVjdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbXBhY3RcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb21wYWN0T3B0aW9uc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiY29udHJvbFN0b3JlUmFuZ2VcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzcGxheU92ZXJsYXBcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkcm9wcGFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJlZGl0Rm9ybVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZW5kVGltZVwiOiBcIk51bWJlclwiLFxuICAgIFwiZXZlbnREZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImdlc3R1cmVOYXZpZ2F0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGVhZGVyXCI6IFwiRXh0LmNhbGVuZGFyLmhlYWRlci5CYXNlXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImluc3RhbmNlQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5FbGVtZW50XCIsXG4gICAgXCJyZXNpemVFdmVudHNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hvd05vd01hcmtlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0YXJ0VGltZVwiOiBcIk51bWJlclwiLFxuICAgIFwic3RvcmVcIjogXCJPYmplY3QvRXh0LmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0aW1lRm9ybWF0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0aW1lUmVuZGVyZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwidGltZXpvbmVPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIkRhdGVcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcInZpc2libGVEYXlzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWRkRm9ybScsXG4gICAgJ2FsbG93U2VsZWN0aW9uJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjbHMnLFxuICAgICdjb21wYWN0JyxcbiAgICAnY29tcGFjdE9wdGlvbnMnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnY29udHJvbFN0b3JlUmFuZ2UnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzcGxheU92ZXJsYXAnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdkcm9wcGFibGUnLFxuICAgICdlZGl0Rm9ybScsXG4gICAgJ2VuZFRpbWUnLFxuICAgICdldmVudERlZmF1bHRzJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZ2VzdHVyZU5hdmlnYXRpb24nLFxuICAgICdoZWFkZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3Jlc2l6ZUV2ZW50cycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hvd05vd01hcmtlcicsXG4gICAgJ3N0YXJ0VGltZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aW1lRm9ybWF0JyxcbiAgICAndGltZVJlbmRlcmVyJyxcbiAgICAndGltZXpvbmVPZmZzZXQnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd2aXNpYmxlRGF5cycsXG4gICAgJ3dpZHRoJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50ZWRpdCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudHJlc2l6ZXN0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudGRyb3AnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50cmVzaXplJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50dGFwJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid2YWxpZGF0ZWV2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRkcm9wJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRyZXNpemUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsdWVjaGFuZ2UnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZXZlbnRhZGQnLFxuXHRcdCdiZWZvcmVldmVudGRyYWdzdGFydCcsXG5cdFx0J2JlZm9yZWV2ZW50ZWRpdCcsXG5cdFx0J2JlZm9yZWV2ZW50cmVzaXplc3RhcnQnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2V2ZW50YWRkJyxcblx0XHQnZXZlbnRkcm9wJyxcblx0XHQnZXZlbnRlZGl0Jyxcblx0XHQnZXZlbnRyZXNpemUnLFxuXHRcdCdldmVudHRhcCcsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50YWRkJyxcblx0XHQndmFsaWRhdGVldmVudGRyb3AnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50ZWRpdCcsXG5cdFx0J3ZhbGlkYXRlZXZlbnRyZXNpemUnLFxuXHRcdCd2YWx1ZWNoYW5nZScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItZGF5c3ZpZXcnLCBcbiAgaW5wdXRzOiBjYWxlbmRhcl9kYXlzdmlld01ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGNhbGVuZGFyX2RheXN2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX2RheXN2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfZGF5c3ZpZXdDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixjYWxlbmRhcl9kYXlzdmlld01ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjYWxlbmRhcl9kYXlzdmlld01ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19