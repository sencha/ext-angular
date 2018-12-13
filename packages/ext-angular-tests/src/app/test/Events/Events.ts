import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'Events-component',
  templateUrl: './Events.html',
  styles: [``]
})
export class EventsComponent implements OnInit {

  constructor() { }

  message:string= 'adafag'

onButtonTap = () => { 
    this.message = "tapped";
}


  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}