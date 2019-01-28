declare var Ext: any;
import { Component } from '@angular/core';
@Component({
  selector: 'single-event-component',
  templateUrl: './SingleEvent.html',
  styles: [``]
})

export class SingleEventComponent {
  count:number = 0;
  onButtonTap = () => { 
    this.count = this.count + 1;
  }
}