declare var Ext: any;
import {Component} from '@angular/core'

Ext.require([
  'Ext.data.validator.Url'
]);

@Component({
  selector: 'urlfield-component',
  templateUrl: "./URLField.html",
  styles: [``]
})
export class URLFieldComponent {

}
