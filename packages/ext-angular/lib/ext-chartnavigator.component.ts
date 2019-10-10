import { Ext_chart_navigator_Container } from './Ext/chart/navigator/Container';
export class ExtChartnavigatorMetaData extends Ext_chart_navigator_Container {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtChartnavigatorMetaData.PROPERTIES = Ext_chart_navigator_Container.getProperties(ExtChartnavigatorMetaData.PROPERTIES);
        ExtChartnavigatorMetaData.EVENTS = Ext_chart_navigator_Container.getEvents(ExtChartnavigatorMetaData.EVENTS);
        ExtChartnavigatorMetaData.EVENTS.forEach( (event: any) => {
            ExtChartnavigatorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtChartnavigatorMetaData.getAll();})();

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
  selector: 'ext-chartnavigator',
  inputs: ExtChartnavigatorMetaData.PROPERTIES,
  outputs: ExtChartnavigatorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtChartnavigatorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtChartnavigatorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtChartnavigatorMetaData.PROPERTIES,
            ExtChartnavigatorMetaData.EVENTS
        )
        this.xtype = 'chartnavigator'
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
