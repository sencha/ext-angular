import { Ext_Editor } from './Ext/Editor';
export class ExtEditorMetaData extends Ext_Editor {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtEditorMetaData.PROPERTIES = Ext_Editor.getProperties(ExtEditorMetaData.PROPERTIES);
        ExtEditorMetaData.EVENTS = Ext_Editor.getEvents(ExtEditorMetaData.EVENTS);
        ExtEditorMetaData.EVENTS.forEach( (event: any) => {
            ExtEditorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtEditorMetaData.getAll();})();

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
  selector: 'ext-editor',
  inputs: ExtEditorMetaData.PROPERTIES,
  outputs: ExtEditorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtEditorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtEditorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtEditorMetaData.PROPERTIES,
            ExtEditorMetaData.EVENTS
        )
        this.xtype = 'editor'
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
