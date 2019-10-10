import { Ext_chart_Chart } from './Ext/chart/Chart';
export class ExtChartMetaData extends Ext_chart_Chart {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtChartMetaData.PROPERTIES = Ext_chart_Chart.getProperties(ExtChartMetaData.PROPERTIES);
        ExtChartMetaData.EVENTS = Ext_chart_Chart.getEvents(ExtChartMetaData.EVENTS);
        ExtChartMetaData.EVENTS.forEach( (event: any) => {
            ExtChartMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtChartMetaData.getAll();})();

import { EngBase } from './eng-base';
import {
  Host,
  Optional,
  SkipSelf,
  //Output,
  //OnInit,
  //AfterViewInit,
  //OnChanges,
  Component,
  ElementRef,
  forwardRef,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ext-chart',
  inputs: ExtChartMetaData.PROPERTIES,
  outputs: ExtChartMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtChartComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtChartComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtChartMetaData.PROPERTIES,
            ExtChartMetaData.EVENTS
        )
        this.xtype = 'chart'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes: SimpleChanges) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}
