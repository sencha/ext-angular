import { Ext_grid_LockedGridRegion } from './Ext/grid/LockedGridRegion';
export class ExtLockedgridregionMetaData extends Ext_grid_LockedGridRegion {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtLockedgridregionMetaData.PROPERTIES = Ext_grid_LockedGridRegion.getProperties(ExtLockedgridregionMetaData.PROPERTIES);
        ExtLockedgridregionMetaData.EVENTS = Ext_grid_LockedGridRegion.getEvents(ExtLockedgridregionMetaData.EVENTS);
        ExtLockedgridregionMetaData.EVENTS.forEach( (event: any) => {
            ExtLockedgridregionMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtLockedgridregionMetaData.getAll();})();

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
  selector: 'ext-lockedgridregion',
  inputs: ExtLockedgridregionMetaData.PROPERTIES,
  outputs: ExtLockedgridregionMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtLockedgridregionComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtLockedgridregionComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtLockedgridregionMetaData.PROPERTIES,
            ExtLockedgridregionMetaData.EVENTS
        )
        this.xtype = 'lockedgridregion'
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
