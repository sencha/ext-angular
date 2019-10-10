import { Ext_field_FieldGroupContainer } from './Ext/field/FieldGroupContainer';
export class ExtGroupcontainerMetaData extends Ext_field_FieldGroupContainer {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGroupcontainerMetaData.PROPERTIES = Ext_field_FieldGroupContainer.getProperties(ExtGroupcontainerMetaData.PROPERTIES);
        ExtGroupcontainerMetaData.EVENTS = Ext_field_FieldGroupContainer.getEvents(ExtGroupcontainerMetaData.EVENTS);
        ExtGroupcontainerMetaData.EVENTS.forEach( (event: any) => {
            ExtGroupcontainerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGroupcontainerMetaData.getAll();})();

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
  selector: 'ext-groupcontainer',
  inputs: ExtGroupcontainerMetaData.PROPERTIES,
  outputs: ExtGroupcontainerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGroupcontainerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGroupcontainerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGroupcontainerMetaData.PROPERTIES,
            ExtGroupcontainerMetaData.EVENTS
        )
        this.xtype = 'groupcontainer'
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
