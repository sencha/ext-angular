import { Ext_sparkline_Pie } from './Ext/sparkline/Pie';
export class ExtSparklinepieMetaData extends Ext_sparkline_Pie {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSparklinepieMetaData.PROPERTIES = Ext_sparkline_Pie.getProperties(ExtSparklinepieMetaData.PROPERTIES);
        ExtSparklinepieMetaData.EVENTS = Ext_sparkline_Pie.getEvents(ExtSparklinepieMetaData.EVENTS);
        ExtSparklinepieMetaData.EVENTS.forEach( (event: any) => {
            ExtSparklinepieMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSparklinepieMetaData.getAll();})();

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
  selector: 'ext-sparklinepie',
  inputs: ExtSparklinepieMetaData.PROPERTIES,
  outputs: ExtSparklinepieMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinepieComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSparklinepieComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSparklinepieMetaData.PROPERTIES,
            ExtSparklinepieMetaData.EVENTS
        )
        this.xtype = 'sparklinepie'
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
