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

  panelReady = (ele) => {
    this.panelRef = ele.ext.el;
    // this.panelRef.center();
  } 

  toggleDynamic = (cb, dynamic) => {
    this.doDynamically = dynamic;
  }

  ngOnInit() {}

}
