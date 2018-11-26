/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class calendar_dayviewMetaData {
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
export class ExtCalendar_dayviewComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, calendar_dayviewMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(calendar_dayviewMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtCalendar_dayviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-dayview',
                inputs: calendar_dayviewMetaData.PROPERTIES,
                outputs: calendar_dayviewMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtCalendar_dayviewComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtCalendar_dayviewComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLWRheXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LWNhbGVuZGFyLWRheXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sd0JBQXdCOztBQUNyQiw4QkFBSyxHQUFXLGtCQUFrQixDQUFDO0FBQ25DLHlDQUFnQixHQUFRO0lBQ3BDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsV0FBVyxFQUFFLFNBQVM7SUFDdEIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsZUFBZSxFQUFFLFFBQVE7SUFDekIsZUFBZSxFQUFFLFFBQVE7SUFDekIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixRQUFRLEVBQUUsMEJB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QUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBZEosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO2dCQUMzQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsVUFBVTtnQkFDNUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNEJBQTRCLENBQUMsRUFBQyxDQUFDO2dCQUN6RixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBck1DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl9kYXl2aWV3TWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY2FsZW5kYXItZGF5dmlldyc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWRkRm9ybVwiOiBcIk9iamVjdFwiLFxuICAgIFwiYWxsb3dTZWxlY3Rpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb21wYWN0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29tcGFjdE9wdGlvbnNcIjogXCJPYmplY3RcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImNvbnRyb2xTdG9yZVJhbmdlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc3BsYXlPdmVybGFwXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZHJvcHBhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZWRpdEZvcm1cIjogXCJPYmplY3RcIixcbiAgICBcImVuZFRpbWVcIjogXCJOdW1iZXJcIixcbiAgICBcImV2ZW50RGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJnZXN0dXJlTmF2aWdhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlYWRlclwiOiBcIkV4dC5jYWxlbmRhci5oZWFkZXIuQmFzZVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuRWxlbWVudFwiLFxuICAgIFwicmVzaXplRXZlbnRzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dOb3dNYXJrZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzdGFydFRpbWVcIjogXCJOdW1iZXJcIixcbiAgICBcInN0b3JlXCI6IFwiT2JqZWN0L0V4dC5jYWxlbmRhci5zdG9yZS5DYWxlbmRhcnNcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGltZUZvcm1hdFwiOiBcIlN0cmluZ1wiLFxuICAgIFwidGltZVJlbmRlcmVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInRpbWV6b25lT2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmFsdWVcIjogXCJEYXRlXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ2aXNpYmxlRGF5c1wiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FkZEZvcm0nLFxuICAgICdhbGxvd1NlbGVjdGlvbicsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2xzJyxcbiAgICAnY29tcGFjdCcsXG4gICAgJ2NvbXBhY3RPcHRpb25zJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2NvbnRyb2xTdG9yZVJhbmdlJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXlPdmVybGFwJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZHJvcHBhYmxlJyxcbiAgICAnZWRpdEZvcm0nLFxuICAgICdlbmRUaW1lJyxcbiAgICAnZXZlbnREZWZhdWx0cycsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2dlc3R1cmVOYXZpZ2F0aW9uJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNpemVFdmVudHMnLFxuICAgICdyaXBwbGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3Nob3dOb3dNYXJrZXInLFxuICAgICdzdGFydFRpbWUnLFxuICAgICdzdG9yZScsXG4gICAgJ3N0eWxlJyxcbiAgICAndGltZUZvcm1hdCcsXG4gICAgJ3RpbWVSZW5kZXJlcicsXG4gICAgJ3RpbWV6b25lT2Zmc2V0JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAndmlzaWJsZURheXMnLFxuICAgICd3aWR0aCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRkcmFnc3RhcnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudHJlc2l6ZXN0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudGRyb3AnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudHJlc2l6ZScscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50dGFwJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLWRheXZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWxpZGF0ZWV2ZW50ZHJvcCcscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudHJlc2l6ZScscGFyYW1ldGVyczonY2FsZW5kYXItZGF5dmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbHVlY2hhbmdlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1kYXl2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZXZlbnRhZGQnLFxuXHRcdCdiZWZvcmVldmVudGRyYWdzdGFydCcsXG5cdFx0J2JlZm9yZWV2ZW50ZWRpdCcsXG5cdFx0J2JlZm9yZWV2ZW50cmVzaXplc3RhcnQnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2V2ZW50YWRkJyxcblx0XHQnZXZlbnRkcm9wJyxcblx0XHQnZXZlbnRlZGl0Jyxcblx0XHQnZXZlbnRyZXNpemUnLFxuXHRcdCdldmVudHRhcCcsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50YWRkJyxcblx0XHQndmFsaWRhdGVldmVudGRyb3AnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50ZWRpdCcsXG5cdFx0J3ZhbGlkYXRlZXZlbnRyZXNpemUnLFxuXHRcdCd2YWx1ZWNoYW5nZScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItZGF5dmlldycsIFxuICBpbnB1dHM6IGNhbGVuZGFyX2RheXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjYWxlbmRhcl9kYXl2aWV3TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhbGVuZGFyX2RheXZpZXdDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9kYXl2aWV3Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsY2FsZW5kYXJfZGF5dmlld01ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjYWxlbmRhcl9kYXl2aWV3TWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=