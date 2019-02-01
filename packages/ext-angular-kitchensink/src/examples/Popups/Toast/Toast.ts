declare var Ext: any;
import {Component} from '@angular/core'

Ext.require([
  'Ext.Toast'
]);

@Component({
  selector: 'tast-popup-component',
  templateUrl: "./Toast.html",
  styles: [``]
})
export class ToastPopupComponent {

  clickHandler = (event) => {
    Ext.get(event.target).ripple(event, {})
  }

  onTap = () => Ext.toast('Hello World!');
}
