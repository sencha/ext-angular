import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'PivotGridWidgets-component',
  templateUrl: './PivotGridWidgets.html',
  styles: [``]
})
export class PivotGridWidgetsComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}