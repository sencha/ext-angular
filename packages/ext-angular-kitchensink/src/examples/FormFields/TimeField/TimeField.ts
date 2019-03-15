declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'timefield-component',
  templateUrl: "./TimeField.html",
  styles: [``]
})
export class TimeFieldComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  disabled:boolean = false;
  formPanelRef:any;

  onReady = (ele) => {
    this.formPanelRef = ele.ext;
  }

  reset = () => {
    return this.formPanelRef.reset();
  }

  toggleDisabled = () => {
    this.disabled = !this.disabled;
  }

}
