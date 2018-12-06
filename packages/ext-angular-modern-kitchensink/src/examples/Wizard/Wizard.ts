import { Component, OnInit, ViewEncapsulation} from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'wizard-component',
  templateUrl: './Wizard.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .step: {
        font-size: 16px;
    }
    .tooltipHeader: {
        font-weight: bold;
        fon-sSize: 14px;
        font-family: courier
    }
`]
})

export class WizardComponent implements OnInit {

  constructor() { }

  step = 0;
  tapMode = 'direction';

  previous = () => {
    this.step = this.step - 1;
  }

  next = () => {
    this.step = this.step + 1;
    console.log('innnnnn next...', this.step);
  }

  onIndicatorTap = (indicator, dot) => {
    console.log('@@@@@@@22', indicator, dot);
    this.step = dot;
  }

  changeTapMode = (button, value) => {
    this.tapMode = value;
  }

  ngOnInit() {}
  
}
