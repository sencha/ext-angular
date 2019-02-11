declare var Ext: any;
import { Component } from '@angular/core'

Ext.require([
  'Ext.field.InputMask'
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

  onReady = (ele) => {
    this.formRef = ele.ext;
  }

  toggleDisabled = () => {
    this.disabled = !this.disabled;
  }

  reset = () => this.formRef.reset();

}
