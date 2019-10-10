import { Ext_Indicator } from './Ext/Indicator';
export class ExtIndicatorMetaData extends Ext_Indicator {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtIndicatorMetaData.PROPERTIES = Ext_Indicator.getProperties(ExtIndicatorMetaData.PROPERTIES);
        ExtIndicatorMetaData.EVENTS = Ext_Indicator.getEvents(ExtIndicatorMetaData.EVENTS);
        ExtIndicatorMetaData.EVENTS.forEach( (event: any) => {
            ExtIndicatorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtIndicatorMetaData.getAll();})();

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
  selector: 'ext-indicator',
  inputs: ExtIndicatorMetaData.PROPERTIES,
  outputs: ExtIndicatorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtIndicatorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtIndicatorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtIndicatorMetaData.PROPERTIES,
            ExtIndicatorMetaData.EVENTS
        )
        this.xtype = 'indicator'
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
