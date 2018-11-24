import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'datepickerfield-component',
  templateUrl: "./DatePickerField.html",
  styles: [``]
})
export class DatePickerFieldComponent implements OnInit  {

  constructor() { }

  date:Date = new Date();
  
  ngOnInit() {}

}
