import { Ext_grid_column_Tree } from './Ext/grid/column/Tree';
export class ExtTreecolumnMetaData extends Ext_grid_column_Tree {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTreecolumnMetaData.PROPERTIES = Ext_grid_column_Tree.getProperties(ExtTreecolumnMetaData.PROPERTIES);
        ExtTreecolumnMetaData.EVENTS = Ext_grid_column_Tree.getEvents(ExtTreecolumnMetaData.EVENTS);
        ExtTreecolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtTreecolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTreecolumnMetaData.getAll();})();

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
  selector: 'ext-treecolumn',
  inputs: ExtTreecolumnMetaData.PROPERTIES,
  outputs: ExtTreecolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreecolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTreecolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTreecolumnMetaData.PROPERTIES,
            ExtTreecolumnMetaData.EVENTS
        )
        this.xtype = 'treecolumn'
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
