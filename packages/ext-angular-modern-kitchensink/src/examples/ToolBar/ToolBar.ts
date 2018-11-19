import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'toolbar-component',
  templateUrl: './ToolBar.html',
  styles: [``]
})
export class ToolBarComponent implements OnInit {

  message= 'Option 1 selected';
  optionButton= '1';
  isPhone = Ext.os.is.Phone;

  constructor() { }

  buttonHandler = function(event) {
    console.log("Got event :" + event);
    //debugger;
    this.message = "User clicked \"" + event.button.getText() + "\"";

  }



  ngOnInit() {
  }


}