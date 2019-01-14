/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
import { base } from './base';
export class chipMetaData {
}
chipMetaData.XTYPE = 'chip';
chipMetaData.PROPERTIESOBJECT = {
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
    "closable": "Boolean",
    "closeHandler": "Function/String",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "enterAnimation": "String/Mixed",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "html": "String/Ext.dom.Element/HTMLElement",
    "icon": "String",
    "iconCls": "String",
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
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "record": "Ext.data.Model",
    "reference": "String",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "scope": "Object",
    "scrollable": "Boolean/String/Object",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "stateful": "Boolean/Object/String[]",
    "statefulDefaults": "Object/String[]",
    "stateId": "String",
    "style": "String/Object",
    "tabIndex": "Number",
    "text": "String",
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
    "viewModel": "String/Object/Ext.app.ViewModel",
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
chipMetaData.PROPERTIES = [
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
    'closable',
    'closeHandler',
    'cls',
    'constrainAlign',
    'contentEl',
    'controller',
    'data',
    'defaultListenerScope',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'icon',
    'iconCls',
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
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'relative',
    'renderTo',
    'right',
    'ripple',
    'scope',
    'scrollable',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'stateful',
    'statefulDefaults',
    'stateId',
    'style',
    'tabIndex',
    'text',
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
    'viewModel',
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
chipMetaData.EVENTS = [
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
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
    { name: 'beforetofront', parameters: 'chip' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'chip,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'erased', parameters: 'sender' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'chip,event' },
    { name: 'focusenter', parameters: 'chip,event' },
    { name: 'focusleave', parameters: 'chip,event' },
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
    { name: 'show', parameters: 'sender' },
    { name: 'tofront', parameters: 'chip' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
chipMetaData.EVENTNAMES = [
    'added',
    'beforebottomchange',
    'beforecenteredchange',
    'beforedisabledchange',
    'beforedockedchange',
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
    'show',
    'tofront',
    'topchange',
    'updatedata',
    'widthchange',
    'ready'
];
if (false) {
    /** @type {?} */
    chipMetaData.XTYPE;
    /** @type {?} */
    chipMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    chipMetaData.PROPERTIES;
    /** @type {?} */
    chipMetaData.EVENTS;
    /** @type {?} */
    chipMetaData.EVENTNAMES;
}
export class ExtChipComponent extends base {
    /**
     * @param {?} location
     * @param {?} resolver
     * @param {?} changeDetector
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(location, resolver, changeDetector, eRef, hostComponent) {
        super(eRef, eRef.nativeElement, chipMetaData, hostComponent);
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.hostComponent = hostComponent;
        console.log(location);
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,chipMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(chipMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'chip',
                inputs: chipMetaData.PROPERTIES,
                outputs: chipMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtChipComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtChipComponent.ctorParameters = () => [
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
    ExtChipComponent.prototype.location;
    /**
     * @type {?}
     * @private
     */
    ExtChipComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ExtChipComponent.prototype.changeDetector;
    /** @type {?} */
    ExtChipComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoaXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9leHQtY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUVqQixJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sWUFBWTs7QUFDVCxrQkFBSyxHQUFXLE1BQU0sQ0FBQztBQUN2Qiw2QkFBZ0IsR0FBUTtJQUNwQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtJQUMzQixXQUFXLEVBQUUsUUFBUTtJQUNyQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixnQkFBZ0IsRUFBRSx3Q0FBd0M7SUFDMUQsV0FBVyxFQUFFLG9DQUFvQztJQUNqRCxZQUFZLEVBQUUsc0NBQXNDO0lBQ3BELE1BQU0sRUFBRSxRQUFRO0lBQ2hCLHNCQUFzQixFQUFFLFNBQVM7SUFDakMsVUFBVSxFQUFFLFNBQVM7SUFDckIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsV0FBVyxFQUFFLGdDQUFnQztJQUM3QyxnQkFBZ0IsRUFBRSxjQUFjO0lB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SSx1QkE2VVMsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROzs7Ozs7O0lBSDFDLG9DQUFrQzs7Ozs7SUFDbEMsb0NBQTBDOzs7OztJQUMxQywwQ0FBeUM7O0lBQzVCLHlDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXJPdXRsZXQsIENoaWxkcmVuT3V0bGV0Q29udGV4dHMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjaGlwTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY2hpcCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXhpc0xvY2tcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm90dG9tXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiY2VudGVyZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbG9zYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsb3NlSGFuZGxlclwiOiBcIkZ1bmN0aW9uL1N0cmluZ1wiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb25zdHJhaW5BbGlnblwiOiBcIlN0cmluZy9FeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJFeHQuZG9tLkVsZW1lbnQvSFRNTEVsZW1lbnQvU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzcGxheWVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZG9ja2VkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdC9FeHQuZHJhZy5Tb3VyY2VcIixcbiAgICBcImVudGVyQW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJldmVudEhhbmRsZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJleGl0QW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyL1N0cmluZy9PYmplY3RcIixcbiAgICBcImZsb2F0ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZnVsbHNjcmVlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGlkZU9uTWFza1RhcFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvRXh0LmRvbS5FbGVtZW50L0hUTUxFbGVtZW50XCIsXG4gICAgXCJpY29uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpY29uQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsZWZ0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVjb3JkXCI6IFwiRXh0LmRhdGEuTW9kZWxcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVsYXRpdmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNjb3BlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsRGVmYXVsdHNcIjogXCJPYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ4dHlwZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwieVwiOiBcIk51bWJlclwiLFxuICAgIFwiekluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xvc2FibGUnLFxuICAgICdjbG9zZUhhbmRsZXInLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZGVPbk1hc2tUYXAnLFxuICAgICdodG1sJyxcbiAgICAnaWNvbicsXG4gICAgJ2ljb25DbHMnLFxuICAgICdpZCcsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njb3BlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlZnVsRGVmYXVsdHMnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RleHQnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2NoaXAnfSxcblx0XHR7bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2NoaXAsZXZlbnQnfSxcblx0XHR7bmFtZTonYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NoaXAsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonY2hpcCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjaGlwLGV2ZW50J30sXG5cdFx0e25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcblx0XHR7bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxuXHRcdHtuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG5cdFx0e25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidjaGlwJ30sXG5cdFx0e25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhZGRlZCcsXG5cdFx0J2JlZm9yZWJvdHRvbWNoYW5nZScsXG5cdFx0J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlbGVmdGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J2JlZm9yZXJpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3JldG9wY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnYm90dG9tY2hhbmdlJyxcblx0XHQnY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdkb2NrZWRjaGFuZ2UnLFxuXHRcdCdlcmFzZWQnLFxuXHRcdCdmbG9hdGluZ2NoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdmdWxsc2NyZWVuJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQnaGlkZScsXG5cdFx0J2luaXRpYWxpemUnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmVkJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXAnLCBcbiAgaW5wdXRzOiBjaGlwTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2hpcE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDaGlwQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2hpcENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgLy8gICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLGVSZWYubmF0aXZlRWxlbWVudCxjaGlwTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgIH1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LGNoaXBNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjaGlwTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=