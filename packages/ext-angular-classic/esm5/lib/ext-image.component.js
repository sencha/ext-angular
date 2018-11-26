/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var imageMetaData = /** @class */ (function () {
    function imageMetaData() {
    }
    imageMetaData.XTYPE = 'image';
    imageMetaData.PROPERTIESOBJECT = {
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
    imageMetaData.PROPERTIES = [
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
    imageMetaData.EVENTS = [
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
    imageMetaData.EVENTNAMES = [
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
    return imageMetaData;
}());
export { imageMetaData };
if (false) {
    /** @type {?} */
    imageMetaData.XTYPE;
    /** @type {?} */
    imageMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    imageMetaData.PROPERTIES;
    /** @type {?} */
    imageMetaData.EVENTS;
    /** @type {?} */
    imageMetaData.EVENTNAMES;
}
var ExtImageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtImageComponent, _super);
    function ExtImageComponent(eRef) {
        return _super.call(this, eRef, imageMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(imageMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtImageComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'image',
                    inputs: imageMetaData.PROPERTIES,
                    outputs: imageMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtImageComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtImageComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtImageComponent;
}(base));
export { ExtImageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtaW1hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQTBTQSxDQUFDO0lBelNlLG1CQUFLLEdBQVcsT0FBTyxDQUFDO0lBQ3hCLDhCQUFnQixHQUFRO1FBQ3BDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLEtBQUssRUFBRSxRQUFRO1FBQ2YsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixRQUFRLEVBQUUsUUFBUTtRQUNsQixlQUFlLEVBQUUsU0FBUztRQUMxQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixRQUFRLEVBQUUsZUFBZTtRQUN6QixZQUFZLEVBQUUsNENBQTRDO1FBQzFELFlBQVksRUFBRSxTQUFTO1FBQ3ZCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsVUFBVSxFQUFFLDBCQUEwQjtRQUN0QyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGlCQUFpQixFQUFFLGVBQWU7UUFDbEMsV0FBVyxFQUFFLFNBQVM7UUFDdEIsa0JBQWtCLEVBQUUsZUFBZTtRQUNuQyxhQUFhLEVBQUUsaUNBQWlDO1FB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Q0FBQyxDQUFBO0lBQ3hCLENBQUM7O2dCQWRKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsTUFBTSxFQUFFLGFBQWEsQ0FBQyxVQUFVO29CQUNoQyxPQUFPLEVBQUUsYUFBYSxDQUFDLFVBQVU7b0JBQ2pDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQyxFQUFDLENBQUM7b0JBQzlFLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQXJUQyxVQUFVOztJQThUWix3QkFBQztDQUFBLEFBZkQsQ0FPdUMsSUFBSSxHQVExQztTQVJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGltYWdlTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnaW1hZ2UnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFjdGl2ZUNvdW50ZXJcIjogXCJOdW1iZXJcIixcbiAgICBcImFsaWduT25TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbGlnblRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYWx0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhbmNob3JcIjogXCJTdHJpbmdcIixcbiAgICBcImFuaW1hdGVTaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhdXRvRWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJhdXRvUmVuZGVyXCI6IFwiQm9vbGVhbi9TdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJhdXRvU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXV0b1Nob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiYXNlQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiTnVtYmVyL1N0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJjaGlsZEVsc1wiOiBcIk9iamVjdC9TdHJpbmdbXS9PYmplY3RbXVwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb2x1bW5XaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwiY29tcG9uZW50Q2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb21wb25lbnRMYXlvdXRcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJjb25zdHJhaW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25zdHJhaW50SW5zZXRzXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiY29uc3RyYWluVG9cIjogXCJFeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkb2NrXCI6IFwiJ3RvcCcvJ2JvdHRvbScvJ2xlZnQnLydyaWdodCdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJmaXhlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXJcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZvY3VzT25Ub0Zyb250XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9ybUJpbmRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmcmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImdseXBoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiZ2x5cGhvcmlnXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW1nQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlxdWlkTGF5b3V0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsaXZlRHJhZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImxvYWRlclwiOiBcIkV4dC5Db21wb25lbnRMb2FkZXIvT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXNrRGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hc2tFbGVtZW50XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib3ZlckNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dYXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1lcIjogXCJTdHJpbmdcIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWdpb25cIjogXCInbm9ydGgnLydzb3V0aCcvJ2Vhc3QnLyd3ZXN0Jy8nY2VudGVyJ1wiLFxuICAgIFwicmVuZGVyQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJEYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJTZWxlY3RvcnNcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclRvXCI6IFwiU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmVuZGVyVHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInJlc2l6YWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJyZXNpemVIYW5kbGVzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzYXZlRGVsYXlcIjogXCJOdW1iZXJcIixcbiAgICBcInNjcm9sbGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJTdHJpbmcvQm9vbGVhblwiLFxuICAgIFwic2hhZG93T2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNocmlua1dyYXBcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwic3JjXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzdGF0ZUV2ZW50c1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJzdGF0ZWZ1bFwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJzdGF0ZUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0aXRsZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cGxcIjogXCJFeHQuWFRlbXBsYXRlL0V4dC5UZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidWlDbHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcInh0eXBlXCI6IFwiRXh0LmVudW1zLldpZGdldFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhY3RpdmVDb3VudGVyJyxcbiAgICAnYWxpZ25PblNjcm9sbCcsXG4gICAgJ2FsaWduVGFyZ2V0JyxcbiAgICAnYWx0JyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhbmNob3InLFxuICAgICdhbmltYXRlU2hhZG93JyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9FbCcsXG4gICAgJ2F1dG9SZW5kZXInLFxuICAgICdhdXRvU2Nyb2xsJyxcbiAgICAnYXV0b1Nob3cnLFxuICAgICdiYXNlQ2xzJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NoaWxkRWxzJyxcbiAgICAnY2xzJyxcbiAgICAnY29sdW1uV2lkdGgnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb21wb25lbnRMYXlvdXQnLFxuICAgICdjb25zdHJhaW4nLFxuICAgICdjb25zdHJhaW50SW5zZXRzJyxcbiAgICAnY29uc3RyYWluVG8nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRBbGlnbicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlZENscycsXG4gICAgJ2RvY2snLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNPblRvRnJvbnQnLFxuICAgICdmb3JtQmluZCcsXG4gICAgJ2ZyYW1lJyxcbiAgICAnZ2x5cGgnLFxuICAgICdnbHlwaG9yaWcnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2ltZ0NscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaXF1aWRMYXlvdXQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdsaXZlRHJhZycsXG4gICAgJ2xvYWRlcicsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hc2tEZWZhdWx0cycsXG4gICAgJ21hc2tFbGVtZW50JyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21vZGFsJyxcbiAgICAnbW9kZWxWYWxpZGF0aW9uJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdvdmVyQ2xzJyxcbiAgICAnb3ZlcmZsb3dYJyxcbiAgICAnb3ZlcmZsb3dZJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWdpb24nLFxuICAgICdyZW5kZXJDb25maWcnLFxuICAgICdyZW5kZXJEYXRhJyxcbiAgICAncmVuZGVyU2VsZWN0b3JzJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZW5kZXJUcGwnLFxuICAgICdyZXNpemFibGUnLFxuICAgICdyZXNpemVIYW5kbGVzJyxcbiAgICAnc2F2ZURlbGF5JyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFkb3dPZmZzZXQnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nocmlua1dyYXAnLFxuICAgICdzcmMnLFxuICAgICdzdGF0ZUV2ZW50cycsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0aXRsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1aUNscycsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3h0eXBlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOidpbWFnZSd9LFxuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonaW1hZ2UsY29udGFpbmVyLHBvcyd9LFxuXHRcdHtuYW1lOidhZnRlcmxheW91dGFuaW1hdGlvbicscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonYWZ0ZXJyZW5kZXInLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2JlZm9yZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidpbWFnZSd9LFxuXHRcdHtuYW1lOidiZWZvcmVkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidpbWFnZSd9LFxuXHRcdHtuYW1lOidiZWZvcmVkZXN0cm95JyxwYXJhbWV0ZXJzOidpbWFnZSd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidpbWFnZSd9LFxuXHRcdHtuYW1lOidiZWZvcmVyZW5kZXInLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlcmVzdG9yZScscGFyYW1ldGVyczonaW1hZ2Usc3RhdGUnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOidpbWFnZSxzdGF0ZSd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidpbWFnZSxldmVudCd9LFxuXHRcdHtuYW1lOidib3hyZWFkeScscGFyYW1ldGVyczonaW1hZ2Usd2lkdGgsaGVpZ2h0J30sXG5cdFx0e25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2Rpc2FibGUnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J2VuYWJsZScscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2ltYWdlLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2ltYWdlLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2ltYWdlLGV2ZW50J30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6J2ltYWdlLHgseSd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidpbWFnZSxvd25lckN0J30sXG5cdFx0e25hbWU6J3JlbmRlcicscGFyYW1ldGVyczonaW1hZ2UnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidpbWFnZSx3aWR0aCxoZWlnaHQsb2xkV2lkdGgsb2xkSGVpZ2h0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J2ltYWdlJ30sXG5cdFx0e25hbWU6J3N0YXRlcmVzdG9yZScscGFyYW1ldGVyczonaW1hZ2Usc3RhdGUnfSxcblx0XHR7bmFtZTonc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOidpbWFnZSxzdGF0ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dGFuaW1hdGlvbicsXG5cdFx0J2FmdGVycmVuZGVyJyxcblx0XHQnYmVmb3JlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVzdHJveScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVyZW5kZXInLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3Jlc3RhdGVyZXN0b3JlJyxcblx0XHQnYmVmb3Jlc3RhdGVzYXZlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JveHJlYWR5Jyxcblx0XHQnZGVhY3RpdmF0ZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlJyxcblx0XHQnZW5hYmxlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdtb3ZlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3JlbmRlcicsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzdGF0ZXJlc3RvcmUnLFxuXHRcdCdzdGF0ZXNhdmUnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZScsIFxuICBpbnB1dHM6IGltYWdlTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogaW1hZ2VNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0SW1hZ2VDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRJbWFnZUNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGltYWdlTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGltYWdlTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=