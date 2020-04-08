declare var Ext: any;
import { Component } from '@angular/core'
import {mediumText} from '../../../dummy';

@Component({
  selector: 'collapsible-panel-component',
  templateUrl: "./CollapsiblePanel.html",
  styles: [``]
})

export class CollapsiblePanelComponent {

  isPhone:boolean = Ext.os.is.Phone;
  mediumText = mediumText;

}
