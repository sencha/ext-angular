import { Ext_field_Container } from './Ext/field/Container';
export class ExtContainerfieldMetaData extends Ext_field_Container {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtContainerfieldMetaData.PROPERTIES = Ext_field_Container.getProperties(ExtContainerfieldMetaData.PROPERTIES);
        ExtContainerfieldMetaData.EVENTS = Ext_field_Container.getEvents(ExtContainerfieldMetaData.EVENTS);
        ExtContainerfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtContainerfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtContainerfieldMetaData.getAll();})();

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
  selector: 'ext-containerfield',
  inputs: ExtContainerfieldMetaData.PROPERTIES,
  outputs: ExtContainerfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtContainerfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtContainerfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtContainerfieldMetaData.PROPERTIES,
            ExtContainerfieldMetaData.EVENTS
        )
        this.xtype = 'containerfield'
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
