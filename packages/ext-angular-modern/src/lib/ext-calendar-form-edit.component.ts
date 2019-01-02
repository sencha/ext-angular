import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class calendar_form_editMetaData {
  public static XTYPE: string = 'calendar-form-edit';
  public static PROPERTIESOBJECT: any = {
    "activeChildTabIndex": "Number",
    "activeItem": "Ext.Component/Object/String/Number",
    "allDayField": "Object",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "Boolean",
    "anchorPosition": "String",
    "api": "Object",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoDestroy": "Boolean",
    "autoSize": "Boolean",
    "axisLock": "Boolean",
    "baseParams": "Object",
    "bbar": "Object/Object[]",
    "bind": "Object/String",
    "bodyBorder": "Boolean",
    "bodyPadding": "Number/Boolean/String",
    "bodyStyle": "String/Object",
    "border": "Boolean",
    "bottom": "Number/String",
    "buttonAlign": "String",
    "buttons": "Object/Ext.Button[]",
    "buttonToolbar": "Object/Ext.Toolbar",
    "calendarField": "Object",
    "cancelButton": "Object",
    "cardSwitchAnimation": "String/Object/Boolean",
    "centered": "Boolean",
    "closable": "Boolean",
    "closeAction": "String",
    "closeToolText": "String",
    "cls": "String/String[]",
    "collapsed": "Boolean",
    "collapsible": "'top'/'right'/'bottom'/'left'/Boolean/Object",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "control": "Object",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultEndTime": "Number[]",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object",
    "defaultStartTime": "Number[]",
    "defaultToolWeights": "Object",
    "defaultType": "String",
    "descriptionField": "Object",
    "disabled": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "dropButton": "Object",
    "enableSubmissionForm": "Boolean",
    "enctype": "String",
    "endDateField": "Object",
    "endTimeField": "Object",
    "enterAnimation": "String/Mixed",
    "event": "Ext.calendar.model.EventBase",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "fieldSeparators": "Boolean",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "header": "Boolean/Object",
    "headerPosition": "'top'/'right'/'bottom'/'left'",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "html": "String/Ext.dom.Element/HTMLElement",
    "icon": "String",
    "iconAlign": "'top'/'right'/'bottom'/'left'",
    "iconCls": "String",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "innerCls": "String",
    "inputBorders": "Boolean",
    "instanceCls": "String/String[]",
    "itemId": "String",
    "items": "Array/Object",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Object/String",
    "lbar": "Object/Object[]",
    "left": "Number/String",
    "listeners": "Object",
    "manageBorders": "Boolean",
    "margin": "Number/String",
    "masked": "Boolean/String/Object/Ext.Mask/Ext.LoadMask",
    "maxHeight": "Number/String",
    "maxWidth": "Number/String",
    "method": "String",
    "minButtonWidth": "Number",
    "minHeight": "Number/String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "multipartDetection": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "padding": "Number/String",
    "paramOrder": "String/String[]",
    "paramsAsHash": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "rbar": "Object/Object[]",
    "record": "Ext.data.Model",
    "reference": "String",
    "referenceHolder": "Boolean",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "resetFocusPosition": "Boolean",
    "resizable": "Object",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "saveButton": "Object",
    "scrollable": "Boolean/String/Object",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "standardButtons": "Object",
    "standardSubmit": "Boolean",
    "startDateField": "Object",
    "startTimeField": "Object",
    "stateful": "Boolean/Object/String[]",
    "statefulDefaults": "Object/String[]",
    "stateId": "String",
    "style": "String/Object",
    "submitOnAction": "Object",
    "tabIndex": "Number",
    "tbar": "Object/Object[]",
    "timeout": "Number",
    "title": "String",
    "titleAlign": "'left'/'center'/'right'",
    "titleField": "Object",
    "toFrontOnShow": "Boolean",
    "toolDefaults": "Object",
    "tools": "Ext.Tool[]/Object/Object[]",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "trackResetOnLoad": "Boolean",
    "translatable": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "url": "String",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "view": "Ext.calendar.view.Base",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "weighted": "Boolean",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeChildTabIndex',
    'activeItem',
    'allDayField',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorPosition',
    'api',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'baseParams',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bottom',
    'buttonAlign',
    'buttons',
    'buttonToolbar',
    'calendarField',
    'cancelButton',
    'cardSwitchAnimation',
    'centered',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsible',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultEndTime',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultStartTime',
    'defaultToolWeights',
    'defaultType',
    'descriptionField',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'dropButton',
    'enableSubmissionForm',
    'enctype',
    'endDateField',
    'endTimeField',
    'enterAnimation',
    'event',
    'eventHandlers',
    'exitAnimation',
    'fieldSeparators',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'header',
    'headerPosition',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'innerCls',
    'inputBorders',
    'instanceCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'left',
    'listeners',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'method',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'multipartDetection',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'paramOrder',
    'paramsAsHash',
    'plugins',
    'publishes',
    'rbar',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'resizable',
    'right',
    'ripple',
    'saveButton',
    'scrollable',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'standardButtons',
    'standardSubmit',
    'startDateField',
    'startTimeField',
    'stateful',
    'statefulDefaults',
    'stateId',
    'style',
    'submitOnAction',
    'tabIndex',
    'tbar',
    'timeout',
    'title',
    'titleAlign',
    'titleField',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackResetOnLoad',
    'translatable',
    'twoWayBindable',
    'ui',
    'url',
    'userCls',
    'userSelectable',
    'view',
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'newActiveItem,calendar-form-edit,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:'calendar-form-edit,item,index'},
		{name:'added',parameters:'sender,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecollapse',parameters:'calendar-form-edit'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeexpand',parameters:'calendar-form-edit'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeresizedragstart',parameters:'calendar-form-edit,context'},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforesubmit',parameters:'calendar-form-edit,values,options,e'},
		{name:'beforetofront',parameters:'calendar-form-edit'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-form-edit,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'cancel',parameters:'calendar-form-edit'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'collapse',parameters:'calendar-form-edit'},
		{name:'deactivate',parameters:'oldActiveItem,calendar-form-edit,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'drawerhide',parameters:'calendar-form-edit'},
		{name:'drawershow',parameters:'calendar-form-edit'},
		{name:'drop',parameters:'calendar-form-edit'},
		{name:'erased',parameters:'sender'},
		{name:'exception',parameters:'calendar-form-edit,result'},
		{name:'expand',parameters:'calendar-form-edit'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'calendar-form-edit,event'},
		{name:'focusenter',parameters:'calendar-form-edit,event'},
		{name:'focusleave',parameters:'calendar-form-edit,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:'calendar-form-edit,item,toIndex,fromIndex'},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'remove',parameters:'calendar-form-edit,item,index'},
		{name:'removed',parameters:'sender,container,index'},
		{name:'renderedchange',parameters:'calendar-form-edit,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'resizedrag',parameters:'calendar-form-edit,context'},
		{name:'resizedragcancel',parameters:'calendar-form-edit,context'},
		{name:'resizedragend',parameters:'calendar-form-edit,context'},
		{name:'resizedragstart',parameters:'calendar-form-edit,context'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'save',parameters:'calendar-form-edit,context'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'sender'},
		{name:'submit',parameters:'calendar-form-edit,result,e'},
		{name:'tofront',parameters:'calendar-form-edit'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforecollapse',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeexpand',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforeresizedragstart',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforesubmit',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'cancel',
		'centeredchange',
		'collapse',
		'deactivate',
		'destroy',
		'disabledchange',
		'dockedchange',
		'drawerhide',
		'drawershow',
		'drop',
		'erased',
		'exception',
		'expand',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'resizedrag',
		'resizedragcancel',
		'resizedragend',
		'resizedragstart',
		'rightchange',
		'save',
		'scrollablechange',
		'show',
		'submit',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'calendar-form-edit', 
  inputs: calendar_form_editMetaData.PROPERTIES,
  outputs: calendar_form_editMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtCalendar_form_editComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtCalendar_form_editComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,calendar_form_editMetaData)}
  public ngOnInit() {this.baseOnInit(calendar_form_editMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}