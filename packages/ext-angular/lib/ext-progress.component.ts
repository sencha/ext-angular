import { Ext_ProgressBarWidget } from './Ext/ProgressBarWidget';
export class ExtProgressMetaData extends Ext_ProgressBarWidget {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtProgressMetaData.PROPERTIES = Ext_ProgressBarWidget.getProperties(ExtProgressMetaData.PROPERTIES);
        ExtProgressMetaData.EVENTS = Ext_ProgressBarWidget.getEvents(ExtProgressMetaData.EVENTS);
        ExtProgressMetaData.EVENTS.forEach( (event: any) => {
            ExtProgressMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtProgressMetaData.getAll();})();

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
  selector: 'ext-progress',
  inputs: ExtProgressMetaData.PROPERTIES,
  outputs: ExtProgressMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtProgressComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtProgressComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtProgressMetaData.PROPERTIES,
            ExtProgressMetaData.EVENTS
        )
        this.xtype = 'progress'
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
