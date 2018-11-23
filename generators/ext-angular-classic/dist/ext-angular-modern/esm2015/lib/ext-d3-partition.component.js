/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class d3_partitionMetaData {
}
d3_partitionMetaData.XTYPE = 'd3-partition';
d3_partitionMetaData.PROPERTIESOBJECT = {
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
d3_partitionMetaData.PROPERTIES = [
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
d3_partitionMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'd3-partition,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'd3-partition,event' },
    { name: 'focusenter', parameters: 'd3-partition,event' },
    { name: 'focusleave', parameters: 'd3-partition,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'layout', parameters: 'component' },
    { name: 'sceneresize', parameters: 'component,scene,size' },
    { name: 'scenesetup', parameters: 'component,scene' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
d3_partitionMetaData.EVENTNAMES = [
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
    d3_partitionMetaData.XTYPE;
    /** @type {?} */
    d3_partitionMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    d3_partitionMetaData.PROPERTIES;
    /** @type {?} */
    d3_partitionMetaData.EVENTS;
    /** @type {?} */
    d3_partitionMetaData.EVENTNAMES;
}
export class ExtD3_partitionComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, d3_partitionMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(d3_partitionMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtD3_partitionComponent.decorators = [
    { type: Component, args: [{
                selector: 'd3-partition',
                inputs: d3_partitionMetaData.PROPERTIES,
                outputs: d3_partitionMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtD3_partitionComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtD3_partitionComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWQzLXBhcnRpdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtZDMtcGFydGl0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLG9CQUFvQjs7QUFDakIsMEJBQUssR0FBVyxjQUFjLENBQUM7QUFDL0IscUNBQWdCLEdBQVE7SUFDcEMsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixXQUFXLEVBQUUsbUJBQW1CO0lBQ2hDLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsc0JBQXNCLEVBQUUsU0FBUztJQUNqQyxVQUFVLEVBQUUsU0FBUztJQUNyQixlQUFlLEVBQUUsUUFBUTtJQUN6QixpQkFBaUIsRUFBRSxpQkFBaUI7SUFDcEMsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLGVBQWU7SUFDekIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsVUFBVSxFQUFFLG1EQUFtRDtJQUMvRCxjQUFjLEVBQUUsUUFBUTtJQUN4QixhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFFB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QWtFQTs7SUFDQSw0QkFpQkE7O0lBQ0EsZ0NBaUJBOztBQVNGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxJQUFJOzs7O0lBQ2hELFlBQVksSUFBZSxJQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUMsb0JBQW9CLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7SUFDeEQsUUFBUSxLQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBRWxELGtCQUFrQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7OztZQWRKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7Z0JBQ3ZDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxVQUFVO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFDLENBQUM7Z0JBQ3JGLFFBQVEsRUFBRSxzQ0FBc0M7YUFDakQ7Ozs7WUF2TEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGQzX3BhcnRpdGlvbk1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2QzLXBhcnRpdGlvbic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsaXBTY2VuZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sb3JBeGlzXCI6IFwiRXh0LmQzLmF4aXMuQ29sb3JcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImV4cGFuZEV2ZW50TmFtZVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGllcmFyY2h5Q2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaW50ZXJhY3Rpb25zXCI6IFwiYW55XCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxheW91dFwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJsaW5rS2V5XCI6IFwiRnVuY3Rpb25cIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJub2RlQ2hpbGRyZW5cIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZUNsYXNzXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcIm5vZGVLZXlcIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZVRleHRcIjogXCJGdW5jdGlvbi9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIm5vZGVUcmFuc2Zvcm1cIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZVZhbHVlXCI6IFwiRnVuY3Rpb24vU3RyaW5nL051bWJlclwiLFxuICAgIFwibm9QYXJlbnRWYWx1ZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5vU2l6ZUxheW91dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBhZGRpbmdcIjogXCJPYmplY3QvU3RyaW5nL051bWJlclwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVuZGVyTGlua3NcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5FbGVtZW50XCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInJvb3RWaXNpYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2VsZWN0RXZlbnROYW1lXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJzZWxlY3Rpb25cIjogXCJFeHQuZGF0YS5UcmVlTW9kZWxcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2l6ZVwiOiBcIk9iamVjdFwiLFxuICAgIFwic29ydGVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcInN0b3JlXCI6IFwiRXh0LmRhdGEuU3RvcmVcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9vbHRpcFwiOiBcIkV4dC50aXAuVG9vbFRpcFwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRyYW5zaXRpb25zXCI6IFwiYW55XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjbGlwU2NlbmUnLFxuICAgICdjbHMnLFxuICAgICdjb2xvckF4aXMnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleHBhbmRFdmVudE5hbWUnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGllcmFyY2h5Q2xzJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGlua0tleScsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25vZGVDaGlsZHJlbicsXG4gICAgJ25vZGVDbGFzcycsXG4gICAgJ25vZGVLZXknLFxuICAgICdub2RlVGV4dCcsXG4gICAgJ25vZGVUcmFuc2Zvcm0nLFxuICAgICdub2RlVmFsdWUnLFxuICAgICdub1BhcmVudFZhbHVlJyxcbiAgICAnbm9TaXplTGF5b3V0JyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZW5kZXJMaW5rcycsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlwcGxlJyxcbiAgICAncm9vdFZpc2libGUnLFxuICAgICdzZWxlY3RFdmVudE5hbWUnLFxuICAgICdzZWxlY3Rpb24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NpemUnLFxuICAgICdzb3J0ZXInLFxuICAgICdzdG9yZScsXG4gICAgJ3N0eWxlJyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHJhbnNpdGlvbnMnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidkMy1wYXJ0aXRpb24sZXZlbnQnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonZDMtcGFydGl0aW9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2QzLXBhcnRpdGlvbixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidkMy1wYXJ0aXRpb24sZXZlbnQnfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbGF5b3V0JyxwYXJhbWV0ZXJzOidjb21wb25lbnQnfSxcblx0XHR7bmFtZTonc2NlbmVyZXNpemUnLHBhcmFtZXRlcnM6J2NvbXBvbmVudCxzY2VuZSxzaXplJ30sXG5cdFx0e25hbWU6J3NjZW5lc2V0dXAnLHBhcmFtZXRlcnM6J2NvbXBvbmVudCxzY2VuZSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCdsYXlvdXQnLFxuXHRcdCdzY2VuZXJlc2l6ZScsXG5cdFx0J3NjZW5lc2V0dXAnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2QzLXBhcnRpdGlvbicsIFxuICBpbnB1dHM6IGQzX3BhcnRpdGlvbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGQzX3BhcnRpdGlvbk1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREM19wYXJ0aXRpb25Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHREM19wYXJ0aXRpb25Db21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixkM19wYXJ0aXRpb25NZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoZDNfcGFydGl0aW9uTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=