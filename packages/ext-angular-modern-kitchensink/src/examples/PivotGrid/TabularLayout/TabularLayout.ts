import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'TabularLayout-component',
  templateUrl: './TabularLayout.html',
  styles: [``]
})
export class TabularLayoutComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}