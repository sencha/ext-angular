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
    'align',
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
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,colorselectorMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(colorselectorMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}