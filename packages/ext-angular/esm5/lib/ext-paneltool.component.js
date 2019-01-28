/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var paneltoolMetaData = /** @class */ (function () {
    function paneltoolMetaData() {
    }
    paneltoolMetaData.XTYPE = 'paneltool';
    paneltoolMetaData.PROPERTIESOBJECT = {
        "alwaysOnTop": "Boolean/Number",
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "axisLock": "Boolean",
        "bind": "Object/String",
        "border": "Boolean",
        "bottom": "Number/String",
        "centered": "Boolean",
        "cls": "String/String[]",
        "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
        "contentEl": "Ext.dom.Element/HTMLElement/String",
        "controller": "String/Object/Ext.app.ViewController",
        "data": "Object",
        "defaultListenerScope": "Boolean",
        "disabled": "Boolean",
        "displayed": "Boolean",
        "docked": "String",
        "draggable": "Boolean/Object/Ext.drag.Source",
        "enterAnimation": "String/Mixed",
        "eventHandlers": "Object",
        "exitAnimation": "String/Mixed",
        "flex": "Number/String/Object",
        "floated": "Boolean",
        "focusCls": "String",
        "fullscreen": "Boolean",
        "handler": "Function/String",
        "height": "Number/String",
        "hidden": "Boolean",
        "hideAnimation": "String/Mixed",
        "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
        "hideOnMaskTap": "Boolean",
        "html": "String/Ext.dom.Element/HTMLElement",
        "iconCls": "String",
        "id": "String",
        "instanceCls": "String/String[]",
        "itemId": "String",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "left": "Number/String",
        "listeners": "Object",
        "margin": "Number/String",
        "maxHeight": "Number/String",
        "maxWidth": "Number/String",
        "minHeight": "Number/String",
        "minWidth": "Number/String",
        "modal": "Boolean",
        "modelValidation": "Boolean",
        "name": "String",
        "nameable": "Boolean",
        "padding": "Number/String",
        "passive": "Boolean",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "record": "Ext.data.Model",
        "reference": "String",
        "relative": "Boolean",
        "renderTo": "Ext.dom.Element",
        "right": "Number/String",
        "ripple": "Boolean/Object/String",
        "scope": "Object",
        "scrollable": "Boolean/String/Object",
        "selfAlign": "String",
        "session": "Boolean/Object/Ext.data.Session",
        "shadow": "Boolean",
        "shareableName": "Boolean",
        "shim": "Boolean",
        "showAnimation": "String/Mixed",
        "stateful": "Boolean/Object/String[]",
        "statefulDefaults": "Object/String[]",
        "stateId": "String",
        "stopEvent": "Boolean",
        "style": "String/Object",
        "tabIndex": "Number",
        "toFrontOnShow": "Boolean",
        "toolOwner": "Ext.Component",
        "tooltip": "String/Object",
        "top": "Number/String",
        "touchAction": "Object",
        "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
        "tplWriteMode": "String",
        "translatable": "Object",
        "twoWayBindable": "String/String[]/Object",
        "type": "String",
        "ui": "String/String[]",
        "userCls": "String/String[]",
        "userSelectable": "Boolean/String/Object",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "weight": "Number",
        "width": "Number/String",
        "x": "Number",
        "xtype": "String",
        "y": "Number",
        "zIndex": "Number",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    paneltoolMetaData.PROPERTIES = [
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'axisLock',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'constrainAlign',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'enterAnimation',
        'eventHandlers',
        'exitAnimation',
        'flex',
        'floated',
        'focusCls',
        'fullscreen',
        'handler',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'html',
        'iconCls',
        'id',
        'instanceCls',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'padding',
        'passive',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'ripple',
        'scope',
        'scrollable',
        'selfAlign',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'stateful',
        'statefulDefaults',
        'stateId',
        'stopEvent',
        'style',
        'tabIndex',
        'toFrontOnShow',
        'toolOwner',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'type',
        'ui',
        'userCls',
        'userSelectable',
        'viewModel',
        'weight',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    paneltoolMetaData.EVENTS = [
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehide', parameters: 'sender' },
        { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforetofront', parameters: 'tool' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'tool,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'click', parameters: 'tool,e,owner' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'tool,event' },
        { name: 'focusenter', parameters: 'tool,event' },
        { name: 'focusleave', parameters: 'tool,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'tool' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    paneltoolMetaData.EVENTNAMES = [
        'added',
        'beforebottomchange',
        'beforecenteredchange',
        'beforedisabledchange',
        'beforedockedchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforehide',
        'beforeleftchange',
        'beforemaxHeightchange',
        'beforemaxWidthchange',
        'beforeminHeightchange',
        'beforeminWidthchange',
        'beforeorientationchange',
        'beforerightchange',
        'beforescrollablechange',
        'beforeshow',
        'beforetofront',
        'beforetopchange',
        'beforewidthchange',
        'blur',
        'bottomchange',
        'centeredchange',
        'click',
        'destroy',
        'disabledchange',
        'dockedchange',
        'erased',
        'floatingchange',
        'focus',
        'focusenter',
        'focusleave',
        'fullscreen',
        'heightchange',
        'hiddenchange',
        'hide',
        'initialize',
        'leftchange',
        'maxHeightchange',
        'maxWidthchange',
        'minHeightchange',
        'minWidthchange',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'removed',
        'resize',
        'rightchange',
        'scrollablechange',
        'show',
        'tofront',
        'topchange',
        'updatedata',
        'widthchange',
        'ready'
    ];
    return paneltoolMetaData;
}());
export { paneltoolMetaData };
if (false) {
    /** @type {?} */
    paneltoolMetaData.XTYPE;
    /** @type {?} */
    paneltoolMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    paneltoolMetaData.PROPERTIES;
    /** @type {?} */
    paneltoolMetaData.EVENTS;
    /** @type {?} */
    paneltoolMetaData.EVENTNAMES;
}
var ExtPaneltoolComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPaneltoolComponent, _super);
    function ExtPaneltoolComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, paneltoolMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    /**
     * @return {?}
     */
    ExtPaneltoolComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.baseOnInit(paneltoolMetaData);
    };
    /**
     * @return {?}
     */
    ExtPaneltoolComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    ExtPaneltoolComponent.decorators = [
        { type: Component, args: [{
                    selector: 'paneltool',
                    inputs: paneltoolMetaData.PROPERTIES,
                    outputs: paneltoolMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtPaneltoolComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtPaneltoolComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtPaneltoolComponent;
}(base));
export { ExtPaneltoolComponent };
if (false) {
    /** @type {?} */
    ExtPaneltoolComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBhbmVsdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1wYW5lbHRvb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQW1VQSxDQUFDO0lBbFVlLHVCQUFLLEdBQVcsV0FBVyxDQUFDO0lBQzVCLGtDQUFnQixHQUFRO1FBQ3BDLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsVUFBVSxFQUFFLFNBQVM7UUFDckIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsVUFBVSxFQUFFLFNBQVM7UUFDckIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixnQkFBZ0IsRUFBRSx3Q0FBd0M7UUFDMUQsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxZQUFZLEVBQUUsc0NBQXNDO1FBQ3BELE1BQU0sRUFBRSxRQUFRO1FBQ2hCLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsVUFBVSxFQUFFLFNBQVM7UUFDckIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxnQkFBZ0IsRUFBRSxjQUFjO1FBQ2hDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGVBQWUsRUFBRSxjQUFjO1FBQy9CLE1BQU0sRUFBRSxzQkFBc0I7UUFDOUIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsU0FBUztRQUNuQixlQUFlLEVBQUUsY0FBYztRQUMvQixVQUFVLEVBQUUsbURBQW1EO1FBQy9ELGVBQWUsRUFBRSxTQUFTO1FBQzFCLE1BQU0sRUFBRSxvQ0FBb0M7UUFDNUMsU0FBUyxFQUFFLFFBQVE7UUFDbkIsSUFBSSxFQUFFLFFBQVE7UUFDZCxhQUFhLEVBQUUsaUJBQWlCO1FBQ2hDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLFVBQVUsRUFBRSxlQUFlO1FBQzNCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLFVBQVUsRUFBRSxlQUFlO1FBQzNCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsVUFBVSxFQUFFLFNBQVM7UUFDckIsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFLG1EQUFtRDtRQUM5RCxXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLFFBQVE7UUFDckIsVUFBVSxFQUFFLFNBQVM7UUFDckIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixPQUFPLEVBQUUsZUFBZTtRQUN4QixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFlBQVksRUFBRSx1QkFBdUI7UUFDckMsV0FBVyxFQUFFLFFBQVE7UUFDckIsU0FBUyxFQUFFLGlDQUFpQztRQUM1QyxRQUFRLEVBQUUsU0FBUztRQUNuQixlQUFlLEVBQUUsU0FBUztRQUMxQixNQUFNLEVBQUUsU0FBUztRQUNqQixlQUFlLEVBQUUsY0FBYztRQUMvQixVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLGtCQUFrQixFQUFFLGlCQUFpQjtRQUNyQyxTQUFTLEVBQUUsUUFBUTtRQUNuQixXQUFXLEVBQUUsU0FBUztRQUN0QixPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixlQUFlLEVBQUUsU0FBUztRQUMxQixXQUFXLEVBQUUsZUFBZTtRQUM1QixTQUFTLEVBQUUsZUFBZTtRQUMxQixLQUFLLEVBQUUsZUFBZTtRQUN0QixhQUFhLEVBQUUsUUFBUTtRQUN2QixLQUFLLEVBQUUsOENBQThDO1FBQ3JELGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGdCQUFnQixFQUFFLHdCQUF3QjtRQUMxQyxNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsZ0JBQWdCLEVBQUUsdUJBQXVCO1FBQ3pDLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsUUFBUSxFQUFFLFFBQVE7UUFDbEIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsR0FBRyxFQUFFLFFBQVE7UUFDYixPQUFPLEVBQUUsUUFBUTtRQUNqQixHQUFHLEVBQUUsUUFBUTtRQUNiLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtRQUM1QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBQ2MsNEJBQVUsR0FBYTtRQUNuQyxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixNQUFNO1FBQ04sUUFBUTtRQUNSLFFBQVE7UUFDUixVQUFVO1FBQ1YsS0FBSztRQUNMLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtRQUNaLE1BQU07UUFDTixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxRQUFRO1FBQ1IsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZUFBZTtRQUNmLE1BQU07UUFDTixTQUFTO1FBQ1QsVUFBVTtRQUNWLFlBQVk7UUFDWixTQUFTO1FBQ1QsUUFBUTtRQUNSLFFBQVE7UUFDUixlQUFlO1FBQ2YsVUFBVTtRQUNWLGVBQWU7UUFDZixNQUFNO1FBQ04sU0FBUztRQUNULElBQUk7UUFDSixhQUFhO1FBQ2IsUUFBUTtRQUNSLFFBQVE7UUFDUixlQUFlO1FBQ2YsY0FBYztRQUNkLE1BQU07UUFDTixXQUFXO1FBQ1gsUUFBUTtRQUNSLFdBQVc7UUFDWCxVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVU7UUFDVixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLE1BQU07UUFDTixVQUFVO1FBQ1YsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLFFBQVE7UUFDUixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixPQUFPO1FBQ1AsUUFBUTtRQUNSLE9BQU87UUFDUCxZQUFZO1FBQ1osV0FBVztRQUNYLFNBQVM7UUFDVCxRQUFRO1FBQ1IsZUFBZTtRQUNmLE1BQU07UUFDTixlQUFlO1FBQ2YsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLE9BQU87UUFDUCxVQUFVO1FBQ1YsZUFBZTtRQUNmLFdBQVc7UUFDWCxTQUFTO1FBQ1QsS0FBSztRQUNMLGFBQWE7UUFDYixLQUFLO1FBQ0wsY0FBYztRQUNkLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsTUFBTTtRQUNOLElBQUk7UUFDSixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxRQUFRO1FBQ1IsT0FBTztRQUNQLEdBQUc7UUFDSCxPQUFPO1FBQ1AsR0FBRztRQUNILFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyx3QkFBTSxHQUFVO1FBQzlCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsd0JBQXdCLEVBQUM7UUFDbEQsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUMxRSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDeEUsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7UUFDdkMsRUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3RFLEVBQUMsSUFBSSxFQUFDLHVCQUF1QixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUMzRSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMsdUJBQXVCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzNFLEVBQUMsSUFBSSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUMxRSxFQUFDLElBQUksRUFBQyx5QkFBeUIsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO1FBQzlDLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN2RSxFQUFDLElBQUksRUFBQyx3QkFBd0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDNUUsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7UUFDdkMsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUM7UUFDeEMsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3JFLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN2RSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQztRQUNyQyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUMxRCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQztRQUN4QyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztRQUM5QixFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDMUQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQztRQUNuQyxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7UUFDdEQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUM7UUFDdEMsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUM7UUFDM0MsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUM7UUFDM0MsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7UUFDdkMsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ2pDLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ3ZDLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDdEQsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzNELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUMxRCxFQUFDLElBQUksRUFBQyxpQkFBaUIsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDM0QsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsb0NBQW9DLEVBQUM7UUFDOUQsRUFBQyxJQUFJLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztRQUN4QyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDO1FBQzVDLEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLHdCQUF3QixFQUFDO1FBQ3BELEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDO1FBQ3pDLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDdkQsRUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzVELEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ2pDLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDO1FBQ2xDLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQztRQUMvQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzdCLENBQUM7SUFDYyw0QkFBVSxHQUFhO1FBQ3JDLE9BQU87UUFDUCxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsTUFBTTtRQUNOLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsT0FBTztRQUNQLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsT0FBTztRQUNQLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2QsTUFBTTtRQUNOLFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxtQkFBbUI7UUFDbkIsU0FBUztRQUNULGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtRQUNSLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixPQUFPO0tBQ1IsQ0FBQztJQUNGLHdCQUFDO0NBQUEsQUFuVUQsSUFtVUM7U0FuVVksaUJBQWlCOzs7SUFDNUIsd0JBQTBDOztJQUMxQyxtQ0FxR0E7O0lBQ0EsNkJBc0dBOztJQUNBLHlCQXlEQTs7SUFDQSw2QkF5REE7O0FBRUY7SUFPMkMsaURBQUk7SUFDN0MsK0JBQ0UsSUFBZSxFQUF5QyxhQUFvQjtRQUQ5RSxZQUVJLGtCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxDQUFDLFNBQzFEO1FBRnVELG1CQUFhLEdBQWIsYUFBYSxDQUFPOztJQUU1RSxDQUFDOzs7O0lBQ0ksd0NBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Ozs7SUFDTSxrREFBa0I7OztJQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLDBCQUEwQjtJQUM1QixDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixNQUFNLEVBQUUsaUJBQWlCLENBQUMsVUFBVTtvQkFDcEMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLFVBQVU7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsQ0FBQyxFQUFDLENBQUM7b0JBQ2xGLFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOzs7O2dCQTlVQyxVQUFVO2dCQUdILElBQUksdUJBOFVTLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFZbEQsNEJBQUM7Q0FBQSxBQXJCRCxDQU8yQyxJQUFJLEdBYzlDO1NBZFkscUJBQXFCOzs7SUFFYiw4Q0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIHBhbmVsdG9vbE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ3BhbmVsdG9vbCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXhpc0xvY2tcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm90dG9tXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiY2VudGVyZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbnN0cmFpbkFsaWduXCI6IFwiU3RyaW5nL0V4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIkV4dC5kb20uRWxlbWVudC9IVE1MRWxlbWVudC9TdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNwbGF5ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkb2NrZWRcIjogXCJTdHJpbmdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kcmFnLlNvdXJjZVwiLFxuICAgIFwiZW50ZXJBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImV4aXRBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXIvU3RyaW5nL09iamVjdFwiLFxuICAgIFwiZmxvYXRlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmdWxsc2NyZWVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGFuZGxlclwiOiBcIkZ1bmN0aW9uL1N0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZUFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJoaWRlT25NYXNrVGFwXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9FeHQuZG9tLkVsZW1lbnQvSFRNTEVsZW1lbnRcIixcbiAgICBcImljb25DbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxlZnRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBhc3NpdmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVjb3JkXCI6IFwiRXh0LmRhdGEuTW9kZWxcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVsYXRpdmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNjb3BlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsRGVmYXVsdHNcIjogXCJPYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0b3BFdmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b29sT3duZXJcIjogXCJFeHQuQ29tcG9uZW50XCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ0eXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ4dHlwZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwieVwiOiBcIk51bWJlclwiLFxuICAgIFwiekluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xzJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5ZWQnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdlbnRlckFuaW1hdGlvbicsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleGl0QW5pbWF0aW9uJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdoYW5kbGVyJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZUFuaW1hdGlvbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2h0bWwnLFxuICAgICdpY29uQ2xzJyxcbiAgICAnaWQnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21vZGFsJyxcbiAgICAnbW9kZWxWYWxpZGF0aW9uJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3Bhc3NpdmUnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpZ2h0JyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2NvcGUnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2VsZkFsaWduJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hvd0FuaW1hdGlvbicsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVmdWxEZWZhdWx0cycsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdG9wRXZlbnQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3Rvb2xPd25lcicsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b3AnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndHlwZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidiZWZvcmVyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOid0b29sJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOid0b29sLGV2ZW50J30sXG5cdFx0e25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonY2xpY2snLHBhcmFtZXRlcnM6J3Rvb2wsZSxvd25lcid9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J3Rvb2wsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczondG9vbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid0b29sLGV2ZW50J30sXG5cdFx0e25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcblx0XHR7bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxuXHRcdHtuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG5cdFx0e25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOid0b29sJ30sXG5cdFx0e25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhZGRlZCcsXG5cdFx0J2JlZm9yZWJvdHRvbWNoYW5nZScsXG5cdFx0J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlbGVmdGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J2JlZm9yZXJpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3JldG9wY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnYm90dG9tY2hhbmdlJyxcblx0XHQnY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdjbGljaycsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2RvY2tlZGNoYW5nZScsXG5cdFx0J2VyYXNlZCcsXG5cdFx0J2Zsb2F0aW5nY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2Z1bGxzY3JlZW4nLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCdoaWRlJyxcblx0XHQnaW5pdGlhbGl6ZScsXG5cdFx0J2xlZnRjaGFuZ2UnLFxuXHRcdCdtYXhIZWlnaHRjaGFuZ2UnLFxuXHRcdCdtYXhXaWR0aGNoYW5nZScsXG5cdFx0J21pbkhlaWdodGNoYW5nZScsXG5cdFx0J21pbldpZHRoY2hhbmdlJyxcblx0XHQnbW92ZWQnLFxuXHRcdCdvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J3BhaW50ZWQnLFxuXHRcdCdwb3NpdGlvbmVkY2hhbmdlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3JpZ2h0Y2hhbmdlJyxcblx0XHQnc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J3Nob3cnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQndG9wY2hhbmdlJyxcblx0XHQndXBkYXRlZGF0YScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFuZWx0b29sJywgXG4gIGlucHV0czogcGFuZWx0b29sTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogcGFuZWx0b29sTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFBhbmVsdG9vbENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFBhbmVsdG9vbENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQscGFuZWx0b29sTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQocGFuZWx0b29sTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=