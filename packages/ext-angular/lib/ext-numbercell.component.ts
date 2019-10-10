import { Ext_grid_cell_Number } from './Ext/grid/cell/Number';
export class ExtNumbercellMetaData extends Ext_grid_cell_Number {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtNumbercellMetaData.PROPERTIES = Ext_grid_cell_Number.getProperties(ExtNumbercellMetaData.PROPERTIES);
        ExtNumbercellMetaData.EVENTS = Ext_grid_cell_Number.getEvents(ExtNumbercellMetaData.EVENTS);
        ExtNumbercellMetaData.EVENTS.forEach( (event: any) => {
            ExtNumbercellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtNumbercellMetaData.getAll();})();

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
  selector: 'ext-numbercell',
  inputs: ExtNumbercellMetaData.PROPERTIES,
  outputs: ExtNumbercellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtNumbercellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtNumbercellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtNumbercellMetaData.PROPERTIES,
            ExtNumbercellMetaData.EVENTS
        )
        this.xtype = 'numbercell'
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
