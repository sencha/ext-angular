import { Ext_panel_Accordion } from './Ext/panel/Accordion';
export class ExtAccordionMetaData extends Ext_panel_Accordion {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtAccordionMetaData.PROPERTIES = Ext_panel_Accordion.getProperties(ExtAccordionMetaData.PROPERTIES);
        ExtAccordionMetaData.EVENTS = Ext_panel_Accordion.getEvents(ExtAccordionMetaData.EVENTS);
        ExtAccordionMetaData.EVENTS.forEach( (event: any) => {
            ExtAccordionMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtAccordionMetaData.getAll();})();

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
  selector: 'ext-accordion',
  inputs: ExtAccordionMetaData.PROPERTIES,
  outputs: ExtAccordionMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtAccordionComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtAccordionComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtAccordionMetaData.PROPERTIES,
            ExtAccordionMetaData.EVENTS
        )
        this.xtype = 'accordion'
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
