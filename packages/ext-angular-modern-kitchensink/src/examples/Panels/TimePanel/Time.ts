import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'time-panel-component',
  templateUrl: "./Time.html",
  styles: [``]
})

export class TimePanelComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;

  ngOnInit() {}

}
