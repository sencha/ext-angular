import { Ext_d3_hierarchy_tree_HorizontalTree } from './Ext/d3/hierarchy/tree/HorizontalTree';
export class ExtD3_treeMetaData extends Ext_d3_hierarchy_tree_HorizontalTree {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_treeMetaData.PROPERTIES = Ext_d3_hierarchy_tree_HorizontalTree.getProperties(ExtD3_treeMetaData.PROPERTIES);
        ExtD3_treeMetaData.EVENTS = Ext_d3_hierarchy_tree_HorizontalTree.getEvents(ExtD3_treeMetaData.EVENTS);
        ExtD3_treeMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_treeMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_treeMetaData.getAll();})();

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
  selector: 'ext-d3-tree',
  inputs: ExtD3_treeMetaData.PROPERTIES,
  outputs: ExtD3_treeMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_treeComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_treeComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_treeMetaData.PROPERTIES,
            ExtD3_treeMetaData.EVENTS
        )
        this.xtype = 'd3-tree'
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
