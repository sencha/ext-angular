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
export class {classname}MetaData {
  public static XTYPE: string = '{xtype}';
  public static PROPERTIES: string[] = [
{sPROPERTIES}];
  public static EVENTS: any[] = [
{sEVENTS}];
  public static EVENTNAMES: string[] = [
{sEVENTNAMES}];
}
@Component({
  selector: '{xtype}', 
  inputs: {classname}MetaData.PROPERTIES,
  outputs: {classname}MetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => Ext{capclassname}Component)}],
  template: '<ng-template></ng-template>'
})
export class Ext{capclassname}Component extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,{classname}MetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit({classname}MetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}