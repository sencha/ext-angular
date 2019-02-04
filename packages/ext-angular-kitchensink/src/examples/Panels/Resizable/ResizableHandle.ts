declare var Ext: any;
import { Component } from '@angular/core'
import { mediumText } from '../../dummy';
//https://www.sencha.com/forum/showthread.php?468441-6-5-Modern-Resizable-panel-throw-an-exception-when-dragging-ne-se-sw-nw-handles

@Component({
  selector: 'resizable-panel-component',
  templateUrl: "./ResizableHandle.html",
  styles: [``]
})

export class ResizableHandleComponent {

  doDynamically:boolean = false;
  toggleDynamic = (event) => {
    this.doDynamically = event.newValue;
  }

}
