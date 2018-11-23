/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var flashMetaData = /** @class */ (function () {
    function flashMetaData() {
    }
    flashMetaData.XTYPE = 'flash';
    flashMetaData.PROPERTIESOBJECT = {
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
        "backgroundColor": "String",
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
        "expressInstall": "Boolean",
        "fixed": "Boolean",
        "flashAttributes": "Object",
        "flashParams": "Object",
        "flashVars": "Object",
        "flashVersion": "String",
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
        "swfHeight": "String/Number",
        "swfWidth": "String/Number",
        "tabIndex": "Number",
        "toFrontOnShow": "Boolean",
        "touchAction": "Object",
        "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
        "tplWriteMode": "String",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String",
        "uiCls": "String[]",
        "url": "String",
        "userCls": "String/String[]",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "weight": "Number",
        "width": "Number|String",
        "wmode": "String",
        "xtype": "Ext.enums.Widget",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    flashMetaData.PROPERTIES = [
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
        'backgroundColor',
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
        'expressInstall',
        'fixed',
        'flashAttributes',
        'flashParams',
        'flashVars',
        'flashVersion',
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
        'swfHeight',
        'swfWidth',
        'tabIndex',
        'toFrontOnShow',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'twoWayBindable',
        'ui',
        'uiCls',
        'url',
        'userCls',
        'viewModel',
        'weight',
        'width',
        'wmode',
        'xtype',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    flashMetaData.EVENTS = [
        { name: 'activate', parameters: 'flash' },
        { name: 'added', parameters: 'flash,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'flash' },
        { name: 'afterrender', parameters: 'flash' },
        { name: 'beforeactivate', parameters: 'flash' },
        { name: 'beforedeactivate', parameters: 'flash' },
        { name: 'beforedestroy', parameters: 'flash' },
        { name: 'beforehide', parameters: 'flash' },
        { name: 'beforerender', parameters: 'flash' },
        { name: 'beforeshow', parameters: 'flash' },
        { name: 'beforestaterestore', parameters: 'flash,state' },
        { name: 'beforestatesave', parameters: 'flash,state' },
        { name: 'blur', parameters: 'flash,event' },
        { name: 'boxready', parameters: 'flash,width,height' },
        { name: 'deactivate', parameters: 'flash' },
        { name: 'destroy', parameters: 'flash' },
        { name: 'disable', parameters: 'flash' },
        { name: 'enable', parameters: 'flash' },
        { name: 'failure', parameters: 'flash' },
        { name: 'focus', parameters: 'flash,event' },
        { name: 'focusenter', parameters: 'flash,event' },
        { name: 'focusleave', parameters: 'flash,event' },
        { name: 'hide', parameters: 'flash' },
        { name: 'move', parameters: 'flash,x,y' },
        { name: 'removed', parameters: 'flash,ownerCt' },
        { name: 'render', parameters: 'flash' },
        { name: 'resize', parameters: 'flash,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'flash' },
        { name: 'staterestore', parameters: 'flash,state' },
        { name: 'statesave', parameters: 'flash,state' },
        { name: 'success', parameters: 'flash' },
        { name: 'ready', parameters: '' }
    ];
    flashMetaData.EVENTNAMES = [
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
        'failure',
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
        'success',
        'ready'
    ];
    return flashMetaData;
}());
export { flashMetaData };
if (false) {
    /** @type {?} */
    flashMetaData.XTYPE;
    /** @type {?} */
    flashMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    flashMetaData.PROPERTIES;
    /** @type {?} */
    flashMetaData.EVENTS;
    /** @type {?} */
    flashMetaData.EVENTNAMES;
}
var ExtFlashComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtFlashComponent, _super);
    function ExtFlashComponent(eRef) {
        return _super.call(this, eRef, flashMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtFlashComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(flashMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtFlashComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtFlashComponent.decorators = [
        { type: Component, args: [{
                    selector: 'flash',
                    inputs: flashMetaData.PROPERTIES,
                    outputs: flashMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtFlashComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtFlashComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtFlashComponent;
}(base));
export { ExtFlashComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWZsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtZmxhc2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQW9UQSxDQUFDO0lBblRlLG1CQUFLLEdBQVcsT0FBTyxDQUFDO0lBQ3hCLDhCQUFnQixHQUFRO1FBQ3BDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsUUFBUSxFQUFFLGVBQWU7UUFDekIsWUFBWSxFQUFFLDRDQUE0QztRQUMxRCxZQUFZLEVBQUUsU0FBUztRQUN2QixVQUFVLEVBQUUsU0FBUztRQUNyQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsVUFBVSxFQUFFLDBCQUEwQjtRQUN0QyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGlCQUFpQixFQUFFLGVBQWU7UUFDbEMsV0FBVyxFQUFFLFNBQVM7UUFDdEIsa0JBQWtCLEVBQUUsZUFBZTtRQUNuQyxhQUFhLEVBQUUsaUNBQWlD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QkFBTSxJQUFJLEVBQUMsYUFBYSxDQUFDO0lBQUEsQ0FBQzs7OztJQUNqRCxvQ0FBUTs7O0lBQWYsY0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDbEQsMEVBQTBFOzs7OztJQUNuRSw4Q0FBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLE1BQU0sRUFBRSxhQUFhLENBQUMsVUFBVTtvQkFDaEMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxVQUFVO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUMsRUFBQyxDQUFDO29CQUM5RSxRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkEvVEMsVUFBVTs7SUF3VVosd0JBQUM7Q0FBQSxBQWZELENBT3VDLElBQUksR0FRMUM7U0FSWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBmbGFzaE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2ZsYXNoJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhY3RpdmVDb3VudGVyXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJhbGlnbk9uU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYWxpZ25UYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFuY2hvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYW5pbWF0ZVNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImF1dG9FbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImF1dG9SZW5kZXJcIjogXCJCb29sZWFuL1N0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImF1dG9TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhdXRvU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmFzZUNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIk51bWJlci9TdHJpbmcvQm9vbGVhblwiLFxuICAgIFwiY2hpbGRFbHNcIjogXCJPYmplY3QvU3RyaW5nW10vT2JqZWN0W11cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sdW1uV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29tcG9uZW50TGF5b3V0XCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiY29uc3RyYWluXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uc3RyYWludEluc2V0c1wiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImNvbnN0cmFpblRvXCI6IFwiRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0QWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZG9ja1wiOiBcIid0b3AnLydib3R0b20nLydsZWZ0Jy8ncmlnaHQnXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiZXhwcmVzc0luc3RhbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmaXhlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZsYXNoQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZmxhc2hQYXJhbXNcIjogXCJPYmplY3RcIixcbiAgICBcImZsYXNoVmFyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZmxhc2hWZXJzaW9uXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb2N1c09uVG9Gcm9udFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvcm1CaW5kXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZnJhbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlxdWlkTGF5b3V0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsaXZlRHJhZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImxvYWRlclwiOiBcIkV4dC5Db21wb25lbnRMb2FkZXIvT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXNrRGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hc2tFbGVtZW50XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib3ZlckNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dYXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1lcIjogXCJTdHJpbmdcIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWdpb25cIjogXCInbm9ydGgnLydzb3V0aCcvJ2Vhc3QnLyd3ZXN0Jy8nY2VudGVyJ1wiLFxuICAgIFwicmVuZGVyQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJEYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJTZWxlY3RvcnNcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclRvXCI6IFwiU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmVuZGVyVHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInJlc2l6YWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJyZXNpemVIYW5kbGVzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzYXZlRGVsYXlcIjogXCJOdW1iZXJcIixcbiAgICBcInNjcm9sbGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJTdHJpbmcvQm9vbGVhblwiLFxuICAgIFwic2hhZG93T2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNocmlua1dyYXBcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwic3RhdGVFdmVudHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwic3RhdGVmdWxcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwic3RhdGVJZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzd2ZIZWlnaHRcIjogXCJTdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJzd2ZXaWR0aFwiOiBcIlN0cmluZy9OdW1iZXJcIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvRXh0LlRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidHBsV3JpdGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ1aUNsc1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJ1cmxcIjogXCJTdHJpbmdcIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJ3bW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwieHR5cGVcIjogXCJFeHQuZW51bXMuV2lkZ2V0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FjdGl2ZUNvdW50ZXInLFxuICAgICdhbGlnbk9uU2Nyb2xsJyxcbiAgICAnYWxpZ25UYXJnZXQnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FuY2hvcicsXG4gICAgJ2FuaW1hdGVTaGFkb3cnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXV0b0VsJyxcbiAgICAnYXV0b1JlbmRlcicsXG4gICAgJ2F1dG9TY3JvbGwnLFxuICAgICdhdXRvU2hvdycsXG4gICAgJ2JhY2tncm91bmRDb2xvcicsXG4gICAgJ2Jhc2VDbHMnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2hpbGRFbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW5XaWR0aCcsXG4gICAgJ2NvbXBvbmVudENscycsXG4gICAgJ2NvbXBvbmVudExheW91dCcsXG4gICAgJ2NvbnN0cmFpbicsXG4gICAgJ2NvbnN0cmFpbnRJbnNldHMnLFxuICAgICdjb25zdHJhaW5UbycsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdEFsaWduJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc2FibGVkQ2xzJyxcbiAgICAnZG9jaycsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2V4cHJlc3NJbnN0YWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdmbGFzaEF0dHJpYnV0ZXMnLFxuICAgICdmbGFzaFBhcmFtcycsXG4gICAgJ2ZsYXNoVmFycycsXG4gICAgJ2ZsYXNoVmVyc2lvbicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNPblRvRnJvbnQnLFxuICAgICdmb3JtQmluZCcsXG4gICAgJ2ZyYW1lJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdodG1sJyxcbiAgICAnaWQnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlxdWlkTGF5b3V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbGl2ZURyYWcnLFxuICAgICdsb2FkZXInLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrRGVmYXVsdHMnLFxuICAgICdtYXNrRWxlbWVudCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnb3ZlckNscycsXG4gICAgJ292ZXJmbG93WCcsXG4gICAgJ292ZXJmbG93WScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVnaW9uJyxcbiAgICAncmVuZGVyQ29uZmlnJyxcbiAgICAncmVuZGVyRGF0YScsXG4gICAgJ3JlbmRlclNlbGVjdG9ycycsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVuZGVyVHBsJyxcbiAgICAncmVzaXphYmxlJyxcbiAgICAncmVzaXplSGFuZGxlcycsXG4gICAgJ3NhdmVEZWxheScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhZG93T2Zmc2V0JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaHJpbmtXcmFwJyxcbiAgICAnc3RhdGVFdmVudHMnLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdHlsZScsXG4gICAgJ3N3ZkhlaWdodCcsXG4gICAgJ3N3ZldpZHRoJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndWlDbHMnLFxuICAgICd1cmwnLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd3bW9kZScsXG4gICAgJ3h0eXBlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2ZsYXNoJ30sXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidmbGFzaCxjb250YWluZXIscG9zJ30sXG5cdFx0e25hbWU6J2FmdGVybGF5b3V0YW5pbWF0aW9uJyxwYXJhbWV0ZXJzOidmbGFzaCd9LFxuXHRcdHtuYW1lOidhZnRlcnJlbmRlcicscGFyYW1ldGVyczonZmxhc2gnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2ZsYXNoJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2ZsYXNoJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRlc3Ryb3knLHBhcmFtZXRlcnM6J2ZsYXNoJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J2ZsYXNoJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJlbmRlcicscGFyYW1ldGVyczonZmxhc2gnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonZmxhc2gnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOidmbGFzaCxzdGF0ZSd9LFxuXHRcdHtuYW1lOidiZWZvcmVzdGF0ZXNhdmUnLHBhcmFtZXRlcnM6J2ZsYXNoLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2ZsYXNoLGV2ZW50J30sXG5cdFx0e25hbWU6J2JveHJlYWR5JyxwYXJhbWV0ZXJzOidmbGFzaCx3aWR0aCxoZWlnaHQnfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonZmxhc2gnfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonZmxhc2gnfSxcblx0XHR7bmFtZTonZGlzYWJsZScscGFyYW1ldGVyczonZmxhc2gnfSxcblx0XHR7bmFtZTonZW5hYmxlJyxwYXJhbWV0ZXJzOidmbGFzaCd9LFxuXHRcdHtuYW1lOidmYWlsdXJlJyxwYXJhbWV0ZXJzOidmbGFzaCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonZmxhc2gsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonZmxhc2gsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonZmxhc2gsZXZlbnQnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczonZmxhc2gnfSxcblx0XHR7bmFtZTonbW92ZScscGFyYW1ldGVyczonZmxhc2gseCx5J30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J2ZsYXNoLG93bmVyQ3QnfSxcblx0XHR7bmFtZToncmVuZGVyJyxwYXJhbWV0ZXJzOidmbGFzaCd9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2ZsYXNoLHdpZHRoLGhlaWdodCxvbGRXaWR0aCxvbGRIZWlnaHQnfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonZmxhc2gnfSxcblx0XHR7bmFtZTonc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOidmbGFzaCxzdGF0ZSd9LFxuXHRcdHtuYW1lOidzdGF0ZXNhdmUnLHBhcmFtZXRlcnM6J2ZsYXNoLHN0YXRlJ30sXG5cdFx0e25hbWU6J3N1Y2Nlc3MnLHBhcmFtZXRlcnM6J2ZsYXNoJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhZGRlZCcsXG5cdFx0J2FmdGVybGF5b3V0YW5pbWF0aW9uJyxcblx0XHQnYWZ0ZXJyZW5kZXInLFxuXHRcdCdiZWZvcmVhY3RpdmF0ZScsXG5cdFx0J2JlZm9yZWRlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZXN0cm95Jyxcblx0XHQnYmVmb3JlaGlkZScsXG5cdFx0J2JlZm9yZXJlbmRlcicsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmVzdGF0ZXJlc3RvcmUnLFxuXHRcdCdiZWZvcmVzdGF0ZXNhdmUnLFxuXHRcdCdibHVyJyxcblx0XHQnYm94cmVhZHknLFxuXHRcdCdkZWFjdGl2YXRlJyxcblx0XHQnZGVzdHJveScsXG5cdFx0J2Rpc2FibGUnLFxuXHRcdCdlbmFibGUnLFxuXHRcdCdmYWlsdXJlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdtb3ZlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3JlbmRlcicsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzdGF0ZXJlc3RvcmUnLFxuXHRcdCdzdGF0ZXNhdmUnLFxuXHRcdCdzdWNjZXNzJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmxhc2gnLCBcbiAgaW5wdXRzOiBmbGFzaE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGZsYXNoTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEZsYXNoQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Rmxhc2hDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixmbGFzaE1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChmbGFzaE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19