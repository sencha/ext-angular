import { Ext_grid_cell_Text } from './Ext/grid/cell/Text';
export class ExtTextcellMetaData extends Ext_grid_cell_Text {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTextcellMetaData.PROPERTIES = Ext_grid_cell_Text.getProperties(ExtTextcellMetaData.PROPERTIES);
        ExtTextcellMetaData.EVENTS = Ext_grid_cell_Text.getEvents(ExtTextcellMetaData.EVENTS);
        ExtTextcellMetaData.EVENTS.forEach( (event: any) => {
            ExtTextcellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTextcellMetaData.getAll();})();

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
  selector: 'ext-textcell',
  inputs: ExtTextcellMetaData.PROPERTIES,
  outputs: ExtTextcellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTextcellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTextcellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTextcellMetaData.PROPERTIES,
            ExtTextcellMetaData.EVENTS
        )
        this.xtype = 'textcell'
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
