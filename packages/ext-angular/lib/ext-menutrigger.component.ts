import { Ext_field_trigger_Menu } from './Ext/field/trigger/Menu';
export class ExtMenutriggerMetaData extends Ext_field_trigger_Menu {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMenutriggerMetaData.PROPERTIES = Ext_field_trigger_Menu.getProperties(ExtMenutriggerMetaData.PROPERTIES);
        ExtMenutriggerMetaData.EVENTS = Ext_field_trigger_Menu.getEvents(ExtMenutriggerMetaData.EVENTS);
        ExtMenutriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtMenutriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMenutriggerMetaData.getAll();})();

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
  selector: 'ext-menutrigger',
  inputs: ExtMenutriggerMetaData.PROPERTIES,
  outputs: ExtMenutriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMenutriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMenutriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMenutriggerMetaData.PROPERTIES,
            ExtMenutriggerMetaData.EVENTS
        )
        this.xtype = 'menutrigger'
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
