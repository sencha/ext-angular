/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var tbspacerMetaData = /** @class */ (function () {
    function tbspacerMetaData() {
    }
    tbspacerMetaData.XTYPE = 'tbspacer';
    tbspacerMetaData.PROPERTIESOBJECT = {
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
        "style": "String/Object",
        "tabIndex": "Number",
        "toFrontOnShow": "Boolean",
        "touchAction": "Object",
        "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
        "tplWriteMode": "String",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String",
        "uiCls": "String[]",
        "userCls": "String/String[]",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "weight": "Number",
        "width": "Number|String",
        "xtype": "Ext.enums.Widget",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    tbspacerMetaData.PROPERTIES = [
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
        'style',
        'tabIndex',
        'toFrontOnShow',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'twoWayBindable',
        'ui',
        'uiCls',
        'userCls',
        'viewModel',
        'weight',
        'width',
        'xtype',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    tbspacerMetaData.EVENTS = [
        { name: 'activate', parameters: 'tbspacer' },
        { name: 'added', parameters: 'tbspacer,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'tbspacer' },
        { name: 'afterrender', parameters: 'tbspacer' },
        { name: 'beforeactivate', parameters: 'tbspacer' },
        { name: 'beforedeactivate', parameters: 'tbspacer' },
        { name: 'beforedestroy', parameters: 'tbspacer' },
        { name: 'beforehide', parameters: 'tbspacer' },
        { name: 'beforerender', parameters: 'tbspacer' },
        { name: 'beforeshow', parameters: 'tbspacer' },
        { name: 'beforestaterestore', parameters: 'tbspacer,state' },
        { name: 'beforestatesave', parameters: 'tbspacer,state' },
        { name: 'blur', parameters: 'tbspacer,event' },
        { name: 'boxready', parameters: 'tbspacer,width,height' },
        { name: 'deactivate', parameters: 'tbspacer' },
        { name: 'destroy', parameters: 'tbspacer' },
        { name: 'disable', parameters: 'tbspacer' },
        { name: 'enable', parameters: 'tbspacer' },
        { name: 'focus', parameters: 'tbspacer,event' },
        { name: 'focusenter', parameters: 'tbspacer,event' },
        { name: 'focusleave', parameters: 'tbspacer,event' },
        { name: 'hide', parameters: 'tbspacer' },
        { name: 'move', parameters: 'tbspacer,x,y' },
        { name: 'removed', parameters: 'tbspacer,ownerCt' },
        { name: 'render', parameters: 'tbspacer' },
        { name: 'resize', parameters: 'tbspacer,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'tbspacer' },
        { name: 'staterestore', parameters: 'tbspacer,state' },
        { name: 'statesave', parameters: 'tbspacer,state' },
        { name: 'ready', parameters: '' }
    ];
    tbspacerMetaData.EVENTNAMES = [
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
    return tbspacerMetaData;
}());
export { tbspacerMetaData };
if (false) {
    /** @type {?} */
    tbspacerMetaData.XTYPE;
    /** @type {?} */
    tbspacerMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    tbspacerMetaData.PROPERTIES;
    /** @type {?} */
    tbspacerMetaData.EVENTS;
    /** @type {?} */
    tbspacerMetaData.EVENTNAMES;
}
var ExtTbspacerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTbspacerComponent, _super);
    function ExtTbspacerComponent(eRef) {
        return _super.call(this, eRef, tbspacerMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtTbspacerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(tbspacerMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtTbspacerComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtTbspacerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tbspacer',
                    inputs: tbspacerMetaData.PROPERTIES,
                    outputs: tbspacerMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtTbspacerComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtTbspacerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtTbspacerComponent;
}(base));
export { ExtTbspacerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRic3BhY2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtdGJzcGFjZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTRSQSxDQUFDO0lBM1JlLHNCQUFLLEdBQVcsVUFBVSxDQUFDO0lBQzNCLGlDQUFnQixHQUFRO1FBQ3BDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsUUFBUSxFQUFFLGVBQWU7UUFDekIsWUFBWSxFQUFFLDRDQUE0QztRQUMxRCxZQUFZLEVBQUUsU0FBUztRQUN2QixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsUUFBUTtRQUNuQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixhQUFhLEVBQUUsUUFBUTtRQUN2QixjQUFjLEVBQUUsUUFBUTtRQUN4QixpQkFBaUIsRUFBRSxlQUFlO1FBQ2xDLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLGtCQUFrQixFQUFFLGVBQWU7UUFDbkMsYUFBYSxFQUFFLGlDQUFpQztRQUNoRCxXQUFXLEVBQUUs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QUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFDLENBQUM7b0JBQ2pGLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQXZTQyxVQUFVOztJQWdUWiwyQkFBQztDQUFBLEFBZkQsQ0FPMEMsSUFBSSxHQVE3QztTQVJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIHRic3BhY2VyTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAndGJzcGFjZXInO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFjdGl2ZUNvdW50ZXJcIjogXCJOdW1iZXJcIixcbiAgICBcImFsaWduT25TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbGlnblRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYW5jaG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbmltYXRlU2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXV0b0VsXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiYXV0b1JlbmRlclwiOiBcIkJvb2xlYW4vU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiYXV0b1Njcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImF1dG9TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFzZUNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIk51bWJlci9TdHJpbmcvQm9vbGVhblwiLFxuICAgIFwiY2hpbGRFbHNcIjogXCJPYmplY3QvU3RyaW5nW10vT2JqZWN0W11cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sdW1uV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29tcG9uZW50TGF5b3V0XCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiY29uc3RyYWluXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uc3RyYWludEluc2V0c1wiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImNvbnN0cmFpblRvXCI6IFwiRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0QWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZG9ja1wiOiBcIid0b3AnLydib3R0b20nLydsZWZ0Jy8ncmlnaHQnXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiZml4ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb2N1c09uVG9Gcm9udFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvcm1CaW5kXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZnJhbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlxdWlkTGF5b3V0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsaXZlRHJhZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImxvYWRlclwiOiBcIkV4dC5Db21wb25lbnRMb2FkZXIvT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXNrRGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hc2tFbGVtZW50XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib3ZlckNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dYXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1lcIjogXCJTdHJpbmdcIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWdpb25cIjogXCInbm9ydGgnLydzb3V0aCcvJ2Vhc3QnLyd3ZXN0Jy8nY2VudGVyJ1wiLFxuICAgIFwicmVuZGVyQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJEYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJTZWxlY3RvcnNcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclRvXCI6IFwiU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmVuZGVyVHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInJlc2l6YWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJyZXNpemVIYW5kbGVzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzYXZlRGVsYXlcIjogXCJOdW1iZXJcIixcbiAgICBcInNjcm9sbGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJTdHJpbmcvQm9vbGVhblwiLFxuICAgIFwic2hhZG93T2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNocmlua1dyYXBcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwic3RhdGVFdmVudHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwic3RhdGVmdWxcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwic3RhdGVJZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0YWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cGxcIjogXCJFeHQuWFRlbXBsYXRlL0V4dC5UZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidWlDbHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcInh0eXBlXCI6IFwiRXh0LmVudW1zLldpZGdldFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhY3RpdmVDb3VudGVyJyxcbiAgICAnYWxpZ25PblNjcm9sbCcsXG4gICAgJ2FsaWduVGFyZ2V0JyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhbmNob3InLFxuICAgICdhbmltYXRlU2hhZG93JyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9FbCcsXG4gICAgJ2F1dG9SZW5kZXInLFxuICAgICdhdXRvU2Nyb2xsJyxcbiAgICAnYXV0b1Nob3cnLFxuICAgICdiYXNlQ2xzJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NoaWxkRWxzJyxcbiAgICAnY2xzJyxcbiAgICAnY29sdW1uV2lkdGgnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb21wb25lbnRMYXlvdXQnLFxuICAgICdjb25zdHJhaW4nLFxuICAgICdjb25zdHJhaW50SW5zZXRzJyxcbiAgICAnY29uc3RyYWluVG8nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRBbGlnbicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlZENscycsXG4gICAgJ2RvY2snLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNPblRvRnJvbnQnLFxuICAgICdmb3JtQmluZCcsXG4gICAgJ2ZyYW1lJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdodG1sJyxcbiAgICAnaWQnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlxdWlkTGF5b3V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbGl2ZURyYWcnLFxuICAgICdsb2FkZXInLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrRGVmYXVsdHMnLFxuICAgICdtYXNrRWxlbWVudCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnb3ZlckNscycsXG4gICAgJ292ZXJmbG93WCcsXG4gICAgJ292ZXJmbG93WScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVnaW9uJyxcbiAgICAncmVuZGVyQ29uZmlnJyxcbiAgICAncmVuZGVyRGF0YScsXG4gICAgJ3JlbmRlclNlbGVjdG9ycycsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVuZGVyVHBsJyxcbiAgICAncmVzaXphYmxlJyxcbiAgICAncmVzaXplSGFuZGxlcycsXG4gICAgJ3NhdmVEZWxheScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhZG93T2Zmc2V0JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaHJpbmtXcmFwJyxcbiAgICAnc3RhdGVFdmVudHMnLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VpQ2xzJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneHR5cGUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczondGJzcGFjZXInfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3Ric3BhY2VyLGNvbnRhaW5lcixwb3MnfSxcblx0XHR7bmFtZTonYWZ0ZXJsYXlvdXRhbmltYXRpb24nLHBhcmFtZXRlcnM6J3Ric3BhY2VyJ30sXG5cdFx0e25hbWU6J2FmdGVycmVuZGVyJyxwYXJhbWV0ZXJzOid0YnNwYWNlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVhY3RpdmF0ZScscGFyYW1ldGVyczondGJzcGFjZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVhY3RpdmF0ZScscGFyYW1ldGVyczondGJzcGFjZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVzdHJveScscGFyYW1ldGVyczondGJzcGFjZXInfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczondGJzcGFjZXInfSxcblx0XHR7bmFtZTonYmVmb3JlcmVuZGVyJyxwYXJhbWV0ZXJzOid0YnNwYWNlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOid0YnNwYWNlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J3Ric3BhY2VyLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlc2F2ZScscGFyYW1ldGVyczondGJzcGFjZXIsc3RhdGUnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczondGJzcGFjZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonYm94cmVhZHknLHBhcmFtZXRlcnM6J3Ric3BhY2VyLHdpZHRoLGhlaWdodCd9LFxuXHRcdHtuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOid0YnNwYWNlcid9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOid0YnNwYWNlcid9LFxuXHRcdHtuYW1lOidkaXNhYmxlJyxwYXJhbWV0ZXJzOid0YnNwYWNlcid9LFxuXHRcdHtuYW1lOidlbmFibGUnLHBhcmFtZXRlcnM6J3Ric3BhY2VyJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOid0YnNwYWNlcixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOid0YnNwYWNlcixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid0YnNwYWNlcixldmVudCd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOid0YnNwYWNlcid9LFxuXHRcdHtuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOid0YnNwYWNlcix4LHknfSxcblx0XHR7bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczondGJzcGFjZXIsb3duZXJDdCd9LFxuXHRcdHtuYW1lOidyZW5kZXInLHBhcmFtZXRlcnM6J3Ric3BhY2VyJ30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczondGJzcGFjZXIsd2lkdGgsaGVpZ2h0LG9sZFdpZHRoLG9sZEhlaWdodCd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOid0YnNwYWNlcid9LFxuXHRcdHtuYW1lOidzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J3Ric3BhY2VyLHN0YXRlJ30sXG5cdFx0e25hbWU6J3N0YXRlc2F2ZScscGFyYW1ldGVyczondGJzcGFjZXIsc3RhdGUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhY3RpdmF0ZScsXG5cdFx0J2FkZGVkJyxcblx0XHQnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLFxuXHRcdCdhZnRlcnJlbmRlcicsXG5cdFx0J2JlZm9yZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVhY3RpdmF0ZScsXG5cdFx0J2JlZm9yZWRlc3Ryb3knLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlcmVuZGVyJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXN0YXRlcmVzdG9yZScsXG5cdFx0J2JlZm9yZXN0YXRlc2F2ZScsXG5cdFx0J2JsdXInLFxuXHRcdCdib3hyZWFkeScsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZScsXG5cdFx0J2VuYWJsZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoaWRlJyxcblx0XHQnbW92ZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZW5kZXInLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RhdGVyZXN0b3JlJyxcblx0XHQnc3RhdGVzYXZlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGJzcGFjZXInLCBcbiAgaW5wdXRzOiB0YnNwYWNlck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IHRic3BhY2VyTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFRic3BhY2VyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VGJzcGFjZXJDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZix0YnNwYWNlck1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdCh0YnNwYWNlck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19