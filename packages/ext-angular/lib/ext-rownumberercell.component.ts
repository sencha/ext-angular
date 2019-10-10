import { Ext_grid_cell_RowNumberer } from './Ext/grid/cell/RowNumberer';
export class ExtRownumberercellMetaData extends Ext_grid_cell_RowNumberer {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRownumberercellMetaData.PROPERTIES = Ext_grid_cell_RowNumberer.getProperties(ExtRownumberercellMetaData.PROPERTIES);
        ExtRownumberercellMetaData.EVENTS = Ext_grid_cell_RowNumberer.getEvents(ExtRownumberercellMetaData.EVENTS);
        ExtRownumberercellMetaData.EVENTS.forEach( (event: any) => {
            ExtRownumberercellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRownumberercellMetaData.getAll();})();

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
  selector: 'ext-rownumberercell',
  inputs: ExtRownumberercellMetaData.PROPERTIES,
  outputs: ExtRownumberercellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRownumberercellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRownumberercellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRownumberercellMetaData.PROPERTIES,
            ExtRownumberercellMetaData.EVENTS
        )
        this.xtype = 'rownumberercell'
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
