import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'RangeEditorPlugin-component',
  templateUrl: './RangeEditorPlugin.html',
  styles: [``]
})
export class RangeEditorPluginComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}