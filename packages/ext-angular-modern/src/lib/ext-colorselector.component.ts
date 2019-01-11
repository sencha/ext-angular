import {
  Injectable,
  Host,
  Optional,
  SkipSelf,
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class colorselectorMetaData {
  public static XTYPE: string = 'colorselector';
  public static PROPERTIESOBJECT: any = {
    "alphaDecimalFormat": "String",
    "cancelButtonText": "String",
    "color": "Object",
    "fieldPad": "Number",
    "fieldWidth": "Number",
    "format": "'hex6'/'hex8'/'#hex6'/'#hex8'/'HEX6'/'HEX8'/'#HEX6'/'#HEX8'",
    "okButtonText": "String",
    "showOkCancelButtons": "Boolean",
    "showPreviousColor": "Boolean",
    "value": "String",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'alphaDecimalFormat',
    'cancelButtonText',
    'color',
    'fieldPad',
    'fieldWidth',
    'format',
    'okButtonText',
    'showOkCancelButtons',
    'showPreviousColor',
    'value',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'cancel',parameters:'colorselector'},
		{name:'change',parameters:'colorselector,color,previousColor'},
		{name:'ok',parameters:'colorselector,color'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'cancel',
		'change',
		'ok',
		'ready'
];
}
@Component({
  selector: 'colorselector', 
  inputs: colorselectorMetaData.PROPERTIES,
  outputs: colorselectorMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtColorselectorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtColorselectorComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {super(eRef.nativeElement,colorselectorMetaData,hostComponent)}
  //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,colorselectorMetaData,hostComponent)}
  public ngOnInit() {this.baseOnInit(colorselectorMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}