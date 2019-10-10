import { Ext_grid_SummaryRow } from './Ext/grid/SummaryRow';
export class ExtGridsummaryrowMetaData extends Ext_grid_SummaryRow {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridsummaryrowMetaData.PROPERTIES = Ext_grid_SummaryRow.getProperties(ExtGridsummaryrowMetaData.PROPERTIES);
        ExtGridsummaryrowMetaData.EVENTS = Ext_grid_SummaryRow.getEvents(ExtGridsummaryrowMetaData.EVENTS);
        ExtGridsummaryrowMetaData.EVENTS.forEach( (event: any) => {
            ExtGridsummaryrowMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridsummaryrowMetaData.getAll();})();

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
  selector: 'ext-gridsummaryrow',
  inputs: ExtGridsummaryrowMetaData.PROPERTIES,
  outputs: ExtGridsummaryrowMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridsummaryrowComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridsummaryrowComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridsummaryrowMetaData.PROPERTIES,
            ExtGridsummaryrowMetaData.EVENTS
        )
        this.xtype = 'gridsummaryrow'
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
