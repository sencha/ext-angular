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
export class treecellMetaData {
  public static XTYPE: string = 'treecell';
  public static PROPERTIES: string[] = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'align',
    'alignSelf',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoCheckChildren',
    'bind',
    'bodyCls',
    'bodyStyle',
    'border',
    'cellCls',
    'checkable',
    'checkableField',
    'checkedField',
    'checkOnTriTap',
    'cls',
    'column',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'defaultToolWeights',
    'disabled',
    'enableTri',
    'encodeHtml',
    'flex',
    'floated',
    'focusCls',
    'formatter',
    'height',
    'hidden',
    'hideMode',
    'iconCls',
    'iconClsProperty',
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
    'rawValue',
    'record',
    'reference',
    'relative',
    'renderer',
    'renderTo',
    'ripple',
    'scope',
    'selectable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'style',
    'text',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'touchAction',
    'tpl',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'width',
    'x',
    'y',
    'zeroValue',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
{name:'beforecheckchange',parameters:'treecell,checked,current,record,e'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforetofront',parameters:'treecell'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'treecell,event'},
{name:'checkchange',parameters:'treecell,checked,record,e'},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'focus',parameters:'treecell,event'},
{name:'focusenter',parameters:'treecell,event'},
{name:'focusleave',parameters:'treecell,event'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'tofront',parameters:'treecell'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
'beforecheckchange',
'beforedisabledchange',
'beforeheightchange',
'beforehiddenchange',
'beforetofront',
'beforewidthchange',
'blur',
'checkchange',
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
  selector: 'ext-treecell',
  inputs: treecellMetaData.PROPERTIES,
  outputs: treecellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreecellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTreecellComponent extends EngBase implements OnInit, AfterViewInit, OnChanges  {
    constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : EngBase) {
        super(eRef.nativeElement,treecellMetaData,hostComponent)
    }

    public ngOnInit() {
        this.baseOnInit(treecellMetaData)
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit(treecellMetaData)
    }



  //public ngAfterContentInit() {
  //  this.baseAfterContentInit()
  //}

  public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}



   // public ngAfterViewChecked() {
   //   console.log('ngAfterViewChecked')
  //}
}

