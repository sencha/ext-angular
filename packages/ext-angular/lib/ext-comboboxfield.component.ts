import { Ext_form_field_ComboBox } from './Ext/form/field/ComboBox';
export class ExtComboboxfieldMetaData extends Ext_form_field_ComboBox {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtComboboxfieldMetaData.PROPERTIES = Ext_form_field_ComboBox.getProperties(ExtComboboxfieldMetaData.PROPERTIES);
        ExtComboboxfieldMetaData.EVENTS = Ext_form_field_ComboBox.getEvents(ExtComboboxfieldMetaData.EVENTS);
        ExtComboboxfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtComboboxfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtComboboxfieldMetaData.getAll();})();

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
  selector: 'ext-comboboxfield',
  inputs: ExtComboboxfieldMetaData.PROPERTIES,
  outputs: ExtComboboxfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtComboboxfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtComboboxfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtComboboxfieldMetaData.PROPERTIES,
            ExtComboboxfieldMetaData.EVENTS
        )
        this.xtype = 'comboboxfield'
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
