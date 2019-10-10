import { Ext_form_Hidden } from './Ext/form/Hidden';
export class ExtHiddenfieldMetaData extends Ext_form_Hidden {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtHiddenfieldMetaData.PROPERTIES = Ext_form_Hidden.getProperties(ExtHiddenfieldMetaData.PROPERTIES);
        ExtHiddenfieldMetaData.EVENTS = Ext_form_Hidden.getEvents(ExtHiddenfieldMetaData.EVENTS);
        ExtHiddenfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtHiddenfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtHiddenfieldMetaData.getAll();})();

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
  selector: 'ext-hiddenfield',
  inputs: ExtHiddenfieldMetaData.PROPERTIES,
  outputs: ExtHiddenfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtHiddenfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtHiddenfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtHiddenfieldMetaData.PROPERTIES,
            ExtHiddenfieldMetaData.EVENTS
        )
        this.xtype = 'hiddenfield'
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
