import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'formpanel-component',
  templateUrl: "./FormPanel.html",
  styles: [``]
})
export class FormPanelComponent implements OnInit  {

  constructor() { }

  disabled:boolean = false;
  formRef:any;

  onReady = (ele) => {
    this.formRef = ele.ext;
  }

  toggleDisabled = () => {
    this.disabled = !this.disabled;
  }

  ngOnInit() {}

  reset = () => this.formRef.reset();

}
