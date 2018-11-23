/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var toolMetaData = /** @class */ (function () {
    function toolMetaData() {
    }
    toolMetaData.XTYPE = 'tool';
    toolMetaData.PROPERTIESOBJECT = {
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
        "cacheHeight": "Boolean",
        "cacheWidth": "Boolean",
        "callback": "Function/String",
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
        "glyph": "Number/String",
        "handler": "Function",
        "height": "Number|String",
        "hidden": "Boolean",
        "hideMode": "String",
        "html": "String/Object",
        "iconCls": "String",
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
        "scope": "Object",
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
        "stopEvent": "Boolean",
        "style": "String/Object",
        "tabIndex": "Number",
        "toFrontOnShow": "Boolean",
        "toolOverCls": "any",
        "toolOwner": "Ext.Component",
        "toolPressedCls": "any",
        "tooltip": "String/Object",
        "tooltipType": "String",
        "touchAction": "Object",
        "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
        "tplWriteMode": "String",
        "twoWayBindable": "String/String[]/Object",
        "type": "String",
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
    toolMetaData.PROPERTIES = [
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
        'cacheHeight',
        'cacheWidth',
        'callback',
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
        'glyph',
        'handler',
        'height',
        'hidden',
        'hideMode',
        'html',
        'iconCls',
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
        'scope',
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
        'stopEvent',
        'style',
        'tabIndex',
        'toFrontOnShow',
        'toolOverCls',
        'toolOwner',
        'toolPressedCls',
        'tooltip',
        'tooltipType',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'twoWayBindable',
        'type',
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
    toolMetaData.EVENTS = [
        { name: 'activate', parameters: 'tool' },
        { name: 'added', parameters: 'tool,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'tool' },
        { name: 'afterrender', parameters: 'tool' },
        { name: 'beforeactivate', parameters: 'tool' },
        { name: 'beforedeactivate', parameters: 'tool' },
        { name: 'beforedestroy', parameters: 'tool' },
        { name: 'beforehide', parameters: 'tool' },
        { name: 'beforerender', parameters: 'tool' },
        { name: 'beforeshow', parameters: 'tool' },
        { name: 'beforestaterestore', parameters: 'tool,state' },
        { name: 'beforestatesave', parameters: 'tool,state' },
        { name: 'blur', parameters: 'tool,event' },
        { name: 'boxready', parameters: 'tool,width,height' },
        { name: 'click', parameters: 'tool,e,owner' },
        { name: 'deactivate', parameters: 'tool' },
        { name: 'destroy', parameters: 'tool' },
        { name: 'disable', parameters: 'tool' },
        { name: 'enable', parameters: 'tool' },
        { name: 'focus', parameters: 'tool,event' },
        { name: 'focusenter', parameters: 'tool,event' },
        { name: 'focusleave', parameters: 'tool,event' },
        { name: 'hide', parameters: 'tool' },
        { name: 'move', parameters: 'tool,x,y' },
        { name: 'removed', parameters: 'tool,ownerCt' },
        { name: 'render', parameters: 'tool' },
        { name: 'resize', parameters: 'tool,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'tool' },
        { name: 'staterestore', parameters: 'tool,state' },
        { name: 'statesave', parameters: 'tool,state' },
        { name: 'ready', parameters: '' }
    ];
    toolMetaData.EVENTNAMES = [
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
        'click',
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
    return toolMetaData;
}());
export { toolMetaData };
if (false) {
    /** @type {?} */
    toolMetaData.XTYPE;
    /** @type {?} */
    toolMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    toolMetaData.PROPERTIES;
    /** @type {?} */
    toolMetaData.EVENTS;
    /** @type {?} */
    toolMetaData.EVENTNAMES;
}
var ExtToolComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtToolComponent, _super);
    function ExtToolComponent(eRef) {
        return _super.call(this, eRef, toolMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtToolComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(toolMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtToolComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtToolComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tool',
                    inputs: toolMetaData.PROPERTIES,
                    outputs: toolMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtToolComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtToolComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtToolComponent;
}(base));
export { ExtToolComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRvb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsibGliL2V4dC10b29sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUE0VEEsQ0FBQztJQTNUZSxrQkFBSyxHQUFXLE1BQU0sQ0FBQztJQUN2Qiw2QkFBZ0IsR0FBUTtRQUNwQyxlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsU0FBUztRQUMxQixhQUFhLEVBQUUsUUFBUTtRQUN2QixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFlBQVksRUFBRSw0Q0FBNEM7UUFDMUQsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7UUFDckIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxhQUFhLEVBQUUsU0FBUztRQUN4QixZQUFZLEVBQUUsU0FBUztRQUN2QixVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixhQUFhLEVBQUUsUUFBUTtRQUN2QixjQUFjLEVBQUUsUUFBUTtRQUN4QixpQkFBaUIsRUFBRSxlQUFlO1FBQ2xDLFdBQVcsRUFBRSxTQUFTO1FBQ3RC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ckMsOEJBMkhBOztJQUNBLHdCQTJIQTs7SUFDQSxvQkFnQ0E7O0lBQ0Esd0JBZ0NBOztBQUVGO0lBT3NDLDRDQUFJO0lBQ3hDLDBCQUFZLElBQWU7ZUFBRyxrQkFBTSxJQUFJLEVBQUMsWUFBWSxDQUFDO0lBQUEsQ0FBQzs7OztJQUNoRCxtQ0FBUTs7O0lBQWYsY0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDakQsMEVBQTBFOzs7OztJQUNuRSw2Q0FBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLE1BQU0sRUFBRSxZQUFZLENBQUMsVUFBVTtvQkFDL0IsT0FBTyxFQUFFLFlBQVksQ0FBQyxVQUFVO29CQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUMsRUFBQyxDQUFDO29CQUM3RSxRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkF2VUMsVUFBVTs7SUFnVlosdUJBQUM7Q0FBQSxBQWZELENBT3NDLElBQUksR0FRekM7U0FSWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyB0b29sTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAndG9vbCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWN0aXZlQ291bnRlclwiOiBcIk51bWJlclwiLFxuICAgIFwiYWxpZ25PblNjcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFsaWduVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhbmNob3JcIjogXCJTdHJpbmdcIixcbiAgICBcImFuaW1hdGVTaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhdXRvRWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJhdXRvUmVuZGVyXCI6IFwiQm9vbGVhbi9TdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJhdXRvU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXV0b1Nob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiYXNlQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiTnVtYmVyL1N0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJjYWNoZUhlaWdodFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNhY2hlV2lkdGhcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjYWxsYmFja1wiOiBcIkZ1bmN0aW9uL1N0cmluZ1wiLFxuICAgIFwiY2hpbGRFbHNcIjogXCJPYmplY3QvU3RyaW5nW10vT2JqZWN0W11cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sdW1uV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29tcG9uZW50TGF5b3V0XCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiY29uc3RyYWluXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uc3RyYWludEluc2V0c1wiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImNvbnN0cmFpblRvXCI6IFwiRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0QWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZG9ja1wiOiBcIid0b3AnLydib3R0b20nLydsZWZ0Jy8ncmlnaHQnXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiZml4ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb2N1c09uVG9Gcm9udFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvcm1CaW5kXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZnJhbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJnbHlwaFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhhbmRsZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJpY29uQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxpcXVpZExheW91dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibGl2ZURyYWdcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsb2FkZXJcIjogXCJFeHQuQ29tcG9uZW50TG9hZGVyL09iamVjdFwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWFza0RlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXNrRWxlbWVudFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWF4SGVpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5XaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm92ZXJDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WFwiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dZXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVnaW9uXCI6IFwiJ25vcnRoJy8nc291dGgnLydlYXN0Jy8nd2VzdCcvJ2NlbnRlcidcIixcbiAgICBcInJlbmRlckNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyRGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyU2VsZWN0b3JzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIlN0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJlbmRlclRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJyZXNpemFibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwicmVzaXplSGFuZGxlc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwic2F2ZURlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzY29wZVwiOiBcIk9iamVjdFwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIlN0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJzaGFkb3dPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hyaW5rV3JhcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJzdGF0ZUV2ZW50c1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJzdGF0ZWZ1bFwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJzdGF0ZUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzdG9wRXZlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG9vbE92ZXJDbHNcIjogXCJhbnlcIixcbiAgICBcInRvb2xPd25lclwiOiBcIkV4dC5Db21wb25lbnRcIixcbiAgICBcInRvb2xQcmVzc2VkQ2xzXCI6IFwiYW55XCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9vbHRpcFR5cGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cGxcIjogXCJFeHQuWFRlbXBsYXRlL0V4dC5UZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidWlDbHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcInh0eXBlXCI6IFwiRXh0LmVudW1zLldpZGdldFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhY3RpdmVDb3VudGVyJyxcbiAgICAnYWxpZ25PblNjcm9sbCcsXG4gICAgJ2FsaWduVGFyZ2V0JyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhbmNob3InLFxuICAgICdhbmltYXRlU2hhZG93JyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9FbCcsXG4gICAgJ2F1dG9SZW5kZXInLFxuICAgICdhdXRvU2Nyb2xsJyxcbiAgICAnYXV0b1Nob3cnLFxuICAgICdiYXNlQ2xzJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NhY2hlSGVpZ2h0JyxcbiAgICAnY2FjaGVXaWR0aCcsXG4gICAgJ2NhbGxiYWNrJyxcbiAgICAnY2hpbGRFbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW5XaWR0aCcsXG4gICAgJ2NvbXBvbmVudENscycsXG4gICAgJ2NvbXBvbmVudExheW91dCcsXG4gICAgJ2NvbnN0cmFpbicsXG4gICAgJ2NvbnN0cmFpbnRJbnNldHMnLFxuICAgICdjb25zdHJhaW5UbycsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdEFsaWduJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc2FibGVkQ2xzJyxcbiAgICAnZG9jaycsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2ZpeGVkJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0aW5nJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb2N1c09uVG9Gcm9udCcsXG4gICAgJ2Zvcm1CaW5kJyxcbiAgICAnZnJhbWUnLFxuICAgICdnbHlwaCcsXG4gICAgJ2hhbmRsZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2h0bWwnLFxuICAgICdpY29uQ2xzJyxcbiAgICAnaWQnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlxdWlkTGF5b3V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbGl2ZURyYWcnLFxuICAgICdsb2FkZXInLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrRGVmYXVsdHMnLFxuICAgICdtYXNrRWxlbWVudCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnb3ZlckNscycsXG4gICAgJ292ZXJmbG93WCcsXG4gICAgJ292ZXJmbG93WScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVnaW9uJyxcbiAgICAncmVuZGVyQ29uZmlnJyxcbiAgICAncmVuZGVyRGF0YScsXG4gICAgJ3JlbmRlclNlbGVjdG9ycycsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVuZGVyVHBsJyxcbiAgICAncmVzaXphYmxlJyxcbiAgICAncmVzaXplSGFuZGxlcycsXG4gICAgJ3NhdmVEZWxheScsXG4gICAgJ3Njb3BlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFkb3dPZmZzZXQnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nocmlua1dyYXAnLFxuICAgICdzdGF0ZUV2ZW50cycsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0b3BFdmVudCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbE92ZXJDbHMnLFxuICAgICd0b29sT3duZXInLFxuICAgICd0b29sUHJlc3NlZENscycsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b29sdGlwVHlwZScsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd0eXBlJyxcbiAgICAndWknLFxuICAgICd1aUNscycsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3h0eXBlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOid0b29sJ30sXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOid0b29sLGNvbnRhaW5lcixwb3MnfSxcblx0XHR7bmFtZTonYWZ0ZXJsYXlvdXRhbmltYXRpb24nLHBhcmFtZXRlcnM6J3Rvb2wnfSxcblx0XHR7bmFtZTonYWZ0ZXJyZW5kZXInLHBhcmFtZXRlcnM6J3Rvb2wnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J3Rvb2wnfSxcblx0XHR7bmFtZTonYmVmb3JlZGVhY3RpdmF0ZScscGFyYW1ldGVyczondG9vbCd9LFxuXHRcdHtuYW1lOidiZWZvcmVkZXN0cm95JyxwYXJhbWV0ZXJzOid0b29sJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3Rvb2wnfSxcblx0XHR7bmFtZTonYmVmb3JlcmVuZGVyJyxwYXJhbWV0ZXJzOid0b29sJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3Rvb2wnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOid0b29sLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlc2F2ZScscGFyYW1ldGVyczondG9vbCxzdGF0ZSd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOid0b29sLGV2ZW50J30sXG5cdFx0e25hbWU6J2JveHJlYWR5JyxwYXJhbWV0ZXJzOid0b29sLHdpZHRoLGhlaWdodCd9LFxuXHRcdHtuYW1lOidjbGljaycscGFyYW1ldGVyczondG9vbCxlLG93bmVyJ30sXG5cdFx0e25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J3Rvb2wnfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczondG9vbCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlJyxwYXJhbWV0ZXJzOid0b29sJ30sXG5cdFx0e25hbWU6J2VuYWJsZScscGFyYW1ldGVyczondG9vbCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczondG9vbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOid0b29sLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J3Rvb2wsZXZlbnQnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczondG9vbCd9LFxuXHRcdHtuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOid0b29sLHgseSd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOid0b29sLG93bmVyQ3QnfSxcblx0XHR7bmFtZToncmVuZGVyJyxwYXJhbWV0ZXJzOid0b29sJ30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczondG9vbCx3aWR0aCxoZWlnaHQsb2xkV2lkdGgsb2xkSGVpZ2h0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3Rvb2wnfSxcblx0XHR7bmFtZTonc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOid0b29sLHN0YXRlJ30sXG5cdFx0e25hbWU6J3N0YXRlc2F2ZScscGFyYW1ldGVyczondG9vbCxzdGF0ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dGFuaW1hdGlvbicsXG5cdFx0J2FmdGVycmVuZGVyJyxcblx0XHQnYmVmb3JlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVzdHJveScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVyZW5kZXInLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3Jlc3RhdGVyZXN0b3JlJyxcblx0XHQnYmVmb3Jlc3RhdGVzYXZlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JveHJlYWR5Jyxcblx0XHQnY2xpY2snLFxuXHRcdCdkZWFjdGl2YXRlJyxcblx0XHQnZGVzdHJveScsXG5cdFx0J2Rpc2FibGUnLFxuXHRcdCdlbmFibGUnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnaGlkZScsXG5cdFx0J21vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyJyxcblx0XHQncmVzaXplJyxcblx0XHQnc2hvdycsXG5cdFx0J3N0YXRlcmVzdG9yZScsXG5cdFx0J3N0YXRlc2F2ZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2wnLCBcbiAgaW5wdXRzOiB0b29sTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogdG9vbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRUb29sQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VG9vbENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLHRvb2xNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQodG9vbE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19