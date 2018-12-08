import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { generateData, randomDate } from '../generateSaleData';
import { model } from '../SaleModel';

declare var Ext: any;

@Component({
  selector: 'RowStyling-component',
  templateUrl: './RowStyling.html',
  styles: [``]
})
export class RowStylingComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}