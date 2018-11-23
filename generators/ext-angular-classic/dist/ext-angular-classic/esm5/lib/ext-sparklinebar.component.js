/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var sparklinebarMetaData = /** @class */ (function () {
    function sparklinebarMetaData() {
    }
    sparklinebarMetaData.XTYPE = 'sparklinebar';
    sparklinebarMetaData.PROPERTIESOBJECT = {
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "barColor": "String",
        "barSpacing": "Number",
        "barWidth": "Number",
        "bind": "Object/String",
        "border": "Boolean",
        "chartRangeClip": "Boolean",
        "chartRangeMax": "Number",
        "chartRangeMin": "Number",
        "cls": "String/String[]",
        "colorMap": "Object",
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
        "name": "String",
        "nameable": "Boolean",
        "negBarColor": "String",
        "nullColor": "String",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "reference": "String",
        "renderTo": "Ext.Element",
        "ripple": "Boolean/Object/String",
        "session": "Boolean/Object/Ext.data.Session",
        "shareableName": "Boolean",
        "stackedBarColor": "String[]",
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
        "viewModel": "String/Object/Ext.app.ViewModel",
        "width": "Number/String",
        "zeroAxis": "Boolean",
        "zeroColor": "String",
        "platformConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    sparklinebarMetaData.PROPERTIES = [
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'barColor',
        'barSpacing',
        'barWidth',
        'bind',
        'border',
        'chartRangeClip',
        'chartRangeMax',
        'chartRangeMin',
        'cls',
        'colorMap',
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
        'name',
        'nameable',
        'negBarColor',
        'nullColor',
        'plugins',
        'publishes',
        'reference',
        'renderTo',
        'ripple',
        'session',
        'shareableName',
        'stackedBarColor',
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
        'viewModel',
        'width',
        'zeroAxis',
        'zeroColor',
        'platformConfig',
        'fitToParent',
        'config'
    ];
    sparklinebarMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'sparklinebar,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'sparklinebar,event' },
        { name: 'focusenter', parameters: 'sparklinebar,event' },
        { name: 'focusleave', parameters: 'sparklinebar,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    sparklinebarMetaData.EVENTNAMES = [
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
    return sparklinebarMetaData;
}());
export { sparklinebarMetaData };
if (false) {
    /** @type {?} */
    sparklinebarMetaData.XTYPE;
    /** @type {?} */
    sparklinebarMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    sparklinebarMetaData.PROPERTIES;
    /** @type {?} */
    sparklinebarMetaData.EVENTS;
    /** @type {?} */
    sparklinebarMetaData.EVENTNAMES;
}
var ExtSparklinebarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSparklinebarComponent, _super);
    function ExtSparklinebarComponent(eRef) {
        return _super.call(this, eRef, sparklinebarMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtSparklinebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(sparklinebarMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtSparklinebarComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtSparklinebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sparklinebar',
                    inputs: sparklinebarMetaData.PROPERTIES,
                    outputs: sparklinebarMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtSparklinebarComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtSparklinebarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtSparklinebarComponent;
}(base));
export { ExtSparklinebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNwYXJrbGluZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJsaWIvZXh0LXNwYXJrbGluZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBNEpBLENBQUM7SUEzSmUsMEJBQUssR0FBVyxjQUFjLENBQUM7SUFDL0IscUNBQWdCLEdBQVE7UUFDcEMsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsWUFBWSxFQUFFLFFBQVE7UUFDdEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixlQUFlLEVBQUUsUUFBUTtRQUN6QixlQUFlLEVBQUUsUUFBUTtRQUN6QixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFlBQVksRUFBRSxzQ0FBc0M7UUFDcEQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxVQUFVLEVBQUUsU0FBUztRQUNyQixpQkFBaUIsRUFBRSxTQUFTO1FBQzVCLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFVBQVUsRUFBRSxtREFBbUQ7UUFDL0QsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixrQkFBa0IsRUFBRSxRQUFRO1FBQzVCLGFB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QUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7O2dCQWRKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFVBQVU7b0JBQ3ZDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxVQUFVO29CQUN4QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCLENBQUMsRUFBQyxDQUFDO29CQUNyRixRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkF2S0MsVUFBVTs7SUFnTFosK0JBQUM7Q0FBQSxBQWZELENBTzhDLElBQUksR0FRakQ7U0FSWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBzcGFya2xpbmViYXJNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdzcGFya2xpbmViYXInO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJhckNvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiYXJTcGFjaW5nXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJiYXJXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNoYXJ0UmFuZ2VDbGlwXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY2hhcnRSYW5nZU1heFwiOiBcIk51bWJlclwiLFxuICAgIFwiY2hhcnRSYW5nZU1pblwiOiBcIk51bWJlclwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb2xvck1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVUb29sdGlwc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImhpZ2hsaWdodENvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJoaWdobGlnaHRMaWdodGVuXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaW5lQ29sb3JcIjogXCJTdHJpbmdcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJuZWdCYXJDb2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwibnVsbENvbG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5FbGVtZW50XCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic3RhY2tlZEJhckNvbG9yXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGlwVHBsXCI6IFwiU3RyaW5nL0V4dC5YVGVtcGxhdGVcIixcbiAgICBcInRvb2x0aXBQcmVmaXhcIjogXCJTdHJpbmdcIixcbiAgICBcInRvb2x0aXBTa2lwTnVsbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvb2x0aXBTdWZmaXhcIjogXCJTdHJpbmdcIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2YWx1ZXNcIjogXCJOdW1iZXJbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ6ZXJvQXhpc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInplcm9Db2xvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYmFyQ29sb3InLFxuICAgICdiYXJTcGFjaW5nJyxcbiAgICAnYmFyV2lkdGgnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2hhcnRSYW5nZUNsaXAnLFxuICAgICdjaGFydFJhbmdlTWF4JyxcbiAgICAnY2hhcnRSYW5nZU1pbicsXG4gICAgJ2NscycsXG4gICAgJ2NvbG9yTWFwJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlVG9vbHRpcHMnLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZ2hsaWdodENvbG9yJyxcbiAgICAnaGlnaGxpZ2h0TGlnaHRlbicsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpbmVDb2xvcicsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25lZ0JhckNvbG9yJyxcbiAgICAnbnVsbENvbG9yJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzdGFja2VkQmFyQ29sb3InLFxuICAgICdzdHlsZScsXG4gICAgJ3RpcFRwbCcsXG4gICAgJ3Rvb2x0aXBQcmVmaXgnLFxuICAgICd0b29sdGlwU2tpcE51bGwnLFxuICAgICd0b29sdGlwU3VmZml4JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZhbHVlcycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAnemVyb0F4aXMnLFxuICAgICd6ZXJvQ29sb3InLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J3NwYXJrbGluZWJhcixldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidzcGFya2xpbmViYXIsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonc3BhcmtsaW5lYmFyLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J3NwYXJrbGluZWJhcixldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwYXJrbGluZWJhcicsIFxuICBpbnB1dHM6IHNwYXJrbGluZWJhck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IHNwYXJrbGluZWJhck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRTcGFya2xpbmViYXJDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRTcGFya2xpbmViYXJDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixzcGFya2xpbmViYXJNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoc3BhcmtsaW5lYmFyTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=