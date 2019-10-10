import { Ext_form_Toggle } from './Ext/form/Toggle';
export class ExtTogglefieldMetaData extends Ext_form_Toggle {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTogglefieldMetaData.PROPERTIES = Ext_form_Toggle.getProperties(ExtTogglefieldMetaData.PROPERTIES);
        ExtTogglefieldMetaData.EVENTS = Ext_form_Toggle.getEvents(ExtTogglefieldMetaData.EVENTS);
        ExtTogglefieldMetaData.EVENTS.forEach( (event: any) => {
            ExtTogglefieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTogglefieldMetaData.getAll();})();

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
  selector: 'ext-togglefield',
  inputs: ExtTogglefieldMetaData.PROPERTIES,
  outputs: ExtTogglefieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTogglefieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTogglefieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTogglefieldMetaData.PROPERTIES,
            ExtTogglefieldMetaData.EVENTS
        )
        this.xtype = 'togglefield'
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
