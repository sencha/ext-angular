declare var Ext: any;
import {Component} from '@angular/core'

Ext.require([
  'Ext.field.InputMask'
]);

@Component({
  selector: 'formpanel-component',
  templateUrl: "./FormPanel.html",
  styles: [``]
})
export class FormPanelComponent {

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
