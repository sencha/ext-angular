declare var Ext: any;
import { Component} from '@angular/core';

@Component({
  selector: 'toolbar-component',
  templateUrl: './BreadcrumbtoolBar.html',
  styles: [``]
})
export class BreadcrumbToolBarComponent {

  message= 'Option 1 selected';
  optionButton= '';
  isPhone = Ext.os.is.Phone;


}