import { Ext_d3_hierarchy_TreeMap } from './Ext/d3/hierarchy/TreeMap';
export class ExtD3_treemapMetaData extends Ext_d3_hierarchy_TreeMap {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_treemapMetaData.PROPERTIES = Ext_d3_hierarchy_TreeMap.getProperties(ExtD3_treemapMetaData.PROPERTIES);
        ExtD3_treemapMetaData.EVENTS = Ext_d3_hierarchy_TreeMap.getEvents(ExtD3_treemapMetaData.EVENTS);
        ExtD3_treemapMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_treemapMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_treemapMetaData.getAll();})();

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
  selector: 'ext-d3-treemap',
  inputs: ExtD3_treemapMetaData.PROPERTIES,
  outputs: ExtD3_treemapMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_treemapComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_treemapComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_treemapMetaData.PROPERTIES,
            ExtD3_treemapMetaData.EVENTS
        )
        this.xtype = 'd3-treemap'
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
