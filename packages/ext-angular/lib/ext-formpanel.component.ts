import { Ext_form_FormPanel } from './Ext/form/FormPanel';
export class ExtFormpanelMetaData extends Ext_form_FormPanel {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFormpanelMetaData.PROPERTIES = Ext_form_FormPanel.getProperties(ExtFormpanelMetaData.PROPERTIES);
        ExtFormpanelMetaData.EVENTS = Ext_form_FormPanel.getEvents(ExtFormpanelMetaData.EVENTS);
        ExtFormpanelMetaData.EVENTS.forEach( (event: any) => {
            ExtFormpanelMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFormpanelMetaData.getAll();})();

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
  selector: 'ext-formpanel',
  inputs: ExtFormpanelMetaData.PROPERTIES,
  outputs: ExtFormpanelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFormpanelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFormpanelComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFormpanelMetaData.PROPERTIES,
            ExtFormpanelMetaData.EVENTS
        )
        this.xtype = 'formpanel'
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
