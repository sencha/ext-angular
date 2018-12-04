import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'DrilldownPlugin-component',
  templateUrl: './DrilldownPlugin.html',
  styles: [``]
})
export class DrilldownPluginComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}