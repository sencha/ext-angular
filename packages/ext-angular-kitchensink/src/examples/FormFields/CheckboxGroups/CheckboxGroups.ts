declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'checkboxgroups-component',
  templateUrl: "./CheckboxGroups.html",
  styles: [``]
})

export class CheckBoxGroupsComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '800' : null
  height = !this.isPhone ? '600' : null
}
