import { Ext_grid_column_Drag } from './Ext/grid/column/Drag';
export class ExtDragcolumnMetaData extends Ext_grid_column_Drag {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDragcolumnMetaData.PROPERTIES = Ext_grid_column_Drag.getProperties(ExtDragcolumnMetaData.PROPERTIES);
        ExtDragcolumnMetaData.EVENTS = Ext_grid_column_Drag.getEvents(ExtDragcolumnMetaData.EVENTS);
        ExtDragcolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtDragcolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDragcolumnMetaData.getAll();})();

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
  selector: 'ext-dragcolumn',
  inputs: ExtDragcolumnMetaData.PROPERTIES,
  outputs: ExtDragcolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDragcolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDragcolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDragcolumnMetaData.PROPERTIES,
            ExtDragcolumnMetaData.EVENTS
        )
        this.xtype = 'dragcolumn'
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
