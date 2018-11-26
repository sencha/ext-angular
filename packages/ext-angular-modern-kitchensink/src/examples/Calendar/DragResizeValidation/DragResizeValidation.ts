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


    onBeforeDragStart = (event) => {
        console.log("In onBeforeDragStart");
        var notAllowed = ['Not draggable', 'Not draggable/resizable'];
        var contains = !Ext.Array.contains(notAllowed, event.context.event.data.title);
        console.log("onBeforeDragStart. Returning : " + contains);
        return contains;
    }

    onBeforeResizeStart = (event) => {
        console.log("In onBeforeResizeStart");
        var notAllowed = ['Not resizable', 'Not draggable/resizable'];
        var contains = !Ext.Array.contains(notAllowed, event.context.event.data.title);
        console.log("onBeforeResizeStart. Returning : " + contains);
        return contains;
    }

    confirmAction = (event) => {
        console.log("In confirmAction");
        
        event.context.validate = event.context.validate.then(function () {
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