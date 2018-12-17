import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'basic-event-component',
  templateUrl: './BasicEvent.html',
  styles: [``]
})

export class BasicEventComponent implements OnInit {

  constructor() { }

  message:string= 'adafag'

  onButtonTap = () => { 
      this.message = "tapped";
  }

  ngOnInit() {
  }

}