declare var Ext: any;
import {Component, ChangeDetectorRef} from '@angular/core'
import {BasicGridComponent} from '../../../grids/core_features/BasicGrid/BasicGrid';

Ext.require([
  'Ext.panel.Accordion'
])

@Component({
  selector: 'accordionlayout-component',
  templateUrl: "./AccordionLayout.html",
  styles: [``]
})
export class AccordionLayoutComponent {
  openableValue: number = 2;
  panel:any;
  gaugeValue: number = 40;

  constructor(private cd: ChangeDetectorRef) {}

  updateGauges = (event) => {
        if(this.gaugeValue === event.oldValue[0]){
            this.gaugeValue = event.newValue;
            this.cd.detectChanges();
        }
    }
}
