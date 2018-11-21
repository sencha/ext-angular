/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class surfaceMetaData {
}
surfaceMetaData.XTYPE = 'surface';
surfaceMetaData.PROPERTIESOBJECT = {
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "background": "Object",
    "bind": "Object/String",
    "border": "Boolean",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "dirty": "Boolean",
    "disabled": "Boolean",
    "eventHandlers": "Object",
    "flex": "Number/String/Object",
    "flipRtlText": "Boolean",
    "floated": "Boolean",
    "focusCls": "String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "id": "String",
    "instanceCls": "String/String[]",
    "itemId": "String",
    "items": "Array",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "listeners": "Object",
    "name": "String",
    "nameable": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "rect": "Array",
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
surfaceMetaData.PROPERTIES = [
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'background',
    'bind',
    'border',
    'cls',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'dirty',
    'disabled',
    'eventHandlers',
    'flex',
    'flipRtlText',
    'floated',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'id',
    'instanceCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'rect',
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
    'fitToParent',
    'config'
];
surfaceMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'surface' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'surface,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'surface,event' },
    { name: 'focusenter', parameters: 'surface,event' },
    { name: 'focusleave', parameters: 'surface,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'surface' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
surfaceMetaData.EVENTNAMES = [
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
    surfaceMetaData.XTYPE;
    /** @type {?} */
    surfaceMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    surfaceMetaData.PROPERTIES;
    /** @type {?} */
    surfaceMetaData.EVENTS;
    /** @type {?} */
    surfaceMetaData.EVENTNAMES;
}
export class ExtSurfaceComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, surfaceMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(surfaceMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() { this.baseAfterContentInit(); }
}
ExtSurfaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'surface',
                inputs: surfaceMetaData.PROPERTIES,
                outputs: surfaceMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtSurfaceComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtSurfaceComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXN1cmZhY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LXN1cmZhY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBSUwsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sZUFBZTs7QUFDWixxQkFBSyxHQUFXLFNBQVMsQ0FBQztBQUMxQixnQ0FBZ0IsR0FBUTtJQUNwQyxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtJQUMzQixXQUFXLEVBQUUsUUFBUTtJQUNyQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsZ0JBQWdCLEVBQUUsd0NBQXdDO0lBQzFELFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsc0JBQXNCLEVBQUUsU0FBUztJQUNqQyxPQUFPLEVBQUUsU0FBUztJQUNsQixVQUFVLEVBQUUsU0FBUztJQUNyQixlQUFlLEVBQUUsUUFBUTtJQUN6QixNQUFNLEVBQUUsc0JBQXNCO0lBQzlCLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFVBQVUsRUFBRSxtREFBbUQ7SUFDL0QsSUFBSSxFQUFFLFFBQVE7SUFDZCxhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLE9BQU8sRUFBRSxPQUFP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QUFFLFNBQVM7Z0JBQ25CLE1BQU0sRUFBRSxlQUFlLENBQUMsVUFBVTtnQkFDbEMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxVQUFVO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLENBQUM7Z0JBQ2hGLFFBQVEsRUFBRSxzQ0FBc0M7YUFDakQ7Ozs7WUF6S0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBzdXJmYWNlTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnc3VyZmFjZSc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIk9iamVjdFwiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29uc3RyYWluQWxpZ25cIjogXCJTdHJpbmcvRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXJ0eVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlci9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJmbGlwUnRsVGV4dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZsb2F0ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmb2N1c0Nsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbXNcIjogXCJBcnJheVwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlY3RcIjogXCJBcnJheVwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWxhdGl2ZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlclRvXCI6IFwiRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNlbGZBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JhY2tncm91bmQnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2xzJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXJ0eScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2ZsZXgnLFxuICAgICdmbGlwUnRsVGV4dCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaWQnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1zJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWN0JyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3N0eWxlJyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd5JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonc3VyZmFjZSd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidzdXJmYWNlLGV2ZW50J30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J3N1cmZhY2UsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonc3VyZmFjZSxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidzdXJmYWNlLGV2ZW50J30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J3N1cmZhY2UnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcblx0XHQnYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlaGlkZGVuY2hhbmdlJyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J3RvZnJvbnQnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1cmZhY2UnLCBcbiAgaW5wdXRzOiBzdXJmYWNlTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogc3VyZmFjZU1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRTdXJmYWNlQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0U3VyZmFjZUNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLHN1cmZhY2VNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoc3VyZmFjZU1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KCl9XG59Il19