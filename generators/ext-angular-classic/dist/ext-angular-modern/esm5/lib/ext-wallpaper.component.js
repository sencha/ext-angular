/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var wallpaperMetaData = /** @class */ (function () {
    function wallpaperMetaData() {
    }
    wallpaperMetaData.XTYPE = 'wallpaper';
    wallpaperMetaData.PROPERTIESOBJECT = {
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
    wallpaperMetaData.PROPERTIES = [
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
    wallpaperMetaData.EVENTS = [
        { name: 'activate', parameters: 'wallpaper' },
        { name: 'added', parameters: 'wallpaper,container,pos' },
        { name: 'afterlayoutanimation', parameters: 'wallpaper' },
        { name: 'afterrender', parameters: 'wallpaper' },
        { name: 'beforeactivate', parameters: 'wallpaper' },
        { name: 'beforedeactivate', parameters: 'wallpaper' },
        { name: 'beforedestroy', parameters: 'wallpaper' },
        { name: 'beforehide', parameters: 'wallpaper' },
        { name: 'beforerender', parameters: 'wallpaper' },
        { name: 'beforeshow', parameters: 'wallpaper' },
        { name: 'beforestaterestore', parameters: 'wallpaper,state' },
        { name: 'beforestatesave', parameters: 'wallpaper,state' },
        { name: 'blur', parameters: 'wallpaper,event' },
        { name: 'boxready', parameters: 'wallpaper,width,height' },
        { name: 'deactivate', parameters: 'wallpaper' },
        { name: 'destroy', parameters: 'wallpaper' },
        { name: 'disable', parameters: 'wallpaper' },
        { name: 'enable', parameters: 'wallpaper' },
        { name: 'focus', parameters: 'wallpaper,event' },
        { name: 'focusenter', parameters: 'wallpaper,event' },
        { name: 'focusleave', parameters: 'wallpaper,event' },
        { name: 'hide', parameters: 'wallpaper' },
        { name: 'move', parameters: 'wallpaper,x,y' },
        { name: 'removed', parameters: 'wallpaper,ownerCt' },
        { name: 'render', parameters: 'wallpaper' },
        { name: 'resize', parameters: 'wallpaper,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'wallpaper' },
        { name: 'staterestore', parameters: 'wallpaper,state' },
        { name: 'statesave', parameters: 'wallpaper,state' },
        { name: 'ready', parameters: '' }
    ];
    wallpaperMetaData.EVENTNAMES = [
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
    return wallpaperMetaData;
}());
export { wallpaperMetaData };
if (false) {
    /** @type {?} */
    wallpaperMetaData.XTYPE;
    /** @type {?} */
    wallpaperMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    wallpaperMetaData.PROPERTIES;
    /** @type {?} */
    wallpaperMetaData.EVENTS;
    /** @type {?} */
    wallpaperMetaData.EVENTNAMES;
}
var ExtWallpaperComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtWallpaperComponent, _super);
    function ExtWallpaperComponent(eRef) {
        return _super.call(this, eRef, wallpaperMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtWallpaperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(wallpaperMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtWallpaperComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtWallpaperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'wallpaper',
                    inputs: wallpaperMetaData.PROPERTIES,
                    outputs: wallpaperMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtWallpaperComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtWallpaperComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtWallpaperComponent;
}(base));
export { ExtWallpaperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXdhbGxwYXBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtd2FsbHBhcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUE0UkEsQ0FBQztJQTNSZSx1QkFBSyxHQUFXLFdBQVcsQ0FBQztJQUM1QixrQ0FBZ0IsR0FBUTtRQUNwQyxlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsU0FBUztRQUMxQixhQUFhLEVBQUUsUUFBUTtRQUN2QixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFlBQVksRUFBRSw0Q0FBNEM7UUFDMUQsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7UUFDckIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsaUJBQWlCLEVBQUUsZUFBZTtRQUNsQyxXQUFXLEVBQUUsU0FBUztRQUN0QixrQkFBa0IsRUFBRSxlQUFlO1FBQ25DLGFBQWEsRUFBRSxpQ0FBaUM7UUFDaEQsV0FBVyxFQUFF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Q0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUMsRUFBQyxDQUFDO29CQUNsRixRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkF2U0MsVUFBVTs7SUFnVFosNEJBQUM7Q0FBQSxBQWZELENBTzJDLElBQUksR0FROUM7U0FSWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyB3YWxscGFwZXJNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICd3YWxscGFwZXInO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFjdGl2ZUNvdW50ZXJcIjogXCJOdW1iZXJcIixcbiAgICBcImFsaWduT25TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbGlnblRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYW5jaG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbmltYXRlU2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXV0b0VsXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiYXV0b1JlbmRlclwiOiBcIkJvb2xlYW4vU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiYXV0b1Njcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImF1dG9TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFzZUNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIk51bWJlci9TdHJpbmcvQm9vbGVhblwiLFxuICAgIFwiY2hpbGRFbHNcIjogXCJPYmplY3QvU3RyaW5nW10vT2JqZWN0W11cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sdW1uV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29tcG9uZW50TGF5b3V0XCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiY29uc3RyYWluXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uc3RyYWludEluc2V0c1wiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImNvbnN0cmFpblRvXCI6IFwiRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0QWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZG9ja1wiOiBcIid0b3AnLydib3R0b20nLydsZWZ0Jy8ncmlnaHQnXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiZml4ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb2N1c09uVG9Gcm9udFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvcm1CaW5kXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZnJhbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlxdWlkTGF5b3V0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsaXZlRHJhZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImxvYWRlclwiOiBcIkV4dC5Db21wb25lbnRMb2FkZXIvT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXNrRGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hc2tFbGVtZW50XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib3ZlckNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dYXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1lcIjogXCJTdHJpbmdcIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWdpb25cIjogXCInbm9ydGgnLydzb3V0aCcvJ2Vhc3QnLyd3ZXN0Jy8nY2VudGVyJ1wiLFxuICAgIFwicmVuZGVyQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJEYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZW5kZXJTZWxlY3RvcnNcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclRvXCI6IFwiU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmVuZGVyVHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInJlc2l6YWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJyZXNpemVIYW5kbGVzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzYXZlRGVsYXlcIjogXCJOdW1iZXJcIixcbiAgICBcInNjcm9sbGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJTdHJpbmcvQm9vbGVhblwiLFxuICAgIFwic2hhZG93T2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNocmlua1dyYXBcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwic3RhdGVFdmVudHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwic3RhdGVmdWxcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwic3RhdGVJZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0YWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cGxcIjogXCJFeHQuWFRlbXBsYXRlL0V4dC5UZW1wbGF0ZS9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidWlDbHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcInh0eXBlXCI6IFwiRXh0LmVudW1zLldpZGdldFwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhY3RpdmVDb3VudGVyJyxcbiAgICAnYWxpZ25PblNjcm9sbCcsXG4gICAgJ2FsaWduVGFyZ2V0JyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhbmNob3InLFxuICAgICdhbmltYXRlU2hhZG93JyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9FbCcsXG4gICAgJ2F1dG9SZW5kZXInLFxuICAgICdhdXRvU2Nyb2xsJyxcbiAgICAnYXV0b1Nob3cnLFxuICAgICdiYXNlQ2xzJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NoaWxkRWxzJyxcbiAgICAnY2xzJyxcbiAgICAnY29sdW1uV2lkdGgnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb21wb25lbnRMYXlvdXQnLFxuICAgICdjb25zdHJhaW4nLFxuICAgICdjb25zdHJhaW50SW5zZXRzJyxcbiAgICAnY29uc3RyYWluVG8nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRBbGlnbicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlZENscycsXG4gICAgJ2RvY2snLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNPblRvRnJvbnQnLFxuICAgICdmb3JtQmluZCcsXG4gICAgJ2ZyYW1lJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdodG1sJyxcbiAgICAnaWQnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlxdWlkTGF5b3V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbGl2ZURyYWcnLFxuICAgICdsb2FkZXInLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrRGVmYXVsdHMnLFxuICAgICdtYXNrRWxlbWVudCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnb3ZlckNscycsXG4gICAgJ292ZXJmbG93WCcsXG4gICAgJ292ZXJmbG93WScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVnaW9uJyxcbiAgICAncmVuZGVyQ29uZmlnJyxcbiAgICAncmVuZGVyRGF0YScsXG4gICAgJ3JlbmRlclNlbGVjdG9ycycsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVuZGVyVHBsJyxcbiAgICAncmVzaXphYmxlJyxcbiAgICAncmVzaXplSGFuZGxlcycsXG4gICAgJ3NhdmVEZWxheScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhZG93T2Zmc2V0JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaHJpbmtXcmFwJyxcbiAgICAnc3RhdGVFdmVudHMnLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VpQ2xzJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneHR5cGUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczond2FsbHBhcGVyJ30sXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOid3YWxscGFwZXIsY29udGFpbmVyLHBvcyd9LFxuXHRcdHtuYW1lOidhZnRlcmxheW91dGFuaW1hdGlvbicscGFyYW1ldGVyczond2FsbHBhcGVyJ30sXG5cdFx0e25hbWU6J2FmdGVycmVuZGVyJyxwYXJhbWV0ZXJzOid3YWxscGFwZXInfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J3dhbGxwYXBlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOid3YWxscGFwZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVzdHJveScscGFyYW1ldGVyczond2FsbHBhcGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3dhbGxwYXBlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVyZW5kZXInLHBhcmFtZXRlcnM6J3dhbGxwYXBlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOid3YWxscGFwZXInfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOid3YWxscGFwZXIsc3RhdGUnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOid3YWxscGFwZXIsc3RhdGUnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczond2FsbHBhcGVyLGV2ZW50J30sXG5cdFx0e25hbWU6J2JveHJlYWR5JyxwYXJhbWV0ZXJzOid3YWxscGFwZXIsd2lkdGgsaGVpZ2h0J30sXG5cdFx0e25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J3dhbGxwYXBlcid9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOid3YWxscGFwZXInfSxcblx0XHR7bmFtZTonZGlzYWJsZScscGFyYW1ldGVyczond2FsbHBhcGVyJ30sXG5cdFx0e25hbWU6J2VuYWJsZScscGFyYW1ldGVyczond2FsbHBhcGVyJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOid3YWxscGFwZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczond2FsbHBhcGVyLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J3dhbGxwYXBlcixldmVudCd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOid3YWxscGFwZXInfSxcblx0XHR7bmFtZTonbW92ZScscGFyYW1ldGVyczond2FsbHBhcGVyLHgseSd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOid3YWxscGFwZXIsb3duZXJDdCd9LFxuXHRcdHtuYW1lOidyZW5kZXInLHBhcmFtZXRlcnM6J3dhbGxwYXBlcid9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J3dhbGxwYXBlcix3aWR0aCxoZWlnaHQsb2xkV2lkdGgsb2xkSGVpZ2h0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3dhbGxwYXBlcid9LFxuXHRcdHtuYW1lOidzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J3dhbGxwYXBlcixzdGF0ZSd9LFxuXHRcdHtuYW1lOidzdGF0ZXNhdmUnLHBhcmFtZXRlcnM6J3dhbGxwYXBlcixzdGF0ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dGFuaW1hdGlvbicsXG5cdFx0J2FmdGVycmVuZGVyJyxcblx0XHQnYmVmb3JlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVzdHJveScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVyZW5kZXInLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3Jlc3RhdGVyZXN0b3JlJyxcblx0XHQnYmVmb3Jlc3RhdGVzYXZlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JveHJlYWR5Jyxcblx0XHQnZGVhY3RpdmF0ZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlJyxcblx0XHQnZW5hYmxlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdtb3ZlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3JlbmRlcicsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzdGF0ZXJlc3RvcmUnLFxuXHRcdCdzdGF0ZXNhdmUnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3YWxscGFwZXInLCBcbiAgaW5wdXRzOiB3YWxscGFwZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiB3YWxscGFwZXJNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0V2FsbHBhcGVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0V2FsbHBhcGVyQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsd2FsbHBhcGVyTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KHdhbGxwYXBlck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19