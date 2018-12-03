import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'NegativeValues-component',
  templateUrl: './NegativeValues.html',
  styles: [``]
})
export class NegativeValuesComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}