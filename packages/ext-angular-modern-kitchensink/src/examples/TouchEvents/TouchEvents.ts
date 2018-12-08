import { Component, OnInit } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'touchevents-component',
  templateUrl: './TouchEvents.html',
  styles: [``]
})
export class TouchEventsComponent implements OnInit {

  touchpadRef:any;
  isPhone = Ext.os.is.Phone;
  events = ['drag', 'touchmove'];

  touchpadReady = (ele) => {
    this.touchpadRef = ele.ext.el;
    this.touchpadRef.on({
      scope: this,
      touchstart: this.onTouchEvent,
      touchend: this.onTouchEvent,
      touchmove: this.onTouchEvent,
      swipe: this.onTouchEvent,
      dragstart: this.onTouchEvent,
      drag: this.onTouchEvent,
      dragend: this.onTouchEvent,
      tap: this.onTouchEvent,
      singletap: this.onTouchEvent,
      doubletap: this.onTouchEvent,
      longpress: this.onTouchEvent,
      pinch: this.onTouchEvent,
      rotate: this.onTouchEvent
    });
  }

  onTouchEvent = (e, target, options) => {
    this.events = [e.type , ...this.events];
  }

  clearEventLog = () => {
    this.events = [];
  }

  ngOnInit() {}

}