import { Ext_grid_rowedit_Editor } from './Ext/grid/rowedit/Editor';
export class ExtRoweditorMetaData extends Ext_grid_rowedit_Editor {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRoweditorMetaData.PROPERTIES = Ext_grid_rowedit_Editor.getProperties(ExtRoweditorMetaData.PROPERTIES);
        ExtRoweditorMetaData.EVENTS = Ext_grid_rowedit_Editor.getEvents(ExtRoweditorMetaData.EVENTS);
        ExtRoweditorMetaData.EVENTS.forEach( (event: any) => {
            ExtRoweditorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRoweditorMetaData.getAll();})();

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
  selector: 'ext-roweditor',
  inputs: ExtRoweditorMetaData.PROPERTIES,
  outputs: ExtRoweditorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRoweditorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRoweditorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRoweditorMetaData.PROPERTIES,
            ExtRoweditorMetaData.EVENTS
        )
        this.xtype = 'roweditor'
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
