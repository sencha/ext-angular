import { Ext_pivot_d3_HeatMap } from './Ext/pivot/d3/HeatMap';
export class ExtPivotheatmapMetaData extends Ext_pivot_d3_HeatMap {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotheatmapMetaData.PROPERTIES = Ext_pivot_d3_HeatMap.getProperties(ExtPivotheatmapMetaData.PROPERTIES);
        ExtPivotheatmapMetaData.EVENTS = Ext_pivot_d3_HeatMap.getEvents(ExtPivotheatmapMetaData.EVENTS);
        ExtPivotheatmapMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotheatmapMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotheatmapMetaData.getAll();})();

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
  selector: 'ext-pivotheatmap',
  inputs: ExtPivotheatmapMetaData.PROPERTIES,
  outputs: ExtPivotheatmapMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotheatmapComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotheatmapComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotheatmapMetaData.PROPERTIES,
            ExtPivotheatmapMetaData.EVENTS
        )
        this.xtype = 'pivotheatmap'
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
