import { Ext_field_FileButton } from './Ext/field/FileButton';
export class ExtFilebuttonMetaData extends Ext_field_FileButton {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFilebuttonMetaData.PROPERTIES = Ext_field_FileButton.getProperties(ExtFilebuttonMetaData.PROPERTIES);
        ExtFilebuttonMetaData.EVENTS = Ext_field_FileButton.getEvents(ExtFilebuttonMetaData.EVENTS);
        ExtFilebuttonMetaData.EVENTS.forEach( (event: any) => {
            ExtFilebuttonMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFilebuttonMetaData.getAll();})();

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
  selector: 'ext-filebutton',
  inputs: ExtFilebuttonMetaData.PROPERTIES,
  outputs: ExtFilebuttonMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFilebuttonComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFilebuttonComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFilebuttonMetaData.PROPERTIES,
            ExtFilebuttonMetaData.EVENTS
        )
        this.xtype = 'filebutton'
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
