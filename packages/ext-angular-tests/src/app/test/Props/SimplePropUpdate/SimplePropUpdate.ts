import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'simple-prop-update',
  templateUrl: './SimplePropUpdate.html',
})

export class SimplePropUpdateComponent implements OnInit {

  constructor() { }

  count:number = 0;;

  increment() {
      this.count = this.count + 1;
  }

  ngOnInit() {
  }

}