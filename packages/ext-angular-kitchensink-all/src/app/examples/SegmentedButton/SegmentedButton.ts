declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'segmented-button-component',
  templateUrl: './SegmentedButton.html',
  styles: [``]
})
export class SegmentedButtonComponent {

  button1: string = 'low';
  button2: string = 'low';
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null

  onButton1Change = function(event){
    this.button1 = event.value; 
  }

  onButton2Change = function(event){
    this.button2 = event.value; 
  }

}