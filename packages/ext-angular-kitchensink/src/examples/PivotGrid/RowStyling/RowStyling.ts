declare var Ext: any;
import { Component } from '@angular/core';
import { generateData, randomDate } from '../generateSaleData';
import { model } from '../SaleModel';

@Component({
  selector: 'RowStyling-component',
  templateUrl: './RowStyling.html',
  styles: [``]
})
export class RowStylingComponent  {

  isPhone = Ext.os.is.Phone;

}