import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'default-gauge-component',
  templateUrl: "./DefaultGauge.html",
  styles: [``]
})

export class DefaultGaugeComponent implements OnInit  {

  constructor() { }

  value:number = 40;

  updateGauge(event) {
    if(this.value === event.oldValue[0]){
      this.value = event.newValue;
    }
  }

  ngOnInit() {}
}
