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

  readyForm = (event) => {
      console.log('onReady')
    this.formPanelRef = event.cmp;
  }

  tapReset = (event) => {
    this.formPanelRef.reset();
  }

  toggleDisabled = (event) => {
    this.disabled = !this.disabled;
  }

}
