declare var Ext: any;
import {Component, ChangeDetectorRef} from '@angular/core'

@Component({
  selector: 'default-gauge-component',
  templateUrl: './DefaultGauge.html',
  styles: [``]
})

export class DefaultGaugeComponent {

  value:number = 40;

  constructor(private cd: ChangeDetectorRef) {}

  updateGauges = (event) => {
    if(this.value === event.oldValue[0]){
      this.value = event.newValue;
      this.cd.detectChanges();
    }
  }

}
