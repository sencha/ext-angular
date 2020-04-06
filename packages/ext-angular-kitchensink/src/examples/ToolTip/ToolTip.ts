declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'tooltip-component',
  templateUrl: './ToolTip.html',
  styles: [``]
})
export class ToolTipComponent {
  isPhone = Ext.platformTags.phone;
}