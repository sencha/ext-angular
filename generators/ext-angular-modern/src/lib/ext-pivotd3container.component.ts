import {
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class pivotd3containerMetaData {
  public static XTYPE: string = 'pivotd3container';
  public static PROPERTIESOBJECT: any = {
    "configurator": "Ext.pivot.plugin.Configurator",
    "drawing": "Ext.Component",
    "matrix": "Ext.pivot.matrix.Base",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'configurator',
    'drawing',
    'matrix',
    'platformConfig',
    'responsiveConfig',
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
  selector: 'pivotd3container', 
  inputs: pivotd3containerMetaData.PROPERTIES,
  outputs: pivotd3containerMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtPivotd3containerComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtPivotd3containerComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,pivotd3containerMetaData)}
  public ngOnInit() {this.baseOnInit(pivotd3containerMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {this.baseAfterContentInit()}
}