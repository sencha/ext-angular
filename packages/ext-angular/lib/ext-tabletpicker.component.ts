import { Ext_picker_Tablet } from './Ext/picker/Tablet';
export class ExtTabletpickerMetaData extends Ext_picker_Tablet {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTabletpickerMetaData.PROPERTIES = Ext_picker_Tablet.getProperties(ExtTabletpickerMetaData.PROPERTIES);
        ExtTabletpickerMetaData.EVENTS = Ext_picker_Tablet.getEvents(ExtTabletpickerMetaData.EVENTS);
        ExtTabletpickerMetaData.EVENTS.forEach( (event: any) => {
            ExtTabletpickerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTabletpickerMetaData.getAll();})();

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
  selector: 'ext-tabletpicker',
  inputs: ExtTabletpickerMetaData.PROPERTIES,
  outputs: ExtTabletpickerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTabletpickerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTabletpickerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTabletpickerMetaData.PROPERTIES,
            ExtTabletpickerMetaData.EVENTS
        )
        this.xtype = 'tabletpicker'
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
