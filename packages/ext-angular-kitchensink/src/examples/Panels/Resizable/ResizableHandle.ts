declare var Ext: any;
import {Component} from '@angular/core'
import {mediumText} from '../../dummy';

@Component({
  selector: 'resizable-panel-component',
  templateUrl: "./ResizableHandle.html",
  styles: [``]
})

export class ResizableHandleComponent {

  panelRef:any;
  doDynamically:boolean = false;
  mediumText = mediumText;
  
  toggleDynamic = (event) => {
    this.doDynamically = event.newValue;
  }

}
