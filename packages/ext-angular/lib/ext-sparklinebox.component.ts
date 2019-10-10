import { Ext_sparkline_Box } from './Ext/sparkline/Box';
export class ExtSparklineboxMetaData extends Ext_sparkline_Box {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSparklineboxMetaData.PROPERTIES = Ext_sparkline_Box.getProperties(ExtSparklineboxMetaData.PROPERTIES);
        ExtSparklineboxMetaData.EVENTS = Ext_sparkline_Box.getEvents(ExtSparklineboxMetaData.EVENTS);
        ExtSparklineboxMetaData.EVENTS.forEach( (event: any) => {
            ExtSparklineboxMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSparklineboxMetaData.getAll();})();

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
  selector: 'ext-sparklinebox',
  inputs: ExtSparklineboxMetaData.PROPERTIES,
  outputs: ExtSparklineboxMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklineboxComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSparklineboxComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSparklineboxMetaData.PROPERTIES,
            ExtSparklineboxMetaData.EVENTS
        )
        this.xtype = 'sparklinebox'
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
