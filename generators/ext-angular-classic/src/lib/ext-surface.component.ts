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
export class surfaceMetaData {
  public static XTYPE: string = 'surface';
  public static PROPERTIESOBJECT: any = {
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "background": "Object",
    "bind": "Object/String",
    "border": "Boolean",
    "cls": "String/String[]",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "dirty": "Boolean",
    "disabled": "Boolean",
    "eventHandlers": "Object",
    "flipRtlText": "Boolean",
    "focusCls": "String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "instanceCls": "String/String[]",
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
    "renderTo": "Ext.Element",
    "ripple": "Boolean/Object/String",
    "session": "Boolean/Object/Ext.data.Session",
    "shareableName": "Boolean",
    "style": "String/Object",
    "touchAction": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "width": "Number/String",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'background',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'dirty',
    'disabled',
    'eventHandlers',
    'flipRtlText',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
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
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'style',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'surface,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'surface,event'},
		{name:'focusenter',parameters:'surface,event'},
		{name:'focusleave',parameters:'surface,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
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
}
@Component({
  selector: 'surface', 
  inputs: surfaceMetaData.PROPERTIES,
  outputs: surfaceMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtSurfaceComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtSurfaceComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,surfaceMetaData)}
  public ngOnInit() {this.baseOnInit(surfaceMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}