declare var Ext: any;
import {Component} from '@angular/core';
import {CalendarService} from '../Calendar.service'
@Component({
  selector: 'calendar-panel-component',
  templateUrl: './CalendarPanel.html',
  styles: [``]
})
export class CalendarPanelComponent {

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


  titleTplVal = (start, end) => {
     //var trurnData "<div>" +formatDate(start) - formatDate(end} + "</div>";
     console.log("start : " + start);
     console.log("end : " + end);
    return "";
   }

   formatDate = function(date) {
    return Ext.util.Format.date(date, 'j M');
   } 


}