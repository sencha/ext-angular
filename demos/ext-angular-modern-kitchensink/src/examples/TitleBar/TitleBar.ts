import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'titlebar-component',
  templateUrl: './TitleBar.html',
  styles: [``]
})
export class TitleBarComponent implements OnInit {

  isPhone = Ext.os.is.Phone;

  constructor() { }



  ngOnInit() {
  }


}