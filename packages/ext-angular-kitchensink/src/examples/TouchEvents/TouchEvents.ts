declare var Ext: any;
import { Component } from '@angular/core';
@Component({
  selector: 'touchevents-component',
  templateUrl: './TouchEvents.html',
  styles: [``]
})
export class TouchEventsComponent {

  touchpadRef:any;
  isPhone = Ext.os.is.Phone;
  events = [{type:'drag'}, {type:'touchmove'}];
  theDataview:any;
  tplDataView: any=`<p>{type}&nbsp;&nbsp;&nbsp;</p>\n`;

  touchpadReady = (event) => {
    this.touchpadRef = event.cmp.el;
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

  dataviewReady = (event) => {
    this.theDataview = event.cmp;
  }

  onTouchEvent = (e, target, options) => {
    this.events = [{type:e.type} , ...this.events];
    this.theDataview.setData(this.events);
  }

  clearEventLog = () => {
    this.events = [];
    this.theDataview.setData(null);
  }
}