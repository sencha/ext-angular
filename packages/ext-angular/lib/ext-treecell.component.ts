import { Ext_grid_cell_Tree } from './Ext/grid/cell/Tree';
export class ExtTreecellMetaData extends Ext_grid_cell_Tree {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTreecellMetaData.PROPERTIES = Ext_grid_cell_Tree.getProperties(ExtTreecellMetaData.PROPERTIES);
        ExtTreecellMetaData.EVENTS = Ext_grid_cell_Tree.getEvents(ExtTreecellMetaData.EVENTS);
        ExtTreecellMetaData.EVENTS.forEach( (event: any) => {
            ExtTreecellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTreecellMetaData.getAll();})();

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
  selector: 'ext-treecell',
  inputs: ExtTreecellMetaData.PROPERTIES,
  outputs: ExtTreecellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreecellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTreecellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTreecellMetaData.PROPERTIES,
            ExtTreecellMetaData.EVENTS
        )
        this.xtype = 'treecell'
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
