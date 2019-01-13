import {Component, OnInit} from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'basic-date-panel-component',
  templateUrl: "./BasicDate.html",
  styles: [``]
})

export class BasicDatePanelComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;

  ngOnInit() {}

}
