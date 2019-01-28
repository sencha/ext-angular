import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'element-insert-end-component',
  templateUrl: './ElementInsertEnd.html',
  styles: [``]
})

export class ElementInsertEndComponent implements OnInit {

  constructor() { }

  showInserted:boolean= false;

  insert = () => {
    this.showInserted = true;
  }

  ngOnInit() {
  }

}