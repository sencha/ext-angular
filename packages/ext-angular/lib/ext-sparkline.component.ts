import { Ext_sparkline_Base } from './Ext/sparkline/Base';
export class ExtSparklineMetaData extends Ext_sparkline_Base {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSparklineMetaData.PROPERTIES = Ext_sparkline_Base.getProperties(ExtSparklineMetaData.PROPERTIES);
        ExtSparklineMetaData.EVENTS = Ext_sparkline_Base.getEvents(ExtSparklineMetaData.EVENTS);
        ExtSparklineMetaData.EVENTS.forEach( (event: any) => {
            ExtSparklineMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSparklineMetaData.getAll();})();

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
  selector: 'ext-sparkline',
  inputs: ExtSparklineMetaData.PROPERTIES,
  outputs: ExtSparklineMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklineComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSparklineComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSparklineMetaData.PROPERTIES,
            ExtSparklineMetaData.EVENTS
        )
        this.xtype = 'sparkline'
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
