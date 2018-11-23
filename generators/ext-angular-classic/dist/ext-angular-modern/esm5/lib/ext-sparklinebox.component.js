/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var sparklineboxMetaData = /** @class */ (function () {
    function sparklineboxMetaData() {
    }
    sparklineboxMetaData.XTYPE = 'sparklinebox';
    sparklineboxMetaData.PROPERTIESOBJECT = {
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "bind": "Object/String",
        "border": "Boolean",
        "boxFillColor": "String",
        "boxLineColor": "String",
        "chartRangeMax": "Number",
        "chartRangeMin": "Number",
        "cls": "String/String[]",
        "controller": "String/Object/Ext.app.ViewController",
        "defaultListenerScope": "Boolean",
        "disabled": "Boolean",
        "disableTooltips": "Boolean",
        "eventHandlers": "Object",
        "focusCls": "String",
        "height": "Number/String",
        "hidden": "Boolean",
        "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
        "highlightColor": "String",
        "highlightLighten": "Number",
        "instanceCls": "String/String[]",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "lineColor": "String",
        "listeners": "Object",
        "medianColor": "String",
        "name": "String",
        "nameable": "Boolean",
        "outlierFillColor": "String",
        "outlierIQR": "Number",
        "outlierLineColor": "String",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "raw": "Boolean",
        "reference": "String",
        "renderTo": "Ext.Element",
        "ripple": "Boolean/Object/String",
        "session": "Boolean/Object/Ext.data.Session",
        "shareableName": "Boolean",
        "showOutliers": "Boolean",
        "spotRadius": "Number",
        "style": "String/Object",
        "target": "Number",
        "targetColor": "String",
        "tipTpl": "String/Ext.XTemplate",
        "tooltipPrefix": "String",
        "tooltipSkipNull": "Boolean",
        "tooltipSuffix": "String",
        "touchAction": "Object",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String/String[]",
        "userCls": "String/String[]",
        "values": "Number[]",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "whiskerColor": "String",
        "width": "Number/String",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    sparklineboxMetaData.PROPERTIES = [
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'bind',
        'border',
        'boxFillColor',
        'boxLineColor',
        'chartRangeMax',
        'chartRangeMin',
        'cls',
        'controller',
        'defaultListenerScope',
        'disabled',
        'disableTooltips',
        'eventHandlers',
        'focusCls',
        'height',
        'hidden',
        'hideMode',
        'highlightColor',
        'highlightLighten',
        'instanceCls',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'lineColor',
        'listeners',
        'medianColor',
        'name',
        'nameable',
        'outlierFillColor',
        'outlierIQR',
        'outlierLineColor',
        'plugins',
        'publishes',
        'raw',
        'reference',
        'renderTo',
        'ripple',
        'session',
        'shareableName',
        'showOutliers',
        'spotRadius',
        'style',
        'target',
        'targetColor',
        'tipTpl',
        'tooltipPrefix',
        'tooltipSkipNull',
        'tooltipSuffix',
        'touchAction',
        'twoWayBindable',
        'ui',
        'userCls',
        'values',
        'viewModel',
        'whiskerColor',
        'width',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    sparklineboxMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'sparklinebox,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'sparklinebox,event' },
        { name: 'focusenter', parameters: 'sparklinebox,event' },
        { name: 'focusleave', parameters: 'sparklinebox,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    sparklineboxMetaData.EVENTNAMES = [
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
    return sparklineboxMetaData;
}());
export { sparklineboxMetaData };
if (false) {
    /** @type {?} */
    sparklineboxMetaData.XTYPE;
    /** @type {?} */
    sparklineboxMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    sparklineboxMetaData.PROPERTIES;
    /** @type {?} */
    sparklineboxMetaData.EVENTS;
    /** @type {?} */
    sparklineboxMetaData.EVENTNAMES;
}
var ExtSparklineboxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklineboxComponent, _super);
    function ExtSparklineboxComponent(eRef) {
        return _super.call(this, eRef, sparklineboxMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtSparklineboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(sparklineboxMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtSparklineboxComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtSparklineboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sparklinebox',
                    inputs: sparklineboxMetaData.PROPERTIES,
                    outputs: sparklineboxMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtSparklineboxComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtSparklineboxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtSparklineboxComponent;
}(base));
export { ExtSparklineboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwYXJrbGluZWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtc3BhcmtsaW5lYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUFnS0EsQ0FBQztJQS9KZSwwQkFBSyxHQUFXLGNBQWMsQ0FBQztJQUMvQixxQ0FBZ0IsR0FBUTtRQUNwQyxnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsU0FBUztRQUNuQixjQUFjLEVBQUUsUUFBUTtRQUN4QixjQUFjLEVBQUUsUUFBUTtRQUN4QixlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsUUFBUTtRQUN6QixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFlBQVksRUFBRSxzQ0FBc0M7UUFDcEQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxVQUFVLEVBQUUsU0FBUztRQUNyQixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFVBQVUsRUFBRSxtREFBbUQ7UUFDL0QsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLGFBQWEsRUFBRSxpQkFBaUI7UUFDaEMsUUFBUSxFQUFFLFFBQVE7UUFDbEIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsY0FB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LG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxVQUFVO29CQUN2QyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsVUFBVTtvQkFDeEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUF3QixFQUF4QixDQUF3QixDQUFDLEVBQUMsQ0FBQztvQkFDckYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBM0tDLFVBQVU7O0lBb0xaLCtCQUFDO0NBQUEsQUFmRCxDQU84QyxJQUFJLEdBUWpEO1NBUlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3Mgc3BhcmtsaW5lYm94TWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnc3BhcmtsaW5lYm94JztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm94RmlsbENvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJib3hMaW5lQ29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcImNoYXJ0UmFuZ2VNYXhcIjogXCJOdW1iZXJcIixcbiAgICBcImNoYXJ0UmFuZ2VNaW5cIjogXCJOdW1iZXJcIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVUb29sdGlwc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImhpZ2hsaWdodENvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJoaWdobGlnaHRMaWdodGVuXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaW5lQ29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibWVkaWFuQ29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib3V0bGllckZpbGxDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwib3V0bGllcklRUlwiOiBcIk51bWJlclwiLFxuICAgIFwib3V0bGllckxpbmVDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJhd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuRWxlbWVudFwiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dPdXRsaWVyc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNwb3RSYWRpdXNcIjogXCJOdW1iZXJcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFyZ2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0YXJnZXRDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwidGlwVHBsXCI6IFwiU3RyaW5nL0V4dC5YVGVtcGxhdGVcIixcbiAgICBcInRvb2x0aXBQcmVmaXhcIjogXCJTdHJpbmdcIixcbiAgICBcInRvb2x0aXBTa2lwTnVsbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvb2x0aXBTdWZmaXhcIjogXCJTdHJpbmdcIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2YWx1ZXNcIjogXCJOdW1iZXJbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2hpc2tlckNvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdib3hGaWxsQ29sb3InLFxuICAgICdib3hMaW5lQ29sb3InLFxuICAgICdjaGFydFJhbmdlTWF4JyxcbiAgICAnY2hhcnRSYW5nZU1pbicsXG4gICAgJ2NscycsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZVRvb2x0aXBzJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWdobGlnaHRDb2xvcicsXG4gICAgJ2hpZ2hsaWdodExpZ2h0ZW4nLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaW5lQ29sb3InLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtZWRpYW5Db2xvcicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ291dGxpZXJGaWxsQ29sb3InLFxuICAgICdvdXRsaWVySVFSJyxcbiAgICAnb3V0bGllckxpbmVDb2xvcicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyYXcnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hvd091dGxpZXJzJyxcbiAgICAnc3BvdFJhZGl1cycsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFyZ2V0JyxcbiAgICAndGFyZ2V0Q29sb3InLFxuICAgICd0aXBUcGwnLFxuICAgICd0b29sdGlwUHJlZml4JyxcbiAgICAndG9vbHRpcFNraXBOdWxsJyxcbiAgICAndG9vbHRpcFN1ZmZpeCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZXMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3aGlza2VyQ29sb3InLFxuICAgICd3aWR0aCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonc3BhcmtsaW5lYm94LGV2ZW50J30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J3NwYXJrbGluZWJveCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidzcGFya2xpbmVib3gsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonc3BhcmtsaW5lYm94LGV2ZW50J30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3BhcmtsaW5lYm94JywgXG4gIGlucHV0czogc3BhcmtsaW5lYm94TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogc3BhcmtsaW5lYm94TWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNwYXJrbGluZWJveENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFNwYXJrbGluZWJveENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLHNwYXJrbGluZWJveE1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChzcGFya2xpbmVib3hNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==