// Define isPhone
import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'containerfield-component',
  templateUrl: "./ContainerField.html",
  styles: [``]
})
export class ContainerFieldComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;

  ngOnInit() {}

}
