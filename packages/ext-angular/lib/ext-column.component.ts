import { Ext_grid_column_Template } from './Ext/grid/column/Template';
export class ExtColumnMetaData extends Ext_grid_column_Template {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtColumnMetaData.PROPERTIES = Ext_grid_column_Template.getProperties(ExtColumnMetaData.PROPERTIES);
        ExtColumnMetaData.EVENTS = Ext_grid_column_Template.getEvents(ExtColumnMetaData.EVENTS);
        ExtColumnMetaData.EVENTS.forEach( (event: any) => {
            ExtColumnMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtColumnMetaData.getAll();})();

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
  selector: 'ext-column',
  inputs: ExtColumnMetaData.PROPERTIES,
  outputs: ExtColumnMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtColumnComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtColumnComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtColumnMetaData.PROPERTIES,
            ExtColumnMetaData.EVENTS
        )
        this.xtype = 'column'
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
