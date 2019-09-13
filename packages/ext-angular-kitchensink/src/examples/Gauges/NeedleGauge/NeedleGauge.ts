declare var Ext: any;
import {Component, ChangeDetectorRef} from '@angular/core'

Ext.require([
  'Ext.ux.gauge.Gauge',
  'Ext.ux.gauge.needle.Wedge',
  'Ext.ux.gauge.needle.Diamond',
  'Ext.ux.gauge.needle.Spike',
  'Ext.ux.gauge.needle.Arrow'
])

@Component({
  selector: 'needle-gauge-component',
  templateUrl: './NeedleGauge.html',
  styles: [``]
})

export class NeedleGaugeComponent {

  value:number = 30;

  constructor(private cd: ChangeDetectorRef) {}

  updateGauges(event: any) {
    if(this.value === event.oldValue[0]){
      this.value = event.newValue;
      this.cd.detectChanges();
    }
  }
}
