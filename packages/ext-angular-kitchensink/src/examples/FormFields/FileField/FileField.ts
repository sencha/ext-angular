declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'filefield-component',
  templateUrl: "./FileField.html",
  styles: [``]
})
export class FileFieldComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  uploadedFile:any;

  onChange = (event) => {
    this.uploadedFile = event.newValue;
  }
  
}
