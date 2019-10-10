import { Ext_grid_rowedit_Cell } from './Ext/grid/rowedit/Cell';
export class ExtRoweditorcellMetaData extends Ext_grid_rowedit_Cell {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRoweditorcellMetaData.PROPERTIES = Ext_grid_rowedit_Cell.getProperties(ExtRoweditorcellMetaData.PROPERTIES);
        ExtRoweditorcellMetaData.EVENTS = Ext_grid_rowedit_Cell.getEvents(ExtRoweditorcellMetaData.EVENTS);
        ExtRoweditorcellMetaData.EVENTS.forEach( (event: any) => {
            ExtRoweditorcellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRoweditorcellMetaData.getAll();})();

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
  selector: 'ext-roweditorcell',
  inputs: ExtRoweditorcellMetaData.PROPERTIES,
  outputs: ExtRoweditorcellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRoweditorcellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRoweditorcellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRoweditorcellMetaData.PROPERTIES,
            ExtRoweditorcellMetaData.EVENTS
        )
        this.xtype = 'roweditorcell'
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
