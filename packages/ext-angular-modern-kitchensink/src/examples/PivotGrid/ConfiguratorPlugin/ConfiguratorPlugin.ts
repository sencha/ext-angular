import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'ConfiguratorPlugin-component',
  templateUrl: './ConfiguratorPlugin.html',
  styles: [``]
})
export class ConfiguratorPluginComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}