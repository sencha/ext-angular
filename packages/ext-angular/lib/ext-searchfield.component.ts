import { Ext_form_Search } from './Ext/form/Search';
export class ExtSearchfieldMetaData extends Ext_form_Search {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSearchfieldMetaData.PROPERTIES = Ext_form_Search.getProperties(ExtSearchfieldMetaData.PROPERTIES);
        ExtSearchfieldMetaData.EVENTS = Ext_form_Search.getEvents(ExtSearchfieldMetaData.EVENTS);
        ExtSearchfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtSearchfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSearchfieldMetaData.getAll();})();

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
  selector: 'ext-searchfield',
  inputs: ExtSearchfieldMetaData.PROPERTIES,
  outputs: ExtSearchfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSearchfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSearchfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSearchfieldMetaData.PROPERTIES,
            ExtSearchfieldMetaData.EVENTS
        )
        this.xtype = 'searchfield'
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
