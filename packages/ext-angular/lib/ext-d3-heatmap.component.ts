import { Ext_d3_HeatMap } from './Ext/d3/HeatMap';
export class ExtD3_heatmapMetaData extends Ext_d3_HeatMap {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_heatmapMetaData.PROPERTIES = Ext_d3_HeatMap.getProperties(ExtD3_heatmapMetaData.PROPERTIES);
        ExtD3_heatmapMetaData.EVENTS = Ext_d3_HeatMap.getEvents(ExtD3_heatmapMetaData.EVENTS);
        ExtD3_heatmapMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_heatmapMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_heatmapMetaData.getAll();})();

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
  selector: 'ext-d3-heatmap',
  inputs: ExtD3_heatmapMetaData.PROPERTIES,
  outputs: ExtD3_heatmapMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_heatmapComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_heatmapComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_heatmapMetaData.PROPERTIES,
            ExtD3_heatmapMetaData.EVENTS
        )
        this.xtype = 'd3-heatmap'
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
