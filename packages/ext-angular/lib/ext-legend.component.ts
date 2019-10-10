import { Ext_chart_Legend } from './Ext/chart/Legend';
export class ExtLegendMetaData extends Ext_chart_Legend {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtLegendMetaData.PROPERTIES = Ext_chart_Legend.getProperties(ExtLegendMetaData.PROPERTIES);
        ExtLegendMetaData.EVENTS = Ext_chart_Legend.getEvents(ExtLegendMetaData.EVENTS);
        ExtLegendMetaData.EVENTS.forEach( (event: any) => {
            ExtLegendMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtLegendMetaData.getAll();})();

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
  selector: 'ext-legend',
  inputs: ExtLegendMetaData.PROPERTIES,
  outputs: ExtLegendMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtLegendComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtLegendComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtLegendMetaData.PROPERTIES,
            ExtLegendMetaData.EVENTS
        )
        this.xtype = 'legend'
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
