declare var Ext: any;
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'datepickerfield-component',
  templateUrl: "./DatePickerField.html",
  styles: [``]
})
export class DatePickerFieldComponent implements OnInit  {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  constructor() { }

  date:Date = new Date();
  
  ngOnInit() {}

}
