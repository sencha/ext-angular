import { Ext_form_Url } from './Ext/form/Url';
export class ExtUrlfieldMetaData extends Ext_form_Url {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtUrlfieldMetaData.PROPERTIES = Ext_form_Url.getProperties(ExtUrlfieldMetaData.PROPERTIES);
        ExtUrlfieldMetaData.EVENTS = Ext_form_Url.getEvents(ExtUrlfieldMetaData.EVENTS);
        ExtUrlfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtUrlfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtUrlfieldMetaData.getAll();})();

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
  selector: 'ext-urlfield',
  inputs: ExtUrlfieldMetaData.PROPERTIES,
  outputs: ExtUrlfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtUrlfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtUrlfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtUrlfieldMetaData.PROPERTIES,
            ExtUrlfieldMetaData.EVENTS
        )
        this.xtype = 'urlfield'
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
