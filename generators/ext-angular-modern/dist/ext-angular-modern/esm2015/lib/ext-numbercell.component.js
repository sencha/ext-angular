/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class numbercellMetaData {
}
numbercellMetaData.XTYPE = 'numbercell';
numbercellMetaData.PROPERTIESOBJECT = {
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
numbercellMetaData.PROPERTIES = [
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
numbercellMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'numbercell' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'numbercell,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'numbercell,event' },
    { name: 'focusenter', parameters: 'numbercell,event' },
    { name: 'focusleave', parameters: 'numbercell,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'numbercell' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
numbercellMetaData.EVENTNAMES = [
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
    numbercellMetaData.XTYPE;
    /** @type {?} */
    numbercellMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    numbercellMetaData.PROPERTIES;
    /** @type {?} */
    numbercellMetaData.EVENTS;
    /** @type {?} */
    numbercellMetaData.EVENTNAMES;
}
export class ExtNumbercellComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, numbercellMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,numbercellMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(numbercellMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtNumbercellComponent.decorators = [
    { type: Component, args: [{
                selector: 'numbercell',
                inputs: numbercellMetaData.PROPERTIES,
                outputs: numbercellMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtNumbercellComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtNumbercellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtNumbercellComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW51bWJlcmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJsaWIvZXh0LW51bWJlcmNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sa0JBQWtCOztBQUNmLHdCQUFLLEdBQVcsWUFBWSxDQUFDO0FBQzdCLG1DQUFnQixHQUFRO0lBQ3BDLE9BQU8sRUFBRSx5QkFBeUI7SUFDbEMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGlCQUFpQixFQUFFLFFBQVE7SUFDM0IsV0FBVyxFQUFFLFFBQVE7SUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixNQUFNLEVBQUUsZUFBZTtJQUN2QixTQUFTLEVBQUUsUUFBUTtJQUNuQixXQUFXLEVBQUUsZUFBZTtJQUM1QixRQUFRLEVBQUUsU0FBUztJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixLQUFLLEVBQUUsUUFBUTtJQUNmLFFBQVEsRUFBRSx3QkFBd0I7SUFDbEMsZ0JBQWdCLEVBQUUsd0NBQXdDO0lBQzFELFlBQVksRUFBRSxzQ0FBc0M7SUFDcEQsc0JBQXNCLEVBQUUsU0FBUztJQUNqQyxvQkFBb0IsRUFBRSxRQUFRO0lBQzlCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLGVBQWUsRUFBRSxRQUFRO0lBQ3pCLE1BQU0sRUFBRSxzQkFBc0I7SUFDOUIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLFFBQVE7SUFD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QUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7SUFDYixPQUFPO0NBQ1IsQ0FBQzs7O0lBaExBLHlCQUEyQzs7SUFDM0Msb0NBc0VBOztJQUNBLDhCQXNFQTs7SUFDQSwwQkFnQkE7O0lBQ0EsOEJBZ0JBOztBQVNGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxJQUFJOzs7OztJQUM5QyxZQUFZLElBQWUsRUFBeUMsYUFBb0I7UUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQUFqRixrQkFBYSxHQUFiLGFBQWEsQ0FBTztJQUE2RCxDQUFDOzs7OztJQUUvSSxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7Ozs7SUFFaEQsa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixNQUFNLEVBQUUsa0JBQWtCLENBQUMsVUFBVTtnQkFDckMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLFVBQVU7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUMsQ0FBQztnQkFDbkYsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7OztZQTdMQyxVQUFVO1lBR0gsSUFBSSx1QkE0TG1CLElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7OztJQUE3QiwrQ0FBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIG51bWJlcmNlbGxNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdudW1iZXJjZWxsJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhbGlnblwiOiBcIidsZWZ0Jy8nY2VudGVyJy8ncmlnaHQnXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9keUNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiYm9keVN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY2VsbENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb2x1bW5cIjogXCJFeHQuZ3JpZC5jb2x1bW4uQ29sdW1uXCIsXG4gICAgXCJjb25zdHJhaW5BbGlnblwiOiBcIlN0cmluZy9FeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRlZmF1bHRUb29sV2VpZ2h0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJlbmNvZGVIdG1sXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlci9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJmbG9hdGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZvcm1hdFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJhd1ZhbHVlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWNvcmRcIjogXCJFeHQuZGF0YS5Nb2RlbFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWxhdGl2ZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlclRvXCI6IFwiRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInNlbGVjdGFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvb2xEZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwidG9vbHNcIjogXCJFeHQuVG9vbFtdL09iamVjdC9PYmplY3RbXVwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidmFsdWVcIjogXCJNaXhlZFwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ6ZXJvVmFsdWVcIjogXCJTdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWxpZ24nLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9keUNscycsXG4gICAgJ2JvZHlTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NlbGxDbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW4nLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRUb29sV2VpZ2h0cycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZW5jb2RlSHRtbCcsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9ybWF0JyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdpZCcsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyYXdWYWx1ZScsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaXBwbGUnLFxuICAgICdzZWxlY3RhYmxlJyxcbiAgICAnc2VsZkFsaWduJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc3R5bGUnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbERlZmF1bHRzJyxcbiAgICAndG9vbHMnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd5JyxcbiAgICAnemVyb1ZhbHVlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonbnVtYmVyY2VsbCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidudW1iZXJjZWxsLGV2ZW50J30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J251bWJlcmNlbGwsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonbnVtYmVyY2VsbCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidudW1iZXJjZWxsLGV2ZW50J30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J251bWJlcmNlbGwnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcblx0XHQnYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlaGlkZGVuY2hhbmdlJyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J3RvZnJvbnQnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251bWJlcmNlbGwnLCBcbiAgaW5wdXRzOiBudW1iZXJjZWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogbnVtYmVyY2VsbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHROdW1iZXJjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0TnVtYmVyY2VsbENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LG51bWJlcmNlbGxNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihob3N0Q29tcG9uZW50LG51bWJlcmNlbGxNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChudW1iZXJjZWxsTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=