declare var Ext: any;
import { Component } from '@angular/core'

Ext.require([
  'Ext.field.InputMask',
  'Ext.ux.colorpick.Field'
]);

@Component({
  selector: 'formpanel-component',
  templateUrl: "./FormPanel.html",
  styles: [``]
})
export class FormPanelComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  disabled:boolean = false;
  formRef:any;
  selRef:any;

  onReady = (event) => {
    this.formRef = event.cmp;
  }

  OnSelChange = (event) => {
      console.log('here')
    this.selRef = event.cmp;
  }

  toggleDisabled = (event) => {
    this.disabled = !this.disabled;
  }

  reset = (event) => this.formRef.reset();

}
