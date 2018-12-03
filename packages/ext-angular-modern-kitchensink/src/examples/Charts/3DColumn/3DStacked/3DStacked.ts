import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'ThreeDStacked-component',
  templateUrl: './3DStacked.html',
  styles: [``]
})
export class ThreeDStackedComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}