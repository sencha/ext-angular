/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var imagecomponentMetaData = /** @class */ (function () {
    function imagecomponentMetaData() {
    }
    imagecomponentMetaData.XTYPE = 'imagecomponent';
    imagecomponentMetaData.PROPERTIESOBJECT = {
        "activeCounter": "Number",
        "alignOnScroll": "Boolean",
        "alignTarget": "String",
        "alt": "String",
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
        "glyph": "Number/String",
        "glyphorig": "Number/String",
        "height": "Number|String",
        "hidden": "Boolean",
        "hideMode": "String",
        "html": "String/Object",
        "id": "String",
        "imgCls": "String",
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
        "src": "String",
        "stateEvents": "String[]",
        "stateful": "Boolean/Object",
        "stateId": "String",
        "style": "String/Object",
        "tabIndex": "Number",
        "title": "String",
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
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    imagecomponentMetaData.PROPERTIES = [
        'activeCounter',
        'alignOnScroll',
        'alignTarget',
        'alt',
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
        'glyph',
        'glyphorig',
        'height',
        'hidden',
        'hideMode',
        'html',
        'id',
        'imgCls',
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
        'src',
        'stateEvents',
        'stateful',
        'stateId',
        'style',
        'tabIndex',
        'title',
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
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    imagecomponentMetaData.EVENTS = [
        { name: 'activate', parameters: 'image' },
        { name: 'added', parameters: 'image,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'image' },
        { name: 'afterrender', parameters: 'image' },
        { name: 'beforeactivate', parameters: 'image' },
        { name: 'beforedeactivate', parameters: 'image' },
        { name: 'beforedestroy', parameters: 'image' },
        { name: 'beforehide', parameters: 'image' },
        { name: 'beforerender', parameters: 'image' },
        { name: 'beforeshow', parameters: 'image' },
        { name: 'beforestaterestore', parameters: 'image,state' },
        { name: 'beforestatesave', parameters: 'image,state' },
        { name: 'blur', parameters: 'image,event' },
        { name: 'boxready', parameters: 'image,width,height' },
        { name: 'deactivate', parameters: 'image' },
        { name: 'destroy', parameters: 'image' },
        { name: 'disable', parameters: 'image' },
        { name: 'enable', parameters: 'image' },
        { name: 'focus', parameters: 'image,event' },
        { name: 'focusenter', parameters: 'image,event' },
        { name: 'focusleave', parameters: 'image,event' },
        { name: 'hide', parameters: 'image' },
        { name: 'move', parameters: 'image,x,y' },
        { name: 'removed', parameters: 'image,ownerCt' },
        { name: 'render', parameters: 'image' },
        { name: 'resize', parameters: 'image,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'image' },
        { name: 'staterestore', parameters: 'image,state' },
        { name: 'statesave', parameters: 'image,state' },
        { name: 'ready', parameters: '' }
    ];
    imagecomponentMetaData.EVENTNAMES = [
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
    return imagecomponentMetaData;
}());
export { imagecomponentMetaData };
if (false) {
    /** @type {?} */
    imagecomponentMetaData.XTYPE;
    /** @type {?} */
    imagecomponentMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    imagecomponentMetaData.PROPERTIES;
    /** @type {?} */
    imagecomponentMetaData.EVENTS;
    /** @type {?} */
    imagecomponentMetaData.EVENTNAMES;
}
var ExtImagecomponentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtImagecomponentComponent, _super);
    function ExtImagecomponentComponent(eRef) {
        return _super.call(this, eRef, imagecomponentMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtImagecomponentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(imagecomponentMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtImagecomponentComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtImagecomponentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'imagecomponent',
                    inputs: imagecomponentMetaData.PROPERTIES,
                    outputs: imagecomponentMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtImagecomponentComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtImagecomponentComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtImagecomponentComponent;
}(base));
export { ExtImagecomponentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWltYWdlY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtaW1hZ2Vjb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTBTQSxDQUFDO0lBelNlLDRCQUFLLEdBQVcsZ0JBQWdCLENBQUM7SUFDakMsdUNBQWdCLEdBQVE7UUFDcEMsZUFBZSxFQUFFLFFBQVE7UUFDekIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsS0FBSyxFQUFFLFFBQVE7UUFDZixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFlBQVksRUFBRSw0Q0FBNEM7UUFDMUQsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7UUFDckIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsaUJBQWlCLEVBQUUsZUFBZTtRQUNsQyxXQUFXLEVBQUUsU0FBUztRQUN0QixrQkFBa0IsRUFBRSxlQUFlO1FBQ25D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LENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxVQUFVO29CQUN6QyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsVUFBVTtvQkFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDBCQUEwQixFQUExQixDQUEwQixDQUFDLEVBQUMsQ0FBQztvQkFDdkYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBclRDLFVBQVU7O0lBOFRaLGlDQUFDO0NBQUEsQUFmRCxDQU9nRCxJQUFJLEdBUW5EO1NBUlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgaW1hZ2Vjb21wb25lbnRNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdpbWFnZWNvbXBvbmVudCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWN0aXZlQ291bnRlclwiOiBcIk51bWJlclwiLFxuICAgIFwiYWxpZ25PblNjcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFsaWduVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbHRcIjogXCJTdHJpbmdcIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFuY2hvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYW5pbWF0ZVNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImF1dG9FbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImF1dG9SZW5kZXJcIjogXCJCb29sZWFuL1N0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImF1dG9TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhdXRvU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhc2VDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJOdW1iZXIvU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcImNoaWxkRWxzXCI6IFwiT2JqZWN0L1N0cmluZ1tdL09iamVjdFtdXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbHVtbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJjb21wb25lbnRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbXBvbmVudExheW91dFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImNvbnN0cmFpblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbnN0cmFpbnRJbnNldHNcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJjb25zdHJhaW5Ub1wiOiBcIkV4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdEFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImRvY2tcIjogXCIndG9wJy8nYm90dG9tJy8nbGVmdCcvJ3JpZ2h0J1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcImZpeGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlclwiLFxuICAgIFwiZmxvYXRpbmdcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZm9jdXNPblRvRnJvbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb3JtQmluZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZyYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZ2x5cGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJnbHlwaG9yaWdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbWdDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXF1aWRMYXlvdXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcImxpdmVEcmFnXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibG9hZGVyXCI6IFwiRXh0LkNvbXBvbmVudExvYWRlci9PYmplY3RcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1hc2tEZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwibWFza0VsZW1lbnRcIjogXCJTdHJpbmdcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4V2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1vZGFsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibW9kZWxWYWxpZGF0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJvdmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1hcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlZ2lvblwiOiBcIidub3J0aCcvJ3NvdXRoJy8nZWFzdCcvJ3dlc3QnLydjZW50ZXInXCIsXG4gICAgXCJyZW5kZXJDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlckRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclNlbGVjdG9yc1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJTdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyZW5kZXJUcGxcIjogXCJFeHQuWFRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwicmVzaXphYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInJlc2l6ZUhhbmRsZXNcIjogXCJTdHJpbmdcIixcbiAgICBcInNhdmVEZWxheVwiOiBcIk51bWJlclwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIlN0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJzaGFkb3dPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hyaW5rV3JhcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJzcmNcIjogXCJTdHJpbmdcIixcbiAgICBcInN0YXRlRXZlbnRzXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRpdGxlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvRXh0LlRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidHBsV3JpdGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ1aUNsc1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3ZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwieHR5cGVcIjogXCJFeHQuZW51bXMuV2lkZ2V0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FjdGl2ZUNvdW50ZXInLFxuICAgICdhbGlnbk9uU2Nyb2xsJyxcbiAgICAnYWxpZ25UYXJnZXQnLFxuICAgICdhbHQnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FuY2hvcicsXG4gICAgJ2FuaW1hdGVTaGFkb3cnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXV0b0VsJyxcbiAgICAnYXV0b1JlbmRlcicsXG4gICAgJ2F1dG9TY3JvbGwnLFxuICAgICdhdXRvU2hvdycsXG4gICAgJ2Jhc2VDbHMnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2hpbGRFbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW5XaWR0aCcsXG4gICAgJ2NvbXBvbmVudENscycsXG4gICAgJ2NvbXBvbmVudExheW91dCcsXG4gICAgJ2NvbnN0cmFpbicsXG4gICAgJ2NvbnN0cmFpbnRJbnNldHMnLFxuICAgICdjb25zdHJhaW5UbycsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdEFsaWduJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc2FibGVkQ2xzJyxcbiAgICAnZG9jaycsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2ZpeGVkJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0aW5nJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb2N1c09uVG9Gcm9udCcsXG4gICAgJ2Zvcm1CaW5kJyxcbiAgICAnZnJhbWUnLFxuICAgICdnbHlwaCcsXG4gICAgJ2dseXBob3JpZycsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaW1nQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpcXVpZExheW91dCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ2xpdmVEcmFnJyxcbiAgICAnbG9hZGVyJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza0RlZmF1bHRzJyxcbiAgICAnbWFza0VsZW1lbnQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lYWJsZScsXG4gICAgJ292ZXJDbHMnLFxuICAgICdvdmVyZmxvd1gnLFxuICAgICdvdmVyZmxvd1knLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZ2lvbicsXG4gICAgJ3JlbmRlckNvbmZpZycsXG4gICAgJ3JlbmRlckRhdGEnLFxuICAgICdyZW5kZXJTZWxlY3RvcnMnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JlbmRlclRwbCcsXG4gICAgJ3Jlc2l6YWJsZScsXG4gICAgJ3Jlc2l6ZUhhbmRsZXMnLFxuICAgICdzYXZlRGVsYXknLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYWRvd09mZnNldCcsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hyaW5rV3JhcCcsXG4gICAgJ3NyYycsXG4gICAgJ3N0YXRlRXZlbnRzJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VpQ2xzJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneHR5cGUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidpbWFnZSxjb250YWluZXIscG9zJ30sXG5cdFx0e25hbWU6J2FmdGVybGF5b3V0YW5pbWF0aW9uJyxwYXJhbWV0ZXJzOidpbWFnZSd9LFxuXHRcdHtuYW1lOidhZnRlcnJlbmRlcicscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRlc3Ryb3knLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJlbmRlcicscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOidpbWFnZSxzdGF0ZSd9LFxuXHRcdHtuYW1lOidiZWZvcmVzdGF0ZXNhdmUnLHBhcmFtZXRlcnM6J2ltYWdlLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2ltYWdlLGV2ZW50J30sXG5cdFx0e25hbWU6J2JveHJlYWR5JyxwYXJhbWV0ZXJzOidpbWFnZSx3aWR0aCxoZWlnaHQnfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonZGlzYWJsZScscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonZW5hYmxlJyxwYXJhbWV0ZXJzOidpbWFnZSd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonaW1hZ2UsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonaW1hZ2UsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonaW1hZ2UsZXZlbnQnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonbW92ZScscGFyYW1ldGVyczonaW1hZ2UseCx5J30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J2ltYWdlLG93bmVyQ3QnfSxcblx0XHR7bmFtZToncmVuZGVyJyxwYXJhbWV0ZXJzOidpbWFnZSd9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2ltYWdlLHdpZHRoLGhlaWdodCxvbGRXaWR0aCxvbGRIZWlnaHQnfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOidpbWFnZSxzdGF0ZSd9LFxuXHRcdHtuYW1lOidzdGF0ZXNhdmUnLHBhcmFtZXRlcnM6J2ltYWdlLHN0YXRlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhZGRlZCcsXG5cdFx0J2FmdGVybGF5b3V0YW5pbWF0aW9uJyxcblx0XHQnYWZ0ZXJyZW5kZXInLFxuXHRcdCdiZWZvcmVhY3RpdmF0ZScsXG5cdFx0J2JlZm9yZWRlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZXN0cm95Jyxcblx0XHQnYmVmb3JlaGlkZScsXG5cdFx0J2JlZm9yZXJlbmRlcicsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmVzdGF0ZXJlc3RvcmUnLFxuXHRcdCdiZWZvcmVzdGF0ZXNhdmUnLFxuXHRcdCdibHVyJyxcblx0XHQnYm94cmVhZHknLFxuXHRcdCdkZWFjdGl2YXRlJyxcblx0XHQnZGVzdHJveScsXG5cdFx0J2Rpc2FibGUnLFxuXHRcdCdlbmFibGUnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnaGlkZScsXG5cdFx0J21vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyJyxcblx0XHQncmVzaXplJyxcblx0XHQnc2hvdycsXG5cdFx0J3N0YXRlcmVzdG9yZScsXG5cdFx0J3N0YXRlc2F2ZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ltYWdlY29tcG9uZW50JywgXG4gIGlucHV0czogaW1hZ2Vjb21wb25lbnRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBpbWFnZWNvbXBvbmVudE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRJbWFnZWNvbXBvbmVudENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEltYWdlY29tcG9uZW50Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsaW1hZ2Vjb21wb25lbnRNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoaW1hZ2Vjb21wb25lbnRNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==