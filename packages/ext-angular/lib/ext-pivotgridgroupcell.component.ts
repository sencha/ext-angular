import { Ext_pivot_cell_Group } from './Ext/pivot/cell/Group';
export class ExtPivotgridgroupcellMetaData extends Ext_pivot_cell_Group {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotgridgroupcellMetaData.PROPERTIES = Ext_pivot_cell_Group.getProperties(ExtPivotgridgroupcellMetaData.PROPERTIES);
        ExtPivotgridgroupcellMetaData.EVENTS = Ext_pivot_cell_Group.getEvents(ExtPivotgridgroupcellMetaData.EVENTS);
        ExtPivotgridgroupcellMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotgridgroupcellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotgridgroupcellMetaData.getAll();})();

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
  selector: 'ext-pivotgridgroupcell',
  inputs: ExtPivotgridgroupcellMetaData.PROPERTIES,
  outputs: ExtPivotgridgroupcellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotgridgroupcellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotgridgroupcellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotgridgroupcellMetaData.PROPERTIES,
            ExtPivotgridgroupcellMetaData.EVENTS
        )
        this.xtype = 'pivotgridgroupcell'
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
