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
  events = ['drag', 'jfhkjr'];

  touchpadReady = (ele) => {
    const fn = this.onTouchEvent.bind(this);
    this.touchpadRef = ele.ext.el;
    console.log('$$$$$$$$$', this.touchpadRef);
    this.touchpadRef.on({
      scope: this,
      touchstart: fn,
      touchend: fn,
      touchmove: fn,
      swipe: fn,
      dragstart: fn,
      drag: fn,
      dragend: fn,
      tap: fn,
      singletap: fn,
      doubletap: fn,
      longpress: fn,
      pinch: fn,
      rotate: fn
    });
  }

  onTouchEvent(e, target, options) {
    console.log('in touch event.......', e.type, this.events);
      this.events = [e.type , ...this.events];
  }

  // touchPad = `
  //   <container #item (ready)="touchpadReady($event)" flex="1" [layout]="{type: 'vbox', pack: 'center', align: 'stretch'}" [style]="{border: '8px dashed #d6d6d6', borderRadius: '30px'}">
  //     <container #item [style]="{textAlign: 'center', fontSize: '48px'  , color: '#ccc'}" html="'Touch Here'"></container>
  //   </container>
  // `;

  // a= '<div #item>@@@@@@@@22</div>';
  // eventLog = `
  //   <panel #item title="Event Log" height="250" scrollable bodyPadding="10" shadow
  //     [header]="{
  //       items: [{
  //         xtype: 'button',
  //         align: 'right',
  //         text: 'clear',
  //         ui: 'alt',
  //         handler: this.clearEventLog
  //       }]
  //     }"
  //   >
  //   <container #item *ngFor="let event of events | index as i" [html]="'<div key={i}>{event}</div>'"></container>
  //   </panel>
  //   `;


  clearEventLog = () => {
      this.events = [];
  }

  ngOnInit() {}

}