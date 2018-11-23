/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var bordersplitterMetaData = /** @class */ (function () {
    function bordersplitterMetaData() {
    }
    bordersplitterMetaData.XTYPE = 'bordersplitter';
    bordersplitterMetaData.PROPERTIESOBJECT = {
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
        "fitToParent": "Boolean",
        "config": "Object",
    };
    bordersplitterMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    bordersplitterMetaData.EVENTS = [
        { name: 'activate', parameters: 'bordersplitter' },
        { name: 'added', parameters: 'bordersplitter,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'bordersplitter' },
        { name: 'afterrender', parameters: 'bordersplitter' },
        { name: 'beforeactivate', parameters: 'bordersplitter' },
        { name: 'beforedeactivate', parameters: 'bordersplitter' },
        { name: 'beforedestroy', parameters: 'bordersplitter' },
        { name: 'beforehide', parameters: 'bordersplitter' },
        { name: 'beforerender', parameters: 'bordersplitter' },
        { name: 'beforeshow', parameters: 'bordersplitter' },
        { name: 'beforestaterestore', parameters: 'bordersplitter,state' },
        { name: 'beforestatesave', parameters: 'bordersplitter,state' },
        { name: 'blur', parameters: 'bordersplitter,event' },
        { name: 'boxready', parameters: 'bordersplitter,width,height' },
        { name: 'deactivate', parameters: 'bordersplitter' },
        { name: 'destroy', parameters: 'bordersplitter' },
        { name: 'disable', parameters: 'bordersplitter' },
        { name: 'enable', parameters: 'bordersplitter' },
        { name: 'focus', parameters: 'bordersplitter,event' },
        { name: 'focusenter', parameters: 'bordersplitter,event' },
        { name: 'focusleave', parameters: 'bordersplitter,event' },
        { name: 'hide', parameters: 'bordersplitter' },
        { name: 'move', parameters: 'bordersplitter,x,y' },
        { name: 'removed', parameters: 'bordersplitter,ownerCt' },
        { name: 'render', parameters: 'bordersplitter' },
        { name: 'resize', parameters: 'bordersplitter,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'bordersplitter' },
        { name: 'staterestore', parameters: 'bordersplitter,state' },
        { name: 'statesave', parameters: 'bordersplitter,state' },
        { name: 'ready', parameters: '' }
    ];
    bordersplitterMetaData.EVENTNAMES = [
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
    return bordersplitterMetaData;
}());
export { bordersplitterMetaData };
if (false) {
    /** @type {?} */
    bordersplitterMetaData.XTYPE;
    /** @type {?} */
    bordersplitterMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    bordersplitterMetaData.PROPERTIES;
    /** @type {?} */
    bordersplitterMetaData.EVENTS;
    /** @type {?} */
    bordersplitterMetaData.EVENTNAMES;
}
var ExtBordersplitterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtBordersplitterComponent, _super);
    function ExtBordersplitterComponent(eRef) {
        return _super.call(this, eRef, bordersplitterMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtBordersplitterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(bordersplitterMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtBordersplitterComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtBordersplitterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bordersplitter',
                    inputs: bordersplitterMetaData.PROPERTIES,
                    outputs: bordersplitterMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtBordersplitterComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtBordersplitterComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtBordersplitterComponent;
}(base));
export { ExtBordersplitterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWJvcmRlcnNwbGl0dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtYm9yZGVyc3BsaXR0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQThTQSxDQUFDO0lBN1NlLDRCQUFLLEdBQVcsZ0JBQWdCLENBQUM7SUFDakMsdUNBQWdCLEdBQVE7UUFDcEMsZUFBZSxFQUFFLFFBQVE7UUFDekIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixRQUFRLEVBQUUsUUFBUTtRQUNsQixlQUFlLEVBQUUsU0FBUztRQUMxQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixRQUFRLEVBQUUsZUFBZTtRQUN6QixZQUFZLEVBQUUsNENBQTRDO1FBQzFELFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsVUFBVSxFQUFFLDBCQUEwQjtRQUN0QyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLG9CQUFvQixFQUFFLFNBQVM7UUFDL0IsZ0JBQWdCLEVBQUUsd0JBQXdCO1FBQzFDLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGNBQWMsRUFBRSxRQUFRO1FB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QUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUEsQ0FBQSxDQUFDO0lBQzNELDBFQUEwRTs7Ozs7SUFDbkUsdURBQWtCOzs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxVQUFVO29CQUN6QyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsVUFBVTtvQkFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDBCQUEwQixFQUExQixDQUEwQixDQUFDLEVBQUMsQ0FBQztvQkFDdkYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBelRDLFVBQVU7O0lBa1VaLGlDQUFDO0NBQUEsQUFmRCxDQU9nRCxJQUFJLEdBUW5EO1NBUlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYm9yZGVyc3BsaXR0ZXJNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdib3JkZXJzcGxpdHRlcic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWN0aXZlQ291bnRlclwiOiBcIk51bWJlclwiLFxuICAgIFwiYWxpZ25PblNjcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFsaWduVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhbmNob3JcIjogXCJTdHJpbmdcIixcbiAgICBcImFuaW1hdGVTaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhdXRvRWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJhdXRvUmVuZGVyXCI6IFwiQm9vbGVhbi9TdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJhdXRvU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXV0b1Nob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiYXNlQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiTnVtYmVyL1N0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJjaGlsZEVsc1wiOiBcIk9iamVjdC9TdHJpbmdbXS9PYmplY3RbXVwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb2xsYXBzZWRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbGxhcHNlT25EYmxDbGlja1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbGxhcHNlVGFyZ2V0XCI6IFwiU3RyaW5nL0V4dC5wYW5lbC5QYW5lbFwiLFxuICAgIFwiY29sbGFwc2libGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb2x1bW5XaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwiY29tcG9uZW50Q2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb21wb25lbnRMYXlvdXRcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJjb25zdHJhaW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25zdHJhaW50SW5zZXRzXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiY29uc3RyYWluVG9cIjogXCJFeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZWZhdWx0U3BsaXRNYXhcIjogXCJOdW1iZXJcIixcbiAgICBcImRlZmF1bHRTcGxpdE1pblwiOiBcIk51bWJlclwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZG9ja1wiOiBcIid0b3AnLydib3R0b20nLydsZWZ0Jy8ncmlnaHQnXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiZml4ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb2N1c09uVG9Gcm9udFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvcm1CaW5kXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZnJhbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlxdWlkTGF5b3V0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsaXZlRHJhZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImxvYWRlclwiOiBcIkV4dC5Db21wb25lbnRMb2FkZXIvT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXNrRGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hc2tFbGVtZW50XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib3ZlckNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dYXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1lcIjogXCJTdHJpbmdcIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwZXJmb3JtQ29sbGFwc2VcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWdpb25cIjogXCInbm9ydGgnLydzb3V0aCcvJ2Vhc3QnLyd3ZXN0Jy8nY2VudGVyJ1wiLFxuICAgIFwicmVuZGVyQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJEYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJTZWxlY3RvcnNcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclRvXCI6IFwiU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmVuZGVyVHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInJlc2l6YWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJyZXNpemVIYW5kbGVzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzYXZlRGVsYXlcIjogXCJOdW1iZXJcIixcbiAgICBcInNjcm9sbGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJTdHJpbmcvQm9vbGVhblwiLFxuICAgIFwic2hhZG93T2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNocmlua1dyYXBcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwic2l6ZVwiOiBcIk51bWJlclwiLFxuICAgIFwic3RhdGVFdmVudHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwic3RhdGVmdWxcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwic3RhdGVJZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0YWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cGxcIjogXCJFeHQuWFRlbXBsYXRlL0V4dC5UZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHJhY2tlclwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidWlDbHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcInh0eXBlXCI6IFwiRXh0LmVudW1zLldpZGdldFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhY3RpdmVDb3VudGVyJyxcbiAgICAnYWxpZ25PblNjcm9sbCcsXG4gICAgJ2FsaWduVGFyZ2V0JyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhbmNob3InLFxuICAgICdhbmltYXRlU2hhZG93JyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9FbCcsXG4gICAgJ2F1dG9SZW5kZXInLFxuICAgICdhdXRvU2Nyb2xsJyxcbiAgICAnYXV0b1Nob3cnLFxuICAgICdiYXNlQ2xzJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NoaWxkRWxzJyxcbiAgICAnY2xzJyxcbiAgICAnY29sbGFwc2VkQ2xzJyxcbiAgICAnY29sbGFwc2VPbkRibENsaWNrJyxcbiAgICAnY29sbGFwc2VUYXJnZXQnLFxuICAgICdjb2xsYXBzaWJsZScsXG4gICAgJ2NvbHVtbldpZHRoJyxcbiAgICAnY29tcG9uZW50Q2xzJyxcbiAgICAnY29tcG9uZW50TGF5b3V0JyxcbiAgICAnY29uc3RyYWluJyxcbiAgICAnY29uc3RyYWludEluc2V0cycsXG4gICAgJ2NvbnN0cmFpblRvJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0QWxpZ24nLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRTcGxpdE1heCcsXG4gICAgJ2RlZmF1bHRTcGxpdE1pbicsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZWRDbHMnLFxuICAgICdkb2NrJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZml4ZWQnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2ZvY3VzT25Ub0Zyb250JyxcbiAgICAnZm9ybUJpbmQnLFxuICAgICdmcmFtZScsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpcXVpZExheW91dCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ2xpdmVEcmFnJyxcbiAgICAnbG9hZGVyJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza0RlZmF1bHRzJyxcbiAgICAnbWFza0VsZW1lbnQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lYWJsZScsXG4gICAgJ292ZXJDbHMnLFxuICAgICdvdmVyZmxvd1gnLFxuICAgICdvdmVyZmxvd1knLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGVyZm9ybUNvbGxhcHNlJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZ2lvbicsXG4gICAgJ3JlbmRlckNvbmZpZycsXG4gICAgJ3JlbmRlckRhdGEnLFxuICAgICdyZW5kZXJTZWxlY3RvcnMnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JlbmRlclRwbCcsXG4gICAgJ3Jlc2l6YWJsZScsXG4gICAgJ3Jlc2l6ZUhhbmRsZXMnLFxuICAgICdzYXZlRGVsYXknLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYWRvd09mZnNldCcsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hyaW5rV3JhcCcsXG4gICAgJ3NpemUnLFxuICAgICdzdGF0ZUV2ZW50cycsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0cmFja2VyJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VpQ2xzJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneHR5cGUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyLGNvbnRhaW5lcixwb3MnfSxcblx0XHR7bmFtZTonYWZ0ZXJsYXlvdXRhbmltYXRpb24nLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2FmdGVycmVuZGVyJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVhY3RpdmF0ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVhY3RpdmF0ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVzdHJveScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYmVmb3JlcmVuZGVyJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlc2F2ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsc3RhdGUnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonYm94cmVhZHknLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyLHdpZHRoLGhlaWdodCd9LFxuXHRcdHtuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidkaXNhYmxlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidlbmFibGUnLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcixldmVudCd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcix4LHknfSxcblx0XHR7bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsb3duZXJDdCd9LFxuXHRcdHtuYW1lOidyZW5kZXInLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyJ30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsd2lkdGgsaGVpZ2h0LG9sZFdpZHRoLG9sZEhlaWdodCd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyLHN0YXRlJ30sXG5cdFx0e25hbWU6J3N0YXRlc2F2ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsc3RhdGUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhY3RpdmF0ZScsXG5cdFx0J2FkZGVkJyxcblx0XHQnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLFxuXHRcdCdhZnRlcnJlbmRlcicsXG5cdFx0J2JlZm9yZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVhY3RpdmF0ZScsXG5cdFx0J2JlZm9yZWRlc3Ryb3knLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlcmVuZGVyJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXN0YXRlcmVzdG9yZScsXG5cdFx0J2JlZm9yZXN0YXRlc2F2ZScsXG5cdFx0J2JsdXInLFxuXHRcdCdib3hyZWFkeScsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZScsXG5cdFx0J2VuYWJsZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoaWRlJyxcblx0XHQnbW92ZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZW5kZXInLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RhdGVyZXN0b3JlJyxcblx0XHQnc3RhdGVzYXZlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm9yZGVyc3BsaXR0ZXInLCBcbiAgaW5wdXRzOiBib3JkZXJzcGxpdHRlck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGJvcmRlcnNwbGl0dGVyTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEJvcmRlcnNwbGl0dGVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Qm9yZGVyc3BsaXR0ZXJDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixib3JkZXJzcGxpdHRlck1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChib3JkZXJzcGxpdHRlck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19