import { Ext_grid_column_Number } from './Ext/grid/column/Number';
export class ExtNumbercolumnMetaData extends Ext_grid_column_Number {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtNumbercolumnMetaData.PROPERTIES = Ext_grid_column_Number.getProperties(ExtNumbercolumnMetaData.PROPERTIES);
        ExtNumbercolumnMetaData.EVENTS = Ext_grid_column_Number.getEvents(ExtNumbercolumnMetaData.EVENTS);
        ExtNumbercolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtNumbercolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtNumbercolumnMetaData.getAll();})();

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
  selector: 'ext-numbercolumn',
  inputs: ExtNumbercolumnMetaData.PROPERTIES,
  outputs: ExtNumbercolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtNumbercolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtNumbercolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtNumbercolumnMetaData.PROPERTIES,
            ExtNumbercolumnMetaData.EVENTS
        )
        this.xtype = 'numbercolumn'
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
