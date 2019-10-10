import { Ext_form_Radio } from './Ext/form/Radio';
export class ExtRadioMetaData extends Ext_form_Radio {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRadioMetaData.PROPERTIES = Ext_form_Radio.getProperties(ExtRadioMetaData.PROPERTIES);
        ExtRadioMetaData.EVENTS = Ext_form_Radio.getEvents(ExtRadioMetaData.EVENTS);
        ExtRadioMetaData.EVENTS.forEach( (event: any) => {
            ExtRadioMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRadioMetaData.getAll();})();

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
  selector: 'ext-radio',
  inputs: ExtRadioMetaData.PROPERTIES,
  outputs: ExtRadioMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRadioComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRadioComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRadioMetaData.PROPERTIES,
            ExtRadioMetaData.EVENTS
        )
        this.xtype = 'radio'
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
