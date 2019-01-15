/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
import { base } from './base';
export class datecellMetaData {
}
datecellMetaData.XTYPE = 'datecell';
datecellMetaData.PROPERTIESOBJECT = {
    "align": "'left'/'center'/'right'",
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "bind": "Object/String",
    "bodyCls": "String",
    "bodyStyle": "String/Object",
    "border": "Boolean",
    "cellCls": "String",
    "cls": "String",
    "column": "Ext.grid.column.Column",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "defaultToolWeights": "Object",
    "disabled": "Boolean",
    "encodeHtml": "Boolean",
    "eventHandlers": "Object",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusCls": "String",
    "format": "String",
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
    "rawValue": "String",
    "record": "Ext.data.Model",
    "reference": "String",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "ripple": "Boolean/Object/String",
    "selectable": "Boolean",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "style": "String/Object",
    "toFrontOnShow": "Boolean",
    "toolDefaults": "Object",
    "tools": "Ext.Tool[]/Object/Object[]",
    "touchAction": "Object",
    "translatable": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "value": "Mixed",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "width": "Number/String",
    "x": "Number",
    "y": "Number",
    "zeroValue": "String",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
datecellMetaData.PROPERTIES = [
    'align',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'bodyCls',
    'bodyStyle',
    'border',
    'cellCls',
    'cls',
    'column',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'defaultToolWeights',
    'disabled',
    'encodeHtml',
    'eventHandlers',
    'flex',
    'floated',
    'focusCls',
    'format',
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
    'rawValue',
    'record',
    'reference',
    'relative',
    'renderTo',
    'ripple',
    'selectable',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'style',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'touchAction',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'width',
    'x',
    'y',
    'zeroValue',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
datecellMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'datecell' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'datecell,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'datecell,event' },
    { name: 'focusenter', parameters: 'datecell,event' },
    { name: 'focusleave', parameters: 'datecell,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'datecell' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
datecellMetaData.EVENTNAMES = [
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
if (false) {
    /** @type {?} */
    datecellMetaData.XTYPE;
    /** @type {?} */
    datecellMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    datecellMetaData.PROPERTIES;
    /** @type {?} */
    datecellMetaData.EVENTS;
    /** @type {?} */
    datecellMetaData.EVENTNAMES;
}
export class ExtDatecellComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, datecellMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,datecellMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(datecellMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtDatecellComponent.decorators = [
    { type: Component, args: [{
                selector: 'datecell',
                inputs: datecellMetaData.PROPERTIES,
                outputs: datecellMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtDatecellComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtDatecellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtDatecellComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGVjZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWRhdGVjZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDOztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ2Isc0JBQUssR0FBVyxVQUFVLENBQUM7QUFDM0IsaUNBQWdCLEdBQVE7SUFDcEMsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtJQUMzQixXQUFXLEVBQUUsUUFBUTtJQUNyQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLEtBQUssRUFBRSxRQUFRO0lBQ2YsUUFBUSxFQUFFLHdCQUF3QjtJQUNsQyxnQkFBZ0IsRUFBRSx3Q0FBd0M7SUFDMUQsWUFBWSxFQUFFLHNDQUFzQztJQUNwRCxzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLG9CQUFvQixFQUFFLFFBQVE7SUFDOUIsVUFBVSxFQUFFLFNBQVM7SUFDckIsWUFBWSxFQUFFLFNBQVM7SUFDdkIsZUFBZSxFQUFFLFFBQVE7SUFDekIsTUFBTSxFQUFFLHNCQUFzQjtJQUM5QixTQUFTLEVBQUUsU0FBUztJQUNwQixVQUFVLEVBQUUsUUFBUTtJQUNwQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVB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QUFTO0lBQ1QsYUFBYTtJQUNiLE9BQU87Q0FDUixDQUFDOzs7SUFoTEEsdUJBQXlDOztJQUN6QyxrQ0FzRUE7O0lBQ0EsNEJBc0VBOztJQUNBLHdCQWdCQTs7SUFDQSw0QkFnQkE7O0FBU0YsTUFBTSxPQUFPLG9CQUFxQixTQUFRLElBQUk7Ozs7O0lBQzVDLFlBQ0UsSUFBZSxFQUF5QyxhQUFvQjtRQUMxRSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQURGLGtCQUFhLEdBQWIsYUFBYSxDQUFPO0lBRTVFLENBQUM7Ozs7O0lBRUksUUFBUSxLQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFBLENBQUM7Ozs7O0lBRTlDLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7OztZQWxCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO2dCQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtnQkFDcEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBQyxDQUFDO2dCQUNqRixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7O1lBOUxDLFVBQVU7WUFJSCxJQUFJLHVCQTZMUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7SUFBN0IsNkNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGRhdGVjZWxsTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnZGF0ZWNlbGwnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFsaWduXCI6IFwiJ2xlZnQnLydjZW50ZXInLydyaWdodCdcIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib2R5Q2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJib2R5U3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjZWxsQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbHVtblwiOiBcIkV4dC5ncmlkLmNvbHVtbi5Db2x1bW5cIixcbiAgICBcImNvbnN0cmFpbkFsaWduXCI6IFwiU3RyaW5nL0V4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVmYXVsdFRvb2xXZWlnaHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImVuY29kZUh0bWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJldmVudEhhbmRsZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyL1N0cmluZy9PYmplY3RcIixcbiAgICBcImZsb2F0ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZm9ybWF0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmF3VmFsdWVcIjogXCJTdHJpbmdcIixcbiAgICBcInJlY29yZFwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbGF0aXZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic2VsZWN0YWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNlbGZBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG9vbERlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0b29sc1wiOiBcIkV4dC5Ub29sW10vT2JqZWN0L09iamVjdFtdXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHJhbnNsYXRhYmxlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIk1peGVkXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInhcIjogXCJOdW1iZXJcIixcbiAgICBcInlcIjogXCJOdW1iZXJcIixcbiAgICBcInplcm9WYWx1ZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhbGlnbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib2R5Q2xzJyxcbiAgICAnYm9keVN0eWxlJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2VsbENscycsXG4gICAgJ2NscycsXG4gICAgJ2NvbHVtbicsXG4gICAgJ2NvbnN0cmFpbkFsaWduJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVmYXVsdFRvb2xXZWlnaHRzJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdlbmNvZGVIdG1sJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb3JtYXQnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2lkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3Jhd1ZhbHVlJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3NlbGVjdGFibGUnLFxuICAgICdzZWxmQWxpZ24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzdHlsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3knLFxuICAgICd6ZXJvVmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOidkYXRlY2VsbCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidkYXRlY2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidkYXRlY2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidkYXRlY2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidkYXRlY2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidkYXRlY2VsbCd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZWNlbGwnLCBcbiAgaW5wdXRzOiBkYXRlY2VsbE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGRhdGVjZWxsTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dERhdGVjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RGF0ZWNlbGxDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGRhdGVjZWxsTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxkYXRlY2VsbE1ldGFEYXRhLGhvc3RDb21wb25lbnQpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGRhdGVjZWxsTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=