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
export class interactionMetaData {
  public static XTYPE: string = 'interaction';
  public static PROPERTIES: string[] = [
    'chart',
    'enabled',
    'gesture',
    'listeners',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'ready'
];
}
@Component({
  selector: 'interaction', 
  inputs: interactionMetaData.PROPERTIES,
  outputs: interactionMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtInteractionComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtInteractionComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,interactionMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(interactionMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}