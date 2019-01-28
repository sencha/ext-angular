import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'insert-between-component',
  templateUrl: './InsertBetween.html',
  styles: [``]
})

export class InsertBetweenComponent implements OnInit {

  constructor() { }

  showInserted:boolean= false;

  insert = () => {
    this.showInserted = true;
  }

  ngOnInit() {
  }

}