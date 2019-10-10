import { Ext_pivot_d3_Container } from './Ext/pivot/d3/Container';
export class ExtPivotd3containerMetaData extends Ext_pivot_d3_Container {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotd3containerMetaData.PROPERTIES = Ext_pivot_d3_Container.getProperties(ExtPivotd3containerMetaData.PROPERTIES);
        ExtPivotd3containerMetaData.EVENTS = Ext_pivot_d3_Container.getEvents(ExtPivotd3containerMetaData.EVENTS);
        ExtPivotd3containerMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotd3containerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotd3containerMetaData.getAll();})();

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
  selector: 'ext-pivotd3container',
  inputs: ExtPivotd3containerMetaData.PROPERTIES,
  outputs: ExtPivotd3containerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotd3containerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotd3containerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotd3containerMetaData.PROPERTIES,
            ExtPivotd3containerMetaData.EVENTS
        )
        this.xtype = 'pivotd3container'
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
