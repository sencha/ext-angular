import { Ext_chart_SpaceFillingChart } from './Ext/chart/SpaceFillingChart';
export class ExtSpacefillingMetaData extends Ext_chart_SpaceFillingChart {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSpacefillingMetaData.PROPERTIES = Ext_chart_SpaceFillingChart.getProperties(ExtSpacefillingMetaData.PROPERTIES);
        ExtSpacefillingMetaData.EVENTS = Ext_chart_SpaceFillingChart.getEvents(ExtSpacefillingMetaData.EVENTS);
        ExtSpacefillingMetaData.EVENTS.forEach( (event: any) => {
            ExtSpacefillingMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSpacefillingMetaData.getAll();})();

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
  selector: 'ext-spacefilling',
  inputs: ExtSpacefillingMetaData.PROPERTIES,
  outputs: ExtSpacefillingMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSpacefillingComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSpacefillingComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSpacefillingMetaData.PROPERTIES,
            ExtSpacefillingMetaData.EVENTS
        )
        this.xtype = 'spacefilling'
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
