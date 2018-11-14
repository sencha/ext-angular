import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CalendarService} from '../Calendar.service'

declare var Ext: any;

@Component({
  selector: 'calendar-panel-component',
  templateUrl: './CalendarPanel.html',
  styles: [``]
})
export class CalendarPanelComponent implements OnInit {

  constructor(private calService: CalendarService) { 
      console.log("Calendar panel component constructor invoked");
  }

  store = Ext.create('Ext.calendar.store.Calendars', {
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/KitchenSink/CalendarFull'
    } 
   }); 

  titleTpl = function(data){
    console.log("titleTpl. data : " + data);
  }


  ngOnInit() {

  }


}