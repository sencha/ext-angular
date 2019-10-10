import { Ext_grid_column_Text } from './Ext/grid/column/Text';
export class ExtTextcolumnMetaData extends Ext_grid_column_Text {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTextcolumnMetaData.PROPERTIES = Ext_grid_column_Text.getProperties(ExtTextcolumnMetaData.PROPERTIES);
        ExtTextcolumnMetaData.EVENTS = Ext_grid_column_Text.getEvents(ExtTextcolumnMetaData.EVENTS);
        ExtTextcolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtTextcolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTextcolumnMetaData.getAll();})();

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
  selector: 'ext-textcolumn',
  inputs: ExtTextcolumnMetaData.PROPERTIES,
  outputs: ExtTextcolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTextcolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTextcolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTextcolumnMetaData.PROPERTIES,
            ExtTextcolumnMetaData.EVENTS
        )
        this.xtype = 'textcolumn'
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
