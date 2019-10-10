import { Ext_ux_Gauge } from './Ext/ux/Gauge';
export class ExtGaugeMetaData extends Ext_ux_Gauge {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGaugeMetaData.PROPERTIES = Ext_ux_Gauge.getProperties(ExtGaugeMetaData.PROPERTIES);
        ExtGaugeMetaData.EVENTS = Ext_ux_Gauge.getEvents(ExtGaugeMetaData.EVENTS);
        ExtGaugeMetaData.EVENTS.forEach( (event: any) => {
            ExtGaugeMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGaugeMetaData.getAll();})();

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
  selector: 'ext-gauge',
  inputs: ExtGaugeMetaData.PROPERTIES,
  outputs: ExtGaugeMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGaugeComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGaugeComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGaugeMetaData.PROPERTIES,
            ExtGaugeMetaData.EVENTS
        )
        this.xtype = 'gauge'
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
