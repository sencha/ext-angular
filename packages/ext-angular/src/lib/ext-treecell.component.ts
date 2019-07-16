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
export class treecellMetaData {
  public static XTYPE: string = 'treecell';
  public static PROPERTIES: string[] = [
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
  selector: 'treecell', 
  inputs: treecellMetaData.PROPERTIES,
  outputs: treecellMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtTreecellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTreecellComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(
    eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : base) {
      super(eRef.nativeElement,treecellMetaData,hostComponent)
    }
  public ngOnInit() {
    this.baseOnInit(treecellMetaData)
  }
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    //this['ready'].emit(this)
  }
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}

}