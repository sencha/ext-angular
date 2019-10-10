import { Ext_Label } from './Ext/Label';
export class ExtLabelMetaData extends Ext_Label {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtLabelMetaData.PROPERTIES = Ext_Label.getProperties(ExtLabelMetaData.PROPERTIES);
        ExtLabelMetaData.EVENTS = Ext_Label.getEvents(ExtLabelMetaData.EVENTS);
        ExtLabelMetaData.EVENTS.forEach( (event: any) => {
            ExtLabelMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtLabelMetaData.getAll();})();

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
  selector: 'ext-label',
  inputs: ExtLabelMetaData.PROPERTIES,
  outputs: ExtLabelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtLabelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtLabelComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtLabelMetaData.PROPERTIES,
            ExtLabelMetaData.EVENTS
        )
        this.xtype = 'label'
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
