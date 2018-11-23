/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var d3_sunburstMetaData = /** @class */ (function () {
    function d3_sunburstMetaData() {
    }
    d3_sunburstMetaData.XTYPE = 'd3-sunburst';
    d3_sunburstMetaData.PROPERTIESOBJECT = {
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "bind": "Object/String",
        "border": "Boolean",
        "clipScene": "Boolean",
        "cls": "String/String[]",
        "colorAxis": "Ext.d3.axis.Color",
        "componentCls": "String",
        "controller": "String/Object/Ext.app.ViewController",
        "defaultListenerScope": "Boolean",
        "disabled": "Boolean",
        "eventHandlers": "Object",
        "expandEventName": "String/String[]",
        "focusCls": "String",
        "height": "Number/String",
        "hidden": "Boolean",
        "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
        "hierarchyCls": "String",
        "instanceCls": "String/String[]",
        "interactions": "any",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "layout": "Function",
        "linkKey": "Function",
        "listeners": "Object",
        "name": "String",
        "nameable": "Boolean",
        "nodeChildren": "Function",
        "nodeClass": "Function",
        "nodeKey": "Function",
        "nodeText": "Function/String/String[]",
        "nodeTransform": "Function",
        "nodeValue": "Function/String/Number",
        "noParentValue": "Boolean",
        "noSizeLayout": "Boolean",
        "padding": "Object/String/Number",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "reference": "String",
        "renderLinks": "Boolean",
        "renderTo": "Ext.Element",
        "ripple": "Boolean/Object/String",
        "rootVisible": "Boolean",
        "selectEventName": "String/String[]",
        "selection": "Ext.data.TreeModel",
        "session": "Boolean/Object/Ext.data.Session",
        "shareableName": "Boolean",
        "size": "Object",
        "sorter": "Function",
        "store": "Ext.data.Store",
        "style": "String/Object",
        "textPadding": "Array",
        "tooltip": "Ext.tip.ToolTip",
        "touchAction": "Object",
        "transitions": "any",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String/String[]",
        "userCls": "String/String[]",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "width": "Number/String",
        "zoomParentDotRadius": "Number",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    d3_sunburstMetaData.PROPERTIES = [
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'bind',
        'border',
        'clipScene',
        'cls',
        'colorAxis',
        'componentCls',
        'controller',
        'defaultListenerScope',
        'disabled',
        'eventHandlers',
        'expandEventName',
        'focusCls',
        'height',
        'hidden',
        'hideMode',
        'hierarchyCls',
        'instanceCls',
        'interactions',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'linkKey',
        'listeners',
        'name',
        'nameable',
        'nodeChildren',
        'nodeClass',
        'nodeKey',
        'nodeText',
        'nodeTransform',
        'nodeValue',
        'noParentValue',
        'noSizeLayout',
        'padding',
        'plugins',
        'publishes',
        'reference',
        'renderLinks',
        'renderTo',
        'ripple',
        'rootVisible',
        'selectEventName',
        'selection',
        'session',
        'shareableName',
        'size',
        'sorter',
        'store',
        'style',
        'textPadding',
        'tooltip',
        'touchAction',
        'transitions',
        'twoWayBindable',
        'ui',
        'userCls',
        'viewModel',
        'width',
        'zoomParentDotRadius',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    d3_sunburstMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'd3-sunburst,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'd3-sunburst,event' },
        { name: 'focusenter', parameters: 'd3-sunburst,event' },
        { name: 'focusleave', parameters: 'd3-sunburst,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'layout', parameters: 'component' },
        { name: 'sceneresize', parameters: 'component,scene,size' },
        { name: 'scenesetup', parameters: 'component,scene' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    d3_sunburstMetaData.EVENTNAMES = [
        'beforedisabledchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforewidthchange',
        'blur',
        'disabledchange',
        'focus',
        'focusenter',
        'focusleave',
        'heightchange',
        'hiddenchange',
        'layout',
        'sceneresize',
        'scenesetup',
        'widthchange',
        'ready'
    ];
    return d3_sunburstMetaData;
}());
export { d3_sunburstMetaData };
if (false) {
    /** @type {?} */
    d3_sunburstMetaData.XTYPE;
    /** @type {?} */
    d3_sunburstMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    d3_sunburstMetaData.PROPERTIES;
    /** @type {?} */
    d3_sunburstMetaData.EVENTS;
    /** @type {?} */
    d3_sunburstMetaData.EVENTNAMES;
}
var ExtD3_sunburstComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtD3_sunburstComponent, _super);
    function ExtD3_sunburstComponent(eRef) {
        return _super.call(this, eRef, d3_sunburstMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtD3_sunburstComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(d3_sunburstMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtD3_sunburstComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtD3_sunburstComponent.decorators = [
        { type: Component, args: [{
                    selector: 'd3-sunburst',
                    inputs: d3_sunburstMetaData.PROPERTIES,
                    outputs: d3_sunburstMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtD3_sunburstComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtD3_sunburstComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtD3_sunburstComponent;
}(base));
export { ExtD3_sunburstComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWQzLXN1bmJ1cnN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC1kMy1zdW5idXJzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBZ0xBLENBQUM7SUEvS2UseUJBQUssR0FBVyxhQUFhLENBQUM7SUFDOUIsb0NBQWdCLEdBQVE7UUFDcEMsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixXQUFXLEVBQUUsbUJBQW1CO1FBQ2hDLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFlBQVksRUFBRSxzQ0FBc0M7UUFDcEQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxVQUFVLEVBQUUsU0FBUztRQUNyQixlQUFlLEVBQUUsUUFBUTtRQUN6QixpQkFBaUIsRUFBRSxpQkFBaUI7UUFDcEMsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsVUFBVSxFQUFFLG1EQUFtRDtRQUMvRCxjQUFjLEVBQUUsUUFBUTtRQUN4QixhQUFhLEVBQUUsaUJBQWlCO1FBQ2hDLGNBQWMsRUFBRSxLQUFLO1FBQ3JCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFFBQVEs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WixhQUFhO1FBQ2IsT0FBTztLQUNSLENBQUM7SUFDRiwwQkFBQztDQUFBLEFBaExELElBZ0xDO1NBaExZLG1CQUFtQjs7O0lBQzlCLDBCQUE0Qzs7SUFDNUMscUNBb0VBOztJQUNBLCtCQW9FQTs7SUFDQSwyQkFpQkE7O0lBQ0EsK0JBaUJBOztBQUVGO0lBTzZDLG1EQUFJO0lBQy9DLGlDQUFZLElBQWU7ZUFBRyxrQkFBTSxJQUFJLEVBQUMsbUJBQW1CLENBQUM7SUFBQSxDQUFDOzs7O0lBQ3ZELDBDQUFROzs7SUFBZixjQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQSxDQUFDO0lBQ3hELDBFQUEwRTs7Ozs7SUFDbkUsb0RBQWtCOzs7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7Z0JBZEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixNQUFNLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtvQkFDdEMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFVBQVU7b0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBdUIsRUFBdkIsQ0FBdUIsQ0FBQyxFQUFDLENBQUM7b0JBQ3BGLFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQTNMQyxVQUFVOztJQW9NWiw4QkFBQztDQUFBLEFBZkQsQ0FPNkMsSUFBSSxHQVFoRDtTQVJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGQzX3N1bmJ1cnN0TWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnZDMtc3VuYnVyc3QnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbGlwU2NlbmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbG9yQXhpc1wiOiBcIkV4dC5kMy5heGlzLkNvbG9yXCIsXG4gICAgXCJjb21wb25lbnRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJldmVudEhhbmRsZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJleHBhbmRFdmVudE5hbWVcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImhpZXJhcmNoeUNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImludGVyYWN0aW9uc1wiOiBcImFueVwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsYXlvdXRcIjogXCJGdW5jdGlvblwiLFxuICAgIFwibGlua0tleVwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibm9kZUNoaWxkcmVuXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcIm5vZGVDbGFzc1wiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJub2RlS2V5XCI6IFwiRnVuY3Rpb25cIixcbiAgICBcIm5vZGVUZXh0XCI6IFwiRnVuY3Rpb24vU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJub2RlVHJhbnNmb3JtXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcIm5vZGVWYWx1ZVwiOiBcIkZ1bmN0aW9uL1N0cmluZy9OdW1iZXJcIixcbiAgICBcIm5vUGFyZW50VmFsdWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJub1NpemVMYXlvdXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiT2JqZWN0L1N0cmluZy9OdW1iZXJcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbmRlckxpbmtzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuRWxlbWVudFwiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJyb290VmlzaWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNlbGVjdEV2ZW50TmFtZVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwic2VsZWN0aW9uXCI6IFwiRXh0LmRhdGEuVHJlZU1vZGVsXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNpemVcIjogXCJPYmplY3RcIixcbiAgICBcInNvcnRlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJzdG9yZVwiOiBcIkV4dC5kYXRhLlN0b3JlXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRleHRQYWRkaW5nXCI6IFwiQXJyYXlcIixcbiAgICBcInRvb2x0aXBcIjogXCJFeHQudGlwLlRvb2xUaXBcIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cmFuc2l0aW9uc1wiOiBcImFueVwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ6b29tUGFyZW50RG90UmFkaXVzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2xpcFNjZW5lJyxcbiAgICAnY2xzJyxcbiAgICAnY29sb3JBeGlzJyxcbiAgICAnY29tcG9uZW50Q2xzJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZXhwYW5kRXZlbnROYW1lJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZXJhcmNoeUNscycsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaW50ZXJhY3Rpb25zJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xpbmtLZXknLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdub2RlQ2hpbGRyZW4nLFxuICAgICdub2RlQ2xhc3MnLFxuICAgICdub2RlS2V5JyxcbiAgICAnbm9kZVRleHQnLFxuICAgICdub2RlVHJhbnNmb3JtJyxcbiAgICAnbm9kZVZhbHVlJyxcbiAgICAnbm9QYXJlbnRWYWx1ZScsXG4gICAgJ25vU2l6ZUxheW91dCcsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVuZGVyTGlua3MnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Jvb3RWaXNpYmxlJyxcbiAgICAnc2VsZWN0RXZlbnROYW1lJyxcbiAgICAnc2VsZWN0aW9uJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaXplJyxcbiAgICAnc29ydGVyJyxcbiAgICAnc3RvcmUnLFxuICAgICdzdHlsZScsXG4gICAgJ3RleHRQYWRkaW5nJyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHJhbnNpdGlvbnMnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAnem9vbVBhcmVudERvdFJhZGl1cycsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonZDMtc3VuYnVyc3QsZXZlbnQnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonZDMtc3VuYnVyc3QsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonZDMtc3VuYnVyc3QsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonZDMtc3VuYnVyc3QsZXZlbnQnfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbGF5b3V0JyxwYXJhbWV0ZXJzOidjb21wb25lbnQnfSxcblx0XHR7bmFtZTonc2NlbmVyZXNpemUnLHBhcmFtZXRlcnM6J2NvbXBvbmVudCxzY2VuZSxzaXplJ30sXG5cdFx0e25hbWU6J3NjZW5lc2V0dXAnLHBhcmFtZXRlcnM6J2NvbXBvbmVudCxzY2VuZSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCdsYXlvdXQnLFxuXHRcdCdzY2VuZXJlc2l6ZScsXG5cdFx0J3NjZW5lc2V0dXAnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2QzLXN1bmJ1cnN0JywgXG4gIGlucHV0czogZDNfc3VuYnVyc3RNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBkM19zdW5idXJzdE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREM19zdW5idXJzdENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEQzX3N1bmJ1cnN0Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsZDNfc3VuYnVyc3RNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoZDNfc3VuYnVyc3RNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==