declare var Ext: any;
import { Component } from '@angular/core'

Ext.require([
  'Ext.data.validator.Url'
]);

@Component({
  selector: 'urlfield-component',
  templateUrl: "./URLField.html",
  styles: [``]
})
export class URLFieldComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
}
