import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'needle-gauge-component',
  templateUrl: "./NeedleGauge.html",
  styles: [``]
})

export class NeedleGaugeComponent implements OnInit  {

  constructor() { }

  value:number = 30;

  updateGauge(event) {
    if(this.value === event.oldValue[0]){
      this.value = event.newValue;
    }
  }

  ngOnInit() {}
}
