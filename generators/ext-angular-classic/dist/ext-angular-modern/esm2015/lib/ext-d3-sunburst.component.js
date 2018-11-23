/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class d3_sunburstMetaData {
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
export class ExtD3_sunburstComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, d3_sunburstMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(d3_sunburstMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtD3_sunburstComponent.decorators = [
    { type: Component, args: [{
                selector: 'd3-sunburst',
                inputs: d3_sunburstMetaData.PROPERTIES,
                outputs: d3_sunburstMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtD3_sunburstComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtD3_sunburstComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWQzLXN1bmJ1cnN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC1kMy1zdW5idXJzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxtQkFBbUI7O0FBQ2hCLHlCQUFLLEdBQVcsYUFBYSxDQUFDO0FBQzlCLG9DQUFnQixHQUFRO0lBQ3BDLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtJQUMzQixXQUFXLEVBQUUsUUFBUTtJQUNyQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsV0FBVyxFQUFFLG1CQUFtQjtJQUNoQyxjQUFjLEVBQUUsUUFBUTtJQUN4QixZQUFZLEVBQUUsc0NBQXNDO0lBQ3BELHNCQUFzQixFQUFFLFNBQVM7SUFDakMsVUFBVSxFQUFFLFNBQVM7SUFDckIsZUFBZSxFQUFFLFFBQVE7SUFDekIsaUJBQWlCLEVBQUUsaUJBQWlCO0lBQ3BDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFVBQVUsRUFBRSxtREFBbUQ7SUFDL0QsY0FBYyxFQUFFLFFBQVE7SUFDeEIsYUFBYSxFQUFFLGlCQUFpQjtJQUNoQyxjQUFjLEVBQUUsS0FBSztJQUNyQixRQUFRLEVBQUUsUUFBUTtJQUNsQixlQUFlLEVBQUUsU0FBUztJQUMxQixjQUFjLEVBQUUsUUFBUTtJQUN4QixRQUFR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Q1osYUFBYTtJQUNiLE9BQU87Q0FDUixDQUFDOzs7SUE5S0EsMEJBQTRDOztJQUM1QyxxQ0FvRUE7O0lBQ0EsK0JBb0VBOztJQUNBLDJCQWlCQTs7SUFDQSwrQkFpQkE7O0FBU0YsTUFBTSxPQUFPLHVCQUF3QixTQUFRLElBQUk7Ozs7SUFDL0MsWUFBWSxJQUFlLElBQUcsS0FBSyxDQUFDLElBQUksRUFBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7OztJQUN2RCxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7Ozs7SUFFakQsa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBZEosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixNQUFNLEVBQUUsbUJBQW1CLENBQUMsVUFBVTtnQkFDdEMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFVBQVU7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEVBQUMsQ0FBQztnQkFDcEYsUUFBUSxFQUFFLHNDQUFzQzthQUNqRDs7OztZQTNMQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgZDNfc3VuYnVyc3RNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdkMy1zdW5idXJzdCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsaXBTY2VuZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sb3JBeGlzXCI6IFwiRXh0LmQzLmF4aXMuQ29sb3JcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImV4cGFuZEV2ZW50TmFtZVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGllcmFyY2h5Q2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaW50ZXJhY3Rpb25zXCI6IFwiYW55XCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxheW91dFwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJsaW5rS2V5XCI6IFwiRnVuY3Rpb25cIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJub2RlQ2hpbGRyZW5cIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZUNsYXNzXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcIm5vZGVLZXlcIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZVRleHRcIjogXCJGdW5jdGlvbi9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIm5vZGVUcmFuc2Zvcm1cIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZVZhbHVlXCI6IFwiRnVuY3Rpb24vU3RyaW5nL051bWJlclwiLFxuICAgIFwibm9QYXJlbnRWYWx1ZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5vU2l6ZUxheW91dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBhZGRpbmdcIjogXCJPYmplY3QvU3RyaW5nL051bWJlclwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVuZGVyTGlua3NcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5FbGVtZW50XCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInJvb3RWaXNpYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2VsZWN0RXZlbnROYW1lXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJzZWxlY3Rpb25cIjogXCJFeHQuZGF0YS5UcmVlTW9kZWxcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2l6ZVwiOiBcIk9iamVjdFwiLFxuICAgIFwic29ydGVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInN0b3JlXCI6IFwiRXh0LmRhdGEuU3RvcmVcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGV4dFBhZGRpbmdcIjogXCJBcnJheVwiLFxuICAgIFwidG9vbHRpcFwiOiBcIkV4dC50aXAuVG9vbFRpcFwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRyYW5zaXRpb25zXCI6IFwiYW55XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInpvb21QYXJlbnREb3RSYWRpdXNcIjogXCJOdW1iZXJcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjbGlwU2NlbmUnLFxuICAgICdjbHMnLFxuICAgICdjb2xvckF4aXMnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleHBhbmRFdmVudE5hbWUnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGllcmFyY2h5Q2xzJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGlua0tleScsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25vZGVDaGlsZHJlbicsXG4gICAgJ25vZGVDbGFzcycsXG4gICAgJ25vZGVLZXknLFxuICAgICdub2RlVGV4dCcsXG4gICAgJ25vZGVUcmFuc2Zvcm0nLFxuICAgICdub2RlVmFsdWUnLFxuICAgICdub1BhcmVudFZhbHVlJyxcbiAgICAnbm9TaXplTGF5b3V0JyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZW5kZXJMaW5rcycsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlwcGxlJyxcbiAgICAncm9vdFZpc2libGUnLFxuICAgICdzZWxlY3RFdmVudE5hbWUnLFxuICAgICdzZWxlY3Rpb24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NpemUnLFxuICAgICdzb3J0ZXInLFxuICAgICdzdG9yZScsXG4gICAgJ3N0eWxlJyxcbiAgICAndGV4dFBhZGRpbmcnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cmFuc2l0aW9ucycsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2lkdGgnLFxuICAgICd6b29tUGFyZW50RG90UmFkaXVzJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidkMy1zdW5idXJzdCxldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidkMy1zdW5idXJzdCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidkMy1zdW5idXJzdCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidkMy1zdW5idXJzdCxldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidsYXlvdXQnLHBhcmFtZXRlcnM6J2NvbXBvbmVudCd9LFxuXHRcdHtuYW1lOidzY2VuZXJlc2l6ZScscGFyYW1ldGVyczonY29tcG9uZW50LHNjZW5lLHNpemUnfSxcblx0XHR7bmFtZTonc2NlbmVzZXR1cCcscGFyYW1ldGVyczonY29tcG9uZW50LHNjZW5lJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2xheW91dCcsXG5cdFx0J3NjZW5lcmVzaXplJyxcblx0XHQnc2NlbmVzZXR1cCcsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZDMtc3VuYnVyc3QnLCBcbiAgaW5wdXRzOiBkM19zdW5idXJzdE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGQzX3N1bmJ1cnN0TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEQzX3N1bmJ1cnN0Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RDNfc3VuYnVyc3RDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixkM19zdW5idXJzdE1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChkM19zdW5idXJzdE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19