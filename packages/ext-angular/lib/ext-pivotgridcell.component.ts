import { Ext_pivot_cell_Cell } from './Ext/pivot/cell/Cell';
export class ExtPivotgridcellMetaData extends Ext_pivot_cell_Cell {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotgridcellMetaData.PROPERTIES = Ext_pivot_cell_Cell.getProperties(ExtPivotgridcellMetaData.PROPERTIES);
        ExtPivotgridcellMetaData.EVENTS = Ext_pivot_cell_Cell.getEvents(ExtPivotgridcellMetaData.EVENTS);
        ExtPivotgridcellMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotgridcellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotgridcellMetaData.getAll();})();

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
  selector: 'ext-pivotgridcell',
  inputs: ExtPivotgridcellMetaData.PROPERTIES,
  outputs: ExtPivotgridcellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotgridcellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotgridcellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotgridcellMetaData.PROPERTIES,
            ExtPivotgridcellMetaData.EVENTS
        )
        this.xtype = 'pivotgridcell'
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
