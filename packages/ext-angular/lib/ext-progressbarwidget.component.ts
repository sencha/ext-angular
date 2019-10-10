import { Ext_ProgressBarWidget } from './Ext/ProgressBarWidget';
export class ExtProgressbarwidgetMetaData extends Ext_ProgressBarWidget {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtProgressbarwidgetMetaData.PROPERTIES = Ext_ProgressBarWidget.getProperties(ExtProgressbarwidgetMetaData.PROPERTIES);
        ExtProgressbarwidgetMetaData.EVENTS = Ext_ProgressBarWidget.getEvents(ExtProgressbarwidgetMetaData.EVENTS);
        ExtProgressbarwidgetMetaData.EVENTS.forEach( (event: any) => {
            ExtProgressbarwidgetMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtProgressbarwidgetMetaData.getAll();})();

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
  selector: 'ext-progressbarwidget',
  inputs: ExtProgressbarwidgetMetaData.PROPERTIES,
  outputs: ExtProgressbarwidgetMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtProgressbarwidgetComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtProgressbarwidgetComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtProgressbarwidgetMetaData.PROPERTIES,
            ExtProgressbarwidgetMetaData.EVENTS
        )
        this.xtype = 'progressbarwidget'
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
