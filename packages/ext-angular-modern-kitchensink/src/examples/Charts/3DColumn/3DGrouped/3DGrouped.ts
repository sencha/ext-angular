import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'ThreeDGrouped-component',
  templateUrl: './3DGrouped.html',
  styles: [``]
})
export class ThreeDGroupedComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}