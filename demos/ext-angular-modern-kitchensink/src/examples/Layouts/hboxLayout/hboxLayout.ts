import {Component, OnInit} from '@angular/core'
import colors from '../colors';

declare var Ext: any;

@Component({
  selector: 'hboxlayout-component',
  templateUrl: "./hboxLayout.html",
  styles: [``]
})
export class hboxLayoutComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;

  colors:object = colors; 

  ngOnInit() {}

}
