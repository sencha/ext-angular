declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'passwordfield-component',
  templateUrl: "./PasswordField.html",
  styles: [``]
})
export class PasswordFieldComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
}
