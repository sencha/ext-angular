import { Ext_grid_Row } from './Ext/grid/Row';
export class ExtGridrowMetaData extends Ext_grid_Row {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridrowMetaData.PROPERTIES = Ext_grid_Row.getProperties(ExtGridrowMetaData.PROPERTIES);
        ExtGridrowMetaData.EVENTS = Ext_grid_Row.getEvents(ExtGridrowMetaData.EVENTS);
        ExtGridrowMetaData.EVENTS.forEach( (event: any) => {
            ExtGridrowMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridrowMetaData.getAll();})();

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
  selector: 'ext-gridrow',
  inputs: ExtGridrowMetaData.PROPERTIES,
  outputs: ExtGridrowMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridrowComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridrowComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridrowMetaData.PROPERTIES,
            ExtGridrowMetaData.EVENTS
        )
        this.xtype = 'gridrow'
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
