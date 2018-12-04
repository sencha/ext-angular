import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'CompactLayout-component',
  templateUrl: './CompactLayout.html',
  styles: [``]
})
export class CompactLayoutComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}