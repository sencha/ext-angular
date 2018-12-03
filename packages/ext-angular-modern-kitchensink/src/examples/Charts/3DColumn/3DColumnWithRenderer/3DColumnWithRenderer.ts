import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'ThreeDColumnWithRenderer-component',
  templateUrl: './3DColumnWithRenderer.html',
  styles: [``]
})
export class ThreeDColumnWithRendererComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}