import { Ext_grid_cell_Check } from './Ext/grid/cell/Check';
export class ExtCheckcellMetaData extends Ext_grid_cell_Check {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCheckcellMetaData.PROPERTIES = Ext_grid_cell_Check.getProperties(ExtCheckcellMetaData.PROPERTIES);
        ExtCheckcellMetaData.EVENTS = Ext_grid_cell_Check.getEvents(ExtCheckcellMetaData.EVENTS);
        ExtCheckcellMetaData.EVENTS.forEach( (event: any) => {
            ExtCheckcellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCheckcellMetaData.getAll();})();

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
  selector: 'ext-checkcell',
  inputs: ExtCheckcellMetaData.PROPERTIES,
  outputs: ExtCheckcellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCheckcellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCheckcellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCheckcellMetaData.PROPERTIES,
            ExtCheckcellMetaData.EVENTS
        )
        this.xtype = 'checkcell'
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
