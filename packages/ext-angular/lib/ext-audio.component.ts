import { Ext_Audio } from './Ext/Audio';
export class ExtAudioMetaData extends Ext_Audio {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtAudioMetaData.PROPERTIES = Ext_Audio.getProperties(ExtAudioMetaData.PROPERTIES);
        ExtAudioMetaData.EVENTS = Ext_Audio.getEvents(ExtAudioMetaData.EVENTS);
        ExtAudioMetaData.EVENTS.forEach( (event: any) => {
            ExtAudioMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtAudioMetaData.getAll();})();

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
  selector: 'ext-audio',
  inputs: ExtAudioMetaData.PROPERTIES,
  outputs: ExtAudioMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtAudioComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtAudioComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtAudioMetaData.PROPERTIES,
            ExtAudioMetaData.EVENTS
        )
        this.xtype = 'audio'
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
