declare var Ext: any;
import { Component, ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'sliderfield-component',
  templateUrl: "./SliderField.html",
  styles: [``]
})
export class SliderFieldComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null

  singleValue:number = 20;
  liveUpdateValue:number = 60;
  multipleValue:number[] = [10, 70];

    constructor(private cd: ChangeDetectorRef) {}

  onSingleChange = (param) => {
    this.singleValue = param.newValue;
    this.cd.detectChanges();
  }

  onMultipleChange = (param) => {
    this.multipleValue = param.newValue;
    this.cd.detectChanges();
  }

  onLiveUpdateChange = (param) => {
    this.liveUpdateValue = param.newValue;
    this.cd.detectChanges();
  }

}
