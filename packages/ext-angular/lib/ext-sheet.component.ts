import { Ext_Sheet } from './Ext/Sheet';
export class ExtSheetMetaData extends Ext_Sheet {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSheetMetaData.PROPERTIES = Ext_Sheet.getProperties(ExtSheetMetaData.PROPERTIES);
        ExtSheetMetaData.EVENTS = Ext_Sheet.getEvents(ExtSheetMetaData.EVENTS);
        ExtSheetMetaData.EVENTS.forEach( (event: any) => {
            ExtSheetMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSheetMetaData.getAll();})();

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
  selector: 'ext-sheet',
  inputs: ExtSheetMetaData.PROPERTIES,
  outputs: ExtSheetMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSheetComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSheetComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSheetMetaData.PROPERTIES,
            ExtSheetMetaData.EVENTS
        )
        this.xtype = 'sheet'
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
