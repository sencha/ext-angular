import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [``]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isPhone = Ext.os.is.Phone;

}