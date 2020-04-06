declare var Ext: any;
import { Component } from '@angular/core'

Ext.require([
  'Ext.data.validator.CurrencyUS',
  'Ext.data.validator.Range',
  'Ext.data.validator.DateTime'
]);

@Component({
  selector: 'validation-component',
  templateUrl: "./Validation.html",
  styles: [``]
})
export class ValidationComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '1200' : null
  height = !this.isPhone ? '800' : null
  validators = Ext.data.validator;

  // A method validator function returns the error message when  invalid, true when valid.
  validateCapilization = (value) => {
      console.log('here')
    const words = value.split(/\s+/);

    for (let word of words) {
        if (word.length && !word.match(/^[A-Z].*$/)) {
            return 'All words must be capitalized.';
        }
    }
    return true;
  }

}
