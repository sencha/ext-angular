declare var Ext: any;
import { Component } from '@angular/core';
@Component({
  selector: 'titlebar-component',
  templateUrl: './TitleBar.html',
  styles: [``]
})
export class TitleBarComponent{
  isPhone = Ext.os.is.Phone;
}