declare var Ext: any;
import {Component} from '@angular/core'

@Component({
  selector: 'default-gauge-component',
  templateUrl: './DefaultGauge.html',
  styles: [``]
})

export class DefaultGaugeComponent {

  value:number = 40;

  updateGauges = (event) => {
    if(this.value === event.oldValue[0]){
      this.value = event.newValue;
    }
  }

}
