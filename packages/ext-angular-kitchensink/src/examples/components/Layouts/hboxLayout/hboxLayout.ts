declare var Ext: any;
import { Component } from '@angular/core'
import colors from '../colors';

@Component({
  selector: 'hboxlayout-component',
  templateUrl: './hboxLayout.html',
  styles: [``]
})
export class hboxLayoutComponent {

  isPhone:any = Ext.os.is.Phone;
  colors:any = colors;

}
