import { Ext_field_Panel } from './Ext/field/Panel';
export class ExtFieldpanelMetaData extends Ext_field_Panel {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFieldpanelMetaData.PROPERTIES = Ext_field_Panel.getProperties(ExtFieldpanelMetaData.PROPERTIES);
        ExtFieldpanelMetaData.EVENTS = Ext_field_Panel.getEvents(ExtFieldpanelMetaData.EVENTS);
        ExtFieldpanelMetaData.EVENTS.forEach( (event: any) => {
            ExtFieldpanelMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFieldpanelMetaData.getAll();})();

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
  selector: 'ext-fieldpanel',
  inputs: ExtFieldpanelMetaData.PROPERTIES,
  outputs: ExtFieldpanelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFieldpanelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFieldpanelComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFieldpanelMetaData.PROPERTIES,
            ExtFieldpanelMetaData.EVENTS
        )
        this.xtype = 'fieldpanel'
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
