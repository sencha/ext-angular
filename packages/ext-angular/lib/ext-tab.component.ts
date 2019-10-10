import { Ext_Tab } from './Ext/Tab';
export class ExtTabMetaData extends Ext_Tab {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTabMetaData.PROPERTIES = Ext_Tab.getProperties(ExtTabMetaData.PROPERTIES);
        ExtTabMetaData.EVENTS = Ext_Tab.getEvents(ExtTabMetaData.EVENTS);
        ExtTabMetaData.EVENTS.forEach( (event: any) => {
            ExtTabMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTabMetaData.getAll();})();

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
  selector: 'ext-tab',
  inputs: ExtTabMetaData.PROPERTIES,
  outputs: ExtTabMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTabComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTabComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTabMetaData.PROPERTIES,
            ExtTabMetaData.EVENTS
        )
        this.xtype = 'tab'
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
