import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'Basic3DColumn-component',
  templateUrl: './Basic3DColumn.html',
  styles: [``]
})
export class Basic3DColumnComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}