/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var splitterMetaData = /** @class */ (function () {
    function splitterMetaData() {
    }
    splitterMetaData.XTYPE = 'splitter';
    splitterMetaData.PROPERTIESOBJECT = {
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
        "collapsedCls": "String",
        "collapseOnDblClick": "Boolean",
        "collapseTarget": "String/Ext.panel.Panel",
        "collapsible": "Boolean",
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
        "defaultSplitMax": "Number",
        "defaultSplitMin": "Number",
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
        "performCollapse": "Boolean",
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
        "size": "Number",
        "stateEvents": "String[]",
        "stateful": "Boolean/Object",
        "stateId": "String",
        "style": "String/Object",
        "tabIndex": "Number",
        "toFrontOnShow": "Boolean",
        "touchAction": "Object",
        "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
        "tplWriteMode": "String",
        "tracker": "Object",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String",
        "uiCls": "String[]",
        "userCls": "String/String[]",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "weight": "Number",
        "width": "Number|String",
        "xtype": "Ext.enums.Widget",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    splitterMetaData.PROPERTIES = [
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
        'collapsedCls',
        'collapseOnDblClick',
        'collapseTarget',
        'collapsible',
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
        'defaultSplitMax',
        'defaultSplitMin',
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
        'performCollapse',
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
        'size',
        'stateEvents',
        'stateful',
        'stateId',
        'style',
        'tabIndex',
        'toFrontOnShow',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'tracker',
        'twoWayBindable',
        'ui',
        'uiCls',
        'userCls',
        'viewModel',
        'weight',
        'width',
        'xtype',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    splitterMetaData.EVENTS = [
        { name: 'activate', parameters: 'splitter' },
        { name: 'added', parameters: 'splitter,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'splitter' },
        { name: 'afterrender', parameters: 'splitter' },
        { name: 'beforeactivate', parameters: 'splitter' },
        { name: 'beforedeactivate', parameters: 'splitter' },
        { name: 'beforedestroy', parameters: 'splitter' },
        { name: 'beforehide', parameters: 'splitter' },
        { name: 'beforerender', parameters: 'splitter' },
        { name: 'beforeshow', parameters: 'splitter' },
        { name: 'beforestaterestore', parameters: 'splitter,state' },
        { name: 'beforestatesave', parameters: 'splitter,state' },
        { name: 'blur', parameters: 'splitter,event' },
        { name: 'boxready', parameters: 'splitter,width,height' },
        { name: 'deactivate', parameters: 'splitter' },
        { name: 'destroy', parameters: 'splitter' },
        { name: 'disable', parameters: 'splitter' },
        { name: 'enable', parameters: 'splitter' },
        { name: 'focus', parameters: 'splitter,event' },
        { name: 'focusenter', parameters: 'splitter,event' },
        { name: 'focusleave', parameters: 'splitter,event' },
        { name: 'hide', parameters: 'splitter' },
        { name: 'move', parameters: 'splitter,x,y' },
        { name: 'removed', parameters: 'splitter,ownerCt' },
        { name: 'render', parameters: 'splitter' },
        { name: 'resize', parameters: 'splitter,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'splitter' },
        { name: 'staterestore', parameters: 'splitter,state' },
        { name: 'statesave', parameters: 'splitter,state' },
        { name: 'ready', parameters: '' }
    ];
    splitterMetaData.EVENTNAMES = [
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
    return splitterMetaData;
}());
export { splitterMetaData };
if (false) {
    /** @type {?} */
    splitterMetaData.XTYPE;
    /** @type {?} */
    splitterMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    splitterMetaData.PROPERTIES;
    /** @type {?} */
    splitterMetaData.EVENTS;
    /** @type {?} */
    splitterMetaData.EVENTNAMES;
}
var ExtSplitterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSplitterComponent, _super);
    function ExtSplitterComponent(eRef) {
        return _super.call(this, eRef, splitterMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtSplitterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(splitterMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtSplitterComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtSplitterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'splitter',
                    inputs: splitterMetaData.PROPERTIES,
                    outputs: splitterMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtSplitterComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtSplitterComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtSplitterComponent;
}(base));
export { ExtSplitterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwbGl0dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtc3BsaXR0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQWdUQSxDQUFDO0lBL1NlLHNCQUFLLEdBQVcsVUFBVSxDQUFDO0lBQzNCLGlDQUFnQixHQUFRO1FBQ3BDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsUUFBUSxFQUFFLGVBQWU7UUFDekIsWUFBWSxFQUFFLDRDQUE0QztRQUMxRCxZQUFZLEVBQUUsU0FBUztRQUN2QixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsUUFBUTtRQUNuQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixjQUFjLEVBQUUsUUFBUTtRQUN4QixvQkFBb0IsRUFBRSxTQUFTO1FBQy9CLGdCQUFnQixFQUFFLHdCQUF3QjtRQUMxQyxhQUFhLEVBQUUsU0FBUztRQUN4QixhQUFhLEVBQUUsUUFBUTtRQUN2QixjQUFjLEVBQUUsUUFBUTtRQUN4QixpQkFBaUIsRUFB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VSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQSxDQUFDO0lBQ3JELDBFQUEwRTs7Ozs7SUFDbkUsaURBQWtCOzs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixNQUFNLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtvQkFDbkMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLFVBQVU7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFDLENBQUM7b0JBQ2pGLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQTNUQyxVQUFVOztJQW9VWiwyQkFBQztDQUFBLEFBZkQsQ0FPMEMsSUFBSSxHQVE3QztTQVJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIHNwbGl0dGVyTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnc3BsaXR0ZXInO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFjdGl2ZUNvdW50ZXJcIjogXCJOdW1iZXJcIixcbiAgICBcImFsaWduT25TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbGlnblRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYW5jaG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbmltYXRlU2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXV0b0VsXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiYXV0b1JlbmRlclwiOiBcIkJvb2xlYW4vU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiYXV0b1Njcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImF1dG9TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFzZUNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIk51bWJlci9TdHJpbmcvQm9vbGVhblwiLFxuICAgIFwiY2hpbGRFbHNcIjogXCJPYmplY3QvU3RyaW5nW10vT2JqZWN0W11cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sbGFwc2VkQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb2xsYXBzZU9uRGJsQ2xpY2tcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb2xsYXBzZVRhcmdldFwiOiBcIlN0cmluZy9FeHQucGFuZWwuUGFuZWxcIixcbiAgICBcImNvbGxhcHNpYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29sdW1uV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29tcG9uZW50TGF5b3V0XCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiY29uc3RyYWluXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uc3RyYWludEluc2V0c1wiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImNvbnN0cmFpblRvXCI6IFwiRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0QWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVmYXVsdFNwbGl0TWF4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJkZWZhdWx0U3BsaXRNaW5cIjogXCJOdW1iZXJcIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImRvY2tcIjogXCIndG9wJy8nYm90dG9tJy8nbGVmdCcvJ3JpZ2h0J1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcImZpeGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlclwiLFxuICAgIFwiZmxvYXRpbmdcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZm9jdXNPblRvRnJvbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb3JtQmluZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZyYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxpcXVpZExheW91dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibGl2ZURyYWdcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsb2FkZXJcIjogXCJFeHQuQ29tcG9uZW50TG9hZGVyL09iamVjdFwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWFza0RlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXNrRWxlbWVudFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWF4SGVpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5XaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm92ZXJDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WFwiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dZXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGVyZm9ybUNvbGxhcHNlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVnaW9uXCI6IFwiJ25vcnRoJy8nc291dGgnLydlYXN0Jy8nd2VzdCcvJ2NlbnRlcidcIixcbiAgICBcInJlbmRlckNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyRGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyU2VsZWN0b3JzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIlN0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJlbmRlclRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJyZXNpemFibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwicmVzaXplSGFuZGxlc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwic2F2ZURlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcInNoYWRvd09mZnNldFwiOiBcIk51bWJlclwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaHJpbmtXcmFwXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcInNpemVcIjogXCJOdW1iZXJcIixcbiAgICBcInN0YXRlRXZlbnRzXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9FeHQuVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYWNrZXJcIjogXCJPYmplY3RcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmdcIixcbiAgICBcInVpQ2xzXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJ4dHlwZVwiOiBcIkV4dC5lbnVtcy5XaWRnZXRcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ291bnRlcicsXG4gICAgJ2FsaWduT25TY3JvbGwnLFxuICAgICdhbGlnblRhcmdldCcsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5jaG9yJyxcbiAgICAnYW5pbWF0ZVNoYWRvdycsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvRWwnLFxuICAgICdhdXRvUmVuZGVyJyxcbiAgICAnYXV0b1Njcm9sbCcsXG4gICAgJ2F1dG9TaG93JyxcbiAgICAnYmFzZUNscycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjaGlsZEVscycsXG4gICAgJ2NscycsXG4gICAgJ2NvbGxhcHNlZENscycsXG4gICAgJ2NvbGxhcHNlT25EYmxDbGljaycsXG4gICAgJ2NvbGxhcHNlVGFyZ2V0JyxcbiAgICAnY29sbGFwc2libGUnLFxuICAgICdjb2x1bW5XaWR0aCcsXG4gICAgJ2NvbXBvbmVudENscycsXG4gICAgJ2NvbXBvbmVudExheW91dCcsXG4gICAgJ2NvbnN0cmFpbicsXG4gICAgJ2NvbnN0cmFpbnRJbnNldHMnLFxuICAgICdjb25zdHJhaW5UbycsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdEFsaWduJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZWZhdWx0U3BsaXRNYXgnLFxuICAgICdkZWZhdWx0U3BsaXRNaW4nLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc2FibGVkQ2xzJyxcbiAgICAnZG9jaycsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2ZpeGVkJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0aW5nJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb2N1c09uVG9Gcm9udCcsXG4gICAgJ2Zvcm1CaW5kJyxcbiAgICAnZnJhbWUnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaXF1aWRMYXlvdXQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdsaXZlRHJhZycsXG4gICAgJ2xvYWRlcicsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hc2tEZWZhdWx0cycsXG4gICAgJ21hc2tFbGVtZW50JyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21vZGFsJyxcbiAgICAnbW9kZWxWYWxpZGF0aW9uJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdvdmVyQ2xzJyxcbiAgICAnb3ZlcmZsb3dYJyxcbiAgICAnb3ZlcmZsb3dZJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BlcmZvcm1Db2xsYXBzZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWdpb24nLFxuICAgICdyZW5kZXJDb25maWcnLFxuICAgICdyZW5kZXJEYXRhJyxcbiAgICAncmVuZGVyU2VsZWN0b3JzJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZW5kZXJUcGwnLFxuICAgICdyZXNpemFibGUnLFxuICAgICdyZXNpemVIYW5kbGVzJyxcbiAgICAnc2F2ZURlbGF5JyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFkb3dPZmZzZXQnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nocmlua1dyYXAnLFxuICAgICdzaXplJyxcbiAgICAnc3RhdGVFdmVudHMnLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhY2tlcicsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1aUNscycsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3h0eXBlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOidzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc3BsaXR0ZXIsY29udGFpbmVyLHBvcyd9LFxuXHRcdHtuYW1lOidhZnRlcmxheW91dGFuaW1hdGlvbicscGFyYW1ldGVyczonc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYWZ0ZXJyZW5kZXInLHBhcmFtZXRlcnM6J3NwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVkZXN0cm95JyxwYXJhbWV0ZXJzOidzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVyZW5kZXInLHBhcmFtZXRlcnM6J3NwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlcmVzdG9yZScscGFyYW1ldGVyczonc3BsaXR0ZXIsc3RhdGUnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOidzcGxpdHRlcixzdGF0ZSd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidzcGxpdHRlcixldmVudCd9LFxuXHRcdHtuYW1lOidib3hyZWFkeScscGFyYW1ldGVyczonc3BsaXR0ZXIsd2lkdGgsaGVpZ2h0J30sXG5cdFx0e25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J3NwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6J3NwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2Rpc2FibGUnLHBhcmFtZXRlcnM6J3NwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2VuYWJsZScscGFyYW1ldGVyczonc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J3NwbGl0dGVyLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3NwbGl0dGVyLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J3NwbGl0dGVyLGV2ZW50J30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NwbGl0dGVyJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J3NwbGl0dGVyLHgseSd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzcGxpdHRlcixvd25lckN0J30sXG5cdFx0e25hbWU6J3JlbmRlcicscGFyYW1ldGVyczonc3BsaXR0ZXInfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidzcGxpdHRlcix3aWR0aCxoZWlnaHQsb2xkV2lkdGgsb2xkSGVpZ2h0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NwbGl0dGVyJ30sXG5cdFx0e25hbWU6J3N0YXRlcmVzdG9yZScscGFyYW1ldGVyczonc3BsaXR0ZXIsc3RhdGUnfSxcblx0XHR7bmFtZTonc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOidzcGxpdHRlcixzdGF0ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dGFuaW1hdGlvbicsXG5cdFx0J2FmdGVycmVuZGVyJyxcblx0XHQnYmVmb3JlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVzdHJveScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVyZW5kZXInLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3Jlc3RhdGVyZXN0b3JlJyxcblx0XHQnYmVmb3Jlc3RhdGVzYXZlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JveHJlYWR5Jyxcblx0XHQnZGVhY3RpdmF0ZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlJyxcblx0XHQnZW5hYmxlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdtb3ZlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3JlbmRlcicsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzdGF0ZXJlc3RvcmUnLFxuXHRcdCdzdGF0ZXNhdmUnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcGxpdHRlcicsIFxuICBpbnB1dHM6IHNwbGl0dGVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogc3BsaXR0ZXJNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0U3BsaXR0ZXJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRTcGxpdHRlckNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLHNwbGl0dGVyTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KHNwbGl0dGVyTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=