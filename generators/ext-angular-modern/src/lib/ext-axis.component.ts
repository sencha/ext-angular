import {
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class axisMetaData {
  public static XTYPE: string = 'axis';
  public static PROPERTIESOBJECT: any = {
    "adjustByMajorUnit": "Boolean",
    "background": "Object",
    "center": "Array",
    "chart": "Ext.chart.AbstractChart",
    "expandRangeBy": "Number",
    "fields": "Array",
    "floating": "Number/Object",
    "grid": "Object",
    "hidden": "Boolean",
    "id": "String",
    "label": "Object",
    "layout": "Object/Ext.chart.axis.layout.Layout",
    "length": "Number",
    "limits": "Array/Object",
    "linkedTo": "Ext.chart.axis.Axis/String/Number",
    "listeners": "Object",
    "majorTickSteps": "Number",
    "margin": "Number",
    "maximum": "Number",
    "maxZoom": "Number",
    "minimum": "Number",
    "minorTickSteps": "Number",
    "minZoom": "Number",
    "needHighPrecision": "Boolean",
    "position": "String",
    "radius": "Number",
    "reconcileRange": "Boolean",
    "renderer": "Function",
    "rotation": "Number",
    "segmenter": "Object/Ext.chart.axis.segmenter.Segmenter",
    "style": "Object",
    "title": "String/Object",
    "titleMargin": "Number",
    "totalAngle": "any",
    "visibleRange": "Array",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'adjustByMajorUnit',
    'background',
    'center',
    'chart',
    'expandRangeBy',
    'fields',
    'floating',
    'grid',
    'hidden',
    'id',
    'label',
    'layout',
    'length',
    'limits',
    'linkedTo',
    'listeners',
    'majorTickSteps',
    'margin',
    'maximum',
    'maxZoom',
    'minimum',
    'minorTickSteps',
    'minZoom',
    'needHighPrecision',
    'position',
    'radius',
    'reconcileRange',
    'renderer',
    'rotation',
    'segmenter',
    'style',
    'title',
    'titleMargin',
    'totalAngle',
    'visibleRange',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'rangechange',parameters:'axis,range,oldRange'},
		{name:'visiblerangechange',parameters:'axis,visibleRange'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'rangechange',
		'visiblerangechange',
		'ready'
];
}
@Component({
  selector: 'axis', 
  inputs: axisMetaData.PROPERTIES,
  outputs: axisMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtAxisComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtAxisComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,axisMetaData)}
  public ngOnInit() {this.baseOnInit(axisMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {this.baseAfterContentInit()}
}