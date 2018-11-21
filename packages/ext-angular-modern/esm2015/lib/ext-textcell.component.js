/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class textcellMetaData {
}
textcellMetaData.XTYPE = 'textcell';
textcellMetaData.PROPERTIESOBJECT = {
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
textcellMetaData.PROPERTIES = [
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
textcellMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'textcell' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'textcell,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'textcell,event' },
    { name: 'focusenter', parameters: 'textcell,event' },
    { name: 'focusleave', parameters: 'textcell,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'textcell' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
textcellMetaData.EVENTNAMES = [
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
    textcellMetaData.XTYPE;
    /** @type {?} */
    textcellMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    textcellMetaData.PROPERTIES;
    /** @type {?} */
    textcellMetaData.EVENTS;
    /** @type {?} */
    textcellMetaData.EVENTNAMES;
}
export class ExtTextcellComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, textcellMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(textcellMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() { this.baseAfterContentInit(); }
}
ExtTextcellComponent.decorators = [
    { type: Component, args: [{
                selector: 'textcell',
                inputs: textcellMetaData.PROPERTIES,
                outputs: textcellMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtTextcellComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtTextcellComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRleHRjZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC10ZXh0Y2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFJTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ2Isc0JBQUssR0FBVyxVQUFVLENBQUM7QUFDM0IsaUNBQWdCLEdBQVE7SUFDcEMsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtJQUMzQixXQUFXLEVBQUUsUUFBUTtJQUNyQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLEtBQUssRUFBRSxRQUFRO0lBQ2YsUUFBUSxFQUFFLHdCQUF3QjtJQUNsQyxnQkFBZ0IsRUFBRSx3Q0FBd0M7SUFDMUQsWUFBWSxFQUFFLHNDQUFzQztJQUNwRCxzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLG9CQUFvQixFQUFFLFFBQVE7SUFDOUIsVUFBVSxFQUFFLFNBQVM7SUFDckIsWUFBWSxFQUFFLFNBQVM7SUFDdkIsZUFBZSxFQUFFLFFBQVE7SUFDekIsTUFBTSxFQUFFLHNCQUFzQjtJQUM5QixTQUFTLEVBQUUsU0FBUztJQUNwQixVQUFVLEVBQUUsUUFBUTtJQUNwQixRQUFRLEVBQUUsZUFBZTtJQUN6QixRQUFRLEVBQUUsU0FBUztJQUNuQixVQUFVLEVBQUUs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LGtDQXFFQTs7SUFDQSw0QkFxRUE7O0lBQ0Esd0JBZ0JBOztJQUNBLDRCQWdCQTs7QUFTRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsSUFBSTs7OztJQUM1QyxZQUFZLElBQWUsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7O0lBQ3BELFFBQVEsS0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7OztJQUU5QyxrQkFBa0IsS0FBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQSxDQUFBLENBQUM7OztZQVgxRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO2dCQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtnQkFDcEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBQyxDQUFDO2dCQUNqRixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBM0xDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgdGV4dGNlbGxNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICd0ZXh0Y2VsbCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWxpZ25cIjogXCInbGVmdCcvJ2NlbnRlcicvJ3JpZ2h0J1wiLFxuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvZHlDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImJvZHlTdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImJvcmRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNlbGxDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29sdW1uXCI6IFwiRXh0LmdyaWQuY29sdW1uLkNvbHVtblwiLFxuICAgIFwiY29uc3RyYWluQWxpZ25cIjogXCJTdHJpbmcvRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZWZhdWx0VG9vbFdlaWdodHNcIjogXCJPYmplY3RcIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZW5jb2RlSHRtbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXIvU3RyaW5nL09iamVjdFwiLFxuICAgIFwiZmxvYXRlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHVibGlzaGVzXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwicmF3VmFsdWVcIjogXCJTdHJpbmdcIixcbiAgICBcInJlY29yZFwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbGF0aXZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwic2VsZWN0YWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNlbGZBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG9vbERlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0b29sc1wiOiBcIkV4dC5Ub29sW10vT2JqZWN0L09iamVjdFtdXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHJhbnNsYXRhYmxlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIk1peGVkXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInhcIjogXCJOdW1iZXJcIixcbiAgICBcInlcIjogXCJOdW1iZXJcIixcbiAgICBcInplcm9WYWx1ZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhbGlnbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib2R5Q2xzJyxcbiAgICAnYm9keVN0eWxlJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2VsbENscycsXG4gICAgJ2NscycsXG4gICAgJ2NvbHVtbicsXG4gICAgJ2NvbnN0cmFpbkFsaWduJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVmYXVsdFRvb2xXZWlnaHRzJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdlbmNvZGVIdG1sJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2lkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3Jhd1ZhbHVlJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3NlbGVjdGFibGUnLFxuICAgICdzZWxmQWxpZ24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzdHlsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3knLFxuICAgICd6ZXJvVmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOid0ZXh0Y2VsbCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOid0ZXh0Y2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOid0ZXh0Y2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOid0ZXh0Y2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid0ZXh0Y2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOid0ZXh0Y2VsbCd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dGNlbGwnLCBcbiAgaW5wdXRzOiB0ZXh0Y2VsbE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IHRleHRjZWxsTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFRleHRjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VGV4dGNlbGxDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZix0ZXh0Y2VsbE1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdCh0ZXh0Y2VsbE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KCl9XG59Il19