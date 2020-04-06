declare var Ext: any;
import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'wizard-component',
  templateUrl: './Wizard.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .step {
        font-size: 16px;
    }
    .tooltipHeader {
        font-weight: bold;
        fon-sSize: 14px;
        font-family: courier
    }
`]
})

export class WizardComponent {

  step:number = 0;
  tapMode = 'item';
  indicatorRef:any;

  previous = () => {
    if (this.step > 0) {
      this.step = this.step - 1;
      this.indicatorRef.setActiveIndex(this.step);
    }
  }

  next = () => {
    if (this.step < 2) {
      this.step = this.step + 1;
      this.indicatorRef.setActiveIndex(this.step);
    }
  }

  onIndicatorTap = ({indicator, index}) => {
    this.step = index;
    this.indicatorRef.setActiveIndex(this.step);
  }

  indicatorReady = (event) => {
    this.indicatorRef = event.cmp;
    this.indicatorRef.setActiveIndex(this.step);
  }

  changeTapMode = (ecent) =>  {
    //this.tapMode = value;
  }

}
