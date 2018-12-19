import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'insert-start-component',
  templateUrl: './InsertStart.html',
  styles: [``]
})

export class InsertStartComponent implements OnInit {

  constructor() { }

  showInserted:boolean= false;

  insert = () => {
    console.log("oooo");
    this.showInserted = true;
  }

  ngOnInit() {
  }

}