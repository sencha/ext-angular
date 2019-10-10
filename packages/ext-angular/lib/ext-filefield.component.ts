import { Ext_field_File } from './Ext/field/File';
export class ExtFilefieldMetaData extends Ext_field_File {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFilefieldMetaData.PROPERTIES = Ext_field_File.getProperties(ExtFilefieldMetaData.PROPERTIES);
        ExtFilefieldMetaData.EVENTS = Ext_field_File.getEvents(ExtFilefieldMetaData.EVENTS);
        ExtFilefieldMetaData.EVENTS.forEach( (event: any) => {
            ExtFilefieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFilefieldMetaData.getAll();})();

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
  selector: 'ext-filefield',
  inputs: ExtFilefieldMetaData.PROPERTIES,
  outputs: ExtFilefieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFilefieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFilefieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFilefieldMetaData.PROPERTIES,
            ExtFilefieldMetaData.EVENTS
        )
        this.xtype = 'filefield'
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
