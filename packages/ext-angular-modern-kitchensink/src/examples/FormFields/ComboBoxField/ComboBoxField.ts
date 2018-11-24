import {Component, OnInit} from '@angular/core'
import {data} from './data'

declare var Ext: any;

@Component({
  selector: 'comboboxfield-component',
  templateUrl: "./ComboBoxField.html",
  styles: [``]
})
export class ComboBoxFieldComponent implements OnInit  {

  constructor() { }

  data:any = data; 

  ngOnInit() {}

}
