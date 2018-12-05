import {Component, OnInit} from '@angular/core'

declare var Ext: any;

Ext.require('Ext.layout.overflow.Scroller');

@Component({
  selector: 'scrollingtab-component',
  templateUrl: "./Scrolling.html",
  styles: [``]
})
export class ScrollingTabComponent implements OnInit  {

  constructor() { }

  ngOnInit() {}

}
