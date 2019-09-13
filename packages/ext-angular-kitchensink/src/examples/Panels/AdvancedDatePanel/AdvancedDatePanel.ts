declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'advanced-date-panel-component',
  templateUrl: "./AdvancedDatePanel.html",
  styles: [``]
})

export class AdvancedDatePanelComponent  {

  isPhone:boolean = Ext.os.is.Phone;

  disabledDates:any[] = [
    Ext.Date.add(new Date(), Ext.Date.DAY, -1),
    Ext.Date.add(new Date(), Ext.Date.MONTH, 1),
    Ext.Date.add(new Date(), Ext.Date.MONTH, -1)
  ];

  specialDates:any[] = [
    new Date(new Date().getFullYear(), 2, 19),
    new Date(new Date().getFullYear(), 4, 1),
    new Date(new Date().getFullYear(), 2, 16)
  ];

}
