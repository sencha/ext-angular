import { Ext_dataview_ChipView } from './Ext/dataview/ChipView';
export class ExtChipviewMetaData extends Ext_dataview_ChipView {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtChipviewMetaData.PROPERTIES = Ext_dataview_ChipView.getProperties(ExtChipviewMetaData.PROPERTIES);
        ExtChipviewMetaData.EVENTS = Ext_dataview_ChipView.getEvents(ExtChipviewMetaData.EVENTS);
        ExtChipviewMetaData.EVENTS.forEach( (event: any) => {
            ExtChipviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtChipviewMetaData.getAll();})();

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
  selector: 'ext-chipview',
  inputs: ExtChipviewMetaData.PROPERTIES,
  outputs: ExtChipviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtChipviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtChipviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtChipviewMetaData.PROPERTIES,
            ExtChipviewMetaData.EVENTS
        )
        this.xtype = 'chipview'
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
