import { containerfield } from './containerfield';
export class ExtFieldcontainerMetaData extends containerfield {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFieldcontainerMetaData.PROPERTIES = containerfield.getProperties(ExtFieldcontainerMetaData.PROPERTIES);
        ExtFieldcontainerMetaData.EVENTS = containerfield.getEvents(ExtFieldcontainerMetaData.EVENTS);
        ExtFieldcontainerMetaData.EVENTS.forEach( (event: any) => {
            ExtFieldcontainerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFieldcontainerMetaData.getAll();})();

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
  selector: 'ext-fieldcontainer',
  inputs: ExtFieldcontainerMetaData.PROPERTIES,
  outputs: ExtFieldcontainerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFieldcontainerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFieldcontainerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFieldcontainerMetaData.PROPERTIES,
            ExtFieldcontainerMetaData.EVENTS
        )
        this.xtype = 'fieldcontainer'
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
