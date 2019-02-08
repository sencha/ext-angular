declare var Ext: any;
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'selectfield-component',
  templateUrl: "./SelectField.html",
  styles: [``]
})
export class SelectFieldComponent implements OnInit  {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  constructor() { }

  onChange = (param) => {
    Ext.toast('You selected the item with value '+param.newValue, 1000);
  }

  ngOnInit() {}

}
