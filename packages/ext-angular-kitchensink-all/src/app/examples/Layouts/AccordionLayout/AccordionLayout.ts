declare var Ext: any;
import { Component } from '@angular/core';
import {BasicGridComponent} from '../../Grid/BasicGrid/BasicGrid';

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

  updateGauges = (event) => {
        if(this.gaugeValue === event.oldValue[0]){
            this.gaugeValue = event.newValue;
        }
    }
}
