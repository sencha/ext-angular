/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var sparklinelineMetaData = /** @class */ (function () {
    function sparklinelineMetaData() {
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
        "responsiveConfig": "Object",
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
        'responsiveConfig',
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
    return sparklinelineMetaData;
}());
export { sparklinelineMetaData };
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
var ExtSparklinelineComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklinelineComponent, _super);
    function ExtSparklinelineComponent(eRef) {
        return _super.call(this, eRef, sparklinelineMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtSparklinelineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(sparklinelineMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtSparklinelineComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtSparklinelineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sparklineline',
                    inputs: sparklinelineMetaData.PROPERTIES,
                    outputs: sparklinelineMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtSparklinelineComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtSparklinelineComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtSparklinelineComponent;
}(base));
export { ExtSparklinelineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwYXJrbGluZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsibGliL2V4dC1zcGFya2xpbmVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUF3S0EsQ0FBQztJQXZLZSwyQkFBSyxHQUFXLGVBQWUsQ0FBQztJQUNoQyxzQ0FBZ0IsR0FBUTtRQUNwQyxnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGlCQUFpQixFQUFFLFFBQVE7UUFDM0IsV0FBVyxFQUFFLFFBQVE7UUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixNQUFNLEVBQUUsZUFBZTtRQUN2QixRQUFRLEVBQUUsU0FBUztRQUNuQixlQUFlLEVBQUUsUUFBUTtRQUN6QixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixZQUFZLEVBQUUsc0NBQXNDO1FBQ3BELHNCQUFzQixFQUFFLFNBQVM7UUFDakMsVUFBVSxFQUFFLFNBQVM7UUFDckIsaUJBQWlCLEVBQUUsU0FBUztRQUM1QixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFVBQVUsRUFBRSxtREFBbUQ7UUFDL0QsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLG9CQUFvQixFQUFFLFFBQVE7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LElBQUksRUFBQyxxQkFBcUIsQ0FBQztJQUFBLENBQUM7Ozs7SUFDekQsNENBQVE7OztJQUFmLGNBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQSxDQUFBLENBQUM7SUFDMUQsMEVBQTBFOzs7OztJQUNuRSxzREFBa0I7Ozs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxVQUFVO29CQUN4QyxPQUFPLEVBQUUscUJBQXFCLENBQUMsVUFBVTtvQkFDekMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDLEVBQUMsQ0FBQztvQkFDdEYsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBbkxDLFVBQVU7O0lBNExaLGdDQUFDO0NBQUEsQUFmRCxDQU8rQyxJQUFJLEdBUWxEO1NBUlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3Mgc3BhcmtsaW5lbGluZU1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ3NwYXJrbGluZWxpbmUnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjaGFydFJhbmdlTWF4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJjaGFydFJhbmdlTWF4WFwiOiBcIk51bWJlclwiLFxuICAgIFwiY2hhcnRSYW5nZU1pblwiOiBcIk51bWJlclwiLFxuICAgIFwiY2hhcnRSYW5nZU1pblhcIjogXCJOdW1iZXJcIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVUb29sdGlwc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImRyYXdOb3JtYWxPblRvcFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImZpbGxDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGlnaGxpZ2h0Q29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcImhpZ2hsaWdodExpZ2h0ZW5cIjogXCJOdW1iZXJcIixcbiAgICBcImhpZ2hsaWdodExpbmVDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaGlnaGxpZ2h0U3BvdENvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaW5lQ29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcImxpbmVXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXhTcG90Q29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcIm1pblNwb3RDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJub3JtYWxSYW5nZUNvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJub3JtYWxSYW5nZU1heFwiOiBcIk51bWJlclwiLFxuICAgIFwibm9ybWFsUmFuZ2VNaW5cIjogXCJOdW1iZXJcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbmRlclRvXCI6IFwiRXh0LkVsZW1lbnRcIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzcG90Q29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcInNwb3RSYWRpdXNcIjogXCJOdW1iZXJcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGlwVHBsXCI6IFwiU3RyaW5nL0V4dC5YVGVtcGxhdGVcIixcbiAgICBcInRvb2x0aXBQcmVmaXhcIjogXCJTdHJpbmdcIixcbiAgICBcInRvb2x0aXBTa2lwTnVsbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvb2x0aXBTdWZmaXhcIjogXCJTdHJpbmdcIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2YWx1ZXNcIjogXCJOdW1iZXJbXVwiLFxuICAgIFwidmFsdWVTcG90c1wiOiBcIk9iamVjdFwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2hhcnRSYW5nZU1heCcsXG4gICAgJ2NoYXJ0UmFuZ2VNYXhYJyxcbiAgICAnY2hhcnRSYW5nZU1pbicsXG4gICAgJ2NoYXJ0UmFuZ2VNaW5YJyxcbiAgICAnY2xzJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlVG9vbHRpcHMnLFxuICAgICdkcmF3Tm9ybWFsT25Ub3AnLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZmlsbENvbG9yJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZ2hsaWdodENvbG9yJyxcbiAgICAnaGlnaGxpZ2h0TGlnaHRlbicsXG4gICAgJ2hpZ2hsaWdodExpbmVDb2xvcicsXG4gICAgJ2hpZ2hsaWdodFNwb3RDb2xvcicsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpbmVDb2xvcicsXG4gICAgJ2xpbmVXaWR0aCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ21heFNwb3RDb2xvcicsXG4gICAgJ21pblNwb3RDb2xvcicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25vcm1hbFJhbmdlQ29sb3InLFxuICAgICdub3JtYWxSYW5nZU1heCcsXG4gICAgJ25vcm1hbFJhbmdlTWluJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzcG90Q29sb3InLFxuICAgICdzcG90UmFkaXVzJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aXBUcGwnLFxuICAgICd0b29sdGlwUHJlZml4JyxcbiAgICAndG9vbHRpcFNraXBOdWxsJyxcbiAgICAndG9vbHRpcFN1ZmZpeCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZXMnLFxuICAgICd2YWx1ZVNwb3RzJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2lkdGgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidzcGFya2xpbmVsaW5lLGV2ZW50J30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J3NwYXJrbGluZWxpbmUsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonc3BhcmtsaW5lbGluZSxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidzcGFya2xpbmVsaW5lLGV2ZW50J30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3BhcmtsaW5lbGluZScsIFxuICBpbnB1dHM6IHNwYXJrbGluZWxpbmVNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBzcGFya2xpbmVsaW5lTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNwYXJrbGluZWxpbmVDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRTcGFya2xpbmVsaW5lQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsc3BhcmtsaW5lbGluZU1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChzcGFya2xpbmVsaW5lTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=