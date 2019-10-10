import { Ext_grid_Grid } from './Ext/grid/Grid';
export class ExtGridMetaData extends Ext_grid_Grid {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridMetaData.PROPERTIES = Ext_grid_Grid.getProperties(ExtGridMetaData.PROPERTIES);
        ExtGridMetaData.EVENTS = Ext_grid_Grid.getEvents(ExtGridMetaData.EVENTS);
        ExtGridMetaData.EVENTS.forEach( (event: any) => {
            ExtGridMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridMetaData.getAll();})();

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
  selector: 'ext-grid',
  inputs: ExtGridMetaData.PROPERTIES,
  outputs: ExtGridMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridMetaData.PROPERTIES,
            ExtGridMetaData.EVENTS
        )
        this.xtype = 'grid'
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
