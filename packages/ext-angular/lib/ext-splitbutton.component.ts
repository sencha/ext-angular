import { Ext_SplitButton } from './Ext/SplitButton';
export class ExtSplitbuttonMetaData extends Ext_SplitButton {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSplitbuttonMetaData.PROPERTIES = Ext_SplitButton.getProperties(ExtSplitbuttonMetaData.PROPERTIES);
        ExtSplitbuttonMetaData.EVENTS = Ext_SplitButton.getEvents(ExtSplitbuttonMetaData.EVENTS);
        ExtSplitbuttonMetaData.EVENTS.forEach( (event: any) => {
            ExtSplitbuttonMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSplitbuttonMetaData.getAll();})();

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
  selector: 'ext-splitbutton',
  inputs: ExtSplitbuttonMetaData.PROPERTIES,
  outputs: ExtSplitbuttonMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSplitbuttonComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSplitbuttonComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSplitbuttonMetaData.PROPERTIES,
            ExtSplitbuttonMetaData.EVENTS
        )
        this.xtype = 'splitbutton'
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
