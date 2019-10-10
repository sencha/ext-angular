import { Ext_grid_column_Date } from './Ext/grid/column/Date';
export class ExtDatecolumnMetaData extends Ext_grid_column_Date {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatecolumnMetaData.PROPERTIES = Ext_grid_column_Date.getProperties(ExtDatecolumnMetaData.PROPERTIES);
        ExtDatecolumnMetaData.EVENTS = Ext_grid_column_Date.getEvents(ExtDatecolumnMetaData.EVENTS);
        ExtDatecolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtDatecolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatecolumnMetaData.getAll();})();

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
  selector: 'ext-datecolumn',
  inputs: ExtDatecolumnMetaData.PROPERTIES,
  outputs: ExtDatecolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatecolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatecolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatecolumnMetaData.PROPERTIES,
            ExtDatecolumnMetaData.EVENTS
        )
        this.xtype = 'datecolumn'
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
