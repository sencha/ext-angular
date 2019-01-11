import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CalendarService} from '../Calendar.service';

declare var Ext: any;

@Component({
  selector: 'calendar-weekview-component',
  templateUrl: './WeekView.html',
  styles: [``]
})
export class CalendarWeekViewComponent implements OnInit {


  calendarview = 'fullweek';
  visibleDays = 7;
  firstDayOfWeek = 0;
  isPhone: boolean;
  panelTitle = Ext.Date.format(new Date(), 'F Y');
  calWeekValue=new Date();

  constructor(private calService: CalendarService) { 
      console.log("Calendar panel component constructor invoked");
      this.isPhone = Ext.os.is.Phone;
      console.log("isphone: " + Ext.os.is.Phone + " isPhone: " + this.isPhone);
      console.log("isDesktop: " + Ext.os.is.Desktop);
  }

  store = Ext.create('Ext.calendar.store.Calendars', {
    autoLoad: true,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/CalendarWeek'
    }
  })

  changeCalendarView = (button, value) => { 
    var buttVal = button._value;
    console.log("button : " + button + " value: " + value);
    if (buttVal == 'fullweek') {
      this.calendarview = value;
      this.visibleDays = 7;
      this.firstDayOfWeek = 0;
    }
    else {
      this.calendarview = value;
      this.visibleDays = 5;
      this.firstDayOfWeek = 0;
    }
  }

  ngOnInit() {

  }

}