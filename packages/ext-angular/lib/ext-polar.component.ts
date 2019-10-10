import { Ext_chart_PolarChart } from './Ext/chart/PolarChart';
export class ExtPolarMetaData extends Ext_chart_PolarChart {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPolarMetaData.PROPERTIES = Ext_chart_PolarChart.getProperties(ExtPolarMetaData.PROPERTIES);
        ExtPolarMetaData.EVENTS = Ext_chart_PolarChart.getEvents(ExtPolarMetaData.EVENTS);
        ExtPolarMetaData.EVENTS.forEach( (event: any) => {
            ExtPolarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPolarMetaData.getAll();})();

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
  selector: 'ext-polar',
  inputs: ExtPolarMetaData.PROPERTIES,
  outputs: ExtPolarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPolarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPolarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPolarMetaData.PROPERTIES,
            ExtPolarMetaData.EVENTS
        )
        this.xtype = 'polar'
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
