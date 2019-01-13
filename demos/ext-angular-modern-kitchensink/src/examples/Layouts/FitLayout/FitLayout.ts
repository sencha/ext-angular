import {Component, OnInit} from '@angular/core'
import colors from '../colors';

declare var Ext: any;

@Component({
  selector: 'fitlayout-component',
  templateUrl: "./FitLayout.html",
  styles: [``]
})
export class FitLayoutComponent implements OnInit  {

  constructor() { }

  colors:object = colors;

  ngOnInit() {}

}
