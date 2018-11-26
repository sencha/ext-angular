import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'timefield-component',
  templateUrl: "./TimeField.html",
  styles: [``]
})
export class TimeFieldComponent implements OnInit  {

  constructor() { }

  disabled:boolean = false;

  formPanelRef:any;

  onReady = (param) => {
    console.log('@@@@@@@@@', param);
    this.formPanelRef = param;
  }

  toggleDisabled = () => {
    this.disabled = !this.disabled;
  }

  ngOnInit() {}

}
