import { Ext_sparkline_Discrete } from './Ext/sparkline/Discrete';
export class ExtSparklinediscreteMetaData extends Ext_sparkline_Discrete {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSparklinediscreteMetaData.PROPERTIES = Ext_sparkline_Discrete.getProperties(ExtSparklinediscreteMetaData.PROPERTIES);
        ExtSparklinediscreteMetaData.EVENTS = Ext_sparkline_Discrete.getEvents(ExtSparklinediscreteMetaData.EVENTS);
        ExtSparklinediscreteMetaData.EVENTS.forEach( (event: any) => {
            ExtSparklinediscreteMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSparklinediscreteMetaData.getAll();})();

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
  selector: 'ext-sparklinediscrete',
  inputs: ExtSparklinediscreteMetaData.PROPERTIES,
  outputs: ExtSparklinediscreteMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinediscreteComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSparklinediscreteComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSparklinediscreteMetaData.PROPERTIES,
            ExtSparklinediscreteMetaData.EVENTS
        )
        this.xtype = 'sparklinediscrete'
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
