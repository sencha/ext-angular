import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'validation-component',
  templateUrl: "./Validation.html",
  styles: [``]
})
export class ValidationComponent implements OnInit  {

  constructor() { }

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

  ngOnInit() {}

}

// Ext.data.validator.*