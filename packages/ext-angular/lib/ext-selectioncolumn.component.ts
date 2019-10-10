import { Ext_grid_column_Selection } from './Ext/grid/column/Selection';
export class ExtSelectioncolumnMetaData extends Ext_grid_column_Selection {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSelectioncolumnMetaData.PROPERTIES = Ext_grid_column_Selection.getProperties(ExtSelectioncolumnMetaData.PROPERTIES);
        ExtSelectioncolumnMetaData.EVENTS = Ext_grid_column_Selection.getEvents(ExtSelectioncolumnMetaData.EVENTS);
        ExtSelectioncolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtSelectioncolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSelectioncolumnMetaData.getAll();})();

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
  selector: 'ext-selectioncolumn',
  inputs: ExtSelectioncolumnMetaData.PROPERTIES,
  outputs: ExtSelectioncolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSelectioncolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSelectioncolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSelectioncolumnMetaData.PROPERTIES,
            ExtSelectioncolumnMetaData.EVENTS
        )
        this.xtype = 'selectioncolumn'
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
