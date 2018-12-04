import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'OutlineLayout-component',
  templateUrl: './OutlineLayout.html',
  styles: [``]
})
export class OutlineLayoutComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}