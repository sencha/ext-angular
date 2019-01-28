import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'insert-end-component',
  templateUrl: './InsertEnd.html',
  styles: [``]
})

export class InsertEndComponent implements OnInit {

  constructor() { }

  showInserted:boolean= false;

  insert = () => {
    this.showInserted = true;
  }

  ngOnInit() {
  }

}