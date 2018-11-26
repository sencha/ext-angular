import {Component, OnInit} from '@angular/core'
import colors from '../colors';

declare var Ext: any;

@Component({
  selector: 'centerlayout-component',
  templateUrl: "./CenterLayout.html",
  styles: [``]
})
export class CenterLayoutComponent implements OnInit  {

  constructor() { }

  colors:object = colors; 

  ngOnInit() {}

}
