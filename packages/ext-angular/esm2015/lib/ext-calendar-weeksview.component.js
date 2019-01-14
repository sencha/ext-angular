/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
import { base } from './base';
export class calendar_weeksviewMetaData {
}
calendar_weeksviewMetaData.XTYPE = 'calendar-weeksview';
calendar_weeksviewMetaData.PROPERTIESOBJECT = {
    "addForm": "Object",
    "addOnSelect": "Boolean",
    "allowSelection": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "axisLock": "Boolean",
    "bind": "Object/String",
    "border": "Boolean",
    "bottom": "Number/String",
    "centered": "Boolean",
    "cls": "String/String[]",
    "compact": "Boolean",
    "compactOptions": "Object",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "controller": "String/Object/Ext.app.ViewController",
    "controlStoreRange": "Boolean",
    "data": "Object",
    "dayFormat": "String",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean",
    "droppable": "Boolean",
    "editForm": "Object",
    "enterAnimation": "String/Mixed",
    "eventDefaults": "Object",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "firstDayOfWeek": "Number",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "gestureNavigation": "Boolean",
    "header": "Ext.calendar.header.Base",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "html": "String/Ext.dom.Element/HTMLElement",
    "id": "String",
    "instanceCls": "String/String[]",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "left": "Number/String",
    "listeners": "Object",
    "margin": "Number/String",
    "maxHeight": "Number/String",
    "maxWidth": "Number/String",
    "minHeight": "Number/String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "overflowText": "String",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "record": "Ext.data.Model",
    "reference": "String",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "scrollable": "Boolean/String/Object",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "showOverflow": "String",
    "stateful": "Boolean/Object/String[]",
    "statefulDefaults": "Object/String[]",
    "stateId": "String",
    "store": "Object/Ext.calendar.store.Calendars",
    "style": "String/Object",
    "tabIndex": "Number",
    "timezoneOffset": "Number",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "translatable": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "value": "Date",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "visibleDays": "Number",
    "visibleWeeks": "Number",
    "weekendDays": "Number[]",
    "weight": "Number",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
calendar_weeksviewMetaData.PROPERTIES = [
    'addForm',
    'addOnSelect',
    'allowSelection',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'centered',
    'cls',
    'compact',
    'compactOptions',
    'constrainAlign',
    'contentEl',
    'controller',
    'controlStoreRange',
    'data',
    'dayFormat',
    'defaultListenerScope',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'droppable',
    'editForm',
    'enterAnimation',
    'eventDefaults',
    'eventHandlers',
    'exitAnimation',
    'firstDayOfWeek',
    'flex',
    'floated',
    'focusCls',
    'fullscreen',
    'gestureNavigation',
    'header',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'overflowText',
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'relative',
    'renderTo',
    'right',
    'ripple',
    'scrollable',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'showOverflow',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'style',
    'tabIndex',
    'timezoneOffset',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'value',
    'viewModel',
    'visibleDays',
    'visibleWeeks',
    'weekendDays',
    'weight',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_weeksviewMetaData.EVENTS = [
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeeventadd', parameters: 'calendar-weeksview,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-weeksview,context' },
    { name: 'beforeeventedit', parameters: 'calendar-weeksview,context' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehide', parameters: 'sender' },
    { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeshow', parameters: 'sender' },
    { name: 'beforetofront', parameters: 'calendar-weeksview' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'calendar-weeksview,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'erased', parameters: 'sender' },
    { name: 'eventadd', parameters: 'calendar-weeksview,context' },
    { name: 'eventdrop', parameters: 'calendar-weeksview,context' },
    { name: 'eventedit', parameters: 'calendar-weeksview,context' },
    { name: 'eventtap', parameters: 'calendar-weeksview,context' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'calendar-weeksview,event' },
    { name: 'focusenter', parameters: 'calendar-weeksview,event' },
    { name: 'focusleave', parameters: 'calendar-weeksview,event' },
    { name: 'fullscreen', parameters: 'sender' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'hide', parameters: 'sender' },
    { name: 'initialize', parameters: 'sender' },
    { name: 'leftchange', parameters: 'sender,value,oldValue' },
    { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'select', parameters: 'calendar-weeksview,context' },
    { name: 'selectrange', parameters: 'calendar-weeksview,context' },
    { name: 'show', parameters: 'sender' },
    { name: 'tofront', parameters: 'calendar-weeksview' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'validateeventadd', parameters: 'calendar-weeksview,context' },
    { name: 'validateeventdrop', parameters: 'calendar-weeksview,context' },
    { name: 'validateeventedit', parameters: 'calendar-weeksview,context' },
    { name: 'valuechange', parameters: 'calendar-weeksview,context' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
calendar_weeksviewMetaData.EVENTNAMES = [
    'added',
    'beforebottomchange',
    'beforecenteredchange',
    'beforedisabledchange',
    'beforedockedchange',
    'beforeeventadd',
    'beforeeventdragstart',
    'beforeeventedit',
    'beforeheightchange',
    'beforehiddenchange',
    'beforehide',
    'beforeleftchange',
    'beforemaxHeightchange',
    'beforemaxWidthchange',
    'beforeminHeightchange',
    'beforeminWidthchange',
    'beforeorientationchange',
    'beforerightchange',
    'beforescrollablechange',
    'beforeshow',
    'beforetofront',
    'beforetopchange',
    'beforewidthchange',
    'blur',
    'bottomchange',
    'centeredchange',
    'destroy',
    'disabledchange',
    'dockedchange',
    'erased',
    'eventadd',
    'eventdrop',
    'eventedit',
    'eventtap',
    'floatingchange',
    'focus',
    'focusenter',
    'focusleave',
    'fullscreen',
    'heightchange',
    'hiddenchange',
    'hide',
    'initialize',
    'leftchange',
    'maxHeightchange',
    'maxWidthchange',
    'minHeightchange',
    'minWidthchange',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'removed',
    'resize',
    'rightchange',
    'scrollablechange',
    'select',
    'selectrange',
    'show',
    'tofront',
    'topchange',
    'updatedata',
    'validateeventadd',
    'validateeventdrop',
    'validateeventedit',
    'valuechange',
    'widthchange',
    'ready'
];
if (false) {
    /** @type {?} */
    calendar_weeksviewMetaData.XTYPE;
    /** @type {?} */
    calendar_weeksviewMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    calendar_weeksviewMetaData.PROPERTIES;
    /** @type {?} */
    calendar_weeksviewMetaData.EVENTS;
    /** @type {?} */
    calendar_weeksviewMetaData.EVENTNAMES;
}
export class ExtCalendar_weeksviewComponent extends base {
    /**
     * @param {?} location
     * @param {?} resolver
     * @param {?} changeDetector
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(location, resolver, changeDetector, eRef, hostComponent) {
        super(eRef, eRef.nativeElement, calendar_weeksviewMetaData, hostComponent);
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.hostComponent = hostComponent;
        console.log(location);
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,calendar_weeksviewMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(calendar_weeksviewMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtCalendar_weeksviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-weeksview',
                inputs: calendar_weeksviewMetaData.PROPERTIES,
                outputs: calendar_weeksviewMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtCalendar_weeksviewComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtCalendar_weeksviewComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExtCalendar_weeksviewComponent.prototype.location;
    /**
     * @type {?}
     * @private
     */
    ExtCalendar_weeksviewComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ExtCalendar_weeksviewComponent.prototype.changeDetector;
    /** @type {?} */
    ExtCalendar_weeksviewComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLXdlZWtzdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYWxlbmRhci13ZWVrc3ZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFFakIsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLDBCQUEwQjs7QUFDdkIsZ0NBQUssR0FBVyxvQkFBb0IsQ0FBQztBQUNyQywyQ0FBZ0IsR0FBUTtJQUNwQyxTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsU0FBUztJQUN4QixnQkFBZ0IsRUFBRSxTQUFTO0lBQzNCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsVUFBVSxFQUFFLFNBQVM7SUFDckIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsUUFBUSxFQUFFLGVBQWU7SUFDekIsVUFBVSxFQUFFLFNBQVM7SUFDckIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGdCQUFnQixFQUFFLHdDQUF3QztJQUMxRCxXQUFXLEVBQUUsb0NBQW9DO0lBQ2pELFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsbUJBQW1CLEVBQUUsU0FBUztJQUM5QixNQUFNLEVBQUUsUUFBUTtJQUNoQixXQUFXLEVBQUUsUUFBUTtJQUNyQixzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGdCQUFnQixFQUFFLGNBQWM7SUFDaEMsZUFBZSxFQUFFLFFBQVE7SUFDekIsZUFBZSxFQUFFLFFBQVE7SUFDekIsZUFBZSxFQUFFLGNBQWM7SUFDL0IsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixNQUFNLEVBQUUsc0JBQXNCO0lBQzlCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLG1CQUFtQixFQUFFLFNBQVM7SUFDOUIsUUFBUSxFQUFFLDBCQUEwQjtJQUNwQyxRQUFRLEVBQUUsZUFBZTtJQUN6QixRQUFRLEVBQUUsU0FBUztJQUNuQixlQUFlLEVBQUUsY0FBYztJQUMvQixVQUFVLEVBQUUsbURBQW1EO0lBQy9ELGVBQWUsRUFBRSxTQUFTO0lBQzFCLE1BQU0sRUFBRSxvQ0FBb0M7SUFDNUMsSUFBSSxFQUFFLFFBQVE7SUFDZCxhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFVBQVUsRUFBRSxlQUFlO0lBQzNCLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsVUFBVSxFQUFFLFNBQVM7SUFDckIsY0FBYyxFQUFFLFFBQVE7SUFDeEIsU0FBUyxFQUFFLGVBQWU7SUFDMUIsU0FBUyxFQUFFLG1EQUFtRDtJQUM5RCxXQUFXLEVBQUUsd0JBQXdCO0lBQ3JDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsV0FBVyxFQUFFLFFBQVE7SUFDckIsVUFBVSxFQUFFLFNBQVM7SUFDckIsVUFBVSxFQUFFLGlCQUFpQjtJQUM3QixPQUFPLEVBQUUsZUFBZTtJQUN4QixRQUFRLEVBQUUsdUJBQXVCO0lBQ2pDLFlBQVksRUFBRSx1QkFBdUI7SUFDckMsV0FBVyxFQUFFLFFBQVE7SUFDckIsU0FBUyxFQUFFLGlDQUFpQztJQUM1QyxRQUFRLEVBQUUsU0FBUztJQUNuQixlQUFlLEVBQUUsU0FBUztJQUMxQixNQUFNLEVBQUUsU0FBUztJQUNqQixlQUFlLEVBQUUsY0FBYztJQUMvQixjQUFjLEVBQUUsUUFBUTtJQUN4QixVQUFVLEVBQUUseUJBQXlCO0lBQ3JDLGtCQUFrQixFQUFFLGlCQUFpQjtJQUNyQyxTQUFTLEVBQUUsUUFBUTtJQUNuQixPQUFPLEVBQUUscUNBQXFDO0lBQzlDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsZUFBZSxFQUFFLFNBQVM7SUFDMUIsU0FBUyxFQUFFLGVBQWU7SUFDMUIsS0FBSyxFQUFFLGVBQWU7SUFDdEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsS0FBSyxFQUFFLDhDQUE4QztJQUNyRCxjQUFjLEVBQUUsUUFBUTtJQUN4QixjQUFjLEVBQUUsUUFBUTtJQUN4QixnQkFBZ0IsRUFBRSx3QkFBd0I7SUFDMUMsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLGdCQUFnQixFQUFFLHVCQUF1QjtJQUN6QyxPQUFPLEVBQUUsTUFBTTtJQUNmLFdBQVcsRUFBRSxpQ0FBaUM7SUFDOUMsYUFBYSxFQUFFLFFBQVE7SUFDdkIsY0FBYyxFQUFFLFFBQVE7SUFDeEIsYUFBYSxFQUFFLFVBQVU7SUFDekIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsT0FBTyxFQUFFLGVBQWU7SUFDeEIsR0FBRyxFQUFFLFFBQVE7SUFDYixPQUFPLEVBQUUsUUFBUTtJQUNqQixHQUFHLEVBQUUsUUFBUTtJQUNiLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixhQUFhLEVBQUUsU0FBUztJQUN4QixRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBQ2MscUNBQVUsR0FBYTtJQUNuQyxTQUFTO0lBQ1QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsS0FBSztJQUNMLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLE1BQU07SUFDTixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZixNQUFNO0lBQ04sSUFBSTtJQUNKLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2QsTUFBTTtJQUNOLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULFNBQVM7SUFDVCxXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGVBQWU7SUFDZixNQUFNO0lBQ04sZUFBZTtJQUNmLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsT0FBTztJQUNQLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxLQUFLO0lBQ0wsYUFBYTtJQUNiLEtBQUs7SUFDTCxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixJQUFJO0lBQ0osU0FBUztJQUNULGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLFFBQVE7SUFDUixPQUFPO0lBQ1AsR0FBRztJQUNILE9BQU87SUFDUCxHQUFHO0lBQ0gsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MsaUNBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLHdCQUF3QixFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztJQUN4RSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7SUFDMUUsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO0lBQzFFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztJQUN4RSxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsNEJBQTRCLEVBQUM7SUFDL0QsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLDRCQUE0QixFQUFDO0lBQ3JFLEVBQUMsSUFBSSxFQUFDLGlCQUFpQixFQUFDLFVBQVUsRUFBQyw0QkFBNEIsRUFBQztJQUNoRSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7SUFDeEUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO0lBQ3hFLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO0lBQ3ZDLEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBQyx1QkFBdUIsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7SUFDM0UsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO0lBQzFFLEVBQUMsSUFBSSxFQUFDLHVCQUF1QixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztJQUMzRSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7SUFDMUUsRUFBQyxJQUFJLEVBQUMseUJBQXlCLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztJQUM5QyxFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7SUFDdkUsRUFBQyxJQUFJLEVBQUMsd0JBQXdCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO0lBQzVFLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO0lBQ3ZDLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUM7SUFDdEQsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO0lBQ3JFLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztJQUN2RSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLDBCQUEwQixFQUFDO0lBQ25ELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7SUFDeEQsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQzFELEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0lBQzlCLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztJQUMxRCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQ3hELEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO0lBQ25DLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsNEJBQTRCLEVBQUM7SUFDekQsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyw0QkFBNEIsRUFBQztJQUMxRCxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLDRCQUE0QixFQUFDO0lBQzFELEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsNEJBQTRCLEVBQUM7SUFDekQsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDO0lBQ3RELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsMEJBQTBCLEVBQUM7SUFDcEQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQywwQkFBMEIsRUFBQztJQUN6RCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLDBCQUEwQixFQUFDO0lBQ3pELEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO0lBQ3ZDLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7SUFDeEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztJQUN4RCxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQztJQUNqQyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQztJQUN2QyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQ3RELEVBQUMsSUFBSSxFQUFDLGlCQUFpQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztJQUMzRCxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7SUFDMUQsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQzNELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztJQUMxRCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLG9DQUFvQyxFQUFDO0lBQzlELEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7SUFDeEMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7SUFDeEQsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyx3QkFBd0IsRUFBQztJQUNwRCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQztJQUN6QyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQ3ZELEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztJQUM1RCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLDRCQUE0QixFQUFDO0lBQ3ZELEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsNEJBQTRCLEVBQUM7SUFDNUQsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxvQkFBb0IsRUFBQztJQUNoRCxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUM7SUFDL0MsRUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsVUFBVSxFQUFDLDRCQUE0QixFQUFDO0lBQ2pFLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyw0QkFBNEIsRUFBQztJQUNsRSxFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsNEJBQTRCLEVBQUM7SUFDbEUsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyw0QkFBNEIsRUFBQztJQUM1RCxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0NBQzdCLENBQUM7QUFDYyxxQ0FBVSxHQUFhO0lBQ3JDLE9BQU87SUFDUCxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsTUFBTTtJQUNOLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixPQUFPO0NBQ1IsQ0FBQzs7O0lBcFhBLGlDQUFtRDs7SUFDbkQsNENBbUhBOztJQUNBLHNDQW1IQTs7SUFDQSxrQ0FxRUE7O0lBQ0Esc0NBcUVBOztBQVNGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxJQUFJOzs7Ozs7OztJQUN0RCxZQUVjLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLGNBQWlDLEVBQzdDLElBQWUsRUFBeUMsYUFBb0I7UUFDMUUsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsYUFBYSxFQUFDLDBCQUEwQixFQUFDLGFBQWEsQ0FBQyxDQUFBO1FBSjdELGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNXLGtCQUFhLEdBQWIsYUFBYSxDQUFPO1FBRTFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkIsQ0FBQzs7Ozs7SUFFSSxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7Ozs7SUFFeEQsa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBdkJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixNQUFNLEVBQUUsMEJBQTBCLENBQUMsVUFBVTtnQkFDN0MsT0FBTyxFQUFFLDBCQUEwQixDQUFDLFVBQVU7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDhCQUE4QixDQUFDLEVBQUMsQ0FBQztnQkFDM0YsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7OztZQTdZQyxnQkFBZ0I7WUFEaEIsd0JBQXdCO1lBRXhCLGlCQUFpQjtZQVVqQixVQUFVO1lBSUgsSUFBSSx1QkFxWVMsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROzs7Ozs7O0lBSDFDLGtEQUFrQzs7Ozs7SUFDbEMsa0RBQTBDOzs7OztJQUMxQyx3REFBeUM7O0lBQzVCLHVEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXJPdXRsZXQsIENoaWxkcmVuT3V0bGV0Q29udGV4dHMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYWxlbmRhci13ZWVrc3ZpZXcnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFkZEZvcm1cIjogXCJPYmplY3RcIixcbiAgICBcImFkZE9uU2VsZWN0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYWxsb3dTZWxlY3Rpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJheGlzTG9ja1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJib3R0b21cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJjZW50ZXJlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29tcGFjdFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbXBhY3RPcHRpb25zXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJjb25zdHJhaW5BbGlnblwiOiBcIlN0cmluZy9FeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJFeHQuZG9tLkVsZW1lbnQvSFRNTEVsZW1lbnQvU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJjb250cm9sU3RvcmVSYW5nZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRheUZvcm1hdFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc3BsYXllZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRvY2tlZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZHJvcHBhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZWRpdEZvcm1cIjogXCJPYmplY3RcIixcbiAgICBcImVudGVyQW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJldmVudERlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJldmVudEhhbmRsZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJleGl0QW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJmaXJzdERheU9mV2Vla1wiOiBcIk51bWJlclwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlci9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJmbG9hdGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZ1bGxzY3JlZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJnZXN0dXJlTmF2aWdhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlYWRlclwiOiBcIkV4dC5jYWxlbmRhci5oZWFkZXIuQmFzZVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZUFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJoaWRlT25NYXNrVGFwXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9FeHQuZG9tLkVsZW1lbnQvSFRNTEVsZW1lbnRcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxlZnRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib3ZlcmZsb3dUZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlY29yZFwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbGF0aXZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcInNob3dPdmVyZmxvd1wiOiBcIlN0cmluZ1wiLFxuICAgIFwic3RhdGVmdWxcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdbXVwiLFxuICAgIFwic3RhdGVmdWxEZWZhdWx0c1wiOiBcIk9iamVjdC9TdHJpbmdbXVwiLFxuICAgIFwic3RhdGVJZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3RvcmVcIjogXCJPYmplY3QvRXh0LmNhbGVuZGFyLnN0b3JlLkNhbGVuZGFyc1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0YWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwidGltZXpvbmVPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZhbHVlXCI6IFwiRGF0ZVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwidmlzaWJsZURheXNcIjogXCJOdW1iZXJcIixcbiAgICBcInZpc2libGVXZWVrc1wiOiBcIk51bWJlclwiLFxuICAgIFwid2Vla2VuZERheXNcIjogXCJOdW1iZXJbXVwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInhcIjogXCJOdW1iZXJcIixcbiAgICBcInh0eXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ6SW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWRkRm9ybScsXG4gICAgJ2FkZE9uU2VsZWN0JyxcbiAgICAnYWxsb3dTZWxlY3Rpb24nLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdheGlzTG9jaycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdib3R0b20nLFxuICAgICdjZW50ZXJlZCcsXG4gICAgJ2NscycsXG4gICAgJ2NvbXBhY3QnLFxuICAgICdjb21wYWN0T3B0aW9ucycsXG4gICAgJ2NvbnN0cmFpbkFsaWduJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2NvbnRyb2xTdG9yZVJhbmdlJyxcbiAgICAnZGF0YScsXG4gICAgJ2RheUZvcm1hdCcsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5ZWQnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdkcm9wcGFibGUnLFxuICAgICdlZGl0Rm9ybScsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnREZWZhdWx0cycsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleGl0QW5pbWF0aW9uJyxcbiAgICAnZmlyc3REYXlPZldlZWsnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2dlc3R1cmVOYXZpZ2F0aW9uJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZUFuaW1hdGlvbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdvdmVyZmxvd1RleHQnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZWxmQWxpZ24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc2hvd092ZXJmbG93JyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RpbWV6b25lT2Zmc2V0JyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b3AnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndXNlclNlbGVjdGFibGUnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3Zpc2libGVEYXlzJyxcbiAgICAndmlzaWJsZVdlZWtzJyxcbiAgICAnd2Vla2VuZERheXMnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd4dHlwZScsXG4gICAgJ3knLFxuICAgICd6SW5kZXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3N2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlZXZlbnRkcmFnc3RhcnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWtzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2JlZm9yZWV2ZW50ZWRpdCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3N2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3N2aWV3J30sXG5cdFx0e25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrc3ZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3N2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonZXZlbnRkcm9wJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrc3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidldmVudGVkaXQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWtzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J2V2ZW50dGFwJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrc3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWtzdmlldyxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrc3ZpZXcsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3N2aWV3LGV2ZW50J30sXG5cdFx0e25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcblx0XHR7bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxuXHRcdHtuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG5cdFx0e25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3NlbGVjdCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3N2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTonc2VsZWN0cmFuZ2UnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWtzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrc3ZpZXcnfSxcblx0XHR7bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondXBkYXRlZGF0YScscGFyYW1ldGVyczonc2VuZGVyLG5ld0RhdGEnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3N2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTondmFsaWRhdGVldmVudGRyb3AnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLXdlZWtzdmlldyxjb250ZXh0J30sXG5cdFx0e25hbWU6J3ZhbGlkYXRlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci13ZWVrc3ZpZXcsY29udGV4dCd9LFxuXHRcdHtuYW1lOid2YWx1ZWNoYW5nZScscGFyYW1ldGVyczonY2FsZW5kYXItd2Vla3N2aWV3LGNvbnRleHQnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FkZGVkJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWV2ZW50YWRkJyxcblx0XHQnYmVmb3JlZXZlbnRkcmFnc3RhcnQnLFxuXHRcdCdiZWZvcmVldmVudGVkaXQnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlbGVmdGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J2JlZm9yZXJpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3JldG9wY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnYm90dG9tY2hhbmdlJyxcblx0XHQnY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdkb2NrZWRjaGFuZ2UnLFxuXHRcdCdlcmFzZWQnLFxuXHRcdCdldmVudGFkZCcsXG5cdFx0J2V2ZW50ZHJvcCcsXG5cdFx0J2V2ZW50ZWRpdCcsXG5cdFx0J2V2ZW50dGFwJyxcblx0XHQnZmxvYXRpbmdjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnZnVsbHNjcmVlbicsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdpbml0aWFsaXplJyxcblx0XHQnbGVmdGNoYW5nZScsXG5cdFx0J21heEhlaWdodGNoYW5nZScsXG5cdFx0J21heFdpZHRoY2hhbmdlJyxcblx0XHQnbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J29yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQncGFpbnRlZCcsXG5cdFx0J3Bvc2l0aW9uZWRjaGFuZ2UnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVzaXplJyxcblx0XHQncmlnaHRjaGFuZ2UnLFxuXHRcdCdzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnc2VsZWN0Jyxcblx0XHQnc2VsZWN0cmFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50YWRkJyxcblx0XHQndmFsaWRhdGVldmVudGRyb3AnLFxuXHRcdCd2YWxpZGF0ZWV2ZW50ZWRpdCcsXG5cdFx0J3ZhbHVlY2hhbmdlJyxcblx0XHQnd2lkdGhjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci13ZWVrc3ZpZXcnLCBcbiAgaW5wdXRzOiBjYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfd2Vla3N2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfd2Vla3N2aWV3Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAvLyAgICAgIHByaXZhdGUgcGFyZW50Q29udGV4dHM6IENoaWxkcmVuT3V0bGV0Q29udGV4dHMsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYsZVJlZi5uYXRpdmVFbGVtZW50LGNhbGVuZGFyX3dlZWtzdmlld01ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcbiAgICB9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxjYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjYWxlbmRhcl93ZWVrc3ZpZXdNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==