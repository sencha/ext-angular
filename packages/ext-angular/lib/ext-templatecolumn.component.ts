import { Ext_grid_column_Template } from './Ext/grid/column/Template';
export class ExtTemplatecolumnMetaData extends Ext_grid_column_Template {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTemplatecolumnMetaData.PROPERTIES = Ext_grid_column_Template.getProperties(ExtTemplatecolumnMetaData.PROPERTIES);
        ExtTemplatecolumnMetaData.EVENTS = Ext_grid_column_Template.getEvents(ExtTemplatecolumnMetaData.EVENTS);
        ExtTemplatecolumnMetaData.EVENTS.forEach( (event: any) => {
            ExtTemplatecolumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTemplatecolumnMetaData.getAll();})();

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
  selector: 'ext-templatecolumn',
  inputs: ExtTemplatecolumnMetaData.PROPERTIES,
  outputs: ExtTemplatecolumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTemplatecolumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTemplatecolumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTemplatecolumnMetaData.PROPERTIES,
            ExtTemplatecolumnMetaData.EVENTS
        )
        this.xtype = 'templatecolumn'
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
