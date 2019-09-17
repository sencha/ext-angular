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
export class colorselectorMetaData {
  public static XTYPE: string = 'colorselector';
  public static PROPERTIES: string[] = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
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
  selector: 'ext-colorselector',
  inputs: colorselectorMetaData.PROPERTIES,
  outputs: colorselectorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtColorselectorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtColorselectorComponent extends EngBase implements OnInit, AfterViewInit, OnChanges  {
    constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : EngBase) {
        super(eRef.nativeElement,colorselectorMetaData,hostComponent)
    }

    public ngOnInit() {
        this.baseOnInit(colorselectorMetaData)
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit(colorselectorMetaData)
    }



  //public ngAfterContentInit() {
  //  this.baseAfterContentInit()
  //}

  public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}



   // public ngAfterViewChecked() {
   //   console.log('ngAfterViewChecked')
  //}
}

