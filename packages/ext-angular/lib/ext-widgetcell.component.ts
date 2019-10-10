import { Ext_grid_cell_Widget } from './Ext/grid/cell/Widget';
export class ExtWidgetcellMetaData extends Ext_grid_cell_Widget {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtWidgetcellMetaData.PROPERTIES = Ext_grid_cell_Widget.getProperties(ExtWidgetcellMetaData.PROPERTIES);
        ExtWidgetcellMetaData.EVENTS = Ext_grid_cell_Widget.getEvents(ExtWidgetcellMetaData.EVENTS);
        ExtWidgetcellMetaData.EVENTS.forEach( (event: any) => {
            ExtWidgetcellMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtWidgetcellMetaData.getAll();})();

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
  selector: 'ext-widgetcell',
  inputs: ExtWidgetcellMetaData.PROPERTIES,
  outputs: ExtWidgetcellMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtWidgetcellComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtWidgetcellComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtWidgetcellMetaData.PROPERTIES,
            ExtWidgetcellMetaData.EVENTS
        )
        this.xtype = 'widgetcell'
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
