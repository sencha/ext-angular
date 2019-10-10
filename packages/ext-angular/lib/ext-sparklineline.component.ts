import { Ext_sparkline_Line } from './Ext/sparkline/Line';
export class ExtSparklinelineMetaData extends Ext_sparkline_Line {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSparklinelineMetaData.PROPERTIES = Ext_sparkline_Line.getProperties(ExtSparklinelineMetaData.PROPERTIES);
        ExtSparklinelineMetaData.EVENTS = Ext_sparkline_Line.getEvents(ExtSparklinelineMetaData.EVENTS);
        ExtSparklinelineMetaData.EVENTS.forEach( (event: any) => {
            ExtSparklinelineMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSparklinelineMetaData.getAll();})();

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
  selector: 'ext-sparklineline',
  inputs: ExtSparklinelineMetaData.PROPERTIES,
  outputs: ExtSparklinelineMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinelineComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSparklinelineComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSparklinelineMetaData.PROPERTIES,
            ExtSparklinelineMetaData.EVENTS
        )
        this.xtype = 'sparklineline'
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
