import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'basictab-component',
  templateUrl: "./BasicTab.html",
  styles: [``]
})
export class BasicTabComponent implements OnInit  {

  constructor() { }

  onReady = (ele) => {
    console.log(ele.ext);
    console.log('###3', ele.ext.el);
  }

  ngOnInit() {}

}
