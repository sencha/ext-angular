/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class d3_treeMetaData {
}
d3_treeMetaData.XTYPE = 'd3-tree';
d3_treeMetaData.PROPERTIESOBJECT = {
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
    "depth": "Number",
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
    "nodeRadius": "Number",
    "nodeSize": "Number[]",
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
    "tooltip": "Ext.tip.ToolTip",
    "touchAction": "Object",
    "transitions": "any",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "width": "Number/String",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
d3_treeMetaData.PROPERTIES = [
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
    'depth',
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
    'nodeRadius',
    'nodeSize',
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
    'tooltip',
    'touchAction',
    'transitions',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'platformConfig',
    'fitToParent',
    'config'
];
d3_treeMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'd3-tree,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'd3-tree,event' },
    { name: 'focusenter', parameters: 'd3-tree,event' },
    { name: 'focusleave', parameters: 'd3-tree,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'layout', parameters: 'component' },
    { name: 'sceneresize', parameters: 'component,scene,size' },
    { name: 'scenesetup', parameters: 'component,scene' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
d3_treeMetaData.EVENTNAMES = [
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
if (false) {
    /** @type {?} */
    d3_treeMetaData.XTYPE;
    /** @type {?} */
    d3_treeMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    d3_treeMetaData.PROPERTIES;
    /** @type {?} */
    d3_treeMetaData.EVENTS;
    /** @type {?} */
    d3_treeMetaData.EVENTNAMES;
}
export class ExtD3_treeComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, d3_treeMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(d3_treeMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtD3_treeComponent.decorators = [
    { type: Component, args: [{
                selector: 'd3-tree',
                inputs: d3_treeMetaData.PROPERTIES,
                outputs: d3_treeMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtD3_treeComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtD3_treeComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWQzLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsibGliL2V4dC1kMy10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLGVBQWU7O0FBQ1oscUJBQUssR0FBVyxTQUFTLENBQUM7QUFDMUIsZ0NBQWdCLEdBQVE7SUFDcEMsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixXQUFXLEVBQUUsbUJBQW1CO0lBQ2hDLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsc0JBQXNCLEVBQUUsU0FBUztJQUNqQyxPQUFPLEVBQUUsUUFBUTtJQUNqQixVQUFVLEVBQUUsU0FBUztJQUNyQixlQUFlLEVBQUUsUUFBUTtJQUN6QixpQkFBaUIsRUFBRSxpQkFBaUI7SUFDcEMsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLGVBQWU7SUFDekIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsVUFBVSxFQUFFLG1EQUFtRDtJQUMvRCxjQUFjLEVBQUUsUUFBUTtJQUN4QixhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGNBQWMsRUFBRSxRQUFR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LFlBQVk7SUFDWixhQUFhO0lBQ2IsT0FBTztDQUNSLENBQUM7OztJQWhMQSxzQkFBd0M7O0lBQ3hDLGlDQXFFQTs7SUFDQSwyQkFxRUE7O0lBQ0EsdUJBaUJBOztJQUNBLDJCQWlCQTs7QUFTRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsSUFBSTs7OztJQUMzQyxZQUFZLElBQWUsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFDLGVBQWUsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7OztJQUNuRCxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBRTdDLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7OztZQWRKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVO2dCQUNsQyxPQUFPLEVBQUUsZUFBZSxDQUFDLFVBQVU7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUMsQ0FBQztnQkFDaEYsUUFBUSxFQUFFLHNDQUFzQzthQUNqRDs7OztZQTdMQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgZDNfdHJlZU1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2QzLXRyZWUnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbGlwU2NlbmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbG9yQXhpc1wiOiBcIkV4dC5kMy5heGlzLkNvbG9yXCIsXG4gICAgXCJjb21wb25lbnRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVwdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZXhwYW5kRXZlbnROYW1lXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJoaWVyYXJjaHlDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImluc3RhbmNlQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJpbnRlcmFjdGlvbnNcIjogXCJhbnlcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGF5b3V0XCI6IFwiRnVuY3Rpb25cIixcbiAgICBcImxpbmtLZXlcIjogXCJGdW5jdGlvblwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5vZGVDaGlsZHJlblwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJub2RlQ2xhc3NcIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZUtleVwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJub2RlUmFkaXVzXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJub2RlU2l6ZVwiOiBcIk51bWJlcltdXCIsXG4gICAgXCJub2RlVGV4dFwiOiBcIkZ1bmN0aW9uL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwibm9kZVRyYW5zZm9ybVwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJub2RlVmFsdWVcIjogXCJGdW5jdGlvbi9TdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJub1BhcmVudFZhbHVlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibm9TaXplTGF5b3V0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGFkZGluZ1wiOiBcIk9iamVjdC9TdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZW5kZXJMaW5rc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlclRvXCI6IFwiRXh0LkVsZW1lbnRcIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwicm9vdFZpc2libGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzZWxlY3RFdmVudE5hbWVcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInNlbGVjdGlvblwiOiBcIkV4dC5kYXRhLlRyZWVNb2RlbFwiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaXplXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJzb3J0ZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwic3RvcmVcIjogXCJFeHQuZGF0YS5TdG9yZVwiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiRXh0LnRpcC5Ub29sVGlwXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHJhbnNpdGlvbnNcIjogXCJhbnlcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NsaXBTY2VuZScsXG4gICAgJ2NscycsXG4gICAgJ2NvbG9yQXhpcycsXG4gICAgJ2NvbXBvbmVudENscycsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlcHRoJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZXhwYW5kRXZlbnROYW1lJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZXJhcmNoeUNscycsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaW50ZXJhY3Rpb25zJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xpbmtLZXknLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdub2RlQ2hpbGRyZW4nLFxuICAgICdub2RlQ2xhc3MnLFxuICAgICdub2RlS2V5JyxcbiAgICAnbm9kZVJhZGl1cycsXG4gICAgJ25vZGVTaXplJyxcbiAgICAnbm9kZVRleHQnLFxuICAgICdub2RlVHJhbnNmb3JtJyxcbiAgICAnbm9kZVZhbHVlJyxcbiAgICAnbm9QYXJlbnRWYWx1ZScsXG4gICAgJ25vU2l6ZUxheW91dCcsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVuZGVyTGlua3MnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Jvb3RWaXNpYmxlJyxcbiAgICAnc2VsZWN0RXZlbnROYW1lJyxcbiAgICAnc2VsZWN0aW9uJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaXplJyxcbiAgICAnc29ydGVyJyxcbiAgICAnc3RvcmUnLFxuICAgICdzdHlsZScsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RyYW5zaXRpb25zJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3aWR0aCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonZDMtdHJlZSxldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidkMy10cmVlLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2QzLXRyZWUsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonZDMtdHJlZSxldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidsYXlvdXQnLHBhcmFtZXRlcnM6J2NvbXBvbmVudCd9LFxuXHRcdHtuYW1lOidzY2VuZXJlc2l6ZScscGFyYW1ldGVyczonY29tcG9uZW50LHNjZW5lLHNpemUnfSxcblx0XHR7bmFtZTonc2NlbmVzZXR1cCcscGFyYW1ldGVyczonY29tcG9uZW50LHNjZW5lJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2xheW91dCcsXG5cdFx0J3NjZW5lcmVzaXplJyxcblx0XHQnc2NlbmVzZXR1cCcsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZDMtdHJlZScsIFxuICBpbnB1dHM6IGQzX3RyZWVNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBkM190cmVlTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEQzX3RyZWVDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHREM190cmVlQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsZDNfdHJlZU1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChkM190cmVlTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=