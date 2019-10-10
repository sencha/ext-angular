import { Ext_form_Text } from './Ext/form/Text';
export class ExtTextfieldMetaData extends Ext_form_Text {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTextfieldMetaData.PROPERTIES = Ext_form_Text.getProperties(ExtTextfieldMetaData.PROPERTIES);
        ExtTextfieldMetaData.EVENTS = Ext_form_Text.getEvents(ExtTextfieldMetaData.EVENTS);
        ExtTextfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtTextfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTextfieldMetaData.getAll();})();

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
  selector: 'ext-textfield',
  inputs: ExtTextfieldMetaData.PROPERTIES,
  outputs: ExtTextfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTextfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTextfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTextfieldMetaData.PROPERTIES,
            ExtTextfieldMetaData.EVENTS
        )
        this.xtype = 'textfield'
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
