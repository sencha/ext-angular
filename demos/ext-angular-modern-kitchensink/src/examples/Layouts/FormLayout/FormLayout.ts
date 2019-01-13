import {Component, OnInit} from '@angular/core'
import colors from '../colors';

declare var Ext: any;

@Component({
  selector: 'formlayout-component',
  templateUrl: "./FormLayout.html",
  styles: [``]
})
export class FormLayoutComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;

  colors:object = colors; 

  ngOnInit() {}

}
