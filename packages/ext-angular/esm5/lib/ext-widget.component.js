/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
import { base } from './base';
var widgetMetaData = /** @class */ (function () {
    function widgetMetaData() {
    }
    widgetMetaData.XTYPE = 'widget';
    widgetMetaData.PROPERTIESOBJECT = {
        "alwaysOnTop": "Boolean/Number",
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "bind": "Object/String",
        "border": "Boolean",
        "cls": "String/String[]",
        "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
        "controller": "String/Object/Ext.app.ViewController",
        "defaultListenerScope": "Boolean",
        "disabled": "Boolean",
        "eventHandlers": "Object",
        "flex": "Number/String/Object",
        "floated": "Boolean",
        "focusCls": "String",
        "height": "Number/String",
        "hidden": "Boolean",
        "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
        "id": "String",
        "instanceCls": "String/String[]",
        "itemId": "String",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "listeners": "Object",
        "name": "String",
        "nameable": "Boolean",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "reference": "String",
        "relative": "Boolean",
        "renderTo": "Ext.dom.Element",
        "ripple": "Boolean/Object/String",
        "selfAlign": "String",
        "session": "Boolean/Object/Ext.data.Session",
        "shadow": "Boolean",
        "shareableName": "Boolean",
        "shim": "Boolean",
        "style": "String/Object",
        "toFrontOnShow": "Boolean",
        "touchAction": "Object",
        "translatable": "Object",
        "twoWayBindable": "String/String[]/Object",
        "ui": "String/String[]",
        "userCls": "String/String[]",
        "viewModel": "String/Object/Ext.app.ViewModel",
        "width": "Number/String",
        "x": "Number",
        "y": "Number",
        "platformConfig": "Object",
        "responsiveConfig": "Object",
        "fitToParent": "Boolean",
        "config": "Object",
    };
    widgetMetaData.PROPERTIES = [
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'bind',
        'border',
        'cls',
        'constrainAlign',
        'controller',
        'defaultListenerScope',
        'disabled',
        'eventHandlers',
        'flex',
        'floated',
        'focusCls',
        'height',
        'hidden',
        'hideMode',
        'id',
        'instanceCls',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'listeners',
        'name',
        'nameable',
        'plugins',
        'publishes',
        'reference',
        'relative',
        'renderTo',
        'ripple',
        'selfAlign',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'style',
        'toFrontOnShow',
        'touchAction',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'viewModel',
        'width',
        'x',
        'y',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    widgetMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'widget' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'widget,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'widget,event' },
        { name: 'focusenter', parameters: 'widget,event' },
        { name: 'focusleave', parameters: 'widget,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'widget' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    widgetMetaData.EVENTNAMES = [
        'beforedisabledchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforetofront',
        'beforewidthchange',
        'blur',
        'disabledchange',
        'focus',
        'focusenter',
        'focusleave',
        'heightchange',
        'hiddenchange',
        'tofront',
        'widthchange',
        'ready'
    ];
    return widgetMetaData;
}());
export { widgetMetaData };
if (false) {
    /** @type {?} */
    widgetMetaData.XTYPE;
    /** @type {?} */
    widgetMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    widgetMetaData.PROPERTIES;
    /** @type {?} */
    widgetMetaData.EVENTS;
    /** @type {?} */
    widgetMetaData.EVENTNAMES;
}
var ExtWidgetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtWidgetComponent, _super);
    function ExtWidgetComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, widgetMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,widgetMetaData,hostComponent)}
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,widgetMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ExtWidgetComponent.prototype.ngOnInit = 
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,widgetMetaData,hostComponent)}
    /**
     * @return {?}
     */
    function () { this.baseOnInit(widgetMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtWidgetComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'widget',
                    inputs: widgetMetaData.PROPERTIES,
                    outputs: widgetMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtWidgetComponent; }) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtWidgetComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtWidgetComponent;
}(base));
export { ExtWidgetComponent };
if (false) {
    /** @type {?} */
    ExtWidgetComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDOztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUFxSkEsQ0FBQztJQXBKZSxvQkFBSyxHQUFXLFFBQVEsQ0FBQztJQUN6QiwrQkFBZ0IsR0FBUTtRQUNwQyxhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsZ0JBQWdCLEVBQUUsd0NBQXdDO1FBQzFELFlBQVksRUFBRSxzQ0FBc0M7UUFDcEQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyxVQUFVLEVBQUUsU0FBUztRQUNyQixlQUFlLEVBQUUsUUFBUTtRQUN6QixNQUFNLEVBQUUsc0JBQXNCO1FBQzlCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFVBQVUsRUFBRSxtREFBbUQ7UUFDL0QsSUFBSSxFQUFFLFFBQVE7UUFDZCxhQUFhLEVBQUUsaUJBQWlCO1FBQ2hDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGNBQWMsRUFBRSxR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QUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFsQkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixNQUFNLEVBQUUsY0FBYyxDQUFDLFVBQVU7b0JBQ2pDLE9BQU8sRUFBRSxjQUFjLENBQUMsVUFBVTtvQkFDbEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDLEVBQUMsQ0FBQztvQkFDL0UsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7Ozs7Z0JBaktDLFVBQVU7Z0JBSUgsSUFBSSx1QkFnS1MsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQVVsRCx5QkFBQztDQUFBLEFBbkJELENBT3dDLElBQUksR0FZM0M7U0FaWSxrQkFBa0I7OztJQUVWLDJDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXJPdXRsZXQsIENoaWxkcmVuT3V0bGV0Q29udGV4dHMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyB3aWRnZXRNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICd3aWRnZXQnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbnN0cmFpbkFsaWduXCI6IFwiU3RyaW5nL0V4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJldmVudEhhbmRsZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyL1N0cmluZy9PYmplY3RcIixcbiAgICBcImZsb2F0ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVsYXRpdmVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5kb20uRWxlbWVudFwiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cmFuc2xhdGFibGVcIjogXCJPYmplY3RcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwieFwiOiBcIk51bWJlclwiLFxuICAgIFwieVwiOiBcIk51bWJlclwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2xzJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdpZCcsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2VsZkFsaWduJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc3R5bGUnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3knLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J3dpZGdldCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOid3aWRnZXQsZXZlbnQnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczond2lkZ2V0LGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3dpZGdldCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid3aWRnZXQsZXZlbnQnfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczond2lkZ2V0J30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZXRvZnJvbnQnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQnd2lkdGhjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aWRnZXQnLCBcbiAgaW5wdXRzOiB3aWRnZXRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiB3aWRnZXRNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0V2lkZ2V0Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0V2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCx3aWRnZXRNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LHdpZGdldE1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KHdpZGdldE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19