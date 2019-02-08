declare var Ext: any;
import { Component } from '@angular/core'
import { data } from './data'

@Component({
  selector: 'comboboxfield-component',
  templateUrl: "./ComboBoxField.html",
  styles: [``]
})
export class ComboBoxFieldComponent {
  data:any = data; 
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
}
