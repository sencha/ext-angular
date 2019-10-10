import { Ext_grid_RowHeader } from './Ext/grid/RowHeader';
export class ExtRowheaderMetaData extends Ext_grid_RowHeader {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRowheaderMetaData.PROPERTIES = Ext_grid_RowHeader.getProperties(ExtRowheaderMetaData.PROPERTIES);
        ExtRowheaderMetaData.EVENTS = Ext_grid_RowHeader.getEvents(ExtRowheaderMetaData.EVENTS);
        ExtRowheaderMetaData.EVENTS.forEach( (event: any) => {
            ExtRowheaderMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRowheaderMetaData.getAll();})();

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
  selector: 'ext-rowheader',
  inputs: ExtRowheaderMetaData.PROPERTIES,
  outputs: ExtRowheaderMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRowheaderComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRowheaderComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRowheaderMetaData.PROPERTIES,
            ExtRowheaderMetaData.EVENTS
        )
        this.xtype = 'rowheader'
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
