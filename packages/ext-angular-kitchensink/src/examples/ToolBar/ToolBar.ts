declare var Ext: any;
import { Component} from '@angular/core';

@Component({
  selector: 'toolbar-component',
  templateUrl: './ToolBar.html',
  styles: [``]
})
export class ToolBarComponent {

  message= 'Option 1 selected';
  optionButton= '';
  isPhone = Ext.os.is.Phone;

  buttonHandler = function(event) {
    console.log("Got event :" + event);
    //debugger;
    this.message = "User clicked \"" + event.button.getText() + "\"";
    this.optionButton = event.button.getValue();
  }

}