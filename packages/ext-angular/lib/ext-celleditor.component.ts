import { Ext_grid_CellEditor } from './Ext/grid/CellEditor';
export class ExtCelleditorMetaData extends Ext_grid_CellEditor {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCelleditorMetaData.PROPERTIES = Ext_grid_CellEditor.getProperties(ExtCelleditorMetaData.PROPERTIES);
        ExtCelleditorMetaData.EVENTS = Ext_grid_CellEditor.getEvents(ExtCelleditorMetaData.EVENTS);
        ExtCelleditorMetaData.EVENTS.forEach( (event: any) => {
            ExtCelleditorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCelleditorMetaData.getAll();})();

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
  selector: 'ext-celleditor',
  inputs: ExtCelleditorMetaData.PROPERTIES,
  outputs: ExtCelleditorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCelleditorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCelleditorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCelleditorMetaData.PROPERTIES,
            ExtCelleditorMetaData.EVENTS
        )
        this.xtype = 'celleditor'
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
