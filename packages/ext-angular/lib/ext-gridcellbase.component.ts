import { Ext_grid_cell_Base } from './Ext/grid/cell/Base';
export class ExtGridcellbaseMetaData extends Ext_grid_cell_Base {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridcellbaseMetaData.PROPERTIES = Ext_grid_cell_Base.getProperties(ExtGridcellbaseMetaData.PROPERTIES);
        ExtGridcellbaseMetaData.EVENTS = Ext_grid_cell_Base.getEvents(ExtGridcellbaseMetaData.EVENTS);
        ExtGridcellbaseMetaData.EVENTS.forEach( (event: any) => {
            ExtGridcellbaseMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridcellbaseMetaData.getAll();})();

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
  selector: 'ext-gridcellbase',
  inputs: ExtGridcellbaseMetaData.PROPERTIES,
  outputs: ExtGridcellbaseMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridcellbaseComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridcellbaseComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridcellbaseMetaData.PROPERTIES,
            ExtGridcellbaseMetaData.EVENTS
        )
        this.xtype = 'gridcellbase'
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
