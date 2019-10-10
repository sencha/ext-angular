import { Ext_panel_YearPicker } from './Ext/panel/YearPicker';
export class ExtYearpickerMetaData extends Ext_panel_YearPicker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtYearpickerMetaData.PROPERTIES = Ext_panel_YearPicker.getProperties(ExtYearpickerMetaData.PROPERTIES);
        ExtYearpickerMetaData.EVENTS = Ext_panel_YearPicker.getEvents(ExtYearpickerMetaData.EVENTS);
        ExtYearpickerMetaData.EVENTS.forEach( (event: any) => {
            ExtYearpickerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtYearpickerMetaData.getAll();})();

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
  selector: 'ext-yearpicker',
  inputs: ExtYearpickerMetaData.PROPERTIES,
  outputs: ExtYearpickerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtYearpickerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtYearpickerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtYearpickerMetaData.PROPERTIES,
            ExtYearpickerMetaData.EVENTS
        )
        this.xtype = 'yearpicker'
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
