import { Ext_sparkline_Bar } from './Ext/sparkline/Bar';
export class ExtSparklinebarMetaData extends Ext_sparkline_Bar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSparklinebarMetaData.PROPERTIES = Ext_sparkline_Bar.getProperties(ExtSparklinebarMetaData.PROPERTIES);
        ExtSparklinebarMetaData.EVENTS = Ext_sparkline_Bar.getEvents(ExtSparklinebarMetaData.EVENTS);
        ExtSparklinebarMetaData.EVENTS.forEach( (event: any) => {
            ExtSparklinebarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSparklinebarMetaData.getAll();})();

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
  selector: 'ext-sparklinebar',
  inputs: ExtSparklinebarMetaData.PROPERTIES,
  outputs: ExtSparklinebarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinebarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSparklinebarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSparklinebarMetaData.PROPERTIES,
            ExtSparklinebarMetaData.EVENTS
        )
        this.xtype = 'sparklinebar'
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
