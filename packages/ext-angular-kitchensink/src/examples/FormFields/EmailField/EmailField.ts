declare var Ext: any;
import {Component} from '@angular/core'

Ext.require([
  'Ext.data.validator.Email'
]);

@Component({
  selector: 'emailfield-component',
  templateUrl: "./EmailField.html",
  styles: [``]
})
export class EmailFieldComponent {

}
