declare var Ext: any;
import { Component } from '@angular/core'
import colors from '../colors';

@Component({
  selector: 'vboxlayout-component',
  templateUrl: "./vboxLayout.html",
  styles: [``]
})
export class vboxLayoutComponent {

  isPhone:boolean = Ext.os.is.Phone;
  colors:object = colors; 

}
