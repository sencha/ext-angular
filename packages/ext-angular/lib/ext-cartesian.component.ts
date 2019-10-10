import { Ext_chart_Chart } from './Ext/chart/Chart';
export class ExtCartesianMetaData extends Ext_chart_Chart {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCartesianMetaData.PROPERTIES = Ext_chart_Chart.getProperties(ExtCartesianMetaData.PROPERTIES);
        ExtCartesianMetaData.EVENTS = Ext_chart_Chart.getEvents(ExtCartesianMetaData.EVENTS);
        ExtCartesianMetaData.EVENTS.forEach( (event: any) => {
            ExtCartesianMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCartesianMetaData.getAll();})();

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
  selector: 'ext-cartesian',
  inputs: ExtCartesianMetaData.PROPERTIES,
  outputs: ExtCartesianMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCartesianComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCartesianComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCartesianMetaData.PROPERTIES,
            ExtCartesianMetaData.EVENTS
        )
        this.xtype = 'cartesian'
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
