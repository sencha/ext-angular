import {
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
  public static PROPERTIESOBJECT: any = {
{sPROPERTIESOBJECT}};
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
  template: '<ng-template #dynamic></ng-template>'
})
export class Ext{capclassname}Component extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,{classname}MetaData)}
  public ngOnInit() {this.baseOnInit({classname}MetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {this.baseAfterContentInit()}
}