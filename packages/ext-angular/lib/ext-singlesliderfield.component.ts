import { Ext_field_SingleSlider } from './Ext/field/SingleSlider';
export class ExtSinglesliderfieldMetaData extends Ext_field_SingleSlider {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSinglesliderfieldMetaData.PROPERTIES = Ext_field_SingleSlider.getProperties(ExtSinglesliderfieldMetaData.PROPERTIES);
        ExtSinglesliderfieldMetaData.EVENTS = Ext_field_SingleSlider.getEvents(ExtSinglesliderfieldMetaData.EVENTS);
        ExtSinglesliderfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtSinglesliderfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSinglesliderfieldMetaData.getAll();})();

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
  selector: 'ext-singlesliderfield',
  inputs: ExtSinglesliderfieldMetaData.PROPERTIES,
  outputs: ExtSinglesliderfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSinglesliderfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSinglesliderfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSinglesliderfieldMetaData.PROPERTIES,
            ExtSinglesliderfieldMetaData.EVENTS
        )
        this.xtype = 'singlesliderfield'
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
