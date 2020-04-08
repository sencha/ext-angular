declare var Ext: any;
import { Component } from '@angular/core'
import { mediumText } from '../../../dummy';
//https://www.sencha.com/forum/showthread.php?468441-6-5-Modern-Resizable-panel-throw-an-exception-when-dragging-ne-se-sw-nw-handles

Ext.require([
  'Ext.panel.Resizer'
])

@Component({
  selector: 'resizable-handle-component',
  templateUrl: "./ResizableHandle.html",
  styles: [``]
})

export class ResizableHandleComponent {

  bodyText:any;
  constructor() {
    this.bodyText = mediumText;
  }

  doDynamically:boolean = false;
  toggleDynamic = (event) => {
    this.doDynamically = event.newValue;
  }

}
