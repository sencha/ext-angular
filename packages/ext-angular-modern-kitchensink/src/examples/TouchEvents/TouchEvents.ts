import { Component, OnInit } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'touchevents-component',
  templateUrl: './TouchEvents.html',
  styles: [``]
})
export class TouchEventsComponent implements OnInit {

  eventLog:any;
  touchPAd:any;
  isPhone = Ext.os.is.Phone;

  constructor() { }

  ngOnInit() {}

}