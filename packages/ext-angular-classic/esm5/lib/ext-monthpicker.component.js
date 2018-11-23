/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var monthpickerMetaData = /** @class */ (function () {
    function monthpickerMetaData() {
    }
    monthpickerMetaData.XTYPE = 'monthpicker';
    monthpickerMetaData.PROPERTIESOBJECT = {
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
        "cancelText": "String",
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
        "footerButtonUI": "String",
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
        "okText": "String",
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
        "showButtons": "Boolean",
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
        "value": "Date/Number[]",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "weight": "Number",
        "width": "Number|String",
        "xtype": "Ext.enums.Widget",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    monthpickerMetaData.PROPERTIES = [
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
        'cancelText',
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
        'footerButtonUI',
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
        'okText',
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
        'showButtons',
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
        'value',
        'viewModel',
        'weight',
        'width',
        'xtype',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    monthpickerMetaData.EVENTS = [
        { name: 'activate', parameters: 'monthpicker' },
        { name: 'added', parameters: 'monthpicker,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'monthpicker' },
        { name: 'afterrender', parameters: 'monthpicker' },
        { name: 'beforeactivate', parameters: 'monthpicker' },
        { name: 'beforedeactivate', parameters: 'monthpicker' },
        { name: 'beforedestroy', parameters: 'monthpicker' },
        { name: 'beforehide', parameters: 'monthpicker' },
        { name: 'beforerender', parameters: 'monthpicker' },
        { name: 'beforeshow', parameters: 'monthpicker' },
        { name: 'beforestaterestore', parameters: 'monthpicker,state' },
        { name: 'beforestatesave', parameters: 'monthpicker,state' },
        { name: 'blur', parameters: 'monthpicker,event' },
        { name: 'boxready', parameters: 'monthpicker,width,height' },
        { name: 'cancelclick', parameters: 'monthpicker' },
        { name: 'deactivate', parameters: 'monthpicker' },
        { name: 'destroy', parameters: 'monthpicker' },
        { name: 'disable', parameters: 'monthpicker' },
        { name: 'enable', parameters: 'monthpicker' },
        { name: 'focus', parameters: 'monthpicker,event' },
        { name: 'focusenter', parameters: 'monthpicker,event' },
        { name: 'focusleave', parameters: 'monthpicker,event' },
        { name: 'hide', parameters: 'monthpicker' },
        { name: 'monthclick', parameters: 'monthpicker,value' },
        { name: 'monthdblclick', parameters: 'monthpicker,value' },
        { name: 'move', parameters: 'monthpicker,x,y' },
        { name: 'okclick', parameters: 'monthpicker,value' },
        { name: 'removed', parameters: 'monthpicker,ownerCt' },
        { name: 'render', parameters: 'monthpicker' },
        { name: 'resize', parameters: 'monthpicker,width,height,oldWidth,oldHeight' },
        { name: 'select', parameters: 'monthpicker,value' },
        { name: 'show', parameters: 'monthpicker' },
        { name: 'staterestore', parameters: 'monthpicker,state' },
        { name: 'statesave', parameters: 'monthpicker,state' },
        { name: 'yearclick', parameters: 'monthpicker,value' },
        { name: 'yeardblclick', parameters: 'monthpicker,value' },
        { name: 'ready', parameters: '' }
    ];
    monthpickerMetaData.EVENTNAMES = [
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
        'cancelclick',
        'deactivate',
        'destroy',
        'disable',
        'enable',
        'focus',
        'focusenter',
        'focusleave',
        'hide',
        'monthclick',
        'monthdblclick',
        'move',
        'okclick',
        'removed',
        'render',
        'resize',
        'select',
        'show',
        'staterestore',
        'statesave',
        'yearclick',
        'yeardblclick',
        'ready'
    ];
    return monthpickerMetaData;
}());
export { monthpickerMetaData };
if (false) {
    /** @type {?} */
    monthpickerMetaData.XTYPE;
    /** @type {?} */
    monthpickerMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    monthpickerMetaData.PROPERTIES;
    /** @type {?} */
    monthpickerMetaData.EVENTS;
    /** @type {?} */
    monthpickerMetaData.EVENTNAMES;
}
var ExtMonthpickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtMonthpickerComponent, _super);
    function ExtMonthpickerComponent(eRef) {
        return _super.call(this, eRef, monthpickerMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtMonthpickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(monthpickerMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtMonthpickerComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtMonthpickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'monthpicker',
                    inputs: monthpickerMetaData.PROPERTIES,
                    outputs: monthpickerMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtMonthpickerComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtMonthpickerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtMonthpickerComponent;
}(base));
export { ExtMonthpickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW1vbnRocGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtbW9udGhwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQW9UQSxDQUFDO0lBblRlLHlCQUFLLEdBQVcsYUFBYSxDQUFDO0lBQzlCLG9DQUFnQixHQUFRO1FBQ3BDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsUUFBUSxFQUFFLGVBQWU7UUFDekIsWUFBWSxFQUFFLDRDQUE0QztRQUMxRCxZQUFZLEVBQUUsU0FBUztRQUN2QixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsUUFBUTtRQUNuQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFlBQVksRUFBRSxRQUFRO1FBQ3RCLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixhQUFhLEVBQUUsUUFBUTtRQUN2QixjQUFjLEVBQUUsUUFBUTtRQUN4QixpQkFBaUIsRUFBRSxlQUFlO1FBQ2xDLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLGtCQUFrQixFQUFFLGVBQWU7UUFDbkMsYUFBYSxF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WCxXQUFXO1FBQ1gsY0FBYztRQUNkLE9BQU87S0FDUixDQUFDO0lBQ0YsMEJBQUM7Q0FBQSxBQXBURCxJQW9UQztTQXBUWSxtQkFBbUI7OztJQUM5QiwwQkFBNEM7O0lBQzVDLHFDQWlIQTs7SUFDQSwrQkFpSEE7O0lBQ0EsMkJBc0NBOztJQUNBLCtCQXNDQTs7QUFFRjtJQU82QyxtREFBSTtJQUMvQyxpQ0FBWSxJQUFlO2VBQUcsa0JBQU0sSUFBSSxFQUFDLG1CQUFtQixDQUFDO0lBQUEsQ0FBQzs7OztJQUN2RCwwQ0FBUTs7O0lBQWYsY0FBbUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBQztJQUN4RCwwRUFBMEU7Ozs7O0lBQ25FLG9EQUFrQjs7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7O2dCQWRKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsTUFBTSxFQUFFLG1CQUFtQixDQUFDLFVBQVU7b0JBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXVCLEVBQXZCLENBQXVCLENBQUMsRUFBQyxDQUFDO29CQUNwRixRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkEvVEMsVUFBVTs7SUF3VVosOEJBQUM7Q0FBQSxBQWZELENBTzZDLElBQUksR0FRaEQ7U0FSWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBtb250aHBpY2tlck1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ21vbnRocGlja2VyJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhY3RpdmVDb3VudGVyXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJhbGlnbk9uU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYWxpZ25UYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFuY2hvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYW5pbWF0ZVNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImF1dG9FbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImF1dG9SZW5kZXJcIjogXCJCb29sZWFuL1N0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImF1dG9TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhdXRvU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhc2VDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJOdW1iZXIvU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcImNhbmNlbFRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcImNoaWxkRWxzXCI6IFwiT2JqZWN0L1N0cmluZ1tdL09iamVjdFtdXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbHVtbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJjb21wb25lbnRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbXBvbmVudExheW91dFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImNvbnN0cmFpblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbnN0cmFpbnRJbnNldHNcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJjb25zdHJhaW5Ub1wiOiBcIkV4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdEFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImRvY2tcIjogXCIndG9wJy8nYm90dG9tJy8nbGVmdCcvJ3JpZ2h0J1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcImZpeGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlclwiLFxuICAgIFwiZmxvYXRpbmdcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZm9jdXNPblRvRnJvbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb290ZXJCdXR0b25VSVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZm9ybUJpbmRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmcmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJodG1sXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXF1aWRMYXlvdXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcImxpdmVEcmFnXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibG9hZGVyXCI6IFwiRXh0LkNvbXBvbmVudExvYWRlci9PYmplY3RcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1hc2tEZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwibWFza0VsZW1lbnRcIjogXCJTdHJpbmdcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4V2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1vZGFsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibW9kZWxWYWxpZGF0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJva1RleHRcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WFwiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dZXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVnaW9uXCI6IFwiJ25vcnRoJy8nc291dGgnLydlYXN0Jy8nd2VzdCcvJ2NlbnRlcidcIixcbiAgICBcInJlbmRlckNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyRGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyU2VsZWN0b3JzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIlN0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJlbmRlclRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJyZXNpemFibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwicmVzaXplSGFuZGxlc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwic2F2ZURlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcInNoYWRvd09mZnNldFwiOiBcIk51bWJlclwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93QnV0dG9uc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNocmlua1dyYXBcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwic3RhdGVFdmVudHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwic3RhdGVmdWxcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwic3RhdGVJZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0YWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cGxcIjogXCJFeHQuWFRlbXBsYXRlL0V4dC5UZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidWlDbHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmFsdWVcIjogXCJEYXRlL051bWJlcltdXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3ZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwieHR5cGVcIjogXCJFeHQuZW51bXMuV2lkZ2V0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FjdGl2ZUNvdW50ZXInLFxuICAgICdhbGlnbk9uU2Nyb2xsJyxcbiAgICAnYWxpZ25UYXJnZXQnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FuY2hvcicsXG4gICAgJ2FuaW1hdGVTaGFkb3cnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXV0b0VsJyxcbiAgICAnYXV0b1JlbmRlcicsXG4gICAgJ2F1dG9TY3JvbGwnLFxuICAgICdhdXRvU2hvdycsXG4gICAgJ2Jhc2VDbHMnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2FuY2VsVGV4dCcsXG4gICAgJ2NoaWxkRWxzJyxcbiAgICAnY2xzJyxcbiAgICAnY29sdW1uV2lkdGgnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb21wb25lbnRMYXlvdXQnLFxuICAgICdjb25zdHJhaW4nLFxuICAgICdjb25zdHJhaW50SW5zZXRzJyxcbiAgICAnY29uc3RyYWluVG8nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRBbGlnbicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlZENscycsXG4gICAgJ2RvY2snLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNPblRvRnJvbnQnLFxuICAgICdmb290ZXJCdXR0b25VSScsXG4gICAgJ2Zvcm1CaW5kJyxcbiAgICAnZnJhbWUnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaXF1aWRMYXlvdXQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdsaXZlRHJhZycsXG4gICAgJ2xvYWRlcicsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hc2tEZWZhdWx0cycsXG4gICAgJ21hc2tFbGVtZW50JyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21vZGFsJyxcbiAgICAnbW9kZWxWYWxpZGF0aW9uJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdva1RleHQnLFxuICAgICdvdmVyQ2xzJyxcbiAgICAnb3ZlcmZsb3dYJyxcbiAgICAnb3ZlcmZsb3dZJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWdpb24nLFxuICAgICdyZW5kZXJDb25maWcnLFxuICAgICdyZW5kZXJEYXRhJyxcbiAgICAncmVuZGVyU2VsZWN0b3JzJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZW5kZXJUcGwnLFxuICAgICdyZXNpemFibGUnLFxuICAgICdyZXNpemVIYW5kbGVzJyxcbiAgICAnc2F2ZURlbGF5JyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFkb3dPZmZzZXQnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dCdXR0b25zJyxcbiAgICAnc2hyaW5rV3JhcCcsXG4gICAgJ3N0YXRlRXZlbnRzJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1aUNscycsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneHR5cGUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J21vbnRocGlja2VyLGNvbnRhaW5lcixwb3MnfSxcblx0XHR7bmFtZTonYWZ0ZXJsYXlvdXRhbmltYXRpb24nLHBhcmFtZXRlcnM6J21vbnRocGlja2VyJ30sXG5cdFx0e25hbWU6J2FmdGVycmVuZGVyJyxwYXJhbWV0ZXJzOidtb250aHBpY2tlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVhY3RpdmF0ZScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVhY3RpdmF0ZScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVzdHJveScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonYmVmb3JlcmVuZGVyJyxwYXJhbWV0ZXJzOidtb250aHBpY2tlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidtb250aHBpY2tlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J21vbnRocGlja2VyLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlc2F2ZScscGFyYW1ldGVyczonbW9udGhwaWNrZXIsc3RhdGUnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonbW9udGhwaWNrZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonYm94cmVhZHknLHBhcmFtZXRlcnM6J21vbnRocGlja2VyLHdpZHRoLGhlaWdodCd9LFxuXHRcdHtuYW1lOidjYW5jZWxjbGljaycscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonZGlzYWJsZScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonZW5hYmxlJyxwYXJhbWV0ZXJzOidtb250aHBpY2tlcid9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonbW9udGhwaWNrZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonbW9udGhwaWNrZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonbW9udGhwaWNrZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczonbW9udGhwaWNrZXInfSxcblx0XHR7bmFtZTonbW9udGhjbGljaycscGFyYW1ldGVyczonbW9udGhwaWNrZXIsdmFsdWUnfSxcblx0XHR7bmFtZTonbW9udGhkYmxjbGljaycscGFyYW1ldGVyczonbW9udGhwaWNrZXIsdmFsdWUnfSxcblx0XHR7bmFtZTonbW92ZScscGFyYW1ldGVyczonbW9udGhwaWNrZXIseCx5J30sXG5cdFx0e25hbWU6J29rY2xpY2snLHBhcmFtZXRlcnM6J21vbnRocGlja2VyLHZhbHVlJ30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J21vbnRocGlja2VyLG93bmVyQ3QnfSxcblx0XHR7bmFtZToncmVuZGVyJyxwYXJhbWV0ZXJzOidtb250aHBpY2tlcid9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J21vbnRocGlja2VyLHdpZHRoLGhlaWdodCxvbGRXaWR0aCxvbGRIZWlnaHQnfSxcblx0XHR7bmFtZTonc2VsZWN0JyxwYXJhbWV0ZXJzOidtb250aHBpY2tlcix2YWx1ZSd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidtb250aHBpY2tlcid9LFxuXHRcdHtuYW1lOidzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J21vbnRocGlja2VyLHN0YXRlJ30sXG5cdFx0e25hbWU6J3N0YXRlc2F2ZScscGFyYW1ldGVyczonbW9udGhwaWNrZXIsc3RhdGUnfSxcblx0XHR7bmFtZToneWVhcmNsaWNrJyxwYXJhbWV0ZXJzOidtb250aHBpY2tlcix2YWx1ZSd9LFxuXHRcdHtuYW1lOid5ZWFyZGJsY2xpY2snLHBhcmFtZXRlcnM6J21vbnRocGlja2VyLHZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhZGRlZCcsXG5cdFx0J2FmdGVybGF5b3V0YW5pbWF0aW9uJyxcblx0XHQnYWZ0ZXJyZW5kZXInLFxuXHRcdCdiZWZvcmVhY3RpdmF0ZScsXG5cdFx0J2JlZm9yZWRlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZXN0cm95Jyxcblx0XHQnYmVmb3JlaGlkZScsXG5cdFx0J2JlZm9yZXJlbmRlcicsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmVzdGF0ZXJlc3RvcmUnLFxuXHRcdCdiZWZvcmVzdGF0ZXNhdmUnLFxuXHRcdCdibHVyJyxcblx0XHQnYm94cmVhZHknLFxuXHRcdCdjYW5jZWxjbGljaycsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZScsXG5cdFx0J2VuYWJsZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoaWRlJyxcblx0XHQnbW9udGhjbGljaycsXG5cdFx0J21vbnRoZGJsY2xpY2snLFxuXHRcdCdtb3ZlJyxcblx0XHQnb2tjbGljaycsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZW5kZXInLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdzZWxlY3QnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RhdGVyZXN0b3JlJyxcblx0XHQnc3RhdGVzYXZlJyxcblx0XHQneWVhcmNsaWNrJyxcblx0XHQneWVhcmRibGNsaWNrJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9udGhwaWNrZXInLCBcbiAgaW5wdXRzOiBtb250aHBpY2tlck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IG1vbnRocGlja2VyTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dE1vbnRocGlja2VyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0TW9udGhwaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixtb250aHBpY2tlck1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChtb250aHBpY2tlck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19