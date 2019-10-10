import { Ext_d3_hierarchy_partition_Partition } from './Ext/d3/hierarchy/partition/Partition';
export class ExtD3_partitionMetaData extends Ext_d3_hierarchy_partition_Partition {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_partitionMetaData.PROPERTIES = Ext_d3_hierarchy_partition_Partition.getProperties(ExtD3_partitionMetaData.PROPERTIES);
        ExtD3_partitionMetaData.EVENTS = Ext_d3_hierarchy_partition_Partition.getEvents(ExtD3_partitionMetaData.EVENTS);
        ExtD3_partitionMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_partitionMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_partitionMetaData.getAll();})();

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
  selector: 'ext-d3-partition',
  inputs: ExtD3_partitionMetaData.PROPERTIES,
  outputs: ExtD3_partitionMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_partitionComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_partitionComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_partitionMetaData.PROPERTIES,
            ExtD3_partitionMetaData.EVENTS
        )
        this.xtype = 'd3-partition'
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
