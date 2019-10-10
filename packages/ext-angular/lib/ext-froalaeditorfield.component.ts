import { Ext_froala_EditorField } from './Ext/froala/EditorField';
export class ExtFroalaeditorfieldMetaData extends Ext_froala_EditorField {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFroalaeditorfieldMetaData.PROPERTIES = Ext_froala_EditorField.getProperties(ExtFroalaeditorfieldMetaData.PROPERTIES);
        ExtFroalaeditorfieldMetaData.EVENTS = Ext_froala_EditorField.getEvents(ExtFroalaeditorfieldMetaData.EVENTS);
        ExtFroalaeditorfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtFroalaeditorfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFroalaeditorfieldMetaData.getAll();})();

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
  selector: 'ext-froalaeditorfield',
  inputs: ExtFroalaeditorfieldMetaData.PROPERTIES,
  outputs: ExtFroalaeditorfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFroalaeditorfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFroalaeditorfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFroalaeditorfieldMetaData.PROPERTIES,
            ExtFroalaeditorfieldMetaData.EVENTS
        )
        this.xtype = 'froalaeditorfield'
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
