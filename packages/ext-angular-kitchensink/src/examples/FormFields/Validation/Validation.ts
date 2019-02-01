declare var Ext: any;
import {Component} from '@angular/core'

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

  validators = Ext.data.validator;

  // A method validator function returns the error message when  invalid, true when valid.
  validateCapilization = (value) => {
    const words = value.split(/\s+/);

    for (let word of words) { 
        if (word.length && !word.match(/^[A-Z].*$/)) {
            return 'All words must be capitalized.';
        }
    }
    return true;
  }

}
