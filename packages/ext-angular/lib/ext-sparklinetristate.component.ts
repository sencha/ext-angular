import { Ext_sparkline_TriState } from './Ext/sparkline/TriState';
export class ExtSparklinetristateMetaData extends Ext_sparkline_TriState {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSparklinetristateMetaData.PROPERTIES = Ext_sparkline_TriState.getProperties(ExtSparklinetristateMetaData.PROPERTIES);
        ExtSparklinetristateMetaData.EVENTS = Ext_sparkline_TriState.getEvents(ExtSparklinetristateMetaData.EVENTS);
        ExtSparklinetristateMetaData.EVENTS.forEach( (event: any) => {
            ExtSparklinetristateMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSparklinetristateMetaData.getAll();})();

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
  selector: 'ext-sparklinetristate',
  inputs: ExtSparklinetristateMetaData.PROPERTIES,
  outputs: ExtSparklinetristateMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinetristateComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSparklinetristateComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSparklinetristateMetaData.PROPERTIES,
            ExtSparklinetristateMetaData.EVENTS
        )
        this.xtype = 'sparklinetristate'
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
