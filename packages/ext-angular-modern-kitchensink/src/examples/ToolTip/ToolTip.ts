import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'tooltip-component',
  templateUrl: './ToolTip.html',
  styles: [``]
})
export class ToolTipComponent implements OnInit {

     containerDefaults = {
        margin: '0 0 50 0',
    };

     buttonDefaults = {
        margin: '0 15 0 0'
    };

    isPhone = Ext.platformTags.phone;

    

    

  constructor() { }



  ngOnInit() {
      console.log("isPhone : " + this.isPhone);
  }


}