import { Ext_slider_Slider } from './Ext/slider/Slider';
export class ExtSliderMetaData extends Ext_slider_Slider {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSliderMetaData.PROPERTIES = Ext_slider_Slider.getProperties(ExtSliderMetaData.PROPERTIES);
        ExtSliderMetaData.EVENTS = Ext_slider_Slider.getEvents(ExtSliderMetaData.EVENTS);
        ExtSliderMetaData.EVENTS.forEach( (event: any) => {
            ExtSliderMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSliderMetaData.getAll();})();

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
  selector: 'ext-slider',
  inputs: ExtSliderMetaData.PROPERTIES,
  outputs: ExtSliderMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSliderComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSliderComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSliderMetaData.PROPERTIES,
            ExtSliderMetaData.EVENTS
        )
        this.xtype = 'slider'
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
