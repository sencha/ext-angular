import { Ext_grid_column_RowNumberer } from './Ext/grid/column/RowNumberer';
export class ExtRownumbererMetaData extends Ext_grid_column_RowNumberer {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRownumbererMetaData.PROPERTIES = Ext_grid_column_RowNumberer.getProperties(ExtRownumbererMetaData.PROPERTIES);
        ExtRownumbererMetaData.EVENTS = Ext_grid_column_RowNumberer.getEvents(ExtRownumbererMetaData.EVENTS);
        ExtRownumbererMetaData.EVENTS.forEach( (event: any) => {
            ExtRownumbererMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRownumbererMetaData.getAll();})();

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
  selector: 'ext-rownumberer',
  inputs: ExtRownumbererMetaData.PROPERTIES,
  outputs: ExtRownumbererMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRownumbererComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRownumbererComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRownumbererMetaData.PROPERTIES,
            ExtRownumbererMetaData.EVENTS
        )
        this.xtype = 'rownumberer'
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
