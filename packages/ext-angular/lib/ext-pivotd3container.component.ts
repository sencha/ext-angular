//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';

declare var Ext: any
import {
  Injectable,
  Host,
  Optional,
  SkipSelf,
  Output,
  OnInit,
  AfterViewInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef,
  SimpleChanges
} from '@angular/core';
import { EngBase } from './eng-base';
export class pivotd3containerMetaData {
  public static XTYPE: string = 'pivotd3container';
  public static PROPERTIES: string[] = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'configurator',
    'drawing',
    'matrix',
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
  selector: 'ext-pivotd3container',
  inputs: pivotd3containerMetaData.PROPERTIES,
  outputs: pivotd3containerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotd3containerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotd3containerComponent extends EngBase implements OnInit, AfterViewInit, OnChanges  {
    constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : EngBase) {
        super(eRef.nativeElement,pivotd3containerMetaData,hostComponent)
    }

    public ngOnInit() {
        this.baseOnInit(pivotd3containerMetaData)
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit(pivotd3containerMetaData)
    }



  //public ngAfterContentInit() {
  //  this.baseAfterContentInit()
  //}

  public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}



   // public ngAfterViewChecked() {
   //   console.log('ngAfterViewChecked')
  //}
}

