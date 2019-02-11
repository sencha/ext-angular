declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'fieldset-component',
  templateUrl: "./FieldSet.html",
  styles: [``]
})
export class FieldSetComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
}
