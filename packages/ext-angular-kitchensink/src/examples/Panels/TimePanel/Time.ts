declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'time-panel-component',
  templateUrl: "./Time.html",
  styles: [``]
})

export class TimePanelComponent {

  isPhone:boolean = Ext.os.is.Phone;

}
