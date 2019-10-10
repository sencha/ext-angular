import { Ext_form_field_ComboBox } from './Ext/form/field/ComboBox';
export class ExtComboboxMetaData extends Ext_form_field_ComboBox {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtComboboxMetaData.PROPERTIES = Ext_form_field_ComboBox.getProperties(ExtComboboxMetaData.PROPERTIES);
        ExtComboboxMetaData.EVENTS = Ext_form_field_ComboBox.getEvents(ExtComboboxMetaData.EVENTS);
        ExtComboboxMetaData.EVENTS.forEach( (event: any) => {
            ExtComboboxMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtComboboxMetaData.getAll();})();

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
  selector: 'ext-combobox',
  inputs: ExtComboboxMetaData.PROPERTIES,
  outputs: ExtComboboxMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtComboboxComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtComboboxComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtComboboxMetaData.PROPERTIES,
            ExtComboboxMetaData.EVENTS
        )
        this.xtype = 'combobox'
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
