import { Ext_form_TextArea } from './Ext/form/TextArea';
export class ExtTextareafieldMetaData extends Ext_form_TextArea {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTextareafieldMetaData.PROPERTIES = Ext_form_TextArea.getProperties(ExtTextareafieldMetaData.PROPERTIES);
        ExtTextareafieldMetaData.EVENTS = Ext_form_TextArea.getEvents(ExtTextareafieldMetaData.EVENTS);
        ExtTextareafieldMetaData.EVENTS.forEach( (event: any) => {
            ExtTextareafieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTextareafieldMetaData.getAll();})();

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
  selector: 'ext-textareafield',
  inputs: ExtTextareafieldMetaData.PROPERTIES,
  outputs: ExtTextareafieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTextareafieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTextareafieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTextareafieldMetaData.PROPERTIES,
            ExtTextareafieldMetaData.EVENTS
        )
        this.xtype = 'textareafield'
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
