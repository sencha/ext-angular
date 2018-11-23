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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWRheXN2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtY2FsZW5kYXItZGF5c3ZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8seUJBQXlCOztBQUN0QiwrQkFBSyxHQUFXLG1CQUFtQixDQUFDO0FBQ3BDLDBDQUFnQixHQUFRO0lBQ3BDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsV0FBVyxFQUFFLFNBQVM7SUFDdEIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsZUFBZSxFQUFFLFFBQVE7SUFDekIsZUFBZSxFQUFFLFFBQVE7SUFDekIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixRQUFRLEVBQUUs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LENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBZEosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxVQUFVO2dCQUM1QyxPQUFPLEVBQUUseUJBQXlCLENBQUMsVUFBVTtnQkFDN0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNkJBQTZCLENBQUMsRUFBQyxDQUFDO2dCQUMxRixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBck1DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl9kYXlzdmlld01ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NhbGVuZGFyLWRheXN2aWV3JztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhZGRGb3JtXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhbGxvd1NlbGVjdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbXBhY3RcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb21wYWN0T3B0aW9uc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiY29udHJvbFN0b3JlUmFuZ2VcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzcGxheU92ZXJsYXBcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkcm9wcGFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJlZGl0Rm9ybVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZW5kVGltZVwiOiBcIk51bWJlclwiLFxuICAgIFwiZXZlbnREZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImdlc3R1cmVOYXZpZ2F0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGVhZGVyXCI6IFwiRXh0LmNhbGVuZGFyLmhlYWRlci5CYXNlXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImluc3RhbmNlQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5FbGVtZW50XCIsXG4gICAgXCJyZXNpemVFdmVudHNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hvd05vd01hcmtlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0YXJ0VGltZVwiOiBcIk51bWJlclwiLFxuICAgIFwic3RvcmVcIjogXCJPYmplY3QvRXh0LmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0aW1lRm9ybWF0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0aW1lUmVuZGVyZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwidGltZXpvbmVPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIkRhdGVcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcInZpc2libGVEYXlzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWRkRm9ybScsXG4gICAgJ2FsbG93U2VsZWN0aW9uJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjbHMnLFxuICAgICdjb21wYWN0JyxcbiAgICAnY29tcGFjdE9wdGlvbnMnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnY29udHJvbFN0b3JlUmFuZ2UnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzcGxheU92ZXJsYXAnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdkcm9wcGFibGUnLFxuICAgICdlZGl0Rm9ybScsXG4gICAgJ2VuZFRpbWUnLFxuICAgICdldmVudERlZmF1bHRzJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZ2VzdHVyZU5hdmlnYXRpb24nLFxuICAgICdoZWFkZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3Jlc2l6ZUV2ZW50cycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hvd05vd01hcmtlcicsXG4gICAgJ3N0YXJ0VGltZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aW1lRm9ybWF0JyxcbiAgICAndGltZVJlbmRlcmVyJyxcbiAgICAndGltZXpvbmVPZmZzZXQnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd2aXNpYmxlRGF5cycsXG4gICAgJ3dpZHRoJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRkcmFnc3RhcnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50cmVzaXplc3RhcnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2V2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXlzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50ZHJvcCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRyZXNpemUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnR0YXAnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudGRyb3AnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXN2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudHJlc2l6ZScscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWx1ZWNoYW5nZScscGFyYW1ldGVyczonY2FsZW5kYXItZGF5c3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVldmVudGFkZCcsXG5cdFx0J2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0Jyxcblx0XHQnYmVmb3JlZXZlbnRlZGl0Jyxcblx0XHQnYmVmb3JlZXZlbnRyZXNpemVzdGFydCcsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZXZlbnRhZGQnLFxuXHRcdCdldmVudGRyb3AnLFxuXHRcdCdldmVudGVkaXQnLFxuXHRcdCdldmVudHJlc2l6ZScsXG5cdFx0J2V2ZW50dGFwJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J3ZhbGlkYXRlZXZlbnRhZGQnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50ZHJvcCcsXG5cdFx0J3ZhbGlkYXRlZXZlbnRlZGl0Jyxcblx0XHQndmFsaWRhdGVldmVudHJlc2l6ZScsXG5cdFx0J3ZhbHVlY2hhbmdlJyxcblx0XHQnd2lkdGhjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1kYXlzdmlldycsIFxuICBpbnB1dHM6IGNhbGVuZGFyX2RheXN2aWV3TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FsZW5kYXJfZGF5c3ZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfZGF5c3ZpZXdDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9kYXlzdmlld0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGNhbGVuZGFyX2RheXN2aWV3TWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNhbGVuZGFyX2RheXN2aWV3TWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=