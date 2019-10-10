import { Ext_d3_hierarchy_partition_Sunburst } from './Ext/d3/hierarchy/partition/Sunburst';
export class ExtD3_sunburstMetaData extends Ext_d3_hierarchy_partition_Sunburst {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_sunburstMetaData.PROPERTIES = Ext_d3_hierarchy_partition_Sunburst.getProperties(ExtD3_sunburstMetaData.PROPERTIES);
        ExtD3_sunburstMetaData.EVENTS = Ext_d3_hierarchy_partition_Sunburst.getEvents(ExtD3_sunburstMetaData.EVENTS);
        ExtD3_sunburstMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_sunburstMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_sunburstMetaData.getAll();})();

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
  selector: 'ext-d3-sunburst',
  inputs: ExtD3_sunburstMetaData.PROPERTIES,
  outputs: ExtD3_sunburstMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_sunburstComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_sunburstComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_sunburstMetaData.PROPERTIES,
            ExtD3_sunburstMetaData.EVENTS
        )
        this.xtype = 'd3-sunburst'
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
