import { Ext_form_Radio } from './Ext/form/Radio';
export class ExtRadiofieldMetaData extends Ext_form_Radio {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRadiofieldMetaData.PROPERTIES = Ext_form_Radio.getProperties(ExtRadiofieldMetaData.PROPERTIES);
        ExtRadiofieldMetaData.EVENTS = Ext_form_Radio.getEvents(ExtRadiofieldMetaData.EVENTS);
        ExtRadiofieldMetaData.EVENTS.forEach( (event: any) => {
            ExtRadiofieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRadiofieldMetaData.getAll();})();

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
  selector: 'ext-radiofield',
  inputs: ExtRadiofieldMetaData.PROPERTIES,
  outputs: ExtRadiofieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRadiofieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRadiofieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRadiofieldMetaData.PROPERTIES,
            ExtRadiofieldMetaData.EVENTS
        )
        this.xtype = 'radiofield'
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
