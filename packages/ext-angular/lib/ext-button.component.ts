import { Ext_Button } from './Ext/Button';
export class ExtButtonMetaData extends Ext_Button {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtButtonMetaData.PROPERTIES = Ext_Button.getProperties(ExtButtonMetaData.PROPERTIES);
        ExtButtonMetaData.EVENTS = Ext_Button.getEvents(ExtButtonMetaData.EVENTS);
        ExtButtonMetaData.EVENTS.forEach( (event: any) => {
            ExtButtonMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtButtonMetaData.getAll();})();

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
  selector: 'ext-button',
  inputs: ExtButtonMetaData.PROPERTIES,
  outputs: ExtButtonMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtButtonComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtButtonComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtButtonMetaData.PROPERTIES,
            ExtButtonMetaData.EVENTS
        )
        this.xtype = 'button'
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
