import { Ext_ActionSheet } from './Ext/ActionSheet';
export class ExtActionsheetMetaData extends Ext_ActionSheet {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtActionsheetMetaData.PROPERTIES = Ext_ActionSheet.getProperties(ExtActionsheetMetaData.PROPERTIES);
        ExtActionsheetMetaData.EVENTS = Ext_ActionSheet.getEvents(ExtActionsheetMetaData.EVENTS);
        ExtActionsheetMetaData.EVENTS.forEach( (event: any) => {
            ExtActionsheetMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtActionsheetMetaData.getAll();})();

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
  selector: 'ext-actionsheet',
  inputs: ExtActionsheetMetaData.PROPERTIES,
  outputs: ExtActionsheetMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtActionsheetComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtActionsheetComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtActionsheetMetaData.PROPERTIES,
            ExtActionsheetMetaData.EVENTS
        )
        this.xtype = 'actionsheet'
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
