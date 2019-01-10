/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var imgMetaData = /** @class */ (function () {
    function imgMetaData() {
    }
    imgMetaData.XTYPE = 'img';
    imgMetaData.PROPERTIESOBJECT = {
        "alwaysOnTop": "Boolean/Number",
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "axisLock": "Boolean",
        "backgroundCls": "String",
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
        "imageCls": "String",
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
        "mode": "String",
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
        "src": "String",
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
    imgMetaData.PROPERTIES = [
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'axisLock',
        'backgroundCls',
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
        'imageCls',
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
        'mode',
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
        'src',
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
    imgMetaData.EVENTS = [
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
        { name: 'beforetofront', parameters: 'image' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'image,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'error', parameters: 'image,e' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'image,event' },
        { name: 'focusenter', parameters: 'image,event' },
        { name: 'focusleave', parameters: 'image,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'load', parameters: 'image,e' },
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
        { name: 'tap', parameters: 'image,e' },
        { name: 'tofront', parameters: 'image' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    imgMetaData.EVENTNAMES = [
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
        'error',
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
        'load',
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
        'tap',
        'tofront',
        'topchange',
        'updatedata',
        'widthchange',
        'ready'
    ];
    return imgMetaData;
}());
export { imgMetaData };
if (false) {
    /** @type {?} */
    imgMetaData.XTYPE;
    /** @type {?} */
    imgMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    imgMetaData.PROPERTIES;
    /** @type {?} */
    imgMetaData.EVENTS;
    /** @type {?} */
    imgMetaData.EVENTNAMES;
}
var ExtImgComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtImgComponent, _super);
    function ExtImgComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, imgMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,imgMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,imgMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtImgComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,imgMetaData,hostComponent)}
    /**
     * @return {?}
     */
    function () { this.baseOnInit(imgMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtImgComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtImgComponent.decorators = [
        { type: Component, args: [{
                    selector: 'img',
                    inputs: imgMetaData.PROPERTIES,
                    outputs: imgMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtImgComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtImgComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtImgComponent;
}(base));
export { ExtImgComponent };
if (false) {
    /** @type {?} */
    ExtImgComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWltZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtaW1nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUFnVUEsQ0FBQztJQS9UZSxpQkFBSyxHQUFXLEtBQUssQ0FBQztJQUN0Qiw0QkFBZ0IsR0FBUTtRQUNwQyxhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsZ0JBQWdCLEVBQUUsd0NBQXdDO1FBQzFELFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsWUFBWSxFQUFFLHNDQUFzQztRQUNwRCxNQUFNLEVBQUUsUUFBUTtRQUNoQixzQkFBc0IsRUFBRSxTQUFTO1FBQ2pDLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsZ0JBQWdCLEVBQUUsY0FBYztRQUNoQyxlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsY0FBYztRQUMvQixNQUFNLEVBQUUs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QUEsQUFoQkQsQ0FPcUMsSUFBSSxHQVN4QztTQVRZLGVBQWU7OztJQUNHLHdDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgaW1nTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnaW1nJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJheGlzTG9ja1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhY2tncm91bmRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJib3R0b21cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJjZW50ZXJlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29uc3RyYWluQWxpZ25cIjogXCJTdHJpbmcvRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiRXh0LmRvbS5FbGVtZW50L0hUTUxFbGVtZW50L1N0cmluZ1wiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc3BsYXllZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRvY2tlZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRyYWcuU291cmNlXCIsXG4gICAgXCJlbnRlckFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZXhpdEFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlci9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJmbG9hdGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZ1bGxzY3JlZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlQW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImhpZGVPbk1hc2tUYXBcIjogXCJCb29sZWFuXCIsXG4gICAgXCJodG1sXCI6IFwiU3RyaW5nL0V4dC5kb20uRWxlbWVudC9IVE1MRWxlbWVudFwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcImltYWdlQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxlZnRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWNvcmRcIjogXCJFeHQuZGF0YS5Nb2RlbFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWxhdGl2ZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlclRvXCI6IFwiRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2VsZkFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93QW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJzcmNcIjogXCJTdHJpbmdcIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsRGVmYXVsdHNcIjogXCJPYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ4dHlwZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwieVwiOiBcIk51bWJlclwiLFxuICAgIFwiekluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmFja2dyb3VuZENscycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdib3R0b20nLFxuICAgICdjZW50ZXJlZCcsXG4gICAgJ2NscycsXG4gICAgJ2NvbnN0cmFpbkFsaWduJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzcGxheWVkJyxcbiAgICAnZG9ja2VkJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZW50ZXJBbmltYXRpb24nLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZXhpdEFuaW1hdGlvbicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZUFuaW1hdGlvbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2ltYWdlQ2xzJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGVmdCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGUnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZWxmQWxpZ24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc3JjJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidpbWFnZSxldmVudCd9LFxuXHRcdHtuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2Vycm9yJyxwYXJhbWV0ZXJzOidpbWFnZSxlJ30sXG5cdFx0e25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonaW1hZ2UsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonaW1hZ2UsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonaW1hZ2UsZXZlbnQnfSxcblx0XHR7bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2xvYWQnLHBhcmFtZXRlcnM6J2ltYWdlLGUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLHRvSW5kZXgsZnJvbUluZGV4J30sXG5cdFx0e25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcblx0XHR7bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2VsZW1lbnQsaW5mbyd9LFxuXHRcdHtuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTondGFwJyxwYXJhbWV0ZXJzOidpbWFnZSxlJ30sXG5cdFx0e25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhZGRlZCcsXG5cdFx0J2JlZm9yZWJvdHRvbWNoYW5nZScsXG5cdFx0J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlbGVmdGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J2JlZm9yZXJpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3JldG9wY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnYm90dG9tY2hhbmdlJyxcblx0XHQnY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdkb2NrZWRjaGFuZ2UnLFxuXHRcdCdlcmFzZWQnLFxuXHRcdCdlcnJvcicsXG5cdFx0J2Zsb2F0aW5nY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2Z1bGxzY3JlZW4nLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCdoaWRlJyxcblx0XHQnaW5pdGlhbGl6ZScsXG5cdFx0J2xlZnRjaGFuZ2UnLFxuXHRcdCdsb2FkJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmVkJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndGFwJyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ltZycsIFxuICBpbnB1dHM6IGltZ01ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGltZ01ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRJbWdDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRJbWdDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge3N1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxpbWdNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LGltZ01ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGltZ01ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19