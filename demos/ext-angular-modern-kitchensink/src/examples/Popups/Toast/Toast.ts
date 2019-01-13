import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'tast-popup-component',
  templateUrl: "./Toast.html",
  styles: [``]
})
export class ToastPopupComponent implements OnInit  {

  constructor() { }

  clickHandler = (event) => {
    Ext.get(event.target).ripple(event, {})
  }

  onTap = () => Ext.toast('Hello World!');

  ngOnInit() {}

}
