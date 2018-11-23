import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'selectfield-component',
  templateUrl: "./SelectField.html",
  styles: [``]
})
export class SelectFieldComponent implements OnInit  {

  constructor() { }

  onChange = (param) => {
    Ext.toast('You selected the item with value '+param.newValue, 1000);
  }

  ngOnInit() {}

}
