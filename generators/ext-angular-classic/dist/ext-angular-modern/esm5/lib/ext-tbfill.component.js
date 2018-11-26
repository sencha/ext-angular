/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var tbfillMetaData = /** @class */ (function () {
    function tbfillMetaData() {
    }
    tbfillMetaData.XTYPE = 'tbfill';
    tbfillMetaData.PROPERTIESOBJECT = {
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
    tbfillMetaData.PROPERTIES = [
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
    tbfillMetaData.EVENTS = [
        { name: 'activate', parameters: 'tbfill' },
        { name: 'added', parameters: 'tbfill,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'tbfill' },
        { name: 'afterrender', parameters: 'tbfill' },
        { name: 'beforeactivate', parameters: 'tbfill' },
        { name: 'beforedeactivate', parameters: 'tbfill' },
        { name: 'beforedestroy', parameters: 'tbfill' },
        { name: 'beforehide', parameters: 'tbfill' },
        { name: 'beforerender', parameters: 'tbfill' },
        { name: 'beforeshow', parameters: 'tbfill' },
        { name: 'beforestaterestore', parameters: 'tbfill,state' },
        { name: 'beforestatesave', parameters: 'tbfill,state' },
        { name: 'blur', parameters: 'tbfill,event' },
        { name: 'boxready', parameters: 'tbfill,width,height' },
        { name: 'deactivate', parameters: 'tbfill' },
        { name: 'destroy', parameters: 'tbfill' },
        { name: 'disable', parameters: 'tbfill' },
        { name: 'enable', parameters: 'tbfill' },
        { name: 'focus', parameters: 'tbfill,event' },
        { name: 'focusenter', parameters: 'tbfill,event' },
        { name: 'focusleave', parameters: 'tbfill,event' },
        { name: 'hide', parameters: 'tbfill' },
        { name: 'move', parameters: 'tbfill,x,y' },
        { name: 'removed', parameters: 'tbfill,ownerCt' },
        { name: 'render', parameters: 'tbfill' },
        { name: 'resize', parameters: 'tbfill,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'tbfill' },
        { name: 'staterestore', parameters: 'tbfill,state' },
        { name: 'statesave', parameters: 'tbfill,state' },
        { name: 'ready', parameters: '' }
    ];
    tbfillMetaData.EVENTNAMES = [
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
    return tbfillMetaData;
}());
export { tbfillMetaData };
if (false) {
    /** @type {?} */
    tbfillMetaData.XTYPE;
    /** @type {?} */
    tbfillMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    tbfillMetaData.PROPERTIES;
    /** @type {?} */
    tbfillMetaData.EVENTS;
    /** @type {?} */
    tbfillMetaData.EVENTNAMES;
}
var ExtTbfillComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTbfillComponent, _super);
    function ExtTbfillComponent(eRef) {
        return _super.call(this, eRef, tbfillMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtTbfillComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(tbfillMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtTbfillComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtTbfillComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tbfill',
                    inputs: tbfillMetaData.PROPERTIES,
                    outputs: tbfillMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtTbfillComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtTbfillComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtTbfillComponent;
}(base));
export { ExtTbfillComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRiZmlsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtdGJmaWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUE0UkEsQ0FBQztJQTNSZSxvQkFBSyxHQUFXLFFBQVEsQ0FBQztJQUN6QiwrQkFBZ0IsR0FBUTtRQUNwQyxlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsU0FBUztRQUMxQixhQUFhLEVBQUUsUUFBUTtRQUN2QixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFlBQVksRUFBRSw0Q0FBNEM7UUFDMUQsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7UUFDckIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsaUJBQWlCLEVBQUUsZUFBZTtRQUNsQyxXQUFXLEVBQUUsU0FBUztRQUN0QixrQkFBa0IsRUFBRSxlQUFlO1FBQ25DLGFBQWEsRUFBRSxpQ0FBaUM7UUFDaEQsV0FBVyxFQUFFLFFBQVE7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QixDQUFDLEVBQUMsQ0FBQztvQkFDL0UsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBdlNDLFVBQVU7O0lBZ1RaLHlCQUFDO0NBQUEsQUFmRCxDQU93QyxJQUFJLEdBUTNDO1NBUlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgdGJmaWxsTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAndGJmaWxsJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhY3RpdmVDb3VudGVyXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJhbGlnbk9uU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYWxpZ25UYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFuY2hvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYW5pbWF0ZVNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImF1dG9FbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImF1dG9SZW5kZXJcIjogXCJCb29sZWFuL1N0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImF1dG9TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhdXRvU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhc2VDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJOdW1iZXIvU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcImNoaWxkRWxzXCI6IFwiT2JqZWN0L1N0cmluZ1tdL09iamVjdFtdXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbHVtbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJjb21wb25lbnRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbXBvbmVudExheW91dFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImNvbnN0cmFpblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbnN0cmFpbnRJbnNldHNcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJjb25zdHJhaW5Ub1wiOiBcIkV4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdEFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImRvY2tcIjogXCIndG9wJy8nYm90dG9tJy8nbGVmdCcvJ3JpZ2h0J1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcImZpeGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlclwiLFxuICAgIFwiZmxvYXRpbmdcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZm9jdXNPblRvRnJvbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb3JtQmluZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZyYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxpcXVpZExheW91dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibGl2ZURyYWdcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsb2FkZXJcIjogXCJFeHQuQ29tcG9uZW50TG9hZGVyL09iamVjdFwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWFza0RlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXNrRWxlbWVudFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWF4SGVpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5XaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm92ZXJDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WFwiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dZXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVnaW9uXCI6IFwiJ25vcnRoJy8nc291dGgnLydlYXN0Jy8nd2VzdCcvJ2NlbnRlcidcIixcbiAgICBcInJlbmRlckNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyRGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyU2VsZWN0b3JzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIlN0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJlbmRlclRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJyZXNpemFibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwicmVzaXplSGFuZGxlc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwic2F2ZURlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcInNoYWRvd09mZnNldFwiOiBcIk51bWJlclwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaHJpbmtXcmFwXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcInN0YXRlRXZlbnRzXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9FeHQuVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmdcIixcbiAgICBcInVpQ2xzXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJ4dHlwZVwiOiBcIkV4dC5lbnVtcy5XaWRnZXRcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ291bnRlcicsXG4gICAgJ2FsaWduT25TY3JvbGwnLFxuICAgICdhbGlnblRhcmdldCcsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5jaG9yJyxcbiAgICAnYW5pbWF0ZVNoYWRvdycsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvRWwnLFxuICAgICdhdXRvUmVuZGVyJyxcbiAgICAnYXV0b1Njcm9sbCcsXG4gICAgJ2F1dG9TaG93JyxcbiAgICAnYmFzZUNscycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjaGlsZEVscycsXG4gICAgJ2NscycsXG4gICAgJ2NvbHVtbldpZHRoJyxcbiAgICAnY29tcG9uZW50Q2xzJyxcbiAgICAnY29tcG9uZW50TGF5b3V0JyxcbiAgICAnY29uc3RyYWluJyxcbiAgICAnY29uc3RyYWludEluc2V0cycsXG4gICAgJ2NvbnN0cmFpblRvJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0QWxpZ24nLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZWRDbHMnLFxuICAgICdkb2NrJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZml4ZWQnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2ZvY3VzT25Ub0Zyb250JyxcbiAgICAnZm9ybUJpbmQnLFxuICAgICdmcmFtZScsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpcXVpZExheW91dCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ2xpdmVEcmFnJyxcbiAgICAnbG9hZGVyJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza0RlZmF1bHRzJyxcbiAgICAnbWFza0VsZW1lbnQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lYWJsZScsXG4gICAgJ292ZXJDbHMnLFxuICAgICdvdmVyZmxvd1gnLFxuICAgICdvdmVyZmxvd1knLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZ2lvbicsXG4gICAgJ3JlbmRlckNvbmZpZycsXG4gICAgJ3JlbmRlckRhdGEnLFxuICAgICdyZW5kZXJTZWxlY3RvcnMnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JlbmRlclRwbCcsXG4gICAgJ3Jlc2l6YWJsZScsXG4gICAgJ3Jlc2l6ZUhhbmRsZXMnLFxuICAgICdzYXZlRGVsYXknLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYWRvd09mZnNldCcsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hyaW5rV3JhcCcsXG4gICAgJ3N0YXRlRXZlbnRzJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1aUNscycsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3h0eXBlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J3RiZmlsbCd9LFxuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczondGJmaWxsLGNvbnRhaW5lcixwb3MnfSxcblx0XHR7bmFtZTonYWZ0ZXJsYXlvdXRhbmltYXRpb24nLHBhcmFtZXRlcnM6J3RiZmlsbCd9LFxuXHRcdHtuYW1lOidhZnRlcnJlbmRlcicscGFyYW1ldGVyczondGJmaWxsJ30sXG5cdFx0e25hbWU6J2JlZm9yZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOid0YmZpbGwnfSxcblx0XHR7bmFtZTonYmVmb3JlZGVhY3RpdmF0ZScscGFyYW1ldGVyczondGJmaWxsJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRlc3Ryb3knLHBhcmFtZXRlcnM6J3RiZmlsbCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOid0YmZpbGwnfSxcblx0XHR7bmFtZTonYmVmb3JlcmVuZGVyJyxwYXJhbWV0ZXJzOid0YmZpbGwnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczondGJmaWxsJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlcmVzdG9yZScscGFyYW1ldGVyczondGJmaWxsLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlc2F2ZScscGFyYW1ldGVyczondGJmaWxsLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J3RiZmlsbCxldmVudCd9LFxuXHRcdHtuYW1lOidib3hyZWFkeScscGFyYW1ldGVyczondGJmaWxsLHdpZHRoLGhlaWdodCd9LFxuXHRcdHtuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOid0YmZpbGwnfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczondGJmaWxsJ30sXG5cdFx0e25hbWU6J2Rpc2FibGUnLHBhcmFtZXRlcnM6J3RiZmlsbCd9LFxuXHRcdHtuYW1lOidlbmFibGUnLHBhcmFtZXRlcnM6J3RiZmlsbCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczondGJmaWxsLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3RiZmlsbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid0YmZpbGwsZXZlbnQnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczondGJmaWxsJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J3RiZmlsbCx4LHknfSxcblx0XHR7bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczondGJmaWxsLG93bmVyQ3QnfSxcblx0XHR7bmFtZToncmVuZGVyJyxwYXJhbWV0ZXJzOid0YmZpbGwnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOid0YmZpbGwsd2lkdGgsaGVpZ2h0LG9sZFdpZHRoLG9sZEhlaWdodCd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOid0YmZpbGwnfSxcblx0XHR7bmFtZTonc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOid0YmZpbGwsc3RhdGUnfSxcblx0XHR7bmFtZTonc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOid0YmZpbGwsc3RhdGUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhY3RpdmF0ZScsXG5cdFx0J2FkZGVkJyxcblx0XHQnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLFxuXHRcdCdhZnRlcnJlbmRlcicsXG5cdFx0J2JlZm9yZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVhY3RpdmF0ZScsXG5cdFx0J2JlZm9yZWRlc3Ryb3knLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlcmVuZGVyJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXN0YXRlcmVzdG9yZScsXG5cdFx0J2JlZm9yZXN0YXRlc2F2ZScsXG5cdFx0J2JsdXInLFxuXHRcdCdib3hyZWFkeScsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZScsXG5cdFx0J2VuYWJsZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoaWRlJyxcblx0XHQnbW92ZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZW5kZXInLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RhdGVyZXN0b3JlJyxcblx0XHQnc3RhdGVzYXZlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGJmaWxsJywgXG4gIGlucHV0czogdGJmaWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogdGJmaWxsTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFRiZmlsbENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFRiZmlsbENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLHRiZmlsbE1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdCh0YmZpbGxNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==