import {Component, OnInit} from '@angular/core'
import {mediumText} from '../../dummy';

declare var Ext: any;

@Component({
  selector: 'resizable-panel-component',
  templateUrl: "./ResizableHandle.html",
  styles: [``]
})

export class ResizableHandleComponent implements OnInit  {

  constructor() { }

  panelRef:any;
  doDynamically:boolean = false;
  mediumText = mediumText;
  
  toggleDynamic = (event) => {
    this.doDynamically = event.newValue;
    console.log("this.doDynamically :" + this.doDynamically);
  }

  ngOnInit() {}

}
