/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var thumbMetaData = /** @class */ (function () {
    function thumbMetaData() {
    }
    thumbMetaData.XTYPE = 'thumb';
    thumbMetaData.PROPERTIESOBJECT = {
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
        "fillCls": "String",
        "fillTrack": "Boolean/String",
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
    thumbMetaData.PROPERTIES = [
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
        'fillCls',
        'fillTrack',
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
    thumbMetaData.EVENTS = [
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
        { name: 'beforetofront', parameters: 'thumb' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'thumb,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'thumb,event' },
        { name: 'focusenter', parameters: 'thumb,event' },
        { name: 'focusleave', parameters: 'thumb,event' },
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
        { name: 'tofront', parameters: 'thumb' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    thumbMetaData.EVENTNAMES = [
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
    return thumbMetaData;
}());
export { thumbMetaData };
if (false) {
    /** @type {?} */
    thumbMetaData.XTYPE;
    /** @type {?} */
    thumbMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    thumbMetaData.PROPERTIES;
    /** @type {?} */
    thumbMetaData.EVENTS;
    /** @type {?} */
    thumbMetaData.EVENTNAMES;
}
var ExtThumbComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtThumbComponent, _super);
    function ExtThumbComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, thumbMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,thumbMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,thumbMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtThumbComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,thumbMetaData,hostComponent)}
    /**
     * @return {?}
     */
    function () { this.baseOnInit(thumbMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtThumbComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtThumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'thumb',
                    inputs: thumbMetaData.PROPERTIES,
                    outputs: thumbMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtThumbComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtThumbComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtThumbComponent;
}(base));
export { ExtThumbComponent };
if (false) {
    /** @type {?} */
    ExtThumbComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRodW1iLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC10aHVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBc1RBLENBQUM7SUFyVGUsbUJBQUssR0FBVyxPQUFPLENBQUM7SUFDeEIsOEJBQWdCLEdBQVE7UUFDcEMsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixVQUFVLEVBQUUsU0FBUztRQUNyQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixVQUFVLEVBQUUsU0FBUztRQUNyQixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLGdCQUFnQixFQUFFLHdDQUF3QztRQUMxRCxXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFlBQVksRUFBRSxzQ0FBc0M7UUFDcEQsTUFBTSxFQUFFLFFBQVE7UUFDaEIsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxVQUFVLEVBQUUsU0FBUztRQUNyQixXQUFXLEVBQUUsU0FBUztRQUN0QixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLGdCQUFnQixFQUFFLGNBQWM7UUFDaEMsZUFBZSxFQUFFLFFBQVE7UUFDekIsZUFBZSxFQUFFLGNBQWM7UUFDL0IsU0FBUyxFQUFFLFFBQVE7UUFDbkIsV0FBVyxF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WSxJQUFlLEVBQXlDLGFBQW9CO1FBQXhGLFlBQTJGLGtCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsQ0FBQyxTQUFDO1FBQTdFLG1CQUFhLEdBQWIsYUFBYSxDQUFPOztJQUF3RCxDQUFDO0lBQ2pKLDRKQUE0Sjs7Ozs7SUFDckosb0NBQVE7Ozs7O0lBQWYsY0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDbEQsMEVBQTBFOzs7OztJQUNuRSw4Q0FBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFmSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLE1BQU0sRUFBRSxhQUFhLENBQUMsVUFBVTtvQkFDaEMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxVQUFVO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUMsRUFBQyxDQUFDO29CQUM5RSxRQUFRLEVBQUUsNkJBQTZCO2lCQUN4Qzs7OztnQkFqVUMsVUFBVTtnQkFHSCxJQUFJLHVCQWdVbUIsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQVE1RCx3QkFBQztDQUFBLEFBaEJELENBT3VDLElBQUksR0FTMUM7U0FUWSxpQkFBaUI7OztJQUNDLDBDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgdGh1bWJNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICd0aHVtYic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXhpc0xvY2tcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm90dG9tXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiY2VudGVyZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbnN0cmFpbkFsaWduXCI6IFwiU3RyaW5nL0V4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIkV4dC5kb20uRWxlbWVudC9IVE1MRWxlbWVudC9TdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNwbGF5ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkb2NrZWRcIjogXCJTdHJpbmdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kcmFnLlNvdXJjZVwiLFxuICAgIFwiZW50ZXJBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImV4aXRBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImZpbGxDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZpbGxUcmFja1wiOiBcIkJvb2xlYW4vU3RyaW5nXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyL1N0cmluZy9PYmplY3RcIixcbiAgICBcImZsb2F0ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZnVsbHNjcmVlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGlkZU9uTWFza1RhcFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvRXh0LmRvbS5FbGVtZW50L0hUTUxFbGVtZW50XCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsZWZ0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVjb3JkXCI6IFwiRXh0LmRhdGEuTW9kZWxcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVsYXRpdmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNjcm9sbGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInNlbGZBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hvd0FuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwic3RhdGVmdWxcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdbXVwiLFxuICAgIFwic3RhdGVmdWxEZWZhdWx0c1wiOiBcIk9iamVjdC9TdHJpbmdbXVwiLFxuICAgIFwic3RhdGVJZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0YWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvb2x0aXBcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0b3BcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHBsXCI6IFwiU3RyaW5nL1N0cmluZ1tdL0V4dC5UZW1wbGF0ZS9FeHQuWFRlbXBsYXRlW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHJhbnNsYXRhYmxlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyU2VsZWN0YWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInhcIjogXCJOdW1iZXJcIixcbiAgICBcInh0eXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ6SW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdmaWxsQ2xzJyxcbiAgICAnZmlsbFRyYWNrJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGVmdCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpZ2h0JyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlZnVsRGVmYXVsdHMnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J2JlZm9yZWJvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczondGh1bWInfSxcblx0XHR7bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J3RodW1iLGV2ZW50J30sXG5cdFx0e25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOid0aHVtYixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOid0aHVtYixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid0aHVtYixldmVudCd9LFxuXHRcdHtuYW1lOidmdWxsc2NyZWVuJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLHRvSW5kZXgsZnJvbUluZGV4J30sXG5cdFx0e25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcblx0XHR7bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2VsZW1lbnQsaW5mbyd9LFxuXHRcdHtuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczondGh1bWInfSxcblx0XHR7bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondXBkYXRlZGF0YScscGFyYW1ldGVyczonc2VuZGVyLG5ld0RhdGEnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FkZGVkJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcmlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXRvZnJvbnQnLFxuXHRcdCdiZWZvcmV0b3BjaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdib3R0b21jaGFuZ2UnLFxuXHRcdCdjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2RvY2tlZGNoYW5nZScsXG5cdFx0J2VyYXNlZCcsXG5cdFx0J2Zsb2F0aW5nY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2Z1bGxzY3JlZW4nLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCdoaWRlJyxcblx0XHQnaW5pdGlhbGl6ZScsXG5cdFx0J2xlZnRjaGFuZ2UnLFxuXHRcdCdtYXhIZWlnaHRjaGFuZ2UnLFxuXHRcdCdtYXhXaWR0aGNoYW5nZScsXG5cdFx0J21pbkhlaWdodGNoYW5nZScsXG5cdFx0J21pbldpZHRoY2hhbmdlJyxcblx0XHQnbW92ZWQnLFxuXHRcdCdvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J3BhaW50ZWQnLFxuXHRcdCdwb3NpdGlvbmVkY2hhbmdlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3JpZ2h0Y2hhbmdlJyxcblx0XHQnc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J3Nob3cnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQndG9wY2hhbmdlJyxcblx0XHQndXBkYXRlZGF0YScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGh1bWInLCBcbiAgaW5wdXRzOiB0aHVtYk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IHRodW1iTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFRodW1iQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VGh1bWJDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGVSZWYubmF0aXZlRWxlbWVudCx0aHVtYk1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICAvL2NvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGhvc3RDb21wb25lbnQsdGh1bWJNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdCh0aHVtYk1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19