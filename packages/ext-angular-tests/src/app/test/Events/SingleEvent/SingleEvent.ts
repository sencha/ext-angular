import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'single-event-component',
  templateUrl: './SingleEvent.html',
  styles: [``]
})

export class SingleEventComponent implements OnInit {

  constructor() { }
  
  count:number = 0

  onButtonTap = () => { 
    this.count = this.count + 1;
  }

  ngOnInit() {
  }

}