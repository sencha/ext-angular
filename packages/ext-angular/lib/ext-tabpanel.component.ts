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
export class tabpanelMetaData {
  public static XTYPE: string = 'tabpanel';
  public static PROPERTIES: string[] = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'activeChildTabIndex',
    'activeItem',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoOrientAnimation',
    'autoSize',
    'axisLock',
    'bind',
    'bodyCls',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inactiveChildTabIndex',
    'innerCls',
    'instanceCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'right',
    'ripple',
    'scroll',
    'scrollable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'stateful',
    'statefulDefaults',
    'stateId',
    'style',
    'tabBar',
    'tabBarPosition',
    'tabIndex',
    'tabRotation',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
{name:'activate',parameters:'newActiveItem,tabpanel,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'tabpanel,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'tabpanel'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'tabpanel,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'deactivate',parameters:'oldActiveItem,tabpanel,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'tabpanel,event'},
{name:'focusenter',parameters:'tabpanel,event'},
{name:'focusleave',parameters:'tabpanel,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'tabpanel,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'tabpanel,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'tabpanel,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'tabpanel'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
'activate',
'activeItemchange',
'add',
'added',
'beforeactiveItemchange',
'beforebottomchange',
'beforecenteredchange',
'beforedisabledchange',
'beforedockedchange',
'beforeheightchange',
'beforehiddenchange',
'beforehide',
'beforeleftchange',
'beforemaxHeightchange',
'beforemaxWidthchange',
'beforeminHeightchange',
'beforeminWidthchange',
'beforeorientationchange',
'beforerightchange',
'beforescrollablechange',
'beforeshow',
'beforetofront',
'beforetopchange',
'beforewidthchange',
'blur',
'bottomchange',
'centeredchange',
'deactivate',
'destroy',
'disabledchange',
'dockedchange',
'erased',
'floatingchange',
'focus',
'focusenter',
'focusleave',
'fullscreen',
'heightchange',
'hiddenchange',
'hide',
'initialize',
'leftchange',
'maxHeightchange',
'maxWidthchange',
'minHeightchange',
'minWidthchange',
'move',
'moved',
'orientationchange',
'painted',
'positionedchange',
'remove',
'removed',
'renderedchange',
'resize',
'rightchange',
'scrollablechange',
'show',
'tofront',
'topchange',
'updatedata',
'widthchange',
'ready'
];
}
@Component({
  selector: 'ext-tabpanel',
  inputs: tabpanelMetaData.PROPERTIES,
  outputs: tabpanelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTabpanelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTabpanelComponent extends EngBase implements OnInit, AfterViewInit, OnChanges  {
    constructor(eRef:ElementRef, @Host() @Optional() @SkipSelf() public hostComponent : EngBase) {
        super(eRef.nativeElement,tabpanelMetaData,hostComponent)
    }

    public ngOnInit() {
        this.baseOnInit(tabpanelMetaData)
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit(tabpanelMetaData)
    }



  //public ngAfterContentInit() {
  //  this.baseAfterContentInit()
  //}

  public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}



   // public ngAfterViewChecked() {
   //   console.log('ngAfterViewChecked')
  //}
}

