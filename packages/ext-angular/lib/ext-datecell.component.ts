import { Ext_grid_cell_Date } from './Ext/grid/cell/Date';
export class ExtDatecellMetaData extends Ext_grid_cell_Date {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatecellMetaData.PROPERTIES = Ext_grid_cell_Date.getProperties(ExtDatecellMetaData.PROPERTIES);
        ExtDatecellMetaData.EVENTS = Ext_grid_cell_Date.getEvents(ExtDatecellMetaData.EVENTS);
        ExtDatecellMetaData.EVENTS.forEach( (event: any) => {
            ExtDatecellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatecellMetaData.getAll();})();

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
  selector: 'ext-datecell',
  inputs: ExtDatecellMetaData.PROPERTIES,
  outputs: ExtDatecellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatecellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatecellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatecellMetaData.PROPERTIES,
            ExtDatecellMetaData.EVENTS
        )
        this.xtype = 'datecell'
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
