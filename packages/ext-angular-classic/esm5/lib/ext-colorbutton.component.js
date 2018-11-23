/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var colorbuttonMetaData = /** @class */ (function () {
    function colorbuttonMetaData() {
    }
    colorbuttonMetaData.XTYPE = 'colorbutton';
    colorbuttonMetaData.PROPERTIESOBJECT = {
        "activeCounter": "Number",
        "alignOnScroll": "Boolean",
        "alignTarget": "String",
        "alphaDecimalFormat": "String",
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
        "color": "Object",
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
        "format": "'hex6'/'hex8'/'#hex6'/'#hex8'/'rgb'/'rgba'/'HEX6'/'HEX8'/'#HEX6'/'#HEX8'/'RGB'/'RGBA'",
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
        "popup": "Object",
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
        "value": "String",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "weight": "Number",
        "width": "Number|String",
        "xtype": "Ext.enums.Widget",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    colorbuttonMetaData.PROPERTIES = [
        'activeCounter',
        'alignOnScroll',
        'alignTarget',
        'alphaDecimalFormat',
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
        'color',
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
        'format',
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
        'popup',
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
        'value',
        'viewModel',
        'weight',
        'width',
        'xtype',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    colorbuttonMetaData.EVENTS = [
        { name: 'activate', parameters: 'colorbutton' },
        { name: 'added', parameters: 'colorbutton,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'colorbutton' },
        { name: 'afterrender', parameters: 'colorbutton' },
        { name: 'beforeactivate', parameters: 'colorbutton' },
        { name: 'beforedeactivate', parameters: 'colorbutton' },
        { name: 'beforedestroy', parameters: 'colorbutton' },
        { name: 'beforehide', parameters: 'colorbutton' },
        { name: 'beforerender', parameters: 'colorbutton' },
        { name: 'beforeshow', parameters: 'colorbutton' },
        { name: 'beforestaterestore', parameters: 'colorbutton,state' },
        { name: 'beforestatesave', parameters: 'colorbutton,state' },
        { name: 'blur', parameters: 'colorbutton,event' },
        { name: 'boxready', parameters: 'colorbutton,width,height' },
        { name: 'change', parameters: 'colorbutton,color,previousColor' },
        { name: 'deactivate', parameters: 'colorbutton' },
        { name: 'destroy', parameters: 'colorbutton' },
        { name: 'disable', parameters: 'colorbutton' },
        { name: 'enable', parameters: 'colorbutton' },
        { name: 'focus', parameters: 'colorbutton,event' },
        { name: 'focusenter', parameters: 'colorbutton,event' },
        { name: 'focusleave', parameters: 'colorbutton,event' },
        { name: 'hide', parameters: 'colorbutton' },
        { name: 'move', parameters: 'colorbutton,x,y' },
        { name: 'removed', parameters: 'colorbutton,ownerCt' },
        { name: 'render', parameters: 'colorbutton' },
        { name: 'resize', parameters: 'colorbutton,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'colorbutton' },
        { name: 'staterestore', parameters: 'colorbutton,state' },
        { name: 'statesave', parameters: 'colorbutton,state' },
        { name: 'ready', parameters: '' }
    ];
    colorbuttonMetaData.EVENTNAMES = [
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
        'change',
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
    return colorbuttonMetaData;
}());
export { colorbuttonMetaData };
if (false) {
    /** @type {?} */
    colorbuttonMetaData.XTYPE;
    /** @type {?} */
    colorbuttonMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    colorbuttonMetaData.PROPERTIES;
    /** @type {?} */
    colorbuttonMetaData.EVENTS;
    /** @type {?} */
    colorbuttonMetaData.EVENTNAMES;
}
var ExtColorbuttonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorbuttonComponent, _super);
    function ExtColorbuttonComponent(eRef) {
        return _super.call(this, eRef, colorbuttonMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtColorbuttonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(colorbuttonMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtColorbuttonComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtColorbuttonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'colorbutton',
                    inputs: colorbuttonMetaData.PROPERTIES,
                    outputs: colorbuttonMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtColorbuttonComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtColorbuttonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtColorbuttonComponent;
}(base));
export { ExtColorbuttonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtY29sb3JidXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQXdTQSxDQUFDO0lBdlNlLHlCQUFLLEdBQVcsYUFBYSxDQUFDO0lBQzlCLG9DQUFnQixHQUFRO1FBQ3BDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLG9CQUFvQixFQUFFLFFBQVE7UUFDOUIsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixRQUFRLEVBQUUsUUFBUTtRQUNsQixlQUFlLEVBQUUsU0FBUztRQUMxQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixRQUFRLEVBQUUsZUFBZTtRQUN6QixZQUFZLEVBQUUsNENBQTRDO1FBQzFELFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsVUFBVSxFQUFFLDBCQUEwQjtRQUN0QyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGlCQUFpQixFQUFFLGVBQWU7UUFDbEMsV0FBVyxFQUFFLFNBQVM7UUFDdEIsa0JBQWtC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M0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO29CQUN0QyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtvQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztvQkFDcEYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBblRDLFVBQVU7O0lBNFRaLDhCQUFDO0NBQUEsQUFmRCxDQU82QyxJQUFJLEdBUWhEO1NBUlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgY29sb3JidXR0b25NZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjb2xvcmJ1dHRvbic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWN0aXZlQ291bnRlclwiOiBcIk51bWJlclwiLFxuICAgIFwiYWxpZ25PblNjcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFsaWduVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbHBoYURlY2ltYWxGb3JtYXRcIjogXCJTdHJpbmdcIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFuY2hvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYW5pbWF0ZVNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImF1dG9FbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImF1dG9SZW5kZXJcIjogXCJCb29sZWFuL1N0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImF1dG9TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhdXRvU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhc2VDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJOdW1iZXIvU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcImNoaWxkRWxzXCI6IFwiT2JqZWN0L1N0cmluZ1tdL09iamVjdFtdXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbG9yXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJjb2x1bW5XaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwiY29tcG9uZW50Q2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb21wb25lbnRMYXlvdXRcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJjb25zdHJhaW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25zdHJhaW50SW5zZXRzXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiY29uc3RyYWluVG9cIjogXCJFeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkb2NrXCI6IFwiJ3RvcCcvJ2JvdHRvbScvJ2xlZnQnLydyaWdodCdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJmaXhlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXJcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZvY3VzT25Ub0Zyb250XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9ybWF0XCI6IFwiJ2hleDYnLydoZXg4Jy8nI2hleDYnLycjaGV4OCcvJ3JnYicvJ3JnYmEnLydIRVg2Jy8nSEVYOCcvJyNIRVg2Jy8nI0hFWDgnLydSR0InLydSR0JBJ1wiLFxuICAgIFwiZm9ybUJpbmRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmcmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJodG1sXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXF1aWRMYXlvdXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcImxpdmVEcmFnXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibG9hZGVyXCI6IFwiRXh0LkNvbXBvbmVudExvYWRlci9PYmplY3RcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1hc2tEZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwibWFza0VsZW1lbnRcIjogXCJTdHJpbmdcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4V2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1vZGFsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibW9kZWxWYWxpZGF0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJvdmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1hcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwb3B1cFwiOiBcIk9iamVjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWdpb25cIjogXCInbm9ydGgnLydzb3V0aCcvJ2Vhc3QnLyd3ZXN0Jy8nY2VudGVyJ1wiLFxuICAgIFwicmVuZGVyQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJEYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJTZWxlY3RvcnNcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclRvXCI6IFwiU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmVuZGVyVHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInJlc2l6YWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJyZXNpemVIYW5kbGVzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzYXZlRGVsYXlcIjogXCJOdW1iZXJcIixcbiAgICBcInNjcm9sbGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJTdHJpbmcvQm9vbGVhblwiLFxuICAgIFwic2hhZG93T2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNocmlua1dyYXBcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwic3RhdGVFdmVudHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwic3RhdGVmdWxcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwic3RhdGVJZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0YWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cGxcIjogXCJFeHQuWFRlbXBsYXRlL0V4dC5UZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidWlDbHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJ4dHlwZVwiOiBcIkV4dC5lbnVtcy5XaWRnZXRcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ291bnRlcicsXG4gICAgJ2FsaWduT25TY3JvbGwnLFxuICAgICdhbGlnblRhcmdldCcsXG4gICAgJ2FscGhhRGVjaW1hbEZvcm1hdCcsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5jaG9yJyxcbiAgICAnYW5pbWF0ZVNoYWRvdycsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvRWwnLFxuICAgICdhdXRvUmVuZGVyJyxcbiAgICAnYXV0b1Njcm9sbCcsXG4gICAgJ2F1dG9TaG93JyxcbiAgICAnYmFzZUNscycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjaGlsZEVscycsXG4gICAgJ2NscycsXG4gICAgJ2NvbG9yJyxcbiAgICAnY29sdW1uV2lkdGgnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb21wb25lbnRMYXlvdXQnLFxuICAgICdjb25zdHJhaW4nLFxuICAgICdjb25zdHJhaW50SW5zZXRzJyxcbiAgICAnY29uc3RyYWluVG8nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRBbGlnbicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlZENscycsXG4gICAgJ2RvY2snLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNPblRvRnJvbnQnLFxuICAgICdmb3JtYXQnLFxuICAgICdmb3JtQmluZCcsXG4gICAgJ2ZyYW1lJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdodG1sJyxcbiAgICAnaWQnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlxdWlkTGF5b3V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbGl2ZURyYWcnLFxuICAgICdsb2FkZXInLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrRGVmYXVsdHMnLFxuICAgICdtYXNrRWxlbWVudCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnb3ZlckNscycsXG4gICAgJ292ZXJmbG93WCcsXG4gICAgJ292ZXJmbG93WScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncG9wdXAnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWdpb24nLFxuICAgICdyZW5kZXJDb25maWcnLFxuICAgICdyZW5kZXJEYXRhJyxcbiAgICAncmVuZGVyU2VsZWN0b3JzJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZW5kZXJUcGwnLFxuICAgICdyZXNpemFibGUnLFxuICAgICdyZXNpemVIYW5kbGVzJyxcbiAgICAnc2F2ZURlbGF5JyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFkb3dPZmZzZXQnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nocmlua1dyYXAnLFxuICAgICdzdGF0ZUV2ZW50cycsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndWlDbHMnLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3h0eXBlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidjb2xvcmJ1dHRvbixjb250YWluZXIscG9zJ30sXG5cdFx0e25hbWU6J2FmdGVybGF5b3V0YW5pbWF0aW9uJyxwYXJhbWV0ZXJzOidjb2xvcmJ1dHRvbid9LFxuXHRcdHtuYW1lOidhZnRlcnJlbmRlcicscGFyYW1ldGVyczonY29sb3JidXR0b24nfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRlc3Ryb3knLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJlbmRlcicscGFyYW1ldGVyczonY29sb3JidXR0b24nfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonY29sb3JidXR0b24nfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOidjb2xvcmJ1dHRvbixzdGF0ZSd9LFxuXHRcdHtuYW1lOidiZWZvcmVzdGF0ZXNhdmUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2JveHJlYWR5JyxwYXJhbWV0ZXJzOidjb2xvcmJ1dHRvbix3aWR0aCxoZWlnaHQnfSxcblx0XHR7bmFtZTonY2hhbmdlJyxwYXJhbWV0ZXJzOidjb2xvcmJ1dHRvbixjb2xvcixwcmV2aW91c0NvbG9yJ30sXG5cdFx0e25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J2Rpc2FibGUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J2VuYWJsZScscGFyYW1ldGVyczonY29sb3JidXR0b24nfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uLHgseSd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidjb2xvcmJ1dHRvbixvd25lckN0J30sXG5cdFx0e25hbWU6J3JlbmRlcicscGFyYW1ldGVyczonY29sb3JidXR0b24nfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidjb2xvcmJ1dHRvbix3aWR0aCxoZWlnaHQsb2xkV2lkdGgsb2xkSGVpZ2h0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J2NvbG9yYnV0dG9uJ30sXG5cdFx0e25hbWU6J3N0YXRlcmVzdG9yZScscGFyYW1ldGVyczonY29sb3JidXR0b24sc3RhdGUnfSxcblx0XHR7bmFtZTonc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOidjb2xvcmJ1dHRvbixzdGF0ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dGFuaW1hdGlvbicsXG5cdFx0J2FmdGVycmVuZGVyJyxcblx0XHQnYmVmb3JlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVzdHJveScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVyZW5kZXInLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3Jlc3RhdGVyZXN0b3JlJyxcblx0XHQnYmVmb3Jlc3RhdGVzYXZlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JveHJlYWR5Jyxcblx0XHQnY2hhbmdlJyxcblx0XHQnZGVhY3RpdmF0ZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlJyxcblx0XHQnZW5hYmxlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdtb3ZlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3JlbmRlcicsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzdGF0ZXJlc3RvcmUnLFxuXHRcdCdzdGF0ZXNhdmUnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvcmJ1dHRvbicsIFxuICBpbnB1dHM6IGNvbG9yYnV0dG9uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY29sb3JidXR0b25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q29sb3JidXR0b25Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDb2xvcmJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGNvbG9yYnV0dG9uTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGNvbG9yYnV0dG9uTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=