import { Ext_froala_Editor } from './Ext/froala/Editor';
export class ExtFroalaeditorMetaData extends Ext_froala_Editor {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFroalaeditorMetaData.PROPERTIES = Ext_froala_Editor.getProperties(ExtFroalaeditorMetaData.PROPERTIES);
        ExtFroalaeditorMetaData.EVENTS = Ext_froala_Editor.getEvents(ExtFroalaeditorMetaData.EVENTS);
        ExtFroalaeditorMetaData.EVENTS.forEach( (event: any) => {
            ExtFroalaeditorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFroalaeditorMetaData.getAll();})();

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
  selector: 'ext-froalaeditor',
  inputs: ExtFroalaeditorMetaData.PROPERTIES,
  outputs: ExtFroalaeditorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFroalaeditorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFroalaeditorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFroalaeditorMetaData.PROPERTIES,
            ExtFroalaeditorMetaData.EVENTS
        )
        this.xtype = 'froalaeditor'
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
