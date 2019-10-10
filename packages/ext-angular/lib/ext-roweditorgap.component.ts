import { Ext_grid_rowedit_Gap } from './Ext/grid/rowedit/Gap';
export class ExtRoweditorgapMetaData extends Ext_grid_rowedit_Gap {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRoweditorgapMetaData.PROPERTIES = Ext_grid_rowedit_Gap.getProperties(ExtRoweditorgapMetaData.PROPERTIES);
        ExtRoweditorgapMetaData.EVENTS = Ext_grid_rowedit_Gap.getEvents(ExtRoweditorgapMetaData.EVENTS);
        ExtRoweditorgapMetaData.EVENTS.forEach( (event: any) => {
            ExtRoweditorgapMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRoweditorgapMetaData.getAll();})();

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
  selector: 'ext-roweditorgap',
  inputs: ExtRoweditorgapMetaData.PROPERTIES,
  outputs: ExtRoweditorgapMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRoweditorgapComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRoweditorgapComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRoweditorgapMetaData.PROPERTIES,
            ExtRoweditorgapMetaData.EVENTS
        )
        this.xtype = 'roweditorgap'
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
