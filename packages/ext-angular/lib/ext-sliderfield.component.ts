import { Ext_form_Slider } from './Ext/form/Slider';
export class ExtSliderfieldMetaData extends Ext_form_Slider {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSliderfieldMetaData.PROPERTIES = Ext_form_Slider.getProperties(ExtSliderfieldMetaData.PROPERTIES);
        ExtSliderfieldMetaData.EVENTS = Ext_form_Slider.getEvents(ExtSliderfieldMetaData.EVENTS);
        ExtSliderfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtSliderfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSliderfieldMetaData.getAll();})();

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
  selector: 'ext-sliderfield',
  inputs: ExtSliderfieldMetaData.PROPERTIES,
  outputs: ExtSliderfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSliderfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSliderfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSliderfieldMetaData.PROPERTIES,
            ExtSliderfieldMetaData.EVENTS
        )
        this.xtype = 'sliderfield'
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
