import {Component, OnInit} from '@angular/core'
import colors from '../colors';

declare var Ext: any;

@Component({
  selector: 'vboxlayout-component',
  templateUrl: "./vboxLayout.html",
  styles: [``]
})
export class vboxLayoutComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;

  colors:object = colors; 

  ngOnInit() {}

}
