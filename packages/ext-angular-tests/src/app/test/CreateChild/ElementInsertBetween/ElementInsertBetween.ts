import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'element-insert-between-component',
  templateUrl: './ElementInsertBetween.html',
  styles: [``]
})

export class ElementInsertBetweenComponent implements OnInit {

  constructor() { }

  showInserted:boolean= false;

  insert = () => {
    this.showInserted = true;
  }

  ngOnInit() {
  }

}