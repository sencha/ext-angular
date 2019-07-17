declare var Ext: any;
import { Component } from '@angular/core';
import {BasicGridComponent} from '../../Grid/BasicGrid/BasicGrid';

Ext.require([
  'Ext.layout.Accordion'
])

@Component({
  selector: 'accordionlayout-component',
  templateUrl: "./AccordionLayout.html",
  styles: [``]
})
export class AccordionLayoutComponent {
  panel:any;
}