import { Ext_container_Container } from './Ext/container/Container';
export class ExtContainerMetaData extends Ext_container_Container {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtContainerMetaData.PROPERTIES = Ext_container_Container.getProperties(ExtContainerMetaData.PROPERTIES);
        ExtContainerMetaData.EVENTS = Ext_container_Container.getEvents(ExtContainerMetaData.EVENTS);
        ExtContainerMetaData.EVENTS.forEach( (event: any) => {
            ExtContainerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtContainerMetaData.getAll();})();

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
  selector: 'ext-container',
  inputs: ExtContainerMetaData.PROPERTIES,
  outputs: ExtContainerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtContainerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtContainerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtContainerMetaData.PROPERTIES,
            ExtContainerMetaData.EVENTS
        )
        this.xtype = 'container'
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
