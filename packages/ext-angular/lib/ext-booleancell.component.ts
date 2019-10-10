import { Ext_grid_cell_Boolean } from './Ext/grid/cell/Boolean';
export class ExtBooleancellMetaData extends Ext_grid_cell_Boolean {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtBooleancellMetaData.PROPERTIES = Ext_grid_cell_Boolean.getProperties(ExtBooleancellMetaData.PROPERTIES);
        ExtBooleancellMetaData.EVENTS = Ext_grid_cell_Boolean.getEvents(ExtBooleancellMetaData.EVENTS);
        ExtBooleancellMetaData.EVENTS.forEach( (event: any) => {
            ExtBooleancellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtBooleancellMetaData.getAll();})();

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
  selector: 'ext-booleancell',
  inputs: ExtBooleancellMetaData.PROPERTIES,
  outputs: ExtBooleancellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtBooleancellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtBooleancellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtBooleancellMetaData.PROPERTIES,
            ExtBooleancellMetaData.EVENTS
        )
        this.xtype = 'booleancell'
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
