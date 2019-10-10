import { Ext_grid_RowBody } from './Ext/grid/RowBody';
export class ExtRowbodyMetaData extends Ext_grid_RowBody {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRowbodyMetaData.PROPERTIES = Ext_grid_RowBody.getProperties(ExtRowbodyMetaData.PROPERTIES);
        ExtRowbodyMetaData.EVENTS = Ext_grid_RowBody.getEvents(ExtRowbodyMetaData.EVENTS);
        ExtRowbodyMetaData.EVENTS.forEach( (event: any) => {
            ExtRowbodyMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRowbodyMetaData.getAll();})();

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
  selector: 'ext-rowbody',
  inputs: ExtRowbodyMetaData.PROPERTIES,
  outputs: ExtRowbodyMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRowbodyComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRowbodyComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRowbodyMetaData.PROPERTIES,
            ExtRowbodyMetaData.EVENTS
        )
        this.xtype = 'rowbody'
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
