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
export class revealtriggerMetaData {
  public static XTYPE: string = 'revealtrigger';
  public static PROPERTIES: string[] = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'alignSelf',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'disabled',
    'field',
    'flex',
    'floated',
    'focusCls',
    'focusOnTap',
    'group',
    'handler',
    'height',
    'hidden',
    'hideMode',
    'iconCls',
    'id',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'reference',
    'relative',
    'renderTo',
    'repeat',
    'ripple',
    'scope',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'side',
    'style',
    'toFrontOnShow',
    'touchAction',
    'translatable',
    'triggers',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'x',
    'y',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'revealtrigger'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'revealtrigger,event'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'revealtrigger,event'},
{name:'focusenter',parameters:'revealtrigger,event'},
{name:'focusleave',parameters:'revealtrigger,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'revealtrigger'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
'beforedisabledchange',
'beforeheightchange',
'beforehiddenchange',
'beforetofront',
'beforewidthchange',
'blur',
'disabledchange',
'focus',
'focusenter',
'focusleave',
'heightchange',
'hiddenchange',
'tofront',
'widthchange',
'ready'
];
}
@Component({
  selector: 'ext-revealtrigger',
  inputs: revealtriggerMetaData.PROPERTIES,
  outputs: revealtriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRevealtriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRevealtriggerComponent extends EngBase implements OnInit, AfterViewInit, OnChanges  {
    constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : EngBase) {
        super(eRef.nativeElement,revealtriggerMetaData,hostComponent)
    }

    public ngOnInit() {
        this.baseOnInit(revealtriggerMetaData)
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit(revealtriggerMetaData)
    }



  //public ngAfterContentInit() {
  //  this.baseAfterContentInit()
  //}

  public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}



   // public ngAfterViewChecked() {
   //   console.log('ngAfterViewChecked')
  //}
}

