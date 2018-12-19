import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {data} from './store'
declare var Ext: any;

@Component({
  selector: 'treedecorations-component',
  templateUrl: './TreeDecorations.html',
  styles: [``]
})
export class TreeDecorationsComponent implements OnInit {

  constructor() { }

store = data;

  ngOnInit() {
  }


}