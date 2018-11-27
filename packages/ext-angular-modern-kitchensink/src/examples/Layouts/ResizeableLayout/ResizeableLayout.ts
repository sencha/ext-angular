import {Component, OnInit} from '@angular/core'
import colors from '../colors';

declare var Ext: any;

@Component({
  selector: 'resizeablelayout-component',
  templateUrl: "./ResizeableLayout.html",
  styles: [``]
})
export class ResizeableLayoutComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;

  colors:object = colors; 

  ngOnInit() {}

}
