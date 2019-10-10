import { Ext_grid_column_Template } from './Ext/grid/column/Template';
export class ExtGridcolumnMetaData extends Ext_grid_column_Template {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridcolumnMetaData.PROPERTIES = Ext_grid_column_Template.getProperties(ExtGridcolumnMetaData.PROPERTIES);
        ExtGridcolumnMetaData.EVENTS = Ext_grid_column_Template.getEvents(ExtGridcolumnMetaData.EVENTS);
        ExtGridcolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtGridcolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridcolumnMetaData.getAll();})();

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
  selector: 'ext-gridcolumn',
  inputs: ExtGridcolumnMetaData.PROPERTIES,
  outputs: ExtGridcolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridcolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridcolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridcolumnMetaData.PROPERTIES,
            ExtGridcolumnMetaData.EVENTS
        )
        this.xtype = 'gridcolumn'
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
