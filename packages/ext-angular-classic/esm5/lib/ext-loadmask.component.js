/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var loadmaskMetaData = /** @class */ (function () {
    function loadmaskMetaData() {
    }
    loadmaskMetaData.XTYPE = 'loadmask';
    loadmaskMetaData.PROPERTIESOBJECT = {
        "activeCounter": "Number",
        "alignOnScroll": "Boolean",
        "alignTarget": "String",
        "alwaysOnTop": "Boolean/Number",
        "anchor": "String",
        "animateShadow": "Boolean",
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "autoEl": "String/Object",
        "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
        "autoScroll": "Boolean",
        "autoShow": "Boolean",
        "baseCls": "String",
        "bind": "Object/String",
        "border": "Number/String/Boolean",
        "childEls": "Object/String[]/Object[]",
        "cls": "String/String[]",
        "columnWidth": "Number",
        "componentCls": "String",
        "componentLayout": "String/Object",
        "constrain": "Boolean",
        "constraintInsets": "Object/String",
        "constrainTo": "Ext.util.Region/Ext.dom.Element",
        "contentEl": "String",
        "controller": "String/Object/Ext.app.ViewController",
        "data": "Object",
        "defaultAlign": "String",
        "defaultListenerScope": "Boolean",
        "disabled": "Boolean",
        "disabledCls": "String",
        "dock": "'top'/'bottom'/'left'/'right'",
        "draggable": "Boolean/Object",
        "fixed": "Boolean",
        "flex": "Number",
        "floating": "Boolean",
        "focusCls": "String",
        "focusOnToFront": "Boolean",
        "formBind": "Boolean",
        "frame": "Boolean",
        "height": "Number|String",
        "hidden": "Boolean",
        "hideMode": "String",
        "html": "String/Object",
        "id": "String",
        "itemId": "String",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "liquidLayout": "Boolean",
        "listeners": "Object",
        "liveDrag": "Boolean",
        "loader": "Ext.ComponentLoader/Object",
        "margin": "Number/String",
        "maskDefaults": "Object",
        "maskElement": "String",
        "maxHeight": "Number",
        "maxWidth": "Number",
        "minHeight": "Number",
        "minWidth": "Number",
        "modal": "Boolean",
        "modelValidation": "Boolean",
        "msg": "String",
        "nameable": "Boolean",
        "overCls": "String",
        "overflowX": "String",
        "overflowY": "String",
        "padding": "Number/String",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "reference": "String",
        "region": "'north'/'south'/'east'/'west'/'center'",
        "renderConfig": "Object",
        "renderData": "Object",
        "renderSelectors": "Object",
        "renderTo": "String/HTMLElement/Ext.dom.Element",
        "renderTpl": "Ext.XTemplate/String/String[]",
        "resizable": "Boolean/Object",
        "resizeHandles": "String",
        "saveDelay": "Number",
        "scrollable": "Boolean/String/Object",
        "session": "Boolean/Object/Ext.data.Session",
        "shadow": "String/Boolean",
        "shadowOffset": "Number",
        "shareableName": "Boolean",
        "shim": "Boolean",
        "shrinkWrap": "Boolean/Number",
        "stateEvents": "String[]",
        "stateful": "Boolean/Object",
        "stateId": "String",
        "store": "Ext.data.Store",
        "style": "String/Object",
        "tabIndex": "Number",
        "target": "Ext.Component",
        "toFrontOnShow": "Boolean",
        "touchAction": "Object",
        "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
        "tplWriteMode": "String",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String",
        "uiCls": "String[]",
        "useMsg": "Boolean",
        "userCls": "String/String[]",
        "useTargetEl": "Boolean",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "weight": "Number",
        "width": "Number|String",
        "xtype": "Ext.enums.Widget",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    loadmaskMetaData.PROPERTIES = [
        'activeCounter',
        'alignOnScroll',
        'alignTarget',
        'alwaysOnTop',
        'anchor',
        'animateShadow',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoEl',
        'autoRender',
        'autoScroll',
        'autoShow',
        'baseCls',
        'bind',
        'border',
        'childEls',
        'cls',
        'columnWidth',
        'componentCls',
        'componentLayout',
        'constrain',
        'constraintInsets',
        'constrainTo',
        'contentEl',
        'controller',
        'data',
        'defaultAlign',
        'defaultListenerScope',
        'disabled',
        'disabledCls',
        'dock',
        'draggable',
        'fixed',
        'flex',
        'floating',
        'focusCls',
        'focusOnToFront',
        'formBind',
        'frame',
        'height',
        'hidden',
        'hideMode',
        'html',
        'id',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'liquidLayout',
        'listeners',
        'liveDrag',
        'loader',
        'margin',
        'maskDefaults',
        'maskElement',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'msg',
        'nameable',
        'overCls',
        'overflowX',
        'overflowY',
        'padding',
        'plugins',
        'publishes',
        'reference',
        'region',
        'renderConfig',
        'renderData',
        'renderSelectors',
        'renderTo',
        'renderTpl',
        'resizable',
        'resizeHandles',
        'saveDelay',
        'scrollable',
        'session',
        'shadow',
        'shadowOffset',
        'shareableName',
        'shim',
        'shrinkWrap',
        'stateEvents',
        'stateful',
        'stateId',
        'store',
        'style',
        'tabIndex',
        'target',
        'toFrontOnShow',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'twoWayBindable',
        'ui',
        'uiCls',
        'useMsg',
        'userCls',
        'useTargetEl',
        'viewModel',
        'weight',
        'width',
        'xtype',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    loadmaskMetaData.EVENTS = [
        { name: 'activate', parameters: 'loadmask' },
        { name: 'added', parameters: 'loadmask,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'loadmask' },
        { name: 'afterrender', parameters: 'loadmask' },
        { name: 'beforeactivate', parameters: 'loadmask' },
        { name: 'beforedeactivate', parameters: 'loadmask' },
        { name: 'beforedestroy', parameters: 'loadmask' },
        { name: 'beforehide', parameters: 'loadmask' },
        { name: 'beforerender', parameters: 'loadmask' },
        { name: 'beforeshow', parameters: 'loadmask' },
        { name: 'beforestaterestore', parameters: 'loadmask,state' },
        { name: 'beforestatesave', parameters: 'loadmask,state' },
        { name: 'blur', parameters: 'loadmask,event' },
        { name: 'boxready', parameters: 'loadmask,width,height' },
        { name: 'deactivate', parameters: 'loadmask' },
        { name: 'destroy', parameters: 'loadmask' },
        { name: 'disable', parameters: 'loadmask' },
        { name: 'enable', parameters: 'loadmask' },
        { name: 'focus', parameters: 'loadmask,event' },
        { name: 'focusenter', parameters: 'loadmask,event' },
        { name: 'focusleave', parameters: 'loadmask,event' },
        { name: 'hide', parameters: 'loadmask' },
        { name: 'move', parameters: 'loadmask,x,y' },
        { name: 'removed', parameters: 'loadmask,ownerCt' },
        { name: 'render', parameters: 'loadmask' },
        { name: 'resize', parameters: 'loadmask,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'loadmask' },
        { name: 'staterestore', parameters: 'loadmask,state' },
        { name: 'statesave', parameters: 'loadmask,state' },
        { name: 'ready', parameters: '' }
    ];
    loadmaskMetaData.EVENTNAMES = [
        'activate',
        'added',
        'afterlayoutanimation',
        'afterrender',
        'beforeactivate',
        'beforedeactivate',
        'beforedestroy',
        'beforehide',
        'beforerender',
        'beforeshow',
        'beforestaterestore',
        'beforestatesave',
        'blur',
        'boxready',
        'deactivate',
        'destroy',
        'disable',
        'enable',
        'focus',
        'focusenter',
        'focusleave',
        'hide',
        'move',
        'removed',
        'render',
        'resize',
        'show',
        'staterestore',
        'statesave',
        'ready'
    ];
    return loadmaskMetaData;
}());
export { loadmaskMetaData };
if (false) {
    /** @type {?} */
    loadmaskMetaData.XTYPE;
    /** @type {?} */
    loadmaskMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    loadmaskMetaData.PROPERTIES;
    /** @type {?} */
    loadmaskMetaData.EVENTS;
    /** @type {?} */
    loadmaskMetaData.EVENTNAMES;
}
var ExtLoadmaskComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtLoadmaskComponent, _super);
    function ExtLoadmaskComponent(eRef) {
        return _super.call(this, eRef, loadmaskMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtLoadmaskComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(loadmaskMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtLoadmaskComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtLoadmaskComponent.decorators = [
        { type: Component, args: [{
                    selector: 'loadmask',
                    inputs: loadmaskMetaData.PROPERTIES,
                    outputs: loadmaskMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtLoadmaskComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtLoadmaskComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtLoadmaskComponent;
}(base));
export { ExtLoadmaskComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWxvYWRtYXNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtbG9hZG1hc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQXNTQSxDQUFDO0lBclNlLHNCQUFLLEdBQVcsVUFBVSxDQUFDO0lBQzNCLGlDQUFnQixHQUFRO1FBQ3BDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsUUFBUSxFQUFFLGVBQWU7UUFDekIsWUFBWSxFQUFFLDRDQUE0QztRQUMxRCxZQUFZLEVBQUUsU0FBUztRQUN2QixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsUUFBUTtRQUNuQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixhQUFhLEVBQUUsUUFBUTtRQUN2QixjQUFjLEVBQUUsUUFBUTtRQUN4QixpQkFBaUIsRUFBRSxlQUFlO1FBQ2xDLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLGtCQUFrQixFQUFFLGVBQWU7UUFDbkMsYUFBYSxFQUFFLGlDQUFpQztRQUNoRCxXQUFXLEVBQUUs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QUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixNQUFNLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtvQkFDbkMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLFVBQVU7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFDLENBQUM7b0JBQ2pGLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQWpUQyxVQUFVOztJQTBUWiwyQkFBQztDQUFBLEFBZkQsQ0FPMEMsSUFBSSxHQVE3QztTQVJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGxvYWRtYXNrTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnbG9hZG1hc2snO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFjdGl2ZUNvdW50ZXJcIjogXCJOdW1iZXJcIixcbiAgICBcImFsaWduT25TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbGlnblRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYW5jaG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbmltYXRlU2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXV0b0VsXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiYXV0b1JlbmRlclwiOiBcIkJvb2xlYW4vU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiYXV0b1Njcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImF1dG9TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFzZUNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIk51bWJlci9TdHJpbmcvQm9vbGVhblwiLFxuICAgIFwiY2hpbGRFbHNcIjogXCJPYmplY3QvU3RyaW5nW10vT2JqZWN0W11cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sdW1uV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29tcG9uZW50TGF5b3V0XCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiY29uc3RyYWluXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uc3RyYWludEluc2V0c1wiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImNvbnN0cmFpblRvXCI6IFwiRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0QWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZG9ja1wiOiBcIid0b3AnLydib3R0b20nLydsZWZ0Jy8ncmlnaHQnXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiZml4ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb2N1c09uVG9Gcm9udFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvcm1CaW5kXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZnJhbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlxdWlkTGF5b3V0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsaXZlRHJhZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImxvYWRlclwiOiBcIkV4dC5Db21wb25lbnRMb2FkZXIvT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXNrRGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hc2tFbGVtZW50XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1zZ1wiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJvdmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1hcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlZ2lvblwiOiBcIidub3J0aCcvJ3NvdXRoJy8nZWFzdCcvJ3dlc3QnLydjZW50ZXInXCIsXG4gICAgXCJyZW5kZXJDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlckRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclNlbGVjdG9yc1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJTdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyZW5kZXJUcGxcIjogXCJFeHQuWFRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwicmVzaXphYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInJlc2l6ZUhhbmRsZXNcIjogXCJTdHJpbmdcIixcbiAgICBcInNhdmVEZWxheVwiOiBcIk51bWJlclwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIlN0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJzaGFkb3dPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hyaW5rV3JhcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJzdGF0ZUV2ZW50c1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJzdGF0ZWZ1bFwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJzdGF0ZUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzdG9yZVwiOiBcIkV4dC5kYXRhLlN0b3JlXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0YXJnZXRcIjogXCJFeHQuQ29tcG9uZW50XCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvRXh0LlRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidHBsV3JpdGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ1aUNsc1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJ1c2VNc2dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VUYXJnZXRFbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJ4dHlwZVwiOiBcIkV4dC5lbnVtcy5XaWRnZXRcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ291bnRlcicsXG4gICAgJ2FsaWduT25TY3JvbGwnLFxuICAgICdhbGlnblRhcmdldCcsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5jaG9yJyxcbiAgICAnYW5pbWF0ZVNoYWRvdycsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvRWwnLFxuICAgICdhdXRvUmVuZGVyJyxcbiAgICAnYXV0b1Njcm9sbCcsXG4gICAgJ2F1dG9TaG93JyxcbiAgICAnYmFzZUNscycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjaGlsZEVscycsXG4gICAgJ2NscycsXG4gICAgJ2NvbHVtbldpZHRoJyxcbiAgICAnY29tcG9uZW50Q2xzJyxcbiAgICAnY29tcG9uZW50TGF5b3V0JyxcbiAgICAnY29uc3RyYWluJyxcbiAgICAnY29uc3RyYWludEluc2V0cycsXG4gICAgJ2NvbnN0cmFpblRvJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0QWxpZ24nLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZWRDbHMnLFxuICAgICdkb2NrJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZml4ZWQnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2ZvY3VzT25Ub0Zyb250JyxcbiAgICAnZm9ybUJpbmQnLFxuICAgICdmcmFtZScsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpcXVpZExheW91dCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ2xpdmVEcmFnJyxcbiAgICAnbG9hZGVyJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza0RlZmF1bHRzJyxcbiAgICAnbWFza0VsZW1lbnQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICdtc2cnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ292ZXJDbHMnLFxuICAgICdvdmVyZmxvd1gnLFxuICAgICdvdmVyZmxvd1knLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZ2lvbicsXG4gICAgJ3JlbmRlckNvbmZpZycsXG4gICAgJ3JlbmRlckRhdGEnLFxuICAgICdyZW5kZXJTZWxlY3RvcnMnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JlbmRlclRwbCcsXG4gICAgJ3Jlc2l6YWJsZScsXG4gICAgJ3Jlc2l6ZUhhbmRsZXMnLFxuICAgICdzYXZlRGVsYXknLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYWRvd09mZnNldCcsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hyaW5rV3JhcCcsXG4gICAgJ3N0YXRlRXZlbnRzJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3RvcmUnLFxuICAgICdzdHlsZScsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndGFyZ2V0JyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VpQ2xzJyxcbiAgICAndXNlTXNnJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZVRhcmdldEVsJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd4dHlwZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOidsb2FkbWFzayd9LFxuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonbG9hZG1hc2ssY29udGFpbmVyLHBvcyd9LFxuXHRcdHtuYW1lOidhZnRlcmxheW91dGFuaW1hdGlvbicscGFyYW1ldGVyczonbG9hZG1hc2snfSxcblx0XHR7bmFtZTonYWZ0ZXJyZW5kZXInLHBhcmFtZXRlcnM6J2xvYWRtYXNrJ30sXG5cdFx0e25hbWU6J2JlZm9yZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidsb2FkbWFzayd9LFxuXHRcdHtuYW1lOidiZWZvcmVkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidsb2FkbWFzayd9LFxuXHRcdHtuYW1lOidiZWZvcmVkZXN0cm95JyxwYXJhbWV0ZXJzOidsb2FkbWFzayd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidsb2FkbWFzayd9LFxuXHRcdHtuYW1lOidiZWZvcmVyZW5kZXInLHBhcmFtZXRlcnM6J2xvYWRtYXNrJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J2xvYWRtYXNrJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlcmVzdG9yZScscGFyYW1ldGVyczonbG9hZG1hc2ssc3RhdGUnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOidsb2FkbWFzayxzdGF0ZSd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidsb2FkbWFzayxldmVudCd9LFxuXHRcdHtuYW1lOidib3hyZWFkeScscGFyYW1ldGVyczonbG9hZG1hc2ssd2lkdGgsaGVpZ2h0J30sXG5cdFx0e25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2xvYWRtYXNrJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6J2xvYWRtYXNrJ30sXG5cdFx0e25hbWU6J2Rpc2FibGUnLHBhcmFtZXRlcnM6J2xvYWRtYXNrJ30sXG5cdFx0e25hbWU6J2VuYWJsZScscGFyYW1ldGVyczonbG9hZG1hc2snfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2xvYWRtYXNrLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2xvYWRtYXNrLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2xvYWRtYXNrLGV2ZW50J30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J2xvYWRtYXNrJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J2xvYWRtYXNrLHgseSd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidsb2FkbWFzayxvd25lckN0J30sXG5cdFx0e25hbWU6J3JlbmRlcicscGFyYW1ldGVyczonbG9hZG1hc2snfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidsb2FkbWFzayx3aWR0aCxoZWlnaHQsb2xkV2lkdGgsb2xkSGVpZ2h0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J2xvYWRtYXNrJ30sXG5cdFx0e25hbWU6J3N0YXRlcmVzdG9yZScscGFyYW1ldGVyczonbG9hZG1hc2ssc3RhdGUnfSxcblx0XHR7bmFtZTonc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOidsb2FkbWFzayxzdGF0ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dGFuaW1hdGlvbicsXG5cdFx0J2FmdGVycmVuZGVyJyxcblx0XHQnYmVmb3JlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVzdHJveScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVyZW5kZXInLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3Jlc3RhdGVyZXN0b3JlJyxcblx0XHQnYmVmb3Jlc3RhdGVzYXZlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JveHJlYWR5Jyxcblx0XHQnZGVhY3RpdmF0ZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlJyxcblx0XHQnZW5hYmxlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdtb3ZlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3JlbmRlcicsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzdGF0ZXJlc3RvcmUnLFxuXHRcdCdzdGF0ZXNhdmUnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2FkbWFzaycsIFxuICBpbnB1dHM6IGxvYWRtYXNrTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogbG9hZG1hc2tNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0TG9hZG1hc2tDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRMb2FkbWFza0NvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGxvYWRtYXNrTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGxvYWRtYXNrTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=