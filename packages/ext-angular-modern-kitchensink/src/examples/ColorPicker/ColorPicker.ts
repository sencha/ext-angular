import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'ColorPicker-component',
  templateUrl: './ColorPicker.html',
  styles: [``]
})
export class ColorPickerComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}