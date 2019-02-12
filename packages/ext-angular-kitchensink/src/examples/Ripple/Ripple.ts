declare var Ext: any;
import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ripple-component',
  templateUrl: "./Ripple.html",
  styles: [`
    .ripple-target {
      position: relative;
      height: 150px;
      width: 300px;
      line-height: 150px;                       
      text-align: center;
      background-color: white;
      cursor: pointer;
      white-space: wrap;
      border: 2px dashed #D0D0D0;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class RippleComponent {

  clickHandler = (event) => {
    Ext.get(event.target).ripple(event, {})
  }

}
