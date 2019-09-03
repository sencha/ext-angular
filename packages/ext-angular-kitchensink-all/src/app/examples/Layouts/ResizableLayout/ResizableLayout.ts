declare var Ext: any;
import { Component } from '@angular/core'
import colors from '../colors';

@Component({
  selector: 'resizablelayout-component',
  templateUrl: "./ResizableLayout.html",
  styles: [``]
})
export class ResizableLayoutComponent {

  isPhone:boolean = Ext.os.is.Phone;
  colors:object = colors; 
  rightResizable = {split: true,  edges: 'west'};

}
