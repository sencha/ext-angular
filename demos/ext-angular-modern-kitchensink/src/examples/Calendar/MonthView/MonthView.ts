import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CalendarService} from '../Calendar.service';

declare var Ext: any;

@Component({
  selector: 'calendar-monthview-component',
  templateUrl: './MonthView.html',
  styles: [``]
})
export class CalendarMonthViewComponent implements OnInit {


    store = Ext.create('Ext.calendar.store.Calendars', {
        autoLoad: true,
        proxy:{
            type: 'ajax',
            url: '/KitchenSink/CalendarFull'
        }
    })

    panelTitle = Ext.Date.format(new Date(),'F Y');

  constructor(private calService: CalendarService) { 
      console.log("Calendar panel component constructor invoked");
  }

  ngOnInit() {

  }

}