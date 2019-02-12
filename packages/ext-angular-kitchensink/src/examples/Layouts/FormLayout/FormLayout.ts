declare var Ext: any;
import { Component } from '@angular/core'
import colors from '../colors';

@Component({
  selector: 'formlayout-component',
  templateUrl: "./FormLayout.html",
  styles: [``]
})
export class FormLayoutComponent {

  isPhone:boolean = Ext.os.is.Phone;
  colors:object = colors; 

}
