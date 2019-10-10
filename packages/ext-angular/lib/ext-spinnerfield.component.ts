import { Ext_form_Spinner } from './Ext/form/Spinner';
export class ExtSpinnerfieldMetaData extends Ext_form_Spinner {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSpinnerfieldMetaData.PROPERTIES = Ext_form_Spinner.getProperties(ExtSpinnerfieldMetaData.PROPERTIES);
        ExtSpinnerfieldMetaData.EVENTS = Ext_form_Spinner.getEvents(ExtSpinnerfieldMetaData.EVENTS);
        ExtSpinnerfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtSpinnerfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSpinnerfieldMetaData.getAll();})();

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
  selector: 'ext-spinnerfield',
  inputs: ExtSpinnerfieldMetaData.PROPERTIES,
  outputs: ExtSpinnerfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSpinnerfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSpinnerfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSpinnerfieldMetaData.PROPERTIES,
            ExtSpinnerfieldMetaData.EVENTS
        )
        this.xtype = 'spinnerfield'
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
