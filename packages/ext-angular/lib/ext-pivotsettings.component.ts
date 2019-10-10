import { Ext_pivot_plugin_configurator_Settings } from './Ext/pivot/plugin/configurator/Settings';
export class ExtPivotsettingsMetaData extends Ext_pivot_plugin_configurator_Settings {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotsettingsMetaData.PROPERTIES = Ext_pivot_plugin_configurator_Settings.getProperties(ExtPivotsettingsMetaData.PROPERTIES);
        ExtPivotsettingsMetaData.EVENTS = Ext_pivot_plugin_configurator_Settings.getEvents(ExtPivotsettingsMetaData.EVENTS);
        ExtPivotsettingsMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotsettingsMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotsettingsMetaData.getAll();})();

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
  selector: 'ext-pivotsettings',
  inputs: ExtPivotsettingsMetaData.PROPERTIES,
  outputs: ExtPivotsettingsMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotsettingsComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotsettingsComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotsettingsMetaData.PROPERTIES,
            ExtPivotsettingsMetaData.EVENTS
        )
        this.xtype = 'pivotsettings'
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
