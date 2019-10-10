import { Ext_grid_column_Check } from './Ext/grid/column/Check';
export class ExtCheckcolumnMetaData extends Ext_grid_column_Check {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCheckcolumnMetaData.PROPERTIES = Ext_grid_column_Check.getProperties(ExtCheckcolumnMetaData.PROPERTIES);
        ExtCheckcolumnMetaData.EVENTS = Ext_grid_column_Check.getEvents(ExtCheckcolumnMetaData.EVENTS);
        ExtCheckcolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtCheckcolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCheckcolumnMetaData.getAll();})();

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
  selector: 'ext-checkcolumn',
  inputs: ExtCheckcolumnMetaData.PROPERTIES,
  outputs: ExtCheckcolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCheckcolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCheckcolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCheckcolumnMetaData.PROPERTIES,
            ExtCheckcolumnMetaData.EVENTS
        )
        this.xtype = 'checkcolumn'
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
