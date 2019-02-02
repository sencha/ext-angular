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
export class axis3dMetaData {
  public static XTYPE: string = 'axis3d';
  public static PROPERTIES: string[] = [
    'adjustByMajorUnit',
    'background',
    'center',
    'chart',
    'depth',
    'expandRangeBy',
    'fields',
    'floating',
    'grid',
    'hidden',
    'id',
    'label',
    'layout',
    'length',
    'limits',
    'linkedTo',
    'majorTickSteps',
    'margin',
    'maximum',
    'maxZoom',
    'minimum',
    'minorTickSteps',
    'minZoom',
    'needHighPrecision',
    'position',
    'radius',
    'reconcileRange',
    'renderer',
    'rotation',
    'segmenter',
    'style',
    'title',
    'titleMargin',
    'totalAngle',
    'visibleRange',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'rangechange',parameters:'axis,range,oldRange'},
		{name:'visiblerangechange',parameters:'axis,visibleRange'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'rangechange',
		'visiblerangechange',
		'ready'
];
}
@Component({
  selector: 'axis3d', 
  inputs: axis3dMetaData.PROPERTIES,
  outputs: axis3dMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtAxis3dComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtAxis3dComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,axis3dMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(axis3dMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}