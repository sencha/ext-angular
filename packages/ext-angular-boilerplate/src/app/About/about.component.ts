declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [``]
})
export class AboutComponent {

  isPhone = Ext.os.is.Phone;

}