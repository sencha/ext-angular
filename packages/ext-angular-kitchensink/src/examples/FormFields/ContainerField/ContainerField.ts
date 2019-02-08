declare var Ext: any;
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'containerfield-component',
  templateUrl: "./ContainerField.html",
  styles: [``]
})
export class ContainerFieldComponent implements OnInit  {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  constructor() { }

  ngOnInit() {}

}
