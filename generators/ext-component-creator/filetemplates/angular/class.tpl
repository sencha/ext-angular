import {
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
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
//import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
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
  template: '<ng-template></ng-template>'
})
export class Ext{capclassname}Component extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
  //      private parentContexts: ChildrenOutletContexts,
        private location: ViewContainerRef,
        private resolver: ComponentFactoryResolver, 
        private changeDetector: ChangeDetectorRef,
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef,eRef.nativeElement,{classname}MetaData,hostComponent)
      console.log(location)
    }
  //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,{classname}MetaData,hostComponent)}
  public ngOnInit() {this.baseOnInit({classname}MetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}