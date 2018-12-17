import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'element-insert-start-component',
  templateUrl: './ElementInsertStart.html',
  styles: [``]
})

export class ElementInsertStartComponent implements OnInit {

  constructor() { }

  showInserted:boolean= false;

  insert = () => {
    this.showInserted = true;
  }

  ngOnInit() {
  }

}