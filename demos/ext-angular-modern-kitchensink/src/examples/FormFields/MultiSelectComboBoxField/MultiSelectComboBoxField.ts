import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {data} from './data';

declare var Ext: any;

@Component({
  selector: 'MultiSelectComboBoxField-component',
  templateUrl: './MultiSelectComboBoxField.html',
  styles: [``]
})
export class MultiSelectComboBoxFieldComponent implements OnInit {

  constructor() { }

  dataStore = data;

  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}