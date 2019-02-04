declare var Ext: any;
import {Component} from '@angular/core';
import {CalendarService} from '../Calendar.service';
@Component({
  selector: 'calendar-monthview-component',
  templateUrl: './MonthView.html',
  styles: [``]
})
export class CalendarMonthViewComponent {

  store = Ext.create('Ext.calendar.store.Calendars', {
    autoLoad: true,
    proxy:{
      type: 'ajax',
      url: '/KitchenSink/CalendarFull'
    }
  })

  panelTitle = Ext.Date.format(new Date(),'F Y');

  constructor(private calService: CalendarService) {}

}