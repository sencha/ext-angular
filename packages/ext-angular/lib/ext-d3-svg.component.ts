import { Ext_d3_svg_Svg } from './Ext/d3/svg/Svg';
export class ExtD3_svgMetaData extends Ext_d3_svg_Svg {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_svgMetaData.PROPERTIES = Ext_d3_svg_Svg.getProperties(ExtD3_svgMetaData.PROPERTIES);
        ExtD3_svgMetaData.EVENTS = Ext_d3_svg_Svg.getEvents(ExtD3_svgMetaData.EVENTS);
        ExtD3_svgMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_svgMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_svgMetaData.getAll();})();

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
  selector: 'ext-d3-svg',
  inputs: ExtD3_svgMetaData.PROPERTIES,
  outputs: ExtD3_svgMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_svgComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_svgComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_svgMetaData.PROPERTIES,
            ExtD3_svgMetaData.EVENTS
        )
        this.xtype = 'd3-svg'
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
