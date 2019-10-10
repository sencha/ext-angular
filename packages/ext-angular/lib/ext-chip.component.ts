import { Ext_Chip } from './Ext/Chip';
export class ExtChipMetaData extends Ext_Chip {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtChipMetaData.PROPERTIES = Ext_Chip.getProperties(ExtChipMetaData.PROPERTIES);
        ExtChipMetaData.EVENTS = Ext_Chip.getEvents(ExtChipMetaData.EVENTS);
        ExtChipMetaData.EVENTS.forEach( (event: any) => {
            ExtChipMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtChipMetaData.getAll();})();

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
  selector: 'ext-chip',
  inputs: ExtChipMetaData.PROPERTIES,
  outputs: ExtChipMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtChipComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtChipComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtChipMetaData.PROPERTIES,
            ExtChipMetaData.EVENTS
        )
        this.xtype = 'chip'
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
