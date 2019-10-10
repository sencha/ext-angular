import { Ext_grid_LockedGrid } from './Ext/grid/LockedGrid';
export class ExtLockedgridMetaData extends Ext_grid_LockedGrid {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtLockedgridMetaData.PROPERTIES = Ext_grid_LockedGrid.getProperties(ExtLockedgridMetaData.PROPERTIES);
        ExtLockedgridMetaData.EVENTS = Ext_grid_LockedGrid.getEvents(ExtLockedgridMetaData.EVENTS);
        ExtLockedgridMetaData.EVENTS.forEach( (event: any) => {
            ExtLockedgridMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtLockedgridMetaData.getAll();})();

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
  selector: 'ext-lockedgrid',
  inputs: ExtLockedgridMetaData.PROPERTIES,
  outputs: ExtLockedgridMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtLockedgridComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtLockedgridComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtLockedgridMetaData.PROPERTIES,
            ExtLockedgridMetaData.EVENTS
        )
        this.xtype = 'lockedgrid'
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
