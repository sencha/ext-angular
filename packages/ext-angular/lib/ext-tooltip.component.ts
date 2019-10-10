import { Ext_tip_ToolTip } from './Ext/tip/ToolTip';
export class ExtTooltipMetaData extends Ext_tip_ToolTip {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTooltipMetaData.PROPERTIES = Ext_tip_ToolTip.getProperties(ExtTooltipMetaData.PROPERTIES);
        ExtTooltipMetaData.EVENTS = Ext_tip_ToolTip.getEvents(ExtTooltipMetaData.EVENTS);
        ExtTooltipMetaData.EVENTS.forEach( (event: any) => {
            ExtTooltipMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTooltipMetaData.getAll();})();

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
  selector: 'ext-tooltip',
  inputs: ExtTooltipMetaData.PROPERTIES,
  outputs: ExtTooltipMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTooltipComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTooltipComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTooltipMetaData.PROPERTIES,
            ExtTooltipMetaData.EVENTS
        )
        this.xtype = 'tooltip'
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
