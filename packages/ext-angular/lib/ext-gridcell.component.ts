import { Ext_grid_cell_Cell } from './Ext/grid/cell/Cell';
export class ExtGridcellMetaData extends Ext_grid_cell_Cell {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridcellMetaData.PROPERTIES = Ext_grid_cell_Cell.getProperties(ExtGridcellMetaData.PROPERTIES);
        ExtGridcellMetaData.EVENTS = Ext_grid_cell_Cell.getEvents(ExtGridcellMetaData.EVENTS);
        ExtGridcellMetaData.EVENTS.forEach( (event: any) => {
            ExtGridcellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridcellMetaData.getAll();})();

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
  selector: 'ext-gridcell',
  inputs: ExtGridcellMetaData.PROPERTIES,
  outputs: ExtGridcellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridcellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridcellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridcellMetaData.PROPERTIES,
            ExtGridcellMetaData.EVENTS
        )
        this.xtype = 'gridcell'
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
