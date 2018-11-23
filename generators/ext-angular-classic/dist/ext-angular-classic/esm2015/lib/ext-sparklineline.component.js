/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class sparklinelineMetaData {
}
sparklinelineMetaData.XTYPE = 'sparklineline';
sparklinelineMetaData.PROPERTIESOBJECT = {
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "bind": "Object/String",
    "border": "Boolean",
    "chartRangeMax": "Number",
    "chartRangeMaxX": "Number",
    "chartRangeMin": "Number",
    "chartRangeMinX": "Number",
    "cls": "String/String[]",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "disableTooltips": "Boolean",
    "drawNormalOnTop": "Boolean",
    "eventHandlers": "Object",
    "fillColor": "String",
    "focusCls": "String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "highlightColor": "String",
    "highlightLighten": "Number",
    "highlightLineColor": "String",
    "highlightSpotColor": "String",
    "instanceCls": "String/String[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "lineColor": "String",
    "lineWidth": "Number",
    "listeners": "Object",
    "maxSpotColor": "String",
    "minSpotColor": "String",
    "name": "String",
    "nameable": "Boolean",
    "normalRangeColor": "String",
    "normalRangeMax": "Number",
    "normalRangeMin": "Number",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "renderTo": "Ext.Element",
    "ripple": "Boolean/Object/String",
    "session": "Boolean/Object/Ext.data.Session",
    "shareableName": "Boolean",
    "spotColor": "String",
    "spotRadius": "Number",
    "style": "String/Object",
    "tipTpl": "String/Ext.XTemplate",
    "tooltipPrefix": "String",
    "tooltipSkipNull": "Boolean",
    "tooltipSuffix": "String",
    "touchAction": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "values": "Number[]",
    "valueSpots": "Object",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "width": "Number/String",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
sparklinelineMetaData.PROPERTIES = [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'chartRangeMax',
    'chartRangeMaxX',
    'chartRangeMin',
    'chartRangeMinX',
    'cls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'disableTooltips',
    'drawNormalOnTop',
    'eventHandlers',
    'fillColor',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highlightColor',
    'highlightLighten',
    'highlightLineColor',
    'highlightSpotColor',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lineColor',
    'lineWidth',
    'listeners',
    'maxSpotColor',
    'minSpotColor',
    'name',
    'nameable',
    'normalRangeColor',
    'normalRangeMax',
    'normalRangeMin',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'spotColor',
    'spotRadius',
    'style',
    'tipTpl',
    'tooltipPrefix',
    'tooltipSkipNull',
    'tooltipSuffix',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'values',
    'valueSpots',
    'viewModel',
    'width',
    'platformConfig',
    'fitToParent',
    'config'
];
sparklinelineMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'sparklineline,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'sparklineline,event' },
    { name: 'focusenter', parameters: 'sparklineline,event' },
    { name: 'focusleave', parameters: 'sparklineline,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
sparklinelineMetaData.EVENTNAMES = [
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
    'widthchange',
    'ready'
];
if (false) {
    /** @type {?} */
    sparklinelineMetaData.XTYPE;
    /** @type {?} */
    sparklinelineMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    sparklinelineMetaData.PROPERTIES;
    /** @type {?} */
    sparklinelineMetaData.EVENTS;
    /** @type {?} */
    sparklinelineMetaData.EVENTNAMES;
}
export class ExtSparklinelineComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, sparklinelineMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(sparklinelineMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtSparklinelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'sparklineline',
                inputs: sparklinelineMetaData.PROPERTIES,
                outputs: sparklinelineMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtSparklinelineComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtSparklinelineComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwYXJrbGluZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsibGliL2V4dC1zcGFya2xpbmVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUtMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLHFCQUFxQjs7QUFDbEIsMkJBQUssR0FBVyxlQUFlLENBQUM7QUFDaEMsc0NBQWdCLEdBQVE7SUFDcEMsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsZUFBZSxFQUFFLFFBQVE7SUFDekIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixlQUFlLEVBQUUsUUFBUTtJQUN6QixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsWUFBWSxFQUFFLHNDQUFzQztJQUNwRCxzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsaUJBQWlCLEVBQUUsU0FBUztJQUM1QixlQUFlLEVBQUUsUUFBUTtJQUN6QixXQUFXLEVBQUUsUUFBUTtJQUNyQixVQUFVLEVBQUUsUUFBUTtJQUNwQixRQUFRLEVBQUUsZUFBZTtJQUN6QixRQUFRLEVBQUUsU0FBUztJQUNuQixVQUFVLEVBQUUsbURBQW1EO0lBQy9ELGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixvQkFBb0IsRUFBRSxRQUFR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SSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7OztJQUVuRCxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOzs7WUFkSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO2dCQUN4QyxPQUFPLEVBQUUscUJBQXFCLENBQUMsVUFBVTtnQkFDekMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBQyxDQUFDO2dCQUN0RixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBakxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBzcGFya2xpbmVsaW5lTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnc3BhcmtsaW5lbGluZSc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNoYXJ0UmFuZ2VNYXhcIjogXCJOdW1iZXJcIixcbiAgICBcImNoYXJ0UmFuZ2VNYXhYXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJjaGFydFJhbmdlTWluXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJjaGFydFJhbmdlTWluWFwiOiBcIk51bWJlclwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZVRvb2x0aXBzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZHJhd05vcm1hbE9uVG9wXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZmlsbENvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJoaWdobGlnaHRDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaGlnaGxpZ2h0TGlnaHRlblwiOiBcIk51bWJlclwiLFxuICAgIFwiaGlnaGxpZ2h0TGluZUNvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJoaWdobGlnaHRTcG90Q29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcImluc3RhbmNlQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxpbmVDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGluZVdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm1heFNwb3RDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWluU3BvdENvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5vcm1hbFJhbmdlQ29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcIm5vcm1hbFJhbmdlTWF4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJub3JtYWxSYW5nZU1pblwiOiBcIk51bWJlclwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuRWxlbWVudFwiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNwb3RDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwic3BvdFJhZGl1c1wiOiBcIk51bWJlclwiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0aXBUcGxcIjogXCJTdHJpbmcvRXh0LlhUZW1wbGF0ZVwiLFxuICAgIFwidG9vbHRpcFByZWZpeFwiOiBcIlN0cmluZ1wiLFxuICAgIFwidG9vbHRpcFNraXBOdWxsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG9vbHRpcFN1ZmZpeFwiOiBcIlN0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZhbHVlc1wiOiBcIk51bWJlcltdXCIsXG4gICAgXCJ2YWx1ZVNwb3RzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjaGFydFJhbmdlTWF4JyxcbiAgICAnY2hhcnRSYW5nZU1heFgnLFxuICAgICdjaGFydFJhbmdlTWluJyxcbiAgICAnY2hhcnRSYW5nZU1pblgnLFxuICAgICdjbHMnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc2FibGVUb29sdGlwcycsXG4gICAgJ2RyYXdOb3JtYWxPblRvcCcsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdmaWxsQ29sb3InLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlnaGxpZ2h0Q29sb3InLFxuICAgICdoaWdobGlnaHRMaWdodGVuJyxcbiAgICAnaGlnaGxpZ2h0TGluZUNvbG9yJyxcbiAgICAnaGlnaGxpZ2h0U3BvdENvbG9yJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGluZUNvbG9yJyxcbiAgICAnbGluZVdpZHRoJyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWF4U3BvdENvbG9yJyxcbiAgICAnbWluU3BvdENvbG9yJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnbm9ybWFsUmFuZ2VDb2xvcicsXG4gICAgJ25vcm1hbFJhbmdlTWF4JyxcbiAgICAnbm9ybWFsUmFuZ2VNaW4nLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaXBwbGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3Nwb3RDb2xvcicsXG4gICAgJ3Nwb3RSYWRpdXMnLFxuICAgICdzdHlsZScsXG4gICAgJ3RpcFRwbCcsXG4gICAgJ3Rvb2x0aXBQcmVmaXgnLFxuICAgICd0b29sdGlwU2tpcE51bGwnLFxuICAgICd0b29sdGlwU3VmZml4JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZhbHVlcycsXG4gICAgJ3ZhbHVlU3BvdHMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3aWR0aCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonc3BhcmtsaW5lbGluZSxldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidzcGFya2xpbmVsaW5lLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3NwYXJrbGluZWxpbmUsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonc3BhcmtsaW5lbGluZSxldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwYXJrbGluZWxpbmUnLCBcbiAgaW5wdXRzOiBzcGFya2xpbmVsaW5lTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogc3BhcmtsaW5lbGluZU1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRTcGFya2xpbmVsaW5lQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0U3BhcmtsaW5lbGluZUNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLHNwYXJrbGluZWxpbmVNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoc3BhcmtsaW5lbGluZU1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19