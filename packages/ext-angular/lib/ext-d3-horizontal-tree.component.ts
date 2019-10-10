import { d3_tree } from './d3/tree';
export class ExtD3_horizontal_treeMetaData extends d3_tree {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_horizontal_treeMetaData.PROPERTIES = d3_tree.getProperties(ExtD3_horizontal_treeMetaData.PROPERTIES);
        ExtD3_horizontal_treeMetaData.EVENTS = d3_tree.getEvents(ExtD3_horizontal_treeMetaData.EVENTS);
        ExtD3_horizontal_treeMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_horizontal_treeMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_horizontal_treeMetaData.getAll();})();

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
  selector: 'ext-d3-horizontal-tree',
  inputs: ExtD3_horizontal_treeMetaData.PROPERTIES,
  outputs: ExtD3_horizontal_treeMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_horizontal_treeComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_horizontal_treeComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_horizontal_treeMetaData.PROPERTIES,
            ExtD3_horizontal_treeMetaData.EVENTS
        )
        this.xtype = 'd3-horizontal-tree'
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
