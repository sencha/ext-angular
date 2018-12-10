import {
    Output,
    OnInit,
    AfterContentInit,
    OnChanges,
    Component,
    ElementRef,
    forwardRef
  } from '@angular/core';
  import { base } from './base';
  export class orgchartMetaData {
    public static XTYPE: string = 'orgchart';
    public static PROPERTIESOBJECT: any = {
      "zIndex": "Number",
      "platformConfig": "Object",
      "responsiveConfig": "Object",
      "fitToParent": "Boolean",
      "config": "Object",
  };
    public static PROPERTIES: string[] = [
      'zIndex',
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
    selector: 'orgchart', 
    inputs: orgchartMetaData.PROPERTIES,
    outputs: orgchartMetaData.EVENTNAMES,
    providers: [{provide: base, useExisting: forwardRef(() => ExtOrgChartComponent)}],
    template: '<ng-template #dynamic></ng-template>'
  })
  export class ExtOrgChartComponent extends base implements OnInit,AfterContentInit,OnChanges {
    constructor(eRef:ElementRef) {super(eRef,orgchartMetaData)}
    public ngOnInit() {this.baseOnInit(orgchartMetaData)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    public ngAfterContentInit() {
      this.baseAfterContentInit()
      this['ready'].emit(this)
      }
  }