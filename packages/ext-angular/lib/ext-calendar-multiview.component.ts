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
export class calendar_multiviewMetaData {
  public static XTYPE: string = 'calendar-multiview';
  public static PROPERTIES: string[] = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'compact',
    'compactOptions',
    'defaultView',
    'layout',
    'store',
    'timezoneOffset',
    'value',
    'views',
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
  selector: 'ext-calendar-multiview',
  inputs: calendar_multiviewMetaData.PROPERTIES,
  outputs: calendar_multiviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_multiviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_multiviewComponent extends EngBase implements OnInit, AfterViewInit, OnChanges  {
    constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : EngBase) {
        super(eRef.nativeElement,calendar_multiviewMetaData,hostComponent)
    }

    public ngOnInit() {
        this.baseOnInit(calendar_multiviewMetaData)
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit(calendar_multiviewMetaData)
    }



  //public ngAfterContentInit() {
  //  this.baseAfterContentInit()
  //}

  public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}



   // public ngAfterViewChecked() {
   //   console.log('ngAfterViewChecked')
  //}
}

