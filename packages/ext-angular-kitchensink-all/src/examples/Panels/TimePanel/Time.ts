declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'time-panel-component',
  templateUrl: "./Time.html",
  styles: [``]
})

export class TimePanelComponent {

  isPhone: boolean = Ext.os.is.Phone;
  isMeridiem: boolean = true;
  isValue: boolean = false;
  isDisabled:boolean = true;
  isalignPMInside:boolean = false;

  onMeridiemChange = (event) => {
    const value = event.newValue;

    if (value) {
      this.isValue = false;
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }

    this.isMeridiem = value;
  }

  onPMHoursChange = (event) => {
    this.isalignPMInside = event.newValue;
  }

}
