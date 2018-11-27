import {Component, OnInit} from '@angular/core'
import colors from '../colors';

declare var Ext: any;

@Component({
  selector: 'resizablelayout-component',
  templateUrl: "./ResizableLayout.html",
  styles: [``]
})
export class ResizableLayoutComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;

  colors:object = colors; 

  ngOnInit() {}

}
