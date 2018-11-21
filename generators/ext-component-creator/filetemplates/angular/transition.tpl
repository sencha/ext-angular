import {
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class transitionMetaData {
  public static XTYPE: string = 'transition';
  public static PROPERTIESOBJECT: any = {
    "type": "slide/reveal/cover/fade/pop",
    "duration": "Number",
    "easing": "String",
    "direction": "String",
    "bindDirectionToLocation": "Boolean",
  };
  public static PROPERTIES: string[] = [
    'type',
    'duration',
    'easing',
    'direction',
    'bindDirectionToLocation',

    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
  ];
  public static EVENTS: any[] = [
    {name:'added',parameters:'sender,container,index'},
    {name:'ready',parameters:''}
  ];
  public static EVENTNAMES: string[] = [
    'added',
    'ready'
  ];
}
@Component({
  selector: 'transition', 
  inputs: transitionMetaData.PROPERTIES,
  outputs: transitionMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtTransitionComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtTransitionComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,transitionMetaData)}
  public ngOnInit() {this.baseOnInit(transitionMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {this.baseAfterContentInit()}
}