import { Ext_Spacer } from './Ext/Spacer';
export class ExtSpacerMetaData extends Ext_Spacer {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSpacerMetaData.PROPERTIES = Ext_Spacer.getProperties(ExtSpacerMetaData.PROPERTIES);
        ExtSpacerMetaData.EVENTS = Ext_Spacer.getEvents(ExtSpacerMetaData.EVENTS);
        ExtSpacerMetaData.EVENTS.forEach( (event: any) => {
            ExtSpacerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSpacerMetaData.getAll();})();

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
  selector: 'ext-spacer',
  inputs: ExtSpacerMetaData.PROPERTIES,
  outputs: ExtSpacerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSpacerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSpacerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSpacerMetaData.PROPERTIES,
            ExtSpacerMetaData.EVENTS
        )
        this.xtype = 'spacer'
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
