import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CalendarService} from '../Calendar.service';

declare var Ext: any;

@Component({
  selector: 'calendar-daysview-component',
  templateUrl: './DaysView.html',
  styles: [``]
})
export class CalendarDaysViewComponent implements OnInit {

    store = Ext.create('Ext.calendar.store.Calendars', {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '/KitchenSink/CalendarDays'
        }
    })

 panelTitle =  Ext.Date.format(new Date(), 'F Y');
 calendarDaysValue = new Date();

  constructor(private calService: CalendarService) { 
      console.log("Calendar panel component constructor invoked");
  }

  ngOnInit() {

  }

}