import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CalendarService} from '../Calendar.service';

declare var Ext: any;

@Component({
  selector: 'calendar-gradresizeval-component',
  templateUrl: './DragResizeValidation.html',
  styles: [``]
})
export class CalendarDragResizeValidationComponent implements OnInit {

    store = Ext.create('Ext.calendar.store.Calendars', {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '/KitchenSink/CalendarValidation'
        }
    })


    onBeforeDragStart = (view, o) => {
        console.log("In onBeforeDragStart");
        var notAllowed = ['Not draggable', 'Not draggable/resizable'];
        return !Ext.Array.contains(notAllowed, o.event.getTitle());
    }

    onBeforeResizeStart = (view, o) => {
        console.log("In onBeforeResizeStart");
        var notAllowed = ['Not resizable', 'Not draggable/resizable'];
        return !Ext.Array.contains(notAllowed, o.event.getTitle());
    }

    confirmAction = (view, o) => {
        console.log("In confirmAction");
        o.validate = o.validate.then(function () {
            return new Ext.Promise(function (resolve, reject) {
                Ext.Msg.confirm('Are you sure', 'Allow the action to go ahead?', function (btn) {
                    resolve(btn === 'yes');
                });
            });
        });
    }

  calDayValue = new Date();

  constructor(private calService: CalendarService) { 
      console.log("Calendar panel component constructor invoked");
  }

  ngOnInit() {

  }

}