import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'ExporterPlugin-component',
  templateUrl: './ExporterPlugin.html',
  styles: [``]
})
export class ExporterPluginComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}