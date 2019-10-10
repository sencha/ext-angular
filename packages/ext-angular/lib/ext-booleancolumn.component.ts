import { Ext_grid_column_Boolean } from './Ext/grid/column/Boolean';
export class ExtBooleancolumnMetaData extends Ext_grid_column_Boolean {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtBooleancolumnMetaData.PROPERTIES = Ext_grid_column_Boolean.getProperties(ExtBooleancolumnMetaData.PROPERTIES);
        ExtBooleancolumnMetaData.EVENTS = Ext_grid_column_Boolean.getEvents(ExtBooleancolumnMetaData.EVENTS);
        ExtBooleancolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtBooleancolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtBooleancolumnMetaData.getAll();})();

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
  selector: 'ext-booleancolumn',
  inputs: ExtBooleancolumnMetaData.PROPERTIES,
  outputs: ExtBooleancolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtBooleancolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtBooleancolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtBooleancolumnMetaData.PROPERTIES,
            ExtBooleancolumnMetaData.EVENTS
        )
        this.xtype = 'booleancolumn'
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
