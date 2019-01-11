import { Component, OnInit} from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'segmented-button-component',
  templateUrl: './SegmentedButton.html',
  styles: [``]
})
export class SegmentedButtonComponent implements OnInit {

    button1: string;
    button2: string;
    isPhone = Ext.os.is.Phone;

  constructor() { }


  onButton1Change = function(event){
      //debugger;
      this.button1 = event.value; 
      console.log(event);
  }

  onButton2Change = function(event){
    //debugger;
    this.button2 = event.value; 
    console.log(event);
 }


  ngOnInit() {
    this.button1 = 'low';
    this.button2 = 'low';
  }
  

}