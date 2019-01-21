declare var Ext: any;
import {Component} from '@angular/core';

@Component({
  selector: 'needle-gauge-component',
  templateUrl: './NeedleGauge.html',
  styles: [``]
})

export class NeedleGaugeComponent {

  value:number = 30;

  updateGauges(event: any) {
    if(this.value === event.oldValue[0]){
      this.value = event.newValue;
    }
  }
}
