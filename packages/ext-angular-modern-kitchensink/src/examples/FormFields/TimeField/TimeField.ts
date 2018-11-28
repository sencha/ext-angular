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

  onReady = (ele) => {
    this.formPanelRef = ele.ext;
  }

  reset = () => {
    return this.formPanelRef.reset();
  }

  toggleDisabled = () => {
    this.disabled = !this.disabled;
  }

  ngOnInit() {}

}
