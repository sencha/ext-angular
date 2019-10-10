import { Ext_pivot_Grid } from './Ext/pivot/Grid';
export class ExtPivotgridMetaData extends Ext_pivot_Grid {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotgridMetaData.PROPERTIES = Ext_pivot_Grid.getProperties(ExtPivotgridMetaData.PROPERTIES);
        ExtPivotgridMetaData.EVENTS = Ext_pivot_Grid.getEvents(ExtPivotgridMetaData.EVENTS);
        ExtPivotgridMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotgridMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotgridMetaData.getAll();})();

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
  selector: 'ext-pivotgrid',
  inputs: ExtPivotgridMetaData.PROPERTIES,
  outputs: ExtPivotgridMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotgridComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotgridComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotgridMetaData.PROPERTIES,
            ExtPivotgridMetaData.EVENTS
        )
        this.xtype = 'pivotgrid'
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
