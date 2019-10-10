import { Ext_Gadget } from './Ext/Gadget';
export class ExtWidgetMetaData extends Ext_Gadget {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtWidgetMetaData.PROPERTIES = Ext_Gadget.getProperties(ExtWidgetMetaData.PROPERTIES);
        ExtWidgetMetaData.EVENTS = Ext_Gadget.getEvents(ExtWidgetMetaData.EVENTS);
        ExtWidgetMetaData.EVENTS.forEach( (event: any) => {
            ExtWidgetMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtWidgetMetaData.getAll();})();

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
  selector: 'ext-widget',
  inputs: ExtWidgetMetaData.PROPERTIES,
  outputs: ExtWidgetMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtWidgetComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtWidgetComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtWidgetMetaData.PROPERTIES,
            ExtWidgetMetaData.EVENTS
        )
        this.xtype = 'widget'
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
