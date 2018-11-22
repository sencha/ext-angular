import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'sliderfield-component',
  templateUrl: "./SliderField.html",
  styles: [``]
})
export class SliderFieldComponent implements OnInit  {

  constructor() { }

  singleValue:number = 20;
  liveUpdateValue:number = 60;
  multipleValue:number[] = [10, 70];

  onSingleChange = (param) => {
    this.singleValue = param.value;
  }

  onMultipleChange = (param) => {
    this.multipleValue = param.value;
  }

  onLiveUpdateChange = (param) => {
    this.liveUpdateValue = param.value;
  }

  ngOnInit() {}

}
