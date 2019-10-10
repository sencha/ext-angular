import { d3_svg } from './d3/svg';
export class ExtD3MetaData extends d3_svg {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3MetaData.PROPERTIES = d3_svg.getProperties(ExtD3MetaData.PROPERTIES);
        ExtD3MetaData.EVENTS = d3_svg.getEvents(ExtD3MetaData.EVENTS);
        ExtD3MetaData.EVENTS.forEach( (event: any) => {
            ExtD3MetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3MetaData.getAll();})();

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
  selector: 'ext-d3',
  inputs: ExtD3MetaData.PROPERTIES,
  outputs: ExtD3MetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3Component)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3Component extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3MetaData.PROPERTIES,
            ExtD3MetaData.EVENTS
        )
        this.xtype = 'd3'
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
